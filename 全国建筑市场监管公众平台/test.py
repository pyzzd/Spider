import requests
import execjs

session = requests.Session()

url = 'http://jzsc.mohurd.gov.cn/api/webApi/dataservice/query/comp/list?pg=0&pgsz=15&total=0'
headers = {
'Cookie':'Hm_lvt_b1b4b9ea61b6f1627192160766a9c55c=1648977928; Hm_lpvt_b1b4b9ea61b6f1627192160766a9c55c=1648987958',
'Host':'jzsc.mohurd.gov.cn',
'Proxy-Connection':'keep-alive',
'Referer':'http://jzsc.mohurd.gov.cn/data/company',
'User-Agent':'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.84 Safari/537.36',
}
res = session.get('http://jzsc.mohurd.gov.cn/data/company',headers=headers)
data = session.get(url,headers=headers).text
print(data)

f = open('test.js','r').read()
js = execjs.compile(f).call('h',data)
print(js)