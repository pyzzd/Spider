import requests
import execjs
import time
import re


with open('1.js','r',encoding='utf-8')as f:
    jsCode = f.read()
js = execjs.compile(jsCode)
headers = {
    'Accept': 'application/json, text/plain, */*',
    'Accept-Language': 'zh-CN,zh;q=0.9',
    'Cache-Control': 'no-cache',
    'Connection': 'keep-alive',
    'Origin': 'https://app.diandian.com',
    'Pragma': 'no-cache',
    'Referer': 'https://app.diandian.com/',
    'Sec-Fetch-Dest': 'empty',
    'Sec-Fetch-Mode': 'cors',
    'Sec-Fetch-Site': 'same-site',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36',
    'sec-ch-ua': '"Not_A Brand";v="99", "Google Chrome";v="109", "Chromium";v="109"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
}

content = requests.get("https://app.diandian.com/",headers=headers).text

s = re.findall('u:\{s:"(.*?)"',content)[0]
k = re.findall('u:\{.*?k:"(.*?)"',content)[0]
l = re.findall('u:\{.*?l:"(.*?)"',content)[0]
params = {
    'page_size': '5',
    'market_id': '1',
    'rank_type': '4',
    'brand_id': '0',
    'genre_id': '0',
    'country_id': '75',
    'device_id': '1',
    'page': '1',
    'time': int(time.time()//1000)*1000,
}
data = {
        's': s,
        'k': k,
        'l': l,
        'd': 0,
        'sort': 'dd',
        'num': 10
    }
k = js.call('get_k',params,data)
params['k'] = k
response = requests.get('https://api.diandian.com/pc/app/v1/rank', params=params, headers=headers).text
print(response)