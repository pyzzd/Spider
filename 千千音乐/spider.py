import requests
import time
import hashlib

secret = "0b50b02fd0d73a9c4c8c3a781c30845f"
e = {"TSID":"T10057361848","appid":'16073360'}
t = str(int(time.time()*1000))
e['timestamp'] = t
n = list(e.keys())
r = ''
for i in range(len(n)):
    s = n[i]
    r += (("" if 0==i else "&") + s + "=" + e[s])
sign = hashlib.md5((r+secret).encode()).hexdigest()
print(sign)

url = 'https://music.91q.com/v1/song/tracklink?sign={}&appid={}&TSID={}&timestamp={}'.format(sign,e['appid'],e['TSID'],e['timestamp'])

res = requests.get(url).json()
print(res)