import execjs
import requests

url = "https://store.steampowered.com/login/getrsakey/"
data = {
    'donotcache':1646231518883,
    'username':'15949789'
}
pubkey = requests.post(url,data=data).json()
q = pubkey['publickey_mod']
w = pubkey['publickey_exp']
e = 'qqq123456'
print(q,w,e)
resq = execjs.compile(open('pwd.js',encoding='utf-8').read())
print(resq.call("qwe",q,w,e))