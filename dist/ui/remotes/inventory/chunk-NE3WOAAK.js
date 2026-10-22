import * as n from "@angular/core";
import "@angular/core";
var d = (() => { class r {
    isErrorState(t, e) { return !!(t && t.invalid && (t.dirty || e && e.submitted)); }
    isSignalErrorState(t) { if (!t)
        return !1; let e = t().invalid(), i = t().dirty(); return e && i; }
    static \u0275fac = function (e) { return new (e || r); };
    static \u0275prov = n.\u0275\u0275defineService({ token: r, factory: r.\u0275fac, autoProvided: !1 });
} return r; })(), c = (() => { class r {
    isErrorState(t, e) { return !!(t && t.invalid && (t.touched || e && e.submitted)); }
    isSignalErrorState(t) { if (!t)
        return !1; let e = t().invalid(), i = t().touched(); return e && i; }
    static \u0275fac = function (e) { return new (e || r); };
    static \u0275prov = n.\u0275\u0275defineService({ token: r, factory: r.\u0275fac });
} return r; })();
export { d as a, c as b };
