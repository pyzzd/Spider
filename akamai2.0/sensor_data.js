startTs = new Date().getTime()
pW = [4095, 300000, 1, 0, 63, 8, 4, 100, 5, 40, 16, 2, 3, 13, 15, 23, 26, 27, 34, 7777777, 10, 10000, 25, 32, 9, 1000, 4294967296, 999999, 6, 11, 18, 22, 24, 3600000, 65535, 65793, 4294967295, 8388607, 4064256, 12, 20, 3000]
Ok = [4095, 300000, 1469, 0, 1, 63, 80, 16, 2, 8, 15, 8888888, 7777777, 10000, 150, 4, 12, 100, 10, 3, 4294967296, 13, 6, 11, 17, 3600000, 65793, 4294967295, 8388607, 65535, 4282663, 39, 127, 20, 4064256, 23, 3000]
function get_timestamp() {
    return new Date().getTime() + 3
}
var Kd = function (LQA, RQA) {
    return LQA <= RQA;
};
var v9 = function (QzA, zzA) {
    return QzA % zzA;
};
var K9 = function (HzA, VzA) {
    return HzA + VzA;
};
var UL = function (jL, DL) {
    return jL - DL;
};
var l9 = function (mZA, CZA) {
    return mZA < CZA;
};
var L9 = function (qZA, KZA) {
    return qZA >> KZA;
};
var Q9 = function (Xp, pp) {
    return Xp & pp;
};
var n9 = function (kQA, gQA) {
    return kQA === gQA;
};
var IU = function (NzA, JzA) {
    return NzA >= JzA;
};

