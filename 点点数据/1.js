var crypto = require('crypto');
we = {}


from = function (t, e, r) {
    encoder = new TextEncoder(e);
    return encoder.encode(t);
}

function wf(e, n, o) {
    var c = "";
    n = from(n, "utf8"),
        o = from(o, "utf8");

    var d = crypto.createDecipheriv("aes-128-cbc", n, o);
    return c += d.update(e, "hex", "utf8"),
    c += d.final("utf8")
}

function _(e, path, n, r) {
    we.params['incr_type'] = undefined
    var s = n.s
        , c = n.k
        , f = n.l
        , l = n.d
        , _ = n.sort
        , y = n.num
        , k = function (content, t, e) {
        for (var a = Array.from(content), n = Array.from(t), r = a.length, o = n.length, c = String.fromCodePoint, i = 0; i < r; i++)
            a[i] = c(a[i].codePointAt(0) ^ n[(i + e) % o].codePointAt(0));
        return a.join("")
    }(function (s, t, path, e) {
        return [s, t, e, path].join("(&&)")
    }(function (t, e) {
        var n = t;
        if (true) {
            var r = [];
            for (var c in n)
                Array.isArray(n[c]) && "get" === e && (n[c] = n[c].join("")),
                "post" === e && (m()(n[c]) || o()(n[c])) && (n[c] = JSON.stringify(n[c])),
                    r.push(n[c]);
            return r.sort(),
                r.join("")
        }
    }(e, r), parseInt((new Date).getTime() / 1e3) - 655876800 - l, path, _), wf(s, c, f), y);

    return btoa(k)
}

function get_k(params,data) {
    path = "/v1/rank"
    we.params = params
    var r = we.params
        , o = _(r, path, data, "get");
    return o
}