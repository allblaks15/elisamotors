"""Download candidate garage photos (mechanics at work, servicing, accident repair, hybrids...) from Wikimedia Commons.

Usage:  python scripts/fetch_garage_images.py candidates   -> saves several candidates per topic to the scratch folder given by --out
        python scripts/fetch_garage_images.py pick SLOT=N ... -> (not used; picking is done by hand by copying files)
Each saved photo is cropped to 3:2 and written as WebP (1200x800 + 600x400). Credits go to <out>/credits.json.
"""
import io, json, re, sys, time, urllib.parse, urllib.request
from pathlib import Path
from PIL import Image

API = 'https://commons.wikimedia.org/w/api.php'
UA = 'ElisaMotorsSiteBuild/1.0 (https://elisamotors.co.ke; image credits kept on /credits/)'
TOPICS = {
    'workshop': ['auto mechanic working on car', 'car repair workshop mechanic', 'mechanic car garage repair'],
    'service': ['car oil change mechanic', 'car service oil filter change', 'mechanic changing oil car'],
    'engine': ['mechanic engine repair car', 'car engine repair workshop', 'mechanic working engine bay'],
    'accident': ['car accident damage front', 'damaged car collision front end', 'car crash damage repair'],
    'bodywork': ['car body repair painting workshop', 'auto body shop spray painting car', 'panel beater car repair'],
    'hybrid': ['Toyota hybrid engine bay', 'Toyota Prius engine compartment', 'hybrid car engine room'],
    'diagnostics': ['car diagnostic scan tool OBD', 'OBD-II diagnostic car', 'automotive diagnostic computer'],
    'inspection': ['car lift workshop underside inspection', 'car on hydraulic lift garage', 'mechanic inspecting car lift'],
}
BAD = re.compile(r'(?<![a-z])(?:toy|model|diecast|drawing|sketch|map|logo|diagram|svg|museum|race|racing|rally|police|military|tank|train|aircraft|airplane|boat|ship|motorcycle|motorbike|bicycle|scooter|truck|bus)(?![a-z])', re.I)


def get(params):
    url = API + '?' + urllib.parse.urlencode({**params, 'format': 'json'})
    for attempt in range(4):
        try:
            with urllib.request.urlopen(urllib.request.Request(url, headers={'User-Agent': UA}), timeout=30) as r:
                return json.load(r)
        except Exception:
            time.sleep(2 + attempt * 3)
    raise RuntimeError(url)


def download(url):
    for attempt in range(4):
        try:
            with urllib.request.urlopen(urllib.request.Request(url, headers={'User-Agent': UA}), timeout=60) as r:
                return r.read()
        except Exception:
            time.sleep(3 + attempt * 5)


def strip(s):
    return re.sub(r'<[^>]+>', '', s or '').strip()


def save(raw, dest):
    im = Image.open(io.BytesIO(raw)).convert('RGB')
    w, h = im.size
    if w / h > 1.5:
        nw = int(h * 1.5); x = (w - nw) // 2; im = im.crop((x, 0, x + nw, h))
    else:
        nh = int(w / 1.5); y = int((h - nh) * 0.5); im = im.crop((0, y, w, y + nh))
    im.resize((1200, 800), Image.LANCZOS).save(dest.with_suffix('.webp'), 'WEBP', quality=78, method=6)
    im.resize((600, 400), Image.LANCZOS).save(dest.with_name(dest.stem + '-sm.webp'), 'WEBP', quality=74, method=6)


def main():
    out = Path(sys.argv[sys.argv.index('--out') + 1])
    out.mkdir(parents=True, exist_ok=True)
    per = 6
    credits = {}
    for topic, queries in TOPICS.items():
        seen, picked = set(), []
        for q in queries:
            res = get({'action': 'query', 'list': 'search', 'srnamespace': 6, 'srsearch': q + ' filetype:bitmap', 'srlimit': 30})
            titles = [x['title'] for x in res.get('query', {}).get('search', []) if x['title'] not in seen and re.search(r'\.(jpe?g|png)$', x['title'], re.I) and not BAD.search(x['title'])]
            seen.update(titles)
            if not titles:
                continue
            info = get({'action': 'query', 'titles': '|'.join(titles[:20]), 'prop': 'imageinfo', 'iiprop': 'url|size|extmetadata', 'iiurlwidth': 1280})
            for p in info.get('query', {}).get('pages', {}).values():
                ii = (p.get('imageinfo') or [None])[0]
                if not ii or ii['width'] < 1000 or ii['width'] <= ii['height'] * 1.1 or len(picked) >= per:
                    continue
                raw = download(ii.get('thumburl') or ii['url'])
                if not raw:
                    continue
                n = len(picked) + 1
                try:
                    save(raw, out / f'{topic}-{n}.jpg')
                except Exception:
                    continue
                meta = ii.get('extmetadata', {})
                picked.append({'file': f'{topic}-{n}.webp', 'title': p['title'].replace('File:', ''), 'artist': strip(meta.get('Artist', {}).get('value'))[:120] or 'Unknown',
                               'license': strip(meta.get('LicenseShortName', {}).get('value')) or 'See source', 'source': ii.get('descriptionurl')})
                time.sleep(0.3)
            if len(picked) >= per:
                break
        credits[topic] = picked
        print(topic, len(picked))
        (out / 'credits.json').write_text(json.dumps(credits, indent=1, ensure_ascii=False), 'utf8')


if __name__ == '__main__':
    main()
