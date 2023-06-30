let finalNum = 0;
let temp = 0;
let ac_signature = "_02B4Z6wo00f01"


function bigCountOperation(str) {
    let charCodeCount;
    for (let i = 0; i < str.length; i++) {
        charCodeCount = str.charCodeAt(i)
        finalNum = ((finalNum ^ charCodeCount) * 65599) >>> 0
    }
    return finalNum
}

function countToText(deciNum, ac_signature) {
    let offList = [24, 18, 12, 6, 0]
    offList.forEach(function (value) {
        let keyNum = deciNum >> value & 63
        let valNum = keyNum < 26 ? 65 : keyNum < 52 ? 71 : keyNum < 62 ? -4 : -17
        let asciiCode = keyNum + valNum
        ac_signature += String.fromCharCode(asciiCode)
    })
    return ac_signature
}

function loadAcSignature(url, ac_nonce, ua) {
    let timeStamp = new Date().getTime().toString()
    bigCountOperation(timeStamp)
    let urlNum = bigCountOperation(url)
    let longStr = ((65521 * (finalNum % 65521) ^ timeStamp) >>> 0).toString(2)
    while (longStr.length !== 32) {
        longStr = "0" + longStr
    }
    let binaryNum = "10000000110000" + longStr
    let deciNum = parseInt(binaryNum, 2)

    ac_signature = countToText(deciNum >> 2, ac_signature)
    ac_signature = countToText(deciNum << 28 | 515, ac_signature)
    ac_signature = countToText((deciNum ^ 1489154074) >>> 6, ac_signature)
    let aloneNum = (deciNum ^ 1489154074) & 63
    let aloneVal = aloneNum < 26 ? 65 : aloneNum < 52 ? 71 : aloneNum < 62 ? -4 : -17
    ac_signature += String.fromCharCode(aloneNum + aloneVal)

    finalNum = 0
    let deciOperaNum = bigCountOperation(deciNum.toString())
    let nonceNum = bigCountOperation(ac_nonce)
    finalNum = deciOperaNum
    bigCountOperation(ua)
    ac_signature = countToText((nonceNum % 65521 | (finalNum % 65521 << 16)) >> 2, ac_signature)

    ac_signature = countToText((((finalNum % 65521 << 16) ^ (nonceNum % 65521)) << 28) | ((deciNum << 524576 ^ 524576) >>> 4), ac_signature)

    ac_signature = countToText(urlNum % 65521, ac_signature)

    let _str = ac_signature;

    for (let i of _str) {
        temp = ((temp * 65599) + i.charCodeAt(0)) >>> 0
    }
    let lastStr = temp.toString(16)
    ac_signature += lastStr.slice(lastStr.length - 2, lastStr.length)
    return ac_signature
}

let url = "www.douyin.com/discover?modal_id=7227769742898023680"
let ac_nonce = "0649ead2a002ef46e1eca"
let ua = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36"
console.log(loadAcSignature(url, ac_nonce, ua))