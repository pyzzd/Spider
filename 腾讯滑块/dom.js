const CanvasRenderingContext2D = class {
    direction = "ltr"
    fillStyle = "#ff6600"
    filter = "none"
    font = "14px 'Arial'"
    fontKerning = "auto"
    fontStretch = "normal"
    fontVariantCaps = "normal"
    globalAlpha = 1
    globalCompositeOperation = "source-over"
    imageSmoothingEnabled = true
    imageSmoothingQuality = "low"
    letterSpacing = "0px"
    lineCap = "butt"
    lineDashOffset = 0
    lineJoin = "miter"
    lineWidth = 1
    miterLimit = 10
    shadowBlur = 0
    shadowColor = "rgba(0 0 0 0)"
    shadowOffsetX = 0
    shadowOffsetY = 0
    strokeStyle = "#000000"
    textAlign = "start"
    textBaseline = "alphabetic"
    textRendering = "auto"
    wordSpacing = "0px"
    arc = function () {
    }
    stroke = function () {
    }
    fillText = function () {
    }
    fillRect = function () {
    }
};

const WebGLRenderingContext = class {
    drawingBufferColorSpace = "srgb"
    drawingBufferHeight = 150
    drawingBufferWidth = 300
    unpackColorSpace = "srgb"
    canvas = {
        outerHTML: "<canvas></canvas>",
        namespaceURI: "http://www.w3.org/1999/xhtml"
    }
    getExtension = function (val) {
        return {
            UNMASKED_VENDOR_WEBGL: 37445,
            UNMASKED_RENDERER_WEBGL: 37446
        }
    }
    getSupportedExtensions = function () {
        return [
            "ANGLE_instanced_arrays",
            "EXT_blend_minmax",
            "EXT_color_buffer_half_float",
            "EXT_disjoint_timer_query",
            "EXT_float_blend",
            "EXT_frag_depth",
            "EXT_shader_texture_lod",
            "EXT_texture_compression_bptc",
            "EXT_texture_compression_rgtc",
            "EXT_texture_filter_anisotropic",
            "EXT_sRGB",
            "KHR_parallel_shader_compile",
            "OES_element_index_uint",
            "OES_fbo_render_mipmap",
            "OES_standard_derivatives",
            "OES_texture_float",
            "OES_texture_float_linear",
            "OES_texture_half_float",
            "OES_texture_half_float_linear",
            "OES_vertex_array_object",
            "WEBGL_color_buffer_float",
            "WEBGL_compressed_texture_s3tc",
            "WEBGL_compressed_texture_s3tc_srgb",
            "WEBGL_debug_renderer_info",
            "WEBGL_debug_shaders",
            "WEBGL_depth_texture",
            "WEBGL_draw_buffers",
            "WEBGL_lose_context",
            "WEBGL_multi_draw",
        ]
    }
    getParameter = function (val) {
        return val === 37446 ? 'ANGLE (NVIDIA, NVIDIA GeForce GT 1030 (0x00001D01) Direct3D11 vs_5_0 ps_5_0, D3D11)' : 'Google Inc. (NVIDIA)'
    }
}


CSSStyleDeclaration = class {
    animation = ""
    display = ""
}
CSSStyleSheet = class {
    cssRules = [{
        cssText: "::marker { }",
    }]
    disabled = false
    type = "text/css"
}

appendChild = function (val) {
    if (val === undefined) {
        throw new TypeError()
    }
    // console.log("appendChild        " + JSON.stringify(val))
    this.innerHTML += val.outerHTML
    this.childNodes += [val]
    return val
}

removeChild = function (val) {
    if (val === undefined) {
        throw new TypeError()
    }
    // console.log(this)
    // console.log("removeChild        " + JSON.stringify(val))
    if (this.innerHTML.indexOf(val.outerHTML) > -1) {
        this.innerHTML = this.innerHTML.replace(val.outerHTML, "")
        return val
    } else {
        return undefined
    }

}

setAttribute = function (val1, val2) {
    if (val1 === undefined) {
        return
    }
    this[val1] = val2
    window.idMap[val2] = this
}

hasAttribute = function () {
    // console.log("hasAttribute    " + JSON.stringify(arguments))
}

