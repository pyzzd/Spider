#库存监控
import time
from send_mail import send_mail
import requests
from lxml import etree
import os
import json

def res_index():
    url ='https://www.cigars-of-cuba.com/cuban-brands'
    try:
        index = requests.get(url,headers=headers).text
    except:
        time.sleep(0.5)
        index = requests.get(url, headers=headers).text
    index_ = etree.HTML(index)
    type_url_list = index_.xpath('//a[@class="item brand-item"]/@href')
    return type_url_list

def res_info(url):
    try:
        data = requests.get(url,headers=headers).text
    except:
        time.sleep(0.5)
        data = requests.get(url, headers=headers).text
    data_ = etree.HTML(data)

    product_list = data_.xpath('//span[@class="subtitle"]/text()')
    status_list = data_.xpath('//div[@class="colonne2"]//article[1]//div[@class="stock-availability"]/span/text()')
    link_list = data_.xpath('//div[@class="colonne1"]/a/@href')
    save(product_list,status_list,link_list)

def save(product_list,status_list,link_list):

    global text

    for product,status,link in zip(product_list,status_list,link_list):
        product = str(product).strip().replace("'","").replace('"','')
        if link in dict.keys():
            if dict[link][0] == status:
                print(product,'库存未变')
            else:
                if dict[link][0] == 'Out of stock':
                    text += (product + '上货了\n链接:' + link)
                dict[link][0] = status
        else:
            dict[link]=[status,product]
            print('添加信息')
    if text !='':
        email(text)
def email(text):
    print('发送邮件')
    msg_to_list = ['414166523@qq.com']
    for msg_to in msg_to_list:
        # send_mail(text,msg_to)
        time.sleep(0.1)

def main():
    type_url_list = res_index()
    for url in type_url_list:
        res_info(url)


if __name__ == '__main__':
    dict = {}
    headers = {
        'User-Agent':'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36'
    }
    if os.path.exists('spider03.txt'):
        with open('spider03.txt', 'r', encoding='utf-8') as f:
            dict = f.read().replace("'",'"')
            dict = json.loads(dict)
    else:
        f = open('spider03.txt', 'w', encoding='utf-8')
        f.close()
    while True:
        print('监控中================')
        text = ''
        try:
            main()

            with open('spider03.txt', 'w', encoding='utf-8') as f:
                f.write(str(dict))
        except Exception as e:
            print(e)
            print('请求异常')
            time.sleep(20)

        time.sleep(15)
