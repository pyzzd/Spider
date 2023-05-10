window["NECaptcha"] = function (_0x2d46a9) {
  function _0x4dfdac(_0x37ca0f) {
    if (_0x639e5e[_0x37ca0f]) return _0x639e5e[_0x37ca0f]["exports"];
    var _0x57a594 = _0x639e5e[_0x37ca0f] = {
      "exports": {},
      "id": _0x37ca0f,
      "loaded": !1
    };
    return _0x2d46a9[_0x37ca0f]["call"](_0x57a594["exports"], _0x57a594, _0x57a594["exports"], _0x4dfdac), _0x57a594["loaded"] = !0, _0x57a594["exports"];
  }
  var _0x639e5e = {};
  return _0x4dfdac["m"] = _0x2d46a9, _0x4dfdac["c"] = _0x639e5e, _0x4dfdac["p"] = "/2.21.5/", _0x4dfdac(0);
}([function (_0xe72c8, _0x3312e5, _0x25a5d6) {
  _0x25a5d6(58), _0x25a5d6(48);
  var _0x54ecc9 = _0x25a5d6(31);
  _0xe72c8["exports"] = _0x54ecc9;
}, function (_0x1bb59, _0x4952dd) {
  var _0x1bbc44 = {}["toString"],
    _0x2a9725 = {
      "slice": function (_0x4b48b1, _0xb8d1e1, _0x1a8b41) {
        for (var _0x3a32ce = [], _0x4e87f6 = _0xb8d1e1 || 0, _0x2d5d8e = _0x1a8b41 || _0x4b48b1["length"]; _0x4e87f6 < _0x2d5d8e; _0x4e87f6++) _0x3a32ce["push"](_0x4e87f6);
        return _0x3a32ce;
      },
      "getObjKey": function (_0x442094, _0x556ef4) {
        for (var _0x153489 in _0x442094) if (_0x442094["hasOwnProperty"](_0x153489) && _0x442094[_0x153489] === _0x556ef4) return _0x153489;
      },
      "typeOf": function (_0x417ef5) {
        return null == _0x417ef5 ? String(_0x417ef5) : _0x1bbc44["call"](_0x417ef5)["slice"](8, -1)["toLowerCase"]();
      },
      "isFn": function (_0x559620) {
        return "function" == typeof _0x559620;
      },
      "log": function (_0x1985cf, _0x14a3ba) {
        var _0x239fb7 = ["info", "warn", "error"];
        return "string" == typeof _0x1985cf && ~_0x239fb7["indexOf"](_0x1985cf) ? void (console && console[_0x1985cf]("[NECaptcha] " + _0x14a3ba)) : void _0x2a9725["error"]("util.log(type, msg): \"type\" must be one string of " + _0x239fb7["toString"]());
      },
      "warn": function (_0x594459) {
        _0x2a9725["log"]("warn", _0x594459);
      },
      "error": function (_0x2a3444) {
        _0x2a9725["log"]("error", _0x2a3444);
      },
      "assert": function (_0x1ab263, _0x5d493f) {
        if (!_0x1ab263) throw new Error("[NECaptcha] " + _0x5d493f);
      },
      "msie": function _0x218e3e() {
        var _0x182a2a = navigator["userAgent"],
          _0x4bf82d = parseInt((/msie (\d+)/["exec"](_0x182a2a["toLowerCase"]()) || [])[1]);
        return isNaN(_0x4bf82d) && (_0x4bf82d = parseInt((/trident\/.*; rv:(\d+)/["exec"](_0x182a2a["toLowerCase"]()) || [])[1])), _0x4bf82d;
      },
      "now": function () {
        return new Date()["getTime"]();
      },
      "getIn": function (_0x4b70fe, _0x54a122, _0x5bdaf1) {
        if ("[object Object]" !== Object["prototype"]["toString"]["call"](_0x4b70fe)) return _0x5bdaf1;
        "string" == typeof _0x54a122 && (_0x54a122 = _0x54a122["split"]("."));
        for (var _0x2c3637 = 0, _0x1c4359 = _0x54a122["length"]; _0x2c3637 < _0x1c4359; _0x2c3637++) {
          var _0x422ffb = _0x54a122[_0x2c3637];
          if (_0x2c3637 < _0x1c4359 - 1 && !_0x4b70fe[_0x422ffb]) return _0x5bdaf1 || void 0;
          _0x4b70fe = _0x4b70fe[_0x422ffb];
        }
        return _0x4b70fe;
      },
      "raf": function _0xe671a9(_0x5f4a4a) {
        var _0x2212a3 = window["requestAnimationFrame"] || window["webkitRequestAnimationFrame"] || function (_0x318a68) {
          window["setTimeout"](_0x318a68, 16);
        };
        _0x2212a3(_0x5f4a4a);
      },
      "nextFrame": function (_0x197178) {
        _0x2a9725["raf"](function () {
          return _0x2a9725["raf"](_0x197178);
        });
      },
      "sample": function (_0x2680f7, _0x341ccb) {
        var _0xcbb31e = _0x2680f7["length"];
        if (_0xcbb31e <= _0x341ccb) return _0x2680f7;
        for (var _0x5bd7f2 = [], _0x478228 = 0, _0x5cf1a1 = 0; _0x5cf1a1 < _0xcbb31e; _0x5cf1a1++) _0x5cf1a1 >= _0x478228 * (_0xcbb31e - 1) / (_0x341ccb - 1) && (_0x5bd7f2["push"](_0x2680f7[_0x5cf1a1]), _0x478228 += 1);
        return _0x5bd7f2;
      },
      "template": function (_0x324c35, _0x35af83) {
        var _0x18b3ff = function (_0x6b1077) {
            return _0x6b1077["replace"](/([.*+?^${}()|[\]\/\\])/g, "\\$1");
          },
          _0x27ccae = {
            "start": "<%",
            "end": "%>",
            "interpolate": /<%=(.+?)%>/g
          },
          _0x1a101f = _0x27ccae,
          _0x10779e = new RegExp("'(?=[^" + _0x1a101f["end"]["substr"](0, 1) + "]*" + _0x18b3ff(_0x1a101f["end"]) + ")", "g"),
          _0x6a9bc6 = new Function("obj", "var p=[],print=function(){p.push.apply(p,arguments);};with(obj){p.push('" + _0x324c35["replace"](/[\r\t\n]/g, " ")["replace"](_0x10779e, "\t")["split"]("'")["join"]("\\'")["split"]("\t")["join"]("'")["replace"](_0x1a101f["interpolate"], "',$1,'")["split"](_0x1a101f["start"])["join"]("');")["split"](_0x1a101f["end"])["join"]("p.push('") + "');}return p.join('');");
        return _0x35af83 ? _0x6a9bc6(_0x35af83) : _0x6a9bc6;
      },
      "uuid": function _0x5b6334(_0x2f1dcd, _0x1654fe) {
        var _0x50e928 = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"["split"](""),
          _0x3d048b = [],
          _0x4c19d2 = void 0;
        if (_0x1654fe = _0x1654fe || _0x50e928["length"], _0x2f1dcd) {
          for (_0x4c19d2 = 0; _0x4c19d2 < _0x2f1dcd; _0x4c19d2++) _0x3d048b[_0x4c19d2] = _0x50e928[0 | Math["random"]() * _0x1654fe];
        } else {
          var _0x15587b = void 0;
          for (_0x3d048b[8] = _0x3d048b[13] = _0x3d048b[18] = _0x3d048b[23] = "-", _0x3d048b[14] = "4", _0x4c19d2 = 0; _0x4c19d2 < 36; _0x4c19d2++) _0x3d048b[_0x4c19d2] || (_0x15587b = 0 | 16 * Math["random"](), _0x3d048b[_0x4c19d2] = _0x50e928[19 === _0x4c19d2 ? 3 & _0x15587b | 8 : _0x15587b]);
        }
        return _0x3d048b["join"]("");
      },
      "reverse": function (_0x1c2123) {
        return Array["isArray"](_0x1c2123) ? _0x1c2123["reverse"]() : "string" === _0x2a9725["typeOf"](_0x1c2123) ? _0x1c2123["split"]("")["reverse"]()["join"]("") : _0x1c2123;
      },
      "encodeUrlParams": function (_0x497fd1) {
        var _0xf52bda = [];
        for (var _0x144470 in _0x497fd1) _0x497fd1["hasOwnProperty"](_0x144470) && _0xf52bda["push"](window["encodeURIComponent"](_0x144470) + "=" + window["encodeURIComponent"](_0x497fd1[_0x144470]));
        return _0xf52bda["join"]("&");
      }
    };
  _0x1bb59["exports"] = _0x2a9725;
}, function (_0x262630, _0x38c8b1, _0x1a7517) {
  function _0x346030(_0x13e16c) {
    if (_0x13e16c = _0x13e16c || window["event"], _0x13e16c[_0x3f8574]) return _0x13e16c;
    this["event"] = _0x13e16c, this["target"] = _0x13e16c["target"] || _0x13e16c["srcElement"];
    var _0x505e9a = this["type"] = _0x13e16c["type"];
    if (_0x499a32["test"](_0x505e9a) && (this["clientX"] = _0x13e16c["clientX"] || _0x13e16c["changedTouches"] && _0x13e16c["changedTouches"][0]["clientX"], this["clientY"] = _0x13e16c["clientY"] || _0x13e16c["changedTouches"] && _0x13e16c["changedTouches"][0]["clientY"], this["pageX"] = null != _0x13e16c["pageX"] ? _0x13e16c["pageX"] : _0x13e16c["clientX"] + _0x46d814["scrollLeft"], this["pageY"] = null != _0x13e16c["pageX"] ? _0x13e16c["pageY"] : _0x13e16c["clientY"] + _0x46d814["scrollTop"], "mouseover" === _0x505e9a || "mouseout" === _0x505e9a)) {
      for (var _0x881818 = _0x13e16c["relatedTarget"] || _0x13e16c[("mouseover" === _0x505e9a ? "from" : "to") + "Element"]; _0x881818 && 3 === _0x881818["nodeType"];) _0x881818 = _0x881818["parentNode"];
      this["relatedTarget"] = _0x881818;
    }
    this[_0x3f8574] = !0;
  }
  function _0x20dcdd(_0x8bc808) {
    var _0x15a78c = _0x8bc808["nodeType"];
    return 1 === _0x15a78c || 9 === _0x15a78c || 11 === _0x15a78c ? "string" == typeof _0x8bc808["textContent"] ? _0x8bc808["textContent"] : _0x8bc808["innerText"] : 3 === _0x15a78c || 4 === _0x15a78c ? _0x8bc808["nodeValue"] : "";
  }
  var _0x400ead,
    _0x279e02,
    _0x2279b7 = "function" == typeof Symbol && "symbol" == typeof Symbol["iterator"] ? function (_0x25bc58) {
      return typeof _0x25bc58;
    } : function (_0x30ae37) {
      return _0x30ae37 && "function" == typeof Symbol && _0x30ae37["constructor"] === Symbol && _0x30ae37 !== Symbol["prototype"] ? "symbol" : typeof _0x30ae37;
    },
    _0x291400 = _0x1a7517(1),
    _0x483073 = _0x1a7517(17),
    _0x378d0e = document["createElement"]("div"),
    _0x499a32 = /^(?:click|dblclick|contextmenu|DOMMouseScroll|(mouse|touch|pointer)(?:\w+))$/,
    _0x46d814 = document;
  _0x46d814 = _0x46d814["compatMode"] && "CSS1Compat" !== _0x46d814["compatMode"] ? _0x46d814["body"] : _0x46d814["documentElement"];
  var _0x323883 = /Mobile/i["test"](window["navigator"]["userAgent"]),
    _0x2048fe = _0x323883 && /Android/i["test"](window["navigator"]["userAgent"]),
    _0x3960eb = function () {
      var _0x48510e = 0,
        _0x4e55f7 = !1,
        _0x3ca5db = window["navigator"];
      "undefined" != typeof _0x3ca5db["maxTouchPoints"] ? _0x48510e = _0x3ca5db["maxTouchPoints"] : "undefined" != typeof _0x3ca5db["msMaxTouchPoints"] && (_0x48510e = _0x3ca5db["msMaxTouchPoints"]);
      try {
        document["createEvent"]("TouchEvent"), _0x4e55f7 = !0;
      } catch (_0x1326fc) {}
      var _0x56f927 = ("ontouchstart" in window);
      return _0x48510e > 0 || _0x4e55f7 || _0x56f927;
    }(),
    _0x5ae787 = function () {
      try {
        return document["createEvent"]("PointerEvent"), !0;
      } catch (_0x2d90c0) {
        return !1;
      }
    }(),
    _0x148656 = function () {
      try {
        var _0x51239d = new Audio();
        return "oncanplaythrough" in _0x51239d;
      } catch (_0x2396f5) {
        return !1;
      }
    }(),
    _0x29b830 = "undefined" != typeof window["CanvasRenderingContext2D"],
    _0x1a6d33 = {
      "click": "touchstart",
      "mousedown": "touchstart",
      "mousemove": "touchmove",
      "mouseup": "touchend"
    },
    _0x3f8574 = "_fixed_" + Math["random"]()["toString"](36)["slice"](2, 7),
    _0x2f5484 = !1;
  try {
    document["createElement"]("div")["addEventListener"]("test", function () {}, Object["defineProperty"]({}, "passive", {
      "get": function () {
        return _0x2f5484 = !0, !1;
      }
    }));
  } catch (_0x23f3fa) {}
  Object["assign"](_0x346030["prototype"], {
    "stop": function () {
      this["preventDefault"]()["stopPropagation"]();
    },
    "preventDefault": function () {
      var _0x265e37 = this["event"];
      return !_0x3960eb && _0x265e37["preventDefault"] ? _0x265e37["preventDefault"]() : _0x265e37["returnValue"] = !1, this;
    },
    "stopPropagation": function () {
      return this["event"]["stopPropagation"] ? this["event"]["stopPropagation"]() : this["event"]["cancelBubble"] = !0, this;
    },
    "stopImmediatePropagation": function () {
      this["event"]["stopImmediatePropagation"] && this["event"]["stopImmediatePropagation"]();
    }
  });
  var _0x3fdccf = {};
  _0x3fdccf["body"] = document["body"], _0x3fdccf["doc"] = document, _0x3fdccf["isMobile"] = _0x323883, _0x3fdccf["isAndroid"] = _0x2048fe, _0x3fdccf["supportTouch"] = _0x3960eb, _0x3fdccf["supportPointer"] = _0x5ae787, _0x3fdccf["supportPassive"] = _0x2f5484, _0x3fdccf["supportAudio"] = _0x148656, _0x3fdccf["supportCanvas"] = _0x29b830, _0x378d0e["addEventListener"] ? (_0x400ead = function (_0xb69b80, _0x443561, _0x4098da) {
    _0xb69b80["addEventListener"](_0x443561, _0x4098da, !1);
  }, _0x279e02 = function (_0x349898, _0x18ad3d, _0x154e5d) {
    _0x349898["removeEventListener"](_0x18ad3d, _0x154e5d, !1);
  }) : (_0x400ead = function (_0x45a44d, _0x47c9a2, _0x3fb7bb) {
    _0x45a44d["attachEvent"]("on" + _0x47c9a2, _0x3fb7bb);
  }, _0x279e02 = function (_0x516386, _0x305f14, _0x55fb03) {
    _0x516386["detachEvent"]("on" + _0x305f14, _0x55fb03);
  }), _0x3fdccf["on"] = function (_0x3a4197, _0x166ca5, _0x439af8) {
    var _0x5ad763 = arguments["length"] > 3 && void 0 !== arguments[3] && arguments[3],
      _0x41a3f1 = _0x166ca5["split"](" ");
    return _0x439af8["real"] = function (_0x4a29fa) {
      var _0x3431bf = new _0x346030(_0x4a29fa);
      _0x3431bf["origin"] = _0x3a4197, _0x439af8["call"](_0x3a4197, _0x3431bf);
    }, _0x41a3f1["map"](function (_0x13c80d) {
      switch (!0) {
        case _0x323883:
          _0x400ead(_0x3a4197, (_0x5ad763 ? _0x13c80d : _0x1a6d33[_0x13c80d]) || _0x13c80d, _0x439af8["real"]);
          break;
        case !_0x323883 && _0x3960eb:
          _0x400ead(_0x3a4197, _0x13c80d, _0x439af8["real"]), "click" !== _0x13c80d && _0x400ead(_0x3a4197, _0x1a6d33[_0x13c80d], _0x439af8["real"]);
          break;
        default:
          _0x400ead(_0x3a4197, _0x13c80d, _0x439af8["real"]);
      }
    }), _0x3fdccf;
  }, _0x3fdccf["once"] = function (_0x4fb761, _0x2587c6, _0x1487a9) {
    var _0x7cff74 = function _0x16b332() {
      var _0x3369ed = _0x1487a9["apply"](this, arguments);
      return _0x3fdccf["off"](_0x4fb761, _0x2587c6, _0x16b332), _0x3369ed;
    };
    return _0x3fdccf["on"](_0x4fb761, _0x2587c6, _0x7cff74);
  }, _0x3fdccf["off"] = function (_0x1f65ea, _0x2c5436, _0x58d49c) {
    var _0x2167ac = arguments["length"] > 3 && void 0 !== arguments[3] && arguments[3],
      _0x4ac338 = _0x2c5436["split"](" ");
    _0x58d49c = _0x58d49c["real"] || _0x58d49c, _0x4ac338["map"](function (_0x518ea1) {
      switch (!0) {
        case _0x323883:
          _0x279e02(_0x1f65ea, (_0x2167ac ? _0x518ea1 : _0x1a6d33[_0x518ea1]) || _0x518ea1, _0x58d49c);
          break;
        case !_0x323883 && _0x3960eb:
          _0x279e02(_0x1f65ea, _0x518ea1, _0x58d49c), _0x279e02(_0x1f65ea, _0x1a6d33[_0x518ea1], _0x58d49c);
          break;
        default:
          _0x279e02(_0x1f65ea, _0x518ea1, _0x58d49c);
      }
    });
  }, _0x3fdccf["find"] = function (_0x2262b6, _0x27743b) {
    return "object" === ("undefined" == typeof _0x2262b6 ? "undefined" : _0x2279b7(_0x2262b6)) && _0x2262b6["nodeType"] ? _0x2262b6 : _0x2262b6 ? (_0x2262b6 = _0x2262b6["trim"](), _0x27743b = _0x27743b || document, _0x27743b["querySelector"] ? _0x27743b["querySelector"](_0x2262b6) : /^#[^#]+$/["test"](_0x2262b6) ? document["getElementById"](_0x2262b6["slice"](1)) : /^\.[^.]+$/["test"](_0x2262b6) ? _0x3fdccf["getElementsByClassName"](_0x2262b6["slice"](1), _0x27743b)[0] || null : /^[^.#]+$/["test"](_0x2262b6) ? _0x27743b["getElementsByTagName"](_0x2262b6)[0] || null : null) : null;
  }, _0x3fdccf["findAll"] = function (_0x56e651, _0x434be2) {
    if (_0x434be2 = _0x434be2 || document, _0x56e651 = _0x56e651["trim"](), _0x434be2["querySelectorAll"]) return _0x434be2["querySelectorAll"](_0x56e651);
    if (/^#[^#]+$/["test"](_0x56e651)) {
      var _0x480d29 = document["getElementById"](_0x56e651["slice"](1));
      return _0x480d29 ? [_0x480d29] : [];
    }
    return /^\.[^.]+$/["test"](_0x56e651) ? _0x3fdccf["getElementsByClassName"](_0x56e651["slice"](1), _0x434be2) : /^[^.#]+$/["test"](_0x56e651) ? _0x434be2["getElementsByTagName"](_0x56e651) : [];
  }, _0x3fdccf["html"] = function (_0x477cd0, _0x1ac0ce) {
    return "undefined" === _0x291400["typeOf"](_0x1ac0ce) ? _0x477cd0["innerHTML"] : void (_0x477cd0["innerHTML"] = _0x1ac0ce);
  }, _0x3fdccf["css"] = function (_0x55a2af, _0x2e2512) {
    _0x55a2af["style"]["cssText"] += ";" + _0x2e2512;
  }, _0x3fdccf["replace"] = function (_0x4b9000, _0x3862a0) {
    _0x3862a0["parentNode"] && _0x3862a0["parentNode"]["replaceChild"](_0x4b9000, _0x3862a0);
  }, _0x3fdccf["remove"] = function (_0x20f940) {
    _0x20f940["parentNode"] && _0x20f940["parentNode"]["removeChild"](_0x20f940);
  }, _0x3fdccf["getComputedStyle"] = function (_0x4f7acc, _0x1b4466) {
    var _0x1c1249 = _0x4f7acc["currentStyle"] || window["getComputedStyle"](_0x4f7acc, null);
    return _0x1b4466 ? _0x1c1249[_0x1b4466] : _0x1c1249;
  }, _0x3fdccf["addClass"] = function (_0x411852, _0x2a785f) {
    if (_0x411852) {
      var _0x2be189 = _0x411852["className"] || "";
      ~(" " + _0x2be189 + " ")["indexOf"](" " + _0x2a785f + " ") || (_0x411852["className"] = _0x2be189 ? _0x2be189 + " " + _0x2a785f : _0x2a785f);
    }
  }, _0x3fdccf["delClass"] = function (_0x4b5d3d, _0x1fcf87) {
    if (_0x4b5d3d) {
      var _0x2e482d = _0x4b5d3d["className"] || "";
      _0x4b5d3d["className"] = (" " + _0x2e482d + " ")["replace"](" " + _0x1fcf87 + " ", " ")["trim"]();
    }
  }, _0x3fdccf["hasClass"] = function (_0x28abf2, _0x1808b7) {
    if (!_0x28abf2) return !1;
    var _0x39d32b = _0x28abf2["className"] || "";
    return ~(" " + _0x39d32b + " ")["indexOf"](" " + _0x1808b7 + " ");
  }, _0x3fdccf["getElementsByClassName"] = function (_0x4fad44, _0x45141a) {
    if (_0x45141a = _0x45141a || document, document["getElementsByClassName"]) return _0x45141a["getElementsByClassName"](_0x4fad44);
    for (var _0x4cd6d9, _0x22814c = _0x45141a["getElementsByTagName"]("*"), _0x5b734b = [], _0x3d0deb = 0, _0x2c9f75 = _0x22814c["length"]; _0x3d0deb < _0x2c9f75; _0x3d0deb++) _0x4cd6d9 = _0x22814c[_0x3d0deb], ~(" " + _0x4cd6d9["className"] + " ")["indexOf"](" " + _0x4fad44 + " ") && _0x5b734b["push"](_0x4cd6d9);
    return _0x5b734b;
  }, _0x3fdccf["getBubblePath"] = function (_0x103db3) {
    for (var _0x2de5f0 = arguments["length"] > 1 && void 0 !== arguments[1] ? arguments[1] : document, _0x191fdd = [], _0x283b90 = _0x103db3; _0x283b90 && _0x283b90 !== _0x2de5f0;) _0x191fdd["push"](_0x283b90), _0x283b90 = _0x283b90["parentNode"];
    return _0x191fdd;
  }, _0x3fdccf["transition"] = function (_0x47b8db, _0x541524) {
    function _0x4407c4() {}
    _0x291400["assert"](_0x47b8db && _0x47b8db["nodeType"], "transition(el, opts) \"el\" must be a DOM element!");
    var _0x3fce07 = {
      "name": "",
      "enter-class": "",
      "enter-active-class": "",
      "leave-class": "",
      "leave-active-class": "",
      "beforeEnter": _0x4407c4,
      "enter": _0x4407c4,
      "afterEnter": _0x4407c4,
      "enterCanceled": _0x4407c4,
      "beforeLeave": _0x4407c4,
      "leave": _0x4407c4,
      "afterLeave": _0x4407c4,
      "leaveCanceled": _0x4407c4,
      "insert": _0x4407c4
    };
    _0x541524 = Object["assign"]({}, _0x3fce07, _0x541524);
    var _0x3be372 = _0x541524,
      _0xc4dbb3 = _0x3be372["name"],
      _0x1b195f = _0x3be372["beforeEnter"],
      _0x506b79 = _0x3be372["enter"],
      _0x311266 = _0x3be372["afterEnter"],
      _0x287076 = _0x3be372["enterCanceled"],
      _0x1e9738 = _0x3be372["beforeLeave"],
      _0x57cab7 = _0x3be372["leave"],
      _0x57fe06 = _0x3be372["afterLeave"],
      _0x3e4288 = _0x3be372["leaveCanceled"],
      _0x23204b = _0x3be372["insert"],
      _0x1a7461 = _0x541524["enter-class"] || _0xc4dbb3 && _0xc4dbb3 + "-enter",
      _0x19a0db = _0x541524["enter-active-class"] || _0xc4dbb3 && _0xc4dbb3 + "-enter-active",
      _0x499f9d = _0x541524["leave-class"] || _0xc4dbb3 && _0xc4dbb3 + "-leave",
      _0x401473 = _0x541524["leave-active-class"] || _0xc4dbb3 && _0xc4dbb3 + "-leave-active",
      _0x1b36e6 = !_0x291400["msie"]() || _0x291400["msie"]() > 9,
      _0x3917a2 = "transitionend",
      _0x330842 = "animationend",
      _0x4eacf8 = !0,
      _0x232e25 = !1,
      _0x4c562f = !1;
    if (void 0 === window["ontransitionend"] && void 0 !== window["onwebkittransitionend"] && (_0x3917a2 = "webkitTransitionEnd"), void 0 === !window["onanimationend"] && void 0 !== window["onwebkitanimationend"] && (_0x330842 = "webkitAnimationEnd"), _0x1b36e6) {
      var _0x468ae6 = function () {
        _0x232e25 && (_0x4eacf8 = !0, _0x232e25 = !1, _0x3fdccf["delClass"](_0x47b8db, _0x19a0db), _0x311266(_0x47b8db)), _0x4c562f && (_0x4c562f = !1, _0x3fdccf["delClass"](_0x47b8db, _0x401473), _0x57fe06(_0x47b8db));
      };
      _0x47b8db["addEventListener"](_0x3917a2, _0x468ae6), _0x47b8db["addEventListener"](_0x330842, _0x468ae6);
    }
    return {
      "enter": function () {
        if (_0x47b8db) {
          if (!_0x1b36e6) return _0x23204b(_0x47b8db), void _0x311266(_0x47b8db);
          _0x47b8db["className"] = _0x483073(_0x47b8db["className"]["trim"]()["split"](/\s+/), _0x1a7461, _0x19a0db), _0x1b195f(_0x47b8db), _0x23204b(_0x47b8db), _0x4eacf8 = !1, _0x232e25 = !0, _0x291400["nextFrame"](function () {
            _0x3fdccf["delClass"](_0x47b8db, _0x1a7461), _0x506b79(_0x47b8db);
          });
        }
      },
      "leave": function () {
        if (_0x47b8db) {
          if (!_0x1b36e6 || !_0x4eacf8) return void _0x57fe06(_0x47b8db);
          _0x47b8db["className"] = _0x483073(_0x47b8db["className"]["trim"]()["split"](/\s+/), _0x499f9d, _0x401473), _0x1e9738(_0x47b8db), _0x4c562f = !0, _0x291400["nextFrame"](function () {
            _0x3fdccf["delClass"](_0x47b8db, _0x499f9d), _0x57cab7(_0x47b8db);
          });
        }
      },
      "cancelEnter": function () {
        _0x232e25 && (_0x232e25 = !1, _0x3fdccf["delClass"](_0x47b8db, _0x19a0db), _0x287076(_0x47b8db));
      },
      "cancelLeave": function () {
        _0x4c562f && (_0x4c562f = !1, _0x3fdccf["delClass"](_0x47b8db, _0x401473), _0x3e4288(_0x47b8db));
      },
      "dispose": function () {
        _0x1b36e6 && (_0x47b8db["removeEventListener"](_0x3917a2, _0x468ae6), _0x47b8db["removeEventListener"](_0x330842, _0x468ae6)), _0x47b8db = null;
      }
    };
  }, _0x3fdccf["text"] = function (_0x1e21f8, _0x316c0b) {
    if (void 0 === _0x316c0b) return _0x20dcdd(_0x1e21f8);
    var _0x9a0031 = _0x1e21f8["nodeType"];
    1 !== _0x9a0031 && 11 !== _0x9a0031 && 9 !== _0x9a0031 || ("string" == typeof _0x1e21f8["textContent"] ? _0x1e21f8["textContent"] = _0x316c0b : _0x1e21f8["innerText"] = _0x316c0b);
  }, _0x378d0e["className"] = "yidun_class", _0x3fdccf["className"] = _0x378d0e["getAttribute"]("className") ? function (_0x4720ca) {
    return _0x4720ca["getAttribute"]("className");
  } : function (_0x4c2618) {
    return _0x4c2618["getAttribute"]("class");
  }, _0x3fdccf["getRect"] = function (_0x1a53c6) {
    var _0x38813d = _0x1a53c6["getBoundingClientRect"]();
    if ("width" in _0x38813d) return _0x38813d;
    var _0x4bef68 = _0x38813d["left"],
      _0x49c00a = _0x38813d["top"],
      _0x287d4e = _0x38813d["right"],
      _0x1663e3 = _0x38813d["bottom"];
    return Object["assign"]({}, _0x38813d, {
      "width": _0x287d4e - _0x4bef68,
      "height": _0x1663e3 - _0x49c00a
    });
  }, _0x262630["exports"] = _0x3fdccf;
}, function (_0x68387, _0x419665) {
  _0x419665["CAPTCHA_TYPE"] = {
    "JIGSAW": 2,
    "POINT": 3,
    "SMS": 4,
    "INTELLISENSE": 5,
    "ICON_POINT": 7,
    "INFERENCE": 9,
    "WORD_ORDER": 10,
    "SPACE": 11,
    "VOICE": 12
  }, _0x419665["CAPTCHA_CLASS"] = {
    "CAPTCHA": "yidun",
    "PANEL": "yidun_panel",
    "SLIDE_INDICATOR": "yidun_slide_indicator",
    "SLIDER": "yidun_slider",
    "JIGSAW": "yidun_jigsaw",
    "POINT": "point",
    "SMS": "yidun_sms",
    "TIPS": "yidun_tips",
    "REFRESH": "yidun_refresh",
    "CONTROL": "yidun_control",
    "BGIMG": "yidun_bgimg",
    "INPUT": "yidun_input",
    "LOADBOX": "yidun_loadbox",
    "LOADICON": "yidun_loadicon",
    "LOADTEXT": "yidun_loadtext",
    "ERROR": "error",
    "WARN": "warn",
    "VERIFY": "verifying",
    "SUCCESS": "success",
    "LOADING": "loading",
    "LOADFAIL": "loadfail"
  }, _0x419665["WIDTH_LIMIT"] = [220, 10000], _0x419665["LARGE_SIZE_TYPE"] = {
    "medium": 18,
    "large": 20,
    "x-large": 24
  }, _0x419665["SIZE_TYPE"] = {
    "DEFAULT": 10,
    "LARGE": 20
  }, _0x419665["SAMPLE_NUM"] = 50, _0x419665["DEVICE"] = {
    "MOUSE": 1,
    "TOUCH": 2,
    "MOUSE_TOUCH": 3
  }, _0x419665["MAX_VERIFICATION"] = 5, _0x419665["RTL_LANGS"] = ["ar", "he", "ug", "fa", "ur"], _0x419665["CACHE_MIN"] = 60000, _0x419665["FILE_DETECT_KEY"] = {
    "core": "NECaptcha",
    "light": "NECaptcha_theme_light",
    "dark": "NECaptcha_theme_dark",
    "plugins": "NECaptcha_plugin",
    "watchman": "initWatchman"
  }, _0x419665["FEEDBACK_URL"] = "http://support.dun.163.com/feedback/captcha", _0x419665["RUN_ENV"] = {
    "WEB": 10,
    "ANDROID": 20,
    "IOS": 30,
    "MINIPROGRAM": 40,
    "JUMPER_MINI_PROGRAM": 50,
    "QUICKAPP": 60
  }, _0x419665["CLOSE_SOURCE"] = {
    "USER": 1,
    "PROCESS": 2,
    "CLOSE": 3
  };
}, function (_0xa54c8a, _0x1dd78e) {
  var _0x2910bf = {
    "INVOKE_HOOK": "INVOKE_HOOK",
    "EVENT_CLOSE": "EVENT_CLOSE",
    "EVENT_RESET": "EVENT_RESET",
    "SWITCH_TYPE": "SWITCH_TYPE",
    "SET_TYPE": "SET_TYPE",
    "SWITCH_LOAD_STATUS": "SWITCH_LOAD_STATUS",
    "UPDATE_VERIFY_STATUS": "UPDATE_VERIFY_STATUS",
    "REFRESH": "REFRESH",
    "UPDATE_COUNTS_OF_VERIFYERROR": "UPDATE_COUNTS_OF_VERIFYERROR",
    "SET_TOKEN": "SET_TOKEN",
    "EVENT_RESET_CLASSIC": "EVENT_RESET_CLASSIC"
  };
  _0xa54c8a["exports"] = _0x2910bf;
}, function (_0xebaf30, _0x5d1c99) {
  function _0x4dbdaf(_0x4ff15a, _0x27f41c, _0x8b89ad) {
    return _0x27f41c in _0x4ff15a ? Object["defineProperty"](_0x4ff15a, _0x27f41c, {
      "value": _0x8b89ad,
      "enumerable": !0,
      "configurable": !0,
      "writable": !0
    }) : _0x4ff15a[_0x27f41c] = _0x8b89ad, _0x4ff15a;
  }
  function _0x23a450(_0x14876d, _0x28bd6e) {
    function _0x1b53f5() {}
    _0x1b53f5["prototype"] = _0x28bd6e["prototype"], _0x14876d["prototype"] = new _0x1b53f5(), _0x14876d["prototype"]["constructor"] = _0x14876d;
  }
  function _0x398088(_0x1d7cf8, _0x2759c2, _0x1ccc36) {
    this["name"] = "CaptchaError", this["code"] = _0x1d7cf8, this["message"] = _0x1d7cf8 + ("(" + _0x24e672[_0x1d7cf8] + ")") + (_0x2759c2 ? " - " + _0x2759c2 : ""), Error["captureStackTrace"] ? Error["captureStackTrace"](this, this["constructor"]) : this["stack"] = new Error()["stack"], this["data"] = _0x1ccc36 || {};
  }
  var _0x43a3e5,
    _0x80f840 = "function" == typeof Symbol && "symbol" == typeof Symbol["iterator"] ? function (_0x93f635) {
      return typeof _0x93f635;
    } : function (_0xb0e8c1) {
      return _0xb0e8c1 && "function" == typeof Symbol && _0xb0e8c1["constructor"] === Symbol && _0xb0e8c1 !== Symbol["prototype"] ? "symbol" : typeof _0xb0e8c1;
    },
    _0x21982a = "prototype",
    _0x1b9b55 = 100,
    _0xcf5198 = 200,
    _0x4a6ef5 = 300,
    _0x36c82d = 430,
    _0x48484d = 432,
    _0x405d83 = 500,
    _0x5c300a = 501,
    _0x4ede16 = 502,
    _0x83687b = 503,
    _0xe88f09 = 504,
    _0x3a9bc2 = 505,
    _0x55d166 = 600,
    _0x4711b9 = 1000,
    _0x24e672 = (_0x43a3e5 = {}, _0x4dbdaf(_0x43a3e5, _0x1b9b55, "script error"), _0x4dbdaf(_0x43a3e5, _0xcf5198, "business error"), _0x4dbdaf(_0x43a3e5, _0x4a6ef5, "unpass error"), _0x4dbdaf(_0x43a3e5, _0x36c82d, "qps limit error"), _0x4dbdaf(_0x43a3e5, _0x48484d, "captcha id is invalid"), _0x4dbdaf(_0x43a3e5, _0x405d83, "request error"), _0x4dbdaf(_0x43a3e5, _0x5c300a, "request api error"), _0x4dbdaf(_0x43a3e5, _0x4ede16, "request script error"), _0x4dbdaf(_0x43a3e5, _0x83687b, "request img error"), _0x4dbdaf(_0x43a3e5, _0xe88f09, "request timeout error"), _0x4dbdaf(_0x43a3e5, _0x3a9bc2, "request audio error"), _0x4dbdaf(_0x43a3e5, _0x55d166, "request anticheat token error"), _0x4dbdaf(_0x43a3e5, _0x4711b9, "unknown error"), _0x43a3e5);
  _0x23a450(_0x398088, Error), _0x398088[_0x21982a]["toString"] = function () {
    var _0x4daead = String(this["stack"]);
    return 0 === _0x4daead["indexOf"]("CaptchaError:") ? _0x4daead : this["name"] + ": " + this["message"] + (_0x4daead ? "\n    " + _0x4daead : "");
  }, _0x398088["set"] = function (_0x39586b, _0x5d231b) {
    "number" == typeof _0x39586b && "string" == typeof _0x5d231b && (_0x24e672[_0x39586b] = _0x5d231b), "object" === ("undefined" == typeof _0x39586b ? "undefined" : _0x80f840(_0x39586b)) && _0x39586b && Object["assign"](_0x24e672, _0x39586b);
  }, _0x398088["get"] = function (_0xc01693) {
    return _0x24e672[_0xc01693];
  }, _0x398088["remove"] = function (_0x1c4279) {
    String(_0x1c4279) in _0x24e672 && delete _0x24e672[_0x1c4279];
  }, _0x5d1c99 = _0xebaf30["exports"] = _0x398088, _0x5d1c99["SCRIPT_ERROR"] = _0x1b9b55, _0x5d1c99["BUSINESS_ERROR"] = _0xcf5198, _0x5d1c99["UNPASS_ERROR"] = _0x4a6ef5, _0x5d1c99["QPS_LIMIT_ERROR"] = _0x36c82d, _0x5d1c99["ID_INVAILD_ERROR"] = _0x48484d, _0x5d1c99["REQUEST_ERROR"] = _0x405d83, _0x5d1c99["REQUEST_API_ERROR"] = _0x5c300a, _0x5d1c99["REQUEST_SCRIPT_ERROR"] = _0x4ede16, _0x5d1c99["REQUEST_IMG_ERROR"] = _0x83687b, _0x5d1c99["REQUEST_TIMEOUT_ERROR"] = _0xe88f09, _0x5d1c99["REQUEST_AUDIO_ERROR"] = _0x3a9bc2, _0x5d1c99["ANTICHEAT_TOKEN_ERROR"] = _0x55d166, _0x5d1c99["UNKNOWN_ERROR"] = _0x4711b9;
}, function (_0x39147e, _0x1cb222, _0x739ff7) {
  function _0x2d6a9e(_0x3b400d) {
    var _0x10297c = {};
    return _0x3b400d["map"](function (_0x2300b2) {
      _0x10297c[_0x2300b2] = function () {
        var _0x1337e3 = this,
          _0x525c4e = _0x23d716["options"]["mixins"] || {};
        (_0x525c4e[_0x2300b2] || [])["map"](function (_0x27c9c9) {
          return _0x27c9c9["call"](_0x1337e3);
        }), this["$options"][_0x2300b2]["map"](function (_0x2d6876) {
          return _0x2d6876["call"](_0x1337e3);
        });
      };
    }), _0x10297c;
  }
  function _0x4a32c6(_0x40158f) {
    function _0x50e167() {}
    function _0x200adf() {
      _0x147231["apply"](this, arguments);
    }
    if (_0x40158f instanceof _0x23d716) return _0x40158f;
    var _0x2d30b3 = {};
    Object["keys"](_0x40158f)["map"](function (_0x9a38ac) {
      ["render"]["indexOf"](_0x9a38ac) > -1 && (_0x2d30b3[_0x9a38ac] = _0x40158f[_0x9a38ac]);
    }), _0x157c53(_0x40158f["methods"]) && Object["assign"](_0x2d30b3, _0x40158f["methods"]);
    var _0x147231 = this["extend"]({});
    return _0x50e167["prototype"] = _0x147231["prototype"], _0x200adf["prototype"] = new _0x50e167(), Object["assign"](_0x200adf["prototype"], _0x2d30b3), _0x200adf["prototype"]["constructor"] = _0x200adf, _0x200adf["_options"] = _0x40158f, _0x200adf["_extend"] = _0x4a32c6, _0x200adf;
  }
  var _0x5728c4 = Object["assign"] || function (_0x37eb1b) {
      for (var _0x4f7db7 = 1; _0x4f7db7 < arguments["length"]; _0x4f7db7++) {
        var _0x1fe2a6 = arguments[_0x4f7db7];
        for (var _0x39ead4 in _0x1fe2a6) Object["prototype"]["hasOwnProperty"]["call"](_0x1fe2a6, _0x39ead4) && (_0x37eb1b[_0x39ead4] = _0x1fe2a6[_0x39ead4]);
      }
      return _0x37eb1b;
    },
    _0x1c853b = _0x739ff7(18),
    _0x510387 = _0x739ff7(42),
    _0x254c6e = _0x739ff7(10),
    _0x311998 = _0x254c6e["getDocFragmentRegex"],
    _0x157c53 = _0x254c6e["isPlainObject"],
    _0x1c2e9d = _0x254c6e["getIn"],
    _0x374b8b = _0x254c6e["parseAttrsStr"],
    _0x3ec978 = _0x254c6e["diffDataToUpdate"],
    _0x31a61e = _0x254c6e["nextTick"],
    _0x4b5ba0 = _0x254c6e["lifeCycleHooks"],
    _0x406aa8 = _0x739ff7(41),
    _0xec91ca = _0x739ff7(40),
    _0x4135b3 = _0x739ff7(43),
    _0x10a0ce = _0x739ff7(2),
    _0x25748c = 0,
    _0x23d716 = _0x1c853b(_0x5728c4({
      "initialize": function () {
        var _0x51bc39 = arguments["length"] > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          _0x55b2d5 = this["constructor"],
          _0x15763d = _0x25748c++;
        this["id"] = "__c_" + _0x15763d, this["name"] = _0x51bc39["name"], this["_isMounted"] = !1, this["$options"] = _0x406aa8(_0x55b2d5["_options"] || {}, _0x51bc39), _0x51bc39["render"] && (this["render"] = _0x51bc39["render"]), _0x51bc39["methods"] && Object["assign"](this, _0x51bc39["methods"]), this["_boundProps"] = _0x51bc39["_boundProps"] || {};
        var _0x5094de = this["$parent"] = _0x51bc39["$parent"] || null;
        if (_0x5094de) {
          if (_0x5094de["$root"]) this["$root"] = _0x5094de["$root"];else {
            for (var _0x27e7c4 = _0x5094de; _0x27e7c4["$parent"];) _0x27e7c4 = _0x27e7c4["$parent"];
            this["$root"] = _0x27e7c4;
          }
        }
        this["beforeCreate"]();
        var _0x3d319e = this["$options"],
          _0x1ec023 = _0x3d319e["template"],
          _0x295140 = _0x3d319e["propsData"],
          _0x161038 = _0x3d319e["data"];
        this["$props"] = this["_validateProps"](_0x295140, !0) || {}, Object["assign"](this, this["$props"]), this["$data"] = "function" == typeof _0x161038 ? _0x161038["call"](this) : _0x161038 || {}, Object["assign"](this, this["$data"]), this["_composer"] = _0x510387(_0x1ec023, this), this["$children"] = [], this["_instantiateChildren"](), this["_updater"] = {
          "id": _0x15763d,
          "instance": this,
          "data": {}
        }, this["created"](), _0x51bc39["el"] && this["$mount"](_0x51bc39["el"]);
      },
      "$mount": function (_0x36266b) {
        this["beforeMount"](), this["_childrenBeforeMount"](), this["_composeString"](this["_composer"], this);
        var _0x1bb5bf = this["_composer"]["toString"]();
        if ("string" == typeof _0x36266b || _0x36266b && 1 === _0x36266b["nodeType"]) _0x36266b = _0x10a0ce["find"](_0x36266b), this["$options"]["abstract"] ? this["$el"] = _0x36266b : (_0x36266b["innerHTML"] = _0x1bb5bf, this["$el"] = _0x36266b["children"][0]);else {
          var _0x5ecad5 = document["createElement"]("div");
          _0x5ecad5["innerHTML"] = _0x1bb5bf, this["$el"] = _0x5ecad5["children"][0], "function" == typeof _0x36266b && _0x36266b(this["$el"]);
        }
        return this["_childrenMounted"](), this["_initEvents"](), this["_isMounted"] = !0, this["mounted"](), this;
      }
    }, _0x2d6a9e(_0x4b5ba0), {
      "$setData": function (_0x537866, _0x40c98a) {
        !_0x40c98a && (_0x537866 = _0x3ec978(_0x537866, this["$data"])), _0x537866 && Object["keys"](_0x537866)["length"] && (this["_resolveWatch"](_0x537866)["map"](function (_0x1d1443) {
          return _0x1d1443();
        }), Object["assign"](this["$data"], _0x537866), Object["assign"](this, this["$data"]), Object["assign"](this["_updater"]["data"], _0x537866), _0xec91ca(this["_updater"]), this["_renderChildren"](_0x537866));
      },
      "$forceUpdate": function () {
        var _0x10306c = Object["assign"]({}, this["$data"], this["$props"]);
        this["$setData"](_0x10306c, !0);
      },
      "$replaceChild": function (_0x3bb1ab, _0xfd3426) {
        var _0x4fbccd = _0xfd3426["$el"]["parentElement"],
          _0x12b75c = _0xfd3426["$el"]["nextSibling"],
          _0x2b485f = void 0;
        _0x2b485f = null === _0x12b75c ? function (_0x19116e) {
          _0x4fbccd["appendChild"](_0x19116e);
        } : function (_0x21fbee) {
          _0x4fbccd["insertBefore"](_0x21fbee, _0x12b75c);
        }, _0x3bb1ab["_boundProps"] = _0xfd3426["_boundProps"], _0x3bb1ab["$parent"] = this, _0xfd3426["$destroy"]();
        var _0x7d5dd9 = this["$children"]["indexOf"](_0xfd3426);
        _0x7d5dd9 > -1 && this["$children"]["splice"](_0x7d5dd9, 1, _0x3bb1ab), _0x3bb1ab["$mount"](_0x2b485f);
      },
      "$destroy": function (_0x478297) {
        this["_isMounted"] && (this["beforeDestroy"](), this["_childrenBeforeDestroy"](), !_0x478297 && !this["$options"]["abstract"] && this["$el"] && this["$el"]["parentElement"] && this["$el"]["parentElement"]["removeChild"](this["$el"]), this["_events"] && (this["_events"]["off"](), this["_events"] = null), this["$el"] = null, this["$props"] = null, this["$data"] = null, this["$root"] = null, this["$parent"] = null, this["$children"] = null, this["$options"] = null, this["_isMounted"] = !1);
      },
      "$nextTick": _0x31a61e,
      "render": function () {},
      "_initEvents": function () {
        var _0x55fb96 = this,
          _0x1c0d82 = this["$el"],
          _0x456508 = this["$options"]["on"];
        if (_0x1c0d82 && _0x157c53(_0x456508)) {
          var _0xac9b5b = {};
          Object["keys"](_0x456508)["map"](function (_0x49c409) {
            _0xac9b5b[_0x49c409] = _0x456508[_0x49c409]["bind"](_0x55fb96);
          }), this["_events"] = new _0x4135b3({
            "$el": _0x1c0d82,
            "events": _0xac9b5b
          });
        }
      },
      "_childrenBeforeMount": function () {
        this["$children"]["map"](function (_0x5937b8) {
          _0x5937b8["beforeMount"](), _0x5937b8["_childrenBeforeMount"]();
        });
      },
      "_childrenMounted": function () {
        this["$children"]["map"](function (_0x59165) {
          _0x59165["_childrenMounted"]();
          var _0xc0c820 = _0x59165["$root"]["$el"];
          _0x59165["$el"] = _0x10a0ce["find"](_0x59165["$options"]["el"], _0xc0c820) || _0x10a0ce["find"](_0x59165["$options"]["el"], _0xc0c820["parentElement"]), _0x59165["_initEvents"](), _0x59165["_isMounted"] = !0, _0x59165["mounted"]();
        });
      },
      "_childrenBeforeDestroy": function () {
        this["$children"]["map"](function (_0x425a0c) {
          _0x425a0c["$destroy"](!0);
        });
      },
      "_composeString": function (_0x4e4368, _0x359905) {
        var _0x4659b7 = this;
        _0x359905["$children"]["map"](function (_0xf02243) {
          _0x4e4368["compose"](_0xf02243["name"], _0xf02243["_composer"]["toString"]()), _0x4659b7["_composeString"](_0x4e4368, _0xf02243);
        });
      },
      "_setProps": function (_0x4b36fa) {
        _0x4b36fa = _0x3ec978(_0x4b36fa, this["$props"]), _0x4b36fa && Object["keys"](_0x4b36fa)["length"] && (_0x4b36fa = this["_validateProps"](_0x4b36fa), this["_resolveWatch"](_0x4b36fa)["map"](function (_0x2131b4) {
          return _0x2131b4();
        }), Object["assign"](this["$props"], _0x4b36fa), Object["assign"](this, this["$props"]), Object["assign"](this["_updater"]["data"], _0x4b36fa), _0xec91ca(this["_updater"]));
      },
      "_resolveWatch": function (_0x15dc2e) {
        var _0x4014d5 = this,
          _0xa61b73 = this["$options"]["watch"];
        if (!_0xa61b73) return [];
        var _0x56bb26 = [];
        return Object["keys"](_0xa61b73)["map"](function (_0x1ed578) {
          var _0x3e38cc = _0x1c2e9d(_0x15dc2e, _0x1ed578);
          if (void 0 !== _0x3e38cc) {
            var _0x53f06c = _0xa61b73[_0x1ed578]["bind"](_0x4014d5, _0x3e38cc, _0x1c2e9d(_0x4014d5, _0x1ed578));
            _0x56bb26["push"](_0x53f06c);
          }
        }), _0x56bb26;
      },
      "_renderChildren": function (_0x58e839) {
        this["$children"]["map"](function (_0x38cdca) {
          var _0x4a63c = _0x38cdca["_boundProps"],
            _0x561c83 = {};
          Object["keys"](_0x4a63c)["map"](function (_0x2b8418) {
            var _0x2ea8db = _0x1c2e9d(_0x58e839, _0x4a63c[_0x2b8418]);
            void 0 !== _0x2ea8db && (_0x561c83[_0x2b8418] = _0x2ea8db);
          }), _0x38cdca["_setProps"](_0x561c83), _0x38cdca["_renderChildren"](_0x561c83);
        });
      },
      "_validateProps": function (_0xf0b4c5, _0xadcfcc) {
        if (_0xf0b4c5) {
          var _0x226d8f = this["$options"]["props"],
            _0x14bef4 = {};
          return _0x157c53(_0x226d8f) ? (Object["keys"](_0x226d8f)["map"](function (_0x3ca0b3) {
            var _0x526b69 = _0x226d8f[_0x3ca0b3],
              _0x5ab364 = _0xf0b4c5[_0x3ca0b3];
            if (_0x157c53(_0x526b69) || (_0x526b69 = {
              "type": _0x526b69
            }), void 0 !== _0x5ab364) {
              var _0xf28eea = Object["prototype"]["toString"];
              if (_0x526b69["type"] && _0xf28eea["call"](_0x5ab364) !== _0xf28eea["call"](_0x526b69["type"]())) throw new Error("[" + _0x3ca0b3 + "] is not valid type.");
              _0x14bef4[_0x3ca0b3] = _0x5ab364;
            } else _0xadcfcc && (_0x14bef4[_0x3ca0b3] = _0x526b69["default"]);
          }), _0x14bef4) : _0xf0b4c5;
        }
      },
      "_instantiateChildren": function () {
        var _0x4bf4ff = this,
          _0x3d792b = this["$options"]["components"];
        if (_0x3d792b) {
          var _0x1e168a = this["_composer"]["toString"]();
          Object["keys"](_0x3d792b)["map"](function (_0x590228) {
            var _0x5e3049 = _0x1e168a["match"](_0x311998(_0x590228, !0)) || [];
            _0x5e3049["map"](function (_0x3483b1) {
              _0x3483b1 = _0x3483b1["match"](_0x311998(_0x590228)) || [];
              var _0x34b1d8 = _0x374b8b(_0x3483b1[1]),
                _0x3efac1 = _0x34b1d8["props"],
                _0x149a55 = _0x34b1d8["bound"];
              Object["keys"](_0x149a55)["map"](function (_0x5adf03) {
                var _0x2ade9 = _0x1c2e9d(_0x4bf4ff, _0x149a55[_0x5adf03]);
                _0x3efac1[_0x5adf03] = "function" == typeof _0x2ade9 ? _0x2ade9["bind"](_0x4bf4ff) : _0x2ade9;
              });
              var _0x3ba941 = _0x23d716["_extend"](_0x3d792b[_0x590228]),
                _0x5663d7 = new _0x3ba941({
                  "name": _0x590228,
                  "propsData": _0x3efac1,
                  "_boundProps": _0x149a55,
                  "$parent": _0x4bf4ff
                });
              _0x4bf4ff["$children"]["push"](_0x5663d7);
            });
          });
        }
      }
    }));
  _0x23d716["options"] = {}, _0x23d716["_extend"] = _0x4a32c6, _0x23d716["mixin"] = function (_0x3bea55) {
    var _0x17c872 = _0x23d716["options"]["mixins"] || {};
    _0x23d716["options"]["mixins"] = _0x406aa8(_0x17c872, _0x3bea55);
  }, _0x39147e["exports"] = _0x23d716;
}, function (_0x418953, _0x44528a, _0x479ef1) {
  function _0x2e26c7(_0x10c5e5, _0x19b60b) {
    var _0x360186 = {};
    for (var _0x835ea6 in _0x10c5e5) _0x19b60b["indexOf"](_0x835ea6) >= 0 || Object["prototype"]["hasOwnProperty"]["call"](_0x10c5e5, _0x835ea6) && (_0x360186[_0x835ea6] = _0x10c5e5[_0x835ea6]);
    return _0x360186;
  }
  function _0x5adbc3(_0x2ace54, _0x4ce4f2) {
    function _0x1026a8() {}
    _0x1026a8["prototype"] = _0x4ce4f2["prototype"], _0x2ace54["prototype"] = new _0x1026a8(), _0x2ace54["prototype"]["constructor"] = _0x2ace54;
  }
  function _0x383b38(_0x12e3d0, _0x14fd63) {
    this["enable"] = !0, this["snaker"] = new _0x21c57c(_0x459d59({}, _0x12e3d0, {
      "pid": "captcha",
      "limit": 9,
      "random": 0.3,
      "version": "2.21.5"
    })), this["_captchaConfig"] = _0x14fd63 || {}, this["events"] = {};
  }
  function _0x48f3c2(_0x6e1ab5, _0x16b9c7) {
    var _0x518a0b = _0x4e6c53(_0x6e1ab5);
    if ("string" === _0x518a0b || "number" === _0x518a0b) return "string" === _0x518a0b && (_0x6e1ab5 = parseFloat(_0x6e1ab5), !isNaN(_0x6e1ab5) && (_0x6e1ab5 = _0x6e1ab5["toFixed"])), _0x6e1ab5["toFixed"](_0x16b9c7);
  }
  function _0x2ccf13(_0x535199) {
    var _0x4c8f31 = arguments["length"] > 1 && void 0 !== arguments[1] ? arguments[1] : {},
      _0x2da534 = "network";
    return function (_0x1202e1, _0x3ea6d8, _0x46dd44, _0x906073) {
      var _0x2d0323 = _0x906073["status"],
        _0x55e23f = _0x906073["error"],
        _0x5bb10b = _0x906073["index"],
        _0xce98ab = _0x906073["res"],
        _0x550252 = _0x906073["perfEntry"];
      try {
        var _0x4f92bd = _0x229c29(_0x1202e1),
          _0x93634f = "image" === _0x46dd44 ? "image" : _0x4f92bd["path"];
        if (_0x55e23f) {
          _0x535199["remove"](_0x2da534, _0x93634f, _0x3ea6d8);
          var _0x562abe = {
              "script": _0x534786,
              "image": _0x2f73fe,
              "audio": _0x19493a,
              "api": _0x19826d
            },
            _0x113214 = new _0x2b87fe(_0x562abe[_0x46dd44], _0x55e23f["message"], _0x459d59({}, _0x4c8f31, {
              "url": _0x1202e1
            }));
          _0x535199["collectErr"](_0x113214, {
            "times": _0x5bb10b + 1
          });
        } else {
          var _0x3547ae = _0x13fe22[_0x2d0323];
          if (_0x4ad20d) {
            if ("end" !== _0x3547ae) return;
            var _0x247ea6 = _0x550252 || _0x4d3722["getEntriesByName"](_0xce98ab && _0xce98ab["_originUrl"] || _0x1202e1)[0];
            if (!_0x247ea6) return;
            _0x535199["collect"](_0x2da534, _0x93634f, {
              "tc": _0x48f3c2(_0x247ea6["responseEnd"] - (_0x247ea6["domainLookupStart"] || _0x247ea6["connectStart"]), 1),
              "dc": _0x48f3c2(_0x247ea6["domainLookupEnd"] - _0x247ea6["domainLookupStart"], 1),
              "cc": _0x48f3c2(_0x247ea6["connectEnd"] - _0x247ea6["connectStart"], 1),
              "rc": _0x48f3c2(_0x247ea6["responseStart"] - _0x247ea6["requestStart"], 1),
              "rr": _0x48f3c2(_0x247ea6["responseEnd"] - _0x247ea6["responseStart"], 1),
              "url": _0x1202e1,
              "host": _0x4f92bd["host"],
              "https": "https" === _0x4f92bd["protocol"],
              "from": "PERF"
            }, {}, _0x459d59({}, _0x4c8f31));
          } else _0x535199["collect"](_0x2da534, _0x93634f, {
            "timestamp": new Date()["valueOf"](),
            "url": _0x1202e1,
            "host": _0x4f92bd["host"],
            "https": "https" === _0x4f92bd["protocol"],
            "from": "js"
          }, {
            "rangeId": _0x3ea6d8,
            "rangeType": _0x3547ae
          }, _0x459d59({}, _0x4c8f31));
        }
      } catch (_0x3a6512) {}
    };
  }
  var _0x459d59 = Object["assign"] || function (_0x4ce2fe) {
      for (var _0x93238b = 1; _0x93238b < arguments["length"]; _0x93238b++) {
        var _0x37c16b = arguments[_0x93238b];
        for (var _0x4b5910 in _0x37c16b) Object["prototype"]["hasOwnProperty"]["call"](_0x37c16b, _0x4b5910) && (_0x4ce2fe[_0x4b5910] = _0x37c16b[_0x4b5910]);
      }
      return _0x4ce2fe;
    },
    _0x21c57c = _0x479ef1(24),
    _0x229c29 = _0x479ef1(45),
    _0x57d31e = _0x479ef1(1),
    _0x4e6c53 = _0x57d31e["typeOf"],
    _0x2b87fe = _0x479ef1(5),
    _0x42bfdb = _0x479ef1(36),
    _0x534786 = _0x2b87fe["REQUEST_SCRIPT_ERROR"],
    _0x19826d = _0x2b87fe["REQUEST_API_ERROR"],
    _0x2f73fe = _0x2b87fe["REQUEST_IMG_ERROR"],
    _0x19493a = _0x2b87fe["REQUEST_AUDIO_ERROR"],
    _0x2ae71f = "prototype",
    _0x4d3722 = window["performance"] || window["msPerformance"] || window["webkitPerformance"] || {},
    _0x4ad20d = _0x4d3722 && "getEntriesByName" in _0x4d3722;
  _0x5adbc3(_0x383b38, Error), _0x383b38[_0x2ae71f]["collect"] = function (_0x22516d, _0x1c4091, _0x290f5c, _0x2b86c8, _0x23e607) {
    var _0x270bcd = _0x2b86c8["rangeId"],
      _0x74f69c = _0x2b86c8["rangeType"];
    if (this["enable"]) try {
      if (_0x270bcd) {
        var _0x540d4e = _0x290f5c["timestamp"],
          _0xe939b2 = _0x2e26c7(_0x290f5c, ["timestamp"]);
        !this["events"][_0x22516d] && (this["events"][_0x22516d] = {}), !this["events"][_0x22516d][_0x1c4091] && (this["events"][_0x22516d][_0x1c4091] = {});
        var _0x43cb34 = this["events"][_0x22516d][_0x1c4091][_0x270bcd];
        if ("start" !== _0x74f69c || _0x43cb34) {
          if ("end" === _0x74f69c && _0x43cb34 && !_0x43cb34["end"]) {
            Object["assign"](_0x43cb34, _0x459d59({
              "end": _0x540d4e,
              "zoneId": this["_captchaConfig"]["zoneId"],
              "extra": _0x23e607
            }, _0xe939b2));
            var _0x50c39f = _0x43cb34["end"],
              _0x48996a = _0x43cb34["start"],
              _0x527ade = _0x43cb34["extra"],
              _0x1d7cd8 = _0x2e26c7(_0x43cb34, ["end", "start", "extra"]);
            this["snaker"]["trackAsync"](_0x22516d, _0x1c4091, window["encodeURIComponent"](JSON["stringify"](_0x459d59({
              "tc": _0x50c39f - _0x48996a
            }, _0x1d7cd8))), _0x459d59({}, _0x527ade, {
              "nts": new Date()["valueOf"]()
            })), this["events"][_0x22516d][_0x1c4091][_0x270bcd] = null;
          }
        } else this["events"][_0x22516d][_0x1c4091][_0x270bcd] = _0x459d59({
          "ev": _0x43cb34,
          "start": _0x540d4e,
          "extra": _0x23e607
        }, _0xe939b2);
      } else this["snaker"]["trackAsync"](_0x22516d, _0x1c4091, "string" === _0x4e6c53(_0x290f5c) ? _0x290f5c : window["encodeURIComponent"](JSON["stringify"](_0x459d59({}, _0x290f5c, {
        "zoneId": this["_captchaConfig"]["zoneId"]
      }))), _0x459d59({}, _0x23e607, {
        "nts": new Date()["valueOf"]()
      }));
    } catch (_0x520c36) {}
  }, _0x383b38[_0x2ae71f]["collectErr"] = function (_0x31c5e6, _0x3bd6ae) {
    _0x42bfdb(_0x31c5e6, this["_captchaConfig"], _0x459d59({}, _0x3bd6ae));
  }, _0x383b38[_0x2ae71f]["remove"] = function (_0x37cab1, _0x13aa14, _0xeb3caf) {
    _0x37cab1 && _0x13aa14 && _0xeb3caf ? this["events"][_0x37cab1] && this["events"][_0x37cab1][_0x13aa14] && delete this["events"][_0x37cab1][_0x13aa14][_0xeb3caf] : _0x37cab1 && _0x13aa14 ? this["events"][_0x37cab1] && (this["events"][_0x37cab1][_0x13aa14] = {}) : _0x37cab1 && (this["events"][_0x37cab1] = {});
  }, _0x383b38[_0x2ae71f]["clear"] = function () {
    if (this["enable"]) try {
      this["snaker"]["flush"](), this["events"] = {};
    } catch (_0x70d66d) {}
  };
  var _0x13fe22 = {
    "start": "start",
    "success": "end"
  };
  _0x44528a = _0x418953["exports"] = _0x383b38, _0x44528a["createNetCollect"] = _0x2ccf13, _0x44528a["supportEntries"] = _0x4ad20d;
}, function (_0x55f4df, _0x1e2576) {
  function _0x46a69f(_0x4bcf2b, _0x5ae99a) {
    function _0x3527fc(_0x306a36, _0x1c22db) {
      return _0x306a36["charCodeAt"](Math["floor"](_0x1c22db % _0x306a36["length"]));
    }
    function _0x65ea4f(_0x48bf4a, _0x18f113) {
      return _0x18f113["split"]("")["map"](function (_0x5287eb, _0xa0edcf) {
        return _0x5287eb["charCodeAt"](0) ^ _0x3527fc(_0x48bf4a, _0xa0edcf);
      });
    }
    return _0x5ae99a = _0x65ea4f(_0x4bcf2b, _0x5ae99a), _0xf778df(_0x5ae99a);
  }
  __toByte = function (_0x202ad9) {
    function _0x163413(_0x77a615) {
      return _0x202ad9["apply"](this, arguments);
    }
    return _0x163413["toString"] = function () {
      return _0x202ad9["toString"]();
    }, _0x163413;
  }(function (_0x421070) {
    if (_0x421070 < -128) return __toByte(128 - (-128 - _0x421070));
    if (_0x421070 >= -128 && _0x421070 <= 127) return _0x421070;
    if (_0x421070 > 127) return __toByte(-129 + _0x421070 - 127);
    throw new Error("1001");
  });
  var _0x362dd1 = function (_0x2b36cb, _0x4d239f) {
      return __toByte(_0x2b36cb + _0x4d239f);
    },
    _0x1202d7 = function (_0xaf8c49, _0x233a23) {
      if (null == _0xaf8c49) return null;
      if (null == _0x233a23) return _0xaf8c49;
      for (var _0xdc9a10 = [], _0x3d891b = _0x233a23["length"], _0x3dc866 = 0, _0x1054dd = _0xaf8c49["length"]; _0x3dc866 < _0x1054dd; _0x3dc866++) _0xdc9a10[_0x3dc866] = _0x362dd1(_0xaf8c49[_0x3dc866], _0x233a23[_0x3dc866 % _0x3d891b]);
      return _0xdc9a10;
    },
    _0x3d127c = function (_0x366b81, _0x279743) {
      return _0x366b81 = __toByte(_0x366b81), _0x279743 = __toByte(_0x279743), __toByte(_0x366b81 ^ _0x279743);
    },
    _0x5e9a8 = function (_0x6f3ac1, _0x2850df) {
      if (null == _0x6f3ac1 || null == _0x2850df || _0x6f3ac1["length"] != _0x2850df["length"]) return _0x6f3ac1;
      for (var _0x4baded = [], _0x36e0b1 = _0x6f3ac1["length"], _0x57a77b = 0, _0x39122e = _0x36e0b1; _0x57a77b < _0x39122e; _0x57a77b++) _0x4baded[_0x57a77b] = _0x3d127c(_0x6f3ac1[_0x57a77b], _0x2850df[_0x57a77b]);
      return _0x4baded;
    },
    _0x6f9c1e = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"],
    _0x6344d7 = function (_0x3ef192) {
      var _0x3c6f97 = [];
      return _0x3c6f97["push"](_0x6f9c1e[_0x3ef192 >>> 4 & 15]), _0x3c6f97["push"](_0x6f9c1e[15 & _0x3ef192]), _0x3c6f97["join"]("");
    },
    _0x17983f = function (_0x295c5e) {
      var _0x570336 = _0x295c5e["length"];
      if (null == _0x295c5e || _0x570336 < 0) return new String("");
      for (var _0x1e8ee0 = [], _0x66b444 = 0; _0x66b444 < _0x570336; _0x66b444++) _0x1e8ee0["push"](_0x6344d7(_0x295c5e[_0x66b444]));
      return _0x1e8ee0["join"]("");
    },
    _0x316e40 = function (_0x2e711b) {
      if (null == _0x2e711b || 0 == _0x2e711b["length"]) return [];
      for (var _0x1730d1 = new String(_0x2e711b), _0x12cdc9 = [], _0x2dc68a = _0x1730d1["length"] / 2, _0x3acc88 = 0, _0x25b725 = 0; _0x25b725 < _0x2dc68a; _0x25b725++) {
        var _0x33ea0b = parseInt(_0x1730d1["charAt"](_0x3acc88++), 16) << 4,
          _0x2b372e = parseInt(_0x1730d1["charAt"](_0x3acc88++), 16);
        _0x12cdc9[_0x25b725] = __toByte(_0x33ea0b + _0x2b372e);
      }
      return _0x12cdc9;
    },
    _0x356450 = function (_0x53727e) {
      if (null == _0x53727e || void 0 == _0x53727e) return _0x53727e;
      for (var _0xb979df = encodeURIComponent(_0x53727e), _0x38e506 = [], _0x58d87f = _0xb979df["length"], _0x4210f0 = 0; _0x4210f0 < _0x58d87f; _0x4210f0++) if ("%" == _0xb979df["charAt"](_0x4210f0)) {
        if (!(_0x4210f0 + 2 < _0x58d87f)) throw new Error("1009");
        _0x38e506["push"](_0x316e40(_0xb979df["charAt"](++_0x4210f0) + "" + _0xb979df["charAt"](++_0x4210f0))[0]);
      } else _0x38e506["push"](_0xb979df["charCodeAt"](_0x4210f0));
      return _0x38e506;
    },
    _0x235e1b = function (_0x1531a5) {
      var _0x5dae95 = [];
      return _0x5dae95[0] = _0x1531a5 >>> 24 & 255, _0x5dae95[1] = _0x1531a5 >>> 16 & 255, _0x5dae95[2] = _0x1531a5 >>> 8 & 255, _0x5dae95[3] = 255 & _0x1531a5, _0x5dae95;
    },
    _0x37a4c1 = function (_0x36e848) {
      var _0x6a2e45 = _0x235e1b(_0x36e848);
      return _0x17983f(_0x6a2e45);
    },
    _0x5bc8f1 = function (_0x4f434a, _0x1a3e15, _0x4ec158) {
      var _0x2d0dae = [];
      if (null == _0x4f434a || 0 == _0x4f434a["length"]) return _0x2d0dae;
      if (_0x4f434a["length"] < _0x4ec158) throw new Error("1003");
      for (var _0x51db4c = 0; _0x51db4c < _0x4ec158; _0x51db4c++) _0x2d0dae[_0x51db4c] = _0x4f434a[_0x1a3e15 + _0x51db4c];
      return _0x2d0dae;
    },
    _0x5f5df2 = function (_0x34fc68, _0x426774, _0x49b624, _0x30e661, _0x5253c4) {
      if (null == _0x34fc68 || 0 == _0x34fc68["length"]) return _0x49b624;
      if (null == _0x49b624) throw new Error("1004");
      if (_0x34fc68["length"] < _0x5253c4) throw new Error("1003");
      for (var _0x4ab5c6 = 0; _0x4ab5c6 < _0x5253c4; _0x4ab5c6++) _0x49b624[_0x30e661 + _0x4ab5c6] = _0x34fc68[_0x426774 + _0x4ab5c6];
      return _0x49b624;
    },
    _0x5633d0 = function (_0x2dfeaf) {
      for (var _0x4c42d4 = [], _0x26e0cd = 0; _0x26e0cd < _0x2dfeaf; _0x26e0cd++) _0x4c42d4[_0x26e0cd] = 0;
      return _0x4c42d4;
    },
    _0x1d3717 = function (_0x398ecd) {
      return null == _0x398ecd || void 0 == _0x398ecd || "" == _0x398ecd;
    },
    _0x24cdaf = function () {
      return ["i", "/", "x", "1", "X", "g", "U", "0", "z", "7", "k", "8", "N", "+", "l", "C", "p", "O", "n", "P", "r", "v", "6", "\\", "q", "u", "2", "G", "j", "9", "H", "R", "c", "w", "T", "Y", "Z", "4", "b", "f", "S", "J", "B", "h", "a", "W", "s", "t", "A", "e", "o", "M", "I", "E", "Q", "5", "m", "D", "d", "V", "F", "L", "K", "y"];
    },
    _0x3cf8f3 = function () {
      return "3";
    },
    _0xf1a626 = function (_0xa1f20d, _0x1ea984, _0x23eb7f) {
      var _0x2a7589,
        _0x645c42,
        _0x90becf,
        _0x4e7741 = _0x24cdaf(),
        _0x3f3142 = _0x3cf8f3(),
        _0x5554bf = [];
      if (1 == _0x23eb7f) _0x2a7589 = _0xa1f20d[_0x1ea984], _0x645c42 = 0, _0x90becf = 0, _0x5554bf["push"](_0x4e7741[_0x2a7589 >>> 2 & 63]), _0x5554bf["push"](_0x4e7741[(_0x2a7589 << 4 & 48) + (_0x645c42 >>> 4 & 15)]), _0x5554bf["push"](_0x3f3142), _0x5554bf["push"](_0x3f3142);else {
        if (2 == _0x23eb7f) _0x2a7589 = _0xa1f20d[_0x1ea984], _0x645c42 = _0xa1f20d[_0x1ea984 + 1], _0x90becf = 0, _0x5554bf["push"](_0x4e7741[_0x2a7589 >>> 2 & 63]), _0x5554bf["push"](_0x4e7741[(_0x2a7589 << 4 & 48) + (_0x645c42 >>> 4 & 15)]), _0x5554bf["push"](_0x4e7741[(_0x645c42 << 2 & 60) + (_0x90becf >>> 6 & 3)]), _0x5554bf["push"](_0x3f3142);else {
          if (3 != _0x23eb7f) throw new Error("1010");
          _0x2a7589 = _0xa1f20d[_0x1ea984], _0x645c42 = _0xa1f20d[_0x1ea984 + 1], _0x90becf = _0xa1f20d[_0x1ea984 + 2], _0x5554bf["push"](_0x4e7741[_0x2a7589 >>> 2 & 63]), _0x5554bf["push"](_0x4e7741[(_0x2a7589 << 4 & 48) + (_0x645c42 >>> 4 & 15)]), _0x5554bf["push"](_0x4e7741[(_0x645c42 << 2 & 60) + (_0x90becf >>> 6 & 3)]), _0x5554bf["push"](_0x4e7741[63 & _0x90becf]);
        }
      }
      return _0x5554bf["join"]("");
    },
    _0xf778df = function (_0x37846b) {
      if (null == _0x37846b || void 0 == _0x37846b) return null;
      if (0 == _0x37846b["length"]) return "";
      var _0x11baae = 3;
      try {
        for (var _0xac2fab = [], _0xf83c7a = 0; _0xf83c7a < _0x37846b["length"];) {
          if (!(_0xf83c7a + _0x11baae <= _0x37846b["length"])) {
            _0xac2fab["push"](_0xf1a626(_0x37846b, _0xf83c7a, _0x37846b["length"] - _0xf83c7a));
            break;
          }
          _0xac2fab["push"](_0xf1a626(_0x37846b, _0xf83c7a, _0x11baae)), _0xf83c7a += _0x11baae;
        }
        return _0xac2fab["join"]("");
      } catch (_0xed515) {
        throw new Error("1010");
      }
    },
    _0x31c9b3 = function (_0x3253da) {
      return _0xf778df(_0x356450(_0x3253da));
    },
    _0x485c5c = [0, 1996959894, 3993919788, 2567524794, 124634137, 1886057615, 3915621685, 2657392035, 249268274, 2044508324, 3772115230, 2547177864, 162941995, 2125561021, 3887607047, 2428444049, 498536548, 1789927666, 4089016648, 2227061214, 450548861, 1843258603, 4107580753, 2211677639, 325883990, 1684777152, 4251122042, 2321926636, 335633487, 1661365465, 4195302755, 2366115317, 997073096, 1281953886, 3579855332, 2724688242, 1006888145, 1258607687, 3524101629, 2768942443, 901097722, 1119000684, 3686517206, 2898065728, 853044451, 1172266101, 3705015759, 2882616665, 651767980, 1373503546, 3369554304, 3218104598, 565507253, 1454621731, 3485111705, 3099436303, 671266974, 1594198024, 3322730930, 2970347812, 795835527, 1483230225, 3244367275, 3060149565, 1994146192, 31158534, 2563907772, 4023717930, 1907459465, 112637215, 2680153253, 3904427059, 2013776290, 251722036, 2517215374, 3775830040, 2137656763, 141376813, 2439277719, 3865271297, 1802195444, 476864866, 2238001368, 4066508878, 1812370925, 453092731, 2181625025, 4111451223, 1706088902, 314042704, 2344532202, 4240017532, 1658658271, 366619977, 2362670323, 4224994405, 1303535960, 984961486, 2747007092, 3569037538, 1256170817, 1037604311, 2765210733, 3554079995, 1131014506, 879679996, 2909243462, 3663771856, 1141124467, 855842277, 2852801631, 3708648649, 1342533948, 654459306, 3188396048, 3373015174, 1466479909, 544179635, 3110523913, 3462522015, 1591671054, 702138776, 2966460450, 3352799412, 1504918807, 783551873, 3082640443, 3233442989, 3988292384, 2596254646, 62317068, 1957810842, 3939845945, 2647816111, 81470997, 1943803523, 3814918930, 2489596804, 225274430, 2053790376, 3826175755, 2466906013, 167816743, 2097651377, 4027552580, 2265490386, 503444072, 1762050814, 4150417245, 2154129355, 426522225, 1852507879, 4275313526, 2312317920, 282753626, 1742555852, 4189708143, 2394877945, 397917763, 1622183637, 3604390888, 2714866558, 953729732, 1340076626, 3518719985, 2797360999, 1068828381, 1219638859, 3624741850, 2936675148, 906185462, 1090812512, 3747672003, 2825379669, 829329135, 1181335161, 3412177804, 3160834842, 628085408, 1382605366, 3423369109, 3138078467, 570562233, 1426400815, 3317316542, 2998733608, 733239954, 1555261956, 3268935591, 3050360625, 752459403, 1541320221, 2607071920, 3965973030, 1969922972, 40735498, 2617837225, 3943577151, 1913087877, 83908371, 2512341634, 3803740692, 2075208622, 213261112, 2463272603, 3855990285, 2094854071, 198958881, 2262029012, 4057260610, 1759359992, 534414190, 2176718541, 4139329115, 1873836001, 414664567, 2282248934, 4279200368, 1711684554, 285281116, 2405801727, 4167216745, 1634467795, 376229701, 2685067896, 3608007406, 1308918612, 956543938, 2808555105, 3495958263, 1231636301, 1047427035, 2932959818, 3654703836, 1088359270, 936918000, 2847714899, 3736837829, 1202900863, 817233897, 3183342108, 3401237130, 1404277552, 615818150, 3134207493, 3453421203, 1423857449, 601450431, 3009837614, 3294710456, 1567103746, 711928724, 3020668471, 3272380065, 1510334235, 755167117],
    _0x509826 = function (_0x2cf783) {
      var _0x1828a4 = 4294967295;
      if (null != _0x2cf783) for (var _0x39eedd = 0; _0x39eedd < _0x2cf783["length"]; _0x39eedd++) {
        var _0xf97e96 = _0x2cf783[_0x39eedd];
        _0x1828a4 = _0x1828a4 >>> 8 ^ _0x485c5c[255 & (_0x1828a4 ^ _0xf97e96)];
      }
      return _0x37a4c1(4294967295 ^ _0x1828a4, 8);
    },
    _0x4b8e98 = function (_0xc64913) {
      return _0x509826(null == _0xc64913 ? [] : _0x356450(_0xc64913));
    },
    _0x52aff0 = [120, 85, -95, -84, 122, 38, -16, -53, -11, 16, 55, 3, 125, -29, 32, -128, -94, 77, 15, 106, -88, -100, -34, 88, 78, 105, -104, -90, -70, 90, -119, -28, -19, -47, -111, 117, -105, -62, -35, 2, -14, -32, 114, 23, -21, 25, -7, -92, 96, -103, 126, 112, -113, -65, -109, -44, 47, 48, 86, 75, 62, -26, 72, -56, -27, 66, -42, 63, 14, 92, 59, -101, 19, -33, 12, -18, -126, -50, -67, 42, 7, -60, -81, -93, -86, 40, -69, -37, 98, -63, -59, 108, 46, -45, 93, 102, 65, -79, 73, -23, -46, 37, -114, -15, 44, -54, 99, -10, 60, -96, 76, 26, 61, -107, 18, -116, -55, -40, 57, -76, -82, 45, 0, -112, -77, 29, 43, -30, 109, -91, -83, 107, 101, 81, -52, -71, 84, 36, -41, 68, 39, -75, -122, -6, 11, -80, -17, -74, -73, 35, 49, -49, -127, 80, 103, 79, -25, 52, -43, 56, 41, -61, -24, 17, -118, 115, -38, 8, -78, 33, -85, -106, 58, -98, -108, 94, 116, -125, -51, -9, 71, 82, 87, -115, 9, 69, -123, 123, -117, 113, -22, -124, -87, 64, 13, 21, -89, -2, -99, -97, 1, -4, 34, 20, 83, 119, 30, -12, -110, -66, 118, -48, 6, -36, 104, -58, -102, 97, 5, -20, 31, -72, 70, -39, 67, -68, -57, 110, 89, 51, 10, -120, 28, 111, 127, 22, -3, 54, 53, -1, 100, 74, 50, 91, 27, -31, -5, -64, 124, -121, 24, -13, 95, 121, -8, 4],
    _0x39a3ee = 4,
    _0x3c2853 = 4,
    _0x25a30b = 4,
    _0x33b1b2 = 4,
    _0x2262f4 = function (_0x4b9867) {
      var _0x474848 = [];
      if (null == _0x4b9867 || void 0 == _0x4b9867 || 0 == _0x4b9867["length"]) return _0x5633d0(_0x3c2853);
      if (_0x4b9867["length"] >= _0x3c2853) return _0x5bc8f1(_0x4b9867, 0, _0x3c2853);
      for (var _0x138ca3 = 0; _0x138ca3 < _0x3c2853; _0x138ca3++) _0x474848[_0x138ca3] = _0x4b9867[_0x138ca3 % _0x4b9867["length"]];
      return _0x474848;
    },
    _0x716802 = function (_0x193cf4) {
      if (null == _0x193cf4 || void 0 == _0x193cf4 || 0 == _0x193cf4["length"]) return _0x5633d0(_0x39a3ee);
      var _0x34730f = _0x193cf4["length"],
        _0x4e8c4e = 0;
      _0x4e8c4e = _0x34730f % _0x39a3ee <= _0x39a3ee - _0x25a30b ? _0x39a3ee - _0x34730f % _0x39a3ee - _0x25a30b : 2 * _0x39a3ee - _0x34730f % _0x39a3ee - _0x25a30b;
      var _0x2b74b8 = [];
      _0x5f5df2(_0x193cf4, 0, _0x2b74b8, 0, _0x34730f);
      for (var _0x5e7369 = 0; _0x5e7369 < _0x4e8c4e; _0x5e7369++) _0x2b74b8[_0x34730f + _0x5e7369] = 0;
      var _0xea0384 = _0x235e1b(_0x34730f);
      return _0x5f5df2(_0xea0384, 0, _0x2b74b8, _0x34730f + _0x4e8c4e, _0x25a30b), _0x2b74b8;
    },
    _0x25ef08 = function (_0x5b8ee0) {
      if (null == _0x5b8ee0 || _0x5b8ee0["length"] % _0x39a3ee != 0) throw new Error("1005");
      for (var _0x495642 = [], _0x1d8e8e = 0, _0x1ef51d = _0x5b8ee0["length"] / _0x39a3ee, _0x1ee451 = 0; _0x1ee451 < _0x1ef51d; _0x1ee451++) {
        _0x495642[_0x1ee451] = [];
        for (var _0x125de7 = 0; _0x125de7 < _0x39a3ee; _0x125de7++) _0x495642[_0x1ee451][_0x125de7] = _0x5b8ee0[_0x1d8e8e++];
      }
      return _0x495642;
    },
    _0x3183fd = function (_0x3136b0) {
      var _0x3d11d3 = _0x3136b0 >>> 4 & 15,
        _0x43b738 = 15 & _0x3136b0,
        _0x13c4ad = 16 * _0x3d11d3 + _0x43b738;
      return _0x52aff0[_0x13c4ad];
    },
    _0xfd098c = function (_0x10d57d) {
      if (null == _0x10d57d) return null;
      for (var _0x40476e = [], _0x2a22c5 = 0, _0x271329 = _0x10d57d["length"]; _0x2a22c5 < _0x271329; _0x2a22c5++) _0x40476e[_0x2a22c5] = _0x3183fd(_0x10d57d[_0x2a22c5]);
      return _0x40476e;
    },
    _0x597b08 = function () {
      for (var _0x5aa6e5 = [], _0x10e642 = 0; _0x10e642 < _0x33b1b2; _0x10e642++) {
        var _0x588295 = 256 * Math["random"]();
        _0x588295 = Math["floor"](_0x588295), _0x5aa6e5[_0x10e642] = __toByte(_0x588295);
      }
      return _0x5aa6e5;
    },
    _0x11fe49 = function (_0x17aacf, _0x1a3aec) {
      if (null == _0x17aacf) return null;
      for (var _0x3ca6c9 = __toByte(_0x1a3aec), _0x48630c = [], _0x2d4012 = _0x17aacf["length"], _0x4f573b = 0; _0x4f573b < _0x2d4012; _0x4f573b++) _0x48630c["push"](_0x3d127c(_0x17aacf[_0x4f573b], _0x3ca6c9));
      return _0x48630c;
    },
    _0x5bd443 = function (_0x4eb0c9, _0x18cf2f) {
      if (null == _0x4eb0c9) return null;
      for (var _0x4e5779 = __toByte(_0x18cf2f), _0x59deb3 = [], _0xc85b42 = _0x4eb0c9["length"], _0x28e884 = 0; _0x28e884 < _0xc85b42; _0x28e884++) _0x59deb3["push"](_0x362dd1(_0x4eb0c9[_0x28e884], _0x4e5779));
      return _0x59deb3;
    },
    _0x11fe49 = function (_0x231f51, _0x32b025) {
      if (null == _0x231f51) return null;
      for (var _0x43108a = __toByte(_0x32b025), _0x301996 = [], _0x3808f5 = _0x231f51["length"], _0x245170 = 0; _0x245170 < _0x3808f5; _0x245170++) _0x301996["push"](_0x3d127c(_0x231f51[_0x245170], _0x43108a));
      return _0x301996;
    },
    _0x5c6aad = function (_0x49e017) {
      var _0x1a3143 = _0x11fe49(_0x49e017, 56),
        _0x49faab = _0x5bd443(_0x1a3143, -40),
        _0x425b73 = _0x11fe49(_0x49faab, 103);
      return _0x425b73;
    },
    _0x485fab = function (_0x3ef2c9, _0x28280d) {
      null == _0x3ef2c9 && (_0x3ef2c9 = []);
      var _0x2acbdb = _0x597b08();
      _0x28280d = _0x2262f4(_0x28280d), _0x28280d = _0x5e9a8(_0x28280d, _0x2262f4(_0x2acbdb)), _0x28280d = _0x2262f4(_0x28280d);
      var _0x459c1b = _0x28280d,
        _0x5c1a54 = _0x716802(_0x3ef2c9),
        _0x3e182b = _0x25ef08(_0x5c1a54),
        _0x5fd78d = [];
      _0x5f5df2(_0x2acbdb, 0, _0x5fd78d, 0, _0x33b1b2);
      for (var _0x371b5b = _0x3e182b["length"], _0x1d2452 = 0; _0x1d2452 < _0x371b5b; _0x1d2452++) {
        var _0x386a33 = _0x5c6aad(_0x3e182b[_0x1d2452]),
          _0x4532ee = _0x5e9a8(_0x386a33, _0x28280d),
          _0x14c943 = _0x1202d7(_0x4532ee, _0x459c1b);
        _0x4532ee = _0x5e9a8(_0x14c943, _0x459c1b);
        var _0x118798 = _0xfd098c(_0x4532ee);
        _0x118798 = _0xfd098c(_0x118798), _0x5f5df2(_0x118798, 0, _0x5fd78d, _0x1d2452 * _0x39a3ee + _0x33b1b2, _0x39a3ee), _0x459c1b = _0x118798;
      }
      return _0x5fd78d;
    },
    _0x264dbc = function (_0x4f1413) {
      var _0x503417 = "14731382d816714fC59E47De5dA0C871D3F";
      if (null == _0x503417 || void 0 == _0x503417) throw new Error("1008");
      null != _0x4f1413 && void 0 != _0x4f1413 || (_0x4f1413 = "");
      var _0x4a06aa = _0x4f1413 + _0x4b8e98(_0x4f1413),
        _0x5dc493 = _0x356450(_0x4a06aa),
        _0x8ce2ce = _0x356450(_0x503417),
        _0x1c7921 = _0x485fab(_0x5dc493, _0x8ce2ce);
      return _0xf778df(_0x1c7921);
    };
  _0x1e2576["eypt"] = _0x264dbc, _0x1e2576["xor_encode"] = _0x46a69f, _0x1e2576["toByte"] = __toByte, _0x1e2576["str2Bytes"] = _0x356450, _0x1e2576["arrayCopy"] = _0x5bc8f1, _0x1e2576["arrayCopy2"] = _0x5f5df2, _0x1e2576["createEmptyArray"] = _0x5633d0, _0x1e2576["isEmptyString"] = _0x1d3717, _0x1e2576["base64Encode"] = _0x31c9b3, _0x1e2576["getStringCRC32"] = _0x4b8e98, _0x1e2576["toByte"] = __toByte;
}, function (_0x1565fc, _0x1f488a, _0x14ca96) {
  function _0x114a4c(_0x5158c9, _0x3aca2e) {
    var _0x383f95 = {};
    for (var _0x5cd7cb in _0x5158c9) _0x3aca2e["indexOf"](_0x5cd7cb) >= 0 || Object["prototype"]["hasOwnProperty"]["call"](_0x5158c9, _0x5cd7cb) && (_0x383f95[_0x5cd7cb] = _0x5158c9[_0x5cd7cb]);
    return _0x383f95;
  }
  var _0x328d17 = Object["assign"] || function (_0x44e24b) {
      for (var _0x2846e2 = 1; _0x2846e2 < arguments["length"]; _0x2846e2++) {
        var _0x2b90cf = arguments[_0x2846e2];
        for (var _0x5c616a in _0x2b90cf) Object["prototype"]["hasOwnProperty"]["call"](_0x2b90cf, _0x5c616a) && (_0x44e24b[_0x5c616a] = _0x2b90cf[_0x5c616a]);
      }
      return _0x44e24b;
    },
    _0xebcaab = _0x14ca96(64),
    _0xb57366 = _0x14ca96(19),
    _0x54694e = _0x14ca96(51),
    _0x4b9cbf = _0x14ca96(44),
    _0x160daf = _0x14ca96(1),
    _0x298f23 = 0,
    _0x5479ae = /MicroMessenger|Weibo/i["test"](window["navigator"]["userAgent"]),
    _0x5c020b = function (_0x1d96ba) {
      return "string" == typeof _0x1d96ba ? [_0x1d96ba, _0x1d96ba] : Array["isArray"](_0x1d96ba) && 1 === _0x1d96ba["length"] ? _0x1d96ba["concat"](_0x1d96ba) : _0x1d96ba;
    },
    _0x45e161 = function () {
      var _0x2735df = arguments["length"] > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
      return parseInt(new Date()["valueOf"]() / _0x2735df, 10);
    },
    _0x18fb6f = {
      "script": function (_0x1be681, _0x3330e8) {
        var _0x3ad0de = this;
        this["cacheTime"] && (_0x1be681 = _0x1be681 + "?v=" + _0x45e161(this["cacheTime"])), _0xebcaab(_0x1be681, {
          "charset": "UTF-8"
        }, function (_0xc82b2e, _0x24b29c) {
          var _0x5f277b = _0x3ad0de["detectKey"];
          if (_0xc82b2e || _0x5f277b && !window[_0x5f277b]) {
            var _0x3cd2fa = _0xc82b2e && _0xc82b2e["message"] || "unreliable script",
              _0x10ba6a = new Error("Failed to load script(" + _0x1be681 + ")." + _0x3cd2fa);
            return _0x10ba6a["data"] = {
              "url": _0x1be681,
              "retry": !!_0x3ad0de["_options"]["retry"]
            }, void _0x3330e8(_0x10ba6a);
          }
          _0x3330e8({
            "scriptEl": _0x24b29c,
            "_originUrl": _0x1be681
          });
        });
      },
      "image": function (_0x2abb70, _0x7995ae) {
        var _0x27c28b = this,
          _0x44e9df = document["createElement"]("img");
        _0x44e9df["onload"] = function () {
          _0x44e9df["onload"] = _0x44e9df["onerror"] = null, _0x7995ae({
            "width": _0x44e9df["width"],
            "height": _0x44e9df["height"],
            "src": _0x2abb70
          });
        }, _0x44e9df["onerror"] = function (_0x1b73e3) {
          _0x44e9df["onload"] = _0x44e9df["onerror"] = null;
          var _0x3726a3 = _0x1b73e3 && _0x1b73e3["message"] || "unreliable image error",
            _0x3d270f = new Error("Failed to load image(" + _0x2abb70 + ")." + _0x3726a3);
          _0x3d270f["data"] = {
            "url": _0x2abb70,
            "retry": !!_0x27c28b["_options"]["retry"]
          }, _0x7995ae(_0x3d270f);
        }, _0x44e9df["src"] = _0x2abb70;
      },
      "audio": function (_0x23c6de, _0xbfa47e) {
        var _0x230bc9 = this;
        try {
          if (_0x5479ae) {
            var _0x583f94 = new XMLHttpRequest();
            _0x583f94["open"]("GET", _0x23c6de), _0x583f94["responseType"] = "blob", _0x583f94["onload"] = function () {
              var _0x3d6167 = new Blob([_0x583f94["response"]], {
                  "type": "audio/mpeg"
                }),
                _0x32b20a = URL["createObjectURL"](_0x3d6167);
              _0xbfa47e({
                "src": _0x32b20a
              });
            }, _0x583f94["onerror"] = function () {
              _0x583f94["onload"] = _0x583f94["onerror"] = null;
              var _0x86b8 = _0x583f94["statusText"] || "unreliable audio error",
                _0x331eaa = _0x583f94["status"] || "",
                _0x226d79 = new Error("Failed to load audio(" + _0x23c6de + ")." + _0x86b8 + "." + _0x331eaa);
              _0x226d79["data"] = {
                "url": _0x23c6de,
                "retry": !!this["_options"]["retry"]
              }, _0xbfa47e(_0x226d79);
            }, _0x583f94["send"]();
          } else {
            var _0x560ac6 = new Audio();
            _0x560ac6["oncanplaythrough"] = function (_0x382e8e) {
              _0x560ac6["oncanplaythrough"] = _0x560ac6["onerror"] = null, _0xbfa47e({
                "src": _0x23c6de
              });
            }, _0x560ac6["onerror"] = function (_0x13299e) {
              _0x560ac6["oncanplaythrough"] = _0x560ac6["onerror"] = null;
              var _0x314461 = _0x560ac6["error"] && _0x560ac6["error"]["message"] || "unreliable audio error",
                _0xdea3db = _0x560ac6["error"] && _0x560ac6["code"] || "",
                _0x29aab5 = new Error("Failed to play audio(" + _0x23c6de + ")." + _0x314461 + "." + _0xdea3db);
              _0x29aab5["data"] = {
                "url": _0x23c6de,
                "retry": !!_0x230bc9["_options"]["retry"]
              }, _0xbfa47e(_0x29aab5);
            }, _0x560ac6["src"] = _0x23c6de, _0x560ac6["load"]();
          }
        } catch (_0x26d799) {
          var _0x2f98dd = new Error("not support audio");
          _0x2f98dd["data"] = {
            "url": _0x23c6de,
            "retry": !!this["_options"]["retry"]
          }, _0xbfa47e(_0x2f98dd);
        }
      },
      "api": function (_0x37e4d8, _0x2e92a5, _0x48f823) {
        var _0x34202e = this;
        _0x4b9cbf(_0x37e4d8, _0x48f823, function (_0x1bf126, _0x575ccb, _0x25f4da) {
          if (_0x1bf126) {
            var _0x379671 = _0x1bf126 && _0x1bf126["message"] || "unreliable api error",
              _0x659e77 = new Error("Failed to request api(" + _0x37e4d8 + ")." + _0x379671);
            return _0x659e77["data"] = {
              "url": _0x37e4d8,
              "retry": !!_0x34202e["_options"]["retry"]
            }, void _0x2e92a5(_0x659e77);
          }
          _0x2e92a5(_0x328d17({}, _0x575ccb, {
            "_originUrl": _0x25f4da["url"]
          }));
        }, {
          "timeout": this["timeout"]
        });
      }
    },
    _0x40f0da = function (_0x492a31) {
      this["id"] = _0x492a31["id"] || "resource_" + _0x298f23++, this["type"] = _0x492a31["type"] || "script", this["url"] = _0x492a31["url"] || "", this["payload"] = _0x492a31["payload"], this["timeout"] = _0x492a31["timeout"] || 6000, this["cacheTime"] = _0x492a31["cacheTime"] ? parseInt(_0x492a31["cacheTime"], 10) : 0, this["detectKey"] = _0x492a31["detectKey"] || "", this["_options"] = _0x492a31, _0xb57366["call"](this), this["load"](), this["setTimeout"]();
    };
  _0x54694e(_0x40f0da, _0xb57366), Object["assign"](_0x40f0da["prototype"], {
    "load": function () {
      var _0x2bd7a9 = this,
        _0x4c7321 = _0x18fb6f[this["type"]];
      _0x4c7321 && _0x4c7321["call"](this, this["url"], function (_0x4529c4) {
        return _0x2bd7a9["resolve"](_0x4529c4);
      }, this["payload"]);
    },
    "addSupport": function (_0x745c65, _0x23824b, _0x1d6d3b) {
      ("function" != typeof _0x18fb6f[_0x745c65] || _0x1d6d3b) && (_0x18fb6f[_0x745c65] = _0x23824b);
    },
    "setTimeout": function () {
      var _0xd1bc58 = this;
      window["setTimeout"](function () {
        var _0x56720d = String(_0xd1bc58["url"]),
          _0x38fbdc = new Error("Timeout: failed to request " + _0xd1bc58["type"] + "(" + _0x56720d + ").");
        _0x38fbdc["data"] = {
          "url": _0x56720d
        }, _0xd1bc58["resolve"](_0x38fbdc);
      }, this["timeout"]);
    }
  }), _0x40f0da["SUPPORTS"] = _0x18fb6f;
  var _0x4ec7ec = function (_0x43953c) {
    _0x18fb6f["hasOwnProperty"](_0x43953c) && (_0x40f0da[_0x43953c] = function (_0x51f8a2) {
      var _0x3b381d = _0x51f8a2["disableRetry"],
        _0x5c88d3 = _0x51f8a2["onProcess"],
        _0x3d3041 = _0x51f8a2["checkResult"],
        _0x5db6dc = _0x114a4c(_0x51f8a2, ["disableRetry", "onProcess", "checkResult"]);
      if (_0x3b381d) {
        var _0xa88c07 = _0x5db6dc["url"];
        return Array["isArray"](_0xa88c07) && (_0xa88c07 = _0xa88c07[0] || ""), new _0x40f0da(_0x328d17({}, _0x5db6dc, {
          "url": _0xa88c07,
          "type": _0x43953c
        }));
      }
      var _0x329d40 = _0x5c020b(_0x51f8a2["url"]),
        _0x38031e = new _0xb57366(),
        _0x378449 = function _0x5a9e07() {
          var _0x4199b6 = arguments["length"] > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
            _0x1ea39a = function (_0x27b252) {
              var _0x3d8219 = _0x329d40["length"];
              _0x4199b6 < _0x3d8219 - 1 ? _0x5a9e07(_0x4199b6 + 1) : _0x4199b6 === _0x3d8219 - 1 && (_0x27b252["data"] = _0x328d17({}, _0x27b252["data"], {
                "url": String(_0x329d40),
                "requestId": _0x379546["id"]
              }), _0x38031e["resolve"](_0x27b252)), _0x160daf["isFn"](_0x5c88d3) && _0x5c88d3(_0x17275b, _0x379546["id"], _0x43953c, {
                "status": "error",
                "error": _0x27b252,
                "index": _0x4199b6
              });
            },
            _0x135e36 = function (_0x1d511e) {
              var _0x5a85e7 = _0x1d511e instanceof Error ? _0x1d511e : new Error("Failed to check result of " + _0x17275b);
              _0x5a85e7["data"] = {
                "url": _0x17275b,
                "retry": !!_0x5db6dc["retry"]
              }, _0x1ea39a(_0x5a85e7);
            },
            _0x1f5ceb = function (_0xd180e8) {
              _0x160daf["isFn"](_0x5c88d3) && _0x5c88d3(_0x17275b, _0x379546["id"], _0x43953c, {
                "status": "success",
                "res": _0xd180e8
              }), _0x38031e["resolve"](_0xd180e8);
            },
            _0x17275b = _0x329d40[_0x4199b6],
            _0x379546 = new _0x40f0da(_0x328d17({}, _0x5db6dc, {
              "type": _0x43953c,
              "url": _0x17275b,
              "retry": _0x4199b6 > 0
            }));
          _0x160daf["isFn"](_0x5c88d3) && _0x5c88d3(_0x17275b, _0x379546["id"], _0x43953c, {
            "status": "start"
          }), _0x379546["then"](function (_0x302ec5) {
            if (!_0x160daf["isFn"](_0x3d3041)) return _0x1f5ceb(_0x302ec5);
            var _0x1c42fb = _0x3d3041(_0x302ec5);
            _0x1c42fb instanceof _0xb57366 ? _0x1c42fb["then"](_0x1f5ceb(_0x302ec5))["catch"](function (_0x554a3c) {
              return _0x135e36(_0x554a3c);
            }) : _0x1c42fb ? _0x1f5ceb(_0x302ec5) : _0x135e36();
          })["catch"](function (_0x257a39) {
            return _0x1ea39a(_0x257a39);
          });
        };
      return _0x378449(0), _0x38031e;
    });
  };
  for (var _0x3bcd21 in _0x18fb6f) _0x4ec7ec(_0x3bcd21);
  _0x40f0da["all"] = function (_0xe1c54) {
    var _0x29e270 = 0,
      _0x125bd8 = !1,
      _0x5b088a = new _0xb57366(),
      _0x46c48e = [];
    return _0xe1c54["map"](function (_0x33b238, _0x28fa5c) {
      _0x33b238["then"](function (_0x1fe51b) {
        _0x125bd8 || (_0x46c48e[_0x28fa5c] = _0x1fe51b, _0x29e270++, _0x29e270 === _0xe1c54["length"] && _0x5b088a["resolve"](_0x46c48e));
      })["catch"](function (_0x2c5f12) {
        _0x125bd8 = !0, _0x5b088a["resolve"](_0x2c5f12);
      });
    }), _0x5b088a;
  }, _0x1565fc["exports"] = _0x40f0da;
}, function (_0xcd9327, _0x208165) {
  var _0x1687fe = function () {
    function _0x384fe0(_0x57b62e, _0x1a1d09) {
      var _0x3a835f = [],
        _0x71acab = !0,
        _0x58ef80 = !1,
        _0x34272e = void 0;
      try {
        for (var _0x178953, _0xd5465b = _0x57b62e[Symbol["iterator"]](); !(_0x71acab = (_0x178953 = _0xd5465b["next"]())["done"]) && (_0x3a835f["push"](_0x178953["value"]), !_0x1a1d09 || _0x3a835f["length"] !== _0x1a1d09); _0x71acab = !0);
      } catch (_0x12a9fd) {
        _0x58ef80 = !0, _0x34272e = _0x12a9fd;
      } finally {
        try {
          !_0x71acab && _0xd5465b["return"] && _0xd5465b["return"]();
        } finally {
          if (_0x58ef80) throw _0x34272e;
        }
      }
      return _0x3a835f;
    }
    return function (_0xd21d06, _0x1a0cf3) {
      if (Array["isArray"](_0xd21d06)) return _0xd21d06;
      if (Symbol["iterator"] in Object(_0xd21d06)) return _0x384fe0(_0xd21d06, _0x1a0cf3);
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    };
  }();
  _0x208165["getDocFragmentRegex"] = function (_0x37a6ca, _0x5f0f71) {
    return new RegExp("<" + _0x37a6ca + "\\s*([\\s\\S]+)?(?!%)>([\\s\\S]+)?<\\/" + _0x37a6ca + ">", _0x5f0f71 ? "g" : "");
  }, _0x208165["isPlainObject"] = function (_0x2e0fd7) {
    return "[object Object]" === Object["prototype"]["toString"]["call"](_0x2e0fd7) && _0x2e0fd7 && _0x2e0fd7["constructor"] === Object;
  }, _0x208165["getIn"] = function (_0x37a3de, _0x3459ae, _0x18cca7) {
    "string" == typeof _0x3459ae && (_0x3459ae = _0x3459ae["split"]("."));
    for (var _0x5addae = 0, _0x706688 = _0x3459ae["length"]; _0x5addae < _0x706688; _0x5addae++) {
      var _0x216233 = _0x3459ae[_0x5addae];
      if (_0x5addae < _0x706688 - 1 && !_0x37a3de[_0x216233]) return _0x18cca7;
      _0x37a3de = _0x37a3de[_0x216233];
    }
    return _0x37a3de;
  }, _0x208165["parseAttrsStr"] = function () {
    var _0x36dfc4 = arguments["length"] > 0 && void 0 !== arguments[0] ? arguments[0] : "",
      _0x38c02d = _0x36dfc4["match"](/[^<>*+\s=]+(?:=".*?")?/g);
    if (!_0x38c02d) return {
      "props": {},
      "bound": {}
    };
    var _0x5e6170 = {},
      _0x2ed318 = {};
    return _0x38c02d["map"](function (_0x1ca857) {
      var _0x26d5c6 = _0x1ca857["split"]("="),
        _0x3249fd = _0x1687fe(_0x26d5c6, 2),
        _0x27f784 = _0x3249fd[0],
        _0x14bac0 = _0x3249fd[1];
      void 0 === _0x14bac0 && (_0x14bac0 = !0);
      try {
        _0x14bac0 = JSON["parse"](_0x14bac0);
      } catch (_0x189290) {
        console && console["error"](_0x189290);
      }
      if (0 === _0x27f784["indexOf"](":")) {
        var _0x2ee847 = !1;
        _0x27f784 = _0x27f784["substring"](1);
        try {
          _0x14bac0 = JSON["parse"](_0x14bac0);
        } catch (_0x51e69c) {
          _0x2ed318[_0x27f784] = _0x14bac0, _0x2ee847 = !0;
        }
        !_0x2ee847 && (_0x5e6170[_0x27f784] = _0x14bac0);
      }
      0 === _0x27f784["indexOf"]("@") ? (_0x27f784 = _0x27f784["substring"](1), _0x2ed318[_0x27f784] = _0x14bac0) : _0x5e6170[_0x27f784] = _0x14bac0;
    }), {
      "props": _0x5e6170,
      "bound": _0x2ed318
    };
  }, _0x208165["nextTick"] = function (_0x40fc76) {
    window["Promise"] ? Promise["resolve"]()["then"](_0x40fc76) : window["setTimeout"](_0x40fc76, 0);
  }, _0x208165["diffDataToUpdate"] = function (_0x472e19, _0x170f6e) {
    var _0xea4a92 = {};
    for (var _0x18604d in _0x472e19) {
      var _0x576592 = _0x472e19[_0x18604d];
      _0x576592 !== _0x170f6e[_0x18604d] && (_0xea4a92[_0x18604d] = _0x576592);
    }
    return _0xea4a92;
  }, _0x208165["lifeCycleHooks"] = ["beforeCreate", "created", "beforeMount", "mounted", "beforeDestroy"];
}, function (_0xa2cb84, _0x5f1e1b, _0x4d7a3d) {
  function _0x3e0278(_0x27ca1e) {
    var _0x4c72a2 = this;
    _0x5adcdc["mixin"](this);
    var _0x233d55 = function (_0x2d6e73) {
        return _0x4c72a2["resolve"](_0x2d6e73);
      },
      _0x4ca39e = function (_0x2778fa) {
        return _0x4c72a2["resolve"](_0x2778fa);
      };
    "function" == typeof _0x27ca1e && _0x27ca1e(_0x233d55, _0x4ca39e);
  }
  var _0x4e0bf8 = "function" == typeof Symbol && "symbol" == typeof Symbol["iterator"] ? function (_0x1c5415) {
      return typeof _0x1c5415;
    } : function (_0x6bd233) {
      return _0x6bd233 && "function" == typeof Symbol && _0x6bd233["constructor"] === Symbol && _0x6bd233 !== Symbol["prototype"] ? "symbol" : typeof _0x6bd233;
    },
    _0x5adcdc = _0x4d7a3d(19);
  _0x3e0278["all"] = function (_0x2b20b0) {
    return new _0x3e0278(function (_0x448fbb, _0x561f02) {
      var _0x4fe522 = 0,
        _0x45cb57 = !1,
        _0x3b1103 = [];
      _0x2b20b0["map"](function (_0x1ec027, _0xc75eb7) {
        _0x1ec027["then"](function (_0x4f126d) {
          _0x45cb57 || (_0x3b1103[_0xc75eb7] = _0x4f126d, _0x4fe522++, _0x4fe522 === _0x2b20b0["length"] && _0x448fbb(_0x3b1103));
        })["catch"](function (_0x9bf59f) {
          _0x45cb57 = !0, _0x561f02(_0x9bf59f);
        });
      });
    });
  }, _0x3e0278["resolve"] = function (_0x1e9329) {
    return _0x1e9329 && "object" === ("undefined" == typeof _0x1e9329 ? "undefined" : _0x4e0bf8(_0x1e9329)) && "function" == typeof _0x1e9329["then"] ? _0x1e9329 : new _0x3e0278(function (_0x1bc4f2) {
      return _0x1bc4f2(_0x1e9329);
    });
  }, _0x3e0278["reject"] = function (_0xc10c85) {
    return new _0x3e0278(function (_0x57b952, _0x210562) {
      return _0x210562(_0xc10c85);
    });
  }, _0xa2cb84["exports"] = _0x3e0278;
}, function (_0xee1899, _0xfc5732) {
  var _0x33f767 = {
    "FETCH_CAPTCHA": "FETCH_CAPTCHA",
    "FETCH_INTELLISENSE_CAPTCHA": "FETCH_INTELLISENSE_CAPTCHA",
    "VERIFY_CAPTCHA": "VERIFY_CAPTCHA",
    "VERIFY_INTELLISENSE_CAPTCHA": "VERIFY_INTELLISENSE_CAPTCHA",
    "RESET_STATE": "RESET_STATE"
  };
  _0xee1899["exports"] = _0x33f767;
}, function (_0x2498cb, _0x24badf, _0x543114) {
  function _0x21071d(_0x4c4c95, _0xc18e0c, _0x53d5d5) {
    return _0xc18e0c in _0x4c4c95 ? Object["defineProperty"](_0x4c4c95, _0xc18e0c, {
      "value": _0x53d5d5,
      "enumerable": !0,
      "configurable": !0,
      "writable": !0
    }) : _0x4c4c95[_0xc18e0c] = _0x53d5d5, _0x4c4c95;
  }
  function _0x3dc1da(_0x22bba2, _0x5ae3e1) {
    if (!_0x22bba2) return {};
    var _0xb739b6 = _0x22bba2["customStyles"],
      _0x4dc041 = _0x22bba2["width"],
      _0x556f0e = _0x22bba2["minWidth"],
      _0x5d635b = parseInt(_0xb739b6["controlBar"]["height"], 10),
      _0x150ca5 = parseInt(_0xb739b6["gap"], 10),
      _0x45086c = Math["max"](parseInt(_0x4dc041, 10), parseInt(_0x556f0e, 10)) / 2;
    return {
      "controlBarHeight": _0x5d635b,
      "imagePanelHeight": _0x5ae3e1 ? 0 : _0x45086c,
      "gapHeight": _0x5ae3e1 ? 0 : _0x150ca5,
      "total": _0x5ae3e1 ? _0x5d635b : _0x5d635b + _0x150ca5 + _0x45086c
    };
  }
  var _0x58b4e6,
    _0x5ebd56 = _0x543114(1),
    _0x10f536 = _0x543114(2),
    _0x31551c = _0x543114(3),
    _0x31f80f = _0x31551c["CAPTCHA_TYPE"],
    _0x308e3a = _0x31551c["CAPTCHA_CLASS"],
    _0x51c8ad = _0x31551c["WIDTH_LIMIT"],
    _0x19d319 = _0x31551c["SIZE_TYPE"],
    _0x520fbf = _0x31551c["LARGE_SIZE_TYPE"],
    _0x382dd5 = _0x31551c["RTL_LANGS"],
    _0x3a3a69 = _0x31551c["FEEDBACK_URL"],
    _0x36e0b6 = _0x543114(15),
    _0x150e88 = _0x36e0b6["applyColorIfNeed"],
    _0x24bca6 = _0x36e0b6["applyStyleIfNeed"],
    _0x40a1d8 = _0x543114(17),
    _0x590a8b = _0x543114(4),
    _0x3d83aa = _0x590a8b["SWITCH_TYPE"],
    _0x22daa7 = _0x590a8b["INVOKE_HOOK"],
    _0x39d2e1 = _0x590a8b["EVENT_RESET"],
    _0x26b0d4 = _0x590a8b["SWITCH_LOAD_STATUS"],
    _0x3bc0f8 = _0x590a8b["UPDATE_VERIFY_STATUS"],
    _0x1056cd = _0x590a8b["REFRESH"],
    _0x293adc = _0x590a8b["EVENT_RESET_CLASSIC"],
    _0x258966 = _0x590a8b["SET_TOKEN"],
    _0x2893fc = _0x543114(12),
    _0x360cd4 = _0x2893fc["FETCH_CAPTCHA"],
    _0x1b9d49 = _0x2893fc["VERIFY_CAPTCHA"],
    _0x3cf023 = _0x2893fc["RESET_STATE"],
    _0x2b1e3a = _0x543114(27),
    _0x559289 = _0x543114(28),
    _0x6f3f17 = _0x543114(29),
    _0x5f2b2e = _0x543114(26),
    _0x5f3166 = _0x543114(30);
  _0x2498cb["exports"] = {
    "el": ".yidun",
    "template": _0x543114(61),
    "props": {
      "autoWidth": {
        "type": Boolean,
        "default": !1
      },
      "intellisense": {
        "type": Boolean,
        "default": !1
      },
      "enableColor": {
        "type": Boolean,
        "default": !1
      }
    },
    "data": function () {
      var _0x22d95a = this["$store"]["state"],
        _0x27b39c = _0x22d95a["captchaType"],
        _0x374ae9 = _0x22d95a["langPkg"],
        _0x2a6107 = _0x22d95a["config"],
        _0x54b0e9 = _0x22d95a["load"],
        _0x2d2f92 = _0x22d95a["verifyStatus"],
        _0xa75348 = _0x22d95a["smsNew"],
        _0x2013d4 = _0x22d95a["smsVersion"],
        _0x30b733 = _0x10f536["isMobile"] && this["intellisense"] && "bind" !== _0x2a6107["mode"] ? "260px" : _0x2a6107["width"];
      return {
        "captchaId": _0x2a6107["captchaId"],
        "captchaType": _0x27b39c,
        "theme": _0x2a6107["theme"],
        "customStyles": _0x2a6107["customStyles"],
        "feedback": {
          "url": _0x3a3a69,
          "enable": !!_0x2a6107["feedbackEnable"]
        },
        "mode": "bind" === _0x2a6107["mode"] ? "popup" : this["intellisense"] ? "embed" : _0x2a6107["mode"],
        "width": this["autoWidth"] ? "auto" : _0x30b733,
        "size": _0x2a6107["size"],
        "minWidth": _0x51c8ad[0] + "px",
        "langPkg": _0x374ae9,
        "smsNew": _0xa75348,
        "smsVersion": _0x2013d4,
        "load": _0x54b0e9,
        "verifyStatus": _0x2d2f92,
        "verifyPayload": null,
        "inferences": [0, 1, 2, 3, 4, 5, 6, 7],
        "audio": _0x2a6107["__serverConfig__"]["audio"] && _0x10f536["supportAudio"],
        "fixedAudio": !1,
        "isRtlLang": _0x382dd5["indexOf"](_0x2a6107["lang"]) !== -1,
        "isMobile": _0x10f536["isMobile"],
        "disableFocusVisible": _0x2a6107["disableFocusVisible"]
      };
    },
    "on": (_0x58b4e6 = {}, _0x21071d(_0x58b4e6, "." + _0x308e3a["REFRESH"] + " click", function (_0x3e2458) {
      this["switchTypeAndRefresh"](_0x3e2458);
    }), _0x21071d(_0x58b4e6, ".yidun_tips click", function () {
      var _0x2968ac = this["$store"]["state"],
        _0x2057cd = _0x2968ac["config"],
        _0x158c28 = _0x2968ac["countsOfVerifyError"],
        _0x19a9c6 = _0x2968ac["verifyStatus"];
      "error" === _0x19a9c6 && _0x158c28 > _0x2057cd["maxVerification"] && this["$store"]["commit"](_0x293adc);
    }), _0x58b4e6),
    "watch": {
      "captchaType": function (_0x218635, _0x4f524c) {
        _0x218635 !== _0x4f524c && this["updateUIByType"](_0x218635, _0x4f524c);
      }
    },
    "mounted": function () {
      var _0x5d5d6a = this,
        _0x2d4807 = this["$store"]["state"],
        _0xb69d76 = _0x2d4807["config"],
        _0x47fda0 = _0x2d4807["token"];
      _0x150e88(_0xb69d76["customStyles"]["primaryColor"], this["$el"], this["enableColor"]), _0x24bca6(_0xb69d76["customStyles"], this["$el"], this["enableColor"]), this["_baseClassNames"] = this["$el"]["className"]["trim"](), this["_removeEvents"] = this["initEvents"](), this["_unsubscribe"] = this["$store"]["subscribe"](function (_0x2166e1, _0x5a116f) {
        var _0xb1c494 = _0x2166e1["type"],
          _0x11ff7c = _0x2166e1["payload"],
          _0x2ccca4 = _0x5a116f["captchaType"],
          _0x466eaf = _0x5a116f["load"],
          _0x8ae23c = _0x5a116f["verifyStatus"];
        switch (_0xb1c494) {
          case _0x3d83aa:
            _0x5d5d6a["$setData"]({
              "captchaType": _0x2ccca4
            });
            break;
          case _0x26b0d4:
            _0x5d5d6a["$setData"]({
              "load": _0x466eaf
            }), _0x466eaf && "done" === _0x466eaf["status"] && _0x5d5d6a["$store"]["commit"](_0x22daa7, {
              "name": "onDidRefresh"
            });
            break;
          case _0x3bc0f8:
            _0x5d5d6a["$setData"]({
              "verifyStatus": _0x8ae23c,
              "verifyPayload": _0x11ff7c
            });
            break;
          case _0x39d2e1:
            _0x5d5d6a["$setData"]({
              "fixedAudio": !1
            }), !_0x5d5d6a["intellisense"] && _0x5d5d6a["reset"]();
            break;
          case _0x293adc:
            var _0x4969a0 = _0x5d5d6a["intellisense"] ? {
              "token": _0x47fda0
            } : null;
            _0x5d5d6a["$setData"]({
              "fixedAudio": !1
            }), _0x5d5d6a["reset"](_0x4969a0);
            break;
          case _0x258966:
            _0x5d5d6a["setFeedbackUrl"]();
        }
      }), this["intellisense"] || this["reset"]({
        "token": _0x47fda0
      }), "bind" === _0xb69d76["mode"] && this["refresh"]({
        "token": _0x47fda0
      });
    },
    "beforeDestroy": function () {
      this["_unsubscribe"](), this["_removeEvents"]();
    },
    "render": function (_0x54aff8) {
      var _0x5c4f99 = _0x54aff8["captchaType"],
        _0x54eca6 = _0x54aff8["load"],
        _0x20428b = _0x54aff8["verifyStatus"],
        _0x147909 = _0x54aff8["verifyPayload"];
      "undefined" != typeof _0x5c4f99 && this["switchCaptchaType"](_0x5c4f99), "undefined" != typeof _0x54eca6 && this["changeLoadStatus"](_0x54eca6), "undefined" != typeof _0x20428b && this["updateVerifyStatus"](_0x20428b, _0x147909);
    },
    "methods": {
      "initEvents": function () {
        var _0x2bde38 = this,
          _0x662a3b = void 0;
        "float" === this["mode"] && (_0x662a3b = this["initFloatMode"]());
        var _0x4eb5b3 = function (_0xb84cd8) {
          /^IMG$/i["test"](_0xb84cd8["target"]["tagName"]) && _0xb84cd8["preventDefault"]();
        };
        _0x10f536["on"](this["$el"], "dragstart", _0x4eb5b3);
        var _0x4c0aa2 = function (_0x36857e) {
            _0x2bde38["switchTypeAndRefresh"](_0x36857e, !0);
          },
          _0x425e98 = _0x10f536["find"](".yidun_top__audio", this["$el"]);
        return _0x425e98 && _0x10f536["on"](_0x425e98, "click", _0x4c0aa2, !0), function () {
          _0x662a3b && _0x662a3b(), _0x10f536["off"](_0x2bde38["$el"], "dragstart", _0x4eb5b3), _0x425e98 && _0x10f536["off"](_0x425e98, "click", _0x4c0aa2, !0);
        };
      },
      "initFloatMode": function () {
        var _0x4eff72 = this,
          _0x168220 = _0x10f536["find"]("." + _0x308e3a["PANEL"], this["$el"]),
          _0x517c9f = _0x10f536["find"]("." + _0x308e3a["CONTROL"], this["$el"]),
          _0x491233 = !1,
          _0x3eafc4 = null,
          _0x51ec8e = null,
          _0x4ff292 = _0x10f536["transition"](_0x168220, {
            "name": "panel_ease_" + this["customStyles"]["imagePanel"]["align"],
            "insert": function (_0x51cfe0) {
              _0x51cfe0["style"]["display"] = "block", _0x491233 = !0;
            },
            "afterLeave": function (_0x183672) {
              _0x183672["style"]["display"] = "none", _0x491233 = !1;
            },
            "leaveCanceled": function (_0x3a74b2) {
              _0x3a74b2["style"]["display"] = "none", _0x491233 = !1;
            }
          }),
          _0x1f1d7e = this,
          _0x2eed52 = function (_0x14a12a) {
            _0x1f1d7e["panelVisible"] = !_0x14a12a, _0x1f1d7e["$children"] && _0x1f1d7e["$children"]["map"](function (_0x1c34d2) {
              _0x1c34d2["floatStatusChange"] && _0x1c34d2["floatStatusChange"]();
            }), _0x10f536["isMobile"] && setTimeout(function () {
              _0x1f1d7e["_isMounted"] && _0x1f1d7e["$store"]["commit"](_0x22daa7, {
                "name": "onFloatHeightChange",
                "args": [_0x3dc1da(_0x1f1d7e["$data"], _0x14a12a)]
              });
            }, 200);
          },
          _0xc5315b = !0,
          _0x5cc7b1 = function (_0x1d17fa) {
            if (_0x4eff72["_isMounted"]) {
              var _0x4bb62a = _0x1d17fa["relatedTarget"] && _0x4eff72["$el"]["contains"](_0x1d17fa["relatedTarget"]);
              if ((_0xc5315b || !_0x4bb62a || "mouseover" !== _0x1d17fa["type"]) && (_0xc5315b = !1, window["clearTimeout"](_0x51ec8e), _0x4ff292["cancelLeave"](), "success" !== _0x4eff72["$store"]["state"]["verifyStatus"])) return _0x491233 ? _0x2eed52() : void (_0x3eafc4 = window["setTimeout"](function () {
                var _0x156754 = document["activeElement"];
                _0x156754 && _0x156754 !== document["body"] && _0x156754["blur"](), _0x4ff292["enter"](), _0x2eed52();
              }, 300));
            }
          },
          _0x1c3bc5 = function (_0x2f437b) {
            if (_0x4eff72["_isMounted"]) {
              var _0x137dba = _0x2f437b["relatedTarget"] && _0x4eff72["$el"]["contains"](_0x2f437b["relatedTarget"]),
                _0x262ce1 = !(_0x10f536["isMobile"] || !_0x10f536["supportTouch"]) && null === _0x2f437b["relatedTarget"];
              if (!_0x137dba && !_0x262ce1 || "mouseout" !== _0x2f437b["type"]) {
                _0xc5315b = !0;
                var _0x479e28 = _0x10f536["getBubblePath"](_0x2f437b["target"]);
                if (!(~["touchstart", "pointerdown"]["indexOf"](_0x2f437b["type"]) && ~_0x479e28["indexOf"](_0x4eff72["$el"]) || ~["mouseleave", "pointerleave"]["indexOf"](_0x2f437b["type"]) && null === _0x2f437b["event"]["relatedTarget"])) {
                  window["clearTimeout"](_0x3eafc4), _0x4ff292["cancelEnter"]();
                  var _0x5d03d1 = _0x4eff72["$children"][0],
                    _0x5c24dd = _0x5d03d1 && _0x5d03d1["drag"];
                  !_0x491233 || _0x5c24dd && "dragging" === _0x5c24dd["status"] || (_0x51ec8e = window["setTimeout"](function () {
                    _0x4ff292["leave"](), _0x2eed52(!0);
                  }, 300));
                }
              }
            }
          },
          _0x1257bc = this["$store"]["subscribe"](function (_0x496225, _0x25a061) {
            var _0x426d38 = _0x496225["type"];
            _0x426d38 === _0x3bc0f8 && "success" === _0x25a061["verifyStatus"] && (_0x4ff292["leave"](), _0x2eed52(!0));
          }),
          _0x2214ba = _0x5ebd56["msie"](),
          _0x5dc627 = _0x2214ba ? "mouseenter" : "mouseover",
          _0x512a30 = _0x2214ba ? "mouseleave" : "mouseout";
        switch (_0x10f536["on"](_0x517c9f, "focus", _0x5cc7b1), !0) {
          case _0x10f536["isMobile"]:
            _0x10f536["on"](_0x517c9f, "touchstart", _0x5cc7b1), _0x10f536["on"](document["body"], "touchstart", _0x1c3bc5);
            break;
          case !_0x10f536["isMobile"] && _0x10f536["supportTouch"]:
            _0x10f536["on"](_0x517c9f, "touchstart", _0x5cc7b1), _0x10f536["on"](document["body"], "touchstart", _0x1c3bc5), _0x10f536["on"](this["$el"], _0x5dc627, _0x5cc7b1), _0x10f536["on"](this["$el"], _0x512a30, _0x1c3bc5);
            break;
          case _0x10f536["supportPointer"]:
            _0x10f536["on"](_0x517c9f, "pointerdown", _0x5cc7b1), _0x10f536["on"](document["body"], "pointerdown", _0x1c3bc5), _0x10f536["on"](this["$el"], "pointerenter", _0x5cc7b1), _0x10f536["on"](this["$el"], "pointerleave", _0x1c3bc5);
            break;
          default:
            _0x10f536["on"](this["$el"], _0x5dc627, _0x5cc7b1), _0x10f536["on"](this["$el"], _0x512a30, _0x1c3bc5);
        }
        return function () {
          _0x10f536["off"](_0x517c9f, "focus", _0x5cc7b1), _0x10f536["off"](_0x4eff72["$el"], _0x5dc627, _0x5cc7b1), _0x10f536["off"](_0x4eff72["$el"], _0x512a30, _0x1c3bc5), _0x10f536["off"](_0x517c9f, "touchstart", _0x5cc7b1), _0x10f536["off"](document["body"], "touchstart", _0x1c3bc5), _0x10f536["supportPointer"] && (_0x10f536["off"](_0x517c9f, "pointerdown", _0x5cc7b1), _0x10f536["off"](document["body"], "pointerdown", _0x1c3bc5), _0x10f536["off"](_0x4eff72["$el"], "pointerenter", _0x5cc7b1), _0x10f536["off"](_0x4eff72["$el"], "pointerleave", _0x1c3bc5)), _0x1257bc(), _0x4ff292["dispose"]();
        };
      },
      "switchTypeAndRefresh": function (_0x17e4ef, _0x4af2b6) {
        _0x17e4ef["stopPropagation"]();
        var _0x2d2290 = this["$store"]["state"],
          _0x5cc2d4 = _0x2d2290["config"],
          _0x50cbf7 = _0x2d2290["countsOfVerifyError"],
          _0x3f736 = _0x2d2290["verifyStatus"];
        _0x50cbf7 > _0x5cc2d4["maxVerification"] || "verifying" === _0x3f736 && this["captchaType"] !== _0x31f80f["SMS"] || this["load"] && "loading" === this["load"]["status"] || (void 0 !== _0x4af2b6 && this["$setData"]({
          "fixedAudio": _0x4af2b6
        }), this["refresh"]());
      },
      "fetchCaptcha": function (_0x41018e, _0x317881) {
        var _0x1c643a = {
          "width": this["getWidth"](),
          "audio": this["fixedAudio"] || !1,
          "sizeType": this["getSizeType"]()
        };
        this["smsNew"] && (_0x1c643a["smsVersion"] = this["smsVersion"]), _0x1c643a["token"] = this["intellisense"] ? this["$store"]["state"]["token"] : this["$store"]["state"]["previousToken"], Object["assign"](_0x1c643a, _0x41018e), this["$store"]["dispatch"](_0x360cd4, _0x1c643a, _0x317881);
      },
      "verifyCaptcha": function (_0x1b36dc) {
        this["$store"]["commit"](_0x3bc0f8, {
          "verifyStatus": "verifying"
        });
        var _0xb0b129 = this["$store"]["state"]["token"];
        this["$store"]["dispatch"](_0x1b9d49, Object["assign"]({
          "token": _0xb0b129,
          "width": this["getWidth"]()
        }, _0x1b36dc));
      },
      "reset": function (_0xb14442) {
        this["$store"]["dispatch"](_0x3cf023), this["refresh"](_0xb14442);
      },
      "refresh": function (_0x492010, _0x27cda1) {
        var _0x182fef = this["$children"][0];
        _0x182fef && _0x182fef["reset"](), this["$store"]["commit"](_0x1056cd), this["fetchCaptcha"](_0x492010, _0x27cda1);
      },
      "updateUIByType": function (_0x383e46, _0x4dd95d) {
        _0x4dd95d && _0x10f536["delClass"](this["$el"], this["getCaptchaTypeClassName"](_0x4dd95d)), _0x10f536["addClass"](this["$el"], this["getCaptchaTypeClassName"](_0x383e46));
      },
      "getCaptchaTypeClassName": function (_0x102ae7) {
        return _0x102ae7 ? _0x308e3a["CAPTCHA"] + "--" + _0x5ebd56["getObjKey"](_0x31f80f, _0x102ae7)["toLowerCase"]() : "";
      },
      "getWidth": function () {
        return this["$el"]["offsetWidth"];
      },
      "getSizeType": function () {
        return Object["keys"](_0x520fbf)["indexOf"](this["size"]) !== -1 ? _0x19d319["LARGE"] : _0x19d319["DEFAULT"];
      },
      "resetClassNames": function () {
        for (var _0x21eb25 = this["_baseClassNames"]["split"](/\s+/), _0x186175 = arguments["length"], _0x4cc915 = Array(_0x186175), _0x5cc9fb = 0; _0x5cc9fb < _0x186175; _0x5cc9fb++) _0x4cc915[_0x5cc9fb] = arguments[_0x5cc9fb];
        this["$el"]["className"] = _0x40a1d8(_0x21eb25, this["getCaptchaTypeClassName"](this["captchaType"]), _0x4cc915);
      },
      "switchCaptchaType": function (_0x1819ad) {
        if (_0x1819ad) {
          var _0x70206c = _0x31f80f["JIGSAW"],
            _0x3b74a9 = _0x31f80f["POINT"],
            _0x2a7307 = _0x31f80f["SMS"],
            _0x4f3248 = _0x31f80f["ICON_POINT"],
            _0xfe80ae = _0x31f80f["INFERENCE"],
            _0xe22f1f = _0x31f80f["WORD_ORDER"],
            _0x3ab48b = _0x31f80f["SPACE"],
            _0x3a23f0 = _0x31f80f["VOICE"],
            _0x244dc2 = {
              "el": this["$el"],
              "propsData": {
                "loadInfo": this["load"],
                "mode": this["mode"],
                "size": this["size"],
                "type": _0x1819ad,
                "onVerifyCaptcha": this["verifyCaptcha"]["bind"](this),
                "fixedAudio": this["fixedAudio"],
                "isRtlLang": this["isRtlLang"]
              },
              "_boundProps": {
                "loadInfo": "load"
              },
              "$parent": this
            },
            _0x2f557c = this["$children"][0];
          switch (_0x2f557c && _0x2f557c["$destroy"](), _0x1819ad) {
            case _0x70206c:
              _0x2f557c = new _0x2b1e3a(_0x244dc2);
              break;
            case _0x3b74a9:
            case _0x4f3248:
            case _0xe22f1f:
            case _0x3ab48b:
              _0x2f557c = new _0x559289(_0x244dc2);
              break;
            case _0x2a7307:
              _0x2f557c = new _0x6f3f17(_0x244dc2);
              break;
            case _0xfe80ae:
              _0x2f557c = new _0x5f2b2e(_0x244dc2);
              break;
            case _0x3a23f0:
              _0x2f557c = new _0x5f3166(_0x244dc2);
          }
          _0x2f557c["$forceUpdate"](), this["$children"] = [_0x2f557c];
        }
      },
      "changeLoadStatus": function (_0x57c77f) {
        if (_0x57c77f) {
          var _0xda4621 = _0x308e3a["CAPTCHA"],
            _0x236db5 = _0x308e3a["LOADING"],
            _0x46fec6 = _0x308e3a["LOADFAIL"],
            _0x50a9a4 = _0x308e3a["LOADTEXT"],
            _0x1e2600 = _0x10f536["find"]("." + _0x50a9a4, this["$el"]),
            _0x214388 = _0x10f536["find"](".yidun_tips__text", this["$el"]),
            _0x194be7 = _0x10f536["find"](".yidun_tips__answer", this["$el"]),
            _0x47033b = this["$store"]["state"]["langPkg"],
            _0x59621a = _0x57c77f["status"],
            _0x2186ee = _0x57c77f["data"];
          switch (_0x59621a) {
            case "loading":
              _0x2186ee || (this["resetClassNames"](_0xda4621 + "--" + _0x236db5), _0x10f536["text"](_0x1e2600, _0x47033b["loading"]), _0x10f536["text"](_0x214388, _0x47033b["loading"]), _0x10f536["addClass"](_0x194be7, "hide"));
              break;
            case "done":
              this["resetClassNames"]();
              break;
            case "fail":
              this["resetClassNames"](_0xda4621 + "--" + _0x46fec6), _0x10f536["supportAudio"] || this["captchaType"] !== _0x31f80f["VOICE"] ? (_0x10f536["text"](_0x1e2600, _0x47033b["loadfail"]), _0x10f536["text"](_0x214388, _0x47033b["loadfail"])) : (_0x10f536["text"](_0x1e2600, _0x47033b["notSupportVoice"]), _0x10f536["text"](_0x214388, _0x47033b["notSupportVoice"])), _0x10f536["addClass"](_0x194be7, "hide");
          }
          "done" !== _0x59621a || this["intellisense"] || this["isReady"] || (this["isReady"] = !0, this["$store"]["commit"](_0x22daa7, {
            "name": "onReady"
          }));
        }
      },
      "updateVerifyStatus": function (_0x238eb8, _0x1059e1) {
        var _0x28db76 = this,
          _0x2937ec = _0x308e3a["CAPTCHA"],
          _0x4d4e88 = _0x308e3a["SUCCESS"],
          _0x1ad3d4 = _0x308e3a["VERIFY"],
          _0x23a388 = _0x308e3a["ERROR"],
          _0x35d03b = _0x10f536["find"](".yidun_tips__text", this["$el"]),
          _0x388475 = _0x10f536["find"](".yidun_tips__answer", this["$el"]),
          _0x308801 = _0x10f536["find"](".yidun_slider__icon--img", this["$el"]),
          _0x10f853 = this["$data"]["customStyles"],
          _0x4fd88b = _0x10f853["controlBar"],
          _0x612839 = void 0 === _0x4fd88b ? {} : _0x4fd88b,
          _0x5cedeb = _0x10f853["icon"],
          _0x161255 = void 0 === _0x5cedeb ? {} : _0x5cedeb,
          _0x35ff44 = this["$store"]["state"],
          _0x26a8a2 = _0x35ff44["langPkg"],
          _0x399c72 = _0x35ff44["config"],
          _0x594c8b = _0x35ff44["countsOfVerifyError"],
          _0x249e37 = function (_0x2f4b22) {
            !_0x161255["slider"] && _0x308801 && (_0x2f4b22 ? (_0x308801["src"] = _0x2f4b22, _0x308801["style"]["display"] = "block") : _0x308801["style"]["display"] = "none");
          };
        switch (_0x238eb8) {
          case "verifying":
            this["resetClassNames"](_0x2937ec + "--" + _0x1ad3d4);
            break;
          case "success":
            this["resetClassNames"](_0x2937ec + "--" + _0x4d4e88), this["captchaType"] === _0x31f80f["JIGSAW"] ? _0x10f536["text"](_0x35d03b, "") : _0x10f536["text"](_0x35d03b, _0x26a8a2["verifySuccess"]), _0x10f536["addClass"](_0x388475, "hide"), _0x249e37(_0x612839["slideIconSuccess"]);
            break;
          case "error":
            var _0x2aee4b = _0x594c8b > _0x399c72["maxVerification"],
              _0x2339a4 = _0x2937ec + "--" + _0x23a388,
              _0x5d0039 = _0x2aee4b ? _0x2339a4 + " yidun--maxerror" : _0x2339a4;
            if (this["resetClassNames"](_0x5d0039), _0x2aee4b ? _0x10f536["text"](_0x35d03b, _0x26a8a2["verifyOutOfLimit"]) : this["captchaType"] === _0x31f80f["JIGSAW"] ? _0x10f536["text"](_0x35d03b, "") : _0x10f536["text"](_0x35d03b, _0x26a8a2["verifyError"]), _0x10f536["addClass"](_0x388475, "hide"), _0x249e37(_0x612839["slideIconError"]), !_0x2aee4b) {
              var _0x1383dd = [_0x31f80f["POINT"], _0x31f80f["INFERENCE"], _0x31f80f["WORD_ORDER"], _0x31f80f["ICON_POINT"], _0x31f80f["SPACE"]]["indexOf"](this["captchaType"]) > -1 ? 1200 : _0x399c72["refreshInterval"];
              this["captchaType"] === _0x31f80f["VOICE"] && (_0x1383dd = 2500), window["setTimeout"](function () {
                return _0x28db76["refresh"]();
              }, _0x1383dd);
            }
        }
      },
      "setFeedbackUrl": function () {
        var _0x485f33 = _0x10f536["find"](".yidun_feedback", this["$el"]);
        if (_0x485f33) {
          var _0x45d974 = this["$store"]["state"]["token"];
          _0x485f33["href"] = this["feedback"]["url"] + "?" + _0x5ebd56["encodeUrlParams"]({
            "captchaId": this["captchaId"],
            "token": _0x45d974
          });
        }
      },
      "shouldHandleFloatChange": function (_0x16ab40) {
        var _0x38b378 = this["$store"]["state"],
          _0x60efaf = _0x38b378["countsOfVerifyError"],
          _0x465ddf = _0x38b378["verifyStatus"],
          _0x13188a = _0x38b378["config"];
        return !(_0x60efaf > _0x13188a["maxVerification"]) && (!_0x16ab40 || "done" === _0x16ab40["status"]) && !_0x465ddf;
      }
    }
  };
}, function (_0x22993d, _0xb9ee7e, _0x473eb9) {
  function _0x214bc4(_0x239f7d, _0x2037f1) {
    var _0x2c6d0c = {};
    for (var _0x2d05f6 in _0x239f7d) _0x2037f1["indexOf"](_0x2d05f6) >= 0 || Object["prototype"]["hasOwnProperty"]["call"](_0x239f7d, _0x2d05f6) && (_0x2c6d0c[_0x2d05f6] = _0x239f7d[_0x2d05f6]);
    return _0x2c6d0c;
  }
  function _0xa6f73b(_0x4b37ba) {
    _0x4b37ba["stopPropagation"](), _0x4b37ba["nativeEvent"]["stopPropagation"](), this["close"](_0x1adcf7["USER"]);
  }
  function _0x17dd41(_0x53f6e3) {
    return /[%|em|rem]/["test"](_0x53f6e3);
  }
  function _0x1a897e(_0x560fc5, _0x3a4e58, _0xdb6c8a) {
    return _0x3a4e58 = _0x3a4e58 || _0x560fc5, _0xdb6c8a = _0xdb6c8a || _0x560fc5, _0x17dd41(_0x3a4e58) || _0x17dd41(_0xdb6c8a) ? 0 : (_0x3a4e58 = parseFloat(_0x3a4e58, 10), _0xdb6c8a = parseFloat(_0xdb6c8a, 10), _0x14da52[0] + _0x3a4e58 + _0xdb6c8a + 2);
  }
  function _0x2aa4a6(_0x2bd72f, _0x1c57e3, _0x3b75a7) {
    if (!_0x1c57e3) return _0x2bd72f;
    var _0x19b1b7 = Object["assign"]({}, _0x2bd72f, _0x1c57e3),
      _0xf0a815 = _0x19b1b7["capPadding"],
      _0x1564b6 = _0x19b1b7["capPaddingTop"],
      _0x16b144 = _0x19b1b7["capPaddingRight"],
      _0x4109b1 = _0x19b1b7["capPaddingBottom"],
      _0xe9b198 = _0x19b1b7["capPaddingLeft"],
      _0x4ccf07 = _0x19b1b7["capBarHeight"],
      _0x2b07ae = _0x19b1b7["capBarTextSize"],
      _0x557a13 = _0x19b1b7["width"],
      _0x5266c5 = _0x19b1b7["top"],
      _0x423b34 = _0x19b1b7["bottom"],
      _0x49fd8a = _0x19b1b7["opacity"],
      _0x40f40b = _0x19b1b7["radius"],
      _0x3ab572 = _0x19b1b7["paddingTop"],
      _0x226238 = _0x19b1b7["paddingBottom"],
      _0x2752c4 = _0x19b1b7["position"],
      _0x53e594 = _0x214bc4(_0x19b1b7, ["capPadding", "capPaddingTop", "capPaddingRight", "capPaddingBottom", "capPaddingLeft", "capBarHeight", "capBarTextSize", "width", "top", "bottom", "opacity", "radius", "paddingTop", "paddingBottom", "position"]);
    _0xf0a815 = parseFloat(_0xf0a815, 10), _0xf0a815 = _0xf0a815 && 0 !== _0xf0a815 ? _0xf0a815 : _0x2bd72f["capPadding"], _0x1564b6 = _0x1564b6 && parseFloat(_0x1564b6, 10), _0x16b144 = _0x16b144 && parseFloat(_0x16b144, 10), _0x4109b1 = _0x4109b1 && parseFloat(_0x4109b1, 10), _0xe9b198 = _0xe9b198 && parseFloat(_0xe9b198, 10), _0x4ccf07 = 0 !== _0x4ccf07 && _0x3682d9(_0x4ccf07) || _0x3682d9(_0x2bd72f["capBarHeight"]), _0x2b07ae = _0x3682d9(_0x2b07ae), _0x40f40b = _0x3682d9(_0x40f40b), _0x3ab572 = _0x3682d9(_0x3ab572), _0x226238 = _0x3682d9(_0x226238), _0x49fd8a = parseFloat(_0x49fd8a), !_0x49fd8a && 0 !== _0x49fd8a && (_0x49fd8a = _0x2bd72f["opacity"]), "static" === _0x2752c4 && (_0x2752c4 = _0x2bd72f["position"]);
    var _0x566167 = "auto" !== _0x557a13;
    if (_0x566167) {
      var _0xca1257 = _0x1a897e(_0xf0a815, _0x16b144, _0xe9b198);
      (_0x3b75a7 <= 1 || !_0x17dd41(_0x557a13)) && (_0x557a13 = parseFloat(_0x557a13, 10) || 0, _0x557a13 = _0x557a13 > _0xca1257 ? _0x557a13 : _0xca1257, _0x557a13 += "px");
    }
    "auto" !== _0x423b34 && (_0x5266c5 = "auto", "number" === _0x366c40["typeOf"](_0x423b34) || Number(_0x423b34) || "0" === _0x423b34 ? _0x423b34 += "px" : /\d+(\.\d+)?(px|rem)/["test"](_0x423b34) || (_0x423b34 = parseFloat(_0x423b34, 10) || 0, _0x423b34 = _0x423b34 >= 0 && _0x423b34 <= 100 ? _0x423b34 + "%" : _0x2bd72f["bottom"]));
    var _0x4ca792 = "auto" !== _0x5266c5;
    return _0x4ca792 && ("number" === _0x366c40["typeOf"](_0x5266c5) || Number(_0x5266c5) || "0" === _0x5266c5 ? _0x5266c5 += "px" : /\d+(\.\d+)?(px|rem)/["test"](_0x5266c5) || (_0x5266c5 = parseFloat(_0x5266c5, 10) || 0, _0x5266c5 = _0x5266c5 >= 0 && _0x5266c5 <= 100 ? _0x5266c5 + "%" : _0x2bd72f["top"])), _0xa18efb({
      "width": _0x557a13,
      "top": _0x5266c5,
      "bottom": _0x423b34,
      "capPadding": _0xf0a815,
      "capPaddingTop": _0x1564b6,
      "capPaddingRight": _0x16b144,
      "capPaddingBottom": _0x4109b1,
      "capPaddingLeft": _0xe9b198,
      "capBarHeight": _0x4ccf07,
      "capBarTextSize": _0x2b07ae,
      "opacity": _0x49fd8a,
      "radius": _0x40f40b,
      "paddingTop": _0x3ab572,
      "paddingBottom": _0x226238,
      "position": _0x2752c4
    }, _0x53e594);
  }
  var _0xa18efb = Object["assign"] || function (_0x403579) {
      for (var _0x2b36dd = 1; _0x2b36dd < arguments["length"]; _0x2b36dd++) {
        var _0xd0ad9e = arguments[_0x2b36dd];
        for (var _0x28b68e in _0xd0ad9e) Object["prototype"]["hasOwnProperty"]["call"](_0xd0ad9e, _0x28b68e) && (_0x403579[_0x28b68e] = _0xd0ad9e[_0x28b68e]);
      }
      return _0x403579;
    },
    _0x2181fc = _0x473eb9(2),
    _0x366c40 = _0x473eb9(1),
    _0x8c627 = _0x473eb9(4),
    _0x307598 = _0x8c627["UPDATE_VERIFY_STATUS"],
    _0x16a3cc = _0x8c627["EVENT_CLOSE"],
    _0x3d0337 = _0x473eb9(13),
    _0x289c4e = _0x473eb9(3),
    _0x13c818 = _0x289c4e["RTL_LANGS"],
    _0x14da52 = _0x289c4e["WIDTH_LIMIT"],
    _0x1adcf7 = _0x289c4e["CLOSE_SOURCE"],
    _0x11daaf = _0x473eb9(15),
    _0x51c5a3 = _0x11daaf["applyColorIfNeed"],
    _0x16c08f = _0x11daaf["applyStyleIfNeed"],
    _0x3682d9 = _0x473eb9(21),
    _0x4f02ea = {
      "capPadding": 15,
      "capBarHeight": 50,
      "width": "auto",
      "top": "20%",
      "opacity": 0.3,
      "position": "",
      "bottom": "auto"
    };
  _0x22993d["exports"] = {
    "el": ".yidun_popup",
    "template": _0x473eb9(63),
    "components": {
      "captcha-core": _0x3d0337
    },
    "props": {
      "autoOpen": {
        "type": Boolean,
        "default": !0
      },
      "intellisense": {
        "type": Boolean,
        "default": !1
      },
      "enableColor": {
        "type": Boolean,
        "default": !1
      },
      "onOpen": Function,
      "onBeforeClose": Function,
      "onClose": Function
    },
    "data": function () {
      var _0x1440f6 = this["$store"]["state"],
        _0x27a27a = _0x1440f6["langPkg"],
        _0x2db700 = _0x1440f6["config"],
        _0x24d5ec = _0xa18efb({}, _0x4f02ea, _0x2db700["appendTo"] ? {
          "top": "auto"
        } : {}),
        _0x102a6b = _0x2aa4a6(_0x24d5ec, _0x2db700["popupStyles"], _0x2db700["apiVersion"]),
        _0x2a616e = "auto" !== _0x102a6b["width"],
        _0x51297e = "auto" !== _0x102a6b["top"],
        _0xdbc8a4 = "auto" !== _0x102a6b["bottom"];
      return {
        "langPkg": _0x27a27a,
        "widthIsNotAuto": _0x2a616e,
        "width": _0x102a6b["width"],
        "topIsNotAuto": _0x51297e,
        "bottomIsNotAuto": _0xdbc8a4,
        "theme": _0x2db700["theme"],
        "size": _0x2db700["size"],
        "curCloseSource": "",
        "popupStyles": _0x102a6b,
        "appendTo": _0x2db700["appendTo"],
        "isRtlLang": _0x13c818["indexOf"](_0x2db700["lang"]) !== -1,
        "enableClose": _0x2db700["enableClose"],
        "hideCloseBtn": _0x2db700["hideCloseBtn"],
        "disableMaskClose": _0x2db700["disableMaskClose"],
        "enableAutoFocus": _0x2db700["enableAutoFocus"],
        "disableFocusVisible": _0x2db700["disableFocusVisible"],
        "bodyCloseModalFn": this["bodyCloseModal"]["bind"](this)
      };
    },
    "on": Object["assign"]({
      ".yidun_modal__close click": _0xa6f73b
    }, {
      ".yidun_popup__mask click": function (_0x47eb15) {
        this["disableMaskClose"] || _0xa6f73b["call"](this, _0x47eb15);
      }
    }),
    "mounted": function () {
      var _0x419874 = this,
        _0x1af287 = this["$store"]["state"]["config"];
      _0x51c5a3(_0x1af287["customStyles"]["primaryColor"], this["$el"], this["enableColor"]), _0x16c08f(_0x1af287["customStyles"], this["$el"]);
      var _0x51ca7d = _0x2181fc["find"](".yidun_modal", this["$el"]),
        _0x19e14e = _0x2181fc["find"](".yidun_popup__mask", this["$el"]),
        _0x2e4543 = null,
        _0x27c415 = this["popupStyles"]["opacity"];
      _0x2181fc["on"](this["appendTo"] ? _0x19e14e : document, "click", this["bodyCloseModalFn"]), this["_transition"] = _0x2181fc["transition"](_0x51ca7d, {
        "name": "popup_ease",
        "beforeEnter": function () {
          _0x19e14e["style"]["opacity"] = "0", _0x419874["onOpen"] && _0x419874["onOpen"](), _0x419874["enableAutoFocus"] && document["activeElement"] && document["activeElement"] !== _0x51ca7d && (_0x2e4543 = document["activeElement"]);
        },
        "insert": function () {
          if (_0x419874["$el"]["style"]["display"] = "block", _0x419874["$store"]["state"]["config"]["apiVersion"] > 1 && _0x17dd41(_0x419874["width"]) && _0x419874["widthIsNotAuto"]) {
            var _0x285a61 = _0x1a897e(_0x419874["popupStyles"]["capPadding"]);
            _0x51ca7d["offsetWidth"] < _0x285a61 && (_0x419874["$setData"]({
              "width": _0x285a61 + "px"
            }), _0x51ca7d["style"]["width"] = _0x285a61 + "px");
          }
          _0x419874["enableAutoFocus"] && _0x51ca7d["focus"]();
        },
        "enter": function () {
          _0x19e14e["style"]["opacity"] = _0x27c415;
        },
        "leave": function () {
          _0x19e14e["style"]["opacity"] = "0";
        },
        "afterLeave": function () {
          var _0x5e8f91 = _0x419874["onClose"];
          _0x419874["$el"]["style"]["display"] = "none", _0x419874["$store"]["commit"](_0x16a3cc), _0x5e8f91 && _0x5e8f91(_0x419874["curCloseSource"]), _0x419874["enableAutoFocus"] && _0x2e4543 && _0x2e4543["focus"]();
        }
      }), this["_unsubscribe"] = this["$store"]["subscribe"](function (_0x40fa65, _0x37544a) {
        var _0x929b49 = _0x40fa65["type"];
        _0x929b49 === _0x307598 && "success" === _0x37544a["verifyStatus"] && window["setTimeout"](function () {
          _0x419874["close"]();
        }, 500);
      }), this["autoOpen"] && this["open"]();
    },
    "beforeDestroy": function () {
      this["_transition"]["dispose"](), _0x2181fc["off"](this["appendTo"] ? _0x2181fc["find"](".yidun_popup__mask", this["$el"]) : document, "click", this["bodyCloseModalFn"]);
    },
    "methods": {
      "open": function () {
        var _0x3da956 = this;
        _0x366c40["nextFrame"](function () {
          return _0x3da956["_transition"]["enter"]();
        });
      },
      "bodyCloseModal": function (_0x4aaea4) {
        var _0x4305b9 = _0x2181fc["className"](_0x4aaea4["target"]);
        _0x4305b9 && _0x4305b9["search"](/yidun/g) > -1 || this["close"](_0x1adcf7["USER"]);
      },
      "close": function (_0x597cc7) {
        this["$store"]["state"]["config"]["enableClose"] || this["closeModal"](_0x597cc7);
      },
      "closeModal": function () {
        var _0x894e28 = arguments["length"] > 0 && void 0 !== arguments[0] ? arguments[0] : _0x1adcf7["PROCESS"];
        this["_isMounted"] && "none" !== this["$el"]["style"]["display"] && (this["$store"]["state"]["config"]["enableClose"] && (_0x894e28 = _0x1adcf7["CLOSE"]), this["onBeforeClose"] && this["onBeforeClose"](), this["curCloseSource"] = _0x894e28, this["_transition"]["leave"]());
      },
      "refresh": function () {
        var _0x15f4d9 = this["$children"][0];
        _0x15f4d9 && _0x15f4d9["refresh"]["apply"](_0x15f4d9, arguments);
      }
    }
  };
}, function (_0x4b6e1a, _0x51269e, _0x342bf2) {
  function _0x4785cc(_0x430ff5, _0x5d56b7) {
    var _0x36afa6 = !(arguments["length"] > 2 && void 0 !== arguments[2]) || arguments[2];
    if (_0x430ff5 && _0x36afa6) {
      var _0x45fe2d = _0x243173["uuid"](),
        _0x271210 = "\n    .yidun_intellisense .yidun_intelli-tips:hover .yidun_intelli-icon,\n    .yidun_intellisense.yidun_intellisense--checking .yidun_intelli-icon,\n    .yidun_intellisense.yidun_intellisense--loading .yidun_intelli-icon,\n    .yidun.yidun--jigsaw .yidun_control .yidun_slider:hover,\n    .yidun.yidun--jigsaw .yidun_control.yidun_control--moving .yidun_slider {\n      background-color: " + _0x430ff5 + ";\n    }\n    .yidun.yidun--jigsaw .yidun_control.yidun_control--moving .yidun_slide_indicator {\n      border-color: " + _0x430ff5 + ";\n    }\n  ",
        _0x34a2f1 = Object["assign"]([["NECaptcha-color__" + _0x45fe2d, _0x271210]]);
      _0x25f3b1(_0x34a2f1, _0x5d56b7);
    }
  }
  function _0x54034e(_0x24e20a, _0xcd0c91) {
    var _0x1f3de9 = !(arguments["length"] > 2 && void 0 !== arguments[2]) || arguments[2];
    if (_0x1f3de9) {
      var _0x707a4d = _0x24e20a["controlBar"],
        _0x412838 = _0x24e20a["imagePanel"],
        _0x50ccbf = "";
      if (_0x707a4d) {
        var _0x7a607d = _0x707a4d["borderColor"],
          _0x347140 = _0x707a4d["background"],
          _0x204d0e = _0x707a4d["borderColorMoving"],
          _0x4b09c7 = _0x707a4d["backgroundMoving"],
          _0x311f43 = _0x707a4d["borderColorSuccess"],
          _0x35836e = _0x707a4d["backgroundSuccess"],
          _0x3f4715 = _0x707a4d["borderColorError"],
          _0x23c193 = _0x707a4d["backgroundError"],
          _0xf67c0d = _0x707a4d["slideBackground"],
          _0xa0fbba = _0x707a4d["textSize"],
          _0x906ab2 = _0x707a4d["textColor"],
          _0x51a337 = _0x707a4d["paddingLeft"];
        _0x50ccbf += "\n    .yidun.yidun-custom.yidun--light .yidun_control,\n    .yidun.yidun-custom.yidun--dark .yidun_control {\n      " + (_0x7a607d ? "border-color: " + _0x7a607d : "") + ";\n      " + (_0x347140 ? "background: " + _0x347140 : "") + ";\n    }\n\n    .yidun.yidun-custom.yidun--light .yidun_control.yidun_control--moving .yidun_slide_indicator,\n    .yidun.yidun-custom.yidun--dark .yidun_control.yidun_control--moving .yidun_slide_indicator {\n      " + (_0x204d0e ? "border-color: " + _0x204d0e : "") + ";\n      " + (_0x4b09c7 ? "background: " + _0x4b09c7 : "") + ";\n    }\n    .yidun.yidun-custom.yidun--light .yidun_control.yidun_control--moving .yidun_slider,\n    .yidun.yidun-custom.yidun--dark .yidun_control.yidun_control--moving .yidun_slider {\n      " + (_0x204d0e ? "background: " + _0x204d0e : "") + ";\n    }\n\n    .yidun.yidun-custom.yidun--light.yidun--success .yidun_control .yidun_slide_indicator,\n    .yidun.yidun-custom.yidun--dark.yidun--success .yidun_control .yidun_slide_indicator {\n      " + (_0x311f43 ? "border-color: " + _0x311f43 : "") + ";\n      " + (_0x35836e ? "background: " + _0x35836e : "") + ";\n    }\n    .yidun.yidun-custom.yidun--light.yidun--jigsaw.yidun--success .yidun_control .yidun_slider,\n    .yidun.yidun-custom.yidun--dark.yidun--jigsaw.yidun--success .yidun_control .yidun_slider {\n      " + (_0x311f43 ? "background: " + _0x311f43 : "") + ";\n    }\n    .yidun.yidun-custom.yidun--light.yidun--success:not(.yidun--jigsaw) .yidun_control,\n    .yidun.yidun-custom.yidun--dark.yidun--success:not(.yidun--jigsaw) .yidun_control {\n      " + (_0x311f43 ? "border-color: " + _0x311f43 : "") + ";\n      " + (_0x35836e ? "background: " + _0x35836e : "") + ";\n    }\n    .yidun.yidun-custom.yidun--light.yidun--success .yidun_tips,\n    .yidun.yidun-custom.yidun--dark.yidun--success .yidun_tips {\n      " + (_0x311f43 ? "color: " + _0x311f43 : "") + ";\n    }\n\n    .yidun.yidun-custom.yidun--light.yidun--error .yidun_control .yidun_slide_indicator,\n    .yidun.yidun-custom.yidun--dark.yidun--error .yidun_control .yidun_slide_indicator {\n      " + (_0x3f4715 ? "border-color: " + _0x3f4715 : "") + ";\n      " + (_0x23c193 ? "background: " + _0x23c193 : "") + ";\n    }\n    .yidun.yidun-custom.yidun--light.yidun--jigsaw.yidun--error .yidun_control .yidun_slider,\n    .yidun.yidun-custom.yidun--dark.yidun--jigsaw.yidun--error .yidun_control .yidun_slider {\n      " + (_0x3f4715 ? "background: " + _0x3f4715 : "") + ";\n    }\n    .yidun.yidun-custom.yidun--light.yidun--error:not(.yidun--jigsaw) .yidun_control,\n    .yidun.yidun-custom.yidun--dark.yidun--error:not(.yidun--jigsaw) .yidun_control {\n      " + (_0x3f4715 ? "border-color: " + _0x3f4715 : "") + ";\n      " + (_0x23c193 ? "background: " + _0x23c193 : "") + ";\n    }\n    .yidun.yidun-custom.yidun--light.yidun--error.yidun--maxerror .yidun_control,\n    .yidun.yidun-custom.yidun--dark.yidun--error.yidun--maxerror .yidun_control {\n      " + (_0x3f4715 ? "border-color: " + _0x3f4715 : "") + ";\n      " + (_0x23c193 ? "background: " + _0x23c193 : "") + ";\n    }\n    .yidun.yidun-custom.yidun--light.yidun--error .yidun_tips,\n    .yidun.yidun-custom.yidun--dark.yidun--error .yidun_tips {\n      " + (_0x3f4715 ? "color: " + _0x3f4715 : "") + ";\n    }\n    .yidun.yidun-custom.yidun--light.yidun--error.yidun--maxerror .yidun_tips,\n    .yidun.yidun-custom.yidun--dark.yidun--error.yidun--maxerror .yidun_tips {\n      " + (_0x3f4715 ? "color: " + _0x3f4715 : "") + ";\n    }\n\n    .yidun.yidun-custom.yidun--light.yidun--jigsaw .yidun_slider,\n    .yidun.yidun-custom.yidun--dark.yidun--jigsaw .yidun_slider {\n      " + (_0xf67c0d ? "background: " + _0xf67c0d : "") + ";\n    }\n    .yidun.yidun-custom.yidun--light.yidun--jigsaw .yidun_slider.yidun_slider--hover:hover,\n    .yidun.yidun-custom.yidun--dark.yidun--jigsaw .yidun_slider.yidun_slider--hover:hover {\n      " + (_0x204d0e ? "background: " + _0x204d0e : "") + ";\n    }\n\n    .yidun.yidun-custom.yidun--light .yidun_tips__content,\n    .yidun.yidun-custom.yidun--dark .yidun_tips__content {\n      " + (_0xa0fbba ? "font-size: " + _0xa0fbba : "") + ";\n    }\n    .yidun.yidun-custom.yidun--light:not(.yidun--error):not(.yidun--success) .yidun_tips,\n    .yidun.yidun-custom.yidun--dark:not(.yidun--error):not(.yidun--success) .yidun_tips {\n      " + (_0x906ab2 ? "color: " + _0x906ab2 : "") + ";\n    }\n\n    .yidun.yidun-custom.yidun--light.yidun--jigsaw .yidun_tips,\n    .yidun.yidun-custom.yidun--dark.yidun--jigsaw .yidun_tips {\n      " + (_0x51a337 ? "padding-left: " + _0x51a337 : "") + ";\n    }\n  ";
      }
      if (_0x412838) {
        var _0xec6f22 = _0x412838["loadBackgroundImage"],
          _0x5598f3 = _0x412838["loadBackgroundColor"];
        _0x50ccbf += "\n    .yidun.yidun-custom.yidun--light .yidun_loadbox,\n    .yidun.yidun-custom.yidun--dark .yidun_loadbox {\n      " + (_0xec6f22 ? "background-image: url(" + _0xec6f22 + ")" : "") + ";\n      " + (_0x5598f3 ? "background-color: " + _0x5598f3 : "") + ";\n    }\n    ";
      }
      var _0x470de2 = _0x243173["uuid"](),
        _0x15dd71 = Object["assign"]([["NECaptcha-color__" + _0x470de2, _0x50ccbf]]);
      _0x25f3b1(_0x15dd71, _0xcd0c91);
    }
  }
  var _0x25f3b1 = _0x342bf2(22),
    _0x243173 = _0x342bf2(1);
  _0x4b6e1a["exports"] = {
    "applyColorIfNeed": _0x4785cc,
    "applyStyleIfNeed": _0x54034e
  };
}, function (_0x5c067d, _0xaa2478) {
  _0x5c067d["exports"] = function (_0x178120) {
    var _0x1f4147 = _0x178120["protocol"],
      _0x104d82 = void 0 === _0x1f4147 ? "" : _0x1f4147,
      _0x506b51 = _0x178120["host"],
      _0x3fba9a = void 0 === _0x506b51 ? "" : _0x506b51,
      _0x2f5e4a = _0x178120["port"],
      _0x467b60 = void 0 === _0x2f5e4a ? "" : _0x2f5e4a,
      _0x4fce33 = _0x178120["path"],
      _0x280737 = void 0 === _0x4fce33 ? "" : _0x4fce33,
      _0x39f223 = _0x178120["search"],
      _0x4bdec3 = void 0 === _0x39f223 ? "" : _0x39f223,
      _0x5bc2ba = _0x178120["hash"],
      _0x43148a = void 0 === _0x5bc2ba ? "" : _0x5bc2ba;
    if (_0x104d82 && (_0x104d82 = _0x104d82["replace"](/:?\/{0,2}$/, "://")), _0x3fba9a) {
      var _0x3bd6b0 = _0x3fba9a["match"](/^([-0-9a-zA-Z.:]*)(\/.*)?/);
      _0x3fba9a = _0x3bd6b0[1], _0x280737 = (_0x3bd6b0[2] || "") + "/" + _0x280737;
    }
    if (!_0x3fba9a && (_0x104d82 = ""), _0x467b60) {
      if (!_0x3fba9a) throw Error("\"host\" is required, if \"port\" was provided");
      _0x467b60 = ":" + _0x467b60;
    }
    return _0x280737 && (_0x280737 = _0x280737["replace"](/^\/*|\/+/g, "/")), _0x4bdec3 && (_0x4bdec3 = _0x4bdec3["replace"](/^\??/, "?")), _0x43148a && (_0x43148a = _0x43148a["replace"](/^#?/, "#")), _0x104d82 + _0x3fba9a + _0x467b60 + _0x280737 + _0x4bdec3 + _0x43148a;
  };
}, function (_0x3fd9b5, _0x558992, _0x335791) {
  var _0x270ef6,
    _0x519919,
    _0xfedfd4 = "function" == typeof Symbol && "symbol" == typeof Symbol["iterator"] ? function (_0x5b874b) {
      return typeof _0x5b874b;
    } : function (_0x330272) {
      return _0x330272 && "function" == typeof Symbol && _0x330272["constructor"] === Symbol && _0x330272 !== Symbol["prototype"] ? "symbol" : typeof _0x330272;
    };
  !function () {
    var _0x5d7abf = function () {
      function _0x2b16c0() {}
      function _0x58fba7(_0x2e5940, _0x4eaaa6) {
        for (var _0x313ace = _0x4eaaa6["length"], _0x466731 = 0; _0x466731 < _0x313ace; ++_0x466731) _0x4cde77(_0x2e5940, _0x4eaaa6[_0x466731]);
      }
      function _0x530ffd(_0x1fc6d6, _0x3db18e) {
        _0x1fc6d6[_0x3db18e] = !0;
      }
      function _0x2c5b43(_0x452bea, _0x512c86) {
        for (var _0x16f140 in _0x512c86) _0x1b97c4["call"](_0x512c86, _0x16f140) && (_0x452bea[_0x16f140] = !!_0x512c86[_0x16f140]);
      }
      function _0x6f8b6d(_0x345df0, _0x363af7) {
        for (var _0x59c6a6 = _0x363af7["split"](_0x3b9c52), _0x2fe499 = _0x59c6a6["length"], _0x31b09f = 0; _0x31b09f < _0x2fe499; ++_0x31b09f) _0x345df0[_0x59c6a6[_0x31b09f]] = !0;
      }
      function _0x4cde77(_0x38c650, _0x5cbc35) {
        if (_0x5cbc35) {
          var _0x7f4fdc = "undefined" == typeof _0x5cbc35 ? "undefined" : _0xfedfd4(_0x5cbc35);
          "string" === _0x7f4fdc ? _0x6f8b6d(_0x38c650, _0x5cbc35) : Array["isArray"](_0x5cbc35) ? _0x58fba7(_0x38c650, _0x5cbc35) : "object" === _0x7f4fdc ? _0x2c5b43(_0x38c650, _0x5cbc35) : "number" === _0x7f4fdc && _0x530ffd(_0x38c650, _0x5cbc35);
        }
      }
      function _0xddbc7e() {
        for (var _0x5d6e36 = arguments["length"], _0xcbbaa9 = Array(_0x5d6e36), _0x47eb09 = 0; _0x47eb09 < _0x5d6e36; _0x47eb09++) _0xcbbaa9[_0x47eb09] = arguments[_0x47eb09];
        var _0x2bddd9 = new _0x2b16c0();
        _0x58fba7(_0x2bddd9, _0xcbbaa9);
        var _0x458e0f = [];
        for (var _0x56a3f8 in _0x2bddd9) _0x2bddd9[_0x56a3f8] && _0x458e0f["push"](_0x56a3f8);
        return _0x458e0f["join"](" ");
      }
      _0x2b16c0["prototype"] = {};
      var _0x1b97c4 = {}["hasOwnProperty"],
        _0x3b9c52 = /\s+/;
      return _0xddbc7e;
    }();
    "undefined" != typeof _0x3fd9b5 && _0x3fd9b5["exports"] ? _0x3fd9b5["exports"] = _0x5d7abf : "object" === _0xfedfd4(_0x335791(23)) && _0x335791(23) ? (_0x270ef6 = [], _0x519919 = function () {
      return _0x5d7abf;
    }["apply"](_0x558992, _0x270ef6), !(void 0 !== _0x519919 && (_0x3fd9b5["exports"] = _0x519919))) : window["classNames"] = _0x5d7abf;
  }();
}, function (_0xcc33de, _0x6e6c0c) {
  function _0x149390() {
    function _0x5d8a1e(_0x20d15f) {
      return _0x446677["call"](_0x1fdd57(_0x20d15f) ? _0x20d15f : function () {}, _0x20d15f, 1);
    }
    function _0x1fdd57(_0x1cbfe1) {
      return ("undefined" == typeof _0x1cbfe1 ? "undefined" : _0x1b9cca(_0x1cbfe1)) === _0x499ca9;
    }
    function _0x5c66e3(_0x42f625, _0x41fa42, _0x215bc5) {
      return function () {
        var _0x29dab8 = this["supr"];
        this["supr"] = _0x215bc5[_0x5dc943][_0x42f625];
        var _0x5550d0 = {}["fabricatedUndefined"],
          _0x26ef70 = _0x5550d0;
        try {
          _0x26ef70 = _0x41fa42["apply"](this, arguments);
        } finally {
          this["supr"] = _0x29dab8;
        }
        return _0x26ef70;
      };
    }
    function _0x5113f8(_0x591a45, _0xf31677, _0x505b73) {
      for (var _0x4d038d in _0xf31677) _0xf31677["hasOwnProperty"](_0x4d038d) && (_0x591a45[_0x4d038d] = _0x1fdd57(_0xf31677[_0x4d038d]) && _0x1fdd57(_0x505b73[_0x5dc943][_0x4d038d]) && _0xb9c4d9["test"](_0xf31677[_0x4d038d]) ? _0x5c66e3(_0x4d038d, _0xf31677[_0x4d038d], _0x505b73) : _0xf31677[_0x4d038d]);
    }
    function _0x446677(_0x49d670, _0x5ad961) {
      function _0x1846c1() {}
      function _0x41b115() {
        this["initialize"] ? this["initialize"]["apply"](this, arguments) : (_0x5ad961 || _0x1add3a && _0x3b8664["apply"](this, arguments), _0x774f46["apply"](this, arguments));
      }
      _0x1846c1[_0x5dc943] = this[_0x5dc943];
      var _0x3b8664 = this,
        _0x230990 = new _0x1846c1(),
        _0x1add3a = _0x1fdd57(_0x49d670),
        _0x774f46 = _0x1add3a ? _0x49d670 : this,
        _0x44a102 = _0x1add3a ? {} : _0x49d670;
      return _0x41b115["methods"] = function (_0x2e7190) {
        return _0x5113f8(_0x230990, _0x2e7190, _0x3b8664), _0x41b115[_0x5dc943] = _0x230990, this;
      }, _0x41b115["methods"]["call"](_0x41b115, _0x44a102)["prototype"]["constructor"] = _0x41b115, _0x41b115["extend"] = arguments["callee"], _0x41b115[_0x5dc943]["implement"] = _0x41b115["statics"] = function (_0x2fa0a2, _0x5cc3d6) {
        return _0x2fa0a2 = "string" == typeof _0x2fa0a2 ? function () {
          var _0x45cdf0 = {};
          return _0x45cdf0[_0x2fa0a2] = _0x5cc3d6, _0x45cdf0;
        }() : _0x2fa0a2, _0x5113f8(this, _0x2fa0a2, _0x3b8664), this;
      }, _0x41b115;
    }
    var _0x499ca9 = "function",
      _0xb9c4d9 = /xyz/["test"](function () {
        xyz;
      }) ? /\bsupr\b/ : /.*/,
      _0x5dc943 = "prototype";
    return _0x5d8a1e;
  }
  var _0x1b9cca = "function" == typeof Symbol && "symbol" == typeof Symbol["iterator"] ? function (_0x25277b) {
    return typeof _0x25277b;
  } : function (_0x18d350) {
    return _0x18d350 && "function" == typeof Symbol && _0x18d350["constructor"] === Symbol && _0x18d350 !== Symbol["prototype"] ? "symbol" : typeof _0x18d350;
  };
  _0xcc33de["exports"] = _0x149390();
}, function (_0x22bb25, _0x425e62) {
  function _0x44acec() {
    this["_state"] = _0x5ce2da, this["_arg"] = void 0, this["_fullfilledCallback"] = [], this["_rejectedCallback"] = [];
  }
  function _0x377ae2(_0x3917b4) {
    window["setTimeout"](_0x3917b4, 1);
  }
  function _0x4694ec(_0x153a36) {
    if (_0x153a36) {
      var _0x4dce0b = new _0x44acec();
      _0x153a36["then"] = function () {
        return _0x4dce0b["then"]["apply"](_0x4dce0b, arguments);
      }, _0x153a36["catch"] = function () {
        return _0x4dce0b["catch"]["apply"](_0x4dce0b, arguments);
      }, _0x153a36["finally"] = function () {
        return _0x4dce0b["finally"]["apply"](_0x4dce0b, arguments);
      }, _0x153a36["resolve"] = function () {
        return _0x4dce0b["resolve"]["apply"](_0x4dce0b, arguments);
      };
    }
  }
  var _0x5ce2da = "pending",
    _0x81f631 = "fullfilled",
    _0x1137f = "rejected";
  Object["assign"](_0x44acec["prototype"], {
    "then": function (_0x136d5f, _0x82bb8f) {
      var _0x517a9a = function (_0x36ab36) {
        return "function" == typeof _0x36ab36;
      };
      return _0x517a9a(_0x136d5f) && this["_fullfilledCallback"]["push"](_0x136d5f), _0x517a9a(_0x82bb8f) && this["_rejectedCallback"]["push"](_0x82bb8f), this["_state"] !== _0x5ce2da && this["_emit"](this["_state"]), this;
    },
    "catch": function (_0x31c522) {
      return this["then"](null, _0x31c522);
    },
    "finally": function (_0x2c1956) {
      return this["then"](_0x2c1956, _0x2c1956);
    },
    "resolve": function (_0x3ee214) {
      this["_state"] === _0x5ce2da && (_0x3ee214 instanceof Error ? this["_state"] = _0x1137f : this["_state"] = _0x81f631, this["_arg"] = _0x3ee214, this["_emit"](this["_state"]));
    },
    "_emit": function (_0x15ceba) {
      var _0x10441c = this;
      switch (_0x15ceba) {
        case _0x81f631:
          _0x377ae2(function () {
            _0x10441c["_fullfilledCallback"]["map"](function (_0x3ea094) {
              return _0x3ea094(_0x10441c["_arg"]);
            }), _0x10441c["_fullfilledCallback"] = [], _0x10441c["_rejectedCallback"] = [];
          });
          break;
        case _0x1137f:
          _0x377ae2(function () {
            _0x10441c["_rejectedCallback"]["map"](function (_0x402788) {
              return _0x402788(_0x10441c["_arg"]);
            }), _0x10441c["_fullfilledCallback"] = [], _0x10441c["_rejectedCallback"] = [];
          });
      }
    }
  }), _0x44acec["mixin"] = _0x4694ec, _0x22bb25["exports"] = _0x44acec;
}, function (_0x1530eb, _0x3a690a, _0xf5fffa) {
  var _0x2db3bc = Object["assign"] || function (_0x45ebf6) {
      for (var _0x1911c2 = 1; _0x1911c2 < arguments["length"]; _0x1911c2++) {
        var _0x5200a9 = arguments[_0x1911c2];
        for (var _0x3bd33b in _0x5200a9) Object["prototype"]["hasOwnProperty"]["call"](_0x5200a9, _0x3bd33b) && (_0x45ebf6[_0x3bd33b] = _0x5200a9[_0x3bd33b]);
      }
      return _0x45ebf6;
    },
    _0x3106c1 = _0xf5fffa(9),
    _0x552bb0 = _0xf5fffa(37);
  _0x1530eb["exports"] = function () {
    var _0xef3ee5 = arguments["length"] > 0 && void 0 !== arguments[0] ? arguments[0] : {},
      _0x34d3a1 = _0xef3ee5["captchaConfig"],
      _0x39ab19 = void 0 === _0x34d3a1 ? {} : _0x34d3a1;
    return function (_0x4ef56a, _0x4a9e57, _0x2477af, _0x346d5a) {
      _0x4a9e57 = Object["assign"]({
        "referer": _0x552bb0(),
        "zoneId": _0x39ab19["zoneId"] || ""
      }, _0x4a9e57);
      var _0x4f3c20 = _0x2db3bc({}, _0xef3ee5, _0x346d5a, {
        "url": _0x4ef56a,
        "payload": _0x4a9e57
      });
      _0x3106c1["api"](_0x4f3c20)["then"](function (_0x46d42f) {
        return _0x2477af(null, _0x46d42f);
      })["catch"](_0x2477af);
    };
  };
}, function (_0x3eee85, _0x480cb8) {
  _0x3eee85["exports"] = function (_0x597b0c) {
    if ("number" == typeof _0x597b0c || /^\d+(\.\d+)?$/["test"](_0x597b0c)) return _0x597b0c + "px";
    if (void 0 !== _0x597b0c && "" !== _0x597b0c) return _0x597b0c;
  };
}, function (_0x3685a4, _0x15f65e) {
  function _0x1973e4(_0x25ce5d, _0x1f1a11) {
    Object["keys"](_0x1f1a11)["map"](function (_0x1822ba) {
      _0x25ce5d["setAttribute"](_0x1822ba, _0x1f1a11[_0x1822ba]);
    });
  }
  function _0x154953(_0x3c748b, _0xf51ce2) {
    var _0xebb5cc = null;
    _0xebb5cc = _0xf51ce2 && _0xf51ce2["nodeType"] ? _0xf51ce2 : document["head"] || document["getElementsByTagName"]("head")[0], _0xebb5cc["appendChild"](_0x3c748b);
  }
  function _0x135c73(_0x29b162) {
    var _0x36f2dc = document["createElement"]("style"),
      _0x7289fc = {
        "type": "text/css"
      };
    return _0x1973e4(_0x36f2dc, _0x7289fc), _0x154953(_0x36f2dc, _0x29b162), _0x36f2dc;
  }
  function _0x3c2bc1(_0x5ac695, _0x37ba40, _0x7f047d) {
    var _0xf5fcb1 = _0x37ba40["css"],
      _0x17cdf5 = _0x37ba40["media"];
    if (_0x17cdf5 && _0x5ac695["setAttribute"]("media", _0x17cdf5), _0x5ac695["styleSheet"]) _0x5ac695["styleSheet"]["cssText"] = _0xf5fcb1;else {
      for (; _0x5ac695["firstChild"];) _0x5ac695["removeChild"](_0x5ac695["firstChild"]);
      _0x5ac695["appendChild"](document["createTextNode"](_0xf5fcb1));
    }
  }
  var _0x55b792 = {};
  _0x3685a4["exports"] = function (_0x24ad8d, _0x38fe85) {
    var _0x147136 = _0x24ad8d[0],
      _0x3c4aec = _0x147136[0],
      _0x342020 = {
        "css": _0x147136[1],
        "media": _0x147136[2]
      };
    !_0x55b792[_0x3c4aec] && (_0x55b792[_0x3c4aec] = _0x135c73(_0x38fe85)), _0x3c2bc1(_0x55b792[_0x3c4aec], _0x342020);
  };
}, function (_0x5f3e28, _0x1d5fc2) {
  (function (_0x3b408e) {
    _0x5f3e28["exports"] = _0x3b408e;
  })["call"](_0x1d5fc2, {});
}, function (_0x2a79aa, _0x4e47a5, _0x5be345) {
  !function (_0x352308, _0x12d30a) {
    _0x2a79aa["exports"] = _0x12d30a();
  }(this, function () {
    'use strict';

    function _0x5a25af(_0x2f9501) {
      var _0x23f58c = new RegExp("(^|;)[ ]*" + _0x2f9501 + "=([^;]*)"),
        _0x5ef9d4 = _0x23f58c["exec"](document["cookie"]);
      return _0x5ef9d4 ? decodeURIComponent(_0x5ef9d4[2]) : "";
    }
    function _0x88c067(_0x56c2ad, _0x15151d, _0x5b715a) {
      var _0x44da99,
        _0x129b7e = _0x56c2ad + "=" + encodeURIComponent(_0x15151d) + ";";
      _0x5b715a && (_0x44da99 = new Date(), _0x44da99["setTime"](_0x44da99["getTime"]() + _0x5b715a), _0x129b7e += "expires=" + _0x44da99["toUTCString"]()), document["cookie"] = _0x129b7e;
    }
    function _0x46a245() {
      for (var _0x51f7d3 = "abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ", _0x48ec55 = "", _0x1bcaf0 = 0, _0x1c6e2c = _0x51f7d3["length"]; _0x1bcaf0 < 16; _0x1bcaf0++) _0x48ec55 += _0x51f7d3["charAt"](Math["floor"](Math["random"]() * _0x1c6e2c));
      return _0x48ec55;
    }
    var _0x2ab55f,
      _0x2f39e0 = function () {
        return _0x2f39e0 = Object["assign"] || function (_0x3e6aee) {
          for (var _0x4df2bc, _0x5549a2 = 1, _0x560959 = arguments["length"]; _0x5549a2 < _0x560959; _0x5549a2++) {
            _0x4df2bc = arguments[_0x5549a2];
            for (var _0x530200 in _0x4df2bc) Object["prototype"]["hasOwnProperty"]["call"](_0x4df2bc, _0x530200) && (_0x3e6aee[_0x530200] = _0x4df2bc[_0x530200]);
          }
          return _0x3e6aee;
        }, _0x2f39e0["apply"](this, arguments);
      },
      _0x4a78cc = {
        "userData": null,
        "name": location["hostname"] + "_snaker",
        "init": function () {
          if (!_0x4a78cc["userData"]) try {
            _0x4a78cc["userData"] = document["createElement"]("INPUT"), _0x4a78cc["userData"]["type"] = "hidden", _0x4a78cc["userData"]["style"]["display"] = "none", _0x4a78cc["userData"]["addBehavior"]("#default#userData"), _0x4a78cc["userData"] && document["body"]["appendChild"](_0x4a78cc["userData"]);
            var _0x1da3c4 = new Date();
            _0x1da3c4["setDate"](_0x1da3c4["getDate"]() + 365), _0x4a78cc["userData"]["expires"] = _0x1da3c4["toUTCString"]();
          } catch (_0x7d027d) {
            return console["log"]("userData is disabled!"), !1;
          }
          return !0;
        },
        "setItem": function (_0x1a73a3, _0x5900c4) {
          _0x4a78cc["init"]() && _0x4a78cc["userData"] && (_0x4a78cc["userData"]["load"](_0x4a78cc["name"]), _0x4a78cc["userData"]["setAttribute"](_0x1a73a3, _0x5900c4), _0x4a78cc["userData"]["save"](_0x4a78cc["name"]));
        },
        "getItem": function (_0x54866f) {
          return _0x4a78cc["init"]() && _0x4a78cc["userData"] ? (_0x4a78cc["userData"]["load"](_0x4a78cc["name"]), _0x4a78cc["userData"]["getAttribute"](_0x54866f) || "") : "";
        },
        "removeItem": function (_0x22249c) {
          _0x4a78cc["init"]() && _0x4a78cc["userData"] && (_0x4a78cc["userData"]["load"](_0x4a78cc["name"]), _0x4a78cc["userData"]["removeAttribute"](_0x22249c), _0x4a78cc["userData"]["save"](_0x4a78cc["name"]));
        }
      };
    try {
      _0x2ab55f = localStorage || _0x4a78cc;
    } catch (_0x2d64e4) {
      _0x2ab55f = _0x4a78cc;
    }
    var _0x160b4f = function () {
        function _0x241012(_0x1b2892) {
          this["name"] = _0x1b2892;
        }
        return _0x241012["prototype"]["push"] = function (_0x1b4b08) {
          if (_0x1b4b08) try {
            var _0x392b7d = _0x2ab55f["getItem"](this["name"]);
            _0x2ab55f["setItem"](this["name"], _0x392b7d ? _0x392b7d + "," + _0x1b4b08 : _0x1b4b08);
          } catch (_0x5d676d) {
            console["log"]("localstorage or userData is disabled!");
          }
        }, _0x241012["prototype"]["length"] = function () {
          try {
            var _0xc89a04 = _0x2ab55f["getItem"](this["name"]) || "";
            return _0xc89a04 ? _0xc89a04["split"](",")["length"] : 0;
          } catch (_0x483fa3) {
            return console["log"]("localstorage or userData is disabled!"), 0;
          }
        }, _0x241012["prototype"]["pop"] = function (_0x4fd43e) {
          void 0 === _0x4fd43e && (_0x4fd43e = 1);
          var _0x51f078;
          try {
            var _0x3d6df6 = _0x2ab55f["getItem"](this["name"]),
              _0x410b32 = _0x3d6df6 ? _0x3d6df6["split"](",") : [];
            _0x51f078 = _0x410b32["splice"](0, _0x4fd43e), _0x2ab55f["setItem"](this["name"], _0x410b32["join"](","));
          } catch (_0x1ff562) {
            _0x51f078 = [], console["log"]("localstorage or userData is disabled!");
          }
          return _0x51f078;
        }, _0x241012["prototype"]["clear"] = function () {
          try {
            _0x2ab55f["removeItem"](this["name"]);
          } catch (_0x4c87e7) {
            console["log"]("localstorage or userData is disabled!");
          }
        }, _0x241012;
      }(),
      _0x394323 = function () {
        function _0x31a56c(_0xbf573d) {
          if (!_0xbf573d["pid"]) throw new Error("product id is required!");
          var _0x98023e = _0xbf573d["pid"],
            _0x57350b = _0xbf573d["bid"],
            _0x5237e9 = _0xbf573d["url"],
            _0x2b1583 = _0xbf573d["random"],
            _0x3cd5f4 = _0xbf573d["limit"],
            _0x1faeed = _0xbf573d["disabled"],
            _0x385d3e = _0xbf573d["version"];
          this["pid"] = _0x98023e, this["bid"] = _0x57350b, this["random"] = _0x2b1583 || 100, this["limit"] = _0x3cd5f4 || 5, this["disabled"] = _0x1faeed, this["version"] = _0x385d3e || "", this["url"] = _0x5237e9 || "https://da.dun.163.com/sn.gif", this["prefix"] = "__snaker__id", this["cache"] = new _0x160b4f(this["prefix"]);
          var _0x5c9250 = _0x5a25af(this["prefix"]);
          _0x5c9250 ? this["uuid"] = _0x5c9250 : (this["uuid"] = _0x46a245(), _0x88c067(this["prefix"], this["uuid"], 31536000000));
        }
        return _0x31a56c["prototype"]["setUser"] = function (_0x494b06) {
          if ("string" == typeof _0x494b06) this["user"] = {
            "uid": _0x494b06
          };else {
            this["user"] = {
              "uid": _0x494b06["uid"]
            };
            for (var _0x24ea73 in _0x494b06) _0x494b06["hasOwnProperty"](_0x24ea73) && "uid" !== _0x24ea73 && (this["user"]["$user_" + _0x24ea73] = _0x494b06[_0x24ea73]);
          }
        }, _0x31a56c["prototype"]["serialize"] = function (_0x337391, _0x14634a) {
          var _0x5f8fb6 = this,
            _0x2b45f0 = _0x5f8fb6["pid"],
            _0x208391 = _0x5f8fb6["bid"],
            _0x4b912d = _0x5f8fb6["uuid"],
            _0x267db9 = _0x5f8fb6["user"],
            _0x3bed47 = _0x5f8fb6["version"],
            _0x5d4f88 = _0x337391["type"],
            _0x5caa5e = _0x337391["name"],
            _0x3062a9 = _0x337391["value"],
            _0x2c19e7 = function (_0x385656, _0x2ad935) {
              return _0x385656["substring"](0, _0x2ad935);
            },
            _0x5694f3 = screen["width"] + "x" + screen["height"],
            _0x5b76c4 = _0x2c19e7(location["href"], 200),
            _0x377b65 = new Date()["getTime"]() + "",
            _0x1319e6 = _0x2f39e0(_0x2f39e0({
              "pid": _0x2b45f0,
              "bid": _0x208391,
              "uuid": _0x4b912d,
              "type": _0x5d4f88,
              "name": _0x5caa5e,
              "version": _0x3bed47,
              "value": _0x3062a9,
              "res": _0x5694f3,
              "pu": _0x5b76c4,
              "nts": _0x377b65
            }, _0x14634a), _0x267db9),
            _0x240794 = [];
          for (var _0x5dd670 in _0x1319e6) _0x1319e6["hasOwnProperty"](_0x5dd670) && void 0 !== _0x1319e6[_0x5dd670] && _0x240794["push"](encodeURIComponent(_0x5dd670 + "=") + encodeURIComponent(encodeURIComponent(_0x1319e6[_0x5dd670])));
          return _0x240794["join"]("%26");
        }, _0x31a56c["prototype"]["sendRequest"] = function (_0x5536ce, _0x43a4bc) {
          if (!this["disabled"]) {
            var _0x168fec = new Image(1, 1);
            _0x168fec["src"] = _0x5536ce + "?d=" + _0x43a4bc;
          }
        }, _0x31a56c["prototype"]["report"] = function (_0x19bbaf, _0x41d6f7, _0x3fc881, _0x570b69, _0x4d56f1) {
          if (!this["disabled"]) {
            var _0x480fae = this["serialize"]({
              "type": _0x19bbaf,
              "name": _0x41d6f7,
              "value": _0x3fc881
            }, _0x4d56f1 ? _0x4d56f1 : {});
            this["random"] < Math["random"]() || (_0x570b69 ? (this["cache"]["push"](_0x480fae), this["cache"]["length"]() >= this["limit"] && this["flush"]()) : this["sendRequest"](this["url"], _0x480fae));
          }
        }, _0x31a56c["prototype"]["track"] = function (_0x5ab294, _0x3d9079, _0x5eebd0, _0x68d4ed) {
          this["report"](_0x5ab294, _0x3d9079, _0x5eebd0, !1, _0x68d4ed);
        }, _0x31a56c["prototype"]["trackAsync"] = function (_0x595f3f, _0x468f58, _0x5c872e, _0x2d4c2c) {
          this["report"](_0x595f3f, _0x468f58, _0x5c872e, !0, _0x2d4c2c);
        }, _0x31a56c["prototype"]["flush"] = function () {
          for (var _0x3f47ad = "", _0x1d06ef = this["cache"]["pop"](this["limit"]); _0x1d06ef["length"];) {
            var _0x3d0d7f = _0x1d06ef["pop"]() || "";
            _0x3d0d7f && (_0x3f47ad["length"] + _0x3d0d7f["length"] <= 1800 ? (_0x3f47ad = _0x3f47ad ? _0x3f47ad + "," + _0x3d0d7f : _0x3d0d7f, _0x1d06ef["length"] || this["sendRequest"](this["url"], _0x3f47ad)) : (this["sendRequest"](this["url"], _0x3f47ad), _0x3f47ad = _0x3d0d7f));
          }
        }, _0x31a56c;
      }();
    return _0x394323;
  });
}, function (_0x4c57c4, _0x565a7c, _0x4ea846) {
  var _0xbe5f8c = _0x4ea846(12),
    _0x56be95 = _0xbe5f8c["FETCH_INTELLISENSE_CAPTCHA"],
    _0x326687 = _0xbe5f8c["VERIFY_INTELLISENSE_CAPTCHA"],
    _0x12fb56 = _0xbe5f8c["RESET_STATE"],
    _0x39070f = _0x4ea846(4),
    _0x169048 = _0x39070f["SWITCH_LOAD_STATUS"],
    _0x4d9d6d = _0x39070f["UPDATE_VERIFY_STATUS"],
    _0x3e8800 = _0x39070f["INVOKE_HOOK"],
    _0x5c6ed0 = _0x39070f["EVENT_RESET"],
    _0x152741 = _0x4ea846(3),
    _0x11cc81 = _0x152741["CAPTCHA_TYPE"],
    _0x3c1647 = _0x152741["SAMPLE_NUM"],
    _0x5c6565 = _0x4ea846(1),
    _0x549bc7 = _0x4ea846(8),
    _0x5ed985 = _0x549bc7["eypt"],
    _0x13d3b9 = _0x549bc7["xor_encode"],
    _0x5d0f8d = _0x4ea846(6),
    _0x53c458 = _0x4ea846(14),
    _0x3f24c0 = _0x4ea846(11);
  _0x4c57c4["exports"] = {
    "data": function () {
      return {
        "beginTime": _0x5c6565["now"](),
        "traceData": [],
        "status": "normal",
        "classicVisible": !1
      };
    },
    "mounted": function () {
      this["_removeEvents"] = this["initEvents"](), this["fetchCaptcha"]();
    },
    "beforeDestroy": function () {
      this["_removeEvents"](), this["clear"]();
    },
    "methods": {
      "fetchCaptcha": function () {
        var _0x149f64 = this;
        return new _0x3f24c0(function (_0x501ead, _0x214948) {
          var _0x32235b = {
            "width": ""
          };
          _0x149f64["$store"]["state"]["smsNew"] && (_0x32235b["smsVersion"] = _0x149f64["$store"]["state"]["smsVersion"]), _0x149f64["$store"]["dispatch"](_0x56be95, _0x32235b, function (_0x34395d, _0x2c134a) {
            if (_0x149f64["_isMounted"]) {
              if (_0x34395d) return _0x149f64["$setData"]({
                "status": "loadfail"
              }), void _0x214948(_0x34395d);
              _0x149f64["$store"]["commit"](_0x3e8800, {
                "name": "onReady"
              }), _0x149f64["$store"]["commit"](_0x3e8800, {
                "name": "onDidRefresh"
              }), _0x501ead(_0x2c134a);
            }
          });
        });
      },
      "initEvents": function () {
        var _0x3d98bc = this,
          _0x133456 = this["$store"]["subscribe"](function (_0x439ac1, _0x1eb760) {
            var _0x443e2b = _0x439ac1["type"],
              _0x2fb269 = (_0x439ac1["payload"], _0x1eb760["verifyStatus"]),
              _0xaec189 = _0x1eb760["load"];
            switch (_0x443e2b) {
              case _0x169048:
                _0xaec189 && ("loading" === _0xaec189["status"] && _0x3d98bc["$setData"]({
                  "status": "loading"
                }), "done" === _0xaec189["status"] && _0x3d98bc["$setData"]({
                  "status": "loaddone"
                }), "fail" === _0xaec189["status"] && _0x3d98bc["$setData"]({
                  "status": "loadfail"
                }));
                break;
              case _0x4d9d6d:
                "success" === _0x2fb269 && _0x3d98bc["$setData"]({
                  "status": "success"
                }), "error" === _0x2fb269 && _0x3d98bc["$setData"]({
                  "status": "error"
                });
                break;
              case _0x5c6ed0:
                _0x3d98bc["reset"]();
            }
          });
        return function () {
          _0x133456();
        };
      },
      "reset": function () {
        var _0x46d3fd = this;
        this["$store"]["dispatch"](_0x12fb56), this["fetchCaptcha"]()["then"](function () {
          _0x46d3fd["clear"](), _0x46d3fd["$setData"]({
            "status": "normal"
          });
        });
      },
      "clear": function () {
        var _0x488839 = this;
        this["_captchaIns"] && (this["$setData"]({
          "classicVisible": !1
        }), this["$nextTick"](function () {
          _0x488839["_captchaIns"]["$destroy"](), _0x488839["_captchaIns"] = null;
        })), this["beginTime"] = 0, this["traceData"] = [];
      },
      "verifyCaptcha": function () {
        "normal" === this["status"] ? this["verifyIntellisenseCaptcha"]() : this["_captchaIns"] && this["_captchaIns"]["open"]();
      },
      "verifyIntellisenseCaptcha": function () {
        var _0x502966 = this,
          _0x2dd27e = this["$store"]["state"]["token"],
          _0x23a46c = _0x5c6565["now"](),
          _0x5281ba = _0x13d3b9(_0x2dd27e, [0, 0, _0x23a46c - (this["beginTime"] || _0x23a46c)] + ""),
          _0x4c8249 = this["traceData"]["map"](function (_0x1fa219) {
            return _0x13d3b9(_0x2dd27e, _0x1fa219);
          });
        this["$store"]["dispatch"](_0x326687, {
          "token": _0x2dd27e,
          "type": _0x11cc81["INTELLISENSE"],
          "width": "240",
          "data": JSON["stringify"]({
            "d": "",
            "m": _0x5ed985(_0x5c6565["sample"](_0x4c8249, _0x3c1647)["join"](":")),
            "p": _0x5ed985(_0x5281ba),
            "ext": _0x5ed985(_0x13d3b9(_0x2dd27e, "1," + _0x4c8249["length"]))
          })
        }, function (_0x47ace4) {
          if (_0x502966["_isMounted"]) {
            if (!_0x47ace4) return void _0x502966["$setData"]({
              "status": "success"
            });
            if (!_0x502966["_captchaIns"]) {
              var _0xb9326e = _0x502966["$store"]["state"]["config"],
                _0x465cb1 = _0x5d0f8d["_extend"](_0x53c458);
              _0x502966["_captchaIns"] = new _0x465cb1({
                "store": _0x502966["$store"],
                "propsData": {
                  "intellisense": !0,
                  "enableColor": !0,
                  "onBeforeClose": function () {
                    _0x502966["$store"]["commit"](_0x3e8800, {
                      "name": "onBeforeClose"
                    });
                  },
                  "onClose": function (_0x327bf7) {
                    _0x502966["$store"]["commit"](_0x3e8800, {
                      "name": "onClose",
                      "args": [{
                        "source": _0x327bf7
                      }]
                    });
                  },
                  "onOpen": function () {
                    _0x502966["$store"]["commit"](_0x3e8800, {
                      "name": "onOpen"
                    });
                  }
                }
              })["$mount"](function (_0x435e36) {
                _0xb9326e["appendTo"] ? _0xb9326e["appendTo"]["appendChild"](_0x435e36) : document["body"]["appendChild"](_0x435e36);
              }), _0x502966["$setData"]({
                "status": "loading"
              });
            }
            _0x502966["_captchaIns"]["open"]();
          }
        });
      },
      "closeModal": function () {
        this["_captchaIns"] && this["_captchaIns"]["closeModal"]();
      }
    }
  };
}, function (_0x2f5219, _0x21d93e, _0x5692ab) {
  var _0x15562b = _0x5692ab(6),
    _0x1f5e14 = _0x5692ab(2),
    _0x5dab5b = _0x5692ab(1),
    _0x4e78c4 = _0x5692ab(8),
    _0x7bea8f = _0x4e78c4["eypt"],
    _0x5bea5 = _0x4e78c4["xor_encode"],
    _0x2bf727 = _0x5692ab(3),
    _0x454d4b = _0x2bf727["CAPTCHA_CLASS"],
    _0x1f2a5a = _0x2bf727["SAMPLE_NUM"],
    _0x2cfa41 = _0x5692ab(4),
    _0x29fc17 = _0x2cfa41["SWITCH_LOAD_STATUS"],
    _0x195d51 = _0x2cfa41["INVOKE_HOOK"],
    _0x204d51 = _0x5692ab(5),
    _0x5b938f = _0x204d51["REQUEST_IMG_ERROR"],
    _0x586edf = _0x5692ab(9),
    _0x15ee0e = _0x5692ab(7),
    _0x2acd70 = _0x15ee0e["createNetCollect"],
    _0x2c89bf = 4,
    _0x3f7cbd = 2,
    _0x53ebdd = {
      "status": "dragend",
      "beginTime": 0,
      "clientX": 0,
      "clientY": 0,
      "startX": 0,
      "startY": 0,
      "startLeft": 0,
      "startTop": 0,
      "el": null
    };
  _0x2f5219["exports"] = _0x15562b["_extend"]({
    "abstract": !0,
    "props": ["loadInfo", "mode"],
    "data": function () {
      var _0x11057e = this["$store"]["state"]["langPkg"];
      return {
        "langPkg": _0x11057e
      };
    },
    "mounted": function () {
      this["initData"](), this["_removeEvents"] = this["initEvents"](), this["initCustomStyles"]();
    },
    "beforeDestroy": function () {
      this["_removeEvents"](), this["$el"] = null, this["$bgImgWrap"] = null, this["$picViews"] = [], this["drag"] = null, this["traceData"] = null, this["exchangePos"] = null;
    },
    "render": function (_0x23d7b6) {
      var _0x4ef7a7 = _0x23d7b6["loadInfo"];
      _0x4ef7a7 && this["changeLoadStatus"](_0x4ef7a7);
    },
    "methods": {
      "initData": function () {
        this["clickCounts"] = 0, this["traceData"] = [], this["exchangePos"] = [], this["drag"] = Object["assign"]({}, _0x53ebdd);
      },
      "initEvents": function () {
        var _0x7b3c63 = this;
        this["$bgImgWrap"] = _0x1f5e14["find"]("." + _0x454d4b["BGIMG"], this["$el"]), this["$picViews"] = [];
        for (var _0x5e6381 = _0x1f5e14["findAll"](".yidun_inference", this["$el"]), _0x335002 = function (_0x1d6f10) {
            _0x1d6f10["target"]["className"]["indexOf"]("yidun_inference") !== -1 && _0x7b3c63["onMouseDown"](_0x1d6f10);
          }, _0x1b271c = this["onDragEnd"]["bind"](this), _0x5b8c16 = this["onMouseMove"]["bind"](this), _0x49540c = 0, _0x593185 = _0x5e6381["length"]; _0x49540c < _0x593185; _0x49540c++) this["$picViews"]["push"]({
          "view": _0x5e6381[_0x49540c],
          "img": _0x1f5e14["find"](".yidun_inference__img", _0x5e6381[_0x49540c])
        });
        var _0x5654ab = _0x1f5e14["supportPointer"] ? "pointer" : "mouse";
        return _0x1f5e14["on"](this["$bgImgWrap"], _0x5654ab + "down", _0x335002), _0x1f5e14["on"](document, _0x5654ab + "up", _0x1b271c), _0x1f5e14["on"](document, _0x5654ab + "move", _0x5b8c16), function () {
          _0x1f5e14["off"](_0x7b3c63["$bgImgWrap"], _0x5654ab + "down", _0x335002), _0x1f5e14["off"](document, _0x5654ab + "up", _0x1b271c), _0x1f5e14["off"](document, _0x5654ab + "move", _0x5b8c16);
        };
      },
      "initCustomStyles": function () {
        var _0xdb7f32 = this["$store"]["state"]["config"]["customStyles"]["imagePanel"];
        this["$picViews"][0]["view"]["style"]["borderTopLeftRadius"] = _0xdb7f32["borderRadius"], this["$picViews"][_0x2c89bf - 1]["view"]["style"]["borderTopRightRadius"] = _0xdb7f32["borderRadius"], this["$picViews"][_0x2c89bf]["view"]["style"]["borderBottomLeftRadius"] = _0xdb7f32["borderRadius"], this["$picViews"][_0x2c89bf * _0x3f7cbd - 1]["view"]["style"]["borderBottomRightRadius"] = _0xdb7f32["borderRadius"];
      },
      "reset": function () {
        var _0x4eda7c = this["$store"]["state"],
          _0x1a90c6 = _0x4eda7c["countsOfVerifyError"],
          _0x185105 = _0x4eda7c["config"],
          _0x54d0e3 = _0x1a90c6 > _0x185105["maxVerification"];
        if (!_0x54d0e3) {
          var _0x2414c2 = this["$picViews"];
          this["initData"](), _0x1f5e14["delClass"](this["$bgImgWrap"], "yidun_bgimg--dragging");
          for (var _0x5733d0 = 0, _0x25a22d = _0x2414c2["length"]; _0x5733d0 < _0x25a22d; _0x5733d0++) {
            this["cleanInferenceCls"](_0x5733d0);
            var _0x1d25dd = _0x2414c2[_0x5733d0]["img"];
            _0x1d25dd["style"]["top"] = "", _0x1d25dd["style"]["left"] = "";
          }
        }
      },
      "cleanInferenceCls": function (_0x25a38f) {
        this["$picViews"][_0x25a38f] && (this["$picViews"][_0x25a38f]["view"]["className"] = "yidun_inference yidun_inference--" + _0x25a38f);
      },
      "floatStatusChange": function () {
        this["$parent"]["shouldHandleFloatChange"](this["loadInfo"]) && this["changeTipElText"]();
      },
      "changeTipElText": function () {
        var _0x510c4c = _0x1f5e14["find"](".yidun_tips__text", this["$el"]),
          _0x2a231c = this["$store"]["state"]["config"];
        "float" !== (this["mode"] || _0x2a231c["mode"]) || this["$parent"]["panelVisible"] ? (_0x1f5e14["text"](_0x510c4c, this["langPkg"]["inferenceTip"]), _0x1f5e14["delClass"](this["$el"], "yidun--button")) : (_0x1f5e14["text"](_0x510c4c, this["langPkg"]["clickButton"]), _0x1f5e14["addClass"](this["$el"], "yidun--button"));
      },
      "changeLoadStatus": function (_0x5c026d) {
        var _0x223ba2 = this,
          _0x391c13 = _0x5c026d["status"],
          _0x54c0ab = _0x5c026d["data"];
        if ("loading" === _0x391c13 && _0x54c0ab) {
          var _0x5d9554 = _0x1f5e14["find"](".yidun_bg-img", this["$el"]),
            _0x1b54a9 = _0x1f5e14["find"](".yidun_tips__text", this["$el"]),
            _0x5d9b26 = this["$store"],
            _0x886519 = _0x5d9b26["commit"],
            _0x4327da = _0x5d9b26["state"],
            _0x42f8a3 = _0x4327da["langPkg"],
            _0x500da6 = _0x4327da["config"],
            _0x258d3e = _0x4327da["captchaCollector"];
          _0x586edf["image"]({
            "url": _0x54c0ab["bg"],
            "timeout": _0x500da6["timeout"],
            "onProcess": _0x2acd70(_0x258d3e, {
              "token": _0x54c0ab["token"]
            })
          })["then"](function (_0x320443) {
            if (_0x223ba2["_isMounted"]) {
              _0x5d9554["src"] = _0x320443["src"];
              for (var _0x4249a7 = 0, _0x4b02a6 = _0x223ba2["$picViews"]["length"]; _0x4249a7 < _0x4b02a6; _0x4249a7++) _0x223ba2["$picViews"][_0x4249a7]["img"]["src"] = _0x320443["src"];
              _0x1f5e14["text"](_0x1b54a9, _0x42f8a3["inferenceTip"]), _0x886519(_0x29fc17, {
                "status": "done",
                "data": _0x54c0ab
              });
            }
          })["catch"](function (_0x4437e1) {
            if (_0x223ba2["_isMounted"]) {
              var _0x429acd = Object["assign"]({}, _0x4437e1["data"], {
                "token": _0x54c0ab["token"]
              });
              _0x886519(_0x29fc17, {
                "status": "fail"
              }), _0x886519(_0x195d51, {
                "name": "onError",
                "args": [new _0x204d51(_0x5b938f, _0x4437e1["message"], _0x429acd)]
              });
            }
          });
        } else "done" === _0x391c13 && this["changeTipElText"]();
      },
      "onMouseDown": function (_0x40fd95) {
        if (_0x40fd95["preventDefault"](), this["handleDown"]() && "dragend" === this["drag"]["status"]) {
          var _0x2a75bb = _0x40fd95["clientX"],
            _0xeccf18 = _0x40fd95["clientY"];
          Object["assign"](this["drag"], {
            "beginTime": _0x5dab5b["now"](),
            "clientX": _0x2a75bb,
            "clientY": _0xeccf18,
            "startX": _0x2a75bb,
            "startY": _0xeccf18
          });
        }
        return !1;
      },
      "onDragEnd": function (_0x430a33) {
        if ("dragend" === this["drag"]["status"]) return void Object["assign"](this["drag"], {
          "beginTime": 0
        });
        var _0x55253e = this["drag"]["el"];
        Object["assign"](this["drag"], _0x53ebdd);
        var _0x371a5f = this["exchangePos"][0],
          _0x26bcac = this["$picViews"][_0x371a5f]["view"];
        _0x55253e["style"]["display"] = "none", this["cleanInferenceCls"](_0x371a5f);
        var _0x1e4080 = _0x26bcac["cloneNode"](!0);
        if (_0x1f5e14["replace"](_0x1e4080, _0x26bcac), this["$picViews"][_0x371a5f]["view"] = _0x1e4080, this["$picViews"][_0x371a5f]["img"] = _0x1f5e14["find"](".yidun_inference__img", _0x1e4080), _0x1f5e14["delClass"](this["$bgImgWrap"], "yidun_bgimg--dragging"), this["exchangePos"][1] || 0 === this["exchangePos"][1]) {
          var _0x5124be = this["$picViews"][this["exchangePos"][1]]["img"],
            _0x308718 = this["getImgPos"](_0x371a5f),
            _0x759da5 = _0x308718["top"],
            _0x4e60f1 = _0x308718["left"];
          _0x5124be["style"]["top"] = _0x759da5, _0x5124be["style"]["left"] = _0x4e60f1, this["onVerifyCaptcha"]({
            "data": JSON["stringify"]({
              "d": "",
              "m": _0x7bea8f(_0x5dab5b["sample"](this["traceData"], _0x1f2a5a)["join"](":")),
              "p": _0x7bea8f(_0x5bea5(this["$store"]["state"]["token"], this["exchangePos"]["join"](","))),
              "ext": _0x7bea8f(_0x5bea5(this["$store"]["state"]["token"], this["clickCounts"] + "," + this["traceData"]["length"]))
            })
          });
        } else {
          var _0x1212b1 = this["$picViews"][_0x371a5f]["img"];
          _0x1212b1["style"]["top"] = "", _0x1212b1["style"]["left"] = "";
        }
      },
      "onMouseMove": function (_0x5aac14) {
        var _0x59bd32 = _0x5aac14["clientX"],
          _0x2f261b = _0x5aac14["clientY"],
          _0x535c7b = this["drag"],
          _0x1a52a0 = _0x535c7b["status"],
          _0x590acd = _0x535c7b["beginTime"],
          _0x3c6740 = _0x535c7b["startX"],
          _0x221178 = _0x535c7b["startY"],
          _0x410df1 = _0x59bd32 - _0x3c6740,
          _0x16728b = _0x2f261b - _0x221178;
        if ("dragend" === _0x1a52a0 && _0x590acd && (this["drag"]["status"] = "dragstart"), "dragend" !== this["drag"]["status"]) {
          Object["assign"](this["drag"], {
            "clientX": _0x59bd32,
            "clientY": _0x2f261b
          });
          var _0xeb7fe8 = this["$store"]["state"]["token"],
            _0x4ca051 = _0x5bea5(_0xeb7fe8, [Math["round"](_0x410df1), Math["round"](_0x16728b), _0x5dab5b["now"]() - this["drag"]["beginTime"]] + "");
          this["traceData"]["push"](_0x4ca051), "dragstart" === this["drag"]["status"] && this["startDrag"](_0x5aac14), "dragging" === this["drag"]["status"] && this["dragging"](_0x5aac14);
        }
      },
      "handleDown": function () {
        this["clickCounts"]++;
        var _0x18c693 = this["$store"]["state"],
          _0x15af23 = _0x18c693["load"],
          _0x2673f4 = _0x18c693["verifyStatus"];
        return "done" === _0x15af23["status"] && !_0x2673f4 && "dragend" === this["drag"]["status"];
      },
      "startDrag": function (_0x4bdb2a) {
        var _0x100391 = _0x4bdb2a["target"];
        _0x1f5e14["addClass"](this["$bgImgWrap"], "yidun_bgimg--dragging");
        var _0x250b7c = _0x100391["parentNode"],
          _0x56b8df = _0x250b7c["cloneNode"](!0);
        _0x56b8df["draggable"] = !1, _0x56b8df["removeAttribute"]("style");
        for (var _0x5824ee = _0x1f5e14["findAll"](".yidun_inference--drag", this["$bgImgWrap"]), _0x50da07 = 0, _0x114c27 = _0x5824ee["length"]; _0x50da07 < _0x114c27; _0x50da07++) _0x1f5e14["remove"](_0x5824ee[_0x50da07]);
        _0x1f5e14["addClass"](_0x56b8df, "yidun_inference--drag"), this["$bgImgWrap"]["appendChild"](_0x56b8df), _0x1f5e14["addClass"](_0x250b7c, "yidun_inference--origin"), Object["assign"](this["drag"], {
          "status": "dragging",
          "el": _0x56b8df,
          "startLeft": _0x56b8df["offsetLeft"],
          "startTop": _0x56b8df["offsetTop"]
        });
        for (var _0x192eea = 0, _0x1e40de = this["$picViews"]["length"]; _0x192eea < _0x1e40de; _0x192eea++) if (this["$picViews"][_0x192eea]["view"] === _0x250b7c) {
          this["exchangePos"][0] = _0x192eea;
          break;
        }
      },
      "dragging": function () {
        var _0x14efc2 = this["drag"],
          _0x211250 = _0x14efc2["clientX"],
          _0x38802d = _0x14efc2["clientY"],
          _0x32bc44 = _0x14efc2["startX"],
          _0x2e3221 = _0x14efc2["startY"],
          _0x44613a = _0x14efc2["el"],
          _0x2ade6f = this["computeOffset"](_0x211250 - _0x32bc44, _0x38802d - _0x2e3221),
          _0x277e2e = _0x2ade6f["x"],
          _0x165db5 = _0x2ade6f["y"];
        _0x44613a["style"]["left"] = _0x277e2e + "px", _0x44613a["style"]["top"] = _0x165db5 + "px", this["readyExchange"](_0x277e2e, _0x165db5);
      },
      "readyExchange": function (_0x5b3a74, _0x2b597f) {
        var _0x3ba392 = this["getDragCenterIndex"](_0x5b3a74, _0x2b597f),
          _0xa53a36 = this["exchangePos"][0],
          _0x187345 = this["$picViews"][_0xa53a36]["view"];
        if (_0x3ba392 !== this["exchangePos"][1]) {
          for (var _0x4ecbba = 0, _0x5ce65a = this["$picViews"]["length"]; _0x4ecbba < _0x5ce65a; _0x4ecbba++) _0x1f5e14["delClass"](this["$picViews"][_0x4ecbba]["view"], "yidun_inference--target");
          if (_0x3ba392 === -1 || _0xa53a36 === _0x3ba392) return _0x1f5e14["delClass"](_0x187345, "yidun_inference--swap"), void (this["exchangePos"][1] = void 0);
          this["exchangePos"][1] = _0x3ba392, _0x1f5e14["addClass"](this["$picViews"][_0x3ba392]["view"], "yidun_inference--target"), _0x1f5e14["addClass"](_0x187345, "yidun_inference--swap");
          var _0x3232d5 = this["$picViews"][_0xa53a36]["img"],
            _0x2d7ca3 = this["getImgPos"](_0x3ba392),
            _0x2da4bf = _0x2d7ca3["top"],
            _0x4c8bd3 = _0x2d7ca3["left"];
          _0x3232d5["style"]["top"] = _0x2da4bf, _0x3232d5["style"]["left"] = _0x4c8bd3;
        }
      },
      "computeOffset": function (_0x4d3fe9, _0xfdaeab) {
        var _0x130c48 = this["drag"],
          _0x506bd3 = _0x130c48["startLeft"],
          _0x4020df = _0x130c48["startTop"],
          _0x2c4d01 = _0x130c48["el"],
          _0x16d65f = this["$bgImgWrap"]["offsetWidth"] - _0x2c4d01["offsetWidth"],
          _0x410524 = this["$bgImgWrap"]["offsetHeight"] - _0x2c4d01["offsetHeight"],
          _0x29bb20 = _0x4d3fe9 + _0x506bd3,
          _0x1c7e84 = _0xfdaeab + _0x4020df;
        return _0x29bb20 < 0 ? _0x29bb20 = 0 : _0x29bb20 > _0x16d65f && (_0x29bb20 = _0x16d65f), _0x1c7e84 < 0 ? _0x1c7e84 = 0 : _0x1c7e84 > _0x410524 && (_0x1c7e84 = _0x410524), {
          "x": _0x29bb20,
          "y": _0x1c7e84
        };
      },
      "getDragCenterIndex": function (_0x327293, _0x23bca6) {
        var _0x17c0bf = _0x1f5e14["getRect"](this["drag"]["el"]),
          _0x4b66fb = _0x17c0bf["width"],
          _0x1cbc62 = _0x17c0bf["height"],
          _0x5da3e1 = _0x327293 + _0x4b66fb / 2,
          _0x83fc28 = _0x23bca6 + _0x1cbc62 / 2,
          _0x247f8b = parseInt(_0x5da3e1 / _0x4b66fb, 10),
          _0x431565 = parseInt(_0x83fc28 / _0x1cbc62, 10);
        return _0x5da3e1 % _0x4b66fb === 0 || _0x83fc28 % _0x1cbc62 === 0 ? -1 : _0x247f8b + _0x431565 * _0x2c89bf;
      },
      "getImgPos": function (_0x2c9379) {
        var _0xe21966 = _0x2c9379 - _0x2c89bf;
        return {
          "top": (_0xe21966 < 0 ? 0 : -100) + "%",
          "left": (_0xe21966 < 0 ? _0x2c9379 * -100 : _0xe21966 * -100) + "%"
        };
      }
    }
  });
}, function (_0x1ec262, _0x1abafc, _0x264b85) {
  var _0x5adfa4 = function () {
      function _0x5d142a(_0x5b877c, _0x354f25) {
        var _0x25813b = [],
          _0x2b91f3 = !0,
          _0x43c40a = !1,
          _0x3d8586 = void 0;
        try {
          for (var _0x1ebfbf, _0x3f08bc = _0x5b877c[Symbol["iterator"]](); !(_0x2b91f3 = (_0x1ebfbf = _0x3f08bc["next"]())["done"]) && (_0x25813b["push"](_0x1ebfbf["value"]), !_0x354f25 || _0x25813b["length"] !== _0x354f25); _0x2b91f3 = !0);
        } catch (_0x170e9d) {
          _0x43c40a = !0, _0x3d8586 = _0x170e9d;
        } finally {
          try {
            !_0x2b91f3 && _0x3f08bc["return"] && _0x3f08bc["return"]();
          } finally {
            if (_0x43c40a) throw _0x3d8586;
          }
        }
        return _0x25813b;
      }
      return function (_0x45ee52, _0x536069) {
        if (Array["isArray"](_0x45ee52)) return _0x45ee52;
        if (Symbol["iterator"] in Object(_0x45ee52)) return _0x5d142a(_0x45ee52, _0x536069);
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
      };
    }(),
    _0x312870 = _0x264b85(6),
    _0x28008e = _0x264b85(2),
    _0x54cfcd = _0x264b85(1),
    _0x50f708 = _0x264b85(3),
    _0x5262c3 = _0x50f708["CAPTCHA_CLASS"],
    _0x4c2efd = _0x50f708["SAMPLE_NUM"],
    _0x2e2fdd = _0x264b85(4),
    _0x41f87f = _0x2e2fdd["SWITCH_LOAD_STATUS"],
    _0x5e2571 = _0x2e2fdd["INVOKE_HOOK"],
    _0x373117 = _0x264b85(8),
    _0x422e6f = _0x373117["eypt"],
    _0x811727 = _0x373117["xor_encode"],
    _0x46f589 = _0x264b85(5),
    _0x3930c5 = _0x46f589["REQUEST_IMG_ERROR"],
    _0x23a942 = _0x264b85(9),
    _0x875a74 = _0x264b85(7),
    _0x394eb3 = _0x875a74["createNetCollect"],
    _0x450c63 = document,
    _0x2900df = {
      "status": "dragend",
      "beginTime": 0,
      "clientX": 0,
      "startX": 0,
      "clientY": 0,
      "startY": 0,
      "left": 0,
      "startLeft": 0,
      "dragX": 0
    };
  _0x1ec262["exports"] = _0x312870["_extend"]({
    "abstract": !0,
    "props": ["loadInfo"],
    "mounted": function () {
      this["initData"](), this["firstEventType"] = "", this["_removeEvents"] = this["initEvents"]();
    },
    "beforeDestroy": function () {
      this["_removeEvents"](), this["sliderTransition"] = null, this["$slider"]["style"]["transition"] = "", this["$el"] = null, this["$slideIndicator"] = null, this["$slider"] = null, this["$jigsaw"] = null, this["drag"] = null;
    },
    "render": function (_0x49280b) {
      var _0x40972a = _0x49280b["loadInfo"];
      _0x40972a && this["changeLoadStatus"](_0x40972a);
    },
    "methods": {
      "initData": function () {
        this["drag"] = Object["assign"]({}, _0x2900df), this["traceData"] = [], this["mouseDownCounts"] = 0;
      },
      "changeSlideIcon": function (_0x1be62e) {
        !this["$store"]["state"]["config"]["customStyles"]["icon"]["slider"] && this["$slideIcon"] && (_0x1be62e ? (this["$slideIcon"]["src"] = _0x1be62e, this["$slideIcon"]["style"]["display"] = "block") : this["$slideIcon"]["style"]["display"] = "none");
      },
      "initEvents": function () {
        var _0x90bc8a = this;
        this["$slideIndicator"] = _0x28008e["find"]("." + _0x5262c3["SLIDE_INDICATOR"], this["$el"]), this["$jigsaw"] = _0x28008e["find"]("." + _0x5262c3["JIGSAW"], this["$el"]), this["$control"] = _0x28008e["find"]("." + _0x5262c3["CONTROL"], this["$el"]), this["$slider"] = _0x28008e["find"]("." + _0x5262c3["SLIDER"], this["$el"]), this["$slideIcon"] = _0x28008e["find"](".yidun_slider__icon--img", this["$el"]);
        var _0x20075b = this["$parent"]["$data"]["customStyles"]["controlBar"],
          _0x38db34 = void 0 === _0x20075b ? {} : _0x20075b;
        this["controlBar"] = _0x38db34;
        var _0x4ae52d = function (_0x21b292) {
            return function (_0x8c9a2f) {
              var _0x180f61 = _0x8c9a2f["type"] || "";
              _0x90bc8a["firstEventType"] || (_0x90bc8a["firstEventType"] = _0x180f61), _0x180f61["indexOf"]("pointer") === -1 && _0x90bc8a["firstEventType"]["indexOf"]("pointer") > -1 || _0x90bc8a["firstEventType"]["indexOf"]("pointer") === -1 && _0x180f61["indexOf"]("pointer") > -1 || _0x21b292(_0x8c9a2f);
            };
          },
          _0x53d629 = _0x4ae52d(this["onMouseDown"]["bind"](this)),
          _0x4d923a = _0x4ae52d(this["onMouseDown"]["bind"](this)),
          _0x45f138 = _0x4ae52d(this["onMouseMove"]["bind"](this)),
          _0x52c1cd = this["onMouseUp"]["bind"](this),
          _0x499b1c = _0x28008e["supportPointer"] ? "pointer" : "mouse";
        if (_0x28008e["on"](this["$slider"], _0x499b1c + "down", _0x53d629), _0x28008e["on"](this["$jigsaw"], _0x499b1c + "down", _0x4d923a), _0x28008e["on"](_0x450c63, _0x499b1c + "move", _0x45f138), _0x28008e["on"](_0x450c63, _0x499b1c + "up", _0x52c1cd), "pointer" === _0x499b1c) {
          var _0x29e3c4 = _0x4ae52d(this["onMouseDown"]["bind"](this)),
            _0x194eab = _0x4ae52d(this["onMouseDown"]["bind"](this)),
            _0x16d534 = _0x4ae52d(this["onMouseMove"]["bind"](this)),
            _0x4d841c = this["onMouseUp"]["bind"](this),
            _0x34b0a0 = "mouse";
          _0x28008e["on"](this["$slider"], _0x34b0a0 + "down", _0x29e3c4), _0x28008e["on"](this["$jigsaw"], _0x34b0a0 + "down", _0x194eab), _0x28008e["on"](_0x450c63, _0x34b0a0 + "move", _0x16d534), _0x28008e["on"](_0x450c63, _0x34b0a0 + "up", _0x4d841c), this["_removeMouseEvent"] = function () {
            _0x28008e["off"](_0x90bc8a["$slider"], _0x34b0a0 + "down", _0x29e3c4), _0x28008e["off"](_0x90bc8a["$jigsaw"], _0x34b0a0 + "down", _0x194eab), _0x28008e["off"](_0x450c63, _0x34b0a0 + "move", _0x16d534), _0x28008e["off"](_0x450c63, _0x34b0a0 + "up", _0x4d841c);
          };
        }
        return this["sliderTransition"] = _0x28008e["transition"](this["$slider"], {
          "beforeLeave": function (_0x21796a) {
            _0x21796a["style"]["transition"] = "left .3s ease-out";
          },
          "afterLeave": function (_0x55f3b9) {
            _0x55f3b9["style"]["transition"] = "";
          }
        }), _0x28008e["supportPointer"] && (document["documentElement"]["style"]["touchAction"] = "none"), function () {
          _0x28008e["off"](_0x90bc8a["$slider"], _0x499b1c + "down", _0x53d629), _0x28008e["off"](_0x90bc8a["$jigsaw"], _0x499b1c + "down", _0x4d923a), _0x28008e["off"](_0x450c63, _0x499b1c + "move", _0x45f138), _0x28008e["off"](_0x450c63, _0x499b1c + "up", _0x52c1cd), "pointer" === _0x499b1c && _0x90bc8a["_removeMouseEvent"](), _0x90bc8a["sliderTransition"]["dispose"](), _0x28008e["supportPointer"] && (document["documentElement"]["style"]["touchAction"] = "auto");
        };
      },
      "reset": function () {
        var _0x5865d4 = this["$store"]["state"],
          _0x4de7d8 = _0x5865d4["countsOfVerifyError"],
          _0x47fb4c = _0x5865d4["config"],
          _0x3cf181 = _0x4de7d8 > _0x47fb4c["maxVerification"];
        _0x3cf181 || (this["initData"](), _0x28008e["delClass"](this["$control"], "yidun_control--moving"), parseInt(this["$slider"]["style"]["left"]) && this["sliderTransition"]["leave"](), this["$slideIndicator"]["style"]["width"] = 0, this["$slider"]["style"]["left"] = 0, this["$jigsaw"]["style"]["left"] = 0);
      },
      "changeLoadStatus": function (_0x2bfccd) {
        var _0x44540 = this,
          _0x4d81de = _0x2bfccd["data"];
        if (this["changeSlideIcon"](this["controlBar"]["slideIcon"]), "loading" === _0x2bfccd["status"] && _0x4d81de) {
          var _0x2aae27 = this["$store"]["state"],
            _0x21057a = _0x2aae27["langPkg"],
            _0x22d94d = _0x2aae27["config"],
            _0xbb9b9c = _0x2aae27["captchaCollector"],
            _0xbb83c6 = _0x28008e["find"](".yidun_tips__text", this["$el"]),
            _0x5733ec = _0x28008e["find"](".yidun_bg-img", this["$el"]),
            _0x115908 = _0x28008e["find"]("." + _0x5262c3["JIGSAW"], this["$el"]),
            _0x3f4c41 = this["$store"]["commit"],
            _0x11ab37 = _0x394eb3(_0xbb9b9c, {
              "token": _0x4d81de["token"]
            });
          _0x23a942["all"]([_0x23a942["image"]({
            "url": _0x4d81de["bg"],
            "timeout": _0x22d94d["timeout"],
            "onProcess": _0x11ab37
          }), _0x23a942["image"]({
            "url": _0x4d81de["front"],
            "timeout": _0x22d94d["timeout"],
            "onProcess": _0x11ab37
          })])["then"](function (_0x412120) {
            if (_0x44540["_isMounted"]) {
              var _0x38a013 = _0x5adfa4(_0x412120, 2),
                _0x5c6912 = _0x38a013[0],
                _0x57841e = _0x38a013[1];
              _0x5733ec["src"] = _0x5c6912["src"], _0x115908["src"] = _0x57841e["src"], _0x28008e["text"](_0xbb83c6, _0x21057a["slideTip"]), _0x3f4c41(_0x41f87f, {
                "status": "done",
                "data": _0x4d81de
              });
            }
          })["catch"](function (_0x59f2ae) {
            if (_0x44540["_isMounted"]) {
              var _0x1c5ddf = Object["assign"]({}, _0x59f2ae["data"], {
                "token": _0x4d81de["token"]
              });
              _0x3f4c41(_0x41f87f, {
                "status": "fail"
              }), _0x3f4c41(_0x5e2571, {
                "name": "onError",
                "args": [new _0x46f589(_0x3930c5, _0x59f2ae["message"], _0x1c5ddf)]
              });
            }
          });
        }
      },
      "onMouseDown": function (_0x2daae8) {
        _0x2daae8["event"]["cancelable"] !== !1 && _0x2daae8["preventDefault"](), this["mouseDownCounts"]++, this["width"] = this["$el"]["offsetWidth"];
        var _0x2906d8 = this["$store"]["state"],
          _0x18fb86 = _0x2906d8["load"],
          _0x3424d9 = _0x2906d8["verifyStatus"];
        if ("done" === _0x18fb86["status"] && !_0x3424d9) {
          var _0x247d2e = _0x2daae8["clientX"],
            _0x2f7c15 = _0x2daae8["clientY"],
            _0x5ce1e0 = this["drag"];
          "dragend" === _0x5ce1e0["status"] && Object["assign"](_0x5ce1e0, {
            "beginTime": _0x54cfcd["now"](),
            "clientX": _0x247d2e,
            "startX": _0x247d2e,
            "clientY": _0x2f7c15,
            "startY": _0x2f7c15,
            "dragX": 0
          });
        }
      },
      "onMouseMove": function (_0x364cd0) {
        var _0x1db195 = _0x364cd0["clientX"],
          _0x5b963d = _0x364cd0["clientY"],
          _0x53c690 = this["drag"],
          _0x140376 = _0x53c690["status"],
          _0x5e848f = _0x53c690["beginTime"],
          _0x2f4e65 = _0x53c690["startX"];
        if (_0x53c690["status"] = _0x5e848f && _0x1db195 - _0x2f4e65 > 3 && "dragend" === _0x140376 ? "dragstart" : _0x140376, "dragend" !== _0x53c690["status"]) {
          !(_0x364cd0["type"]["indexOf"]("touch") !== -1 && _0x28008e["supportPassive"] || _0x364cd0["event"]["cancelable"] !== !1) && _0x364cd0["preventDefault"](), Object["assign"](_0x53c690, {
            "clientX": _0x1db195,
            "clientY": _0x5b963d,
            "dragX": _0x1db195 - _0x53c690["startX"]
          });
          var _0x5d8a62 = this["$store"]["state"]["token"],
            _0x177420 = _0x811727(_0x5d8a62, [Math["round"](_0x53c690["dragX"] < 0 ? 0 : _0x53c690["dragX"]), Math["round"](_0x53c690["clientY"] - _0x53c690["startY"]), _0x54cfcd["now"]() - _0x53c690["beginTime"]] + "");
          this["traceData"]["push"](_0x177420), "dragstart" === _0x53c690["status"] && this["onMouseMoveStart"](_0x364cd0), "dragging" === _0x53c690["status"] && this["onMouseMoving"](_0x364cd0);
        }
      },
      "onMouseMoveStart": function (_0x5ce6c2) {
        var _0x2998eb = _0x28008e["getComputedStyle"](this["$slider"], "left"),
          _0x8c9d81 = _0x28008e["find"](".yidun_tips__text", this["$el"]);
        _0x28008e["text"](_0x8c9d81, ""), Object["assign"](this["drag"], {
          "status": "dragging",
          "startLeft": parseInt(_0x2998eb["slice"](0, -2), 10)
        });
      },
      "onMouseMoving": function () {
        var _0x44860f = this["$slider"]["offsetWidth"],
          _0x191caf = this["$jigsaw"]["offsetWidth"],
          _0x4fa90d = this["drag"]["left"] = this["restrict"](this["$slider"]);
        this["$slider"]["style"]["left"] = _0x4fa90d + "px", this["$jigsaw"]["style"]["left"] = this["restrict"](this["$jigsaw"], _0x44860f - _0x191caf) + "px", _0x28008e["addClass"](this["$control"], "yidun_control--moving"), this["$slideIndicator"]["style"]["width"] = _0x4fa90d + _0x44860f + "px", this["changeSlideIcon"](this["controlBar"]["slideIconMoving"]);
      },
      "onMouseUp": function (_0x2f6a7e) {
        var _0x4f946b = this["drag"];
        if ("dragend" === _0x4f946b["status"]) return void Object["assign"](_0x4f946b, {
          "beginTime": 0
        });
        Object["assign"](_0x4f946b, _0x2900df);
        var _0x499e96 = _0x54cfcd["sample"](this["traceData"], _0x4c2efd),
          _0xa8dc3a = this["$store"]["state"]["token"],
          _0x447bed = _0x422e6f(_0x811727(_0xa8dc3a, parseInt(this["$jigsaw"]["style"]["left"], 10) / this["width"] * 100 + ""));
        this["onVerifyCaptcha"]({
          "data": JSON["stringify"]({
            "d": _0x422e6f(_0x499e96["join"](":")),
            "m": "",
            "p": _0x447bed,
            "ext": _0x422e6f(_0x811727(_0xa8dc3a, this["mouseDownCounts"] + "," + this["traceData"]["length"]))
          })
        });
      },
      "restrict": function (_0x163c7c, _0x339b66) {
        if (_0x163c7c) {
          var _0x3e26f2,
            _0x6113ee,
            _0x15928c = this["drag"],
            _0x316d02 = _0x15928c["startLeft"],
            _0x34bc67 = _0x15928c["dragX"],
            _0x336d63 = this["width"],
            _0x3b82c4 = _0x163c7c["offsetWidth"],
            _0xed7f93 = this["$slider"]["offsetWidth"],
            _0x3d1903 = _0x336d63 - _0x3b82c4,
            _0x168f20 = _0x316d02 + _0x34bc67,
            _0x596f49 = _0x339b66 < 0 ? -_0x339b66 : _0x339b66 / 2;
          return _0x163c7c === this["$jigsaw"] && (_0x34bc67 <= _0x596f49 ? (_0x3e26f2 = _0x34bc67, _0x6113ee = _0x339b66 < 0 ? -_0x3e26f2 / 2 : _0x3e26f2, _0x168f20 += _0x6113ee) : _0x336d63 - _0x34bc67 - _0xed7f93 <= _0x596f49 ? (_0x3e26f2 = _0x34bc67 - (_0x336d63 - _0xed7f93 - _0x596f49), _0x6113ee = _0x339b66 < 0 ? -_0x3e26f2 / 2 : _0x3e26f2, _0x168f20 += _0x339b66 / 2 + _0x6113ee) : _0x168f20 += _0x339b66 / 2), _0x168f20 <= 0 && (_0x168f20 = 0), _0x168f20 >= _0x3d1903 && (_0x168f20 = _0x3d1903), _0x168f20;
        }
      }
    }
  });
}, function (_0x1a1483, _0x2ecc13, _0x15cb5b) {
  function _0x3d867b(_0x23143e, _0x2a80f2, _0x14ed32) {
    return _0x2a80f2 in _0x23143e ? Object["defineProperty"](_0x23143e, _0x2a80f2, {
      "value": _0x14ed32,
      "enumerable": !0,
      "configurable": !0,
      "writable": !0
    }) : _0x23143e[_0x2a80f2] = _0x14ed32, _0x23143e;
  }
  var _0x468d71,
    _0x323718 = _0x15cb5b(6),
    _0x3ab192 = _0x15cb5b(2),
    _0x605146 = _0x15cb5b(1),
    _0x548863 = _0x15cb5b(8),
    _0x56b867 = _0x548863["eypt"],
    _0x1db44c = _0x548863["xor_encode"],
    _0x3efb0b = _0x15cb5b(3),
    _0x9ec878 = _0x3efb0b["CAPTCHA_TYPE"],
    _0x1f236d = _0x3efb0b["CAPTCHA_CLASS"],
    _0xf9507e = _0x3efb0b["SAMPLE_NUM"],
    _0x3da8db = _0x15cb5b(4),
    _0xe46490 = _0x3da8db["SWITCH_LOAD_STATUS"],
    _0x2a47e2 = _0x3da8db["INVOKE_HOOK"],
    _0x6c4b5c = _0x15cb5b(5),
    _0x151899 = _0x6c4b5c["REQUEST_IMG_ERROR"],
    _0x57cc8e = _0x15cb5b(9),
    _0x3f11b9 = _0x15cb5b(7),
    _0x3be68f = _0x3f11b9["createNetCollect"];
  _0x1a1483["exports"] = _0x323718["_extend"]({
    "abstract": !0,
    "props": ["loadInfo", "mode", "type", "isRtlLang"],
    "data": function () {
      var _0x5035d7 = this["$store"]["state"]["langPkg"];
      return {
        "langPkg": _0x5035d7
      };
    },
    "on": (_0x468d71 = {}, _0x3d867b(_0x468d71, "." + _0x1f236d["BGIMG"] + " click", function (_0x461111) {
      this["onClick"](_0x461111);
    }), _0x3d867b(_0x468d71, "." + _0x1f236d["BGIMG"] + " mousemove", function (_0x766851) {
      this["trackMoving"](_0x766851);
    }), _0x468d71),
    "mounted": function () {
      this["initData"](), this["$bgImg"] = _0x3ab192["find"]("." + _0x1f236d["BGIMG"], this["$el"]);
    },
    "beforeDestroy": function () {
      this["$bgImg"] = null;
    },
    "render": function (_0x4861b0) {
      var _0x17c935 = _0x4861b0["loadInfo"];
      if (_0x17c935 && "done" === _0x17c935["status"]) {
        var _0x2d16aa = _0x17c935["data"] && _0x17c935["data"]["front"];
        Array["isArray"](_0x2d16aa) && (_0x2d16aa = _0x2d16aa[0], _0x17c935["data"]["front"] = _0x2d16aa);
      }
      _0x17c935 && this["changeLoadStatus"](_0x17c935);
    },
    "methods": {
      "initData": function () {
        this["pointsStack"] = [], this["MAX_POINTS"] = 0, this["traceData"] = [], this["beginTime"] = 0, this["clickCounts"] = 0;
      },
      "reset": function () {
        var _0x36c02a = this["$store"]["state"],
          _0x13a067 = _0x36c02a["countsOfVerifyError"],
          _0x48bd5c = _0x36c02a["config"],
          _0x1869a9 = _0x13a067 > _0x48bd5c["maxVerification"];
        _0x1869a9 || (this["cleanPoints"](), this["initData"]());
      },
      "floatStatusChange": function () {
        if (this["$parent"]["shouldHandleFloatChange"](this["loadInfo"])) {
          var _0x119460 = this["loadInfo"]["data"]["front"] || "";
          this["changeTipElText"]({
            "message": _0x119460
          });
        }
      },
      "changeTipElText": function (_0x404a78) {
        var _0xee907 = _0x404a78["message"],
          _0x441c2d = void 0 === _0xee907 ? "" : _0xee907,
          _0x4f06bc = this["$store"]["state"]["config"],
          _0x2e2b61 = this["langPkg"],
          _0x2520a2 = this["$parent"]["panelVisible"],
          _0x5715f1 = "float" === (this["mode"] || _0x4f06bc["mode"]),
          _0x5d7216 = _0x3ab192["find"](".yidun_tips__text", this["$el"]),
          _0x5de5ea = _0x3ab192["find"](".yidun_tips__answer", this["$el"]),
          _0xf56654 = _0x3ab192["find"](".yidun_tips__point", this["$el"]);
        _0x5715f1 && !_0x2520a2 ? (_0x3ab192["text"](_0x5d7216, _0x2e2b61["clickButton"]), _0x3ab192["addClass"](this["$el"], "yidun--button"), _0x3ab192["addClass"](_0x5de5ea, "hide")) : (this["type"] === _0x9ec878["ICON_POINT"] ? _0x3ab192["text"](_0x5d7216, _0x2e2b61["clickInTurn"]) : this["type"] === _0x9ec878["WORD_ORDER"] ? _0x3ab192["text"](_0x5d7216, _0x2e2b61["clickWordInTurn"]) : this["type"] === _0x9ec878["SPACE"] ? _0x3ab192["text"](_0x5d7216, _0x441c2d) : (this["isRtlLang"] && (_0x441c2d = _0x605146["reverse"](_0x441c2d)), _0x3ab192["text"](_0xf56654, _0x441c2d["replace"](/./g, " \"$&\"")), _0x3ab192["text"](_0x5d7216, _0x2e2b61["clickInTurn"])), _0x3ab192["delClass"](_0x5de5ea, "hide"), _0x3ab192["delClass"](this["$el"], "yidun--button"));
      },
      "changeLoadStatus": function (_0x308d46) {
        var _0x323cf1 = this,
          _0x159bdb = _0x308d46["status"],
          _0x4d8266 = _0x308d46["data"];
        switch (_0x159bdb) {
          case "loading":
            if (_0x4d8266) {
              var _0x33fae4 = _0x3ab192["find"](".yidun_bg-img", this["$el"]),
                _0xbbc077 = _0x3ab192["find"](".yidun_tips__img", this["$el"]),
                _0x39bfe6 = this["$store"],
                _0xc257c = _0x39bfe6["commit"],
                _0x21c0be = _0x39bfe6["state"],
                _0x5beb10 = _0x57cc8e["image"]({
                  "url": _0x4d8266["bg"],
                  "timeout": _0x21c0be["config"]["timeout"],
                  "onProcess": _0x3be68f(_0x21c0be["captchaCollector"], {
                    "token": _0x4d8266["token"]
                  })
                });
              _0x5beb10["then"](function (_0x172a65) {
                _0x323cf1["_isMounted"] && (_0x33fae4["src"] = _0x172a65["src"], _0x323cf1["type"] === _0x9ec878["ICON_POINT"] && (_0xbbc077["src"] = _0x172a65["src"]), _0xc257c(_0xe46490, {
                  "status": "done",
                  "data": _0x4d8266
                }));
              })["catch"](function (_0x3ae02a) {
                if (_0x323cf1["_isMounted"]) {
                  var _0x36ab90 = Object["assign"]({}, _0x3ae02a["data"], {
                    "token": _0x4d8266["token"]
                  });
                  _0xc257c(_0xe46490, {
                    "status": "fail"
                  }), _0xc257c(_0x2a47e2, {
                    "name": "onError",
                    "args": [new _0x6c4b5c(_0x151899, _0x3ae02a["message"], _0x36ab90)]
                  });
                }
              });
            }
            break;
          case "done":
            var _0x4cf7f7 = _0x4d8266["front"] || "",
              _0x3dd144 = 0;
            _0x3dd144 = this["type"] === _0x9ec878["ICON_POINT"] ? 3 : this["type"] === _0x9ec878["WORD_ORDER"] ? parseInt(_0x4cf7f7, 10) : this["type"] === _0x9ec878["SPACE"] ? 1 : _0x4cf7f7["length"], this["MAX_POINTS"] = _0x3dd144, this["changeTipElText"]({
              "message": _0x4cf7f7
            });
        }
      },
      "onClick": function (_0x207811) {
        var _0x118862 = this,
          _0x3fff50 = this["$store"]["state"],
          _0x1ea079 = _0x3fff50["countsOfVerifyError"],
          _0x11d7a1 = _0x3fff50["config"],
          _0x4609e9 = _0x1ea079 > _0x11d7a1["maxVerification"];
        if (!_0x4609e9) {
          this["clickCounts"]++;
          var _0x222546 = this["$bgImg"]["getBoundingClientRect"](),
            _0x5a9d72 = _0x222546["left"],
            _0x574d67 = _0x222546["top"];
          this["pointsStack"]["length"] || (this["beginTime"] = _0x605146["now"]());
          var _0x199ce0 = this["pointsStack"]["slice"](-1)[0];
          return _0x199ce0 && _0x207811["target"] === _0x199ce0["el"] && !this["$store"]["state"]["verifyStatus"] ? void _0x605146["raf"](function () {
            return _0x118862["$bgImg"]["removeChild"](_0x118862["pointsStack"]["pop"]()["el"]);
          }) : void this["addPoint"]({
            "left": _0x207811["clientX"] - _0x5a9d72,
            "top": _0x207811["clientY"] - _0x574d67
          });
        }
      },
      "trackMoving": function (_0x155f53) {
        if (this["beginTime"]) {
          var _0xeb74f0 = this["$bgImg"]["getBoundingClientRect"](),
            _0x17dee6 = _0xeb74f0["left"],
            _0x4e7ccf = _0xeb74f0["top"],
            _0x2248f8 = _0x1db44c(this["$store"]["state"]["token"], [Math["round"](_0x155f53["clientX"] - _0x17dee6), Math["round"](_0x155f53["clientY"] - _0x4e7ccf), _0x605146["now"]() - this["beginTime"]] + "");
          this["traceData"]["push"](_0x2248f8);
        }
      },
      "addPoint": function (_0x5117b1) {
        var _0x3b64fe = _0x5117b1["left"],
          _0x42061d = _0x5117b1["top"],
          _0x3f0143 = this["pointsStack"]["length"] + 1;
        if (!(_0x3f0143 > this["MAX_POINTS"])) {
          var _0x13ebf5 = document["createElement"]("div");
          _0x13ebf5["className"] = "yidun_icon-point yidun_point-" + _0x3f0143, _0x3ab192["css"](_0x13ebf5, "left: " + (_0x3b64fe - 10) + "px; top: " + (_0x42061d - 25) + "px;"), this["$bgImg"]["appendChild"](_0x13ebf5), this["pointsStack"]["push"]({
            "el": _0x13ebf5,
            "coord": _0x1db44c(this["$store"]["state"]["token"], [Math["round"](_0x3b64fe), Math["round"](_0x42061d), _0x605146["now"]() - this["beginTime"]] + "")
          }), this["shouldVerifyCaptcha"]();
        }
      },
      "shouldVerifyCaptcha": function () {
        var _0x5af929 = this["pointsStack"];
        if (_0x5af929["length"] === this["MAX_POINTS"]) {
          var _0xf81bf2 = _0x5af929["map"](function (_0x3566e2) {
              return _0x3566e2["coord"];
            }),
            _0x33b2f1 = this["traceData"];
          this["onVerifyCaptcha"]({
            "data": JSON["stringify"]({
              "d": "",
              "m": _0x56b867(_0x605146["sample"](_0x33b2f1, _0xf9507e)["join"](":")),
              "p": _0x56b867(_0xf81bf2["join"](":")),
              "ext": _0x56b867(_0x1db44c(this["$store"]["state"]["token"], this["clickCounts"] + "," + _0x33b2f1["length"]))
            })
          });
        }
      },
      "cleanPoints": function () {
        for (var _0x2deb0c; _0x2deb0c = this["pointsStack"]["pop"]();) this["$bgImg"]["removeChild"](_0x2deb0c["el"]);
      }
    }
  });
}, function (_0x3056d1, _0x3a0d60, _0x42e07d) {
  var _0x2a5374 = _0x42e07d(6),
    _0x505178 = _0x42e07d(2),
    _0x58bb09 = _0x42e07d(50),
    _0x201fa4 = _0x42e07d(1),
    _0x5ecdde = _0x42e07d(4),
    _0x1ef1f9 = _0x5ecdde["SWITCH_LOAD_STATUS"],
    _0x572a72 = _0x5ecdde["UPDATE_VERIFY_STATUS"],
    _0x1e6290 = _0x5ecdde["INVOKE_HOOK"],
    _0x4715b0 = _0x42e07d(5),
    _0x57f8f5 = _0x4715b0["REQUEST_IMG_ERROR"],
    _0x2465ca = _0x42e07d(9),
    _0x45de1b = _0x42e07d(7),
    _0x34c9fd = _0x45de1b["createNetCollect"];
  _0x3056d1["exports"] = _0x2a5374["_extend"]({
    "abstract": !0,
    "props": ["loadInfo"],
    "data": function () {
      var _0x6d9761 = this["$store"]["state"],
        _0x1949ed = _0x6d9761["langPkg"],
        _0x31cd1b = _0x6d9761["config"]["lang"],
        _0x1b7885 = _0x6d9761["smsNew"];
      return {
        "langPkg": _0x1949ed,
        "lang": _0x31cd1b,
        "smsNew": _0x1b7885,
        "qr": null
      };
    },
    "mounted": function () {
      var _0x3f6789 = this;
      this["TIMEOUT_SECONDS"] = 300, this["_unsubscribe"] = this["$store"]["subscribe"](function (_0x226fcf, _0x5e0663) {
        var _0x15c230 = _0x226fcf["type"],
          _0x2c6c82 = _0x5e0663["verifyStatus"];
        switch (_0x15c230) {
          case _0x572a72:
            switch (_0x2c6c82) {
              case "success":
              case "error":
                _0x3f6789["clearTimers"]();
            }
        }
      }), this["smsNew"] && (this["_removeEvents"] = this["initEvents"]());
    },
    "beforeDestroy": function () {
      this["_unsubscribe"](), this["clearTimers"](), this["smsNew"] && this["_removeEvents"] && this["_removeEvents"]();
    },
    "render": function (_0x4230c1) {
      var _0x5927e3 = _0x4230c1["loadInfo"];
      _0x5927e3 && this["changeLoadStatus"](_0x5927e3);
    },
    "methods": {
      "initEvents": function () {
        var _0x152edd = _0x505178["find"](".yidun_smsbox", this["$el"]),
          _0x396c7e = _0x505178["find"](".yidun_smsbox-text--manual", this["$el"]),
          _0x4f3712 = _0x505178["find"](".yidun_smsbox-mobile--manual-btn", this["$el"]),
          _0x1b79e6 = _0x505178["find"](".yidun_smsbox-manual--qr", this["$el"]),
          _0xa417c3 = _0x505178["find"](".yidun_smsbox-manual--btn", this["$el"]),
          _0xadb33d = function () {
            _0x505178["addClass"](_0x152edd, "yidun_smsbox--manual");
          };
        _0x396c7e && _0x505178["on"](_0x396c7e, "click", _0xadb33d, !0), _0x4f3712 && _0x505178["on"](_0x4f3712, "click", _0xadb33d, !0);
        var _0x3c3340 = function () {
          _0x505178["delClass"](_0x152edd, "yidun_smsbox--manual");
        };
        return _0x1b79e6 && _0x505178["on"](_0x1b79e6, "click", _0x3c3340, !0), _0xa417c3 && _0x505178["on"](_0xa417c3, "click", _0x3c3340, !0), function () {
          _0x396c7e && _0x505178["off"](_0x396c7e, "click", _0xadb33d, !0), _0x1b79e6 && _0x505178["off"](_0x1b79e6, "click", _0x3c3340, !0), _0xa417c3 && _0x505178["off"](_0xa417c3, "click", _0x3c3340, !0);
        };
      },
      "changeLoadStatus": function (_0x302608) {
        var _0x30cef6 = this,
          _0x396241 = _0x302608["status"],
          _0x43f4d8 = _0x302608["data"];
        switch (_0x396241) {
          case "loading":
            if (_0x43f4d8) {
              var _0x3d1808 = _0x505178["find"](".yidun_bg-img", this["$el"]),
                _0x4e2134 = _0x505178["find"](".yidun_smsbox-qrcode--img", this["$el"]),
                _0x4359db = _0x505178["find"](".yidun_smsbox-manual--edit-content", this["$el"]),
                _0x3b4099 = _0x505178["find"](".yidun_smsbox-manual--send-content__short", this["$el"]),
                _0x558cc3 = _0x505178["find"](".yidun_smsbox-manual--send-content__long", this["$el"]),
                _0x3cbef9 = _0x505178["find"](".yidun_smsbox--mobile-btn-inner", this["$el"]),
                _0x4c6bd1 = this["$store"],
                _0x339a5b = _0x4c6bd1["commit"],
                _0x3672bb = _0x4c6bd1["state"],
                _0x3f8990 = _0x2465ca["image"]({
                  "url": _0x43f4d8["bg"],
                  "timeout": _0x3672bb["config"]["timeout"],
                  "onProcess": _0x34c9fd(_0x3672bb["captchaCollector"], {
                    "token": _0x43f4d8["token"]
                  })
                });
              _0x3f8990["then"](function (_0x3f0306) {
                if (_0x30cef6["smsNew"] && _0x4e2134 && _0x4359db && _0x3b4099 && _0x558cc3 && _0x3cbef9) {
                  var _0x544376 = _0x43f4d8["front"] && "string" == typeof _0x43f4d8["front"] ? _0x43f4d8["front"]["split"](",") : [];
                  if (3 === _0x544376["length"]) {
                    _0x505178["text"](_0x4359db, _0x544376[0]), _0x505178["text"](_0x3b4099, _0x544376[1]), _0x505178["text"](_0x558cc3, _0x30cef6["langPkg"]["sms"]["or"] + _0x544376[2]);
                    var _0x225217 = !1,
                      _0x1c12d5 = _0x225217 ? "http" : "https",
                      _0x26404d = _0x30cef6["$store"]["state"]["config"]["staticServer"],
                      _0x4293c7 = _0x201fa4["encodeUrlParams"]({
                        "code": _0x544376[0],
                        "phone": _0x544376[1],
                        "phoneLong": _0x544376[2],
                        "lang": _0x30cef6["lang"],
                        "version": _0x3672bb["smsVersion"]
                      }),
                      _0x36a5dc = _0x1c12d5 + "://" + (Array["isArray"](_0x26404d) ? _0x26404d[0] : _0x26404d) + (_0x225217 ? "" : "/api/v2") + "/sms.html?" + _0x4293c7;
                    _0x30cef6["qr"] && _0x30cef6["qr"]["clear"] && (_0x30cef6["qr"]["clear"](), _0x30cef6["qr"] = null), _0x505178["html"](_0x4e2134, ""), _0x30cef6["qr"] = new _0x58bb09(_0x4e2134, {
                      "text": _0x36a5dc,
                      "width": 96,
                      "height": 96,
                      "useCanvas": !0,
                      "correctLevel": _0x58bb09["CorrectLevel"]["M"]
                    }), 0 === _0x544376[1]["indexOf"]("10690163") && 0 === _0x544376[2]["indexOf"]("106981630163") && _0x3cbef9["setAttribute"]("href", _0x36a5dc);
                  }
                } else _0x3d1808["src"] = _0x3f0306["src"];
                _0x339a5b(_0x1ef1f9, {
                  "status": "done",
                  "data": _0x43f4d8
                });
              })["catch"](function (_0xf7d478) {
                var _0x4bd646 = Object["assign"]({}, _0xf7d478["data"], {
                  "token": _0x43f4d8["token"]
                });
                _0x339a5b(_0x1ef1f9, {
                  "status": "fail"
                }), _0x339a5b(_0x1e6290, {
                  "name": "onError",
                  "args": [new _0x4715b0(_0x57f8f5, _0xf7d478["message"], _0x4bd646)]
                });
              });
            }
            break;
          case "done":
            var _0x19dcb4 = _0x505178["find"](".yidun_tips__text", this["$el"]),
              _0x3af5f6 = this["langPkg"];
            _0x19dcb4["innerHTML"] = _0x3af5f6["waitForSMS"] + "\n          <span class=\"yidun_sms-counter\"></span>", this["countDown"](), this["pollingToVerify"]();
        }
      },
      "pollingToVerify": function () {
        var _0x6d0430 = this,
          _0x5e9b5f = this["TIMEOUT_SECONDS"],
          _0x36abe3 = 5,
          _0x24c244 = 0,
          _0x1b9f0d = function _0x35c8d1() {
            return _0x36abe3 * _0x24c244 >= _0x5e9b5f ? void _0x6d0430["$store"]["commit"](_0x572a72, {
              "verifyStatus": "error",
              "error": new Error("SMS is outdated")
            }) : (_0x24c244++, _0x6d0430["onVerifyCaptcha"]({
              "data": ""
            }), void (_0x6d0430["pollingTimer"] = setTimeout(_0x35c8d1, 1000 * _0x36abe3)));
          };
        _0x1b9f0d();
      },
      "countDown": function () {
        var _0x3aca46 = this,
          _0x44a586 = this["TIMEOUT_SECONDS"],
          _0xb9d6dd = _0x505178["find"](".yidun_sms-counter", this["$el"]),
          _0x5b432e = function _0x33e255() {
            _0x505178["text"](_0xb9d6dd, _0x44a586-- + "s"), 0 !== _0x44a586 && (_0x3aca46["countTimer"] = setTimeout(_0x33e255, 1000));
          };
        _0x5b432e();
      },
      "clearTimers": function () {
        this["countTimer"] && (clearTimeout(this["countTimer"]), this["countTimer"] = null), this["pollingTimer"] && (clearTimeout(this["pollingTimer"]), this["pollingTimer"] = null);
      },
      "reset": function () {
        this["clearTimers"]();
      }
    }
  });
}, function (_0x2f175d, _0x1f4045, _0x16be8e) {
  function _0x297648(_0x1550e8, _0x25d58a, _0x58febb) {
    return _0x25d58a in _0x1550e8 ? Object["defineProperty"](_0x1550e8, _0x25d58a, {
      "value": _0x58febb,
      "enumerable": !0,
      "configurable": !0,
      "writable": !0
    }) : _0x1550e8[_0x25d58a] = _0x58febb, _0x1550e8;
  }
  var _0x2e828a,
    _0x3dbfaf = _0x16be8e(6),
    _0xfe655d = _0x16be8e(2),
    _0x56bbb3 = _0x16be8e(1),
    _0x330796 = _0x16be8e(8),
    _0xe8760e = _0x330796["eypt"],
    _0x171aa8 = _0x330796["xor_encode"],
    _0x3e75b1 = _0x16be8e(3),
    _0x4c83fb = _0x3e75b1["CAPTCHA_CLASS"],
    _0x3034c5 = _0x3e75b1["SAMPLE_NUM"],
    _0x1b3100 = _0x3e75b1["LARGE_SIZE_TYPE"],
    _0x328213 = _0x16be8e(4),
    _0x1535c8 = _0x328213["SWITCH_LOAD_STATUS"],
    _0x283e41 = _0x328213["INVOKE_HOOK"],
    _0x3245d9 = _0x328213["EVENT_CLOSE"],
    _0xb7924c = _0x16be8e(5),
    _0x1117f2 = _0xb7924c["REQUEST_AUDIO_ERROR"],
    _0x1bd8c2 = _0x16be8e(9),
    _0x46a791 = _0x16be8e(7),
    _0x396f86 = _0x46a791["createNetCollect"];
  _0x2f175d["exports"] = _0x3dbfaf["_extend"]({
    "abstract": !0,
    "props": ["loadInfo", "mode", "size", "type", "fixedAudio"],
    "data": function () {
      var _0x24abf2 = this["$store"]["state"]["langPkg"];
      return {
        "langPkg": _0x24abf2,
        "playStatus": "start",
        "yidunFontSize": null
      };
    },
    "on": (_0x2e828a = {}, _0x297648(_0x2e828a, "." + _0x4c83fb["CONTROL"] + " keydown", function (_0x281424) {
      function _0x1008a3(_0x4fc623) {
        return _0x281424["apply"](this, arguments);
      }
      return _0x1008a3["toString"] = function () {
        return _0x281424["toString"]();
      }, _0x1008a3;
    }(function (_0x59288c) {
      if (_0x59288c) {
        var _0x397b81 = _0x59288c["nativeEvent"]["event"];
        if (_0x397b81) {
          var _0x5d6c47 = !1;
          void 0 !== _0x397b81["key"] ? _0x5d6c47 = "Spacebar" === _0x397b81["key"] || " " === _0x397b81["key"] || "Enter" === _0x397b81["key"] : void 0 !== _0x397b81["keyCode"] && (_0x5d6c47 = 13 === _0x397b81["keyCode"] || 32 === _0x397b81["keyCode"]), _0x5d6c47 && (_0x59288c["preventDefault"](), this["handleVerifyBtn"](_0x59288c));
        }
      }
    })), _0x297648(_0x2e828a, ".yidun_voice__input keydown", function (_0x32aad4) {
      if (_0x32aad4) {
        var _0x49ff49 = _0x32aad4["nativeEvent"]["event"];
        if (_0x49ff49) {
          var _0x19f068 = !1;
          void 0 !== _0x49ff49["key"] ? _0x19f068 = "Spacebar" === _0x49ff49["key"] || " " === _0x49ff49["key"] || "Enter" === _0x49ff49["key"] : void 0 !== _0x49ff49["keyCode"] && (_0x19f068 = 13 === _0x49ff49["keyCode"] || 32 === _0x49ff49["keyCode"]), _0x19f068 && (_0x32aad4["preventDefault"](), this["handleVerifyBtn"]());
        }
      }
    }), _0x297648(_0x2e828a, "." + _0x4c83fb["BGIMG"] + " mousemove", function (_0x34a580) {
      this["trackMoving"](_0x34a580);
    }), _0x2e828a),
    "mounted": function () {
      var _0x3b9025 = this;
      if (this["initData"](), this["_removeEvents"] = this["initEvents"](), this["fixedAudio"]) {
        var _0x4e14e6 = _0xfe655d["find"](".yidun_voice__back", this["$el"]);
        _0x4e14e6["style"]["display"] = "inline-block";
      }
      this["_unsubscribe"] = this["$store"]["subscribe"](function (_0x48b066, _0x441a7e) {
        var _0x459d44 = _0x48b066["type"];
        _0x459d44 === _0x3245d9 && _0x3b9025["resetAudio"]();
      }), this["adjustUI"]();
    },
    "beforeDestroy": function () {
      this["_removeEvents"](), this["_unsubscribe"](), this["$bgImg"] = null, this["$input"] = null;
    },
    "render": function (_0x26b5cd) {
      var _0x1e1024 = _0x26b5cd["loadInfo"],
        _0x2fe813 = _0x26b5cd["playStatus"];
      _0x1e1024 && this["changeLoadStatus"](_0x1e1024), _0x2fe813 && this["changeAudioStatus"](_0x2fe813);
    },
    "methods": {
      "initData": function () {
        this["traceData"] = [], this["beginTime"] = 0, this["clickCounts"] = 0;
      },
      "adjustUI": function () {
        function _0x390787(_0x36ce84, _0x4fe05d) {
          if (!_0x4fe05d || "function" != typeof window["getComputedStyle"]) return _0x36ce84;
          var _0x2365a1 = _0x36ce84;
          try {
            _0x2365a1 = parseInt(window["getComputedStyle"](_0x4fe05d, null)["getPropertyValue"]("font-size"), 10);
          } catch (_0x3edd9e) {
            return _0x2365a1;
          }
          var _0x2477d9 = _0x36ce84 / _0x2365a1;
          return Math["floor"](_0x36ce84 * _0x2477d9);
        }
        var _0x1114d6 = _0xfe655d["find"](".yidun_voice", this["$el"]);
        this["$el"]["offsetWidth"] <= 280 && _0xfe655d["addClass"](_0x1114d6, "yidun_voice-280"), this["$el"]["offsetWidth"] < 240 && _0xfe655d["addClass"](_0x1114d6, "yidun_voice-240");
        var _0xc8f445 = _0xfe655d["find"](".yidun");
        if (_0xc8f445) {
          var _0x45f5da = _0xc8f445["style"]["fontSize"];
          "" !== _0x45f5da && this["$setData"]({
            "yidunFontSize": _0x45f5da
          }), _0xc8f445["style"]["fontSize"] = _0x390787(_0x1b3100[this["size"]], _0xc8f445) + "px";
        }
      },
      "resetYidunFontSize": function () {
        var _0x38cc9b = _0xfe655d["find"](".yidun");
        _0x38cc9b && (null !== this["yidunFontSize"] ? _0x38cc9b["style"]["fontSize"] = this["yidunFontSize"] : _0x38cc9b["style"]["fontSize"] = "");
      },
      "initEvents": function () {
        var _0x2f4b0d = this,
          _0x3feba4 = this["onClick"]["bind"](this);
        this["$bgImg"] = _0xfe655d["find"]("." + _0x4c83fb["BGIMG"], this["$el"]), this["$input"] = _0xfe655d["find"](".yidun_voice__input", this["$el"]);
        var _0x6eb0b7 = _0xfe655d["find"](".yidun_audio__play", this["$el"]),
          _0x5d87fe = _0xfe655d["find"](".yidun_audio__source", this["$el"]),
          _0x18efb0 = _0xfe655d["find"]("." + _0x4c83fb["CONTROL"], this["$el"]),
          _0x128452 = _0xfe655d["find"](".yidun_voice__refresh", this["$el"]),
          _0x17bfb6 = _0xfe655d["find"](".yidun_audio__refresh", this["$el"]),
          _0x5dc1d6 = _0xfe655d["find"](".yidun_voice__back", this["$el"]),
          _0x4f2b10 = this["onPlayerClick"]["bind"](this),
          _0x12e2ad = this["onAudioEnded"]["bind"](this),
          _0x1b4265 = this["handleVerifyBtn"]["bind"](this),
          _0x24f3f9 = function (_0x176b36) {
            var _0x133fe9 = !(arguments["length"] > 1 && void 0 !== arguments[1]) || arguments[1];
            return function (_0x35c366) {
              _0x2f4b0d["resetYidunFontSize"](), _0x133fe9 && _0x2f4b0d["adjustUI"]();
              var _0x413875 = _0x2f4b0d["$store"]["state"]["verifyStatus"];
              _0x413875 || (_0x176b36 || _0x2f4b0d["resetAudio"](), _0x2f4b0d["$parent"]["switchTypeAndRefresh"](_0x35c366, _0x176b36));
            };
          },
          _0x1fbafd = _0x24f3f9(),
          _0x892dbb = _0x24f3f9(),
          _0x3c5a80 = _0x24f3f9(!1, !1);
        return _0xfe655d["on"](this["$input"], "focus", _0x3feba4), _0xfe655d["on"](_0x6eb0b7, "click", _0x4f2b10, !0), _0xfe655d["on"](_0x5d87fe, "ended", _0x12e2ad), _0xfe655d["on"](_0x18efb0, "click", _0x1b4265, !0), _0xfe655d["on"](_0x128452, "click", _0x1fbafd, !0), _0x17bfb6 && _0xfe655d["on"](_0x17bfb6, "click", _0x892dbb, !0), _0x5dc1d6 && _0xfe655d["on"](_0x5dc1d6, "click", _0x3c5a80, !0), function () {
          _0xfe655d["off"](_0x2f4b0d["$input"], "focus", _0x3feba4), _0xfe655d["off"](_0x6eb0b7, "click", _0x4f2b10, !0), _0xfe655d["off"](_0x5d87fe, "ended", _0x12e2ad), _0xfe655d["off"](_0x18efb0, "click", _0x1b4265, !0), _0xfe655d["off"](_0x128452, "click", _0x1fbafd, !0), _0x17bfb6 && _0xfe655d["off"](_0x17bfb6, "click", _0x892dbb, !0), _0x5dc1d6 && _0xfe655d["off"](_0x5dc1d6, "click", _0x3c5a80, !0);
        };
      },
      "reset": function () {
        var _0x17b38b = this["$store"]["state"],
          _0x14898c = _0x17b38b["countsOfVerifyError"],
          _0x4fa66e = _0x17b38b["config"],
          _0x127c10 = _0x14898c > _0x4fa66e["maxVerification"];
        if (!_0x127c10) {
          this["initData"](), this["$input"]["value"] = "";
          var _0x435d1d = _0xfe655d["find"]("." + _0x4c83fb["CONTROL"], this["$el"]);
          _0x435d1d["setAttribute"]("role", "");
        }
      },
      "changeLoadStatus": function (_0x1e4928) {
        var _0x1d06ee = this,
          _0x5d5773 = _0x1e4928["status"],
          _0x283e42 = _0x1e4928["data"];
        if ("loading" === _0x5d5773 && _0x283e42) {
          var _0x217ab7 = _0xfe655d["find"](".yidun_audio__source", this["$el"]),
            _0x22bd59 = _0xfe655d["find"](".yidun_tips__text", this["$el"]),
            _0xed6fd6 = _0xfe655d["find"]("." + _0x4c83fb["CONTROL"], this["$el"]),
            _0x6708c6 = this["$store"],
            _0x4fbe70 = _0x6708c6["commit"],
            _0xf49ef5 = _0x6708c6["state"],
            _0x245e21 = _0x1bd8c2["audio"]({
              "url": _0x283e42["bg"],
              "timeout": _0xf49ef5["config"]["timeout"],
              "onProcess": _0x396f86(_0xf49ef5["captchaCollector"], {
                "token": _0x283e42["token"]
              })
            });
          _0x245e21["then"](function (_0x33fad6) {
            _0x1d06ee["_isMounted"] && (_0x217ab7["src"] = _0x33fad6["src"], _0xfe655d["text"](_0x22bd59, _0xf49ef5["langPkg"]["check"]), _0xed6fd6["setAttribute"]("role", "button"), _0x4fbe70(_0x1535c8, {
              "status": "done",
              "data": _0x33fad6
            }), _0x1d06ee["$setData"]({
              "playStatus": "start"
            }), _0x1d06ee["addAudioWave"]());
          })["catch"](function (_0x2a6477) {
            if (_0x1d06ee["_isMounted"]) {
              var _0x57fb7f = Object["assign"]({}, _0x2a6477["data"], {
                "token": _0x283e42["token"]
              });
              _0x4fbe70(_0x1535c8, {
                "status": "fail"
              }), _0x4fbe70(_0x283e41, {
                "name": "onError",
                "args": [new _0xb7924c(_0x1117f2, _0x2a6477["message"], _0x57fb7f)]
              });
            }
          });
        } else {
          if ("done" === _0x5d5773) {
            var _0x36cede = _0xfe655d["find"](".yidun_audio__play", this["$el"]);
            setTimeout(function () {
              return _0x36cede["focus"]();
            }, 150);
          }
        }
      },
      "addAudioWave": function () {
        var _0x4878d9 = this,
          _0x1bfa50 = _0xfe655d["find"](".yidun_audio__source", this["$el"]);
        _0x1bfa50["onloadeddata"] = function () {
          _0x1bfa50["onloadeddata"] = null;
          var _0x2f29ca = _0xfe655d["find"](".yidun_audio__wave", _0x4878d9["$el"]);
          _0x2f29ca["innerHTML"] = "";
          for (var _0x4f96ef = _0x1bfa50["duration"] > 7 && _0x1bfa50["duration"] !== 1 / 0 ? _0x1bfa50["duration"] : 7, _0x351dc1 = Math["round"](1000 * _0x4f96ef / 500), _0x2a238f = document["createDocumentFragment"](); _0x351dc1;) {
            var _0x491eaf = document["createElement"]("span");
            _0x491eaf["className"] = "yidun_wave__item yidun_wave-" + _0x351dc1 % 10, _0x491eaf["innerHTML"] = "<span class=\"yidun_wave__inner\"></span>", _0x2a238f["appendChild"](_0x491eaf), _0x351dc1--;
          }
          _0x2f29ca["appendChild"](_0x2a238f);
        }, _0x1bfa50["load"]();
      },
      "changeAudioStatus": function (_0x55c822) {
        var _0x22871e = this,
          _0xf81368 = _0xfe655d["find"](".yidun_audio__play", this["$el"]),
          _0x2751b9 = _0xfe655d["find"](".yidun_audio__refresh", this["$el"]),
          _0x5ec1bf = function () {
            var _0x14c11e = _0xfe655d["findAll"](".yidun_wave__item", _0x22871e["$el"]),
              _0x16fb74 = 0,
              _0x1d5447 = function _0x3a1837() {
                _0x22871e["timer"] && clearTimeout(_0x22871e["timer"]), _0x16fb74 > _0x14c11e["length"] || (_0xfe655d["addClass"](_0x14c11e[_0x16fb74], "yidun_wave__item-light"), _0x16fb74++, _0x22871e["timer"] = setTimeout(_0x3a1837, 480));
              };
            _0x1d5447();
          },
          _0x5d2299 = function () {
            clearTimeout(_0x22871e["timer"]);
            for (var _0x540181 = _0xfe655d["findAll"](".yidun_wave__item", _0x22871e["$el"]), _0x5b3827 = 0; _0x5b3827 < _0x540181["length"]; _0x5b3827++) _0xfe655d["delClass"](_0x540181[_0x5b3827], "yidun_wave__item-light");
          };
        switch (_0x55c822) {
          case "start":
            _0xf81368["style"]["display"] = "", _0x2751b9["style"]["display"] = "none", _0x5d2299();
            break;
          case "playing":
            _0xf81368["style"]["display"] = "none", _0x2751b9["style"]["display"] = "none", _0x5ec1bf();
            break;
          case "ended":
            _0xf81368["style"]["display"] = "", _0x2751b9["style"]["display"] = "", _0x5d2299();
        }
      },
      "resetAudio": function () {
        var _0x55d789 = _0xfe655d["find"](".yidun_audio__source", this["$el"]);
        _0x55d789 && (_0x55d789["pause"](), _0x55d789["currentTime"] = 0, this["$setData"]({
          "playStatus": "start"
        }));
      },
      "onPlayerClick": function (_0x444a4c) {
        this["beginTime"] = _0x56bbb3["now"](), this["onClick"](_0x444a4c);
        var _0x4cc831 = _0xfe655d["find"](".yidun_audio__source", this["$el"]);
        _0x4cc831 && _0x4cc831["play"](), this["$setData"]({
          "playStatus": "playing"
        });
      },
      "onClick": function (_0x2209db) {
        var _0x5b3e69 = this["$store"]["state"],
          _0x43b7e1 = _0x5b3e69["countsOfVerifyError"],
          _0x109cca = _0x5b3e69["config"],
          _0x281891 = _0x43b7e1 > _0x109cca["maxVerification"];
        _0x281891 || this["clickCounts"]++;
      },
      "onAudioEnded": function () {
        this["$setData"]({
          "playStatus": "ended"
        });
      },
      "trackMoving": function (_0x3c9534) {
        if (this["beginTime"]) {
          var _0x456f7a = this["$bgImg"]["getBoundingClientRect"](),
            _0x42d6db = _0x456f7a["left"],
            _0x30e37c = _0x456f7a["top"],
            _0xcaa6d6 = _0x171aa8(this["$store"]["state"]["token"], [Math["round"](_0x3c9534["clientX"] - _0x42d6db), Math["round"](_0x3c9534["clientY"] - _0x30e37c), _0x56bbb3["now"]() - this["beginTime"]] + "");
          this["traceData"]["push"](_0xcaa6d6);
        }
      },
      "handleVerifyBtn": function (_0xa532a4) {
        var _0xf781af = this["$store"]["state"],
          _0xe9c4da = _0xf781af["load"],
          _0x3cd299 = _0xf781af["verifyStatus"];
        if ("done" === _0xe9c4da["status"] && !_0x3cd299) {
          var _0x207678 = _0xfe655d["find"]("." + _0x4c83fb["CONTROL"], this["$el"]);
          _0x207678["setAttribute"]("role", ""), this["onClick"]();
          var _0x475161 = this["$input"]["value"],
            _0x1e6e64 = this["traceData"];
          this["onVerifyCaptcha"]({
            "data": JSON["stringify"]({
              "d": "",
              "m": _0xe8760e(_0x56bbb3["sample"](_0x1e6e64, _0x3034c5)["join"](":")),
              "p": _0xe8760e(_0x171aa8(this["$store"]["state"]["token"], _0x475161 + "," + (_0x56bbb3["now"]() - this["beginTime"]))),
              "ext": _0xe8760e(_0x171aa8(this["$store"]["state"]["token"], this["clickCounts"] + "," + this["traceData"]["length"]))
            })
          }), this["beginTime"] = 0;
        }
      }
    }
  });
}, function (_0x5eb48, _0xadfd51, _0x2d99e4) {
  function _0x4341c0(_0x509aa6, _0x564e96) {
    var _0x33054b = this;
    _0x509aa6 = _0x5c9606(_0x509aa6), _0x5628ee(_0x509aa6["__theme__"], {
      "protocol": _0x509aa6["protocol"],
      "staticServer": Array["isArray"](_0x509aa6["staticServer"]) ? _0x509aa6["staticServer"][0] : _0x509aa6["staticServer"],
      "theme": _0x509aa6["theme"]
    });
    var _0x2c7cfe = window["gdxidpyhxde"];
    _0x564e96 = _0x564e96 || new _0x116abd({
      "bid": _0x509aa6["captchaId"],
      "url": ""
    }, _0x509aa6);
    var _0x1f37c3 = Object["assign"]({}, _0x5f42b9["state"], {
        "config": _0x509aa6,
        "fingerprint": _0x2c7cfe,
        "langPkg": _0x509aa6["customTexts"],
        "smsNew": !!_0x509aa6["smsNew"] || !_0x169c07["isMobile"] && _0x169c07["supportCanvas"],
        "smsVersion": "v3",
        "$fetch": _0x2fb1ac({
          "timeout": _0x509aa6["timeout"],
          "captchaConfig": _0x509aa6
        }),
        "$captchaAnticheat": new _0x553a6c(_0x509aa6, _0x564e96),
        "captchaCollector": _0x564e96,
        "browserFeature": _0x219112
      }),
      _0x227bf4 = new _0x387314(Object["assign"]({}, _0x5f42b9, {
        "state": _0x1f37c3
      })),
      _0xdacde2 = _0x509aa6["__serverConfig__"]["smart"],
      _0x48d1b0 = null,
      _0xf39d2 = function (_0x5dabc8) {
        var _0x1d9393 = arguments["length"] > 1 && void 0 !== arguments[1] ? arguments[1] : "";
        if (!_0x509aa6["disableValidateInput"] && _0x5dabc8 && _0x5dabc8["nodeType"]) {
          var _0x6cf814 = _0x169c07["find"](".yidun_input", _0x5dabc8);
          _0x6cf814 ? _0x6cf814["value"] = _0x1d9393 : (_0x6cf814 = document["createElement"]("input"), _0x6cf814["type"] = "hidden", _0x6cf814["name"] = "NECaptchaValidate", _0x6cf814["value"] = _0x1d9393, _0x6cf814["className"] = "yidun_input", _0x5dabc8["appendChild"](_0x6cf814));
        }
      },
      _0x572917 = {
        "onVerify": function (_0x4a14bd, _0x388d54) {
          if (_0x4a14bd) {
            var _0x3831f1 = _0x4a14bd["data"];
            if (_0x3831f1 && _0x3831f1["counts"] > _0x509aa6["maxVerification"]) {
              var _0x3fbcac = new _0x161da5(_0x2941e9, "verify failed more then " + _0x509aa6["maxVerification"] + " times--" + _0x4a14bd["message"], Object["assign"]({
                "token": _0x3831f1["token"]
              }, _0x4a14bd["data"]));
              return void _0x564e96["collectErr"](_0x3fbcac);
            }
            return void (_0x4a14bd["code"] === _0x4b5c07 && _0x4a14bd["data"]["errorCode"] !== _0x45f33d && _0x564e96["collectErr"](_0x4a14bd));
          }
          var _0x4110bd = _0x388d54["validate"];
          _0xf39d2(_0x509aa6["element"], _0x4110bd), _0x564e96["clear"]();
        },
        "onError": function (_0x555a98) {
          _0x555a98 && "get" === _0x555a98["data"]["api"] && _0x555a98["code"] === _0x4b5c07 && _0x555a98["data"]["errorCode"] !== _0x45f33d && _0x564e96["collectErr"](_0x555a98);
        }
      };
    this["version"] = _0x227bf4["state"]["version"], this["captchaId"] = _0x509aa6["captchaId"], this["captchaType"] = _0x227bf4["state"]["captchaType"], this["mode"] = _0x509aa6["mode"], this["theme"] = _0x509aa6["theme"], this["protocol"] = _0x509aa6["protocol"], this["lang"] = _0x509aa6["lang"];
    var _0x4b8d79 = _0x227bf4["subscribe"](function (_0x3d4b98, _0xaed172) {
      var _0x5b638a = _0x3d4b98["type"],
        _0x33fc67 = _0x3d4b98["payload"];
      switch (_0x5b638a) {
        case _0x417269:
          _0x33054b["captchaType"] = _0xaed172["captchaType"];
          break;
        case _0x1981de:
        case _0x12b59c:
          _0xf39d2(_0x509aa6["element"], "");
          break;
        case _0xcd1ec0:
          var _0x3c9c73 = _0x33fc67["name"],
            _0x16cdc8 = _0x33fc67["args"];
          window["setTimeout"](function () {
            var _0x1d2d52 = _0x572917[_0x3c9c73];
            !_0x16cdc8 && (_0x16cdc8 = [_0x33054b]), _0x1d2d52 && _0x1d2d52["apply"](null, _0x16cdc8), "function" == typeof _0x509aa6[_0x3c9c73] && _0x509aa6[_0x3c9c73]["apply"](null, _0x16cdc8);
          });
      }
    });
    _0x1946e2["mixin"]({
      "beforeCreate": function () {
        this["$store"] = this["$parent"] && this["$parent"]["$store"] || this["$options"]["store"];
      }
    }), this["popUp"] = function () {
      _0x509aa6["apiVersion"] > 1 ? _0x1efc63["assert"](!1, "apiVersion: " + _0x509aa6["apiVersion"] + " unsupport popUp") : _0x1efc63["assert"](!1, "popUp function could only be invoked in not intellisense and mode is popup");
    }, this["close"] = function () {
      _0x1efc63["assert"](!1, "close function could only be invoked in only \"enableClose\" is true and intellisense on mobile devices or mode is bind/popup");
    }, this["verify"] = function () {
      _0x509aa6["apiVersion"] > 1 ? _0x1efc63["assert"](!1, "verify function could only be invoked when mode is popup") : _0x1efc63["assert"](!1, "verify function could only be invoked in intellisense and mode is bind");
    };
    var _0x3e78ed = function (_0x3b99af, _0x39f271) {
      _0x509aa6["enableClose"] && (_0x39f271 && !_0x169c07["isMobile"] || (_0x33054b["close"] = function () {
        var _0x482c57 = _0x3b99af || _0x48d1b0;
        _0x482c57 && _0x482c57["closeModal"]();
      }));
    };
    switch (_0xdacde2) {
      case !0:
        if ("bind" === this["mode"]) {
          var _0x2ee4db = _0x1946e2["_extend"](_0x575245);
          _0x48d1b0 = new _0x2ee4db({
            "abstract": !0,
            "el": _0x509aa6["element"],
            "store": _0x227bf4
          }), this["verify"] = function () {
            if (_0x227bf4["state"]["token"]) _0x48d1b0["verifyCaptcha"]();else var _0x30de3c = _0x227bf4["subscribe"](function (_0x1eb70c, _0x10ee37) {
              var _0xb3777f = _0x1eb70c["type"];
              _0x1eb70c["payload"], _0xb3777f === _0x35d91a && (_0x48d1b0["verifyCaptcha"](), _0x30de3c());
            });
          }, _0x3e78ed(_0x48d1b0), this["_captchaIns"] = _0x48d1b0;
        } else {
          _0x48d1b0 = new _0x1946e2({
            "el": _0x509aa6["element"],
            "store": _0x227bf4,
            "template": "<captcha-intellisense></captcha-intellisense>",
            "components": {
              "captcha-intellisense": _0x3ae52c
            }
          });
          var _0x4d49ce = _0x48d1b0 && _0x48d1b0["$children"] && _0x48d1b0["$children"][0];
          _0x3e78ed(_0x4d49ce, !0), this["_captchaIns"] = _0x4d49ce;
        }
        break;
      case !1:
      default:
        "popup" === this["mode"] ? (this[_0x509aa6["apiVersion"] > 1 ? "verify" : "popUp"] = function () {
          if (!_0x48d1b0) {
            var _0x80d72f = _0x1946e2["_extend"](_0x56b1d7);
            _0x48d1b0 = new _0x80d72f({
              "store": _0x227bf4,
              "propsData": {
                "onBeforeClose": function () {
                  _0x227bf4["commit"](_0xcd1ec0, {
                    "name": "onBeforeClose"
                  });
                },
                "onClose": function (_0x19aafc) {
                  _0x227bf4["commit"](_0xcd1ec0, {
                    "name": "onClose",
                    "args": [{
                      "source": _0x19aafc
                    }]
                  });
                },
                "onOpen": function () {
                  _0x227bf4["commit"](_0xcd1ec0, {
                    "name": "onOpen"
                  });
                },
                "enableColor": !0
              }
            })["$mount"](function (_0x47dacb) {
              _0x509aa6["appendTo"] ? _0x509aa6["appendTo"]["appendChild"](_0x47dacb) : document["body"]["appendChild"](_0x47dacb);
            });
          }
          _0x48d1b0["open"](), this["_captchaIns"] = _0x48d1b0;
        }, _0x3e78ed()) : (_0x48d1b0 = new _0x1946e2({
          "el": _0x509aa6["element"],
          "store": _0x227bf4,
          "template": "<captcha-core :enableColor=\"true\"></captcha-core>",
          "components": {
            "captcha-core": _0x28f949
          }
        }), this["_captchaIns"] = _0x48d1b0);
    }
    _0xf39d2(_0x509aa6["element"]), this["getCaptchaType"] = function () {
      for (var _0x9fc98b in _0x4dec0) if (_0x4dec0[_0x9fc98b] === _0x227bf4["state"]["type"]) return _0x9fc98b["toLowerCase"]();
      return "";
    }, this["isIntellisense"] = function () {
      return !!_0xdacde2;
    }, this["refresh"] = function () {
      _0x227bf4["commit"](_0x12b59c);
    }, this["destroy"] = function () {
      _0x4b8d79(), _0x48d1b0 && (_0x48d1b0["$destroy"](), _0x48d1b0 = null);
      var _0x46bbfc = _0x509aa6["element"];
      if (_0x46bbfc) {
        var _0x2c7561 = _0x169c07["find"](".yidun_input", _0x46bbfc);
        _0x2c7561 && _0x46bbfc["removeChild"](_0x2c7561);
      }
    };
  }
  var _0x1946e2 = _0x2d99e4(6),
    _0x4bb7ea = _0x2d99e4(4),
    _0x417269 = _0x4bb7ea["SWITCH_TYPE"],
    _0xcd1ec0 = _0x4bb7ea["INVOKE_HOOK"],
    _0x12b59c = _0x4bb7ea["EVENT_RESET"],
    _0x1981de = _0x4bb7ea["EVENT_RESET_CLASSIC"],
    _0x35d91a = _0x4bb7ea["SET_TOKEN"],
    _0x387314 = _0x2d99e4(46),
    _0x5f42b9 = _0x2d99e4(60),
    _0x5628ee = _0x2d99e4(33),
    _0x2fb1ac = _0x2d99e4(20),
    _0x5c9606 = _0x2d99e4(38),
    _0x169c07 = _0x2d99e4(2),
    _0x28f949 = _0x2d99e4(13),
    _0x56b1d7 = _0x2d99e4(14),
    _0x3ae52c = _0x2d99e4(32),
    _0x575245 = _0x2d99e4(25),
    _0x161da5 = _0x2d99e4(5),
    _0x2941e9 = _0x161da5["UNPASS_ERROR"],
    _0x4b5c07 = _0x161da5["BUSINESS_ERROR"],
    _0x45f33d = _0x161da5["QPS_LIMIT_ERROR"],
    _0x1efc63 = _0x2d99e4(1),
    _0x4424b6 = _0x2d99e4(3),
    _0x4dec0 = _0x4424b6["CAPTCHA_TYPE"],
    _0x553a6c = _0x2d99e4(35),
    _0x116abd = _0x2d99e4(7),
    _0x219112 = _0x2d99e4(34);
  _0x5eb48["exports"] = window["NECaptcha"] || _0x4341c0;
}, function (_0x590e16, _0x42c752, _0x54d3f2) {
  var _0x379895 = function () {
      function _0x4468e0(_0x28c96f, _0x3c314d) {
        var _0x51722c = [],
          _0x4b0e8a = !0,
          _0x31d649 = !1,
          _0x1bc4b6 = void 0;
        try {
          for (var _0x6216e0, _0x2874ff = _0x28c96f[Symbol["iterator"]](); !(_0x4b0e8a = (_0x6216e0 = _0x2874ff["next"]())["done"]) && (_0x51722c["push"](_0x6216e0["value"]), !_0x3c314d || _0x51722c["length"] !== _0x3c314d); _0x4b0e8a = !0);
        } catch (_0x32b17b) {
          _0x31d649 = !0, _0x1bc4b6 = _0x32b17b;
        } finally {
          try {
            !_0x4b0e8a && _0x2874ff["return"] && _0x2874ff["return"]();
          } finally {
            if (_0x31d649) throw _0x1bc4b6;
          }
        }
        return _0x51722c;
      }
      return function (_0x3bf592, _0x1fe38a) {
        if (Array["isArray"](_0x3bf592)) return _0x3bf592;
        if (Symbol["iterator"] in Object(_0x3bf592)) return _0x4468e0(_0x3bf592, _0x1fe38a);
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
      };
    }(),
    _0x458a99 = _0x54d3f2(12),
    _0x34d254 = _0x458a99["FETCH_INTELLISENSE_CAPTCHA"],
    _0x16b7a6 = _0x458a99["VERIFY_INTELLISENSE_CAPTCHA"],
    _0x169cf4 = _0x458a99["RESET_STATE"],
    _0x2c4f57 = _0x54d3f2(4),
    _0xa1d9e5 = _0x2c4f57["SWITCH_LOAD_STATUS"],
    _0x503031 = _0x2c4f57["UPDATE_VERIFY_STATUS"],
    _0x511ca4 = _0x2c4f57["INVOKE_HOOK"],
    _0x44511a = _0x2c4f57["EVENT_RESET"],
    _0x245ebf = _0x54d3f2(3),
    _0x4c18d1 = _0x245ebf["CAPTCHA_TYPE"],
    _0x197332 = _0x245ebf["SAMPLE_NUM"],
    _0x5c2ab1 = _0x245ebf["RTL_LANGS"],
    _0x2ea7e1 = _0x245ebf["SIZE_TYPE"],
    _0x414517 = _0x245ebf["LARGE_SIZE_TYPE"],
    _0x16d59a = _0x54d3f2(1),
    _0x292d63 = _0x54d3f2(2),
    _0x53340a = _0x54d3f2(17),
    _0x567e6a = _0x54d3f2(8),
    _0xa13ba8 = _0x567e6a["eypt"],
    _0x16708d = _0x567e6a["xor_encode"],
    _0x2acf89 = _0x54d3f2(6),
    _0x19482f = _0x54d3f2(13),
    _0x43eb48 = _0x54d3f2(14),
    _0x51b96d = _0x54d3f2(11),
    _0x3785b5 = _0x54d3f2(15),
    _0x1f4e6c = _0x3785b5["applyColorIfNeed"],
    _0x54459e = _0x3785b5["applyStyleIfNeed"];
  _0x590e16["exports"] = {
    "el": ".yidun_intellisense",
    "template": _0x54d3f2(62),
    "components": {
      "captcha-core": _0x19482f
    },
    "data": function () {
      var _0x48a318 = this["$store"]["state"],
        _0xbb43b7 = _0x48a318["langPkg"],
        _0x56ff37 = _0x48a318["config"];
      return {
        "langPkg": _0xbb43b7,
        "theme": _0x56ff37["theme"],
        "size": _0x56ff37["size"],
        "status": "normal",
        "classicVisible": !1,
        "icon": _0x56ff37["customStyles"]["icon"],
        "isAndroid": _0x292d63["isAndroid"]
      };
    },
    "on": {
      ".yidun_intelli-control click": function (_0x5370b1) {
        this["handleControlClick"](_0x5370b1);
      },
      ".yidun_intelli-control keydown": function (_0x445f5c) {
        if (_0x445f5c) {
          var _0x153c7e = _0x445f5c["nativeEvent"]["event"];
          if (_0x153c7e) {
            var _0x523a98 = !1;
            return void 0 !== _0x153c7e["key"] ? _0x523a98 = "Spacebar" === _0x153c7e["key"] || " " === _0x153c7e["key"] || "Enter" === _0x153c7e["key"] : void 0 !== _0x153c7e["keyCode"] && (_0x523a98 = 13 === _0x153c7e["keyCode"] || 32 === _0x153c7e["keyCode"]), _0x523a98 ? (_0x445f5c["preventDefault"](), this["handleControlClick"](_0x445f5c), !1) : void 0;
          }
        }
      },
      ".yidun_intelli-control mousemove": function (_0x4730eb) {
        this["trackMoving"](_0x4730eb);
      }
    },
    "watch": {
      "status": function (_0x332455) {
        "loaddone" === _0x332455 && this["firstLoad"] && (this["$setData"]({
          "classicVisible": !0
        }), this["firstLoad"] = !1), "success" === _0x332455 && this["$setData"]({
          "classicVisible": !1
        });
      }
    },
    "mounted": function () {
      var _0x1f4f30 = this;
      _0x1f4e6c(this["$store"]["state"]["config"]["customStyles"]["primaryColor"], this["$el"]), _0x54459e(this["$store"]["state"]["config"]["customStyles"], this["$el"]), this["beginTime"] = 0, this["traceData"] = [], this["_baseClassNames"] = this["$el"]["className"]["trim"](), this["_removeEvents"] = this["initEvents"](), this["fetchCaptcha"]()["then"](function () {
        _0x1f4f30["$store"]["commit"](_0x511ca4, {
          "name": "onReady"
        }), _0x1f4f30["$store"]["commit"](_0x511ca4, {
          "name": "onDidRefresh"
        });
      })["finally"](function () {
        _0x1f4f30["$el"]["style"]["display"] = "";
      }), _0x5c2ab1["indexOf"](this["$store"]["state"]["config"]["lang"]) !== -1 && (this["$el"]["style"]["direction"] = "rtl");
    },
    "beforeDestroy": function () {
      this["_removeEvents"](), this["clear"]();
    },
    "render": function (_0x757e5a) {
      var _0x33d57b = _0x757e5a["status"],
        _0x4f27e2 = _0x757e5a["classicVisible"];
      void 0 !== _0x33d57b && this["updateUI"](_0x33d57b), void 0 !== _0x4f27e2 && this["toggleClassicVisible"](_0x4f27e2);
    },
    "methods": {
      "handleControlClick": function (_0x2072d5) {
        if (!(["checking", "loading", "loadfail", "success"]["indexOf"](this["status"]) > -1)) return "normal" === this["status"] ? void this["verifyIntelliCaptcha"](_0x2072d5) : void (!this["classicVisible"] && this["$setData"]({
          "classicVisible": !0
        }));
      },
      "initEvents": function () {
        var _0x2cc7e1 = this,
          _0x4d88ba = _0x292d63["find"](".yidun_intelli-control", this["$el"]),
          _0x53df46 = function (_0x5dac34) {
            _0x2cc7e1["$el"]["contains"](_0x5dac34["target"]) || _0x2cc7e1["classicVisible"] && _0x2cc7e1["$setData"]({
              "classicVisible": !1
            });
          },
          _0x4b4576 = function (_0x4d2efe) {
            _0x2cc7e1["beginTime"] || (_0x2cc7e1["beginTime"] = _0x16d59a["now"]());
          };
        !_0x292d63["isMobile"] && _0x292d63["on"](document, "mousedown", _0x53df46), _0x292d63["on"](_0x4d88ba, "mouseover", _0x4b4576);
        var _0x4b0300 = this["$store"]["subscribe"](function (_0x487dfd, _0x47f2e8) {
          var _0x3310ca = _0x487dfd["type"],
            _0x31aee5 = (_0x487dfd["payload"], _0x47f2e8["load"]),
            _0x3ca521 = _0x47f2e8["verifyStatus"];
          switch (_0x3310ca) {
            case _0xa1d9e5:
              _0x31aee5 && ("loading" === _0x31aee5["status"] && _0x2cc7e1["$setData"]({
                "status": "loading"
              }), "done" === _0x31aee5["status"] && _0x2cc7e1["$setData"]({
                "status": "loaddone"
              }), "fail" === _0x31aee5["status"] && _0x2cc7e1["$setData"]({
                "status": "loadfail"
              }));
              break;
            case _0x503031:
              "success" === _0x3ca521 && _0x2cc7e1["$setData"]({
                "status": "success"
              }), "error" === _0x3ca521 && _0x2cc7e1["$setData"]({
                "status": "error"
              });
              break;
            case _0x44511a:
              _0x2cc7e1["reset"]();
          }
        });
        return function () {
          !_0x292d63["isMobile"] && _0x292d63["off"](document, "mousedown", _0x53df46), _0x292d63["off"](_0x4d88ba, "mouseover", _0x4b4576), _0x4b0300();
        };
      },
      "createClassicCaptcha": function () {
        var _0x539d1e = this;
        if (_0x292d63["isMobile"]) {
          var _0x1ed4ad = this["$store"]["state"]["config"],
            _0x4f1259 = _0x2acf89["_extend"](_0x43eb48);
          this["_captchaIns"] = new _0x4f1259({
            "store": this["$store"],
            "propsData": {
              "autoOpen": !1,
              "intellisense": !0,
              "enableColor": !1,
              "onBeforeClose": function () {
                _0x539d1e["$store"]["commit"](_0x511ca4, {
                  "name": "onBeforeClose"
                });
              },
              "onClose": function (_0x32ff29) {
                _0x539d1e["$setData"]({
                  "classicVisible": !1
                }), _0x539d1e["$store"]["commit"](_0x511ca4, {
                  "name": "onClose",
                  "args": [{
                    "source": _0x32ff29
                  }]
                });
              },
              "onOpen": function () {
                _0x539d1e["$store"]["commit"](_0x511ca4, {
                  "name": "onOpen"
                });
              }
            }
          })["$mount"](function (_0x452e9a) {
            _0x1ed4ad["appendTo"] ? _0x1ed4ad["appendTo"]["appendChild"](_0x452e9a) : document["body"]["appendChild"](_0x452e9a);
          });
        } else {
          var _0x1f46a5 = _0x2acf89["_extend"](_0x19482f);
          this["_captchaIns"] = new _0x1f46a5({
            "el": _0x292d63["find"](".yidun_classic-wrapper", this["$el"]),
            "store": this["$store"],
            "propsData": {
              "intellisense": !0,
              "enableColor": !1
            }
          });
        }
      },
      "fetchCaptcha": function () {
        var _0x4b1f96 = this;
        return new _0x51b96d(function (_0x53dd3e, _0xf7c7b2) {
          var _0x29eae2 = {
            "width": _0x4b1f96["getWidth"](),
            "sizeType": _0x4b1f96["getSizeType"]()
          };
          _0x4b1f96["$store"]["state"]["smsNew"] && (_0x29eae2["smsVersion"] = _0x4b1f96["$store"]["state"]["smsVersion"]), _0x4b1f96["$store"]["dispatch"](_0x34d254, _0x29eae2, function (_0x289906, _0x377241) {
            if (_0x4b1f96["_isMounted"]) return _0x289906 ? (_0x4b1f96["$setData"]({
              "status": "loadfail"
            }), void _0xf7c7b2(_0x289906)) : void _0x53dd3e(_0x377241);
          });
        });
      },
      "clear": function () {
        var _0x321960 = this;
        this["_captchaIns"] && (this["$setData"]({
          "classicVisible": !1
        }), this["$nextTick"](function () {
          _0x321960["_captchaIns"]["$destroy"](), _0x321960["_captchaIns"] = null;
        })), this["beginTime"] = 0, this["traceData"] = [];
      },
      "reset": function () {
        var _0x2221ef = this;
        this["$store"]["dispatch"](_0x169cf4), this["fetchCaptcha"]()["then"](function () {
          _0x2221ef["clear"](), _0x2221ef["resetClassNames"](), _0x2221ef["$setData"]({
            "status": "normal"
          });
        });
      },
      "getWidth": function () {
        return this["$el"]["offsetWidth"];
      },
      "getSizeType": function () {
        return Object["keys"](_0x414517)["indexOf"](this["size"]) !== -1 ? _0x2ea7e1["LARGE"] : _0x2ea7e1["DEFAULT"];
      },
      "resetClassNames": function () {
        for (var _0xfd2bd7 = this["_baseClassNames"]["split"](/\s+/), _0x1c675a = arguments["length"], _0x54e329 = Array(_0x1c675a), _0x5ffd4d = 0; _0x5ffd4d < _0x1c675a; _0x5ffd4d++) _0x54e329[_0x5ffd4d] = arguments[_0x5ffd4d];
        this["$el"]["className"] = _0x53340a(_0xfd2bd7, _0x54e329);
      },
      "loadClassicCaptcha": function () {
        this["createClassicCaptcha"](), this["firstLoad"] = !0, this["$setData"]({
          "status": "loading"
        }), this["_captchaIns"]["refresh"]();
      },
      "verifyIntelliCaptcha": function (_0x523382) {
        var _0x3f7cd5 = this;
        this["$setData"]({
          "status": "checking"
        }), _0x51b96d["all"]([new _0x51b96d(function (_0x149510, _0x4d474a) {
          var _0xd10fd6 = _0x3f7cd5["$store"]["state"]["token"],
            _0x462d7d = _0x3f7cd5["$el"]["getBoundingClientRect"](),
            _0x1e764a = _0x462d7d["left"],
            _0x1dd03d = _0x462d7d["top"],
            _0x280523 = _0x16d59a["now"](),
            _0x56ad96 = _0x16708d(_0xd10fd6, (void 0 !== _0x523382["clientX"] && void 0 !== _0x523382["clientY"] ? [Math["round"](_0x523382["clientX"] - _0x1e764a), Math["round"](_0x523382["clientY"] - _0x1dd03d), _0x280523 - (_0x3f7cd5["beginTime"] || _0x280523)] : []) + ""),
            _0x5ba271 = _0x3f7cd5["traceData"]["map"](function (_0x18043a) {
              return _0x16708d(_0xd10fd6, _0x18043a);
            });
          _0x3f7cd5["$store"]["dispatch"](_0x16b7a6, {
            "token": _0xd10fd6,
            "type": _0x4c18d1["INTELLISENSE"],
            "width": _0x3f7cd5["getWidth"](),
            "data": JSON["stringify"]({
              "d": "",
              "m": _0xa13ba8(_0x16d59a["sample"](_0x5ba271, _0x197332)["join"](":")),
              "p": _0xa13ba8(_0x56ad96),
              "ext": _0xa13ba8(_0x16708d(_0xd10fd6, "1," + _0x5ba271["length"]))
            })
          }, function (_0x3b0b64, _0x268ffc) {
            if (_0x3f7cd5["_isMounted"]) return _0x3b0b64 ? void _0x4d474a(_0x3b0b64) : void _0x149510(_0x268ffc);
          });
        }), new _0x51b96d(function (_0x58fc4d, _0xbd326c) {
          window["setTimeout"](_0x58fc4d, 300);
        })])["then"](function (_0x1c4dbd) {
          var _0x425384 = _0x379895(_0x1c4dbd, 1);
          _0x425384[0], _0x3f7cd5["$setData"]({
            "status": "success"
          });
        })["catch"](function () {
          return _0x3f7cd5["loadClassicCaptcha"]();
        });
      },
      "trackMoving": function (_0x22b80a) {
        if (this["beginTime"]) {
          var _0x13b0d5 = this["$el"]["getBoundingClientRect"](),
            _0x98d2ce = _0x13b0d5["left"],
            _0x2560f6 = _0x13b0d5["top"],
            _0x4580da = [Math["round"](_0x22b80a["clientX"] - _0x98d2ce), Math["round"](_0x22b80a["clientY"] - _0x2560f6), _0x16d59a["now"]() - this["beginTime"]] + "";
          this["traceData"]["push"](_0x4580da);
        }
      },
      "toggleClassicVisible": function (_0x5e7b5a) {
        var _0x1c3228 = this["_captchaIns"];
        if (_0x292d63["isMobile"] && _0x1c3228) _0x5e7b5a && _0x1c3228["open"](), !_0x5e7b5a && _0x1c3228["close"]();else {
          var _0x56b739 = _0x292d63["find"](".yidun_classic-wrapper", this["$el"]);
          _0x56b739["style"]["display"] = _0x5e7b5a ? "block" : "none";
        }
      },
      "updateUI": function (_0x49d885) {
        var _0x324ecd = this,
          _0x36682c = _0x292d63["find"](".yidun_intelli-text", this["$el"]),
          _0x248633 = _0x292d63["find"](".yidun_tips__text", this["$el"]),
          _0x2aaea3 = this["langPkg"]["intellisense"],
          _0xb73fe8 = "yidun_intellisense",
          _0x5c2487 = this["$store"]["state"],
          _0x1f0653 = _0x5c2487["countsOfVerifyError"],
          _0x51ef39 = _0x5c2487["config"],
          _0x4a4bab = function (_0x2822a5) {
            _0x2822a5["stopPropagation"](), _0x324ecd["$store"]["commit"](_0x44511a);
          };
        switch (_0x292d63["off"](_0x248633, "click", _0x4a4bab), _0x49d885) {
          case "normal":
            _0x292d63["text"](_0x36682c, _0x2aaea3["normal"]);
            break;
          case "checking":
            this["resetClassNames"](_0xb73fe8 + "--checking"), _0x292d63["text"](_0x36682c, _0x2aaea3["checking"]);
            break;
          case "loading":
            this["resetClassNames"](_0xb73fe8 + "--loading"), _0x292d63["text"](_0x36682c, _0x2aaea3["loading"]);
            break;
          case "loaddone":
            this["resetClassNames"](), _0x292d63["text"](_0x36682c, _0x2aaea3["loaddone"]);
            break;
          case "loadfail":
            this["resetClassNames"](_0xb73fe8 + "--loadfail"), _0x292d63["text"](_0x248633, _0x2aaea3["loadfail"]);
            break;
          case "success":
            this["resetClassNames"](_0xb73fe8 + "--success"), _0x292d63["text"](_0x248633, this["langPkg"]["verifySuccess"]);
            break;
          case "error":
            var _0x2808bb = _0xb73fe8 + "--error";
            _0x1f0653 > _0x51ef39["maxVerification"] ? (_0x2808bb += " " + _0xb73fe8 + "--maxerror", _0x292d63["text"](_0x248633, this["langPkg"]["verifyOutOfLimit"]), _0x292d63["on"](_0x248633, "click", _0x4a4bab)) : _0x292d63["text"](_0x248633, this["langPkg"]["verifyError"]), this["resetClassNames"](_0x2808bb);
        }
      },
      "closeModal": function () {
        _0x292d63["isMobile"] && this["_captchaIns"] && this["_captchaIns"]["closeModal"]();
      }
    }
  };
}, function (_0x191b43, _0x4e750d, _0x408bad) {
  var _0x162e0d = _0x408bad(22),
    _0x4dff6c = _0x408bad(1),
    _0x119334 = _0x408bad(16),
    _0x40a0c5 = {};
  _0x191b43["exports"] = function (_0x269255, _0x42ad82) {
    _0x269255 = Object["assign"]([], _0x269255);
    var _0x15e2a5 = _0x42ad82["protocol"],
      _0x34fe3c = _0x42ad82["staticServer"],
      _0x294ead = _0x42ad82["theme"],
      _0x2b9dd0 = _0x269255[0]["slice"](0);
    if (!_0x40a0c5[_0x294ead]) {
      _0x4dff6c["assert"](_0x269255, "apply [" + _0x294ead + " theme] failed");
      var _0x16da26 = _0x119334({
        "protocol": _0x15e2a5,
        "host": _0x34fe3c
      });
      _0x2b9dd0[1] = _0x2b9dd0[1]["replace"](/url\(['"]?\/?([^'"\s]+?)['"]?\)/g, "url(\"" + _0x16da26 + "$1\")"), _0x269255[0] = _0x2b9dd0, _0x162e0d(_0x269255), _0x40a0c5[_0x294ead] = !0, delete _0x269255["__theme__"];
    }
  };
}, function (_0x571d53, _0x2d87e3) {
  function _0x3eeed4() {
    var _0x424aa7 = void 0;
    try {
      null[0]();
    } catch (_0x4db780) {
      _0x424aa7 = _0x4db780;
    }
    if (_0x424aa7 && "string" == typeof _0x424aa7["stack"]) {
      for (var _0x346ed2 = ["phantomjs", "rhino", "nodejs", "couchjs", "selenium"], _0x433319 = 0; _0x433319 < _0x346ed2["length"]; _0x433319++) if (_0x424aa7["stack"]["indexOf"](_0x346ed2[_0x433319]) > -1) return 1001 + _0x433319;
    }
    return 0;
  }
  function _0x5466b9() {
    for (var _0x1e6ed7 = ["_Selenium_IDE_Recorder", "_phantom", "phantom.injectJs", "callPhantom", "_selenium", "callSelenium", "domAutomation", "domAutomationController", "__nightmare", "context.hashCode", "java.lang.System.exit", "spawn", "Buffer", "emit", "webdriver"], _0x3c4c15 = ["__driver_evaluate", "__webdriver_evaluate", "__selenium_evaluate", "__fxdriver_evaluate", "__driver_unwrapped", "__webdriver_unwrapped", "__selenium_unwrapped", "__fxdriver_unwrapped", "__webdriver_script_function", "__webdriver_script_func", "__webdriver_script_fn"], _0xefa158 = ["selenium", "webdriver", "driver"], _0x16596e = 0, _0x63d5e7 = _0x1e6ed7["length"]; _0x16596e < _0x63d5e7; _0x16596e++) if (_0x3bafb5(window, _0x1e6ed7[_0x16596e])) return _0x16596e + 2001;
    for (var _0x107450 = 0, _0x1a5749 = _0x3c4c15["length"]; _0x107450 < _0x1a5749; _0x107450++) if (_0x3bafb5(document, _0x3c4c15[_0x107450])) return _0x107450 + 3001;
    for (var _0x558bb7 = 0, _0x59f222 = _0xefa158["length"]; _0x558bb7 < _0x59f222; _0x558bb7++) if (document["documentElement"]["getAttribute"](_0xefa158[_0x558bb7])) return _0x558bb7 + 4001;
    return _0x3bafb5(navigator, "webdriver") === !0 ? 5001 : 0;
  }
  function _0xa4c07e() {
    for (var _0x57207e in document) if (document[_0x57207e]) {
      try {
        if (document[_0x57207e]["cache_"] && _0x57207e["match"] && _0x57207e["match"](/\$[a-z]dc_/)) return 5002;
      } catch (_0x227497) {
        return 0;
      }
      return 0;
    }
  }
  function _0x65b1f8() {
    try {
      return window["external"] && ~window["external"]["toString"]()["indexOf"]("Sequentum") ? 5003 : 0;
    } catch (_0x555bf7) {
      return 0;
    }
  }
  function _0x3bafb5(_0x312a10, _0x1ffcb6) {
    for (var _0x5df1e5 = _0x1ffcb6["split"]("."), _0x2ae9f4 = _0x312a10, _0x2c4d83 = 0; _0x2c4d83 < _0x5df1e5["length"]; _0x2c4d83++) {
      if (void 0 == _0x2ae9f4[_0x5df1e5[_0x2c4d83]]) return;
      _0x2ae9f4 = _0x2ae9f4[_0x5df1e5[_0x2c4d83]];
    }
    return _0x2ae9f4;
  }
  var _0x1ae99d = function () {
    try {
      return _0x3eeed4() || _0x5466b9() || _0xa4c07e() || _0x65b1f8();
    } catch (_0x374d2e) {
      return 0;
    }
  }();
  _0x571d53["exports"] = _0x1ae99d;
}, function (_0x464043, _0x1914b7, _0x6b5e1e) {
  function _0x771e37(_0x184136, _0x22d44e) {
    this["_captchaConf"] = _0x184136, this["_captchaCollector"] = _0x22d44e;
  }
  var _0x47111e = _0x6b5e1e(11),
    _0x1125b2 = _0x6b5e1e(5),
    _0xd534eb = _0x1125b2["ANTICHEAT_TOKEN_ERROR"],
    _0x18fa54 = _0x6b5e1e(1);
  _0x771e37["prototype"]["getAnticheat"] = function () {
    return this["_captchaConf"]["__anticheat__"] ? this["_captchaConf"]["__anticheat__"]["instance"] : null;
  }, _0x771e37["prototype"]["getToken"] = function (_0x1db852) {
    var _0xa6610d = this,
      _0x56e35e = _0x1db852["timeout"],
      _0x514dc2 = arguments["length"] > 1 && void 0 !== arguments[1] ? arguments[1] : 3,
      _0x172f35 = this["_captchaConf"],
      _0x109feb = new _0x47111e(function (_0x1dbe34) {
        var _0x2816c8 = function _0x5c17d8() {
          var _0x429fe7 = arguments["length"] > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
            _0x199b21 = null,
            _0x5bd9fc = function (_0x1cb584) {
              if (clearTimeout(_0x199b21), _0x429fe7 < _0x514dc2) setTimeout(function () {
                return _0x5c17d8(_0x429fe7 + 1);
              }, 200);else {
                var _0x1fdc00 = new _0x1125b2(_0xd534eb, _0x1cb584["message"] + ";initWatchman: " + _0x18fa54["typeOf"](window["initWatchman"]) + ";Watchman: " + _0x18fa54["typeOf"](window["Watchman"]));
                _0xa6610d["_captchaCollector"]["collectErr"](_0x1fdc00), _0x1dbe34(_0x172f35["acConfig"]["token"] || "");
              }
            };
          try {
            _0x199b21 = setTimeout(function () {
              _0x5bd9fc(new Error("get anticheat token timeout"));
            }, _0x56e35e + 50), _0xa6610d["getAnticheat"]()["getToken"](_0x172f35["acConfig"]["bid"], function (_0x5d3d2e) {
              clearTimeout(_0x199b21), _0x1dbe34(_0x5d3d2e);
            }, _0x56e35e);
          } catch (_0x424bf5) {
            _0x5bd9fc(_0x424bf5);
          }
        };
        1 === _0x172f35["acConfig"]["enable"] ? _0x2816c8(0) : _0x1dbe34("");
      });
    return _0x109feb;
  }, _0x464043["exports"] = _0x771e37;
}, function (_0xe9bb15, _0x10d7f8, _0x5672ed) {
  function _0x191d0c(_0x5c2190, _0x326aeb, _0x550585) {
    return _0x326aeb in _0x5c2190 ? Object["defineProperty"](_0x5c2190, _0x326aeb, {
      "value": _0x550585,
      "enumerable": !0,
      "configurable": !0,
      "writable": !0
    }) : _0x5c2190[_0x326aeb] = _0x550585, _0x5c2190;
  }
  var _0x5d24f6,
    _0x293452 = _0x5672ed(20),
    _0x5d28ce = _0x5672ed(16),
    _0x5ed793 = _0x5672ed(5),
    _0x204d4b = _0x5ed793["REQUEST_SCRIPT_ERROR"],
    _0xe666f7 = _0x5ed793["REQUEST_API_ERROR"],
    _0xc0ce2d = _0x5ed793["REQUEST_IMG_ERROR"],
    _0x3a5802 = _0x5ed793["REQUEST_AUDIO_ERROR"],
    _0x1a0b24 = _0x5ed793["BUSINESS_ERROR"],
    _0x4a80a7 = _0x5ed793["UNPASS_ERROR"],
    _0x2bbc54 = _0x5ed793["ANTICHEAT_TOKEN_ERROR"],
    _0x3e80d3 = _0x5672ed(19),
    _0x4c3665 = _0x5672ed(9),
    _0x259568 = _0x5672ed(1),
    _0x49e131 = _0x259568["uuid"],
    _0x51f79c = (_0x5d24f6 = {}, _0x191d0c(_0x5d24f6, _0xe666f7, "api"), _0x191d0c(_0x5d24f6, _0xc0ce2d, "image"), _0x191d0c(_0x5d24f6, _0x3a5802, "audio"), _0x191d0c(_0x5d24f6, _0x204d4b, "script"), _0x191d0c(_0x5d24f6, _0x1a0b24, "business"), _0x191d0c(_0x5d24f6, _0x4a80a7, "unpass"), _0x191d0c(_0x5d24f6, _0x2bbc54, "anticheat"), _0x5d24f6),
    _0xfa4d55 = null;
  _0xe9bb15["exports"] = function (_0x9ad585, _0x38eef5, _0x589ae1) {
    var _0x49e8c4 = _0x38eef5["protocol"],
      _0x3763b4 = _0x38eef5["apiServer"],
      _0x1dc47b = _0x38eef5["__serverConfig__"],
      _0x10a161 = void 0 === _0x1dc47b ? {} : _0x1dc47b,
      _0x2f54a8 = _0x38eef5["captchaId"],
      _0x2bd25f = _0x38eef5["timeout"],
      _0x4ade2a = _0x38eef5["ipv6"],
      _0x41785b = new _0x3e80d3(),
      _0x287577 = function (_0x43e650) {
        var _0x4e03bf = "/api/v2/collect";
        return Array["isArray"](_0x43e650) ? _0x43e650["map"](function (_0x241f24) {
          return _0x5d28ce({
            "protocol": _0x49e8c4,
            "host": _0x241f24,
            "path": _0x4e03bf
          });
        }) : _0x5d28ce({
          "protocol": _0x49e8c4,
          "host": _0x43e650,
          "path": _0x4e03bf
        });
      },
      _0x9176e0 = _0x4ade2a ? [["c.dun.163.com", "c.dun.163yun.com"], ["c-v6.dun.163.com", "c.dun.163yun.com"]][1] : [["c.dun.163.com", "c.dun.163yun.com"], ["c-v6.dun.163.com", "c.dun.163yun.com"]][0],
      _0xf5fe7e = _0x287577(_0x3763b4 || _0x10a161["apiServer"] || _0x9176e0),
      _0x3abbeb = _0x293452({
        "timeout": _0x2bd25f,
        "disableRetry": !0,
        "captchaConfig": _0x38eef5
      }),
      _0x4003fc = _0x9ad585["data"],
      _0x4d5a50 = Object["assign"]({
        "id": _0x2f54a8,
        "token": _0x4003fc["token"] || "",
        "type": _0x51f79c[_0x9ad585["code"]] || "other",
        "target": _0x4003fc["url"] || _0x4003fc["resource"] || "",
        "message": _0x9ad585["toString"]()
      }, _0x589ae1);
    null == window["ip"] && (window["ip"] = function (_0x2b87c5, _0x2f5f40, _0x2546a0) {
      _0xfa4d55 = {
        "ip": _0x2b87c5,
        "dns": _0x2546a0
      };
    });
    var _0x2e68a6 = function () {
        Object["assign"](_0x4d5a50, _0xfa4d55), _0x3abbeb(_0xf5fe7e, _0x4d5a50, function (_0x442dfa, _0x222620) {
          if (_0x442dfa || _0x222620["error"]) {
            console && console["warn"]("Failed to collect error.");
            var _0x4b31f7 = new Error(_0x442dfa ? _0x442dfa["message"] : _0x222620["msg"]);
            return _0x4b31f7["data"] = {
              "url": _0xf5fe7e
            }, void _0x41785b["resolve"](_0x4b31f7);
          }
          _0x41785b["resolve"]();
        });
      },
      _0x3fad97 = _0x49e8c4 + "://only-d-" + _0x49e131(32) + "-" + new Date()["valueOf"]() + ".nstool.netease.com/ip.js";
    return _0x4c3665["script"]({
      "url": _0x3fad97,
      "timeout": _0x2bd25f,
      "checkResult": function (_0x2bf28b) {
        _0x2bf28b && _0x2bf28b["scriptEl"] && _0x2bf28b["scriptEl"]["parentElement"]["removeChild"](_0x2bf28b["scriptEl"]);
        var _0x216d82 = new _0x3e80d3();
        return _0xfa4d55 && _0xfa4d55["dns"] ? (_0x216d82["resolve"](), _0x216d82) : (setTimeout(function () {
          return _0x216d82["resolve"](new Error("try to collect dns again"));
        }, 100), _0x216d82);
      }
    })["finally"](function () {
      _0x2e68a6();
    }), _0x41785b;
  };
}, function (_0x3acee2, _0xab1043) {
  _0x3acee2["exports"] = function () {
    return location["href"]["replace"](/\?[\s\S]*/, "")["substring"](0, 128);
  };
}, function (_0x729838, _0x1e66f8, _0x4bd6cd) {
  function _0x524fa2(_0x1e8449) {
    return "number" === _0x3ddb32["typeOf"](_0x1e8449);
  }
  function _0x568499(_0x4c746b, _0x2e3f59) {
    var _0x38262a = /^((\d|[1-9]\d+)(\.\d+)?)(px|rem|%)?$/,
      _0x15c62f = _0x4c746b["width"],
      _0x40f272 = _0x15c62f === _0x4c405d["width"],
      _0x5bb1a9 = "popup" === _0x4c746b["mode"] || "bind" === _0x4c746b["mode"];
    _0x3ddb32["assert"](_0x15c62f === _0x4c405d["width"] || _0x38262a["test"](_0x15c62f) || _0x524fa2(_0x15c62f) && _0x15c62f >= 0, "config: \"width\" should be a valid number or string like \"**px\", \"**rem\", \"**%\"(except popup/bind mode) or \"auto\". By default, it is \"auto\""), _0x3ddb32["assert"](!(_0x5bb1a9 && /%$/["test"](_0x15c62f)), "config: \"width\" can't be percentage like \"**%\", when mode is \"popup\".");
    var _0x557e22 = _0x3ddb32["msie"]();
    _0x3ddb32["assert"](!(_0x557e22 < 9 && /rem$/["test"](_0x15c62f)), "config: \"width\", IE" + _0x557e22 + " does not support \"rem\", please use a valid value");
    var _0x56e3ac = _0x15c62f;
    return _0x40f272 && _0x5bb1a9 ? _0x56e3ac = _0x1b29b8["isMobile"] ? "260px" : _0x2d19d6 + "px" : (_0x524fa2(_0x15c62f) || Number(_0x15c62f)) && (_0x56e3ac = _0x15c62f + "px"), _0x56e3ac;
  }
  function _0x1f9715(_0xb91d56) {
    var _0x2ef3c4 = arguments["length"] > 1 && void 0 !== arguments[1] ? arguments[1] : {},
      _0x514272 = {
        "imagePanel": {},
        "controlBar": {},
        "gap": "",
        "icon": {},
        "primaryColor": ""
      };
    return Object["assign"](_0x514272["imagePanel"], _0xb91d56["imagePanel"], _0x2ef3c4["imagePanel"]), Object["assign"](_0x514272["controlBar"], _0xb91d56["controlBar"], _0x2ef3c4["controlBar"]), _0x514272["imagePanel"]["borderRadius"] = _0x29f082(_0x2ef3c4["imagePanel"] && _0x2ef3c4["imagePanel"]["borderRadius"]) || _0x29f082(_0xb91d56["imagePanel"] && _0xb91d56["imagePanel"]["borderRadius"]), _0x514272["gap"] = _0x29f082(_0x2ef3c4["gap"]) || _0x29f082(_0xb91d56["gap"]), _0x514272["controlBar"]["height"] = _0x29f082(_0x2ef3c4["controlBar"] && _0x2ef3c4["controlBar"]["height"]) || _0x29f082(_0xb91d56["controlBar"] && _0xb91d56["controlBar"]["height"]), _0x514272["controlBar"]["textSize"] = _0x29f082(_0x2ef3c4["controlBar"] && _0x2ef3c4["controlBar"]["textSize"]) || _0x29f082(_0xb91d56["controlBar"] && _0xb91d56["controlBar"]["textSize"]), _0x514272["controlBar"]["borderRadius"] = _0x29f082(_0x2ef3c4["controlBar"] && _0x2ef3c4["controlBar"]["borderRadius"]) || _0x29f082(_0xb91d56["controlBar"] && _0xb91d56["controlBar"]["borderRadius"]), _0x514272["controlBar"]["paddingLeft"] = _0x29f082(_0x2ef3c4["controlBar"] && _0x2ef3c4["controlBar"]["paddingLeft"]) || _0x29f082(_0xb91d56["controlBar"] && _0xb91d56["controlBar"]["paddingLeft"]), _0x514272["primaryColor"] = _0x2ef3c4["primaryColor"] || _0xb91d56["primaryColor"], _0x514272["executeBorderRadius"] = _0x29f082(_0x2ef3c4["executeBorderRadius"]) || _0x29f082(_0xb91d56["executeBorderRadius"]), _0x514272["executeBackground"] = _0x2ef3c4["executeBackground"] || _0xb91d56["executeBackground"], _0x514272["executeTop"] = _0x29f082(_0x2ef3c4["executeTop"]) || _0x29f082(_0xb91d56["executeTop"]), _0x514272["executeRight"] = _0x29f082(_0x2ef3c4["executeRight"]) || _0x29f082(_0xb91d56["executeRight"]), Object["assign"](_0x514272["icon"], _0xb91d56["icon"], _0x2ef3c4["icon"]), _0x514272;
  }
  function _0x43cbe7(_0x515283) {
    var _0x1be658 = arguments["length"] > 1 && void 0 !== arguments[1] ? arguments[1] : {},
      _0x118eb7 = function _0x3f4604(_0x1e3122, _0x4b002f) {
        for (var _0x15a056 = {}, _0x245bb6 = Object["keys"](_0x1e3122), _0x363284 = 0, _0x602706 = _0x245bb6["length"]; _0x363284 < _0x602706; _0x363284++) {
          var _0x23b0db = _0x245bb6[_0x363284];
          void 0 === _0x4b002f[_0x23b0db] ? _0x15a056[_0x23b0db] = _0x1e3122[_0x23b0db] : "string" === _0x3ddb32["typeOf"](_0x1e3122[_0x23b0db]) ? _0x15a056[_0x23b0db] = _0x4b002f[_0x23b0db] + "" : _0x15a056[_0x23b0db] = _0x3f4604(_0x1e3122[_0x23b0db], _0x4b002f[_0x23b0db]);
        }
        return _0x15a056;
      };
    return _0x118eb7(_0x515283, _0x1be658);
  }
  function _0xa91295(_0x1aca5e) {
    _0x1aca5e = Object["assign"]({}, _0x4c405d, _0x1aca5e);
    var _0x33a49e = _0x1aca5e["__serverConfig__"]["smart"],
      _0x54de98 = _0x1aca5e["element"],
      _0x5ae395 = "popup" === _0x1aca5e["mode"],
      _0x262a8c = _0x1aca5e["apiVersion"];
    _0x3ddb32["assert"](_0x1aca5e["captchaId"], "config: \"captchaId\" is required!"), _0x3ddb32["assert"](_0x524fa2(_0x262a8c), "apiVersion must be number"), _0x262a8c > 1 ? (!_0x54de98 && (_0x54de98 = "body"), _0x3ddb32["assert"](~["float", "embed", "popup"]["indexOf"](_0x1aca5e["mode"]), "config: \"mode \"" + _0x1aca5e["mode"] + "\" is invalid, \"float\", \"embed\" or \"popup\" is expected"), _0x33a49e && "popup" === _0x1aca5e["mode"] && (_0x1aca5e["mode"] = "bind"), _0x1aca5e["appendTo"] = _0x54de98, _0x1aca5e["enableClose"] = _0x1aca5e["closeEnable"]) : (_0x3ddb32["assert"](_0x5ae395 || _0x54de98, "config: \"element\" is required when \"mode\" is not \"popup\""), !_0x33a49e && _0x3ddb32["assert"](~["float", "embed", "popup"]["indexOf"](_0x1aca5e["mode"]), "config: \"current captcha is not intellisense , mode \"" + _0x1aca5e["mode"] + "\" is invalid, \"float\", \"embed\" or \"popup\" is expected")), _0x3ddb32["assert"](!_0x1aca5e["size"] || ~["small", "medium", "large", "x-large"]["indexOf"](_0x1aca5e["size"]), "config: \"size " + _0x1aca5e["size"] + "\" is invalid. \"small\", \"medium\", \"large\" and \"x-large\" is expected. If no value is passed, it defaults to \"small\"."), _0x54de98["nodeType"] || "string" !== _0x3ddb32["typeOf"](_0x54de98) || (_0x54de98 = _0x1b29b8["find"](_0x54de98), _0x3ddb32["assert"](_0x54de98, "config: \"element " + _0x1aca5e["element"] + "\" not found"), _0x1aca5e["element"] = _0x54de98), _0x3ddb32["assert"](!_0x1aca5e["theme"] || ~["light", "dark"]["indexOf"](_0x1aca5e["theme"]), "config: \"theme " + _0x1aca5e["theme"] + "\" is invalid. \"light\", \"dark\" is expected. By default, it depends on console's config"), _0x3ddb32["assert"](/^https?$/["test"](_0x1aca5e["protocol"]), "config: \"protocol " + _0x1aca5e["protocol"] + "\" is invalid. \"http\", \"https\" is expected. By default, it depends on user's website"), Object["keys"](_0x38f599)["indexOf"](_0x1aca5e["lang"]) > -1 && (_0x1aca5e["lang"] = _0x38f599[_0x1aca5e["lang"]]), _0x3ddb32["assert"](_0x34ccbb[_0x1aca5e["lang"]], "config: \"lang " + _0x1aca5e["lang"] + "\" is invalid, supported lang: " + Object["keys"](_0x34ccbb)["toString"]() + ". By default, it's " + _0x4c405d["lang"]), _0x33a49e && "bind" !== _0x1aca5e["mode"] ? _0x1aca5e["width"] = _0x4c405d["width"] : _0x1aca5e["width"] = _0x568499(_0x1aca5e, _0x54de98);
    var _0x2a8c3d = _0x1aca5e["appendTo"];
    return !_0x33a49e && "popup" === _0x1aca5e["mode"] || "bind" === _0x1aca5e["mode"] || _0x33a49e && _0x1b29b8["isMobile"] ? _0x3ddb32["assert"](!_0x2a8c3d || _0x2a8c3d["nodeType"] || "string" === _0x3ddb32["typeOf"](_0x2a8c3d), "config: appendTo should be a elment or string") : _0x262a8c <= 1 && _0x3ddb32["assert"](!_0x2a8c3d, "config: appendTo could only be valid when aptchaType is not intellisense and mode is \"popup\", or mode is bind, or captchaType is intellisense on the mobile side"), _0x2a8c3d && !_0x2a8c3d["nodeType"] && "string" === _0x3ddb32["typeOf"](_0x2a8c3d) && (_0x2a8c3d = _0x1b29b8["find"](_0x2a8c3d), _0x3ddb32["assert"](_0x2a8c3d, "config: \"element " + _0x1aca5e["appendTo"] + "\" which \"appendTo\" defined not found"), _0x1aca5e["appendTo"] = _0x2a8c3d), (_0x262a8c <= 1 || _0x262a8c >= 1 && _0x2a8c3d !== document["body"]) && _0x2a8c3d && "static" === _0x1b29b8["getComputedStyle"](_0x2a8c3d, "position") && (_0x2a8c3d["style"]["position"] = "relative"), _0x1aca5e["__serverConfig__"]["customStyles"] ? (_0x3ddb32["assert"](_0x1aca5e["customStyles"] && _0x4af8c1(_0x1aca5e["customStyles"]), "config: \"customStyles\" must be a plain Object"), _0x1aca5e["customStyles"] = _0x1f9715(_0x4c405d["customStyles"], _0x1aca5e["customStyles"]), _0x3ddb32["assert"](_0x1aca5e["customTexts"] && _0x4af8c1(_0x1aca5e["customTexts"]), "config: \"customTexts\" must be a plain Object"), _0x1aca5e["customTexts"] = _0x43cbe7(_0x34ccbb[_0x1aca5e["lang"]], _0x1aca5e["customTexts"])) : (_0x1aca5e["customStyles"] = _0x4c405d["customStyles"], _0x1aca5e["customTexts"] = _0x34ccbb[_0x1aca5e["lang"]]), _0x3ddb32["assert"]("string" === _0x3ddb32["typeOf"](_0x1aca5e["group"]) && _0x1aca5e["group"]["length"] <= 32, "config: \"group\" must be a string and it's length less than or equal 32"), _0x3ddb32["assert"]("string" === _0x3ddb32["typeOf"](_0x1aca5e["scene"]) && _0x1aca5e["scene"]["length"] <= 32, "config: \"scene\" must be a string and it's length less than or equal 32"), _0x3ddb32["assert"](_0x524fa2(_0x1aca5e["maxVerification"]) && _0x1aca5e["maxVerification"] >= 0, "config: \"maxVerification\" must be a number and it's greater than or equal 0"), _0x3ddb32["assert"](_0x524fa2(_0x1aca5e["refreshInterval"]) && _0x1aca5e["refreshInterval"] >= 0, "config: \"refreshInterval\" must be a number and it's greater than or equal 0"), _0x1aca5e["acConfig"] = _0x1aca5e["acConfig"] || _0x1aca5e["__serverConfig__"]["ac"] || {}, _0x1aca5e;
  }
  var _0x462fe2 = function () {
      function _0x544d5d(_0x2a8a88, _0x209d14) {
        var _0xe5659c = [],
          _0x4917d4 = !0,
          _0x4e902b = !1,
          _0x5dab29 = void 0;
        try {
          for (var _0x31387e, _0x4bf431 = _0x2a8a88[Symbol["iterator"]](); !(_0x4917d4 = (_0x31387e = _0x4bf431["next"]())["done"]) && (_0xe5659c["push"](_0x31387e["value"]), !_0x209d14 || _0xe5659c["length"] !== _0x209d14); _0x4917d4 = !0);
        } catch (_0x50d157) {
          _0x4e902b = !0, _0x5dab29 = _0x50d157;
        } finally {
          try {
            !_0x4917d4 && _0x4bf431["return"] && _0x4bf431["return"]();
          } finally {
            if (_0x4e902b) throw _0x5dab29;
          }
        }
        return _0xe5659c;
      }
      return function (_0x4fb6c6, _0x213bc2) {
        if (Array["isArray"](_0x4fb6c6)) return _0x4fb6c6;
        if (Symbol["iterator"] in Object(_0x4fb6c6)) return _0x544d5d(_0x4fb6c6, _0x213bc2);
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
      };
    }(),
    _0x1b29b8 = _0x4bd6cd(2),
    _0x3ddb32 = _0x4bd6cd(1),
    _0x34ccbb = _0x4bd6cd(47),
    _0x2aa57d = _0x4bd6cd(3),
    _0x148314 = _0x2aa57d["WIDTH_LIMIT"],
    _0x5002c7 = _0x2aa57d["RUN_ENV"],
    _0x289ad0 = _0x2aa57d["MAX_VERIFICATION"],
    _0x1ee80d = _0x4bd6cd(10),
    _0x4af8c1 = _0x1ee80d["isPlainObject"],
    _0x29f082 = _0x4bd6cd(21),
    _0x4c405d = {
      "apiVersion": 1,
      "captchaId": "",
      "element": null,
      "appendTo": null,
      "mode": _0x1b29b8["isMobile"] ? "popup" : "float",
      "size": "small",
      "protocol": window["location"]["protocol"]["replace"](":", ""),
      "lang": "zh-CN",
      "width": "auto",
      "ipv6": !1,
      "enableClose": !1,
      "hideCloseBtn": !1,
      "disableMaskClose": !1,
      "enableAutoFocus": !1,
      "disableFocusVisible": !1,
      "refreshInterval": 300,
      "customStyles": {
        "imagePanel": {
          "align": "top",
          "borderRadius": "2px"
        },
        "controlBar": {
          "height": "40px",
          "borderRadius": "2px"
        },
        "gap": "15px",
        "icon": {
          "intellisenseLogo": "",
          "slider": ""
        },
        "primaryColor": ""
      },
      "customTexts": {},
      "feedbackEnable": !0,
      "runEnv": _0x5002c7["WEB"],
      "group": "",
      "scene": "",
      "maxVerification": _0x289ad0,
      "disableValidateInput": !1
    },
    _0xe8a4b4 = _0x462fe2(_0x148314, 1),
    _0x2d19d6 = _0xe8a4b4[0],
    _0x38f599 = {
      "en": "en-US",
      "iw": "he",
      "nb": "no",
      "in": "id"
    };
  _0x729838["exports"] = _0xa91295;
}, function (_0x4bd19c, _0xb267d3) {
  _0x4bd19c["exports"] = function (_0x4b4bb3) {
    var _0x55af0f = {
      "\\": "-",
      "/": "_",
      "+": "."
    };
    return _0x4b4bb3["replace"](/[\\\/+]/g, function (_0x5640f1) {
      return _0x55af0f[_0x5640f1];
    });
  };
}, function (_0x246bf0, _0x702384, _0x38c939) {
  function _0x2072d2() {
    _0x1e7621 = _0x7f4792["length"] = 0, _0x14e6cc = {}, _0x5e75ea = _0x5e4b83 = !1;
  }
  function _0x228327() {
    _0x5e4b83 = !0;
    var _0x3f379d = void 0,
      _0x2e4cc2 = void 0;
    for (_0x7f4792["sort"](function (_0x4798a0, _0x106c50) {
      return _0x4798a0["id"] - _0x106c50["id"];
    }), _0x1e7621 = 0; _0x1e7621 < _0x7f4792["length"]; _0x1e7621++) _0x3f379d = _0x7f4792[_0x1e7621], _0x2e4cc2 = _0x3f379d["instance"], _0x14e6cc[_0x3f379d["id"]] = null, _0x2e4cc2["_isMounted"] && _0x2e4cc2["render"](_0x3f379d["data"]);
    var _0xa8938c = _0x7f4792["slice"]();
    _0x2072d2(), _0x8f5385(_0xa8938c);
  }
  function _0x8f5385(_0x451a3d) {
    for (var _0x6c1e2a = _0x451a3d["length"]; _0x6c1e2a--;) {
      var _0x4eb3a0 = _0x451a3d[_0x6c1e2a],
        _0x1d29c3 = _0x4eb3a0["instance"];
      _0x1d29c3["_updater"] === _0x4eb3a0 && _0x1d29c3["_isMounted"] && (_0x4eb3a0["data"] = {});
    }
  }
  function _0x7a6dc7(_0x1745cf) {
    var _0x156517 = _0x1745cf["id"];
    if (null == _0x14e6cc[_0x156517]) {
      if (_0x14e6cc[_0x156517] = !0, _0x5e4b83) {
        for (var _0x254663 = _0x7f4792["length"] - 1; _0x254663 > _0x1e7621 && _0x7f4792[_0x254663]["id"] > _0x1745cf["id"];) _0x254663--;
        _0x7f4792["splice"](_0x254663 + 1, 0, _0x1745cf);
      } else _0x7f4792["push"](_0x1745cf);
      _0x5e75ea || (_0x5e75ea = !0, _0x4b9182(_0x228327));
    }
  }
  var _0x18b9fa = _0x38c939(10),
    _0x4b9182 = _0x18b9fa["nextTick"],
    _0x5e75ea = !1,
    _0x5e4b83 = !1,
    _0x1e7621 = 0,
    _0x14e6cc = {},
    _0x7f4792 = [];
  _0x246bf0["exports"] = _0x7a6dc7;
}, function (_0x1a218a, _0x3d4bed, _0x116e96) {
  var _0x408a39 = _0x116e96(10),
    _0x20163d = _0x408a39["lifeCycleHooks"];
  _0x1a218a["exports"] = function () {
    var _0x481c6a = arguments["length"] > 0 && void 0 !== arguments[0] ? arguments[0] : {},
      _0x3a482e = arguments["length"] > 1 && void 0 !== arguments[1] ? arguments[1] : {},
      _0x264445 = {},
      _0x27e57b = _0x3a482e["el"] || _0x481c6a["el"],
      _0x11ac0a = _0x3a482e["template"] || _0x481c6a["template"],
      _0x385e1f = _0x481c6a["abstract"],
      _0x1f06b2 = _0x3a482e["components"] || _0x481c6a["components"],
      _0x369bea = _0x3a482e["on"] || _0x481c6a["on"],
      _0x1a6544 = _0x3a482e["render"] || _0x481c6a["render"],
      _0x571b0d = _0x481c6a["props"],
      _0x5e34ec = _0x3a482e["propsData"],
      _0x12247b = _0x3a482e["data"] || _0x481c6a["data"],
      _0x12dda6 = _0x481c6a["methods"] || _0x3a482e["methods"],
      _0x1cf714 = _0x481c6a["watch"] || _0x3a482e["watch"];
    _0x27e57b && (_0x264445["el"] = _0x27e57b), _0x11ac0a && (_0x264445["template"] = _0x11ac0a), _0x385e1f && (_0x264445["abstract"] = !!_0x385e1f), _0x1f06b2 && (_0x264445["components"] = _0x1f06b2), _0x369bea && (_0x264445["on"] = Object["assign"]({}, _0x481c6a["on"], _0x3a482e["on"])), _0x1a6544 && (_0x264445["render"] = _0x1a6544), _0x571b0d && (_0x264445["props"] = _0x571b0d), _0x5e34ec && (_0x264445["propsData"] = _0x5e34ec), _0x12247b && (_0x264445["data"] = _0x12247b), _0x12dda6 && (_0x264445["methods"] = Object["assign"]({}, _0x481c6a["methods"], _0x3a482e["methods"])), _0x1cf714 && (_0x264445["watch"] = Object["assign"]({}, _0x481c6a["watch"], _0x3a482e["watch"]));
    var _0x1de483 = function (_0x14bc30, _0x4163e3) {
      var _0x47d051 = [];
      return _0x14bc30 && (_0x47d051 = _0x47d051["concat"](_0x14bc30)), _0x4163e3 && (_0x47d051 = _0x47d051["concat"](_0x4163e3)), _0x47d051;
    };
    return _0x20163d["map"](function (_0x400609) {
      _0x264445[_0x400609] = _0x1de483(_0x481c6a[_0x400609], _0x3a482e[_0x400609]);
    }), _0x264445 = Object["assign"]({}, _0x3a482e, _0x264445);
  };
}, function (_0x5623b5, _0x4138f5, _0x20750a) {
  function _0x42651e() {
    var _0x18c887 = arguments["length"] > 0 && void 0 !== arguments[0] ? arguments[0] : "",
      _0x2e131f = arguments[1];
    return this instanceof _0x42651e ? (this["_originalTemplate"] = _0x18c887, void (this["_composedStr"] = _0x2e131f ? _0x332df0["template"](_0x18c887, _0x2e131f) : _0x18c887)) : new _0x42651e(_0x18c887, _0x2e131f);
  }
  var _0x332df0 = _0x20750a(1),
    _0x4ce383 = _0x20750a(10),
    _0x5e8758 = _0x4ce383["getDocFragmentRegex"];
  _0x42651e["prototype"]["compose"] = function (_0x4197dd, _0x47e16c, _0x58723d) {
    var _0x29fc4f = _0x5e8758(_0x4197dd),
      _0x4dcf53 = _0x332df0["template"](_0x47e16c, _0x58723d);
    return this["_composedStr"] = this["_composedStr"]["replace"](_0x29fc4f, _0x4dcf53), this;
  }, _0x42651e["prototype"]["toString"] = function () {
    return this["_composedStr"];
  }, _0x42651e["prototype"]["reset"] = function (_0x2fe691) {
    return this["_composedStr"] = _0x332df0["template"](this["_originalTemplate"], _0x2fe691), this;
  }, _0x5623b5["exports"] = _0x42651e;
}, function (_0x593b67, _0x1a2652, _0x348cc4) {
  var _0x39e862 = function () {
      function _0x2ef5e5(_0x10d118, _0x3e1d17) {
        var _0x2762ec = [],
          _0x28412d = !0,
          _0x31a42e = !1,
          _0x4dd92d = void 0;
        try {
          for (var _0x5e387a, _0x1706cf = _0x10d118[Symbol["iterator"]](); !(_0x28412d = (_0x5e387a = _0x1706cf["next"]())["done"]) && (_0x2762ec["push"](_0x5e387a["value"]), !_0x3e1d17 || _0x2762ec["length"] !== _0x3e1d17); _0x28412d = !0);
        } catch (_0x227919) {
          _0x31a42e = !0, _0x4dd92d = _0x227919;
        } finally {
          try {
            !_0x28412d && _0x1706cf["return"] && _0x1706cf["return"]();
          } finally {
            if (_0x31a42e) throw _0x4dd92d;
          }
        }
        return _0x2762ec;
      }
      return function (_0x43fa7d, _0x50d544) {
        if (Array["isArray"](_0x43fa7d)) return _0x43fa7d;
        if (Symbol["iterator"] in Object(_0x43fa7d)) return _0x2ef5e5(_0x43fa7d, _0x50d544);
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
      };
    }(),
    _0x22c858 = _0x348cc4(2),
    _0xc9bc73 = _0x348cc4(18),
    _0x3405e9 = _0xc9bc73({
      "initialize": function (_0x3458f7) {
        var _0x4689aa = this["nativeEvent"] = _0x3458f7["nativeEvent"];
        this["target"] = _0x4689aa["target"], this["currentTarget"] = _0x3458f7["currentTarget"], this["pageX"] = _0x4689aa["pageX"], this["pageY"] = _0x4689aa["pageY"], this["clientX"] = _0x4689aa["clientX"], this["clientY"] = _0x4689aa["clientY"], this["defaultPrevented"] = !1, this["cancelBubble"] = !1, this["cancelImmediateBubble"] = !1, this["type"] = _0x4689aa["type"];
      },
      "preventDefault": function () {
        this["defaultPrevented"] = !0;
      },
      "stopPropagation": function () {
        this["cancelBubble"] = !0;
      },
      "stopImmediatePropagation": function () {
        this["cancelImmediateBubble"] = !0;
      }
    }),
    _0x440f4c = _0xc9bc73({
      "initialize": function (_0x3fb55d) {
        this["$el"] = _0x3fb55d["$el"], this["initEvents"](_0x3fb55d["events"]);
      },
      "initEvents": function (_0x5853b6) {
        var _0x2dcf14 = this;
        this["_captureEvents"] = {}, this["_bubbleEvents"] = {}, this["_delegationHandlers"] = {};
        var _0x442517 = this["normalizeEvents"](_0x5853b6);
        Object["keys"](_0x442517)["map"](function (_0x5fb77e) {
          var _0x502351 = _0x442517[_0x5fb77e];
          _0x502351["map"](function (_0x3cc204) {
            _0x2dcf14["delegate"](_0x5fb77e, _0x3cc204["selector"], _0x3cc204["handler"]);
          });
          var _0x1ad680 = _0x2dcf14["_delegationHandlers"][_0x5fb77e] = function (_0x25f9cf) {
            var _0x3c7d4f = _0x25f9cf["target"],
              _0x44151f = _0x3c7d4f,
              _0x11620f = !1,
              _0x27601 = function () {
                var _0x33688b = null,
                  _0xaef16d = _0x2dcf14["_bubbleEvents"][_0x5fb77e];
                Object["keys"](_0xaef16d)["map"](function (_0x11e0b4) {
                  var _0x2e0571 = _0x11e0b4["match"](/^([.#])([^.#\s]+)$/) || [],
                    _0x36004b = _0x2e0571[1],
                    _0x3f22c3 = _0x2e0571[2];
                  if ("." === _0x36004b && ~_0x44151f["className"]["indexOf"](_0x3f22c3) || "#" === _0x36004b && _0x44151f["id"] === _0x3f22c3) {
                    _0x33688b = _0x44151f;
                    for (var _0x24aba2 = _0xaef16d[_0x11e0b4], _0x4fbca0 = 0; _0x4fbca0 < _0x24aba2["length"]; _0x4fbca0++) {
                      var _0x23b9d4 = _0x24aba2[_0x4fbca0],
                        _0x1c1b6b = new _0x3405e9({
                          "nativeEvent": _0x25f9cf,
                          "currentTarget": _0x33688b
                        });
                      if (_0x23b9d4["call"](_0x33688b, _0x1c1b6b), _0x1c1b6b["defaultPrevented"] && _0x25f9cf["preventDefault"](), _0x1c1b6b["cancelImmediateBubble"]) {
                        _0x11620f = !0;
                        break;
                      }
                    }
                    _0x1c1b6b["cancelBubble"] && (_0x11620f = !0);
                  }
                }), _0x44151f = _0x44151f["parentElement"], _0x44151f === _0x2dcf14["$el"] && (_0x11620f = !0);
              };
            do _0x27601(); while (_0x2dcf14["$el"] && !_0x11620f && _0x44151f);
          };
          _0x22c858["on"](_0x2dcf14["$el"], _0x5fb77e, _0x1ad680);
        });
      },
      "off": function () {
        var _0x4476ec = this["_delegationHandlers"];
        for (var _0x4770f9 in _0x4476ec) _0x22c858["off"](this["$el"], _0x4770f9, _0x4476ec[_0x4770f9]);
        this["_captureEvents"] = {}, this["_bubbleEvents"] = {}, this["_delegationHandlers"] = {}, this["$el"] = null;
      },
      "delegate": function (_0x54d26d, _0x196ec0, _0xa1dabe) {
        this["_bubbleEvents"][_0x54d26d] || (this["_bubbleEvents"][_0x54d26d] = {});
        var _0x5ce717 = this["_bubbleEvents"][_0x54d26d];
        _0x5ce717[_0x196ec0] || (_0x5ce717[_0x196ec0] = []);
        var _0x462aef = _0x5ce717[_0x196ec0];
        return _0x462aef["push"](_0xa1dabe), function () {
          var _0x571002 = _0x462aef["indexOf"](_0xa1dabe);
          _0x571002 > -1 && _0x462aef["splice"](_0x571002, 1);
        };
      },
      "normalizeEvents": function (_0x2a126a) {
        var _0x1f0871 = {};
        for (var _0x12b0de in _0x2a126a) if (_0x2a126a["hasOwnProperty"](_0x12b0de)) {
          var _0x198aa3 = _0x12b0de["split"](/\s+/),
            _0x5277e1 = _0x39e862(_0x198aa3, 2),
            _0x4dfddc = _0x5277e1[0],
            _0xe6024e = _0x5277e1[1];
          _0x1f0871[_0xe6024e] || (_0x1f0871[_0xe6024e] = []);
          var _0x2083a1 = _0x1f0871[_0xe6024e];
          _0x2083a1["push"]({
            "selector": _0x4dfddc,
            "handler": _0x2a126a[_0x12b0de]
          });
        }
        return _0x1f0871;
      }
    });
  _0x593b67["exports"] = _0x440f4c;
}, function (_0x18fe67, _0x4b197a) {
  function _0xc72466() {}
  function _0x4fd6a3(_0x2a2ba7, _0x53261c, _0x5a24a2, _0x341f9f) {
    function _0x43c3d8() {
      _0x1fa93f["parentNode"] && _0x1fa93f["parentNode"]["removeChild"](_0x1fa93f), window[_0x26df80] = _0xc72466, _0x17bc1f && clearTimeout(_0x17bc1f);
    }
    function _0x23e2f2() {
      window[_0x26df80] && _0x43c3d8();
    }
    function _0x2b7325(_0x21a780) {
      var _0x1b44e1 = [];
      for (var _0x5b17c4 in _0x21a780) _0x21a780["hasOwnProperty"](_0x5b17c4) && _0x1b44e1["push"](_0x799f4c(_0x5b17c4) + "=" + _0x799f4c(_0x21a780[_0x5b17c4]));
      return _0x1b44e1["join"]("&");
    }
    "object" === ("undefined" == typeof _0x5a24a2 ? "undefined" : _0x265680(_0x5a24a2)) && (_0x341f9f = _0x5a24a2, _0x5a24a2 = null), "function" == typeof _0x53261c && (_0x5a24a2 = _0x53261c, _0x53261c = null), _0x341f9f || (_0x341f9f = {});
    var _0x1fa93f,
      _0x17bc1f,
      _0x43d8e4 = Math["random"]()["toString"](36)["slice"](2, 9),
      _0xe340b7 = _0x341f9f["prefix"] || "__JSONP",
      _0x26df80 = _0x341f9f["name"] || _0xe340b7 + ("_" + _0x43d8e4) + ("_" + _0x5a301b++),
      _0x4dfa91 = _0x341f9f["param"] || "callback",
      _0x5214bd = _0x341f9f["timeout"] || 6000,
      _0x799f4c = window["encodeURIComponent"],
      _0x389bec = document["getElementsByTagName"]("script")[0] || document["head"];
    return _0x5214bd && (_0x17bc1f = setTimeout(function () {
      _0x43c3d8(), _0x5a24a2 && _0x5a24a2(new Error("Timeout"));
    }, _0x5214bd)), window[_0x26df80] = function (_0x326243) {
      _0x43c3d8(), _0x5a24a2 && _0x5a24a2(null, _0x326243, {
        "url": _0x2a2ba7
      });
    }, _0x53261c && (_0x2a2ba7 = _0x2a2ba7["split"]("?")[0]), _0x2a2ba7 += (~_0x2a2ba7["indexOf"]("?") ? "&" : "?") + _0x2b7325(_0x53261c) + "&" + _0x4dfa91 + "=" + _0x799f4c(_0x26df80), _0x2a2ba7 = _0x2a2ba7["replace"]("?&", "?"), _0x1fa93f = document["createElement"]("script"), _0x1fa93f["type"] = "text/javascript", _0x1fa93f["src"] = _0x2a2ba7, _0x389bec["parentNode"]["insertBefore"](_0x1fa93f, _0x389bec), _0x23e2f2;
  }
  var _0x265680 = "function" == typeof Symbol && "symbol" == typeof Symbol["iterator"] ? function (_0x63f4e2) {
      return typeof _0x63f4e2;
    } : function (_0x1c3444) {
      return _0x1c3444 && "function" == typeof Symbol && _0x1c3444["constructor"] === Symbol && _0x1c3444 !== Symbol["prototype"] ? "symbol" : typeof _0x1c3444;
    },
    _0x5a301b = 0;
  _0x18fe67["exports"] = _0x4fd6a3;
}, function (_0x283de9, _0x446edb) {
  function _0x243338(_0x560966) {
    if (!_0x560966) return {};
    var _0x2c99ce = document["createElement"]("a");
    return _0x2c99ce["href"] = _0x560966, {
      "source": _0x560966,
      "protocol": _0x2c99ce["protocol"]["replace"](":", ""),
      "host": _0x2c99ce["hostname"],
      "port": _0x2c99ce["port"],
      "query": _0x2c99ce["search"],
      "hash": _0x2c99ce["hash"]["replace"]("#", ""),
      "path": _0x2c99ce["pathname"]["replace"](/^([^\/])/, "/$1"),
      "segments": _0x2c99ce["pathname"]["replace"](/^\//, "")["split"]("/")
    };
  }
  _0x283de9["exports"] = _0x243338;
}, function (_0x228f72, _0x56e52b, _0x5e4adf) {
  var _0x9f3ce2 = _0x5e4adf(18),
    _0x209469 = _0x5e4adf(1),
    _0x4719de = _0x5e4adf(11),
    _0x102dd6 = _0x9f3ce2({
      "initialize": function (_0x1ed547) {
        this["state"] = _0x1ed547["state"], this["_committing"] = !1, this["_subscribers"] = [];
        var _0x3f287f = this,
          _0x88ab8e = this["dispatch"],
          _0x4a826a = this["commit"];
        this["dispatch"] = function (_0x5a7f39, _0x291a8b, _0x321111) {
          return _0x88ab8e["call"](_0x3f287f, _0x5a7f39, _0x291a8b, _0x321111);
        }, this["commit"] = function (_0x4a272e, _0x12899b) {
          return _0x4a826a["call"](_0x3f287f, _0x4a272e, _0x12899b);
        }, this["registerMutations"](_0x1ed547["mutations"]), this["registerActions"](_0x1ed547["actions"]);
      },
      "registerMutations": function (_0x49bfb5) {
        this["_mutations"] = Object["assign"](this["_mutations"] || {}, _0x49bfb5);
      },
      "registerActions": function (_0xab535e) {
        this["_actions"] = Object["assign"](this["_actions"] || {}, _0xab535e);
      },
      "commit": function (_0x572715, _0x14c807) {
        var _0x115525 = this,
          _0x6c6cbc = {
            "type": _0x572715,
            "payload": _0x14c807
          },
          _0x5f14f0 = this["_mutations"][_0x572715];
        return _0x5f14f0 ? (this["_withCommit"](function () {
          _0x5f14f0(_0x115525["state"], _0x14c807);
        }), void this["_subscribers"]["map"](function (_0x5a2ff3) {
          return _0x5a2ff3(_0x6c6cbc, _0x115525["state"]);
        })) : void _0x209469["error"]("[Store] unknown mutation type: " + _0x572715);
      },
      "_withCommit": function (_0x3f9133) {
        var _0x55e307 = this["_committing"];
        this["_committing"] = !0, _0x3f9133(), this["_committing"] = _0x55e307;
      },
      "dispatch": function (_0x173a0d, _0x5a5308, _0x31f2b3) {
        var _0x1736b1 = this["_actions"][_0x173a0d];
        if (!_0x1736b1) return void _0x209469["error"]("[Store] unknown action type: " + _0x173a0d);
        var _0x2c7698 = {
          "state": this["state"],
          "commit": this["commit"],
          "dispatch": this["dispatch"]
        };
        return _0x4719de["resolve"](_0x1736b1(_0x2c7698, _0x5a5308, _0x31f2b3));
      },
      "subscribe": function (_0x55e23d) {
        var _0x13e0b1 = this["_subscribers"];
        return _0x13e0b1["indexOf"](_0x55e23d) < 0 && _0x13e0b1["push"](_0x55e23d), function () {
          var _0x1494ff = _0x13e0b1["indexOf"](_0x55e23d);
          _0x1494ff > -1 && _0x13e0b1["splice"](_0x1494ff, 1);
        };
      },
      "replaceState": function () {
        var _0x3e7474 = arguments["length"] > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        this["state"] = _0x3e7474;
      }
    });
  _0x228f72["exports"] = _0x102dd6;
}, function (_0x1d7f79, _0x12e983) {
  _0x1d7f79["exports"] = {
    "zh-CN": {
      "loading": "\u52A0\u8F7D\u4E2D...",
      "loadfail": "\u52A0\u8F7D\u5931\u8D25",
      "verifySuccess": "\u9A8C\u8BC1\u6210\u529F",
      "verifyError": "\u9A8C\u8BC1\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5",
      "verifyOutOfLimit": "\u5931\u8D25\u8FC7\u591A\uFF0C\u70B9\u6B64\u91CD\u8BD5",
      "clickButton": "\u70B9\u6B64\u8FDB\u884C\u9A8C\u8BC1",
      "clickInTurn": "\u8BF7\u4F9D\u6B21\u70B9\u51FB",
      "clickWordInTurn": "\u8BF7\u6309\u8BED\u5E8F\u4F9D\u6B21\u70B9\u51FB\u6587\u5B57",
      "slideTip": "\u5411\u53F3\u62D6\u52A8\u6ED1\u5757\u586B\u5145\u62FC\u56FE",
      "inferenceTip": "\u62D6\u52A8\u4EA4\u63622\u4E2A\u56FE\u5757\u590D\u539F\u56FE\u7247",
      "waitForSMS": "\u7B49\u5F85\u77ED\u4FE1\u9A8C\u8BC1\uFF0C\u5269\u4F59",
      "popupTitle": "\u8BF7\u5B8C\u6210\u5B89\u5168\u9A8C\u8BC1",
      "refresh": "\u5237\u65B0",
      "feedback": "\u63D0\u4EA4\u4F7F\u7528\u95EE\u9898\u53CD\u9988",
      "switchToVoice": "\u5207\u6362\u81F3\u8BED\u97F3\u9A8C\u8BC1\u7801",
      "playVoice": "\u64AD\u653E\u8BED\u97F3\u9A8C\u8BC1\u7801",
      "back": "\u8FD4\u56DE",
      "enterCode": "\u8BF7\u8F93\u5165\u542C\u5230\u7684\u5185\u5BB9",
      "check": "\u9A8C\u8BC1",
      "close": "\u5173\u95ED",
      "notSupportVoice": "\u60A8\u7684\u6D4F\u89C8\u5668\u7248\u672C\u8FC7\u4F4E\uFF0C\u6682\u4E0D\u652F\u6301\u8BED\u97F3\u9A8C\u8BC1\u7801",
      "intellisense": {
        "normal": "\u70B9\u51FB\u5B8C\u6210\u9A8C\u8BC1",
        "checking": "\u5B89\u5168\u68C0\u6D4B\u4E2D",
        "loading": "\u6B63\u5728\u52A0\u8F7D\u9A8C\u8BC1",
        "loadfail": "\u52A0\u8F7D\u5931\u8D25",
        "loaddone": "\u8BF7\u5B8C\u6210\u5B89\u5168\u9A8C\u8BC1",
        "longtap": "\u53CC\u51FB\u540E\u957F\u63090.5\u79D2\u5B8C\u6210\u9A8C\u8BC1"
      },
      "sms": {
        "scanQrToSMS": "\u626B\u63CF\u4E8C\u7EF4\u7801\u53D1\u9001\u9A8C\u8BC1\u77ED\u4FE1",
        "noScanQr": "\u65E0\u6CD5\u626B\u63CF\u4E8C\u7EF4\u7801",
        "manualSMS": "\u624B\u52A8\u53D1\u9001\u9A8C\u8BC1\u77ED\u4FE1",
        "clickToSMS": "\u70B9\u51FB\u6309\u94AE\u53D1\u9001\u9A8C\u8BC1\u77ED\u4FE1",
        "editSMS": "\u7F16\u8F91\u77ED\u4FE1",
        "sendSMSTo": "\u53D1\u9001\u81F3",
        "or": "\u6216",
        "toSMS": "\u53BB\u53D1\u9001\u9A8C\u8BC1\u77ED\u4FE1",
        "cannotJump": "\u65E0\u6CD5\u8DF3\u8F6C"
      }
    },
    "en-US": {
      "loading": "loading...",
      "loadfail": "Load failed",
      "verifySuccess": "verify success",
      "verifyError": "verify failed",
      "verifyOutOfLimit": "Verify failed. Please retry",
      "clickButton": "Click here to verify",
      "clickInTurn": "click in turn",
      "clickWordInTurn": "Please click on the text in order",
      "slideTip": "Slide to complete the image",
      "inferenceTip": "swap 2 tiles to restore the image",
      "waitForSMS": "waiting for SMS\uFF0Cremaining",
      "popupTitle": "Please complete verification",
      "refresh": "Refresh",
      "feedback": "Submit feedback on usage problems",
      "switchToVoice": "Switch to voice verification",
      "playVoice": "Play voice verification code",
      "back": "return",
      "enterCode": "Enter the verification code you hear",
      "check": "verification",
      "close": "close",
      "notSupportVoice": "Your browser version is too low to support voice verification codes",
      "intellisense": {
        "normal": "Click the button to verify",
        "checking": "verifying...",
        "loading": "loading...",
        "loadfail": "Load failed",
        "loaddone": "Please complete verification",
        "longtap": "Double click and press for 0.5 seconds to complete the verification"
      },
      "sms": {
        "scanQrToSMS": "Scan QR code to send verification SMS",
        "noScanQr": "Unable to scan QR code",
        "manualSMS": "send a verification SMS manually",
        "clickToSMS": "Click the button to send verification SMS",
        "editSMS": "Edit SMS",
        "sendSMSTo": "Send to",
        "or": "or",
        "toSMS": "send a verification SMS",
        "cannotJump": "cannot jump to SMS"
      }
    },
    "en-GB": {
      "loading": "loading...",
      "loadfail": "Load failed",
      "verifySuccess": "verify success",
      "verifyError": "verify failed",
      "verifyOutOfLimit": "Verify failed. Please retry",
      "clickButton": "Click here to verify",
      "clickInTurn": "click in turn",
      "clickWordInTurn": "Please click on the text in order",
      "slideTip": "Drag the pieces atop one another",
      "inferenceTip": "swap 2 tiles to restore the image",
      "waitForSMS": "waiting for SMS\uFF0Cremaining",
      "popupTitle": "Please complete verification",
      "refresh": "Refresh",
      "feedback": "Submit feedback on usage problems",
      "switchToVoice": "Switch to voice verification",
      "playVoice": "Play voice verification code",
      "back": "return",
      "enterCode": "Enter the verification code you hear",
      "check": "verification",
      "close": "close",
      "notSupportVoice": "Your browser version is too low to support voice verification codes",
      "intellisense": {
        "normal": "Click the button to verify",
        "checking": "verifying...",
        "loading": "loading...",
        "loadfail": "Load failed",
        "loaddone": "Please complete verification",
        "longtap": "Double click and press for 0.5 seconds to complete the verification"
      },
      "sms": {
        "scanQrToSMS": "Scan QR code to send verification SMS",
        "noScanQr": "Unable to scan QR code",
        "manualSMS": "send a verification SMS manually",
        "clickToSMS": "Click the button to send verification SMS",
        "editSMS": "Edit SMS",
        "sendSMSTo": "Send to",
        "or": "or",
        "toSMS": "send a verification SMS",
        "cannotJump": "cannot jump to SMS"
      }
    },
    "zh-TW": {
      "loading": "\u52A0\u8F09\u4E2D...",
      "loadfail": "\u52A0\u8F09\u5931\u6557",
      "verifySuccess": "\u9A57\u8B49\u6210\u529F",
      "verifyError": "\u9A57\u8B49\u5931\u6557\uFF0C\u8ACB\u91CD\u8A66",
      "verifyOutOfLimit": "\u5931\u6557\u904E\u591A\uFF0C\u9EDE\u6B64\u91CD\u8A66",
      "clickButton": "\u9EDE\u6B64\u9032\u884C\u9A57\u8B49",
      "clickInTurn": "\u8ACB\u4F9D\u6B21\u9EDE\u64CA",
      "clickWordInTurn": "\u8ACB\u6309\u8A9E\u5E8F\u4F9D\u6B21\u9EDE\u64CA\u6587\u5B57",
      "slideTip": "\u5411\u53F3\u62D6\u52D5\u6ED1\u584A\u586B\u5145\u62FC\u5716",
      "inferenceTip": "\u62D6\u52D5\u4EA4\u63DB2\u500B\u5716\u584A\u6062\u5FA9\u5716\u7247",
      "waitForSMS": "\u7B49\u5F85\u77ED\u4FE1\u9A57\u8B49\uFF0C\u5269\u9918",
      "popupTitle": "\u8ACB\u5B8C\u6210\u5B89\u5168\u9A57\u8B49",
      "refresh": "\u5237\u65B0",
      "feedback": "\u63D0\u4EA4\u4F7F\u7528\u554F\u984C\u53CD\u994B",
      "switchToVoice": "\u5207\u63DB\u81F3\u8A9E\u97F3\u9A57\u8B49",
      "playVoice": "\u64AD\u653E\u8A9E\u8A00\u9A57\u8B49\u78BC",
      "back": "\u8FD4\u56DE",
      "enterCode": "\u8F38\u5165\u807D\u5230\u7684\u9A57\u8B49\u78BC",
      "check": "\u9A57\u8B49",
      "close": "\u95DC\u9589",
      "notSupportVoice": "\u60A8\u7684\u700F\u89BD\u5668\u7248\u672C\u904E\u4F4E\uFF0C\u66AB\u4E0D\u652F\u6301\u8A9E\u97F3\u9A57\u8B49\u78BC",
      "intellisense": {
        "normal": "\u9EDE\u64CA\u5B8C\u6210\u9A57\u8B49",
        "checking": "\u5B89\u5168\u6AA2\u6E2C\u4E2D",
        "loading": "\u6B63\u5728\u52A0\u8F09\u9A57\u8B49",
        "loadfail": "\u52A0\u8F09\u5931\u6557",
        "loaddone": "\u8ACB\u5B8C\u6210\u5B89\u5168\u9A57\u8B49",
        "longtap": "\u96D9\u64CA\u540E\u9577\u63090.5\u79D2\u5B8C\u6210\u9A57\u8B49"
      },
      "sms": {
        "scanQrToSMS": "\u6383\u63CF\u4E8C\u7DAD\u78BC\u767C\u9001\u9A57\u8B49\u77ED\u4FE1",
        "noScanQr": "\u7121\u6CD5\u6383\u63CF\u4E8C\u7DAD\u78BC",
        "manualSMS": "\u624B\u52D5\u767C\u9001\u9A57\u8B49\u77ED\u4FE1",
        "clickToSMS": "\u9EDE\u64CA\u6309\u9215\u767C\u9001\u9A57\u8B49\u77ED\u4FE1",
        "editSMS": "\u7DE8\u8F2F\u77ED\u4FE1",
        "sendSMSTo": "\u767C\u9001\u81F3",
        "or": "\u6216",
        "toSMS": "\u53BB\u767C\u9001\u9A57\u8B49\u77ED\u4FE1",
        "cannotJump": "\u7121\u6CD5\u8DF3\u8F49"
      }
    },
    "zh-HK": {
      "loading": "\u52A0\u8F09\u4E2D...",
      "loadfail": "\u52A0\u8F09\u5931\u6557",
      "verifySuccess": "\u9A57\u8B49\u6210\u529F",
      "verifyError": "\u9A57\u8B49\u5931\u6557\uFF0C\u8ACB\u91CD\u8A66",
      "verifyOutOfLimit": "\u5931\u6557\u904E\u591A\uFF0C\u9EDE\u6B64\u91CD\u8A66",
      "clickButton": "\u9EDE\u6B64\u9032\u884C\u9A57\u8B49",
      "clickInTurn": "\u8ACB\u4F9D\u6B21\u9EDE\u64CA",
      "clickWordInTurn": "\u8ACB\u6309\u8A9E\u5E8F\u4F9D\u6B21\u9EDE\u64CA\u6587\u5B57",
      "slideTip": "\u5411\u53F3\u62D6\u52D5\u6ED1\u584A\u586B\u5145\u62FC\u5716",
      "inferenceTip": "\u62D6\u52D5\u4EA4\u63DB2\u500B\u5716\u584A\u6062\u5FA9\u5716\u7247",
      "waitForSMS": "\u7B49\u5F85\u77ED\u4FE1\u9A57\u8B49\uFF0C\u5269\u9918",
      "popupTitle": "\u8ACB\u5B8C\u6210\u5B89\u5168\u9A57\u8B49",
      "refresh": "\u5237\u65B0",
      "feedback": "\u63D0\u4EA4\u4F7F\u7528\u554F\u984C\u53CD\u994B",
      "switchToVoice": "\u5207\u63DB\u81F3\u8A9E\u97F3\u9A57\u8B49",
      "playVoice": "\u64AD\u653E\u8A9E\u8A00\u9A57\u8B49\u78BC",
      "back": "\u8FD4\u56DE",
      "enterCode": "\u8F38\u5165\u807D\u5230\u7684\u9A57\u8B49\u78BC",
      "check": "\u9A57\u8B49",
      "close": "\u95DC\u9589",
      "notSupportVoice": "\u60A8\u7684\u700F\u89BD\u5668\u7248\u672C\u904E\u4F4E\uFF0C\u66AB\u4E0D\u652F\u6301\u8A9E\u97F3\u9A57\u8B49\u78BC",
      "intellisense": {
        "normal": "\u9EDE\u64CA\u5B8C\u6210\u9A57\u8B49",
        "checking": "\u5B89\u5168\u6AA2\u6E2C\u4E2D",
        "loading": "\u6B63\u5728\u52A0\u8F09\u9A57\u8B49",
        "loadfail": "\u52A0\u8F09\u5931\u6557",
        "loaddone": "\u8ACB\u5B8C\u6210\u5B89\u5168\u9A57\u8B49",
        "longtap": "\u96D9\u64CA\u540E\u9577\u63090.5\u79D2\u5B8C\u6210\u9A57\u8B49"
      },
      "sms": {
        "scanQrToSMS": "\u6383\u63CF\u4E8C\u7DAD\u78BC\u767C\u9001\u9A57\u8B49\u77ED\u4FE1",
        "noScanQr": "\u7121\u6CD5\u6383\u63CF\u4E8C\u7DAD\u78BC",
        "manualSMS": "\u624B\u52D5\u767C\u9001\u9A57\u8B49\u77ED\u4FE1",
        "clickToSMS": "\u9EDE\u64CA\u6309\u9215\u767C\u9001\u9A57\u8B49\u77ED\u4FE1",
        "editSMS": "\u7DE8\u8F2F\u77ED\u4FE1",
        "sendSMSTo": "\u767C\u9001\u81F3",
        "or": "\u6216",
        "toSMS": "\u53BB\u767C\u9001\u9A57\u8B49\u77ED\u4FE1",
        "cannotJump": "\u7121\u6CD5\u8DF3\u8F49"
      }
    },
    "ja": {
      "loading": "\u30ED\u30FC\u30C7\u30A3\u30F3\u30B0\u4E2D...",
      "loadfail": "\u5931\u6557\u3092\u53CE\u3081\u308B",
      "verifySuccess": "\u691C\u8A3C\u306E\u6210\u529F",
      "verifyError": "\u5931\u6557\u3057\u307E\u3057\u305F",
      "verifyOutOfLimit": "\u5931\u6557\u3001\u518D\u8A66\u884C\u3092\u30AF\u30EA\u30C3\u30AF",
      "clickButton": "\u78BA\u8A8D\u3059\u308B\u306B\u306F\u3053\u3053\u3092\u30AF\u30EA\u30C3\u30AF",
      "clickInTurn": "\u4EE5\u4E0B\u306E\u7D75\u3092\u4E0A\u306E\u753B\u50CF\u3067\u5DE6\u304B\u3089\u30BF\u30C3\u30D7",
      "clickWordInTurn": "\u9806\u756A\u306B\u30C6\u30AD\u30B9\u30C8\u3092\u30AF\u30EA\u30C3\u30AF\u3057\u3066\u304F\u3060\u3055\u3044",
      "slideTip": "\u53F3\u306B\u30C9\u30E9\u30C3\u30B0",
      "inferenceTip": "2\u3064\u306E\u30BF\u30A4\u30EB\u5FA9\u5143\u56F3\u3092\u4EA4\u63DB\u3059\u308B",
      "waitForSMS": "\u30E1\u30FC\u30EB\u306E\u691C\u8A3C\u3092\u5F85\u3063\u3066\u3001\u6B8B\u308A\u307E\u3059",
      "popupTitle": "\u5B89\u5168\u691C\u8A3C\u3092\u5B8C\u4E86\u3057\u3066\u304F\u3060\u3055\u3044",
      "refresh": "\u8A8D\u8A3C\u30B3\u30FC\u30C9\u3092\u66F4\u65B0",
      "feedback": "\u4F7F\u7528\u554F\u984C\u30D5\u30A3\u30FC\u30C9\u30D0\u30C3\u30AF\u3092\u63D0\u51FA\u3059\u308B",
      "switchToVoice": "\u97F3\u58F0\u78BA\u8A8D\u306B\u5207\u308A\u66FF\u3048\u307E\u3059",
      "playVoice": "\u97F3\u58F0\u78BA\u8A8D\u30B3\u30FC\u30C9\u3092\u518D\u751F\u3059\u308B",
      "back": "\u623B\u308B",
      "enterCode": "\u805E\u3044\u305F\u5185\u5BB9\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044",
      "check": "\u691C\u8A3C",
      "close": "\u30B7\u30E3\u30C3\u30C8\u30C0\u30A6\u30F3",
      "notSupportVoice": "\u304A\u4F7F\u3044\u306E\u30D6\u30E9\u30A6\u30B6\u306E\u30D0\u30FC\u30B8\u30E7\u30F3\u304C\u4F4E\u3059\u304E\u3066\u97F3\u58F0\u78BA\u8A8D\u30B3\u30FC\u30C9\u3092\u30B5\u30DD\u30FC\u30C8\u3067\u304D\u307E\u305B\u3093",
      "intellisense": {
        "normal": "\u30AF\u30EA\u30C3\u30AF\u3057\u3066\u691C\u8A3C\u3092\u5B8C\u4E86\u3059\u308B",
        "checking": "\u5B89\u5168\u8A3A\u65AD\u4E2D",
        "loading": "\u691C\u8A3C\u3092\u30ED\u30FC\u30C9\u3057\u3066\u3044\u308B",
        "loadfail": "\u5931\u6557\u3092\u53CE\u3081\u308B",
        "loaddone": "\u5B89\u5168\u691C\u8A3C\u3092\u5B8C\u4E86\u3057\u3066\u304F\u3060\u3055\u3044\u3002",
        "longtap": "\u30C0\u30D6\u30EB\u30AF\u30EA\u30C3\u30AF\u3057\u30660.5\u79D2\u3067\u691C\u8A3C\u3092\u5B8C\u4E86\u3057\u307E\u3059"
      },
      "sms": {
        "scanQrToSMS": "Scan QR code to send verification SMS",
        "noScanQr": "Unable to scan QR code",
        "manualSMS": "send a verification SMS manually",
        "clickToSMS": "Click the button to send verification SMS",
        "editSMS": "Edit SMS",
        "sendSMSTo": "Send to",
        "or": "or",
        "toSMS": "send a verification SMS",
        "cannotJump": "cannot jump to SMS"
      }
    },
    "ko": {
      "loading": "\uC801\uC7AC \uC911...",
      "loadfail": "\uC2E4\uD328\uB97C \uAC70\uB4ED\uD558\uB2E4",
      "verifySuccess": "\uAC80\uC99D\uC5D0 \uC131\uACF5\uD558\uB2E4",
      "verifyError": "\uAC80\uC99D \uC2E4\uD328, \uB2E4\uC2DC \uC2DC\uD5D8 \uD574 \uBCF4\uC138\uC694",
      "verifyOutOfLimit": "\uC2E4\uD328, \uB2E4\uC2DC \uC2DC\uB3C4\uB97C \uD074\uB9AD\uD558\uC2ED\uC2DC\uC624",
      "clickButton": "\uD655\uC778\uD558\uB824\uBA74 \uC5EC\uAE30\uB97C \uD074\uB9AD\uD558\uC2ED\uC2DC\uC624",
      "clickInTurn": "\uC21C\uC11C \uB300\uB85C \uD074\uB9AD \uD558\uC138\uC694",
      "clickWordInTurn": "\uC21C\uC11C\uB300\uB85C \uD14D\uC2A4\uD2B8\uB97C \uD074\uB9AD\uD558\uC2ED\uC2DC\uC624",
      "slideTip": "\uC624\uB978\uCABD\uC73C\uB85C \uB4DC\uB798\uADF8",
      "inferenceTip": "\uB450 \uD0C0\uC77C \uBCF5\uC6D0 \uB2E4\uC774\uC5B4\uADF8\uB7A8 \uAD50\uD658",
      "waitForSMS": "\uBB38\uC790 \uAC80\uC99D\uC744 \uAE30\uB2E4\uB9AC \uBA70 \uB0A8\uB2E4",
      "popupTitle": "\uC548\uC804 \uAC80\uC99D \uC644\uB8CC",
      "refresh": "\uC0C8\uB85C \uACE0\uCE58\uB2E4",
      "feedback": "\uC0AC\uC6A9 \uBB38\uC81C \uD53C\uB4DC\uBC31 \uC81C\uCD9C",
      "switchToVoice": "\uC74C\uC131 \uC778\uC99D\uC73C\uB85C \uC804\uD658",
      "playVoice": "\uC74C\uC131 \uC778\uC99D \uCF54\uB4DC \uC7AC\uC0DD",
      "back": "\uBC18\uD658",
      "enterCode": "\uB4E4\uB9AC\uB294 \uC778\uC99D \uCF54\uB4DC\uB97C \uC785\uB825\uD558\uC138\uC694",
      "check": "\uD655\uC778",
      "close": "\uC885\uB8CC",
      "notSupportVoice": "\uBE0C\uB77C\uC6B0\uC800 \uBC84\uC804\uC774 \uB108\uBB34 \uB0AE\uC544 \uC74C\uC131 \uC778\uC99D \uCF54\uB4DC\uB97C \uC9C0\uC6D0\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4",
      "intellisense": {
        "normal": "\uD074\uB9AD \uD558\uC5EC \uAC80\uC99D\uD558\uB2E4",
        "checking": "\uC548\uC804 \uAC80\uC0AC \uC911",
        "loading": "\uCD94\uAC00 \uAC80\uC99D\uC744\uD558\uACE0 \uC788\uB2E4",
        "loadfail": "\uC2E4\uD328\uB97C \uAC70\uB4ED\uD558\uB2E4",
        "loaddone": "\uC548\uC804 \uAC80\uC99D \uC644\uB8CC",
        "longtap": "\uB354 \uBE14 \uD074\uB9AD \uD6C4 \uAE38 \uAC8C 0.5 \uCD08 \uB20C \uB7EC \uAC80\uC99D \uC644\uB8CC"
      },
      "sms": {
        "scanQrToSMS": "Scan QR code to send verification SMS",
        "noScanQr": "Unable to scan QR code",
        "manualSMS": "send a verification SMS manually",
        "clickToSMS": "Click the button to send verification SMS",
        "editSMS": "Edit SMS",
        "sendSMSTo": "Send to",
        "or": "or",
        "toSMS": "send a verification SMS",
        "cannotJump": "cannot jump to SMS"
      }
    },
    "th": {
      "loading": "\u0E01\u0E33\u0E25\u0E31\u0E07\u0E42\u0E2B\u0E25\u0E14 ...",
      "loadfail": "\u0E44\u0E21\u0E48\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E42\u0E2B\u0E25\u0E14",
      "verifySuccess": "\u0E01\u0E32\u0E23\u0E22\u0E37\u0E19\u0E22\u0E31\u0E19\u0E17\u0E35\u0E48\u0E1B\u0E23\u0E30\u0E2A\u0E1A\u0E04\u0E27\u0E32\u0E21\u0E2A\u0E33\u0E40\u0E23\u0E47\u0E08",
      "verifyError": "\u0E01\u0E32\u0E23\u0E22\u0E37\u0E19\u0E22\u0E31\u0E19\u0E25\u0E49\u0E21\u0E40\u0E2B\u0E25\u0E27\u0E42\u0E1B\u0E23\u0E14\u0E25\u0E2D\u0E07\u0E2D\u0E35\u0E01\u0E04\u0E23\u0E31\u0E49\u0E07",
      "verifyOutOfLimit": "\u0E04\u0E27\u0E32\u0E21\u0E25\u0E49\u0E21\u0E40\u0E2B\u0E25\u0E27\u0E21\u0E32\u0E01\u0E40\u0E01\u0E34\u0E19\u0E44\u0E1B\u0E25\u0E2D\u0E07\u0E2D\u0E35\u0E01\u0E04\u0E23\u0E31\u0E49\u0E07",
      "clickButton": "\u0E04\u0E25\u0E34\u0E01\u0E17\u0E35\u0E48\u0E19\u0E35\u0E48\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E22\u0E37\u0E19\u0E22\u0E31\u0E19",
      "clickInTurn": "\u0E42\u0E1B\u0E23\u0E14\u0E04\u0E25\u0E34\u0E01",
      "clickWordInTurn": "\u0E42\u0E1B\u0E23\u0E14\u0E04\u0E25\u0E34\u0E01\u0E17\u0E35\u0E48\u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21\u0E15\u0E32\u0E21\u0E25\u0E33\u0E14\u0E31\u0E1A",
      "slideTip": "\u0E25\u0E32\u0E01\u0E15\u0E31\u0E27\u0E40\u0E25\u0E37\u0E48\u0E2D\u0E19\u0E44\u0E1B\u0E17\u0E32\u0E07\u0E02\u0E27\u0E32\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E40\u0E15\u0E34\u0E21\u0E1B\u0E23\u0E34\u0E28\u0E19\u0E32",
      "inferenceTip": "\u0E41\u0E25\u0E01\u0E40\u0E1B\u0E25\u0E35\u0E48\u0E22\u0E19\u0E44\u0E1E\u0E48\u0E2A\u0E2D\u0E07\u0E43\u0E1A\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E04\u0E37\u0E19\u0E04\u0E48\u0E32\u0E23\u0E39\u0E1B\u0E20\u0E32\u0E1E",
      "waitForSMS": "\u0E23\u0E2D\u0E01\u0E32\u0E23\u0E22\u0E37\u0E19\u0E22\u0E31\u0E19\u0E17\u0E32\u0E07 SMS \u0E40\u0E2B\u0E25\u0E37\u0E2D\u0E2D\u0E22\u0E39\u0E48",
      "popupTitle": "\u0E42\u0E1B\u0E23\u0E14\u0E01\u0E23\u0E2D\u0E01\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E01\u0E32\u0E23\u0E22\u0E37\u0E19\u0E22\u0E31\u0E19\u0E04\u0E27\u0E32\u0E21\u0E1B\u0E25\u0E2D\u0E14\u0E20\u0E31\u0E22",
      "refresh": "\u0E23\u0E35\u0E40\u0E1F\u0E23\u0E0A",
      "feedback": "\u0E2A\u0E48\u0E07\u0E04\u0E27\u0E32\u0E21\u0E04\u0E34\u0E14\u0E40\u0E2B\u0E47\u0E19\u0E40\u0E01\u0E35\u0E48\u0E22\u0E27\u0E01\u0E31\u0E1A\u0E1B\u0E31\u0E0D\u0E2B\u0E32\u0E01\u0E32\u0E23\u0E43\u0E0A\u0E49",
      "switchToVoice": "\u0E40\u0E1B\u0E25\u0E35\u0E48\u0E22\u0E19\u0E40\u0E1B\u0E47\u0E19\u0E01\u0E32\u0E23\u0E22\u0E37\u0E19\u0E22\u0E31\u0E19\u0E14\u0E49\u0E27\u0E22\u0E40\u0E2A\u0E35\u0E22\u0E07",
      "playVoice": "\u0E40\u0E25\u0E48\u0E19\u0E23\u0E2B\u0E31\u0E2A\u0E22\u0E37\u0E19\u0E22\u0E31\u0E19\u0E40\u0E2A\u0E35\u0E22\u0E07",
      "back": "\u0E01\u0E25\u0E31\u0E1A",
      "enterCode": "\u0E1B\u0E49\u0E2D\u0E19\u0E23\u0E2B\u0E31\u0E2A\u0E22\u0E37\u0E19\u0E22\u0E31\u0E19\u0E17\u0E35\u0E48\u0E04\u0E38\u0E13\u0E44\u0E14\u0E49\u0E22\u0E34\u0E19",
      "check": "\u0E01\u0E32\u0E23\u0E15\u0E23\u0E27\u0E08\u0E2A\u0E2D\u0E1A",
      "close": "\u0E1B\u0E34\u0E14\u0E15\u0E31\u0E27\u0E25\u0E07",
      "notSupportVoice": "\u0E40\u0E27\u0E2D\u0E23\u0E4C\u0E0A\u0E31\u0E19\u0E40\u0E1A\u0E23\u0E32\u0E27\u0E4C\u0E40\u0E0B\u0E2D\u0E23\u0E4C\u0E02\u0E2D\u0E07\u0E04\u0E38\u0E13\u0E15\u0E48\u0E33\u0E40\u0E01\u0E34\u0E19\u0E44\u0E1B\u0E17\u0E35\u0E48\u0E08\u0E30\u0E23\u0E2D\u0E07\u0E23\u0E31\u0E1A\u0E23\u0E2B\u0E31\u0E2A\u0E22\u0E37\u0E19\u0E22\u0E31\u0E19\u0E14\u0E49\u0E27\u0E22\u0E40\u0E2A\u0E35\u0E22\u0E07",
      "intellisense": {
        "normal": "\u0E04\u0E25\u0E34\u0E01 Finish \u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E22\u0E37\u0E19\u0E22\u0E31\u0E19",
        "checking": "\u0E01\u0E32\u0E23\u0E17\u0E14\u0E2A\u0E2D\u0E1A\u0E04\u0E27\u0E32\u0E21\u0E1B\u0E25\u0E2D\u0E14\u0E20\u0E31\u0E22",
        "loading": "\u0E01\u0E33\u0E25\u0E31\u0E07\u0E42\u0E2B\u0E25\u0E14\u0E01\u0E32\u0E23\u0E22\u0E37\u0E19\u0E22\u0E31\u0E19",
        "loadfail": "\u0E44\u0E21\u0E48\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E42\u0E2B\u0E25\u0E14",
        "loaddone": "\u0E42\u0E1B\u0E23\u0E14\u0E01\u0E23\u0E2D\u0E01\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E01\u0E32\u0E23\u0E22\u0E37\u0E19\u0E22\u0E31\u0E19\u0E04\u0E27\u0E32\u0E21\u0E1B\u0E25\u0E2D\u0E14\u0E20\u0E31\u0E22",
        "longtap": "\u0E14\u0E31\u0E1A\u0E40\u0E1A\u0E34\u0E25\u0E04\u0E25\u0E34\u0E01\u0E41\u0E25\u0E30\u0E01\u0E14 0.5 \u0E27\u0E34\u0E19\u0E32\u0E17\u0E35\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E40\u0E2A\u0E23\u0E47\u0E08\u0E2A\u0E34\u0E49\u0E19\u0E01\u0E32\u0E23\u0E15\u0E23\u0E27\u0E08\u0E2A\u0E2D\u0E1A"
      },
      "sms": {
        "scanQrToSMS": "Scan QR code to send verification SMS",
        "noScanQr": "Unable to scan QR code",
        "manualSMS": "send a verification SMS manually",
        "clickToSMS": "Click the button to send verification SMS",
        "editSMS": "Edit SMS",
        "sendSMSTo": "Send to",
        "or": "or",
        "toSMS": "send a verification SMS",
        "cannotJump": "cannot jump to SMS"
      }
    },
    "vi": {
      "loading": "T\u1EA3i trong...",
      "loadfail": "T\u1EA3i th\u1EA5t b\u1EA1i",
      "verifySuccess": "X\xE1c minh th\xE0nh c\xF4ng",
      "verifyError": "Ki\u1EC3m tra th\u1EA5t b\u1EA1i, h\xE3y th\u1EED l\u1EA1i",
      "verifyOutOfLimit": "Qu\xE1 nhi\u1EC1u th\u1EA5t b\u1EA1i, th\u1EED l\u1EA1i l\u1EA7n n\u1EEFa",
      "clickButton": "Nh\u1EA5p v\xE0o \u0111\xE2y \u0111\u1EC3 x\xE1c minh",
      "clickInTurn": "Xin vui l\xF2ng nh\u1EA5p v\xE0o",
      "clickWordInTurn": "B\u1EA5m v\xE0o v\u0103n b\u1EA3n theo th\u1EE9 t\u1EF1",
      "slideTip": "K\xE9o sang ph\u1EA3i \u0111\u1EC3 \u0111i\u1EC1n v\xE0o c\xE2u \u0111\u1ED1",
      "inferenceTip": "Trao \u0111\u1ED5i hai g\u1EA1ch \u0111\u1EC3 kh\xF4i ph\u1EE5c l\u1EA1i h\xECnh \u1EA3nh",
      "waitForSMS": "Ch\u1EDD \u0111\u1EE3i tin nh\u1EAFn SMS c\xF2n l\u1EA1i",
      "popupTitle": "H\xE3y ho\xE0n th\xE0nh ki\u1EC3m tra an to\xE0n",
      "refresh": "Cthay m\u1EDBi",
      "feedback": "G\u1EDFi ph\u1EA3n h\u1ED3i v\u1EC1 v\u1EA5n \u0111\u1EC1 s\u1EED d\u1EE5ng",
      "switchToVoice": "Chuy\u1EC3n sang x\xE1c minh b\u1EB1ng gi\u1ECDng n\xF3i",
      "playVoice": "Ph\xE1t m\xE3 x\xE1c minh gi\u1ECDng n\xF3i",
      "back": "tr\u1EDF v\u1EC1",
      "enterCode": "Nh\u1EADp m\xE3 x\xE1c minh b\u1EA1n nghe th\u1EA5y",
      "check": "x\xE1c minh",
      "close": "\u0111\xF3ng",
      "notSupportVoice": "Phi\xEAn b\u1EA3n tr\xECnh duy\u1EC7t c\u1EE7a b\u1EA1n qu\xE1 th\u1EA5p \u0111\u1EC3 h\u1ED7 tr\u1EE3 m\xE3 x\xE1c minh b\u1EB1ng gi\u1ECDng n\xF3i",
      "intellisense": {
        "normal": "Nh\u1EA5p v\xE0o \u0111\u1EC3 ho\xE0n th\xE0nh x\xE1c nh\u1EADn",
        "checking": "Ki\u1EC3m tra an ninh",
        "loading": "\u0110ang t\u1EA3i ki\u1EC3m tra",
        "loadfail": "T\u1EA3i th\u1EA5t b\u1EA1i",
        "loaddone": "H\xE3y ho\xE0n th\xE0nh ki\u1EC3m tra an to\xE0n",
        "longtap": "Nh\u1EA5n \u0111\xFAp v\xE0o v\xE0 nh\u1EA5n v\xE0o 0.5 gi\xE2y \u0111\u1EC3 ho\xE0n th\xE0nh vi\u1EC7c ki\u1EC3m tra."
      },
      "sms": {
        "scanQrToSMS": "Scan QR code to send verification SMS",
        "noScanQr": "Unable to scan QR code",
        "manualSMS": "send a verification SMS manually",
        "clickToSMS": "Click the button to send verification SMS",
        "editSMS": "Edit SMS",
        "sendSMSTo": "Send to",
        "or": "or",
        "toSMS": "send a verification SMS",
        "cannotJump": "cannot jump to SMS"
      }
    },
    "fr": {
      "loading": "t\xE9l\xE9chargement en cours...",
      "loadfail": "t\xE9l\xE9chargement \xE9chou\xE9",
      "verifySuccess": "v\xE9rification confirm\xE9e",
      "verifyError": "v\xE9rification \xE9chou\xE9e, veuillez r\xE9essayer",
      "verifyOutOfLimit": "\xE9checs excessifs, cliquer pour r\xE9essayer",
      "clickButton": "cliquer pour accomplir la v\xE9rification",
      "clickInTurn": "veuillez cliquer par ordre",
      "clickWordInTurn": "Cliquez sur le texte dans l'ordre",
      "slideTip": "glisser le puzzle",
      "inferenceTip": "Carte de r\xE9duction des tuiles Exchange",
      "waitForSMS": "En attedant de la v\xE9rification de message, il reste encore",
      "popupTitle": "veuillez accomplir la v\xE9rification",
      "refresh": "Rafra\xEEchir",
      "feedback": "Soumettre des commentaires sur les questions d'utilisation",
      "switchToVoice": "Passer \xE0 la v\xE9rification vocale",
      "playVoice": "\xC9couter le code de v\xE9rification vocale",
      "back": "revenir",
      "enterCode": "Veuillez saisir le num\xE9ro",
      "check": "v\xE9rification",
      "close": "proche",
      "notSupportVoice": "La version de votre navigateur est trop faible pour prendre en charge les codes de v\xE9rification vocale",
      "intellisense": {
        "normal": "cliquer pour accomplir la v\xE9rification",
        "checking": "en v\xE9rification",
        "loading": "t\xE9l\xE9chargement en cours",
        "loadfail": "t\xE9l\xE9chargement \xE9chou\xE9",
        "loaddone": "veuillez accomplir la v\xE9rification",
        "longtap": "Double - cliquez et appuyez sur 0,5 seconde pour terminer la v\xE9rification"
      },
      "sms": {
        "scanQrToSMS": "Scan QR code to send verification SMS",
        "noScanQr": "Unable to scan QR code",
        "manualSMS": "send a verification SMS manually",
        "clickToSMS": "Click the button to send verification SMS",
        "editSMS": "Edit SMS",
        "sendSMSTo": "Send to",
        "or": "or",
        "toSMS": "send a verification SMS",
        "cannotJump": "cannot jump to SMS"
      }
    },
    "ru": {
      "loading": "\u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0430...",
      "loadfail": "\u043E\u0448\u0438\u0431\u043A\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0438",
      "verifySuccess": "\u043F\u0440\u043E\u0432\u0435\u0440\u043A\u0430 \u043F\u0440\u043E\u0448\u043B\u0430 \u0443\u0441\u043F\u0435\u0448\u043D\u043E",
      "verifyError": "\u043E\u0448\u0438\u0431\u043A\u0430 \u043F\u0440\u043E\u0432\u0435\u0440\u043A\u0438, \u043F\u043E\u0432\u0442\u043E\u0440\u0438\u0442\u0435 \u043F\u043E\u0431\u044B\u0442\u043A\u0443",
      "verifyOutOfLimit": "\u041C\u043D\u043E\u0433\u043E \u043E\u0448\u0438\u0431\u043E\u043A, \u043F\u043E\u0432\u0442\u043E\u0440\u0438\u0442\u0435 \u043F\u043E\u043F\u044B\u0442\u043A\u0443",
      "clickButton": "\u0449\u0435\u043B\u043A\u0430\u0442\u044C, \u0447\u0442\u043E\u0431\u044B \u0437\u0430\u0432\u0435\u0440\u0448\u0438\u0442\u044C \u043F\u0440\u043E\u0432\u0435\u0440\u043A\u0443",
      "clickInTurn": "\u0449\u0435\u043B\u043A\u0430\u0442\u044C \u043F\u043E \u043E\u0447\u0435\u0440\u0435\u0434\u0438",
      "clickWordInTurn": "\u041D\u0430\u0436\u043C\u0438\u0442\u0435 \u043D\u0430 \u0442\u0435\u043A\u0441\u0442 \u0432 \u043F\u043E\u0440\u044F\u0434\u043A\u0435",
      "slideTip": "\u043F\u0435\u0440\u0435\u0442\u0430\u0449\u0438\u0442\u044C \u043D\u0430 \u0433\u043E\u043B\u043E\u0432\u043E\u043B\u043E\u043C\u043A\u0443",
      "inferenceTip": "\u041E\u0431\u043C\u0435\u043D\u043D\u0430\u044F \u043A\u0430\u0440\u0442\u0430 \u0441\u043E\u043A\u0440\u0430\u0449\u0435\u043D\u0438\u044F \u0442\u0430\u0439\u043B\u043E\u0432",
      "waitForSMS": "\u041E\u0436\u0438\u0434\u0430\u043D\u0438\u0435 \u043F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043D\u0438\u044F \u0421\u041C\u0421, \u043E\u0441\u0442\u0430\u043B\u043E\u0441\u044C",
      "popupTitle": "\u0437\u0430\u0432\u0435\u0440\u0448\u0438\u0442\u0435 \u043F\u0440\u043E\u0432\u0435\u0440\u043A\u0443 \u0431\u0435\u0437\u043E\u043F\u0430\u0441\u043D\u043E\u0441\u0442\u0438",
      "refresh": "\u041E\u0431\u043D\u043E\u0432\u0438\u0442\u044C",
      "feedback": "\xA0\u043E\u0431\u0440\u0430\u0442\u043D\u0430\u044F \u0441\u0432\u044F\u0437\u044C \u043F\u043E \u0432\u043E\u043F\u0440\u043E\u0441\u0430\u043C \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u044F",
      "switchToVoice": "\u041F\u0435\u0440\u0435\u043A\u043B\u044E\u0447\u0438\u0442\u044C\u0441\u044F \u043D\u0430 \u0433\u043E\u043B\u043E\u0441\u043E\u0432\u0443\u044E \u043F\u0440\u043E\u0432\u0435\u0440\u043A\u0443",
      "playVoice": "\u0412\u043E\u0441\u043F\u0440\u043E\u0438\u0437\u0432\u0435\u0441\u0442\u0438 \u0433\u043E\u043B\u043E\u0441\u043E\u0432\u043E\u0439 \u043A\u043E\u0434 \u043F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043D\u0438\u044F",
      "back": "\u0432\u043E\u0437\u0432\u0440\u0430\u0449\u0435\u043D\u0438\u0435",
      "enterCode": "\u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0441\u0435 \u0447\u0438\u0441\u043B\u0430",
      "check": "\u043F\u0440\u043E\u0432\u0435\u0440\u043A\u0430",
      "close": "\u0417\u0430\u043A\u0440\u044B\u0442\u044C",
      "notSupportVoice": "\u0412\u0435\u0440\u0441\u0438\u044F \u0432\u0430\u0448\u0435\u0433\u043E \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0430 \u0441\u043B\u0438\u0448\u043A\u043E\u043C \u043C\u0430\u043B\u0430 \u0434\u043B\u044F \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u043A\u0438 \u043A\u043E\u0434\u043E\u0432 \u0433\u043E\u043B\u043E\u0441\u043E\u0432\u043E\u0439 \u043F\u0440\u043E\u0432\u0435\u0440\u043A\u0438",
      "intellisense": {
        "normal": "\u0449\u0435\u043B\u043A\u0430\u0442\u044C, \u0447\u0442\u043E\u0431\u044B \u0437\u0430\u0432\u0435\u0440\u0448\u0438\u0442\u044C \u043F\u0440\u043E\u0432\u0435\u0440\u043A\u0443",
        "checking": "\u041C\u043E\u043D\u0438\u0442\u043E\u0440\u0438\u043D\u0433 \u0431\u0435\u0437\u043E\u043F\u0430\u0441\u043D\u043E\u0441\u0442\u0438",
        "loading": "\u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0430 \u043F\u0440\u043E\u0432\u0435\u0440\u043A\u0438",
        "loadfail": "\u043E\u0448\u0438\u0431\u043A\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0438",
        "loaddone": "\u0437\u0430\u0432\u0435\u0440\u0448\u0438\u0438\u0442\u0435 \u043F\u0440\u043E\u0432\u0435\u0440\u043A\u0443 \u0431\u0435\u0437\u043E\u043F\u0430\u0441\u0440\u043E\u0441\u0442\u044C",
        "longtap": "\u041F\u043E\u0441\u043B\u0435 \u0434\u0432\u043E\u0439\u043D\u043E\u0433\u043E \u0449\u0435\u043B\u0447\u043A\u0430 \u043D\u0430\u0436\u043C\u0438\u0442\u0435 0. 5 \u0441\u0435\u043A\u0443\u043D\u0434 \u0434\u043B\u044F \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043D\u0438\u044F \u043F\u0440\u043E\u0432\u0435\u0440\u043A\u0438"
      },
      "sms": {
        "scanQrToSMS": "Scan QR code to send verification SMS",
        "noScanQr": "Unable to scan QR code",
        "manualSMS": "send a verification SMS manually",
        "clickToSMS": "Click the button to send verification SMS",
        "editSMS": "Edit SMS",
        "sendSMSTo": "Send to",
        "or": "or",
        "toSMS": "send a verification SMS",
        "cannotJump": "cannot jump to SMS"
      }
    },
    "ar": {
      "loading": "\u062C\u0627\u0631\u064A \u0627\u0644\u062A\u062D\u0645\u064A\u0644...",
      "loadfail": "\u0641\u0634\u0644 \u0627\u0644\u062A\u062D\u0645\u064A\u0644",
      "verifySuccess": "\u0646\u062C\u062D \u0627\u0644\u062A\u062D\u0642\u0642",
      "verifyError": "\u0641\u0634\u0644 \u0627\u0644\u062A\u062D\u0642\u0642\u060C \u0627\u0644\u0631\u062C\u0627\u0621 \u0627\u0644\u0645\u062D\u0627\u0648\u0644\u0629 \u0644\u0645\u0631\u0629 \u0623\u062E\u0631\u0649",
      "verifyOutOfLimit": "\u0627\u0644\u0643\u062B\u064A\u0631 \u0645\u0646 \u0627\u0644\u0641\u0634\u0644\u060C \u0627\u0646\u0642\u0631 \u0647\u0646\u0627 \u0644\u0644\u0645\u062D\u0627\u0648\u0644\u0629 \u0644\u0645\u0631\u0629 \u0623\u062E\u0631\u0649",
      "clickButton": "\u0627\u0646\u0642\u0631 \u0644\u0625\u0643\u0645\u0627\u0644 \u0627\u0644\u062A\u062D\u0642\u0642",
      "clickInTurn": "\u0627\u0644\u0631\u062C\u0627\u0621 \u0627\u0644\u0636\u063A\u0637 \u0628\u0627\u0644\u062A\u0631\u062A\u064A\u0628 \u0627\u0644\u0635\u062D\u064A\u062D",
      "clickWordInTurn": "\u0627\u0644\u0631\u062C\u0627\u0621 \u0627\u0644\u0636\u063A\u0637 \u0639\u0644\u0649 \u0627\u0644\u0646\u0635 \u0628\u0627\u0644\u062A\u0631\u062A\u064A\u0628",
      "slideTip": "\u062D\u0631\u0643 \u0634\u0631\u064A\u0637 \u0627\u0644\u062A\u0645\u0631\u064A\u0631 \u0625\u0644\u0649 \u0627\u0644\u064A\u0645\u064A\u0646 \u0644\u0645\u0644\u0621 \u0627\u0644\u0644\u063A\u0632",
      "inferenceTip": "\u062A\u0628\u0627\u062F\u0644 \u0627\u062B\u0646\u064A\u0646 \u0645\u0646 \u0627\u0644\u0628\u0644\u0627\u0637 \u0644\u0627\u0633\u062A\u0639\u0627\u062F\u0629 \u0627\u0644\u0635\u0648\u0631\u0629",
      "waitForSMS": "\u0641\u064A \u0627\u0646\u062A\u0638\u0627\u0631 \u0627\u0644\u062A\u062D\u0642\u0642 \u0645\u0646 \u0627\u0644\u0631\u0633\u0627\u0626\u0644 \u0627\u0644\u0642\u0635\u064A\u0631\u0629 \u060C \u062A\u0628\u0642\u0649",
      "popupTitle": "\u064A\u0631\u062C\u0649 \u0625\u0643\u0645\u0627\u0644 \u0627\u0644\u062A\u062D\u0642\u0642 \u0627\u0644\u0623\u0645\u0646\u064A",
      "refresh": "\u062A\u062D\u062F\u064A\u062B \u0631\u0645\u0632 \u0627\u0644\u062A\u062D\u0642\u0642",
      "feedback": "\u062A\u0642\u062F\u064A\u0645 \u0627\u0644\u062A\u063A\u0630\u064A\u0629 \u0627\u0644\u0645\u0631\u062A\u062F\u0629 \u0628\u0627\u0633\u062A\u062E\u062F\u0627\u0645 \u0627\u0644\u0623\u0633\u0626\u0644\u0629",
      "switchToVoice": "\u0627\u0644\u062A\u0628\u062F\u064A\u0644 \u0625\u0644\u0649 \u0627\u0644\u062A\u062D\u0642\u0642 \u0627\u0644\u0635\u0648\u062A\u064A",
      "playVoice": "\u062A\u0634\u063A\u064A\u0644 \u0631\u0645\u0632 \u0627\u0644\u062A\u062D\u0642\u0642 \u0627\u0644\u0635\u0648\u062A\u064A",
      "back": "\u0625\u0631\u062C\u0627\u0639",
      "enterCode": "\u0623\u062F\u062E\u0644 \u0631\u0645\u0632 \u0627\u0644\u062A\u062D\u0642\u0642 \u0627\u0644\u0630\u064A \u062A\u0633\u0645\u0639\u0647",
      "check": "\u0627\u0644\u062A\u062D\u0642\u0642",
      "close": "\u0623\u063A\u0644\u0642",
      "notSupportVoice": "\u0625\u0635\u062F\u0627\u0631 \u0645\u062A\u0635\u0641\u062D\u0643 \u0645\u0646\u062E\u0641\u0636 \u062C\u062F\u064B\u0627 \u0644\u062F\u0639\u0645 \u0631\u0645\u0648\u0632 \u0627\u0644\u062A\u062D\u0642\u0642 \u0627\u0644\u0635\u0648\u062A\u064A",
      "intellisense": {
        "normal": "\u0627\u0646\u0642\u0631 \u0644\u0625\u0643\u0645\u0627\u0644 \u0627\u0644\u062A\u062D\u0642\u0642",
        "checking": "\u062C\u0627\u0631\u064A \u0627\u0644\u062A\u0641\u062A\u064A\u0634 \u0627\u0644\u0623\u0645\u0646\u064A",
        "loading": "\u062C\u0627\u0631\u064A \u062A\u062D\u0645\u064A\u0644 \u0627\u0644\u062A\u062D\u0642\u0642",
        "loadfail": "\u0641\u0634\u0644 \u0627\u0644\u062A\u062D\u0645\u064A\u0644",
        "loaddone": "\u064A\u0631\u062C\u064A \u0625\u0643\u0645\u0627\u0644 \u0627\u0644\u062A\u062D\u0642\u0642 \u0627\u0644\u0623\u0645\u0646\u064A",
        "longtap": "\u0628\u0639\u062F \u0627\u0644\u0646\u0642\u0631 \u0627\u0644\u0645\u0632\u062F\u0648\u062C \u0639\u0644\u0649 \u0637\u0648\u0644 0.5 \u062B\u0627\u0646\u064A\u0629 \u0644\u0625\u0643\u0645\u0627\u0644 \u0627\u0644\u062A\u062D\u0642\u0642"
      },
      "sms": {
        "scanQrToSMS": "Scan QR code to send verification SMS",
        "noScanQr": "Unable to scan QR code",
        "manualSMS": "send a verification SMS manually",
        "clickToSMS": "Click the button to send verification SMS",
        "editSMS": "Edit SMS",
        "sendSMSTo": "Send to",
        "or": "or",
        "toSMS": "send a verification SMS",
        "cannotJump": "cannot jump to SMS"
      }
    },
    "de": {
      "loading": "Wird geladen...",
      "loadfail": "Laden fehlgeschlagen",
      "verifySuccess": "Erfolg verifizieren",
      "verifyError": "gescheitert. Bitte erneut versuchen",
      "verifyOutOfLimit": "gescheitert. Bitte erneut versuchen",
      "clickButton": "Klicken Sie auf Verifizierung",
      "clickInTurn": "Klicken Sie nacheinander",
      "clickWordInTurn": "Klicken Sie der Reihe nach auf den Text",
      "slideTip": "ziehen sie um puzzle",
      "inferenceTip": "Kachelwiederherstellungskarte austauschen",
      "waitForSMS": "Warten auf SMS, bleiben",
      "popupTitle": "Bitte schlie\xDFen Sie die Verifizierung ab",
      "refresh": "Aktualisierung",
      "feedback": "Senden Sie Feedback zu Nutzungsproblemen",
      "switchToVoice": "Wechseln Sie zur Sprach\xFCberpr\xFCfung",
      "playVoice": "Sprach\xFCberpr\xFCfungscode abspielen",
      "back": "R\xFCckkehr",
      "enterCode": "Bitte alle Zahlen eingeben",
      "check": "\xDCberpr\xFCfung",
      "close": "schlie\xDFen",
      "notSupportVoice": "Ihre Browserversion ist zu niedrig, um Sprach\xFCberpr\xFCfungscodes zu unterst\xFCtzen",
      "intellisense": {
        "normal": "Klicken Sie auf Verifizierung",
        "checking": "\xDCberpr\xFCfen",
        "loading": "Wird geladen",
        "loadfail": "Laden fehlgeschlagen",
        "loaddone": "Bitte vervollst\xE4ndigen Sie die Best\xE4tigung",
        "longtap": "Doppelklicken Sie und dr\xFCcken Sie f\xFCr 0,5 Sekunden, um die \xDCberpr\xFCfung abzuschlie\xDFen"
      },
      "sms": {
        "scanQrToSMS": "Scan QR code to send verification SMS",
        "noScanQr": "Unable to scan QR code",
        "manualSMS": "send a verification SMS manually",
        "clickToSMS": "Click the button to send verification SMS",
        "editSMS": "Edit SMS",
        "sendSMSTo": "Send to",
        "or": "or",
        "toSMS": "send a verification SMS",
        "cannotJump": "cannot jump to SMS"
      }
    },
    "it": {
      "loading": "Caricamento in corso...",
      "loadfail": "Carico fallito",
      "verifySuccess": "verificare il successo",
      "verifyError": "verifica fallita. Per favore riprova",
      "verifyOutOfLimit": "Troppi guasti, riprova",
      "clickButton": "Fai clic sul pulsante per verificare",
      "clickInTurn": "clicca a turno",
      "clickWordInTurn": "Fare clic sul testo in ordine",
      "slideTip": "trascina per completare il puzzle",
      "inferenceTip": "Scambia la mappa di recupero delle tessere",
      "waitForSMS": "in attesa di SMS, rimanenti",
      "popupTitle": "Si prega di completare la verifica",
      "refresh": "Aggiorna didascalie",
      "feedback": "Inviare feedback sui problemi di utilizzo",
      "switchToVoice": "Passa alla verifica vocale",
      "playVoice": "Riproduci il codice di verifica vocale",
      "back": "ritorno",
      "enterCode": "Inserisci tutti i numeri",
      "check": "verifica",
      "close": "vicino",
      "notSupportVoice": "La versione del tuo browser \xE8 troppo bassa per supportare i codici di verifica vocale",
      "intellisense": {
        "normal": "Fai clic sul pulsante per verificare",
        "checking": "Nella verifica",
        "loading": "Caricamento in corso",
        "loadfail": "Carico fallito",
        "loaddone": "Si prega di completare la verifica",
        "longtap": "Fare doppio clic e premere per 0.5 secondi per completare la verifica"
      },
      "sms": {
        "scanQrToSMS": "Scan QR code to send verification SMS",
        "noScanQr": "Unable to scan QR code",
        "manualSMS": "send a verification SMS manually",
        "clickToSMS": "Click the button to send verification SMS",
        "editSMS": "Edit SMS",
        "sendSMSTo": "Send to",
        "or": "or",
        "toSMS": "send a verification SMS",
        "cannotJump": "cannot jump to SMS"
      }
    },
    "he": {
      "loading": "\u05D8\u05E2\u05D9\u05E0\u05D4...",
      "loadfail": "\u05D8\u05E2\u05D9\u05E0\u05D4 \u05E0\u05DB\u05E9\u05DC\u05D4",
      "verifySuccess": "\u05DC\u05D0\u05DE\u05EA \u05D4\u05E6\u05DC\u05D7\u05D4",
      "verifyError": "\u05D8\u05E2\u05D9\u05E0\u05D4 \u05E0\u05DB\u05E9\u05DC\u05D4, \u05E0\u05E1\u05D4 \u05E9\u05D5\u05D1",
      "verifyOutOfLimit": "\u05D9\u05D5\u05EA\u05E8 \u05DE\u05D3\u05D9 \u05DB\u05E9\u05DC\u05D9\u05DD, \u05E0\u05E1\u05D4 \u05E9\u05D5\u05D1",
      "clickButton": "\u05DC\u05D7\u05E5 \u05E2\u05DC \u05D4\u05DC\u05D7\u05E6\u05DF \u05DB\u05D3\u05D9 \u05DC\u05D0\u05DE\u05EA",
      "clickInTurn": "\u05DC\u05D7\u05E5 \u05D1\u05EA\u05D5\u05E8\u05D5",
      "clickWordInTurn": "\u05D0\u05E0\u05D0 \u05DC\u05D7\u05E5 \u05E2\u05DC \u05D4\u05D8\u05E7\u05E1\u05D8 \u05DC\u05E4\u05D9 \u05D4\u05E1\u05D3\u05E8",
      "slideTip": "\u05D2\u05E8\u05D5\u05E8 \u05DB\u05D3\u05D9 \u05DC\u05D4\u05E9\u05DC\u05D9\u05DD \u05D0\u05EA \u05D4\u05E4\u05D0\u05D6\u05DC",
      "inferenceTip": "\u05D4\u05D7\u05DC\u05E3 \u05E9\u05E0\u05D9 \u05D0\u05E8\u05D9\u05D7\u05D9\u05DD \u05DB\u05D3\u05D9 \u05DC\u05E9\u05D7\u05D6\u05E8 \u05D0\u05EA \u05D4\u05EA\u05DE\u05D5\u05E0\u05D4",
      "waitForSMS": "\u05DE\u05D7\u05DB\u05D4 SMS, \u05D4\u05E0\u05D5\u05EA\u05E8\u05D9\u05DD",
      "popupTitle": "\u05DE\u05DC\u05D0 \u05D0\u05EA \u05D0\u05D9\u05DE\u05D5\u05EA \u05D4\u05D0\u05D1\u05D8\u05D7\u05D4",
      "refresh": "\u05E7\u05D5\u05D3 \u05E8\u05E2\u05E0\u05D5\u05DF",
      "feedback": "\u05E9\u05DC\u05D7 \u05D7\u05D6\u05E8\u05D4 \u05E2\u05DC \u05D1\u05E2\u05D9\u05D5\u05EA \u05D4\u05E9\u05D9\u05DE\u05D5\u05E9",
      "switchToVoice": "\u05E2\u05D1\u05D5\u05E8 \u05DC\u05D0\u05D9\u05DE\u05D5\u05EA \u05E7\u05D5\u05DC",
      "playVoice": "\u05D4\u05E4\u05E2\u05DC \u05E7\u05D5\u05D3 \u05D0\u05D9\u05DE\u05D5\u05EA \u05E7\u05D5\u05DC\u05D9",
      "back": "\u05DC\u05B7\u05D7\u05B2\u05D6\u05D5\u05B9\u05E8",
      "enterCode": "\u05D4\u05D6\u05DF \u05D0\u05EA \u05E7\u05D5\u05D3 \u05D4\u05D0\u05D9\u05DE\u05D5\u05EA \u05E9\u05D0\u05EA\u05D4 \u05E9\u05D5\u05DE\u05E2",
      "check": "\u05D0\u05D9\u05DE\u05D5\u05EA",
      "close": "\u05E1\u05D2\u05D5\u05E8",
      "notSupportVoice": "\u05D2\u05E8\u05E1\u05EA \u05D4\u05D3\u05E4\u05D3\u05E4\u05DF \u05E9\u05DC\u05DA \u05E0\u05DE\u05D5\u05DB\u05D4 \u05DE\u05DB\u05D3\u05D9 \u05DC\u05EA\u05DE\u05D5\u05DA \u05D1\u05E7\u05D5\u05D3\u05D9 \u05D0\u05D9\u05DE\u05D5\u05EA \u05E7\u05D5\u05DC\u05D9",
      "intellisense": {
        "normal": "\u05DC\u05D7\u05E5 \u05E2\u05DC \u05D4\u05DC\u05D7\u05E6\u05DF \u05DB\u05D3\u05D9 \u05DC\u05D0\u05DE\u05EA",
        "checking": "\u05D1\u05D3\u05D9\u05E7\u05EA \u05D1\u05D8\u05D9\u05D7\u05D5\u05EA",
        "loading": "\u05D8\u05E2\u05D9\u05E0\u05D4",
        "loadfail": "\u05D8\u05E2\u05D9\u05E0\u05D4 \u05E0\u05DB\u05E9\u05DC\u05D4",
        "loaddone": "\u05DE\u05DC\u05D0 \u05D0\u05EA \u05D0\u05D9\u05DE\u05D5\u05EA \u05D4\u05D0\u05D1\u05D8\u05D7\u05D4",
        "longtap": "\u05DC\u05D7\u05E5 \u05DB\u05E4\u05D5\u05DC \u05D5\u05DC\u05DC\u05D7\u05E5 \u05D1\u05DE\u05E9\u05DA 0.5 \u05E9\u05E0\u05D9\u05D5\u05EA \u05DB\u05D3\u05D9 \u05DC\u05D4\u05E9\u05DC\u05D9\u05DD \u05D0\u05EA \u05D4\u05D0\u05DE\u05EA"
      },
      "sms": {
        "scanQrToSMS": "Scan QR code to send verification SMS",
        "noScanQr": "Unable to scan QR code",
        "manualSMS": "send a verification SMS manually",
        "clickToSMS": "Click the button to send verification SMS",
        "editSMS": "Edit SMS",
        "sendSMSTo": "Send to",
        "or": "or",
        "toSMS": "send a verification SMS",
        "cannotJump": "cannot jump to SMS"
      }
    },
    "hi": {
      "loading": "\u0932\u094B\u0921 \u0939\u094B \u0930\u0939\u093E \u0939\u0948...",
      "loadfail": "\u0932\u094B\u0921 \u0935\u093F\u092B\u0932 \u0939\u094B \u0917\u092F\u093E",
      "verifySuccess": "\u0938\u092B\u0932 \u0938\u0924\u094D\u092F\u093E\u092A\u0928",
      "verifyError": "\u0938\u0924\u094D\u092F\u093E\u092A\u093F\u0924 \u0935\u093F\u092B\u0932\u0964 \u0915\u0943\u092A\u092F\u093E \u092A\u0941\u0928\u0903 \u092A\u094D\u0930\u092F\u093E\u0938 \u0915\u0930\u0947\u0902",
      "verifyOutOfLimit": "\u0938\u0924\u094D\u092F\u093E\u092A\u093F\u0924 \u0935\u093F\u092B\u0932\u0964 \u0915\u0943\u092A\u092F\u093E \u092A\u0941\u0928\u0903 \u092A\u094D\u0930\u092F\u093E\u0938 \u0915\u0930\u0947\u0902",
      "clickButton": "\u0938\u0924\u094D\u092F\u093E\u092A\u093F\u0924 \u0915\u0930\u0928\u0947 \u0915\u0947 \u0932\u093F\u090F \u092C\u091F\u0928 \u092A\u0930 \u0915\u094D\u0932\u093F\u0915 \u0915\u0930\u0947\u0902",
      "clickInTurn": "\u0915\u094D\u0932\u093F\u0915 \u092A\u0930 \u0915\u094D\u0932\u093F\u0915 \u0915\u0930\u0947\u0902",
      "clickWordInTurn": "\u0915\u0943\u092A\u092F\u093E \u0915\u094D\u0930\u092E \u092E\u0947\u0902 \u092A\u093E\u0920 \u092A\u0930 \u0915\u094D\u0932\u093F\u0915 \u0915\u0930\u0947\u0902",
      "slideTip": "\u092A\u0939\u0947\u0932\u0940 \u0915\u094B \u092A\u0942\u0930\u093E \u0915\u0930\u0928\u0947 \u0915\u0947 \u0932\u093F\u090F \u0938\u094D\u0932\u093E\u0907\u0921\u0930 \u0916\u0940\u0902\u091A\u0947\u0902",
      "inferenceTip": "\u0935\u093F\u0928\u093F\u092E\u092F \u0926\u094B \u091F\u093E\u0907\u0932 \u0935\u0938\u0942\u0932\u0940 \u0928\u0915\u094D\u0936\u0947",
      "waitForSMS": "\u090F\u0938\u090F\u092E\u090F\u0938 \u0915\u0940 \u092A\u094D\u0930\u0924\u0940\u0915\u094D\u0937\u093E \u0915\u0930 \u0930\u0939\u093E \u0939\u0948, \u0936\u0947\u0937",
      "popupTitle": "\u0915\u0943\u092A\u092F\u093E \u0938\u0924\u094D\u092F\u093E\u092A\u0928 \u092A\u0942\u0930\u093E \u0915\u0930\u0947\u0902",
      "refresh": "\u0915\u0948\u092A\u094D\u091A\u0915\u093E \u0924\u093E\u091C\u093E \u0915\u0930\u0947\u0902",
      "feedback": "\u092A\u094D\u0930\u092F\u094B\u0917 \u0938\u092E\u0938\u094D\u092F\u093E \u092A\u0930 \u092B\u0940\u0921\u092C\u0948\u0915 \u092D\u0947\u091C\u0947\u0902",
      "switchToVoice": "\u0906\u0935\u093E\u091C \u0938\u0924\u094D\u092F\u093E\u092A\u0928 \u092A\u0930 \u0938\u094D\u0935\u093F\u091A \u0915\u0930\u0947\u0902",
      "playVoice": "\u0906\u0935\u093E\u091C \u0938\u0924\u094D\u092F\u093E\u092A\u0928 \u0915\u094B\u0921 \u0916\u0947\u0932\u0947\u0902",
      "back": "\u0935\u093E\u092A\u0938\u0940",
      "enterCode": "\u0915\u0943\u092A\u092F\u093E \u091C\u094B \u0928\u0902\u092C\u0930 \u0906\u092A \u0938\u0941\u0928\u0924\u0947 \u0939\u0948\u0902 \u0909\u0938\u0947 \u0926\u0930\u094D\u091C \u0915\u0930\u0947\u0902",
      "check": "\u0938\u0924\u094D\u092F\u093E\u092A\u0928",
      "close": "\u092C\u0902\u0926 \u0915\u0930\u0947",
      "notSupportVoice": "\u0927\u094D\u0935\u0928\u093F \u0938\u0924\u094D\u092F\u093E\u092A\u0928 \u0915\u094B\u0921 \u0915\u093E \u0938\u092E\u0930\u094D\u0925\u0928 \u0915\u0930\u0928\u0947 \u0915\u0947 \u0932\u093F\u090F \u0906\u092A\u0915\u093E \u092C\u094D\u0930\u093E\u0909\u091C\u093C\u0930 \u0938\u0902\u0938\u094D\u0915\u0930\u0923 \u092C\u0939\u0941\u0924 \u0915\u092E \u0939\u0948",
      "intellisense": {
        "normal": "\u0938\u0924\u094D\u092F\u093E\u092A\u093F\u0924 \u0915\u0930\u0928\u0947 \u0915\u0947 \u0932\u093F\u090F \u092C\u091F\u0928 \u092A\u0930 \u0915\u094D\u0932\u093F\u0915 \u0915\u0930\u0947\u0902",
        "checking": "\u092A\u0941\u0937\u094D\u091F\u093F \u0915\u0930\u0928\u0947",
        "loading": "\u0932\u094B\u0921 \u0939\u094B \u0930\u0939\u093E \u0939\u0948",
        "loadfail": "\u0932\u094B\u0921 \u0935\u093F\u092B\u0932 \u0939\u094B \u0917\u092F\u093E",
        "loaddone": "\u0915\u0943\u092A\u092F\u093E \u0938\u0924\u094D\u092F\u093E\u092A\u0928 \u092A\u0942\u0930\u093E \u0915\u0930\u0947\u0902",
        "longtap": "\u0938\u0924\u094D\u092F\u093E\u092A\u0928 \u092A\u0942\u0930\u093E \u0915\u0930\u0928\u0947 \u0915\u0947 \u0932\u093F\u090F 0.5 \u0938\u0947\u0915\u0923\u094D\u0921 \u0915\u0947 \u0932\u093F\u090F \u0926\u094B\u0939\u0930\u093E \u0915\u094D\u0932\u093F\u0915 \u0915\u0930\u0947\u0902 \u0914\u0930 \u0926\u092C\u093E\u090F\u0901"
      },
      "sms": {
        "scanQrToSMS": "Scan QR code to send verification SMS",
        "noScanQr": "Unable to scan QR code",
        "manualSMS": "send a verification SMS manually",
        "clickToSMS": "Click the button to send verification SMS",
        "editSMS": "Edit SMS",
        "sendSMSTo": "Send to",
        "or": "or",
        "toSMS": "send a verification SMS",
        "cannotJump": "cannot jump to SMS"
      }
    },
    "id": {
      "loading": "pemuatan...",
      "loadfail": "Pemuatan gagal",
      "verifySuccess": "Verifikasi yang berhasil",
      "verifyError": "Verifikasi gagal, coba lagi",
      "verifyOutOfLimit": "Terlalu banyak kegagalan, coba lagi",
      "clickButton": "Klik untuk menyelesaikan verifikasi",
      "clickInTurn": "klik pada gilirannya",
      "clickWordInTurn": "Silakan klik teksnya secara berurutan",
      "slideTip": "Seret penggeser ke teka-teki",
      "inferenceTip": "Tukar dua peta pemulihan ubin",
      "waitForSMS": "Menunggu verifikasi SMS, tersisa",
      "popupTitle": "Silakan lengkapi verifikasi keamanan",
      "refresh": "Segar Capcha",
      "feedback": "Kirim feedback tentang masalah penggunaan",
      "switchToVoice": "Beralih ke verifikasi suara",
      "playVoice": "Mainkan kode verifikasi suara",
      "back": "kembali",
      "enterCode": "Harap masukkan semua nomor",
      "check": "verifikasi",
      "close": "Menutup",
      "notSupportVoice": "Versi browser Anda terlalu rendah untuk mendukung kode verifikasi suara",
      "intellisense": {
        "normal": "Klik untuk menyelesaikan verifikasi",
        "checking": "Inspeksi keamanan",
        "loading": "pemuatan",
        "loadfail": "Pemuatan gagal",
        "loaddone": "Klik untuk menyelesaikan verifikasi",
        "longtap": "Klik ganda dan tekan selama 0,5 detik untuk menyelesaikan verifikasi"
      },
      "sms": {
        "scanQrToSMS": "Scan QR code to send verification SMS",
        "noScanQr": "Unable to scan QR code",
        "manualSMS": "send a verification SMS manually",
        "clickToSMS": "Click the button to send verification SMS",
        "editSMS": "Edit SMS",
        "sendSMSTo": "Send to",
        "or": "or",
        "toSMS": "send a verification SMS",
        "cannotJump": "cannot jump to SMS"
      }
    },
    "my": {
      "loading": "\u1010\u1004\u103A...",
      "loadfail": "\u101D\u1014\u103A\u101B\u1014\u103A\u1019\u1021\u1031\u102C\u1004\u103A\u1019\u103C\u1004\u103A\u1001\u1032\u1037\u1015\u102B",
      "verifySuccess": "\u1005\u102D\u1005\u1005\u103A\u1021\u1010\u100A\u103A\u1015\u103C\u102F \u1021\u1031\u102C\u1004\u103A\u1019\u103C\u1004\u103A\u1019\u103E\u102F",
      "verifyError": "\u1019\u1021\u1031\u102C\u1004\u103A\u1019\u103C\u1004\u103A\u1021\u1010\u100A\u103A\u1015\u103C\u102F\u101B\u1014\u103A\u104B \u1011\u1015\u103A\u1000\u103C\u102D\u102F\u1038\u1005\u102C\u1038\u1015\u102B",
      "verifyOutOfLimit": "\u1019\u1021\u1031\u102C\u1004\u103A\u1019\u103C\u1004\u103A\u1021\u1010\u100A\u103A\u1015\u103C\u102F\u101B\u1014\u103A\u104B \u1011\u1015\u103A\u1000\u103C\u102D\u102F\u1038\u1005\u102C\u1038\u1015\u102B",
      "clickButton": "\u1021\u1010\u100A\u103A\u1015\u103C\u102F\u101B\u1014\u103A\u1001\u101C\u102F\u1010\u103A\u1000\u102D\u102F\u1000\u101C\u1005\u103A\u1014\u103E\u102D\u1015\u103A\u1015\u102B",
      "clickInTurn": "\u1021\u101C\u103E\u100A\u1037\u103A\u1021\u1010\u103D\u1000\u103A\u1000\u102D\u102F\u1000\u101C\u1005\u103A\u1014\u103E\u102D\u1015\u103A\u1015\u102B",
      "clickWordInTurn": "\u1000\u103B\u1031\u1038\u1007\u1030\u1038\u1015\u103C\u102F\u104D \u1005\u102C\u101E\u102C\u1038\u1015\u1031\u102B\u103A\u1010\u103D\u1004\u103A\u1000\u101C\u1005\u103A\u1014\u103E\u102D\u1015\u103A\u1015\u102B",
      "slideTip": "\u1015\u101F\u1031\u1020\u102D\u1016\u103C\u100A\u103A\u1037\u1005\u103D\u1000\u103A\u1016\u102D\u102F\u1037\u1006\u103D\u1032",
      "inferenceTip": "\u101C\u1032\u101C\u103E\u101A\u103A\u101B\u1031\u1038\u1014\u103E\u1005\u103A\u1001\u102F\u1021\u102F\u1015\u103A\u1000\u103C\u103D\u1015\u103A\u1015\u103C\u1014\u103A\u101C\u100A\u103A\u1014\u102C\u101C\u1014\u103A\u1011\u1030\u1015\u102F\u1036\u101B\u102D\u1015\u103A",
      "waitForSMS": "\u101A\u1004\u103A\u1038 SMS \u1021\u1010\u103D\u1000\u103A\u1005\u1031\u102C\u1004\u103A\u1037\u1006\u102D\u102F\u1004\u103A\u1038\u1014\u1031,  \u101B\u103E\u102D\u1014\u1031\u1006\u1032",
      "popupTitle": "\u1005\u102D\u1005\u1005\u103A\u1021\u1010\u100A\u103A\u1015\u103C\u102F\u1016\u103C\u100A\u103A\u1037\u1005\u103D\u1000\u103A\u1015\u1031\u1038\u1015\u102B",
      "refresh": "\u1015\u103C\u1014\u103A\u101C\u100A\u103A\u1005\u1010\u1004\u103A\u1015\u102B\u104B",
      "feedback": "\u1010\u102F\u1036\u1037\u1015\u103C\u1014\u103A\u1001\u103B\u1000\u103A\u1015\u1031\u1038\u1015\u102D\u102F\u1037\u1015\u102B",
      "switchToVoice": "\u1021\u101E\u1036\u1021\u1010\u100A\u103A\u1015\u103C\u102F\u1001\u103B\u1000\u103A\u101E\u102D\u102F\u1037\u1015\u103C\u1031\u102C\u1004\u103A\u1038\u1015\u102B",
      "playVoice": "\u1021\u101E\u1036\u1021\u1010\u100A\u103A\u1015\u103C\u102F\u1001\u103B\u1000\u103A\u1000\u102F\u1012\u103A\u1000\u102D\u102F\u1016\u103D\u1004\u1037\u103A\u1015\u102B",
      "back": "\u1015\u103C\u1014\u103A\u101C\u102C",
      "enterCode": "\u101E\u1004\u103A\u1000\u103C\u102C\u1038\u101E\u1031\u102C\u1021\u1010\u100A\u103A\u1015\u103C\u102F\u1000\u102F\u1012\u103A\u1000\u102D\u102F\u1011\u100A\u1037\u103A\u1015\u102B",
      "check": "\u1021\u1010\u100A\u103A\u1015\u103C\u102F\u1001\u103C\u1004\u103A\u1038",
      "close": "\u1015\u102D\u1010\u103A",
      "notSupportVoice": "\u101E\u1004\u103A\u104F\u1005\u1000\u102C\u1038\u101D\u103E\u1000\u103A\u1021\u1010\u100A\u103A\u1015\u103C\u102F\u1000\u102F\u1012\u103A\u1019\u103B\u102C\u1038\u1000\u102D\u102F\u1011\u1031\u102C\u1000\u103A\u1015\u1036\u1037\u101B\u1014\u103A\u101E\u1004\u103A\u104F browser \u1017\u102C\u1038\u101B\u103E\u1004\u103A\u1038\u101E\u100A\u103A\u1021\u101C\u103D\u1014\u103A\u1014\u102D\u1019\u1037\u103A\u101E\u100A\u103A",
      "intellisense": {
        "normal": "\u1021\u1010\u100A\u103A\u1015\u103C\u102F\u101B\u1014\u103A\u1001\u101C\u102F\u1010\u103A\u1000\u102D\u102F\u1000\u101C\u1005\u103A\u1014\u103E\u102D\u1015\u103A\u1015\u102B",
        "checking": "\u1021\u1010\u100A\u103A\u1015\u103C\u102F",
        "loading": "\u1010\u1004\u103A",
        "loadfail": "\u101D\u1014\u103A\u101B\u1014\u103A\u1019\u1021\u1031\u102C\u1004\u103A\u1019\u103C\u1004\u103A\u1001\u1032\u1037\u1015\u102B",
        "loaddone": "\u1005\u102D\u1005\u1005\u103A\u1021\u1010\u100A\u103A\u1015\u103C\u102F\u1016\u103C\u100A\u103A\u1037\u1005\u103D\u1000\u103A\u1015\u1031\u1038\u1015\u102B",
        "longtap": "\u1019\u103E\u1014\u103A\u1000\u1019\u103A\u1038\u1001\u103B\u1000\u103A\u1000\u102D\u102F \u1015\u103C\u102E\u1038\u1015\u103C\u1004\u103A\u1016\u102D\u102F\u1037 0.5 \u1005\u1000\u1039\u1000\u1014\u1037\u103A\u1021\u1010\u103D\u1000\u103A \u1014\u103E\u1005\u103A\u1006\u1000\u103A\u1000\u103B\u1031\u102C\u103A\u1015\u103C\u102E\u1038 \u1014\u103E\u102D\u1015\u103A\u1015\u102B"
      },
      "sms": {
        "scanQrToSMS": "Scan QR code to send verification SMS",
        "noScanQr": "Unable to scan QR code",
        "manualSMS": "send a verification SMS manually",
        "clickToSMS": "Click the button to send verification SMS",
        "editSMS": "Edit SMS",
        "sendSMSTo": "Send to",
        "or": "or",
        "toSMS": "send a verification SMS",
        "cannotJump": "cannot jump to SMS"
      }
    },
    "lo": {
      "loading": "\u0E81\u0ECD\u0EB2\u0EA5\u0EB1\u0E87\u0EC2\u0EAB\u0EA5\u0E94",
      "loadfail": "\u0E81\u0ECD\u0EB2\u0EA5\u0EB1\u0E87\u0EC2\u0EAB\u0EA5\u0E94 \u0E9A\u0ECD\u0EC8\u0EAE\u0EB9\u0EC9",
      "verifySuccess": "\u0E81\u0EB2\u0E99\u0EA2\u0EB1\u0EC9\u0E87\u0EA2\u0EB7\u0E99\u0EAA\u0EBB\u0E9A\u0E9C\u0EBB\u0E99\u0EAA\u0ECD\u0EB2\u0EC0\u0EA5\u0EB1\u0E94",
      "verifyError": "\u0E81\u0EB2\u0E99\u0EA2\u0EB7\u0E99\u0EA2\u0EB1\u0E99\u0EC4\u0E94\u0EC9\u0EA5\u0EBB\u0EC9\u0EA1\u0EC0\u0EAB\u0EA5\u0EA7, \u0E81\u0EB0\u0EA5\u0EB8\u0E99\u0EB2\u0EA5\u0EAD\u0E87\u0EAD\u0EB5\u0E81\u0E84\u0EB1\u0EC9\u0E87",
      "verifyOutOfLimit": "\u0E81\u0EB2\u0E99\u0EA2\u0EB7\u0E99\u0EA2\u0EB1\u0E99\u0EC4\u0E94\u0EC9\u0EA5\u0EBB\u0EC9\u0EA1\u0EC0\u0EAB\u0EA5\u0EA7, \u0E81\u0EB0\u0EA5\u0EB8\u0E99\u0EB2\u0EA5\u0EAD\u0E87\u0EAD\u0EB5\u0E81\u0E84\u0EB1\u0EC9\u0E87",
      "clickButton": "\u0E81\u0EBB\u0E94\u0EC0\u0E9E\u0EB7\u0EC8\u0EAD\u0EC3\u0EAB\u0EC9\u0EAA\u0ECD\u0EB2\u0EC0\u0EA5\u0EB1\u0E94\u0E81\u0EB2\u0E99\u0EA2\u0EB1\u0EC9\u0E87\u0EA2\u0EB7\u0E99",
      "clickInTurn": "\u0E81\u0EB0\u0EA5\u0EB8\u0E99\u0EB2\u0E81\u0EBB\u0E94",
      "clickWordInTurn": "\u0E81\u0EB0\u0EA5\u0EB8\u0E99\u0EB2\u0E81\u0EBB\u0E94\u0EC3\u0EAA\u0EC8\u0E82\u0ECD\u0EC9\u0E84\u0EA7\u0EB2\u0EA1\u0E95\u0EB2\u0EA1 \u0EA5\u0EB3 \u0E94\u0EB1\u0E9A",
      "slideTip": "\u0EA5\u0EB2\u0E81\u0EA5\u0EB2\u0E81\u0EA5\u0EBB\u0E87\u0EC4\u0E9B\u0E97\u0EB2\u0E87\u0E82\u0EA7\u0EB2\u0EC0\u0E9E\u0EB7\u0EC8\u0EAD\u0E95\u0EB7\u0EC8\u0EA1\u0E82\u0ECD\u0EC9\u0EA1\u0EB9\u0E99\u0EC3\u0EAA\u0EC8\u0E9B\u0EB4\u0E94",
      "inferenceTip": "\u0EC1\u0EA5\u0E81\u0E9B\u0EC8\u0EBD\u0E99\u0EAA\u0EAD\u0E87\u0EC2\u0EA5\u0EC9\u0EC0\u0E9E\u0EB7\u0EC8\u0EAD\u0EC0\u0EAE\u0EB1\u0E94\u0EC3\u0EAB\u0EC9\u0EAE\u0EB9\u0E9A\u0E9E\u0EB2\u0E9A\u0E84\u0EB7\u0E99",
      "waitForSMS": "\u0EA5\u0ECD\u0E96\u0EC9\u0EB2\u0E81\u0EB2\u0E99\u0EA2\u0EB7\u0E99\u0EA2\u0EB1\u0E99 SMS, \u0E8D\u0EB1\u0E87\u0EC0\u0EAB\u0EBC\u0EB7\u0EAD",
      "popupTitle": "\u0E81\u0EB0\u0EA5\u0EB8\u0E99\u0EB2\u0EAA\u0ECD\u0EB2\u0EC0\u0EA5\u0EB1\u0E94\u0E81\u0EB2\u0E99\u0E81\u0EA7\u0E94\u0EAA\u0EAD\u0E9A\u0E84\u0EA7\u0EB2\u0EA1\u0E9B\u0EAD\u0E94\u0EC4\u0E9E",
      "refresh": "\u0EC2\u0EAB\u0EBC\u0E94\u0EAB\u0E99\u0EC9\u0EB2\u0E88\u0ECD\u0E84\u0EB7\u0E99",
      "feedback": "\u0E9B\u0EC9\u0EB2\u0E8D\u0EA5\u0EB0\u0EAD\u0EBD\u0E9A\u0E84\u0EB3\u0EC1\u0E9B\u0E94\u0E81\u0EC8\u0EBD\u0EA7\u0E81\u0EB1\u0E9A\u0E9A\u0EB1\u0E99\u0EAB\u0EB2\u0E81\u0EB2\u0E99\u0E99\u0EB3\u0EC3\u0E8A\u0EC9",
      "switchToVoice": "\u0E9B\u0EC8\u0EBD\u0E99\u0EC4\u0E9B\u0EC3\u0E8A\u0EC9\u0E81\u0EB2\u0E99\u0E81\u0EA7\u0E94\u0EAA\u0EAD\u0E9A\u0EAA\u0EBD\u0E87",
      "playVoice": "\u0EAB\u0EBC\u0EB4\u0EC9\u0E99\u0EA5\u0EB0\u0EAB\u0EB1\u0E94\u0EA2\u0EB7\u0E99\u0EA2\u0EB1\u0E99\u0EAA\u0EBD\u0E87",
      "back": "\u0E81\u0EB1\u0E9A\u0E84\u0EB7\u0E99",
      "enterCode": "\u0EC3\u0EAA\u0EC8\u0EA5\u0EB0\u0EAB\u0EB1\u0E94\u0EA2\u0EB7\u0E99\u0EA2\u0EB1\u0E99\u0E97\u0EB5\u0EC8\u0E97\u0EC8\u0EB2\u0E99\u0EC4\u0E94\u0EC9\u0E8D\u0EB4\u0E99",
      "check": "\u0E81\u0EB2\u0E99\u0EA2\u0EB1\u0EC9\u0E87\u0EA2\u0EB7\u0E99",
      "close": "\u0E9B\u0EB4\u0E94",
      "notSupportVoice": "\u0EC0\u0EA7\u0EB5\u0E8A\u0EB1\u0E99\u0E82\u0EAD\u0E87\u0EC2\u0E9B\u0EC1\u0E81\u0EBC\u0EA1\u0E97\u0EC8\u0EAD\u0E87\u0EC0\u0EA7\u0EB1\u0E9A\u0E82\u0EAD\u0E87\u0E97\u0EC8\u0EB2\u0E99\u0E95\u0ECD\u0EC8\u0EB2\u0EC0\u0E81\u0EB5\u0E99\u0EC4\u0E9B\u0E97\u0EB5\u0EC8\u0E88\u0EB0\u0EAE\u0EAD\u0E87\u0EAE\u0EB1\u0E9A\u0EA5\u0EB0\u0EAB\u0EB1\u0E94\u0E81\u0EB2\u0E99\u0EA2\u0EB7\u0E99\u0EA2\u0EB1\u0E99\u0EAA\u0EBD\u0E87",
      "intellisense": {
        "normal": "\u0E81\u0EBB\u0E94\u0EC0\u0E9E\u0EB7\u0EC8\u0EAD\u0EC3\u0EAB\u0EC9\u0EAA\u0ECD\u0EB2\u0EC0\u0EA5\u0EB1\u0E94\u0E81\u0EB2\u0E99\u0EA2\u0EB1\u0EC9\u0E87\u0EA2\u0EB7\u0E99",
        "checking": "\u0E81\u0EB2\u0E99\u0E81\u0EA7\u0E94\u0EAA\u0EAD\u0E9A\u0E84\u0EA7\u0EB2\u0EA1\u0E9B\u0EAD\u0E94\u0EC4\u0E9E",
        "loading": "\u0E81\u0ECD\u0EB2\u0EA5\u0EB1\u0E87\u0EC2\u0EAB\u0EA5\u0E94",
        "loadfail": "\u0E81\u0ECD\u0EB2\u0EA5\u0EB1\u0E87\u0EC2\u0EAB\u0EA5\u0E94 \u0E9A\u0ECD\u0EC8\u0EAE\u0EB9\u0EC9",
        "loaddone": "\u0E81\u0EB0\u0EA5\u0EB8\u0E99\u0EB2\u0EAA\u0ECD\u0EB2\u0EC0\u0EA5\u0EB1\u0E94\u0E81\u0EB2\u0E99\u0E81\u0EA7\u0E94\u0EAA\u0EAD\u0E9A\u0E84\u0EA7\u0EB2\u0EA1\u0E9B\u0EAD\u0E94\u0EC4\u0E9E",
        "longtap": "\u0E81\u0EB0\u0EA5\u0EB8\u0E99\u0EB2\u0EC3\u0EAA\u0EC8\u0E99\u0EC0\u0EA7\u0EA5\u0EB2 \u0EC1\u0EA5\u0EB0 \u0E9B\u0EB4\u0E94\u0EC0\u0E8A\u0EB7\u0EC8\u0EAD\u0EAA\u0EB3\u0EA5\u0EB1\u0E9A\u0E9C\u0EB9\u0EC9\u0E8A\u0EC8\u0EA7\u0E8D\u0EC3\u0EAB\u0EC9\u0E82\u0EBD\u0E99\u0EC2\u0E9B\u0EA3\u0EC0\u0EC0\u0E81\u0EA3\u0EA1"
      },
      "sms": {
        "scanQrToSMS": "Scan QR code to send verification SMS",
        "noScanQr": "Unable to scan QR code",
        "manualSMS": "send a verification SMS manually",
        "clickToSMS": "Click the button to send verification SMS",
        "editSMS": "Edit SMS",
        "sendSMSTo": "Send to",
        "or": "or",
        "toSMS": "send a verification SMS",
        "cannotJump": "cannot jump to SMS"
      }
    },
    "ms": {
      "loading": "Memuatkan",
      "loadfail": "Beban gagal",
      "verifySuccess": "Pengesahan yang berjaya",
      "verifyError": "Pengesahan gagal, sila cuba lagi",
      "verifyOutOfLimit": "Gagal beberapa kali, klik Cuba lagi",
      "clickButton": "Klik untuk menyelesaikan pengesahan",
      "clickInTurn": "Sila klik",
      "clickWordInTurn": "Sila klik teks mengikut urutan",
      "slideTip": "Seret untuk menyelesaikan teka-teki",
      "inferenceTip": "Tukar dua jubin untuk memulihkan imej",
      "waitForSMS": "Menunggu pengesahan SMS, selebihnya",
      "popupTitle": "Sila lengkapkan pengesahan",
      "refresh": "segarkan semula",
      "feedback": "Hantar balas balik mengenai masalah penggunaan",
      "switchToVoice": "Tukar ke pengesahan suara",
      "playVoice": "Mainkan kod pengesahan suara",
      "back": "kembali",
      "enterCode": "Sila masukkan semua nombor",
      "check": "pengesahan",
      "close": "tutup",
      "notSupportVoice": "Versi penyemak imbas anda terlalu rendah untuk menyokong kod pengesahan suara",
      "intellisense": {
        "normal": "Klik untuk menyelesaikan pengesahan",
        "checking": "Pemeriksaan keselamatan",
        "loading": "Memuatkan",
        "loadfail": "Beban gagal",
        "loaddone": "Sila lengkapkan pengesahan",
        "longtap": "Klik ganda dan tekan selama 0.5 saat untuk selesaikan pengesahan"
      },
      "sms": {
        "scanQrToSMS": "Scan QR code to send verification SMS",
        "noScanQr": "Unable to scan QR code",
        "manualSMS": "send a verification SMS manually",
        "clickToSMS": "Click the button to send verification SMS",
        "editSMS": "Edit SMS",
        "sendSMSTo": "Send to",
        "or": "or",
        "toSMS": "send a verification SMS",
        "cannotJump": "cannot jump to SMS"
      }
    },
    "pl": {
      "loading": "\u0141adowanie...",
      "loadfail": "\u0141adowanie nie powiod\u0142o si\u0119",
      "verifySuccess": "Pomy\u015Blna weryfikacja",
      "verifyError": "B\u0142\u0105d, spr\xF3buj ponownie",
      "verifyOutOfLimit": "Zbyt wiele b\u0142\u0119d\xF3w, spr\xF3buj ponownie",
      "clickButton": "Kliknij, aby doko\u0144czy\u0107 weryfikacj\u0119",
      "clickInTurn": "kliknij po kolei",
      "clickWordInTurn": "Prosz\u0119 klikn\u0105\u0107 tekst w kolejno\u015Bci",
      "slideTip": "przeci\u0105gnij, aby uko\u0144czy\u0107 uk\u0142adank\u0119",
      "inferenceTip": "Wymie\u0144 dwie mapy redukcji p\u0142ytek",
      "waitForSMS": "czekam na SMS-y, pozosta\u0142e",
      "popupTitle": "Zako\u0144cz weryfikacj\u0119 zabezpiecze\u0144",
      "refresh": "Od\u015Bwie\u017C captch\u0119",
      "feedback": "Informacje zwrotne dotycz\u0105ce problem\xF3w z u\u017Cytkowaniem",
      "switchToVoice": "Prze\u0142\u0105cz na weryfikacj\u0119 g\u0142osow\u0105",
      "playVoice": "Odtw\xF3rz kod weryfikacyjny g\u0142osem",
      "back": "powr\xF3t",
      "enterCode": "Wpisz us\u0142yszany kod weryfikacyjny",
      "check": "weryfikacja",
      "close": "blisko",
      "notSupportVoice": "Twoja wersja przegl\u0105darki jest za niska, aby obs\u0142ugiwa\u0107 kody weryfikacji g\u0142osowej",
      "intellisense": {
        "normal": "Kliknij, aby doko\u0144czy\u0107 weryfikacj\u0119",
        "checking": "Inspekcja bezpiecze\u0144stwa",
        "loading": "\u0141adowanie",
        "loadfail": "\u0141adowanie nie powiod\u0142o si\u0119",
        "loaddone": "Zako\u0144cz weryfikacj\u0119 zabezpiecze\u0144",
        "longtap": "Podw\xF3jne klikni\u0119cie i naci\u015Bni\u0119cie przez 0,5 sekund, aby zako\u0144czy\u0107 weryfikacj\u0119"
      },
      "sms": {
        "scanQrToSMS": "Scan QR code to send verification SMS",
        "noScanQr": "Unable to scan QR code",
        "manualSMS": "send a verification SMS manually",
        "clickToSMS": "Click the button to send verification SMS",
        "editSMS": "Edit SMS",
        "sendSMSTo": "Send to",
        "or": "or",
        "toSMS": "send a verification SMS",
        "cannotJump": "cannot jump to SMS"
      }
    },
    "pt": {
      "loading": "Carregando...",
      "loadfail": "Carga falhou",
      "verifySuccess": "Verifica\xE7\xE3o bem sucedida",
      "verifyError": "Falhou, por favor tente novamente",
      "verifyOutOfLimit": "Muitas falhas, clique em Repetir",
      "clickButton": "Clique para concluir a confirma\xE7\xE3o",
      "clickInTurn": "Clique por sua vez",
      "clickWordInTurn": "Por favor, clique no texto em ordem",
      "slideTip": "Arraste para completar o quebra-cabe\xE7a",
      "inferenceTip": "Troque dois mapas de redu\xE7\xE3o de blocos",
      "waitForSMS": "Aguardando SMS, permanecendo",
      "popupTitle": "Por favor complete a verifica\xE7\xE3o",
      "refresh": "refrescar",
      "feedback": "Enviar feedback sobre problemAs de utiliza\xE7\xE3o",
      "switchToVoice": "Mudar para verifica\xE7\xE3o por voz",
      "playVoice": "Tocar c\xF3digo de verifica\xE7\xE3o de voz",
      "back": "Retorna",
      "enterCode": "Insira todos os n\xFAmeros",
      "check": "verifica\xE7\xE3o",
      "close": "perto",
      "notSupportVoice": "A vers\xE3o do seu navegador \xE9 muito baixa para suportar c\xF3digos de verifica\xE7\xE3o de voz",
      "intellisense": {
        "normal": "Clique para concluir a confirma\xE7\xE3o",
        "checking": "Na detec\xE7\xE3o de seguran\xE7a",
        "loading": "Carregando",
        "loadfail": "Carga falhou",
        "loaddone": "Por favor complete a verifica\xE7\xE3o",
        "longtap": "Clique duas vezes e pressione por 0.5 Segundos para concluir a verifica\xE7\xE3o"
      },
      "sms": {
        "scanQrToSMS": "Scan QR code to send verification SMS",
        "noScanQr": "Unable to scan QR code",
        "manualSMS": "send a verification SMS manually",
        "clickToSMS": "Click the button to send verification SMS",
        "editSMS": "Edit SMS",
        "sendSMSTo": "Send to",
        "or": "or",
        "toSMS": "send a verification SMS",
        "cannotJump": "cannot jump to SMS"
      }
    },
    "es": {
      "loading": "Cargando...",
      "loadfail": "Fall\xF3 la carga",
      "verifySuccess": "Verificaci\xF3n exitosa",
      "verifyError": "Fall\xF3, por favor intente de nuevo",
      "verifyOutOfLimit": "Demasiados fallos, haga clic en Reintentar",
      "clickButton": "Haga clic para completar la verificaci\xF3n",
      "clickInTurn": "Por favor haga clic",
      "clickWordInTurn": "Por favor haga clic en el texto en orden",
      "slideTip": "Arrastra para completar el puzzle",
      "inferenceTip": "Intercambia mapas de reducci\xF3n de fichas",
      "waitForSMS": "esperando SMS, restantes",
      "popupTitle": "Por favor complete la verificaci\xF3n",
      "refresh": "Actualizar",
      "feedback": "Enviar retroalimentaci\xF3n de problemas de uso",
      "switchToVoice": "Cambiar a verificaci\xF3n por voz",
      "playVoice": "Reproducir c\xF3digo de verificaci\xF3n de voz",
      "back": "regreso",
      "enterCode": "Ingrese todos los n\xFAmeros",
      "check": "verificaci\xF3n",
      "close": "cerrar",
      "notSupportVoice": "La versi\xF3n de su navegador es demasiado baja para admitir c\xF3digos de verificaci\xF3n de voz",
      "intellisense": {
        "normal": "Haga clic para completar la verificaci\xF3n",
        "checking": "Inspecci\xF3n de seguridad",
        "loading": "Cargando",
        "loadfail": "Fall\xF3 la carga",
        "loaddone": "Haga clic para completar la verificaci\xF3n",
        "longtap": "Haga doble clic y pulse 0,5 segundos para completar la validaci\xF3n"
      },
      "sms": {
        "scanQrToSMS": "Scan QR code to send verification SMS",
        "noScanQr": "Unable to scan QR code",
        "manualSMS": "send a verification SMS manually",
        "clickToSMS": "Click the button to send verification SMS",
        "editSMS": "Edit SMS",
        "sendSMSTo": "Send to",
        "or": "or",
        "toSMS": "send a verification SMS",
        "cannotJump": "cannot jump to SMS"
      }
    },
    "tr": {
      "loading": "Y\xFCkleniyor",
      "loadfail": "Y\xFCkleme ba\u015Far\u0131s\u0131z",
      "verifySuccess": "Ba\u015Far\u0131l\u0131 do\u011Frulama",
      "verifyError": "Ba\u015Far\u0131s\u0131z, l\xFCtfen tekrar deneyin",
      "verifyOutOfLimit": "\xC7ok fazla hata var, l\xFCtfen tekrar deneyin",
      "clickButton": "Do\u011Frulamay\u0131 tamamlamak i\xE7in t\u0131klay\u0131n",
      "clickInTurn": "s\u0131rayla t\u0131kla",
      "clickWordInTurn": "L\xFCtfen s\u0131rayla metne t\u0131klay\u0131n",
      "slideTip": "Bulmacay\u0131 tamamlamak i\xE7in s\xFCr\xFCkleyin",
      "inferenceTip": "\u0130ki kutu kurtarma haritas\u0131n\u0131 de\u011Fi\u015Ftirin",
      "waitForSMS": "SMS beklemek,  kalan",
      "popupTitle": "L\xFCtfen do\u011Frulama i\u015Flemini tamamlay\u0131n",
      "refresh": "Kaptcha yenilene",
      "feedback": "Kullan\u0131m sorunlar\u0131nda geri veri yolla",
      "switchToVoice": "Sesli do\u011Frulamaya ge\xE7",
      "playVoice": "Sesli do\u011Frulama kodunu \xE7al",
      "back": "d\xF6n\xFC\u015F",
      "enterCode": "L\xFCtfen t\xFCm say\u0131lar\u0131 girin",
      "check": "do\u011Frulama",
      "close": "kapat",
      "notSupportVoice": "Taray\u0131c\u0131 s\xFCr\xFCm\xFCn\xFCz, sesli do\u011Frulama kodlar\u0131n\u0131 destekleyemeyecek kadar d\xFC\u015F\xFCk",
      "intellisense": {
        "normal": "Do\u011Frulamay\u0131 tamamlamak i\xE7in t\u0131klay\u0131n",
        "checking": "do\u011Frulama",
        "loading": "Y\xFCkleniyor",
        "loadfail": "Y\xFCkleme ba\u015Far\u0131s\u0131z",
        "loaddone": "L\xFCtfen do\u011Frulama i\u015Flemini tamamlay\u0131n",
        "longtap": "\u0130ki kere t\u0131klay\u0131p do\u011Frulamay\u0131 tamamlamak i\xE7in 0.5 saniye bas\u0131n"
      },
      "sms": {
        "scanQrToSMS": "Scan QR code to send verification SMS",
        "noScanQr": "Unable to scan QR code",
        "manualSMS": "send a verification SMS manually",
        "clickToSMS": "Click the button to send verification SMS",
        "editSMS": "Edit SMS",
        "sendSMSTo": "Send to",
        "or": "or",
        "toSMS": "send a verification SMS",
        "cannotJump": "cannot jump to SMS"
      }
    },
    "ml": {
      "loading": "\u0D32\u0D47\u0D3E\u0D21\u0D3F\u0D02\u0D17\u0D4D...",
      "loadfail": "\u0D32\u0D4B\u0D21\u0D4D \u0D1A\u0D46\u0D2F\u0D4D\u0D2F\u0D3E\u0D28\u0D3E\u0D2F\u0D3F\u0D32\u0D4D\u0D32",
      "verifySuccess": "\u0D35\u0D3F\u0D1C\u0D2F\u0D15\u0D30\u0D2E\u0D3E\u0D2F\u0D3F \u0D2A\u0D30\u0D3F\u0D36\u0D4B\u0D27\u0D3F\u0D1A\u0D4D\u0D1A\u0D41",
      "verifyError": "\u0D2A\u0D30\u0D3E\u0D1C\u0D2F\u0D2A\u0D4D\u0D2A\u0D46\u0D1F\u0D4D\u0D1F\u0D41, \u0D35\u0D40\u0D23\u0D4D\u0D1F\u0D41\u0D02 \u0D36\u0D4D\u0D30\u0D2E\u0D3F\u0D15\u0D4D\u0D15\u0D41\u0D15",
      "verifyOutOfLimit": "\u0D2A\u0D30\u0D3E\u0D1C\u0D2F\u0D2A\u0D4D\u0D2A\u0D46\u0D1F\u0D4D\u0D1F\u0D41, \u0D35\u0D40\u0D23\u0D4D\u0D1F\u0D41\u0D02 \u0D36\u0D4D\u0D30\u0D2E\u0D3F\u0D15\u0D4D\u0D15\u0D41\u0D15",
      "clickButton": "\u0D2A\u0D30\u0D3F\u0D36\u0D4B\u0D27\u0D3F\u0D15\u0D4D\u0D15\u0D3E\u0D7B \u0D15\u0D4D\u0D32\u0D3F\u0D15\u0D4D\u0D15\u0D4D \u0D1A\u0D46\u0D2F\u0D4D\u0D2F\u0D41\u0D15",
      "clickInTurn": "\u0D15\u0D4D\u0D30\u0D2E\u0D24\u0D4D\u0D24\u0D3F\u0D7D \u0D15\u0D4D\u0D32\u0D3F\u0D15\u0D4D\u0D15\u0D41\u0D1A\u0D46\u0D2F\u0D4D\u0D2F\u0D41\u0D15",
      "clickWordInTurn": "\u0D15\u0D4D\u0D30\u0D2E\u0D24\u0D4D\u0D24\u0D3F\u0D7D \u0D1F\u0D46\u0D15\u0D4D\u0D38\u0D4D\u0D31\u0D4D\u0D31\u0D4D \u0D15\u0D4D\u0D32\u0D3F\u0D15\u0D4D\u0D15\u0D4D \u0D1A\u0D46\u0D2F\u0D4D\u0D2F\u0D41\u0D15",
      "slideTip": "\u0D26\u0D2F\u0D35\u0D3E\u0D2F\u0D3F \u0D1A\u0D3F\u0D24\u0D4D\u0D30\u0D02 \u0D2A\u0D42\u0D30\u0D3F\u0D2A\u0D4D\u0D2A\u0D3F\u0D15\u0D4D\u0D15\u0D41\u0D15",
      "inferenceTip": "\u0D1A\u0D3F\u0D24\u0D4D\u0D30\u0D02 \u0D2A\u0D41\u0D28\u0D38\u0D4D\u0D25\u0D3E\u0D2A\u0D3F\u0D15\u0D4D\u0D15\u0D41\u0D15",
      "waitForSMS": "SMS \u0D05\u0D2F\u0D2F\u0D4D\u0D15\u0D4D\u0D15\u0D41\u0D15, \u0D36\u0D47\u0D37\u0D3F\u0D15\u0D4D\u0D15\u0D41\u0D28\u0D4D\u0D28",
      "popupTitle": "\u0D38\u0D4D\u0D25\u0D3F\u0D30\u0D40\u0D15\u0D30\u0D23\u0D02 \u0D2A\u0D42\u0D7C\u0D24\u0D4D\u0D24\u0D3F\u0D2F\u0D3E\u0D15\u0D4D\u0D15\u0D41\u0D15",
      "refresh": "\u0D2A\u0D41\u0D24\u0D41\u0D15\u0D4D\u0D15\u0D41\u0D15",
      "feedback": "\u0D2B\u0D40\u0D21\u0D4D\u0D2C\u0D3E\u0D15\u0D4D\u0D15\u0D4D \u0D38\u0D2E\u0D7C\u0D2A\u0D4D\u0D2A\u0D3F\u0D15\u0D4D\u0D15\u0D41\u0D15",
      "switchToVoice": "\u0D35\u0D4B\u0D2F\u0D4D\u200C\u0D38\u0D4D \u0D2A\u0D30\u0D3F\u0D36\u0D4B\u0D27\u0D28 \u0D15\u0D4B\u0D21\u0D3F\u0D32\u0D47\u0D15\u0D4D\u0D15\u0D4D \u0D2E\u0D3E\u0D31\u0D41\u0D15",
      "playVoice": "\u0D36\u0D2C\u0D4D\u0D26 \u0D2A\u0D30\u0D3F\u0D36\u0D4B\u0D27\u0D28\u0D3E \u0D15\u0D4B\u0D21\u0D4D \u0D2A\u0D4D\u0D32\u0D47 \u0D1A\u0D46\u0D2F\u0D4D\u0D2F\u0D41\u0D15",
      "back": "\u0D2E\u0D1F\u0D15\u0D4D\u0D15\u0D02",
      "enterCode": "\u0D0E\u0D32\u0D4D\u0D32\u0D3E \u0D28\u0D2E\u0D4D\u0D2A\u0D31\u0D41\u0D15\u0D33\u0D41\u0D02 \u0D28\u0D7D\u0D15\u0D41\u0D15",
      "check": "\u0D2A\u0D30\u0D3F\u0D36\u0D4B\u0D27\u0D3F\u0D15\u0D4D\u0D15\u0D41\u0D15",
      "close": "\u0D05\u0D1F\u0D1A\u0D4D\u0D1A\u0D41\u0D2A\u0D42\u0D1F\u0D4D\u0D1F\u0D7D",
      "notSupportVoice": "\u0D32\u0D4B\u0D21\u0D4D \u0D1A\u0D46\u0D2F\u0D4D\u0D2F\u0D3E\u0D28\u0D3E\u0D2F\u0D3F\u0D32\u0D4D\u0D32",
      "intellisense": {
        "normal": "\u0D2A\u0D30\u0D3F\u0D36\u0D4B\u0D27\u0D3F\u0D15\u0D4D\u0D15\u0D3E\u0D7B \u0D15\u0D4D\u0D32\u0D3F\u0D15\u0D4D\u0D15\u0D4D \u0D1A\u0D46\u0D2F\u0D4D\u0D2F\u0D41\u0D15",
        "checking": "\u0D2A\u0D30\u0D3F\u0D36\u0D4B\u0D27\u0D3F\u0D15\u0D4D\u0D15\u0D41\u0D28\u0D4D\u0D28\u0D41",
        "loading": "\u0D32\u0D47\u0D3E\u0D21\u0D3F\u0D02\u0D17\u0D4D",
        "loadfail": "\u0D32\u0D4B\u0D21\u0D4D \u0D1A\u0D46\u0D2F\u0D4D\u0D2F\u0D3E\u0D28\u0D3E\u0D2F\u0D3F\u0D32\u0D4D\u0D32",
        "loaddone": "\u0D38\u0D4D\u0D25\u0D3F\u0D30\u0D40\u0D15\u0D30\u0D23\u0D02 \u0D2A\u0D42\u0D7C\u0D24\u0D4D\u0D24\u0D3F\u0D2F\u0D3E\u0D15\u0D4D\u0D15\u0D41\u0D15",
        "longtap": "\u0D30\u0D23\u0D4D\u0D1F\u0D41\u0D24\u0D35\u0D23 \u0D1F\u0D3E\u0D2A\u0D4D\u0D2A\u0D41\u0D1A\u0D46\u0D2F\u0D4D\u200C\u0D24\u0D4D 0.5 \u0D38\u0D46\u0D15\u0D4D\u0D15\u0D7B\u0D21\u0D4D \u0D2A\u0D3F\u0D1F\u0D3F\u0D15\u0D4D\u0D15\u0D41\u0D15"
      },
      "sms": {
        "scanQrToSMS": "Scan QR code to send verification SMS",
        "noScanQr": "Unable to scan QR code",
        "manualSMS": "send a verification SMS manually",
        "clickToSMS": "Click the button to send verification SMS",
        "editSMS": "Edit SMS",
        "sendSMSTo": "Send to",
        "or": "or",
        "toSMS": "send a verification SMS",
        "cannotJump": "cannot jump to SMS"
      }
    },
    "or": {
      "loading": "\u0B32\u0B4B\u0B21\u0B3F\u0B02 ...",
      "loadfail": "\u0B27\u0B3E\u0B30\u0B23 \u0B15\u0B30\u0B3F\u0B2C\u0B3E\u0B30\u0B47 \u0B2C\u0B3F\u0B2B\u0B33",
      "verifySuccess": "\u0B38\u0B2B\u0B33\u0B24\u0B3E\u0B30 \u0B38\u0B39\u0B3F\u0B24 \u0B2F\u0B3E\u0B1E\u0B4D\u0B1A \u0B15\u0B30\u0B3E\u0B2F\u0B3E\u0B07\u0B1B\u0B3F |",
      "verifyError": "\u0B2F\u0B3E\u0B1E\u0B4D\u0B1A \u0B2C\u0B3F\u0B2B\u0B33 \u0B39\u0B47\u0B32\u0B3E, \u0B26\u0B5F\u0B3E\u0B15\u0B30\u0B3F \u0B2A\u0B41\u0B28\u0B30\u0B4D\u0B2C\u0B3E\u0B30 \u0B1A\u0B47\u0B37\u0B4D\u0B1F\u0B3E \u0B15\u0B30\u0B28\u0B4D\u0B24\u0B41 |",
      "verifyOutOfLimit": "\u0B05\u0B24\u0B4D\u0B5F\u0B27\u0B3F\u0B15 \u0B2C\u0B3F\u0B2B\u0B33\u0B24\u0B3E, \u0B26\u0B5F\u0B3E\u0B15\u0B30\u0B3F \u0B2A\u0B41\u0B28\u0B30\u0B4D\u0B2C\u0B3E\u0B30 \u0B1A\u0B47\u0B37\u0B4D\u0B1F\u0B3E \u0B15\u0B30\u0B28\u0B4D\u0B24\u0B41 |",
      "clickButton": "\u0B2F\u0B3E\u0B1E\u0B4D\u0B1A \u0B15\u0B30\u0B3F\u0B2C\u0B3E\u0B15\u0B41 \u0B15\u0B4D\u0B32\u0B3F\u0B15\u0B4D \u0B15\u0B30\u0B28\u0B4D\u0B24\u0B41 |",
      "clickInTurn": "\u0B26\u0B5F\u0B3E\u0B15\u0B30\u0B3F \u0B15\u0B4D\u0B30\u0B2E\u0B30\u0B47 \u0B15\u0B4D\u0B32\u0B3F\u0B15\u0B4D \u0B15\u0B30\u0B28\u0B4D\u0B24\u0B41 |",
      "clickWordInTurn": "\u0B26\u0B5F\u0B3E\u0B15\u0B30\u0B3F \u0B2A\u0B3E\u0B20\u0B4D\u0B5F\u0B15\u0B41 \u0B15\u0B4D\u0B30\u0B2E\u0B30\u0B47 \u0B15\u0B4D\u0B32\u0B3F\u0B15\u0B4D \u0B15\u0B30\u0B28\u0B4D\u0B24\u0B41 |",
      "slideTip": "\u0B1A\u0B3F\u0B24\u0B4D\u0B30 \u0B2D\u0B30\u0B3F\u0B2C\u0B3E \u0B2A\u0B3E\u0B07\u0B01 \u0B1F\u0B3E\u0B07\u0B32\u0B15\u0B41 \u0B21\u0B3E\u0B39\u0B3E\u0B23\u0B15\u0B41 \u0B1F\u0B3E\u0B23\u0B28\u0B4D\u0B24\u0B41 |",
      "inferenceTip": "\u0B1A\u0B3F\u0B24\u0B4D\u0B30 \u0B2A\u0B41\u0B28\u0B30\u0B41\u0B26\u0B4D\u0B27\u0B3E\u0B30 \u0B2A\u0B3E\u0B07\u0B01 2 \u0B1F\u0B3E\u0B07\u0B32\u0B4D \u0B2C\u0B3F\u0B28\u0B3F\u0B2E\u0B5F \u0B15\u0B30\u0B28\u0B4D\u0B24\u0B41 |",
      "waitForSMS": "SMS \u0B2F\u0B3E\u0B1E\u0B4D\u0B1A \u0B2A\u0B3E\u0B07\u0B01 \u0B05\u0B2A\u0B47\u0B15\u0B4D\u0B37\u0B3E, \u0B05\u0B2C\u0B36\u0B3F\u0B37\u0B4D\u0B1F |",
      "popupTitle": "\u0B26\u0B5F\u0B3E\u0B15\u0B30\u0B3F \u0B2F\u0B3E\u0B1E\u0B4D\u0B1A \u0B38\u0B2E\u0B4D\u0B2A\u0B42\u0B30\u0B4D\u0B23\u0B4D\u0B23 \u0B15\u0B30\u0B28\u0B4D\u0B24\u0B41 |",
      "refresh": "\u0B15\u0B4B\u0B21\u0B4D \u0B38\u0B24\u0B47\u0B1C \u0B15\u0B30\u0B28\u0B4D\u0B24\u0B41 |",
      "feedback": "\u0B2E\u0B24\u0B3E\u0B2E\u0B24 \u0B26\u0B3E\u0B16\u0B32 \u0B15\u0B30\u0B28\u0B4D\u0B24\u0B41 |",
      "switchToVoice": "\u0B2D\u0B0F\u0B38\u0B4D \u0B2F\u0B3E\u0B1E\u0B4D\u0B1A \u0B15\u0B4B\u0B21\u0B4D \u0B15\u0B41 \u0B38\u0B41\u0B07\u0B1A\u0B4D \u0B15\u0B30\u0B28\u0B4D\u0B24\u0B41 |",
      "playVoice": "\u0B27\u0B4D\u0B71\u0B28\u0B3F \u0B2F\u0B3E\u0B1E\u0B4D\u0B1A \u0B15\u0B4B\u0B21\u0B4D \u0B1A\u0B32\u0B3E\u0B28\u0B4D\u0B24\u0B41 |",
      "back": "\u0B2B\u0B47\u0B30\u0B28\u0B4D\u0B24\u0B41",
      "enterCode": "\u0B06\u0B2A\u0B23 \u0B36\u0B41\u0B23\u0B41\u0B25\u0B3F\u0B2C\u0B3E \u0B2F\u0B3E\u0B1E\u0B4D\u0B1A \u0B15\u0B4B\u0B21\u0B4D \u0B2A\u0B4D\u0B30\u0B2C\u0B47\u0B36 \u0B15\u0B30\u0B28\u0B4D\u0B24\u0B41 |",
      "check": "\u0B2F\u0B3E\u0B1E\u0B4D\u0B1A \u0B15\u0B30\u0B28\u0B4D\u0B24\u0B41 |",
      "close": "\u0B2C\u0B28\u0B4D\u0B26",
      "notSupportVoice": "\u0B2D\u0B0F\u0B38\u0B4D \u0B2F\u0B3E\u0B1E\u0B4D\u0B1A \u0B15\u0B4B\u0B21\u0B4D \u0B32\u0B4B\u0B21\u0B4D \u0B15\u0B30\u0B3F\u0B2C\u0B3E\u0B30\u0B47 \u0B2C\u0B3F\u0B2B\u0B33 \u0B39\u0B47\u0B32\u0B3E |",
      "intellisense": {
        "normal": "\u0B2F\u0B3E\u0B1E\u0B4D\u0B1A \u0B38\u0B2E\u0B4D\u0B2A\u0B42\u0B30\u0B4D\u0B23\u0B4D\u0B23 \u0B15\u0B30\u0B3F\u0B2C\u0B3E\u0B15\u0B41 \u0B15\u0B4D\u0B32\u0B3F\u0B15\u0B4D \u0B15\u0B30\u0B28\u0B4D\u0B24\u0B41 |",
        "checking": "\u0B2F\u0B3E\u0B1E\u0B4D\u0B1A \u0B15\u0B30\u0B41\u0B1B\u0B3F |",
        "loading": "\u0B32\u0B4B\u0B21\u0B3F\u0B02",
        "loadfail": "\u0B27\u0B3E\u0B30\u0B23 \u0B15\u0B30\u0B3F\u0B2C\u0B3E\u0B30\u0B47 \u0B2C\u0B3F\u0B2B\u0B33",
        "loaddone": "\u0B26\u0B5F\u0B3E\u0B15\u0B30\u0B3F \u0B2F\u0B3E\u0B1E\u0B4D\u0B1A \u0B38\u0B2E\u0B4D\u0B2A\u0B42\u0B30\u0B4D\u0B23\u0B4D\u0B23 \u0B15\u0B30\u0B28\u0B4D\u0B24\u0B41 |",
        "longtap": "\u0B26\u0B41\u0B07\u0B25\u0B30 \u0B15\u0B4D\u0B32\u0B3F\u0B15\u0B4D \u0B15\u0B30\u0B28\u0B4D\u0B24\u0B41 \u0B0F\u0B2C\u0B02 0.5s \u0B2A\u0B3E\u0B07\u0B01 \u0B27\u0B30\u0B3F \u0B30\u0B16\u0B28\u0B4D\u0B24\u0B41 |"
      },
      "sms": {
        "scanQrToSMS": "Scan QR code to send verification SMS",
        "noScanQr": "Unable to scan QR code",
        "manualSMS": "send a verification SMS manually",
        "clickToSMS": "Click the button to send verification SMS",
        "editSMS": "Edit SMS",
        "sendSMSTo": "Send to",
        "or": "or",
        "toSMS": "send a verification SMS",
        "cannotJump": "cannot jump to SMS"
      }
    },
    "pa": {
      "loading": "\u0A32\u0A4B\u0A21 \u0A15\u0A40\u0A24\u0A3E \u0A1C\u0A3E \u0A30\u0A3F\u0A39\u0A3E \u0A39\u0A48 ...",
      "loadfail": "\u0A32\u0A4B\u0A21 \u0A15\u0A30\u0A28 \u0A35\u0A3F\u0A71\u0A1A \u0A05\u0A38\u0A2B\u0A32",
      "verifySuccess": "\u0A38\u0A2B\u0A32\u0A24\u0A3E\u0A2A\u0A42\u0A30\u0A35\u0A15 \u0A24\u0A38\u0A26\u0A40\u0A15 \u0A15\u0A40\u0A24\u0A3E \u0A17\u0A3F\u0A06",
      "verifyError": "\u0A05\u0A38\u0A2B\u0A32, \u0A15\u0A3F\u0A30\u0A2A\u0A3E \u0A15\u0A30\u0A15\u0A47 \u0A26\u0A41\u0A2C\u0A3E\u0A30\u0A3E \u0A15\u0A4B\u0A38\u0A3C\u0A3F\u0A38\u0A3C \u0A15\u0A30\u0A4B",
      "verifyOutOfLimit": "\u0A05\u0A38\u0A2B\u0A32, \u0A15\u0A3F\u0A30\u0A2A\u0A3E \u0A15\u0A30\u0A15\u0A47 \u0A26\u0A41\u0A2C\u0A3E\u0A30\u0A3E \u0A15\u0A4B\u0A38\u0A3C\u0A3F\u0A38\u0A3C \u0A15\u0A30\u0A4B",
      "clickButton": "\u0A24\u0A38\u0A26\u0A40\u0A15 \u0A15\u0A30\u0A28 \u0A32\u0A08 \u0A15\u0A32\u0A3F\u0A71\u0A15 \u0A15\u0A30\u0A4B",
      "clickInTurn": "\u0A15\u0A4D\u0A30\u0A2E \u0A35\u0A3F\u0A71\u0A1A \u0A15\u0A32\u0A3F\u0A71\u0A15 \u0A15\u0A30\u0A4B",
      "clickWordInTurn": "\u0A15\u0A4D\u0A30\u0A2E \u0A35\u0A3F\u0A71\u0A1A \u0A2A\u0A3E\u0A20 \u0A24\u0A47 \u0A15\u0A32\u0A3F\u0A15 \u0A15\u0A30\u0A4B",
      "slideTip": "\u0A24\u0A38\u0A35\u0A40\u0A30 \u0A28\u0A42\u0A70 \u0A2D\u0A30\u0A28 \u0A32\u0A08 \u0A1F\u0A3E\u0A07\u0A32 \u0A28\u0A42\u0A70 \u0A38\u0A71\u0A1C\u0A47 \u0A2A\u0A3E\u0A38\u0A47 \u0A16\u0A3F\u0A71\u0A1A\u0A4B",
      "inferenceTip": "\u0A15\u0A3F\u0A30\u0A2A\u0A3E \u0A15\u0A30\u0A15\u0A47 \u0A24\u0A38\u0A35\u0A40\u0A30 \u0A28\u0A42\u0A70 \u0A2E\u0A41\u0A5C \u0A38\u0A25\u0A3E\u0A2A\u0A3F\u0A24 \u0A15\u0A30\u0A4B",
      "waitForSMS": "SMS \u0A24\u0A38\u0A26\u0A40\u0A15 \u0A26\u0A40 \u0A09\u0A21\u0A40\u0A15, \u0A2C\u0A3E\u0A15\u0A40",
      "popupTitle": "\u0A15\u0A3F\u0A30\u0A2A\u0A3E \u0A15\u0A30\u0A15\u0A47 \u0A24\u0A38\u0A26\u0A40\u0A15 \u0A28\u0A42\u0A70 \u0A2A\u0A42\u0A30\u0A3E \u0A15\u0A30\u0A4B",
      "refresh": "\u0A15\u0A4B\u0A21 \u0A28\u0A42\u0A70 \u0A24\u0A3E\u0A1C\u0A3C\u0A3E \u0A15\u0A30\u0A4B",
      "feedback": "\u0A2A\u0A4D\u0A30\u0A24\u0A40\u0A15\u0A30\u0A2E \u0A26\u0A30\u0A1C \u0A15\u0A30\u0A4B",
      "switchToVoice": "\u0A35\u0A4C\u0A07\u0A38 \u0A24\u0A38\u0A26\u0A40\u0A15 \u0A15\u0A4B\u0A21 \u0A24\u0A47 \u0A38\u0A35\u0A3F\u0A1A \u0A15\u0A30\u0A4B",
      "playVoice": "\u0A27\u0A41\u0A28\u0A40 \u0A24\u0A38\u0A26\u0A40\u0A15 \u0A15\u0A4B\u0A21 \u0A1A\u0A32\u0A3E\u0A13",
      "back": "\u0A35\u0A3E\u0A2A\u0A38\u0A40",
      "enterCode": "\u0A15\u0A3F\u0A30\u0A2A\u0A3E \u0A15\u0A30\u0A15\u0A47 \u0A38\u0A3E\u0A30\u0A47 \u0A28\u0A70\u0A2C\u0A30 \u0A26\u0A3F\u0A13",
      "check": "\u0A24\u0A38\u0A26\u0A40\u0A15",
      "close": "\u0A2C\u0A70\u0A26",
      "notSupportVoice": "\u0A35\u0A4C\u0A07\u0A38 \u0A24\u0A38\u0A26\u0A40\u0A15 \u0A15\u0A4B\u0A21 \u0A32\u0A4B\u0A21 \u0A15\u0A30\u0A28 \u0A35\u0A3F\u0A71\u0A1A \u0A05\u0A38\u0A2B\u0A32 \u0A30\u0A3F\u0A39\u0A3E",
      "intellisense": {
        "normal": "\u0A24\u0A38\u0A26\u0A40\u0A15 \u0A28\u0A42\u0A70 \u0A2A\u0A42\u0A30\u0A3E \u0A15\u0A30\u0A28 \u0A32\u0A08 \u0A15\u0A32\u0A3F\u0A71\u0A15 \u0A15\u0A30\u0A4B",
        "checking": "\u0A1C\u0A3E\u0A02\u0A1A",
        "loading": "\u0A32\u0A4B\u0A21 \u0A39\u0A4B \u0A30\u0A3F\u0A39\u0A3E \u0A39\u0A48",
        "loadfail": "\u0A32\u0A4B\u0A21 \u0A15\u0A30\u0A28 \u0A35\u0A3F\u0A71\u0A1A \u0A05\u0A38\u0A2B\u0A32",
        "loaddone": "\u0A15\u0A3F\u0A30\u0A2A\u0A3E \u0A15\u0A30\u0A15\u0A47 \u0A24\u0A38\u0A26\u0A40\u0A15 \u0A15\u0A30\u0A4B",
        "longtap": "0.5 \u0A38\u0A15\u0A3F\u0A70\u0A1F \u0A32\u0A08 \u0A26\u0A4B \u0A35\u0A3E\u0A30 \u0A1F\u0A48\u0A2A \u0A15\u0A30\u0A4B \u0A05\u0A24\u0A47 \u0A39\u0A4B\u0A32\u0A21 \u0A15\u0A30\u0A4B"
      },
      "sms": {
        "scanQrToSMS": "Scan QR code to send verification SMS",
        "noScanQr": "Unable to scan QR code",
        "manualSMS": "send a verification SMS manually",
        "clickToSMS": "Click the button to send verification SMS",
        "editSMS": "Edit SMS",
        "sendSMSTo": "Send to",
        "or": "or",
        "toSMS": "send a verification SMS",
        "cannotJump": "cannot jump to SMS"
      }
    },
    "as": {
      "loading": "\u09AD\u09BE\u09B0 \u09AE\u09A7\u09CD\u09AF\u09C7 ...",
      "loadfail": "\u09AD\u09BE\u09B0 \u09AC\u09CD\u09AF\u09B0\u09CD\u09A5\u09A4\u09BE",
      "verifySuccess": "\u09AA\u09CD\u09B0\u09A4\u09BF\u09AA\u09BE\u09A6\u09A8 \u09B8\u09BE\u09AB\u09B2\u09CD\u09AF",
      "verifyError": "\u09AC\u09CD\u09AF\u09B0\u09CD\u09A5\u09A4\u09BE, \u09A6\u09AF\u09BC\u09BE \u0995\u09B0\u09C7 \u0993\u099C\u09A8 \u09AA\u09B0\u09C0\u0995\u09CD\u09B7\u09BE",
      "verifyOutOfLimit": "\u09AC\u09CD\u09AF\u09B0\u09CD\u09A5\u09A4\u09BE \uFF0C\u09A6\u09AF\u09BC\u09BE \u0995\u09B0\u09C7 \u0993\u099C\u09A8 \u09AA\u09B0\u09C0\u0995\u09CD\u09B7\u09BE",
      "clickButton": "\u09A6\u09C7\u0996\u09BE\u09B0 \u099C\u09A8\u09CD\u09AF \u0995\u09CD\u09B2\u09BF\u0995 \u0995\u09B0\u09C1\u09A8 \u0986\u099A\u09BE\u09B0 \u09AA\u09CD\u09B0\u09A4\u09BF\u09AA\u09BE\u09A6\u09A8",
      "clickInTurn": "\u09A6\u09AF\u09BC\u09BE \u0995\u09B0\u09C7 \u098F\u0995\u0995 \u09A7\u09B0\u09CD\u09AE\u0998\u099F",
      "clickWordInTurn": "\u0985\u09A8\u09C1\u09AF\u09BE\u09AF\u09BC\u09C0 \u0995\u09CD\u09B0\u09AE \u09A6\u09C7\u0996\u09BE\u09B0 \u099C\u09A8\u09CD\u09AF \u0995\u09CD\u09B2\u09BF\u0995 \u0995\u09B0\u09C1\u09A8 \u09B2\u09C7\u0996\u09BE",
      "slideTip": "\u09A1\u09BE\u09A8 \u0995\u09BE\u09A4\u09BE \u09AA\u09A6\u0995\u09CD\u09B7\u09C7\u09AA \u0985\u0999\u09CD\u0995\u09A8 \u09AA\u09CD\u09B2\u09C7\u099F \u09AD\u09B0\u09CD\u09A4\u09BF \u099B\u09AC\u09BF",
      "inferenceTip": "\u09AC\u09BF\u09A8\u09BF\u09AE\u09AF\u09BC 2\u09AE\u09BE\u09B8 \u0985\u0999\u09CD\u0995\u09A8 \u09AA\u09CD\u09B2\u09C7\u099F \u0989\u09A6\u09CD\u09A7\u09BE\u09B0 \u099B\u09AC\u09BF",
      "waitForSMS": "\u0985\u09AA\u09C7\u0995\u09CD\u09B7\u09BE \u0995\u09B0\u09C1\u09A8 \u09B8\u0982\u0995\u09CD\u09B7\u09BF\u09AA\u09CD\u09A4 \u099A\u09BF\u09A0\u09BF \u09AA\u09CD\u09B0\u09A4\u09BF\u09AA\u09BE\u09A6\u09A8\uFF0C\u0989\u09A6\u09CD\u09AC\u09C3\u09A4\u09CD\u09A4",
      "popupTitle": "\u09A6\u09AF\u09BC\u09BE \u0995\u09B0\u09C7 \u09B8\u09AE\u09CD\u09AA\u09C2\u09B0\u09CD\u09A3 \u09AA\u09CD\u09B0\u09A4\u09BF\u09AA\u09BE\u09A6\u09A8",
      "refresh": "\u09B0\u09BF\u09AB\u09CD\u09B0\u09C7\u09B6",
      "feedback": "\u099C\u09AE\u09BE \u09A6\u09BF\u09A8 \u0987\u09B8\u09CD\u09AF\u09C1 \u09AA\u09CD\u09B0\u09A4\u09BF\u0995\u09CD\u09B0\u09BF\u09AF\u09BC\u09BE",
      "switchToVoice": "\u09AA\u09BE\u09B2\u099F\u09C7 \u09AF\u09BE\u0993\u09AF\u09BC\u09BE \u09A5\u09C7\u0995\u09C7 \u0995\u09A3\u09CD\u09A0\u09B8\u09CD\u09AC\u09B0 \u09AA\u09CD\u09B0\u09A4\u09BF\u09AA\u09BE\u09A6\u09A8 \u0995\u09CB\u09A1",
      "playVoice": "\u09B8\u09AE\u09CD\u09AA\u09CD\u09B0\u099A\u09BE\u09B0 \u0995\u09A3\u09CD\u09A0\u09B8\u09CD\u09AC\u09B0 \u09AA\u09CD\u09B0\u09A4\u09BF\u09AA\u09BE\u09A6\u09A8 \u0995\u09CB\u09A1",
      "back": "\u09AA\u09CD\u09B0\u09A4\u09CD\u09AF\u09BE\u09AC\u09B0\u09CD\u09A4\u09A8",
      "enterCode": "\u09AA\u09CD\u09B0\u09AC\u09C7\u09B6 \u0995\u09B0\u09BE\u09A8 \u09B6\u09C1\u09A8\u09C1\u09A8 \u098F\u09B0 \u09AA\u09CD\u09B0\u09A4\u09BF\u09AA\u09BE\u09A6\u09A8 \u0995\u09CB\u09A1",
      "check": "\u09AA\u09CD\u09B0\u09A4\u09BF\u09AA\u09BE\u09A6\u09A8",
      "close": "\u0998\u09A8\u09BF\u09B7\u09CD\u09A0",
      "notSupportVoice": "\u0995\u09A3\u09CD\u09A0\u09B8\u09CD\u09AC\u09B0 \u09AA\u09CD\u09B0\u09A4\u09BF\u09AA\u09BE\u09A6\u09A8 \u0995\u09CB\u09A1 \u09AD\u09BE\u09B0 \u09AC\u09CD\u09AF\u09B0\u09CD\u09A5\u09A4\u09BE",
      "intellisense": {
        "normal": "\u09A6\u09C7\u0996\u09BE\u09B0 \u099C\u09A8\u09CD\u09AF \u0995\u09CD\u09B2\u09BF\u0995 \u0995\u09B0\u09C1\u09A8 \u09B8\u09AE\u09CD\u09AA\u09C2\u09B0\u09CD\u09A3 \u09AA\u09CD\u09B0\u09A4\u09BF\u09AA\u09BE\u09A6\u09A8",
        "checking": "\u09B8\u09A8\u09BE\u0995\u09CD\u09A4 \u0995\u09B0\u09C1\u09A8 \u09AE\u09A7\u09CD\u09AF\u09C7",
        "loading": "\u0986\u09AE\u09B0\u09BE \u09AD\u09BE\u09B0",
        "loadfail": "\u09AD\u09BE\u09B0 \u09AC\u09CD\u09AF\u09B0\u09CD\u09A5\u09A4\u09BE",
        "loaddone": "\u09A6\u09AF\u09BC\u09BE \u0995\u09B0\u09C7 \u09B8\u09AE\u09CD\u09AA\u09C2\u09B0\u09CD\u09A3 \u09AA\u09CD\u09B0\u09A4\u09BF\u09AA\u09BE\u09A6\u09A8",
        "longtap": "\u09A1\u09AC\u09B2 \u09A7\u09B0\u09CD\u09AE\u0998\u099F \u09AA\u09B0\u09C7 \u09A6\u09C0\u09B0\u09CD\u0998 \u09AA\u09CD\u09B0\u09C7\u09B8 0.5\u09A6\u09CD\u09AC\u09BF\u09A4\u09C0\u09AF\u09BC"
      },
      "sms": {
        "scanQrToSMS": "Scan QR code to send verification SMS",
        "noScanQr": "Unable to scan QR code",
        "manualSMS": "send a verification SMS manually",
        "clickToSMS": "Click the button to send verification SMS",
        "editSMS": "Edit SMS",
        "sendSMSTo": "Send to",
        "or": "or",
        "toSMS": "send a verification SMS",
        "cannotJump": "cannot jump to SMS"
      }
    },
    "mai": {
      "loading": "\u092D\u093E\u0930 \u092E\u0947\u0902 ...",
      "loadfail": "\u092D\u093E\u0930 \u0905\u0938\u092B\u0932\u0924\u093E",
      "verifySuccess": "\u0938\u0924\u094D\u092F\u093E\u092A\u0928 \u0938\u092B\u0932\u0924\u093E",
      "verifyError": "\u0905\u0938\u092B\u0932\u0924\u093E, \u0915\u0943\u092A\u092F\u093E \u092D\u093E\u0930 \u091F\u0947\u0938\u094D\u091F",
      "verifyOutOfLimit": "\u0905\u0938\u092B\u0932\u0924\u093E \u0906\u0935\u0943\u0924\u094D\u0924\u093F \u092C\u0939\u0941\u0924 \u091C\u094D\u092F\u093E\u0926\u093E, \u0915\u0943\u092A\u092F\u093E \u092D\u093E\u0930 \u091F\u0947\u0938\u094D\u091F",
      "clickButton": "\u0915\u094D\u0932\u093F\u0915 \u0915\u0930\u0947\u0902 \u092E\u093F\u0932 \u0915\u0930 \u0930\u0939\u0928\u093E \u0938\u0924\u094D\u092F\u093E\u092A\u0928",
      "clickInTurn": "\u0915\u0943\u092A\u092F\u093E \u0926\u092C\u093E\u090F\u0901 \u0915\u094D\u0930\u092E \u0915\u094D\u0932\u093F\u0915 \u0915\u0930\u0947\u0902",
      "clickWordInTurn": "\u0915\u0943\u092A\u092F\u093E \u0915\u0947 \u0905\u0928\u0941\u0938\u093E\u0930 \u0915\u094D\u0930\u092E \u0915\u094D\u0932\u093F\u0915 \u0915\u0930\u0947\u0902 \u0932\u0947\u0916\u0928",
      "slideTip": "\u0926\u093E\u0939\u093F\u0928\u0940 \u0913\u0930 \u0916\u0940\u0902\u091A\u0947\u0902 \u0908\u0908\u091C\u0940 \u091F\u0941\u0915\u0921\u093C\u093E \u092D\u0930\u0928\u0947 \u091A\u093F\u0924\u094D\u0930",
      "inferenceTip": "\u0935\u093F\u0928\u093F\u092E\u092F 2\u090F \u0908\u0908\u091C\u0940 \u091F\u0941\u0915\u0921\u093C\u093E \u0935\u0938\u0942\u0932\u0940 \u091A\u093F\u0924\u094D\u0930",
      "waitForSMS": "\u0930\u0941\u0915\u093F\u090F \u0915\u092E \u0917\u0941\u092E\u0928\u093E\u092E \u092A\u0924\u094D\u0930 \u0938\u0924\u094D\u092F\u093E\u092A\u0928, \u0905\u0924\u093F\u0930\u093F\u0915\u094D\u0924",
      "popupTitle": "\u0915\u0943\u092A\u092F\u093E \u0905\u0902\u091C\u093E\u092E \u0926\u0947\u0928\u093E \u0938\u0924\u094D\u092F\u093E\u092A\u0928",
      "refresh": "\u0924\u093E\u091C\u093C\u093E \u0915\u0930\u0947 \u0938\u0924\u094D\u092F\u093E\u092A\u0928 \u0915\u094B\u0921",
      "feedback": "\u091C\u092E\u093E \u0915\u0930\u0947\u0902 \u092A\u094D\u0930\u0924\u093F\u0915\u094D\u0930\u093F\u092F\u093E",
      "switchToVoice": "\u0938\u094D\u0935\u093F\u091A\u093F\u0902\u0917 \u0915\u094B \u0906\u0935\u093E\u091C\u093C \u0938\u0924\u094D\u092F\u093E\u092A\u0928 \u0915\u094B\u0921",
      "playVoice": "\u092A\u094D\u0930\u0938\u093E\u0930\u0923 \u0906\u0935\u093E\u091C\u093C \u0938\u0924\u094D\u092F\u093E\u092A\u0928 \u0915\u094B\u0921",
      "back": "\u0935\u093E\u092A\u0938\u0940",
      "enterCode": "\u0926\u0930\u094D\u091C \u0938\u0941\u0928\u094B \u0915\u093E \u0938\u0924\u094D\u092F\u093E\u092A\u0928 \u0915\u094B\u0921",
      "check": "\u0938\u0924\u094D\u092F\u093E\u092A\u0928",
      "close": "\u0936\u091F \u0921\u093E\u0909\u0928",
      "notSupportVoice": "\u0906\u0935\u093E\u091C\u093C \u0938\u0924\u094D\u092F\u093E\u092A\u0928 \u0915\u094B\u0921 \u092D\u093E\u0930 \u0905\u0938\u092B\u0932\u0924\u093E",
      "intellisense": {
        "normal": "\u0915\u094D\u0932\u093F\u0915 \u0915\u0930\u0947\u0902 \u0905\u0902\u091C\u093E\u092E \u0926\u0947\u0928\u093E \u0938\u0924\u094D\u092F\u093E\u092A\u0928",
        "checking": "\u092A\u0924\u093E \u0932\u0917\u093E\u0928\u093E \u092E\u0947\u0902",
        "loading": "\u0939\u092E \u092D\u093E\u0930",
        "loadfail": "\u092D\u093E\u0930 \u0905\u0938\u092B\u0932\u0924\u093E",
        "loaddone": "\u0915\u0943\u092A\u092F\u093E \u0905\u0902\u091C\u093E\u092E \u0926\u0947\u0928\u093E \u0938\u0924\u094D\u092F\u093E\u092A\u0928",
        "longtap": "\u0921\u092C\u0932\u094D\u0938 \u0939\u0921\u093C\u0924\u093E\u0932 \u0930\u093F\u092F\u0930 \u0932\u0902\u092C\u0947 \u0938\u092E\u092F \u0924\u0915 \u0926\u092C\u093E\u090F\u0901 0.5\u0926\u0942\u0938\u0930\u093E"
      },
      "sms": {
        "scanQrToSMS": "Scan QR code to send verification SMS",
        "noScanQr": "Unable to scan QR code",
        "manualSMS": "send a verification SMS manually",
        "clickToSMS": "Click the button to send verification SMS",
        "editSMS": "Edit SMS",
        "sendSMSTo": "Send to",
        "or": "or",
        "toSMS": "send a verification SMS",
        "cannotJump": "cannot jump to SMS"
      }
    },
    "mn": {
      "loading": "\u0410\u0447\u0430\u0430\u043B\u0436 \u0431\u0430\u0439\u043D\u0430 ...",
      "loadfail": "\u0410\u0447\u0430\u0430\u043B\u0436 \u0447\u0430\u0434\u0441\u0430\u043D\u0433\u04AF\u0439",
      "verifySuccess": "\u0410\u043C\u0436\u0438\u043B\u0442\u0442\u0430\u0439 \u0431\u0430\u0442\u0430\u043B\u0433\u0430\u0430\u0436\u0443\u0443\u043B\u0441\u0430\u043D",
      "verifyError": "\u0410\u043C\u0436\u0438\u043B\u0442\u0433\u04AF\u0439 \u0431\u043E\u043B\u043B\u043E\u043E, \u0434\u0430\u0445\u0438\u043D \u043E\u0440\u043E\u043B\u0434\u043E\u043D\u043E \u0443\u0443",
      "verifyOutOfLimit": "\u0410\u043C\u0436\u0438\u043B\u0442\u0433\u04AF\u0439 \u0431\u043E\u043B\u043B\u043E\u043E, \u0434\u0430\u0445\u0438\u043D \u043E\u0440\u043E\u043B\u0434\u043E\u043D\u043E \u0443\u0443",
      "clickButton": "\u0411\u0430\u0442\u0430\u043B\u0433\u0430\u0430\u0436\u0443\u0443\u043B\u0430\u0445\u044B\u043D \u0442\u0443\u043B\u0434 \u0434\u0430\u0440\u043D\u0430 \u0443\u0443",
      "clickInTurn": "\u0422\u0430 \u0434\u0430\u0440\u0430\u0430\u043B\u043B\u0430\u0430\u0440 \u043D\u044C \u0434\u0430\u0440\u043D\u0430 \u0443\u0443",
      "clickWordInTurn": "\u0422\u0435\u043A\u0441\u0442\u0438\u0439\u0433 \u0434\u0430\u0440\u0430\u0430\u043B\u043B\u0430\u0430\u0440 \u043D\u044C \u0434\u0430\u0440\u043D\u0430 \u0443\u0443",
      "slideTip": "\u0417\u0443\u0440\u0433\u0438\u0439\u0433 \u0431\u04E9\u0433\u043B\u04E9\u0445\u0438\u0439\u043D \u0442\u0443\u043B\u0434 \u043F\u043B\u0438\u0442\u0430 \u0447\u0438\u0440\u043D\u044D \u04AF\u04AF",
      "inferenceTip": "\u0417\u0443\u0440\u0433\u0438\u0439\u0433 \u0441\u044D\u0440\u0433\u044D\u044D\u0445\u0438\u0439\u043D \u0442\u0443\u043B\u0434 2 \u0445\u0430\u0432\u0442\u0430\u043D \u0441\u043E\u043B\u0438\u043D\u043E \u0443\u0443",
      "waitForSMS": "SMS \u0445\u04AF\u043B\u044D\u044D\u0436 \u0431\u0430\u0439\u043D\u0430, \u04AF\u043B\u0434\u0441\u044D\u043D",
      "popupTitle": "\u0411\u0430\u0442\u0430\u043B\u0433\u0430\u0430\u0436\u0443\u0443\u043B\u0430\u043B\u0442\u044B\u0433 \u0434\u0443\u0443\u0441\u0433\u0430\u043D\u0430 \u0443\u0443",
      "refresh": "\u041A\u043E\u0434 \u0448\u0438\u043D\u044D\u0447\u043B\u044D\u0445",
      "feedback": "\u0421\u0430\u043D\u0430\u043B \u0445\u04AF\u0441\u044D\u043B\u0442 \u0438\u043B\u0433\u044D\u044D\u0445",
      "switchToVoice": "\u0414\u0443\u0443\u0442 \u0431\u0430\u0442\u0430\u043B\u0433\u0430\u0430\u0436\u0443\u0443\u043B\u0430\u0445 \u043A\u043E\u0434 \u0440\u0443\u0443 \u0448\u0438\u043B\u0436\u0438\u0445",
      "playVoice": "\u0414\u0443\u0443 \u0431\u0430\u0442\u0430\u043B\u0433\u0430\u0430\u0436\u0443\u0443\u043B\u0430\u0445 \u043A\u043E\u0434\u044B\u0433 \u0442\u043E\u0433\u043B\u0443\u0443\u043B\u0430\u0445",
      "back": "\u0431\u0443\u0446\u0430\u0445",
      "enterCode": "\u0411\u0430\u0442\u0430\u043B\u0433\u0430\u0430\u0436\u0443\u0443\u043B\u0430\u0445 \u043A\u043E\u0434\u044B\u0433 \u043E\u0440\u0443\u0443\u043B\u043D\u0430 \u0443\u0443",
      "check": "\u0448\u0430\u043B\u0433\u0430\u0445",
      "close": "\u0445\u0430\u0430\u0445",
      "notSupportVoice": "\u0414\u0443\u0443\u0442 \u0431\u0430\u0442\u0430\u043B\u0433\u0430\u0430\u0436\u0443\u0443\u043B\u0430\u0445 \u043A\u043E\u0434\u044B\u0433 \u0430\u0447\u0430\u0430\u043B\u0436 \u0447\u0430\u0434\u0441\u0430\u043D\u0433\u04AF\u0439",
      "intellisense": {
        "normal": "\u0411\u0430\u0442\u0430\u043B\u0433\u0430\u0430\u0436\u0443\u0443\u043B\u0430\u043B\u0442\u044B\u0433 \u0434\u0443\u0443\u0441\u0433\u0430\u0445\u044B\u043D \u0442\u0443\u043B\u0434 \u0434\u0430\u0440\u043D\u0430 \u0443\u0443",
        "checking": "\u0448\u0430\u043B\u0433\u0430\u0436 \u0431\u0430\u0439\u043D\u0430",
        "loading": "\u0430\u0447\u0430\u0430\u043B\u0436 \u0431\u0430\u0439\u043D\u0430",
        "loadfail": "\u0410\u0447\u0430\u0430\u043B\u0436 \u0447\u0430\u0434\u0441\u0430\u043D\u0433\u04AF\u0439",
        "loaddone": "\u0411\u0430\u0442\u0430\u043B\u0433\u0430\u0430\u0436\u0443\u0443\u043B\u0430\u043B\u0442\u044B\u0433 \u0434\u0443\u0443\u0441\u0433\u0430\u043D\u0430 \u0443\u0443",
        "longtap": "\u0425\u043E\u0451\u0440 \u0442\u043E\u0432\u0448\u043E\u043E\u0434 0.5 \u0441\u0435\u043A\u0443\u043D\u0434\u044B\u043D \u0442\u0443\u0440\u0448 \u0431\u0430\u0440\u0438\u043D\u0430 \u0443\u0443"
      },
      "sms": {
        "scanQrToSMS": "Scan QR code to send verification SMS",
        "noScanQr": "Unable to scan QR code",
        "manualSMS": "send a verification SMS manually",
        "clickToSMS": "Click the button to send verification SMS",
        "editSMS": "Edit SMS",
        "sendSMSTo": "Send to",
        "or": "or",
        "toSMS": "send a verification SMS",
        "cannotJump": "cannot jump to SMS"
      }
    },
    "ug": {
      "loading": "\u064A\u06C8\u0643\u0644\u0649\u0646\u0649\u06CB\u0627\u062A\u0649\u062F\u06C7 ...",
      "loadfail": "\u064A\u06C8\u0643\u0644\u06D5\u0634 \u0645\u06D5\u063A\u0644\u06C7\u067E \u0628\u0648\u0644\u062F\u0649",
      "verifySuccess": "\u0645\u06C7\u06CB\u06D5\u067E\u067E\u06D5\u0642\u0649\u064A\u06D5\u062A\u0644\u0649\u0643 \u062A\u06D5\u0643\u0634\u06C8\u0631\u06C8\u0644\u062F\u0649",
      "verifyError": "\u0645\u06D5\u063A\u0644\u06C7\u067E \u0628\u0648\u0644\u062F\u0649 \u060C \u0642\u0627\u064A\u062A\u0627 \u0633\u0649\u0646\u0627\u06AD",
      "verifyOutOfLimit": "\u0628\u06D5\u0643 \u0643\u06C6\u067E \u0645\u06D5\u063A\u0644\u06C7\u0628\u0649\u064A\u06D5\u062A \u060C \u0642\u0627\u064A\u062A\u0627 \u0633\u0649\u0646\u0627\u06AD",
      "clickButton": "\u062F\u06D5\u0644\u0649\u0644\u0644\u06D5\u0634 \u0626\u06C8\u0686\u06C8\u0646 \u0686\u06D0\u0643\u0649\u06AD",
      "clickInTurn": "\u062A\u06D5\u0631\u062A\u0649\u067E \u0628\u0648\u064A\u0649\u0686\u06D5 \u0686\u06D0\u0643\u0649\u06AD",
      "clickWordInTurn": "\u062A\u06D5\u0631\u062A\u0649\u067E \u0628\u0648\u064A\u0649\u0686\u06D5 \u062A\u06D0\u0643\u0649\u0633\u062A\u0646\u0649 \u0686\u06D0\u0643\u0649\u06AD",
      "slideTip": "\u0643\u0627\u06BE\u0649\u0634\u0644\u0627\u0631\u0646\u0649 \u0633\u06C6\u0631\u06D5\u067E \u0631\u06D5\u0633\u0649\u0645\u0646\u0649 \u062A\u0648\u0644\u062F\u06C7\u0631\u06C7\u06AD",
      "inferenceTip": "\u0631\u06D5\u0633\u0649\u0645\u0646\u0649 \u0626\u06D5\u0633\u0644\u0649\u06AF\u06D5 \u0643\u06D5\u0644\u062A\u06C8\u0631\u06C8\u06AD",
      "waitForSMS": "\u0642\u0649\u0633\u0642\u0627 \u0626\u06C7\u0686\u06C7\u0631\u0646\u0649\u06AD \u062A\u06D5\u0643\u0634\u06C8\u0631\u06C8\u0644\u06C8\u0634\u0649\u0646\u0649 \u0633\u0627\u0642\u0644\u0627\u06CB\u0627\u062A\u0649\u062F\u06C7",
      "popupTitle": "\u062F\u06D5\u0644\u0649\u0644\u0644\u06D5\u0634\u0646\u0649 \u062A\u0627\u0645\u0627\u0645\u0644\u0627\u06AD",
      "refresh": "\u0643\u0648\u062F\u0646\u0649 \u064A\u06D0\u06AD\u0649\u0644\u0627\u0634",
      "feedback": "\u062A\u06D5\u0643\u0644\u0649\u067E-\u067E\u0649\u0643\u0649\u0631 \u064A\u0648\u0644\u0644\u0627\u06AD",
      "switchToVoice": "\u0626\u0627\u06CB\u0627\u0632 \u062F\u06D5\u0644\u0649\u0644\u0644\u06D5\u0634 \u0643\u0648\u062F\u0649\u063A\u0627 \u0626\u0627\u0644\u0645\u0627\u0634\u062A\u06C7\u0631\u06C7\u06AD",
      "playVoice": "\u0626\u0627\u06CB\u0627\u0632 \u062F\u06D5\u0644\u0649\u0644\u0644\u06D5\u0634 \u0643\u0648\u062F\u0649\u0646\u0649 \u0626\u0648\u064A\u0646\u0627\u06AD",
      "back": "\u0642\u0627\u064A\u062A\u0649\u0634",
      "enterCode": "\u0626\u0627\u06AD\u0644\u0649\u063A\u0627\u0646 \u062F\u06D5\u0644\u0649\u0644\u0644\u06D5\u0634 \u0643\u0648\u062F\u0649\u0646\u0649 \u0643\u0649\u0631\u06AF\u06C8\u0632\u06C8\u06AD",
      "check": "\u062F\u06D5\u0644\u0649\u0644\u0644\u06D5\u06AD",
      "close": "\u062A\u0627\u0642\u0627\u0634",
      "notSupportVoice": "\u0626\u0627\u06CB\u0627\u0632 \u062F\u06D5\u0644\u0649\u0644\u0644\u06D5\u0634 \u0643\u0648\u062F\u0649 \u064A\u06C8\u0643\u0644\u06D5\u0646\u0645\u0649\u062F\u0649",
      "intellisense": {
        "normal": "\u062F\u06D5\u0644\u0649\u0644\u0644\u06D5\u0634\u0646\u0649 \u062A\u0627\u0645\u0627\u0645\u0644\u0627\u0634 \u0626\u06C8\u0686\u06C8\u0646 \u0686\u06D0\u0643\u0649\u06AD",
        "checking": "\u062A\u06D5\u0643\u0634\u06C8\u0631\u06C8\u0634",
        "loading": "\u064A\u06C8\u0643\u0644\u06D5\u06CB\u0627\u062A\u0649\u062F\u06C7",
        "loadfail": "\u064A\u06C8\u0643\u0644\u06D5\u0634 \u0645\u06D5\u063A\u0644\u06C7\u067E \u0628\u0648\u0644\u062F\u0649",
        "loaddone": "\u062F\u06D5\u0644\u0649\u0644\u0644\u06D5\u0634\u0646\u0649 \u062A\u0627\u0645\u0627\u0645\u0644\u0627\u06AD",
        "longtap": "\u0642\u0648\u0634 \u0686\u06D0\u0643\u0649\u067E 0.5 \u0633\u06D0\u0643\u06C7\u0646\u062A \u0633\u0627\u0642\u0644\u0627\u06AD"
      },
      "sms": {
        "scanQrToSMS": "Scan QR code to send verification SMS",
        "noScanQr": "Unable to scan QR code",
        "manualSMS": "send a verification SMS manually",
        "clickToSMS": "Click the button to send verification SMS",
        "editSMS": "Edit SMS",
        "sendSMSTo": "Send to",
        "or": "or",
        "toSMS": "send a verification SMS",
        "cannotJump": "cannot jump to SMS"
      }
    },
    "pt-br": {
      "loading": "carregando...",
      "loadfail": "Falha ao carregar",
      "verifySuccess": "Verificado com sucesso",
      "verifyError": "Falha, por favor tente novamente",
      "verifyOutOfLimit": "Muitas falhas, por favor, tente novamente",
      "clickButton": "Clique para verificar",
      "clickInTurn": "Por favor clique em ordem",
      "clickWordInTurn": "Por favor clique no texto em ordem",
      "slideTip": "Arraste e restaure a imagem",
      "inferenceTip": "Troque 2 blocos para restaurar as fotos",
      "waitForSMS": "Aguardando verifica\xE7\xE3o de SMS, restante",
      "popupTitle": "Por favor, complete a verifica\xE7\xE3o",
      "refresh": "refrescar",
      "feedback": "Enviar feedback",
      "switchToVoice": "Mudar para o c\xF3digo de verifica\xE7\xE3o de voz",
      "playVoice": "Tocar c\xF3digo de verifica\xE7\xE3o de som",
      "back": "Retorna",
      "enterCode": "Insira todos os n\xFAmeros",
      "check": "verificar",
      "close": "fecho",
      "notSupportVoice": "O c\xF3digo de verifica\xE7\xE3o de voz falhou ao carregar",
      "intellisense": {
        "normal": "Clique para concluir a verifica\xE7\xE3o",
        "checking": "checando",
        "loading": "carregando",
        "loadfail": "Falha ao carregar",
        "loaddone": "Por favor, complete a verifica\xE7\xE3o",
        "longtap": "Toque duas vezes e segure por 0,5 segundos"
      },
      "sms": {
        "scanQrToSMS": "Scan QR code to send verification SMS",
        "noScanQr": "Unable to scan QR code",
        "manualSMS": "send a verification SMS manually",
        "clickToSMS": "Click the button to send verification SMS",
        "editSMS": "Edit SMS",
        "sendSMSTo": "Send to",
        "or": "or",
        "toSMS": "send a verification SMS",
        "cannotJump": "cannot jump to SMS"
      }
    },
    "es-la": {
      "loading": "cargando...",
      "loadfail": "Fall\xF3 al cargar",
      "verifySuccess": "Verificado con \xE9xito",
      "verifyError": "Fall\xF3, int\xE9ntelo de nuevo",
      "verifyOutOfLimit": "Demasiados fallos, int\xE9ntalo de nuevo.",
      "clickButton": "Haga clic para verificar",
      "clickInTurn": "Por favor haga clic en orden",
      "clickWordInTurn": "Haga clic en el texto en orden",
      "slideTip": "Arrastra mosaicos para llenar la imagen",
      "inferenceTip": "Intercambia 2 mosaicos para restaurar im\xE1genes",
      "waitForSMS": "Esperando la verificaci\xF3n por SMS, queda",
      "popupTitle": "Completa la verificaci\xF3n",
      "refresh": "Actualizar c\xF3digo",
      "feedback": "Enviar comentarios",
      "switchToVoice": "Cambiar al c\xF3digo de verificaci\xF3n de voz",
      "playVoice": "Reproducir c\xF3digo de verificaci\xF3n de sonido",
      "back": "regresar",
      "enterCode": "Ingrese todos los n\xFAmeros",
      "check": "verificar",
      "close": "cierre",
      "notSupportVoice": "No se pudo cargar el c\xF3digo de verificaci\xF3n de voz",
      "intellisense": {
        "normal": "Haga clic para completar la verificaci\xF3n",
        "checking": "comprobaci\xF3n",
        "loading": "cargando",
        "loadfail": "Fall\xF3 al cargar",
        "loaddone": "Completa la verificaci\xF3n",
        "longtap": "Toque dos veces y mant\xE9ngalo presionado durante 0,5 segundos"
      },
      "sms": {
        "scanQrToSMS": "Scan QR code to send verification SMS",
        "noScanQr": "Unable to scan QR code",
        "manualSMS": "send a verification SMS manually",
        "clickToSMS": "Click the button to send verification SMS",
        "editSMS": "Edit SMS",
        "sendSMSTo": "Send to",
        "or": "or",
        "toSMS": "send a verification SMS",
        "cannotJump": "cannot jump to SMS"
      }
    },
    "sv": {
      "loading": "l\xE4ser in...",
      "loadfail": "Misslyckades att ladda",
      "verifySuccess": "Verifierad",
      "verifyError": "Misslyckades, f\xF6rs\xF6k igen",
      "verifyOutOfLimit": "F\xF6r m\xE5nga fel, f\xF6rs\xF6k igen",
      "clickButton": "Klicka f\xF6r att verifiera",
      "clickInTurn": "Klicka i ordning",
      "clickWordInTurn": "Klicka p\xE5 texten i ordning",
      "slideTip": "Dra brickan \xE5t h\xF6ger f\xF6r att fylla bilden",
      "inferenceTip": "Byt ut 2 brickor f\xF6r att \xE5terst\xE4lla bilder",
      "waitForSMS": "V\xE4ntar p\xE5 SMS -verifiering, \xE5terst\xE5r",
      "popupTitle": "Fyll i verifieringen",
      "refresh": "uppdatera",
      "feedback": "Skicka feedback",
      "switchToVoice": "Byt till r\xF6stverifieringskod",
      "playVoice": "Spela r\xF6stverifieringskod",
      "back": "l\xE4mna tillbaka",
      "enterCode": "Ange verifieringskoden du h\xF6r",
      "check": "kontrollera",
      "close": "st\xE4ngning",
      "notSupportVoice": "R\xF6stverifieringskoden kunde inte laddas",
      "intellisense": {
        "normal": "Klicka f\xF6r att slutf\xF6ra verifieringen",
        "checking": "kontroll",
        "loading": "l\xE4ser in",
        "loadfail": "Misslyckades att ladda",
        "loaddone": "Fyll i verifieringen",
        "longtap": "Dubbeltryck och h\xE5ll kvar i 0,5 sekunder"
      },
      "sms": {
        "scanQrToSMS": "Scan QR code to send verification SMS",
        "noScanQr": "Unable to scan QR code",
        "manualSMS": "send a verification SMS manually",
        "clickToSMS": "Click the button to send verification SMS",
        "editSMS": "Edit SMS",
        "sendSMSTo": "Send to",
        "or": "or",
        "toSMS": "send a verification SMS",
        "cannotJump": "cannot jump to SMS"
      }
    },
    "no": {
      "loading": "Laster inn ...",
      "loadfail": "Kunne ikke laste",
      "verifySuccess": "Verifisert",
      "verifyError": "Mislyktes. Pr\xF8v igjen",
      "verifyOutOfLimit": "For mange feil, vennligst pr\xF8v igjen",
      "clickButton": "Klikk her for \xE5 bekrefte",
      "clickInTurn": "Klikk i rekkef\xF8lge",
      "clickWordInTurn": "Klikk p\xE5 teksten i rekkef\xF8lge",
      "slideTip": "Dra flisen til h\xF8yre for \xE5 fylle bildet",
      "inferenceTip": "Bytt 2 fliser for \xE5 gjenopprette bilder",
      "waitForSMS": "Venter p\xE5 SMS-bekreftelse, gjenv\xE6rende",
      "popupTitle": "Fullf\xF8r bekreftelsen",
      "refresh": "forfriske",
      "feedback": "Send inn tilbakemelding",
      "switchToVoice": "Bytt til stemmebekreftelseskode",
      "playVoice": "Spill av stemmebekreftelseskode",
      "back": "komme tilbake",
      "enterCode": "Skriv inn bekreftelseskoden du h\xF8rer",
      "check": "bekrefte",
      "close": "nedleggelse",
      "notSupportVoice": "Stemmebekreftelseskoden kunne ikke lastes inn",
      "intellisense": {
        "normal": "Klikk for \xE5 fullf\xF8re bekreftelsen",
        "checking": "sjekker",
        "loading": "laster",
        "loadfail": "Kunne ikke laste",
        "loaddone": "Fullf\xF8r bekreftelsen",
        "longtap": "Dobbelttrykk og hold inne i 0,5 sekunder"
      },
      "sms": {
        "scanQrToSMS": "Scan QR code to send verification SMS",
        "noScanQr": "Unable to scan QR code",
        "manualSMS": "send a verification SMS manually",
        "clickToSMS": "Click the button to send verification SMS",
        "editSMS": "Edit SMS",
        "sendSMSTo": "Send to",
        "or": "or",
        "toSMS": "send a verification SMS",
        "cannotJump": "cannot jump to SMS"
      }
    },
    "da": {
      "loading": "Indl\xE6ser...",
      "loadfail": "Kan ikke indl\xE6ses",
      "verifySuccess": "Verificeret med succes",
      "verifyError": "Det mislykkedes. Pr\xF8v igen",
      "verifyOutOfLimit": "For mange fejl. Pr\xF8v igen",
      "clickButton": "Klik for at bekr\xE6fte",
      "clickInTurn": "Klik venligst i r\xE6kkef\xF8lge",
      "clickWordInTurn": "Klik p\xE5 teksten i r\xE6kkef\xF8lge",
      "slideTip": "Tr\xE6k flisen til h\xF8jre for at udfylde billedet",
      "inferenceTip": "Udveks 2 fliser for at gendanne billeder",
      "waitForSMS": "Venter p\xE5 SMS -verifikation, resterende",
      "popupTitle": "Afslut verifikationen",
      "refresh": "Opdater kode",
      "feedback": "Send feedback",
      "switchToVoice": "Skift til stemmebekr\xE6ftelseskode",
      "playVoice": "Afspil stemmebekr\xE6ftelseskode",
      "back": "Vend tilbage",
      "enterCode": "Indtast det tal, du h\xF8rer",
      "check": "verificere",
      "close": "lukning",
      "notSupportVoice": "Stemmeverifikationskoden kunne ikke indl\xE6ses",
      "intellisense": {
        "normal": "Klik for at fuldf\xF8re bekr\xE6ftelsen",
        "checking": "kontrol",
        "loading": "Indl\xE6ser",
        "loadfail": "Kan ikke indl\xE6ses",
        "loaddone": "Afslut verifikationen",
        "longtap": "Dobbelttryk og hold den nede i 0,5 sekunder"
      },
      "sms": {
        "scanQrToSMS": "Scan QR code to send verification SMS",
        "noScanQr": "Unable to scan QR code",
        "manualSMS": "send a verification SMS manually",
        "clickToSMS": "Click the button to send verification SMS",
        "editSMS": "Edit SMS",
        "sendSMSTo": "Send to",
        "or": "or",
        "toSMS": "send a verification SMS",
        "cannotJump": "cannot jump to SMS"
      }
    },
    "cs": {
      "loading": "Na\u010D\xEDt\xE1n\xED...",
      "loadfail": "Nepovedlo se na\u010D\xEDst",
      "verifySuccess": "Ov\u011B\u0159eno \xFAsp\u011B\u0161n\u011B",
      "verifyError": "Selhalo, zkuste to pros\xEDm znovu",
      "verifyOutOfLimit": "P\u0159\xEDli\u0161 mnoho selh\xE1n\xED, zkuste to znovu",
      "clickButton": "Kliknut\xEDm ov\u011B\u0159te",
      "clickInTurn": "Klikn\u011Bte pros\xEDm v po\u0159ad\xED",
      "clickWordInTurn": "Klikn\u011Bte na text v po\u0159ad\xED",
      "slideTip": "Obr\xE1zek vypln\xEDte p\u0159eta\u017Een\xEDm dla\u017Edic",
      "inferenceTip": "Chcete -li obnovit obr\xE1zky, vym\u011B\u0148te 2 dla\u017Edice",
      "waitForSMS": "\u010Cek\xE1n\xED na ov\u011B\u0159en\xED SMS, zb\xFDv\xE1",
      "popupTitle": "Vypl\u0148te pros\xEDm ov\u011B\u0159en\xED",
      "refresh": "Obnovit k\xF3d",
      "feedback": "Odeslat zp\u011Btnou vazbu",
      "switchToVoice": "P\u0159epnout na hlasov\xFD ov\u011B\u0159ovac\xED k\xF3d",
      "playVoice": "P\u0159ehr\xE1t ov\u011B\u0159ovac\xED k\xF3d zvuku",
      "back": "vr\xE1tit se",
      "enterCode": "Zadejte ov\u011B\u0159ovac\xED k\xF3d, kter\xFD usly\u0161\xEDte",
      "check": "ov\u011B\u0159it",
      "close": "uzav\u0159en\xED",
      "notSupportVoice": "Na\u010Dten\xED k\xF3du hlasov\xE9ho ov\u011B\u0159en\xED se nezda\u0159ilo",
      "intellisense": {
        "normal": "Kliknut\xEDm dokon\u010D\xEDte ov\u011B\u0159en\xED",
        "checking": "kontrola",
        "loading": "na\u010D\xEDt\xE1n\xED",
        "loadfail": "Nepovedlo se na\u010D\xEDst",
        "loaddone": "Vypl\u0148te pros\xEDm ov\u011B\u0159en\xED",
        "longtap": "Poklepejte a podr\u017Ete 0,5 sekundy"
      },
      "sms": {
        "scanQrToSMS": "Scan QR code to send verification SMS",
        "noScanQr": "Unable to scan QR code",
        "manualSMS": "send a verification SMS manually",
        "clickToSMS": "Click the button to send verification SMS",
        "editSMS": "Edit SMS",
        "sendSMSTo": "Send to",
        "or": "or",
        "toSMS": "send a verification SMS",
        "cannotJump": "cannot jump to SMS"
      }
    },
    "hu": {
      "loading": "Bet\xF6lt\xE9s...",
      "loadfail": "Sikertelen bet\xF6lt\xE9s",
      "verifySuccess": "Sikeresen ellen\u0151rizve",
      "verifyError": "Nem siker\xFClt, pr\xF3b\xE1lja \xFAjra",
      "verifyOutOfLimit": "T\xFAl sok a hiba, pr\xF3b\xE1lja \xFAjra",
      "clickButton": "Kattintson az ellen\u0151rz\xE9shez",
      "clickInTurn": "K\xE9rj\xFCk, kattintson a sorrendben",
      "clickWordInTurn": "K\xE9rj\xFCk, kattintson a sz\xF6vegre sorrendben",
      "slideTip": "H\xFAzza a lapokat a k\xE9p kit\xF6lt\xE9s\xE9hez",
      "inferenceTip": "K\xE9rj\xFCk, \xE1ll\xEDtsa vissza a k\xE9pet",
      "waitForSMS": "V\xE1rakoz\xE1s az SMS -ellen\u0151rz\xE9sre, h\xE1tral\xE9v\u0151",
      "popupTitle": "K\xE9rj\xFCk, fejezze be az ellen\u0151rz\xE9st",
      "refresh": "Friss\xEDt\xE9si k\xF3d",
      "feedback": "Visszajelz\xE9s k\xFCld\xE9se",
      "switchToVoice": "V\xE1ltson hangellen\u0151rz\u0151 k\xF3dra",
      "playVoice": "Hang ellen\u0151rz\u0151 k\xF3d lej\xE1tsz\xE1sa",
      "back": "Visszat\xE9r\xE9s",
      "enterCode": "\xCDrja be a hallott ellen\u0151rz\u0151 k\xF3dot",
      "check": "ellen\u0151rizze",
      "close": "bez\xE1r\xE1s",
      "notSupportVoice": "Nem siker\xFClt bet\xF6lteni a hangf\xE1jlt",
      "intellisense": {
        "normal": "Kattintson az ellen\u0151rz\xE9s befejez\xE9s\xE9hez",
        "checking": "ellen\u0151rz\xE9se",
        "loading": "Bet\xF6lt\xE9s",
        "loadfail": "Sikertelen bet\xF6lt\xE9s",
        "loaddone": "K\xE9rj\xFCk, fejezze be az ellen\u0151rz\xE9st",
        "longtap": "Koppintson dupl\xE1n \xE9s tartsa lenyomva 0,5 m\xE1sodpercig"
      },
      "sms": {
        "scanQrToSMS": "Scan QR code to send verification SMS",
        "noScanQr": "Unable to scan QR code",
        "manualSMS": "send a verification SMS manually",
        "clickToSMS": "Click the button to send verification SMS",
        "editSMS": "Edit SMS",
        "sendSMSTo": "Send to",
        "or": "or",
        "toSMS": "send a verification SMS",
        "cannotJump": "cannot jump to SMS"
      }
    },
    "sk": {
      "loading": "Na\u010D\xEDtava...",
      "loadfail": "Nepodarilo sa na\u010D\xEDta\u0165",
      "verifySuccess": "Overen\xE9 \xFAspe\u0161ne",
      "verifyError": "Ne\xFAspe\u0161n\xE9, sk\xFAste to znova",
      "verifyOutOfLimit": "Pr\xEDli\u0161 ve\u013Ea zlyhan\xED, sk\xFAste to znova",
      "clickButton": "Kliknut\xEDm over\xEDte",
      "clickInTurn": "Kliknite pros\xEDm v porad\xED",
      "clickWordInTurn": "Kliknite na text v porad\xED",
      "slideTip": "Potiahnut\xEDm dla\u017Ed\xEDc vypln\xEDte obr\xE1zok",
      "inferenceTip": "V\xFDmenou 2 dla\u017Ed\xEDc obnov\xEDte obr\xE1zky",
      "waitForSMS": "\u010Cak\xE1 sa na SMS, zost\xE1va",
      "popupTitle": "Dokon\u010Dite overenie",
      "refresh": "Obnovte k\xF3d",
      "feedback": "Odosla\u0165 sp\xE4tn\xFA v\xE4zbu",
      "switchToVoice": "Prepn\xFA\u0165 na overovac\xED k\xF3d hlasu",
      "playVoice": "Zahrajte si overovac\xED k\xF3d zvuku",
      "back": "vr\xE1ti\u0165 sa",
      "enterCode": "Zadajte \u010D\xEDslo, ktor\xE9 po\u010Dujete",
      "check": "overi\u0165",
      "close": "zatv\xE1ranie",
      "notSupportVoice": "Na\u010D\xEDtanie k\xF3du hlasov\xE9ho overenia sa nepodarilo",
      "intellisense": {
        "normal": "Kliknut\xEDm dokon\u010D\xEDte overenie",
        "checking": "kontrola",
        "loading": "na\u010D\xEDtava",
        "loadfail": "Nepodarilo sa na\u010D\xEDta\u0165",
        "loaddone": "Dokon\u010Dite overenie",
        "longtap": "Dvojit\xFDm kliknut\xEDm a podr\u017Ean\xEDm po dobu 0,5 sekundy dokon\u010D\xEDte overenie"
      },
      "sms": {
        "scanQrToSMS": "Scan QR code to send verification SMS",
        "noScanQr": "Unable to scan QR code",
        "manualSMS": "send a verification SMS manually",
        "clickToSMS": "Click the button to send verification SMS",
        "editSMS": "Edit SMS",
        "sendSMSTo": "Send to",
        "or": "or",
        "toSMS": "send a verification SMS",
        "cannotJump": "cannot jump to SMS"
      }
    },
    "ro": {
      "loading": "Se \xEEncarc\u0103...",
      "loadfail": "Incarcarea a esuat",
      "verifySuccess": "Verificat cu succes",
      "verifyError": "Nu a reu\u0219it, \xEEncerca\u021Bi din nou",
      "verifyOutOfLimit": "Prea multe e\u0219ecuri, \xEEncerca\u021Bi din nou",
      "clickButton": "Face\u021Bi clic pentru a verifica",
      "clickInTurn": "V\u0103 rug\u0103m s\u0103 face\u021Bi clic \xEEn ordine",
      "clickWordInTurn": "V\u0103 rug\u0103m s\u0103 face\u021Bi clic pe text \xEEn ordine",
      "slideTip": "Trage\u021Bi dale pentru a umple imaginea",
      "inferenceTip": "Schimba\u021Bi 2 dale pentru a restabili imaginile",
      "waitForSMS": "Se a\u0219teapt\u0103 verificarea prin SMS, r\u0103m\xE2ne",
      "popupTitle": "V\u0103 rug\u0103m s\u0103 completa\u021Bi verificarea",
      "refresh": "Actualiza\u021Bi codul",
      "feedback": "Trimite parerea ta",
      "switchToVoice": "Trece\u021Bi la codul de verificare vocal\u0103",
      "playVoice": "Reda\u021Bi codul de verificare a sunetului",
      "back": "\xEEntoarcere",
      "enterCode": "Introduce\u021Bi num\u0103rul auzit",
      "check": "verifica",
      "close": "\xEEnchidere",
      "notSupportVoice": "Codul de verificare vocal\u0103 nu a putut fi \xEEnc\u0103rcat",
      "intellisense": {
        "normal": "Face\u021Bi clic pentru a finaliza verificarea",
        "checking": "control",
        "loading": "Se \xEEncarc\u0103",
        "loadfail": "Incarcarea a esuat",
        "loaddone": "V\u0103 rug\u0103m s\u0103 completa\u021Bi verificarea",
        "longtap": "Atinge\u021Bi de dou\u0103 ori \u0219i \u021Bine\u021Bi ap\u0103sat timp de 0,5 secunde"
      },
      "sms": {
        "scanQrToSMS": "Scan QR code to send verification SMS",
        "noScanQr": "Unable to scan QR code",
        "manualSMS": "send a verification SMS manually",
        "clickToSMS": "Click the button to send verification SMS",
        "editSMS": "Edit SMS",
        "sendSMSTo": "Send to",
        "or": "or",
        "toSMS": "send a verification SMS",
        "cannotJump": "cannot jump to SMS"
      }
    },
    "el": {
      "loading": "\u03A6\u03CC\u03C1\u03C4\u03C9\u03C3\u03B7...",
      "loadfail": "\u0391\u03C0\u03AD\u03C4\u03C5\u03C7\u03B5 \u03BD\u03B1 \u03C6\u03BF\u03C1\u03C4\u03CE\u03C3\u03B5\u03B9",
      "verifySuccess": "\u0395\u03C0\u03B1\u03BB\u03B7\u03B8\u03B5\u03CD\u03C4\u03B7\u03BA\u03B5 \u03BC\u03B5 \u03B5\u03C0\u03B9\u03C4\u03C5\u03C7\u03AF\u03B1",
      "verifyError": "\u0391\u03C0\u03BF\u03C4\u03C5\u03C7\u03AF\u03B1, \u03B4\u03BF\u03BA\u03B9\u03BC\u03AC\u03C3\u03C4\u03B5 \u03BE\u03B1\u03BD\u03AC",
      "verifyOutOfLimit": "\u03A0\u03AC\u03C1\u03B1 \u03C0\u03BF\u03BB\u03BB\u03AD\u03C2 \u03B1\u03C0\u03BF\u03C4\u03C5\u03C7\u03AF\u03B5\u03C2, \u03B4\u03BF\u03BA\u03B9\u03BC\u03AC\u03C3\u03C4\u03B5 \u03BE\u03B1\u03BD\u03AC",
      "clickButton": "\u039A\u03AC\u03BD\u03C4\u03B5 \u03BA\u03BB\u03B9\u03BA \u03B3\u03B9\u03B1 \u03B5\u03C0\u03B1\u03BB\u03AE\u03B8\u03B5\u03C5\u03C3\u03B7",
      "clickInTurn": "\u039A\u03AC\u03BD\u03C4\u03B5 \u03BA\u03BB\u03B9\u03BA \u03BC\u03B5 \u03C4\u03B7 \u03C3\u03B5\u03B9\u03C1\u03AC",
      "clickWordInTurn": "\u039A\u03AC\u03BD\u03C4\u03B5 \u03BA\u03BB\u03B9\u03BA \u03C3\u03C4\u03BF \u03BA\u03B5\u03AF\u03BC\u03B5\u03BD\u03BF \u03BC\u03B5 \u03C4\u03B7 \u03C3\u03B5\u03B9\u03C1\u03AC",
      "slideTip": "\u03A3\u03CD\u03C1\u03B5\u03C4\u03B5 \u03BA\u03B1\u03B9 \u03B5\u03C0\u03B1\u03BD\u03B1\u03C6\u03AD\u03C1\u03B5\u03C4\u03B5 \u03C4\u03B7\u03BD \u03B5\u03B9\u03BA\u03CC\u03BD\u03B1",
      "inferenceTip": "\u03A0\u03B1\u03C1\u03B1\u03BA\u03B1\u03BB\u03BF\u03CD\u03BC\u03B5 \u03B5\u03C0\u03B1\u03BD\u03B1\u03C6\u03AD\u03C1\u03B5\u03C4\u03B5 \u03C4\u03B7\u03BD \u03B5\u03B9\u03BA\u03CC\u03BD\u03B1",
      "waitForSMS": "\u0391\u03BD\u03B1\u03BC\u03BF\u03BD\u03AE \u03B3\u03B9\u03B1 \u03B5\u03C0\u03B1\u03BB\u03AE\u03B8\u03B5\u03C5\u03C3\u03B7 SMS, \u03B1\u03C0\u03BF\u03BC\u03AD\u03BD\u03B5\u03B9",
      "popupTitle": "\u039F\u03BB\u03BF\u03BA\u03BB\u03B7\u03C1\u03CE\u03C3\u03C4\u03B5 \u03C4\u03B7\u03BD \u03B5\u03C0\u03B1\u03BB\u03AE\u03B8\u03B5\u03C5\u03C3\u03B7",
      "refresh": "\u03A6\u03C1\u03B5\u03C3\u03BA\u03AC\u03C1\u03C9",
      "feedback": "\u03A5\u03C0\u03BF\u03B2\u03AC\u03BB\u03B5\u03C4\u03B5 \u03C3\u03C7\u03CC\u03BB\u03B9\u03B1",
      "switchToVoice": "\u039C\u03B5\u03C4\u03AC\u03B2\u03B1\u03C3\u03B7 \u03C3\u03B5 \u03BA\u03C9\u03B4\u03B9\u03BA\u03CC \u03C6\u03C9\u03BD\u03B7\u03C4\u03B9\u03BA\u03AE\u03C2 \u03B5\u03C0\u03B1\u03BB\u03AE\u03B8\u03B5\u03C5\u03C3\u03B7\u03C2",
      "playVoice": "\u0391\u03BD\u03B1\u03C0\u03B1\u03C1\u03B1\u03B3\u03C9\u03B3\u03AE \u03BA\u03C9\u03B4\u03B9\u03BA\u03BF\u03CD \u03B5\u03C0\u03B1\u03BB\u03AE\u03B8\u03B5\u03C5\u03C3\u03B7\u03C2 \u03AE\u03C7\u03BF\u03C5",
      "back": "\u0395\u03A0\u0399\u03A3\u03A4\u03A1\u039F\u03A6\u0397",
      "enterCode": "\u0395\u03B9\u03C3\u03B1\u03B3\u03AC\u03B3\u03B5\u03C4\u03B5 \u03C4\u03BF\u03BD \u03B1\u03C1\u03B9\u03B8\u03BC\u03CC",
      "check": "\u03B5\u03C0\u03B1\u03BB\u03B7\u03B8\u03B5\u03CD\u03C9",
      "close": "\u03BA\u03BB\u03B5\u03AF\u03C3\u03B9\u03BC\u03BF",
      "notSupportVoice": "\u039A\u03C9\u03B4\u03B9\u03BA\u03CC\u03C2 Voice \u03B5\u03C0\u03B1\u03BB\u03AE\u03B8\u03B5\u03C5\u03C3\u03B7\u03C2 \u03B1\u03C0\u03AD\u03C4\u03C5\u03C7\u03B5 \u03BD\u03B1 \u03C6\u03BF\u03C1\u03C4\u03CE\u03C3\u03B5\u03B9",
      "intellisense": {
        "normal": "\u039A\u03AC\u03BD\u03C4\u03B5 \u03BA\u03BB\u03B9\u03BA \u03B3\u03B9\u03B1 \u03BF\u03BB\u03BF\u03BA\u03BB\u03AE\u03C1\u03C9\u03C3\u03B7 \u03C4\u03B7\u03C2 \u03B5\u03C0\u03B1\u03BB\u03AE\u03B8\u03B5\u03C5\u03C3\u03B7\u03C2",
        "checking": "\u03AD\u03BB\u03B5\u03B3\u03C7\u03BF\u03C2",
        "loading": "\u03C6\u03CC\u03C1\u03C4\u03C9\u03C3\u03B7",
        "loadfail": "\u0391\u03C0\u03AD\u03C4\u03C5\u03C7\u03B5 \u03BD\u03B1 \u03C6\u03BF\u03C1\u03C4\u03CE\u03C3\u03B5\u03B9",
        "loaddone": "\u039F\u03BB\u03BF\u03BA\u03BB\u03B7\u03C1\u03CE\u03C3\u03C4\u03B5 \u03C4\u03B7\u03BD \u03B5\u03C0\u03B1\u03BB\u03AE\u03B8\u03B5\u03C5\u03C3\u03B7",
        "longtap": "\u03A0\u03B1\u03C4\u03AE\u03C3\u03C4\u03B5 \u03B4\u03CD\u03BF \u03C6\u03BF\u03C1\u03AD\u03C2 \u03BA\u03B1\u03B9 \u03BA\u03C1\u03B1\u03C4\u03AE\u03C3\u03C4\u03B5 \u03C4\u03BF \u03C0\u03B1\u03C4\u03B7\u03BC\u03AD\u03BD\u03BF \u03B3\u03B9\u03B1 0,5 \u03B4\u03B5\u03C5\u03C4\u03B5\u03C1\u03CC\u03BB\u03B5\u03C0\u03C4\u03B1"
      },
      "sms": {
        "scanQrToSMS": "Scan QR code to send verification SMS",
        "noScanQr": "Unable to scan QR code",
        "manualSMS": "send a verification SMS manually",
        "clickToSMS": "Click the button to send verification SMS",
        "editSMS": "Edit SMS",
        "sendSMSTo": "Send to",
        "or": "or",
        "toSMS": "send a verification SMS",
        "cannotJump": "cannot jump to SMS"
      }
    },
    "sr": {
      "loading": "\u0423\u0447\u0438\u0442\u0430\u0432\u0430\u045A\u0435 ...",
      "loadfail": "\u041D\u0438\u0458\u0435 \u0443\u0441\u043F\u0435\u043E \u0434\u0430 \u0443\u0447\u0438\u0442\u0430",
      "verifySuccess": "\u0423\u0441\u043F\u0435\u0448\u043D\u043E \u0432\u0435\u0440\u0438\u0444\u0438\u043A\u043E\u0432\u0430\u043D\u043E",
      "verifyError": "\u041D\u0438\u0458\u0435 \u0443\u0441\u043F\u0435\u043B\u043E. \u041F\u043E\u043A\u0443\u0448\u0430\u0458\u0442\u0435 \u043F\u043E\u043D\u043E\u0432\u043E",
      "verifyOutOfLimit": "\u041F\u0440\u0435\u0432\u0438\u0448\u0435 \u0433\u0440\u0435\u0448\u0430\u043A\u0430, \u043F\u043E\u043A\u0443\u0448\u0430\u0458\u0442\u0435 \u043F\u043E\u043D\u043E\u0432\u043E",
      "clickButton": "\u041A\u043B\u0438\u043A\u043D\u0438\u0442\u0435 \u0434\u0430 \u0431\u0438\u0441\u0442\u0435 \u043F\u043E\u0442\u0432\u0440\u0434\u0438\u043B\u0438",
      "clickInTurn": "\u041C\u043E\u043B\u0438\u043C\u043E \u043A\u043B\u0438\u043A\u043D\u0438\u0442\u0435 \u0440\u0435\u0434\u043E\u043C",
      "clickWordInTurn": "\u041C\u043E\u043B\u0438\u043C\u043E \u043A\u043B\u0438\u043A\u043D\u0438\u0442\u0435 \u043D\u0430 \u0442\u0435\u043A\u0441\u0442 \u043F\u043E \u0440\u0435\u0434\u043E\u0441\u043B\u0435\u0434\u0443",
      "slideTip": "\u0414\u0440\u0430\u0433 \u0438 \u0432\u0440\u0430\u045B\u0430\u045A\u0435 \u0441\u043B\u0438\u043A\u0443",
      "inferenceTip": "\u0417\u0430\u043C\u0435\u043D\u0438\u0442\u0435 2 \u043F\u043B\u043E\u0447\u0438\u0446\u0435 \u0434\u0430 \u0431\u0438\u0441\u0442\u0435 \u0432\u0440\u0430\u0442\u0438\u043B\u0438 \u0441\u043B\u0438\u043A\u0435",
      "waitForSMS": "\u0427\u0435\u043A\u0430 \u0441\u0435 \u0421\u041C\u0421 \u0432\u0435\u0440\u0438\u0444\u0438\u043A\u0430\u0446\u0438\u0458\u0430, \u043F\u0440\u0435\u043E\u0441\u0442\u0430\u043B\u043E",
      "popupTitle": "\u041C\u043E\u043B\u0438\u043C\u043E \u0432\u0430\u0441 \u0434\u0430 \u0434\u043E\u0432\u0440\u0448\u0438\u0442\u0435 \u0432\u0435\u0440\u0438\u0444\u0438\u043A\u0430\u0446\u0438\u0458\u0443",
      "refresh": "\u041E\u0441\u0432\u0435\u0436\u0438 \u043A\u043E\u0434",
      "feedback": "\u041F\u043E\u0448\u0430\u0459\u0438\u0442\u0435 \u043F\u043E\u0432\u0440\u0430\u0442\u043D\u0435 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u0458\u0435",
      "switchToVoice": "\u041F\u0440\u0435\u0452\u0438\u0442\u0435 \u043D\u0430 \u043A\u043E\u0434 \u0437\u0430 \u0432\u0435\u0440\u0438\u0444\u0438\u043A\u0430\u0446\u0438\u0458\u0443 \u0433\u043B\u0430\u0441\u043E\u043C",
      "playVoice": "\u041F\u0443\u0441\u0442\u0438 \u0437\u0432\u0443\u0447\u043D\u0438 \u0432\u0435\u0440\u0438\u0444\u0438\u043A\u0430\u0446\u0438\u043E\u043D\u0438 \u043A\u043E\u0434",
      "back": "\u043F\u043E\u0432\u0440\u0430\u0442\u0430\u043A",
      "enterCode": "\u0423\u043D\u0435\u0441\u0438\u0442\u0435 \u0431\u0440\u043E\u0458\u0435\u0432\u0435 \u043A\u043E\u0458\u0435 \u0447\u0443\u0458\u0435\u0442\u0435",
      "check": "\u043F\u0440\u043E\u0432\u0435\u0440\u0438\u0442\u0438",
      "close": "\u0437\u0430\u0442\u0432\u0430\u0440\u0430\u045A\u0435",
      "notSupportVoice": "\u0423\u0447\u0438\u0442\u0430\u0432\u0430\u045A\u0435 \u0437\u0432\u0443\u0447\u043D\u0435 \u0434\u0430\u0442\u043E\u0442\u0435\u043A\u0435 \u043D\u0438\u0458\u0435 \u0443\u0441\u043F\u0435\u043B\u043E",
      "intellisense": {
        "normal": "\u041A\u043B\u0438\u043A\u043D\u0438\u0442\u0435 \u0434\u0430 \u0431\u0438\u0441\u0442\u0435 \u0434\u043E\u0432\u0440\u0448\u0438\u043B\u0438 \u0432\u0435\u0440\u0438\u0444\u0438\u043A\u0430\u0446\u0438\u0458\u0443",
        "checking": "\u043F\u0440\u043E\u0432\u0435\u0440\u0430",
        "loading": "\u043B\u043E\u0430\u0434\u0438\u043D\u0433",
        "loadfail": "\u041D\u0438\u0458\u0435 \u0443\u0441\u043F\u0435\u043E \u0434\u0430 \u0443\u0447\u0438\u0442\u0430",
        "loaddone": "\u041C\u043E\u043B\u0438\u043C\u043E \u0432\u0430\u0441 \u0434\u0430 \u0434\u043E\u0432\u0440\u0448\u0438\u0442\u0435 \u0432\u0435\u0440\u0438\u0444\u0438\u043A\u0430\u0446\u0438\u0458\u0443",
        "longtap": "\u0414\u0432\u0430\u043F\u0443\u0442 \u043A\u043B\u0438\u043A\u043D\u0438\u0442\u0435 \u0438 \u0434\u0440\u0436\u0438\u0442\u0435 0,5 \u0441\u0435\u043A\u0443\u043D\u0434\u0438 \u0434\u0430 \u0431\u0438\u0441\u0442\u0435 \u0434\u043E\u0432\u0440\u0448\u0438\u043B\u0438 \u0432\u0435\u0440\u0438\u0444\u0438\u043A\u0430\u0446\u0438\u0458\u0443"
      },
      "sms": {
        "scanQrToSMS": "Scan QR code to send verification SMS",
        "noScanQr": "Unable to scan QR code",
        "manualSMS": "send a verification SMS manually",
        "clickToSMS": "Click the button to send verification SMS",
        "editSMS": "Edit SMS",
        "sendSMSTo": "Send to",
        "or": "or",
        "toSMS": "send a verification SMS",
        "cannotJump": "cannot jump to SMS"
      }
    },
    "bs": {
      "loading": "U\u010Ditavanje...",
      "loadfail": "U\u010Ditavanje nije uspjelo",
      "verifySuccess": "Uspje\u0161no potvr\u0111eno",
      "verifyError": "Nije uspjelo. Poku\u0161ajte ponovo",
      "verifyOutOfLimit": "Previ\u0161e gre\u0161aka, poku\u0161ajte ponovo",
      "clickButton": "Kliknite za potvrdu",
      "clickInTurn": "Molimo kliknite redom",
      "clickWordInTurn": "Molimo kliknite na tekst po redoslijedu",
      "slideTip": "Povucite plo\u010Dice da biste ispunili sliku",
      "inferenceTip": "Zamijenite 2 plo\u010Dice za vra\u0107anje slika",
      "waitForSMS": "\u010Ceka se SMS potvrda, preostalo",
      "popupTitle": "Molimo dovr\u0161ite verifikaciju",
      "refresh": "Osvje\u017Ei k\xF4d",
      "feedback": "Po\u0161aljite povratne informacije",
      "switchToVoice": "Prebacite se na k\xF4d glasovne provjere",
      "playVoice": "Reproduciraj zvu\u010Dni kontrolni k\xF4d",
      "back": "povratak",
      "enterCode": "Unesite kontrolni k\xF4d koji \u010Dujete",
      "check": "verifikovati",
      "close": "zatvaranje",
      "notSupportVoice": "U\u010Ditavanje koda glasovne provjere nije uspjelo",
      "intellisense": {
        "normal": "Kliknite da biste dovr\u0161ili verifikaciju",
        "checking": "provjera",
        "loading": "u\u010Ditavanje",
        "loadfail": "U\u010Ditavanje nije uspjelo",
        "loaddone": "Molimo dovr\u0161ite verifikaciju",
        "longtap": "Dvaput pritisnite i dr\u017Eite 0,5 sekundi da dovr\u0161ite provjeru"
      },
      "sms": {
        "scanQrToSMS": "Scan QR code to send verification SMS",
        "noScanQr": "Unable to scan QR code",
        "manualSMS": "send a verification SMS manually",
        "clickToSMS": "Click the button to send verification SMS",
        "editSMS": "Edit SMS",
        "sendSMSTo": "Send to",
        "or": "or",
        "toSMS": "send a verification SMS",
        "cannotJump": "cannot jump to SMS"
      }
    },
    "mk": {
      "loading": "\u0421\u0435 \u0432\u0447\u0438\u0442\u0443\u0432\u0430 ...",
      "loadfail": "\u041D\u0435 \u0443\u0441\u043F\u0435\u0430 \u0434\u0430 \u0441\u0435 \u0432\u0447\u0438\u0442\u0430",
      "verifySuccess": "\u0423\u0441\u043F\u0435\u0448\u043D\u043E \u043F\u043E\u0442\u0432\u0440\u0434\u0435\u043D\u043E",
      "verifyError": "\u041D\u0435 \u0443\u0441\u043F\u0435\u0430, \u043E\u0431\u0438\u0434\u0435\u0442\u0435 \u0441\u0435 \u043F\u043E\u0432\u0442\u043E\u0440\u043D\u043E",
      "verifyOutOfLimit": "\u041F\u0440\u0435\u043C\u043D\u043E\u0433\u0443 \u043D\u0435\u0443\u0441\u043F\u0435\u0441\u0438, \u043E\u0431\u0438\u0434\u0435\u0442\u0435 \u0441\u0435 \u043F\u043E\u0432\u0442\u043E\u0440\u043D\u043E",
      "clickButton": "\u041A\u043B\u0438\u043A\u043D\u0435\u0442\u0435 \u0437\u0430 \u0434\u0430 \u043F\u043E\u0442\u0432\u0440\u0434\u0438\u0442\u0435",
      "clickInTurn": "\u0412\u0435 \u043C\u043E\u043B\u0438\u043C\u0435 \u043A\u043B\u0438\u043A\u043D\u0435\u0442\u0435 \u043F\u043E \u0440\u0435\u0434",
      "clickWordInTurn": "\u0412\u0435 \u043C\u043E\u043B\u0438\u043C\u0435 \u043A\u043B\u0438\u043A\u043D\u0435\u0442\u0435 \u043D\u0430 \u0442\u0435\u043A\u0441\u0442\u043E\u0442 \u043F\u043E \u0440\u0435\u0434",
      "slideTip": "\u041F\u043E\u0432\u043B\u0435\u0447\u0435\u0442\u0435 \u0438 \u0432\u0440\u0430\u0442\u0435\u0442\u0435 \u0458\u0430 \u0441\u043B\u0438\u043A\u0430\u0442\u0430",
      "inferenceTip": "\u0420\u0430\u0437\u043C\u0435\u043D\u0435\u0442\u0435 2 \u043F\u043B\u043E\u0447\u043A\u0438 \u0437\u0430 \u0434\u0430 \u0433\u0438 \u0432\u0440\u0430\u0442\u0438\u0442\u0435 \u0441\u043B\u0438\u043A\u0438\u0442\u0435",
      "waitForSMS": "\u041E\u0441\u0442\u0430\u043D\u0443\u0432\u0430 \u0447\u0435\u043A\u0430\u045A\u0435 \u0437\u0430 \u043F\u0440\u043E\u0432\u0435\u0440\u043A\u0430 \u043D\u0430 \u0421\u041C\u0421",
      "popupTitle": "\u041F\u043E\u043F\u043E\u043B\u043D\u0435\u0442\u0435 \u0458\u0430 \u0432\u0435\u0440\u0438\u0444\u0438\u043A\u0430\u0446\u0438\u0458\u0430\u0442\u0430",
      "refresh": "\u043E\u0441\u0432\u0435\u0436\u0438",
      "feedback": "\u041F\u043E\u0434\u043D\u0435\u0441\u0435\u0442\u0435 \u043F\u043E\u0432\u0440\u0430\u0442\u043D\u0438 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u0438",
      "switchToVoice": "\u041F\u0440\u0435\u0444\u0440\u043B\u0435\u0442\u0435 \u0441\u0435 \u043D\u0430 \u043A\u043E\u0434 \u0437\u0430 \u0433\u043B\u0430\u0441\u043E\u0432\u043D\u0430 \u043F\u043E\u0442\u0432\u0440\u0434\u0430",
      "playVoice": "\u041F\u0443\u0448\u0442\u0435\u0442\u0435 \u0433\u043E \u043A\u043E\u0434\u043E\u0442 \u0437\u0430 \u0432\u0435\u0440\u0438\u0444\u0438\u043A\u0430\u0446\u0438\u0458\u0430 \u043D\u0430 \u0437\u0432\u0443\u043A\u043E\u0442",
      "back": "\u0432\u0440\u0430\u045C\u0430\u045A\u0435",
      "enterCode": "\u0412\u043D\u0435\u0441\u0435\u0442\u0435 \u0433\u043E \u0431\u0440\u043E\u0458\u043E\u0442",
      "check": "\u043F\u043E\u0442\u0432\u0440\u0434\u0438",
      "close": "\u0437\u0430\u0442\u0432\u043E\u0440\u0430\u045A\u0435",
      "notSupportVoice": "\u0432\u0435\u0440\u0438\u0444\u0438\u043A\u0430\u0446\u0438\u0458\u0430 \u0437\u0432\u0443\u043A \u0443\u0441\u043F\u0435\u0430 \u0434\u0430 \u0441\u0435 \u0432\u0447\u0438\u0442\u0430",
      "intellisense": {
        "normal": "\u041A\u043B\u0438\u043A\u043D\u0438 \u0437\u0430 \u0434\u0430 \u0441\u0435 \u0437\u0430\u0432\u0440\u0448\u0438 \u043F\u0440\u043E\u0432\u0435\u0440\u043A\u0430\u0442\u0430",
        "checking": "\u043F\u0440\u043E\u0432\u0435\u0440\u043A\u0430",
        "loading": "\u0432\u0447\u0438\u0442\u0443\u0432\u0430\u045A\u0435",
        "loadfail": "\u041D\u0435 \u0443\u0441\u043F\u0435\u0430 \u0434\u0430 \u0441\u0435 \u0432\u0447\u0438\u0442\u0430",
        "loaddone": "\u041F\u043E\u043F\u043E\u043B\u043D\u0435\u0442\u0435 \u0458\u0430 \u0432\u0435\u0440\u0438\u0444\u0438\u043A\u0430\u0446\u0438\u0458\u0430\u0442\u0430",
        "longtap": "\u0414\u043E\u043F\u0440\u0435\u0442\u0435 \u0434\u0432\u0430\u043F\u0430\u0442\u0438 \u0438 \u0434\u0440\u0436\u0435\u0442\u0435 0,5 \u0441\u0435\u043A\u0443\u043D\u0434\u0438"
      },
      "sms": {
        "scanQrToSMS": "Scan QR code to send verification SMS",
        "noScanQr": "Unable to scan QR code",
        "manualSMS": "send a verification SMS manually",
        "clickToSMS": "Click the button to send verification SMS",
        "editSMS": "Edit SMS",
        "sendSMSTo": "Send to",
        "or": "or",
        "toSMS": "send a verification SMS",
        "cannotJump": "cannot jump to SMS"
      }
    },
    "bg": {
      "loading": "\u0417\u0430\u0440\u0435\u0436\u0434\u0430\u043D\u0435...",
      "loadfail": "\u041D\u0435 \u0443\u0441\u043F\u044F \u0434\u0430 \u0441\u0435 \u0437\u0430\u0440\u0435\u0434\u0438",
      "verifySuccess": "\u0423\u0441\u043F\u0435\u0448\u043D\u043E \u043F\u043E\u0442\u0432\u044A\u0440\u0434\u0435\u043D\u043E",
      "verifyError": "\u041D\u0435\u0443\u0441\u043F\u0435\u0448\u043D\u043E. \u041C\u043E\u043B\u044F, \u043E\u043F\u0438\u0442\u0430\u0439\u0442\u0435 \u043E\u0442\u043D\u043E\u0432\u043E",
      "verifyOutOfLimit": "\u0422\u0432\u044A\u0440\u0434\u0435 \u043C\u043D\u043E\u0433\u043E \u0433\u0440\u0435\u0448\u043A\u0438, \u043C\u043E\u043B\u044F, \u043E\u043F\u0438\u0442\u0430\u0439\u0442\u0435 \u043E\u0442\u043D\u043E\u0432\u043E",
      "clickButton": "\u0429\u0440\u0430\u043A\u043D\u0435\u0442\u0435, \u0437\u0430 \u0434\u0430 \u043F\u043E\u0442\u0432\u044A\u0440\u0434\u0438\u0442\u0435",
      "clickInTurn": "\u041C\u043E\u043B\u044F, \u0449\u0440\u0430\u043A\u043D\u0435\u0442\u0435 \u043F\u043E \u0440\u0435\u0434",
      "clickWordInTurn": "\u041C\u043E\u043B\u044F, \u0449\u0440\u0430\u043A\u043D\u0435\u0442\u0435 \u0432\u044A\u0440\u0445\u0443 \u0442\u0435\u043A\u0441\u0442\u0430 \u0432 \u0440\u0435\u0434",
      "slideTip": "\u041A\u043B\u0438\u043A\u043D\u0438 \u0437\u0430 \u0434\u0430 \u0441\u0435 \u0437\u0430\u0432\u0440\u0448\u0438 \u043F\u0440\u043E\u0432\u0435\u0440\u043A\u0430\u0442\u0430",
      "inferenceTip": "\u041C\u043E\u043B\u044F, \u0432\u044A\u0437\u0441\u0442\u0430\u043D\u043E\u0432\u0435\u0442\u0435 \u043A\u0430\u0440\u0442\u0438\u043D\u0430\u0442\u0430",
      "waitForSMS": "\u0418\u0437\u0447\u0430\u043A\u0432\u0430 \u0441\u0435 SMS \u043F\u043E\u0442\u0432\u044A\u0440\u0436\u0434\u0435\u043D\u0438\u0435, \u043E\u0441\u0442\u0430\u0432\u0430",
      "popupTitle": "\u041C\u043E\u043B\u044F, \u0437\u0430\u0432\u044A\u0440\u0448\u0435\u0442\u0435 \u043F\u0440\u043E\u0432\u0435\u0440\u043A\u0430\u0442\u0430",
      "refresh": "\u043E\u043F\u0440\u0435\u0441\u043D\u044F\u0432\u0430\u043D\u0435",
      "feedback": "\u0418\u0437\u043F\u0440\u0430\u0442\u0435\u0442\u0435 \u043E\u0431\u0440\u0430\u0442\u043D\u0430 \u0432\u0440\u044A\u0437\u043A\u0430",
      "switchToVoice": "\u041F\u0440\u0435\u0432\u043A\u043B\u044E\u0447\u0435\u0442\u0435 \u043A\u044A\u043C \u043A\u043E\u0434 \u0437\u0430 \u0433\u043B\u0430\u0441\u043E\u0432\u0430 \u043F\u0440\u043E\u0432\u0435\u0440\u043A\u0430",
      "playVoice": "\u0412\u044A\u0437\u043F\u0440\u043E\u0438\u0437\u0432\u0435\u0436\u0434\u0430\u043D\u0435 \u043D\u0430 \u0433\u043B\u0430\u0441\u043E\u0432 \u043A\u043E\u0434",
      "back": "\u0432\u0440\u044A\u0449\u0430\u043D\u0435",
      "enterCode": "\u041C\u043E\u043B\u044F, \u0432\u044A\u0432\u0435\u0434\u0435\u0442\u0435 \u043D\u043E\u043C\u0435\u0440\u0430",
      "check": "\u043F\u0440\u043E\u0432\u0435\u0440\u0435\u0442\u0435",
      "close": "\u0437\u0430\u043A\u0440\u0438\u0432\u0430\u043D\u0435",
      "notSupportVoice": "\u041A\u043E\u0434\u044A\u0442 \u0437\u0430 \u0433\u043B\u0430\u0441\u043E\u0432\u0430 \u043F\u0440\u043E\u0432\u0435\u0440\u043A\u0430 \u043D\u0435 \u0441\u0435 \u0437\u0430\u0440\u0435\u0434\u0438",
      "intellisense": {
        "normal": "\u0429\u0440\u0430\u043A\u043D\u0435\u0442\u0435, \u0437\u0430 \u0434\u0430 \u0437\u0430\u0432\u044A\u0440\u0448\u0438\u0442\u0435 \u043F\u0440\u043E\u0432\u0435\u0440\u043A\u0430\u0442\u0430",
        "checking": "\u043F\u0440\u043E\u0432\u0435\u0440\u043A\u0430",
        "loading": "\u0417\u0430\u0440\u0435\u0436\u0434\u0430\u043D\u0435",
        "loadfail": "\u041D\u0435 \u0443\u0441\u043F\u044F \u0434\u0430 \u0441\u0435 \u0437\u0430\u0440\u0435\u0434\u0438",
        "loaddone": "\u041C\u043E\u043B\u044F, \u0437\u0430\u0432\u044A\u0440\u0448\u0435\u0442\u0435 \u043F\u0440\u043E\u0432\u0435\u0440\u043A\u0430\u0442\u0430",
        "longtap": "\u0414\u043E\u043A\u043E\u0441\u043D\u0435\u0442\u0435 \u0434\u0432\u0443\u043A\u0440\u0430\u0442\u043D\u043E \u0438 \u0437\u0430\u0434\u0440\u044A\u0436\u0442\u0435 \u0437\u0430 0,5 \u0441\u0435\u043A\u0443\u043D\u0434\u0438"
      },
      "sms": {
        "scanQrToSMS": "Scan QR code to send verification SMS",
        "noScanQr": "Unable to scan QR code",
        "manualSMS": "send a verification SMS manually",
        "clickToSMS": "Click the button to send verification SMS",
        "editSMS": "Edit SMS",
        "sendSMSTo": "Send to",
        "or": "or",
        "toSMS": "send a verification SMS",
        "cannotJump": "cannot jump to SMS"
      }
    },
    "fi": {
      "loading": "Ladataan...",
      "loadfail": "Lataus ep\xE4onnistui",
      "verifySuccess": "Vahvistettu onnistuneesti",
      "verifyError": "Ep\xE4onnistui. Yrit\xE4 uudelleen",
      "verifyOutOfLimit": "Ep\xE4onnistui, yrit\xE4 uudelleen",
      "clickButton": "Vahvista napsauttamalla",
      "clickInTurn": "Napsauta j\xE4rjestyksess\xE4",
      "clickWordInTurn": "Napsauta teksti\xE4 j\xE4rjestyksess\xE4",
      "slideTip": "T\xE4yt\xE4 kuva vet\xE4m\xE4ll\xE4 laattaa oikealle",
      "inferenceTip": "Vaihda 2 laattaa kuvien palauttamiseksi",
      "waitForSMS": "Odotetaan tekstiviestivahvistusta, j\xE4ljell\xE4",
      "popupTitle": "Suorita vahvistus loppuun",
      "refresh": "P\xE4ivit\xE4 koodi",
      "feedback": "Antaa palautetta",
      "switchToVoice": "Vaihda \xE4\xE4nivahvistuskoodiin",
      "playVoice": "Toista \xE4\xE4nivahvistuskoodi",
      "back": "palata",
      "enterCode": "Kirjoita kuulemasi vahvistuskoodi",
      "check": "tarkistaa",
      "close": "p\xE4\xE4tt\xE4minen",
      "notSupportVoice": "Puhevahvistuskoodin lataaminen ep\xE4onnistui",
      "intellisense": {
        "normal": "Viimeistele vahvistus napsauttamalla",
        "checking": "tarkistaminen",
        "loading": "Ladataan",
        "loadfail": "Lataus ep\xE4onnistui",
        "loaddone": "Suorita vahvistus loppuun",
        "longtap": "Kaksoisnapauta ja pid\xE4 painettuna 0,5 sekuntia"
      },
      "sms": {
        "scanQrToSMS": "Scan QR code to send verification SMS",
        "noScanQr": "Unable to scan QR code",
        "manualSMS": "send a verification SMS manually",
        "clickToSMS": "Click the button to send verification SMS",
        "editSMS": "Edit SMS",
        "sendSMSTo": "Send to",
        "or": "or",
        "toSMS": "send a verification SMS",
        "cannotJump": "cannot jump to SMS"
      }
    },
    "et": {
      "loading": "Laadimine ...",
      "loadfail": "Laadimine eba\xF5nnestus",
      "verifySuccess": "Kinnitatud",
      "verifyError": "Eba\xF5nnestus, proovige uuesti",
      "verifyOutOfLimit": "Liiga palju eba\xF5nnestumisi, proovige uuesti",
      "clickButton": "Kinnitamiseks kl\xF5psake",
      "clickInTurn": "Palun kl\xF5psake j\xE4rjekorras",
      "clickWordInTurn": "Palun kl\xF5psake teksti j\xE4rjekorras",
      "slideTip": "Pildi t\xE4itmiseks lohistage paani paremale",
      "inferenceTip": "Piltide taastamiseks vahetage 2 plaati",
      "waitForSMS": "SMS -i kinnitamise ootel, j\xE4\xE4nud",
      "popupTitle": "Palun viige kinnitus l\xF5pule",
      "refresh": "V\xE4rskenda koodi",
      "feedback": "Esitage tagasisidet",
      "switchToVoice": "L\xFClitu h\xE4\xE4lkinnituskoodile",
      "playVoice": "Esitage heli kinnituskood",
      "back": "tagasi",
      "enterCode": "Sisestage kuuldud kinnituskood",
      "check": "kontrollida",
      "close": "sulgemine",
      "notSupportVoice": "H\xE4\xE4lkinnituse koodi laadimine eba\xF5nnestus",
      "intellisense": {
        "normal": "Kinnitamise l\xF5puleviimiseks kl\xF5psake",
        "checking": "kontrollimine",
        "loading": "laadimine",
        "loadfail": "Laadimine eba\xF5nnestus",
        "loaddone": "Palun viige kinnitus l\xF5pule",
        "longtap": "Topeltpuudutage ja hoidke 0,5 sekundit all"
      },
      "sms": {
        "scanQrToSMS": "Scan QR code to send verification SMS",
        "noScanQr": "Unable to scan QR code",
        "manualSMS": "send a verification SMS manually",
        "clickToSMS": "Click the button to send verification SMS",
        "editSMS": "Edit SMS",
        "sendSMSTo": "Send to",
        "or": "or",
        "toSMS": "send a verification SMS",
        "cannotJump": "cannot jump to SMS"
      }
    },
    "lv": {
      "loading": "Notiek iel\u0101de ...",
      "loadfail": "Neizdev\u0101s iel\u0101d\u0113t",
      "verifySuccess": "Veiksm\u012Bgi verific\u0113ts",
      "verifyError": "Neizdev\u0101s. L\u016Bdzu, m\u0113\u0123iniet v\u0113lreiz",
      "verifyOutOfLimit": "P\u0101r\u0101k daudz k\u013C\u016Bmju, l\u016Bdzu, m\u0113\u0123iniet v\u0113lreiz",
      "clickButton": "Noklik\u0161\u0137iniet, lai p\u0101rbaud\u012Btu",
      "clickInTurn": "Noklik\u0161\u0137iniet pa vienam",
      "clickWordInTurn": "L\u016Bdzu, noklik\u0161\u0137iniet uz teksta sec\u012Bb\u0101",
      "slideTip": "Velciet fl\u012Bzi pa labi, lai aizpild\u012Btu att\u0113lu",
      "inferenceTip": "Apmainiet 2 fl\u012Bzes, lai atjaunotu att\u0113lus",
      "waitForSMS": "Atliek gaid\u012Bt \u012Bszi\u0146u verifik\u0101ciju",
      "popupTitle": "L\u016Bdzu, pabeidziet verifik\u0101ciju",
      "refresh": "atjaunot",
      "feedback": "Iesniedziet atsauksmes",
      "switchToVoice": "P\u0101rsl\u0113gties uz balss verifik\u0101cijas kodu",
      "playVoice": "Atska\u0146ot ska\u0146as verifik\u0101cijas kodu",
      "back": "atgriezties",
      "enterCode": "Ievadiet dzird\u0113to verifik\u0101cijas kodu",
      "check": "p\u0101rbaud\u012Bt",
      "close": "sl\u0113g\u0161ana",
      "notSupportVoice": "Neizdev\u0101s iel\u0101d\u0113t balss verifik\u0101cijas kodu",
      "intellisense": {
        "normal": "Noklik\u0161\u0137iniet, lai pabeigtu verifik\u0101ciju",
        "checking": "p\u0101rbaude",
        "loading": "iekrau\u0161ana",
        "loadfail": "Neizdev\u0101s iel\u0101d\u0113t",
        "loaddone": "L\u016Bdzu, pabeidziet verifik\u0101ciju",
        "longtap": "Veiciet dubultsk\u0101rienu un turiet 0,5 sekundes"
      },
      "sms": {
        "scanQrToSMS": "Scan QR code to send verification SMS",
        "noScanQr": "Unable to scan QR code",
        "manualSMS": "send a verification SMS manually",
        "clickToSMS": "Click the button to send verification SMS",
        "editSMS": "Edit SMS",
        "sendSMSTo": "Send to",
        "or": "or",
        "toSMS": "send a verification SMS",
        "cannotJump": "cannot jump to SMS"
      }
    },
    "lt": {
      "loading": "\u012Ekeliama ...",
      "loadfail": "Nepavyko u\u017Ekrauti",
      "verifySuccess": "S\u0117kmingai patvirtinta",
      "verifyError": "Nepavyko, bandykite dar kart\u0105",
      "verifyOutOfLimit": "Per daug nes\u0117kmi\u0173, bandykite dar kart\u0105",
      "clickButton": "Spustel\u0117kite, kad patvirtintum\u0117te",
      "clickInTurn": "Pra\u0161ome spustel\u0117ti",
      "clickWordInTurn": "Spustel\u0117kite tekst\u0105 eil\u0117s tvarka",
      "slideTip": "Pra\u0161ome atkurti paveiksl\u0117l\u012F",
      "inferenceTip": "Pra\u0161ome atkurti paveiksl\u0117l\u012F",
      "waitForSMS": "Laukiama SMS patvirtinimo, lieka",
      "popupTitle": "U\u017Ebaikite patvirtinim\u0105",
      "refresh": "Atnaujinimo kodas",
      "feedback": "Pateikite atsiliepim\u0105",
      "switchToVoice": "Perjunkite \u012F patvirtinimo balsu kod\u0105",
      "playVoice": "Paleisti garso patvirtinimo kod\u0105",
      "back": "gr\u012F\u017Eti",
      "enterCode": "\u012Eveskite girdim\u0105 patvirtinimo kod\u0105",
      "check": "patikrinti",
      "close": "u\u017Edarymas",
      "notSupportVoice": "Nepavyko \u012Fkelti patvirtinimo balsu kodo",
      "intellisense": {
        "normal": "Spustel\u0117kite, kad u\u017Ebaigtum\u0117te patvirtinim\u0105",
        "checking": "tikrinimas",
        "loading": "pakrovimas",
        "loadfail": "Nepavyko u\u017Ekrauti",
        "loaddone": "U\u017Ebaikite patvirtinim\u0105",
        "longtap": "Dukart palieskite ir palaikykite 0,5 sekund\u0117s"
      },
      "sms": {
        "scanQrToSMS": "Scan QR code to send verification SMS",
        "noScanQr": "Unable to scan QR code",
        "manualSMS": "send a verification SMS manually",
        "clickToSMS": "Click the button to send verification SMS",
        "editSMS": "Edit SMS",
        "sendSMSTo": "Send to",
        "or": "or",
        "toSMS": "send a verification SMS",
        "cannotJump": "cannot jump to SMS"
      }
    },
    "sl": {
      "loading": "Nalaganje...",
      "loadfail": "Nalaganje ni uspelo",
      "verifySuccess": "Uspe\u0161no preverjeno",
      "verifyError": "Ni uspelo. Poskusite znova",
      "verifyOutOfLimit": "Preve\u010D napak, poskusite znova",
      "clickButton": "Kliknite za preverjanje",
      "clickInTurn": "Kliknite zaporedno",
      "clickWordInTurn": "Kliknite besedilo po vrstnem redu",
      "slideTip": "Prosimo, obnovite sliko",
      "inferenceTip": "Za obnovitev slik zamenjajte 2 plo\u0161\u010Dici",
      "waitForSMS": "\u010Cakanje na preverjanje SMS, preostalo",
      "popupTitle": "Dokon\u010Dajte preverjanje",
      "refresh": "Osve\u017Ei kodo",
      "feedback": "Po\u0161ljite povratne informacije",
      "switchToVoice": "Preklopite na kodo za glasovno preverjanje",
      "playVoice": "Predvajaj kodo za preverjanje zvoka",
      "back": "vrnitev",
      "enterCode": "Vnesite \u0161tevilke, ki jih sli\u0161ite",
      "check": "preveri",
      "close": "zaklju\u010Dek",
      "notSupportVoice": "Zvo\u010Dne datoteke ni bilo mogo\u010De nalo\u017Eiti",
      "intellisense": {
        "normal": "Kliknite za dokon\u010Danje preverjanja",
        "checking": "preverjanje",
        "loading": "nalaganje",
        "loadfail": "Nalaganje ni uspelo",
        "loaddone": "Dokon\u010Dajte preverjanje",
        "longtap": "Dvakrat se dotaknite in dr\u017Eite 0,5 sekunde"
      },
      "sms": {
        "scanQrToSMS": "Scan QR code to send verification SMS",
        "noScanQr": "Unable to scan QR code",
        "manualSMS": "send a verification SMS manually",
        "clickToSMS": "Click the button to send verification SMS",
        "editSMS": "Edit SMS",
        "sendSMSTo": "Send to",
        "or": "or",
        "toSMS": "send a verification SMS",
        "cannotJump": "cannot jump to SMS"
      }
    },
    "hr": {
      "loading": "U\u010Ditavam...",
      "loadfail": "U\u010Ditavanje nije uspjelo",
      "verifySuccess": "Uspje\u0161no potvr\u0111eno",
      "verifyError": "Nije uspjelo. Poku\u0161ajte ponovo",
      "verifyOutOfLimit": "Previ\u0161e gre\u0161aka, poku\u0161ajte ponovo",
      "clickButton": "Kliknite za potvrdu",
      "clickInTurn": "Molimo kliknite redom",
      "clickWordInTurn": "Molimo kliknite tekst redom",
      "slideTip": "Molimo vratite sliku",
      "inferenceTip": "Zamijenite 2 plo\u010Dice za vra\u0107anje slika",
      "waitForSMS": "\u010Ceka se SMS potvrda, preostalo",
      "popupTitle": "Molimo dovr\u0161ite provjeru",
      "refresh": "Osvje\u017Ei k\xF4d",
      "feedback": "Po\u0161aljite povratne informacije",
      "switchToVoice": "Prebacite se na glasovni kontrolni k\xF4d",
      "playVoice": "Reproduciraj zvu\u010Dni kontrolni k\xF4d",
      "back": "povratak",
      "enterCode": "Unesite kontrolni k\xF4d koji \u010Dujete",
      "check": "provjeriti",
      "close": "zatvaranje",
      "notSupportVoice": "U\u010Ditavanje zvu\u010Dne datoteke nije uspjelo",
      "intellisense": {
        "normal": "Kliknite za dovr\u0161etak provjere",
        "checking": "provjeravanje",
        "loading": "U\u010Ditavam",
        "loadfail": "U\u010Ditavanje nije uspjelo",
        "loaddone": "Molimo dovr\u0161ite provjeru",
        "longtap": "Dvaput dodirnite i dr\u017Eite 0,5 sekundi"
      },
      "sms": {
        "scanQrToSMS": "Scan QR code to send verification SMS",
        "noScanQr": "Unable to scan QR code",
        "manualSMS": "send a verification SMS manually",
        "clickToSMS": "Click the button to send verification SMS",
        "editSMS": "Edit SMS",
        "sendSMSTo": "Send to",
        "or": "or",
        "toSMS": "send a verification SMS",
        "cannotJump": "cannot jump to SMS"
      }
    },
    "uk": {
      "loading": "\u0417\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0435\u043D\u043D\u044F ...",
      "loadfail": "\u041D\u0435 \u0432\u0434\u0430\u043B\u043E\u0441\u044F \u0437\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0438\u0442\u0438",
      "verifySuccess": "\u041F\u0435\u0440\u0435\u0432\u0456\u0440\u0435\u043D\u043E \u0443\u0441\u043F\u0456\u0448\u043D\u043E",
      "verifyError": "\u041D\u0435 \u0432\u0434\u0430\u043B\u043E\u0441\u044F. \u041F\u043E\u0432\u0442\u043E\u0440\u0456\u0442\u044C \u0441\u043F\u0440\u043E\u0431\u0443",
      "verifyOutOfLimit": "\u0417\u0430\u0431\u0430\u0433\u0430\u0442\u043E \u043F\u043E\u043C\u0438\u043B\u043E\u043A. \u041F\u043E\u0432\u0442\u043E\u0440\u0456\u0442\u044C \u0441\u043F\u0440\u043E\u0431\u0443",
      "clickButton": "\u041D\u0430\u0442\u0438\u0441\u043D\u0456\u0442\u044C, \u0449\u043E\u0431 \u043F\u0435\u0440\u0435\u0432\u0456\u0440\u0438\u0442\u0438",
      "clickInTurn": "\u041D\u0430\u0442\u0438\u0441\u043D\u0456\u0442\u044C \u043F\u043E \u043F\u043E\u0440\u044F\u0434\u043A\u0443",
      "clickWordInTurn": "\u041A\u043B\u0430\u0446\u043D\u0456\u0442\u044C \u0442\u0435\u043A\u0441\u0442 \u043F\u043E \u043F\u043E\u0440\u044F\u0434\u043A\u0443",
      "slideTip": "\u0411\u0443\u0434\u044C \u043B\u0430\u0441\u043A\u0430, \u0432\u0456\u0434\u043D\u043E\u0432\u0438\u0442\u0438 \u043A\u0430\u0440\u0442\u0438\u043D\u0443",
      "inferenceTip": "\u0411\u0443\u0434\u044C \u043B\u0430\u0441\u043A\u0430, \u0432\u0456\u0434\u043D\u043E\u0432\u0438\u0442\u0438 \u043A\u0430\u0440\u0442\u0438\u043D\u0443",
      "waitForSMS": "\u041E\u0447\u0456\u043A\u0443\u0432\u0430\u043D\u043D\u044F \u043F\u0435\u0440\u0435\u0432\u0456\u0440\u043A\u0438 SMS, \u0437\u0430\u043B\u0438\u0448\u0438\u043B\u043E\u0441\u044C",
      "popupTitle": "\u0411\u0443\u0434\u044C \u043B\u0430\u0441\u043A\u0430, \u0437\u0430\u0432\u0435\u0440\u0448\u0456\u0442\u044C \u043F\u0435\u0440\u0435\u0432\u0456\u0440\u043A\u0443",
      "refresh": "\u041E\u043D\u043E\u0432\u0438\u0442\u0438 \u043A\u043E\u0434",
      "feedback": "\u041D\u0430\u0434\u0456\u0448\u043B\u0456\u0442\u044C \u0432\u0456\u0434\u0433\u0443\u043A",
      "switchToVoice": "\u041F\u0435\u0440\u0435\u0439\u0434\u0456\u0442\u044C \u043D\u0430 \u043A\u043E\u0434 \u0433\u043E\u043B\u043E\u0441\u043E\u0432\u043E\u0457 \u043F\u0435\u0440\u0435\u0432\u0456\u0440\u043A\u0438",
      "playVoice": "\u0412\u0456\u0434\u0442\u0432\u043E\u0440\u0438\u0442\u0438 \u0437\u0432\u0443\u043A\u043E\u0432\u0438\u0439 \u043A\u043E\u0434 \u043F\u0435\u0440\u0435\u0432\u0456\u0440\u043A\u0438",
      "back": "\u043F\u043E\u0432\u0435\u0440\u043D\u0435\u043D\u043D\u044F",
      "enterCode": "\u0412\u0432\u0435\u0434\u0456\u0442\u044C \u043F\u043E\u0447\u0443\u0442\u0438\u0439 \u043A\u043E\u0434 \u043F\u0456\u0434\u0442\u0432\u0435\u0440\u0434\u0436\u0435\u043D\u043D\u044F",
      "check": "\u043F\u0435\u0440\u0435\u0432\u0456\u0440\u0438\u0442\u0438",
      "close": "\u0437\u0430\u043A\u0440\u0438\u0442\u0442\u044F",
      "notSupportVoice": "\u041D\u0435 \u0432\u0434\u0430\u043B\u043E\u0441\u044F \u0437\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0438\u0442\u0438 \u0437\u0432\u0443\u043A\u043E\u0432\u0438\u0439 \u0444\u0430\u0439\u043B",
      "intellisense": {
        "normal": "\u041D\u0430\u0442\u0438\u0441\u043D\u0456\u0442\u044C, \u0449\u043E\u0431 \u0437\u0430\u0432\u0435\u0440\u0448\u0438\u0442\u0438 \u043F\u0435\u0440\u0435\u0432\u0456\u0440\u043A\u0443",
        "checking": "\u043F\u0435\u0440\u0435\u0432\u0456\u0440\u043A\u0430",
        "loading": "\u0437\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0435\u043D\u043D\u044F",
        "loadfail": "\u041D\u0435 \u0432\u0434\u0430\u043B\u043E\u0441\u044F \u0437\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0438\u0442\u0438",
        "loaddone": "\u0411\u0443\u0434\u044C \u043B\u0430\u0441\u043A\u0430, \u0437\u0430\u0432\u0435\u0440\u0448\u0456\u0442\u044C \u043F\u0435\u0440\u0435\u0432\u0456\u0440\u043A\u0443",
        "longtap": "\u0414\u0432\u0456\u0447\u0456 \u0442\u043E\u0440\u043A\u043D\u0456\u0442\u044C\u0441\u044F \u0456 \u0443\u0442\u0440\u0438\u043C\u0443\u0439\u0442\u0435 \u043F\u0440\u043E\u0442\u044F\u0433\u043E\u043C 0,5 \u0441\u0435\u043A\u0443\u043D\u0434\u0438"
      },
      "sms": {
        "scanQrToSMS": "Scan QR code to send verification SMS",
        "noScanQr": "Unable to scan QR code",
        "manualSMS": "send a verification SMS manually",
        "clickToSMS": "Click the button to send verification SMS",
        "editSMS": "Edit SMS",
        "sendSMSTo": "Send to",
        "or": "or",
        "toSMS": "send a verification SMS",
        "cannotJump": "cannot jump to SMS"
      }
    },
    "fa": {
      "loading": "\u0628\u0627\u0631\u06AF\u0630\u0627\u0631\u06CC...",
      "loadfail": "\u0628\u0627\u0631\u06AF\u06CC\u0631\u06CC \u0646\u0627\u0645\u0648\u0641\u0642 \u0628\u0648\u062F",
      "verifySuccess": "\u0628\u0627 \u0645\u0648\u0641\u0642\u06CC\u062A \u062A\u0623\u06CC\u06CC\u062F \u0634\u062F",
      "verifyError": "\u0646\u0627\u0645\u0648\u0641\u0642 \u0628\u0648\u062F \u060C \u0644\u0637\u0641\u0627\u064B \u062F\u0648\u0628\u0627\u0631\u0647 \u0627\u0645\u062A\u062D\u0627\u0646 \u06A9\u0646\u06CC\u062F",
      "verifyOutOfLimit": "\u0634\u06A9\u0633\u062A \u0647\u0627\u06CC \u0628\u0633\u06CC\u0627\u0631 \u0632\u06CC\u0627\u062F \u060C \u0644\u0637\u0641\u0627\u064B \u062F\u0648\u0628\u0627\u0631\u0647 \u0627\u0645\u062A\u062D\u0627\u0646 \u06A9\u0646\u06CC\u062F",
      "clickButton": "\u0628\u0631\u0627\u06CC \u062A\u0623\u06CC\u06CC\u062F \u06A9\u0644\u06CC\u06A9 \u06A9\u0646\u06CC\u062F",
      "clickInTurn": "\u0644\u0637\u0641\u0627 \u0628\u0647 \u062A\u0631\u062A\u06CC\u0628 \u06A9\u0644\u06CC\u06A9 \u06A9\u0646\u06CC\u062F",
      "clickWordInTurn": "\u0644\u0637\u0641\u0627\u064B \u0645\u062A\u0646 \u0631\u0627 \u0628\u0647 \u062A\u0631\u062A\u06CC\u0628 \u06A9\u0644\u06CC\u06A9 \u06A9\u0646\u06CC\u062F",
      "slideTip": "\u06A9\u0627\u0634\u06CC \u0631\u0627 \u0628\u0647 \u0633\u0645\u062A \u0631\u0627\u0633\u062A \u0628\u06A9\u0634\u06CC\u062F \u062A\u0627 \u062A\u0635\u0648\u06CC\u0631 \u067E\u0631 \u0634\u0648\u062F",
      "inferenceTip": "\u0628\u0631\u0627\u06CC \u0628\u0627\u0632\u06AF\u0631\u062F\u0627\u0646\u062F\u0646 \u062A\u0635\u0627\u0648\u06CC\u0631 \u060C 2 \u06A9\u0627\u0634\u06CC \u0631\u0627 \u0645\u0628\u0627\u062F\u0644\u0647 \u06A9\u0646\u06CC\u062F",
      "waitForSMS": "\u062F\u0631 \u0627\u0646\u062A\u0638\u0627\u0631 \u062A\u0623\u06CC\u06CC\u062F \u067E\u06CC\u0627\u0645\u06A9 \u060C \u0628\u0627\u0642\u06CC \u0645\u0627\u0646\u062F\u0647 \u0627\u0633\u062A",
      "popupTitle": "\u0644\u0637\u0641\u0627\u064B \u062A\u0623\u06CC\u06CC\u062F \u0631\u0627 \u062A\u06A9\u0645\u06CC\u0644 \u06A9\u0646\u06CC\u062F",
      "refresh": "\u06A9\u062F \u0628\u0627\u0632\u062E\u0648\u0627\u0646\u06CC",
      "feedback": "\u0628\u0627\u0632\u062E\u0648\u0631\u062F \u0627\u0631\u0627\u0626\u0647 \u062F\u0647\u06CC\u062F",
      "switchToVoice": "\u0631\u0641\u062A\u0646 \u0628\u0647 \u06A9\u062F \u062A\u0623\u06CC\u06CC\u062F \u0635\u0648\u062A\u06CC",
      "playVoice": "\u067E\u062E\u0634 \u06A9\u062F \u062A\u0623\u06CC\u06CC\u062F \u0635\u062F\u0627",
      "back": "\u0628\u0631\u06AF\u0634\u062A",
      "enterCode": "\u06A9\u062F \u062A\u0623\u06CC\u06CC\u062F\u06CC \u0631\u0627 \u06A9\u0647 \u0645\u06CC \u0634\u0646\u0648\u06CC\u062F \u0648\u0627\u0631\u062F \u06A9\u0646\u06CC\u062F",
      "check": "\u0631\u0627\u0633\u062A\u06CC \u0622\u0632\u0645\u0627\u06CC\u06CC",
      "close": "\u0628\u0633\u062A\u0647",
      "notSupportVoice": "\u06A9\u062F \u062A\u0623\u06CC\u06CC\u062F \u0635\u0648\u062A\u06CC \u0628\u0627\u0631\u06AF\u06CC\u0631\u06CC \u0646\u0634\u062F",
      "intellisense": {
        "normal": "\u0628\u0631\u0627\u06CC \u062A\u06A9\u0645\u06CC\u0644 \u062A\u0623\u06CC\u06CC\u062F \u0635\u062D\u062A \u06A9\u0644\u06CC\u06A9 \u06A9\u0646\u06CC\u062F",
        "checking": "\u0686\u06A9 \u06A9\u0631\u062F\u0646",
        "loading": "\u0628\u0627\u0631\u06AF\u0630\u0627\u0631\u06CC",
        "loadfail": "\u0628\u0627\u0631\u06AF\u06CC\u0631\u06CC \u0646\u0627\u0645\u0648\u0641\u0642 \u0628\u0648\u062F",
        "loaddone": "\u0644\u0637\u0641\u0627\u064B \u062A\u0623\u06CC\u06CC\u062F \u0631\u0627 \u062A\u06A9\u0645\u06CC\u0644 \u06A9\u0646\u06CC\u062F",
        "longtap": "\u062F\u0648\u0628\u0627\u0631 \u0636\u0631\u0628\u0647 \u0628\u0632\u0646\u06CC\u062F \u0648 0.5 \u062B\u0627\u0646\u06CC\u0647 \u0646\u06AF\u0647 \u062F\u0627\u0631\u06CC\u062F"
      },
      "sms": {
        "scanQrToSMS": "Scan QR code to send verification SMS",
        "noScanQr": "Unable to scan QR code",
        "manualSMS": "send a verification SMS manually",
        "clickToSMS": "Click the button to send verification SMS",
        "editSMS": "Edit SMS",
        "sendSMSTo": "Send to",
        "or": "or",
        "toSMS": "send a verification SMS",
        "cannotJump": "cannot jump to SMS"
      }
    },
    "nl": {
      "loading": "Bezig met laden...",
      "loadfail": "Laden mislukt",
      "verifySuccess": "Succesvol geverifieerd",
      "verifyError": "Mislukt, probeer het opnieuw",
      "verifyOutOfLimit": "Te veel fouten, probeer het opnieuw",
      "clickButton": "Klik om te verifi\xEBren",
      "clickInTurn": "Klik in volgorde",
      "clickWordInTurn": "Klik op de tekst in volgorde",
      "slideTip": "Gelieve het herstel van de foto",
      "inferenceTip": "Wissel 2 tegels uit om foto's te herstellen",
      "waitForSMS": "Wachten op sms-verificatie, resterend",
      "popupTitle": "Voltooi de verificatie a.u.b.",
      "refresh": "Code vernieuwen",
      "feedback": "Feedback verzenden",
      "switchToVoice": "Overschakelen naar stemverificatiecode",
      "playVoice": "Geluidsverificatiecode afspelen",
      "back": "opbrengst",
      "enterCode": "Voer de verificatiecode in die je hoort",
      "check": "verifi\xEBren",
      "close": "sluiting",
      "notSupportVoice": "Spraakverificatiecode kan niet worden geladen",
      "intellisense": {
        "normal": "Klik om de verificatie te voltooien",
        "checking": "controleren",
        "loading": "bezig met laden",
        "loadfail": "Laden mislukt",
        "loaddone": "Voltooi de verificatie a.u.b.",
        "longtap": "Dubbeltik en houd 0,5 seconden vast"
      },
      "sms": {
        "scanQrToSMS": "Scan QR code to send verification SMS",
        "noScanQr": "Unable to scan QR code",
        "manualSMS": "send a verification SMS manually",
        "clickToSMS": "Click the button to send verification SMS",
        "editSMS": "Edit SMS",
        "sendSMSTo": "Send to",
        "or": "or",
        "toSMS": "send a verification SMS",
        "cannotJump": "cannot jump to SMS"
      }
    },
    "ca": {
      "loading": "S'est\xE0 carregant ...",
      "loadfail": "No s'ha pogut carregar",
      "verifySuccess": "S'ha verificat correctament",
      "verifyError": "Ha fallat, torneu-ho a provar",
      "verifyOutOfLimit": "Hi ha massa errors, torneu-ho a provar",
      "clickButton": "Feu clic per verificar",
      "clickInTurn": "Feu clic a l\u2019ordre",
      "clickWordInTurn": "Feu clic al text en ordre",
      "slideTip": "Si us plau, restaurar la imatge",
      "inferenceTip": "Intercanvieu 2 fitxes per restaurar imatges",
      "waitForSMS": "S'est\xE0 esperant la verificaci\xF3 per SMS",
      "popupTitle": "Completeu la verificaci\xF3",
      "refresh": "Actualitza el codi",
      "feedback": "Envieu comentaris",
      "switchToVoice": "Canvia al codi de verificaci\xF3 de veu",
      "playVoice": "Reprodueix el codi de verificaci\xF3 del so",
      "back": "tornar",
      "enterCode": "Introdu\xEFu els n\xFAmeros que escolteu",
      "check": "verificar",
      "close": "tancament",
      "notSupportVoice": "No s'ha pogut carregar el codi de verificaci\xF3 de veu",
      "intellisense": {
        "normal": "Feu clic per completar la verificaci\xF3",
        "checking": "comprovaci\xF3",
        "loading": "carregant",
        "loadfail": "No s'ha pogut carregar",
        "loaddone": "Completeu la verificaci\xF3",
        "longtap": "Feu doble toc i manteniu premut durant 0,5 segons"
      },
      "sms": {
        "scanQrToSMS": "Scan QR code to send verification SMS",
        "noScanQr": "Unable to scan QR code",
        "manualSMS": "send a verification SMS manually",
        "clickToSMS": "Click the button to send verification SMS",
        "editSMS": "Edit SMS",
        "sendSMSTo": "Send to",
        "or": "or",
        "toSMS": "send a verification SMS",
        "cannotJump": "cannot jump to SMS"
      }
    },
    "gl": {
      "loading": "Cargando ...",
      "loadfail": "Fallou a carga",
      "verifySuccess": "Verificouse correctamente",
      "verifyError": "Fallou, t\xE9ntao de novo",
      "verifyOutOfLimit": "Hai demasiados fallos. T\xE9ntao de novo",
      "clickButton": "Fai clic para verificar",
      "clickInTurn": "Faga clic en orde",
      "clickWordInTurn": "Fai clic no texto en orde",
      "slideTip": "Restaurar a imaxe",
      "inferenceTip": "Restaurar a imaxe",
      "waitForSMS": "Agardando a verificaci\xF3n por SMS, queda",
      "popupTitle": "Complete a verificaci\xF3n",
      "refresh": "Actualizar c\xF3digo",
      "feedback": "Enviar comentarios",
      "switchToVoice": "Cambia ao c\xF3digo de verificaci\xF3n por voz",
      "playVoice": "Reproducir c\xF3digo de verificaci\xF3n de son",
      "back": "regreso",
      "enterCode": "Introduza c\xF3digo de confirmaci\xF3n",
      "check": "verificar",
      "close": "peche",
      "notSupportVoice": "Produciuse un erro ao cargar o ficheiro de son",
      "intellisense": {
        "normal": "Fai clic para completar a verificaci\xF3n",
        "checking": "comprobaci\xF3n",
        "loading": "cargando",
        "loadfail": "Produciuse un erro ao cargar",
        "loaddone": "Complete a verificaci\xF3n",
        "longtap": "Toca d\xFAas veces e mant\xE9n premido durante 0,5 segundos"
      },
      "sms": {
        "scanQrToSMS": "Scan QR code to send verification SMS",
        "noScanQr": "Unable to scan QR code",
        "manualSMS": "send a verification SMS manually",
        "clickToSMS": "Click the button to send verification SMS",
        "editSMS": "Edit SMS",
        "sendSMSTo": "Send to",
        "or": "or",
        "toSMS": "send a verification SMS",
        "cannotJump": "cannot jump to SMS"
      }
    },
    "eu": {
      "loading": "Kargatzen ...",
      "loadfail": "Ezin izan da kargatu",
      "verifySuccess": "Behar bezala egiaztatu da",
      "verifyError": "Huts egin du. Saiatu berriro",
      "verifyOutOfLimit": "Hutsegite gehiegi, saiatu berriro",
      "clickButton": "Egin klik egiaztatzeko",
      "clickInTurn": "Egin klik ordenan",
      "clickWordInTurn": "Mesedez, egin klik testuan ordenan",
      "slideTip": "Mesedez leheneratu irudian",
      "inferenceTip": "Trukatu 2 fitxak argazkiak leheneratzeko",
      "waitForSMS": "SMS egiaztapenaren zain, geratzen da",
      "popupTitle": "Mesedez, egiaztatu egiaztapena",
      "refresh": "Freskatu kodea",
      "feedback": "Bidali iritzia",
      "switchToVoice": "Aldatu ahots egiaztapen kodera",
      "playVoice": "Erreproduzitu ahots egiaztapen kodea",
      "back": "itzuli",
      "enterCode": "Sartu entzuten dituzun zenbakiak",
      "check": "egiaztatu",
      "close": "itxiera",
      "notSupportVoice": "Ahots egiaztapen kodea ezin izan da kargatu",
      "intellisense": {
        "normal": "Egin klik egiaztapena osatzeko",
        "checking": "egiaztatzen",
        "loading": "kargatzen",
        "loadfail": "Ezin izan da kargatu",
        "loaddone": "Mesedez, egiaztatu egiaztapena",
        "longtap": "Eduki sakatuta 0,5 segundoz"
      },
      "sms": {
        "scanQrToSMS": "Scan QR code to send verification SMS",
        "noScanQr": "Unable to scan QR code",
        "manualSMS": "send a verification SMS manually",
        "clickToSMS": "Click the button to send verification SMS",
        "editSMS": "Edit SMS",
        "sendSMSTo": "Send to",
        "or": "or",
        "toSMS": "send a verification SMS",
        "cannotJump": "cannot jump to SMS"
      }
    },
    "ka": {
      "loading": "\u1CA9\u10D0\u10E2\u10D5\u10D8\u10E0\u10D7\u10D5\u10D0...",
      "loadfail": "\u10E9\u10D0\u10E2\u10D5\u10D8\u10E0\u10D7\u10D5\u10D0 \u10D5\u10D4\u10E0 \u10DB\u10DD\u10EE\u10D4\u10E0\u10EE\u10D3\u10D0",
      "verifySuccess": "\u10EC\u10D0\u10E0\u10DB\u10D0\u10E2\u10D4\u10D1\u10D8\u10D7 \u10D3\u10D0\u10D3\u10D0\u10E1\u10E2\u10E3\u10E0\u10D3\u10D0",
      "verifyError": "\u10D5\u10D4\u10E0 \u10DB\u10DD\u10EE\u10D4\u10E0\u10EE\u10D3\u10D0, \u10D2\u10D7\u10EE\u10DD\u10D5\u10D7 \u10E1\u10EA\u10D0\u10D3\u10DD\u10D7 \u10EE\u10D4\u10DA\u10D0\u10EE\u10DA\u10D0",
      "verifyOutOfLimit": "\u10D5\u10D4\u10E0 \u10DB\u10DD\u10EE\u10D4\u10E0\u10EE\u10D3\u10D0, \u10D2\u10D7\u10EE\u10DD\u10D5\u10D7 \u10E1\u10EA\u10D0\u10D3\u10DD\u10D7 \u10EE\u10D4\u10DA\u10D0\u10EE\u10DA\u10D0",
      "clickButton": "\u10D3\u10D0\u10D0\u10EC\u10D9\u10D0\u10DE\u10E3\u10DC\u10D4\u10D7 \u10D2\u10D0\u10D3\u10D0\u10DB\u10DD\u10EC\u10DB\u10D4\u10D1\u10D8\u10E1\u10D7\u10D5\u10D8\u10E1",
      "clickInTurn": "\u10D2\u10D7\u10EE\u10DD\u10D5\u10D7, \u10D3\u10D0\u10D0\u10ED\u10D8\u10E0\u10D4\u10D7",
      "clickWordInTurn": "\u10D3\u10D0\u10D0\u10EC\u10D9\u10D0\u10DE\u10E3\u10DC\u10D4\u10D7 \u10E2\u10D4\u10E5\u10E1\u10E2\u10D6\u10D4 \u10D7\u10D0\u10DC\u10DB\u10D8\u10DB\u10D3\u10D4\u10D5\u10E0\u10DD\u10D1\u10D8\u10D7",
      "slideTip": "\u10D2\u10D7\u10EE\u10DD\u10D5\u10D7, \u10E1\u10E3\u10E0\u10D0\u10D7\u10D8\u10E1 \u10D0\u10E6\u10D3\u10D2\u10D4\u10DC\u10D0\u10E1",
      "inferenceTip": "\u10D2\u10D0\u10EA\u10D5\u10D0\u10DA\u10D4\u10D7 2 \u10E4\u10D8\u10DA\u10D0 \u10E1\u10E3\u10E0\u10D0\u10D7\u10D4\u10D1\u10D8\u10E1 \u10D0\u10E6\u10E1\u10D0\u10D3\u10D2\u10D4\u10DC\u10D0\u10D3",
      "waitForSMS": "SMS- \u10D8\u10E1 \u10D2\u10D0\u10D2\u10D6\u10D0\u10D5\u10DC\u10D8\u10E1, \u10D3\u10D0\u10E0\u10E9\u10D4\u10DC\u10D8\u10DA\u10D8",
      "popupTitle": "\u10D2\u10D7\u10EE\u10DD\u10D5\u10D7 \u10D3\u10D0\u10D0\u10E1\u10E0\u10E3\u10DA\u10DD\u10D7 \u10D2\u10D0\u10D3\u10D0\u10DB\u10DD\u10EC\u10DB\u10D4\u10D1\u10D0",
      "refresh": "\u10D2\u10D0\u10DC\u10D0\u10D0\u10EE\u10DA\u10D4\u10D7",
      "feedback": "\u10D2\u10D0\u10D2\u10D6\u10D0\u10D5\u10DC\u10D4\u10D7 \u10D2\u10D0\u10DB\u10DD\u10EE\u10DB\u10D0\u10E3\u10E0\u10D4\u10D1\u10D0",
      "switchToVoice": "\u10EE\u10DB\u10D8\u10E1 \u10D2\u10D0\u10D3\u10D0\u10DB\u10DD\u10EC\u10DB\u10D4\u10D1\u10D8\u10E1 \u10D9\u10DD\u10D3\u10D6\u10D4 \u10D2\u10D0\u10D3\u10D0\u10E0\u10D7\u10D5\u10D0",
      "playVoice": "\u10EE\u10DB\u10D8\u10E1 \u10D3\u10D0\u10DB\u10D0\u10D3\u10D0\u10E1\u10E2\u10E3\u10E0\u10D4\u10D1\u10D4\u10DA\u10D8 \u10D9\u10DD\u10D3\u10D8\u10E1 \u10D3\u10D0\u10D9\u10D5\u10E0\u10D0",
      "back": "\u10D3\u10D0\u10D1\u10E0\u10E3\u10DC\u10D4\u10D1\u10D8\u10E1",
      "enterCode": "\u10E8\u10D4\u10D8\u10E7\u10D5\u10D0\u10DC\u10D4\u10D7 \u10D3\u10D0\u10D3\u10D0\u10E1\u10E2\u10E3\u10E0\u10D4\u10D1\u10D8\u10E1 \u10D9\u10DD\u10D3\u10D8",
      "check": "\u10D2\u10D0\u10D3\u10D0\u10DB\u10DD\u10EC\u10DB\u10D4\u10D1\u10D0",
      "close": "\u10D3\u10D0\u10EE\u10E3\u10E0\u10D5\u10D0",
      "notSupportVoice": "\u10EE\u10DB\u10DD\u10D5\u10D0\u10DC\u10D8 \u10E4\u10D0\u10D8\u10DA\u10D8\u10E1 \u10E9\u10D0\u10E2\u10D5\u10D8\u10E0\u10D7\u10D5\u10D0 \u10D5\u10D4\u10E0 \u10DB\u10DD\u10EE\u10D4\u10E0\u10EE\u10D3\u10D0",
      "intellisense": {
        "normal": "\u10D3\u10D0\u10D0\u10ED\u10D8\u10E0\u10D4\u10D7 \u10D2\u10D0\u10D3\u10D0\u10DB\u10DD\u10EC\u10DB\u10D4\u10D1\u10D8\u10E1 \u10D3\u10D0\u10E1\u10E0\u10E3\u10DA\u10D4\u10D1\u10D0\u10E1",
        "checking": "\u10E8\u10D4\u10DB\u10DD\u10EC\u10DB\u10D4\u10D1\u10D0",
        "loading": "\u10E9\u10D0\u10E2\u10D5\u10D8\u10E0\u10D7\u10D5\u10D0",
        "loadfail": "\u10E9\u10D0\u10E2\u10D5\u10D8\u10E0\u10D7\u10D5\u10D0 \u10D5\u10D4\u10E0 \u10DB\u10DD\u10EE\u10D4\u10E0\u10EE\u10D3\u10D0",
        "loaddone": "\u10D2\u10D7\u10EE\u10DD\u10D5\u10D7 \u10D3\u10D0\u10D0\u10E1\u10E0\u10E3\u10DA\u10DD\u10D7 \u10D2\u10D0\u10D3\u10D0\u10DB\u10DD\u10EC\u10DB\u10D4\u10D1\u10D0",
        "longtap": "\u10DD\u10E0\u10EF\u10D4\u10E0 \u10E8\u10D4\u10D4\u10EE\u10D4\u10D7 \u10D3\u10D0 \u10D2\u10D0\u10D0\u10E9\u10D4\u10E0\u10D4\u10D7 0.5 \u10EC\u10D0\u10DB\u10D8"
      },
      "sms": {
        "scanQrToSMS": "Scan QR code to send verification SMS",
        "noScanQr": "Unable to scan QR code",
        "manualSMS": "send a verification SMS manually",
        "clickToSMS": "Click the button to send verification SMS",
        "editSMS": "Edit SMS",
        "sendSMSTo": "Send to",
        "or": "or",
        "toSMS": "send a verification SMS",
        "cannotJump": "cannot jump to SMS"
      }
    },
    "az": {
      "loading": "Y\xFCkl\u0259nir ...",
      "loadfail": "Y\xFCkl\u0259m\u0259k al\u0131nmad\u0131",
      "verifySuccess": "U\u011Furla t\u0259sdiq edildi",
      "verifyError": "U\u011Fursuz oldu, yenid\u0259n c\u0259hd edin",
      "verifyOutOfLimit": "\xC7ox u\u011Fursuzluq, yenid\u0259n c\u0259hd edin",
      "clickButton": "Do\u011Frulamaq \xFC\xE7\xFCn vurun",
      "clickInTurn": "Z\u0259hm\u0259t olmasa s\u0131rayla bas\u0131n",
      "clickWordInTurn": "Z\u0259hm\u0259t olmasa m\u0259tni s\u0131rayla bas\u0131n",
      "slideTip": "\u015F\u0259kil b\u0259rpa etm\u0259k \xFC\xE7\xFCn \xE7almak",
      "inferenceTip": "\u015E\u0259kill\u0259ri b\u0259rpa etm\u0259k \xFC\xE7\xFCn 2 kafel d\u0259yi\u015Fdirin",
      "waitForSMS": "SMS do\u011Frulamas\u0131 g\xF6zl\u0259nilir, qal\u0131b",
      "popupTitle": "Z\u0259hm\u0259t olmasa yoxlaman\u0131 tamamlay\u0131n",
      "refresh": "Kodu Yenil\u0259",
      "feedback": "Geribildirim g\xF6nd\u0259rin",
      "switchToVoice": "S\u0259s do\u011Frulama koduna ke\xE7in",
      "playVoice": "S\u0259s do\u011Frulama kodunu oxudun",
      "back": "qay\u0131t",
      "enterCode": "E\u015Fitdiyiniz n\xF6mr\u0259l\u0259ri daxil edin",
      "check": "yoxlamaq",
      "close": "ba\u011Flanmas\u0131",
      "notSupportVoice": "S\u0259s do\u011Frulama kodu y\xFCkl\u0259nm\u0259di",
      "intellisense": {
        "normal": "Do\u011Frulaman\u0131 tamamlamaq \xFC\xE7\xFCn vurun",
        "checking": "yoxlama",
        "loading": "y\xFCkl\u0259nir",
        "loadfail": "Y\xFCkl\u0259m\u0259k al\u0131nmad\u0131",
        "loaddone": "Z\u0259hm\u0259t olmasa yoxlaman\u0131 tamamlay\u0131n",
        "longtap": "\u0130ki d\u0259f\u0259 vurun v\u0259 0,5 saniy\u0259 saxlay\u0131n"
      },
      "sms": {
        "scanQrToSMS": "Scan QR code to send verification SMS",
        "noScanQr": "Unable to scan QR code",
        "manualSMS": "send a verification SMS manually",
        "clickToSMS": "Click the button to send verification SMS",
        "editSMS": "Edit SMS",
        "sendSMSTo": "Send to",
        "or": "or",
        "toSMS": "send a verification SMS",
        "cannotJump": "cannot jump to SMS"
      }
    },
    "uz": {
      "loading": "Yuklanmoqda ...",
      "loadfail": "Yuklab bo\u2018lmadi",
      "verifySuccess": "Muvaffaqiyatli tasdiqlandi",
      "verifyError": "Muvaffaqiyatsiz, qaytadan urining",
      "verifyOutOfLimit": "Muvaffaqiyatsiz, qaytadan urining",
      "clickButton": "Tasdiqlash uchun bosing",
      "clickInTurn": "Iltimos, tartibda bosing",
      "clickWordInTurn": "Iltimos, matnni tartibda bosing",
      "slideTip": "Rasmni tiklash uchun o'ngga suring",
      "inferenceTip": "Iltimos, rasmni tiklang",
      "waitForSMS": "SMS tekshiruvi kutilmoqda, qolgan",
      "popupTitle": "Iltimos, tasdiqlashni yakunlang",
      "refresh": "Kodni yangilash",
      "feedback": "Fikr -mulohaza yuborish",
      "switchToVoice": "Ovozni tasdiqlash kodiga o'ting",
      "playVoice": "Ovozli tasdiqlash kodini tinglang",
      "back": "qaytish",
      "enterCode": "Eshitgan tasdiq kodini kiriting",
      "check": "tekshirmoq",
      "close": "yopilish",
      "notSupportVoice": "Ovozli tasdiqlash kodi yuklanmadi",
      "intellisense": {
        "normal": "Tekshirishni yakunlash uchun bosing",
        "checking": "tekshirish",
        "loading": "yuklanmoqda",
        "loadfail": "Yuklab bo\u2018lmadi",
        "loaddone": "Iltimos, tasdiqlashni yakunlang",
        "longtap": "Ikki marta bosing va 0,5 soniya ushlab turing"
      },
      "sms": {
        "scanQrToSMS": "Scan QR code to send verification SMS",
        "noScanQr": "Unable to scan QR code",
        "manualSMS": "send a verification SMS manually",
        "clickToSMS": "Click the button to send verification SMS",
        "editSMS": "Edit SMS",
        "sendSMSTo": "Send to",
        "or": "or",
        "toSMS": "send a verification SMS",
        "cannotJump": "cannot jump to SMS"
      }
    },
    "km": {
      "loading": "\u1780\u17C6\u1796\u17BB\u1784\u1795\u17D2\u1791\u17BB\u1780 ...",
      "loadfail": "\u1794\u179A\u17B6\u1787\u17D0\u1799\u1780\u17D2\u1793\u17BB\u1784\u1780\u17B6\u179A\u1795\u17D2\u1791\u17BB\u1780",
      "verifySuccess": "\u1794\u17B6\u1793\u1795\u17D2\u1791\u17C0\u1784\u1795\u17D2\u1791\u17B6\u178F\u17CB\u178A\u17C4\u1799\u1787\u17C4\u1782\u1787\u17D0\u1799",
      "verifyError": "\u1794\u179A\u17B6\u1787\u17D0\u1799\u179F\u17BC\u1798\u1796\u17D2\u1799\u17B6\u1799\u17B6\u1798\u1798\u17D2\u178F\u1784\u1791\u17C0\u178F",
      "verifyOutOfLimit": "\u1794\u179A\u17B6\u1787\u17D0\u1799\u1785\u17D2\u179A\u17BE\u1793\u1796\u17C1\u1780\u179F\u17BC\u1798\u1796\u17D2\u1799\u17B6\u1799\u17B6\u1798\u1798\u17D2\u178F\u1784\u1791\u17C0\u178F",
      "clickButton": "\u1785\u17BB\u1785\u178A\u17BE\u1798\u17D2\u1794\u17B8\u1795\u17D2\u1791\u17C0\u1784\u1795\u17D2\u1791\u17B6\u178F\u17CB",
      "clickInTurn": "\u179F\u17BC\u1798\u1785\u17BB\u1785\u178F\u17B6\u1798\u179B\u17C6\u178A\u17B6\u1794\u17CB\u179B\u17C6\u178A\u17C4\u1799",
      "clickWordInTurn": "\u179F\u17BC\u1798\u1785\u17BB\u1785\u17A2\u178F\u17D2\u1790\u1794\u1791\u178F\u17B6\u1798\u179B\u17C6\u178A\u17B6\u1794\u17CB\u179B\u17C6\u178A\u17C4\u1799",
      "slideTip": "\u17A2\u17BC\u179F\u1780\u17D2\u179A\u17A1\u17B6\u1791\u17C5\u1781\u17B6\u1784\u179F\u17D2\u178F\u17B6\u17C6\u178A\u17BE\u1798\u17D2\u1794\u17B8\u1794\u17C6\u1796\u17C1\u1789\u179A\u17BC\u1794\u1797\u17B6\u1796",
      "inferenceTip": "\u1795\u17D2\u179B\u17B6\u179F\u17CB\u1794\u17D2\u178F\u17BC\u179A\u1780\u17D2\u1794\u17BF\u1784\u1785\u17C6\u1793\u17BD\u1793 \u17E2 \u178A\u17BE\u1798\u17D2\u1794\u17B8\u179F\u17D2\u178F\u17B6\u179A\u179A\u17BC\u1794\u1797\u17B6\u1796\u17A1\u17BE\u1784\u179C\u17B7\u1789",
      "waitForSMS": "\u1780\u17C6\u1796\u17BB\u1784\u179A\u1784\u17CB\u1785\u17B6\u17C6\u1780\u17B6\u179A\u1795\u17D2\u1791\u17C0\u1784\u1795\u17D2\u1791\u17B6\u178F\u17CB\u179F\u17B6\u179A SMS \u1793\u17C5\u179F\u179B\u17CB",
      "popupTitle": "\u179F\u17BC\u1798\u1794\u17C6\u1796\u17C1\u1789\u1780\u17B6\u179A\u1795\u17D2\u1791\u17C0\u1784\u1795\u17D2\u1791\u17B6\u178F\u17CB",
      "refresh": "\u1792\u17D2\u179C\u17BE\u17B1\u17D2\u1799\u179F\u17D2\u179A\u179F\u17CB\u1780\u17BC\u178A",
      "feedback": "\u1794\u1789\u17D2\u1787\u17BC\u1793\u1798\u178F\u17B7\u178F\u17D2\u179A\u17A1\u1794\u17CB",
      "switchToVoice": "\u1794\u17D2\u178F\u17BC\u179A\u1791\u17C5\u179B\u17C1\u1781\u1780\u17BC\u178A\u1795\u17D2\u1791\u17C0\u1784\u1795\u17D2\u1791\u17B6\u178F\u17CB\u179F\u17C6\u17A1\u17C1\u1784",
      "playVoice": "\u1785\u17B6\u1780\u17CB\u179B\u17C1\u1781\u1780\u17BC\u178A\u1795\u17D2\u1791\u17C0\u1784\u1795\u17D2\u1791\u17B6\u178F\u17CB\u179F\u17C6\u17A1\u17C1\u1784",
      "back": "\u178F\u17D2\u179A\u17A1\u1794\u17CB",
      "enterCode": "\u1794\u1789\u17D2\u1785\u17BC\u179B\u179B\u17C1\u1781\u1780\u17BC\u178A\u1795\u17D2\u1791\u17C0\u1784\u1795\u17D2\u1791\u17B6\u178F\u17CB\u178A\u17C2\u179B\u17A2\u17D2\u1793\u1780\u17D4",
      "check": "\u1795\u17D2\u1791\u17C0\u1784\u200B\u1795\u17D2\u1791\u17B6\u178F\u17CB",
      "close": "\u1780\u17B6\u179A\u1794\u17B7\u1791",
      "notSupportVoice": "\u1798\u17B7\u1793\u17A2\u17B6\u1785\u178A\u17C6\u178E\u17BE\u179A\u1780\u17B6\u179A\u179B\u17C1\u1781\u1780\u17BC\u178A\u1795\u17D2\u1791\u17C0\u1784\u1795\u17D2\u1791\u17B6\u178F\u17CB\u179F\u17C6\u17A1\u17C1\u1784\u1794\u17B6\u1793\u1791\u17C1",
      "intellisense": {
        "normal": "\u1785\u17BB\u1785\u178A\u17BE\u1798\u17D2\u1794\u17B8\u1794\u1789\u17D2\u1785\u1794\u17CB\u1780\u17B6\u179A\u1795\u17D2\u1791\u17C0\u1784\u1795\u17D2\u1791\u17B6\u178F\u17CB",
        "checking": "\u1780\u17C6\u1796\u17BB\u1784\u178F\u17D2\u179A\u17BD\u178F\u1796\u17B7\u1793\u17B7\u178F\u17D2\u1799",
        "loading": "\u1780\u17C6\u1796\u17BB\u1784\u1795\u17D2\u1791\u17BB\u1780",
        "loadfail": "\u1794\u179A\u17B6\u1787\u17D0\u1799\u1780\u17D2\u1793\u17BB\u1784\u1780\u17B6\u179A\u1795\u17D2\u1791\u17BB\u1780",
        "loaddone": "\u179F\u17BC\u1798\u1794\u17C6\u1796\u17C1\u1789\u1780\u17B6\u179A\u1795\u17D2\u1791\u17C0\u1784\u1795\u17D2\u1791\u17B6\u178F\u17CB",
        "longtap": "\u1794\u17C9\u17C7\u1796\u17B8\u179A\u178A\u1784\u17A0\u17BE\u1799\u179F\u1784\u17D2\u1780\u178F\u17CB\u179A\u1799\u17C8\u1796\u17C1\u179B \u17E0.\u17E5 \u179C\u17B7\u1793\u17B6\u1791\u17B8"
      },
      "sms": {
        "scanQrToSMS": "Scan QR code to send verification SMS",
        "noScanQr": "Unable to scan QR code",
        "manualSMS": "send a verification SMS manually",
        "clickToSMS": "Click the button to send verification SMS",
        "editSMS": "Edit SMS",
        "sendSMSTo": "Send to",
        "or": "or",
        "toSMS": "send a verification SMS",
        "cannotJump": "cannot jump to SMS"
      }
    },
    "si": {
      "loading": "\u0DB4\u0DD6\u0DBB\u0DAB\u0DBA \u0DC0\u0DD9\u0DB8\u0DD2\u0DB1\u0DCA ...",
      "loadfail": "\u0DB4\u0DD6\u0DBB\u0DAB\u0DBA \u0D9A\u0DD2\u0DBB\u0DD3\u0DB8\u0DA7 \u0D85\u0DC3\u0DB8\u0DAD\u0DCA \u0DC0\u0DD2\u0DBA",
      "verifySuccess": "\u0DC3\u0DCF\u0DBB\u0DCA\u0DAE\u0D9A\u0DC0 \u0DAD\u0DC4\u0DC0\u0DD4\u0DBB\u0DD4 \u0D9A\u0DBB\u0DB1 \u0DBD\u0DAF\u0DD2",
      "verifyError": "\u0D85\u0DC3\u0DB8\u0DAD\u0DCA \u0DC0\u0DD2\u0DBA, \u0DB1\u0DD0\u0DC0\u0DAD \u0D8B\u0DAD\u0DCA\u0DC3\u0DCF\u0DC4 \u0D9A\u0DBB\u0DB1\u0DCA\u0DB1",
      "verifyOutOfLimit": "\u0D85\u0DC3\u0DB8\u0DAD\u0DCA \u0DC0\u0DD2\u0DBA, \u0DB1\u0DD0\u0DC0\u0DAD \u0D8B\u0DAD\u0DCA\u0DC3\u0DCF\u0DC4 \u0D9A\u0DBB\u0DB1\u0DCA\u0DB1",
      "clickButton": "\u0DAD\u0DC4\u0DC0\u0DD4\u0DBB\u0DD4 \u0D9A\u0DD2\u0DBB\u0DD3\u0DB8\u0DA7 \u0D9A\u0DCA\u0DBD\u0DD2\u0D9A\u0DCA \u0D9A\u0DBB\u0DB1\u0DCA\u0DB1",
      "clickInTurn": "\u0DB4\u0DD2\u0DC5\u0DD2\u0DC0\u0DD9\u0DBD\u0DA7 \u0D9A\u0DCA\u0DBD\u0DD2\u0D9A\u0DCA \u0D9A\u0DBB\u0DB1\u0DCA\u0DB1",
      "clickWordInTurn": "\u0D9A\u0DBB\u0DD4\u0DAB\u0DCF\u0D9A\u0DBB \u0DB4\u0DD9\u0DC5 \u0D85\u0DB1\u0DD4\u0DB4\u0DD2\u0DC5\u0DD2\u0DC0\u0DD9\u0DBD \u0D9A\u0DCA\u0DBD\u0DD2\u0D9A\u0DCA \u0D9A\u0DBB\u0DB1\u0DCA\u0DB1",
      "slideTip": "\u0DB4\u0DD2\u0DB1\u0DCA\u0DAD\u0DD6\u0DBB\u0DBA \u0DB4\u0DCA\u0DBB\u0DAD\u0DD2\u0DC3\u0DCA\u0DAE\u0DCF\u0DB4\u0DB1\u0DBA \u0D9A\u0DBB\u0DB1\u0DCA\u0DB1",
      "inferenceTip": "\u0DB4\u0DD2\u0DB1\u0DCA\u0DAD\u0DD6\u0DBB\u0DBA \u0DB4\u0DCA\u0DBB\u0DAD\u0DD2\u0DC3\u0DCA\u0DAE\u0DCF\u0DB4\u0DB1\u0DBA \u0D9A\u0DBB\u0DB1\u0DCA\u0DB1",
      "waitForSMS": "\u0D9A\u0DD9\u0DA7\u0DD2 \u0DB4\u0DAB\u0DD2\u0DC0\u0DD4\u0DA9 \u0DBA\u0DD0\u0DC0\u0DD3\u0DB8, \u0D89\u0DAD\u0DD2\u0DBB\u0DD2\u0DBA",
      "popupTitle": "\u0DAD\u0DC4\u0DC0\u0DD4\u0DBB\u0DD4 \u0D9A\u0DBB\u0DB1\u0DCA\u0DB1",
      "refresh": "\u0DB1\u0DD0\u0DC0\u0DD4\u0DB8\u0DCA \u0D9A\u0DBB\u0DB1\u0DCA\u0DB1",
      "feedback": "\u0DB4\u0DCA\u200D\u0DBB\u0DAD\u0DD2\u0DB4\u0DDD\u0DC2\u0DAB \u0D89\u0DAF\u0DD2\u0DBB\u0DD2\u0DB4\u0DAD\u0DCA \u0D9A\u0DBB\u0DB1\u0DCA\u0DB1",
      "switchToVoice": "\u0DC4 voice \u0DC3\u0DAD\u0DCA\u200D\u0DBA\u0DCF\u0DB4\u0DB1 \u0D9A\u0DDA\u0DAD\u0DBA \u0DC0\u0DD9\u0DAD \u0DB8\u0DCF\u0DBB\u0DD4 \u0DC0\u0DB1\u0DCA\u0DB1",
      "playVoice": "\u0DC1\u0DB6\u0DCA\u0DAF \u0DC3\u0DAD\u0DCA\u200D\u0DBA\u0DCF\u0DB4\u0DB1 \u0D9A\u0DDA\u0DAD\u0DBA \u0DC0\u0DCF\u0DAF\u0DB1\u0DBA \u0D9A\u0DBB\u0DB1\u0DCA\u0DB1",
      "back": "\u0D86\u0DB4\u0DC3\u0DD4",
      "enterCode": "\u0D85\u0D82\u0D9A\u0DBA \u0D87\u0DAD\u0DD4\u0DC5\u0DD4 \u0D9A\u0DBB\u0DB1\u0DCA\u0DB1",
      "check": "\u0DAD\u0DC4\u0DC0\u0DD4\u0DBB\u0DD4 \u0D9A\u0DBB\u0DB1\u0DCA\u0DB1",
      "close": "\u0DC0\u0DC3\u0DCF \u0DAF\u0DD0\u0DB8\u0DD3\u0DB8",
      "notSupportVoice": "\u0DC1\u0DB6\u0DCA\u0DAF \u0D9C\u0DDC\u0DB1\u0DD4\u0DC0 \u0DB4\u0DD6\u0DBB\u0DAB\u0DBA \u0D9A\u0DD2\u0DBB\u0DD3\u0DB8\u0DA7 \u0D85\u0DC3\u0DB8\u0DAD\u0DCA \u0DC0\u0DD2\u0DBA",
      "intellisense": {
        "normal": "\u0DAD\u0DC4\u0DC0\u0DD4\u0DBB\u0DD4 \u0D9A\u0DBB\u0DB1\u0DCA\u0DB1",
        "checking": "\u0DB4\u0DBB\u0DD2\u0D9A\u0DCA\u0DC2\u0DCF \u0D9A\u0DD2\u0DBB\u0DD3\u0DB8",
        "loading": "\u0DB4\u0DD0\u0DA7\u0DC0\u0DD3\u0DB8",
        "loadfail": "\u0DB4\u0DD6\u0DBB\u0DAB\u0DBA \u0D9A\u0DD2\u0DBB\u0DD3\u0DB8\u0DA7 \u0D85\u0DC3\u0DB8\u0DAD\u0DCA \u0DC0\u0DD2\u0DBA",
        "loaddone": "\u0DAD\u0DC4\u0DC0\u0DD4\u0DBB\u0DD4 \u0D9A\u0DBB\u0DB1\u0DCA\u0DB1",
        "longtap": "\u0DAD\u0DAD\u0DCA\u0DB4\u0DBB 0.5 \u0D9A\u0DCA \u0DAF\u0DD9\u0DC0\u0DBB\u0D9A\u0DCA \u0DAD\u0DA7\u0DCA\u0DA7\u0DD4 \u0D9A\u0DBB \u0D85\u0DBD\u0DCA\u0DBD\u0DCF\u0D9C\u0DD9\u0DB1 \u0DC3\u0DD2\u0DA7\u0DD2\u0DB1\u0DCA\u0DB1"
      },
      "sms": {
        "scanQrToSMS": "Scan QR code to send verification SMS",
        "noScanQr": "Unable to scan QR code",
        "manualSMS": "send a verification SMS manually",
        "clickToSMS": "Click the button to send verification SMS",
        "editSMS": "Edit SMS",
        "sendSMSTo": "Send to",
        "or": "or",
        "toSMS": "send a verification SMS",
        "cannotJump": "cannot jump to SMS"
      }
    },
    "ur": {
      "loading": "\u0644\u0648\u0688 \u06C1\u0648 \u0631\u06C1\u0627 \u06C1\u06D2 ...",
      "loadfail": "\u0644\u0648\u0688 \u06A9\u0631\u0646\u06D2 \u0645\u06CC\u06BA \u0646\u0627\u06A9\u0627\u0645",
      "verifySuccess": "\u06A9\u0627\u0645\u06CC\u0627\u0628\u06CC \u0633\u06D2 \u062A\u0635\u062F\u06CC\u0642 \u0634\u062F\u06C1\u06D4",
      "verifyError": "\u0646\u0627\u06A9\u0627\u0645 \u060C \u0628\u0631\u0627\u06C1 \u06A9\u0631\u0645 \u062F\u0648\u0628\u0627\u0631\u06C1 \u06A9\u0648\u0634\u0634 \u06A9\u0631\u06CC\u06BA\u06D4",
      "verifyOutOfLimit": "\u0628\u06C1\u062A \u0632\u06CC\u0627\u062F\u06C1 \u0646\u0627\u06A9\u0627\u0645\u06CC\u0627\u06BA \u060C \u0628\u0631\u0627\u06C1 \u06A9\u0631\u0645 \u062F\u0648\u0628\u0627\u0631\u06C1 \u06A9\u0648\u0634\u0634 \u06A9\u0631\u06CC\u06BA\u06D4",
      "clickButton": "\u062A\u0635\u062F\u06CC\u0642 \u06A9\u06D2 \u0644\u06CC\u06D2 \u06A9\u0644\u06A9 \u06A9\u0631\u06CC\u06BA\u06D4",
      "clickInTurn": "\u0628\u0631\u0627\u06C1 \u06A9\u0631\u0645 \u062A\u0631\u062A\u06CC\u0628 \u0645\u06CC\u06BA \u06A9\u0644\u06A9 \u06A9\u0631\u06CC\u06BA\u06D4",
      "clickWordInTurn": "\u0628\u0631\u0627\u06C1 \u06A9\u0631\u0645 \u0645\u062A\u0646 \u067E\u0631 \u06A9\u0644\u06A9 \u06A9\u0631\u06CC\u06BA\u06D4",
      "slideTip": "\u062A\u0635\u0648\u06CC\u0631 \u06A9\u0648 \u0628\u062D\u0627\u0644 \u06A9\u0631\u0646\u06D2 \u06A9\u06CC\u0644\u0626\u06D2 \u062F\u0627\u0626\u06CC\u06BA \u0633\u0648\u0627\u0626\u067E",
      "inferenceTip": "\u062A\u0635\u0627\u0648\u06CC\u0631 \u06A9\u0648 \u0628\u062D\u0627\u0644 \u06A9\u0631\u0646\u06D2 \u06A9\u06D2 \u0644\u06CC\u06D2 2 \u0679\u0627\u0626\u0644\u0632 \u06A9\u0627 \u062A\u0628\u0627\u062F\u0644\u06C1 \u06A9\u0631\u06CC\u06BA\u06D4",
      "waitForSMS": "\u0627\u06CC\u0633 \u0627\u06CC\u0645 \u0627\u06CC\u0633 \u06A9\u06CC \u062A\u0635\u062F\u06CC\u0642 \u06A9\u0627 \u0627\u0646\u062A\u0638\u0627\u0631 \u060C \u0628\u0627\u0642\u06CC\u06D4",
      "popupTitle": "\u0628\u0631\u0627\u06C1 \u06A9\u0631\u0645 \u062A\u0635\u062F\u06CC\u0642 \u0645\u06A9\u0645\u0644 \u06A9\u0631\u06CC\u06BA\u06D4",
      "refresh": "\u06A9\u0648\u0688 \u0631\u06CC\u0641\u0631\u06CC\u0634 \u06A9\u0631\u06CC\u06BA\u06D4",
      "feedback": "\u062A\u0627\u062B\u0631\u0627\u062A \u062C\u0645\u0639 \u06A9\u0631\u0648\u0627\u0626\u06CC\u06BA\u06D4",
      "switchToVoice": "\u0635\u0648\u062A\u06CC \u062A\u0648\u062B\u06CC\u0642\u06CC \u06A9\u0648\u0688 \u067E\u0631 \u0633\u0648\u0626\u0686 \u06A9\u0631\u06CC\u06BA\u06D4",
      "playVoice": "\u0635\u0648\u062A\u06CC \u062A\u0635\u062F\u06CC\u0642 \u06A9\u0627 \u06A9\u0648\u0688 \u0686\u0644\u0627\u0626\u06CC\u06BA\u06D4",
      "back": "\u0648\u0627\u067E\u0633\u06CC",
      "enterCode": "\u062A\u0648\u062B\u06CC\u0642\u06CC \u06A9\u0648\u0688 \u062F\u0631\u062C \u06A9\u0631\u06CC\u06BA \u062C\u0648 \u0622\u067E \u0633\u0646\u062A\u06D2 \u06C1\u06CC\u06BA\u06D4",
      "check": "\u062A\u0635\u062F\u06CC\u0642 \u06A9\u0631\u06CC\u06BA",
      "close": "\u0628\u0646\u062F\u0634",
      "notSupportVoice": "\u0635\u0648\u062A\u06CC \u062A\u0648\u062B\u06CC\u0642\u06CC \u06A9\u0648\u0688 \u0644\u0648\u0688 \u06A9\u0631\u0646\u06D2 \u0645\u06CC\u06BA \u0646\u0627\u06A9\u0627\u0645\u06D4",
      "intellisense": {
        "normal": "\u062A\u0635\u062F\u06CC\u0642 \u0645\u06A9\u0645\u0644 \u06A9\u0631\u0646\u06D2 \u06A9\u06D2 \u0644\u06CC\u06D2 \u06A9\u0644\u06A9 \u06A9\u0631\u06CC\u06BA\u06D4",
        "checking": "\u0686\u06CC\u06A9\u0646\u06AF",
        "loading": "\u0644\u0648\u0688\u0646\u06AF",
        "loadfail": "\u0644\u0648\u0688 \u06A9\u0631\u0646\u06D2 \u0645\u06CC\u06BA \u0646\u0627\u06A9\u0627\u0645",
        "loaddone": "\u0628\u0631\u0627\u06C1 \u06A9\u0631\u0645 \u062A\u0635\u062F\u06CC\u0642 \u0645\u06A9\u0645\u0644 \u06A9\u0631\u06CC\u06BA\u06D4",
        "longtap": "0.5 \u0633\u06CC\u06A9\u0646\u0688 \u06A9\u06D2 \u0644\u06CC\u06D2 \u0688\u0628\u0644 \u062A\u06BE\u067E\u062A\u06BE\u067E\u0627\u0626\u06CC\u06BA\u06D4"
      },
      "sms": {
        "scanQrToSMS": "Scan QR code to send verification SMS",
        "noScanQr": "Unable to scan QR code",
        "manualSMS": "send a verification SMS manually",
        "clickToSMS": "Click the button to send verification SMS",
        "editSMS": "Edit SMS",
        "sendSMSTo": "Send to",
        "or": "or",
        "toSMS": "send a verification SMS",
        "cannotJump": "cannot jump to SMS"
      }
    },
    "bo": {
      "loading": "\u0F66\u0FA3\u0F7C\u0F53\u0F0B\u0F54\u0F0D",
      "loadfail": "\u0F41\u0F74\u0F62\u0F0B\u0F66\u0FA3\u0F7C\u0F53\u0F0B\u0F55\u0F58\u0F0B\u0F54\u0F0D",
      "verifySuccess": "\u0F62\u0F0B\u0F66\u0FA4\u0FB2\u0F7C\u0F51\u0F0B\u0F42\u0FB2\u0F74\u0F56\u0F0B\u0F60\u0F56\u0FB2\u0F66\u0F0B\u0F50\u0F7C\u0F56\u0F0B\u0F54\u0F60\u0F72\u0F0B\u0F44\u0F44\u0F0B",
      "verifyError": "\u0F55\u0F58\u0F0B\u0F41\u0F0B\u0F61\u0F44\u0F0B\u0F56\u0F66\u0F90\u0FB1\u0F62\u0F0B\u0F5A\u0F7C\u0F51\u0F0B\u0F63\u0F9F\u0F0B\u0F5E\u0F72\u0F42\u0F0B\u0F56\u0FB1\u0F7C\u0F66\u0F0B\u0F0D",
      "verifyOutOfLimit": "\u0F55\u0F58\u0F0B\u0F50\u0F7A\u0F44\u0F66\u0F0B\u0F67\u0F0B\u0F45\u0F44\u0F0B\u0F58\u0F44\u0F0B\u0F54\u0F7C\u0F0B\u0F51\u0F44\u0F0B\u0F0D\u0F61\u0F44\u0F0B\u0F56\u0F66\u0F90\u0FB1\u0F62\u0F0B\u0F5A\u0F7C\u0F51\u0F0B\u0F63\u0F9F\u0F0B\u0F5E\u0F72\u0F42\u0F0B\u0F42\u0F53\u0F44\u0F0B\u0F62\u0F7C\u0F42\u0F66\u0F0B\u0F0D",
      "clickButton": "\u0F58\u0F53\u0F53\u0F0B\u0F53\u0F66\u0F0B\u0F62\u0F0B\u0F66\u0FA4\u0FB2\u0F7C\u0F51\u0F0B\u0F56\u0FB1\u0F7A\u0F51\u0F0D",
      "clickInTurn": "\u0F42\u0F7C\u0F0B\u0F62\u0F72\u0F58\u0F0B\u0F63\u0F9F\u0F62\u0F0B\u0F42\u0F53\u0F7C\u0F53\u0F0B\u0F62\u0F7C\u0F42\u0F66\u0F0B\u0F0D",
      "clickWordInTurn": "\u0F42\u0F7C\u0F0B\u0F62\u0F72\u0F58\u0F0B\u0F63\u0F9F\u0F62\u0F0B\u0F61\u0F72\u0F0B\u0F42\u0F7A\u0F0B\u0F42\u0F53\u0F7C\u0F53\u0F0B\u0F62\u0F7C\u0F42\u0F66\u0F0B\u0F0D",
      "slideTip": "\u0F42\u0F61\u0F7C\u0F53\u0F0B\u0F60\u0F50\u0F7A\u0F53\u0F0B\u0F60\u0F42\u0F74\u0F63\u0F0B\u0F62\u0F72\u0F66\u0F0B\u0F51\u0F74\u0F58\u0F0B\u0F56\u0F74\u0F0B\u0F41\u0F0B\u0F66\u0F90\u0F7C\u0F44\u0F0B\u0F54\u0F62\u0F0B\u0F62\u0F72\u0F66\u0F0B\u0F0D",
      "inferenceTip": "\u0F62\u0F72\u0F0B\u0F58\u0F7C\u0F0B\u0F51\u0F74\u0F58\u0F0B\u0F56\u0F74\u0F0B2\u0F56\u0F62\u0F97\u0F7A\u0F0B\u0F49\u0F58\u0F66\u0F0B\u0F54\u0F0B\u0F66\u0F7C\u0F62\u0F0B\u0F46\u0F74\u0F51\u0F0B\u0F54\u0F62\u0F0B\u0F62\u0F72\u0F66\u0F0B\u0F0D",
      "waitForSMS": "\u0F60\u0F55\u0FB2\u0F72\u0F53\u0F0B\u0F50\u0F74\u0F44\u0F0B\u0F63\u0F0B\u0F56\u0F62\u0F9F\u0F7A\u0F53\u0F0B\u0F53\u0F66\u0F0B\u0F62\u0F0B\u0F66\u0FA4\u0FB2\u0F7C\u0F51\u0F0B\u0F51\u0F44\u0F0B\u0F0D\u0F63\u0FB7\u0F42\u0F0B\u0F60\u0F55\u0FB2\u0F7C\u0F0B\u0F0D",
      "popupTitle": "\u0F62\u0F0B\u0F66\u0FA4\u0FB2\u0F7C\u0F51\u0F0B\u0F63\u0F7A\u0F42\u0F66\u0F0B\u0F42\u0FB2\u0F74\u0F56\u0F0B\u0F62\u0F7C\u0F42\u0F66\u0F0B\u0F0D",
      "refresh": "\u0F42\u0F66\u0F62\u0F0B\u0F60\u0F51\u0F7C\u0F53\u0F0B\u0F62\u0F0B\u0F66\u0FA4\u0FB2\u0F7C\u0F51\u0F0B\u0F68\u0F44\u0F0B\u0F0D",
      "feedback": "\u0F63\u0FA1\u0F7C\u0F42\u0F0B\u0F60\u0F51\u0FB2\u0F7A\u0F53\u0F0B",
      "switchToVoice": "\u0F66\u0F92\u0FB2\u0F0B\u0F63\u0F0B\u0F56\u0F62\u0F97\u0F7A\u0F0B\u0F53\u0F66\u0F0B\u0F62\u0F0B\u0F66\u0FA4\u0FB2\u0F7C\u0F51\u0F0B\u0F68\u0F44\u0F0B",
      "playVoice": "\u0F41\u0FB1\u0F56\u0F0B\u0F42\u0F4F\u0F7C\u0F44\u0F0B\u0F66\u0F92\u0FB2\u0F0B\u0F62\u0F0B\u0F66\u0FA4\u0FB2\u0F7C\u0F51\u0F0B\u0F68\u0F44\u0F0B\u0F0D",
      "back": "\u0F55\u0FB1\u0F72\u0F62\u0F0B\u0F63\u0F7C\u0F42",
      "enterCode": "\u0F50\u0F7C\u0F66\u0F0B\u0F40\u0FB1\u0F72\u0F0B\u0F62\u0F0B\u0F66\u0FA4\u0FB2\u0F7C\u0F51\u0F0B\u0F68\u0F44\u0F0B\u0F53\u0F44\u0F0B\u0F60\u0F47\u0F74\u0F42\u0F0B",
      "check": "\u0F62\u0F0B\u0F66\u0FA4\u0FB2\u0F7C\u0F51\u0F0B",
      "close": "\u0F66\u0F92\u0F7C\u0F0B\u0F62\u0F92\u0FB1\u0F42\u0F0B\u0F54\u0F0B",
      "notSupportVoice": "\u0F66\u0F92\u0FB2\u0F0B\u0F62\u0F0B\u0F66\u0FA4\u0FB2\u0F7C\u0F51\u0F0B\u0F68\u0F44\u0F0B\u0F66\u0FA3\u0F7C\u0F53\u0F0B\u0F60\u0F51\u0F7A\u0F42\u0F66\u0F0B\u0F55\u0F58\u0F0B",
      "intellisense": {
        "normal": "\u0F5A\u0F7C\u0F51\u0F0B\u0F63\u0F9F\u0F66\u0F0B\u0F62\u0F0B\u0F66\u0FA4\u0FB2\u0F7C\u0F51\u0F0B\u0F63\u0F0B\u0F42\u0F53\u0F7C\u0F53\u0F0B\u0F0D",
        "checking": "\u0F56\u0F64\u0F7A\u0F62\u0F0B\u0F60\u0F47\u0F63\u0F0B\u0F41\u0FB2\u0F7C\u0F51\u0F0B",
        "loading": "\u0F66\u0FA3\u0F7C\u0F53\u0F0B\u0F56\u0F5E\u0F72\u0F53\u0F0B\u0F61\u0F7C\u0F51\u0F0B\u0F0D",
        "loadfail": "\u0F41\u0F74\u0F62\u0F0B\u0F66\u0FA3\u0F7C\u0F53\u0F0B\u0F55\u0F58\u0F0B\u0F54\u0F0D",
        "loaddone": "\u0F62\u0F0B\u0F66\u0FA4\u0FB2\u0F7C\u0F51\u0F0B\u0F63\u0F7A\u0F42\u0F66\u0F0B\u0F42\u0FB2\u0F74\u0F56\u0F0B\u0F62\u0F7C\u0F42\u0F66\u0F0B\u0F0D",
        "longtap": "\u0F49\u0F72\u0F66\u0F0B\u0F62\u0FA1\u0F7A\u0F56\u0F0B\u0F62\u0F97\u0F7A\u0F66\u0F0B\u0F40\u0FB1\u0F72\u0F0B\u0F62\u0F72\u0F44\u0F0B\u0F50\u0F74\u0F44\u0F0B\u0F53\u0F72\u0F0B\u0F66\u0F90\u0F62\u0F0B\u0F46\u0F0B0.5\u0F63\u0F9F\u0F62\u0F0B\u0F0D"
      },
      "sms": {
        "scanQrToSMS": "Scan QR code to send verification SMS",
        "noScanQr": "Unable to scan QR code",
        "manualSMS": "send a verification SMS manually",
        "clickToSMS": "Click the button to send verification SMS",
        "editSMS": "Edit SMS",
        "sendSMSTo": "Send to",
        "or": "or",
        "toSMS": "send a verification SMS",
        "cannotJump": "cannot jump to SMS"
      }
    },
    "be": {
      "loading": "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430 ...",
      "loadfail": "\u041D\u0435 \u0430\u0442\u0440\u044B\u043C\u0430\u043B\u0430\u0441\u044F \u0437\u0430\u0433\u0440\u0443\u0437\u0456\u0446\u044C",
      "verifySuccess": "\u041F\u0440\u0430\u0432\u0435\u0440\u0430\u043D\u0430 \u043F\u0430\u0441\u043F\u044F\u0445\u043E\u0432\u0430",
      "verifyError": "\u041D\u0435 \u0430\u0442\u0440\u044B\u043C\u0430\u043B\u0430\u0441\u044F. \u041F\u0430\u045E\u0442\u0430\u0440\u044B\u0446\u0435 \u0441\u043F\u0440\u043E\u0431\u0443",
      "verifyOutOfLimit": "\u0417\u0430\u043D\u0430\u0434\u0442\u0430 \u0448\u043C\u0430\u0442 \u0437\u0431\u043E\u044F\u045E, \u043F\u0430\u045E\u0442\u0430\u0440\u044B\u0446\u0435 \u0441\u043F\u0440\u043E\u0431\u0443",
      "clickButton": "\u041D\u0430\u0446\u0456\u0441\u043D\u0456\u0446\u0435, \u043A\u0430\u0431 \u043F\u0440\u0430\u0432\u0435\u0440\u044B\u0446\u044C",
      "clickInTurn": "\u041A\u0430\u043B\u0456 \u043B\u0430\u0441\u043A\u0430, \u043D\u0430\u0446\u0456\u0441\u043D\u0456\u0446\u0435",
      "clickWordInTurn": "\u041A\u0430\u043B\u0456 \u043B\u0430\u0441\u043A\u0430, \u043D\u0430\u0446\u0456\u0441\u043D\u0456\u0446\u0435 \u0442\u044D\u043A\u0441\u0442 \u0443 \u043F\u0430\u0440\u0430\u0434\u043A\u0443",
      "slideTip": "\u041F\u0440\u0430\u0432\u044F\u0434\u0437\u0456\u0446\u0435 \u043F\u0430\u043B\u044C\u0446\u0430\u043C \u0456 \u0430\u0434\u043D\u0430\u0432\u0456\u0446\u0435 \u0432\u044B\u044F\u0432\u0443",
      "inferenceTip": "\u0410\u0431\u043C\u044F\u043D\u044F\u0439\u0446\u0435 2 \u043F\u043B\u0456\u0442\u043A\u0456, \u043A\u0430\u0431 \u0430\u0434\u043D\u0430\u0432\u0456\u0446\u044C \u0432\u044B\u044F\u0432\u044B",
      "waitForSMS": "\u0427\u0430\u043A\u0430\u043D\u043D\u0435 \u043F\u0440\u0430\u0432\u0435\u0440\u043A\u0456 SMS, \u0437\u0430\u0441\u0442\u0430\u043B\u043E\u0441\u044F",
      "popupTitle": "\u041A\u0430\u043B\u0456 \u043B\u0430\u0441\u043A\u0430, \u0437\u0430\u043F\u043E\u045E\u043D\u0456\u0446\u0435 \u043F\u0440\u0430\u0432\u0435\u0440\u043A\u0443",
      "refresh": "\u0410\u0431\u043D\u0430\u0432\u0456\u0446\u044C \u043A\u043E\u0434",
      "feedback": "\u0410\u0434\u043F\u0440\u0430\u045E\u0446\u0435 \u0432\u043E\u0434\u0433\u0443\u043A",
      "switchToVoice": "\u041F\u0435\u0440\u0430\u043A\u043B\u044E\u0447\u044B\u0446\u0435\u0441\u044F \u043D\u0430 \u043A\u043E\u0434 \u0433\u0430\u043B\u0430\u0441\u0430\u0432\u043E\u0439 \u043F\u0440\u0430\u0432\u0435\u0440\u043A\u0456",
      "playVoice": "\u041F\u0440\u0430\u0439\u0433\u0440\u0430\u0446\u044C \u0433\u0443\u043A\u0430\u0432\u044B \u043A\u043E\u0434 \u0441\u043F\u0440\u0430\u045E\u0434\u0436\u0430\u043D\u043D\u044F",
      "back": "\u0432\u044F\u0440\u0442\u0430\u043D\u043D\u0435",
      "enterCode": "\u0423\u0432\u044F\u0434\u0437\u0456\u0446\u0435 \u043B\u0456\u0447\u0431\u044B, \u044F\u043A\u0456\u044F \u0432\u044B \u0447\u0443\u0435\u0446\u0435",
      "check": "\u043F\u0440\u0430\u0432\u0435\u0440\u044B\u0446\u044C",
      "close": "\u0437\u0430\u043A\u0440\u044B\u0446\u0446\u0451",
      "notSupportVoice": "\u041D\u0435 \u0430\u0442\u0440\u044B\u043C\u0430\u043B\u0430\u0441\u044F \u0437\u0430\u0433\u0440\u0443\u0437\u0456\u0446\u044C \u043A\u043E\u0434 \u0433\u0430\u043B\u0430\u0441\u0430\u0432\u043E\u0439 \u043F\u0440\u0430\u0432\u0435\u0440\u043A\u0456",
      "intellisense": {
        "normal": "\u041D\u0430\u0446\u0456\u0441\u043D\u0456\u0446\u0435, \u043A\u0430\u0431 \u0437\u0430\u0432\u044F\u0440\u0448\u044B\u0446\u044C \u043F\u0440\u0430\u0432\u0435\u0440\u043A\u0443",
        "checking": "\u043F\u0440\u0430\u0432\u0435\u0440\u043A\u0430",
        "loading": "\u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0430",
        "loadfail": "\u041D\u0435 \u0430\u0442\u0440\u044B\u043C\u0430\u043B\u0430\u0441\u044F \u0437\u0430\u0433\u0440\u0443\u0437\u0456\u0446\u044C",
        "loaddone": "\u041A\u0430\u043B\u0456 \u043B\u0430\u0441\u043A\u0430, \u0437\u0430\u043F\u043E\u045E\u043D\u0456\u0446\u0435 \u043F\u0440\u0430\u0432\u0435\u0440\u043A\u0443",
        "longtap": "\u0414\u0432\u043E\u0439\u0447\u044B \u043D\u0430\u0446\u0456\u0441\u043D\u0456\u0446\u0435 \u0456 \u045E\u0442\u0440\u044B\u043C\u043B\u0456\u0432\u0430\u0439\u0446\u0435 0,5 \u0441\u0435\u043A\u0443\u043D\u0434\u044B"
      },
      "sms": {
        "scanQrToSMS": "Scan QR code to send verification SMS",
        "noScanQr": "Unable to scan QR code",
        "manualSMS": "send a verification SMS manually",
        "clickToSMS": "Click the button to send verification SMS",
        "editSMS": "Edit SMS",
        "sendSMSTo": "Send to",
        "or": "or",
        "toSMS": "send a verification SMS",
        "cannotJump": "cannot jump to SMS"
      }
    },
    "kk": {
      "loading": "\u0416\u04AF\u043A\u0442\u0435\u043B\u0443\u0434\u0435 ...",
      "loadfail": "\u0416\u04AF\u043A\u0442\u0435\u043B\u043C\u0435\u0434\u0456",
      "verifySuccess": "\u0421\u04D9\u0442\u0442\u0456 \u0440\u0430\u0441\u0442\u0430\u043B\u0434\u044B",
      "verifyError": "\u0421\u04D9\u0442\u0441\u0456\u0437 \u0431\u043E\u043B\u0434\u044B, \u049B\u0430\u0439\u0442\u0430\u043B\u0430\u043F \u043A\u04E9\u0440\u0456\u04A3\u0456\u0437",
      "verifyOutOfLimit": "\u0421\u04D9\u0442\u0441\u0456\u0437\u0434\u0456\u043A\u0442\u0435\u0440 \u0442\u044B\u043C \u043A\u04E9\u043F, \u049B\u0430\u0439\u0442\u0430\u043B\u0430\u043F \u043A\u04E9\u0440\u0456\u04A3\u0456\u0437",
      "clickButton": "\u0420\u0430\u0441\u0442\u0430\u0443 \u04AF\u0448\u0456\u043D \u0431\u0430\u0441\u044B\u04A3\u044B\u0437",
      "clickInTurn": "\u0422\u04D9\u0440\u0442\u0456\u043F \u0431\u043E\u0439\u044B\u043D\u0448\u0430 \u0431\u0430\u0441\u044B\u04A3\u044B\u0437",
      "clickWordInTurn": "\u041C\u04D9\u0442\u0456\u043D\u0434\u0456 \u0440\u0435\u0442\u0456\u043C\u0435\u043D \u0431\u0430\u0441\u044B\u04A3\u044B\u0437",
      "slideTip": "\u0421\u0443\u0440\u0435\u0442\u0442\u0456 \u049B\u0430\u043B\u043F\u044B\u043D\u0430 \u043A\u0435\u043B\u0442\u0456\u0440\u0443 \u0441\u04B1\u0440\u0430\u0439\u043C\u044B\u0437",
      "inferenceTip": "\u0410\u0431\u043C\u044F\u043D\u044F\u0439\u0446\u0435 2 \u043F\u043B\u0456\u0442\u043A\u0456, \u043A\u0430\u0431 \u0430\u0434\u043D\u0430\u0432\u0456\u0446\u044C \u0432\u044B\u044F\u0432\u044B",
      "waitForSMS": "SMS \u0440\u0430\u0441\u0442\u0430\u0443 \u043A\u04AF\u0442\u0456\u043B\u0443\u0434\u0435, \u049B\u0430\u043B\u0434\u044B",
      "popupTitle": "\u0422\u0435\u043A\u0441\u0435\u0440\u0443\u0434\u0456 \u0430\u044F\u049B\u0442\u0430\u04A3\u044B\u0437",
      "refresh": "\u041A\u043E\u0434\u0442\u044B \u0436\u0430\u04A3\u0430\u0440\u0442\u0443",
      "feedback": "\u041A\u0435\u0440\u0456 \u0431\u0430\u0439\u043B\u0430\u043D\u044B\u0441 \u0436\u0456\u0431\u0435\u0440\u0456\u04A3\u0456\u0437",
      "switchToVoice": "\u0414\u0430\u0443\u044B\u0441\u0442\u044B \u0440\u0430\u0441\u0442\u0430\u0443 \u043A\u043E\u0434\u044B\u043D\u0430 \u0430\u0443\u044B\u0441\u044B\u04A3\u044B\u0437",
      "playVoice": "\u0414\u044B\u0431\u044B\u0441\u0442\u044B\u049B \u0440\u0430\u0441\u0442\u0430\u0443 \u043A\u043E\u0434\u044B\u043D \u043E\u0439\u043D\u0430\u0442\u0443",
      "back": "\u049B\u0430\u0439\u0442\u0430\u0440\u0443",
      "enterCode": "\u0421\u0456\u0437 \u0435\u0441\u0442\u0438\u0442\u0456\u043D \u0440\u0430\u0441\u0442\u0430\u0443 \u043A\u043E\u0434\u044B\u043D \u0435\u043D\u0433\u0456\u0437\u0456\u04A3\u0456\u0437",
      "check": "\u0442\u0435\u043A\u0441\u0435\u0440\u0443",
      "close": "\u0436\u0430\u0431\u044B\u043B\u0443",
      "notSupportVoice": "\u0414\u0430\u0443\u044B\u0441\u0442\u044B\u049B \u0440\u0430\u0441\u0442\u0430\u0443 \u043A\u043E\u0434\u044B \u0436\u04AF\u043A\u0442\u0435\u043B\u043C\u0435\u0434\u0456",
      "intellisense": {
        "normal": "\u0420\u0430\u0441\u0442\u0430\u0443\u0434\u044B \u0430\u044F\u049B\u0442\u0430\u0443 \u04AF\u0448\u0456\u043D \u0431\u0430\u0441\u044B\u04A3\u044B\u0437",
        "checking": "\u0442\u0435\u043A\u0441\u0435\u0440\u0443",
        "loading": "\u0436\u04AF\u043A\u0442\u0435\u0443",
        "loadfail": "\u0416\u04AF\u043A\u0442\u0435\u043B\u043C\u0435\u0434\u0456",
        "loaddone": "\u0422\u0435\u043A\u0441\u0435\u0440\u0443\u0434\u0456 \u0430\u044F\u049B\u0442\u0430\u04A3\u044B\u0437",
        "longtap": "\u0415\u043A\u0456 \u0440\u0435\u0442 \u0442\u04AF\u0440\u0442\u0456\u043F, 0,5 \u0441\u0435\u043A\u0443\u043D\u0434 \u04B1\u0441\u0442\u0430\u043F \u0442\u04B1\u0440\u044B\u04A3\u044B\u0437"
      },
      "sms": {
        "scanQrToSMS": "Scan QR code to send verification SMS",
        "noScanQr": "Unable to scan QR code",
        "manualSMS": "send a verification SMS manually",
        "clickToSMS": "Click the button to send verification SMS",
        "editSMS": "Edit SMS",
        "sendSMSTo": "Send to",
        "or": "or",
        "toSMS": "send a verification SMS",
        "cannotJump": "cannot jump to SMS"
      }
    },
    "bn": {
      "loading": "\u09B2\u09CB\u09A1 \u09B9\u099A\u09CD\u099B\u09C7 ...",
      "loadfail": "\u09B2\u09CB\u09A1 \u0995\u09B0\u09A4\u09C7 \u09AC\u09CD\u09AF\u09B0\u09CD\u09A5",
      "verifySuccess": "\u09B8\u09AB\u09B2\u09AD\u09BE\u09AC\u09C7 \u09AF\u09BE\u099A\u09BE\u0987 \u0995\u09B0\u09BE \u09B9\u09AF\u09BC\u09C7\u099B\u09C7",
      "verifyError": "\u09AC\u09CD\u09AF\u09B0\u09CD\u09A5 \u09B9\u09AF\u09BC\u09C7\u099B\u09C7, \u09A6\u09AF\u09BC\u09BE \u0995\u09B0\u09C7 \u0986\u09AC\u09BE\u09B0 \u099A\u09C7\u09B7\u09CD\u099F\u09BE \u0995\u09B0\u09C1\u09A8",
      "verifyOutOfLimit": "\u0985\u09A8\u09C7\u0995\u0997\u09C1\u09B2\u09BF \u09AC\u09CD\u09AF\u09B0\u09CD\u09A5\u09A4\u09BE, \u09A6\u09AF\u09BC\u09BE \u0995\u09B0\u09C7 \u0986\u09AC\u09BE\u09B0 \u099A\u09C7\u09B7\u09CD\u099F\u09BE \u0995\u09B0\u09C1\u09A8",
      "clickButton": "\u09AF\u09BE\u099A\u09BE\u0987 \u0995\u09B0\u09A4\u09C7 \u0995\u09CD\u09B2\u09BF\u0995 \u0995\u09B0\u09C1\u09A8",
      "clickInTurn": "\u0985\u09A8\u09C1\u0997\u09CD\u09B0\u09B9 \u0995\u09B0\u09C7 \u0995\u09CD\u09B0\u09AE\u09C7 \u0995\u09CD\u09B2\u09BF\u0995 \u0995\u09B0\u09C1\u09A8",
      "clickWordInTurn": "\u0985\u09A8\u09C1\u0997\u09CD\u09B0\u09B9 \u0995\u09B0\u09C7 \u09B2\u09C7\u0996\u09BE\u099F\u09BF\u09A4\u09C7 \u0995\u09CD\u09B2\u09BF\u0995 \u0995\u09B0\u09C1\u09A8",
      "slideTip": "\u099B\u09AC\u09BF\u099F\u09BF \u09AA\u09C2\u09B0\u09A3 \u0995\u09B0\u09A4\u09C7 \u09A1\u09BE\u09A8\u09A6\u09BF\u0995\u09C7 \u099F\u09BE\u0987\u09B2 \u099F\u09C7\u09A8\u09C7 \u0986\u09A8\u09C1\u09A8",
      "inferenceTip": "\u099B\u09AC\u09BF \u09AA\u09C1\u09A8\u09B0\u09C1\u09A6\u09CD\u09A7\u09BE\u09B0 \u0995\u09B0\u09A4\u09C7 2 \u099F\u09BE\u0987\u09B2 \u09AC\u09BF\u09A8\u09BF\u09AE\u09AF\u09BC \u0995\u09B0\u09C1\u09A8",
      "waitForSMS": "SMS \u09AF\u09BE\u099A\u09BE\u0987\u09AF\u09BC\u09C7\u09B0 \u099C\u09A8\u09CD\u09AF \u0985\u09AA\u09C7\u0995\u09CD\u09B7\u09BE, \u09AC\u09BE\u0995\u09BF \u0986\u099B\u09C7",
      "popupTitle": "\u09AF\u09BE\u099A\u09BE\u0987\u0995\u09B0\u09A3 \u09B8\u09AE\u09CD\u09AA\u09C2\u09B0\u09CD\u09A3 \u0995\u09B0\u09C1\u09A8",
      "refresh": "\u09B0\u09BF\u09AB\u09CD\u09B0\u09C7\u09B6 \u0995\u09CB\u09A1",
      "feedback": "\u09AE\u09A4\u09BE\u09AE\u09A4 \u099C\u09AE\u09BE \u09A6\u09BF\u09A8",
      "switchToVoice": "\u09AD\u09AF\u09BC\u09C7\u09B8 \u09AF\u09BE\u099A\u09BE\u0987\u0995\u09B0\u09A3 \u0995\u09CB\u09A1\u09C7 \u09AF\u09BE\u09A8",
      "playVoice": "\u09B8\u09BE\u0989\u09A8\u09CD\u09A1 \u09AD\u09C7\u09B0\u09BF\u09AB\u09BF\u0995\u09C7\u09B6\u09A8 \u0995\u09CB\u09A1 \u099A\u09BE\u09B2\u09BE\u09A8",
      "back": "\u09AA\u09CD\u09B0\u09A4\u09CD\u09AF\u09BE\u09AC\u09B0\u09CD\u09A4\u09A8",
      "enterCode": "\u0986\u09AA\u09A8\u09BE\u09B0 \u09B6\u09CB\u09A8\u09BE \u09AF\u09BE\u099A\u09BE\u0987 \u0995\u09CB\u09A1\u099F\u09BF \u09B2\u09BF\u0996\u09C1\u09A8",
      "check": "\u09AF\u09BE\u099A\u09BE\u0987 \u0995\u09B0\u09C1\u09A8",
      "close": "\u09AC\u09A8\u09CD\u09A7",
      "notSupportVoice": "\u09AD\u09AF\u09BC\u09C7\u09B8 \u09AF\u09BE\u099A\u09BE\u0987\u0995\u09B0\u09A3 \u0995\u09CB\u09A1 \u09B2\u09CB\u09A1 \u0995\u09B0\u09BE \u09AF\u09BE\u09AF\u09BC\u09A8\u09BF",
      "intellisense": {
        "normal": "\u09AF\u09BE\u099A\u09BE\u0987\u0995\u09B0\u09A3 \u09B8\u09AE\u09CD\u09AA\u09C2\u09B0\u09CD\u09A3 \u0995\u09B0\u09A4\u09C7 \u0995\u09CD\u09B2\u09BF\u0995 \u0995\u09B0\u09C1\u09A8",
        "checking": "\u099A\u09C7\u0995\u09BF\u0982",
        "loading": "\u09B2\u09CB\u09A1 \u09B9\u099A\u09CD\u099B\u09C7",
        "loadfail": "\u09B2\u09CB\u09A1 \u0995\u09B0\u09A4\u09C7 \u09AC\u09CD\u09AF\u09B0\u09CD\u09A5",
        "loaddone": "\u09AF\u09BE\u099A\u09BE\u0987\u0995\u09B0\u09A3 \u09B8\u09AE\u09CD\u09AA\u09C2\u09B0\u09CD\u09A3 \u0995\u09B0\u09C1\u09A8",
        "longtap": "0.5 \u09B8\u09C7\u0995\u09C7\u09A8\u09CD\u09A1\u09C7\u09B0 \u099C\u09A8\u09CD\u09AF \u09A1\u09AC\u09B2 \u099F\u09CD\u09AF\u09BE\u09AA \u0995\u09B0\u09C1\u09A8 \u098F\u09AC\u0982 \u09A7\u09B0\u09C7 \u09B0\u09BE\u0996\u09C1\u09A8"
      },
      "sms": {
        "scanQrToSMS": "Scan QR code to send verification SMS",
        "noScanQr": "Unable to scan QR code",
        "manualSMS": "send a verification SMS manually",
        "clickToSMS": "Click the button to send verification SMS",
        "editSMS": "Edit SMS",
        "sendSMSTo": "Send to",
        "or": "or",
        "toSMS": "send a verification SMS",
        "cannotJump": "cannot jump to SMS"
      }
    },
    "fil": {
      "loading": "Naglo-load ...",
      "loadfail": "Nabigong i-load",
      "verifySuccess": "Matagumpay na na-verify",
      "verifyError": "Nabigo, mangyaring subukang muli",
      "verifyOutOfLimit": "Nabigo, mangyaring subukang muli",
      "clickButton": "Mag-click upang i-verify",
      "clickInTurn": "Mangyaring i-click ang isa-isa",
      "clickWordInTurn": "I-click ang teksto sa pagkakasunud-sunod",
      "slideTip": "Mangyaring ibalik ang larawan",
      "inferenceTip": "Mangyaring ibalik ang larawan",
      "waitForSMS": "Nagpapadala ng SMS, natitira",
      "popupTitle": "Mangyaring patunayan",
      "refresh": "refresh",
      "feedback": "Isumite ang Feedback",
      "switchToVoice": "Lumipat sa code sa pag-verify ng boses",
      "playVoice": "Maglaro ng code ng pagpapatunay ng tunog",
      "back": "bumalik ka",
      "enterCode": "Pakilagay ang numero",
      "check": "patunayan",
      "close": "pagsasara",
      "notSupportVoice": "Hindi na-load ang verification code ng boses",
      "intellisense": {
        "normal": "Mag-click upang makumpleto ang pag-verify",
        "checking": "pagsisiyasat",
        "loading": "naglo-load",
        "loadfail": "Nabigong i-load",
        "loaddone": "Mangyaring kumpletuhin ang pag-verify",
        "longtap": "I-double tap at hawakan ng 0.5 segundo"
      },
      "sms": {
        "scanQrToSMS": "Scan QR code to send verification SMS",
        "noScanQr": "Unable to scan QR code",
        "manualSMS": "send a verification SMS manually",
        "clickToSMS": "Click the button to send verification SMS",
        "editSMS": "Edit SMS",
        "sendSMSTo": "Send to",
        "or": "or",
        "toSMS": "send a verification SMS",
        "cannotJump": "cannot jump to SMS"
      }
    },
    "jv": {
      "loading": "Ngundhuh ...",
      "loadfail": "Gagal mbukak",
      "verifySuccess": "Diverifikasi sukses",
      "verifyError": "Gagal, coba maneh",
      "verifyOutOfLimit": "Gagal, coba maneh",
      "clickButton": "Klik kanggo verifikasi",
      "clickInTurn": "Klik ing urutan",
      "clickWordInTurn": "Klik teks ing urutan",
      "slideTip": "Gesek nengen kanggo mulihake gambar",
      "inferenceTip": "Ganti 2 kothak kanggo mulihake gambar",
      "waitForSMS": "Ngenteni verifikasi SMS, isih ana",
      "popupTitle": "Mangga rampung verifikasi",
      "refresh": "Kode Refresh",
      "feedback": "Kirimake saran",
      "switchToVoice": "Ngalih menyang kode verifikasi swara",
      "playVoice": "Puter kode verifikasi swara",
      "back": "bali",
      "enterCode": "Ketik nomer kasebut",
      "check": "verifikasi",
      "close": "penutupan",
      "notSupportVoice": "Kode verifikasi swara gagal dimuat",
      "intellisense": {
        "normal": "Klik kanggo ngrampungake verifikasi",
        "checking": "mriksa",
        "loading": "ngemot",
        "loadfail": "Gagal mbukak",
        "loaddone": "Mangga rampung verifikasi",
        "longtap": "Tutul kaping pindho terus nganti 0,5 detik"
      },
      "sms": {
        "scanQrToSMS": "Scan QR code to send verification SMS",
        "noScanQr": "Unable to scan QR code",
        "manualSMS": "send a verification SMS manually",
        "clickToSMS": "Click the button to send verification SMS",
        "editSMS": "Edit SMS",
        "sendSMSTo": "Send to",
        "or": "or",
        "toSMS": "send a verification SMS",
        "cannotJump": "cannot jump to SMS"
      }
    },
    "ne": {
      "loading": "\u0932\u094B\u0921 \u0939\u0941\u0901\u0926\u0948 ...",
      "loadfail": "\u0932\u094B\u0921 \u0917\u0930\u094D\u0928 \u0905\u0938\u092B\u0932",
      "verifySuccess": "\u0938\u092B\u0932\u0924\u093E\u092A\u0942\u0930\u094D\u0935\u0915 \u092A\u094D\u0930\u092E\u093E\u0923\u093F\u0924",
      "verifyError": "\u0905\u0938\u092B\u0932 \u092D\u092F\u094B, \u0915\u0943\u092A\u092F\u093E \u092B\u0947\u0930\u093F \u092A\u094D\u0930\u092F\u093E\u0938 \u0917\u0930\u094D\u0928\u0941\u0939\u094B\u0938\u094D",
      "verifyOutOfLimit": "\u0927\u0947\u0930\u0948 \u0927\u0947\u0930\u0948 \u0905\u0938\u092B\u0932\u0924\u093E\u0939\u0930\u0941, \u0915\u0943\u092A\u092F\u093E \u092A\u0941\u0928: \u092A\u094D\u0930\u092F\u093E\u0938 \u0917\u0930\u094D\u0928\u0941\u0939\u094B\u0938\u094D",
      "clickButton": "\u092A\u094D\u0930\u092E\u093E\u0923\u093F\u0924 \u0917\u0930\u094D\u0928 \u0915\u094D\u0932\u093F\u0915 \u0917\u0930\u094D\u0928\u0941\u0939\u094B\u0938\u094D",
      "clickInTurn": "\u0915\u0943\u092A\u092F\u093E \u0915\u094D\u0930\u092E \u092E\u093E \u0915\u094D\u0932\u093F\u0915 \u0917\u0930\u094D\u0928\u0941\u0939\u094B\u0938\u094D",
      "clickWordInTurn": "\u0915\u094D\u0930\u092E \u092E\u093E \u092A\u093E\u0920 \u0915\u094D\u0932\u093F\u0915 \u0917\u0930\u094D\u0928\u0941\u0939\u094B\u0938\u094D",
      "slideTip": "\u0924\u0938\u094D\u0935\u0940\u0930 \u092D\u0930\u094D\u0928 \u0915\u094B \u0932\u093E\u0917\u0940 \u0926\u093E\u092F\u093E\u0901 \u091F\u093E\u0907\u0932 \u0924\u093E\u0928\u094D\u0928\u0941\u0939\u094B\u0938\u094D",
      "inferenceTip": "\u090F\u0915\u094D\u0938\u091A\u0947\u0902\u091C \u0968 \u091F\u093E\u0907\u0932 \u0924\u0938\u094D\u0935\u0940\u0930\u0939\u0930\u0941 \u0932\u093E\u0908 \u092A\u0941\u0928\u0930\u094D\u0938\u094D\u0925\u093E\u092A\u093F\u0924 \u0917\u0930\u094D\u0928 \u0915\u094B \u0932\u093E\u0917\u0940",
      "waitForSMS": "\u090F\u0938\u090F\u092E\u090F\u0938 \u092A\u094D\u0930\u092E\u093E\u0923\u093F\u0915\u0930\u0923 \u0915\u094B \u0932\u093E\u0917\u0940 \u092A\u094D\u0930\u0924\u093F\u0915\u094D\u0937\u093E, \u0936\u0947\u0937",
      "popupTitle": "\u0915\u0943\u092A\u092F\u093E \u092A\u094D\u0930\u092E\u093E\u0923\u0940\u0915\u0930\u0923 \u092A\u0942\u0930\u093E \u0917\u0930\u094D\u0928\u0941\u0939\u094B\u0938\u094D",
      "refresh": "\u0915\u094B\u0921 \u0924\u093E\u091C\u093E \u0917\u0930\u094D\u0928\u0941\u0939\u094B\u0938\u094D",
      "feedback": "\u092A\u094D\u0930\u0924\u093F\u0915\u094D\u0930\u093F\u092F\u093E \u092A\u0947\u0938 \u0917\u0930\u094D\u0928\u0941\u0939\u094B\u0938\u094D",
      "switchToVoice": "\u0906\u0935\u093E\u091C \u092A\u094D\u0930\u092E\u093E\u0923\u093F\u0915\u0930\u0923 \u0915\u094B\u0921 \u0938\u094D\u0935\u093F\u091A \u0917\u0930\u094D\u0928\u0941\u0939\u094B\u0938\u094D",
      "playVoice": "\u0927\u094D\u0935\u0928\u093F \u092A\u094D\u0930\u092E\u093E\u0923\u093F\u0915\u0930\u0923 \u0915\u094B\u0921 \u0916\u0947\u0932\u094D\u0928\u0941\u0939\u094B\u0938\u094D",
      "back": "\u092B\u0930\u094D\u0915\u093F\u0928\u0941",
      "enterCode": "\u0915\u0943\u092A\u092F\u093E \u0938\u092C\u0948 \u0928\u092E\u094D\u092C\u0930\u0939\u0930\u0942 \u092A\u094D\u0930\u0935\u093F\u0937\u094D\u091F \u0917\u0930\u094D\u0928\u0941\u0939\u094B\u0938\u094D",
      "check": "\u092A\u094D\u0930\u092E\u093E\u0923\u093F\u0924 \u0917\u0930\u094D\u0928\u0941\u0939\u094B\u0938\u094D",
      "close": "\u092C\u0928\u094D\u0926",
      "notSupportVoice": "\u0906\u0935\u093E\u091C \u092A\u094D\u0930\u092E\u093E\u0923\u093F\u0915\u0930\u0923 \u0915\u094B\u0921 \u0932\u094B\u0921 \u0917\u0930\u094D\u0928 \u0905\u0938\u092B\u0932 \u092D\u092F\u094B",
      "intellisense": {
        "normal": "\u092A\u094D\u0930\u092E\u093E\u0923\u093F\u0915\u0930\u0923 \u092A\u0942\u0930\u093E \u0917\u0930\u094D\u0928 \u0915\u094D\u0932\u093F\u0915 \u0917\u0930\u094D\u0928\u0941\u0939\u094B\u0938\u094D",
        "checking": "\u091C\u093E\u0901\u091A",
        "loading": "\u0932\u094B\u0921 \u0939\u0941\u0901\u0926\u0948\u091B",
        "loadfail": "\u0932\u094B\u0921 \u0917\u0930\u094D\u0928 \u0905\u0938\u092B\u0932",
        "loaddone": "\u0915\u0943\u092A\u092F\u093E \u092A\u094D\u0930\u092E\u093E\u0923\u0940\u0915\u0930\u0923 \u092A\u0942\u0930\u093E \u0917\u0930\u094D\u0928\u0941\u0939\u094B\u0938\u094D",
        "longtap": "0.5 \u0938\u0947\u0915\u0947\u0928\u094D\u0921 \u0915\u094B \u0932\u093E\u0917\u0940 \u0921\u092C\u0932 \u091F\u094D\u092F\u093E\u092A \u0930 \u0939\u094B\u0932\u094D\u0921 \u0917\u0930\u094D\u0928\u0941\u0939\u094B\u0938\u094D"
      },
      "sms": {
        "scanQrToSMS": "Scan QR code to send verification SMS",
        "noScanQr": "Unable to scan QR code",
        "manualSMS": "send a verification SMS manually",
        "clickToSMS": "Click the button to send verification SMS",
        "editSMS": "Edit SMS",
        "sendSMSTo": "Send to",
        "or": "or",
        "toSMS": "send a verification SMS",
        "cannotJump": "cannot jump to SMS"
      }
    },
    "sw": {
      "loading": "Inapakia ...",
      "loadfail": "Imeshindwa kupakia",
      "verifySuccess": "Imethibitishwa kwa mafanikio",
      "verifyError": "Imeshindwa, tafadhali jaribu tena",
      "verifyOutOfLimit": "Kushindwa sana, tafadhali jaribu tena",
      "clickButton": "Bonyeza ili uthibitishe",
      "clickInTurn": "Tafadhali bonyeza ili",
      "clickWordInTurn": "Tafadhali bonyeza maandishi ili",
      "slideTip": "Buruta kigae kulia ili ujaze picha",
      "inferenceTip": "Kubadilisha tiles 2 ili kurudisha picha",
      "waitForSMS": "Inasubiri uthibitishaji wa SMS, imesalia",
      "popupTitle": "Tafadhali kamilisha uhakiki",
      "refresh": "Onyesha upya",
      "feedback": "Tuma maoni",
      "switchToVoice": "Badili hadi msimbo wa uthibitishaji wa sauti",
      "playVoice": "Cheza nambari ya uthibitishaji wa sauti",
      "back": "kurudi",
      "enterCode": "Tafadhali weka nambari zote",
      "check": "thibitisha",
      "close": "kufungwa",
      "notSupportVoice": "Nambari ya uthibitishaji wa sauti imeshindwa kupakia",
      "intellisense": {
        "normal": "Bonyeza ili kukamilisha uthibitishaji",
        "checking": "kuangalia",
        "loading": "upakiaji",
        "loadfail": "Imeshindwa kupakia",
        "loaddone": "Tafadhali kamilisha uhakiki",
        "longtap": "Gonga mara mbili na ushikilie kwa sekunde 0.5"
      },
      "sms": {
        "scanQrToSMS": "Scan QR code to send verification SMS",
        "noScanQr": "Unable to scan QR code",
        "manualSMS": "send a verification SMS manually",
        "clickToSMS": "Click the button to send verification SMS",
        "editSMS": "Edit SMS",
        "sendSMSTo": "Send to",
        "or": "or",
        "toSMS": "send a verification SMS",
        "cannotJump": "cannot jump to SMS"
      }
    },
    "mi": {
      "loading": "Kei te utaina ...",
      "loadfail": "I rahua te uta",
      "verifySuccess": "I angitu te whakatuturutanga",
      "verifyError": "I rahua, ngana koa koa",
      "verifyOutOfLimit": "I rahua, ngana koa koa",
      "clickButton": "Patohia ki te manatoko",
      "clickInTurn": "Tena koa paatohia kia pai",
      "clickWordInTurn": "Tena koa paatohia te tuhinga kia rite",
      "slideTip": "tika Swipe ki whakahoki te pikitia",
      "inferenceTip": "Tena koa whakahokia mai te pikitia",
      "waitForSMS": "Te tuku SMS, e toe ana",
      "popupTitle": "Tena koa koa whakaotihia",
      "refresh": "Whakahou",
      "feedback": "Tukuna he urupare",
      "switchToVoice": "Whakawhiti ki te waehere whaka\u016B reo",
      "playVoice": "Pureihia te waehere whaka\u016B tangi",
      "back": "hokinga mai",
      "enterCode": "Whakauruhia te waehere whaka\u016B",
      "check": "manatoko",
      "close": "katinga",
      "notSupportVoice": "I rahua te utaina te waehere whaka\u016B reo",
      "intellisense": {
        "normal": "Patohia ki te whakaoti manatoko",
        "checking": "taki",
        "loading": "utanga",
        "loadfail": "I rahua te uta",
        "loaddone": "Tena koa koa whakaotihia",
        "longtap": "Patohia kia rua ka mau mo te 0.5 h\u0113kona"
      },
      "sms": {
        "scanQrToSMS": "Scan QR code to send verification SMS",
        "noScanQr": "Unable to scan QR code",
        "manualSMS": "send a verification SMS manually",
        "clickToSMS": "Click the button to send verification SMS",
        "editSMS": "Edit SMS",
        "sendSMSTo": "Send to",
        "or": "or",
        "toSMS": "send a verification SMS",
        "cannotJump": "cannot jump to SMS"
      }
    },
    "am": {
      "loading": "\u1260\u1218\u132B\u1295 \u120B\u12ED ...",
      "loadfail": "\u1218\u132B\u1295 \u12A0\u120D\u1270\u1233\u12AB\u121D",
      "verifySuccess": "\u1260\u1270\u1233\u12AB \u1201\u1294\u1273 \u1270\u1228\u130B\u130D\u1327\u120D",
      "verifyError": "\u12A0\u120D\u1270\u1233\u12AB\u121D \u1363 \u12A5\u1263\u12AD\u12CE \u12A5\u1295\u12F0\u1308\u1293 \u12ED\u121E\u12AD\u1229",
      "verifyOutOfLimit": "\u1260\u1323\u121D \u1265\u12D9 \u12CD\u12F5\u1240\u1276\u127D \u1363 \u12A5\u1263\u12AD\u12CE \u12A5\u1295\u12F0\u1308\u1293 \u12ED\u121E\u12AD\u1229",
      "clickButton": "\u1208\u121B\u1228\u130B\u1308\u1325 \u1320\u1245 \u12EB\u12F5\u122D\u1309",
      "clickInTurn": "\u12A5\u1263\u12AD\u12CE\u1295 \u1260\u1245\u12F0\u121D \u1270\u12A8\u1270\u120D \u1320\u1245 \u12EB\u12F5\u122D\u1309",
      "clickWordInTurn": "\u12A5\u1263\u12AD\u12CE\u1295 \u133D\u1211\u1349\u1295 \u1260\u1245\u12F0\u121D \u1270\u12A8\u1270\u120D \u1320\u1245 \u12EB\u12F5\u122D\u1309",
      "slideTip": "\u1235\u12D5\u1209\u1295 \u1208\u1218\u1219\u120B\u1275 \u1230\u12F5\u1229\u1295 \u12C8\u12F0 \u1240\u129D \u12ED\u130E\u1275\u1271",
      "inferenceTip": "\u1235\u12D5\u120E\u127D\u1295 \u12C8\u12F0\u1290\u1260\u1229\u1260\u1275 \u1208\u1218\u1218\u1208\u1235 2 \u1295\u1323\u134E\u127D\u1295 \u12ED\u1208\u12CD\u1321",
      "waitForSMS": "\u12E8\u12A4\u1235\u12A4\u121D\u12A4\u1235 \u121B\u1228\u130B\u1308\u132B \u1260\u1218\u1320\u1260\u1245 \u120B\u12ED \u1363 \u12ED\u1240\u122B\u120D",
      "popupTitle": "\u12A5\u1263\u12AD\u12CE \u121B\u1228\u130B\u1308\u132B\u12CD\u1295 \u12EB\u1320\u1293\u1245\u1241",
      "refresh": "\u12AE\u12F5 \u12A0\u12F5\u1235",
      "feedback": "\u130D\u1265\u1228\u1218\u120D\u1235 \u12EB\u1245\u122D\u1261",
      "switchToVoice": "\u12C8\u12F0 \u12E8\u12F5\u121D\u133D \u121B\u1228\u130B\u1308\u132B \u12AE\u12F5 \u12ED\u1240\u12ED\u1229",
      "playVoice": "\u12E8\u12F5\u121D\u1345 \u121B\u1228\u130B\u1308\u132B \u12AE\u12F5 \u12EB\u132B\u12CD\u1271",
      "back": "\u1218\u1218\u1208\u1235",
      "enterCode": "\u12A5\u122D\u1235\u12CE \u12E8\u121A\u1230\u1219\u1275\u1295 \u12E8\u121B\u1228\u130B\u1308\u132B \u12AE\u12F5 \u12EB\u1235\u1308\u1261",
      "check": "\u121B\u1228\u130B\u1308\u1325",
      "close": "\u1218\u12D8\u130B\u1275",
      "notSupportVoice": "\u12E8\u12F5\u121D\u1345 \u121B\u1228\u130B\u1308\u132B \u12AE\u12F5 \u1218\u132B\u1295 \u12A0\u120D\u1270\u1233\u12AB\u121D",
      "intellisense": {
        "normal": "\u121B\u1228\u130B\u1308\u132B\u1295 \u1208\u121B\u1320\u1293\u1240\u1245 \u1320\u1245 \u12EB\u12F5\u122D\u1309",
        "checking": "\u1260\u1218\u1348\u1270\u123D \u120B\u12ED",
        "loading": "\u1260\u1218\u132B\u1295 \u120B\u12ED",
        "loadfail": "\u1218\u132B\u1295 \u12A0\u120D\u1270\u1233\u12AB\u121D",
        "loaddone": "\u12A5\u1263\u12AD\u12CE \u121B\u1228\u130B\u1308\u132B\u12CD\u1295 \u12EB\u1320\u1293\u1245\u1241",
        "longtap": "\u1201\u1208\u1274 \u1218\u1273 \u12EB\u12F5\u122D\u1309 \u12A5\u1293 \u1208 0.5 \u1230\u12A8\u1295\u12F6\u127D \u12EB\u1205\u120D \u12ED\u1246\u12E9"
      },
      "sms": {
        "scanQrToSMS": "Scan QR code to send verification SMS",
        "noScanQr": "Unable to scan QR code",
        "manualSMS": "send a verification SMS manually",
        "clickToSMS": "Click the button to send verification SMS",
        "editSMS": "Edit SMS",
        "sendSMSTo": "Send to",
        "or": "or",
        "toSMS": "send a verification SMS",
        "cannotJump": "cannot jump to SMS"
      }
    },
    "te": {
      "loading": "\u0C32\u0C4B\u0C21\u0C4D...",
      "loadfail": "\u0C32\u0C4B\u0C21\u0C4D \u0C1A\u0C47\u0C2F\u0C21\u0C02 \u0C35\u0C3F\u0C2B\u0C32\u0C2E\u0C48\u0C02\u0C26\u0C3F",
      "verifySuccess": "\u0C35\u0C3F\u0C1C\u0C2F\u0C35\u0C02\u0C24\u0C02\u0C17\u0C3E \u0C27\u0C43\u0C35\u0C40\u0C15\u0C30\u0C3F\u0C02\u0C1A\u0C2C\u0C21\u0C3F\u0C02\u0C26\u0C3F",
      "verifyError": "\u0C35\u0C3F\u0C2B\u0C32\u0C2E\u0C48\u0C02\u0C26\u0C3F, \u0C26\u0C2F\u0C1A\u0C47\u0C38\u0C3F \u0C2E\u0C33\u0C4D\u0C32\u0C40 \u0C2A\u0C4D\u0C30\u0C2F\u0C24\u0C4D\u0C28\u0C3F\u0C02\u0C1A\u0C02\u0C21\u0C3F",
      "verifyOutOfLimit": "\u0C35\u0C3F\u0C2B\u0C32\u0C2E\u0C48\u0C02\u0C26\u0C3F, \u0C26\u0C2F\u0C1A\u0C47\u0C38\u0C3F \u0C2E\u0C33\u0C4D\u0C32\u0C40 \u0C2A\u0C4D\u0C30\u0C2F\u0C24\u0C4D\u0C28\u0C3F\u0C02\u0C1A\u0C02\u0C21\u0C3F",
      "clickButton": "\u0C27\u0C43\u0C35\u0C40\u0C15\u0C30\u0C3F\u0C02\u0C1A\u0C21\u0C3E\u0C28\u0C3F\u0C15\u0C3F \u0C15\u0C4D\u0C32\u0C3F\u0C15\u0C4D \u0C1A\u0C47\u0C2F\u0C02\u0C21\u0C3F",
      "clickInTurn": "\u0C26\u0C2F\u0C1A\u0C47\u0C38\u0C3F \u0C15\u0C4D\u0C30\u0C2E\u0C02\u0C32\u0C4B \u0C15\u0C4D\u0C32\u0C3F\u0C15\u0C4D \u0C1A\u0C47\u0C2F\u0C02\u0C21\u0C3F",
      "clickWordInTurn": "\u0C26\u0C2F\u0C1A\u0C47\u0C38\u0C3F \u0C15\u0C4D\u0C30\u0C2E\u0C02\u0C32\u0C4B \u0C09\u0C28\u0C4D\u0C28 \u0C35\u0C1A\u0C28\u0C3E\u0C28\u0C4D\u0C28\u0C3F \u0C15\u0C4D\u0C32\u0C3F\u0C15\u0C4D \u0C1A\u0C47\u0C2F\u0C02\u0C21\u0C3F",
      "slideTip": "\u0C1A\u0C3F\u0C24\u0C4D\u0C30\u0C3E\u0C28\u0C4D\u0C28\u0C3F \u0C2A\u0C41\u0C28\u0C30\u0C41\u0C26\u0C4D\u0C27\u0C30\u0C3F\u0C02\u0C1A\u0C21\u0C3E\u0C28\u0C3F\u0C15\u0C3F \u0C38\u0C4D\u0C35\u0C46\u0C56\u0C2A\u0C4D \u0C15\u0C41\u0C21\u0C3F",
      "inferenceTip": "\u0C26\u0C2F\u0C1A\u0C47\u0C38\u0C3F \u0C1A\u0C3F\u0C24\u0C4D\u0C30\u0C3E\u0C28\u0C4D\u0C28\u0C3F \u0C2A\u0C41\u0C28\u0C30\u0C41\u0C26\u0C4D\u0C27\u0C30\u0C3F\u0C02\u0C1A\u0C02\u0C21\u0C3F",
      "waitForSMS": "SMS \u0C27\u0C43\u0C35\u0C40\u0C15\u0C30\u0C23 \u0C15\u0C4B\u0C38\u0C02 \u0C35\u0C47\u0C1A\u0C3F \u0C09\u0C02\u0C26\u0C3F, \u0C2E\u0C3F\u0C17\u0C3F\u0C32\u0C3F \u0C09\u0C02\u0C26\u0C3F",
      "popupTitle": "\u0C26\u0C2F\u0C1A\u0C47\u0C38\u0C3F \u0C27\u0C43\u0C35\u0C40\u0C15\u0C30\u0C23\u0C28\u0C41 \u0C2A\u0C42\u0C30\u0C4D\u0C24\u0C3F \u0C1A\u0C47\u0C2F\u0C02\u0C21\u0C3F",
      "refresh": "\u0C30\u0C3F\u0C2B\u0C4D\u0C30\u0C46\u0C37\u0C4D \u0C15\u0C4B\u0C21\u0C4D",
      "feedback": "\u0C05\u0C2D\u0C3F\u0C2A\u0C4D\u0C30\u0C3E\u0C2F\u0C3E\u0C28\u0C4D\u0C28\u0C3F \u0C38\u0C2E\u0C30\u0C4D\u0C2A\u0C3F\u0C02\u0C1A\u0C02\u0C21\u0C3F",
      "switchToVoice": "\u0C35\u0C3E\u0C2F\u0C3F\u0C38\u0C4D \u0C27\u0C43\u0C35\u0C40\u0C15\u0C30\u0C23 \u0C15\u0C4B\u0C21\u0C4D\u200C\u0C15\u0C3F \u0C2E\u0C3E\u0C30\u0C02\u0C21\u0C3F",
      "playVoice": "\u0C27\u0C4D\u0C35\u0C28\u0C3F \u0C27\u0C43\u0C35\u0C40\u0C15\u0C30\u0C23 \u0C15\u0C4B\u0C21\u0C4D\u200C\u0C28\u0C3F \u0C2A\u0C4D\u0C32\u0C47 \u0C1A\u0C47\u0C2F\u0C02\u0C21\u0C3F",
      "back": "\u0C24\u0C3F\u0C30\u0C3F\u0C17\u0C3F",
      "enterCode": "\u0C28\u0C02\u0C2C\u0C30\u0C4D\u200C\u0C28\u0C3F \u0C28\u0C2E\u0C4B\u0C26\u0C41 \u0C1A\u0C47\u0C2F\u0C02\u0C21\u0C3F",
      "check": "\u0C27\u0C43\u0C35\u0C40\u0C15\u0C30\u0C3F\u0C02\u0C1A\u0C41",
      "close": "\u0C2E\u0C42\u0C38\u0C3F\u0C35\u0C47\u0C24",
      "notSupportVoice": "\u0C35\u0C3E\u0C2F\u0C3F\u0C38\u0C4D \u0C27\u0C43\u0C35\u0C40\u0C15\u0C30\u0C23 \u0C15\u0C4B\u0C21\u0C4D \u0C32\u0C4B\u0C21\u0C4D \u0C15\u0C3E\u0C35\u0C21\u0C02 \u0C35\u0C3F\u0C2B\u0C32\u0C2E\u0C48\u0C02\u0C26\u0C3F",
      "intellisense": {
        "normal": "\u0C27\u0C43\u0C35\u0C40\u0C15\u0C30\u0C23 \u0C2A\u0C42\u0C30\u0C4D\u0C24\u0C3F \u0C1A\u0C47\u0C2F\u0C21\u0C3E\u0C28\u0C3F\u0C15\u0C3F \u0C15\u0C4D\u0C32\u0C3F\u0C15\u0C4D \u0C1A\u0C47\u0C2F\u0C02\u0C21\u0C3F",
        "checking": "\u0C24\u0C28\u0C3F\u0C16\u0C40 \u0C1A\u0C47\u0C38\u0C4D\u0C24\u0C4B\u0C02\u0C26\u0C3F",
        "loading": "\u0C32\u0C4B\u0C21\u0C4D",
        "loadfail": "\u0C32\u0C4B\u0C21\u0C4D \u0C1A\u0C47\u0C2F\u0C21\u0C02 \u0C35\u0C3F\u0C2B\u0C32\u0C2E\u0C48\u0C02\u0C26\u0C3F",
        "loaddone": "\u0C26\u0C2F\u0C1A\u0C47\u0C38\u0C3F \u0C27\u0C43\u0C35\u0C40\u0C15\u0C30\u0C23\u0C28\u0C41 \u0C2A\u0C42\u0C30\u0C4D\u0C24\u0C3F \u0C1A\u0C47\u0C2F\u0C02\u0C21\u0C3F",
        "longtap": "0.5 \u0C38\u0C46\u0C15\u0C28\u0C4D\u0C32 \u0C2A\u0C3E\u0C1F\u0C41 \u0C30\u0C46\u0C02\u0C21\u0C41\u0C38\u0C3E\u0C30\u0C4D\u0C32\u0C41 \u0C28\u0C4A\u0C15\u0C4D\u0C15\u0C3F \u0C2A\u0C1F\u0C4D\u0C1F\u0C41\u0C15\u0C4B\u0C02\u0C21\u0C3F"
      },
      "sms": {
        "scanQrToSMS": "Scan QR code to send verification SMS",
        "noScanQr": "Unable to scan QR code",
        "manualSMS": "send a verification SMS manually",
        "clickToSMS": "Click the button to send verification SMS",
        "editSMS": "Edit SMS",
        "sendSMSTo": "Send to",
        "or": "or",
        "toSMS": "send a verification SMS",
        "cannotJump": "cannot jump to SMS"
      }
    },
    "mr": {
      "loading": "\u0932\u094B\u0921 \u0915\u0930\u0924 \u0906\u0939\u0947 ...",
      "loadfail": "\u0932\u094B\u0921 \u0915\u0930\u0923\u094D\u092F\u093E\u0924 \u0905\u092F\u0936\u0938\u094D\u0935\u0940",
      "verifySuccess": "\u092F\u0936\u0938\u094D\u0935\u0940\u0930\u093F\u0924\u094D\u092F\u093E \u0938\u0924\u094D\u092F\u093E\u092A\u093F\u0924",
      "verifyError": "\u0905\u092F\u0936\u0938\u094D\u0935\u0940, \u0915\u0943\u092A\u092F\u093E \u092A\u0941\u0928\u094D\u0939\u093E \u092A\u094D\u0930\u092F\u0924\u094D\u0928 \u0915\u0930\u093E",
      "verifyOutOfLimit": "\u092C\u0930\u0947\u091A \u0905\u092A\u092F\u0936, \u0915\u0943\u092A\u092F\u093E \u092A\u0941\u0928\u094D\u0939\u093E \u092A\u094D\u0930\u092F\u0924\u094D\u0928 \u0915\u0930\u093E",
      "clickButton": "\u0938\u0924\u094D\u092F\u093E\u092A\u093F\u0924 \u0915\u0930\u0923\u094D\u092F\u093E\u0938\u093E\u0920\u0940 \u0915\u094D\u0932\u093F\u0915 \u0915\u0930\u093E",
      "clickInTurn": "\u0915\u0943\u092A\u092F\u093E \u0915\u094D\u0930\u092E\u093E\u0928\u0947 \u0915\u094D\u0932\u093F\u0915 \u0915\u0930\u093E",
      "clickWordInTurn": "\u0915\u0943\u092A\u092F\u093E \u0915\u094D\u0930\u092E\u093E\u0928\u0947 \u092E\u091C\u0915\u0942\u0930\u093E\u0935\u0930 \u0915\u094D\u0932\u093F\u0915 \u0915\u0930\u093E",
      "slideTip": "\u091A\u093F\u0924\u094D\u0930 \u092D\u0930\u0923\u094D\u092F\u093E\u0938\u093E\u0920\u0940 \u091F\u093E\u0907\u0932 \u0909\u091C\u0935\u0940\u0915\u0921\u0947 \u0921\u094D\u0930\u0945\u0917 \u0915\u0930\u093E",
      "inferenceTip": "\u091A\u093F\u0924\u094D\u0930\u0947 \u092A\u0941\u0928\u0930\u094D\u0938\u0902\u091A\u092F\u093F\u0924 \u0915\u0930\u0923\u094D\u092F\u093E\u0938\u093E\u0920\u0940 2 \u091F\u093E\u0907\u0932 \u090F\u0915\u094D\u0938\u091A\u0947\u0902\u091C \u0915\u0930\u093E",
      "waitForSMS": "\u090F\u0938\u090F\u092E\u090F\u0938 \u092A\u0921\u0924\u093E\u0933\u0923\u0940\u091A\u0940 \u092A\u094D\u0930\u0924\u0940\u0915\u094D\u0937\u093E, \u0936\u093F\u0932\u094D\u0932\u0915",
      "popupTitle": "\u0915\u0943\u092A\u092F\u093E \u092A\u0921\u0924\u093E\u0933\u0923\u0940 \u092A\u0942\u0930\u094D\u0923 \u0915\u0930\u093E",
      "refresh": "\u0915\u094B\u0921 \u0930\u0940\u092B\u094D\u0930\u0947\u0936 \u0915\u0930\u093E",
      "feedback": "\u0905\u092D\u093F\u092A\u094D\u0930\u093E\u092F \u0938\u092C\u092E\u093F\u091F \u0915\u0930\u093E",
      "switchToVoice": "\u0935\u094D\u0939\u0949\u0907\u0938 \u0938\u0924\u094D\u092F\u093E\u092A\u0928 \u0915\u094B\u0921\u0935\u0930 \u0938\u094D\u0935\u093F\u091A \u0915\u0930\u093E",
      "playVoice": "\u0927\u094D\u0935\u0928\u0940 \u092A\u0921\u0924\u093E\u0933\u0923\u0940 \u0915\u094B\u0921 \u092A\u094D\u0932\u0947 \u0915\u0930\u093E",
      "back": "\u092A\u0930\u0924",
      "enterCode": "\u0915\u0943\u092A\u092F\u093E \u0938\u0930\u094D\u0935 \u0915\u094D\u0930\u092E\u093E\u0902\u0915 \u091F\u093E\u0915\u093E",
      "check": "\u0938\u0924\u094D\u092F\u093E\u092A\u093F\u0924 \u0915\u0930\u093E",
      "close": "\u092C\u0902\u0926",
      "notSupportVoice": "\u0935\u094D\u0939\u0949\u0907\u0938 \u0938\u0924\u094D\u092F\u093E\u092A\u0928 \u0915\u094B\u0921 \u0932\u094B\u0921 \u0915\u0930\u0923\u094D\u092F\u093E\u0924 \u0905\u092F\u0936\u0938\u094D\u0935\u0940",
      "intellisense": {
        "normal": "\u092A\u0921\u0924\u093E\u0933\u0923\u0940 \u092A\u0942\u0930\u094D\u0923 \u0915\u0930\u0923\u094D\u092F\u093E\u0938\u093E\u0920\u0940 \u0915\u094D\u0932\u093F\u0915 \u0915\u0930\u093E",
        "checking": "\u0924\u092A\u093E\u0938\u0923\u0940",
        "loading": "\u0932\u094B\u0921 \u0915\u0930\u0924 \u0906\u0939\u0947",
        "loadfail": "\u0932\u094B\u0921 \u0915\u0930\u0923\u094D\u092F\u093E\u0924 \u0905\u092F\u0936\u0938\u094D\u0935\u0940",
        "loaddone": "\u0915\u0943\u092A\u092F\u093E \u092A\u0921\u0924\u093E\u0933\u0923\u0940 \u092A\u0942\u0930\u094D\u0923 \u0915\u0930\u093E",
        "longtap": "0.5 \u0938\u0947\u0915\u0902\u0926\u093E\u0902\u0938\u093E\u0920\u0940 \u0926\u094B\u0928\u0926\u093E \u091F\u0945\u092A \u0915\u0930\u093E \u0906\u0923\u093F \u0927\u0930\u0942\u0928 \u0920\u0947\u0935\u093E"
      },
      "sms": {
        "scanQrToSMS": "Scan QR code to send verification SMS",
        "noScanQr": "Unable to scan QR code",
        "manualSMS": "send a verification SMS manually",
        "clickToSMS": "Click the button to send verification SMS",
        "editSMS": "Edit SMS",
        "sendSMSTo": "Send to",
        "or": "or",
        "toSMS": "send a verification SMS",
        "cannotJump": "cannot jump to SMS"
      }
    },
    "ta": {
      "loading": "\u0B8F\u0BB1\u0BCD\u0BB1\u0BC1\u0B95\u0BBF\u0BB1\u0BA4\u0BC1 ...",
      "loadfail": "\u0B8F\u0BB1\u0BCD\u0BB1 \u0BAE\u0BC1\u0B9F\u0BBF\u0BAF\u0BB5\u0BBF\u0BB2\u0BCD\u0BB2\u0BC8",
      "verifySuccess": "\u0BB5\u0BC6\u0BB1\u0BCD\u0BB1\u0BBF\u0B95\u0BB0\u0BAE\u0BBE\u0B95 \u0B9A\u0BB0\u0BBF\u0BAA\u0BBE\u0BB0\u0BCD\u0B95\u0BCD\u0B95\u0BAA\u0BCD\u0BAA\u0B9F\u0BCD\u0B9F\u0BA4\u0BC1",
      "verifyError": "\u0BA4\u0BCB\u0BB2\u0BCD\u0BB5\u0BBF, \u0BAE\u0BC0\u0BA3\u0BCD\u0B9F\u0BC1\u0BAE\u0BCD \u0BAE\u0BC1\u0BAF\u0BB1\u0BCD\u0B9A\u0BBF\u0B95\u0BCD\u0B95\u0BB5\u0BC1\u0BAE\u0BCD",
      "verifyOutOfLimit": "\u0BA4\u0BCB\u0BB2\u0BCD\u0BB5\u0BBF, \u0BAE\u0BC0\u0BA3\u0BCD\u0B9F\u0BC1\u0BAE\u0BCD \u0BAE\u0BC1\u0BAF\u0BB1\u0BCD\u0B9A\u0BBF\u0B95\u0BCD\u0B95\u0BB5\u0BC1\u0BAE\u0BCD",
      "clickButton": "\u0B9A\u0BB0\u0BBF\u0BAA\u0BBE\u0BB0\u0BCD\u0B95\u0BCD\u0B95 \u0B95\u0BBF\u0BB3\u0BBF\u0B95\u0BCD \u0B9A\u0BC6\u0BAF\u0BCD\u0BAF\u0BB5\u0BC1\u0BAE\u0BCD",
      "clickInTurn": "\u0BAA\u0BC6\u0BBE\u0BB0\u0BC1\u0B9F\u0BCD\u0B9F\u0BC1 \u0B95\u0BBF\u0BB3\u0BBF\u0B95\u0BCD \u0B9A\u0BC6\u0BAF\u0BCD\u0B95",
      "clickWordInTurn": "\u0BAA\u0BC6\u0BBE\u0BB0\u0BC1\u0B9F\u0BCD\u0B9F\u0BC1 \u0B89\u0BB0\u0BC8\u0BAF\u0BC8\u0B95\u0BCD \u0B95\u0BBF\u0BB3\u0BBF\u0B95\u0BCD \u0B9A\u0BC6\u0BAF\u0BCD\u0B95",
      "slideTip": "\u0BAA\u0B9F\u0BAE\u0BCD \u0BAE\u0BC0\u0B9F\u0BCD\u0B95 \u0B95\u0BC6\u0BBE\u0BB3\u0BCD\u0BB3\u0BB5\u0BC1\u0BAE\u0BCD",
      "inferenceTip": "\u0BAA\u0B9F\u0BAE\u0BCD \u0BAE\u0BC0\u0B9F\u0BCD\u0B95 \u0B95\u0BC6\u0BBE\u0BB3\u0BCD\u0BB3\u0BB5\u0BC1\u0BAE\u0BCD",
      "waitForSMS": "\u0B95\u0BC1\u0BB1\u0BC1\u0B9E\u0BCD\u0B9A\u0BC6\u0BAF\u0BCD\u0BA4\u0BBF\uFF0C\u0BAE\u0BC0\u0BA4\u0BAE\u0BC1\u0BB3\u0BCD\u0BB3",
      "popupTitle": "\u0B9A\u0BB0\u0BBF\u0BAA\u0BBE\u0BB0\u0BCD\u0B95\u0BCD\u0B95\u0BB5\u0BC1\u0BAE\u0BCD",
      "refresh": "\u0BAA\u0BC1\u0BA4\u0BC1\u0BAA\u0BCD\u0BAA\u0BBF\u0BAA\u0BCD\u0BAA\u0BC1",
      "feedback": "\u0B95\u0BB0\u0BC1\u0BA4\u0BCD\u0BA4\u0BC1\u0B95\u0BCD\u0B95\u0BB3\u0BC8 \u0B9A\u0BAE\u0BB0\u0BCD\u0BAA\u0BCD\u0BAA\u0BBF\u0B95\u0BCD\u0B95\u0BB5\u0BC1\u0BAE\u0BCD",
      "switchToVoice": "\u0B95\u0BC1\u0BB0\u0BB2\u0BCD \u0B9A\u0BB0\u0BBF\u0BAA\u0BBE\u0BB0\u0BCD\u0BAA\u0BCD\u0BAA\u0BC1 \u0B95\u0BC1\u0BB1\u0BBF\u0BAF\u0BC0\u0B9F\u0BCD\u0B9F\u0BBF\u0BB1\u0BCD\u0B95\u0BC1 \u0BAE\u0BBE\u0BB1\u0BB5\u0BC1\u0BAE\u0BCD",
      "playVoice": "\u0B92\u0BB2\u0BBF \u0B9A\u0BB0\u0BBF\u0BAA\u0BBE\u0BB0\u0BCD\u0BAA\u0BCD\u0BAA\u0BC1 \u0B95\u0BC1\u0BB1\u0BBF\u0BAF\u0BC0\u0B9F\u0BCD\u0B9F\u0BC8 \u0B87\u0BAF\u0B95\u0BCD\u0B95\u0BB5\u0BC1\u0BAE\u0BCD",
      "back": "\u0BA4\u0BBF\u0BB0\u0BC1\u0BAE\u0BCD\u0BAA",
      "enterCode": "\u0B89\u0BB1\u0BC1\u0BA4\u0BBF\u0BAA\u0BCD\u0BAA\u0B9F\u0BC1\u0BA4\u0BCD\u0BA4\u0BB2\u0BCD \u0B95\u0BC1\u0BB1\u0BBF\u0BAF\u0BC0\u0B9F\u0BCD\u0B9F\u0BC8 \u0B89\u0BB3\u0BCD\u0BB3\u0BBF\u0B9F\u0BB5\u0BC1\u0BAE\u0BCD",
      "check": "\u0B9A\u0BB0\u0BBF\u0BAA\u0BBE\u0BB0\u0BCD\u0B95\u0BCD\u0B95",
      "close": "\u0BAE\u0BC2\u0B9F\u0BB2\u0BCD",
      "notSupportVoice": "\u0B92\u0BB2\u0BBF \u0B8F\u0BB1\u0BCD\u0BB1 \u0BAE\u0BC1\u0B9F\u0BBF\u0BAF\u0BB5\u0BBF\u0BB2\u0BCD\u0BB2\u0BC8",
      "intellisense": {
        "normal": "\u0B9A\u0BB0\u0BBF\u0BAA\u0BBE\u0BB0\u0BCD\u0BAA\u0BCD\u0BAA\u0BC8 \u0BAE\u0BC1\u0B9F\u0BBF\u0B95\u0BCD\u0B95 \u0B95\u0BBF\u0BB3\u0BBF\u0B95\u0BCD \u0B9A\u0BC6\u0BAF\u0BCD\u0B95",
        "checking": "\u0B9A\u0BCB\u0BA4\u0BA9\u0BC8",
        "loading": "\u0B8F\u0BB1\u0BCD\u0BB1\u0BC1\u0B95\u0BBF\u0BB1\u0BA4\u0BC1",
        "loadfail": "\u0B8F\u0BB1\u0BCD\u0BB1 \u0BAE\u0BC1\u0B9F\u0BBF\u0BAF\u0BB5\u0BBF\u0BB2\u0BCD\u0BB2\u0BC8",
        "loaddone": "\u0B9A\u0BB0\u0BBF\u0BAA\u0BBE\u0BB0\u0BCD\u0B95\u0BCD\u0B95\u0BB5\u0BC1\u0BAE\u0BCD",
        "longtap": "\u0B87\u0BB0\u0BC1\u0BAE\u0BC1\u0BB1\u0BC8 \u0BA4\u0B9F\u0BCD\u0B9F\u0BB5\u0BC1\u0BAE\u0BCD \u0BAE\u0BB1\u0BCD\u0BB1\u0BC1\u0BAE\u0BCD 0.5 \u0BB5\u0BBF\u0BA8\u0BBE\u0B9F\u0BBF\u0B95\u0BB3\u0BCD \u0BB5\u0BC8\u0BA4\u0BCD\u0BA4\u0BBF\u0BB0\u0BC1\u0B99\u0BCD\u0B95\u0BB3\u0BCD"
      },
      "sms": {
        "scanQrToSMS": "Scan QR code to send verification SMS",
        "noScanQr": "Unable to scan QR code",
        "manualSMS": "send a verification SMS manually",
        "clickToSMS": "Click the button to send verification SMS",
        "editSMS": "Edit SMS",
        "sendSMSTo": "Send to",
        "or": "or",
        "toSMS": "send a verification SMS",
        "cannotJump": "cannot jump to SMS"
      }
    },
    "gu": {
      "loading": "\u0AB2\u0ACB\u0AA1 \u0A95\u0AB0\u0AC0 \u0AB0\u0AB9\u0ACD\u0AAF\u0AC1\u0A82 \u0A9B\u0AC7 ...",
      "loadfail": "\u0AB2\u0ACB\u0AA1 \u0A95\u0AB0\u0AB5\u0ABE\u0AAE\u0ABE\u0A82 \u0AA8\u0ABF\u0AB7\u0ACD\u0AAB\u0AB3",
      "verifySuccess": "\u0AB8\u0AAB\u0AB3\u0AA4\u0ABE\u0AAA\u0AC2\u0AB0\u0ACD\u0AB5\u0A95 \u0A9A\u0A95\u0ABE\u0AB8\u0ABE\u0AAF\u0AC7\u0AB2",
      "verifyError": "\u0AA8\u0ABF\u0AB7\u0ACD\u0AAB\u0AB3, \u0A95\u0AC3\u0AAA\u0ABE \u0A95\u0AB0\u0AC0\u0AA8\u0AC7 \u0AAB\u0AB0\u0AC0 \u0AAA\u0ACD\u0AB0\u0AAF\u0ABE\u0AB8 \u0A95\u0AB0\u0ACB",
      "verifyOutOfLimit": "\u0A98\u0AA3\u0AC0 \u0AAC\u0AA7\u0AC0 \u0AA8\u0ABF\u0AB7\u0ACD\u0AAB\u0AB3\u0AA4\u0ABE\u0A93, \u0A95\u0AC3\u0AAA\u0ABE \u0A95\u0AB0\u0AC0\u0AA8\u0AC7 \u0AAB\u0AB0\u0AC0 \u0AAA\u0ACD\u0AB0\u0AAF\u0ABE\u0AB8 \u0A95\u0AB0\u0ACB",
      "clickButton": "\u0A9A\u0A95\u0ABE\u0AB8\u0AB5\u0ABE \u0AAE\u0ABE\u0A9F\u0AC7 \u0A95\u0ACD\u0AB2\u0ABF\u0A95 \u0A95\u0AB0\u0ACB",
      "clickInTurn": "\u0A95\u0ACD\u0AB0\u0AAE\u0AAE\u0ABE\u0A82 \u0A95\u0ACD\u0AB2\u0ABF\u0A95 \u0A95\u0AB0\u0ACB",
      "clickWordInTurn": "\u0A95\u0ACD\u0AB0\u0AAE\u0AAE\u0ABE\u0A82 \u0A9F\u0AC7\u0A95\u0ACD\u0AB8\u0ACD\u0A9F \u0AAA\u0AB0 \u0A95\u0ACD\u0AB2\u0ABF\u0A95 \u0A95\u0AB0\u0ACB",
      "slideTip": "\u0A9A\u0ABF\u0AA4\u0ACD\u0AB0 \u0AAD\u0AB0\u0AB5\u0ABE \u0AAE\u0ABE\u0A9F\u0AC7 \u0A9F\u0ABE\u0A87\u0AB2\u0AA8\u0AC7 \u0A9C\u0AAE\u0AA3\u0AC0 \u0AA4\u0AB0\u0AAB \u0A96\u0AC7\u0A82\u0A9A\u0ACB",
      "inferenceTip": "\u0A9A\u0ABF\u0AA4\u0ACD\u0AB0 \u0AAA\u0AC1\u0AA8\u0A83\u0AB8\u0ACD\u0AA5\u0ABE\u0AAA\u0ABF\u0AA4 \u0A95\u0AC3\u0AAA\u0ABE \u0A95\u0AB0\u0AC0\u0AA8\u0AC7",
      "waitForSMS": "SMS \u0A9A\u0A95\u0ABE\u0AB8\u0AA3\u0AC0\u0AA8\u0AC0 \u0AB0\u0ABE\u0AB9 \u0A9C\u0ACB\u0AB5\u0AC0, \u0AAC\u0ABE\u0A95\u0AC0",
      "popupTitle": "\u0A95\u0AC3\u0AAA\u0ABE \u0A95\u0AB0\u0AC0\u0AA8\u0AC7 \u0A9A\u0A95\u0ABE\u0AB8\u0AA3\u0AC0 \u0AAA\u0AC2\u0AB0\u0ACD\u0AA3 \u0A95\u0AB0\u0ACB",
      "refresh": "\u0A95\u0ACB\u0AA1 \u0AA4\u0ABE\u0A9C\u0AC1\u0A82 \u0A95\u0AB0\u0ACB",
      "feedback": "\u0AAA\u0ACD\u0AB0\u0AA4\u0ABF\u0AB8\u0ABE\u0AA6 \u0AB8\u0AAC\u0AAE\u0ABF\u0A9F \u0A95\u0AB0\u0ACB",
      "switchToVoice": "\u0AB5 ver\u0A87\u0AB8 \u0AB5\u0AC7\u0AB0\u0ABF\u0AAB\u0ABF\u0A95\u0AC7\u0AB6\u0AA8 \u0A95\u0ACB\u0AA1 \u0AAA\u0AB0 \u0AB8\u0ACD\u0AB5\u0ABF\u0A9A \u0A95\u0AB0\u0ACB",
      "playVoice": "\u0AA7\u0ACD\u0AB5\u0AA8\u0ABF \u0A9A\u0A95\u0ABE\u0AB8\u0AA3\u0AC0 \u0A95\u0ACB\u0AA1 \u0A9A\u0AB2\u0ABE\u0AB5\u0ACB",
      "back": "\u0AAA\u0AB0\u0AA4",
      "enterCode": "\u0AAC\u0AA7\u0ABE \u0AA8\u0A82\u0AAC\u0AB0\u0ACB \u0AA6\u0ABE\u0A96\u0AB2 \u0A95\u0AB0\u0ACB",
      "check": "\u0A9A\u0A95\u0ABE\u0AB8\u0ACB",
      "close": "\u0AAC\u0A82\u0AA7",
      "notSupportVoice": "\u0AB5 ver\u0A87\u0AB8 \u0A9A\u0A95\u0ABE\u0AB8\u0AA3\u0AC0 \u0A95\u0ACB\u0AA1 \u0AB2\u0ACB\u0AA1 \u0A95\u0AB0\u0AB5\u0ABE\u0AAE\u0ABE\u0A82 \u0AA8\u0ABF\u0AB7\u0ACD\u0AAB\u0AB3",
      "intellisense": {
        "normal": "\u0A9A\u0A95\u0ABE\u0AB8\u0AA3\u0AC0 \u0AAA\u0AC2\u0AB0\u0ACD\u0AA3 \u0A95\u0AB0\u0AB5\u0ABE \u0AAE\u0ABE\u0A9F\u0AC7 \u0A95\u0ACD\u0AB2\u0ABF\u0A95 \u0A95\u0AB0\u0ACB",
        "checking": "\u0AA4\u0AAA\u0ABE\u0AB8\u0AB5\u0AC1\u0A82",
        "loading": "\u0AB2\u0ACB\u0AA1 \u0A95\u0AB0\u0AC0 \u0AB0\u0AB9\u0ACD\u0AAF\u0AC1\u0A82 \u0A9B\u0AC7",
        "loadfail": "\u0AB2\u0ACB\u0AA1 \u0A95\u0AB0\u0AB5\u0ABE\u0AAE\u0ABE\u0A82 \u0AA8\u0ABF\u0AB7\u0ACD\u0AAB\u0AB3",
        "loaddone": "\u0A95\u0AC3\u0AAA\u0ABE \u0A95\u0AB0\u0AC0\u0AA8\u0AC7 \u0A9A\u0A95\u0ABE\u0AB8\u0AA3\u0AC0 \u0AAA\u0AC2\u0AB0\u0ACD\u0AA3 \u0A95\u0AB0\u0ACB",
        "longtap": "0.5 \u0AB8\u0AC7\u0A95\u0AA8\u0ACD\u0AA1 \u0AAE\u0ABE\u0A9F\u0AC7 \u0AAC\u0AC7 \u0AB5\u0ABE\u0AB0 \u0A9F\u0AC7\u0AAA \u0A95\u0AB0\u0ACB \u0A85\u0AA8\u0AC7 \u0AAA\u0A95\u0AA1\u0AC0 \u0AB0\u0ABE\u0A96\u0ACB"
      },
      "sms": {
        "scanQrToSMS": "Scan QR code to send verification SMS",
        "noScanQr": "Unable to scan QR code",
        "manualSMS": "send a verification SMS manually",
        "clickToSMS": "Click the button to send verification SMS",
        "editSMS": "Edit SMS",
        "sendSMSTo": "Send to",
        "or": "or",
        "toSMS": "send a verification SMS",
        "cannotJump": "cannot jump to SMS"
      }
    },
    "kn": {
      "loading": "\u0CB2\u0CCB\u0CA1\u0CCD \u0CAE\u0CBE\u0CA1\u0CB2\u0CBE\u0C97\u0CC1\u0CA4\u0CCD\u0CA4\u0CBF\u0CA6\u0CC6 ...",
      "loadfail": "\u0CB2\u0CCB\u0CA1\u0CCD \u0CAE\u0CBE\u0CA1\u0CB2\u0CC1 \u0CB5\u0CBF\u0CAB\u0CB2\u0CB5\u0CBE\u0C97\u0CBF\u0CA6\u0CC6",
      "verifySuccess": "\u0CAF\u0CB6\u0CB8\u0CCD\u0CB5\u0CBF\u0CAF\u0CBE\u0C97\u0CBF \u0CAA\u0CB0\u0CBF\u0CB6\u0CC0\u0CB2\u0CBF\u0CB8\u0CB2\u0CBE\u0C97\u0CBF\u0CA6\u0CC6",
      "verifyError": "\u0CB5\u0CBF\u0CAB\u0CB2\u0CB5\u0CBE\u0C97\u0CBF\u0CA6\u0CC6, \u0CA6\u0CAF\u0CB5\u0CBF\u0C9F\u0CCD\u0C9F\u0CC1 \u0CAE\u0CA4\u0CCD\u0CA4\u0CC6 \u0CAA\u0CCD\u0CB0\u0CAF\u0CA4\u0CCD\u0CA8\u0CBF\u0CB8\u0CBF",
      "verifyOutOfLimit": "\u0CB5\u0CBF\u0CAB\u0CB2\u0CB5\u0CBE\u0C97\u0CBF\u0CA6\u0CC6, \u0CA6\u0CAF\u0CB5\u0CBF\u0C9F\u0CCD\u0C9F\u0CC1 \u0CAE\u0CA4\u0CCD\u0CA4\u0CC6 \u0CAA\u0CCD\u0CB0\u0CAF\u0CA4\u0CCD\u0CA8\u0CBF\u0CB8\u0CBF",
      "clickButton": "\u0CAA\u0CB0\u0CBF\u0CB6\u0CC0\u0CB2\u0CBF\u0CB8\u0CB2\u0CC1 \u0C95\u0CCD\u0CB2\u0CBF\u0C95\u0CCD \u0CAE\u0CBE\u0CA1\u0CBF",
      "clickInTurn": "\u0CA6\u0CAF\u0CB5\u0CBF\u0C9F\u0CCD\u0C9F\u0CC1 \u0C95\u0CCD\u0CB0\u0CAE\u0CA6\u0CB2\u0CCD\u0CB2\u0CBF \u0C95\u0CCD\u0CB2\u0CBF\u0C95\u0CCD \u0CAE\u0CBE\u0CA1\u0CBF",
      "clickWordInTurn": "\u0CA6\u0CAF\u0CB5\u0CBF\u0C9F\u0CCD\u0C9F\u0CC1 \u0CAA\u0CA0\u0CCD\u0CAF\u0CB5\u0CA8\u0CCD\u0CA8\u0CC1 \u0C95\u0CCD\u0CB0\u0CAE\u0CB5\u0CBE\u0C97\u0CBF \u0C95\u0CCD\u0CB2\u0CBF\u0C95\u0CCD \u0CAE\u0CBE\u0CA1\u0CBF",
      "slideTip": "\u0C9A\u0CBF\u0CA4\u0CCD\u0CB0\u0CB5\u0CA8\u0CCD\u0CA8\u0CC1 \u0CAE\u0CB0\u0CC1\u0CB8\u0CCD\u0CA5\u0CBE\u0CAA\u0CBF\u0CB8\u0CB2\u0CC1 \u0CAC\u0CB2\u0C95\u0CCD\u0C95\u0CC6 \u0CB8\u0CCD\u0CB5\u0CC6\u0CD6\u0CAA\u0CCD",
      "inferenceTip": "\u0CA6\u0CAF\u0CB5\u0CBF\u0C9F\u0CCD\u0C9F\u0CC1 \u0C9A\u0CBF\u0CA4\u0CCD\u0CB0\u0CB5\u0CA8\u0CCD\u0CA8\u0CC1 \u0CAE\u0CB0\u0CC1\u0CB8\u0CCD\u0CA5\u0CBE\u0CAA\u0CBF\u0CB8\u0CBF",
      "waitForSMS": "SMS \u0C95\u0CB3\u0CC1\u0CB9\u0CBF\u0CB8\u0CB2\u0CBE\u0C97\u0CC1\u0CA4\u0CCD\u0CA4\u0CBF\u0CA6\u0CC6, \u0C89\u0CB3\u0CBF\u0CA6\u0CBF\u0CA6\u0CC6",
      "popupTitle": "\u0CA6\u0CAF\u0CB5\u0CBF\u0C9F\u0CCD\u0C9F\u0CC1 \u0CAA\u0CB0\u0CBF\u0CB6\u0CC0\u0CB2\u0CBF\u0CB8\u0CC1",
      "refresh": "\u0CB0\u0CBF\u0CAB\u0CCD\u0CB0\u0CC6\u0CB6\u0CCD \u0C95\u0CCB\u0CA1\u0CCD",
      "feedback": "\u0CAA\u0CCD\u0CB0\u0CA4\u0CBF\u0C95\u0CCD\u0CB0\u0CBF\u0CAF\u0CC6\u0CAF\u0CA8\u0CCD\u0CA8\u0CC1 \u0CB8\u0CB2\u0CCD\u0CB2\u0CBF\u0CB8\u0CBF",
      "switchToVoice": "\u0CA7\u0CCD\u0CB5\u0CA8\u0CBF \u0CAA\u0CB0\u0CBF\u0CB6\u0CC0\u0CB2\u0CA8\u0CC6 \u0C95\u0CCB\u0CA1\u0CCD\u200C\u0C97\u0CC6 \u0CAC\u0CA6\u0CB2\u0CBF\u0CB8\u0CBF",
      "playVoice": "\u0CA7\u0CCD\u0CB5\u0CA8\u0CBF \u0CAA\u0CB0\u0CBF\u0CB6\u0CC0\u0CB2\u0CA8\u0CC6 \u0C95\u0CCB\u0CA1\u0CCD \u0CAA\u0CCD\u0CB2\u0CC7 \u0CAE\u0CBE\u0CA1\u0CBF",
      "back": "\u0CB9\u0CBF\u0C82\u0CA4\u0CBF\u0CB0\u0CC1\u0C97\u0CBF",
      "enterCode": "\u0C8E\u0CB2\u0CCD\u0CB2\u0CBE \u0CB8\u0C82\u0C96\u0CCD\u0CAF\u0CC6\u0C97\u0CB3\u0CA8\u0CCD\u0CA8\u0CC1 \u0CA8\u0CAE\u0CC2\u0CA6\u0CBF\u0CB8\u0CBF",
      "check": "\u0CAA\u0CB0\u0CBF\u0CB6\u0CC0\u0CB2\u0CBF\u0CB8\u0CBF",
      "close": "\u0CAE\u0CC1\u0C9A\u0CCD\u0C9A\u0CBF\u0CA6",
      "notSupportVoice": "\u0CA7\u0CCD\u0CB5\u0CA8\u0CBF \u0C95\u0CA1\u0CA4\u0CB5\u0CA8\u0CCD\u0CA8\u0CC1 \u0CB2\u0CC6\u0CC2\u0CD5\u0CA1\u0CCD \u0CAE\u0CBE\u0CA1\u0CB2\u0CC1 \u0CB5\u0CBF\u0CAB\u0CB2\u0CB5\u0CBE\u0C97\u0CBF\u0CA6\u0CC6",
      "intellisense": {
        "normal": "\u0CB8\u0C82\u0CAA\u0CC2\u0CB0\u0CCD\u0CA3 \u0CAA\u0CB0\u0CBF\u0CB6\u0CBF\u0CD5\u0CB2\u0CA8\u0CC6 \u0C95\u0CCD\u0CB2\u0CBF\u0C95\u0CCD \u0CAE\u0CBE\u0CA1\u0CBF",
        "checking": "\u0CAA\u0CB0\u0CBF\u0CB6\u0CC0\u0CB2\u0CBF\u0CB8\u0CB2\u0CBE\u0C97\u0CC1\u0CA4\u0CCD\u0CA4\u0CBF\u0CA6\u0CC6",
        "loading": "\u0CB2\u0CCB\u0CA1\u0CCD \u0CAE\u0CBE\u0CA1\u0CB2\u0CBE\u0C97\u0CC1\u0CA4\u0CCD\u0CA4\u0CBF\u0CA6\u0CC6",
        "loadfail": "\u0CB2\u0CCB\u0CA1\u0CCD \u0CAE\u0CBE\u0CA1\u0CB2\u0CC1 \u0CB5\u0CBF\u0CAB\u0CB2\u0CB5\u0CBE\u0C97\u0CBF\u0CA6\u0CC6",
        "loaddone": "\u0CA6\u0CAF\u0CB5\u0CBF\u0C9F\u0CCD\u0C9F\u0CC1 \u0CAA\u0CB0\u0CBF\u0CB6\u0CC0\u0CB2\u0CBF\u0CB8\u0CC1",
        "longtap": "\u0CA1\u0CAC\u0CB2\u0CCD \u0C9F\u0CCD\u0CAF\u0CBE\u0CAA\u0CCD \u0CAE\u0CBE\u0CA1\u0CBF \u0CAE\u0CA4\u0CCD\u0CA4\u0CC1 0.5 \u0CB8\u0CC6\u0C95\u0CC6\u0C82\u0CA1\u0CC1\u0C97\u0CB3 \u0C95\u0CBE\u0CB2 \u0CB9\u0CBF\u0CA1\u0CBF\u0CA6\u0CC1\u0C95\u0CCA\u0CB3\u0CCD\u0CB3\u0CBF"
      },
      "sms": {
        "scanQrToSMS": "Scan QR code to send verification SMS",
        "noScanQr": "Unable to scan QR code",
        "manualSMS": "send a verification SMS manually",
        "clickToSMS": "Click the button to send verification SMS",
        "editSMS": "Edit SMS",
        "sendSMSTo": "Send to",
        "or": "or",
        "toSMS": "send a verification SMS",
        "cannotJump": "cannot jump to SMS"
      }
    }
  };
}, function (_0x49cdfc, _0x53b843) {
  'use strict';

  var _0x3adeb8 = "function" == typeof Symbol && "symbol" == typeof Symbol["iterator"] ? function (_0x3f271c) {
    return typeof _0x3f271c;
  } : function (_0x11d483) {
    return _0x11d483 && "function" == typeof Symbol && _0x11d483["constructor"] === Symbol && _0x11d483 !== Symbol["prototype"] ? "symbol" : typeof _0x11d483;
  };
  !function () {
    function _0x38027b() {
      var _0x353c6b = "2izvR3Ydkgw605lf"["split"]("");
      this["m"] = function (_0x2a0199) {
        if (null == _0x2a0199 || void 0 == _0x2a0199) return _0x2a0199;
        if (0 != _0x2a0199["length"] % 2) throw Error("1100");
        for (var _0x5f0405 = [], _0x18e2fd = 0; _0x18e2fd < _0x2a0199["length"]; _0x18e2fd++) {
          0 == _0x18e2fd % 2 && _0x5f0405["push"]("%");
          for (var _0x16a3d2 = _0x353c6b, _0x1ee8b2 = 0; _0x1ee8b2 < _0x16a3d2["length"]; _0x1ee8b2++) if (_0x2a0199["charAt"](_0x18e2fd) == _0x16a3d2[_0x1ee8b2]) {
            _0x5f0405["push"](_0x1ee8b2["toString"](16));
            break;
          }
        }
        return decodeURIComponent(_0x5f0405["join"](""));
      }, this["f"] = function (_0x7b269b) {
        if (null == _0x7b269b || void 0 == _0x7b269b) return _0x7b269b;
        if (0 != _0x7b269b["length"] % 2) throw Error("1100");
        for (var _0x5543af = [], _0x333bb3 = 0; _0x333bb3 < _0x7b269b["length"]; _0x333bb3++) {
          0 == _0x333bb3 % 2 && _0x5543af["push"]("%");
          for (var _0x3fa85e = _0x353c6b, _0x49ee1a = 0; _0x49ee1a < _0x3fa85e["length"]; _0x49ee1a++) if (_0x7b269b["charAt"](_0x333bb3) == _0x3fa85e[_0x49ee1a]) {
            _0x5543af["push"](_0x49ee1a["toString"](16));
            break;
          }
        }
        return decodeURIComponent(_0x5543af["join"](""));
      };
    }
    var _0x465ff3 = new _0x38027b()["f"],
      _0x46617c = new _0x38027b()["m"],
      _0x46a45b = new _0x38027b()["f"],
      _0x3563ea = new _0x38027b()["f"],
      _0x5a8dea = new _0x38027b()["f"];
    !function () {
      var _0x4a3846 = [_0x3563ea(""), _0x46a45b("RddzYidg3RY3dkdR"), _0x3563ea("d2YidzY3YldR"), _0x3563ea("l36g60l3g0kY"), _0x3563ea("d2Y0d3YdYgYldv"), _0x5a8dea("RiYRYfYzY3R3dkR5YiYlRRY3dRY3YvdR"), _0x5a8dea("v2v2viv2"), _0x46617c("RdYfYfYdY0Y3z2R3YidzdRYkz232Y0d3YdYgYl"), _0x46a45b("3YY3Y3dRY0Y3z23R3Yz2RvYfdzY3"), _0x5a8dea("v2v2v2vd"), _0x46617c("v2v2v2vR"), _0x465ff3("v2v2v2vz"), _0x46617c("v2v2v2vv"), _0x5a8dea("v2v2v2v2"), _0x46a45b("v2v2v2vi"), _0x3563ea("33YlYgdRdgz232Y0YidgY3dz"), _0x465ff3("3vY6dgd2Y3z23dY3Yzz232Y0d3YdYgYl"), _0x5a8dea("3dY3YzR6YgdRz5YgYldRY3YddzYgY3dzdRY3z232RRRY"), _0x3563ea("YdYRdkYgYRd2dgYkdkYRR3"), _0x46a45b("RzY3Y0Y0z2R53R"), _0x465ff3("v2v2v2vk"), _0x3563ea("YdY3dR3vd3d2d2YfdzdRY3YRR3dkdRY3YldvYgYfYldv"), _0x5a8dea("v2v2v2vg"), _0x46a45b("3vYiYYY33vY3YidzYvYk"), _0x46617c("dvY3dR3RYgY5Y3"), _0x465ff3("Yid2d2Y3YlYRRvYkYgY0YR"), _0x5a8dea("zz"), _0x465ff3("zR"), _0x46617c("33YlYgdYY3dzdv"), _0x5a8dea("z3"), _0x3563ea("zY"), _0x5a8dea("zd"), _0x46a45b("viviviv2"), _0x46a45b("YdY3dRz2d2Y0d3YdYgYlz2dvdRdzYgYlYdz2Y3dkYvY3d2dRYgYfYl"), _0x465ff3("3RYkdzY3Y3RR3vYkYiYRYfdd"), _0x3563ea("z6"), _0x465ff3("z0"), _0x46617c("z5"), _0x46a45b("RidzYiYz"), _0x465ff3("lkk66glYglg0lR6k65ld66kYl3wlk6"), _0x3563ea("zl"), _0x5a8dea("RY333wR33vYkYidzY3"), _0x46617c("zf"), _0x46a45b("v2"), _0x3563ea("vi"), _0x46a45b("vz"), _0x3563ea("vv"), _0x46617c("vR"), _0x46a45b("lR666fl3wlk63fRdRzvzvvvivz"), _0x46a45b("v3"), _0x5a8dea("vY"), _0x465ff3("RgYlYiYvdRYgdYY3RvYid2dRYgYfYl3RY3dkdR"), _0x465ff3("vd"), _0x3563ea("3dR3Rz3wR3Rlz2RzdzYfdddvY3dzz2R3dkdRY3YldvYgYfYl"), _0x3563ea("vk"), _0x3563ea("vg"), _0x46617c("RRYgdY3kz2RzdzYfdddvY3dzz232Y0d3Ydz5RgYl"), _0x465ff3("vw"), _0x465ff3("v6"), _0x46a45b("33d2Y0Yidgz232Rv"), _0x3563ea("v5"), _0x465ff3("YvYiYldYYidvz2Y3dkYvY3d2dRYgYfYl"), _0x5a8dea("Ri"), _0x465ff3("Rz"), _0x46617c("Rv"), _0x46a45b("RR"), _0x46617c("R3"), _0x3563ea("l36lwllk65wflgg6k3lg66gi"), _0x5a8dea("RY"), _0x465ff3("RkYidzdzYgYlYddRYfYl"), _0x465ff3("Rd"), _0x46a45b("Rk"), _0x3563ea("Rg"), _0x46617c("Rw"), _0x5a8dea("RdYlYfY5Y3z23vYkY3Y0Y0z2RgYldRY3YddzYidRYgYfYl"), _0x46617c("R6"), _0x5a8dea("R0"), _0x5a8dea("R5"), _0x5a8dea("Rl"), _0x46a45b("Rf"), _0x465ff3("32"), _0x5a8dea("3i"), _0x46a45b("3z"), _0x3563ea("3v"), _0x5a8dea("RlYgYiYdYidzYiz23vYfY0YgYR"), _0x46a45b("3R"), _0x465ff3("3vY3YYRvY0YgY3YldRz232Y0d3YdYgYl"), _0x5a8dea("33"), _0x3563ea("3Y"), _0x5a8dea("vivivivi"), _0x5a8dea("3d"), _0x5a8dea("3k"), _0x3563ea("3g"), _0x46a45b("3w"), _0x46617c("RdYfd3YRdgz2RfY0YRz23vdRdgY0Y3"), _0x46617c("30"), _0x5a8dea("3zYfYzY0Yfdkz2R0Yid3YlYvYkY3dzz232Y0d3YdYgYl"), _0x5a8dea("R5YgYvdzYfdvYfYYdRz2RfYYYYYgYvY3z2vzv2vivv"), _0x465ff3("3i3iR5d3dvYgYv"), _0x465ff3("Yi"), _0x3563ea("R3d3dzYfdvdRYgY0Y3"), _0x46a45b("Yz"), _0x5a8dea("dzY5YfYvdkzl3zY3YiY032Y0YidgY3dzz2Rdvzz2RvYfYldRdzYfY0zlvi"), _0x46617c("Yv"), _0x3563ea("3vYvdzYgd2dRYgYlYdzlRRYgYvdRYgYfYlYidzdg"), _0x5a8dea("YR"), _0x46617c("lR666fl3wlk6"), _0x465ff3("Y3"), _0x46617c("YY"), _0x465ff3("Yd"), _0x5a8dea("Yk"), _0x5a8dea("R5Yiz5RvYfYlYYYgYdzlYvYfY5z2d2Y0d3YdYgYl"), _0x46617c("Yg"), _0x5a8dea("viv2viv2"), _0x465ff3("RvYidvd3YiY0"), _0x46a45b("Yw"), _0x46617c("Y6"), _0x5a8dea("Y0"), _0x5a8dea("Y5"), _0x46a45b("Yl"), _0x3563ea("Yf"), _0x465ff3("d2"), _0x3563ea("viv2v2vk"), _0x46a45b("YRYfRlYfdR3RdzYiYvY6"), _0x3563ea("di"), _0x465ff3("YvdR"), _0x46617c("lR6k65l3wlk6z232dzYf"), _0x465ff3("dz"), _0x5a8dea("dvY3dR3RYgY5Y3Yfd3dR"), _0x46617c("RdYgdvYkYi"), _0x465ff3("YdY3dR3RYgY5Y3dwYfYlY3RfYYYYdvY3dR"), _0x5a8dea("dv"), _0x46617c("viv2v2v3"), _0x3563ea("viv2v2vR"), _0x3563ea("dR"), _0x46a45b("viv2v2vv"), _0x46617c("d3"), _0x5a8dea("dY"), _0x5a8dea("viv2v2vi"), _0x3563ea("dd"), _0x5a8dea("dk"), _0x465ff3("YRdzYiddRidzdzYidgdv"), _0x3563ea("dg"), _0x5a8dea("dw"), _0x3563ea("d6"), _0x465ff3("d5"), _0x5a8dea("dl"), _0x465ff3("YYYfYldR"), _0x465ff3("viv2v2vg"), _0x3563ea("dvd3YYYYYgdkY3dv"), _0x465ff3("v5Yld3Y0Y0v6z2d2YidRYkv5zfv6z2Y3dkd2YgdzY3dvv5"), _0x46a45b("3vYkY3Y0Y0zl33RgRkY3Y0d2Y3dz"), _0x46a45b("dRYfRRYidRYi333zR0"), _0x5a8dea("3dYgYlYRYfdd3RY3dkdR"), _0x46a45b("Y0YiYlYdd3YiYdY3"), _0x46a45b("lR6k65lg66giz232dzYf"), _0x5a8dea("YRYf"), _0x5a8dea("RkYgYdYkY0YgYdYkdR3RY3dkdR"), _0x3563ea("YRYgdY"), _0x465ff3("R5Y3Yld33RY3dkdR"), _0x3563ea("RiRfR0z2R5Y3YRYgYiz232Y0YidgYzYiYvY6z232Y0d3YdYgYl"), _0x465ff3("RvYgdRdzYgdkz2YfYlY0YgYlY3z2d2Y0d3Ydz5YgYl"), _0x5a8dea("Y3Yv"), _0x46617c("RRY3dvYRY3Y5YfYlYi"), _0x46a45b("RgYlYiYvdRYgdYY3RzYfdzYRY3dz"), _0x46a45b("3zY3YiY032Y0YidgY3dz"), _0x5a8dea("z0z2zdYvYfYRY3zdvw"), _0x46617c("RkR3R0R0Rf"), _0x46617c("Yld23RYfYlYdYzd3RiYRYRYgYl"), _0x46617c("Y3Y5"), _0x46617c("YvdzY3YidRY3R3Y0Y3Y5Y3YldR"), _0x46a45b("d2YkYiYldRYfY5"), _0x46a45b("R53vz232R5YgYlYvYkYf"), _0x46a45b("lYw36dlR65gv"), _0x46a45b("Y3dYYiY0"), _0x5a8dea("Y3dk"), _0x3563ea("RRYgdY3kz23YRfRRz2RkY3Y0d2Y3dzz232Y0d3Ydz5YgYl"), _0x46a45b("lYgY62ld66kYlYgkkllR65gv"), _0x46a45b("3id3YgYvY63RYgY5Y3RvYkY3YvY6RfYzYwY3YvdRzl3id3YgYvY63RYgY5Y3RvYkY3YvY6zlvi"), _0x5a8dea("RYY0dgRfdzRRYgY3z2RdYiY5Y3dvz232Y0d3YdYgYl"), _0x465ff3("YidRdRYiYvYk3vYkYiYRY3dz"), _0x46a45b("32Y0YidgRfYlz232Y0d3Ydz5YgYl"), _0x46a45b("YdY3dR3RYgY5Y3"), _0x5a8dea("vizlv2vi"), _0x5a8dea("RzdzYfYiYRddYidg"), _0x46617c("YYd2"), _0x465ff3("RiY0YiddYidzz2Rl32Ri32Rgz2d3dRYgY0dv"), _0x5a8dea("RYYfdzdRY3"), _0x5a8dea("YkYidvYkRvYfYRY3"), _0x46a45b("lYgY6glYw5wvl3wdgwlR65gv"), _0x46617c("R33vRlz23vYfYlYidzz2Ri32Rg"), _0x465ff3("Rk32RRY3dRY3YvdR"), _0x5a8dea("RzYgdRYRY3YYY3YlYRY3dzz23id3YgYvY63vYvYiYl"), _0x46a45b("RgR3z23RYiYzz2d2Y0d3YdYgYl"), _0x46a45b("Rzd3dRdRYfYlRYYiYvY3"), _0x5a8dea("zdz0"), _0x465ff3("Yvd2d3RvY0Yidvdv"), _0x3563ea("Y5Y3dvdvYiYdY3"), _0x46617c("RvY3YldRd3dzdgz2RdYfdRYkYgYv"), _0x465ff3("RfYlY0YgYlY3z23vdRYfdzYiYdY3z2d2Y0d3Ydz5YgYl"), _0x46617c("3vYiYYY3dzz233d2YRYidRY3"), _0x46a45b("R5dvdkY5Y0vzzlRRRfR5RRYfYvd3Y5Y3YldR"), _0x465ff3("R3YlYddzYidYY3dzdvz2R53R"), _0x46617c("3vYgY0dYY3dzY0YgYdYkdRz232Y0d3Ydz5RgYl"), _0x465ff3("RdYfYfYdY0Y3z2RdY3Yidzdvz2v2zlv3zlvvvvzlv2"), _0x465ff3("RvYgdRdzYgdkz2RgRvRiz2RvY0YgY3YldR"), _0x46a45b("YiY0d2YkYiYzY3dRYgYv"), _0x46a45b("YvYfYldRY3dkdR"), _0x46617c("3YRRYfddYlY0YfYiYRY3dz"), _0x46a45b("l3k5kllYgYkdlYw36dlR65gv"), _0x3563ea("YidRdRdz3YY3dzdRY3dk"), _0x5a8dea("l3wlk6lR65gv"), _0x46a45b("YvYfYfY6YgY3"), _0x46a45b("z3vzvz"), _0x5a8dea("z3vzvY"), _0x3563ea("RvY3YldRYid3dz"), _0x5a8dea("vRYdYiY5Y3"), _0x5a8dea("3zYfYvY6ddY3Y0Y0"), _0x465ff3("R0YfYdR5Y3RgYlz232Y0d3YdYgYlz2vizlv2zlv2zlvgvYvi"), _0x46617c("RfYvdRYfdvYkYid2Y3z23vdRdzY3YiY5YgYlYdz23vY3dzdYYgYvY3dv"), _0x5a8dea("dRYfRdR53R3vdRdzYgYlYd"), _0x46a45b("dRYkv5zf"), _0x46617c("3vd3Y5YidRdzYi32RRRYz2RzdzYfdddvY3dzz232Y0d3YdYgYl"), _0x3563ea("32RRRYzl32YRYYRvdRdzY0"), _0x46a45b("YYYgY0Y03vdRdgY0Y3"), _0x5a8dea("YYYfYldR3vYgdwY3"), _0x46a45b("RiYRYfYzY3z2R5YgYlYdz23vdRYR"), _0x46617c("YwY3"), _0x46617c("3RYfdzYvYkRkY3Y0d2Y3dz"), _0x3563ea("RYdzYiYlY6Y0YgYlz2RdYfdRYkYgYvz2RkY3YidYdg"), _0x46a45b("l3k5kllYgYkdlR666fl3wlk6"), _0x5a8dea("RkYidzY5YfYldgz232Y0d3Ydz5RgYl"), _0x46a45b("RdYgYdYg"), _0x3563ea("dYvizlvi"), _0x3563ea("R6YgYlYfz2R53R"), _0x465ff3("3vYgY5RkY3Yg"), _0x3563ea("RiY0Yg3v3vRfR0YfYdYgYlz2d2Y0d3YdYgYl"), _0x46617c("3zY3YiY032Y0YidgY3dzzl3zY3YiY032Y0YidgY3dzzkdRY5zgz2RiYvdRYgdYY33kz2RvYfYldRdzYfY0z2zkvvvzz5YzYgdRzg"), _0x3563ea("3gYiYlYRY3dkz232RRRYz23YYgY3ddY3dz"), _0x3563ea("RvYgdRdzYgdkz23zY3YvY3YgdYY3dzz232Y0d3Ydz5YgYl"), _0x46a45b("dRYfd2"), _0x3563ea("Y5YiYg"), _0x46617c("RiYvdzYf32RRRYzl32RRRY"), _0x465ff3("YvYiYldYYidvz2Yid2Ygz2Y3dkYvY3d2dRYgYfYl"), _0x465ff3("RgYlYiYvdRYgdYY3RvYid2dRYgYfYl"), _0x3563ea("R5Y3Yld3"), _0x46a45b("d2dzY3YvYgdvYgYfYlz2Y5Y3YRYgd3Y5d2z2YYY0YfYidRv6z2dYYidzdgYgYlYdz2dYY3Yvvzz2dYYidzdgYgYl3RY3dkRvYfYfdzYRYgYlYidRY3v6z2dYYfYgYRz2Y5YiYgYlzkzgz2d6z2z2z2YdY03fRYdzYiYdRvYfY0Yfdzz2v5z2dYY3YvvRzkdYYidzdgYgYl3RY3dkRvYfYfdzYRYgYlYidRY3z0z2v2z0z2vizgv6z2d5"), _0x46617c("3i3ivzv2vivvz2RYYgdzY3YYYfdkz232Y0d3YdYgYl"), _0x3563ea("RdYfYfYdY0Y3z233d2YRYidRY3"), _0x3563ea("l3k5kllYgYkdl365wglR6wgi"), _0x3563ea("Y3R5d3dvYgYv32Y0d3YdYgYlz2RRR0R5vY"), _0x465ff3("3dY3Yzz2RvYfY5d2YfYlY3YldRdv"), _0x5a8dea("RzYiYzdgY0YfYlz23RYfYfY0RzYidz"), _0x465ff3("RvYfYfddYfYlz233d2YRYidRY3"), _0x46617c("RgYlYYYf3RY3dkdR"), _0x46617c("dzY5YfYvdkzl3zY3YiY032Y0YidgY3dzz2Rdvzz2RvYfYldRdzYfY0"), _0x465ff3("YgR5Y3dvYkz2d2Y0d3YdYgYl"), _0x46a45b("3zY3YiY0RRYfddYlY0YfYiYRY3dzz232Y0d3YdYgYl"), _0x46617c("3vdgY5YiYldRY3Yvz232R6Rgz2RvY0YgY3YldR"), _0x5a8dea("3fd2YkYiYldRYfY5"), _0x465ff3("RdRRR0z2RfYzYwY3YvdRz23dY3Yzz232Y0d3Ydz5YgYlz2vivYzlv2v2"), _0x46a45b("ddY3YzYdY0"), _0x46617c("l3k5kllYgYkdl3wlk6lR65gv"), _0x465ff3("dvYvdzY3Y3Yl"), _0x46a45b("YzYfYRdg"), _0x465ff3("3R3zRgRiRlRdR0R33f3v3R3zRg32"), _0x3563ea("3RY0ddYdR5YfYlYf"), _0x5a8dea("Ylv5"), _0x3563ea("R0YfYdR5Y3RgYlz232Y0d3YdYgYlz2vizlv2zlv2zlvgvvv3"), _0x465ff3("zdvwzd"), _0x3563ea("YYd3YlYvdRYgYfYl"), _0x46617c("YvYfYldRY3dkdRzlYkYidvYkRvYfYRY3"), _0x3563ea("RidzYvYkYgRvRiRR"), _0x5a8dea("3YR33z3RR33k3f3vRkRiRRR33z"), _0x5a8dea("33Yzd3YldRd3"), _0x465ff3("RYYiYvY3YzYfYfY6z232Y0d3YdYgYl"), _0x465ff3("RiYvdRYgdYY3RvYid2dRYgYfYl"), _0x5a8dea("ld66kYlYgkkllR65gv"), _0x46617c("R5YiY0Ydd3Ylz2RdYfdRYkYgYv"), _0x46617c("RlY3dddvz2RdYfdRYkYgYvz2R53R"), _0x46617c("RvYid2dRYgYfYl3RY3dkdR"), _0x46a45b("Yi3wYz3gv2Yv3kYR3dviY33YYYvz33Ydvv3RYkvR3vYg3zv3Yw3iY6vY32Y0RfvdY5RlYlvkR5YfR0vgd2R6diRwdzRgdvRkdRRdd3RYdYR3ddRRdkRvdgRzdwRi"), _0x46617c("RRY3YwYi3Yd3z2R0RdRvz23vYiYldvz2R5YfYlYf"), _0x46617c("RvYfd2d2Y3dzd2Y0YidRY3z2RdYfdRYkYgYvz2R0YgYdYkdR"), _0x46617c("3vY3YdYfY3z232dzYgYldR"), _0x5a8dea("3vYiddYidvYRY3Y3"), _0x3563ea("RzYid3YkYid3dvz2vgvv"), _0x46617c("RvYkYiY0Y6YRd3dvdRY3dz"), _0x3563ea("RiYzYiYRYgz2R53Rz2RvYfYlYRY3YldvY3YRz2R0YgYdYkdR"), _0x46617c("R0d3YvYgYRYiz2RzdzYgYdYkdR"), _0x46a45b("3dYgYRY3z2R0YidRYgYl"), _0x5a8dea("YYYfYldRz2YRY3dRY3YvdRz2Y3dzdzYfdz"), _0x465ff3("R6Yfdwd3Y6Yiz2RdYfdRYkYgYvz232dzvYRl"), _0x3563ea("RkdRY5Y0v3z2Y0YfYvYidRYgYfYlz2d2dzYfdYYgYRY3dz"), _0x465ff3("RRYgdY3kz232Y0d3dvz23dY3Yzz232Y0YidgY3dz"), _0x46617c("3YY0YiYRYgY5Ygdzz23vYvdzYgd2dR"), _0x3563ea("RYYgY0Y3z2RRYfddYlY0YfYiYRY3dzz232Y0d3Ydz5YgYl"), _0x5a8dea("YfYz"), _0x46617c("RiYRYfYRYzzl3vdRdzY3YiY5"), _0x465ff3("R5Y3YlY0Yf"), _0x46617c("YvYiY0Y032YkYiYldRYfY5"), _0x46617c("3dYfY0YYdzYiY5z2R5YidRYkY3Y5YidRYgYvYi"), _0x5a8dea("RvYidRYiY0YgYlYiRddzYfd3d2z233d2YRYidRY3"), _0x46a45b("R3dzYidvz2RzYfY0YRz2Rg3RRv"), _0x465ff3("RRY3dYYiY03Y3z3kRvdRdzY0zlRRY3dYYiY03Y3z3kRvdRdzY0zlvi"), _0x5a8dea("l3k5kllYgYkdld66kYlg66gi"), _0x46a45b("YiYRYRRzY3YkYidYYgYfdz"), _0x5a8dea("d2Yi"), _0x46617c("RzYgdRdvdRdzY3YiY5z23YY3dzYiz23vY3dzYgYY"), _0x5a8dea("zkYYd3YlYvdRYgYfYlzkzgd6dzY3dRd3dzYlz2vivzvvv6d5zgzkzgv6"), _0x465ff3("d2Yg"), _0x46a45b("3RY3YlYvY3YldRz2RY3RRlz2d2Y0d3Ydz5YgYl"), _0x46a45b("dzY3Y5YfdYY3RvYkYgY0YR"), _0x5a8dea("RYYfY0dkz2vvz2RzdzYfdddvY3dzz232Y0d3YdYgYl"), _0x46a45b("d3dvY332dzYfYddzYiY5"), _0x465ff3("YkYfdvdRYlYiY5Y3"), _0x465ff3("d2YkYiYldRYfY5zlYgYlYwY3YvdRRwdv"), _0x3563ea("3vYkYfYvY6ddYidYY3RYY0YidvYkzl3vYkYfYvY6ddYidYY3RYY0YidvYk"), _0x46a45b("YkY3YgYdYkdR"), _0x3563ea("dzYdYzYizkviv2vzz0z2vzv2vRz0z2v2z0z2v2zlvdzg"), _0x465ff3("RiYRYzY0YfYvY632Y0d3YdYgYl"), _0x46617c("RzYiYvY6YddzYfd3YlYR"), _0x5a8dea("RiYdRvYfYldRdzYfY0zlRiYdRvYfYldRdzYfY0"), _0x46a45b("32YkYfdRYfRvY3YldRY3dz32Y0d3YdYgYlvizlvizlvzzlvz"), _0x46617c("Rdd3YlYd3vY3Yf"), _0x46617c("dvv5"), _0x46a45b("YRY3YvYfYRY3333zRg"), _0x465ff3("lYgY6glYw5wvlkkkgzlR65gv"), _0x5a8dea("l3k5kllYgYkdlYgY62lgw5kf"), _0x46617c("vivzvv"), _0x465ff3("ddY3YzYdY0z2Y3dkYvY3d2dRYgYfYl"), _0x5a8dea("dzY3"), _0x3563ea("3dR532Y0YidgY3dzzlRfRv3k"), _0x5a8dea("vdvzd2dk"), _0x46617c("Rid2d23dYfdzY6dvd2YiYvY3"), _0x3563ea("RkYgYdYkY0YgYdYkdR"), _0x46617c("YRYfYvd3Y5Y3YldR"), _0x3563ea("3gYiYlYRY3dkz2R5Y3YRYgYiz232Y0d3YdYgYl"), _0x3563ea("R33vRlz2R0Yid3YlYvYkz2R5YfdwYgY0Y0Yiz232Y0d3YdYgYl"), _0x5a8dea("vdv2d2dkz2zdRidzYgYiY0zd"), _0x46a45b("YgYlYwY3YvdRRwdv"), _0x5a8dea("R0YfY5Yi"), _0x46617c("RzYgdRRvYfY5Y3dRRiYdY3YldR"), _0x46617c("RvYiY0YgYzdzYg"), _0x5a8dea("RzYfYfY6Y5YiYlz2RfY0YRz23vdRdgY0Y3"), _0x46617c("dvY3dvdvYgYfYl3vdRYfdzYiYdY3"), _0x3563ea("33dRYfd2YgYi"), _0x465ff3("YvYfY5d2YgY0Y33vYkYiYRY3dz"), _0x465ff3("Y3dvYvYid2Y3"), _0x3563ea("3vYvdzYfY0Y0YzYidz"), _0x46a45b("3dYgYlYRYfdd"), _0x46617c("lggw6YlR6gwY"), _0x46a45b("R6Yidvd2Y3dzdvY6dgz232YidvdvddYfdzYRz2R5YiYlYiYdY3dz"), _0x3563ea("R5YgYlYdR0Yg33z5R3dkdRRz"), _0x46a45b("YdY3dRz2dvdgdvdRY3Y5z2YvYfY0Yfdzdvz2Y3dkYvY3d2dRYgYfYl"), _0x465ff3("3vY6dgd2Y3zlRRY3dRY3YvdRYgYfYl"), _0x46617c("RYYgY0Y3R0YiYzz2d2Y0d3YdYgYl"), _0x46a45b("Yld2Ri32Rgz232Y0d3YdYgYl"), _0x3563ea("YlYfdR3fY3dkYgdvdR3fYkYfdvdR"), _0x46a45b("vzYR"), _0x5a8dea("RiYvdRYgdYY33kRfYzYwY3YvdR"), _0x5a8dea("RRYfdRd3Y5"), _0x46617c("32RRRYz53kRvYkYiYlYdY3z23YYgY3ddY3dz"), _0x3563ea("YfYYYYdvY3dRRkY3YgYdYkdR"), _0x5a8dea("32R5YgYlYdR0Yg33"), _0x46a45b("YvYfY0YfdzRRY3d2dRYk"), _0x46617c("RlYfY6YgYiz23vd3YgdRY3z2R3YlYiYzY0Y3dzz232Y0d3YdYgYl"), _0x46617c("3zY3YiY03YYgYRY3Yfzl3zY3YiY03YYgYRY3YfzkdRY5zgz2RiYvdRYgdYY33kz2RvYfYldRdzYfY0z2zkvvvzz5YzYgdRzg"), _0x3563ea("R5YiYdYlY3dRYf"), _0x465ff3("RiYRYfYzY3R3dkR5YiYlRvRvRRY3dRY3YvdR"), _0x3563ea("RdYiYzdzYgYfY0Yi"), _0x5a8dea("32Y0YidgYzYgY0Y0"), _0x3563ea("YlYidYYgYdYidRYfdz"), _0x46617c("3zYiYvYkYiYlYi"), _0x46a45b("3Rddz2RvY3Ylz2R53Rz2RvYfYlYRY3YldvY3YRz2R3dkdRdzYiz2RzYfY0YR"), _0x46617c("3i3iR5YgYlYgRRR0z232Y0d3YdYgYl"), _0x5a8dea("zvYYvYv2"), _0x5a8dea("YYYgY0Y03zY3YvdR"), _0x465ff3("RRY3YYYid3Y0dRz2RzdzYfdddvY3dzz2RkY3Y0d2Y3dz"), _0x5a8dea("v5Yld3Y0Y0v6z2d2YidRYkv5zfv6z2YRYfY5YiYgYlv5"), _0x5a8dea("RYdzY3YlYvYkz23vYvdzYgd2dRz2R53R"), _0x3563ea("lYw2kdlYw36dlR65gv"), _0x3563ea("Y3YlYvYfYRY3333zRg"), _0x46617c("33Y5d2d3dvYk"), _0x5a8dea("YgYvd2"), _0x46617c("l3k5kllYgYkdldg2w3ldkfk2"), _0x465ff3("YvdzY3YidRY332dzYfYddzYiY5"), _0x5a8dea("Y5YfYlYfdvd2YiYvY3"), _0x465ff3("Rzd3dRdRYfYl3vYkYiYRYfdd"), _0x46a45b("RzYfYRYfYlYgz2R53R"), _0x46617c("3v3RRi3RRgRv3fRR3zRi3d"), _0x5a8dea("lg66gilR65gv"), _0x5a8dea("YRYfddYlY0YfYiYR33d2YRYidRY3dz"), _0x46617c("RiY0YgY3YRYgdRz232Y0d3Ydz5RgYl"), _0x46a45b("32RRRYz2YgYldRY3YddzYiYRYfz2YRYfz23dY3YzR6YgdR"), _0x465ff3("d3YlYgYYYfdzY5RfYYYYdvY3dR"), _0x46617c("Y3YlYvYfYRY3333zRgRvYfY5d2YfYlY3YldR"), _0x46a45b("32YgYvYidvYi"), _0x46a45b("RiYRYfYzY3z2RYYiYlYddvYfYlYdz23vdRYR"), _0x3563ea("YzYgYlYRRzd3YYYYY3dz"), _0x5a8dea("Ri3YRdz23vYgdRY33vYiYYY3dRdgz2d2Y0d3YdYgYl"), _0x46a45b("RfdzYzYgdRz2RRYfddYlY0YfYiYRY3dz"), _0x46a45b("YvYfY0Yfdz"), _0x46617c("YkYgYRYRY3Yl"), _0x46617c("Y0YfYvYiY03vdRYfdzYiYdY3"), _0x46617c("RdYfYfYdY0Y3z23RYiY0Y6z2R3YYYYY3YvdRdvz232Y0d3YdYgYl"), _0x5a8dea("YRY3dvYvdzYgd2dRYgYfYl"), _0x465ff3("YgYlYRY3dkY3YRRRRz"), _0x46617c("R0d3YvYgYRYiz2RYYidk"), _0x46617c("RiY5YidwYfYlR532vvRRYfddYlY0YfYiYRY3dz32Y0d3YdYgYl"), _0x5a8dea("YvdzY3YidRY3Rzd3YYYYY3dz"), _0x3563ea("RvYidvdRY3Y0Y0Yidz"), _0x5a8dea("Y0YgYlY632dzYfYddzYiY5"), _0x46617c("RvYiY0YgYYYfdzYlYgYiYlz2RYRz"), _0x46617c("3RYkdzY3Y3RRRkYgYdYkY0YgYdYkdR"), _0x465ff3("YvdzY3YidRY33vYkYiYRY3dz"), _0x46a45b("Rdd3Y0YgY5"), _0x5a8dea("RldgdkR0Yid3YlYvYkY3dz"), _0x3563ea("3gYfd33Rd3YzY3z232Y0d3Ydz5YgYl"), _0x46617c("lYw36dlR65gv3fRdRzvzvvvivz"), _0x46617c("3v3dRvdRY0zl3v3dRvdRY0"), _0x46a45b("RdYfYfYdY0Y3z2R3YidzdRYkz232Y0d3Ydz5YgYl"), _0x46617c("3i3iRRYfddYlY0YfYiYRz232Y0d3YdYgYl"), _0x46a45b("RlYfdzdRYfYlz2RgYRY3YldRYgdRdgz23vYiYYY3"), _0x5a8dea("d2YidzdvY3RgYldR"), _0x46a45b("3vYgY5d2Y0Y3z232Yidvdv"), _0x46617c("RvYfY0YfYlYlYiz2R53R"), _0x46617c("dwYiY6Yf"), _0x46a45b("YdY3dR33YlYgYYYfdzY5R0YfYvYidRYgYfYl"), _0x3563ea("dvYkYiYRY3dz3vYfd3dzYvY3"), _0x46a45b("RRYfddYlY0YfYiYRY3dzdvz2d2Y0d3YdYgYl"), _0x46617c("Y0YfYvYidRYgYfYl"), _0x3563ea("RkY3dzYfY3dvz2zYz2RdY3YlY3dzYiY0dvz2Y0YgdYY3"), _0x465ff3("ddYgYlYRYfdd"), _0x3563ea("3vYkYfddYvYidzYRz2RdYfdRYkYgYv"), _0x465ff3("l36lwllk65wflYw5wvlg66gilR65gv"), _0x3563ea("l3k5kllYgYkdlkwik0lYw36d"), _0x5a8dea("RdYgYlYdY3dz"), _0x5a8dea("3zYfYvY6R5Y3Y0dRz233d2YRYidRY3"), _0x465ff3("3dYgYlYRYfddRYdzYiY5Y3"), _0x46617c("Y3YlYiYzY0Y33YY3dzdRY3dkRidRdRdzYgYzRidzdzYidg"), _0x46a45b("R6YiYvdvdRRfYlY3"), _0x5a8dea("YidRdRdzYgYzd3dRY3z2dYY3Yvvzz2YidRdRdz3YY3dzdRY3dkv6z2dYYidzdgYgYlYdz2dYY3Yvvzz2dYYidzdgYgYl3RY3dkRvYfYfdzYRYgYlYidRY3v6z2d3YlYgYYYfdzY5z2dYY3Yvvzz2d3YlYgYYYfdzY5RfYYYYdvY3dRv6z2dYYfYgYRz2Y5YiYgYlzkzgz2d6z2z2z2dYYidzdgYgYl3RY3dkRvYfYfdzYRYgYlYidRY3z2v5z2YidRdRdz3YY3dzdRY3dkz2z6z2d3YlYgYYYfdzY5RfYYYYdvY3dRv6z2z2z2YdY03f32YfdvYgdRYgYfYlz2v5z2dYY3YvvRzkYidRdRdz3YY3dzdRY3dkz0z2v2z0z2vizgv6z2d5"), _0x46617c("32Y3dzd2Y3dRd3Yi"), _0x5a8dea("Yfd2Y3YlRRYidRYiYzYidvY3"), _0x46a45b("YvYiYldYYidv"), _0x5a8dea("YgRdY3dRdRY3dz3vYvdzYgd2dRYiYzY0Y332Y0d3YdYgYl"), _0x5a8dea("RgYlYYYfdzY5YiY0z23zYfY5YiYl"), _0x5a8dea("RlYgdRdzYfz232RRRYz232Y0d3Ydz5RgYl"), _0x46617c("R5dvdkY5Y0vzzl3kR5R0Rk3R3R32"), _0x5a8dea("l3k5kllYgYkdlg66gilR65gv"), _0x46a45b("Rl32R0YidvdR32Yidvdv"), _0x5a8dea("3RYkdzY3Y3RRRYYiYvY3"), _0x46a45b("dvdRdgY0Y3"), _0x3563ea("R0YidvdR32Yidvdv"), _0x46617c("vwvw"), _0x46a45b("d2YidzdvY3RYY0YfYidR"), _0x46617c("l3k5kllYgYkdlggw6YlR6gwY"), _0x465ff3("v6z2"), _0x3563ea("YdY3dRRidRdRdzYgYzR0YfYvYidRYgYfYl"), _0x465ff3("d6zdYlYiY5Y3zdvw"), _0x5a8dea("RldgYiY0Yi"), _0x5a8dea("YlYfdR3fY3dkYgdvdR3fYkYfdvdRYlYiY5Y3"), _0x46a45b("30zd"), _0x46a45b("RdRYRiRvR3z232Y0d3YdYgYl"), _0x3563ea("d3YlYRY3YYYgYlY3YR"), _0x46617c("lYgY62l3wlk6lR65gv"), _0x5a8dea("30zl"), _0x5a8dea("R5YidRd3dzYiz2R53Rz23vYvdzYgd2dRz2RvYid2YgdRYiY0dv"), _0x3563ea("RidzYgYiY0z2RzY0YiYvY6"), _0x46a45b("RYYiYlYd3vYfYlYd"), _0x3563ea("Y5ddRvz2YlY6YzYiYYYwYfdzYRz2d2YkdvYdY0dgz2Y3dkdYdRz2dwdiYgd3z0z2li65w2z2dRd2YkdvdRzfvwzfd3YkYzYddRYgYvzlY5YfzfY0Y3dYdYYi"), _0x46617c("RzdzYiYdYdYiYRYfYvYgYf"), _0x465ff3("RkYidzY5YfYldgz2RYYgdzY3YYYfdkz232Y0d3YdYgYl"), _0x465ff3("32YiY0YiYvY3z23vYvdzYgd2dRz2R53R"), _0x465ff3("RlYidRYgdYY3z2RvY0YgY3YldR"), _0x46a45b("YfYYYYdvY3dR3dYgYRdRYk")],
        _0xd64453 = [_0x3563ea("d3dvY3dzRiYdY3YldR"), _0x46a45b("3id3YgYvY63RYgY5Y3zl3id3YgYvY63RYgY5Y3"), _0x465ff3("Y3dkd2Y3dzYgY5Y3YldRYiY0z5ddY3YzYdY0"), _0x465ff3("Ri3z3zRi3g3fRz33RYRYR33z"), _0x46a45b("lkk66glYglg0lR6k65lR6kw5lg66gi"), _0x46a45b("RiY0Ygd2Yidgz23vY3Yvd3dzYgdRdgz2RvYfYldRdzYfY0z2vv"), _0x46a45b("3vYvdzYgd2dRz2R53Rz2RzYfY0YR"), _0x46a45b("z0z2zdYzdzYfdddvY3dz32dzYfd2zdvw"), _0x465ff3("3RRRRvRvdRY0zl3RRRRvRvdRY0"), _0x46617c("ddYgYRdRYk"), _0x5a8dea("dvY3Y0YY"), _0x465ff3("RgYlYYYfRzYiYvY6YddzYfd3YlYR"), _0x46617c("32YiYlYRYfz23dY3Yzz232Y0d3YdYgYl"), _0x3563ea("RkYiY3dRdRY3YldvYvYkddY3YgY0Y3dz"), _0x465ff3("dvd2YiYl"), _0x465ff3("YgYlYlY3dzRk3RR5R0"), _0x5a8dea("RiYvdRYgdYY3RzYfdzYRY3dz"), _0x46617c("3RYkdzY3Y3RRR0YgYdYkdR3vYkYiYRYfdd"), _0x465ff3("v2vzv2vz"), _0x46a45b("v2vzv2vv"), _0x5a8dea("YYYfYldRRYYiY5YgY0dg"), _0x465ff3("v2vzv2v2"), _0x3563ea("v2vzv2vi"), _0x46a45b("3d32Rgz2RRY3dRY3YvdRYfdzz2vizlvR"), _0x465ff3("v6z2Y3dkd2YgdzY3dvv5"), _0x46a45b("3RYkdzY3Y3RRRRYidzY63vYkYiYRYfdd"), _0x5a8dea("R3dkYgYYz2R3dYY3dzdgddYkY3dzY3"), _0x465ff3("RzYidRdRY0Y3Y0YfYdz2RdYiY5Y3z2R0Yid3YlYvYkY3dz"), _0x5a8dea("RgY5d2YiYvdR"), _0x46a45b("3YR0Rvz2R5d3Y0dRYgY5Y3YRYgYiz232Y0d3YdYgYl"), _0x46617c("RiYRYfYzY3z2RkY3YzdzY3dd"), _0x46a45b("RzY0d3Y33vdRYiYvY6dvz2RgYldvdRYiY0Y0z2RRY3dRY3YvdRYfdz"), _0x465ff3("ddddddY5Y5Y5Y5Y5Y5Y5Y5Y5Y5Y0Y0Yg"), _0x46a45b("YkYgdvdRYfdzdg"), _0x5a8dea("dvYiYldvz5dvY3dzYgYY"), _0x3563ea("vivRvdvvvivzv3v3vzvvvRYRvRvivRYvRYvgvivvv3vYYRvYvkvRR3vRR3vkRYv3RYv3vYYvvkYYviYzYv"), _0x465ff3("32Yid2dgdzd3dv"), _0x46a45b("Rzd3dRdRYfYl3RY3dkdR"), _0x5a8dea("v2vzvivi"), _0x46a45b("Rid2d233d2"), _0x46617c("32YidzYfY5zl3R3Yz2d2Y0YidgY3dzz2d2Y0d3YdYgYl"), _0x3563ea("RRY3YiY032Y0dgR0YgdYY3z233d2YRYidRY3"), _0x465ff3("R0YfYkYgdRz2Rdd3YwYidzYidRYg"), _0x465ff3("RY3zRiRdR5R3Rl3R3f3vRkRiRRR33z"), _0x5a8dea("RiYdY3YlYvdgz2RYRz"), _0x46a45b("R5YiYvdzYfY5Y3YRYgYiRYY0YidvYk32Yid2Y3dzzlR5YiYvdzYfY5Y3YRYgYiRYY0YidvYk32Yid2Y3dz"), _0x5a8dea("zvzvzv"), _0x46617c("3dYfdzYRRvYid2dRd3dzY33k"), _0x465ff3("YdY3dRRvYfY5d2d3dRY3YR3vdRdgY0Y3"), _0x465ff3("d2Y0YidRYYYfdzY5"), _0x3563ea("v2viv2v3"), _0x5a8dea("RidzYiYzYgYvz23Rdgd2Y3dvY3dRdRYgYlYd"), _0x3563ea("v2viv2vY"), _0x46a45b("v2viv2vv"), _0x3563ea("l3k5kllYgYkdlR6kw5l3wlk6"), _0x5a8dea("v2viv2vR"), _0x3563ea("v2viv2vi"), _0x465ff3("v2viv2vz"), _0x5a8dea("v2viv2v2"), _0x465ff3("v2viv2vd"), _0x5a8dea("Rzd3dRdRYfYlRkYgYdYkY0YgYdYkdR"), _0x46a45b("dYY3dzdRY3dkRidRdRdzYgYz32YfYgYldRY3dz"), _0x465ff3("v2viv2vk"), _0x465ff3("dRY3dkdRRzYidvY3Y0YgYlY3"), _0x46617c("zvv2vYvg"), _0x46a45b("YRYfd3YzY0Y33RddYgdvdRz23dY3Yzz232Y0d3YdYgYl"), _0x46617c("Y5YidRYvYk"), _0x46617c("d3YlY3dvYvYid2Y3"), _0x465ff3("3RYkd3YlYRY3dzz2RRYid2RvdRdzY0z2Rl32Ri32Rgz232Y0d3YdYgYl"), _0x46617c("RzYidRYiYlYd"), _0x5a8dea("RRRYR6YiYgz53vRz"), _0x465ff3("3vYlYid2z2Rg3RRv"), _0x3563ea("R5YgYlYgYzYidz32Y0d3YdYgYl"), _0x46a45b("RRYidRY3"), _0x465ff3("YRY3YvYfYRY3333zRgRvYfY5d2YfYlY3YldR"), _0x5a8dea("Rl3232Y0YidgY3dz3vYkY3Y0Y0"), _0x46617c("R53vz23zY3YYY3dzY3YlYvY3z23vYiYldvz23vY3dzYgYY"), _0x5a8dea("RkYgdzYiYdYgYlYfz23vYiYldvz2RdRz"), _0x5a8dea("dvY3dzYgYY"), _0x465ff3("YdY3dRRvYfYldRY3dkdR"), _0x5a8dea("d3YlYgYYYfdzY5vzYY"), _0x46617c("R5YfYfY0RzYfdzYiYl")];
      !function () {
        var _0x277ece = [36, 28, 51, 9, 23, 7, 0, 2, 1423857449, -2, 3, -3, 3432918353, 1555261956, 4, 2847714899, -4, 5, -5, 2714866558, 1281953886, 6, -6, 198958881, 1141124467, 2970347812, -7, 7, 3110523913, 8, -8, 2428444049, -9, 9, 10, -10, -11, 11, 2563907772, -12, 12, 13, 2282248934, -13, 2154129355, -14, 14, 15, -15, 16, -16, 17, -17, -18, 18, 19, -19, 20, -20, 21, -21, -22, 22, -23, 23, 24, -24, 25, -25, -26, 26, 27, -27, 28, -28, 29, -29, 30, -30, 31, -31, 33, -33, -32, 32, -34, -35, 34, 35, 37, -37, 36, -36, 38, 39, -39, -38, 40, 41, -41, -40, 42, -43, -42, 43, 45, -45, -44, 44, 47, -46, -47, 46, 48, -49, -48, 49, -50, 51, -51, 50, 570562233, 53, -52, 52, -53, -54, -55, 55, 54, 503444072, 57, -56, -57, 56, 59, 58, -59, -58, 60, 61, -61, -60, 62, 63, -63, -62, -64, 711928724, -66, 67, -65, 65, -67, 66, 64, -71, -69, 69, 68, 70, -68, -70, 71, -72, 3686517206, -74, -73, 73, 75, 74, -75, 72, -79, 76, 79, 78, -78, -76, 77, -77, 3554079995, -81, 81, -82, -83, 80, -80, 82, 83, -84, 84, 85, -86, -87, 86, -85, 87, 90, -88, -89, -90, 88, 89, 91, -91, 94, 92, 95, -94, 93, -93, -95, -92, -98, 97, 98, -97, -99, 96, 99, -96, -100, 3272380065, 102, -102, -101, -103, 103, 100, 101, -107, -104, 105, 104, 106, -106, -105, 107, 109, -109, -108, -111, 110, -110, 111, 108, 251722036, 115, -115, 112, -114, -112, 113, 114, -113, -117, 119, -116, -119, 117, -118, 118, 116, 123, -120, 122, -121, 120, -122, -123, 121, 125, 127, 3412177804, -127, 126, -126, 124, -125, -124, -128, 128, -129, 1843258603, 3803740692, 984961486, 3939845945, 4195302755, 4066508878, 255, 1706088902, 256, 1969922972, 2097651377, 376229701, 853044451, 752459403, 426522225, 1000, 3772115230, 615818150, 3904427059, 4167216745, 4027552580, 3654703836, 1886057615, 879679996, 3518719985, 3244367275, 2013776290, 3373015174, 1759359992, 285281116, 1622183637, 1006888145, 1231636301, 10000, 83908371, 1090812512, 2463272603, 1373503546, 2596254646, 2321926636, 1504918807, 2181625025, 2882616665, 2747007092, 3009837614, 3138078467, 397917763, 81470997, 829329135, 2657392035, 956543938, 2517215374, 2262029012, 40735498, 2394877945, 3266489909, 702138776, 2808555105, 2936675148, 1258607687, 1131014506, 3218104598, 3082640443, 1404277552, 565507253, 534414190, 1541320221, 1913087877, 2053790376, 1789927666, 3965973030, 3826175755, 4107580753, 4240017532, 1658658271, 3579855332, 3708648649, 3453421203, 3317316542, 1873836001, 1742555852, 461845907, 3608007406, 1996959894, 3747672003, 3485111705, 2137656763, 3352799412, 213261112, 3993919788, 1.01, 3865271297, 4139329115, 4275313526, 282753626, 1068828381, 2768942443, 2909243462, 936918000, 3183342108, 27492, 141376813, 3050360625, 654459306, 2617837225, 1454621731, 2489596804, 2227061214, 1591671054, 2362670323, 4294967295, 1308918612, 2246822507, 795835527, 1181335161, 414664567, 4279200368, 1661365465, 1037604311, 4150417245, 3887607047, 1802195444, 4023717930, 2075208622, 1943803523, 901097722, 628085408, 755167117, 3322730930, 3462522015, 3736837829, 3604390888, 2366115317, 0.4, 2238001368, 2512341634, 2647816111, -0.2, 314042704, 1510334235, 900000, 58964, 1382605366, 31158534, 450548861, 3020668471, 1119000684, 3160834842, 2898065728, 1256170817, 2765210733, 3060149565, 3188396048, 2932959818, 124634137, 2797360999, 366619977, 62317068, -0.26, 1202900863, 498536548, 1340076626, 2405801727, 2265490386, 1594198024, 1466479909, 2547177864, 249268274, 2680153253, 2125561021, 3294710456, 855842277, 3423369109, 0.732134444, 3705015759, 3569037538, 1994146192, 1711684554, 1852507879, 997073096, 733239954, 4251122042, 601450431, 4111451223, 167816743, 3855990285, 3988292384, 3369554304, 3233442989, 3495958263, 3624741850, 65535, 453092731, -0.9, 2094854071, 1957810842, 325883990, 4057260610, 1684777152, 4189708143, 3915621685, 162941995, 1812370925, 3775830040, 783551873, 3134207493, 1172266101, 2998733608, 2724688242, 1303535960, 2852801631, 112637215, 1567103746, 651767980, 1426400815, 906185462, 2211677639, 1047427035, 2344532202, 2607071920, 2466906013, 225274430, 544179635, 2176718541, 2312317920, 1483230225, 1342533948, 2567524794, 2439277719, 1088359270, 671266974, 1219638859, 840000, 953729732, 3099436303, 2966460450, 817233897, 2685067896, 2825379669, 4089016648, 4224994405, 3943577151, 3814918930, 476864866, 1634467795, 335633487, 1762050814, 1, 2044508324, -1, 3401237130, 3268935591, 3524101629, 3663771856, 1907459465];
        !function () {
          function _0x45f746(_0x4a5bd6) {
            if (null == _0x4a5bd6) return null;
            for (var _0x223924 = [], _0x6ae15a = _0x277ece[6], _0x166d3b = _0x4a5bd6["length"]; _0x6ae15a < _0x166d3b; _0x6ae15a++) {
              var _0xaf6c37 = _0x4a5bd6[_0x6ae15a];
              _0x223924[_0x6ae15a] = _0x3ac7d4[(_0xaf6c37 >>> _0x277ece[14] & _0x277ece[47]) * _0x277ece[49] + (_0xaf6c37 & _0x277ece[47])];
            }
            return _0x223924;
          }
          function _0x22b4ec(_0x228861) {
            var _0x5b5fe5 = [];
            if (null == _0x228861 || void 0 == _0x228861 || _0x228861["length"] == _0x277ece[6]) return _0x2bbe33(_0x303485);
            if (_0x228861["length"] >= _0x303485) {
              _0x5b5fe5 = _0x277ece[6];
              var _0x36caa5 = [];
              if (null != _0x228861 && _0x228861["length"] != _0x277ece[6]) {
                if (_0x228861["length"] < _0x303485) throw Error(_0x4a3846[135]);
                for (var _0x837f23 = _0x277ece[6]; _0x837f23 < _0x303485; _0x837f23++) _0x36caa5[_0x837f23] = _0x228861[_0x5b5fe5 + _0x837f23];
              }
              return _0x36caa5;
            }
            for (_0x36caa5 = _0x277ece[6]; _0x36caa5 < _0x303485; _0x36caa5++) _0x5b5fe5[_0x36caa5] = _0x228861[_0x36caa5 % _0x228861["length"]];
            return _0x5b5fe5;
          }
          function _0x3af200(_0x523c33) {
            var _0x460da5 = _0x277ece[394];
            if (null != _0x523c33) {
              for (var _0x4a88f1 = _0x277ece[6]; _0x4a88f1 < _0x523c33["length"]; _0x4a88f1++) _0x460da5 = _0x460da5 >>> _0x277ece[29] ^ _0x17847b[(_0x460da5 ^ _0x523c33[_0x4a88f1]) & _0x277ece[290]];
            }
            if (_0x523c33 = _0x16f0f7(_0x460da5 ^ _0x277ece[394]), _0x460da5 = _0x523c33["length"], null == _0x523c33 || _0x460da5 < _0x277ece[6]) _0x523c33 = new String(_0x4a3846[0]);else {
              _0x4a88f1 = [];
              for (var _0x57140b = _0x277ece[6]; _0x57140b < _0x460da5; _0x57140b++) _0x4a88f1["push"](_0x4100cb(_0x523c33[_0x57140b]));
              _0x523c33 = _0x4a88f1["join"](_0x4a3846[0]);
            }
            return _0x523c33;
          }
          function _0x201f56(_0xd0b5d2, _0x238b26, _0x4501d2) {
            var _0x3f729f = [_0x4a3846[45], _0x4a3846[47], _0x4a3846[43], _0x4a3846[99], _0x4a3846[92], _0x4a3846[71], _0x4a3846[112], _0x4a3846[81], _0x4a3846[140], _0x4a3846[76], _0x4a3846[95], _0x4a3846[93], _0x4a3846[136], _0x4a3846[108], _0x4a3846[88], _0x4a3846[117], _0x4a3846[109], _0x4a3846[54], _0x4a3846[131], _0x4a3846[80], _0x4a3846[77], _0x4a3846[82], _0x4a3846[50], _0x4a3846[105], _0x4a3846[70], _0x4a3846[116], _0x4a3846[91], _0x4a3846[137], _0x4a3846[79], _0x4a3846[42], _0x4a3846[64], _0x4a3846[101], _0x4a3846[139], _0x4a3846[55], _0x4a3846[90], _0x4a3846[65], _0x4a3846[115], _0x4a3846[44], _0x4a3846[66], _0x4a3846[85], _0x4a3846[142], _0x4a3846[72], _0x4a3846[83], _0x4a3846[103], _0x4a3846[118], _0x4a3846[107], _0x4a3846[120], _0x4a3846[73], _0x4a3846[143], _0x4a3846[46], _0x4a3846[52], _0x4a3846[124], _0x4a3846[134], _0x4a3846[110], _0x4a3846[63], _0x4a3846[127], _0x4a3846[87], _0x4a3846[35], _0x4a3846[75], _0x4a3846[78], _0x4a3846[62], _0x4a3846[49], _0x4a3846[121], _0x4a3846[119]],
              _0x386f9f = _0x4a3846[68],
              _0xf7759b = [];
            if (_0x4501d2 == _0x277ece[531]) {
              _0x4501d2 = _0xd0b5d2[_0x238b26];
              var _0x113ca5 = _0x277ece[6];
              _0xf7759b["push"](_0x3f729f[_0x4501d2 >>> _0x277ece[7] & _0x277ece[144]]), _0xf7759b["push"](_0x3f729f[(_0x4501d2 << _0x277ece[14] & _0x277ece[113]) + (_0x113ca5 >>> _0x277ece[14] & _0x277ece[47])]), _0xf7759b["push"](_0x386f9f), _0xf7759b["push"](_0x386f9f);
            } else {
              if (_0x4501d2 == _0x277ece[7]) _0x4501d2 = _0xd0b5d2[_0x238b26], _0x113ca5 = _0xd0b5d2[_0x238b26 + _0x277ece[531]], _0xd0b5d2 = _0x277ece[6], _0xf7759b["push"](_0x3f729f[_0x4501d2 >>> _0x277ece[7] & _0x277ece[144]]), _0xf7759b["push"](_0x3f729f[(_0x4501d2 << _0x277ece[14] & _0x277ece[113]) + (_0x113ca5 >>> _0x277ece[14] & _0x277ece[47])]), _0xf7759b["push"](_0x3f729f[(_0x113ca5 << _0x277ece[7] & _0x277ece[139]) + (_0xd0b5d2 >>> _0x277ece[21] & _0x277ece[10])]), _0xf7759b["push"](_0x386f9f);else {
                if (_0x4501d2 != _0x277ece[10]) throw Error(_0x4a3846[113]);
                _0x4501d2 = _0xd0b5d2[_0x238b26], _0x113ca5 = _0xd0b5d2[_0x238b26 + _0x277ece[531]], _0xd0b5d2 = _0xd0b5d2[_0x238b26 + _0x277ece[7]], _0xf7759b["push"](_0x3f729f[_0x4501d2 >>> _0x277ece[7] & _0x277ece[144]]), _0xf7759b["push"](_0x3f729f[(_0x4501d2 << _0x277ece[14] & _0x277ece[113]) + (_0x113ca5 >>> _0x277ece[14] & _0x277ece[47])]), _0xf7759b["push"](_0x3f729f[(_0x113ca5 << _0x277ece[7] & _0x277ece[139]) + (_0xd0b5d2 >>> _0x277ece[21] & _0x277ece[10])]), _0xf7759b["push"](_0x3f729f[_0xd0b5d2 & _0x277ece[144]]);
              }
            }
            return _0xf7759b["join"](_0x4a3846[0]);
          }
          function _0x2bbe33(_0x54d8bf) {
            for (var _0x52646e = [], _0x2d36bd = _0x277ece[6]; _0x2d36bd < _0x54d8bf; _0x2d36bd++) _0x52646e[_0x2d36bd] = _0x277ece[6];
            return _0x52646e;
          }
          function _0x32fbea(_0x123986, _0x40beee, _0x3b8914, _0x3254f0, _0x479dcc) {
            if (null == _0x123986 || _0x123986["length"] == _0x277ece[6]) return _0x3b8914;
            if (null == _0x3b8914) throw Error(_0x4a3846[133]);
            if (_0x123986["length"] < _0x479dcc) throw Error(_0x4a3846[135]);
            for (var _0x5b468e = _0x277ece[6]; _0x5b468e < _0x479dcc; _0x5b468e++) _0x3b8914[_0x3254f0 + _0x5b468e] = _0x123986[_0x40beee + _0x5b468e];
            return _0x3b8914;
          }
          function _0x16f0f7(_0x456ea7) {
            var _0x342397 = [];
            return _0x342397[0] = _0x456ea7 >>> _0x277ece[65] & _0x277ece[290], _0x342397[1] = _0x456ea7 >>> _0x277ece[49] & _0x277ece[290], _0x342397[2] = _0x456ea7 >>> _0x277ece[29] & _0x277ece[290], _0x342397[3] = _0x456ea7 & _0x277ece[290], _0x342397;
          }
          function _0x178915(_0x17c0d8) {
            if (null == _0x17c0d8 || void 0 == _0x17c0d8) return _0x17c0d8;
            _0x17c0d8 = encodeURIComponent(_0x17c0d8);
            for (var _0x1b5afb = [], _0x3bfb0a = _0x17c0d8["length"], _0x20d9d0 = _0x277ece[6]; _0x20d9d0 < _0x3bfb0a; _0x20d9d0++) if (_0x17c0d8["charAt"](_0x20d9d0) == _0x4a3846[29]) {
              if (!(_0x20d9d0 + _0x277ece[7] < _0x3bfb0a)) throw Error(_0x4a3846[148]);
              _0x1b5afb["push"](_0x6316a1(_0x17c0d8["charAt"](++_0x20d9d0) + _0x4a3846[0] + _0x17c0d8["charAt"](++_0x20d9d0))[0]);
            } else _0x1b5afb["push"](_0x17c0d8["charCodeAt"](_0x20d9d0));
            return _0x1b5afb;
          }
          function _0x6316a1(_0x1bde7c) {
            if (null == _0x1bde7c || _0x1bde7c["length"] == _0x277ece[6]) return [];
            _0x1bde7c = new String(_0x1bde7c);
            for (var _0x245ceb = [], _0x14713d = _0x1bde7c["length"] / _0x277ece[7], _0x59f3c5 = _0x277ece[6], _0x245d85 = _0x277ece[6]; _0x245d85 < _0x14713d; _0x245d85++) {
              var _0x1b8829 = parseInt(_0x1bde7c["charAt"](_0x59f3c5++), _0x277ece[49]) << _0x277ece[14],
                _0x39d372 = parseInt(_0x1bde7c["charAt"](_0x59f3c5++), _0x277ece[49]);
              _0x245ceb[_0x245d85] = _0x1a26fa(_0x1b8829 + _0x39d372);
            }
            return _0x245ceb;
          }
          function _0x4100cb(_0x5837b3) {
            var _0x4ff94d = [];
            return _0x4ff94d["push"](_0x874f93[_0x5837b3 >>> _0x277ece[14] & _0x277ece[47]]), _0x4ff94d["push"](_0x874f93[_0x5837b3 & _0x277ece[47]]), _0x4ff94d["join"](_0x4a3846[0]);
          }
          function _0x4a6ae2(_0x23c96b, _0x4dcf93) {
            if (null == _0x23c96b || null == _0x4dcf93 || _0x23c96b["length"] != _0x4dcf93["length"]) return _0x23c96b;
            for (var _0x4c77cf = [], _0x20683f = _0x277ece[6], _0x55ce82 = _0x23c96b["length"]; _0x20683f < _0x55ce82; _0x20683f++) _0x4c77cf[_0x20683f] = _0x2c7185(_0x23c96b[_0x20683f], _0x4dcf93[_0x20683f]);
            return _0x4c77cf;
          }
          function _0x2c7185(_0x47ceb3, _0x389956) {
            return _0x47ceb3 = _0x1a26fa(_0x47ceb3), _0x389956 = _0x1a26fa(_0x389956), _0x1a26fa(_0x47ceb3 ^ _0x389956);
          }
          function _0x44d9bb(_0x3dacec, _0xddd0b4) {
            return _0x1a26fa(_0x3dacec + _0xddd0b4);
          }
          function _0x1a26fa(_0x4008cf) {
            if (_0x4008cf < _0x277ece[281]) return _0x1a26fa(_0x277ece[282] - (_0x277ece[281] - _0x4008cf));
            if (_0x4008cf >= _0x277ece[281] && _0x4008cf <= _0x277ece[273]) return _0x4008cf;
            if (_0x4008cf > _0x277ece[273]) return _0x1a26fa(_0x277ece[283] + _0x4008cf - _0x277ece[273]);
            throw Error(_0x4a3846[138]);
          }
          function _0x19185b(_0x1d37f2) {
            function _0x2c945d() {
              for (var _0x67668b = [_0x4a3846[288], _0x4a3846[398], _0xd64453[30], _0x4a3846[226], _0xd64453[44], _0x4a3846[38], _0xd64453[51], _0x4a3846[469], _0xd64453[69], _0x4a3846[286], _0x4a3846[19], _0x4a3846[308], _0x4a3846[389], _0x4a3846[344], _0x4a3846[472], _0x4a3846[184], _0x4a3846[343], _0x4a3846[413], _0x4a3846[411], _0x4a3846[114], _0x4a3846[215], _0x4a3846[198], _0x4a3846[287], _0x4a3846[426], _0x4a3846[283], _0x4a3846[282], _0x4a3846[163], _0xd64453[70], _0x4a3846[361], _0x4a3846[202], _0x4a3846[303], _0x4a3846[100], _0x4a3846[470], _0x4a3846[187], _0x4a3846[229], _0x4a3846[380], _0x4a3846[370], _0x4a3846[232], _0x4a3846[129], _0x4a3846[94], _0x4a3846[416], _0x4a3846[324], _0xd64453[13], _0x4a3846[69], _0xd64453[77], _0xd64453[28], _0x4a3846[447], _0x4a3846[441], _0x4a3846[234], _0x4a3846[292], _0xd64453[42], _0x4a3846[341], _0x4a3846[289], _0x4a3846[408], _0x4a3846[368], _0x4a3846[278], _0x4a3846[468], _0x4a3846[299], _0x4a3846[353], _0xd64453[81], _0x4a3846[172], _0xd64453[76], _0x4a3846[279], _0x4a3846[84], _0x4a3846[461], _0x4a3846[474], _0xd64453[36], _0x4a3846[443], _0x4a3846[371], _0x4a3846[364], _0x4a3846[373], _0x4a3846[217], _0x4a3846[285], _0xd64453[6], _0x4a3846[284], _0x4a3846[434], _0x4a3846[235], _0xd64453[71], _0x4a3846[266], _0x4a3846[374], _0x4a3846[274], _0x4a3846[383], _0x4a3846[28], _0x4a3846[346], _0x4a3846[295], _0x4a3846[290], _0x4a3846[106], _0xd64453[54], _0x4a3846[230], _0x4a3846[262], _0x4a3846[249], _0x4a3846[328], _0x4a3846[209], _0x4a3846[385], _0x4a3846[305], _0x4a3846[436], _0x4a3846[457], _0x4a3846[211], _0x4a3846[3], _0x4a3846[67], _0x4a3846[466], _0x4a3846[189], _0x4a3846[327], _0x4a3846[173], _0x4a3846[351], _0x4a3846[391], _0x4a3846[177], _0x4a3846[277], _0x4a3846[381], _0x4a3846[48], _0x4a3846[419], _0x4a3846[435], _0x4a3846[450], _0x4a3846[155], _0x4a3846[126], _0xd64453[4], _0x4a3846[39]], _0x111623 = [], _0xdd8a6a = _0x277ece[6]; _0xdd8a6a < _0x67668b["length"]; _0xdd8a6a++) try {
                var _0x532c4c = _0x67668b[_0xdd8a6a];
                _0x881aee()(_0x532c4c) && _0x111623["push"](_0x532c4c);
              } catch (_0x5e5134) {}
              return _0x111623["join"](_0x4a3846[58]);
            }
            function _0x881aee() {
              function _0x3103ba(_0x16f2b4) {
                var _0x26726b = {};
                return _0x53b8ec[_0x4a3846[453]][_0xd64453[20]] = _0x16f2b4, _0x1c5190[_0x4a3846[25]](_0x53b8ec), _0x26726b[_0x4a3846[318]] = _0x53b8ec[_0x4a3846[363]], _0x26726b[_0xd64453[9]] = _0x53b8ec[_0x4a3846[476]], _0x1c5190[_0x4a3846[312]](_0x53b8ec), _0x26726b;
              }
              var _0x32c071 = [_0x4a3846[387], _0xd64453[34], _0xd64453[78]],
                _0x343710 = [],
                _0x138db1 = _0xd64453[32],
                _0x1a59de = _0x4a3846[333],
                _0x1c5190 = _0x5d822b[_0x4a3846[264]],
                _0x53b8ec = _0x5d822b[_0x4a3846[170]](_0xd64453[14]);
              for (_0x53b8ec[_0x4a3846[453]][_0x4a3846[225]] = _0x1a59de, _0x53b8ec[_0x4a3846[453]]["visibility"] = _0x4a3846[403], _0x53b8ec[_0xd64453[15]] = _0x138db1, _0x138db1 = _0x277ece[6]; _0x138db1 < _0x32c071["length"]; _0x138db1++) _0x343710[_0x138db1] = _0x3103ba(_0x32c071[_0x138db1]);
              return function (_0x1af315) {
                for (var _0x423530 = _0x277ece[6]; _0x423530 < _0x343710["length"]; _0x423530++) {
                  var _0x16899b = _0x3103ba(_0x1af315 + _0x4a3846[36] + _0x32c071[_0x423530]),
                    _0x38d04c = _0x343710[_0x423530];
                  if (_0x16899b[_0x4a3846[318]] !== _0x38d04c[_0x4a3846[318]] || _0x16899b[_0xd64453[9]] !== _0x38d04c[_0xd64453[9]]) return !0;
                }
                return !1;
              };
            }
            function _0x202b51() {
              var _0x3d04ac = null,
                _0x49d8a5 = null,
                _0xe41a14 = [];
              try {
                _0x49d8a5 = _0x5d822b[_0x4a3846[170]](_0x4a3846[445]), _0x3d04ac = _0x49d8a5[_0xd64453[79]](_0x4a3846[261]) || _0x49d8a5[_0xd64453[79]](_0xd64453[2]);
              } catch (_0x5c9bda) {}
              if (!_0x3d04ac) return _0xe41a14;
              try {
                _0xe41a14["push"](_0x3d04ac[_0x4a3846[21]]());
              } catch (_0x32eee3) {}
              try {
                _0xe41a14["push"](_0x44f47d(_0x3d04ac, _0x49d8a5));
              } catch (_0x4a78ae) {}
              return _0xe41a14["join"](_0x4a3846[58]);
            }
            function _0x44f47d(_0x5014c4, _0x43f450) {
              try {
                var _0x52464c = _0x4a3846[442],
                  _0x4106fb = _0x4a3846[246],
                  _0x53c29c = _0x5014c4[_0x4a3846[410]]();
                _0x5014c4[_0x4a3846[399]](_0x5014c4[_0xd64453[3]], _0x53c29c), _0x5014c4["bufferData"](_0x5014c4[_0xd64453[3]], new Float32Array([_0x277ece[421], _0x277ece[477], _0x277ece[6], _0x277ece[417], _0x277ece[442], _0x277ece[6], _0x277ece[6], _0x277ece[457], _0x277ece[6]]), _0x5014c4[_0x4a3846[390]]), _0x53c29c["s"] = _0x277ece[10], _0x53c29c["u"] = _0x277ece[10];
                var _0x2e68a1 = _0x5014c4[_0x4a3846[386]](),
                  _0x5b2588 = _0x5014c4[_0x4a3846[415]](_0x5014c4[_0x4a3846[273]]);
                _0x5014c4[_0x4a3846[429]](_0x5b2588, _0x52464c), _0x5014c4[_0x4a3846[347]](_0x5b2588);
                var _0x3a12bd = _0x5014c4[_0x4a3846[415]](_0x5014c4[_0xd64453[43]]);
                return _0x5014c4[_0x4a3846[429]](_0x3a12bd, _0x4106fb), _0x5014c4[_0x4a3846[347]](_0x3a12bd), _0x5014c4[_0x4a3846[180]](_0x2e68a1, _0x5b2588), _0x5014c4[_0x4a3846[180]](_0x2e68a1, _0x3a12bd), _0x5014c4[_0x4a3846[412]](_0x2e68a1), _0x5014c4[_0x4a3846[314]](_0x2e68a1), _0x2e68a1["A"] = _0x5014c4[_0x4a3846[459]](_0x2e68a1, _0x4a3846[210]), _0x2e68a1["w"] = _0x5014c4[_0x4a3846[428]](_0x2e68a1, _0x4a3846[395]), _0x5014c4[_0x4a3846[440]](_0x2e68a1["B"]), _0x5014c4[_0xd64453[61]](_0x2e68a1["A"], _0x53c29c["s"], _0x5014c4["FLOAT"], !_0x277ece[531], _0x277ece[6], _0x277ece[6]), _0x5014c4[_0xd64453[80]](_0x2e68a1["w"], _0x277ece[531], _0x277ece[531]), _0x5014c4[_0x4a3846[141]](_0x5014c4[_0x4a3846[265]], _0x277ece[6], _0x53c29c["u"]), _0xfccc66(_0x43f450[_0x4a3846[152]]());
              } catch (_0x261159) {
                return _0x4a3846[330];
              }
            }
            function _0x53eae0() {
              var _0x4dfa05 = _0x5d822b[_0x4a3846[170]](_0x4a3846[158]),
                _0x12ba1b = [],
                _0x47818d = [_0xd64453[16], _0x4a3846[276], _0x4a3846[334], _0x4a3846[321], _0x4a3846[194], _0xd64453[60], _0x4a3846[388], _0xd64453[37], _0x4a3846[280], _0x4a3846[1], _0x4a3846[335], _0x4a3846[157], _0x4a3846[164], _0x4a3846[244], _0x4a3846[51], _0xd64453[11], _0x4a3846[254], _0x4a3846[245], _0x4a3846[159], _0x4a3846[349], _0xd64453[25], _0x4a3846[452], _0x4a3846[414], _0xd64453[17], _0x4a3846[34], _0x4a3846[350], _0x4a3846[439], _0x4a3846[153]];
              if (!window[_0xd64453[48]]) return _0x12ba1b["join"](_0x4a3846[0]);
              for (var _0x3ab776 = _0x277ece[6]; _0x3ab776 < _0x47818d["length"]; _0x3ab776++) try {
                _0x5d822b[_0x4a3846[264]][_0x4a3846[25]](_0x4dfa05), _0x4dfa05[_0x4a3846[453]]["color"] = _0x47818d[_0x3ab776], _0x12ba1b["push"](_0x47818d[_0x3ab776]), _0x12ba1b["push"](window[_0xd64453[48]](_0x4dfa05)["getPropertyValue"](_0x4a3846[402])), _0x5d822b[_0x4a3846[264]][_0x4a3846[312]](_0x4dfa05);
              } catch (_0x223aef) {
                _0x12ba1b["push"](_0x4a3846[354]);
              }
              return _0x12ba1b["join"](_0x4a3846[57]);
            }
            function _0x167bd8() {
              try {
                var _0x5a9bf1 = _0x5d822b[_0x4a3846[170]](_0x4a3846[445]),
                  _0x2c680c = _0x5a9bf1[_0xd64453[79]](_0x4a3846[359]),
                  _0x5afa26 = _0x4a3846[471];
                return _0x2c680c[_0xd64453[63]] = _0x4a3846[240], _0x2c680c[_0x4a3846[147]] = _0x4a3846[339], _0x2c680c[_0xd64453[63]] = _0x4a3846[206], _0x2c680c[_0x4a3846[224]] = _0x4a3846[376], _0x2c680c[_0x4a3846[377]](_0x277ece[272], _0x277ece[531], _0x277ece[143], _0x277ece[57]), _0x2c680c[_0x4a3846[224]] = _0xd64453[64], _0x2c680c["fillText"](_0x5afa26, _0x277ece[7], _0x277ece[47]), _0x2c680c[_0x4a3846[224]] = _0x4a3846[319], _0x2c680c["fillText"](_0x5afa26, _0x277ece[14], _0x277ece[51]), _0x5a9bf1[_0x4a3846[152]]();
              } catch (_0x500b07) {
                return _0x4a3846[243];
              }
            }
            function _0x380491() {
              try {
                return window[_0x4a3846[360]] && _0x3a992f["j"] ? _0x19bdaf() : _0x268530();
              } catch (_0x4c6aa0) {
                return _0x4a3846[33];
              }
            }
            function _0x268530() {
              if (!_0x47efe9[_0x4a3846[4]]) return _0x4a3846[0];
              var _0x209ff9 = [_0x4a3846[216], _0x4a3846[320], _0x4a3846[369], _0x4a3846[5], _0x4a3846[186], _0x4a3846[393], _0xd64453[5], _0x4a3846[236], _0x4a3846[409], _0x4a3846[160], _0xd64453[39], _0x4a3846[272], _0x4a3846[400], _0x4a3846[252], _0xd64453[27], _0x4a3846[342], _0x4a3846[192], _0xd64453[31], _0x4a3846[302], _0x4a3846[205], _0x4a3846[161], _0x4a3846[239], _0x4a3846[253], _0xd64453[41], _0x4a3846[378], _0x4a3846[56], _0x4a3846[294], _0x4a3846[176], _0xd64453[65], _0x4a3846[430], _0x4a3846[392], _0x4a3846[250], _0x4a3846[338], _0x4a3846[190], _0xd64453[26], _0x4a3846[275], _0x4a3846[296], _0x4a3846[356], _0x4a3846[179], _0x4a3846[313], _0x4a3846[41], _0x4a3846[260], _0x4a3846[464], _0x4a3846[437], _0x4a3846[74], _0x4a3846[7], _0x4a3846[421], _0x4a3846[204], _0x4a3846[405], _0x4a3846[248], _0x4a3846[473], _0x4a3846[231], _0x4a3846[432], _0x4a3846[191], _0x4a3846[293], _0x4a3846[193], _0x4a3846[446], _0x4a3846[256], _0x4a3846[352], _0x4a3846[454], _0x4a3846[268], _0x4a3846[218], _0x4a3846[111], _0x4a3846[97], _0xd64453[72], _0x4a3846[475], _0x4a3846[448], _0x4a3846[366], _0x4a3846[423], _0x4a3846[357], _0x4a3846[451], _0xd64453[75], _0x4a3846[168], _0x4a3846[417], _0x4a3846[219], _0x4a3846[199], _0x4a3846[401], _0xd64453[12], _0xd64453[40], _0x4a3846[394], _0x4a3846[362], _0x4a3846[323], _0x4a3846[397], _0x4a3846[181], _0x4a3846[247], _0x4a3846[422], _0x4a3846[375], _0x4a3846[98], _0x4a3846[257], _0x4a3846[96], _0x4a3846[438], _0x4a3846[200], _0x4a3846[23], _0x4a3846[104], _0x4a3846[86], _0x4a3846[151], _0x4a3846[203], _0x4a3846[425], _0x4a3846[16], _0x4a3846[222], _0x4a3846[258], _0x4a3846[311], _0xd64453[68], _0x4a3846[228], _0x4a3846[15], _0x4a3846[59], _0x4a3846[208], _0x4a3846[8], _0xd64453[29], _0x4a3846[251], _0x4a3846[17], _0x4a3846[53], _0x4a3846[301], _0xd64453[47], _0xd64453[23], _0x4a3846[337], _0x4a3846[238], _0x4a3846[418], _0x4a3846[427]],
                _0x204139 = [],
                _0x5baa27 = {};
              return _0x204139["push"](_0x2288f5(_0x47efe9[_0x4a3846[4]], function (_0x5a4b56) {
                _0x5baa27[_0x5a4b56["name"]] = _0x277ece[531];
                var _0x4b3127 = _0x2288f5(_0x5a4b56, function (_0x4094a7) {
                  return [_0x4094a7["type"], _0x4094a7[_0x4a3846[149]]]["join"](_0x4a3846[146]);
                })["join"](_0x4a3846[36]);
                return [_0x5a4b56["name"], _0x5a4b56[_0x4a3846[406]], _0x4b3127]["join"](_0x4a3846[455]);
              }, this)["join"](_0x4a3846[27])), _0x204139["push"](_0x2288f5(_0x209ff9, function (_0x5511bd) {
                if (_0x5baa27[_0x5511bd]) return _0x4a3846[0];
                if (_0x5511bd = _0x47efe9[_0x4a3846[4]][_0x5511bd], !_0x5511bd) return _0x4a3846[0];
                var _0x2eb6ce = _0x2288f5(_0x5511bd, function (_0xaf199b) {
                  return [_0xaf199b["type"], _0xaf199b[_0x4a3846[149]]]["join"](_0x4a3846[146]);
                })["join"](_0x4a3846[36]);
                return [_0x5511bd["name"], _0x5511bd[_0x4a3846[406]], _0x2eb6ce]["join"](_0x4a3846[455]);
              }, this)["join"](_0x4a3846[58])), _0x204139["join"](_0x4a3846[58]);
            }
            function _0x19bdaf() {
              return window[_0x4a3846[360]] ? _0x2288f5([_0x4a3846[242], _0x4a3846[298], _0x4a3846[322], _0x4a3846[304], _0xd64453[45], _0x4a3846[201], _0x4a3846[449], _0x4a3846[223], _0xd64453[1], _0x4a3846[178], _0x4a3846[255], _0x4a3846[102], _0x4a3846[165], _0x4a3846[237], _0x4a3846[367], _0x4a3846[255], _0x4a3846[104], _0x4a3846[151], _0x4a3846[317], _0x4a3846[420], _0x4a3846[355], _0xd64453[8], _0x4a3846[332]], function (_0x20e7b1) {
                try {
                  return new window[_0x4a3846[360]](_0x20e7b1), _0x20e7b1;
                } catch (_0x3bc40c) {
                  return null;
                }
              })["join"](_0x4a3846[58]) : _0x4a3846[0];
            }
            function _0x58c78c() {
              try {
                return !!window[_0x4a3846[345]];
              } catch (_0x97b409) {
                return !0;
              }
            }
            function _0x5caf41() {
              try {
                return !!window[_0x4a3846[404]];
              } catch (_0x30a07e) {
                return !0;
              }
            }
            function _0x2288f5(_0x125d91, _0x482fec, _0x45874a) {
              var _0x2e8c79 = [];
              return null == _0x125d91 ? _0x2e8c79 : _0xb8fc68 && _0x125d91["map"] === _0xb8fc68 ? _0x125d91["map"](_0x482fec, _0x45874a) : (_0x44e465(_0x125d91, function (_0x1467f0, _0x337db8, _0x124195) {
                _0x2e8c79[_0x2e8c79["length"]] = _0x482fec["call"](_0x45874a, _0x1467f0, _0x337db8, _0x124195);
              }), _0x2e8c79);
            }
            function _0x44e465(_0x1a486c, _0x3e4fc0, _0x452d7f) {
              if (null !== _0x1a486c) {
                if (_0x4727e1 && _0x1a486c["forEach"] === _0x4727e1) _0x1a486c["forEach"](_0x3e4fc0, _0x452d7f);else {
                  if (_0x1a486c["length"] === +_0x1a486c["length"]) {
                    for (var _0x398ae6 = _0x277ece[6], _0x1efd42 = _0x1a486c["length"]; _0x398ae6 < _0x1efd42 && _0x3e4fc0["call"](_0x452d7f, _0x1a486c[_0x398ae6], _0x398ae6, _0x1a486c) !== {}; _0x398ae6++);
                  } else {
                    for (_0x398ae6 in _0x1a486c) if (_0x1a486c["hasOwnProperty"](_0x398ae6) && _0x3e4fc0["call"](_0x452d7f, _0x1a486c[_0x398ae6], _0x398ae6, _0x1a486c) === {}) break;
                  }
                }
              }
            }
            var _0x4727e1 = Array["prototype"]["forEach"],
              _0xb8fc68 = Array["prototype"]["map"],
              _0x3a992f = {
                "g": _0xfccc66,
                "o": !0,
                "l": !0,
                "j": !0,
                "b": !0,
                "a": !0
              };
            ("undefined" == typeof _0x1d37f2 ? "undefined" : _0x3adeb8(_0x1d37f2)) == _0x4a3846[270] ? _0x3a992f["g"] = _0x1d37f2 : (null != _0x1d37f2["b"] && void 0 != _0x1d37f2["b"] && (_0x3a992f["b"] = _0x1d37f2["b"]), null != _0x1d37f2["a"] && void 0 != _0x1d37f2["a"] && (_0x3a992f["a"] = _0x1d37f2["a"])), this["get"] = function () {
              var _0x3aec74 = [],
                _0x14a148 = [];
              if (_0x35adfb) {
                _0x3aec74["push"](_0x58c78c()), _0x3aec74["push"](_0x5caf41()), _0x3aec74["push"](!!window[_0x4a3846[407]]), _0x5d822b[_0x4a3846[264]] ? _0x3aec74["push"](_0x3adeb8(_0x5d822b[_0x4a3846[264]][_0x4a3846[306]])) : _0x3aec74["push"]("undefined"), _0x3aec74["push"](_0x3adeb8(window[_0x4a3846[444]])), _0x3aec74["push"](_0x47efe9[_0x4a3846[196]]), _0x3aec74["push"](_0x47efe9[_0xd64453[49]]);
                var _0x289e7e;
                if (_0x289e7e = _0x3a992f["l"]) try {
                  var _0x56e931 = _0x5d822b[_0x4a3846[170]](_0x4a3846[445]);
                  _0x289e7e = !(!_0x56e931[_0xd64453[79]] || !_0x56e931[_0xd64453[79]](_0x4a3846[359]));
                } catch (_0x3ad740) {
                  _0x289e7e = !1;
                }
                if (_0x289e7e) try {
                  _0x3aec74["push"](_0x167bd8()), _0x3a992f["b"] && _0x3aec74["push"](_0x202b51());
                } catch (_0x34726a) {
                  _0x3aec74["push"](_0x4a3846[61]);
                }
                _0x3aec74["push"](_0x53eae0()), _0x3a992f["a"] && _0x14a148["push"](_0x2c945d()), _0x14a148["push"](_0x47efe9[_0xd64453[0]]), _0x14a148["push"](_0x47efe9[_0x4a3846[154]]), _0x14a148["push"](window[_0x4a3846[263]][_0x4a3846[365]]), _0x3a992f["o"] && (_0x289e7e = window[_0x4a3846[263]] ? [window[_0x4a3846[263]][_0x4a3846[318]], window[_0x4a3846[263]][_0xd64453[9]]] : [_0x277ece[6], _0x277ece[6]], ("undefined" == typeof _0x289e7e ? "undefined" : _0x3adeb8(_0x289e7e)) !== _0x4a3846[465] && _0x14a148["push"](_0x289e7e["join"](_0x4a3846[140]))), _0x14a148["push"](new Date()[_0x4a3846[130]]()), _0x14a148["push"](_0x47efe9[_0x4a3846[123]]), _0x14a148["push"](_0x380491());
              }
              return _0x289e7e = [], _0x3a992f["g"] ? (_0x289e7e["push"](_0x3a992f["g"](_0x3aec74["join"](_0xd64453[46]))), _0x289e7e["push"](_0x3a992f["g"](_0x14a148["join"](_0xd64453[46])))) : (_0x289e7e["push"](_0xfccc66(_0x3aec74["join"](_0xd64453[46]))), _0x289e7e["push"](_0xfccc66(_0x14a148["join"](_0xd64453[46])))), _0x289e7e;
            };
          }
          function _0xfccc66(_0x1e0658) {
            var _0x9bbce2,
              _0x34bdc4 = _0x277ece[79],
              _0x3cbf88 = _0x1e0658["length"] & _0x277ece[10],
              _0x7074af = _0x1e0658["length"] - _0x3cbf88,
              _0x1aee6d = _0x34bdc4;
            _0x34bdc4 = _0x277ece[12];
            var _0x33b00b = _0x277ece[365];
            for (_0x9bbce2 = _0x277ece[6]; _0x9bbce2 < _0x7074af;) {
              var _0x366567 = _0x1e0658["charCodeAt"](_0x9bbce2) & _0x277ece[290] | (_0x1e0658["charCodeAt"](++_0x9bbce2) & _0x277ece[290]) << _0x277ece[29] | (_0x1e0658["charCodeAt"](++_0x9bbce2) & _0x277ece[290]) << _0x277ece[49] | (_0x1e0658["charCodeAt"](++_0x9bbce2) & _0x277ece[290]) << _0x277ece[65];
              ++_0x9bbce2, _0x366567 = (_0x366567 & _0x277ece[475]) * _0x34bdc4 + (((_0x366567 >>> _0x277ece[49]) * _0x34bdc4 & _0x277ece[475]) << _0x277ece[49]) & _0x277ece[394], _0x366567 = _0x366567 << _0x277ece[47] | _0x366567 >>> _0x277ece[51], _0x366567 = (_0x366567 & _0x277ece[475]) * _0x33b00b + (((_0x366567 >>> _0x277ece[49]) * _0x33b00b & _0x277ece[475]) << _0x277ece[49]) & _0x277ece[394], _0x1aee6d ^= _0x366567, _0x1aee6d = _0x1aee6d << _0x277ece[41] | _0x1aee6d >>> _0x277ece[55], _0x1aee6d = (_0x1aee6d & _0x277ece[475]) * _0x277ece[17] + (((_0x1aee6d >>> _0x277ece[49]) * _0x277ece[17] & _0x277ece[475]) << _0x277ece[49]) & _0x277ece[394], _0x1aee6d = (_0x1aee6d & _0x277ece[475]) + _0x277ece[384] + (((_0x1aee6d >>> _0x277ece[49]) + _0x277ece[425] & _0x277ece[475]) << _0x277ece[49]);
            }
            switch (_0x366567 = _0x277ece[6], _0x3cbf88) {
              case _0x277ece[10]:
                _0x366567 ^= (_0x1e0658["charCodeAt"](_0x9bbce2 + _0x277ece[7]) & _0x277ece[290]) << _0x277ece[49];
              case _0x277ece[7]:
                _0x366567 ^= (_0x1e0658["charCodeAt"](_0x9bbce2 + _0x277ece[531]) & _0x277ece[290]) << _0x277ece[29];
              case _0x277ece[531]:
                _0x366567 ^= _0x1e0658["charCodeAt"](_0x9bbce2) & _0x277ece[290], _0x366567 = (_0x366567 & _0x277ece[475]) * _0x34bdc4 + (((_0x366567 >>> _0x277ece[49]) * _0x34bdc4 & _0x277ece[475]) << _0x277ece[49]) & _0x277ece[394], _0x366567 = _0x366567 << _0x277ece[47] | _0x366567 >>> _0x277ece[51], _0x366567 = (_0x366567 & _0x277ece[475]) * _0x33b00b + (((_0x366567 >>> _0x277ece[49]) * _0x33b00b & _0x277ece[475]) << _0x277ece[49]) & _0x277ece[394], _0x1aee6d ^= _0x366567;
            }
            _0x1aee6d ^= _0x1e0658["length"], _0x1aee6d ^= _0x1aee6d >>> _0x277ece[49], _0x1aee6d = (_0x1aee6d & _0x277ece[475]) * _0x277ece[396] + (((_0x1aee6d >>> _0x277ece[49]) * _0x277ece[396] & _0x277ece[475]) << _0x277ece[49]) & _0x277ece[394], _0x1aee6d ^= _0x1aee6d >>> _0x277ece[41], _0x1aee6d = (_0x1aee6d & _0x277ece[475]) * _0x277ece[339] + (((_0x1aee6d >>> _0x277ece[49]) * _0x277ece[339] & _0x277ece[475]) << _0x277ece[49]) & _0x277ece[394], _0x1aee6d ^= _0x1aee6d >>> _0x277ece[49], _0x1e0658 = _0x1aee6d >>> _0x277ece[6], _0x3cbf88 = [], _0x3cbf88["push"](_0x1e0658);
            try {
              for (var _0xefa820, _0x85e8fb = _0x1e0658 + _0x4a3846[0], _0x45c7dd = _0x277ece[6], _0x482a08 = _0x277ece[6], _0x23cc0c = _0x277ece[6]; _0x23cc0c < _0x85e8fb["length"]; _0x23cc0c++) try {
                var _0x3a1e16 = parseInt(_0x85e8fb["charAt"](_0x23cc0c) + _0x4a3846[0]);
                _0x45c7dd = _0x3a1e16 || _0x3a1e16 === _0x277ece[6] ? _0x45c7dd + _0x3a1e16 : _0x45c7dd + _0x277ece[531], _0x482a08++;
              } catch (_0x2b807d) {
                _0x45c7dd += _0x277ece[531], _0x482a08++;
              }
              _0x482a08 = _0x482a08 == _0x277ece[6] ? _0x277ece[531] : _0x482a08, _0xefa820 = _0xfdbc1c(_0x45c7dd * _0x277ece[531] / _0x482a08, _0x135924);
              for (var _0x4344ba, _0x3db553 = Math["floor"](_0xefa820 / Math["pow"](_0x277ece[34], _0x135924 - _0x277ece[531])), _0x558622 = _0x1e0658 + _0x4a3846[0], _0x3fdfde = _0x277ece[6], _0x45d205 = _0x277ece[6], _0x4d02c8 = _0x277ece[6], _0x4051b6 = _0x277ece[6], _0x2e40de = _0x277ece[6]; _0x2e40de < _0x558622["length"]; _0x2e40de++) try {
                var _0x57888f = parseInt(_0x558622["charAt"](_0x2e40de) + _0x4a3846[0]);
                _0x57888f || _0x57888f === _0x277ece[6] ? _0x57888f < _0x3db553 ? (_0x45d205++, _0x3fdfde += _0x57888f) : (_0x4051b6++, _0x4d02c8 += _0x57888f) : (_0x4051b6++, _0x4d02c8 += _0x3db553);
              } catch (_0x2da758) {
                _0x4051b6++, _0x4d02c8 += _0x3db553;
              }
              _0x4051b6 = _0x4051b6 == _0x277ece[6] ? _0x277ece[531] : _0x4051b6, _0x45d205 = _0x45d205 == _0x277ece[6] ? _0x277ece[531] : _0x45d205, _0x4344ba = _0xfdbc1c(_0x4d02c8 * _0x277ece[531] / _0x4051b6 - _0x3fdfde * _0x277ece[531] / _0x45d205, _0x3d1199), _0x3cbf88["push"](_0x1b39b4(_0xefa820, !0, _0x135924, _0x4a3846[43])), _0x3cbf88["push"](_0x1b39b4(_0x4344ba, !0, _0x3d1199, _0x4a3846[43]));
            } catch (_0xc639bc) {
              _0x3cbf88 = [], _0x3cbf88["push"](_0x1e0658), _0x3cbf88["push"](_0x4e8c4c(_0x135924, _0x4a3846[37])["join"](_0x4a3846[0])), _0x3cbf88["push"](_0x4e8c4c(_0x3d1199, _0x4a3846[37])["join"](_0x4a3846[0]));
            }
            return _0x3cbf88["join"](_0x4a3846[0]);
          }
          function _0xfdbc1c(_0x6535c2, _0x2d398b) {
            if (_0x6535c2 < _0x277ece[6] || _0x6535c2 >= _0x277ece[34]) throw Error(_0x4a3846[32]);
            _0x2d398b = _0x4e8c4c(_0x2d398b, _0x4a3846[43]), _0x6535c2 = _0x4a3846[0] + _0x6535c2;
            for (var _0x1e4627 = _0x277ece[6], _0x388bd3 = _0x277ece[6]; _0x1e4627 < _0x2d398b["length"] && _0x388bd3 < _0x6535c2["length"]; _0x388bd3++) _0x6535c2["charAt"](_0x388bd3) != _0x4a3846[40] && (_0x2d398b[_0x1e4627++] = _0x6535c2["charAt"](_0x388bd3));
            return parseInt(_0x2d398b["join"](_0x4a3846[0]));
          }
          function _0x1b39b4(_0xa4d77b, _0xd64bf, _0x1d56ec, _0x32bce1) {
            if (_0xa4d77b = _0x4a3846[0] + _0xa4d77b, _0xa4d77b["length"] > _0x1d56ec) throw Error(_0x4a3846[89]);
            if (_0xa4d77b["length"] == _0x1d56ec) return _0xa4d77b;
            var _0x51bdd0 = [];
            _0xd64bf || _0x51bdd0["push"](_0xa4d77b);
            for (var _0x4cde56 = _0xa4d77b["length"]; _0x4cde56 < _0x1d56ec; _0x4cde56++) _0x51bdd0["push"](_0x32bce1);
            return _0xd64bf && _0x51bdd0["push"](_0xa4d77b), _0x51bdd0["join"](_0x4a3846[0]);
          }
          function _0x4e8c4c(_0x1d95b2, _0x3b6462) {
            if (_0x1d95b2 <= _0x277ece[6]) return [_0x277ece[6]];
            for (var _0x476fc1 = [], _0x232bd6 = _0x277ece[6]; _0x232bd6 < _0x1d95b2; _0x232bd6++) _0x476fc1["push"](_0x3b6462);
            return _0x476fc1;
          }
          function _0x29c00e(_0x932506) {
            return null == _0x932506 || void 0 == _0x932506;
          }
          function _0x1939f9(_0x40aca3, _0x1e01d5, _0x55d1a5) {
            this["h"] = _0x40aca3, this["c"] = _0x1e01d5, _0x29c00e(_0x55d1a5) ? this["i"] = !0 : this["i"] = _0x55d1a5;
          }
          function _0xfa204d(_0x153093) {
            if (_0x29c00e(_0x153093) || _0x29c00e(_0x153093["h"]) || _0x29c00e(_0x153093["c"])) return !1;
            try {
              if (_0x29c00e(window[_0x153093["h"]])) return !1;
            } catch (_0xa62106) {
              return !1;
            }
            return !0;
          }
          function _0x17e5b4(_0x19bc03, _0x351ad1) {
            if (_0x29c00e(_0x19bc03)) return _0x4a3846[0];
            for (var _0x4e2eee = _0x277ece[6]; _0x4e2eee < _0x19bc03["length"]; _0x4e2eee++) {
              var _0x2ad21d = _0x19bc03[_0x4e2eee];
              if (!_0x29c00e(_0x2ad21d) && _0x2ad21d["h"] == _0x351ad1) return _0x2ad21d;
            }
          }
          function _0x52863b() {
            _0x186409: {
              var _0x2370ec = _0x134aa1;
              if (!_0x29c00e(_0x2370ec)) for (var _0x1ada25 = _0x277ece[6]; _0x1ada25 < _0x2370ec["length"]; _0x1ada25++) {
                var _0xab13ca = _0x2370ec[_0x1ada25];
                if (_0xab13ca["i"] && !_0xfa204d(_0xab13ca)) {
                  _0x2370ec = _0xab13ca;
                  break _0x186409;
                }
              }
              _0x2370ec = null;
            }
            if (_0x29c00e(_0x2370ec)) {
              try {
                var _0xf6f697 = window["parseFloat"](_0x4a3846[183]) === _0x277ece[374] && window["isNaN"](window["parseFloat"](_0x4a3846[167]));
              } catch (_0x3ed235) {
                _0xf6f697 = !1;
              }
              if (_0xf6f697) {
                try {
                  var _0x3a2f5a = window["parseInt"](_0x4a3846[329]) === _0x277ece[264] && window["isNaN"](window["parseInt"](_0x4a3846[167]));
                } catch (_0xe6cb00) {
                  _0x3a2f5a = !1;
                }
                if (_0x3a2f5a) {
                  try {
                    var _0x2a0572 = window["decodeURI"](_0x4a3846[213]) === _0x4a3846[26];
                  } catch (_0x438383) {
                    _0x2a0572 = !1;
                  }
                  if (_0x2a0572) {
                    try {
                      var _0x11158a = window["decodeURIComponent"](_0x4a3846[214]) === _0x4a3846[30];
                    } catch (_0x2a6454) {
                      _0x11158a = !1;
                    }
                    if (_0x11158a) {
                      try {
                        var _0x56de3d = window["encodeURI"](_0x4a3846[26]) === _0x4a3846[213];
                      } catch (_0x1e6e3f) {
                        _0x56de3d = !1;
                      }
                      if (_0x56de3d) {
                        try {
                          var _0x3c227a = window["encodeURIComponent"](_0x4a3846[30]) === _0x4a3846[214];
                        } catch (_0x4dcb83) {
                          _0x3c227a = !1;
                        }
                        if (_0x3c227a) {
                          try {
                            var _0x4a06d1 = window["escape"](_0x4a3846[30]) === _0x4a3846[214];
                          } catch (_0x56b53d) {
                            _0x4a06d1 = !1;
                          }
                          if (_0x4a06d1) {
                            try {
                              var _0x1237ba = window["unescape"](_0x4a3846[214]) === _0x4a3846[30];
                            } catch (_0x489cc3) {
                              _0x1237ba = !1;
                            }
                            if (_0x1237ba) {
                              try {
                                var _0x214ae9 = window["eval"](_0x4a3846[309]) === _0x277ece[264];
                              } catch (_0x5042f2) {
                                _0x214ae9 = !1;
                              }
                              _0xf6f697 = _0x214ae9 ? null : _0x17e5b4(_0x134aa1, _0x4a3846[174]);
                            } else _0xf6f697 = _0x17e5b4(_0x134aa1, _0xd64453[67]);
                          } else _0xf6f697 = _0x17e5b4(_0x134aa1, _0x4a3846[348]);
                        } else _0xf6f697 = _0x17e5b4(_0x134aa1, _0x4a3846[396]);
                      } else _0xf6f697 = _0x17e5b4(_0x134aa1, _0x4a3846[382]);
                    } else _0xf6f697 = _0x17e5b4(_0x134aa1, _0xd64453[74]);
                  } else _0xf6f697 = _0x17e5b4(_0x134aa1, _0x4a3846[326]);
                } else _0xf6f697 = _0x17e5b4(_0x134aa1, _0x4a3846[424]);
              } else _0xf6f697 = _0x17e5b4(_0x134aa1, _0x4a3846[456]);
            } else _0xf6f697 = _0x2370ec;
            return _0xf6f697;
          }
          function _0x51bf68() {
            var _0x1642a7 = _0x52863b();
            if (!_0x29c00e(_0x1642a7)) return _0x1642a7["c"];
            try {
              _0x1642a7 = _0x29c00e(window[_0x4a3846[171]]) || _0x29c00e(window[_0x4a3846[171]][_0x4a3846[340]]) ? null : _0x17e5b4(_0x134aa1, _0x4a3846[316]);
            } catch (_0x1e1471) {
              _0x1642a7 = null;
            }
            if (!_0x29c00e(_0x1642a7)) return _0x1642a7["c"];
            try {
              _0x1642a7 = _0x29c00e(window[_0x4a3846[207]]) || _0x29c00e(window[_0x4a3846[207]][_0x4a3846[188]]) ? null : _0x17e5b4(_0x134aa1, _0x4a3846[271]);
            } catch (_0x1a3262) {
              _0x1642a7 = null;
            }
            return _0x29c00e(_0x1642a7) ? null : _0x1642a7["c"];
          }
          function _0x35e2fb(_0x165c3c) {
            for (var _0xc14d9f = [], _0x5c1d33 = _0x277ece[6]; _0x5c1d33 < _0x165c3c; _0x5c1d33++) {
              var _0x5d9be3 = Math["random"]() * _0xdeb217;
              _0x5d9be3 = Math["floor"](_0x5d9be3), _0xc14d9f["push"](_0x18ddbf["charAt"](_0x5d9be3));
            }
            return _0xc14d9f["join"](_0x4a3846[0]);
          }
          function _0x2b3e4e(_0x3f5d5b) {
            for (var _0x521293 = (_0x5d822b[_0x4a3846[212]] || _0x4a3846[0])["split"](_0x4a3846[458]), _0x3ed5e1 = _0x277ece[6]; _0x3ed5e1 < _0x521293["length"]; _0x3ed5e1++) {
              var _0x5cc51c = _0x521293[_0x3ed5e1]["indexOf"](_0x4a3846[60]);
              if (_0x5cc51c >= _0x277ece[6]) {
                var _0x18e932 = _0x521293[_0x3ed5e1]["substring"](_0x5cc51c + _0x277ece[531], _0x521293[_0x3ed5e1]["length"]);
                if (_0x521293[_0x3ed5e1]["substring"](_0x277ece[6], _0x5cc51c) == _0x3f5d5b) return window["decodeURIComponent"](_0x18e932);
              }
            }
            return null;
          }
          function _0x108aec(_0x233c70) {
            var _0x2dbfc3 = [_0x4a3846[137], _0x4a3846[185], _0x4a3846[136], _0x4a3846[110], _0x4a3846[162], _0x4a3846[169], _0x4a3846[384]],
              _0x4bcfef = _0x4a3846[0];
            if (null == _0x233c70 || void 0 == _0x233c70) return _0x233c70;
            if (("undefined" == typeof _0x233c70 ? "undefined" : _0x3adeb8(_0x233c70)) == [_0x4a3846[297], _0x4a3846[227], _0x4a3846[125]]["join"](_0x4a3846[0])) {
              _0x4bcfef += _0x4a3846[144];
              for (var _0x3ea754 = _0x277ece[6]; _0x3ea754 < _0x2dbfc3["length"]; _0x3ea754++) if (_0x233c70["hasOwnProperty"](_0x2dbfc3[_0x3ea754])) {
                var _0x29ade4 = _0x4a3846[31] + _0x2dbfc3[_0x3ea754] + _0x4a3846[269],
                  _0xc65aad = _0x4a3846[0] + _0x233c70[_0x2dbfc3[_0x3ea754]];
                _0xc65aad = null == _0xc65aad || void 0 == _0xc65aad ? _0xc65aad : _0xc65aad["replace"](/'/g, _0x4a3846[463])["replace"](/"/g, _0x4a3846[26]), _0x4bcfef += _0x29ade4 + _0xc65aad + _0x4a3846[195];
              }
              return _0x4bcfef["charAt"](_0x4bcfef["length"] - _0x277ece[531]) == _0x4a3846[36] && (_0x4bcfef = _0x4bcfef["substring"](_0x277ece[6], _0x4bcfef["length"] - _0x277ece[531])), _0x4bcfef += _0x4a3846[145];
            }
            return null;
          }
          function _0x1b334d(_0x9b045f, _0x4073f8, _0x10333a, _0x4aa91) {
            var _0x552c96 = [];
            _0x552c96["push"](_0x9b045f + _0x4a3846[60] + encodeURIComponent(_0x4073f8)), _0x10333a && (_0x9b045f = new Date(_0x4aa91)[_0x4a3846[220]](), _0x552c96["push"](_0x4a3846[458]), _0x552c96["push"](_0x4a3846[175]), _0x552c96["push"](_0x4a3846[310]), _0x552c96["push"](_0x4a3846[331]), _0x552c96["push"](_0x4a3846[325]), _0x552c96["push"](_0x9b045f)), _0x552c96["push"](_0x4a3846[458]), _0x552c96["push"](_0x4a3846[307]), _0x552c96["push"](_0x4a3846[221]), null != _0xb227b8 && void 0 != _0xb227b8 && _0xb227b8 != _0x4a3846[0] && (_0x552c96["push"](_0x4a3846[458]), _0x552c96["push"](_0x4a3846[156]), _0x552c96["push"](_0x4a3846[241]), _0x552c96["push"](_0x4a3846[267]), _0x552c96["push"](_0xb227b8)), _0x5d822b[_0x4a3846[212]] = _0x552c96["join"](_0x4a3846[0]);
          }
          function _0x32043a(_0x4ebc96, _0x329c81) {
            for (var _0x227e27 = [], _0x5e2083 = _0x277ece[6]; _0x5e2083 < _0x329c81; _0x5e2083++) _0x227e27["push"](_0x4ebc96);
            return _0x227e27["join"](_0x4a3846[0]);
          }
          function _0x30dc10(_0x4029ac) {
            return null == _0x4029ac || void 0 == _0x4029ac || _0x4029ac == _0x4a3846[0] ? null : (_0x4029ac = _0x4029ac["split"](_0x4a3846[57]), _0x4029ac["length"] < _0x277ece[7] || !/^[0-9]+$/gi["test"](_0x4029ac[1]) ? null : parseInt(_0x4029ac[1]));
          }
          function _0x20d7f8() {
            var _0x16a367 = _0x2b3e4e(_0x269cca);
            return null != _0x16a367 && void 0 != _0x16a367 && _0x16a367 != _0x4a3846[0] || (_0x16a367 = window[_0x5f22d2]), _0x16a367;
          }
          function _0x490163() {
            var _0x47a5fc = _0x20d7f8(_0x269cca);
            return null == _0x47a5fc || void 0 == _0x47a5fc || _0x47a5fc == _0x4a3846[0] ? _0x277ece[6] : (_0x47a5fc = _0x30dc10(_0x47a5fc), null == _0x47a5fc ? _0x277ece[6] : _0x47a5fc - (_0x556bd7 - _0x510890) - new window[_0xd64453[73]]()[_0x4a3846[182]]());
          }
          function _0x475222() {
            if (!(null == _0x1213ec || void 0 == _0x1213ec || _0x1213ec["length"] <= _0x277ece[6])) for (var _0xe15792 = _0x277ece[6]; _0xe15792 < _0x1213ec["length"]; _0xe15792++) {
              var _0x5693cb = _0x1213ec[_0xe15792];
              if ((null != _0xb227b8 && void 0 != _0xb227b8 && _0xb227b8 != _0x4a3846[0] || null != _0x5693cb && void 0 != _0x5693cb && _0x5693cb != _0x4a3846[0]) && _0xb227b8 != _0x5693cb) {
                var _0x582e26 = _0x269cca,
                  _0x3de022 = new window[_0xd64453[73]]();
                _0x3de022[_0x4a3846[24]](_0x3de022[_0x4a3846[182]]() - _0x277ece[317]), window[_0x4a3846[336]][_0x4a3846[212]] = null == _0x5693cb || void 0 == _0x5693cb || _0x5693cb == _0x4a3846[0] ? _0x582e26 + _0x4a3846[150] + _0x3de022[_0x4a3846[220]]() : _0x582e26 + _0x4a3846[379] + _0x5693cb + _0xd64453[24] + _0x3de022[_0x4a3846[220]]();
              }
            }
          }
          function _0x3804b4() {
            _0x475222(), window[_0x5f22d2] = null;
            var _0x335733 = !0,
              _0x2c59d1 = {
                "v": _0x4a3846[233]
              },
              _0x143ccb = _0x51bf68();
            _0x143ccb && (_0x2c59d1[_0x4a3846[384]] = _0x143ccb), _0x143ccb = null, _0x2c59d1[_0x4a3846[110]] = _0x5034e3;
            var _0x31c08c = new window[_0xd64453[73]]()[_0x4a3846[182]]() + _0x556bd7,
              _0x21056b = _0x31c08c + _0x277ece[299] * _0x277ece[139] * _0x277ece[139] * _0x277ece[65] * _0x277ece[77];
            _0x2c59d1[_0x4a3846[136]] = _0x35e2fb(_0x277ece[10]) + _0x31c08c + _0x35e2fb(_0x277ece[10]);
            try {
              var _0x29c6d7 = new _0x19185b({
                "b": !1,
                "a": !1
              })["get"]();
              null != _0x29c6d7 && void 0 != _0x29c6d7 && _0x29c6d7["length"] > _0x277ece[6] ? _0x2c59d1[_0x4a3846[185]] = _0x29c6d7["join"](_0x4a3846[36]) : (_0x2c59d1[_0x4a3846[185]] = _0x32043a(_0x4a3846[43], _0x277ece[34]), _0x2c59d1[_0x4a3846[162]] = _0x4a3846[44], _0x335733 = !1);
            } catch (_0x17c570) {
              _0x2c59d1[_0x4a3846[185]] = _0x32043a(_0x4a3846[43], _0x277ece[34]), _0x2c59d1[_0x4a3846[162]] = _0x4a3846[44], _0x335733 = !1;
            }
            try {
              var _0x1a2d25 = _0x143ccb = _0x108aec(_0x2c59d1);
              if (_0x2c59d1 = _0x1aa2c5, null == _0x2c59d1 || void 0 == _0x2c59d1) throw Error(_0x4a3846[122]);
              null != _0x1a2d25 && void 0 != _0x1a2d25 || (_0x1a2d25 = _0x4a3846[0]), _0x29c6d7 = _0x1a2d25;
              var _0x586ad3 = _0x3af200(null == _0x1a2d25 ? [] : _0x178915(_0x1a2d25)),
                _0x1e6b6b = _0x178915(_0x29c6d7 + _0x586ad3),
                _0x2ed6b8 = _0x178915(_0x2c59d1);
              null == _0x1e6b6b && (_0x1e6b6b = []), _0x586ad3 = [];
              for (var _0x264b2d = _0x277ece[6]; _0x264b2d < _0x5bcfdf; _0x264b2d++) {
                var _0xd82e34 = Math["random"]() * _0x277ece[292];
                _0xd82e34 = Math["floor"](_0xd82e34), _0x586ad3[_0x264b2d] = _0x1a26fa(_0xd82e34);
              }
              if (_0x2ed6b8 = _0x22b4ec(_0x2ed6b8), _0x2ed6b8 = _0x4a6ae2(_0x2ed6b8, _0x22b4ec(_0x586ad3)), _0x264b2d = _0x2ed6b8 = _0x22b4ec(_0x2ed6b8), _0xd82e34 = _0x1e6b6b, null == _0xd82e34 || void 0 == _0xd82e34 || _0xd82e34["length"] == _0x277ece[6]) var _0xad1b9f = _0x2bbe33(_0x1895d5);else {
                var _0x51b472 = _0xd82e34["length"],
                  _0x4cde2f = _0x51b472 % _0x1895d5 <= _0x1895d5 - _0x3ae121 ? _0x1895d5 - _0x51b472 % _0x1895d5 - _0x3ae121 : _0x1895d5 * _0x277ece[7] - _0x51b472 % _0x1895d5 - _0x3ae121;
                _0x1e6b6b = [], _0x32fbea(_0xd82e34, _0x277ece[6], _0x1e6b6b, _0x277ece[6], _0x51b472);
                for (var _0x300fa7 = _0x277ece[6]; _0x300fa7 < _0x4cde2f; _0x300fa7++) _0x1e6b6b[_0x51b472 + _0x300fa7] = _0x277ece[6];
                var _0x2b5129 = _0x16f0f7(_0x51b472);
                _0x32fbea(_0x2b5129, _0x277ece[6], _0x1e6b6b, _0x51b472 + _0x4cde2f, _0x3ae121), _0xad1b9f = _0x1e6b6b;
              }
              if (_0x51b472 = _0xad1b9f, null == _0x51b472 || _0x51b472["length"] % _0x1895d5 != _0x277ece[6]) throw Error(_0x4a3846[132]);
              _0xad1b9f = [];
              for (var _0x18f8d6 = _0x277ece[6], _0x48e81a = _0x51b472["length"] / _0x1895d5, _0x69be22 = _0x277ece[6]; _0x69be22 < _0x48e81a; _0x69be22++) {
                _0xad1b9f[_0x69be22] = [];
                for (var _0x188930 = _0x277ece[6]; _0x188930 < _0x1895d5; _0x188930++) _0xad1b9f[_0x69be22][_0x188930] = _0x51b472[_0x18f8d6++];
              }
              _0x18f8d6 = [], _0x32fbea(_0x586ad3, _0x277ece[6], _0x18f8d6, _0x277ece[6], _0x5bcfdf);
              for (var _0x1ea422 = _0xad1b9f["length"], _0x4770ff = _0x277ece[6]; _0x4770ff < _0x1ea422; _0x4770ff++) {
                var _0x458e9d = _0xad1b9f[_0x4770ff];
                if (null == _0x458e9d) var _0x277da8 = null;else {
                  var _0x152d24 = _0x1a26fa(_0x277ece[89]);
                  _0x48e81a = [];
                  for (var _0x1609e9 = _0x458e9d["length"], _0x19b6d2 = _0x277ece[6]; _0x19b6d2 < _0x1609e9; _0x19b6d2++) _0x48e81a["push"](_0x2c7185(_0x458e9d[_0x19b6d2], _0x152d24));
                  _0x277da8 = _0x48e81a;
                }
                if (_0x48e81a = _0x277da8, null == _0x48e81a) var _0x37e74e = null;else {
                  var _0xd3677a = _0x1a26fa(_0x277ece[88]);
                  _0x69be22 = [];
                  for (var _0x297b16 = _0x48e81a["length"], _0x2a74b0 = _0x277ece[6]; _0x2a74b0 < _0x297b16; _0x2a74b0++) _0x69be22["push"](_0x2c7185(_0x48e81a[_0x2a74b0], _0xd3677a--));
                  _0x37e74e = _0x69be22;
                }
                if (_0x48e81a = _0x37e74e, null == _0x48e81a) var _0x36b8b1 = null;else {
                  var _0x5c4116 = _0x1a26fa(_0x277ece[107]);
                  _0x69be22 = [];
                  for (var _0x5c931b = _0x48e81a["length"], _0x54d34b = _0x277ece[6]; _0x54d34b < _0x5c931b; _0x54d34b++) _0x69be22["push"](_0x44d9bb(_0x48e81a[_0x54d34b], _0x5c4116++));
                  _0x36b8b1 = _0x69be22;
                }
                var _0x268261 = _0x4a6ae2(_0x36b8b1, _0x2ed6b8);
                if (_0x48e81a = _0x268261, _0x69be22 = _0x264b2d, null == _0x48e81a) var _0x56df68 = null;else {
                  if (null == _0x69be22) _0x56df68 = _0x48e81a;else {
                    _0x188930 = [];
                    for (var _0x18e3cb = _0x69be22["length"], _0x183138 = _0x277ece[6], _0x1efb92 = _0x48e81a["length"]; _0x183138 < _0x1efb92; _0x183138++) _0x188930[_0x183138] = _0x1a26fa(_0x48e81a[_0x183138] + _0x69be22[_0x183138 % _0x18e3cb]);
                    _0x56df68 = _0x188930;
                  }
                }
                _0x268261 = _0x4a6ae2(_0x56df68, _0x264b2d);
                var _0x5b5966 = _0x45f746(_0x268261);
                _0x5b5966 = _0x45f746(_0x5b5966), _0x32fbea(_0x5b5966, _0x277ece[6], _0x18f8d6, _0x4770ff * _0x1895d5 + _0x5bcfdf, _0x1895d5), _0x264b2d = _0x5b5966;
              }
              if (null == _0x18f8d6 || void 0 == _0x18f8d6) var _0x5ddf2c = null;else {
                if (_0x18f8d6["length"] == _0x277ece[6]) _0x5ddf2c = _0x4a3846[0];else {
                  var _0x56837c = _0x277ece[10];
                  try {
                    _0x1ea422 = [];
                    for (var _0x58b89b = _0x277ece[6]; _0x58b89b < _0x18f8d6["length"];) {
                      if (!(_0x58b89b + _0x56837c <= _0x18f8d6["length"])) {
                        _0x1ea422["push"](_0x201f56(_0x18f8d6, _0x58b89b, _0x18f8d6["length"] - _0x58b89b));
                        break;
                      }
                      _0x1ea422["push"](_0x201f56(_0x18f8d6, _0x58b89b, _0x56837c)), _0x58b89b += _0x56837c;
                    }
                    _0x5ddf2c = _0x1ea422["join"](_0x4a3846[0]);
                  } catch (_0x1cc82b) {
                    throw Error(_0x4a3846[113]);
                  }
                }
              }
              _0x143ccb = _0x5ddf2c;
            } catch (_0x5f5d25) {
              _0x143ccb = _0x108aec({
                "ec": _0x4a3846[45],
                "em": _0x5f5d25[_0x4a3846[197]]
              }), _0x335733 = !1;
            }
            _0x143ccb = _0x143ccb + _0x4a3846[57] + _0x31c08c, _0x1b334d(_0x269cca, _0x143ccb, _0x335733, _0x21056b), _0x335733 = _0x269cca, _0x5ddf2c = _0x143ccb, _0x56837c = _0x2b3e4e(_0x335733), null !== _0x56837c && void 0 !== _0x56837c && _0x56837c !== _0x4a3846[0] || _0x1b334d(_0x335733, _0x5ddf2c, !1), window[_0x5f22d2] = _0x143ccb, window[_0x4a3846[128]] && window[_0x4a3846[128]](_0x3804b4, _0x510890);
          }
          _0x1939f9["prototype"] = {
            "toString": function () {
              return _0x4a3846[460] + this["h"] + _0x4a3846[166] + this["c"] + _0xd64453[7] + this["i"] + _0x4a3846[145];
            }
          };
          var _0x134aa1 = [new _0x1939f9(_0x4a3846[433], _0x4a3846[13]), new _0x1939f9(_0x4a3846[336], _0x4a3846[14]), new _0x1939f9(_0x4a3846[372], _0x4a3846[11]), new _0x1939f9(_0x4a3846[431], _0x4a3846[12]), new _0x1939f9(_0xd64453[33], _0x4a3846[10]), new _0x1939f9(_0x4a3846[263], _0x4a3846[9]), new _0x1939f9(_0x4a3846[2], _0x4a3846[20]), new _0x1939f9(_0x4a3846[240], _0x4a3846[22]), new _0x1939f9(_0xd64453[10], _0x4a3846[6]), new _0x1939f9(_0x4a3846[456], _0xd64453[58]), new _0x1939f9(_0x4a3846[424], _0xd64453[56]), new _0x1939f9(_0x4a3846[326], _0xd64453[57]), new _0x1939f9(_0xd64453[74], _0xd64453[53]), new _0x1939f9(_0x4a3846[382], _0xd64453[55]), new _0x1939f9(_0x4a3846[396], _0xd64453[50]), new _0x1939f9(_0x4a3846[348], _0xd64453[52]), new _0x1939f9(_0xd64453[67], _0xd64453[59]), new _0x1939f9(_0x4a3846[174], _0xd64453[62]), new _0x1939f9(_0x4a3846[259], _0xd64453[21], !1), new _0x1939f9(_0x4a3846[300], _0xd64453[22], !1), new _0x1939f9(_0x4a3846[171], _0xd64453[18], !1), new _0x1939f9(_0x4a3846[316], _0xd64453[19], !1), new _0x1939f9(_0x4a3846[271], _0xd64453[38], !1)],
            _0x35adfb = !_0x52863b(),
            _0x5034e3 = window && window[_0x4a3846[431]] && window[_0x4a3846[431]]["host"] || _0x4a3846[358],
            _0x5d822b = window[_0x4a3846[336]],
            _0x47efe9 = window[_0x4a3846[372]],
            _0x135924 = _0x277ece[7],
            _0x3d1199 = _0x277ece[7],
            _0x874f93 = [_0x4a3846[43], _0x4a3846[44], _0x4a3846[45], _0x4a3846[46], _0x4a3846[47], _0x4a3846[49], _0x4a3846[50], _0x4a3846[52], _0x4a3846[54], _0x4a3846[55], _0x4a3846[99], _0x4a3846[101], _0x4a3846[103], _0x4a3846[105], _0x4a3846[107], _0x4a3846[108]],
            _0x17847b = [_0x277ece[6], _0x277ece[367], _0x277ece[373], _0x277ece[511], _0x277ece[438], _0x277ece[306], _0x277ece[484], _0x277ece[333], _0x277ece[451], _0x277ece[532], _0x277ece[300], _0x277ece[450], _0x277ece[485], _0x277ece[453], _0x277ece[404], _0x277ece[31], _0x277ece[444], _0x277ece[353], _0x277ece[523], _0x277ece[391], _0x277ece[428], _0x277ece[284], _0x277ece[356], _0x277ece[500], _0x277ece[480], _0x277ece[482], _0x277ece[465], _0x277ece[323], _0x277ece[529], _0x277ece[401], _0x277ece[288], _0x277ece[416], _0x277ece[463], _0x277ece[20], _0x277ece[359], _0x277ece[492], _0x277ece[315], _0x277ece[343], _0x277ece[536], _0x277ece[380], _0x277ece[409], _0x277ece[430], _0x277ece[165], _0x277ece[432], _0x277ece[296], _0x277ece[490], _0x277ece[458], _0x277ece[326], _0x277ece[497], _0x277ece[321], _0x277ece[471], _0x277ece[345], _0x277ece[348], _0x277ece[389], _0x277ece[369], _0x277ece[518], _0x277ece[514], _0x277ece[448], _0x277ece[412], _0x277ece[25], _0x277ece[397], _0x277ece[509], _0x277ece[309], _0x277ece[435], _0x277ece[460], _0x277ece[427], _0x277ece[38], _0x277ece[406], _0x277ece[538], _0x277ece[495], _0x277ece[452], _0x277ece[302], _0x277ece[310], _0x277ece[247], _0x277ece[335], _0x277ece[487], _0x277ece[370], _0x277ece[385], _0x277ece[512], _0x277ece[375], _0x277ece[405], _0x277ece[527], _0x277ece[418], _0x277ece[289], _0x277ece[486], _0x277ece[476], _0x277ece[325], _0x277ece[467], _0x277ece[291], _0x277ece[422], _0x277ece[502], _0x277ece[357], _0x277ece[358], _0x277ece[440], _0x277ece[393], _0x277ece[524], _0x277ece[493], _0x277ece[286], _0x277ece[327], _0x277ece[459], _0x277ece[433], _0x277ece[402], _0x277ece[434], _0x277ece[181], _0x277ece[344], _0x277ece[307], _0x277ece[381], _0x277ece[537], _0x277ece[24], _0x277ece[455], _0x277ece[494], _0x277ece[360], _0x277ece[510], _0x277ece[387], _0x277ece[436], _0x277ece[311], _0x277ece[449], _0x277ece[506], _0x277ece[28], _0x277ece[413], _0x277ece[392], _0x277ece[340], _0x277ece[519], _0x277ece[371], _0x277ece[324], _0x277ece[488], _0x277ece[346], _0x277ece[472], _0x277ece[470], _0x277ece[322], _0x277ece[441], _0x277ece[479], _0x277ece[287], _0x277ece[420], _0x277ece[331], _0x277ece[408], _0x277ece[526], _0x277ece[390], _0x277ece[505], _0x277ece[352], _0x277ece[355], _0x277ece[504], _0x277ece[468], _0x277ece[294], _0x277ece[304], _0x277ece[447], _0x277ece[130], _0x277ece[530], _0x277ece[403], _0x277ece[44], _0x277ece[298], _0x277ece[462], _0x277ece[377], _0x277ece[508], _0x277ece[378], _0x277ece[364], _0x277ece[483], _0x277ece[338], _0x277ece[330], _0x277ece[314], _0x277ece[415], _0x277ece[19], _0x277ece[517], _0x277ece[445], _0x277ece[308], _0x277ece[439], _0x277ece[379], _0x277ece[515], _0x277ece[474], _0x277ece[342], _0x277ece[499], _0x277ece[319], _0x277ece[368], _0x277ece[522], _0x277ece[332], _0x277ece[398], _0x277ece[274], _0x277ece[431], _0x277ece[410], _0x277ece[426], _0x277ece[456], _0x277ece[329], _0x277ece[121], _0x277ece[498], _0x277ece[362], _0x277ece[491], _0x277ece[464], _0x277ece[13], _0x277ece[535], _0x277ece[386], _0x277ece[297], _0x277ece[350], _0x277ece[503], _0x277ece[354], _0x277ece[293], _0x277ece[337], _0x277ece[388], _0x277ece[525], _0x277ece[351], _0x277ece[318], _0x277ece[419], _0x277ece[285], _0x277ece[407], _0x277ece[372], _0x277ece[320], _0x277ece[469], _0x277ece[478], _0x277ece[23], _0x277ece[336], _0x277ece[481], _0x277ece[312], _0x277ece[349], _0x277ece[507], _0x277ece[376], _0x277ece[363], _0x277ece[399], _0x277ece[42], _0x277ece[400], _0x277ece[461], _0x277ece[313], _0x277ece[446], _0x277ece[303], _0x277ece[528], _0x277ece[295], _0x277ece[521], _0x277ece[366], _0x277ece[395], _0x277ece[334], _0x277ece[341], _0x277ece[473], _0x277ece[316], _0x277ece[501], _0x277ece[437], _0x277ece[305], _0x277ece[513], _0x277ece[382], _0x277ece[15], _0x277ece[414], _0x277ece[443], _0x277ece[520], _0x277ece[383], _0x277ece[534], _0x277ece[347], _0x277ece[301], _0x277ece[489], _0x277ece[361], _0x277ece[8], _0x277ece[466], _0x277ece[328], _0x277ece[454], _0x277ece[496], _0x277ece[148], _0x277ece[429], _0x277ece[223], _0x277ece[423], _0x277ece[411]],
            _0x3ac7d4 = [_0x277ece[32], _0x277ece[190], _0x277ece[117], _0x277ece[135], _0x277ece[248], _0x277ece[224], _0x277ece[131], _0x277ece[272], _0x277ece[206], _0x277ece[48], _0x277ece[47], _0x277ece[7], _0x277ece[164], _0x277ece[214], _0x277ece[173], _0x277ece[93], _0x277ece[132], _0x277ece[114], _0x277ece[174], _0x277ece[69], _0x277ece[256], _0x277ece[139], _0x277ece[198], _0x277ece[33], _0x277ece[231], _0x277ece[39], _0x277ece[156], _0x277ece[222], _0x277ece[144], _0x277ece[101], _0x277ece[53], _0x277ece[73], _0x277ece[265], _0x277ece[36], _0x277ece[81], _0x277ece[105], _0x277ece[175], _0x277ece[207], _0x277ece[89], _0x277ece[215], _0x277ece[14], _0x277ece[136], _0x277ece[216], _0x277ece[191], _0x277ece[217], _0x277ece[199], _0x277ece[208], _0x277ece[232], _0x277ece[43], _0x277ece[200], _0x277ece[176], _0x277ece[201], _0x277ece[257], _0x277ece[149], _0x277ece[41], _0x277ece[18], _0x277ece[75], _0x277ece[258], _0x277ece[16], _0x277ece[182], _0x277ece[71], _0x277ece[97], _0x277ece[137], _0x277ece[102], _0x277ece[192], _0x277ece[113], _0x277ece[166], _0x277ece[239], _0x277ece[147], _0x277ece[70], _0x277ece[150], _0x277ece[82], _0x277ece[249], _0x277ece[6], _0x277ece[90], _0x277ece[225], _0x277ece[202], _0x277ece[115], _0x277ece[273], _0x277ece[193], _0x277ece[98], _0x277ece[233], _0x277ece[9], _0x277ece[266], _0x277ece[103], _0x277ece[250], _0x277ece[209], _0x277ece[183], _0x277ece[80], _0x277ece[151], _0x277ece[226], _0x277ece[45], _0x277ece[152], _0x277ece[116], _0x277ece[153], _0x277ece[251], _0x277ece[227], _0x277ece[194], _0x277ece[56], _0x277ece[234], _0x277ece[154], _0x277ece[167], _0x277ece[85], _0x277ece[177], _0x277ece[106], _0x277ece[72], _0x277ece[240], _0x277ece[241], _0x277ece[109], _0x277ece[140], _0x277ece[195], _0x277ece[104], _0x277ece[126], _0x277ece[67], _0x277ece[155], _0x277ece[86], _0x277ece[107], _0x277ece[122], _0x277ece[252], _0x277ece[91], _0x277ece[168], _0x277ece[203], _0x277ece[184], _0x277ece[118], _0x277ece[83], _0x277ece[94], _0x277ece[185], _0x277ece[186], _0x277ece[196], _0x277ece[242], _0x277ece[40], _0x277ece[138], _0x277ece[228], _0x277ece[178], _0x277ece[110], _0x277ece[275], _0x277ece[87], _0x277ece[531], _0x277ece[218], _0x277ece[46], _0x277ece[133], _0x277ece[243], _0x277ece[235], _0x277ece[210], _0x277ece[123], _0x277ece[37], _0x277ece[253], _0x277ece[57], _0x277ece[236], _0x277ece[169], _0x277ece[143], _0x277ece[157], _0x277ece[95], _0x277ece[127], _0x277ece[259], _0x277ece[276], _0x277ece[254], _0x277ece[264], _0x277ece[34], _0x277ece[179], _0x277ece[267], _0x277ece[30], _0x277ece[170], _0x277ece[59], _0x277ece[211], _0x277ece[51], _0x277ece[141], _0x277ece[60], _0x277ece[237], _0x277ece[277], _0x277ece[54], _0x277ece[278], _0x277ece[52], _0x277ece[124], _0x277ece[35], _0x277ece[180], _0x277ece[66], _0x277ece[61], _0x277ece[268], _0x277ece[212], _0x277ece[68], _0x277ece[219], _0x277ece[244], _0x277ece[62], _0x277ece[63], _0x277ece[158], _0x277ece[279], _0x277ece[281], _0x277ece[111], _0x277ece[96], _0x277ece[533], _0x277ece[10], _0x277ece[58], _0x277ece[229], _0x277ece[159], _0x277ece[230], _0x277ece[17], _0x277ece[260], _0x277ece[269], _0x277ece[108], _0x277ece[119], _0x277ece[92], _0x277ece[99], _0x277ece[65], _0x277ece[187], _0x277ece[77], _0x277ece[188], _0x277ece[145], _0x277ece[100], _0x277ece[213], _0x277ece[204], _0x277ece[22], _0x277ece[125], _0x277ece[280], _0x277ece[146], _0x277ece[74], _0x277ece[245], _0x277ece[55], _0x277ece[120], _0x277ece[246], _0x277ece[160], _0x277ece[161], _0x277ece[76], _0x277ece[171], _0x277ece[220], _0x277ece[205], _0x277ece[142], _0x277ece[162], _0x277ece[163], _0x277ece[261], _0x277ece[11], _0x277ece[189], _0x277ece[197], _0x277ece[26], _0x277ece[84], _0x277ece[128], _0x277ece[79], _0x277ece[270], _0x277ece[271], _0x277ece[238], _0x277ece[255], _0x277ece[112], _0x277ece[78], _0x277ece[262], _0x277ece[129], _0x277ece[64], _0x277ece[263], _0x277ece[50], _0x277ece[27], _0x277ece[21], _0x277ece[88], _0x277ece[49], _0x277ece[221], _0x277ece[134], _0x277ece[172], _0x277ece[29]],
            _0x1895d5 = _0x277ece[155],
            _0x303485 = _0x277ece[155],
            _0x3ae121 = _0x277ece[14],
            _0x5bcfdf = _0x277ece[14],
            _0x1aa2c5 = _0xd64453[35],
            _0x269cca = _0x4a3846[18],
            _0x18ddbf = _0x4a3846[281],
            _0xdeb217 = _0x18ddbf["length"],
            _0x556bd7 = _0x277ece[424],
            _0x510890 = _0x277ece[516],
            _0x244a59 = window && window[_0x4a3846[431]] && window[_0x4a3846[431]][_0x4a3846[315]] || _0x4a3846[462],
            _0xb227b8 = _0x4a3846[0];
          _0xb227b8 = function (_0x955439, _0x11ed0e) {
            if (null == _0x955439 || void 0 == _0x955439 || _0x955439 == _0x4a3846[0] || null == _0x11ed0e || void 0 == _0x11ed0e || _0x11ed0e["length"] <= _0x277ece[6]) return null;
            _0x11ed0e = _0x11ed0e["split"](_0x4a3846[58]);
            for (var _0x506c00 = _0x277ece[6]; _0x506c00 < _0x11ed0e["length"]; _0x506c00++) {
              var _0x390440 = new RegExp(_0x11ed0e[_0x506c00]["replace"](/\./g, _0x4a3846[467]) + _0x4a3846[27]);
              if (null != _0x955439[_0xd64453[66]](_0x390440) || null != (_0x4a3846[40] + _0x955439)[_0xd64453[66]](_0x390440)) return _0x11ed0e[_0x506c00];
            }
            return null;
          }(_0x244a59, _0xb227b8);
          var _0x5f22d2 = _0x269cca["replace"](/[^a-zA-Z0-9$]/g, _0x4a3846[0])["toLowerCase"](),
            _0x1213ec = function (_0xfd0a4d) {
              var _0x239bd6 = [];
              if (!_0xfd0a4d) return _0x239bd6;
              _0xfd0a4d = _0xfd0a4d["split"](_0x4a3846[40]);
              for (var _0x45d024 = _0x4a3846[0], _0x2e2226 = _0x277ece[6]; _0x2e2226 < _0xfd0a4d["length"]; _0x2e2226++) _0x2e2226 < _0xfd0a4d["length"] - _0x277ece[531] && (_0x45d024 = _0x4a3846[40] + _0xfd0a4d[_0xfd0a4d["length"] - _0x277ece[531] - _0x2e2226] + _0x45d024, _0x239bd6["push"](_0x45d024));
              return _0x239bd6;
            }(_0x244a59);
          _0x1213ec["push"](null), _0x1213ec["push"](_0x4a3846[40] + _0x244a59), function (_0x27aac4) {
            for (var _0x50b5a5 = _0x277ece[6], _0x2aa54a = (_0x5d822b[_0x4a3846[212]] || _0x4a3846[0])["split"](_0x4a3846[458]), _0x457471 = _0x277ece[6]; _0x457471 < _0x2aa54a["length"]; _0x457471++) {
              var _0x619bc9 = _0x2aa54a[_0x457471]["indexOf"](_0x4a3846[60]);
              _0x619bc9 >= _0x277ece[6] && _0x2aa54a[_0x457471]["substring"](_0x277ece[6], _0x619bc9) == _0x27aac4 && (_0x50b5a5 += _0x277ece[531]);
            }
            return _0x50b5a5;
          }(_0x269cca) > _0x277ece[531] && _0x475222(), function () {
            var _0x3ca32c = _0x20d7f8();
            return null == _0x3ca32c || void 0 == _0x3ca32c || _0x3ca32c == _0x4a3846[0] ? _0x3ca32c = !1 : (_0x3ca32c = _0x30dc10(_0x3ca32c), _0x3ca32c = !(null == _0x3ca32c || isNaN(_0x3ca32c) || _0x3ca32c - new window[_0xd64453[73]]()[_0x4a3846[182]]() <= _0x556bd7 - _0x510890)), _0x3ca32c;
          }() ? (window[_0x5f22d2] = _0x20d7f8(), _0x244a59 = _0x490163(), window[_0x4a3846[128]] && window[_0x4a3846[128]](_0x3804b4, _0x244a59)) : _0x3804b4();
        }();
      }();
    }();
  }();
}, function (_0x1aaad0, _0x1f7f97) {
  var _0x2d780a = "function" == typeof Symbol && "symbol" == typeof Symbol["iterator"] ? function (_0x106a5c) {
    return typeof _0x106a5c;
  } : function (_0xd3d163) {
    return _0xd3d163 && "function" == typeof Symbol && _0xd3d163["constructor"] === Symbol && _0xd3d163 !== Symbol["prototype"] ? "symbol" : typeof _0xd3d163;
  };
  "object" !== ("undefined" == typeof JSON ? "undefined" : _0x2d780a(JSON)) && (JSON = {}), function () {
    'use strict';

    function _0x2c685c(_0x7a0575) {
      return _0x7a0575 < 10 ? "0" + _0x7a0575 : _0x7a0575;
    }
    function _0x136710() {
      return this["valueOf"]();
    }
    function _0x5a6a98(_0x245d0a) {
      return _0x55c021["lastIndex"] = 0, _0x55c021["test"](_0x245d0a) ? "\"" + _0x245d0a["replace"](_0x55c021, function (_0x3bca8e) {
        var _0x34953a = _0x598395[_0x3bca8e];
        return "string" == typeof _0x34953a ? _0x34953a : "\\u" + ("0000" + _0x3bca8e["charCodeAt"](0)["toString"](16))["slice"](-4);
      }) + "\"" : "\"" + _0x245d0a + "\"";
    }
    function _0x340ff1(_0x9506d0, _0x450616) {
      var _0x229278,
        _0x44b694,
        _0x1e7b25,
        _0x536c41,
        _0x88c533,
        _0x2ddae0 = _0x28df49,
        _0x123743 = _0x450616[_0x9506d0];
      switch (_0x123743 && "object" === ("undefined" == typeof _0x123743 ? "undefined" : _0x2d780a(_0x123743)) && "function" == typeof _0x123743["toJSON"] && (_0x123743 = _0x123743["toJSON"](_0x9506d0)), "function" == typeof _0x1dd3a2 && (_0x123743 = _0x1dd3a2["call"](_0x450616, _0x9506d0, _0x123743)), "undefined" == typeof _0x123743 ? "undefined" : _0x2d780a(_0x123743)) {
        case "string":
          return _0x5a6a98(_0x123743);
        case "number":
          return isFinite(_0x123743) ? String(_0x123743) : "null";
        case "boolean":
        case "null":
          return String(_0x123743);
        case "object":
          if (!_0x123743) return "null";
          if (_0x28df49 += _0x100a9c, _0x88c533 = [], "[object Array]" === Object["prototype"]["toString"]["apply"](_0x123743)) {
            for (_0x536c41 = _0x123743["length"], _0x229278 = 0; _0x229278 < _0x536c41; _0x229278 += 1) _0x88c533[_0x229278] = _0x340ff1(_0x229278, _0x123743) || "null";
            return _0x1e7b25 = 0 === _0x88c533["length"] ? "[]" : _0x28df49 ? "[\n" + _0x28df49 + _0x88c533["join"](",\n" + _0x28df49) + "\n" + _0x2ddae0 + "]" : "[" + _0x88c533["join"](",") + "]", _0x28df49 = _0x2ddae0, _0x1e7b25;
          }
          if (_0x1dd3a2 && "object" === ("undefined" == typeof _0x1dd3a2 ? "undefined" : _0x2d780a(_0x1dd3a2))) {
            for (_0x536c41 = _0x1dd3a2["length"], _0x229278 = 0; _0x229278 < _0x536c41; _0x229278 += 1) "string" == typeof _0x1dd3a2[_0x229278] && (_0x44b694 = _0x1dd3a2[_0x229278], _0x1e7b25 = _0x340ff1(_0x44b694, _0x123743), _0x1e7b25 && _0x88c533["push"](_0x5a6a98(_0x44b694) + (_0x28df49 ? ": " : ":") + _0x1e7b25));
          } else {
            for (_0x44b694 in _0x123743) Object["prototype"]["hasOwnProperty"]["call"](_0x123743, _0x44b694) && (_0x1e7b25 = _0x340ff1(_0x44b694, _0x123743), _0x1e7b25 && _0x88c533["push"](_0x5a6a98(_0x44b694) + (_0x28df49 ? ": " : ":") + _0x1e7b25));
          }
          return _0x1e7b25 = 0 === _0x88c533["length"] ? "{}" : _0x28df49 ? "{\n" + _0x28df49 + _0x88c533["join"](",\n" + _0x28df49) + "\n" + _0x2ddae0 + "}" : "{" + _0x88c533["join"](",") + "}", _0x28df49 = _0x2ddae0, _0x1e7b25;
      }
    }
    var _0x1b9068 = /^[\],:{}\s]*$/,
      _0x12c567 = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,
      _0x40aba0 = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
      _0x1b980c = /(?:^|:|,)(?:\s*\[)+/g,
      _0x55c021 = /[\\"\u0000-\u001f\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
      _0x3db68b = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
    "function" != typeof Date["prototype"]["toJSON"] && (Date["prototype"]["toJSON"] = function () {
      return isFinite(this["valueOf"]()) ? this["getUTCFullYear"]() + "-" + _0x2c685c(this["getUTCMonth"]() + 1) + "-" + _0x2c685c(this["getUTCDate"]()) + "T" + _0x2c685c(this["getUTCHours"]()) + ":" + _0x2c685c(this["getUTCMinutes"]()) + ":" + _0x2c685c(this["getUTCSeconds"]()) + "Z" : null;
    }, Boolean["prototype"]["toJSON"] = _0x136710, Number["prototype"]["toJSON"] = _0x136710, String["prototype"]["toJSON"] = _0x136710);
    var _0x28df49, _0x100a9c, _0x598395, _0x1dd3a2;
    "function" != typeof JSON["stringify"] && (_0x598395 = {
      "\b": "\\b",
      "\t": "\\t",
      "\n": "\\n",
      "\f": "\\f",
      "\r": "\\r",
      "\"": "\\\"",
      "\\": "\\\\"
    }, JSON["stringify"] = function (_0x1cf9a8, _0x25a7d9, _0x139b66) {
      var _0x2341f4;
      if (_0x28df49 = "", _0x100a9c = "", "number" == typeof _0x139b66) {
        for (_0x2341f4 = 0; _0x2341f4 < _0x139b66; _0x2341f4 += 1) _0x100a9c += " ";
      } else "string" == typeof _0x139b66 && (_0x100a9c = _0x139b66);
      if (_0x1dd3a2 = _0x25a7d9, _0x25a7d9 && "function" != typeof _0x25a7d9 && ("object" !== ("undefined" == typeof _0x25a7d9 ? "undefined" : _0x2d780a(_0x25a7d9)) || "number" != typeof _0x25a7d9["length"])) throw new Error("JSON.stringify");
      return _0x340ff1("", {
        "": _0x1cf9a8
      });
    }), "function" != typeof JSON["parse"] && (JSON["parse"] = function (_0x496064, _0x1963a8) {
      function _0x33e685(_0x539d64, _0x1adda2) {
        var _0x1657d7,
          _0x55ecec,
          _0x4d511a = _0x539d64[_0x1adda2];
        if (_0x4d511a && "object" === ("undefined" == typeof _0x4d511a ? "undefined" : _0x2d780a(_0x4d511a))) {
          for (_0x1657d7 in _0x4d511a) Object["prototype"]["hasOwnProperty"]["call"](_0x4d511a, _0x1657d7) && (_0x55ecec = _0x33e685(_0x4d511a, _0x1657d7), void 0 !== _0x55ecec ? _0x4d511a[_0x1657d7] = _0x55ecec : delete _0x4d511a[_0x1657d7]);
        }
        return _0x1963a8["call"](_0x539d64, _0x1adda2, _0x4d511a);
      }
      var _0x27b5d6;
      if (_0x496064 = String(_0x496064), _0x3db68b["lastIndex"] = 0, _0x3db68b["test"](_0x496064) && (_0x496064 = _0x496064["replace"](_0x3db68b, function (_0x1f6324) {
        return "\\u" + ("0000" + _0x1f6324["charCodeAt"](0)["toString"](16))["slice"](-4);
      })), _0x1b9068["test"](_0x496064["replace"](_0x12c567, "@")["replace"](_0x40aba0, "]")["replace"](_0x1b980c, ""))) return _0x27b5d6 = eval("(" + _0x496064 + ")"), "function" == typeof _0x1963a8 ? _0x33e685({
        "": _0x27b5d6
      }, "") : _0x27b5d6;
      throw new SyntaxError("JSON.parse");
    });
  }();
}, function (_0x1e3e54, _0xb90b91) {
  function _0x5eff3f(_0x585a94) {
    this["mode"] = _0x301f42["MODE_8BIT_BYTE"], this["data"] = _0x585a94, this["parsedData"] = [];
    for (var _0x485e17 = 0, _0x256adc = this["data"]["length"]; _0x485e17 < _0x256adc; _0x485e17++) {
      var _0x1a7da3 = [],
        _0x2e20b0 = this["data"]["charCodeAt"](_0x485e17);
      _0x2e20b0 > 65536 ? (_0x1a7da3[0] = 240 | (1835008 & _0x2e20b0) >>> 18, _0x1a7da3[1] = 128 | (258048 & _0x2e20b0) >>> 12, _0x1a7da3[2] = 128 | (4032 & _0x2e20b0) >>> 6, _0x1a7da3[3] = 128 | 63 & _0x2e20b0) : _0x2e20b0 > 2048 ? (_0x1a7da3[0] = 224 | (61440 & _0x2e20b0) >>> 12, _0x1a7da3[1] = 128 | (4032 & _0x2e20b0) >>> 6, _0x1a7da3[2] = 128 | 63 & _0x2e20b0) : _0x2e20b0 > 128 ? (_0x1a7da3[0] = 192 | (1984 & _0x2e20b0) >>> 6, _0x1a7da3[1] = 128 | 63 & _0x2e20b0) : _0x1a7da3[0] = _0x2e20b0, this["parsedData"]["push"](_0x1a7da3);
    }
    this["parsedData"] = Array["prototype"]["concat"]["apply"]([], this["parsedData"]), this["parsedData"]["length"] != this["data"]["length"] && (this["parsedData"]["unshift"](191), this["parsedData"]["unshift"](187), this["parsedData"]["unshift"](239));
  }
  function _0x13415c(_0x7071a8, _0x325b06) {
    this["typeNumber"] = _0x7071a8, this["errorCorrectLevel"] = _0x325b06, this["modules"] = null, this["moduleCount"] = 0, this["dataCache"] = null, this["dataList"] = [];
  }
  function _0x1120e8(_0x5bff7f, _0x3716b4) {
    if (void 0 == _0x5bff7f["length"]) throw new Error(_0x5bff7f["length"] + "/" + _0x3716b4);
    for (var _0x82fc7b = 0; _0x82fc7b < _0x5bff7f["length"] && 0 == _0x5bff7f[_0x82fc7b];) _0x82fc7b++;
    this["num"] = new Array(_0x5bff7f["length"] - _0x82fc7b + _0x3716b4);
    for (var _0x4a0013 = 0; _0x4a0013 < _0x5bff7f["length"] - _0x82fc7b; _0x4a0013++) this["num"][_0x4a0013] = _0x5bff7f[_0x4a0013 + _0x82fc7b];
  }
  function _0x30662e(_0x279f73, _0x344f09) {
    this["totalCount"] = _0x279f73, this["dataCount"] = _0x344f09;
  }
  function _0x411798() {
    this["buffer"] = [], this["length"] = 0;
  }
  function _0x8e21ed() {
    return "undefined" != typeof CanvasRenderingContext2D;
  }
  function _0x58a3ac() {
    var _0x3b244c = !1,
      _0x26a04b = navigator["userAgent"];
    if (/android/i["test"](_0x26a04b)) {
      _0x3b244c = !0;
      var _0x5daad5 = _0x26a04b["toString"]()["match"](/android ([0-9]\.[0-9])/i);
      _0x5daad5 && _0x5daad5[1] && (_0x3b244c = parseFloat(_0x5daad5[1]));
    }
    return _0x3b244c;
  }
  function _0x1f1493(_0x1d5170, _0x1cbd90) {
    for (var _0x41c624 = 1, _0x793600 = _0x4d5aed(_0x1d5170), _0x2e589c = 0, _0x27dc29 = _0x30aaef["length"]; _0x2e589c <= _0x27dc29; _0x2e589c++) {
      var _0x33edd1 = 0;
      switch (_0x1cbd90) {
        case _0x2de098["L"]:
          _0x33edd1 = _0x30aaef[_0x2e589c][0];
          break;
        case _0x2de098["M"]:
          _0x33edd1 = _0x30aaef[_0x2e589c][1];
          break;
        case _0x2de098["Q"]:
          _0x33edd1 = _0x30aaef[_0x2e589c][2];
          break;
        case _0x2de098["H"]:
          _0x33edd1 = _0x30aaef[_0x2e589c][3];
      }
      if (_0x793600 <= _0x33edd1) break;
      _0x41c624++;
    }
    if (_0x41c624 > _0x30aaef["length"]) throw new Error("Too long data");
    return _0x41c624;
  }
  function _0x4d5aed(_0x2187ca) {
    var _0x5ce015 = encodeURI(_0x2187ca)["toString"]()["replace"](/\%[0-9a-fA-F]{2}/g, "a");
    return _0x5ce015["length"] + (_0x5ce015["length"] != _0x2187ca ? 3 : 0);
  }
  var _0x4dddc1;
  _0x5eff3f["prototype"] = {
    "getLength": function (_0x212d75) {
      return this["parsedData"]["length"];
    },
    "write": function (_0x36b38b) {
      for (var _0x3099b1 = 0, _0x18ccfb = this["parsedData"]["length"]; _0x3099b1 < _0x18ccfb; _0x3099b1++) _0x36b38b["put"](this["parsedData"][_0x3099b1], 8);
    }
  }, _0x13415c["prototype"] = {
    "addData": function (_0x2a3c3e) {
      var _0x1f068a = new _0x5eff3f(_0x2a3c3e);
      this["dataList"]["push"](_0x1f068a), this["dataCache"] = null;
    },
    "isDark": function (_0x251e99, _0x5cc1e2) {
      if (_0x251e99 < 0 || this["moduleCount"] <= _0x251e99 || _0x5cc1e2 < 0 || this["moduleCount"] <= _0x5cc1e2) throw new Error(_0x251e99 + "," + _0x5cc1e2);
      return this["modules"][_0x251e99][_0x5cc1e2];
    },
    "getModuleCount": function () {
      return this["moduleCount"];
    },
    "make": function () {
      this["makeImpl"](!1, this["getBestMaskPattern"]());
    },
    "makeImpl": function (_0x653944, _0x8dcef2) {
      this["moduleCount"] = 4 * this["typeNumber"] + 17, this["modules"] = new Array(this["moduleCount"]);
      for (var _0x1ccd7b = 0; _0x1ccd7b < this["moduleCount"]; _0x1ccd7b++) {
        this["modules"][_0x1ccd7b] = new Array(this["moduleCount"]);
        for (var _0x4a67ea = 0; _0x4a67ea < this["moduleCount"]; _0x4a67ea++) this["modules"][_0x1ccd7b][_0x4a67ea] = null;
      }
      this["setupPositionProbePattern"](0, 0), this["setupPositionProbePattern"](this["moduleCount"] - 7, 0), this["setupPositionProbePattern"](0, this["moduleCount"] - 7), this["setupPositionAdjustPattern"](), this["setupTimingPattern"](), this["setupTypeInfo"](_0x653944, _0x8dcef2), this["typeNumber"] >= 7 && this["setupTypeNumber"](_0x653944), null == this["dataCache"] && (this["dataCache"] = _0x13415c["createData"](this["typeNumber"], this["errorCorrectLevel"], this["dataList"])), this["mapData"](this["dataCache"], _0x8dcef2);
    },
    "setupPositionProbePattern": function (_0x10bcae, _0x384572) {
      for (var _0x4b2aab = -1; _0x4b2aab <= 7; _0x4b2aab++) if (!(_0x10bcae + _0x4b2aab <= -1 || this["moduleCount"] <= _0x10bcae + _0x4b2aab)) {
        for (var _0x57dbf4 = -1; _0x57dbf4 <= 7; _0x57dbf4++) _0x384572 + _0x57dbf4 <= -1 || this["moduleCount"] <= _0x384572 + _0x57dbf4 || (0 <= _0x4b2aab && _0x4b2aab <= 6 && (0 == _0x57dbf4 || 6 == _0x57dbf4) || 0 <= _0x57dbf4 && _0x57dbf4 <= 6 && (0 == _0x4b2aab || 6 == _0x4b2aab) || 2 <= _0x4b2aab && _0x4b2aab <= 4 && 2 <= _0x57dbf4 && _0x57dbf4 <= 4 ? this["modules"][_0x10bcae + _0x4b2aab][_0x384572 + _0x57dbf4] = !0 : this["modules"][_0x10bcae + _0x4b2aab][_0x384572 + _0x57dbf4] = !1);
      }
    },
    "getBestMaskPattern": function () {
      for (var _0x30a1a8 = 0, _0x534d79 = 0, _0x143800 = 0; _0x143800 < 8; _0x143800++) {
        this["makeImpl"](!0, _0x143800);
        var _0x41a320 = _0xb61f3c["getLostPoint"](this);
        (0 == _0x143800 || _0x30a1a8 > _0x41a320) && (_0x30a1a8 = _0x41a320, _0x534d79 = _0x143800);
      }
      return _0x534d79;
    },
    "createMovieClip": function (_0x30e8af, _0x4fa1c7, _0xca3cc3) {
      var _0x16480c = _0x30e8af["createEmptyMovieClip"](_0x4fa1c7, _0xca3cc3),
        _0x131cd0 = 1;
      this["make"]();
      for (var _0xfbdb2d = 0; _0xfbdb2d < this["modules"]["length"]; _0xfbdb2d++) for (var _0x574050 = _0xfbdb2d * _0x131cd0, _0xd9c338 = 0; _0xd9c338 < this["modules"][_0xfbdb2d]["length"]; _0xd9c338++) {
        var _0x50d06c = _0xd9c338 * _0x131cd0,
          _0x42beda = this["modules"][_0xfbdb2d][_0xd9c338];
        _0x42beda && (_0x16480c["beginFill"](0, 100), _0x16480c["moveTo"](_0x50d06c, _0x574050), _0x16480c["lineTo"](_0x50d06c + _0x131cd0, _0x574050), _0x16480c["lineTo"](_0x50d06c + _0x131cd0, _0x574050 + _0x131cd0), _0x16480c["lineTo"](_0x50d06c, _0x574050 + _0x131cd0), _0x16480c["endFill"]());
      }
      return _0x16480c;
    },
    "setupTimingPattern": function () {
      for (var _0x4a70ed = 8; _0x4a70ed < this["moduleCount"] - 8; _0x4a70ed++) null == this["modules"][_0x4a70ed][6] && (this["modules"][_0x4a70ed][6] = _0x4a70ed % 2 == 0);
      for (var _0x2dbce8 = 8; _0x2dbce8 < this["moduleCount"] - 8; _0x2dbce8++) null == this["modules"][6][_0x2dbce8] && (this["modules"][6][_0x2dbce8] = _0x2dbce8 % 2 == 0);
    },
    "setupPositionAdjustPattern": function () {
      for (var _0x54a7a1 = _0xb61f3c["getPatternPosition"](this["typeNumber"]), _0x3c829b = 0; _0x3c829b < _0x54a7a1["length"]; _0x3c829b++) for (var _0x34b0e9 = 0; _0x34b0e9 < _0x54a7a1["length"]; _0x34b0e9++) {
        var _0x1a7839 = _0x54a7a1[_0x3c829b],
          _0x724eb1 = _0x54a7a1[_0x34b0e9];
        if (null == this["modules"][_0x1a7839][_0x724eb1]) {
          for (var _0x1ab4d6 = -2; _0x1ab4d6 <= 2; _0x1ab4d6++) for (var _0x24160f = -2; _0x24160f <= 2; _0x24160f++) _0x1ab4d6 == -2 || 2 == _0x1ab4d6 || _0x24160f == -2 || 2 == _0x24160f || 0 == _0x1ab4d6 && 0 == _0x24160f ? this["modules"][_0x1a7839 + _0x1ab4d6][_0x724eb1 + _0x24160f] = !0 : this["modules"][_0x1a7839 + _0x1ab4d6][_0x724eb1 + _0x24160f] = !1;
        }
      }
    },
    "setupTypeNumber": function (_0x3a3e09) {
      for (var _0x31f85d = _0xb61f3c["getBCHTypeNumber"](this["typeNumber"]), _0x4493ca = 0; _0x4493ca < 18; _0x4493ca++) {
        var _0x2d9f7e = !_0x3a3e09 && 1 == (_0x31f85d >> _0x4493ca & 1);
        this["modules"][Math["floor"](_0x4493ca / 3)][_0x4493ca % 3 + this["moduleCount"] - 8 - 3] = _0x2d9f7e;
      }
      for (var _0x4493ca = 0; _0x4493ca < 18; _0x4493ca++) {
        var _0x2d9f7e = !_0x3a3e09 && 1 == (_0x31f85d >> _0x4493ca & 1);
        this["modules"][_0x4493ca % 3 + this["moduleCount"] - 8 - 3][Math["floor"](_0x4493ca / 3)] = _0x2d9f7e;
      }
    },
    "setupTypeInfo": function (_0x134e24, _0x14640a) {
      for (var _0x266af2 = this["errorCorrectLevel"] << 3 | _0x14640a, _0x43453b = _0xb61f3c["getBCHTypeInfo"](_0x266af2), _0x228ed9 = 0; _0x228ed9 < 15; _0x228ed9++) {
        var _0x3b2e4b = !_0x134e24 && 1 == (_0x43453b >> _0x228ed9 & 1);
        _0x228ed9 < 6 ? this["modules"][_0x228ed9][8] = _0x3b2e4b : _0x228ed9 < 8 ? this["modules"][_0x228ed9 + 1][8] = _0x3b2e4b : this["modules"][this["moduleCount"] - 15 + _0x228ed9][8] = _0x3b2e4b;
      }
      for (var _0x228ed9 = 0; _0x228ed9 < 15; _0x228ed9++) {
        var _0x3b2e4b = !_0x134e24 && 1 == (_0x43453b >> _0x228ed9 & 1);
        _0x228ed9 < 8 ? this["modules"][8][this["moduleCount"] - _0x228ed9 - 1] = _0x3b2e4b : _0x228ed9 < 9 ? this["modules"][8][15 - _0x228ed9 - 1 + 1] = _0x3b2e4b : this["modules"][8][15 - _0x228ed9 - 1] = _0x3b2e4b;
      }
      this["modules"][this["moduleCount"] - 8][8] = !_0x134e24;
    },
    "mapData": function (_0x2a82a4, _0x44a990) {
      for (var _0x1273d0 = -1, _0x3f6d07 = this["moduleCount"] - 1, _0x39685e = 7, _0x184a17 = 0, _0x54f8bc = this["moduleCount"] - 1; _0x54f8bc > 0; _0x54f8bc -= 2) for (6 == _0x54f8bc && _0x54f8bc--;;) {
        for (var _0xd84be1 = 0; _0xd84be1 < 2; _0xd84be1++) if (null == this["modules"][_0x3f6d07][_0x54f8bc - _0xd84be1]) {
          var _0x1e8fad = !1;
          _0x184a17 < _0x2a82a4["length"] && (_0x1e8fad = 1 == (_0x2a82a4[_0x184a17] >>> _0x39685e & 1));
          var _0x4e19a7 = _0xb61f3c["getMask"](_0x44a990, _0x3f6d07, _0x54f8bc - _0xd84be1);
          _0x4e19a7 && (_0x1e8fad = !_0x1e8fad), this["modules"][_0x3f6d07][_0x54f8bc - _0xd84be1] = _0x1e8fad, _0x39685e--, _0x39685e == -1 && (_0x184a17++, _0x39685e = 7);
        }
        if (_0x3f6d07 += _0x1273d0, _0x3f6d07 < 0 || this["moduleCount"] <= _0x3f6d07) {
          _0x3f6d07 -= _0x1273d0, _0x1273d0 = -_0x1273d0;
          break;
        }
      }
    }
  }, _0x13415c["PAD0"] = 236, _0x13415c["PAD1"] = 17, _0x13415c["createData"] = function (_0x6a5cf7, _0x1d1654, _0x52212f) {
    for (var _0x36d921 = _0x30662e["getRSBlocks"](_0x6a5cf7, _0x1d1654), _0x254d94 = new _0x411798(), _0x5ad862 = 0; _0x5ad862 < _0x52212f["length"]; _0x5ad862++) {
      var _0xab376b = _0x52212f[_0x5ad862];
      _0x254d94["put"](_0xab376b["mode"], 4), _0x254d94["put"](_0xab376b["getLength"](), _0xb61f3c["getLengthInBits"](_0xab376b["mode"], _0x6a5cf7)), _0xab376b["write"](_0x254d94);
    }
    for (var _0x3efe89 = 0, _0x5ad862 = 0; _0x5ad862 < _0x36d921["length"]; _0x5ad862++) _0x3efe89 += _0x36d921[_0x5ad862]["dataCount"];
    if (_0x254d94["getLengthInBits"]() > 8 * _0x3efe89) throw new Error("code length overflow. (" + _0x254d94["getLengthInBits"]() + ">" + 8 * _0x3efe89 + ")");
    for (_0x254d94["getLengthInBits"]() + 4 <= 8 * _0x3efe89 && _0x254d94["put"](0, 4); _0x254d94["getLengthInBits"]() % 8 != 0;) _0x254d94["putBit"](!1);
    for (;;) {
      if (_0x254d94["getLengthInBits"]() >= 8 * _0x3efe89) break;
      if (_0x254d94["put"](_0x13415c["PAD0"], 8), _0x254d94["getLengthInBits"]() >= 8 * _0x3efe89) break;
      _0x254d94["put"](_0x13415c["PAD1"], 8);
    }
    return _0x13415c["createBytes"](_0x254d94, _0x36d921);
  }, _0x13415c["createBytes"] = function (_0x310d3d, _0x1aa287) {
    for (var _0x62b507 = 0, _0x180cd6 = 0, _0x1b6ad4 = 0, _0xbf9b4a = new Array(_0x1aa287["length"]), _0x485731 = new Array(_0x1aa287["length"]), _0x271e2b = 0; _0x271e2b < _0x1aa287["length"]; _0x271e2b++) {
      var _0x36b6c7 = _0x1aa287[_0x271e2b]["dataCount"],
        _0x52f94c = _0x1aa287[_0x271e2b]["totalCount"] - _0x36b6c7;
      _0x180cd6 = Math["max"](_0x180cd6, _0x36b6c7), _0x1b6ad4 = Math["max"](_0x1b6ad4, _0x52f94c), _0xbf9b4a[_0x271e2b] = new Array(_0x36b6c7);
      for (var _0x564c5b = 0; _0x564c5b < _0xbf9b4a[_0x271e2b]["length"]; _0x564c5b++) _0xbf9b4a[_0x271e2b][_0x564c5b] = 255 & _0x310d3d["buffer"][_0x564c5b + _0x62b507];
      _0x62b507 += _0x36b6c7;
      var _0x41e094 = _0xb61f3c["getErrorCorrectPolynomial"](_0x52f94c),
        _0x259759 = new _0x1120e8(_0xbf9b4a[_0x271e2b], _0x41e094["getLength"]() - 1),
        _0x3cae57 = _0x259759["mod"](_0x41e094);
      _0x485731[_0x271e2b] = new Array(_0x41e094["getLength"]() - 1);
      for (var _0x564c5b = 0; _0x564c5b < _0x485731[_0x271e2b]["length"]; _0x564c5b++) {
        var _0x27c7f1 = _0x564c5b + _0x3cae57["getLength"]() - _0x485731[_0x271e2b]["length"];
        _0x485731[_0x271e2b][_0x564c5b] = _0x27c7f1 >= 0 ? _0x3cae57["get"](_0x27c7f1) : 0;
      }
    }
    for (var _0x2d3be4 = 0, _0x564c5b = 0; _0x564c5b < _0x1aa287["length"]; _0x564c5b++) _0x2d3be4 += _0x1aa287[_0x564c5b]["totalCount"];
    for (var _0x474a90 = new Array(_0x2d3be4), _0xc244b3 = 0, _0x564c5b = 0; _0x564c5b < _0x180cd6; _0x564c5b++) for (var _0x271e2b = 0; _0x271e2b < _0x1aa287["length"]; _0x271e2b++) _0x564c5b < _0xbf9b4a[_0x271e2b]["length"] && (_0x474a90[_0xc244b3++] = _0xbf9b4a[_0x271e2b][_0x564c5b]);
    for (var _0x564c5b = 0; _0x564c5b < _0x1b6ad4; _0x564c5b++) for (var _0x271e2b = 0; _0x271e2b < _0x1aa287["length"]; _0x271e2b++) _0x564c5b < _0x485731[_0x271e2b]["length"] && (_0x474a90[_0xc244b3++] = _0x485731[_0x271e2b][_0x564c5b]);
    return _0x474a90;
  };
  for (var _0x301f42 = {
      "MODE_NUMBER": 1,
      "MODE_ALPHA_NUM": 2,
      "MODE_8BIT_BYTE": 4,
      "MODE_KANJI": 8
    }, _0x2de098 = {
      "L": 1,
      "M": 0,
      "Q": 3,
      "H": 2
    }, _0x20373f = {
      "PATTERN000": 0,
      "PATTERN001": 1,
      "PATTERN010": 2,
      "PATTERN011": 3,
      "PATTERN100": 4,
      "PATTERN101": 5,
      "PATTERN110": 6,
      "PATTERN111": 7
    }, _0xb61f3c = {
      "PATTERN_POSITION_TABLE": [[], [6, 18], [6, 22], [6, 26], [6, 30], [6, 34], [6, 22, 38], [6, 24, 42], [6, 26, 46], [6, 28, 50], [6, 30, 54], [6, 32, 58], [6, 34, 62], [6, 26, 46, 66], [6, 26, 48, 70], [6, 26, 50, 74], [6, 30, 54, 78], [6, 30, 56, 82], [6, 30, 58, 86], [6, 34, 62, 90], [6, 28, 50, 72, 94], [6, 26, 50, 74, 98], [6, 30, 54, 78, 102], [6, 28, 54, 80, 106], [6, 32, 58, 84, 110], [6, 30, 58, 86, 114], [6, 34, 62, 90, 118], [6, 26, 50, 74, 98, 122], [6, 30, 54, 78, 102, 126], [6, 26, 52, 78, 104, 130], [6, 30, 56, 82, 108, 134], [6, 34, 60, 86, 112, 138], [6, 30, 58, 86, 114, 142], [6, 34, 62, 90, 118, 146], [6, 30, 54, 78, 102, 126, 150], [6, 24, 50, 76, 102, 128, 154], [6, 28, 54, 80, 106, 132, 158], [6, 32, 58, 84, 110, 136, 162], [6, 26, 54, 82, 110, 138, 166], [6, 30, 58, 86, 114, 142, 170]],
      "G15": 1335,
      "G18": 7973,
      "G15_MASK": 21522,
      "getBCHTypeInfo": function (_0x3f3eae) {
        for (var _0x4841e0 = _0x3f3eae << 10; _0xb61f3c["getBCHDigit"](_0x4841e0) - _0xb61f3c["getBCHDigit"](_0xb61f3c["G15"]) >= 0;) _0x4841e0 ^= _0xb61f3c["G15"] << _0xb61f3c["getBCHDigit"](_0x4841e0) - _0xb61f3c["getBCHDigit"](_0xb61f3c["G15"]);
        return (_0x3f3eae << 10 | _0x4841e0) ^ _0xb61f3c["G15_MASK"];
      },
      "getBCHTypeNumber": function (_0x2ad39d) {
        for (var _0x44cffa = _0x2ad39d << 12; _0xb61f3c["getBCHDigit"](_0x44cffa) - _0xb61f3c["getBCHDigit"](_0xb61f3c["G18"]) >= 0;) _0x44cffa ^= _0xb61f3c["G18"] << _0xb61f3c["getBCHDigit"](_0x44cffa) - _0xb61f3c["getBCHDigit"](_0xb61f3c["G18"]);
        return _0x2ad39d << 12 | _0x44cffa;
      },
      "getBCHDigit": function (_0x303977) {
        for (var _0x4eb3fc = 0; 0 != _0x303977;) _0x4eb3fc++, _0x303977 >>>= 1;
        return _0x4eb3fc;
      },
      "getPatternPosition": function (_0x5cecac) {
        return _0xb61f3c["PATTERN_POSITION_TABLE"][_0x5cecac - 1];
      },
      "getMask": function (_0x4d7df1, _0x1eb6e5, _0x43117c) {
        switch (_0x4d7df1) {
          case _0x20373f["PATTERN000"]:
            return (_0x1eb6e5 + _0x43117c) % 2 == 0;
          case _0x20373f["PATTERN001"]:
            return _0x1eb6e5 % 2 == 0;
          case _0x20373f["PATTERN010"]:
            return _0x43117c % 3 == 0;
          case _0x20373f["PATTERN011"]:
            return (_0x1eb6e5 + _0x43117c) % 3 == 0;
          case _0x20373f["PATTERN100"]:
            return (Math["floor"](_0x1eb6e5 / 2) + Math["floor"](_0x43117c / 3)) % 2 == 0;
          case _0x20373f["PATTERN101"]:
            return _0x1eb6e5 * _0x43117c % 2 + _0x1eb6e5 * _0x43117c % 3 == 0;
          case _0x20373f["PATTERN110"]:
            return (_0x1eb6e5 * _0x43117c % 2 + _0x1eb6e5 * _0x43117c % 3) % 2 == 0;
          case _0x20373f["PATTERN111"]:
            return (_0x1eb6e5 * _0x43117c % 3 + (_0x1eb6e5 + _0x43117c) % 2) % 2 == 0;
          default:
            throw new Error("bad maskPattern:" + _0x4d7df1);
        }
      },
      "getErrorCorrectPolynomial": function (_0x2c0916) {
        for (var _0x470ba2 = new _0x1120e8([1], 0), _0x28a364 = 0; _0x28a364 < _0x2c0916; _0x28a364++) _0x470ba2 = _0x470ba2["multiply"](new _0x1120e8([1, _0x1ac49c["gexp"](_0x28a364)], 0));
        return _0x470ba2;
      },
      "getLengthInBits": function (_0xfc0a81, _0x49ec09) {
        if (1 <= _0x49ec09 && _0x49ec09 < 10) switch (_0xfc0a81) {
          case _0x301f42["MODE_NUMBER"]:
            return 10;
          case _0x301f42["MODE_ALPHA_NUM"]:
            return 9;
          case _0x301f42["MODE_8BIT_BYTE"]:
            return 8;
          case _0x301f42["MODE_KANJI"]:
            return 8;
          default:
            throw new Error("mode:" + _0xfc0a81);
        } else {
          if (_0x49ec09 < 27) switch (_0xfc0a81) {
            case _0x301f42["MODE_NUMBER"]:
              return 12;
            case _0x301f42["MODE_ALPHA_NUM"]:
              return 11;
            case _0x301f42["MODE_8BIT_BYTE"]:
              return 16;
            case _0x301f42["MODE_KANJI"]:
              return 10;
            default:
              throw new Error("mode:" + _0xfc0a81);
          } else {
            if (!(_0x49ec09 < 41)) throw new Error("type:" + _0x49ec09);
            switch (_0xfc0a81) {
              case _0x301f42["MODE_NUMBER"]:
                return 14;
              case _0x301f42["MODE_ALPHA_NUM"]:
                return 13;
              case _0x301f42["MODE_8BIT_BYTE"]:
                return 16;
              case _0x301f42["MODE_KANJI"]:
                return 12;
              default:
                throw new Error("mode:" + _0xfc0a81);
            }
          }
        }
      },
      "getLostPoint": function (_0x402a3c) {
        for (var _0x477510 = _0x402a3c["getModuleCount"](), _0x8656e4 = 0, _0x42f423 = 0; _0x42f423 < _0x477510; _0x42f423++) for (var _0x5a081d = 0; _0x5a081d < _0x477510; _0x5a081d++) {
          for (var _0x432c53 = 0, _0x346f8d = _0x402a3c["isDark"](_0x42f423, _0x5a081d), _0x26f836 = -1; _0x26f836 <= 1; _0x26f836++) if (!(_0x42f423 + _0x26f836 < 0 || _0x477510 <= _0x42f423 + _0x26f836)) {
            for (var _0x395fa0 = -1; _0x395fa0 <= 1; _0x395fa0++) _0x5a081d + _0x395fa0 < 0 || _0x477510 <= _0x5a081d + _0x395fa0 || 0 == _0x26f836 && 0 == _0x395fa0 || _0x346f8d == _0x402a3c["isDark"](_0x42f423 + _0x26f836, _0x5a081d + _0x395fa0) && _0x432c53++;
          }
          _0x432c53 > 5 && (_0x8656e4 += 3 + _0x432c53 - 5);
        }
        for (var _0x42f423 = 0; _0x42f423 < _0x477510 - 1; _0x42f423++) for (var _0x5a081d = 0; _0x5a081d < _0x477510 - 1; _0x5a081d++) {
          var _0x39cc46 = 0;
          _0x402a3c["isDark"](_0x42f423, _0x5a081d) && _0x39cc46++, _0x402a3c["isDark"](_0x42f423 + 1, _0x5a081d) && _0x39cc46++, _0x402a3c["isDark"](_0x42f423, _0x5a081d + 1) && _0x39cc46++, _0x402a3c["isDark"](_0x42f423 + 1, _0x5a081d + 1) && _0x39cc46++, 0 != _0x39cc46 && 4 != _0x39cc46 || (_0x8656e4 += 3);
        }
        for (var _0x42f423 = 0; _0x42f423 < _0x477510; _0x42f423++) for (var _0x5a081d = 0; _0x5a081d < _0x477510 - 6; _0x5a081d++) _0x402a3c["isDark"](_0x42f423, _0x5a081d) && !_0x402a3c["isDark"](_0x42f423, _0x5a081d + 1) && _0x402a3c["isDark"](_0x42f423, _0x5a081d + 2) && _0x402a3c["isDark"](_0x42f423, _0x5a081d + 3) && _0x402a3c["isDark"](_0x42f423, _0x5a081d + 4) && !_0x402a3c["isDark"](_0x42f423, _0x5a081d + 5) && _0x402a3c["isDark"](_0x42f423, _0x5a081d + 6) && (_0x8656e4 += 40);
        for (var _0x5a081d = 0; _0x5a081d < _0x477510; _0x5a081d++) for (var _0x42f423 = 0; _0x42f423 < _0x477510 - 6; _0x42f423++) _0x402a3c["isDark"](_0x42f423, _0x5a081d) && !_0x402a3c["isDark"](_0x42f423 + 1, _0x5a081d) && _0x402a3c["isDark"](_0x42f423 + 2, _0x5a081d) && _0x402a3c["isDark"](_0x42f423 + 3, _0x5a081d) && _0x402a3c["isDark"](_0x42f423 + 4, _0x5a081d) && !_0x402a3c["isDark"](_0x42f423 + 5, _0x5a081d) && _0x402a3c["isDark"](_0x42f423 + 6, _0x5a081d) && (_0x8656e4 += 40);
        for (var _0x5cd2b2 = 0, _0x5a081d = 0; _0x5a081d < _0x477510; _0x5a081d++) for (var _0x42f423 = 0; _0x42f423 < _0x477510; _0x42f423++) _0x402a3c["isDark"](_0x42f423, _0x5a081d) && _0x5cd2b2++;
        var _0x503f51 = Math["abs"](100 * _0x5cd2b2 / _0x477510 / _0x477510 - 50) / 5;
        return _0x8656e4 += 10 * _0x503f51;
      }
    }, _0x1ac49c = {
      "glog": function (_0x5d4262) {
        if (_0x5d4262 < 1) throw new Error("glog(" + _0x5d4262 + ")");
        return _0x1ac49c["LOG_TABLE"][_0x5d4262];
      },
      "gexp": function (_0x611c56) {
        for (; _0x611c56 < 0;) _0x611c56 += 255;
        for (; _0x611c56 >= 256;) _0x611c56 -= 255;
        return _0x1ac49c["EXP_TABLE"][_0x611c56];
      },
      "EXP_TABLE": new Array(256),
      "LOG_TABLE": new Array(256)
    }, _0xbcad46 = 0; _0xbcad46 < 8; _0xbcad46++) _0x1ac49c["EXP_TABLE"][_0xbcad46] = 1 << _0xbcad46;
  for (var _0xbcad46 = 8; _0xbcad46 < 256; _0xbcad46++) _0x1ac49c["EXP_TABLE"][_0xbcad46] = _0x1ac49c["EXP_TABLE"][_0xbcad46 - 4] ^ _0x1ac49c["EXP_TABLE"][_0xbcad46 - 5] ^ _0x1ac49c["EXP_TABLE"][_0xbcad46 - 6] ^ _0x1ac49c["EXP_TABLE"][_0xbcad46 - 8];
  for (var _0xbcad46 = 0; _0xbcad46 < 255; _0xbcad46++) _0x1ac49c["LOG_TABLE"][_0x1ac49c["EXP_TABLE"][_0xbcad46]] = _0xbcad46;
  _0x1120e8["prototype"] = {
    "get": function (_0x6fb968) {
      return this["num"][_0x6fb968];
    },
    "getLength": function () {
      return this["num"]["length"];
    },
    "multiply": function (_0x358110) {
      for (var _0x75dd3b = new Array(this["getLength"]() + _0x358110["getLength"]() - 1), _0x4ab6cd = 0; _0x4ab6cd < this["getLength"](); _0x4ab6cd++) for (var _0x4ab20f = 0; _0x4ab20f < _0x358110["getLength"](); _0x4ab20f++) _0x75dd3b[_0x4ab6cd + _0x4ab20f] ^= _0x1ac49c["gexp"](_0x1ac49c["glog"](this["get"](_0x4ab6cd)) + _0x1ac49c["glog"](_0x358110["get"](_0x4ab20f)));
      return new _0x1120e8(_0x75dd3b, 0);
    },
    "mod": function (_0xe86f69) {
      if (this["getLength"]() - _0xe86f69["getLength"]() < 0) return this;
      for (var _0x39a1a9 = _0x1ac49c["glog"](this["get"](0)) - _0x1ac49c["glog"](_0xe86f69["get"](0)), _0x55a288 = new Array(this["getLength"]()), _0x46c8c5 = 0; _0x46c8c5 < this["getLength"](); _0x46c8c5++) _0x55a288[_0x46c8c5] = this["get"](_0x46c8c5);
      for (var _0x46c8c5 = 0; _0x46c8c5 < _0xe86f69["getLength"](); _0x46c8c5++) _0x55a288[_0x46c8c5] ^= _0x1ac49c["gexp"](_0x1ac49c["glog"](_0xe86f69["get"](_0x46c8c5)) + _0x39a1a9);
      return new _0x1120e8(_0x55a288, 0)["mod"](_0xe86f69);
    }
  }, _0x30662e["RS_BLOCK_TABLE"] = [[1, 26, 19], [1, 26, 16], [1, 26, 13], [1, 26, 9], [1, 44, 34], [1, 44, 28], [1, 44, 22], [1, 44, 16], [1, 70, 55], [1, 70, 44], [2, 35, 17], [2, 35, 13], [1, 100, 80], [2, 50, 32], [2, 50, 24], [4, 25, 9], [1, 134, 108], [2, 67, 43], [2, 33, 15, 2, 34, 16], [2, 33, 11, 2, 34, 12], [2, 86, 68], [4, 43, 27], [4, 43, 19], [4, 43, 15], [2, 98, 78], [4, 49, 31], [2, 32, 14, 4, 33, 15], [4, 39, 13, 1, 40, 14], [2, 121, 97], [2, 60, 38, 2, 61, 39], [4, 40, 18, 2, 41, 19], [4, 40, 14, 2, 41, 15], [2, 146, 116], [3, 58, 36, 2, 59, 37], [4, 36, 16, 4, 37, 17], [4, 36, 12, 4, 37, 13], [2, 86, 68, 2, 87, 69], [4, 69, 43, 1, 70, 44], [6, 43, 19, 2, 44, 20], [6, 43, 15, 2, 44, 16], [4, 101, 81], [1, 80, 50, 4, 81, 51], [4, 50, 22, 4, 51, 23], [3, 36, 12, 8, 37, 13], [2, 116, 92, 2, 117, 93], [6, 58, 36, 2, 59, 37], [4, 46, 20, 6, 47, 21], [7, 42, 14, 4, 43, 15], [4, 133, 107], [8, 59, 37, 1, 60, 38], [8, 44, 20, 4, 45, 21], [12, 33, 11, 4, 34, 12], [3, 145, 115, 1, 146, 116], [4, 64, 40, 5, 65, 41], [11, 36, 16, 5, 37, 17], [11, 36, 12, 5, 37, 13], [5, 109, 87, 1, 110, 88], [5, 65, 41, 5, 66, 42], [5, 54, 24, 7, 55, 25], [11, 36, 12], [5, 122, 98, 1, 123, 99], [7, 73, 45, 3, 74, 46], [15, 43, 19, 2, 44, 20], [3, 45, 15, 13, 46, 16], [1, 135, 107, 5, 136, 108], [10, 74, 46, 1, 75, 47], [1, 50, 22, 15, 51, 23], [2, 42, 14, 17, 43, 15], [5, 150, 120, 1, 151, 121], [9, 69, 43, 4, 70, 44], [17, 50, 22, 1, 51, 23], [2, 42, 14, 19, 43, 15], [3, 141, 113, 4, 142, 114], [3, 70, 44, 11, 71, 45], [17, 47, 21, 4, 48, 22], [9, 39, 13, 16, 40, 14], [3, 135, 107, 5, 136, 108], [3, 67, 41, 13, 68, 42], [15, 54, 24, 5, 55, 25], [15, 43, 15, 10, 44, 16], [4, 144, 116, 4, 145, 117], [17, 68, 42], [17, 50, 22, 6, 51, 23], [19, 46, 16, 6, 47, 17], [2, 139, 111, 7, 140, 112], [17, 74, 46], [7, 54, 24, 16, 55, 25], [34, 37, 13], [4, 151, 121, 5, 152, 122], [4, 75, 47, 14, 76, 48], [11, 54, 24, 14, 55, 25], [16, 45, 15, 14, 46, 16], [6, 147, 117, 4, 148, 118], [6, 73, 45, 14, 74, 46], [11, 54, 24, 16, 55, 25], [30, 46, 16, 2, 47, 17], [8, 132, 106, 4, 133, 107], [8, 75, 47, 13, 76, 48], [7, 54, 24, 22, 55, 25], [22, 45, 15, 13, 46, 16], [10, 142, 114, 2, 143, 115], [19, 74, 46, 4, 75, 47], [28, 50, 22, 6, 51, 23], [33, 46, 16, 4, 47, 17], [8, 152, 122, 4, 153, 123], [22, 73, 45, 3, 74, 46], [8, 53, 23, 26, 54, 24], [12, 45, 15, 28, 46, 16], [3, 147, 117, 10, 148, 118], [3, 73, 45, 23, 74, 46], [4, 54, 24, 31, 55, 25], [11, 45, 15, 31, 46, 16], [7, 146, 116, 7, 147, 117], [21, 73, 45, 7, 74, 46], [1, 53, 23, 37, 54, 24], [19, 45, 15, 26, 46, 16], [5, 145, 115, 10, 146, 116], [19, 75, 47, 10, 76, 48], [15, 54, 24, 25, 55, 25], [23, 45, 15, 25, 46, 16], [13, 145, 115, 3, 146, 116], [2, 74, 46, 29, 75, 47], [42, 54, 24, 1, 55, 25], [23, 45, 15, 28, 46, 16], [17, 145, 115], [10, 74, 46, 23, 75, 47], [10, 54, 24, 35, 55, 25], [19, 45, 15, 35, 46, 16], [17, 145, 115, 1, 146, 116], [14, 74, 46, 21, 75, 47], [29, 54, 24, 19, 55, 25], [11, 45, 15, 46, 46, 16], [13, 145, 115, 6, 146, 116], [14, 74, 46, 23, 75, 47], [44, 54, 24, 7, 55, 25], [59, 46, 16, 1, 47, 17], [12, 151, 121, 7, 152, 122], [12, 75, 47, 26, 76, 48], [39, 54, 24, 14, 55, 25], [22, 45, 15, 41, 46, 16], [6, 151, 121, 14, 152, 122], [6, 75, 47, 34, 76, 48], [46, 54, 24, 10, 55, 25], [2, 45, 15, 64, 46, 16], [17, 152, 122, 4, 153, 123], [29, 74, 46, 14, 75, 47], [49, 54, 24, 10, 55, 25], [24, 45, 15, 46, 46, 16], [4, 152, 122, 18, 153, 123], [13, 74, 46, 32, 75, 47], [48, 54, 24, 14, 55, 25], [42, 45, 15, 32, 46, 16], [20, 147, 117, 4, 148, 118], [40, 75, 47, 7, 76, 48], [43, 54, 24, 22, 55, 25], [10, 45, 15, 67, 46, 16], [19, 148, 118, 6, 149, 119], [18, 75, 47, 31, 76, 48], [34, 54, 24, 34, 55, 25], [20, 45, 15, 61, 46, 16]], _0x30662e["getRSBlocks"] = function (_0x4804ca, _0xa0716f) {
    var _0x45aaa3 = _0x30662e["getRsBlockTable"](_0x4804ca, _0xa0716f);
    if (void 0 == _0x45aaa3) throw new Error("bad rs block @ typeNumber:" + _0x4804ca + "/errorCorrectLevel:" + _0xa0716f);
    for (var _0x75d394 = _0x45aaa3["length"] / 3, _0x37f689 = [], _0x4ea3fa = 0; _0x4ea3fa < _0x75d394; _0x4ea3fa++) for (var _0x207d58 = _0x45aaa3[3 * _0x4ea3fa + 0], _0x165ee3 = _0x45aaa3[3 * _0x4ea3fa + 1], _0x34178e = _0x45aaa3[3 * _0x4ea3fa + 2], _0x195aa1 = 0; _0x195aa1 < _0x207d58; _0x195aa1++) _0x37f689["push"](new _0x30662e(_0x165ee3, _0x34178e));
    return _0x37f689;
  }, _0x30662e["getRsBlockTable"] = function (_0x409c9b, _0x156ffe) {
    switch (_0x156ffe) {
      case _0x2de098["L"]:
        return _0x30662e["RS_BLOCK_TABLE"][4 * (_0x409c9b - 1) + 0];
      case _0x2de098["M"]:
        return _0x30662e["RS_BLOCK_TABLE"][4 * (_0x409c9b - 1) + 1];
      case _0x2de098["Q"]:
        return _0x30662e["RS_BLOCK_TABLE"][4 * (_0x409c9b - 1) + 2];
      case _0x2de098["H"]:
        return _0x30662e["RS_BLOCK_TABLE"][4 * (_0x409c9b - 1) + 3];
      default:
        return;
    }
  }, _0x411798["prototype"] = {
    "get": function (_0x46a64a) {
      var _0x1630f8 = Math["floor"](_0x46a64a / 8);
      return 1 == (this["buffer"][_0x1630f8] >>> 7 - _0x46a64a % 8 & 1);
    },
    "put": function (_0xb54705, _0x1bd42c) {
      for (var _0x14ed3c = 0; _0x14ed3c < _0x1bd42c; _0x14ed3c++) this["putBit"](1 == (_0xb54705 >>> _0x1bd42c - _0x14ed3c - 1 & 1));
    },
    "getLengthInBits": function () {
      return this["length"];
    },
    "putBit": function (_0x3c92cd) {
      var _0x390d0a = Math["floor"](this["length"] / 8);
      this["buffer"]["length"] <= _0x390d0a && this["buffer"]["push"](0), _0x3c92cd && (this["buffer"][_0x390d0a] |= 128 >>> this["length"] % 8), this["length"]++;
    }
  };
  var _0x30aaef = [[17, 14, 11, 7], [32, 26, 20, 14], [53, 42, 32, 24], [78, 62, 46, 34], [106, 84, 60, 44], [134, 106, 74, 58], [154, 122, 86, 64], [192, 152, 108, 84], [230, 180, 130, 98], [271, 213, 151, 119], [321, 251, 177, 137], [367, 287, 203, 155], [425, 331, 241, 177], [458, 362, 258, 194], [520, 412, 292, 220], [586, 450, 322, 250], [644, 504, 364, 280], [718, 560, 394, 310], [792, 624, 442, 338], [858, 666, 482, 382], [929, 711, 509, 403], [1003, 779, 565, 439], [1091, 857, 611, 461], [1171, 911, 661, 511], [1273, 997, 715, 535], [1367, 1059, 751, 593], [1465, 1125, 805, 625], [1528, 1190, 868, 658], [1628, 1264, 908, 698], [1732, 1370, 982, 742], [1840, 1452, 1030, 790], [1952, 1538, 1112, 842], [2068, 1628, 1168, 898], [2188, 1722, 1228, 958], [2303, 1809, 1283, 983], [2431, 1911, 1351, 1051], [2563, 1989, 1423, 1093], [2699, 2099, 1499, 1139], [2809, 2213, 1579, 1219], [2953, 2331, 1663, 1273]],
    _0x1f9d76 = function () {
      function _0xd83335() {
        this["_htOption"]["useCanvas"] ? (this["_elImage"]["style"]["display"] = "none", this["_elCanvas"]["style"]["display"] = "block") : (this["_elImage"]["src"] = this["_elCanvas"]["toDataURL"]("image/png"), this["_elImage"]["style"]["display"] = "block", this["_elCanvas"]["style"]["display"] = "none");
      }
      function _0x29f2d3(_0x22cf25, _0x2bccd1) {
        var _0x718aa5 = this;
        if (_0x718aa5["_fFail"] = _0x2bccd1, _0x718aa5["_fSuccess"] = _0x22cf25, null === _0x718aa5["_bSupportDataURI"]) {
          var _0x441bf7 = document["createElement"]("img"),
            _0xe13417 = function () {
              _0x718aa5["_bSupportDataURI"] = !1, _0x718aa5["_fFail"] && _0x718aa5["_fFail"]["call"](_0x718aa5);
            },
            _0xccea69 = function () {
              _0x718aa5["_bSupportDataURI"] = !0, _0x718aa5["_fSuccess"] && _0x718aa5["_fSuccess"]["call"](_0x718aa5);
            };
          return _0x441bf7["onabort"] = _0xe13417, _0x441bf7["onerror"] = _0xe13417, _0x441bf7["onload"] = _0xccea69, void (_0x441bf7["src"] = "data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==");
        }
        _0x718aa5["_bSupportDataURI"] === !0 && _0x718aa5["_fSuccess"] ? _0x718aa5["_fSuccess"]["call"](_0x718aa5) : _0x718aa5["_bSupportDataURI"] === !1 && _0x718aa5["_fFail"] && _0x718aa5["_fFail"]["call"](_0x718aa5);
      }
      if (this && this["_android"] && this["_android"] <= 2.1) {
        var _0x4535e2 = 1 / window["devicePixelRatio"],
          _0x309486 = CanvasRenderingContext2D["prototype"]["drawImage"];
        CanvasRenderingContext2D["prototype"]["drawImage"] = function (_0x379b80, _0x1b5ad7, _0x10eded, _0x500ea5, _0x21b893, _0x382422, _0x2243e3, _0x5ecd8c, _0x233711) {
          if ("nodeName" in _0x379b80 && /img/i["test"](_0x379b80["nodeName"])) {
            for (var _0x26196b = arguments["length"] - 1; _0x26196b >= 1; _0x26196b--) arguments[_0x26196b] = arguments[_0x26196b] * _0x4535e2;
          } else "undefined" == typeof _0x5ecd8c && (arguments[1] *= _0x4535e2, arguments[2] *= _0x4535e2, arguments[3] *= _0x4535e2, arguments[4] *= _0x4535e2);
          _0x309486["apply"](this, arguments);
        };
      }
      var _0x1e85fc = function (_0x4d5735, _0x4e12ab) {
        this["_bIsPainted"] = !1, this["_android"] = _0x58a3ac(), this["_htOption"] = _0x4e12ab, this["_elCanvas"] = document["createElement"]("canvas"), this["_elCanvas"]["width"] = _0x4e12ab["width"], this["_elCanvas"]["height"] = _0x4e12ab["height"], this["_htOption"]["useCanvas"] && _0x4d5735["appendChild"](this["_elCanvas"]), this["_el"] = _0x4d5735, this["_oContext"] = this["_elCanvas"]["getContext"]("2d"), this["_bIsPainted"] = !1, this["_elImage"] = document["createElement"]("img"), this["_elImage"]["alt"] = "SMS jump QR code", this["_elImage"]["style"]["display"] = "none", this["_htOption"]["useCanvas"] || this["_el"]["appendChild"](this["_elImage"]), this["_bSupportDataURI"] = null;
      };
      return _0x1e85fc["prototype"]["draw"] = function (_0x556cee) {
        var _0x59836a = this["_elImage"],
          _0x2391f1 = this["_elCanvas"],
          _0x19733d = this["_oContext"],
          _0x1f69be = this["_htOption"],
          _0x458a53 = _0x556cee["getModuleCount"](),
          _0x4e4a80 = _0x1f69be["width"] / _0x458a53,
          _0x11f677 = _0x1f69be["height"] / _0x458a53,
          _0x4ceb3c = Math["round"](_0x4e4a80),
          _0x5e9bf3 = Math["round"](_0x11f677);
        _0x59836a["style"]["display"] = "none", _0x2391f1["style"]["display"] = "none", this["clear"]();
        for (var _0x21225b = 0; _0x21225b < _0x458a53; _0x21225b++) for (var _0x38c32e = 0; _0x38c32e < _0x458a53; _0x38c32e++) {
          var _0x48aa95 = _0x556cee["isDark"](_0x21225b, _0x38c32e),
            _0x27ce17 = _0x38c32e * _0x4e4a80,
            _0x535919 = _0x21225b * _0x11f677;
          _0x19733d["strokeStyle"] = _0x48aa95 ? _0x1f69be["colorDark"] : _0x1f69be["colorLight"], _0x19733d["lineWidth"] = 1, _0x19733d["fillStyle"] = _0x48aa95 ? _0x1f69be["colorDark"] : _0x1f69be["colorLight"], _0x19733d["fillRect"](_0x27ce17, _0x535919, _0x4e4a80, _0x11f677), _0x19733d["strokeRect"](Math["floor"](_0x27ce17) + 0.5, Math["floor"](_0x535919) + 0.5, _0x4ceb3c, _0x5e9bf3), _0x19733d["strokeRect"](Math["ceil"](_0x27ce17) - 0.5, Math["ceil"](_0x535919) - 0.5, _0x4ceb3c, _0x5e9bf3);
        }
        if (this["_htOption"]["imgSrc"] && _0x8e21ed()) {
          var _0x40067c = new Image();
          _0x40067c["crossOrigin"] = "*";
          var _0x493cc0 = this["_htOption"]["width"],
            _0x454abe = this["_htOption"]["imgWidth"],
            _0x5e95a1 = (_0x493cc0 - _0x454abe) / 2,
            _0x477cfd = this;
          _0x40067c["onload"] = function () {
            _0x19733d["drawImage"](_0x40067c, _0x5e95a1, _0x5e95a1, _0x454abe, _0x454abe), _0x477cfd["_htOption"]["useCanvas"] || _0x477cfd["makeImage"]();
          }, _0x40067c["src"] = this["_htOption"]["imgSrc"], (_0x40067c["complete"] || void 0 === _0x40067c["complete"]) && (_0x40067c["src"] = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==", _0x40067c["src"] = this["_htOption"]["imgSrc"]);
        }
        this["_bIsPainted"] = !0;
      }, _0x1e85fc["prototype"]["makeImage"] = function () {
        this["_bIsPainted"] && _0x29f2d3["call"](this, _0xd83335);
      }, _0x1e85fc["prototype"]["isPainted"] = function () {
        return this["_bIsPainted"];
      }, _0x1e85fc["prototype"]["clear"] = function () {
        this["_oContext"]["clearRect"](0, 0, this["_elCanvas"]["width"], this["_elCanvas"]["height"]), this["_bIsPainted"] = !1;
      }, _0x1e85fc["prototype"]["round"] = function (_0x50c257) {
        return _0x50c257 ? Math["floor"](1000 * _0x50c257) / 1000 : _0x50c257;
      }, _0x1e85fc;
    }();
  _0x4dddc1 = function (_0x36873f, _0x37c080) {
    if (this["_htOption"] = {
      "width": 256,
      "height": 256,
      "typeNumber": 4,
      "colorDark": "#000",
      "colorLight": "#fff",
      "correctLevel": _0x2de098["H"],
      "imgSrc": void 0,
      "useCanvas": !0
    }, this["_htOption"]["imgWidth"] = this["_htOption"]["width"] / 4, "string" == typeof _0x37c080 && (_0x37c080 = {
      "text": _0x37c080
    }), _0x37c080) {
      for (var _0x262f64 in _0x37c080) this["_htOption"][_0x262f64] = _0x37c080[_0x262f64];
      _0x37c080["width"] && !_0x37c080["imgWidth"] && (this["_htOption"]["imgWidth"] = this["_htOption"]["width"] / 4);
    }
    "string" == typeof _0x36873f && (_0x36873f = document["getElementById"](_0x36873f)), this["_android"] = _0x58a3ac(), this["_el"] = _0x36873f, this["_oQRCode"] = null, this["_oDrawing"] = new _0x1f9d76(this["_el"], this["_htOption"]), this["_htOption"]["text"] && this["makeCode"](this["_htOption"]["text"]);
  }, _0x4dddc1["prototype"]["makeCode"] = function (_0x373686) {
    this["_oQRCode"] = new _0x13415c(_0x1f1493(_0x373686, this["_htOption"]["correctLevel"]), this["_htOption"]["correctLevel"]), this["_oQRCode"]["addData"](_0x373686), this["_oQRCode"]["make"](), this["_el"]["title"] = _0x373686, this["_oDrawing"]["draw"](this["_oQRCode"]), this["_htOption"]["imgSrc"] && !this["_htOption"]["useCanvas"] || this["makeImage"]();
  }, _0x4dddc1["prototype"]["makeImage"] = function () {
    "function" == typeof this["_oDrawing"]["makeImage"] && (!this["_android"] || this["_android"] >= 3) && this["_oDrawing"]["makeImage"]();
  }, _0x4dddc1["prototype"]["clear"] = function () {
    this["_oDrawing"]["clear"]();
  }, _0x4dddc1["CorrectLevel"] = _0x2de098, _0x1e3e54["exports"] = _0x4dddc1;
}, function (_0x1ce713, _0x47694f) {
  _0x1ce713["exports"] = function (_0x5a7c11, _0x4d722f) {
    function _0x303239() {}
    _0x303239["prototype"] = _0x4d722f["prototype"], _0x5a7c11["prototype"] = new _0x303239(), _0x5a7c11["prototype"]["constructor"] = _0x5a7c11;
  };
}, function (_0x3548a5, _0x29eaf9) {
  Array["isArray"] || (Array["isArray"] = function (_0x5c0978) {
    return "[object Array]" === Object["prototype"]["toString"]["call"](_0x5c0978);
  });
}, function (_0x41cffe, _0xe391d9) {
  "function" != typeof Object["assign"] && (Object["assign"] = function (_0x3f46bb) {
    if (null == _0x3f46bb) throw new TypeError("Cannot convert undefined or null to object");
    _0x3f46bb = Object(_0x3f46bb);
    for (var _0x2bf494 = 1; _0x2bf494 < arguments["length"]; _0x2bf494++) {
      var _0x5ed054 = arguments[_0x2bf494];
      if (null != _0x5ed054) {
        for (var _0x29912f in _0x5ed054) Object["prototype"]["hasOwnProperty"]["call"](_0x5ed054, _0x29912f) && (_0x3f46bb[_0x29912f] = _0x5ed054[_0x29912f]);
      }
    }
    return _0x3f46bb;
  });
}, function (_0xfb6fe9, _0x16a139) {
  var _0xf33ec6 = "function" == typeof Symbol && "symbol" == typeof Symbol["iterator"] ? function (_0x5c3f43) {
    return typeof _0x5c3f43;
  } : function (_0x3080aa) {
    return _0x3080aa && "function" == typeof Symbol && _0x3080aa["constructor"] === Symbol && _0x3080aa !== Symbol["prototype"] ? "symbol" : typeof _0x3080aa;
  };
  Object["keys"] || (Object["keys"] = function () {
    'use strict';

    var _0x4423a6 = Object["prototype"]["hasOwnProperty"],
      _0x8501f9 = !{
        "toString": null
      }["propertyIsEnumerable"]("toString"),
      _0x518c08 = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"],
      _0x2ad48c = _0x518c08["length"];
    return function (_0x2d74ff) {
      if ("function" != typeof _0x2d74ff && ("object" !== ("undefined" == typeof _0x2d74ff ? "undefined" : _0xf33ec6(_0x2d74ff)) || null === _0x2d74ff)) throw new TypeError("Object.keys called on non-object");
      var _0x4b21d5,
        _0x1bf7e9,
        _0x57ca71 = [];
      for (_0x4b21d5 in _0x2d74ff) _0x4423a6["call"](_0x2d74ff, _0x4b21d5) && _0x57ca71["push"](_0x4b21d5);
      if (_0x8501f9) {
        for (_0x1bf7e9 = 0; _0x1bf7e9 < _0x2ad48c; _0x1bf7e9++) _0x4423a6["call"](_0x2d74ff, _0x518c08[_0x1bf7e9]) && _0x57ca71["push"](_0x518c08[_0x1bf7e9]);
      }
      return _0x57ca71;
    };
  }());
}, function (_0x311c9c, _0xde62ba) {
  Array["prototype"]["indexOf"] || (Array["prototype"]["indexOf"] = function (_0x105428, _0x31a77e) {
    var _0x17e35e;
    if (null == this) throw new TypeError("\"this\" is null or not defined");
    var _0x742649 = Object(this),
      _0x1b5a2f = _0x742649["length"] >>> 0;
    if (0 === _0x1b5a2f) return -1;
    var _0x339604 = +_0x31a77e || 0;
    if (Math["abs"](_0x339604) === 1 / 0 && (_0x339604 = 0), _0x339604 >= _0x1b5a2f) return -1;
    for (_0x17e35e = Math["max"](_0x339604 >= 0 ? _0x339604 : _0x1b5a2f - Math["abs"](_0x339604), 0); _0x17e35e < _0x1b5a2f;) {
      if (_0x17e35e in _0x742649 && _0x742649[_0x17e35e] === _0x105428) return _0x17e35e;
      _0x17e35e++;
    }
    return -1;
  });
}, function (_0x5dc590, _0x2402be) {
  Array["prototype"]["map"] || (Array["prototype"]["map"] = function (_0x210054, _0x42559c) {
    var _0xc3df04, _0x132cfb, _0x14a311;
    if (null == this) throw new TypeError(" this is null or not defined");
    var _0x2585ac = Object(this),
      _0x4871d4 = _0x2585ac["length"] >>> 0;
    if ("[object Function]" !== Object["prototype"]["toString"]["call"](_0x210054)) throw new TypeError(_0x210054 + " is not a function");
    for (_0x42559c && (_0xc3df04 = _0x42559c), _0x132cfb = new Array(_0x4871d4), _0x14a311 = 0; _0x14a311 < _0x4871d4;) {
      var _0x5c1438, _0x53c5a4;
      _0x14a311 in _0x2585ac && (_0x5c1438 = _0x2585ac[_0x14a311], _0x53c5a4 = _0x210054["call"](_0xc3df04, _0x5c1438, _0x14a311, _0x2585ac), _0x132cfb[_0x14a311] = _0x53c5a4), _0x14a311++;
    }
    return _0x132cfb;
  });
}, function (_0x1a351a, _0x2597b3) {
  Function["prototype"]["bind"] || (Function["prototype"]["bind"] = function (_0x48ca7b) {
    if ("function" != typeof this) throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
    var _0x252f0c = Array["prototype"]["slice"]["call"](arguments, 1),
      _0x287971 = this,
      _0x46b373 = function () {},
      _0xa2be7b = function () {
        return _0x287971["apply"](this instanceof _0x46b373 ? this : _0x48ca7b, _0x252f0c["concat"](Array["prototype"]["slice"]["call"](arguments)));
      };
    return this["prototype"] && (_0x46b373["prototype"] = this["prototype"]), _0xa2be7b["prototype"] = new _0x46b373(), _0xa2be7b;
  });
}, function (_0x26b464, _0x206cb4, _0x295711) {
  _0x295711(49), _0x295711(56), _0x295711(55), _0x295711(52), _0x295711(54), _0x295711(53), _0x295711(59), _0x295711(57);
}, function (_0x3420f1, _0x323292) {
  String["prototype"]["trim"] || (String["prototype"]["trim"] = function () {
    return this["replace"](/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
  });
}, function (_0x3dc5ba, _0x17d3cd, _0x2dd57f) {
  function _0x5b9085(_0x4f8c05, _0x1cae29, _0x3e6a1d) {
    return _0x1cae29 in _0x4f8c05 ? Object["defineProperty"](_0x4f8c05, _0x1cae29, {
      "value": _0x3e6a1d,
      "enumerable": !0,
      "configurable": !0,
      "writable": !0
    }) : _0x4f8c05[_0x1cae29] = _0x3e6a1d, _0x4f8c05;
  }
  function _0x4222be(_0x4282c4, _0x16e21b) {
    var _0x5b919e = _0x4282c4["apiServer"],
      _0x565b11 = _0x4282c4["protocol"],
      _0x209563 = "/api/v3" + _0x16e21b;
    return Array["isArray"](_0x5b919e) ? _0x5b919e["map"](function (_0x28664b) {
      return _0x3f1a46({
        "protocol": _0x565b11,
        "host": _0x28664b,
        "path": _0x209563
      });
    }) : _0x3f1a46({
      "protocol": _0x565b11,
      "host": _0x5b919e,
      "path": _0x209563
    });
  }
  function _0x262e31(_0x4972ec, _0x5011ff, _0x1e8931) {
    var _0x304cb7 = _0x4972ec || !_0x5011ff && new Error("Server error, \"res\" is not right.(" + _0x1e8931 + ")") || _0x5011ff["error"] && new Error(_0x5011ff["error"] + ": " + _0x5011ff["msg"] + ".(" + _0x1e8931 + ")") || null;
    return !_0x4972ec && _0x5011ff && _0x5011ff["error"] ? (_0x304cb7["code"] = _0x3b9c62, _0x304cb7["errorCode"] = _0x5011ff["error"]) : !_0x4972ec && _0x5011ff || (_0x304cb7["code"] = _0x41ab8a), _0x304cb7;
  }
  function _0x21e205(_0x22abb4) {
    var _0x45b2e2 = arguments["length"] > 1 && void 0 !== arguments[1] ? arguments[1] : 256;
    return null == _0x22abb4 ? "" : String(_0x3561a9["isFn"](_0x22abb4) ? _0x22abb4() : _0x22abb4)["substring"](0, _0x45b2e2);
  }
  function _0x1b7a9a() {
    var _0x134137 = _0x3561a9["uuid"](32);
    return _0x167548(_0x134137);
  }
  function _0x53bce1(_0x370c54, _0x21d22f, _0x46567b) {
    var _0x5b7f32 = _0x2f6341(_0x167548(_0x370c54 + "::" + _0x21d22f));
    return _0x46567b ? _0x46567b + "_" + _0x5b7f32 : _0x5b7f32;
  }
  var _0x1e553a,
    _0x5040ec,
    _0x322864 = _0x2dd57f(4),
    _0x28efa2 = _0x322864["INVOKE_HOOK"],
    _0x530c38 = _0x322864["EVENT_CLOSE"],
    _0x18d291 = _0x322864["EVENT_RESET"],
    _0x32f2ef = _0x322864["SWITCH_TYPE"],
    _0x5a747d = _0x322864["SET_TYPE"],
    _0x32121f = _0x322864["SWITCH_LOAD_STATUS"],
    _0x9152b2 = _0x322864["UPDATE_VERIFY_STATUS"],
    _0x1e210e = _0x322864["REFRESH"],
    _0xb77147 = _0x322864["UPDATE_COUNTS_OF_VERIFYERROR"],
    _0xd922c = _0x322864["SET_TOKEN"],
    _0x14edeb = _0x322864["EVENT_RESET_CLASSIC"],
    _0xd7d2ae = _0x2dd57f(12),
    _0x235fa2 = _0xd7d2ae["FETCH_CAPTCHA"],
    _0x1c4d7d = _0xd7d2ae["FETCH_INTELLISENSE_CAPTCHA"],
    _0x5c499e = _0xd7d2ae["VERIFY_CAPTCHA"],
    _0x14cc34 = _0xd7d2ae["VERIFY_INTELLISENSE_CAPTCHA"],
    _0xcba326 = _0xd7d2ae["RESET_STATE"],
    _0x57cb8e = _0x2dd57f(3),
    _0x99d1a1 = _0x57cb8e["CAPTCHA_TYPE"],
    _0xca2ecd = _0x57cb8e["DEVICE"],
    _0x2dd85b = _0x2dd57f(2),
    _0x3561a9 = _0x2dd57f(1),
    _0x3f1a46 = _0x2dd57f(16),
    _0x334e55 = _0x2dd57f(8),
    _0x167548 = _0x334e55["eypt"],
    _0x2f6341 = _0x2dd57f(39),
    _0x108136 = _0x2dd57f(7),
    _0x43e8e2 = _0x108136["createNetCollect"],
    _0x2fce44 = _0x2dd57f(5),
    _0x1a9a81 = _0x2fce44["UNPASS_ERROR"],
    _0x41ab8a = _0x2fce44["REQUEST_API_ERROR"],
    _0x3b9c62 = _0x2fce44["BUSINESS_ERROR"],
    _0x5c8fc4 = _0x2dd85b["isMobile"] ? _0xca2ecd["TOUCH"] : _0x2dd85b["supportTouch"] ? _0xca2ecd["MOUSE_TOUCH"] : _0xca2ecd["MOUSE"],
    _0x95c9d9 = {
      "state": {
        "version": "2.21.5",
        "fingerprint": "",
        "config": null,
        "langPkg": null,
        "smsNew": !1,
        "captchaType": null,
        "type": "",
        "load": null,
        "verifyStatus": "",
        "token": "",
        "previousToken": "",
        "countsOfVerifyError": 0
      },
      "mutations": (_0x1e553a = {}, _0x5b9085(_0x1e553a, _0x28efa2, function () {}), _0x5b9085(_0x1e553a, _0x530c38, function () {}), _0x5b9085(_0x1e553a, _0x18d291, function () {}), _0x5b9085(_0x1e553a, _0x14edeb, function () {}), _0x5b9085(_0x1e553a, _0x32f2ef, function (_0x46c3d2, _0x3bb751) {
        _0x46c3d2["captchaType"] = _0x3bb751["captchaType"];
      }), _0x5b9085(_0x1e553a, _0x5a747d, function (_0x244986, _0x3d6ee8) {
        _0x244986["type"] = _0x3d6ee8["captchaType"];
      }), _0x5b9085(_0x1e553a, _0x32121f, function (_0x9a2c6c, _0x292a0d) {
        _0x9a2c6c["load"] = _0x292a0d;
      }), _0x5b9085(_0x1e553a, _0x9152b2, function (_0x7a763a, _0x325877) {
        _0x7a763a["verifyStatus"] = _0x325877["verifyStatus"];
      }), _0x5b9085(_0x1e553a, _0x1e210e, function (_0x503347) {
        _0x503347["load"] = null, _0x503347["verifyStatus"] = "";
      }), _0x5b9085(_0x1e553a, _0xb77147, function (_0x45f78a, _0x1cb724) {
        _0x45f78a["countsOfVerifyError"] = _0x1cb724["counts"];
      }), _0x5b9085(_0x1e553a, _0xd922c, function (_0x4cc456, _0xef6df1) {
        _0xef6df1 && (_0x4cc456["previousToken"] = _0xef6df1), _0x4cc456["token"] = _0xef6df1;
      }), _0x1e553a),
      "actions": (_0x5040ec = {}, _0x5b9085(_0x5040ec, _0xcba326, function (_0x45c197) {
        var _0x41034f = _0x45c197["commit"];
        _0x41034f(_0x32f2ef, {
          "captchaType": null
        }), _0x41034f(_0x32121f, null), _0x41034f(_0x9152b2, {
          "verifyStatus": ""
        }), _0x41034f(_0xd922c, ""), _0x41034f(_0xb77147, {
          "counts": 0
        });
      }), _0x5b9085(_0x5040ec, _0x235fa2, function (_0x2c0665, _0x4f260b) {
        var _0x5c5347 = _0x2c0665["commit"],
          _0x545743 = _0x2c0665["state"],
          _0x304011 = arguments["length"] > 2 && void 0 !== arguments[2] ? arguments[2] : function () {},
          _0x5b7d16 = _0x545743["fingerprint"],
          _0x4c193 = _0x545743["version"],
          _0x5e6538 = _0x545743["$fetch"],
          _0x484ec2 = _0x545743["$captchaAnticheat"],
          _0x3f9625 = _0x545743["captchaCollector"],
          _0xba02c3 = _0x545743["config"],
          _0x5abd0a = _0xba02c3["apiServer"],
          _0x4ceb70 = _0xba02c3["captchaId"],
          _0x5afc3f = _0xba02c3["protocol"],
          _0x1d94de = _0xba02c3["captchaType"],
          _0xec3742 = _0xba02c3["ipv6"],
          _0x575f31 = _0xba02c3["runEnv"],
          _0x1c6eaf = _0xba02c3["group"],
          _0x5d1634 = _0xba02c3["scene"],
          _0x2b45b5 = _0xba02c3["lang"],
          _0x594f95 = _0xba02c3["sdkVer"],
          _0x408ef6 = Object["assign"]({
            "id": _0x4ceb70,
            "fp": _0x5b7d16,
            "https": "https" === _0x5afc3f,
            "type": _0x1d94de,
            "version": _0x4c193,
            "dpr": window["devicePixelRatio"] || 1,
            "dev": _0x5c8fc4,
            "cb": _0x1b7a9a(),
            "ipv6": _0xec3742,
            "runEnv": _0x575f31,
            "group": _0x1c6eaf,
            "scene": _0x5d1634,
            "lang": _0x2b45b5,
            "sdkVersion": _0x594f95
          }, _0x4f260b),
          _0x2a53df = _0x4222be({
            "apiServer": _0x5abd0a,
            "protocol": _0x5afc3f
          }, "/get");
        _0x5c5347(_0x32121f, {
          "status": "loading"
        }), _0x484ec2["getToken"]({
          "timeout": 500
        })["then"](function (_0xde3b25) {
          _0x5e6538(_0x2a53df, Object["assign"]({
            "acToken": _0xde3b25
          }, _0x408ef6), function (_0x82de5c, _0x3dff33) {
            if (_0x82de5c = _0x262e31(_0x82de5c, _0x3dff33, _0x2a53df)) {
              var _0x311bbb = new _0x2fce44(_0x82de5c["code"], _0x82de5c["message"], {
                "url": _0x2a53df,
                "api": "get",
                "errorCode": _0x82de5c["errorCode"] || null
              });
              return _0x304011(_0x311bbb), _0x5c5347(_0x32121f, {
                "status": "fail",
                "data": _0x311bbb
              }), void _0x5c5347(_0x28efa2, {
                "name": "onError",
                "args": [_0x311bbb]
              });
            }
            _0x304011(null, _0x3dff33);
            var _0x1a5425 = _0x3dff33["data"];
            _0x1a5425["type"] !== _0x99d1a1["INTELLISENSE"] && _0x1a5425["type"] !== _0x545743["captchaType"] && _0x5c5347(_0x32f2ef, {
              "captchaType": _0x1a5425["type"],
              "prevCaptchaType": _0x545743["captchaType"]
            }), _0x5c5347(_0x5a747d, {
              "captchaType": _0x1a5425["type"]
            }), _0x5c5347(_0xd922c, _0x1a5425["token"]), _0x5c5347(_0x32121f, {
              "status": "loading",
              "data": _0x1a5425
            });
          }, {
            "onProcess": _0x43e8e2(_0x3f9625)
          });
        });
      }), _0x5b9085(_0x5040ec, _0x1c4d7d, function (_0x8c666e, _0x2be7c5) {
        var _0x17237a = _0x8c666e["commit"],
          _0x4efabd = _0x8c666e["state"],
          _0x540a83 = arguments["length"] > 2 && void 0 !== arguments[2] ? arguments[2] : function () {},
          _0x1b7d9e = _0x4efabd["fingerprint"],
          _0xe4dcc3 = _0x4efabd["version"],
          _0x128e56 = _0x4efabd["$fetch"],
          _0x42bb45 = _0x4efabd["$captchaAnticheat"],
          _0x319c44 = _0x4efabd["captchaCollector"],
          _0x2ed04a = _0x4efabd["config"],
          _0x3f0310 = _0x2ed04a["apiServer"],
          _0x12883a = _0x2ed04a["captchaId"],
          _0x3af359 = _0x2ed04a["protocol"],
          _0x49a0d1 = _0x2ed04a["captchaType"],
          _0x1e4bf3 = _0x2ed04a["ipv6"],
          _0x538d43 = _0x2ed04a["runEnv"],
          _0x38de8d = _0x2ed04a["group"],
          _0x45421c = _0x2ed04a["scene"],
          _0x5e9845 = _0x2ed04a["sdkVer"],
          _0x1ed4b4 = _0x4222be({
            "apiServer": _0x3f0310,
            "protocol": _0x3af359
          }, "/get");
        _0x42bb45["getToken"]({
          "timeout": 500
        })["then"](function (_0x3e3a0f) {
          var _0x3af430 = Object["assign"]({
            "id": _0x12883a,
            "fp": _0x1b7d9e,
            "https": "https" === _0x3af359,
            "type": _0x49a0d1,
            "width": _0x2be7c5["width"],
            "sizeType": _0x2be7c5["sizeType"],
            "version": _0xe4dcc3,
            "dpr": window["devicePixelRatio"] || 1,
            "dev": _0x5c8fc4,
            "cb": _0x1b7a9a(),
            "acToken": _0x3e3a0f,
            "ipv6": _0x1e4bf3,
            "runEnv": _0x538d43,
            "group": _0x38de8d,
            "scene": _0x45421c,
            "sdkVersion": _0x5e9845
          }, _0x2be7c5);
          _0x128e56(_0x1ed4b4, _0x3af430, function (_0x53e41d, _0x4f335e) {
            if (_0x53e41d = _0x262e31(_0x53e41d, _0x4f335e, _0x1ed4b4)) {
              var _0x659479 = new _0x2fce44(_0x53e41d["code"], _0x53e41d["message"], {
                "url": _0x1ed4b4,
                "api": "get",
                "errorCode": _0x53e41d["errorCode"] || null
              });
              return _0x17237a(_0x28efa2, {
                "name": "onError",
                "args": [_0x659479]
              }), void _0x540a83(_0x659479);
            }
            _0x17237a(_0x5a747d, {
              "captchaType": _0x99d1a1["INTELLISENSE"]
            }), _0x17237a(_0xd922c, _0x4f335e["data"]["token"]), _0x540a83(null, _0x4f335e);
          }, {
            "onProcess": _0x43e8e2(_0x319c44)
          });
        });
      }), _0x5b9085(_0x5040ec, _0x14cc34, function (_0x78f772, _0x332c8c, _0x208045) {
        var _0x44f6bd = _0x78f772["commit"],
          _0x28dc05 = _0x78f772["state"],
          _0x2985fd = _0x28dc05["version"],
          _0x3c5925 = _0x28dc05["type"],
          _0x13a2b3 = _0x28dc05["$fetch"],
          _0x2edcc2 = _0x28dc05["captchaCollector"],
          _0x230455 = _0x28dc05["browserFeature"],
          _0x29b4d6 = _0x28dc05["config"],
          _0x4a33b1 = _0x29b4d6["apiServer"],
          _0x47c60a = _0x29b4d6["captchaId"],
          _0x241009 = _0x29b4d6["protocol"],
          _0x4a179e = _0x29b4d6["extraData"],
          _0x14350a = _0x29b4d6["runEnv"],
          _0x415beb = _0x29b4d6["zoneId"],
          _0x5658e8 = _0x29b4d6["sdkVer"],
          _0x1832a2 = Object["assign"]({
            "id": _0x47c60a,
            "version": _0x2985fd,
            "cb": _0x1b7a9a(),
            "extraData": _0x21e205(_0x4a179e),
            "bf": _0x230455,
            "runEnv": _0x14350a,
            "sdkVersion": _0x5658e8
          }, _0x332c8c),
          _0x174cbe = _0x4222be({
            "apiServer": _0x4a33b1,
            "protocol": _0x241009
          }, "/check");
        _0x13a2b3(_0x174cbe, _0x1832a2, function (_0xdfc311, _0x3bc20c) {
          if (_0xdfc311 = _0x262e31(_0xdfc311, _0x3bc20c, _0x174cbe), _0xdfc311 ? _0xdfc311 = new _0x2fce44(_0xdfc311["code"], _0xdfc311["message"], {
            "url": _0x174cbe,
            "token": _0x1832a2["token"],
            "type": _0x3c5925,
            "errorCode": _0xdfc311["errorCode"] || null
          }) : _0x3561a9["getIn"](_0x3bc20c, "data.result") || (_0xdfc311 = new _0x2fce44(_0x1a9a81, "Failed to verify captcha.", {
            "url": _0x174cbe,
            "type": _0x3c5925,
            "token": _0x1832a2["token"]
          })), _0xdfc311) _0x44f6bd(_0x28efa2, {
            "name": "onVerify",
            "args": [_0xdfc311]
          });else {
            var _0x3218a2 = _0x28dc05["fingerprint"],
              _0x2f38e3 = _0x53bce1(_0x3bc20c["data"]["validate"], _0x3218a2, _0x415beb);
            _0x44f6bd(_0x28efa2, {
              "name": "onVerify",
              "args": [null, {
                "validate": _0x2f38e3
              }]
            });
          }
          _0x208045 && _0x208045(_0xdfc311, _0x3bc20c);
        }, {
          "onProcess": _0x43e8e2(_0x2edcc2, {
            "token": _0x1832a2["token"]
          })
        });
      }), _0x5b9085(_0x5040ec, _0x5c499e, function (_0x1af08a, _0xf2c923) {
        var _0x570060 = _0x1af08a["commit"],
          _0xbd4c47 = _0x1af08a["state"],
          _0x5a2f24 = arguments["length"] > 2 && void 0 !== arguments[2] ? arguments[2] : function () {},
          _0x5a5f23 = _0xbd4c47["fingerprint"],
          _0x30d3da = _0xbd4c47["captchaType"],
          _0x3064f8 = _0xbd4c47["version"],
          _0xc73724 = _0xbd4c47["verifyStatus"],
          _0x3d614c = _0xbd4c47["countsOfVerifyError"],
          _0x24ada7 = _0xbd4c47["$fetch"],
          _0x302faa = _0xbd4c47["type"],
          _0x511531 = _0xbd4c47["captchaCollector"],
          _0x850477 = _0xbd4c47["browserFeature"],
          _0x18bc75 = _0xbd4c47["config"],
          _0x429dd9 = _0x18bc75["apiServer"],
          _0x555310 = _0x18bc75["captchaId"],
          _0x312283 = _0x18bc75["protocol"],
          _0xe94136 = _0x18bc75["extraData"],
          _0x38216b = _0x18bc75["runEnv"],
          _0x3988e8 = _0x18bc75["zoneId"],
          _0x32862b = _0x18bc75["sdkVer"],
          _0x114858 = _0xf2c923["token"],
          _0x3cffb2 = _0xf2c923["data"],
          _0xadda2e = _0xf2c923["width"],
          _0x23ddb8 = _0xf2c923["acToken"],
          _0x4bd5f5 = _0x4222be({
            "apiServer": _0x429dd9,
            "protocol": _0x312283
          }, "/check");
        _0x570060(_0x9152b2, {
          "verifyStatus": "verifying"
        });
        var _0x1b9f6d = function (_0x35ab19, _0x10f2b2) {
          var _0x7fca02 = _0x10f2b2 && _0x10f2b2["data"];
          if (_0x35ab19 = _0x262e31(_0x35ab19, _0x10f2b2, _0x4bd5f5), !(["success", "error"]["indexOf"](_0xc73724) > -1)) {
            if (_0x35ab19 || !_0x7fca02["result"] && _0x30d3da !== _0x99d1a1["SMS"]) {
              var _0x511bcf = _0x35ab19 ? _0x35ab19["message"] : "Failed to verify captcha.",
                _0x28dc9e = _0x35ab19 ? _0x35ab19["code"] : _0x1a9a81,
                _0x2fc6b6 = _0x35ab19 ? _0x35ab19["errorCode"] : null;
              return _0x35ab19 = new _0x2fce44(_0x28dc9e, _0x511bcf, {
                "url": _0x4bd5f5,
                "token": _0x114858,
                "type": _0x302faa,
                "counts": _0x3d614c + 1,
                "errorCode": _0x2fc6b6
              }), _0x570060(_0x9152b2, {
                "verifyStatus": "error",
                "error": _0x35ab19
              }), _0x570060(_0xb77147, {
                "counts": _0x3d614c + 1
              }), _0x570060(_0x28efa2, {
                "name": "onVerify",
                "args": [_0x35ab19]
              }), void _0x5a2f24(_0x35ab19);
            }
            if (_0x7fca02["result"]) {
              var _0x20d669 = _0x53bce1(_0x7fca02["validate"], _0x5a5f23, _0x3988e8);
              _0x570060(_0x9152b2, {
                "verifyStatus": "success",
                "validate": _0x7fca02["validate"]
              }), _0x570060(_0x28efa2, {
                "name": "onVerify",
                "args": [null, {
                  "validate": _0x20d669
                }]
              }), _0x5a2f24(null, _0x10f2b2);
            }
          }
        };
        _0x24ada7(_0x4bd5f5, {
          "id": _0x555310,
          "token": _0x114858,
          "acToken": _0x23ddb8,
          "data": _0x3cffb2,
          "width": _0xadda2e,
          "type": _0x30d3da,
          "version": _0x3064f8,
          "cb": _0x1b7a9a(),
          "extraData": _0x21e205(_0xe94136),
          "bf": _0x850477,
          "runEnv": _0x38216b,
          "sdkVersion": _0x32862b
        }, _0x1b9f6d, {
          "onProcess": _0x43e8e2(_0x511531, {
            "token": _0x114858
          })
        });
      }), _0x5040ec)
    };
  _0x3dc5ba["exports"] = _0x95c9d9;
}, function (_0x439a2a, _0x52fc47) {
  _0x439a2a["exports"] = "<div\n  class=\"yidun yidun-custom <%= 'yidun--' + theme %> <%= 'yidun--' + mode %> <%= 'yidun--size-' + size %> <% if (isRtlLang) { %> yidun--rtl <% } %> <% if (disableFocusVisible) { %> yidun--disable-focus-outline <% } %>\"\n  style=\"width: <%= width %>; min-width: <%= minWidth %>\">\n  <div class=\"yidun_panel\"\n    <% if (mode === 'float') { %>\n    style=\"<%= customStyles.imagePanel.align === 'top'\n    ? 'bottom: ' + customStyles.controlBar.height + '; padding-bottom: ' + customStyles.gap\n    : 'top: ' + customStyles.controlBar.height + '; padding-top: ' + customStyles.gap %>\"\n    <% } else { %>\n    style=\"padding-bottom: <%= customStyles.gap %>\"\n    <% } %>\n    >\n    <div class=\"yidun_panel-placeholder\">\n      <% if (mode === 'float') { %>\n      <iframe class=\"yidun_cover-frame\"></iframe>\n      <% } %>\n      <div class=\"yidun_bgimg\" style=\"border-radius: <%= customStyles.imagePanel.borderRadius %>\">\n        <% if (smsNew) { %>\n          <div class=\"yidun_smsbox <% if (isMobile) { %> yidun_smsbox--mobile <% } %>\" style=\"border-radius: <%= customStyles.imagePanel.borderRadius %>\">\n            <div class=\"yidun_smsbox-qrcode\">\n            <div class=\"yidun_smsbox-qrcode--img\"></div>\n            </div>\n            <div class=\"yidun_smsbox-text\">\n              <div class=\"yidun_smsbox-text--guide\">\n                <div class=\"yidun_smsbox-text--qr\"><%= langPkg['sms']['scanQrToSMS'] %></div>\n                <span class=\"yidun_smsbox-text--manual\" aria-label=\"<%= langPkg['sms']['manualSMS'] %>\" type=\"button\"><%= langPkg['sms']['noScanQr'] %></span>\n              </div>\n            </div>\n            <div class=\"yidun_smsbox--mobile-wrapper\">\n              <div class=\"yidun_smsbox--mobile-guide\"><%= langPkg['sms']['clickToSMS'] %>:</div>\n              <div class=\"yidun_smsbox--mobile-btn\">\n                <a class=\"yidun_smsbox--mobile-btn-inner\" aria-label=\"<%= langPkg['sms']['toSMS'] %>\" type=\"button\" href=\"#\" target=\"_blank\"><%= langPkg['sms']['toSMS'] %></a>\n              </div>\n              <div class=\"yidun_smsbox-mobile--manual\">\n                <span class=\"yidun_smsbox-mobile--manual-btn\" aria-label=\"<%= langPkg['sms']['manualSMS'] %>\" type=\"button\"><%= langPkg['sms']['cannotJump'] %></span>\n              </div>\n            </div>\n            <div class=\"yidun_smsbox-manual\">\n              <div class=\"yidun_smsbox-manual-wrapper\">\n                <div class=\"yidun_smsbox-manual--edit\">\n                  <span class=\"yidun_smsbox-manual--edit-title\"><%= langPkg['sms']['editSMS'] %></span>\n                  <span class=\"yidun_smsbox-manual--edit-content\"></span>\n                </div>\n                <div class=\"yidun_smsbox-manual--send\">\n                  <span class=\"yidun_smsbox-manual--edit-title\"><%= langPkg['sms']['sendSMSTo'] %></span>\n                  <span class=\"yidun_smsbox-manual--send-content\">\n                    <span class=\"yidun_smsbox-manual--send-content__short\"></span>\n                    <span class=\"yidun_smsbox-manual--send-content__long\"></span>\n                  </span>\n                </div>\n                <% if (isMobile) { %>\n                  <span class=\"yidun_smsbox-manual--btn\" aria-label=\"<%= langPkg['sms']['toSMS'] %>\" type=\"button\"><%= langPkg['sms']['toSMS'] %></span>\n                <% } else { %>\n                  <span class=\"yidun_smsbox-manual--qr\" aria-label=\"<%= langPkg['sms']['scanQrToSMS'] %>\" type=\"button\"><%= langPkg['sms']['scanQrToSMS'] %></span>\n                <% } %>\n              </div>\n            </div>\n          </div>\n        <% } %>\n        <img class=\"yidun_bg-img\" alt=\"\u9A8C\u8BC1\u7801\u80CC\u666F\" style=\"border-radius: <%= customStyles.imagePanel.borderRadius %>\"/>\n        <img class=\"yidun_jigsaw\" alt=\"\u9A8C\u8BC1\u7801\u6ED1\u5757\" />\n        <% for (var i in inferences) { %>\n          <% if (inferences.hasOwnProperty(i)) { %>\n          <div class=\"yidun_inference <%= 'yidun_inference--' + i %>\" draggable=\"true\">\n            <img class=\"yidun_inference__img\" draggable=\"false\" />\n            <span class=\"yidun_inference__border\"></span>\n          </div>\n          <% } %>\n        <% } %>\n        <div class=\"yidun_voice\">\n          <div class=\"yidun_voice__inner\">\n            <div class=\"yidun_audio\">\n              <div class=\"yidun_audio__wave\"></div>\n              <audio class=\"yidun_audio__source\" src=\"\"></audio>\n              <button type=\"button\" class=\"yidun_audio__play\" aria-label=\"<%= langPkg['playVoice'] %>\"><span class=\"yidun_audio__txt\"><%= langPkg['playVoice'] %></span></button>\n              <button type=\"button\" class=\"yidun_audio__refresh\" aria-label=\"<%= langPkg['refresh'] %>\"><span class=\"yidun_audio__txt\"><%= langPkg['refresh'] %></span></button>\n            </div>\n            <input class=\"yidun_voice__input\" aria-label=\"<%= langPkg['enterCode'] %>\" placeholder=\"<%= langPkg['enterCode'] %>\" maxlength=\"10\" type=\"tel\" />\n            <div class=\"yidun_voice__btns\">\n              <button type=\"button\" class=\"yidun_voice__refresh\"><span class=\"yidun_voice__txt\"><%= langPkg['refresh'] %></span></button>\n              <div class=\"yidun_voice__right\">\n                <button type=\"button\" class=\"yidun_voice__back\"><span class=\"yidun_voice__txt\"><%= langPkg['back'] %></span></button>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"yidun_loadbox\" style=\"border-radius: <%= customStyles.imagePanel.borderRadius %>\">\n        <div class=\"yidun_loadbox__inner\">\n          <div class=\"yidun_loadicon\"></div>\n          <span class=\"yidun_loadtext\"><%= langPkg['loading'] %></span>\n        </div>\n      </div>\n\n      <div class=\"yidun_top\" style=\"<% if (customStyles.executeBorderRadius === undefined) { %>border-top-right-radius: <%= customStyles.imagePanel.borderRadius %>; <% } %> <% if (customStyles.executeTop !== undefined) { %>top: <%= customStyles.executeTop %>; <% } %> <% if (customStyles.executeRight !== undefined) { %>right: <%= customStyles.executeRight %>; <% } %> <% if (customStyles.executeBorderRadius) { %>border-radius: <%= customStyles.executeBorderRadius %>; <% } %> <% if (!!customStyles.executeBackground) { %>background: <%= customStyles.executeBackground %>; <% } %>\">\n        <% if (feedback.enable) { %>\n        <a\n          class=\"yidun_feedback\"\n          href=\"<%= feedback.url + '?captchaId=' + captchaId %>\"\n          target=\"_blank\"\n          tabindex=\"0\"><span class=\"yidun_feedback_txt\"><%= langPkg['feedback'] %></span></a>\n        <% } %>\n        <div class=\"yidun_top__right\">\n          <button\n            type=\"button\"\n            class=\"yidun_refresh\"\n            style=\"<% if (!audio && !feedback.enable) { %>margin-left: 0px; <% } %>\"><%= langPkg['refresh'] %></button>\n          <% if (audio) { %>\n          <button\n            type=\"button\"\n            class=\"yidun_top__audio\"><%= langPkg['switchToVoice'] %></button>\n          <% } %>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div\n    class=\"yidun_control\"\n    style=\"height: <%= customStyles.controlBar.height %>; border-radius: <%= customStyles.controlBar.borderRadius %>\"\n    tabindex=\"0\"\n    role=\"button\">\n    <div class=\"yidun_slide_indicator\" style=\"height: <%= customStyles.controlBar.height %>; border-radius: <%= customStyles.controlBar.borderRadius %>\"></div>\n    <div class=\"yidun_slider <% if (!isMobile) { %> yidun_slider--hover <% } %>\" style=\"width: <%= customStyles.controlBar.height %>; border-radius: <%= customStyles.controlBar.borderRadius %>\">\n      <!-- \u5206\u652F\u4E8C\u517C\u5BB9\u65E7\u63A5\u53E3 -->\n      <% if (customStyles.icon.slider) { %>\n      <img src=\"<%= customStyles.icon.slider %>\" class=\"yidun_slider__icon\" />\n      <% } else if (customStyles.controlBar.slideIcon || customStyles.controlBar.slideIconSuccess || customStyles.controlBar.slideIconError || customStyles.controlBar.slideIconMoving) { %>\n      <span class=\"yidun_slider__icon\"></span>\n      <img src=\"<%= customStyles.controlBar.slideIcon %>\" class=\"yidun_slider__icon yidun_slider__icon--img\" />\n      <% } else { %>\n      <span class=\"yidun_slider__icon\"></span>\n      <% } %>\n    </div>\n    <div\n      class=\"yidun_tips\"\n      aria-live=\"polite\">\n      <i class=\"yidun_tips__before\"></i>\n      <div class=\"yidun_tips__content\">\n        <span class=\"yidun_tips__icon\"></span>\n        <span class=\"yidun_tips__text yidun-fallback__tip\"></span>\n        <div class=\"yidun_tips__answer\">\n          <span class=\"yidun_tips__point\"></span>\n          <img class=\"yidun_tips__img\" />\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n";
}, function (_0x3636c3, _0x448f41) {
  _0x3636c3["exports"] = "<div class=\"yidun_intellisense <%= 'yidun_intellisense--' + theme %> <%= 'yidun_intellisense--size-' + size %>\" style=\"display: none\">\r\n  <div\r\n    class=\"yidun_intelli-control\"\r\n    tabindex=\"0\"\r\n    aria-live=\"polite\">\r\n    <div class=\"yidun_intelli-tips\">\r\n      <div class=\"yidun_intelli-icon\">\r\n        <% if (icon.intellisenseLogo) { %>\r\n          <img src=\"<%= icon.intellisenseLogo%>\" class=\"yidun_logo\" />\r\n        <% } else { %>\r\n          <span class=\"yidun_logo\"></span>\r\n        <% } %>\r\n        <span class=\"yidun_intelli-loading\"></span>\r\n        <div class=\"yidun_ball-scale-multiple\">\r\n          <div></div>\r\n          <div></div>\r\n          <div></div>\r\n        </div>\r\n      </div>\r\n      <span\r\n        class=\"yidun_intelli-text\"\r\n        <% if (isAndroid) { %>\r\n          aria-label=\"<%= langPkg.intellisense.longtap %>\"\r\n        <% }%>><%= langPkg.intellisense.normal %></span>\r\n    </div>\r\n    <div class=\"yidun_classic-tips\">\r\n      <span class=\"yidun_tips__icon\"></span>\r\n      <span class=\"yidun_tips__text yidun-fallback__tip\"></span>\r\n    </div>\r\n  </div>\r\n  <div class=\"yidun_classic-container\">\r\n    <iframe class=\"yidun_cover-frame\"></iframe>\r\n    <div class=\"yidun_classic-wrapper\" style=\"display: <%= classicVisible ? 'block' : 'none' %>\"></div>\r\n  </div>\r\n</div>\r\n";
}, function (_0x5a18b8, _0x5cd27c) {
  _0x5a18b8["exports"] = "<div\r\n  class=\"<%= 'yidun_popup--' + theme %> yidun_popup <%= 'yidun_popup--size-' + size %> <%= topIsNotAuto || bottomIsNotAuto ? '' : 'yidun_popup--auto' %> <%= appendTo ? 'yidun_popup--append' : '' %> <% if (isRtlLang) { %> yidun_popup--rtl <% } %> <% if (disableFocusVisible) { %> yidun_popup--disable-focus-outline <% } %>\"\r\n  style=\"display: none;position: <%= popupStyles.position %>\">\r\n  <!-- iframe\u7528\u4E8E\u906E\u6321\u9875\u9762\u4E2Dobject\u3001embed\u3001select\u7B49\u5143\u7D20 -->\r\n  <iframe class=\"yidun_cover-frame\"></iframe>\r\n  <div\r\n    class=\"yidun_popup__mask\"\r\n    style=\"opacity: <%= popupStyles.opacity %>;filter: alpha(opacity=<%= popupStyles.opacity * 100 %>);\"></div>\r\n  <div class=\"yidun_modal__wrap\">\r\n    <div class=\"yidun_modal__subwrap\">\r\n      <% if (bottomIsNotAuto) { %>\r\n      <span class=\"yidun_modal__sibling\"></span>\r\n      <% } %>\r\n      <div\r\n        class=\"yidun_modal\"\r\n        style=\"<% if (topIsNotAuto) { %>top: <%= popupStyles.top %>; <% } %><% if (bottomIsNotAuto) { %>vertical-align:bottom;bottom: <%= popupStyles.bottom %>; <% } %><% if (widthIsNotAuto) { %>width: <%= width %>; <% } %><% if (popupStyles.radius) { %>border-radius: <%= popupStyles.radius %>; <% } %><% if (popupStyles.borderColor) { %>border-color: <%= popupStyles.borderColor %>; <% } %><% if (popupStyles.paddingTop) { %>padding-top: <%= popupStyles.paddingTop %>; <% } %><% if (popupStyles.paddingBottom) { %>padding-bottom: <%= popupStyles.paddingBottom %>; <% } %>\"\r\n        tabindex=\"-1\">\r\n        <div\r\n          class=\"yidun_modal__header\"\r\n          style=\"height: <%= popupStyles.capBarHeight %>; <% if (popupStyles.capBarTextAlign) { %>text-align: <%= popupStyles.capBarTextAlign %>; <% } %><% if (popupStyles.capBarBorderColor) { %>border-bottom-color: <%= popupStyles.capBarBorderColor %>; <% } %>\">\r\n            <span class=\"yidun_modal__before\"></span>\r\n            <span class=\"yidun_modal__title\" style=\"<% if (popupStyles.capBarTextColor) { %>color: <%= popupStyles.capBarTextColor %>; <% } %><% if (popupStyles.capBarTextSize) { %>font-size: <%= popupStyles.capBarTextSize %>; <% } %><% if (popupStyles.capBarTextWeight) { %>font-weight: <%= popupStyles.capBarTextWeight %>; <% } %>\"><%= langPkg['popupTitle'] %></span>\r\n          <% if (!enableClose && !hideCloseBtn) { %>\r\n            <button\r\n              type=\"button\"\r\n              class=\"yidun_modal__close\">\r\n              <span class=\"yidun_icon-close\"><%= langPkg['close']%></span>\r\n            </button>\r\n          <% } %>\r\n        </div>\r\n        <div\r\n          class=\"yidun_modal__body\"\r\n          style=\"padding: <%= popupStyles.capPadding %>px; <% if (popupStyles.capPaddingTop !== undefined) { %>padding-top: <%= popupStyles.capPaddingTop %>px; <% } %> <% if (popupStyles.capPaddingRight !== undefined) { %>padding-right: <%= popupStyles.capPaddingRight %>px; <% } %> <% if (popupStyles.capPaddingBottom !== undefined) { %>padding-bottom: <%= popupStyles.capPaddingBottom %>px; <% } %> <% if (popupStyles.capPaddingLeft !== undefined) { %>padding-left: <%= popupStyles.capPaddingLeft %>px; <% } %>\">\r\n          <captcha-core :intellisense=\"intellisense\" :autoWidth=\"widthIsNotAuto\" :enableColor=\"false\"></captcha-core>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n";
}, function (_0x120d64, _0x3b1080) {
  function _0x615b4c(_0x570765, _0x32a54c) {
    for (var _0x3eb5d6 in _0x32a54c) _0x570765["setAttribute"](_0x3eb5d6, _0x32a54c[_0x3eb5d6]);
  }
  function _0x1a5a9d(_0x51a4f9, _0x1ccf12) {
    _0x51a4f9["onload"] = function () {
      this["onerror"] = this["onload"] = null, _0x1ccf12(null, _0x51a4f9);
    }, _0x51a4f9["onerror"] = function () {
      this["onerror"] = this["onload"] = null, _0x1ccf12(new Error("Failed to load " + this["src"]), _0x51a4f9);
    };
  }
  function _0x4286ed(_0x19a44e, _0x338f5b) {
    _0x19a44e["onreadystatechange"] = function () {
      "complete" != this["readyState"] && "loaded" != this["readyState"] || (this["onreadystatechange"] = null, _0x338f5b(null, _0x19a44e));
    };
  }
  _0x120d64["exports"] = function (_0x51c4aa, _0x34ac53, _0x2549d8) {
    var _0x580a9c = document["head"] || document["getElementsByTagName"]("head")[0],
      _0x2582bb = document["createElement"]("script");
    "function" == typeof _0x34ac53 && (_0x2549d8 = _0x34ac53, _0x34ac53 = {}), _0x34ac53 = _0x34ac53 || {}, _0x2549d8 = _0x2549d8 || function () {}, _0x2582bb["type"] = _0x34ac53["type"] || "text/javascript", _0x2582bb["charset"] = _0x34ac53["charset"] || "utf8", _0x2582bb["async"] = !("async" in _0x34ac53) || !!_0x34ac53["async"], _0x2582bb["src"] = _0x51c4aa, _0x34ac53["attrs"] && _0x615b4c(_0x2582bb, _0x34ac53["attrs"]), _0x34ac53["text"] && (_0x2582bb["text"] = "" + _0x34ac53["text"]);
    var _0xa059f7 = "onload" in _0x2582bb ? _0x1a5a9d : _0x4286ed;
    _0xa059f7(_0x2582bb, _0x2549d8), _0x2582bb["onload"] || _0x1a5a9d(_0x2582bb, _0x2549d8), _0x580a9c["appendChild"](_0x2582bb);
  };
}])