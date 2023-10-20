navigator = {
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/117.0.0.0 Safari/537.36',
    language: "zh-CN",
    languages: ["zh-CN", "zh"],
    appVersion: "5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/117.0.0.0 Safari/537.36",
    webdriver: false,
    appName: "Netscape",
    vendor: "Google Inc.",
    hardwareConcurrency: 6,
    platform: 'Win32',
    cookieEnabled: true,
    requestMIDIAccess: function () {

    },
    serviceWorker: function () {

    },
    plugins: [{
        0: {
            description: "Portable Document Format",
            suffixes: "pdf",
            type: "application/pdf",
        },
        1: {
            description: "Portable Document Format",
            suffixes: "pdf",
            type: "application/pdf",
        },
        description: "Portable Document Format",
        filename: "internal-pdf-viewer",
        length: 2,
        name: "PDF Viewer"
    }, {
        0: {
            description: "Portable Document Format",
            suffixes: "pdf",
            type: "application/pdf",
        },
        1: {
            description: "Portable Document Format",
            suffixes: "pdf",
            type: "application/pdf",
        },
        description: "Portable Document Format",
        filename: "internal-pdf-viewer",
        length: 2,
        name: "Chrome PDF Viewer"
    }, {
        0: {
            description: "Portable Document Format",
            suffixes: "pdf",
            type: "application/pdf",
        },
        1: {
            description: "Portable Document Format",
            suffixes: "pdf",
            type: "application/pdf",
        },
        description: "Portable Document Format",
        filename: "internal-pdf-viewer",
        length: 2,
        name: "Microsoft Edge PDF Viewer"
    }, {
        0: {
            description: "Portable Document Format",
            suffixes: "pdf",
            type: "application/pdf",
        },
        1: {
            description: "Portable Document Format",
            suffixes: "pdf",
            type: "application/pdf",
        },
        description: "Portable Document Format",
        filename: "internal-pdf-viewer",
        length: 2,
        name: "Chromium PDF Viewer"
    }, {
        0: {
            description: "Portable Document Format",
            suffixes: "pdf",
            type: "application/pdf",
        },
        1: {
            description: "Portable Document Format",
            suffixes: "pdf",
            type: "application/pdf",
        },
        description: "Portable Document Format",
        filename: "internal-pdf-viewer",
        length: 2,
        name: "WebKit built-in PDF"
    }]
};

location = {
    "origin": "https://captcha.gtimg.com",
    "protocol": "https:",
    "host": "captcha.gtimg.com",
    "hostname": "captcha.gtimg.com",
    "port": "",
    "pathname": "/1/template/drag_ele.html",
    "hash": '',
    "href": 'https://cloud.tencent.com/product/captcha',
    "ancestorOrigins": {
        0: "https://www.zkh.com", length: 1
    }
}

document = {
    cookie: ''
};
var createCount = 0
screen = {
    availHeight: 1040,
    availLeft: 0,
    availTop: 0,
    availWidth: 1920,
    colorDepth: 24,
    height: 1080,
    isExtended: false,
    onchange: null,
    orientation: {
        angle: 0, onchange: null, type: "landscape-primary"
    },
    pixelDepth: 24,
    width: 1920,
    fontSmoothingEnabled: false
}
window = {
    document: document,
    navigator: navigator,
    location: location,
    screen: screen,
};
window.idMap = {}
window.Array = Array;
window.eval = eval;
window.Boolean = Boolean;
window.Object = Object

window.Symbol = {
    iterator: "Symbol(Symbol.iterator)"
}
window.SyncManager = function () {

}
window.document.location = location
window.document.characterSet = 'UTF-8'
window.document.charset = 'UTF-8'
window.encodeURIComponent = encodeURIComponent;
window.decodeURIComponent = decodeURIComponent;
window.window = window;
window.isNaN = isNaN;
window.console = console;
window.setInterval = function () {
    // console.log("setInterval")
    // console.log(arguments)
    // console.log()
}
window.self = window;
window.setTimeout = function () {
    // console.log("setTimeout")
    // console.log(arguments)
    // console.log()
}
window.clearInterval = function () {
    // console.log("clearInterval")
    // console.log(arguments)
    // console.log()
}
window.escape = function () {
    console.log("escape")
    console.log(arguments)
    console.log()
};
window.isFinite = function () {
    console.log("isFinite")
    console.log(arguments)
    console.log()
}
window.RegExp = RegExp
window.sendData = ""
XMLHttpRequest = function () {
    console.log("XMLHttpRequest")
    console.log(arguments)
    console.log()
}
XMLHttpRequest.prototype.send = function (data) {
    console.log("XMLHttpRequest.send")
    console.log(arguments)
    console.log()
    window.sendData = data
}
XMLHttpRequest.prototype.open = function () {
    console.log("XMLHttpRequest.open")
    console.log(arguments)
    console.log()
}

