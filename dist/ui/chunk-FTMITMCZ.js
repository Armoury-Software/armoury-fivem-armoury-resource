import * as i from "@angular/core";
import "@angular/core";
var f = (() => { class e {
    _listeners = [];
    notify(t, r) { for (let s of this._listeners)
        s(t, r); }
    listen(t) { return this._listeners.push(t), () => { this._listeners = this._listeners.filter(r => t !== r); }; }
    ngOnDestroy() { this._listeners = []; }
    static \u0275fac = function (r) { return new (r || e); };
    static \u0275prov = i.\u0275\u0275defineService({ token: e, factory: e.\u0275fac });
} return e; })();
export { f as a };
