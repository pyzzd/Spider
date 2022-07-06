import time
import matplotlib.pyplot as plt
import requests
from lxml import etree
import pandas as pd
import MySQLdb
plt.rcParams["font.sans-serif"] = ["SimHei"]
plt.rcParams["axes.unicode_minus"] = False


class Spider:
    def __init__(self):
        self.conn = MySQLdb.Connect(host='127.0.0.1', port=3306, user='root', password='123', database='info',charset='utf8')
        self.cursor = self.conn.cursor()
        self.items()
        for i in range(20):
            self.url = 'https://sou.zhaopin.com/?jl=719&kw=%E6%95%B0%E6%8D%AE%E5%88%86%E6%9E%90%E5%B8%88&p={}'.format(i+1)
            print(self.url)
            self.prase()
            time.sleep(2)
        self.clean()

    def items(self):
        self.title_list = []
        self.salary_list = []
        self.address_list = []
        self.experience_list = []
        self.education_list = []
        self.compname_list = []

    def res(self):
        self.r = requests.get(self.url).text
        self.res_ = etree.HTML(self.r)



    def prase(self):
        self.res()
        self.title_list += self.res_.xpath('//div[@class="iteminfo__line1__jobname"]/span/@title')
        self.salary_list += self.res_.xpath('//p[@class="iteminfo__line2__jobdesc__salary"]/text()')
        self.address_list += self.res_.xpath('//ul[@class="iteminfo__line2__jobdesc__demand"]/li[1]/text()')
        self.experience_list += self.res_.xpath('//ul[@class="iteminfo__line2__jobdesc__demand"]/li[2]/text()')
        self.education_list += self.res_.xpath('//ul[@class="iteminfo__line2__jobdesc__demand"]/li[3]/text()')
        self.compname_list += self.res_.xpath('//div[@class="iteminfo__line1__compname"]/span/@title')


    def clean(self):
        for s in range(len(self.salary_list)):
            self.salary_list[s] = str(self.salary_list[s]).strip().replace(' ','')


    def load_pd(self):
        self.info = pd.DataFrame({'title':self.title_list,'salary':self.salary_list,'address':self.address_list,'experience':self.experience_list,'education':self.education_list,'compname':self.compname_list})
        self.info.to_csv('zhilian.csv')
        self.index()

    def save_sql(self):
        for title,salary,address,experience,education,compname in zip(self.title_list,self.salary_list,self.address_list,self.experience_list,self.education_list,self.compname_list):
            self.cursor.execute("insert into zhilian (title,salary,address,experience,education,compname)values('{}','{}','{}','{}','{}','{}')".format(title,salary,address,experience,education,compname))
            self.conn.commit()
        self.conn.close()

    def index(self):
        #数据分析师岗位薪资主要分布于哪些区间
        self.sala_dict = {}
        for s in self.info['salary']:
            if s in self.sala_dict.keys():
                self.sala_dict[s]+=1
            else:
                self.sala_dict[s]=1

        #数据分析师岗位学历需求
        self.edu_dict = {}
        for s in self.info['education']:
            if s in self.edu_dict.keys():
                self.edu_dict[s]+=1
            else:
                self.edu_dict[s]=1

        #所需工作经验区间
        self.ex_dict = {}
        for s in self.info['experience']:
            if s in self.ex_dict.keys():
                self.ex_dict[s] += 1
            else:
                self.ex_dict[s] = 1
        print(self.ex_dict)
        print(self.edu_dict)
        print(self.sala_dict)

    def draw_sala(self):
        plt.figure(figsize=(20, 8), dpi=80)
        sala_x = list(self.sala_dict.keys())
        sala_y = list(self.sala_dict.values())
        plt.xticks(range(len(sala_x)), sala_x, rotation=60)
        for i in range(len(sala_x)):
            plt.bar(sala_x[i], sala_y[i])

        plt.xlabel('薪资区间')
        plt.ylabel('岗位数量')
        plt.title('岗位薪资区间分布')
        plt.savefig('sala.png')
        plt.show()

    def draw_edu(self):
        edu_x = list(self.edu_dict.keys())
        edu_y = list(self.edu_dict.values())
        for i in range(len(edu_x)):
            plt.bar(edu_x[i], edu_y[i])
        plt.xlabel('学历')
        plt.ylabel('岗位数量')
        plt.title('岗位学历要求分布')
        plt.savefig('edu.png')
        plt.show()

    def draw_ex(self):
        ex_x = list(self.ex_dict.keys())
        ex_y = list(self.ex_dict.values())
        for i in range(len(ex_x)):
            plt.bar(ex_x[i], ex_y[i])
        plt.xlabel('工作经验')
        plt.ylabel('岗位数量')
        plt.title('岗位工作经验要求分布')
        plt.savefig('ex.png')
        plt.show()

    def draw(self):
        self.draw_sala()
        self.draw_ex()
        self.draw_edu()


if __name__ == '__main__':
    spider = Spider()
    spider.load_pd()
    spider.save_sql()
    spider.draw()