import requests
import execjs

def res():


    url = 'https://unicom_trip.133.cn/api/v1/province-all'

    _xsrf = 'eyJpdiI6IldMOHZMbUZWbGdwcE9tdE9sd2ZIcXc9PSIsInZhbHVlIjoiZG1WRGRZYXBKMGxVdnFOXC9JMDVrN0ljRVB6cURwMnpaTVJTRjNjTnh2V0RiOGJrczNJQVFYcmRETjlvVkFDQkUiLCJtYWMiOiJmOTBkNDBiMjRlZmQyNjllM2Q5YzYwOGZlY2VlODc0MjljMzQ1OWU5OTc2MDg1ZjMwOTg0ZWM0ZmQxYjA1ZjU5In0='

    headers = {
    'Cookie':'XSRF-TOKEN={};'.format(_xsrf),
    'Host':'unicom_trip.133.cn',
    'Referer':'https://unicom_trip.133.cn/city/?system=cjfcts',
    'User-Agent':'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.84 Safari/537.36',
    'X-XSRF-TOKEN':_xsrf,
    }

    base64cont = requests.get(url,headers=headers).text

    return base64cont


if __name__ == '__main__':
    base64cont = res()
    f = open('test.js','r').read()
    js = execjs.compile(f)
    data = js.call('dataDecode',base64cont)
    print(data)
