import { BidiModule as a } from "@angular/cdk/bidi";
import * as o from "@angular/core";
import "@angular/core";
import { startWith as r } from "rxjs/operators";
var m = (() => { class t {
    static \u0275fac = function (i) { return new (i || t); };
    static \u0275dir = o.\u0275\u0275defineDirective({ type: t, selectors: [["", "mat-line", ""], ["", "matLine", ""]], hostAttrs: [1, "mat-line"] });
} return t; })();
function M(t, n, e = "mat") { t.changes.pipe(r(t)).subscribe(({ length: i }) => { s(n, `${e}-2-line`, !1), s(n, `${e}-3-line`, !1), s(n, `${e}-multi-line`, !1), i === 2 || i === 3 ? s(n, `${e}-${i}-line`, !0) : i > 3 && s(n, `${e}-multi-line`, !0); }); }
function s(t, n, e) { t.nativeElement.classList.toggle(n, e); }
var v = (() => { class t {
    static \u0275fac = function (i) { return new (i || t); };
    static \u0275mod = o.\u0275\u0275defineNgModule({ type: t });
    static \u0275inj = o.\u0275\u0275defineInjector({ imports: [a] });
} return t; })();
export { m as a, M as b, v as c };
