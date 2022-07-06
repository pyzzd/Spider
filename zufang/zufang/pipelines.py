# -*- coding: utf-8 -*-

# Define your item pipelines here
#
# Don't forget to add your pipeline to the ITEM_PIPELINES setting
# See: https://doc.scrapy.org/en/latest/topics/item-pipeline.html
import MySQLdb

class ZufangPipeline(object):
    def __init__(self):
        self.conn = MySQLdb.Connect(host='127.0.0.1',port=3306,user='root',password='123',database='info',charset='utf8')
        self.cursor = self.conn.cursor()

    def close_spider(self):

        self.conn.close()

    def process_item(self, item, spider):
        title = item.get('title', '')
        room_type = item.get('room_type', '')
        size = item.get('size', '')
        address = item.get('address', '')
        price = item.get('price', '')
        origin = item.get('origin', '')
        origin_url = item.get('origin_url', '')
        self.cursor.execute("insert into home (title,room_type,size,address,price,origin,origin_url)values('{}','{}','{}','{}','{}','{}','{}')".format(title,room_type,size,address,price,origin,origin_url))
        self.conn.commit()
        return item