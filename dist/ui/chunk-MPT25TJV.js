import * as t from "@angular/core";
import "@angular/core";
import { coerceBooleanProperty as a } from "@angular/cdk/coercion";
import { BidiModule as o } from "@angular/cdk/bidi";
var u = (() => {
    class i {
        get vertical() { return this._vertical; }
        set vertical(e) { this._vertical = a(e); }
        _vertical = !1;
        get inset() { return this._inset; }
        set inset(e) { this._inset = a(e); }
        _inset = !1;
        static \u0275fac = function (r) { return new (r || i); };
        static \u0275cmp = t.\u0275\u0275defineComponent({ type: i, selectors: [["mat-divider"]], hostAttrs: ["role", "separator", 1, "mat-divider"], hostVars: 7, hostBindings: function (r, n) { r & 2 && (t.\u0275\u0275attribute("aria-orientation", n.vertical ? "vertical" : "horizontal"), t.\u0275\u0275classProp("mat-divider-vertical", n.vertical)("mat-divider-horizontal", !n.vertical)("mat-divider-inset", n.inset)); }, inputs: { vertical: "vertical", inset: "inset" }, decls: 0, vars: 0, template: function (r, n) { }, styles: [`.mat-divider {
  display: block;
  margin: 0;
  border-top-style: solid;
  border-top-color: var(--%NS%mat-divider-color, var(--%NS%mat-sys-outline-variant));
  border-top-width: var(--%NS%mat-divider-width, 1px);
}
.mat-divider.mat-divider-vertical {
  border-top: 0;
  border-right-style: solid;
  border-right-color: var(--%NS%mat-divider-color, var(--%NS%mat-sys-outline-variant));
  border-right-width: var(--%NS%mat-divider-width, 1px);
}
.mat-divider.mat-divider-inset {
  margin-left: 80px;
}
[dir=rtl] .mat-divider.mat-divider-inset {
  margin-left: auto;
  margin-right: 80px;
}
`], encapsulation: 2 });
    }
    return i;
})(), f = (() => { class i {
    static \u0275fac = function (r) { return new (r || i); };
    static \u0275mod = t.\u0275\u0275defineNgModule({ type: i });
    static \u0275inj = t.\u0275\u0275defineInjector({ imports: [o] });
} return i; })();
export { u as a, f as b };
