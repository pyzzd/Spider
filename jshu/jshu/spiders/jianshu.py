# -*- coding: utf-8 -*-
import scrapy


class JianshuSpider(scrapy.Spider):
    name = 'jianshu'
    allowed_domains = ['jianshu.com']
    start_urls = ['http://jianshu.com/']

    def parse(self, response):
        pass
