import * as c from "@angular/core";
import { inject as r, APP_ID as d } from "@angular/core";
var o = new Map, a = class n {
    _appId = r(d);
    static _infix = `a${Math.floor(Math.random() * 1e5).toString()}`;
    getId(t, i = !1) { this._appId !== "ng" && (t += this._appId); let e = o.get(t); return e === void 0 ? e = 0 : e++, o.set(t, e), `${t}${i ? n._infix + "-" : ""}${e}`; }
    static \u0275fac = function (i) { return new (i || n); };
    static \u0275prov = c.\u0275\u0275defineService({ token: n, factory: n.\u0275fac });
};
export { a };
