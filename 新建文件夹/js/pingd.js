/*!
 * pingd.js v1.8.7.6
 *
 * Copyright 2014, 1905.com
 *
 * Date: 2014-12-03 10:00:00
 *
 * Modified 2014-12-03 10:00:00 (add fr argument on 404 page )
 */
(function ping() {
    var d = document,
        bd = d.body;
    var t = new Date();
    var v = "//trace.m1905.cn/collect.gif?";
    var ss = sl(location.href);
    var rr = d.referrer.match(/.*?\/([\w-.]+)(\/[^?]*)?(?:\?(.*))?/);
    var gos = "g";
    var fr = "";
    var jsvsion = "1.8.7.6";
    var uvtxt = d.createElement('input');
    try {
        var p_404 = (typeof (__pagecode) == "undefined" || __pagecode == null || __pagecode == '') ? '' : __pagecode;
        if (p_404) {
            if (location.href.indexOf("?") > 0) {
                fr = "&fr=1905page_status_404_20141202"
            } else {
                fr = "?fr=1905page_status_404_20141202"
            }
        }
        var p_id = (typeof (playerId) == "undefined" || playerId == null || playerId == '') ? '' : playerId;
        if (p_id == '') {
            p_id = (typeof (M) != "undefined" && M.vodPlayer && M.vodPlayer.playerId) ? M.vodPlayer.playerId : t.getTime()
        };
        sc('pvid', p_id);
        uvtxt.type = "hidden";
        uvtxt.id = "uvtext";
        uvtxt.value = p_id;
        var _tmp = tu();
        s(v + _tmp);
        var u = [/blog\.1905\.com\/list\.php$/, /www\.1905\.com\/$/, /www\.1905\.com\/vod\/$/];
        for (var a = 0; a < u.length; a++) {
            if (u[a].test(document.location.toString())) {
                B(v + _tmp);
                break
            }
        };
        var ao = d.createElement('input');
        ao.type = "button";
        ao.style.display = "none";
        ao.id = "added_object_for_bi";
        ao.onclick = function () {
            if (this.value == "hdpic") {
                rs()
            }
            if (this.value.indexOf("__oc") >= 0) {
                rso(this.value)
            }
        };
        bd.appendChild(ao);
        bd.appendChild(uvtxt);
        _writescript();
        window.onbeforeunload = function staybounce(evt) {
            try {
                var svid = uvtxt.value;
                if (svid == gc("pvid")) {
                    s(v + tu('__gb'))
                }
            } catch (ex) {}
        };
        loadot()
    } catch (e) {};

    function B(c) {
        var a = window.location,
            b = a.host + a.pathname,
            d = a.pathname,
            e = function () {
                sh(("https:" == document.location.protocol ? "https://" : "http://") + "js.static.m1905.cn/ping_hotclick_min.js?v=1", function () {
                    window.hotclick && (new hotclick(c)).watchClick()
                })
            };
        e()
    };

    function sh(c, a) {
        var b = document.createElement("script"),
            d = document.getElementsByTagName("script")[0];
        b.src = c;
        b.type = "text/javascript";
        b.onload = b.onerror = b.onreadystatechange = function () {
            /loaded|complete|undefined/.test(b.readyState) && (b.onload = b.onerror = b.onreadystatechange = null, b.parentNode.removeChild(b), b = void 0, a())
        };
        d.parentNode.insertBefore(b, d)
    };

    function sl(u) {
        return u.match(/.*?\/([\w-.]+)(\/[\w-.\/]+|\/)?(?:\?(.*))?/)
    };

    function s(u) {
        var i = new Image(1, 1);
        i.src = u;
        i.onerror = function () {}
    };

    function sc(n, v) {
        var lt = ss[1].length;
        if (ss[1].substr(lt - 9) == ".1905.com" || ss[1].substr(lt - 10) == ".m1905.com") {
            d.cookie = n + "=" + escape(v) + "; expires=Sun, 18 Jan 2038 00:00:00 GMT;path=/;domain=.1905.com";
            d.cookie = n + "=" + escape(v) + "; expires=Sun, 18 Jan 2038 00:00:00 GMT;path=/;domain=.m1905.com"
        } else {
            d.cookie = n + "=" + escape(v) + "; expires=Sun, 18 Jan 2038 00:00:00 GMT;path=/;domain=" + ss[1]
        }
    };

    function scuid(n, v) {
        var lt = ss[1].length;
        if (ss[1].substr(lt - 9) == ".1905.com") {
            d.cookie = n + "=" + escape("m" + v) + "; expires=Sun, 18 Jan 2038 00:00:00 GMT;path=/;domain=.1905.com"
        } else {
            d.cookie = n + "=" + escape("o" + v) + "; expires=Sun, 18 Jan 2038 00:00:00 GMT;path=/;domain=" + ss[1]
        }
    }

    function gc(n) {
        var a = d.cookie.match(new RegExp("(^|\\s)" + n + "=([^;]*)(;|$)"));
        return a == null ? "" : unescape(a[2])
    };

    function guid(n) {
        var pr = 'WOlTvIlgRp';
        var m = gc(pr + 'mauth');
        if (!m || m.length < 32) {
            return ''
        };
        return gc(pr + 'uid')
    };

    function gid() {
        var pre = '__';
        var i = gc(pre + 'uv_');
        if (!i || i == '0') {
            var a = t.getUTCMilliseconds();
            i = (Math.round(Math.random() * 2147483647) * a) % 10000000000;
            while (i == 0) {
                i = (Math.round(Math.random() * 2247483647) * a) % 10000000000
            };
            sc(pre + 'uv_', i);
            gos = 's'
        };
        return i
    };

    function guxid() {
        var ugos = "g";
        var pre = 'SpMLdaPx';
        var i = gc(pre + 'uv');
        if (!i || i == '0') {
            var a = t.getUTCMilliseconds();
            i = (Math.round(Math.random() * 2147483647) * a) % 10000000000;
            while (i == 0) {
                i = (Math.round(Math.random() * 2247483647) * a) % 10000000000
            }
            ugos = 's';
            scuid(pre + 'uv', i)
        }
        return (null != gc(pre + 'uv') && 'undefined' != gc(pre + 'uv') && '' != gc(pre + 'uv')) ? ugos + gc(pre + 'uv') : "ra" + i
    };

    function gf() {
        var f = "-",
            n = navigator;
        try {
            if (n.plugins && n.plugins.length) {
                for (var i = 0; i < n.plugins.length; i++) {
                    if (n.plugins[i].name.indexOf('Shockwave Flash') != -1) {
                        f = n.plugins[i].description.split('Shockwave Flash ')[1];
                        break
                    }
                }
            } else if (window.ActiveXObject) {
                for (var i = 10; i >= 2; i--) {
                    try {
                        var fl = eval("new ActiveXObject('ShockwaveFlash.ShockwaveFlash." + i + "');");
                        if (fl) {
                            f = i + '.0';
                            break
                        }
                    } catch (e) {}
                }
            }
        } catch (e) {};
        return f
    };

    function ge() {
        var r = "",
            a = b = c = h = e = f = g = "-",
            i = 0,
            n = navigator;
        try {
            if (self.screen) {
                a = screen.width + "x" + screen.height;
                b = screen.colorDepth + "-bit"
            };
            if (n.language) {
                c = n.language.toLowerCase()
            } else if (n.browserLanguage) {
                c = n.browserLanguage.toLowerCase()
            };
            i = n.javaEnabled() ? 1 : 0;
            h = n.cpuClass;
            e = n.platform;
            f = t.getTimezoneOffset() / 60;
            if (bd.addBehavior) {
                bd.addBehavior("#default#clientCaps");
                g = bd.connectionType
            };
            r = "&scr=" + a + "&scl=" + b + "&lang=" + c + "&java=" + i + "&cc=" + h + "&pf=" + e + "&tz=" + f + "&flash=" + gf() + "&ct=" + g + "&vs=1.0"
        } catch (e) {} finally {
            return r
        }
    };

    function suvid() {
        var uv = gid();
        var pr = 'WOlTvIlgRp';
        sc(pr + 'uvid_', (t.getHours() < 10 ? '0' + t.getHours() : t.getHours()).toString() + (t.getMinutes() < 10 ? '0' + t.getMinutes() : t.getMinutes()).toString())
    };

    function guvid() {
        var uv = gid();
        var pr = 'WOlTvIlgRp';
        var uvid = gc(pr + 'uvid_');
        if (!uvid) {
            suvid()
        } else {
            var ctime = gc(pr + 'time_');
            var ntime = t.getTime();
            if (t.getTime() - ctime > 1800000) {
                suvid()
            }
        };
        sc(pr + 'time_', t.getTime());
        return gc(pr + 'uvid_') ? gc(pr + 'uvid_') : (t.getHours() < 10 ? '0' + t.getHours() : t.getHours()).toString() + (t.getMinutes() < 10 ? '0' + t.getMinutes() : t.getMinutes()).toString()
    };

    function tu(_gb) {
        var a = b = c = "";
        if (rr) {
            a = rr[1];
            b = rr[2];
            c = typeof (rr[3]) != "undefined" ? rr[3] : ""
        };
        if (a == "") {
            var r = location.href.match(new RegExp('[\?&#](((referurl)|(m_referer)|(ADTAG))=[^&#]+)(&|#|$)'));
            if (r) {
                a = r[1] == null ? "" : escape(r[1])
            }
        };
        var r = location.href.match(new RegExp('[\?&#]((referurl)|(m_referer)=[^&#]+)(&|#|$)'));
        if (r) {
            a = r[1] == null ? "" : escape(r[1])
        };
        var cookiepvid = uvtxt.value ? uvtxt.value : t.getTime();
        if (_gb) {
            return "dm=" + ss[1] + "&url=" + ss[2] + "&arg=" + escape(typeof (ss[3]) != "undefined" ? ss[3] : "") + _gb + "&tt=empty&rdm=" + a + "&rurl=" + b + "&rarg=" + escape(c) + _gb + "&uv=" + gid() + "&loc=" + escape(location.href) + fr + _gb + "&uid=" + guid() + ge() + "&pvid=" + cookiepvid + "&uvid=" + guvid() + "&_title=" + encodeURIComponent(document.title) + "&ver=" + gos + "" + jsvsion + "&uvxid=" + guxid() + "&rand=" + Math.round(Math.random() * 100000)
        } else {
            return "dm=" + ss[1] + "&url=" + ss[2] + "&arg=" + escape(typeof (ss[3]) != "undefined" ? ss[3] : "") + "&tt=empty&rdm=" + a + "&rurl=" + b + "&rarg=" + escape(c) + "&uv=" + gid() + "&loc=" + escape(location.href) + fr + "&uid=" + guid() + ge() + "&pvid=" + cookiepvid + "&uvid=" + guvid() + "&_title=" + encodeURIComponent(document.title) + "&ver=" + gos + "" + jsvsion + "&uvxid=" + guxid() + "&rand=" + Math.round(Math.random() * 100000)
        }
    };

    function rs() {
        ss = location.href.match(/https?:\/\/([\w-.]+)(\/[\w-.\/]+|\/)?(?:\?([^\#]*))?(?:\#.*?(\d+))?/);
        rr = ["", ss[1], ss[2]];
        if (typeof (ss[4]) == "undefined" || !ss[4]) {
            return
        };
        if (ss[2].match(/(.*\/\d+)(\.s?html?)$/)) {
            try {
                ss[2] = ss[2].replace(/(.*\/\d+)(\.s?html?)$/, "$1_" + ss[4] + "$2")
            } catch (e) {
                return
            }
        } else {
            ss[3] = typeof (ss[3]) != "undefined" ? ("p=" + ss[4]) : (ss[3] + "&p=" + ss[4])
        };
        try {
            s(v + tu())
        } catch (e) {}
    };

    function rso(oc) {
        try {
            s(v + tu(oc))
        } catch (e) {}
    }

    function _writescript() {
        document.write(unescape("%3Cscript type=%22text/javascript%22%3E%0Afunction __sdonclick%28btvalue%29%7B var obj_for_bi = document.getElementById%28%22added_object_for_bi%22%29%3B%0A     if %28obj_for_bi%29 %7B%0A         obj_for_bi.value = btvalue%3B%0A        obj_for_bi.click%28%29%0A     %7D%0A%7D%0A%3C/script%3E"))
    }

    function loadot() {
        var _dmProtocol = (("https:" == document.location.protocol) ? " https://" : " http://");
        document.write(unescape("%3Cscript src='" + _dmProtocol + "js.static.m1905.cn/pingd_other20181130.js' type='text/javascript'%3E%3C/script%3E"))
    }
})();