function params_1() {
    timestamp = new Date().getTime() / 2;
    randomNum = ('').concat(Math.random())
    tU = parseInt(1000 * randomNum / 2, 10)
    CU = randomNum["slice"](0, 11) + tU;
    return "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36,uaend,12147,20030107,zh-CN,Gecko,5,0,0,0,413038,0,1600,852,1600,900,929,732,945,,cpen:0,i1:0,dm:0,cwen:0,non:1,opc:0,fc:0,sc:0,wrc:1,isc:0,vib:1,bat:1,x11:0,x12:1,8099," + CU + "," + timestamp + ".5,0,loc:"
}
function params_2(_abck) {

    Sx = params_2_2()
    k1 = [1, 32, 32, 0, 0, 0, 0, get_timestamp() - startTs, 0, startTs, -999999, 17958, 0, 0, 2993, 0, 0, get_timestamp() - startTs, 0, "0", _abck, params_2_1(_abck), "-1", "-1", 30261693, "PiZtE", Sx[0], Sx[1], 0, -1, 0]["join"](",")
    return k1
}
function params_2_1(QP) {
    for (var sI7 = 0, gI7 = 0; gI7 < QP.length; gI7++) {
        var NI7 = QP.charCodeAt(gI7);
        NI7 < 128 && (sI7 += NI7);
    }
    return sI7
}
function params_2_2() {

    for (var qI7 = Math.floor(1e5 * Math.random() + 1e4), kI7 = String(startTs * qI7), rI7 = 0, tI7 = [], CI7 = kI7.length >= 18; tI7.length < 6;)
        tI7.push(parseInt(kI7.slice(rI7, rI7 + 2), 10)),
            rI7 = CI7 ? rI7 + 3 : rI7 + 2;
    return [qI7, function YI7(pI7) {
        var DI7 = pI7[0] - pI7[1];
        var FI7 = pI7[2] - pI7[3];
        var XI7 = pI7[4] - pI7[5];
        var MI7 = Math.sqrt(DI7 * DI7 + FI7 * FI7 + XI7 * XI7);
        var jI7;
        return jI7 = Math.floor(MI7),
            jI7;
    }(tI7)]
}
function params_3(params1) {
    CP = get_timestamp() - startTs
    gx = function Nx() {
        return function fx(Ux) {

            var hB = parseInt(20 * Math.random(), pW[20]);
            var bB = new Date(Ux["startTimestamp"]);

            var GB = new Date(bB["setUTCDate"](bB["getUTCDate"]() + hB));

            return [GB["getUTCDate"]() * GB["getUTCMonth"]() + 1, hB]["join"]("|")
        }
            ;
    }()(params_3_1(["startTimestamp", startTs, "deviceData", params1, "mouseMoveData", "", "totVel", 0, "deltaTimestamp", CP]))
    return gx
}
function params_3_1(JW) {
    var JZ7 = {};
    var GZ7 = JW;
    for (var AZ7 = 0; AZ7 < GZ7.length; AZ7 += 2)
        JZ7[GZ7[AZ7]] = GZ7[AZ7 + 1];
    return JZ7
}
function params_4(Pz, xz) {
    var Lz = xz[0];
    var Vz = xz[1];
    var Rz = xz[2];
    (function sz() {
        fz = [];
        var Cj = 53;
        var Zj = "case gC:";
        var pj = 1663;
        var Dj = 0;
        for (var Fj = Cj; Fj < pj; ++Fj) {
            var Xj = "function lz(Pz,xz){'use strict';var Bz=lz;switch(Pz){case sC:{var Lz=xz[sr];var Vz=xz[gr];var Rz=xz[Nr];A6.push(Sz);(function sz(){A6.push(gz);if(Nz(typeof fz[h6],b6(h7.Lw(S6([]),Uz,xC,vj),[][[]]))){A6.pop();return;}function hj(wj){A6.push(Ij);var bj;return bj=Jj(typeof wj,h7.pw(Gj,BC))?h7.Nw(Tj,qj):b6(b6(h7.sw.apply(null,[LC,Aj]),wj),h7.gw(Hj,VC)),A6.pop(),bj;}var kj=h7[h7.Yw.call(null,Ej,rj,tj)].call(Bz);var Cj=kj[h7.fw(RC,Qj)](hj(mj[h6]),dj[h6]);var Zj=hj(Yj[h6]);var pj=kj[h7.fw(RC,Qj)](Zj,b6(Cj,cj[h6]));var Dj=h6;for(var Fj=Cj;Fj<pj;++Fj){var Xj=kj[h7.Uw.call(null,Mj,zj)](Fj);if(Xj!=jj&&Xj!=qj&&Xj!=nj){Dj=(Dj<<Oj)-Dj+Xj;Dj=Dj|h6;}}fz[h6]=Dj?Dj:H6;h7[h7.Sw.call(null,Kj,SC)][h6]=b6(h6,H6);A6.pop();}());if(h7.q7[sr]>sr){Wj(fz[sr]-lj[sr]);}var Pj;var xj;var Bj=S6(h6);var Lj=h7.Hb(Vj,Rj);var Sj=Rz?gj:sj;if(S6(Nj)&&(Nj=h7.Tb.apply(null,[fj,Uj,vn]),UM(Vz,h6)&&hn(Vz,wn)))for(Pj=h6;hn(Pj,wn);++Pj)if(Nz(Pj,Vz))for(xj=h6;M6(xj,In);++xj)Nj+=Pj[h7.Fw(bn,Jn)]();for(;;){for(Lj=h7.Hb.apply(null,[Vj,Rj]),Bj=S6(h6),Pj=h6;M6(Pj,b6(v7[h7.qb(Cc,gj)][h7.kb.call(null,Gn,An)](Hn(v7[h7.qb.apply(null,[Cc,gj])][h7.Eb(Aj,qj,Qc,zj)](),Sj)),Sj));++Pj){for(xj=h6;M6(xj,b6(v7[h7.qb.apply(null,[Cc,gj])][h7.kb(Gn,An)](Hn(v7[h7.qb.apply(null,[Cc,gj])][h7.Eb.apply(null,[S6(S6(h6)),Tn,Qc,zj])](),Sj)),Sj));++xj)Lj+=Nj[v7[h7.qb.call(null,Cc,gj)][h7.kb(Gn,An)](Hn(v7[h7.qb(Cc,gj)][h7.Eb.apply(null,[qn,S6(H6),Qc,zj])](),Nj[h7.Cw.apply(null,[mc,kn])]))];Lj+=h7.Hb.call(null,Vj,Rj);}for(Pj=h6;M6(Pj,Lz[h7.Cw.apply(null,[mc,kn])]);++Pj)if(Nz(En(H6),(Lz[Pj][h7.Fw.apply(null,[bn,Jn])]())[h7.fw(dc,Qj)](Lj))){Bj=S6(H6);break;}if(Bj){var rn;return rn=Lj,A6.pop(),rn;}}A6.pop();}break;case gC:{if(sr){throw Math.random();}}break;}}".charCodeAt(Fj);
            if (Xj != 10 && Xj != 13 && Xj != 32) {
                Dj = (Dj << 5) - Dj + Xj;
                Dj = Dj | 0;
            }
        }
        fz[0] = Dj ? Dj : 1;
    }());

    var Pj;
    var xj;
    var Bj = true;
    var Lj = ",";
    var Sj = 3;
    Nj = ""
    if (!Nj && (Nj = "abcdefghijklmnopaqrstuvxyzABCDEFGHIJKLMNOPAQRSTUVXYZ!@#%&-_=;:<>,~",
    (Vz >= 0) && Vz <= 9))
        for (Pj = 0; Pj <= 9; ++Pj)
            if (Pj !== Vz)
                for (xj = 0; xj < 20; ++xj)
                    Nj += Pj.toString();
    for (; ;) {
        for (Lj = ",",
                 Bj = true,
                 Pj = 0; Pj < Math.floor(Math.random() * Sj) + Sj; ++Pj) {
            for (xj = 0; xj < Math.floor(Math.random() * Sj) + Sj; ++xj)
                Lj += Nj[Math.floor(Math.random() * Nj.length)];
            Lj += ",";
        }
        for (Pj = 0; Pj < Lz.length; ++Pj)
            if (-1 !== (Lz[Pj].toString()).indexOf(Lj)) {
                Bj = false;
                break;
            }
        if (Bj) {
            return Lj
        }
    }
}
function params_5() {
    var zP = (params_5_1("0a46G5m17Vrp4o4c", "afSbep8yjnZUjq3aL010jO15Sawj2VZfdYK8uY90uxq")).slice(0, pW[10])
    var RP = Math.floor(get_timestamp() / pW[33])
    var kP = get_timestamp()
    var gP = zP + params_5_1(RP, zP);
    return gP
}
function params_5_1(EEA, WEA) {
    EEA = String(EEA),
        WEA = String(WEA);
    var ZEA = []
        , vEA = WEA.length;
    for (var QEA = 0; QEA < EEA.length; QEA++) {
        var zEA = EEA.charCodeAt(QEA)
            , LEA = EEA.charAt(QEA);

        params_5_3(zEA = params_5_2(zEA, 47, 57, WEA.charCodeAt(QEA % vEA)), EEA.charCodeAt(QEA)) && (LEA = String.fromCharCode(zEA)),
            ZEA.push(LEA);
    }
    return ZEA.join("")
}
function params_5_2(kMA, gMA, rMA, XMA) {
    params_5_4(kMA, gMA) && Kd(kMA, rMA) && params_5_4(kMA += v9(XMA, UL(rMA, gMA)), rMA) && (kMA = K9(UL(kMA, rMA), gMA));
    return kMA;
}
function params_5_3(BL, FL) {
    return BL !== FL;
}
function params_5_4(sL, fL) {
    return sL > fL;
};
function params_6(sHA) {
    for (var CHA = 0, bHA = 0; bHA < sHA.length; bHA++) {
        var tHA = sHA.charCodeAt(bHA);
        tHA < 128 && (CHA += tHA);
    }
    return CHA
}
function params_7(bm_sz) {
    var lG7 = [8888888, 7777777];
    var PG7 = bm_sz
    var BG7 = (decodeURIComponent(PG7))["split"]("~");
    var VG7 = parseInt(BG7[2], pW[20])
        , RG7 = parseInt(BG7[3], 10);
    lG7 = [VG7 = isNaN(VG7) ? 8888888 : VG7, RG7 = isNaN(RG7) ? 7777777 : RG7];
    return lG7
}
function get_sensor_data(_abck,bm_sz) {
    Rj = get_timestamp()
    params1 = params_1()
    url = "https://mydhlplus.dhl.com/cn/zh/tracking.html#/results?id=LV580241085CN&id=LV580241083CN&id=LV580241082CN"
    rP = ["-100", params1, "-105", "0,0,0,0,2054,864,0;1,0,0,0,2073,883,0;", "-108", "", "-101", "do_dis,dm_en,t_dis", "-110", "", "-117", "", "-109", "", "-102", "0,0,0,0,2054,864,0;1,0,0,0,2073,883,0;", "-111", "", "-114", "", "-103", "", "-106", "0,0", "-115", params_2(_abck), "-112", url, "-119", "-1", "-122", "0,0,0,0,1,0,0", "-123", "", "-124", "", "-126", "", "-127", "", "-128", ",,", "-131", ",,,", "-132", ",", "-133", "", "-70", "-1", "-80", "94", "-90", params_3(params1), "-116", 0]
    rP.push("-129", "")
    kP = params_4(8, [rP, 2, false])
    WV = rP.join(kP)
    rR = "rrJ4j83XSFl7VKpDCqmOpA=="  //？？？
    // WV = -(pW[2]) !== WV.indexOf(("-120").concat(kP)) ? WV.replace(("-120").concat(kP), (("-120").concat(kP)).concat(qR)) : (((("").concat(WV)).concat(kP, "-120")).concat(kP)).concat("Error extracting obfuscation keys.");
    WV = 2 + kP + 2 + kP + params_5() + rR + kP + 24 ^ params_6(WV) + kP + WV;
    WV = rP["join"](kP)
    GR = params_7(bm_sz)
    WV = function qP(KP, lP) {
        var sP;
        var fP;
        var mP;
        var CP;
        var bP = KP.split(",");
        for (CP = 0; l9(CP, bP.length); CP++)
            sP = v9(Q9(L9(lP, Ok[9]), 65535), bP.length),
                lP *= Ok[26],
                lP &= Ok[27],
                lP += 4282663,
                fP = v9(Q9(L9(lP &= Ok[28], 8), Ok[29]), bP.length),
                lP *= 65793,
                lP &= Ok[27],
                lP += Ok[30],
                lP &= Ok[28],
                mP = bP[sP],
                bP[sP] = bP[fP],
                bP[fP] = mP;
        var tP;
        return bP.join(",")
    }(WV, GR[1])
    xP = [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]
    YP = ""
    WV = function qP(dP, hP) {
        for (var wP = Ok[3]; l9(wP, 127); ++wP)
            l9(wP, 32) || n9(Ok[31], wP) || n9(34, wP) || n9(92, wP) ? xP[wP] = -1 : (xP[wP] = YP.length,
                YP += String.fromCharCode(wP));
        for (var PP = "", A2A = Ok[3]; l9(A2A, dP.length); A2A++) {
            var M2A = dP.charAt(A2A)
                , I2A = Q9(L9(hP, 8), Ok[29]);
            hP *= 65793,
                hP &= Ok[27],
                hP += 4282663,
                hP &= Ok[28];

            var H2A = xP[50];
            var V2A = M2A.codePointAt(0);
            IU(V2A, 32) && l9(V2A, Ok[32]) && (H2A = xP[V2A]);
            IU(H2A, 0) && (H2A += v9(I2A, YP.length),
                H2A %= YP.length,
                M2A = YP[H2A]),
                PP += M2A;
        }
        return PP
    }(WV, GR[0])
    var UR = (((((("")["concat"](get_timestamp() - Rj, ","))["concat"](0, ","))["concat"](0, ","))["concat"](1, ","))["concat"](2, ","))["concat"](0);
    WV = K9(K9(K9(K9(K9(K9(K9("2;", GR[0]), ";"), GR[1]), ";"), UR), ";"), WV);
    return WV
}

