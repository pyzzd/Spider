import requests
from lxml import etree
import re
import time
from conn_database import insert


class DoubanMovie:
    def __init__(self, url):
        self.url = url
        self.headers = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/101.0.4951.54 Safari/537.36',
        }
        self.detailed_url = self.get_data()

    def get_data(self):
        data = requests.get(self.url, headers=self.headers).text
        data_ = etree.HTML(data)
        detailed_url = data_.xpath('//div[@class="pic"]/a/@href')
        return detailed_url

    def get_detailed_info(self):
        self.headers['Referer'] = 'https://movie.douban.com/top250'
        for url in self.detailed_url:
            id = re.findall('.*/(\d+)/', url)[0]
            durl = 'https://movie.douban.com/subject/{}/'.format(id)
            info = requests.get(durl, headers=self.headers).text
            content_ = etree.HTML(info)
            content = content_.xpath('//div[@id="content"]')[0]
            title = content.xpath('//h1/span[1]/text()')[0]
            score = content.xpath('//strong[@class="ll rating_num"]/text()')[0]
            try:
                brief = str(content.xpath('//span[@class="all hidden"]/text()')[0]).strip()
            except IndexError:
                brief = str(content.xpath('//span[@property="v:summary"]/text()')[0]).strip()
            director = content.xpath('//div[@id="info"]/span[1]//span[@class="attrs"]/a/text()')[0]
            actors = content.xpath('//div[@id="info"]//a[@rel="v:starring"]/text()')
            m_type = content.xpath('//span[@property="v:genre"]/text()')
            language = re.findall(r'<span class="pl">语言:</span> (.*?)<br/>', info)[0]
            release_date = content.xpath('//span[@property="v:initialReleaseDate"]/text()')
            duration = content.xpath('//span[@property="v:runtime"]/text()')[0]
            nation = re.findall(r'<span class="pl">制片国家/地区:</span> (.*?)<br/>', info)[0]
            cover = content.xpath('//a[@class="nbgnbg"]/img/@src')[0]
            watched = content.xpath('//div[@class="subject-others-interests-ft"]/a[1]/text()')[0]
            wanna_see = content.xpath('//div[@class="subject-others-interests-ft"]/a[2]/text()')[0]
            actors = '/'.join(actors)
            m_type = '/'.join(m_type)
            release_date = '/'.join(release_date)
            insert(title, score, brief, director, actors, m_type, language, release_date, duration, nation, cover,
                   watched, wanna_see, id)


if __name__ == '__main__':
    for i in range(10):
        spider = DoubanMovie('https://movie.douban.com/top250?start={}&filter='.format(i * 25))
        spider.get_detailed_info()
