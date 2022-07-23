window = this;
document = this;
navigator = this;

    'use strict';

    var _0x244b56 = [];
    var _0x499b55 = '';

    function _0x2799f5(_0x420572, _0x56e8b0) {
        if (!_0x420572) {
            return 0;
        }

        var _0x46cc0f = 1315423911 ^ _0x56e8b0 << 16;

        var _0x16bcec;

        var _0x1bc9f5;

        for (_0x16bcec = _0x420572["length"] - 1; _0x16bcec >= 0; _0x16bcec--) {
            _0x1bc9f5 = _0x420572["charCodeAt"](_0x16bcec);
            _0x46cc0f ^= (_0x46cc0f << 5) + _0x1bc9f5 + (_0x46cc0f >> 2);
        }

        _0x1d8c3b(3);

        return Math["abs"](_0x46cc0f & 2147483647);
    }

    function _0x59b9eb(_0x41c36d) {
        var _0x4403f4 = "2|3|4|1|0"["split"]('|');

        var _0x532f0d = 0;
        if (!_0x41c36d) return 0;
        var _0x6b1e8c = 5381;
        var _0x4cda2a = _0x41c36d["length"];

        while (_0x4cda2a) {
            _0x6b1e8c = _0x6b1e8c * 33 ^ _0x41c36d["charCodeAt"](--_0x4cda2a);
        }

        return _0x6b1e8c >>> 0;
    }

    function _0x2ad7ad() {
        var _0x3adc17 = [];

        try {
            var _0x52d0bf = "2|8|18|6|12|0|9|15|14|3|7|11|17|4|5|10|1|13|16"["split"]('|');

            var _0x5c8479 = 0;

            _0x3adc17["push"](screen["colorDepth"]);

            _0x3adc17["push"](navigator["language"]);

            _0x3adc17['push'](new Date()["getTimezoneOffset"]());

            var _0x8bfe68 = [screen["height"], screen["width"]];

            _0x3adc17["push"](_0x8bfe68["join"]('x'));

            var _0x306bee = document["createElement"]("canvas");

            var _0x329da3 = _0x306bee["getContext"]('2d');

            var _0x929cab = "https://github.com/fingerprintjs/fingerprintjs2";
            _0x329da3["textBaseline"] = "top";
            _0x329da3["font"] = "14px 'Arial'";
            _0x329da3["textBaseline"] = "alphabetic";
            _0x329da3["fillStyle"] = "#f60";

            _0x329da3["fillRect"](125, 1, 62, 20);

            _0x329da3["fillStyle"] = "#069";

            _0x329da3["fillText"](_0x929cab, 2, 15);

            _0x329da3['fillStyle'] = "rgba(102, 204, 0, 0.7)";

            _0x329da3["fillText"](_0x929cab, 4, 17);

            _0x3adc17["push"](_0x306bee["toDataURL"]());

            return _0x3adc17["join"]("\r\n");
        } catch (_0x1f3a29) {
            return null;
        }
    }

    function _0x516476() {
        var _0x1922c2 = [];
        var arr = ['d5dbca8b47', '308c237350', '3ee239dc9f', '1e6677ffea', '617e6b05cc', '617e6b05cc', '88fa93d5b4', 'c108809f94', '581621bcd0', 'dd91aef239', '5240255cd9', '4df59b7936']
        var _0x4a5529 = Math.floor(Math.random()* arr.length);
        return arr[_0x4a5529];
    }

    function _0x2d7613(_0x1c03be, _0xdea2f8, _0xef65ff) {
        var _0x344e02 = _0x2799f5(_0x1c03be, _0xdea2f8);
        if (_0xef65ff) {
            _0x244b56[5] = _0x5c4b14(_0x344e02["toString"](16));
            return;
        }
        _0x244b56[4] = _0x5c4b14(_0x344e02['toString'](16));
    }

    function _0x5c4b14(_0x492a67) {
        var _0x316a23 = _0x492a67;

        while (_0x316a23['length'] < 8) {
            _0x316a23 = '0' + _0x316a23;
        }

        return _0x316a23;
    }

    function _0x22b648(_0x54e503) {
        var _0x571f4f = _0x54e503;


        var _0x4168ff = Math.random();

        _0x571f4f = Math.round(_0x4168ff * _0x54e503);


        _0x244b56[1] = _0x571f4f['toString'](16);
        _0x244b56[2] = _0x571f4f["toString"](16)['length'];
        return _0x571f4f;
    }

    function _0x2b81f9(_0x17c71d) {
        var _0x57f7ef = '';

        for (var _0x4ab916 = 0; _0x4ab916 < _0x17c71d["length"]; _0x4ab916++) {
            if (_0x57f7ef == '') _0x57f7ef = _0x17c71d['charCodeAt'](_0x4ab916)['toString'](16); else _0x57f7ef += _0x17c71d['charCodeAt'](_0x4ab916)['toString'](16);
        }

        return _0x57f7ef;
    }

    function _0x20022f(_0x48151c) {
        return _0x48151c["split"]('')['reverse']()["join"]('');
    }

    function _0x1d8c3b(_0x11716c) {
        if (window && window["innerWidth"] && window["innerWidth"] > 0 && document && document["location"]["hostname"]["match"](".17track.net")) !_0x11716c ? _0x244b56[3] = 1 : _0x244b56[3] = _0x11716c; else {
            _0x244b56[3] = 3;
        }
    }

    function _0x5cef07() {
        var _0x37848b;

        try {
            _0x37848b = new XMLHttpRequest();
        } catch (_0x1f56bd) {
            try {
                _0x37848b = new ActiveXObject("Msxml2.XMLHTTP");
            } catch (_0xec3ba0) {
                try {
                    _0x37848b = new ActiveXObject("Microsoft.XMLHTTP");
                } catch (_0x3447e2) {
                    return false;
                }
            }
        }

        _0x37848b = null;
        return true;
    }


    function _0x440278(_0x2d2f5a, _0x13e368, _0x3c01bd) {
        var _0x44f341 = "yq-";
        var _0x16ed71 = "Last-Event-ID";

        var _0x4b7efc = _0x59b9eb(_0x2ad7ad());

        if (_0x3c01bd == 0) _0x44f341 += "random"; else {
            _0x44f341 = _0x13e368[_0x3c01bd];
        }

        document && document["removeEventListener"];
        _0x44f341 += ':' + 'false' + ':' + 4164604265 + ':' + _0x516476()
        console.log(_0x44f341)
        _0x44f341 = _0x44f341 + '/' + Date.now()["toString"](16) + '/' + 722["toString"](16) + '/' + 'true';
        console.log(_0x44f341)
        _0x2d7613(_0x44f341, _0x3c01bd);
        _0x44f341 = _0x2b81f9(_0x20022f(_0x44f341));
        _0x244b56[0] = _0x44f341;

        var _0xbb4f04 = "5|1|0|4|2|3"["split"]('|');
        var _0x191c56 = 0;
        var _0x20ad48 = new Date();
        _0x20ad48['setTime'](_0x20ad48["getTime"]() - 300000);
        return _0x244b56['join']('')

    }


    function _0x2dd03f(data) {
        _0x499b55 = data;
        var _0xdf4708;

        try {
            _0xdf4708 = JSON["parse"](_0x499b55);
        } catch (_0x535e3c) {
            _0xdf4708 = null;
        }

        if (_0xdf4708 && _0xdf4708["guid"] === '')
            _0x2d7613(_0x499b55, _0x499b55['length'], true);

        var _0x53d5dd = ''
        var _0x2865a2 = ['navbar navbar-default yq-header yq-header-v3', 'navbar-toggle hamburger hamburger-close collapsed yq-mobile-menu-btn', 'nav navbar-toolbar navbar-right navbar-toolbar-right yq-navbar-toolbar yq-navbar-normal', 'yq-dropdown-menu-media-apps visible-lg', 'dropdown-menu yq-moreapp-container yq-dropdown-products fix-max-height dropdown-menu-left yq-ani-tl yq-dropdown-icontext', 'yq-products-stitle', 'list-group yq-list-group-moreapp', 'yq-products-stitle', 'list-group yq-list-group-moreapp', 'dropdown-menu yq-dropdown-icontext yq-dropdown-320 fix-max-height', 'dropdown-menu yq-dropdown-240 fix-max-height', 'dropdown-menu yq-dropdown-240 fix-max-height', 'yq-dropdown-menu-media-msg hide', 'yq-head-msg yq-navbar-menuIcon-24', 'yq-msg-nomsg vertical-align panel text-center hide', 'yq-msg-network-err vertical-align panel text-center hide', 'yq-userinfo hide', 'dropdown-menu dropdown-menu-media yq-dropdown-menu-media-user', 'dropdown-menu-footer yq-user-footer clearfix', 'btn btn-warning btn-pure yq-btn-flat btn-round font-weight-600', 'margin-horizontal-10 yq-input-container', 'dropdown-menu dropdown-menu-media yq-track-dropdown', 'yq-more-track-container clearfix', 'yq-tools-small', 'navbar-brand-logo hidden-xs yq-default-logo', 'navbar-brand-logo visible-xs yq-default-logo', 'navbar-collapse collapse yq-mobile-navbar navbar-header', 'yq-mobile-navbar-main', 'yq-prj-mobile-navbar', 'nav navbar-nav is-full yq-navbar-toolbar', 'dropdown-menu dropdown-menu-left yq-ani-tl yq-dropdown-icontext ', 'yq-products-stitle', 'yq-products-stitle', 'dropdown-menu yq-dropdown-icontext dropdown-menu-left yq-ani-tl', 'dropdown-menu dropdown-menu-left yq-ani-tl', 'yq-mobile-navbar-footer', 'btn btn-warning btn-pure yq-btn-flat btn-block', 'tab-content yq-panel-tracklist scrollable is-enabled scrollable-vertical', 'yq-panel-gad', 'modal-dialog yq-modal-dialog']

        return _0x440278(_0x53d5dd, _0x2865a2, _0x22b648(_0x2865a2["length"]));

    }
    _0x2dd03f('{"data":[{"num":"1508697621","fc":0,"sc":0},{"num":"1508681532","fc":0,"sc":0},{"num":"1508681602","fc":0,"sc":0},{"num":"1508647044","fc":0,"sc":0},{"num":"1508695790","fc":0,"sc":0},{"num":"1508662971","fc":0,"sc":0}],"guid":"","timeZoneOffset":-480}')


//dropdown-menu dropdown-menu-left yq-ani-tl yq-dropdown-icontext :false:4164604265:dd91aef239
//"dropdown-menu dropdown-menu-media yq-track-dropdown:false:4164604265:3ee239dc9f"
//"navbar-brand-logo visible-xs yq-default-logo:false:4164604265:617e6b05cc"
//"nav navbar-nav is-full yq-navbar-toolbar:false:4164604265:3ee239dc9f"
//"list-group yq-list-group-moreapp:false:4164604265:4df59b7936"
//"margin-horizontal-10 yq-input-container:false:4164604265:4df59b7936"
//"yq-more-track-container clearfix:false:4164604265:dd91aef239"
//"yq-more-track-container clearfix:false:4164604265:d5dbca8b47"
//"yq-more-track-container clearfix:false:4164604265:d5dbca8b47"
//"yq-more-track-container clearfix:false:4164604265:d5dbca8b47/18224574738/2d2/true"
