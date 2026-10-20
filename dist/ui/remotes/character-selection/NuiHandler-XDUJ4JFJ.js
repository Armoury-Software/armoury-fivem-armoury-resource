import * as r from "@angular/core";
var t = class e {
    handleMessage(a) { console.warn(`Unhandled character-selection NUI message: ${a.type}`); }
    static \u0275fac = function (o) { return new (o || e); };
    static \u0275prov = r.\u0275\u0275defineInjectable({ token: e, factory: e.\u0275fac, providedIn: "root" });
};
export { t as NuiHandler };