append = function () {
    // console.log("append    " + JSON.stringify(arguments))
}

cloneNode = function () {
    // console.log("cloneNode    " + JSON.stringify(arguments))
    return this
}

replaceChild = function (val1, val2) {
    // console.log("replaceChild    " + JSON.stringify(arguments))
    return val1
}

removeAttribute = function () {
    // console.log("removeAttribute    " + JSON.stringify(arguments))
}

insertBefore = function (val1, val2) {
    // console.log("insertBefore    " + JSON.stringify(arguments))

}

createAttribute = function () {
    // console.log("createAttribute    " + JSON.stringify(arguments))
}
parentNode = function () {
    // console.log("parentNode    " + JSON.stringify(arguments))
}

firstChild = function () {
    // console.log("firstChild    " + JSON.stringify(arguments))
}
lastChild = function () {
    // console.log("lastChild    " + JSON.stringify(arguments))
}
getElementsByName = function () {
    // console.log("getElementsByName    " + JSON.stringify(arguments))
}

createElement = function (val) {
    let tag = {
        type: "",
        style: new CSSStyleDeclaration(),
        innerHTML: "",
        outerHTML: "",
        id: "",
        className: "",
        innerText: "",
        nodeName: val,
        tagName: "",
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
        getElementsByName: getElementsByName,
        frameborder: "",
        border: "",
        marginheight: "",
        marginwidth: "",
        scrolling: "",
        src: "",
        width: "",
        height: "",
    }
    if (val === "canvas") {
        return {
            getContext: function (val) {
                if (val === "webgl" || val === "webgl2" || val === "experimental-webgl") {
                    return new WebGLRenderingContext()
                } else if (val === "2d") {
                    return new CanvasRenderingContext2D()
                }
            }, style: {animation: ""},
            toDataURL: function () {
                return "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACWCAYAAABkW7XSAAAAAXNSR0IArs4c6QAABGJJREFUeF7t1AEJAAAMAsHZv/RyPNwSyDncOQIECEQEFskpJgECBM5geQICBDICBitTlaAECBgsP0CAQEbAYGWqEpQAAYPlBwgQyAgYrExVghIgYLD8AAECGQGDlalKUAIEDJYfIEAgI2CwMlUJSoCAwfIDBAhkBAxWpipBCRAwWH6AAIGMgMHKVCUoAQIGyw8QIJARMFiZqgQlQMBg+QECBDICBitTlaAECBgsP0CAQEbAYGWqEpQAAYPlBwgQyAgYrExVghIgYLD8AAECGQGDlalKUAIEDJYfIEAgI2CwMlUJSoCAwfIDBAhkBAxWpipBCRAwWH6AAIGMgMHKVCUoAQIGyw8QIJARMFiZqgQlQMBg+QECBDICBitTlaAECBgsP0CAQEbAYGWqEpQAAYPlBwgQyAgYrExVghIgYLD8AAECGQGDlalKUAIEDJYfIEAgI2CwMlUJSoCAwfIDBAhkBAxWpipBCRAwWH6AAIGMgMHKVCUoAQIGyw8QIJARMFiZqgQlQMBg+QECBDICBitTlaAECBgsP0CAQEbAYGWqEpQAAYPlBwgQyAgYrExVghIgYLD8AAECGQGDlalKUAIEDJYfIEAgI2CwMlUJSoCAwfIDBAhkBAxWpipBCRAwWH6AAIGMgMHKVCUoAQIGyw8QIJARMFiZqgQlQMBg+QECBDICBitTlaAECBgsP0CAQEbAYGWqEpQAAYPlBwgQyAgYrExVghIgYLD8AAECGQGDlalKUAIEDJYfIEAgI2CwMlUJSoCAwfIDBAhkBAxWpipBCRAwWH6AAIGMgMHKVCUoAQIGyw8QIJARMFiZqgQlQMBg+QECBDICBitTlaAECBgsP0CAQEbAYGWqEpQAAYPlBwgQyAgYrExVghIgYLD8AAECGQGDlalKUAIEDJYfIEAgI2CwMlUJSoCAwfIDBAhkBAxWpipBCRAwWH6AAIGMgMHKVCUoAQIGyw8QIJARMFiZqgQlQMBg+QECBDICBitTlaAECBgsP0CAQEbAYGWqEpQAAYPlBwgQyAgYrExVghIgYLD8AAECGQGDlalKUAIEDJYfIEAgI2CwMlUJSoCAwfIDBAhkBAxWpipBCRAwWH6AAIGMgMHKVCUoAQIGyw8QIJARMFiZqgQlQMBg+QECBDICBitTlaAECBgsP0CAQEbAYGWqEpQAAYPlBwgQyAgYrExVghIgYLD8AAECGQGDlalKUAIEDJYfIEAgI2CwMlUJSoCAwfIDBAhkBAxWpipBCRAwWH6AAIGMgMHKVCUoAQIGyw8QIJARMFiZqgQlQMBg+QECBDICBitTlaAECBgsP0CAQEbAYGWqEpQAAYPlBwgQyAgYrExVghIgYLD8AAECGQGDlalKUAIEDJYfIEAgI2CwMlUJSoCAwfIDBAhkBAxWpipBCRAwWH6AAIGMgMHKVCUoAQIGyw8QIJARMFiZqgQlQMBg+QECBDICBitTlaAECBgsP0CAQEbAYGWqEpQAgQdWMQCX4yW9owAAAABJRU5ErkJggg=="
            },
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
            getElementsByName: getElementsByName,
        }
    } else if (val === undefined) {
        throw new TypeError()
    } else {
        if (val === "iframe") {
            tag["contentDocument"] = {}
            tag["contentWindow"] = {}
        } else if (val === "video") {
            tag["captureStream"] = function () {
            }
        } else if (val === "style") {
            tag["sheet"] = new CSSStyleSheet()
        }
        tag.type = val
        tag.outerHTML = "<" + val + "></" + val + ">"
        return tag
    }
}

