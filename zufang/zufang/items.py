# -*- coding: utf-8 -*-

# Define here the models for your scraped items
#
# See documentation in:
# https://doc.scrapy.org/en/latest/topics/items.html

import scrapy


class ZufangItem(scrapy.Item):
    # define the fields for your item here like:
    # name = scrapy.Field()
    title = scrapy.Field()
    room_type = scrapy.Field()
    size = scrapy.Field()
    address = scrapy.Field()
    price = scrapy.Field()
    origin = scrapy.Field()
    origin_url = scrapy.Field()

