import random
import re
import json
import time

import cv2
import requests
from PIL import Image

session = requests.Session()
session.trust_env = False
session.cookies.update({
    "pgv_pvid": "7922905503"
})
headers = {
    "Accept": "*/*",
    "Accept-Language": "zh-CN,zh;q=0.9",
    "Cache-Control": "no-cache",
    "Connection": "keep-alive",
    "Referer": "https://007.qq.com/",
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/117.0.0.0 Safari/537.36",
}
ua = "TW96aWxsYS81LjAgKFdpbmRvd3MgTlQgMTAuMDsgV2luNjQ7IHg2NCkgQXBwbGVXZWJLaXQvNTM3LjM2IChLSFRNTCwgbGlrZSBHZWNrbykgQ2hyb21lLzExNy4wLjAuMCBTYWZhcmkvNTM3LjM2"
u = random.randint(50, 300)
t = str(int(time.time() * 1000))
rnd = "828017"
prehandleLoadTime = "138"
rate = 0.5059523809523809


def jsonp_to_json(text):
    return json.loads(re.findall("\((.*?)\)", text)[0])


def cap_union_prehandle():
    url = "https://t.captcha.qq.com/cap_union_prehandle"
    params = {
        "aid": "193030063",
        "protocol": "https",
        "accver": "1",
        "showtype": "popup",
        "ua": ua,
        "noheader": "1",
        "fb": "1",
        "aged": "0",
        "enableAged": "0",
        "enableDarkMode": "0",
        "grayscale": "1",
        "clientype": "2",
        "cap_cd": "",
        "uid": "",
        "lang": "zh-cn",
        "entry_url": "https://cloud.tencent.com/product/captcha",
        "elder_captcha": "0",
        "js": "/tcaptcha-frame.d9d2e5a6.js",
        "login_appid": "",
        "wb": "2",
        "subsid": "1",
        "callback": "_aq_448889",
        "sess": ""
    }

    response = session.get(url, headers=headers, params=params).text
    return jsonp_to_json(response)


def get_tdc(api):
    url = f"https://t.captcha.qq.com{api}"
    response = session.get(url, headers=headers).text
    with open("code.js", "w", encoding="utf-8") as f:
        f.write(response)
    return re.findall("='(.*?)'", response)[0]


def load_img(cdnPic1, cdnPic2):
    pic1 = session.get(cdnPic1, headers=headers).content
    pic2 = session.get(cdnPic2, headers=headers).content
    with open("img/bg.png", "wb") as f:
        f.write(pic1)
    with open("img/sprite.png", "wb") as f:
        f.write(pic2)
    crop_image()
    img_zoom("img/bg.png", "img/slice.png")


def crop_image():
    # 打开图像文件
    img = Image.open("img/sprite.png")

    # 使用crop()函数裁剪图像
    cropped_img = img.crop((140, 490, 260, 610))

    # 保存裁剪后的图像
    cropped_img.save("img/slice.png")


def img_zoom(bgImgGray, sliderImgGray):
    fg = Image.open(sliderImgGray)
    bg = Image.open(bgImgGray)
    bg_resized = bg.resize((340, 200))
    fg_resized = fg.resize((50, 50))
    fg_resized.save(sliderImgGray)
    bg_resized.save(bgImgGray)


def simpleSliderDistinguish():
    originImg = cv2.imread("img/bg.png")
    bgImg = cv2.imread("img/bg.png", 0)
    sliderImg = cv2.imread("img/slice.png", 0)

    imgGaussianBlur1 = cv2.GaussianBlur(sliderImg, (7, 7), 0)
    imgGaussianBlur2 = cv2.GaussianBlur(bgImg, (7, 7), 0)

    cannySlider = cv2.Canny(imgGaussianBlur1, 100, 200)
    cannyBgImg = cv2.Canny(imgGaussianBlur2, 100, 200)

    th, tw = cannySlider.shape[:2]
    result = cv2.matchTemplate(cannyBgImg, cannySlider, cv2.TM_CCOEFF_NORMED)
    min_val, max_val, min_loc, max_loc = cv2.minMaxLoc(result)
    tl = max_loc
    br = (tl[0] + tw, tl[1] + th)
    resObj = [tl[0], tl[1], br[0], br[1]]
    im = cv2.rectangle(originImg, tl, br, (0, 0, 255), 2)
    cv2.imwrite("img/result.jpg", im)
    return resObj


def cap_union_new_verify(sess, prefix, eks, collect, ans):
    url = "https://t.captcha.qq.com/cap_union_new_verify"
    data = {
        "collect": collect,
        "tlg": len(collect),
        "eks": eks,
        "sess": sess,
        "ans": json.dumps([{"elem_id": 1, "type": "DynAnswerType_POS", "data": ans}], separators=(',', ':')),
        "pow_answer": f"{prefix}3477",
        "pow_calc_time": "89"
    }
    print(data)
    response = session.post(url, headers=headers, data=data).json()
    if response.get("errorCode"):
        print(response)
    else:
        print(response)
        quit()


def main():
    response = cap_union_prehandle()
    sess = response.get("sess")
    # sid = response.get("sid")
    img_url = "https://t.captcha.qq.com" + response.get("data").get("dyn_show_info").get("bg_elem_cfg").get("img_url")
    sprite_url = "https://t.captcha.qq.com" + response.get("data").get("dyn_show_info").get("sprite_url")
    prefix = response.get("data").get("comm_captcha_cfg").get("pow_cfg").get("prefix")
    tdc_path = response.get("data").get("comm_captcha_cfg").get("tdc_path")
    eks = get_tdc(tdc_path)
    load_img(img_url, sprite_url)
    seat = simpleSliderDistinguish()
    ans = f"{int((seat[0] - 10) / rate)},{int((seat[1] - 5) / rate)}"
    print(ans)
    collect = session.post('http://127.0.0.1:8711/get_collect', json={
        "ans": ans,
    }).json().get("result")
    print(collect)
    print(len(collect))
    cap_union_new_verify(sess, prefix, eks, collect, ans)


if __name__ == '__main__':
    for i in range(1):
        main()
