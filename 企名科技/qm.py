import requests
import execjs


start_url = 'https://vipapi.qimingpian.cn/DataList/productListVip'

headers = {
    'user-agent':'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.51 Safari/537.36'
}

encrypt_data = requests.get(start_url,headers=headers).json()['encrypt_data']

js = open('test.js','r').read()

resp = execjs.compile(js)
b = resp.call('decrypt_data',encrypt_data)
print(b)

