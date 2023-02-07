import gzip
import json
from websocket import WebSocketApp
import requests
import re
from urllib.parse import unquote_plus
from douyin_pb2 import PushFrame,Response,ChatMessage,GiftMessage

headers = {
    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36",
    'Cookie': '__ac_nonce=111;'
}
def parse_data():
    res = requests.get(room_link,headers=headers)
    data = re.findall('<script id="RENDER_DATA" type="application/json">(.*?)</script>',res.text)[0]
    dataTodct = json.loads(unquote_plus(data))
    roomId = dataTodct['app']['initialState']['roomStore']['roomInfo']['roomId']
    user_unique_id = dataTodct['app']['odin']['user_unique_id']
    ttwid = res.headers['Set-Cookie']
    headers['Cookie'] +=ttwid
    wws_url = 'wss://webcast3-ws-web-lq.douyin.com/webcast/im/push/v2/?app_name=douyin_web&version_code=180800&webcast_sdk_version=1.3.0&update_version_code=1.3.0&compress=gzip&internal_ext=internal_src:dim|wss_push_room_id:{}|wss_push_did:7197270680479712824|dim_log_id:20230207144314DC865289729D3F06101E|fetch_time:1675752194549|seq:1|wss_info:0-1675752194549-0-0|wrds_kvs:WebcastRoomStatsMessage-1675752182872356034_WebcastRoomRankMessage-1675751612937991068&cursor=t-1675752194549_r-1_d-1_u-1_h-1&host=https://live.douyin.com&aid=6383&live_id=1&did_rule=3&debug=false&endpoint=live_pc&support_wrds=1&im_path=/webcast/im/fetch/&user_unique_id={}&device_platform=web&cookie_enabled=true&screen_width=1536&screen_height=864&browser_language=zh-CN&browser_platform=Win32&browser_name=Mozilla&browser_version=5.0%20(Windows%20NT%2010.0;%20Win64;%20x64)%20AppleWebKit/537.36%20(KHTML,%20like%20Gecko)%20Chrome/109.0.0.0%20Safari/537.36&browser_online=true&tz_name=Asia/Shanghai&identity=audience&room_id={}&heartbeatDuration=0'.format(roomId,user_unique_id,roomId)
    return wws_url

def on_open(ws,message):
    pass
def on_message(ws,message):
    frame = PushFrame()
    frame.ParseFromString(message)
    origin_bytes = gzip.decompress(frame.payload)

    response = Response()
    response.ParseFromString(origin_bytes)

    for item in response.messagesList:
        if item.method == 'WebcastChatMessage':
            message = ChatMessage()
            message.ParseFromString(item.payload)
            info = f'用户【{message.user.nickname}】：{message.content}'
            print(info)
        elif item.method == "WebcastGiftMessage":
            gift = GiftMessage()
            gift.ParseFromString(item.payload)
            info = f'{gift.common.describe}'
            print(info)
def on_error(ws,message):
    pass
def on_close(ws,message):
    pass

def ws_conn(wws_url):
    ws = WebSocketApp(
        url=wws_url,
        header=headers,
        on_open=on_open,
        on_message=on_message,
        on_error=on_error,
        on_close=on_close,
    )
    while True:
        ws.run_forever()

if __name__ == '__main__':
    room_link = 'https://live.douyin.com/163678193390'
    wws_url = parse_data()
    ws_conn(wws_url)