getElementById = function (val) {
    if (val === "firsth") {
        h3Tag = createElement("h3")
        h3Tag.id = "firsth"
        h3Tag.innerHTML = "green"
        h3Tag.outerHTML = "<h3 id=\"firsth\">green</h3>"
        return h3Tag
    } else if (val === "preview") {
        videoTag = createElement("video")
        videoTag.id = "preview"
        videoTag.outerHTML = "<video id=\"preview\" width=\"160\" height=\"120\" autoplay=\"\" muted=\"\"></video>"
        // console.log(videoTag)
        return videoTag
    } else if (val === "secondp") {
        pTag = createElement("p")
        color = ["red", "secondp"][createCount++]
        pTag.innerHTML = color
        pTag.innerText = color
        pTag.nodeName = "p"
        pTag.outerHTML = "<p id=\"secondp\">" + color + "</p>"
        return pTag
    } else if (val === "secondh") {
        pTag = createElement("h3")
        pTag.innerHTML = "black"
        pTag.innerText = "black"
        pTag.nodeName = "h3"
        pTag.outerHTML = "<h3 id=\"secondh\">red</h3>"
        return pTag
    } else if (val === "firstp") {
        pTag = createElement("p")
        pTag.innerHTML = "red"
        pTag.innerText = "red"
        pTag.nodeName = "p"
        pTag.outerHTML = "<p id=\"firstp\">red</p>"
        return pTag
    } else if (val === "bar") {
        pTag = createElement("span")
        pTag.innerHTML = "bar"
        pTag.innerText = "bar"
        pTag.nodeName = "span"
        pTag.outerHTML = "<span id=\"bar\">bar</span>"
        return pTag
    } else {
        return window.idMap[val]
    }
}

getElementsByClassName = function () {
    // console.log("getElementsByClassName    " + JSON.stringify(arguments))
}

getElementsByTagName = function () {
    // console.log("getElementsByTagName    " + JSON.stringify(arguments))
}

querySelector = function () {
    // console.log("querySelector    " + JSON.stringify(arguments))
}

querySelectorAll = function () {
    // console.log("querySelectorAll    " + JSON.stringify(arguments))
}

createTextNode = function () {
    // console.log("querySelectorAll    " + JSON.stringify(arguments))
}

getAttribute = function () {
    // console.log("getAttribute    " + JSON.stringify(arguments))
}
