import re
import jieba
import MySQLdb
import codecs
import matplotlib.pyplot as plt
from wordcloud import WordCloud
plt.rcParams["font.sans-serif"] = ["SimHei"]
plt.rcParams["axes.unicode_minus"] = False
plt.figure(figsize=(20, 15), dpi=80)

class Draw:
    def __init__(self):
        self.conn = MySQLdb.Connect(host='127.0.0.1', port=3306, user='root', password='123', database='info',
                                    charset='utf8')
        self.cursor = self.conn.cursor()
        self.load_data()
        self.dict = {}
        self.text = ''
        self.clearText = []
    def load_data(self):
        self.cursor.execute('select * from page')
        self.result = self.cursor.fetchall()
        self.conn.commit()

    def clearTxt(self):

        # 去除文本中的英文和数字
        self.text = re.sub("[a-zA-Z0-9]", "", self.text)
        # 去除文本中的中文符号和英文符号
        self.text = re.sub("[\s+\.\!\/_,$%^*()+\"\'；：“”．]+|[+——！，。？?、~@#￥%……&*（）]+".encode('utf-8').decode("utf8"), "",
                      self.text)

    def del_stopWord(self):
        self.text = jieba.cut(self.text)
        stopkey = [w.strip() for w in codecs.open('stopWord.txt', 'r', encoding='utf-8').readlines()]
        for t in self.text:
            t = t.strip()
            if t not in stopkey:
                if t != '\t':
                    self.clearText.append(t)

    def cloudW(self):
        for r in self.result[12:15]:
            self.text += r[2]
        self.clearTxt()
        self.del_stopWord()
        wordcloud = WordCloud(font_path="msyh.ttc", background_color='white').generate(' '.join(self.clearText))
        wordcloud.to_file('page.jpg')

    def prase(self):

        for r in self.result:
            if int(r[-4]) <=100:
                self.dict['0-100'] +=1
            elif int(r[-4])<=200:
                self.dict['100-200']+=1
            elif int(r[-4])<=300:
                self.dict['200-300'] += 1
            elif int(r[-4]) <= 400:
                self.dict['300-400'] += 1
            elif int(r[-4]) <= 500:
                self.dict['400-500'] += 1
            else:
                self.dict['500以上'] += 1
    def prase_(self):
        for r in self.result:
            if int(r[-2]) <=20:
                self.dict['0-20'] +=1
            elif int(r[-2])<=50:
                self.dict['20-50']+=1
            elif int(r[-2])<=80:
                self.dict['50-80'] += 1
            elif int(r[-2]) <= 110:
                self.dict['80-110'] += 1
            elif int(r[-2]) <= 150:
                self.dict['110-150'] += 1
            else:
                self.dict['150以上'] += 1

    def draw(self):
        self.dict = {
            '0-100': 0,
            '100-200': 0,
            '200-300': 0,
            '300-400': 0,
            '400-500': 0,
            '500以上': 0
        }
        self.prase()
        x = list(self.dict.keys())
        y = list(self.dict.values())
        for i in range(len(x)):
            plt.bar(x[i], y[i])
        plt.xlabel('评论区间')
        plt.ylabel('文章数量')
        plt.title('各评论量区间文章数量')
        plt.savefig('sig_size.png')
        plt.show()
    def draw1(self):
        self.dict = {
            '0-20': 0,
            '20-50': 0,
            '50-80': 0,
            '80-110': 0,
            '110-150': 0,
            '150以上': 0
        }
        self.prase_()
        x = list(self.dict.keys())
        y = list(self.dict.values())
        for i in range(len(x)):
            plt.bar(x[i], y[i])
        plt.xlabel('点赞量区间')
        plt.ylabel('文章数量')
        plt.title('各点赞量区间文章数量')
        plt.savefig('sig_size1.png')
        plt.show()

d = Draw()
# d.draw()
# d.draw1()
d.cloudW()