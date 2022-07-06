#库存监控
import time
from send_mail import send_mail
import requests
from lxml import  etree
import csv
import pandas as pd
import os
import json

def res(url):
    try:
        info = requests.get(url,headers=headers).text
    except:
        info = requests.get(url, headers=headers).text
    info_ = etree.HTML(info)
    product_list = info_.xpath('//strong[@class="product name product-item-name"]/a/text()')
    status_list = info_.xpath('//div[@class="product actions product-item-actions"]/div//span/text()')
    link_list = info_.xpath('//strong[@class="product name product-item-name"]/a/@href')
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
        send_mail(text,msg_to)

def main():

    for i in range(5):
        url = 'https://selected-cigars.com/cn/cigars?___store=cn&p={}&product_list_limit=60'.format(i+1)
        res(url)
        time.sleep(1.5)
    print('等待中==================')

if __name__ == '__main__':
    dict = {}
    headers = {
        'User-Agent':'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36'
    }
    if os.path.exists('spider.txt'):
        with open('spider.txt', 'r', encoding='utf-8') as f:
            dict = f.read().replace("'",'"')
            print(dict)
            dict = json.loads(dict)
    else:
        f = open('spider.txt', 'w', encoding='utf-8')
        f.close()
    while True:
        print('监控中================')
        text = ''
        try:
            main()
            with open('spider.txt','w',encoding='utf-8')as f:
                f.write(str(dict))
        except:
            time.sleep(5)
        time.sleep(10)