window.getComputedStyle = function (val1, val2) {
    if (val1 === undefined) {
        throw new TypeError()
    }
    const rgbMap = {
        "green": "rgb(0, 128, 0)",
        "red": "rgb(255, 0, 0)",
        "black": "rgb(0, 0, 0)",
        "secondp": "rgb(0, 0, 255)",
        "bar": "rgb(255, 0, 0)",
    }
    return {
        getPropertyValue: function () {
            return rgbMap[val1.innerHTML]
        }
    }
}
window.btoa = btoa;

RTCPeerConnection = class {
}
RTCPeerConnection.prototype.getLocalStreams = function () {

}
RTCPeerConnection.prototype.createDataChannel = function () {

    return {
        onopen: function () {
        }, onclose: function () {
        }, onmessage: function () {
        }, send: function () {
        }, close: function () {
        },
    }
}
RTCPeerConnection.prototype.createAnswer = function () {

}
RTCPeerConnection.prototype.createOffer = function () {
    return new Promise((resolve, reject) => {
        const offer = {
            sdp: "v=0\r\no=- 7557661829766968651 2 IN IP4 59.173.29.160\r\ns=-\r\nt=0 0\r\na=extmap-allow-mixed\r\na=msid-semantic: WMS\r\n",
            type: "offer"
        };
        resolve(offer);
    });
}
RTCPeerConnection.prototype.setLocalDescription = function (sampleDescription) {
    return new Promise((resolve, reject) => {
        resolve();
    });
}
RTCPeerConnection.prototype.setConfiguration = function () {

}
RTCPeerConnection.prototype.addIceCandidate = function () {

}
RTCPeerConnection.prototype.addTrack = function () {

}
RTCPeerConnection.prototype.onicecandidate = function () {

}
RTCPeerConnection.prototype.localDescription = {
    sdp: "v=0\r\no=- 7557661829766968651 2 IN IP4 59.173.29.160\r\ns=-\r\nt=0 0\r\na=extmap-allow-mixed\r\na=msid-semantic: WMS\r\n",
    type: "offer"
}
RTCPeerConnection.prototype.sctp = {}


window.RTCPeerConnection = RTCPeerConnection
window.CSS = {
    supports: function (val1, val2) {
        // console.log("supports")
        // console.log(arguments)
        // console.log()
        return val1 === "overscroll-behavior"
    }
}
window.customElements = {
    define: function () {
        console.log("define")
        console.log(arguments)
        console.log()
    }
}
window.XMLHttpRequest = XMLHttpRequest
window.Date = Date
require("./dom")

window.document.body = {
    clientWidth: 1903,
    clientHeight: 931,
    scrollLeft: 0,
    clientLeft: 0,
    scrollTop: 0,
    clientTop: 0,
    innerHTML: "",
    outerHTML: "<body></body>",
    appendChild: appendChild,
    removeChild: removeChild,
    setAttribute: setAttribute,
    hasAttribute: hasAttribute,
    append: append,
    insertBefore: insertBefore,
    replaceChild: replaceChild,
    cloneNode: cloneNode,
    createAttribute: createAttribute,
    getAttribute: getAttribute,
    createTextNode: createTextNode,
    querySelectorAll: querySelectorAll,
    querySelector: querySelector,
    getElementsByTagName: getElementsByTagName,
    getElementsByClassName: getElementsByClassName,
    getElementById: getElementById,
    createElement: createElement,
    removeAttribute: removeAttribute,
    parentNode: parentNode,
    childNodes: [],
    firstChild: firstChild,
    lastChild: lastChild,
}


window.document.getElementsByTagName = function (val) {
    console.log("getElementsByTagName")
    console.log(arguments)
    console.log()
    return [{src: ""}, {src: ""}, {src: ""}, {src: ""}, {src: ""}, {src: ""}, {src: ""}, {src: 'https://t.captcha.qq.com/tdc.js?app_data=7117058887413207040&t=2034767043?t=1696839067'}, {src: 'https://captcha.gtimg.com/1/tcaptcha-slide.e05935c5.js'}, {src: 'https://t.captcha.qq.com/vm-slide.e201876f.enc.js'}, {src: ""}]
};
window.innerHeight = 360
window.innerWidth = 360
window.parseInt = parseInt
window.document.appendChild = appendChild
window.document.removeChild = removeChild
window.Number = Number;
window.decodeURIComponent = decodeURIComponent;

window.addEventListener = function (val) {
    // console.log("window.addEventListener")
    // console.log(arguments)
    // console.log()
}
window.TEMPORARY = 0
window.attachEvent = function (val) {
    console.log("window.attachEvent")
    console.log(arguments)
    console.log()
}

window.Math = Math;

window.document.visibilityState = "hidden";
window.parseFloat = parseFloat;

window.document.addEventListener = function (val1, val2, val3) {

    console.log(val1)
    console.log(val2)
    if (val1 === "mousemove") {
        window.mousemove = val2
    }
}
window.DOMParser = function (val) {
    console.log("DOMParser")
    console.log(arguments)
    console.log()
}
window.removeEventListener = function (val) {
    console.log("removeEventListener")
    console.log(arguments)
    console.log()
    return null
}
window.document.removeEventListener = function (val) {
    console.log("document.removeEventListener")
    console.log(arguments)
    console.log()
    return null
}

