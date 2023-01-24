import json
import time
import requests
import execjs
import base64

with open('2.js', 'r', encoding='utf-8') as f:
    jsCode = f.read()
js = execjs.compile(jsCode)

url = 'https://web-001.cloud.servicewechat.com/wxa-qbase/jsoperatewxdata'

data = {"appid":"wxb5b2c81edbd4cf69","data":{"qbase_api_name":"tcbapi_get_service_info","qbase_req":"{\"client_random\":\"0.5346163107704802_1674566802966\",\"system\":\"\"}","qbase_options":{"identityless":True,"resourceAppid":"wxb5b2c81edbd4cf69","resourceEnv":"ibox-3gldlr1u1a8322d4","config":{"database":{"realtime":{"maxReconnect":5,"reconnectInterval":5000,"totalConnectionTimeout":None}}},"appid":"wxb5b2c81edbd4cf69","env":"ibox-3gldlr1u1a8322d4"},"qbase_meta":{"session_id":"1674566802975","sdk_version":"wx-web-sdk/WEBDOMAIN_1.0.0 (1655460325000)","filter_user_info":False},"cli_req_id":"1674566803218_0.1846807230242733"}}
headers = {
    'Host': 'web-001.cloud.servicewechat.com',
    'Origin': 'https://www.ibox.art',
    'Referer': 'https://www.ibox.art/',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36',
}
res = requests.post(url, json=data, headers=headers).json()

res_data = json.loads(res['data'])
token = res_data['token']
i_timestamp = res_data['timestamp']
key = res_data['key']
page = '1'  #页码
data = js.call('get_data', key,page)

E = {
    "X-WX-ENCRYPTION-VERSION": '2',
    "X-WX-ENCRYPTION-TIMESTAMP": str(int(time.time() * 1000)),
    "X-WX-COMPRESSION": "snappy",
    "X-WX-USER-TIMEOUT": str(int(time.time() * 1000)),
    "X-WX-LIB-BUILD-TS": '1655460325335',
    "X-WX-RESPONSE-CONTENT-ACCEPT-ENCODING": "PB, JSON",
    "Content-Type": "application/octet-stream",
    "X-WX-REQUEST-CONTENT-ENCODING": "JSON"
}

headers.update(E)

index_url = 'https://web-001.cloud.servicewechat.com/wxa-qbase/container_service?token={}'.format(token)
res = requests.post(index_url, headers=headers, data=data).content

data = js.eval('decrypt({},"{}")'.format(str(base64.b64encode(res)).strip('b'), key))
print(data)
