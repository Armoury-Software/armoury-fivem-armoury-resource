import * as r from "@angular/core";
import { InjectionToken as l, inject as a, DOCUMENT as c, signal as u, EventEmitter as d } from "@angular/core";
var s = new l("cdk-dir-doc", { providedIn: "root", factory: () => a(c) }), g = /^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;
function v(e) { let o = e?.toLowerCase() || ""; return o === "auto" && typeof navigator < "u" && navigator?.language ? g.test(navigator.language) ? "rtl" : "ltr" : o === "rtl" ? "rtl" : "ltr"; }
var y = (() => { class e {
    get value() { return this.valueSignal(); }
    valueSignal = u("ltr");
    change = new d;
    constructor() { let t = a(s, { optional: !0 }); if (t) {
        let n = t.body ? t.body.dir : null, i = t.documentElement ? t.documentElement.dir : null;
        this.valueSignal.set(v(n || i || "ltr"));
    } }
    ngOnDestroy() { this.change.complete(); }
    static \u0275fac = function (n) { return new (n || e); };
    static \u0275prov = r.\u0275\u0275defineService({ token: e, factory: e.\u0275fac });
} return e; })();
export { s as a, v as b, y as c };
