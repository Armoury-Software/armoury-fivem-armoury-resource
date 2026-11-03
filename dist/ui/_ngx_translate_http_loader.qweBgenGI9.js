var H = Object.defineProperty;
var l = Object.getOwnPropertySymbols;
var O = Object.prototype.hasOwnProperty, $ = Object.prototype.propertyIsEnumerable;
var d = (e, r, t) => r in e ? H(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[r] = t, i = (e, r) => { for (var t in r ||= {})
    O.call(r, t) && d(e, t, r[t]); if (l)
    for (var t of l(r))
        $.call(r, t) && d(e, t, r[t]); return e; };
import { HttpBackend as j, HttpClient as g } from "@angular/common/http";
import * as E from "@angular/core";
import { InjectionToken as k, inject as p } from "@angular/core";
import { TranslateLoader as x, mergeDeep as b } from "@ngx-translate/core";
import { catchError as w, defer as y, forkJoin as A, map as D, of as u, throwError as h } from "rxjs";
var B = /^\.{1,2}$/, T = new k("TRANSLATE_HTTP_LOADER_CONFIG"), C = class c {
    http;
    config;
    constructor() { this.config = i({ resources: [], enforceLoading: !1, useHttpBackend: !1 }, p(T)), this.http = this.config.useHttpBackend ? new g(p(j)) : p(g); }
    getTranslation(t) { let o = this.config.enforceLoading ? `?enforceLoading=${Date.now()}` : "", f = this.config.resources.map(a => { let s; return y(() => { let n = encodeURIComponent(t); return s = `${typeof a == "string" ? `${a}${n}.json` : `${a.prefix}${n}${a.suffix ?? ".json"}`}${o}`, B.test(t) ? h(() => new Error(`"${t}" is a path segment, not a language`)) : this.http.get(s); }).pipe(w(n => (this.reportError({ lang: t, resource: a, url: s, error: n }), this.config.failOnError ? h(() => n) : u({})))); }); return f.length === 0 ? u({}) : A(f).pipe(D(a => a.reduce((s, n) => this.config.flatten ? i(i({}, s), m(n ?? {})) : b(s, n), {}))); }
    reportError(t) { if (this.config.onLoadError)
        try {
            this.config.onLoadError(t);
        }
        catch (o) {
            console.warn("@ngx-translate/http-loader: onLoadError callback failed:", o);
        }
    else
        this.config.failOnError || console.warn(`@ngx-translate/http-loader: error loading translation for ${t.lang}:`, t.error); }
    static \u0275fac = function (o) { return new (o || c); };
    static \u0275prov = E.\u0275\u0275defineInjectable({ token: c, factory: c.\u0275fac });
};
function m(e) { return Object.fromEntries(Object.entries(e).flatMap(([r, t]) => t !== null && typeof t == "object" && !Array.isArray(t) && Object.keys(t).length ? Object.entries(m(t)).map(([o, f]) => [`${r}.${o}`, f]) : [[r, t]])); }
function S(e = {}) { if ("resources" in e && e.resources)
    return L(e); let r = e; return L({ enforceLoading: r.enforceLoading ?? !1, useHttpBackend: r.useHttpBackend ?? !1, failOnError: r.failOnError ?? !1, flatten: r.flatten ?? !1, onLoadError: r.onLoadError, resources: [{ prefix: r.prefix ?? "/assets/i18n/", suffix: r.suffix ?? ".json" }] }); }
function L(e = {}) { return [{ provide: T, useValue: i({ resources: ["/assets/i18n/"] }, e) }, { provide: x, useClass: C }]; }
export { T as TRANSLATE_HTTP_LOADER_CONFIG, C as TranslateHttpLoader, S as provideTranslateHttpLoader, L as provideTranslateMultiHttpLoader };
