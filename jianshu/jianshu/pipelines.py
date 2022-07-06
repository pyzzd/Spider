# -*- coding: utf-8 -*-

# Define your item pipelines here
#
# Don't forget to add your pipeline to the ITEM_PIPELINES setting
# See: https://doc.scrapy.org/en/latest/topics/item-pipeline.html
import MySQLdb

class JianshuPipeline(object):
    def __init__(self):
        self.conn = MySQLdb.Connect(host='127.0.0.1',port=3306,user='root',password='123',database='info',charset='utf8')
        self.cursor = self.conn.cursor()

    def close_spider(self):

        self.conn.close()

    def process_item(self, item, spider):
        article_id = item.get('article_id','')
        title = item.get('title', '')
        content = item.get('content', '')
        author = item.get('author', '')
        word_count = item.get('word_count', '')
        comment_count = item.get('comment_count', '')
        like_count = item.get('like_count', '')
        origin_url = item.get('origin_url', '')
        self.cursor.execute("insert into page (article_id,title,content,author,word_count,comment_count,like_count,origin_url)values('{}','{}','{}','{}','{}','{}','{}','{}')".format(article_id,title,content,author,word_count,comment_count,like_count,origin_url))
        self.conn.commit()
        return item
