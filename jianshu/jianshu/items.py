# -*- coding: utf-8 -*-

# Define here the models for your scraped items
#
# See documentation in:
# https://doc.scrapy.org/en/latest/topics/items.html

import scrapy


class JianshuItem(scrapy.Item):
    # define the fields for your item here like:
    article_id = scrapy.Field()
    title = scrapy.Field()
    content = scrapy.Field()
    author = scrapy.Field()
    word_count = scrapy.Field()
    comment_count = scrapy.Field()
    like_count = scrapy.Field()
    origin_url = scrapy.Field()