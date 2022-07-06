import smtplib
from email.mime.text import MIMEText


def send_mail(content,msg_to):
    msg_from = '484256249@qq.com'  # 发送方邮箱
    passwd = 'salhesztrrjgbhdi'  # 填入发送方邮箱的授权码
    msg_to = msg_to  # 收件人邮箱

    subject = "库存有变动了"  # 主题

    msg = MIMEText(content)
    msg['Subject'] = subject
    msg['From'] = msg_from
    msg['To'] = msg_to
    try:
        s = smtplib.SMTP_SSL("smtp.qq.com", 465)
        s.login(msg_from, passwd)
        s.sendmail(msg_from, msg_to, msg.as_string())
        print("发送成功")
    except:
        print("发送失败")
        send_mail1(content,msg_to)



def send_mail1(content,msg_to):
    msg_from = 'djj2391@163.com'  # 发送方邮箱
    passwd = 'DIJNKACXSQNJBJNT'  # 填入发送方邮箱的授权码
    msg_to = msg_to  # 收件人邮箱

    subject = "库存有变动了"  # 主题

    msg = MIMEText(content)
    msg['Subject'] = subject
    msg['From'] = msg_from
    msg['To'] = msg_to
    try:
        s = smtplib.SMTP_SSL("smtp.163.com", 465)
        s.login(msg_from, passwd)
        s.sendmail(msg_from, msg_to, msg.as_string())
        print("发送成功")
    except:
        print("发送失败")