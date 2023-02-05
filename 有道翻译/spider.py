import requests
import time
import hashlib
import execjs

with open('1.js','r',encoding='utf-8')as f:
    jsCode = f.read()
js = execjs.compile(jsCode)
timastamp = str(int(time.time()*1000))
sign_text = "client=fanyideskweb&mysticTime={}&product=webfanyi&key=fsdsogkndfokasodnaso".format(timastamp)


headers = {
    'Accept': 'application/json, text/plain, */*',
    'Accept-Language': 'zh-CN,zh;q=0.9',
    'Cache-Control': 'no-cache',
    'Connection': 'keep-alive',
    'Origin': 'https://fanyi.youdao.com',
    'Pragma': 'no-cache',
    'Referer': 'https://fanyi.youdao.com/',
    'Sec-Fetch-Dest': 'empty',
    'Sec-Fetch-Mode': 'cors',
    'Sec-Fetch-Site': 'same-site',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36',
    'sec-ch-ua': '"Not_A Brand";v="99", "Google Chrome";v="109", "Chromium";v="109"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
    'cookie':'OUTFOX_SEARCH_USER_ID_NCOO=1697782891.6805668; OUTFOX_SEARCH_USER_ID=444444444@127.0.0.1'
}

data = {
    'i': 'angel',
    'from': 'auto',
    'to': '',
    'dictResult': 'true',
    'keyid': 'webfanyi',
    'sign': hashlib.md5(sign_text.encode()).hexdigest(),
    'client': 'fanyideskweb',
    'product': 'webfanyi',
    'appVersion': '1.0.0',
    'vendor': 'web',
    'pointParam': 'client,mysticTime,product',
    'mysticTime':timastamp,
    'keyfrom': 'fanyi.web',
}

response = requests.post('https://dict.youdao.com/webtranslate', headers=headers, data=data)
data = js.call('get_data',response.text)
print(data)
#"ydsecret://query/key/B*RGygVywfNBwpmBaZg*WT7SIOUP2T0C9WHMZN39j^DAdaZhAnxvGcCY6VYFwnHl"
#"ydsecret://query/iv/C@lZe2YzHtZ2CYgaXKSVfsb7Y4QWHjITPPZ0nQp87fBeJ!Iv6v^6fvi2WN@bYpJ4"