from pyhive import hive
import pandas as pd
# 获取Hive连接
def getHiveConn():
    conn = None
    try:
        conn = hive.Connection(host='192.168.153.1', port=10000, username='hive', database='zhilian')
    except Exception as e:
        print(e)
    return conn


#创建hive外表
def run():
    conn = getHiveConn()
    #写到数据所在的文件夹即可
    sql = '''
             create table zhilian
             (title  string, 
              salary string,
              address string,
              experience string,
              education string,
              compname string,
              ) 
             row format delimited fields terminated by ',' 
             lines terminated by '\n'
             location '/zhilian.csv'
          '''
    curosr = conn.cursor()
    curosr.execute(sql)
    conn.close()

run()