// console.log(get_sensor_data('1B58D0BC269E2EF03EA93AB1AF1E0679~-1~YAAQjBw/OzO1pLuGAQAAtSDb4gnLW32xooxxPLhY/EQCLGMsjY6syptp9uwswEsMcTlXWOOhRmvS+WerXD3JN5FAnl6aPtcV0+nx0uva++58Z7aKwIRMQXd4tXYsAtLK7JSxSCqC4IgoMTrnYRBwtZK0rJjBsARFaUqLitl+4TM+2xg6ATpBfuqRdlb+flpGwCUE5mZZu1liC0XZtE+RI7jyu2FDLrWFE0TuECJTH+H6juxbiAswxqEjSks9cJYd4WIVPwZ54cFywBse45wFc4DwplvNWqGtLJcHIAmSMYf5zupEHD+F4KQ4nIBVRt+uF7pt/wm7rTPbi9RmHKUJ5mFlxTDyaIQyNr/SYs3T1RjLZJlmOzdqkBey/YGxvAc0PTLkJiXwWw==~-1~-1~1678846835','B95DF32B8171CDF6A9189A1C0A9EB063~YAAQjBw/Oye1pLuGAQAApRnb4hNcwKYPuyU5HiszNj+ipsYI2xqAtwNbUdoIrdgR9agNtGgZNyMOouGdz1Ie+GdqOdD9fJyBeiSLTiPRsZ33Z6ky37LweQChxNCvHCFRWKAxv3K8lLTARhjFLQRhUTfRfpducrCIyY29OirZXuEZldigH1kmRC8iMo3YTFHsLMBNpXn1tKIQVa9Zxo5yPiNq2Kt6Ln34Ua5slBXOm82etK0Nwuo6zOSmA9dbqX4n/1OV7Rv79R7gkBHJX1ctsfeTtNn00zAoxfih8rOEwVM=~3491395~3552562'))