window.document.head = {
    style: {
        animation: ""
    },
    id: "",
    className: "",
    title: "",
    innerHTML: "",
    outerHTML: "<head></head>",
    appendChild: appendChild,
    removeChild: removeChild,
    setAttribute: setAttribute,
    hasAttribute: hasAttribute,
    append: append,
    insertBefore: insertBefore,
    replaceChild: replaceChild,
    cloneNode: cloneNode,
    createAttribute: createAttribute,
    getAttribute: getAttribute,
    createTextNode: createTextNode,
    querySelectorAll: querySelectorAll,
    querySelector: querySelector,
    getElementsByTagName: getElementsByTagName,
    getElementsByClassName: getElementsByClassName,
    getElementById: getElementById,
    createElement: createElement,
    removeAttribute: removeAttribute,
    parentNode: parentNode,
    childNodes: [],
    firstChild: firstChild,
    lastChild: lastChild,

}
window.localStorage = {};
window.sessionStorage = {};
window.localStorage.removeItem = function (val) {

};
window.sessionStorage.getItem = function (val) {
    // console.log("sessionStorage.getItem")
    // console.log(arguments)
    // console.log()
    return window.sessionStorage[val]
};
window.sessionStorage.setItem = function (val1, val2) {
    // console.log("sessionStorage.setItem")
    // console.log(arguments)
    // console.log()
    if (val1 === undefined) {

    } else {
        window.sessionStorage[val1] = val2
    }
}
window.sessionStorage.removeItem = function (val) {
    // delete window.sessionStorage.val
}
window.Error = {
    length: 1,
    name: 'Error'
}
window.localStorage.getItem = function (val) {
    // console.log("localStorage.getItem")
    // console.log(arguments)
    // console.log()
    return window.localStorage[val]
};
window.localStorage.setItem = function (val1, val2) {
    // console.log("localStorage.setItem")
    // console.log(arguments)
    // console.log()
    if (val1 === undefined) {
    } else {
        window.localStorage[val1] = val2
    }

}
window.TCaptchaReferrer = "https://cloud.tencent.com/product/captcha"
window.name = '';
window.indexedDB = function (val) {
    console.log("indexedDB")
    console.log(arguments)
    console.log()
};
window.String = String
window.document.documentElement = {
    clientWidth: 1903,
    clientHeight: 931,
    innerHTML: "",
    outetHTML: "<html></html>",
    childNodes: [],
    appendChild: appendChild,
    removeChild: removeChild,
    setAttribute: setAttribute,
    hasAttribute: hasAttribute,
    append: append,
    insertBefore: insertBefore,
    replaceChild: replaceChild,
    cloneNode: cloneNode,
    createAttribute: createAttribute,
    getAttribute: getAttribute,
    createTextNode: createTextNode,
    querySelectorAll: querySelectorAll,
    querySelector: querySelector,
    getElementsByTagName: getElementsByTagName,
    getElementsByClassName: getElementsByClassName,
    getElementById: getElementById,
    createElement: createElement,
    removeAttribute: removeAttribute,
    parentNode: parentNode,
    firstChild: firstChild,
    lastChild: lastChild,
}

window.document.createExpression = function (val) {
    console.log("document.createExpression")
    console.log(arguments)
    console.log()
    return {
        evaluate: {}
    }
}
window.Request = function (val) {
    console.log("Request")
    console.log(arguments)
    console.log()
};
window.document.documentElement.style = function (val) {
    console.log("documentElement.style")
    console.log(arguments)
    console.log()
    return {
        0: "font-size"
    }
};
window.navigator.webkitPersistentStorage = function (val) {
    console.log("navigator.webkitPersistentStorage")
    console.log(arguments)
    console.log()
};

window.matchMedia = function (val) {
    matches = val === "(prefers-reduced-motion: no-preference)" || val === "(prefers-color-scheme: light)";
    return {
        matches: matches, media: val, onchange: null
    }
};
window.chrome = function (val) {
    return {
        app: {}, csi: function () {
        }, loadTimes: function () {
        }
    }
}
window.navigator.mimeTypes = function (val) {

}
window.webkitRequestFileSystem = function (val) {

    return function () {

    }
};
window.fetch = function (val) {

};
Object.defineProperty(window, 'top', {
    get: function () {
        return {};
    }
});

window.JSON = JSON;

window.ActiveXObject = undefined;

window.document.createElement = createElement
window.document.getElementById = getElementById
delete __filename;
delete __dirname;

function get_collect(ans) {
    createCount = 0
    // require('./test')
    require("./code")
    let offsetX = 0
    for (let i = 0; i <= 45; i++) {
        window.mousemove({"pageX": offsetX, "pageY": 240})
        offsetX += parseInt(Math.random() * 8)
    }
    console.log(ans)
    window.TDC.setData({ft: "qf_7P___H"})
    result = decodeURIComponent(window.TDC.getData(!0))
    console.log(result.length)
    return result
}

// get_collect("223,75")
console.log(get_collect("45,45"))