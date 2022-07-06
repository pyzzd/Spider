import requests
import execjs
import re

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.51 Safari/537.36',
    'Cookie': 'BAIDUID=26115F1F29BDB5435CBAFDDBAE668A0C:FG=1;'
}

session = requests.Session()
session.headers = headers

def get_token():
    url = 'https://fanyi.baidu.com/'
    content = session.get(url).text
    token = re.findall(r"token: '(.*?)',",content)[0]
    return token

def get_sign(key):
    f = open('test.js','r')
    js = f.read()
    exec = execjs.compile(js)
    sign = exec.call('e',key)
    return sign

def res(key):
    start_url = 'https://fanyi.baidu.com/v2transapi?from=en&to=zh'
    data = {
    'from':'en',
    'to':'zh',
    'query':key,
    'transtype':'realtime',
    'simple_means_flag':'3',
    'sign':get_sign(key),

    # 'token':get_token(),
        'token':'ed1277d032469234909946cd437ba86b',
    'domain':'common',
    }

    info = session.post(start_url,data=data).json()
    print(info)

if __name__ == '__main__':
    key = input("输入要翻译的单词")
    res(key)


