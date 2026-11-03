var Mt = Object.defineProperty, _t = Object.defineProperties;
var kt = Object.getOwnPropertyDescriptors;
var $ = Object.getOwnPropertySymbols;
var ht = Object.prototype.hasOwnProperty, dt = Object.prototype.propertyIsEnumerable;
var gt = (n, r, t) => r in n ? Mt(n, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : n[r] = t, p = (n, r) => { for (var t in r ||= {})
    ht.call(r, t) && gt(n, t, r[t]); if ($)
    for (var t of $(r))
        dt.call(r, t) && gt(n, t, r[t]); return n; }, D = (n, r) => _t(n, kt(r));
var ft = n => typeof n == "symbol" ? n : n + "", pt = (n, r) => { var t = {}; for (var e in n)
    ht.call(n, e) && r.indexOf(e) < 0 && (t[e] = n[e]); if (n != null && $)
    for (var e of $(n))
        r.indexOf(e) < 0 && dt.call(n, e) && (t[e] = n[e]); return t; };
import * as o from "@angular/core";
import { ChangeDetectorRef as xt, DestroyRef as Y, ElementRef as Ot, InjectionToken as It, Injector as Nt, TemplateRef as St, ViewContainerRef as Pt, computed as O, contentChildren as $t, effect as Et, inject as g, input as nt, signal as L, untracked as b } from "@angular/core";
import { takeUntilDestroyed as m } from "@angular/core/rxjs-interop";
import { EMPTY as E, ReplaySubject as Tt, Subject as at, concat as mt, defer as A, finalize as At, firstValueFrom as jt, forkJoin as X, isObservable as V, merge as j, of as C, retry as Kt, share as Ht, tap as Lt, throwError as bt, timer as qt } from "rxjs";
import { catchError as Vt, concatMap as Bt, defaultIfEmpty as Ut, filter as Z, map as K, switchMap as vt, take as tt, takeUntil as Yt } from "rxjs/operators";
import { NgTemplateOutlet as Jt } from "@angular/common";
var Gt = (n, r) => r.id;
function Qt(n, r) { if (n & 1 && o.\u0275\u0275elementContainer(0, 0), n & 2) {
    let t = o.\u0275\u0275nextContext().$implicit;
    o.\u0275\u0275property("ngTemplateOutlet", t.template);
} }
function zt(n, r) { if (n & 1 && (o.\u0275\u0275elementContainerStart(0), o.\u0275\u0275text(1), o.\u0275\u0275elementContainerEnd()), n & 2) {
    let t = o.\u0275\u0275nextContext().$implicit;
    o.\u0275\u0275advance(), o.\u0275\u0275textInterpolate(t.text);
} }
function Wt(n, r) { if (n & 1 && o.\u0275\u0275conditionalCreate(0, Qt, 1, 1, "ng-container", 0)(1, zt, 2, 1, "ng-container"), n & 2) {
    let t = r.$implicit;
    o.\u0275\u0275conditional(t.template ? 0 : 1);
} }
function ye(n) { return n; }
function Ct(n, r) { let t = {}; for (let e of Object.keys(n))
    e !== r && (t[e] = n[e]); return t; }
var Xt = class {
    state = L({});
    hasAny = O(() => Object.keys(this.state()).length > 0);
    isLoading(n) { return this.state()[n] !== void 0; }
    get(n) { return this.state()[n]; }
    set(n, r) { this.state.update(t => D(p({}, t), { [n]: r })); }
    clear(n) { this.state.update(r => Ct(r, n)); }
    clearIfOwner(n, r) { this.state.update(t => t[n] === r ? Ct(t, n) : t); }
}, lt = class {
}, Zt = class B {
    handle(t) { return t.key; }
    static \u0275fac = function (e) { return new (e || B); };
    static \u0275prov = o.\u0275\u0275defineInjectable({ token: B, factory: B.\u0275fac });
}, G = class {
}, te = class M extends G {
    compile(t, e) { return t; }
    compileTranslations(t, e) { return t; }
    static \u0275fac = (() => { let t; return function (a) { return (t || (t = o.\u0275\u0275getInheritedFactory(M)))(a || M); }; })();
    static \u0275prov = o.\u0275\u0275defineInjectable({ token: M, factory: M.\u0275fac });
}, Q = class {
}, ee = class _ extends Q {
    getTranslation(t) { return C({}); }
    static \u0275fac = (() => { let t; return function (a) { return (t || (t = o.\u0275\u0275getInheritedFactory(_)))(a || _); }; })();
    static \u0275prov = o.\u0275\u0275defineInjectable({ token: _, factory: _.\u0275fac });
};
function I(n, r) { if (n === r)
    return !0; if (n === null || r === null)
    return !1; if (n !== n && r !== r)
    return !0; if (n instanceof Date || r instanceof Date)
    return n instanceof Date && r instanceof Date && I(n.getTime(), r.getTime()); let t = typeof n, e = typeof r, a; if (t == e && t == "object")
    if (Array.isArray(n)) {
        if (!Array.isArray(r))
            return !1;
        if ((a = n.length) == r.length) {
            for (let s = 0; s < a; s++)
                if (!I(n[s], r[s]))
                    return !1;
            return !0;
        }
    }
    else {
        if (Array.isArray(r))
            return !1;
        if (T(n) && T(r)) {
            let s = Object.create(null);
            for (let i in n) {
                if (!I(n[i], r[i]))
                    return !1;
                s[i] = !0;
            }
            for (let i in r)
                if (!(i in s) && typeof r[i] < "u")
                    return !1;
            return !0;
        }
    } return !1; }
function d(n) { return typeof n < "u" && n !== null; }
function et(n) { return n !== void 0; }
function T(n) { return N(n) && !y(n) && n !== null; }
function N(n) { return typeof n == "object" && n !== null; }
function y(n) { return Array.isArray(n); }
function S(n) { return typeof n == "string"; }
function ne(n) { return typeof n == "function"; }
function J(n) { if (y(n))
    return n.map(r => J(r)); if (T(n)) {
    let r = {};
    return Object.keys(n).forEach(t => { r[t] = J(n[t]); }), r;
}
else
    return n; }
function ct(n, r) { if (!N(n))
    return J(r); let t = J(n); return N(t) && N(r) && Object.keys(r).forEach(e => { T(r[e]) ? e in n ? t[e] = ct(n[e], r[e]) : Object.assign(t, { [e]: r[e] }) : Object.assign(t, { [e]: r[e] }); }), t; }
function ut(n, r) { let t = n, e = r, a = r.split("."); r = ""; do {
    r += a.shift();
    let s = !a.length;
    if (d(n)) {
        if (T(n) && et(n[r]) && (T(n[r]) || y(n[r]) || s)) {
            n = n[r], r = "";
            continue;
        }
        if (y(n)) {
            if (r === "length" && s) {
                n = n.length, r = "";
                continue;
            }
            if (/^\d+$/.test(r)) {
                let i = parseInt(r, 10);
                if (et(n[i]) && (T(n[i]) || y(n[i]) || s)) {
                    n = n[i], r = "";
                    continue;
                }
            }
        }
    }
    if (s) {
        n = void 0;
        continue;
    }
    r += ".";
} while (a.length); return typeof n > "u" && T(t) && et(t[e]) ? t[e] : n; }
function ae(n, r, t) { return ct(n, re(r, t)); }
function re(n, r) { return n.split(".").reduceRight((t, e) => ({ [e]: t }), r); }
var z = class {
}, se = class k extends z {
    templateMatcher = /{{\s?([^{}\s]*)\s?}}/g;
    interpolate(t, e, a) { if (S(t))
        return this.interpolateString(t, e, a); if (ne(t))
        return this.interpolateFunction(t, e, a); }
    interpolateFunction(t, e, a) { return t(e, a); }
    interpolateString(t, e, a) { return e ? t.replace(this.templateMatcher, (s, i) => { let l = this.getInterpolationReplacement(e, i, a); return l !== void 0 ? l : s; }) : t; }
    getInterpolationReplacement(t, e, a) { return this.formatValue(ut(t, e), a); }
    formatValue(t, e) { if (S(t))
        return t; if (typeof t == "number" || typeof t == "boolean")
        return t.toString(); if (t === null)
        return "null"; if (y(t))
        return t.join(", "); if (N(t))
        return typeof t.toString == "function" && t.toString !== Object.prototype.toString ? t.toString() : JSON.stringify(t); }
    static \u0275fac = (() => { let t; return function (a) { return (t || (t = o.\u0275\u0275getInheritedFactory(k)))(a || k); }; })();
    static \u0275prov = o.\u0275\u0275defineInjectable({ token: k, factory: k.\u0275fac });
}, wt = class U {
    _translations = L({});
    translations = this._translations.asReadonly();
    _languages = L([]);
    languages = this._languages.asReadonly();
    _lastTranslationChange = L(null);
    lastTranslationChange = this._lastTranslationChange.asReadonly();
    _translationChange$ = new at;
    translationChange$ = this._translationChange$.asObservable();
    constructor() { g(Y).onDestroy(() => { this._translationChange$.complete(); }); }
    getTranslations(t) { return this.translations()[t]; }
    setTranslations(t, e, a) { b(() => { this._translations.update(i => D(p({}, i), { [t]: a && this.hasTranslationFor(t) ? ct(i[t], e) : e })), this.addLanguages([t]); let s = { lang: t, translations: this.getTranslations(t) }; this._lastTranslationChange.set(s), this._translationChange$.next(s); }); }
    getLanguages() { return this.languages(); }
    addLanguages(t) { this._languages.update(e => Array.from(new Set([...e, ...t]))); }
    removeLanguages(t) { this._languages.update(e => e.filter(a => !t.includes(a))); }
    hasTranslationFor(t) { return typeof this.translations()[t] < "u"; }
    deleteTranslations(t) { b(() => { if (!this.hasTranslationFor(t))
        return; this._translations.update(a => { let l = a, { [t]: s } = l; return pt(l, [ft(t)]); }); let e = { lang: t, translations: {} }; this._lastTranslationChange.set(e), this._translationChange$.next(e); }); }
    getTranslationValue(t, e) { return ut(this.getTranslations(t), e); }
    static \u0275fac = function (e) { return new (e || U); };
    static \u0275prov = o.\u0275\u0275defineInjectable({ token: U, factory: U.\u0275fac });
}, Rt = new It("TRANSLATE_CONFIG"), H = n => V(n) ? n : C(n), ie = 100, oe = 2 ** 31 - 1, w = class v {
    loadingTranslations = new Xt;
    loadCancellation = new Map;
    languageRequestSequence = 0;
    lastFallbackRequest = 0;
    languageRequestIds = new WeakMap;
    deletedLanguageRequests = new Map;
    lastUseLanguage = null;
    retry;
    currentLoader = g(Q);
    compiler = g(G);
    parser = g(z);
    missingTranslationHandler = g(lt);
    store = g(wt);
    destroyRef = g(Y);
    parent;
    get isRoot() { return this.parent === null; }
    _onLangChange = new at;
    _onFallbackLangChange = new at;
    _currentLang = L(null);
    _fallbackLang = L(null);
    _additionalFallbackLangs = L([]);
    _fallbackLangs = O(() => { let t = this._fallbackLang(); return t === null ? [] : [t, ...this._additionalFallbackLangs()]; });
    _onTranslationRefresh = null;
    _isLoading = O(() => this.loadingTranslations.hasAny() || (this.parent?.isLoading() ?? !1));
    getRoot() { let t = this; for (; t.parent;)
        t = t.parent; return t; }
    getParent() { return this.parent; }
    getActiveRequestedLang() { return this.getRoot().lastUseLanguage; }
    hasTranslationInChain(t) { for (let e = this; e; e = e.parent)
        if (e.store.hasTranslationFor(t))
            return !0; return !1; }
    chainTranslationChange$() { let t = []; for (let e = this; e; e = e.parent)
        t.push(e.store.translationChange$); return t.length === 1 ? t[0] : j(...t); }
    get onTranslationChange() { return this.store.translationChange$; }
    get onLangChange() { return this.isRoot ? this._onLangChange.asObservable() : this.parent ? this.parent.onLangChange : E; }
    get onFallbackLangChange() { return this.isRoot ? this._onFallbackLangChange.asObservable() : this.parent ? this.parent.onFallbackLangChange : E; }
    get onTranslationRefresh() { if (!this._onTranslationRefresh) {
        let t = j(this.onTranslationChange.pipe(Z(e => e.lang === this.getCurrentLang() || this.getFallbackLangs().includes(e.lang))), this.onLangChange, this.onFallbackLangChange).pipe(K(() => { }));
        this.isRoot ? this._onTranslationRefresh = t : this._onTranslationRefresh = this.parent ? j(t, this.parent.onTranslationRefresh) : t;
    } return this._onTranslationRefresh; }
    constructor() { let t = p({ isRoot: !0, fallbackLang: null }, g(Rt, { optional: !0 })); if (this.parent = t.isRoot ? null : g(v, { optional: !0, skipSelf: !0 }), typeof t.retry == "object") {
        let { count: a, delay: s, shouldRetry: i } = t.retry;
        this.retry = { count: a, delay: typeof s == "function" ? s.bind(t.retry) : s, shouldRetry: i?.bind(t.retry) };
    }
    else
        this.retry = Math.max(0, t.retry ?? 0); let e = g(Y); if (this.isRoot)
        t.langs?.length && this.addLangs(t.langs), t.lang && this.use(t.lang), t.fallbackLangs !== void 0 ? this.setFallbackLangs(t.fallbackLangs) : t.fallbackLang && this.setFallbackLang(t.fallbackLang);
    else {
        let a = this.getCurrentLang();
        a && this.loadOrExtendLanguage(a)?.pipe(m(e)).subscribe({ error: s => { console.warn(`@ngx-translate/core: child failed to load "${a}". Cause:`, s); } });
        for (let s of this.getFallbackLangs())
            s && s !== a && this.loadOrExtendLanguage(s)?.pipe(m(e)).subscribe({ error: i => { console.warn(`@ngx-translate/core: child failed to load "${s}". Cause:`, i); } });
    } this.onLangChange.pipe(m(e)).subscribe(a => { !this.isRoot && this.shouldLoadLanguage(a) && this.loadOrExtendLanguage(a.lang)?.pipe(m(e)).subscribe({ error: s => { console.warn(`@ngx-translate/core: child failed to load "${a.lang}". Cause:`, s); } }); }), this.onFallbackLangChange.pipe(m(e)).subscribe(a => { if (!this.isRoot)
        for (let s of a.langs ?? [a.lang])
            this.shouldLoadLanguage(a, s) && this.loadOrExtendLanguage(s)?.pipe(m(e)).subscribe({ error: i => { console.warn(`@ngx-translate/core: child failed to load "${s}". Cause:`, i); } }); }), e.onDestroy(() => { this._onLangChange.complete(), this._onFallbackLangChange.complete(); }); }
    shouldLoadLanguage(t, e = t.lang) { let a = this.deletedLanguageRequests.get(e), s = this.getRoot().languageRequestIds.get(t); return a === void 0 || s === void 0 || s > a; }
    setFallbackLang(t) { return this.isRoot ? this.setFallbackLangs([t]).pipe(K(e => e[0])) : this.parent.setFallbackLang(t); }
    setFallbackLangs(t) { return this.isRoot ? b(() => { let e = [...new Set(t)], a = ++this.languageRequestSequence; this.lastFallbackRequest = a, this._fallbackLang() === null && this.setFallbackLanguageState(e); let s = e.length ? X(e.map(i => (this.loadOrExtendLanguage(i) ?? C(this.store.getTranslations(i))).pipe(tt(1)))) : C([]); return s.pipe(m(this.destroyRef)).subscribe({ next: i => { if (this.lastFallbackRequest !== a || e.some(c => (this.deletedLanguageRequests.get(c) ?? -1) >= a))
            return; this.setFallbackLanguageState(e); let l = p({ lang: e[0] ?? "", translations: i[0] ?? {} }, e.length !== 1 && { langs: this.getFallbackLangs() }); this.languageRequestIds.set(l, a), this._onFallbackLangChange.next(l); }, error: i => { console.warn(`@ngx-translate/core: failed to load fallback "${e.join(", ")}". Cause:`, i); } }), s; }) : this.parent.setFallbackLangs(t); }
    setFallbackLanguageState(t) { this._additionalFallbackLangs.set(t.slice(1)), this._fallbackLang.set(t[0] ?? null); }
    get isLoading() { return this._isLoading; }
    use(t) { return this.isRoot ? b(() => { let e = ++this.languageRequestSequence, a = this._currentLang(), s = this.lastUseLanguage; this.lastUseLanguage = t, this._currentLang() || this._currentLang.set(t); let i = this.loadOrExtendLanguage(t); return V(i) ? (i.pipe(tt(1)).subscribe({ next: () => { this.changeLang(t, e); }, error: l => { this.lastUseLanguage === t && (typeof this.retry == "number" || !this.store.hasTranslationFor(t)) && (this._currentLang.set(a), this.lastUseLanguage = s), console.warn(`@ngx-translate/core: failed to load "${t}". currentLang was NOT changed; remains "${a ?? "null"}". Cause:`, l); } }), i) : (this.changeLang(t, e), C(this.store.getTranslations(t))); }) : this.parent.use(t); }
    loadOrExtendLanguage(t) { return this.store.hasTranslationFor(t) ? C(this.store.getTranslations(t)) : this.loadAndCompileTranslations(t); }
    getTranslations(t) { return this.store.getTranslations(t); }
    changeLang(t, e) { if (t !== this.lastUseLanguage)
        return; this._currentLang.set(t); let a = { lang: t, translations: this.store.getTranslations(t) }; e !== void 0 && this.languageRequestIds.set(a, e), this._onLangChange.next(a); }
    getCurrentLang() { return this.isRoot ? this._currentLang() : this.parent?.getCurrentLang() ?? null; }
    loadAndCompileTranslations(t) { let e = this.loadingTranslations.get(t); if (e)
        return e; let a = typeof this.retry == "number" ? { count: this.retry } : this.retry, s = this.loadCancellation.get(t); s || (s = new Tt(1), this.loadCancellation.set(t, s)); let i = A(() => { let u = this.currentLoader.getTranslation(t); return a.count > 0 ? u.pipe(Kt({ count: a.count, delay: (f, R) => { if (a.shouldRetry && !a.shouldRetry(f))
            return bt(() => f); let W = a.delay ?? ie, P = typeof W == "function" ? W(f, R) : W; if (!Number.isFinite(P) || P < 0 || P > oe)
            throw new RangeError("@ngx-translate/core: retry delay must be a finite number between 0 and 2147483647 milliseconds."); return qt(P); } })) : u; }), l = !1, c = i.pipe(K(u => this.compiler.compileTranslations(u, t)), Z(() => this.loadCancellation.get(t) === s), Lt({ next: u => { this.store.setTranslations(t, u, !1), this.loadingTranslations.clearIfOwner(t, h); }, error: () => { typeof this.retry != "number" && this.loadingTranslations.clearIfOwner(t, h); } }), Vt(u => this.loadCancellation.get(t) === s ? bt(() => u) : E), Lt({ complete: () => { l = this.loadCancellation.get(t) === s; } }), Yt(s), At(() => this.loadingTranslations.clearIfOwner(t, h)), Ht({ connector: () => new Tt(1), resetOnError: typeof this.retry == "number", resetOnComplete: !1, resetOnRefCountZero: !0 })), h = A(() => l || this.loadCancellation.get(t) === s ? c : E); return this.loadingTranslations.set(t, h), h.pipe(m(this.destroyRef)).subscribe({ error: () => { } }), h; }
    setTranslation(t, e, a = !1) { let s = this.compiler.compileTranslations(e, t); this.store.setTranslations(t, s, a); }
    setCompiledTranslation(t, e, a = !1) { this.store.setTranslations(t, e, a); }
    getLangs() { return this.store.getLanguages(); }
    addLangs(t) { this.store.addLanguages(t); }
    getParsedResultForKey(t, e, a) { let s, i = this.getTextToInterpolate(t, a, c => { s = c; }); if (d(i)) {
        let c = s?.translation === i ? s.context : { key: t };
        return this.runInterpolation(i, e, c);
    } let l = this.getMissingTranslationHandler().handle(p({ key: t, translateService: this }, e !== void 0 && { interpolateParams: e })); return l !== void 0 ? l : t; }
    getMissingTranslationHandler() { return this.missingTranslationHandler; }
    getFallbackLang() { return this.isRoot ? this._fallbackLang() : this.parent?.getFallbackLang() ?? null; }
    getFallbackLangs() { return this.fallbackLangs(); }
    getTextToInterpolate(t, e, a) { if (e) {
        let c = this.store.getTranslationValue(e, t);
        return c !== void 0 ? (a?.({ translation: c, context: { key: t, lang: e } }), c) : this.parent?.getTextToInterpolate(t, e, a);
    } let s = this.getCurrentLang(), i, l; s && (i = this.store.getTranslationValue(s, t), l = s); for (let c of this.getFallbackLangs()) {
        if (d(i))
            break;
        c !== s && (i = this.store.getTranslationValue(c, t), l = c);
    } return i !== void 0 ? (a?.({ translation: i, context: l === void 0 ? { key: t } : { key: t, lang: l } }), i) : this.parent?.getTextToInterpolate(t, e, a); }
    runInterpolation(t, e, a) { if (d(t))
        return y(t) ? this.runInterpolationOnArray(t, e, a) : T(t) ? this.runInterpolationOnDict(t, e, a) : this.parser.interpolate(t, e, a); }
    runInterpolationOnArray(t, e, a) { return t.map(s => this.runInterpolation(s, e, a)); }
    runInterpolationOnDict(t, e, a) { let s = {}; for (let i in t) {
        let l = this.runInterpolation(t[i], e, a);
        l !== void 0 && (s[i] = l);
    } return s; }
    getParsedResult(t, e, a) { return t instanceof Array ? this.getParsedResultForArray(t, e, a) : this.getParsedResultForKey(t, e, a); }
    getParsedResultForArray(t, e, a) { let s = {}, i = !1; for (let c of t)
        s[c] = this.getParsedResultForKey(c, e, a), i = i || V(s[c]); if (!i)
        return s; let l = t.map(c => H(s[c])); return X(l).pipe(K(c => { let h = {}; return c.forEach((u, f) => { h[t[f]] = u; }), h; })); }
    get(t, e, a) { if (!d(t) || !t.length)
        return C(""); let s = a ?? this.getActiveRequestedLang() ?? this.getCurrentLang(), i = new Set, l = () => { let c = new Set([...s ? [s] : [], ...a ? [] : this.getFallbackLangs()]), h = []; for (let u = this; u; u = u.parent)
        for (let f of c) {
            let R = u.loadingTranslations.get(f);
            R && !i.has(R) && (i.add(R), h.push(R.pipe(tt(1), Ut(void 0))));
        } return h.length ? X(h).pipe(Bt(l)) : H(this.getParsedResult(t, e, a)); }; return l(); }
    getAsync(t, e, a) { return jt(this.get(t, e, a)); }
    getStreamOnTranslationChange(t, e, a) { if (!d(t) || !t.length)
        throw new Error('Parameter "key" is required and cannot be empty'); return mt(A(() => this.get(t, e, a)), this.onTranslationChange.pipe(vt(() => { let s = this.getParsedResult(t, e, a); return H(s); }))); }
    stream(t, e, a) { if (!d(t) || !t.length)
        throw new Error('Parameter "key" required'); let s = a ? j(this.onLangChange, this.chainTranslationChange$().pipe(Z(i => i.lang === a))) : this.onLangChange; return mt(A(() => this.get(t, e, a)), s.pipe(vt(() => { let i = this.getParsedResult(t, e, a); return H(i); }))); }
    instant(t, e, a) { if (!d(t) || t.length === 0)
        return ""; a && !this.hasTranslationInChain(a) && this.warnUnloadedInstantLang(a); let s = this.getParsedResult(t, e, a); return V(s) ? this.keyToObject(t) : s; }
    warnedUnloadedInstantLangs = new Set;
    warnUnloadedInstantLang(t) { let e = this.getRoot(); if (e !== this) {
        e.warnUnloadedInstantLang(t);
        return;
    } this.warnedUnloadedInstantLangs.has(t) || b(() => { this.warnedUnloadedInstantLangs.add(t), console.warn(`@ngx-translate/core: instant() called with lang="${t}" but no translations are loaded for that language. Returning the key as fallback. Load with use("${t}") or setTranslation("${t}", ...) first.`); }); }
    hasTranslationKey(t, e) { return !d(t) || t.length === 0 ? !1 : d(this.getTextToInterpolate(t, e)); }
    translate(t, e, a) { return O(() => { let s = typeof t == "function" ? t() : t, i = typeof e == "function" ? e() : e, l = typeof a == "function" ? a() : a; return this.instant(s, i, l); }); }
    keyToObject(t) { return Array.isArray(t) ? t.reduce((e, a) => (e[a] = a, e), {}) : t; }
    set(t, e, a) { b(() => { let s = a ?? this.getCurrentLang(); this.store.setTranslations(s, ae(this.store.getTranslations(s), t, S(e) ? this.compiler.compile(e, s) : this.compiler.compileTranslations(e, s)), !1); }); }
    reloadLang(t) { return b(() => (this.resetLang(t), this.loadAndCompileTranslations(t))); }
    resetLang(t) { this.loadingTranslations.clear(t), this.store.deleteTranslations(t); }
    deleteLanguage(t) { b(() => { this.deletedLanguageRequests.set(t, this.getRoot().languageRequestSequence); let e = this.loadCancellation.get(t); this.loadCancellation.delete(t), this.loadingTranslations.clear(t), this.store.removeLanguages([t]), this.store.deleteTranslations(t), e?.next(), e?.complete(); }); }
    static getBrowserLang() { if (typeof window > "u" || !window.navigator)
        return; let t = this.getBrowserCultureLang(); return t ? t.split(/[-_]/)[0] : void 0; }
    static getBrowserCultureLang() { if (!(typeof window > "u" || typeof window.navigator > "u"))
        return window.navigator.languages ? window.navigator.languages[0] : window.navigator.language || window.navigator.browserLanguage || window.navigator.userLanguage; }
    getBrowserLang() { return v.getBrowserLang(); }
    getBrowserCultureLang() { return v.getBrowserCultureLang(); }
    get currentLang() { return this.isRoot ? this._currentLang.asReadonly() : this.parent.currentLang; }
    get fallbackLang() { return this.isRoot ? this._fallbackLang.asReadonly() : this.parent.fallbackLang; }
    get fallbackLangs() { return this.isRoot ? this._fallbackLangs : this.parent.fallbackLangs; }
    static \u0275fac = function (e) { return new (e || v); };
    static \u0275prov = o.\u0275\u0275defineInjectable({ token: v, factory: v.\u0275fac });
};
function Se(n, r, t) { return g(w).translate(n, r, t); }
var le = class {
    $implicit;
    constructor(n) { this.$implicit = n; }
}, we = class rt {
    templateRef = g(St);
    viewContainer = g(Pt);
    translateService = g(w);
    ngOnInit() { let t = (e, a) => this.translateService.instant(e, a); this.viewContainer.createEmbeddedView(this.templateRef, new le(t)); }
    static ngTemplateContextGuard(t, e) { return !0; }
    static \u0275fac = function (e) { return new (e || rt); };
    static \u0275dir = o.\u0275\u0275defineDirective({ type: rt, selectors: [["", "translateBlock", ""]] });
}, ce = class {
    element;
    changeDetectorRef;
    translateService;
    lastParams;
    constructor(n, r, t) { this.element = n, this.changeDetectorRef = r, this.translateService = t, console.warn(`@ngx-translate/core: Using element content as a translation key is deprecated and will be removed in v19. Use [translate]="'KEY'" or *translateBlock="let t" instead.`, this.element?.nativeElement); }
    checkNodes(n, r = !1) { let t = this.element.nativeElement.childNodes; t.length && t.forEach(e => { let a = e; if (a.nodeType === 3) {
        let s;
        if (r && (a.lastKey = null), d(a.lookupKey))
            s = a.lookupKey;
        else {
            let i = this.getContent(a), l = i.trim();
            l.length && (a.lookupKey = l, i !== a.currentValue ? (s = l, a.originalContent = i || a.originalContent) : a.originalContent && (s = a.originalContent.trim()));
        }
        this.updateValue(s, a, n);
    } }); }
    updateValue(n, r, t) { if (!n || r.lastKey === n && this.lastParams === t)
        return; this.lastParams = t; let e = this.translateService.instant(n, t); (e !== n || !r.lastKey) && (r.lastKey = n), r.originalContent || (r.originalContent = this.getContent(r)), S(e) ? r.currentValue = e : d(e) ? r.currentValue = JSON.stringify(e) : r.currentValue = r.originalContent || n, this.setContent(r, r.originalContent.replace(n, r.currentValue)), this.changeDetectorRef.markForCheck(); }
    getContent(n) { return d(n.textContent) ? n.textContent : n.data; }
    setContent(n, r) { d(n.textContent) ? n.textContent = r : n.data = r; }
}, Re = class st {
    translateService = g(w);
    element = g(Ot);
    destroyRef = g(Y);
    changeDetectorRef = g(xt);
    injector = g(Nt);
    key;
    currentParams;
    keySignal = null;
    paramsSignal = null;
    translationSignal = null;
    effectCreated = !1;
    contentKeyHandler = null;
    set translate(t) { t && (this.key = t, this.keySignal ? this.keySignal.set(t) : (this.keySignal = L(t), this.paramsSignal = L(this.currentParams), this.translationSignal = this.translateService.translate(this.keySignal, this.paramsSignal), this.setupEffect())); }
    set ngxTranslate(t) { this.translate = t; }
    set translateParams(t) { I(this.currentParams, t) || (this.currentParams = t, this.paramsSignal ? this.paramsSignal.set(t) : this.contentKeyHandler && this.contentKeyHandler.checkNodes(t, !0)); }
    constructor() { this.translateService.onTranslationRefresh.pipe(m(this.destroyRef)).subscribe(() => { this.translationSignal ? this.writeTranslationToDOM() : this.contentKeyHandler && this.contentKeyHandler.checkNodes(this.currentParams, !0); }); }
    ngAfterViewChecked() { !this.keySignal && !this.contentKeyHandler && (this.contentKeyHandler = new ce(this.element, this.changeDetectorRef, this.translateService)), this.contentKeyHandler && this.contentKeyHandler.checkNodes(this.currentParams); }
    setupEffect() { this.effectCreated || (this.effectCreated = !0, Et(() => { let t = this.translationSignal(); this.writeToDOM(t); }, { injector: this.injector })); }
    writeTranslationToDOM() { if (this.translationSignal) {
        let t = this.translationSignal();
        this.writeToDOM(t);
    } }
    writeToDOM(t) { let e = this.element.nativeElement, a; S(t) ? a = t : d(t) ? a = JSON.stringify(t) : a = this.key, e.textContent = a, this.changeDetectorRef.markForCheck(); }
    static \u0275fac = function (e) { return new (e || st); };
    static \u0275dir = o.\u0275\u0275defineDirective({ type: st, selectors: [["", "translate", ""], ["", "ngx-translate", ""], ["", "ngxTranslate", ""]], inputs: { translate: "translate", ngxTranslate: "ngxTranslate", translateParams: "translateParams" } });
}, yt = class it {
    name = nt.required({ alias: "translateSlot" });
    template = g(St);
    static \u0275fac = function (e) { return new (e || it); };
    static \u0275dir = o.\u0275\u0275defineDirective({ type: it, selectors: [["ng-template", "translateSlot", ""]], inputs: { name: [1, "translateSlot", "name"] } });
}, De = class ot {
    key = nt.required({ alias: "translateSlots" });
    translateParams = nt();
    translate = g(w);
    slots = $t(yt);
    marker = `\uE000${Math.floor(Math.random() * Number.MAX_SAFE_INTEGER)}\uE000`;
    parts = O(() => { let t = this.slots(), e = this.translateParams(), a = p({}, e), s = new Set; for (let [c, h] of t.entries()) {
        let u = h.name();
        if (s.has(u))
            throw new Error(`@ngx-translate/core: duplicate translateSlot "${u}".`);
        if (ut(e, u) !== void 0)
            throw new Error(`@ngx-translate/core: translateSlot "${u}" is also passed in translateParams.`);
        s.add(u), a[u] = `${this.marker}${c}${this.marker}`;
    } let i = this.translate.instant(this.key(), a), l = new Map; return (S(i) ? i : this.key()).split(this.marker).flatMap((c, h) => { if (h % 2 === 0)
        return c ? [{ id: `text:${h}`, text: c }] : []; let u = t[Number(c)], f = l.get(u.name()) ?? 0; return l.set(u.name(), f + 1), [{ id: `slot:${u.name()}:${f}`, template: u.template }]; }); });
    static \u0275fac = function (e) { return new (e || ot); };
    static \u0275cmp = o.\u0275\u0275defineComponent({ type: ot, selectors: [["", "translateSlots", ""]], contentQueries: function (e, a, s) { e & 1 && o.\u0275\u0275contentQuerySignal(s, a.slots, yt, 4), e & 2 && o.\u0275\u0275queryAdvance(); }, inputs: { key: [1, "translateSlots", "key"], translateParams: [1, "translateParams"] }, decls: 2, vars: 0, consts: [[3, "ngTemplateOutlet"]], template: function (e, a) { e & 1 && o.\u0275\u0275repeaterCreate(0, Wt, 2, 1, null, null, Gt), e & 2 && o.\u0275\u0275repeater(a.parts()); }, dependencies: [Jt], encapsulation: 2 });
}, Fe = class x {
    translateService = g(w);
    cachedSignal = null;
    lastKey = null;
    lastParams;
    transform(t, ...e) { if (!t || !t.length)
        return t; let a = this.parseArgs(e); return (t !== this.lastKey || !I(a, this.lastParams)) && (this.cachedSignal = this.translateService.translate(t, a), this.lastKey = t, this.lastParams = a), this.cachedSignal(); }
    parseArgs(t) { if (!(!d(t[0]) || !t.length)) {
        if (S(t[0]) && t[0].length) {
            let e = t[0].replace(/(')?([a-zA-Z0-9_]+)(')?(\s)?:/g, '"$2":').replace(/:(\s)?(')(.*?)(')/g, ':"$3"');
            try {
                return JSON.parse(e);
            }
            catch (a) {
                throw new SyntaxError(`Wrong parameter in TranslatePipe. Expected a valid Object, received: ${t[0]}`, { cause: a });
            }
        }
        if (T(t[0]))
            return t[0];
    } }
    static \u0275fac = function (e) { return new (e || x); };
    static \u0275pipe = o.\u0275\u0275definePipe({ name: "translate", type: x, pure: !1 });
    static \u0275prov = o.\u0275\u0275defineInjectable({ token: x, factory: x.\u0275fac });
};
function Dt(n) { return /^class[{\s]/.test(Function.prototype.toString.call(n)); }
function F(n, r) { return Dt(r) ? { provide: n, useClass: r } : { provide: n, useFactory: r }; }
function Me(n) { return F(Q, n); }
function _e(n) { return F(G, n); }
function ke(n) { return F(z, n); }
function xe(n) { return F(lt, n); }
function Oe(n = {}) { return Ft(D(p({}, n), { isRoot: !0 })); }
function Ie(n = {}) { return Ft(D(p({}, n), { isRoot: !1 })); }
function q(n, r, t, e, a) { if (r === void 0)
    return F(n, t); if (typeof r == "function") {
    if (Dt(r)) {
        let s = r.name || "YourClass";
        console.warn(`@ngx-translate/core: "${e}" received a bare class (${s}); auto-wrapping with ${a}(). For clarity, prefer ${e}: ${a}(${s}).`);
    }
    return F(n, r);
} return r; }
function Ft(n) { let r = [], t = q(Q, n.loader, ee, "loader", "provideTranslateLoader"), e = q(G, n.compiler, te, "compiler", "provideTranslateCompiler"), a = q(z, n.parser, se, "parser", "provideTranslateParser"), s = q(lt, n.missingTranslationHandler, Zt, "missingTranslationHandler", "provideMissingTranslationHandler"); r.push(t, e, a, s), r.push(wt); let i = D(p({ fallbackLang: n.fallbackLang ?? null }, n.fallbackLangs !== void 0 && { fallbackLangs: n.fallbackLangs }), { lang: n.lang, retry: n.retry, langs: n.langs, isRoot: n.isRoot }); return r.push({ provide: Rt, useValue: i }), r.push({ provide: w, useClass: w }), r; }
var Ne = class {
};
export { Zt as DefaultMissingTranslationHandler, Ne as ITranslateService, lt as MissingTranslationHandler, Rt as TRANSLATE_SERVICE_CONFIG, le as TranslateBlockContext, we as TranslateBlockDirective, G as TranslateCompiler, se as TranslateDefaultParser, Re as TranslateDirective, Q as TranslateLoader, te as TranslateNoOpCompiler, ee as TranslateNoOpLoader, z as TranslateParser, Fe as TranslatePipe, w as TranslateService, yt as TranslateSlotDirective, De as TranslateSlotsComponent, wt as TranslateStore, ye as _, I as equals, ut as getValue, ae as insertValue, y as isArray, et as isDefined, d as isDefinedAndNotNull, T as isDict, ne as isFunction, N as isObject, S as isString, ct as mergeDeep, Ie as provideChildTranslateService, xe as provideMissingTranslationHandler, _e as provideTranslateCompiler, Me as provideTranslateLoader, ke as provideTranslateParser, Oe as provideTranslateService, Se as translate };
