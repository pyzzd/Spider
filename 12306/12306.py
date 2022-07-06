import requests

url = 'http://scxk.nmpa.gov.cn:81/xk/itownet/portalAction.do?method=getXkzsList'

data = {
'on':'true',
'page':'1',
'pageSize':'15',
'productName':'',
'conditionType':'1',
'applyname':'',
'applysn':'',
}


print(requests.post(url,data=data).text)