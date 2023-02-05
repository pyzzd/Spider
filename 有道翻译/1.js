crypto = require('crypto')

function get_data(t) {
    const a = Buffer.alloc(16, new Uint8Array(crypto.createHash('md5').update("ydsecret://query/key/B*RGygVywfNBwpmBaZg*WT7SIOUP2T0C9WHMZN39j^DAdaZhAnxvGcCY6VYFwnHl").digest()));
    const r = Buffer.alloc(16, new Uint8Array(crypto.createHash('md5').update("ydsecret://query/iv/C@lZe2YzHtZ2CYgaXKSVfsb7Y4QWHjITPPZ0nQp87fBeJ!Iv6v^6fvi2WN@bYpJ4").digest()));
    i = crypto.createDecipheriv("aes-128-cbc", a, r)
    let s = i.update(t, "base64", "utf-8");
    s += i.final("utf-8")
    return s
}

