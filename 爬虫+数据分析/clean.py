import jieba
import jieba.analyse
import codecs ,re



def prepareData(sourceFile, targetFile):
    f = codecs.open(sourceFile, 'r', encoding='utf-8')
    target = codecs.open(targetFile, 'w', encoding='utf-8')
    print('open source file: ' + sourceFile)
    print('open target file: ' + targetFile)
    lineNum = 1
    line = f.readline()
    while line:
        print('---processing ', lineNum, ' article---')
        line = clearTxt(line)
        seg_line = sent2word(line)
        target.writelines(seg_line + '\n')
        lineNum = lineNum + 1
        line = f.readline()
    print('well done.')
    f.close()
    target.close()

def clearTxt(line):
    if line != '':
        line = line.strip()
        # 去除文本中的英文和数字
        line = re.sub("[a-zA-Z0-9]", "", line)
        # 去除文本中的中文符号和英文符号
        line = re.sub("[\s+\.\!\/_,$%^*()+\"\'；：“”．]+|[+——！，。？?、~@#￥%……&*（）]+".encode('utf-8').decode("utf8"), "", line)
    return line

def sent2word(line):
    segList = jieba.cut(line, cut_all=False)
    segSentence = ''
    for word in segList:
        if word != '\t':
            segSentence += word + " "
    return segSentence.strip()




if __name__ == '__main__':
    sourceFile = '/data/neg.txt'
    targetFile = '/data/neg_cut.txt'
    prepareData(sourceFile, targetFile)
    sourceFile = '/data/pos.txt'
    targetFile = '/data/pos_cut.txt'
    prepareData(sourceFile, targetFile)
