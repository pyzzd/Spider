# 导入相关模块
import MySQLdb


def insert(title,score,brief,director,actors,m_type,language,release_date,duration,nation,cover,watched,wanna_see,id):
    # 建立和mysql数据库的连接
    db = MySQLdb.connect(host="127.0.0.1", user="root", passwd="Dj123...",port=3306,db="douban",charset="utf8")
    # 获取游标
    cur = db.cursor()
    try:
        sql = (
            'insert into movie (title,score,brief,director,actors,type,language,release_date,duration,nation,cover,watched,wanna_see,id)values("{}","{}","{}","{}","{}","{}","{}","{}","{}","{}","{}","{}","{}","{}")'.format(title,score,brief,director,actors,m_type,language,release_date,duration,nation,cover,watched,wanna_see,id)
        )
        cur.execute(sql)
        db.commit()

    except:
        try:
            sql = (
                "insert into movie (title,score,brief,director,actors,type,language,release_date,duration,nation,cover,watched,wanna_see,id)values('{}','{}','{}','{}','{}','{}','{}','{}','{}','{}','{}','{}','{}','{}')".format(title,score,brief,director,actors,m_type,language,release_date,duration,nation,cover,watched,wanna_see,id)
            )
            cur.execute(sql)
            db.commit()
        except Exception as e:
            print(e)
            print(title,'插入失败')
        else:
            print(title, "保存成功")
            cur.close()
            db.close()
    else:
        print(title, "保存成功")
        cur.close()
        db.close()