import execjs
import requests
import re
import urllib3
session = requests.Session()
urllib3.disable_warnings()

def loadJsCode():
    with open('bs64.js','r',encoding='utf-8')as f:
        jsCode = f.read()
    js = execjs.compile(jsCode)
    return js

def getContent(url):
    content = session.get(url,headers=base_headers,verify=False).text
    return content

def getJsUrl():
    content = getContent(base_url)
    info = re.findall('<script type="text/javascript" src="resource/js/(.*?)\.min\.js\?t=(.*?)">', content)[0]
    data_key_url = 'https://www.aqistudy.cn/historydata/resource/js/{}.min.js?t={}'.format(info[0], info[1])
    return data_key_url

def getPara(data_key_url):
    js_content = getContent(data_key_url)
    dct = {}
    para = re.findall("return p\}\((.*)\)\)", js_content)[0]
    if 'object' in js_content:
        dct['DataName'] = para
    else:
        dct['NoDataName'] = para
    return dct

def getData(url,data):
    encryptData = requests.post('https://www.aqistudy.cn/historydata/api/historyapi.php', data=data,headers=base_headers, verify=False).text
    return encryptData

def parseDict(kv):
    aes_map = {}
    for value in kv:
        aes_map[value[0]] = value[1]
    return aes_map
def parseDataName(para):
    print('Mode 1')

    p0 =  para.split("}}'")[0]+'}}'+"'"
    p = para.split("}}'")[1].split(',')
    info = js.eval("parse({},{},{},{},{},{})".format(p0,p[1],p[2],p[3],p[4],p[5]))
    key_value = re.findall('const\s(.*?)="(.*?)";', info)
    key_iv = re.findall('data=DES\.decrypt\(data,(.*?),(.*?)\)',info)[0]
    key_iv2 = re.findall('data=AES\.decrypt\(data,(.*?),(.*?)\)',info)[0]
    appid = re.findall(r"return function.*?='(.*?)';", info, re.S)[0]
    data_name = re.findall('data:\{(.*?):', info)[0]
    aes_map = parseDict(key_value)
    data = js.call('encrypt1', appid, "GETMONTHDATA", 'WEB', '南京')
    form_data = {
        data_name: data
    }
    encryptData = getData('https://www.aqistudy.cn/historydata/api/historyapi.php',form_data)
    decryptData = js.call('dataJson',encryptData,aes_map[key_iv[0]],aes_map[key_iv[1]],aes_map[key_iv2[0]],aes_map[key_iv2[1]])
    print(decryptData)

def parseNoDataName(para):
    print('Mode 2')
    p = para.split(',')
    info = js.eval("parse({},{},{},{},{},{})".format(p[0],p[1],p[2],p[3],p[4],p[5]))
    eval_code = re.findall("eval\((.*)\)",info)[0]
    fin_code1 = js.eval(eval_code)
    key_value = re.findall('const\s+(.*?)\s= "(.*?)";',fin_code1)
    appid = re.findall(r"return function.*?= '(.*?)';",fin_code1,re.S)[0]
    key_iv = re.findall('data = DES\.decrypt\(data, (.*?), (.*?)\)',fin_code1)[0]
    key_iv2 = re.findall('data = AES\.decrypt\(data, (.*?), (.*?)\)',fin_code1)[0]
    data_name = re.findall('data: \{ (.*?):', fin_code1)[0]
    aes_map = parseDict(key_value)
    try:
        code_aes_key_name = re.findall('return function.*?= DES.encrypt\(.*?,(.*?),(.*?)\)',fin_code1,re.S)[0]
        flag = 1
    except:
        code_aes_key_name = re.findall('return function.*?= AES.encrypt\(.*?,(.*?),(.*?)\)', fin_code1, re.S)[0]
        flag = 2
    aes_key = aes_map[code_aes_key_name[0].strip()]
    aes_iv = aes_map[code_aes_key_name[1].strip()]
    data = js.call('encrypt',appid,"GETMONTHDATA",'WEB','南京',aes_key,aes_iv) if flag == 1 else js.call('encrypt2', appid, "GETMONTHDATA", 'WEB', '南京', aes_key, aes_iv)
    form_data = {
        data_name:data
    }
    encryptData = getData('https://www.aqistudy.cn/historydata/api/historyapi.php',form_data)
    decryptData = js.call('dataJson',encryptData,aes_map[key_iv[0]],aes_map[key_iv[1]],aes_map[key_iv2[0]],aes_map[key_iv2[1]])
    print(decryptData)

def run():
    data_key_url = getJsUrl()
    print(data_key_url)
    base_headers['referer'] = base_url
    dct = getPara(data_key_url)
    if dct.get('DataName') != None:
        parseDataName(dct['DataName'])
    else:
        parseNoDataName(dct['NoDataName'])

if __name__ == '__main__':
    base_url = 'https://www.aqistudy.cn/historydata/monthdata.php?city=%E5%8D%97%E4%BA%AC'
    base_headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36',
    }
    js = loadJsCode()
    run()