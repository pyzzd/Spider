import re
import jieba
import MySQLdb
import codecs
import matplotlib.pyplot as plt
from wordcloud import WordCloud
plt.rcParams["font.sans-serif"] = ["SimHei"]
plt.rcParams["axes.unicode_minus"] = False

class Visuali:
    def __init__(self):
        self.conn = MySQLdb.Connect(host='127.0.0.1', port=3306, user='root', password='123', database='info',charset='utf8')
        self.cursor = self.conn.cursor()
        self.cursor.execute('select * from home')
        self.data = self.cursor.fetchall()
        self.conn.commit()
        self.dict = {}
        self.dict_ = {}


    def handle(self):
        self.dict['30平米以下'] =0
        self.dict['30-60平米'] = 0
        self.dict['60-90平米'] = 0
        self.dict['90-120平米'] = 0
        self.dict['120平米以上'] = 0
        for d in self.data:
            if float(d[2].replace('㎡','')) <=30:
                self.dict['30平米以下'] +=1
            elif float(d[2].replace('㎡','')) <=60:
                self.dict['30-60平米'] += 1
            elif float(d[2].replace('㎡','')) <=90:
                self.dict['60-90平米'] += 1
            elif float(d[2].replace('㎡','')) <=120:
                self.dict['90-120平米'] += 1
            else:
                self.dict['120平米以上'] += 1

    def draw(self):
        self.handle()
        xtick = list(self.dict.keys())
        ytick = list(self.dict.values())
        for i in range(len(xtick)):
            plt.bar(xtick[i], ytick[i])
        plt.xlabel('房屋大小')
        plt.ylabel('房屋数量')
        plt.title('不同大小区间出租的房屋数量')
        plt.savefig('home.png')
        plt.show()

    def handle1(self):
        self.dict_ = {}
        self.dict_['900元以下'] =0
        self.dict_['900-1400元'] = 0
        self.dict_['1400-1900元'] = 0
        self.dict_['1900-2400元'] = 0
        self.dict_['2400元以上'] = 0
        for d in self.data:
            if int(d[4]) <=900:
                self.dict_['900元以下'] +=1
            elif int(d[4]) <=1400:
                self.dict_['900-1400元'] += 1
            elif int(d[4]) <=1900:
                self.dict_['1400-1900元'] += 1
            elif int(d[4]) <=2400:
                self.dict_['1900-2400元'] += 1
            else:
                self.dict_['2400元以上'] += 1

    def draw1(self):
        self.handle1()
        xtick = list(self.dict_.keys())
        ytick = list(self.dict_.values())
        for i in range(len(xtick)):
            plt.bar(xtick[i], ytick[i])
        plt.xlabel('房屋价格')
        plt.ylabel('房屋数量')
        plt.title('不同价格区间出租的房屋数量')
        plt.savefig('home1.png')
        plt.show()


vs = Visuali()
vs.draw()
vs.draw1()