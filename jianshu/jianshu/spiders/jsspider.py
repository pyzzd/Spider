# -*- coding: utf-8 -*-
import scrapy
from scrapy.http import HtmlResponse
from ..items import JianshuItem
import re

class JsspiderSpider(scrapy.Spider):
    name = 'jsspider'
    start_urls = ['https://www.jianshu.com/p/fea1df9db8b4']
    count = 1
    id_list = []

    def parse(self, response:HtmlResponse):
        # 文章id,可从url获取
        article_id = response.url.split('/')[-1]
        # 标题
        title = response.xpath('//h1[@class="_1RuRku"]/text()').extract()

        # 内容,这里把内容的标签也保存下来
        content = response.xpath('//article[@class="_2rhmJa"]//text()').extract()
        # 作者
        author = response.xpath('//span[@class="_22gUMi"]/text()').extract()

        # 发布时间
        word_count = re.findall(r'false,"wordage":(.*?),',response.text)[0]
        # 字数和阅读量没有可供筛选的条件，并且他们前面有个span有些页面有有些页面没有，所以倒数着来取


        # 评论数,span中含有注释签<!---->，所以需要getall()才能获取到后面的数字
        comment_count = re.findall(r'false,"comments_count":(.*?),',response.text)[0]
        # 点赞数,没有点赞数的话没有任何数字，所以自己判断一下给它赋0
        like_count = re.findall('false},"likes_count":(.*?),',response.text)[0]

        # url
        origin_url = response.url
        content = ''.join(content).strip().replace(' ','').replace('\n','').replace(' ','')
        item = JianshuItem(
            article_id=article_id,
            title=title[0],
            content=content,
            author=author[0],
            word_count=word_count,
            comment_count=comment_count,
            like_count=like_count,
            origin_url=origin_url
        )
        yield item

        url = 'https://www.jianshu.com/shakespeare/notes/{}/recommendations'.format(article_id)
        self.id_list.append(article_id)
        yield scrapy.Request(url, callback=self.get_next_href)

    def get_next_href(self,response):
        print(f'第{self.count}次发起请求')
        if self.count>400:
            return
        else:
            self.count+=1

        slug = re.findall(r'"slug":"(.*?)"',response.text)[0]
        index = 1
        while slug in self.id_list:
            try:
                slug = re.findall(r'"slug":"(.*?)"', response.text)[index]
            except:
                return
            index+=1
        print('文章id:',slug)
        next_href = 'https://www.jianshu.com/p/{}'.format(slug)
        yield scrapy.Request(next_href, callback=self.parse)
