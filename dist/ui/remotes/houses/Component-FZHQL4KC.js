import * as s from "@angular/core";
var o = class t {
    static \u0275fac = function (e) { return new (e || t); };
    static \u0275cmp = s.\u0275\u0275defineComponent({ type: t, selectors: [["app-houses-debugger"]], decls: 0, vars: 0, template: function (e, r) { }, encapsulation: 2 });
};
import * as n from "@angular/core";
var a = class t {
    static \u0275fac = function (e) { return new (e || t); };
    static \u0275cmp = n.\u0275\u0275defineComponent({ type: t, selectors: [["app-houses-root"]], decls: 1, vars: 0, template: function (e, r) { e & 1 && n.\u0275\u0275element(0, "app-houses-debugger"); }, dependencies: [o], encapsulation: 2 });
};
export { a as App };
