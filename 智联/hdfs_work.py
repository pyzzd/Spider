from hdfs.client import Client

# 获取HDFS连接
def getHDFSConn():
    client = None
    try:
        client = Client("http://localhost:50070/", root='/')
    except Exception as e:
        print(e)
    return client

# 创建目录
def mkdirs(client, hdfs_path):
    client.makedirs(hdfs_path)


# 上传本地文件到hdfs
def putLocalFileToHDFS(client, hdfs_path, local_path):
    client.upload(hdfs_path, local_path, cleanup=True)

client = getHDFSConn()
putLocalFileToHDFS(client,'zhilian.csv','/')