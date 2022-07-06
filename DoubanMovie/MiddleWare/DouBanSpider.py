import requests
from lxml import etree
import re
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
import selenium.webdriver.support.expected_conditions as EC
import selenium.webdriver.support.ui as ui

class Douban:
    def __init__(self,Mname):
        self.headers = {
            'User-Agent':'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/101.0.4951.54 Safari/537.36',
            }
        option = Options()
        option.add_experimental_option('excludeSwitches', ['enable-automation'])  # webdriver防检测
        option.add_argument('--headless')
        option.add_argument('--no-sandbox')
        option.add_argument('--disable-gpu')
        option.add_argument('--disable-dev-shm-usage')
        option.add_argument(
            "user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36")
        option.add_experimental_option("prefs", {"profile.managed_default_content_settings.images": 2})
        self.driver = webdriver.Chrome(options=option)
        self.name = Mname
        self.detailed_url = self.get_data()

    def get_data(self):
        '''
        :return:
        '''
        url ='https://search.douban.com/movie/subject_search?search_text={}&cat=1002'.format(self.name)

        self.driver.get(url)
        ui.WebDriverWait(self.driver, 3).until(EC.visibility_of_element_located((By.XPATH, '//div[@class="item-root"]')))
        data = self.driver.page_source
        detailed_url = re.findall(r'<div class="sc-bZQynM.*?<a href="(.*?)"',data)[0]

        return detailed_url


    def get_detailed_info(self):
        self.headers = {
            'Proxy-Connection':'keep-alive',
            'Referer':'https://movie.douban.com/top250',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/101.0.4951.54Safari/537.36',
        }

        id = re.findall('.*/(\d+)/', self.detailed_url)[0]

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
        return title,score,brief,director,actors,m_type,language,release_date,duration,nation,cover,watched,wanna_see,id


