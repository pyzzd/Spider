import requests
import execjs
with open('1.js','r',encoding='utf-8')as f:
    jsCode = f.read()
js = execjs.compile(jsCode)
headers = {
    'authority': 'service.kaogujia.com',
    'accept': 'application/json, text/plain, */*',
    'accept-language': 'zh-CN,zh;q=0.9',
    'authorization': '',   #登录cookie
    'cache-control': 'no-cache',
    # Already added when you pass json=
    # 'content-type': 'application/json',
    'origin': 'https://www.kaogujia.com',
    'pragma': 'no-cache',
    'referer': 'https://www.kaogujia.com/',
    'sec-ch-ua': '"Not?A_Brand";v="8", "Chromium";v="108", "Google Chrome";v="108"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
    'sec-fetch-dest': 'empty',
    'sec-fetch-mode': 'cors',
    'sec-fetch-site': 'same-site',
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36',
    'version_code': '3.1',
}

params = {
    'limit': '50',
    'page': '1',
    'sort_field': 'gmv',
    'sort': '0',
}

json_data = {}

response = requests.post('https://service.kaogujia.com/api/author/search', params=params, headers=headers, json=json_data).json()

data = js.call('decrypt',"/api/author/search?limit=50&page=1&sort_field=gmv&sort=0",response['data'])
print(data)
