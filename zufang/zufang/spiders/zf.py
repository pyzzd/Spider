# -*- coding: utf-8 -*-
import scrapy
from ..items import ZufangItem
import os



class ZfSpider(scrapy.Spider):
    name = 'zf'
    start_urls = ['https://wh.58.com/chuzu/?PGTID=0d3090a7-0009-ee79-b64d-2de102e57762&ClickID=2']

    def parse(self, response):
        title_list = response.xpath('//div[@class="des"]/h2/a/text()').extract()
        room_list = response.xpath('//div[@class="des"]/p[@class="room"]/text()').extract()
        address_list = response.xpath('//div[@class="des"]/p[@class="infor"]/a[2]/text()').extract()
        price_list = response.xpath('//div[@class="money"]/b/text()').extract()
        origin_list = response.xpath('//span[@class="jjr_par_dp"]/@title').extract()
        origin_url_list = response.xpath('//div[@class="des"]/h2/a/@href').extract()

        for title,room,address,price,origin,origin_url in zip(title_list,room_list,address_list,price_list,origin_list,origin_url_list):
            room = room.split()
            item = ZufangItem(
                title=str(title).strip().replace(' ',''),
                room_type=room[0],
                size=room[-1],
                address=address,
                price=price,
                origin=origin,
                origin_url=origin_url,
            )
            yield item
        for i in range(2, 10):
            next_url = 'https://wh.58.com/chuzu/pn{}'.format(i)
            yield scrapy.Request(next_url, callback=self.parse)
