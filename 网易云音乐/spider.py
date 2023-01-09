import requests
import execjs
with open('1.js','r',encoding='utf-8')as f:
    jsCode = f.read()
js = execjs.compile(jsCode)

headers = {
    'authority': 'music.163.com',
    'accept': '*/*',
    'accept-language': 'zh-CN,zh;q=0.9',
    'cache-control': 'no-cache',
    'origin': 'https://music.163.com',
    'pragma': 'no-cache',
    'referer': 'https://music.163.com/',
    'sec-ch-ua': '"Not?A_Brand";v="8", "Chromium";v="108", "Google Chrome";v="108"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
    'sec-fetch-dest': 'empty',
    'sec-fetch-mode': 'cors',
    'sec-fetch-site': 'same-origin',
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36',
}

params = {
    'csrf_token': '',
}
data_ = js.call('get_data',"[2012390001]")  #歌曲id

data = {
    'params': data_['params'],
    'encSecKey': data_['encSecKey'],
}
#
response = requests.post(
    'https://music.163.com/weapi/song/enhance/player/url/v1',
    params=params,
    headers=headers,
    data=data,
)
print(response.text)