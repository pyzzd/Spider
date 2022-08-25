import re
import time
import openpyxl
import requests
from lxml import etree
import execjs
import hashlib

def hash(value: str, _mode: str) -> str:
    _hash = eval(f"hashlib.{_mode}(value.encode('utf-8')).hexdigest()")
    return _hash


def get_cookie(item: dict) -> str:
    ct = item.get('ct', None)
    bts = item.get('bts', None)
    chars = item.get('chars', None)
    hash_mode = item.get('ha', None)
    chars_length = len(item.get('chars', None))
    for i in range(chars_length):
        for j in range(chars_length):
            value = bts[0] + chars[i] + chars[j] + bts[1]
            if hash(value, hash_mode) == ct:
                return '__jsl_clearance=' + value
'http://www.chinabidding.cc/search/index.html?page=2&keyword=%E5%9C%B0%E7%90%86%20%E4%B8%9A%E5%8A%A1%E7%B3%BB%E7%BB%9F&h_lx=11&h_province=19&vague=1&date=730&search_field=0'
'http://www.chinabidding.cc/search/index.html?page=3&keyword=%E5%9C%B0%E7%90%86%20%E4%B8%9A%E5%8A%A1%E7%B3%BB%E7%BB%9F&h_lx=11&h_province=19&vague=1&date=730&search_field=0'
def load_url():
    global url_list,kt
    kind_list = ['自然', '气象', '地理', '水利', '地质']
    type_list = ['基础软件', '服务器', '存储', '业务系统', '基础软件服务', '数据库']
    for kind in kind_list:
        for type in type_list:
            for i in range(5):
                kt.append(kind + type)
                url_list.append('http://www.chinabidding.cc/search/index.html?page={}&keyword={}+{}&h_lx=11&h_province=19&vague=1&date=730&search_field=0'.format(i+1,kind, type))


def update_headers(url):
    res = requests.get(url, headers=headers)
    if res.status_code == 200:
        return True
    __jsluid_h = '__jsluid_h=' + res.cookies['__jsluid_h']
    js1_text = re.findall('cookie=(.*?);location', res.text)[0]
    __jsl_clearance = str(execjs.eval(js1_text)).replace('max-age=3600;path=/', '')
    headers['Cookie'] = __jsluid_h + ';' + __jsl_clearance
    res1 = requests.get(url, headers=headers).text
    dict_text = re.findall(r';go\((.*?)\)', res1)[0]
    value = get_cookie(eval(dict_text))
    headers['Cookie'] = __jsluid_h + ';' + value + ';'


def get_list(url):
    update_headers(url)
    data = requests.get(url, headers=headers).text
    data_ = etree.HTML(data)
    title_list = re.findall('title="">(.*?)</a><b', data)
    ptime_list = data_.xpath('//ul[@class="ul_list"]/li/b/text()')
    href_list = data_.xpath('//ul[@class="ul_list"]/li/a/@href')
    re_bq = re.compile('<.*?>')
    with open('info.txt', 'a', encoding='utf-8') as f:
        for title, ptime, href in zip(title_list, ptime_list, href_list):
            title = re_bq.sub('', title)
            f.write(title + '   ' + ptime + '   ' + href +'   '+ _+'\n')

if __name__ == '__main__':
    url_list = []
    kt = []
    load_url()
    headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36',
        'Cookie': ''
    }
    for url,_ in zip(url_list,kt):
        print(url)
        get_list(url)