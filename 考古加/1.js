cryptoJs = require('crypto-js')

function encode(str) {
    const encode22 = encodeURI(str);
    return btoa(encode22)
}
decrypt = function(url2, text2) {
    if ("string" != typeof url2)
        return;
    const str = encode(url2).repeat(3)
      , orgKey = str.slice(0, 16)
      , orgIv = str.slice(12, 28)
      , ikey = cryptoJs.enc.Utf8.parse(orgKey)
      , iiv = cryptoJs.enc.Utf8.parse(orgIv);
    return cryptoJs.AES.decrypt(text2, ikey, {
        iv: iiv,
        mode: cryptoJs.mode.CBC,
        padding: cryptoJs.pad.Pkcs7
    }).toString(cryptoJs.enc.Utf8)
}