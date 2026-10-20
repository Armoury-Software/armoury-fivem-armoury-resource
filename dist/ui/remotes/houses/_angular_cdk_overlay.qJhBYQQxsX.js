import { a as X, b as It, e as zt, h as Wt, k as Yt } from "@nf-internal/chunk-4T5CXQIN";
import * as g from "@angular/core";
import { DOCUMENT as W, NgZone as V, inject as p, Injector as Y, RendererFactory2 as Mt, untracked as Et, afterNextRender as he, signal as Pi, ElementRef as et, InjectionToken as At, ApplicationRef as Mi, Renderer2 as Ai, ANIMATION_MODULE_TYPE as Ti, EnvironmentInjector as Vi, EventEmitter as M, TemplateRef as Bi, ViewContainerRef as Ni, booleanAttribute as D } from "@angular/core";
import { Location as Fi } from "@angular/common";
import * as Xt from "@angular/core";
import { inject as xe, PLATFORM_ID as Pe } from "@angular/core";
import { isPlatformBrowser as Me } from "@angular/common";
var ct;
try {
    ct = typeof Intl < "u" && Intl.v8BreakIterator;
}
catch {
    ct = !1;
}
var O = (() => { class n {
    _platformId = xe(Pe);
    isBrowser = this._platformId ? Me(this._platformId) : typeof document == "object" && !!document;
    EDGE = this.isBrowser && /(edge)/i.test(navigator.userAgent);
    TRIDENT = this.isBrowser && /(msie|trident)/i.test(navigator.userAgent);
    BLINK = this.isBrowser && !!(window.chrome || ct) && typeof CSS < "u" && !this.EDGE && !this.TRIDENT;
    WEBKIT = this.isBrowser && /AppleWebKit/i.test(navigator.userAgent) && !this.BLINK && !this.EDGE && !this.TRIDENT;
    IOS = this.isBrowser && /iPad|iPhone|iPod/.test(navigator.userAgent) && !("MSStream" in window);
    FIREFOX = this.isBrowser && /(firefox|minefield)/i.test(navigator.userAgent);
    ANDROID = this.isBrowser && /android/i.test(navigator.userAgent) && !this.TRIDENT;
    SAFARI = this.isBrowser && /safari/i.test(navigator.userAgent) && this.WEBKIT;
    static \u0275fac = function (e) { return new (e || n); };
    static \u0275prov = Xt.\u0275\u0275defineService({ token: n, factory: n.\u0275fac });
} return n; })();
function H(n) { if (n.composedPath)
    try {
        return n.composedPath()[0];
    }
    catch { } return n.target; }
function dt() { return typeof __karma__ < "u" && !!__karma__ || typeof jasmine < "u" && !!jasmine || typeof jest < "u" && !!jest || typeof Mocha < "u" && !!Mocha; }
import * as Ut from "@angular/core";
import { inject as Ht, Injector as Ae, EnvironmentInjector as Te, ApplicationRef as Ve, createComponent as Be } from "@angular/core";
var U = new WeakMap, ft = (() => { class n {
    _appRef;
    _injector = Ht(Ae);
    _environmentInjector = Ht(Te);
    load(t) { let e = this._appRef = this._appRef || this._injector.get(Ve), o = U.get(e); o || (o = { loaders: new Set, refs: [] }, U.set(e, o), e.onDestroy(() => { U.get(e)?.refs.forEach(r => r.destroy()), U.delete(e); })), o.loaders.has(t) || (o.loaders.add(t), o.refs.push(Be(t, { environmentInjector: this._environmentInjector }))); }
    static \u0275fac = function (e) { return new (e || n); };
    static \u0275prov = Ut.\u0275\u0275defineService({ token: n, factory: n.\u0275fac });
} return n; })();
import { Subject as A, Subscription as I } from "rxjs";
function _(n) { return n == null ? "" : typeof n == "string" ? n : `${n}px`; }
function ut(n) { return Array.isArray(n) ? n : [n]; }
import * as h from "@angular/core";
import { InjectionToken as yt, forwardRef as $e, inject as u, NgZone as Q, RendererFactory2 as qt, ElementRef as wt, Renderer2 as qe, DOCUMENT as Qt, ChangeDetectorRef as Qe, signal as _t, Injector as Je, effect as ti, ApplicationRef as ei, DestroyRef as ii, untracked as ni, afterNextRender as oi, booleanAttribute as ri, ViewContainerRef as si, TemplateRef as ai, IterableDiffers as li } from "@angular/core";
import { Subject as S, of as Jt, Observable as te, Subscription as hi, animationFrameScheduler as ci, asapScheduler as di, isObservable as fi } from "rxjs";
import { distinctUntilChanged as ee, auditTime as St, filter as ie, startWith as ne, takeUntil as gt, pairwise as ui, switchMap as pi, shareReplay as _i } from "rxjs/operators";
import { ElementRef as Ne } from "@angular/core";
function B(n, i = 0) { return Fe(n) ? Number(n) : arguments.length === 2 ? i : 0; }
function Fe(n) { return !isNaN(parseFloat(n)) && !isNaN(Number(n)); }
function jt(n) { return n instanceof Ne ? n.nativeElement : n; }
import * as Gt from "@angular/core";
import { InjectionToken as Le, inject as Zt, DOCUMENT as Ie, signal as ze, EventEmitter as We } from "@angular/core";
var Ye = new Le("cdk-dir-doc", { providedIn: "root", factory: () => Zt(Ie) }), Xe = /^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;
function pt(n) { let i = n?.toLowerCase() || ""; return i === "auto" && typeof navigator < "u" && navigator?.language ? Xe.test(navigator.language) ? "rtl" : "ltr" : i === "rtl" ? "rtl" : "ltr"; }
var E = (() => { class n {
    get value() { return this.valueSignal(); }
    valueSignal = ze("ltr");
    change = new We;
    constructor() { let t = Zt(Ye, { optional: !0 }); if (t) {
        let e = t.body ? t.body.dir : null, o = t.documentElement ? t.documentElement.dir : null;
        this.valueSignal.set(pt(e || o || "ltr"));
    } }
    ngOnDestroy() { this.change.complete(); }
    static \u0275fac = function (e) { return new (e || n); };
    static \u0275prov = Gt.\u0275\u0275defineService({ token: n, factory: n.\u0275fac });
} return n; })();
var w = (function (n) { return n[n.NORMAL = 0] = "NORMAL", n[n.NEGATED = 1] = "NEGATED", n[n.INVERTED = 2] = "INVERTED", n; })(w || {}), j, R;
function G() { if (R == null) {
    if (typeof document != "object" || !document || typeof Element != "function" || !Element)
        return R = !1, R;
    if (document.documentElement?.style && "scrollBehavior" in document.documentElement.style)
        R = !0;
    else {
        let n = Element.prototype.scrollTo;
        n ? R = !/\{\s*\[native code\]\s*\}/.test(n.toString()) : R = !1;
    }
} return R; }
function P() { if (typeof document != "object" || !document)
    return w.NORMAL; if (j == null) {
    let n = document.createElement("div"), i = n.style;
    n.dir = "rtl", i.width = "1px", i.overflow = "auto", i.visibility = "hidden", i.pointerEvents = "none", i.position = "absolute";
    let t = document.createElement("div"), e = t.style;
    e.width = "2px", e.height = "1px", n.appendChild(t), document.body.appendChild(n), j = w.NORMAL, n.scrollLeft === 0 && (n.scrollLeft = 1, j = n.scrollLeft === 0 ? w.NEGATED : w.INVERTED), n.remove();
} return j; }
import { isObservable as Ue, of as je } from "rxjs";
import { ConnectableObservable as He } from "rxjs";
var Z = class {
};
function Kt(n) { return n && typeof n.connect == "function" && !(n instanceof He); }
var K = class extends Z {
    _data;
    constructor(i) { super(), this._data = i; }
    connect() { return Ue(this._data) ? this._data : je(this._data); }
    disconnect() { }
}, N = (function (n) { return n[n.REPLACED = 0] = "REPLACED", n[n.INSERTED = 1] = "INSERTED", n[n.MOVED = 2] = "MOVED", n[n.REMOVED = 3] = "REMOVED", n; })(N || {}), $ = class {
    viewCacheSize = 20;
    _viewCache = [];
    applyChanges(i, t, e, o, r) { i.forEachOperation((s, a, l) => { let c, d; if (s.previousIndex == null) {
        let f = () => e(s, a, l);
        c = this._insertView(f, l, t, o(s)), d = c ? N.INSERTED : N.REPLACED;
    }
    else
        l == null ? (this._detachAndCacheView(a, t), d = N.REMOVED) : (c = this._moveView(a, l, t, o(s)), d = N.MOVED); r && r({ context: c?.context, operation: d, record: s }); }); }
    detach() { for (let i of this._viewCache)
        i.destroy(); this._viewCache = []; }
    _insertView(i, t, e, o) { let r = this._insertViewFromCache(t, e); if (r) {
        r.context.$implicit = o;
        return;
    } let s = i(); return e.createEmbeddedView(s.templateRef, s.context, s.index); }
    _detachAndCacheView(i, t) { let e = t.detach(i); this._maybeCacheView(e, t); }
    _moveView(i, t, e, o) { let r = e.get(i); return e.move(r, t), r.context.$implicit = o, r; }
    _maybeCacheView(i, t) { if (this._viewCache.length < this.viewCacheSize)
        this._viewCache.push(i);
    else {
        let e = t.indexOf(i);
        e === -1 ? i.destroy() : t.remove(e);
    } }
    _insertViewFromCache(i, t) { let e = this._viewCache.pop(); return e && t.insert(e, i), e || null; }
};
import * as C from "@angular/core";
import { EventEmitter as Ge, signal as Ze } from "@angular/core";
var Ke = (() => { class n {
    _isInitialized = !1;
    _rawDir = "";
    change = new Ge;
    get dir() { return this.valueSignal(); }
    set dir(t) { let e = this.valueSignal(); this.valueSignal.set(pt(t)), this._rawDir = t, e !== this.valueSignal() && this._isInitialized && this.change.emit(this.valueSignal()); }
    get value() { return this.dir; }
    valueSignal = Ze("ltr");
    ngAfterContentInit() { this._isInitialized = !0; }
    ngOnDestroy() { this.change.complete(); }
    static \u0275fac = function (e) { return new (e || n); };
    static \u0275dir = C.\u0275\u0275defineDirective({ type: n, selectors: [["", "dir", ""]], hostVars: 1, hostBindings: function (e, o) { e & 2 && C.\u0275\u0275attribute("dir", o._rawDir); }, inputs: { dir: "dir" }, outputs: { change: "dirChange" }, exportAs: ["dir"], features: [C.\u0275\u0275ProvidersFeature([{ provide: E, useExisting: n }])] });
} return n; })(), F = (() => { class n {
    static \u0275fac = function (e) { return new (e || n); };
    static \u0275mod = C.\u0275\u0275defineNgModule({ type: n });
    static \u0275inj = C.\u0275\u0275defineInjector({});
} return n; })();
import "@angular/common";
var gi = ["contentWrapper"], mi = ["*"], oe = new yt("VIRTUAL_SCROLL_STRATEGY"), mt = class {
    _scrolledIndexChange = new S;
    scrolledIndexChange = this._scrolledIndexChange.pipe(ee());
    _viewport = null;
    _itemSize;
    _minBufferPx;
    _maxBufferPx;
    constructor(i, t, e) { this._itemSize = i, this._minBufferPx = t, this._maxBufferPx = e; }
    attach(i) { this._viewport = i, this._updateTotalContentSize(), this._updateRenderedRange(); }
    detach() { this._scrolledIndexChange.complete(), this._viewport = null; }
    updateItemAndBufferSize(i, t, e) { e < t, this._itemSize = i, this._minBufferPx = t, this._maxBufferPx = e, this._updateTotalContentSize(), this._updateRenderedRange(); }
    onContentScrolled() { this._updateRenderedRange(); }
    onDataLengthChanged() { this._updateTotalContentSize(), this._updateRenderedRange(); }
    onContentRendered() { }
    onRenderedOffsetChanged() { }
    scrollToIndex(i, t) { this._viewport && this._viewport.scrollToOffset(i * this._itemSize, t); }
    _updateTotalContentSize() { this._viewport && this._viewport.setTotalContentSize(this._viewport.getDataLength() * this._itemSize); }
    _updateRenderedRange() { if (!this._viewport)
        return; let i = this._viewport.getRenderedRange(), t = { start: i.start, end: i.end }, e = this._viewport.getViewportSize(), o = this._viewport.getDataLength(), r = this._viewport.measureScrollOffset(), s = this._itemSize > 0 ? r / this._itemSize : 0; if (t.end > o) {
        let l = Math.ceil(e / this._itemSize), c = Math.max(0, Math.min(s, o - l));
        s != c && (s = c, r = c * this._itemSize, t.start = Math.floor(s)), t.end = Math.max(0, Math.min(o, t.start + l));
    } let a = r - t.start * this._itemSize; if (a < this._minBufferPx && t.start != 0) {
        let l = Math.ceil((this._maxBufferPx - a) / this._itemSize);
        t.start = Math.max(0, t.start - l), t.end = Math.min(o, Math.ceil(s + (e + this._minBufferPx) / this._itemSize));
    }
    else {
        let l = t.end * this._itemSize - (r + e);
        if (l < this._minBufferPx && t.end != o) {
            let c = Math.ceil((this._maxBufferPx - l) / this._itemSize);
            c > 0 && (t.end = Math.min(o, t.end + c), t.start = Math.max(0, Math.floor(s - this._minBufferPx / this._itemSize)));
        }
    } this._viewport.setRenderedRange(t), this._viewport.setRenderedContentOffset(Math.round(this._itemSize * t.start)), this._scrolledIndexChange.next(Math.floor(s)); }
};
function vi(n) { return n._scrollStrategy; }
var yi = (() => { class n {
    get itemSize() { return this._itemSize; }
    set itemSize(t) { this._itemSize = B(t); }
    _itemSize = 20;
    get minBufferPx() { return this._minBufferPx; }
    set minBufferPx(t) { this._minBufferPx = B(t); }
    _minBufferPx = 100;
    get maxBufferPx() { return this._maxBufferPx; }
    set maxBufferPx(t) { this._maxBufferPx = B(t); }
    _maxBufferPx = 200;
    _scrollStrategy = new mt(this.itemSize, this.minBufferPx, this.maxBufferPx);
    ngOnChanges() { this._scrollStrategy.updateItemAndBufferSize(this.itemSize, this.minBufferPx, this.maxBufferPx); }
    static \u0275fac = function (e) { return new (e || n); };
    static \u0275dir = h.\u0275\u0275defineDirective({ type: n, selectors: [["cdk-virtual-scroll-viewport", "itemSize", ""]], inputs: { itemSize: "itemSize", minBufferPx: "minBufferPx", maxBufferPx: "maxBufferPx" }, features: [h.\u0275\u0275ProvidersFeature([{ provide: oe, useFactory: vi, deps: [$e(() => n)] }]), h.\u0275\u0275NgOnChangesFeature] });
} return n; })(), wi = 20, L = (() => { class n {
    _ngZone = u(Q);
    _platform = u(O);
    _renderer = u(qt).createRenderer(null, null);
    _cleanupGlobalListener;
    _scrolled = new S;
    _scrolledCount = 0;
    scrollContainers = new Map;
    register(t) { this.scrollContainers.has(t) || this.scrollContainers.set(t, t.elementScrolled().subscribe(() => this._scrolled.next(t))); }
    deregister(t) { let e = this.scrollContainers.get(t); e && (e.unsubscribe(), this.scrollContainers.delete(t)); }
    scrolled(t = wi) { return this._platform.isBrowser ? new te(e => { this._cleanupGlobalListener || (this._cleanupGlobalListener = this._ngZone.runOutsideAngular(() => this._renderer.listen("document", "scroll", () => this._scrolled.next()))); let o = t > 0 ? this._scrolled.pipe(St(t)).subscribe(e) : this._scrolled.subscribe(e); return this._scrolledCount++, () => { o.unsubscribe(), this._scrolledCount--, this._scrolledCount || (this._cleanupGlobalListener?.(), this._cleanupGlobalListener = void 0); }; }) : Jt(); }
    ngOnDestroy() { this._cleanupGlobalListener?.(), this._cleanupGlobalListener = void 0, this.scrollContainers.forEach((t, e) => this.deregister(e)), this._scrolled.complete(); }
    ancestorScrolled(t, e) { let o = this.getAncestorScrollContainers(t); return this.scrolled(e).pipe(ie(r => !r || o.indexOf(r) > -1)); }
    getAncestorScrollContainers(t) { let e = []; return this.scrollContainers.forEach((o, r) => { this._targetContainsElement(r, t) && e.push(r); }), e; }
    _targetContainsElement(t, e) { let o = jt(e), r = t.getElementRef().nativeElement; do
        if (o == r)
            return !0;
    while (o = o.parentElement); return !1; }
    static \u0275fac = function (e) { return new (e || n); };
    static \u0275prov = h.\u0275\u0275defineService({ token: n, factory: n.\u0275fac });
} return n; })(), bt = (() => { class n {
    elementRef = u(wt);
    scrollDispatcher = u(L);
    ngZone = u(Q);
    dir = u(E, { optional: !0 });
    _scrollElement = this.elementRef.nativeElement;
    _destroyed = new S;
    _renderer = u(qe);
    _cleanupScroll;
    _elementScrolled = new S;
    ngOnInit() { this._cleanupScroll = this.ngZone.runOutsideAngular(() => this._renderer.listen(this._scrollElement, "scroll", t => this._elementScrolled.next(t))), this.scrollDispatcher.register(this); }
    ngOnDestroy() { this._cleanupScroll?.(), this._elementScrolled.complete(), this.scrollDispatcher.deregister(this), this._destroyed.next(), this._destroyed.complete(); }
    elementScrolled() { return this._elementScrolled; }
    getElementRef() { return this.elementRef; }
    scrollTo(t) { let e = this.elementRef.nativeElement, o = this.dir && this.dir.value == "rtl"; t.left == null && (t.left = o ? t.end : t.start), t.right == null && (t.right = o ? t.start : t.end), t.bottom != null && (t.top = e.scrollHeight - e.clientHeight - t.bottom), o && P() != w.NORMAL ? (t.left != null && (t.right = e.scrollWidth - e.clientWidth - t.left), P() == w.INVERTED ? t.left = t.right : P() == w.NEGATED && (t.left = t.right ? -t.right : t.right)) : t.right != null && (t.left = e.scrollWidth - e.clientWidth - t.right), this._applyScrollToOptions(t); }
    _applyScrollToOptions(t) { let e = this.elementRef.nativeElement; G() ? e.scrollTo(t) : (t.top != null && (e.scrollTop = t.top), t.left != null && (e.scrollLeft = t.left)); }
    measureScrollOffset(t) { let e = "left", o = "right", r = this.elementRef.nativeElement; if (t == "top")
        return r.scrollTop; if (t == "bottom")
        return r.scrollHeight - r.clientHeight - r.scrollTop; let s = this.dir && this.dir.value == "rtl"; return t == "start" ? t = s ? o : e : t == "end" && (t = s ? e : o), s && P() == w.INVERTED ? t == e ? r.scrollWidth - r.clientWidth - r.scrollLeft : r.scrollLeft : s && P() == w.NEGATED ? t == e ? r.scrollLeft + r.scrollWidth - r.clientWidth : -r.scrollLeft : t == e ? r.scrollLeft : r.scrollWidth - r.clientWidth - r.scrollLeft; }
    static \u0275fac = function (e) { return new (e || n); };
    static \u0275dir = h.\u0275\u0275defineDirective({ type: n, selectors: [["", "cdk-scrollable", ""], ["", "cdkScrollable", ""]] });
} return n; })(), Si = 20, k = (() => { class n {
    _platform = u(O);
    _listeners;
    _viewportSize = null;
    _change = new S;
    _document = u(Qt);
    constructor() { let t = u(Q), e = u(qt).createRenderer(null, null); t.runOutsideAngular(() => { if (this._platform.isBrowser) {
        let o = r => this._change.next(r);
        this._listeners = [e.listen("window", "resize", o), e.listen("window", "orientationchange", o)];
    } this.change().subscribe(() => this._viewportSize = null); }); }
    ngOnDestroy() { this._listeners?.forEach(t => t()), this._change.complete(); }
    getViewportSize() { this._viewportSize || this._updateViewportSize(); let t = { width: this._viewportSize.width, height: this._viewportSize.height }; return this._platform.isBrowser || (this._viewportSize = null), t; }
    getViewportRect() { let t = this.getViewportScrollPosition(), { width: e, height: o } = this.getViewportSize(); return { top: t.top, left: t.left, bottom: t.top + o, right: t.left + e, height: o, width: e }; }
    getViewportScrollPosition() { if (!this._platform.isBrowser)
        return { top: 0, left: 0 }; let t = this._document, e = this._getWindow(), o = t.documentElement, r = o.getBoundingClientRect(), s = -r.top || t.body?.scrollTop || e.scrollY || o.scrollTop || 0, a = -r.left || t.body?.scrollLeft || e.scrollX || o.scrollLeft || 0; return { top: s, left: a }; }
    change(t = Si) { return t > 0 ? this._change.pipe(St(t)) : this._change; }
    _getWindow() { return this._document.defaultView || window; }
    _updateViewportSize() { let t = this._getWindow(); this._viewportSize = this._platform.isBrowser ? { width: t.innerWidth, height: t.innerHeight } : { width: 0, height: 0 }; }
    static \u0275fac = function (e) { return new (e || n); };
    static \u0275prov = h.\u0275\u0275defineService({ token: n, factory: n.\u0275fac });
} return n; })(), q = new yt("VIRTUAL_SCROLLABLE"), Ct = (() => { class n extends bt {
    measureViewportSize(t) { let e = this.elementRef.nativeElement; return t === "horizontal" ? e.clientWidth : e.clientHeight; }
    static \u0275fac = (() => { let t; return function (o) { return (t || (t = h.\u0275\u0275getInheritedFactory(n)))(o || n); }; })();
    static \u0275dir = h.\u0275\u0275defineDirective({ type: n, features: [h.\u0275\u0275InheritDefinitionFeature] });
} return n; })();
function bi(n, i) { return n.start == i.start && n.end == i.end; }
var Ci = typeof requestAnimationFrame < "u" ? ci : di, re = new yt("CDK_VIRTUAL_SCROLL_VIEWPORT"), Oi = (() => {
    class n extends Ct {
        elementRef = u(wt);
        _changeDetectorRef = u(Qe);
        _scrollStrategy = u(oe, { optional: !0 });
        scrollable = u(q, { optional: !0 });
        _platform = u(O);
        _detachedSubject = new S;
        _renderedRangeSubject = new S;
        _renderedContentOffsetSubject = new S;
        get orientation() { return this._orientation; }
        set orientation(t) { this._orientation !== t && (this._orientation = t, this._calculateSpacerSize()); }
        _orientation = "vertical";
        appendOnly = !1;
        scrolledIndexChange = new te(t => this._scrollStrategy.scrolledIndexChange.subscribe(e => Promise.resolve().then(() => this.ngZone.run(() => t.next(e)))));
        _contentWrapper;
        renderedRangeStream = this._renderedRangeSubject;
        renderedContentOffset = this._renderedContentOffsetSubject.pipe(ie(t => t !== null), ee());
        _totalContentSize = 0;
        _totalContentWidth = _t("");
        _totalContentHeight = _t("");
        _renderedContentTransform;
        _renderedRange = { start: 0, end: 0 };
        _dataLength = 0;
        _viewportSize = 0;
        _forOf = null;
        _renderedContentOffset = 0;
        _renderedContentOffsetNeedsRewrite = !1;
        _changeDetectionNeeded = _t(!1);
        _runAfterChangeDetection = [];
        _viewportChanges = hi.EMPTY;
        _injector = u(Je);
        _isDestroyed = !1;
        constructor() { super(); let t = u(k); this._scrollStrategy, this._viewportChanges = t.change().subscribe(() => { this.checkViewportSize(); }), this.scrollable || (this.elementRef.nativeElement.classList.add("cdk-virtual-scrollable"), this.scrollable = this); let e = ti(() => { this._changeDetectionNeeded() && this._doChangeDetection(); }, { injector: u(ei).injector }); u(ii).onDestroy(() => { e.destroy(); }); }
        ngOnInit() { this._platform.isBrowser && (this.scrollable === this && super.ngOnInit(), this.ngZone.runOutsideAngular(() => Promise.resolve().then(() => { this._measureViewportSize(), this._scrollStrategy.attach(this), this.scrollable.elementScrolled().pipe(ne(null), St(0, Ci), gt(this._destroyed)).subscribe(() => this._scrollStrategy.onContentScrolled()), this._markChangeDetectionNeeded(); }))); }
        ngOnDestroy() { this.detach(), this._scrollStrategy.detach(), this._renderedRangeSubject.complete(), this._detachedSubject.complete(), this._viewportChanges.unsubscribe(), this._isDestroyed = !0, super.ngOnDestroy(); }
        attach(t) { this._forOf, this.ngZone.runOutsideAngular(() => { this._forOf = t, this._forOf.dataStream.pipe(gt(this._detachedSubject)).subscribe(e => { let o = e.length; o !== this._dataLength && (this._dataLength = o, this._scrollStrategy.onDataLengthChanged()), this._doChangeDetection(); }); }); }
        detach() { this._forOf = null, this._detachedSubject.next(); }
        getDataLength() { return this._dataLength; }
        getViewportSize() { return this._viewportSize; }
        getRenderedRange() { return this._renderedRange; }
        measureBoundingClientRectWithScrollOffset(t) { return this.getElementRef().nativeElement.getBoundingClientRect()[t]; }
        setTotalContentSize(t) { this._totalContentSize !== t && (this._totalContentSize = t, this._calculateSpacerSize(), this._markChangeDetectionNeeded()); }
        setRenderedRange(t) { bi(this._renderedRange, t) || (this.appendOnly && (t = { start: 0, end: Math.max(this._renderedRange.end, t.end) }), this._renderedRangeSubject.next(this._renderedRange = t), this._markChangeDetectionNeeded(() => this._scrollStrategy.onContentRendered())); }
        getOffsetToRenderedContentStart() { return this._renderedContentOffsetNeedsRewrite ? null : this._renderedContentOffset; }
        setRenderedContentOffset(t, e = "to-start") { t = this.appendOnly && e === "to-start" ? 0 : t; let o = this.dir && this.dir.value == "rtl", r = this.orientation == "horizontal", s = r ? "X" : "Y", l = `translate${s}(${Number((r && o ? -1 : 1) * t)}px)`; this._renderedContentOffset = t, e === "to-end" && (l += ` translate${s}(-100%)`, this._renderedContentOffsetNeedsRewrite = !0), this._renderedContentTransform != l && (this._renderedContentTransform = l, this._markChangeDetectionNeeded(() => { this._renderedContentOffsetNeedsRewrite ? (this._renderedContentOffset -= this.measureRenderedContentSize(), this._renderedContentOffsetNeedsRewrite = !1, this.setRenderedContentOffset(this._renderedContentOffset)) : this._scrollStrategy.onRenderedOffsetChanged(); })); }
        scrollToOffset(t, e = "auto") { let o = { behavior: e }; this.orientation === "horizontal" ? o.start = t : o.top = t, this.scrollable.scrollTo(o); }
        scrollToIndex(t, e = "auto") { this._scrollStrategy.scrollToIndex(t, e); }
        measureScrollOffset(t) { let e; return this.scrollable == this ? e = o => super.measureScrollOffset(o) : e = o => this.scrollable.measureScrollOffset(o), Math.max(0, e(t ?? (this.orientation === "horizontal" ? "start" : "top")) - this.measureViewportOffset()); }
        measureViewportOffset(t) { let e, o = "left", r = "right", s = this.dir?.value == "rtl"; t == "start" ? e = s ? r : o : t == "end" ? e = s ? o : r : t ? e = t : e = this.orientation === "horizontal" ? "left" : "top"; let a = this.scrollable.measureBoundingClientRectWithScrollOffset(e); return this.elementRef.nativeElement.getBoundingClientRect()[e] - a; }
        measureRenderedContentSize() { let t = this._contentWrapper.nativeElement; return this.orientation === "horizontal" ? t.offsetWidth : t.offsetHeight; }
        measureRangeSize(t) { return this._forOf ? this._forOf.measureRangeSize(t, this.orientation) : 0; }
        checkViewportSize() { this._measureViewportSize(), this._scrollStrategy.onDataLengthChanged(); }
        _measureViewportSize() { this._viewportSize = this.scrollable.measureViewportSize(this.orientation); }
        _markChangeDetectionNeeded(t) { t && this._runAfterChangeDetection.push(t), !ni(this._changeDetectionNeeded) && this.ngZone.runOutsideAngular(() => { Promise.resolve().then(() => { this.ngZone.run(() => { this._changeDetectionNeeded.set(!0); }); }); }); }
        _doChangeDetection() { this._isDestroyed || this.ngZone.run(() => { this._changeDetectorRef.markForCheck(), this._contentWrapper.nativeElement.style.transform = this._renderedContentTransform, this._renderedContentOffsetSubject.next(this.getOffsetToRenderedContentStart()), oi(() => { this._changeDetectionNeeded.set(!1); let t = this._runAfterChangeDetection; this._runAfterChangeDetection = []; for (let e of t)
            e(); }, { injector: this._injector }); }); }
        _calculateSpacerSize() { this._totalContentHeight.set(this.orientation === "horizontal" ? "" : `${this._totalContentSize}px`), this._totalContentWidth.set(this.orientation === "horizontal" ? `${this._totalContentSize}px` : ""); }
        static \u0275fac = function (e) { return new (e || n); };
        static \u0275cmp = h.\u0275\u0275defineComponent({ type: n, selectors: [["cdk-virtual-scroll-viewport"]], viewQuery: function (e, o) { if (e & 1 && h.\u0275\u0275viewQuery(gi, 7), e & 2) {
                let r;
                h.\u0275\u0275queryRefresh(r = h.\u0275\u0275loadQuery()) && (o._contentWrapper = r.first);
            } }, hostAttrs: [1, "cdk-virtual-scroll-viewport"], hostVars: 4, hostBindings: function (e, o) { e & 2 && h.\u0275\u0275classProp("cdk-virtual-scroll-orientation-horizontal", o.orientation === "horizontal")("cdk-virtual-scroll-orientation-vertical", o.orientation !== "horizontal"); }, inputs: { orientation: "orientation", appendOnly: [2, "appendOnly", "appendOnly", ri] }, outputs: { scrolledIndexChange: "scrolledIndexChange" }, features: [h.\u0275\u0275ProvidersFeature([{ provide: bt, useFactory: () => u(q, { optional: !0 }) || u(n) }, { provide: re, useExisting: n }]), h.\u0275\u0275InheritDefinitionFeature], ngContentSelectors: mi, decls: 4, vars: 4, consts: [["contentWrapper", ""], [1, "cdk-virtual-scroll-content-wrapper"], [1, "cdk-virtual-scroll-spacer"]], template: function (e, o) { e & 1 && (h.\u0275\u0275projectionDef(), h.\u0275\u0275domElementStart(0, "div", 1, 0), h.\u0275\u0275projection(2), h.\u0275\u0275domElementEnd(), h.\u0275\u0275domElement(3, "div", 2)), e & 2 && (h.\u0275\u0275advance(3), h.\u0275\u0275styleProp("width", o._totalContentWidth())("height", o._totalContentHeight())); }, styles: [`cdk-virtual-scroll-viewport {
  display: block;
  position: relative;
  transform: translateZ(0);
}

.cdk-virtual-scrollable {
  overflow: auto;
  will-change: scroll-position;
  contain: strict;
  overflow-anchor: none;
  scroll-behavior: auto;
}

.cdk-virtual-scroll-content-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  contain: content;
}
[dir=rtl] .cdk-virtual-scroll-content-wrapper {
  right: 0;
  left: auto;
}

.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper {
  min-height: 100%;
}
.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper > dl:not([cdkVirtualFor]), .cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper > ol:not([cdkVirtualFor]), .cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper > table:not([cdkVirtualFor]), .cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper > ul:not([cdkVirtualFor]) {
  padding-left: 0;
  padding-right: 0;
  margin-left: 0;
  margin-right: 0;
  border-left-width: 0;
  border-right-width: 0;
  outline: none;
}

.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper {
  min-width: 100%;
}
.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper > dl:not([cdkVirtualFor]), .cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper > ol:not([cdkVirtualFor]), .cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper > table:not([cdkVirtualFor]), .cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper > ul:not([cdkVirtualFor]) {
  padding-top: 0;
  padding-bottom: 0;
  margin-top: 0;
  margin-bottom: 0;
  border-top-width: 0;
  border-bottom-width: 0;
  outline: none;
}

.cdk-virtual-scroll-spacer {
  height: 1px;
  transform-origin: 0 0;
  flex: 0 0 auto;
}
[dir=rtl] .cdk-virtual-scroll-spacer {
  transform-origin: 100% 0;
}
`], encapsulation: 2 });
    }
    return n;
})();
function $t(n, i, t) { let e = t; if (!e.getBoundingClientRect)
    return 0; let o = e.getBoundingClientRect(); return n === "horizontal" ? i === "start" ? o.left : o.right : i === "start" ? o.top : o.bottom; }
var Ei = (() => { class n {
    _viewContainerRef = u(si);
    _template = u(ai);
    _differs = u(li);
    _viewRepeater = new $;
    _viewport = u(re, { skipSelf: !0 });
    viewChange = new S;
    _dataSourceChanges = new S;
    get cdkVirtualForOf() { return this._cdkVirtualForOf; }
    set cdkVirtualForOf(t) { this._cdkVirtualForOf = t, Kt(t) ? this._dataSourceChanges.next(t) : this._dataSourceChanges.next(new K(fi(t) ? t : Array.from(t || []))); }
    _cdkVirtualForOf;
    get cdkVirtualForTrackBy() { return this._cdkVirtualForTrackBy; }
    set cdkVirtualForTrackBy(t) { this._needsUpdate = !0, this._cdkVirtualForTrackBy = t ? (e, o) => t(e + (this._renderedRange ? this._renderedRange.start : 0), o) : void 0; }
    _cdkVirtualForTrackBy;
    set cdkVirtualForTemplate(t) { t && (this._needsUpdate = !0, this._template = t); }
    get cdkVirtualForTemplateCacheSize() { return this._viewRepeater.viewCacheSize; }
    set cdkVirtualForTemplateCacheSize(t) { this._viewRepeater.viewCacheSize = B(t); }
    dataStream = this._dataSourceChanges.pipe(ne(null), ui(), pi(([t, e]) => this._changeDataSource(t, e)), _i(1));
    _differ = null;
    _data = [];
    _renderedItems = [];
    _renderedRange = { start: 0, end: 0 };
    _needsUpdate = !1;
    _destroyed = new S;
    constructor() { let t = u(Q); this.dataStream.subscribe(e => { this._data = e, this._onRenderedDataChange(); }), this._viewport.renderedRangeStream.pipe(gt(this._destroyed)).subscribe(e => { this._renderedRange = e, this.viewChange.observers.length && t.run(() => this.viewChange.next(this._renderedRange)), this._onRenderedDataChange(); }), this._viewport.attach(this); }
    measureRangeSize(t, e) { if (t.start >= t.end)
        return 0; t.start < this._renderedRange.start || t.end > this._renderedRange.end; let o = t.start - this._renderedRange.start, r = t.end - t.start, s, a; for (let l = 0; l < r; l++) {
        let c = this._viewContainerRef.get(l + o);
        if (c && c.rootNodes.length) {
            s = a = c.rootNodes[0];
            break;
        }
    } for (let l = r - 1; l > -1; l--) {
        let c = this._viewContainerRef.get(l + o);
        if (c && c.rootNodes.length) {
            a = c.rootNodes[c.rootNodes.length - 1];
            break;
        }
    } return s && a ? $t(e, "end", a) - $t(e, "start", s) : 0; }
    ngDoCheck() { if (this._differ && this._needsUpdate) {
        let t = this._differ.diff(this._renderedItems);
        t ? this._applyChanges(t) : this._updateContext(), this._needsUpdate = !1;
    } }
    ngOnDestroy() { this._viewport.detach(), this._dataSourceChanges.next(void 0), this._dataSourceChanges.complete(), this.viewChange.complete(), this._destroyed.next(), this._destroyed.complete(), this._viewRepeater.detach(); }
    _onRenderedDataChange() { this._renderedRange && (this._renderedItems = this._data.slice(this._renderedRange.start, this._renderedRange.end), this._differ || (this._differ = this._differs.find(this._renderedItems).create((t, e) => this.cdkVirtualForTrackBy ? this.cdkVirtualForTrackBy(t, e) : e)), this._needsUpdate = !0); }
    _changeDataSource(t, e) { return t && t.disconnect(this), this._needsUpdate = !0, e ? e.connect(this) : Jt(); }
    _updateContext() { let t = this._data.length, e = this._viewContainerRef.length; for (; e--;) {
        let o = this._viewContainerRef.get(e);
        o.context.index = this._renderedRange.start + e, o.context.count = t, this._updateComputedContextProperties(o.context), o.detectChanges();
    } }
    _applyChanges(t) { this._viewRepeater.applyChanges(t, this._viewContainerRef, (r, s, a) => this._getEmbeddedViewArgs(r, a), r => r.item), t.forEachIdentityChange(r => { let s = this._viewContainerRef.get(r.currentIndex); s.context.$implicit = r.item; }); let e = this._data.length, o = this._viewContainerRef.length; for (; o--;) {
        let r = this._viewContainerRef.get(o);
        r.context.index = this._renderedRange.start + o, r.context.count = e, this._updateComputedContextProperties(r.context);
    } }
    _updateComputedContextProperties(t) { t.first = t.index === 0, t.last = t.index === t.count - 1, t.even = t.index % 2 === 0, t.odd = !t.even; }
    _getEmbeddedViewArgs(t, e) { return { templateRef: this._template, context: { $implicit: t.item, cdkVirtualForOf: this._cdkVirtualForOf, index: -1, count: -1, first: !1, last: !1, odd: !1, even: !1 }, index: e }; }
    static ngTemplateContextGuard(t, e) { return !0; }
    static \u0275fac = function (e) { return new (e || n); };
    static \u0275dir = h.\u0275\u0275defineDirective({ type: n, selectors: [["", "cdkVirtualFor", "", "cdkVirtualForOf", ""]], inputs: { cdkVirtualForOf: "cdkVirtualForOf", cdkVirtualForTrackBy: "cdkVirtualForTrackBy", cdkVirtualForTemplate: "cdkVirtualForTemplate", cdkVirtualForTemplateCacheSize: "cdkVirtualForTemplateCacheSize" } });
} return n; })(), Ri = (() => { class n extends Ct {
    measureBoundingClientRectWithScrollOffset(t) { return this.getElementRef().nativeElement.getBoundingClientRect()[t] - this.measureScrollOffset(t); }
    static \u0275fac = (() => { let t; return function (o) { return (t || (t = h.\u0275\u0275getInheritedFactory(n)))(o || n); }; })();
    static \u0275dir = h.\u0275\u0275defineDirective({ type: n, selectors: [["", "cdkVirtualScrollingElement", ""]], hostAttrs: [1, "cdk-virtual-scrollable"], features: [h.\u0275\u0275ProvidersFeature([{ provide: q, useExisting: n }]), h.\u0275\u0275InheritDefinitionFeature] });
} return n; })(), ki = (() => { class n extends Ct {
    constructor() { super(); let t = u(Qt); this.elementRef = new wt(t.documentElement), this._scrollElement = t; }
    measureBoundingClientRectWithScrollOffset(t) { return this.getElementRef().nativeElement.getBoundingClientRect()[t]; }
    static \u0275fac = function (e) { return new (e || n); };
    static \u0275dir = h.\u0275\u0275defineDirective({ type: n, selectors: [["cdk-virtual-scroll-viewport", "scrollWindow", ""]], features: [h.\u0275\u0275ProvidersFeature([{ provide: q, useExisting: n }]), h.\u0275\u0275InheritDefinitionFeature] });
} return n; })(), vt = (() => { class n {
    static \u0275fac = function (e) { return new (e || n); };
    static \u0275mod = h.\u0275\u0275defineNgModule({ type: n });
    static \u0275inj = h.\u0275\u0275defineInjector({});
} return n; })(), Ot = (() => { class n {
    static \u0275fac = function (e) { return new (e || n); };
    static \u0275mod = h.\u0275\u0275defineNgModule({ type: n });
    static \u0275inj = h.\u0275\u0275defineInjector({ imports: [F, vt, F, vt] });
} return n; })();
import { filter as Li, takeWhile as Ii } from "rxjs/operators";
import * as ae from "@angular/core";
import { inject as Di, APP_ID as xi } from "@angular/core";
var se = new Map, J = class n {
    _appId = Di(xi);
    static _infix = `a${Math.floor(Math.random() * 1e5).toString()}`;
    getId(i, t = !1) { this._appId !== "ng" && (i += this._appId); let e = se.get(i); return e === void 0 ? e = 0 : e++, se.set(i, e), `${i}${t ? n._infix + "-" : ""}${e}`; }
    static \u0275fac = function (t) { return new (t || n); };
    static \u0275prov = ae.\u0275\u0275defineService({ token: n, factory: n.\u0275fac });
};
function le(n, ...i) { return i.length ? i.some(t => n[t]) : n.altKey || n.shiftKey || n.ctrlKey || n.metaKey; }
var ce = G();
function me(n) { return new it(n.get(k), n.get(W)); }
var it = class {
    _viewportRuler;
    _previousHTMLStyles = { top: "", left: "" };
    _previousScrollPosition;
    _isEnabled = !1;
    _document;
    constructor(i, t) { this._viewportRuler = i, this._document = t; }
    attach() { }
    enable() { if (this._canBeEnabled()) {
        let i = this._document.documentElement;
        this._previousScrollPosition = this._viewportRuler.getViewportScrollPosition(), this._previousHTMLStyles.left = i.style.left || "", this._previousHTMLStyles.top = i.style.top || "", i.style.left = _(-this._previousScrollPosition.left), i.style.top = _(-this._previousScrollPosition.top), i.classList.add("cdk-global-scrollblock"), this._isEnabled = !0;
    } }
    disable() { if (this._isEnabled) {
        let i = this._document.documentElement, t = this._document.body, e = i.style, o = t.style, r = e.scrollBehavior || "", s = o.scrollBehavior || "";
        this._isEnabled = !1, e.left = this._previousHTMLStyles.left, e.top = this._previousHTMLStyles.top, i.classList.remove("cdk-global-scrollblock"), ce && (e.scrollBehavior = o.scrollBehavior = "auto"), window.scroll(this._previousScrollPosition.left, this._previousScrollPosition.top), ce && (e.scrollBehavior = r, o.scrollBehavior = s);
    } }
    _canBeEnabled() { if (this._document.documentElement.classList.contains("cdk-global-scrollblock") || this._isEnabled)
        return !1; let t = this._document.documentElement, e = this._viewportRuler.getViewportSize(); return t.scrollHeight > e.height || t.scrollWidth > e.width; }
};
function ve(n, i) { return new nt(n.get(L), n.get(V), n.get(k), i); }
var nt = class {
    _scrollDispatcher;
    _ngZone;
    _viewportRuler;
    _config;
    _scrollSubscription = null;
    _overlayRef;
    _initialScrollPosition;
    constructor(i, t, e, o) { this._scrollDispatcher = i, this._ngZone = t, this._viewportRuler = e, this._config = o; }
    attach(i) { this._overlayRef, this._overlayRef = i; }
    enable() { if (this._scrollSubscription)
        return; let i = this._scrollDispatcher.scrolled(0).pipe(Li(t => !t || !this._overlayRef.overlayElement.contains(t.getElementRef().nativeElement))); this._config && this._config.threshold && this._config.threshold > 1 ? (this._initialScrollPosition = this._viewportRuler.getViewportScrollPosition().top, this._scrollSubscription = i.subscribe(() => { let t = this._viewportRuler.getViewportScrollPosition().top; Math.abs(t - this._initialScrollPosition) > this._config.threshold ? this._detach() : this._overlayRef.updatePosition(); })) : this._scrollSubscription = i.subscribe(this._detach); }
    disable() { this._scrollSubscription && (this._scrollSubscription.unsubscribe(), this._scrollSubscription = null); }
    detach() { this.disable(), this._overlayRef = null; }
    _detach = () => { this.disable(), this._overlayRef.hasAttached() && this._ngZone.run(() => this._overlayRef.detach()); };
};
function zi() { return new T; }
var T = class {
    enable() { }
    disable() { }
    attach() { }
};
function Rt(n, i) { return i.some(t => { let e = n.bottom < t.top, o = n.top > t.bottom, r = n.right < t.left, s = n.left > t.right; return e || o || r || s; }); }
function de(n, i) { return i.some(t => { let e = n.top < t.top, o = n.bottom > t.bottom, r = n.left < t.left, s = n.right > t.right; return e || o || r || s; }); }
function Tt(n, i) { return new ot(n.get(L), n.get(k), n.get(V), i); }
var ot = class {
    _scrollDispatcher;
    _viewportRuler;
    _ngZone;
    _config;
    _scrollSubscription = null;
    _overlayRef;
    constructor(i, t, e, o) { this._scrollDispatcher = i, this._viewportRuler = t, this._ngZone = e, this._config = o; }
    attach(i) { this._overlayRef, this._overlayRef = i; }
    enable() { if (!this._scrollSubscription) {
        let i = this._config ? this._config.scrollThrottle : 0;
        this._scrollSubscription = this._scrollDispatcher.scrolled(i).subscribe(() => { if (this._overlayRef.updatePosition(), this._config && this._config.autoClose) {
            let t = this._overlayRef.overlayElement.getBoundingClientRect(), { width: e, height: o } = this._viewportRuler.getViewportSize();
            Rt(t, [{ width: e, height: o, bottom: o, right: e, top: 0, left: 0 }]) && (this.disable(), this._ngZone.run(() => this._overlayRef.detach()));
        } });
    } }
    disable() { this._scrollSubscription && (this._scrollSubscription.unsubscribe(), this._scrollSubscription = null); }
    detach() { this.disable(), this._overlayRef = null; }
}, ye = (() => { class n {
    _injector = p(Y);
    noop = () => new T;
    close = t => ve(this._injector, t);
    block = () => me(this._injector);
    reposition = t => Tt(this._injector, t);
    static \u0275fac = function (e) { return new (e || n); };
    static \u0275prov = g.\u0275\u0275defineService({ token: n, factory: n.\u0275fac });
} return n; })(), z = class {
    positionStrategy;
    scrollStrategy = new T;
    panelClass = "";
    hasBackdrop = !1;
    backdropClass = "cdk-overlay-dark-backdrop";
    disableAnimations;
    width;
    height;
    minWidth;
    minHeight;
    maxWidth;
    maxHeight;
    direction;
    disposeOnNavigation = !1;
    usePopover;
    eventPredicate;
    constructor(i) { if (i) {
        let t = Object.keys(i);
        for (let e of t)
            i[e] !== void 0 && (this[e] = i[e]);
    } }
}, kt = class {
    offsetX;
    offsetY;
    panelClass;
    originX;
    originY;
    overlayX;
    overlayY;
    constructor(i, t, e, o, r) { this.offsetX = e, this.offsetY = o, this.panelClass = r, this.originX = i.originX, this.originY = i.originY, this.overlayX = t.overlayX, this.overlayY = t.overlayY; }
}, Dt = class {
    isOriginClipped = !1;
    isOriginOutsideView = !1;
    isOverlayClipped = !1;
    isOverlayOutsideView = !1;
}, rt = class {
    connectionPair;
    scrollableViewProperties;
    constructor(i, t) { this.connectionPair = i, this.scrollableViewProperties = t; }
};
function Wi(n, i) { if (i !== "top" && i !== "bottom" && i !== "center")
    throw Error(`ConnectedPosition: Invalid ${n} "${i}". Expected "top", "bottom" or "center".`); }
function Yi(n, i) { if (i !== "start" && i !== "end" && i !== "center")
    throw Error(`ConnectedPosition: Invalid ${n} "${i}". Expected "start", "end" or "center".`); }
var we = (() => { class n {
    _attachedOverlays = [];
    _document = p(W);
    _isAttached = !1;
    ngOnDestroy() { this.detach(); }
    add(t) { this.remove(t), this._attachedOverlays.push(t); }
    remove(t) { let e = this._attachedOverlays.indexOf(t); e > -1 && this._attachedOverlays.splice(e, 1), this._attachedOverlays.length === 0 && this.detach(); }
    canReceiveEvent(t, e, o) { return o.observers.length < 1 ? !1 : t.eventPredicate ? t.eventPredicate(e) : !0; }
    static \u0275fac = function (e) { return new (e || n); };
    static \u0275prov = g.\u0275\u0275defineService({ token: n, factory: n.\u0275fac });
} return n; })(), Se = (() => { class n extends we {
    _ngZone = p(V);
    _renderer = p(Mt).createRenderer(null, null);
    _cleanupKeydown;
    add(t) { super.add(t), this._isAttached || (this._ngZone.runOutsideAngular(() => { this._cleanupKeydown = this._renderer.listen("body", "keydown", this._keydownListener); }), this._isAttached = !0); }
    detach() { this._isAttached && (this._cleanupKeydown?.(), this._isAttached = !1); }
    _keydownListener = t => { let e = this._attachedOverlays; for (let o = e.length - 1; o > -1; o--) {
        let r = e[o];
        if (this.canReceiveEvent(r, t, r._keydownEvents)) {
            this._ngZone.run(() => r._keydownEvents.next(t));
            break;
        }
    } };
    static \u0275fac = function (e) { return new (e || n); };
    static \u0275prov = g.\u0275\u0275defineService({ token: n, factory: n.\u0275fac });
} return n; })(), be = (() => { class n extends we {
    _platform = p(O);
    _ngZone = p(V);
    _renderer = p(Mt).createRenderer(null, null);
    _cursorOriginalValue;
    _cursorStyleIsSet = !1;
    _pointerDownEventTarget = null;
    _cleanups;
    add(t) { if (super.add(t), !this._isAttached) {
        let e = this._document.body, o = { capture: !0 }, r = this._renderer;
        this._cleanups = this._ngZone.runOutsideAngular(() => [r.listen(e, "pointerdown", this._pointerDownListener, o), r.listen(e, "click", this._clickListener, o), r.listen(e, "auxclick", this._clickListener, o), r.listen(e, "contextmenu", this._clickListener, o)]), this._platform.IOS && !this._cursorStyleIsSet && (this._cursorOriginalValue = e.style.cursor, e.style.cursor = "pointer", this._cursorStyleIsSet = !0), this._isAttached = !0;
    } }
    detach() { this._isAttached && (this._cleanups?.forEach(t => t()), this._cleanups = void 0, this._platform.IOS && this._cursorStyleIsSet && (this._document.body.style.cursor = this._cursorOriginalValue, this._cursorStyleIsSet = !1), this._isAttached = !1); }
    _pointerDownListener = t => { this._pointerDownEventTarget = H(t); };
    _clickListener = t => { let e = H(t), o = t.type === "click" && this._pointerDownEventTarget ? this._pointerDownEventTarget : e; this._pointerDownEventTarget = null; let r = this._attachedOverlays.slice(); for (let s = r.length - 1; s > -1; s--) {
        let a = r[s], l = a._outsidePointerEvents;
        if (!(!a.hasAttached() || !this.canReceiveEvent(a, t, l))) {
            if (fe(a.overlayElement, e) || fe(a.overlayElement, o))
                break;
            this._ngZone ? this._ngZone.run(() => l.next(t)) : l.next(t);
        }
    } };
    static \u0275fac = function (e) { return new (e || n); };
    static \u0275prov = g.\u0275\u0275defineService({ token: n, factory: n.\u0275fac });
} return n; })();
function fe(n, i) { let t = typeof ShadowRoot < "u" && ShadowRoot, e = i; for (; e;) {
    if (e === n)
        return !0;
    e = t && e instanceof ShadowRoot ? e.host : e.parentNode;
} return !1; }
var Ce = (() => {
    class n {
        static \u0275fac = function (e) { return new (e || n); };
        static \u0275cmp = g.\u0275\u0275defineComponent({ type: n, selectors: [["ng-component"]], hostAttrs: ["cdk-overlay-style-loader", ""], decls: 0, vars: 0, template: function (e, o) { }, styles: [`.cdk-overlay-container, .cdk-global-overlay-wrapper {
  pointer-events: none;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
}

.cdk-overlay-container {
  position: fixed;
}
@layer cdk-overlay {
  .cdk-overlay-container {
    z-index: 1000;
  }
}
.cdk-overlay-container:empty {
  display: none;
}

.cdk-global-overlay-wrapper {
  display: flex;
  position: absolute;
}
@layer cdk-overlay {
  .cdk-global-overlay-wrapper {
    z-index: 1000;
  }
}

.cdk-overlay-pane {
  position: absolute;
  pointer-events: auto;
  box-sizing: border-box;
  display: flex;
  max-width: 100%;
  max-height: 100%;
}
@layer cdk-overlay {
  .cdk-overlay-pane {
    z-index: 1000;
  }
}

.cdk-overlay-backdrop {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  pointer-events: auto;
  -webkit-tap-highlight-color: transparent;
  opacity: 0;
  touch-action: manipulation;
}
@layer cdk-overlay {
  .cdk-overlay-backdrop {
    z-index: 1000;
    transition: opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
  }
}
@media (prefers-reduced-motion) {
  .cdk-overlay-backdrop {
    transition-duration: 1ms;
  }
}

.cdk-overlay-backdrop-showing {
  opacity: 1;
}
@media (forced-colors: active) {
  .cdk-overlay-backdrop-showing {
    opacity: 0.6;
  }
}

@layer cdk-overlay {
  .cdk-overlay-dark-backdrop {
    background: rgba(0, 0, 0, 0.32);
  }
}

.cdk-overlay-transparent-backdrop {
  transition: visibility 1ms linear, opacity 1ms linear;
  visibility: hidden;
  opacity: 1;
}
.cdk-overlay-transparent-backdrop.cdk-overlay-backdrop-showing, .cdk-high-contrast-active .cdk-overlay-transparent-backdrop {
  opacity: 0;
  visibility: visible;
}

.cdk-overlay-backdrop-noop-animation {
  transition: none;
}

.cdk-overlay-connected-position-bounding-box {
  position: absolute;
  display: flex;
  flex-direction: column;
  min-width: 1px;
  min-height: 1px;
}
@layer cdk-overlay {
  .cdk-overlay-connected-position-bounding-box {
    z-index: 1000;
  }
}

.cdk-global-scrollblock {
  position: fixed;
  width: 100%;
  overflow-y: scroll;
}

.cdk-overlay-popover {
  background: none;
  border: none;
  padding: 0;
  outline: 0;
  overflow: visible;
  position: fixed;
  pointer-events: none;
  white-space: normal;
  color: inherit;
  text-decoration: none;
  width: 100%;
  height: 100%;
  inset: auto;
  top: 0;
  left: 0;
}
.cdk-overlay-popover::backdrop {
  display: none;
}
.cdk-overlay-popover .cdk-overlay-backdrop {
  position: fixed;
  z-index: auto;
}
`], encapsulation: 2 });
    }
    return n;
})(), ht = (() => { class n {
    _platform = p(O);
    _containerElement;
    _document = p(W);
    _styleLoader = p(ft);
    ngOnDestroy() { this._containerElement?.remove(); }
    getContainerElement() { return this._loadStyles(), this._containerElement || this._createContainer(), this._containerElement; }
    _createContainer() { let t = "cdk-overlay-container"; if (this._platform.isBrowser || dt()) {
        let o = this._document.querySelectorAll(`.${t}[platform="server"], .${t}[platform="test"]`);
        for (let r = 0; r < o.length; r++)
            o[r].remove();
    } let e = this._document.createElement("div"); e.classList.add(t), dt() ? e.setAttribute("platform", "test") : this._platform.isBrowser || e.setAttribute("platform", "server"), this._document.body.appendChild(e), this._containerElement = e; }
    _loadStyles() { this._styleLoader.load(Ce); }
    static \u0275fac = function (e) { return new (e || n); };
    static \u0275prov = g.\u0275\u0275defineService({ token: n, factory: n.\u0275fac });
} return n; })(), xt = class {
    _renderer;
    _ngZone;
    element;
    _cleanupClick;
    _cleanupTransitionEnd;
    _fallbackTimeout;
    constructor(i, t, e, o) { this._renderer = t, this._ngZone = e, this.element = i.createElement("div"), this.element.classList.add("cdk-overlay-backdrop"), this._cleanupClick = t.listen(this.element, "click", o); }
    detach() { this._ngZone.runOutsideAngular(() => { let i = this.element; clearTimeout(this._fallbackTimeout), this._cleanupTransitionEnd?.(), this._cleanupTransitionEnd = this._renderer.listen(i, "transitionend", this.dispose), this._fallbackTimeout = setTimeout(this.dispose, 500), i.style.pointerEvents = "none", i.classList.remove("cdk-overlay-backdrop-showing"); }); }
    dispose = () => { clearTimeout(this._fallbackTimeout), this._cleanupClick?.(), this._cleanupTransitionEnd?.(), this._cleanupClick = this._cleanupTransitionEnd = this._fallbackTimeout = void 0, this.element.remove(); };
};
function Vt(n) { return n && n.nodeType === 1; }
var tt = Pi([]);
tt.asReadonly();
var st = class {
    _portalOutlet;
    _host;
    _pane;
    _config;
    _ngZone;
    _keyboardDispatcher;
    _document;
    _location;
    _outsideClickDispatcher;
    _animationsDisabled;
    _injector;
    _renderer;
    _backdropClick = new A;
    _attachments = new A;
    _detachments = new A;
    _positionStrategy;
    _scrollStrategy;
    _locationChanges;
    _backdropRef = null;
    _detachContentMutationObserver;
    _detachContentAfterRenderRef;
    _disposed = !1;
    _previousHostParent;
    _keydownEvents = new A;
    _outsidePointerEvents = new A;
    _afterNextRenderRef;
    constructor(i, t, e, o, r, s, a, l, c, d = !1, f, m) { this._portalOutlet = i, this._host = t, this._pane = e, this._config = o, this._ngZone = r, this._keyboardDispatcher = s, this._document = a, this._location = l, this._outsideClickDispatcher = c, this._animationsDisabled = d, this._injector = f, this._renderer = m, o.scrollStrategy && (this._scrollStrategy = o.scrollStrategy, this._scrollStrategy.attach(this)), this._positionStrategy = o.positionStrategy; }
    get overlayElement() { return this._pane; }
    get backdropElement() { return this._backdropRef?.element || null; }
    get hostElement() { return this._host; }
    get eventPredicate() { return this._config?.eventPredicate || null; }
    attach(i) { if (this._disposed)
        return null; this._attachHost(); let t = this._portalOutlet.attach(i); if (this._positionStrategy?.attach(this), this._updateStackingOrder(), this._updateElementSize(), this._updateElementDirection(), Et(() => { tt.update(e => e.includes(this) ? e : [...e, this]); }), this._scrollStrategy && this._scrollStrategy.enable(), this._afterNextRenderRef?.destroy(), this._afterNextRenderRef = he(() => { this.hasAttached() && this.updatePosition(); }, { injector: this._injector }), this._togglePointerEvents(!0), this._config.hasBackdrop && this._attachBackdrop(), this._config.panelClass && this._toggleClasses(this._pane, this._config.panelClass, !0), this._attachments.next(), this._completeDetachContent(), this._keyboardDispatcher.add(this), this._config.disposeOnNavigation === !0 || this._config.disposeOnNavigation === "pop-state") {
        let e = this._location.subscribe(() => this.dispose());
        this._locationChanges = () => e.unsubscribe();
    }
    else
        this._config.disposeOnNavigation === "url-change" && (this._locationChanges = this._location.onUrlChange(() => this.dispose())); return this._outsideClickDispatcher.add(this), typeof t?.onDestroy == "function" && t.onDestroy(() => { this.hasAttached() && this._ngZone.runOutsideAngular(() => Promise.resolve().then(() => this.detach())); }), t; }
    detach() { if (!this.hasAttached())
        return; this.detachBackdrop(), this._togglePointerEvents(!1), this._positionStrategy && this._positionStrategy.detach && this._positionStrategy.detach(), this._scrollStrategy && this._scrollStrategy.disable(); let i = this._portalOutlet.detach(); return this._detachments.next(), this._completeDetachContent(), this._keyboardDispatcher.remove(this), this._detachContentWhenEmpty(), this._locationChanges?.(), this._outsideClickDispatcher.remove(this), Et(() => { tt.update(t => t.filter(e => e !== this)); }), i; }
    dispose() { if (this._disposed)
        return; let i = this.hasAttached(); this._positionStrategy && this._positionStrategy.dispose(), this._disposeScrollStrategy(), this._backdropRef?.dispose(), this._locationChanges?.(), this._keyboardDispatcher.remove(this), this._portalOutlet.dispose(), this._attachments.complete(), this._backdropClick.complete(), this._keydownEvents.complete(), this._outsidePointerEvents.complete(), this._outsideClickDispatcher.remove(this), this._host?.remove(), this._afterNextRenderRef?.destroy(), this._previousHostParent = this._pane = this._host = this._backdropRef = null, i && this._detachments.next(), this._detachments.complete(), this._completeDetachContent(), this._disposed = !0, Et(() => { tt.update(t => t.filter(e => e !== this)); }); }
    hasAttached() { return this._portalOutlet.hasAttached(); }
    backdropClick() { return this._backdropClick; }
    attachments() { return this._attachments; }
    detachments() { return this._detachments; }
    keydownEvents() { return this._keydownEvents; }
    outsidePointerEvents() { return this._outsidePointerEvents; }
    getConfig() { return this._config; }
    updatePosition() { this._positionStrategy && this._positionStrategy.apply(); }
    updatePositionStrategy(i) { i !== this._positionStrategy && (this._positionStrategy && this._positionStrategy.dispose(), this._positionStrategy = i, this.hasAttached() && (i.attach(this), this.updatePosition())); }
    updateSize(i) { this._config = X(X({}, this._config), i), this._updateElementSize(); }
    setDirection(i) { this._config = It(X({}, this._config), { direction: i }), this._updateElementDirection(); }
    addPanelClass(i) { this._pane && this._toggleClasses(this._pane, i, !0); }
    removePanelClass(i) { this._pane && this._toggleClasses(this._pane, i, !1); }
    getDirection() { let i = this._config.direction; return i ? typeof i == "string" ? i : i.value : "ltr"; }
    updateScrollStrategy(i) { i !== this._scrollStrategy && (this._disposeScrollStrategy(), this._scrollStrategy = i, this.hasAttached() && (i.attach(this), i.enable())); }
    _updateElementDirection() { this._host.setAttribute("dir", this.getDirection()); }
    _updateElementSize() { if (!this._pane)
        return; let i = this._pane.style; i.width = _(this._config.width), i.height = _(this._config.height), i.minWidth = _(this._config.minWidth), i.minHeight = _(this._config.minHeight), i.maxWidth = _(this._config.maxWidth), i.maxHeight = _(this._config.maxHeight); }
    _togglePointerEvents(i) { this._pane.style.pointerEvents = i ? "" : "none"; }
    _attachHost() { if (!this._host.parentElement) {
        let i = this._config.usePopover ? this._positionStrategy?.getPopoverInsertionPoint?.() : null;
        Vt(i) ? i.after(this._host) : i?.type === "parent" ? i.element.appendChild(this._host) : this._previousHostParent?.appendChild(this._host);
    } if (this._config.usePopover)
        try {
            this._host.showPopover();
        }
        catch { } }
    _attachBackdrop() { let i = "cdk-overlay-backdrop-showing"; this._backdropRef?.dispose(), this._backdropRef = new xt(this._document, this._renderer, this._ngZone, t => { this._backdropClick.next(t); }), this._animationsDisabled && this._backdropRef.element.classList.add("cdk-overlay-backdrop-noop-animation"), this._config.backdropClass && this._toggleClasses(this._backdropRef.element, this._config.backdropClass, !0), this._config.usePopover ? this._host.prepend(this._backdropRef.element) : this._host.parentElement.insertBefore(this._backdropRef.element, this._host), !this._animationsDisabled && typeof requestAnimationFrame < "u" ? this._ngZone.runOutsideAngular(() => { requestAnimationFrame(() => this._backdropRef?.element.classList.add(i)); }) : this._backdropRef.element.classList.add(i); }
    _updateStackingOrder() { !this._config.usePopover && this._host.nextSibling && this._host.parentNode.appendChild(this._host); }
    detachBackdrop() { this._animationsDisabled ? (this._backdropRef?.dispose(), this._backdropRef = null) : this._backdropRef?.detach(); }
    _toggleClasses(i, t, e) { let o = ut(t || []).filter(r => !!r); o.length && (e ? i.classList.add(...o) : i.classList.remove(...o)); }
    _detachContentWhenEmpty() { let i = !1; try {
        this._detachContentAfterRenderRef = he(() => { i = !0, this._detachContent(); }, { injector: this._injector });
    }
    catch (t) {
        if (i)
            throw t;
        this._detachContent();
    } globalThis.MutationObserver && this._pane && (this._detachContentMutationObserver ||= new globalThis.MutationObserver(() => { this._detachContent(); }), this._detachContentMutationObserver.observe(this._pane, { childList: !0 })); }
    _detachContent() { (!this._pane || !this._host || this._pane.children.length === 0) && (this._pane && this._config.panelClass && this._toggleClasses(this._pane, this._config.panelClass, !1), this._host && this._host.parentElement && (this._previousHostParent = this._host.parentElement, this._host.remove()), this._completeDetachContent()); }
    _completeDetachContent() { this._detachContentAfterRenderRef?.destroy(), this._detachContentAfterRenderRef = void 0, this._detachContentMutationObserver?.disconnect(); }
    _disposeScrollStrategy() { let i = this._scrollStrategy; i?.disable(), i?.detach?.(); }
}, ue = "cdk-overlay-connected-position-bounding-box", Xi = /([A-Za-z%]+)$/;
function Bt(n, i) { return new at(i, n.get(k), n.get(W), n.get(O), n.get(ht)); }
var at = class {
    _viewportRuler;
    _document;
    _platform;
    _overlayContainer;
    _overlayRef;
    _isInitialRender = !1;
    _lastBoundingBoxSize = { width: 0, height: 0 };
    _isPushed = !1;
    _canPush = !0;
    _growAfterOpen = !1;
    _hasFlexibleDimensions = !0;
    _positionLocked = !1;
    _originRect;
    _overlayRect;
    _viewportRect;
    _containerRect;
    _viewportMargin = 0;
    _scrollables = [];
    _preferredPositions = [];
    _origin;
    _pane;
    _isDisposed = !1;
    _boundingBox = null;
    _lastPosition = null;
    _lastScrollVisibility = null;
    _positionChanges = new A;
    _resizeSubscription = I.EMPTY;
    _offsetX = 0;
    _offsetY = 0;
    _transformOriginSelector;
    _appliedPanelClasses = [];
    _previousPushAmount = null;
    _popoverLocation = "global";
    positionChanges = this._positionChanges;
    get positions() { return this._preferredPositions; }
    constructor(i, t, e, o, r) { this._viewportRuler = t, this._document = e, this._platform = o, this._overlayContainer = r, this.setOrigin(i); }
    attach(i) { this._overlayRef && this._overlayRef, this._validatePositions(), i.hostElement.classList.add(ue), this._overlayRef = i, this._boundingBox = i.hostElement, this._pane = i.overlayElement, this._isDisposed = !1, this._isInitialRender = !0, this._lastPosition = null, this._resizeSubscription.unsubscribe(), this._resizeSubscription = this._viewportRuler.change().subscribe(() => { this._isInitialRender = !0, this.apply(); }); }
    apply() { if (this._isDisposed || !this._platform.isBrowser)
        return; if (!this._isInitialRender && this._positionLocked && this._lastPosition) {
        this.reapplyLastPosition();
        return;
    } this._clearPanelClasses(), this._resetOverlayElementStyles(), this._resetBoundingBoxStyles(), this._viewportRect = this._getNarrowedViewportRect(), this._originRect = this._getOriginRect(), this._overlayRect = this._pane.getBoundingClientRect(), this._containerRect = this._getContainerRect(); let i = this._originRect, t = this._overlayRect, e = this._viewportRect, o = this._containerRect, r = [], s; for (let a of this._preferredPositions) {
        let l = this._getOriginPoint(i, o, a), c = this._getOverlayPoint(l, t, a), d = this._getOverlayFit(c, t, e, a);
        if (d.isCompletelyWithinViewport) {
            this._isPushed = !1, this._applyPosition(a, l);
            return;
        }
        if (this._canFitWithFlexibleDimensions(d, c, e)) {
            r.push({ position: a, origin: l, overlayRect: t, boundingBoxRect: this._calculateBoundingBoxRect(l, a) });
            continue;
        }
        (!s || s.overlayFit.visibleArea < d.visibleArea) && (s = { overlayFit: d, overlayPoint: c, originPoint: l, position: a, overlayRect: t });
    } if (r.length) {
        let a = null, l = -1;
        for (let c of r) {
            let d = c.boundingBoxRect.width * c.boundingBoxRect.height * (c.position.weight || 1);
            d > l && (l = d, a = c);
        }
        this._isPushed = !1, this._applyPosition(a.position, a.origin);
        return;
    } if (this._canPush) {
        this._isPushed = !0, this._applyPosition(s.position, s.originPoint);
        return;
    } this._applyPosition(s.position, s.originPoint); }
    detach() { this._clearPanelClasses(), this._lastPosition = null, this._previousPushAmount = null, this._resizeSubscription.unsubscribe(); }
    dispose() { this._isDisposed || (this._boundingBox && x(this._boundingBox.style, { top: "", left: "", right: "", bottom: "", height: "", width: "", alignItems: "", justifyContent: "" }), this._pane && this._resetOverlayElementStyles(), this._overlayRef && this._overlayRef.hostElement.classList.remove(ue), this.detach(), this._positionChanges.complete(), this._overlayRef = this._boundingBox = null, this._isDisposed = !0); }
    reapplyLastPosition() { if (this._isDisposed || !this._platform.isBrowser)
        return; let i = this._lastPosition; i ? (this._originRect = this._getOriginRect(), this._overlayRect = this._pane.getBoundingClientRect(), this._viewportRect = this._getNarrowedViewportRect(), this._containerRect = this._getContainerRect(), this._applyPosition(i, this._getOriginPoint(this._originRect, this._containerRect, i))) : this.apply(); }
    withScrollableContainers(i) { return this._scrollables = i, this; }
    withPositions(i) { return this._preferredPositions = i, i.indexOf(this._lastPosition) === -1 && (this._lastPosition = null), this._validatePositions(), this; }
    withViewportMargin(i) { return this._viewportMargin = i, this; }
    withFlexibleDimensions(i = !0) { return this._hasFlexibleDimensions = i, this; }
    withGrowAfterOpen(i = !0) { return this._growAfterOpen = i, this; }
    withPush(i = !0) { return this._canPush = i, this; }
    withLockedPosition(i = !0) { return this._positionLocked = i, this; }
    setOrigin(i) { return this._origin = i, this; }
    withDefaultOffsetX(i) { return this._offsetX = i, this; }
    withDefaultOffsetY(i) { return this._offsetY = i, this; }
    withTransformOriginOn(i) { return this._transformOriginSelector = i, this; }
    withPopoverLocation(i) { return this._popoverLocation = i, this; }
    getPopoverInsertionPoint() { return this._popoverLocation === "global" ? null : this._popoverLocation !== "inline" ? this._popoverLocation : this._origin instanceof et ? this._origin.nativeElement : Vt(this._origin) ? this._origin : null; }
    _getOriginPoint(i, t, e) { let o; if (e.originX == "center")
        o = i.left + i.width / 2;
    else {
        let s = this._isRtl() ? i.right : i.left, a = this._isRtl() ? i.left : i.right;
        o = e.originX == "start" ? s : a;
    } t.left < 0 && (o -= t.left); let r; return e.originY == "center" ? r = i.top + i.height / 2 : r = e.originY == "top" ? i.top : i.bottom, t.top < 0 && (r -= t.top), { x: o, y: r }; }
    _getOverlayPoint(i, t, e) { let o; e.overlayX == "center" ? o = -t.width / 2 : e.overlayX === "start" ? o = this._isRtl() ? -t.width : 0 : o = this._isRtl() ? 0 : -t.width; let r; return e.overlayY == "center" ? r = -t.height / 2 : r = e.overlayY == "top" ? 0 : -t.height, { x: i.x + o, y: i.y + r }; }
    _getOverlayFit(i, t, e, o) { let r = _e(t), { x: s, y: a } = i, l = this._getOffset(o, "x"), c = this._getOffset(o, "y"); l && (s += l), c && (a += c); let d = 0 - s, f = s + r.width - e.width, m = 0 - a, y = a + r.height - e.height, v = this._subtractOverflows(r.width, d, f), b = this._subtractOverflows(r.height, m, y), Lt = v * b; return { visibleArea: Lt, isCompletelyWithinViewport: r.width * r.height === Lt, fitsInViewportVertically: b === r.height, fitsInViewportHorizontally: v == r.width }; }
    _canFitWithFlexibleDimensions(i, t, e) { if (this._hasFlexibleDimensions) {
        let o = e.bottom - t.y, r = e.right - t.x, s = pe(this._overlayRef.getConfig().minHeight), a = pe(this._overlayRef.getConfig().minWidth), l = i.fitsInViewportVertically || s != null && s <= o, c = i.fitsInViewportHorizontally || a != null && a <= r;
        return l && c;
    } return !1; }
    _pushOverlayOnScreen(i, t, e) { if (this._previousPushAmount && this._positionLocked)
        return { x: i.x + this._previousPushAmount.x, y: i.y + this._previousPushAmount.y }; let o = _e(t), r = this._viewportRect, s = Math.max(i.x + o.width - r.width, 0), a = Math.max(i.y + o.height - r.height, 0), l = Math.max(r.top - e.top - i.y, 0), c = Math.max(r.left - e.left - i.x, 0), d = 0, f = 0; return o.width <= r.width ? d = c || -s : d = i.x < this._getViewportMarginStart() ? r.left - e.left - i.x : 0, o.height <= r.height ? f = l || -a : f = i.y < this._getViewportMarginTop() ? r.top - e.top - i.y : 0, this._previousPushAmount = { x: d, y: f }, { x: i.x + d, y: i.y + f }; }
    _applyPosition(i, t) { if (this._setTransformOrigin(i), this._setOverlayElementStyles(t, i), this._setBoundingBoxStyles(t, i), i.panelClass && this._addPanelClasses(i.panelClass), this._positionChanges.observers.length) {
        let e = this._getScrollVisibility();
        if (i !== this._lastPosition || !this._lastScrollVisibility || !Hi(this._lastScrollVisibility, e)) {
            let o = new rt(i, e);
            this._positionChanges.next(o);
        }
        this._lastScrollVisibility = e;
    } this._lastPosition = i, this._isInitialRender = !1; }
    _setTransformOrigin(i) { if (!this._transformOriginSelector)
        return; let t = this._boundingBox.querySelectorAll(this._transformOriginSelector), e, o = i.overlayY; i.overlayX === "center" ? e = "center" : this._isRtl() ? e = i.overlayX === "start" ? "right" : "left" : e = i.overlayX === "start" ? "left" : "right"; for (let r = 0; r < t.length; r++)
        t[r].style.transformOrigin = `${e} ${o}`; }
    _calculateBoundingBoxRect(i, t) { let e = this._viewportRect, o = this._isRtl(), r, s, a; if (t.overlayY === "top")
        s = i.y, r = e.height - s + this._getViewportMarginBottom();
    else if (t.overlayY === "bottom")
        a = e.height - i.y + this._getViewportMarginTop() + this._getViewportMarginBottom(), r = e.height - a + this._getViewportMarginTop();
    else {
        let y = Math.min(e.bottom - i.y + e.top, i.y), v = this._lastBoundingBoxSize.height;
        r = y * 2, s = i.y - y, r > v && !this._isInitialRender && !this._growAfterOpen && (s = i.y - v / 2);
    } let l = t.overlayX === "start" && !o || t.overlayX === "end" && o, c = t.overlayX === "end" && !o || t.overlayX === "start" && o, d, f, m; if (c)
        m = e.width - i.x + this._getViewportMarginStart() + this._getViewportMarginEnd(), d = i.x - this._getViewportMarginStart();
    else if (l)
        f = i.x, d = e.right - i.x - this._getViewportMarginEnd();
    else {
        let y = Math.min(e.right - i.x + e.left, i.x), v = this._lastBoundingBoxSize.width;
        d = y * 2, f = i.x - y, d > v && !this._isInitialRender && !this._growAfterOpen && (f = i.x - v / 2);
    } return { top: s, left: f, bottom: a, right: m, width: d, height: r }; }
    _setBoundingBoxStyles(i, t) { let e = this._calculateBoundingBoxRect(i, t); !this._isInitialRender && !this._growAfterOpen && (e.height = Math.min(e.height, this._lastBoundingBoxSize.height), e.width = Math.min(e.width, this._lastBoundingBoxSize.width)); let o = {}; if (this._hasExactPosition())
        o.top = o.left = "0", o.bottom = o.right = "auto", o.maxHeight = o.maxWidth = "", o.width = o.height = "100%";
    else {
        let r = this._overlayRef.getConfig().maxHeight, s = this._overlayRef.getConfig().maxWidth;
        o.width = _(e.width), o.height = _(e.height), o.top = _(e.top) || "auto", o.bottom = _(e.bottom) || "auto", o.left = _(e.left) || "auto", o.right = _(e.right) || "auto", t.overlayX === "center" ? o.alignItems = "center" : o.alignItems = t.overlayX === "end" ? "flex-end" : "flex-start", t.overlayY === "center" ? o.justifyContent = "center" : o.justifyContent = t.overlayY === "bottom" ? "flex-end" : "flex-start", r && (o.maxHeight = _(r)), s && (o.maxWidth = _(s));
    } this._lastBoundingBoxSize = e, x(this._boundingBox.style, o); }
    _resetBoundingBoxStyles() { x(this._boundingBox.style, { top: "0", left: "0", right: "0", bottom: "0", height: "", width: "", alignItems: "", justifyContent: "" }); }
    _resetOverlayElementStyles() { x(this._pane.style, { top: "", left: "", bottom: "", right: "", position: "", transform: "" }); }
    _setOverlayElementStyles(i, t) { let e = {}, o = this._hasExactPosition(), r = this._hasFlexibleDimensions, s = this._overlayRef.getConfig(); if (o) {
        let d = this._viewportRuler.getViewportScrollPosition();
        x(e, this._getExactOverlayY(t, i, d)), x(e, this._getExactOverlayX(t, i, d));
    }
    else
        e.position = "static"; let a = "", l = this._getOffset(t, "x"), c = this._getOffset(t, "y"); l && (a += `translateX(${l}px) `), c && (a += `translateY(${c}px)`), e.transform = a.trim(), s.maxHeight && (o ? e.maxHeight = _(s.maxHeight) : r && (e.maxHeight = "")), s.maxWidth && (o ? e.maxWidth = _(s.maxWidth) : r && (e.maxWidth = "")), x(this._pane.style, e); }
    _getExactOverlayY(i, t, e) { let o = { top: "", bottom: "" }, r = this._getOverlayPoint(t, this._overlayRect, i); if (this._isPushed && (r = this._pushOverlayOnScreen(r, this._overlayRect, e)), i.overlayY === "bottom") {
        let s = this._document.documentElement.clientHeight;
        o.bottom = `${s - (r.y + this._overlayRect.height)}px`;
    }
    else
        o.top = _(r.y); return o; }
    _getExactOverlayX(i, t, e) { let o = { left: "", right: "" }, r = this._getOverlayPoint(t, this._overlayRect, i); this._isPushed && (r = this._pushOverlayOnScreen(r, this._overlayRect, e)); let s; if (this._isRtl() ? s = i.overlayX === "end" ? "left" : "right" : s = i.overlayX === "end" ? "right" : "left", s === "right") {
        let a = this._document.documentElement.clientWidth;
        o.right = `${a - (r.x + this._overlayRect.width)}px`;
    }
    else
        o.left = _(r.x); return o; }
    _getScrollVisibility() { let i = this._getOriginRect(), t = this._pane.getBoundingClientRect(), e = this._scrollables.map(o => o.getElementRef().nativeElement.getBoundingClientRect()); return { isOriginClipped: de(i, e), isOriginOutsideView: Rt(i, e), isOverlayClipped: de(t, e), isOverlayOutsideView: Rt(t, e) }; }
    _subtractOverflows(i, ...t) { return t.reduce((e, o) => e - Math.max(o, 0), i); }
    _getNarrowedViewportRect() { let i = this._document.documentElement.clientWidth, t = this._document.documentElement.clientHeight, e = this._viewportRuler.getViewportScrollPosition(); return { top: e.top + this._getViewportMarginTop(), left: e.left + this._getViewportMarginStart(), right: e.left + i - this._getViewportMarginEnd(), bottom: e.top + t - this._getViewportMarginBottom(), width: i - this._getViewportMarginStart() - this._getViewportMarginEnd(), height: t - this._getViewportMarginTop() - this._getViewportMarginBottom() }; }
    _isRtl() { return this._overlayRef.getDirection() === "rtl"; }
    _hasExactPosition() { return !this._hasFlexibleDimensions || this._isPushed; }
    _getOffset(i, t) { return t === "x" ? i.offsetX == null ? this._offsetX : i.offsetX : i.offsetY == null ? this._offsetY : i.offsetY; }
    _validatePositions() { }
    _addPanelClasses(i) { this._pane && ut(i).forEach(t => { t !== "" && this._appliedPanelClasses.indexOf(t) === -1 && (this._appliedPanelClasses.push(t), this._pane.classList.add(t)); }); }
    _clearPanelClasses() { this._pane && (this._appliedPanelClasses.forEach(i => { this._pane.classList.remove(i); }), this._appliedPanelClasses = []); }
    _getViewportMarginStart() { return typeof this._viewportMargin == "number" ? this._viewportMargin : this._viewportMargin?.start ?? 0; }
    _getViewportMarginEnd() { return typeof this._viewportMargin == "number" ? this._viewportMargin : this._viewportMargin?.end ?? 0; }
    _getViewportMarginTop() { return typeof this._viewportMargin == "number" ? this._viewportMargin : this._viewportMargin?.top ?? 0; }
    _getViewportMarginBottom() { return typeof this._viewportMargin == "number" ? this._viewportMargin : this._viewportMargin?.bottom ?? 0; }
    _getOriginRect() { let i = this._origin; if (i instanceof et)
        return i.nativeElement.getBoundingClientRect(); if (i instanceof Element)
        return i.getBoundingClientRect(); let t = i.width || 0, e = i.height || 0; return { top: i.y, bottom: i.y + e, left: i.x, right: i.x + t, height: e, width: t }; }
    _getContainerRect() { let i = this._overlayRef.getConfig().usePopover && this._popoverLocation !== "global", t = this._overlayContainer.getContainerElement(); i && (t.style.display = "block"); let e = t.getBoundingClientRect(); return i && (t.style.display = ""), e; }
};
function x(n, i) { for (let t in i)
    Object.hasOwn(i, t) && (n[t] = i[t]); return n; }
function pe(n) { if (typeof n != "number" && n != null) {
    let [i, t] = n.split(Xi);
    return !t || t === "px" ? parseFloat(i) : null;
} return n || null; }
function _e(n) { return { top: Math.floor(n.top), right: Math.floor(n.right), bottom: Math.floor(n.bottom), left: Math.floor(n.left), width: Math.floor(n.width), height: Math.floor(n.height) }; }
function Hi(n, i) { return n === i ? !0 : n.isOriginClipped === i.isOriginClipped && n.isOriginOutsideView === i.isOriginOutsideView && n.isOverlayClipped === i.isOverlayClipped && n.isOverlayOutsideView === i.isOverlayOutsideView; }
var Ui = [{ originX: "start", originY: "bottom", overlayX: "start", overlayY: "top" }, { originX: "start", originY: "top", overlayX: "start", overlayY: "bottom" }, { originX: "end", originY: "bottom", overlayX: "end", overlayY: "top" }, { originX: "end", originY: "top", overlayX: "end", overlayY: "bottom" }], ji = [{ originX: "end", originY: "top", overlayX: "start", overlayY: "top" }, { originX: "end", originY: "bottom", overlayX: "start", overlayY: "bottom" }, { originX: "start", originY: "top", overlayX: "end", overlayY: "top" }, { originX: "start", originY: "bottom", overlayX: "end", overlayY: "bottom" }], ge = "cdk-global-overlay-wrapper";
function Oe(n) { return new lt; }
var lt = class {
    _overlayRef;
    _cssPosition = "static";
    _topOffset = "";
    _bottomOffset = "";
    _alignItems = "";
    _xPosition = "";
    _xOffset = "";
    _width = "";
    _height = "";
    _isDisposed = !1;
    attach(i) { let t = i.getConfig(); this._overlayRef = i, this._width && !t.width && i.updateSize({ width: this._width }), this._height && !t.height && i.updateSize({ height: this._height }), i.hostElement.classList.add(ge), this._isDisposed = !1; }
    top(i = "") { return this._bottomOffset = "", this._topOffset = i, this._alignItems = "flex-start", this; }
    left(i = "") { return this._xOffset = i, this._xPosition = "left", this; }
    bottom(i = "") { return this._topOffset = "", this._bottomOffset = i, this._alignItems = "flex-end", this; }
    right(i = "") { return this._xOffset = i, this._xPosition = "right", this; }
    start(i = "") { return this._xOffset = i, this._xPosition = "start", this; }
    end(i = "") { return this._xOffset = i, this._xPosition = "end", this; }
    width(i = "") { return this._overlayRef ? this._overlayRef.updateSize({ width: i }) : this._width = i, this; }
    height(i = "") { return this._overlayRef ? this._overlayRef.updateSize({ height: i }) : this._height = i, this; }
    centerHorizontally(i = "") { return this.left(i), this._xPosition = "center", this; }
    centerVertically(i = "") { return this.top(i), this._alignItems = "center", this; }
    apply() { if (!this._overlayRef || !this._overlayRef.hasAttached())
        return; let i = this._overlayRef.overlayElement.style, t = this._overlayRef.hostElement.style, e = this._overlayRef.getConfig(), { width: o, height: r, maxWidth: s, maxHeight: a } = e, l = (o === "100%" || o === "100vw") && (!s || s === "100%" || s === "100vw"), c = (r === "100%" || r === "100vh") && (!a || a === "100%" || a === "100vh"), d = this._xPosition, f = this._xOffset, m = this._overlayRef.getConfig().direction === "rtl", y = "", v = "", b = ""; l ? b = "flex-start" : d === "center" ? (b = "center", m ? v = f : y = f) : m ? d === "left" || d === "end" ? (b = "flex-end", y = f) : (d === "right" || d === "start") && (b = "flex-start", v = f) : d === "left" || d === "start" ? (b = "flex-start", y = f) : (d === "right" || d === "end") && (b = "flex-end", v = f), i.position = this._cssPosition, i.marginLeft = l ? "0" : y, i.marginTop = c ? "0" : this._topOffset, i.marginBottom = this._bottomOffset, i.marginRight = l ? "0" : v, t.justifyContent = b, t.alignItems = c ? "flex-start" : this._alignItems; }
    dispose() { if (this._isDisposed || !this._overlayRef)
        return; let i = this._overlayRef.overlayElement.style, t = this._overlayRef.hostElement, e = t.style; t.classList.remove(ge), e.justifyContent = e.alignItems = i.marginTop = i.marginBottom = i.marginLeft = i.marginRight = i.position = "", this._overlayRef = null, this._isDisposed = !0; }
}, Ee = (() => { class n {
    _injector = p(Y);
    global() { return Oe(); }
    flexibleConnectedTo(t) { return Bt(this._injector, t); }
    static \u0275fac = function (e) { return new (e || n); };
    static \u0275prov = g.\u0275\u0275defineService({ token: n, factory: n.\u0275fac });
} return n; })(), Nt = new At("OVERLAY_DEFAULT_CONFIG");
function Ft(n, i) { n.get(ft).load(Ce); let t = n.get(ht), e = n.get(W), o = n.get(J), r = n.get(Mi), s = n.get(E), a = n.get(Ai, null, { optional: !0 }) || n.get(Mt).createRenderer(null, null), l = new z(i), c = n.get(Nt, null, { optional: !0 })?.usePopover ?? !0; l.direction = l.direction || s.value, !e.body || !("showPopover" in e.body) ? l.usePopover = !1 : l.usePopover = i?.usePopover ?? c; let d = e.createElement("div"), f = e.createElement("div"); d.id = o.getId("cdk-overlay-"), d.classList.add("cdk-overlay-pane"), f.appendChild(d), l.usePopover && (f.setAttribute("popover", "manual"), f.classList.add("cdk-overlay-popover")); let m = l.usePopover ? l.positionStrategy?.getPopoverInsertionPoint?.() : null; return Vt(m) ? m.after(f) : m?.type === "parent" ? m.element.appendChild(f) : t.getContainerElement().appendChild(f), new st(new Wt(d, r, n), f, d, l, n.get(V), n.get(Se), e, n.get(Fi), n.get(be), i?.disableAnimations ?? n.get(Ti, null, { optional: !0 }) === "NoopAnimations", n.get(Vi), a); }
var Re = (() => { class n {
    scrollStrategies = p(ye);
    _positionBuilder = p(Ee);
    _injector = p(Y);
    create(t) { return Ft(this._injector, t); }
    position() { return this._positionBuilder; }
    static \u0275fac = function (e) { return new (e || n); };
    static \u0275prov = g.\u0275\u0275defineService({ token: n, factory: n.\u0275fac });
} return n; })(), Gi = [{ originX: "start", originY: "bottom", overlayX: "start", overlayY: "top" }, { originX: "start", originY: "top", overlayX: "start", overlayY: "bottom" }, { originX: "end", originY: "top", overlayX: "end", overlayY: "bottom" }, { originX: "end", originY: "bottom", overlayX: "end", overlayY: "top" }], Zi = new At("cdk-connected-overlay-scroll-strategy", { providedIn: "root", factory: () => { let n = p(Y); return () => Tt(n); } }), Pt = (() => { class n {
    elementRef = p(et);
    static \u0275fac = function (e) { return new (e || n); };
    static \u0275dir = g.\u0275\u0275defineDirective({ type: n, selectors: [["", "cdk-overlay-origin", ""], ["", "overlay-origin", ""], ["", "cdkOverlayOrigin", ""]], exportAs: ["cdkOverlayOrigin"] });
} return n; })(), ke = new At("cdk-connected-overlay-default-config"), Ki = (() => { class n {
    _dir = p(E, { optional: !0 });
    _injector = p(Y);
    _overlayRef;
    _templatePortal;
    _backdropSubscription = I.EMPTY;
    _attachSubscription = I.EMPTY;
    _detachSubscription = I.EMPTY;
    _positionSubscription = I.EMPTY;
    _offsetX;
    _offsetY;
    _position;
    _scrollStrategyFactory = p(Zi);
    _ngZone = p(V);
    origin;
    positions;
    positionStrategy;
    get offsetX() { return this._offsetX; }
    set offsetX(t) { this._offsetX = t, this._position && this._updatePositionStrategy(this._position); }
    get offsetY() { return this._offsetY; }
    set offsetY(t) { this._offsetY = t, this._position && this._updatePositionStrategy(this._position); }
    width;
    height;
    minWidth;
    minHeight;
    backdropClass;
    panelClass;
    viewportMargin = 0;
    scrollStrategy;
    open = !1;
    disableClose = !1;
    transformOriginSelector;
    hasBackdrop = !1;
    lockPosition = !1;
    flexibleDimensions = !1;
    growAfterOpen = !1;
    push = !1;
    disposeOnNavigation = !1;
    usePopover;
    matchWidth = !1;
    set _config(t) { typeof t != "string" && this._assignConfig(t); }
    backdropClick = new M;
    positionChange = new M;
    attach = new M;
    detach = new M;
    overlayKeydown = new M;
    overlayOutsideClick = new M;
    constructor() { let t = p(Bi), e = p(Ni), o = p(ke, { optional: !0 }), r = p(Nt, { optional: !0 }); this.usePopover = r?.usePopover === !1 ? null : "global", this._templatePortal = new zt(t, e), this.scrollStrategy = this._scrollStrategyFactory(), o && this._assignConfig(o); }
    get overlayRef() { return this._overlayRef; }
    get dir() { return this._dir ? this._dir.value : "ltr"; }
    ngOnDestroy() { this._attachSubscription.unsubscribe(), this._detachSubscription.unsubscribe(), this._backdropSubscription.unsubscribe(), this._positionSubscription.unsubscribe(), this._overlayRef?.dispose(); }
    ngOnChanges(t) { this._position && (this._updatePositionStrategy(this._position), this._overlayRef?.updateSize({ width: this._getWidth(), minWidth: this.minWidth, height: this.height, minHeight: this.minHeight }), t.origin && this.open && this._position.apply()), t.open && (this.open ? this.attachOverlay() : this.detachOverlay()); }
    _createOverlay() { (!this.positions || !this.positions.length) && (this.positions = Gi); let t = this._overlayRef = Ft(this._injector, this._buildConfig()); this._attachSubscription = t.attachments().subscribe(() => this.attach.emit()), this._detachSubscription = t.detachments().subscribe(() => this.detach.emit()), t.keydownEvents().subscribe(e => { this.overlayKeydown.next(e), e.keyCode === 27 && !this.disableClose && !le(e) && (e.preventDefault(), this.detachOverlay()); }), this._overlayRef.outsidePointerEvents().subscribe(e => { let o = this._getOriginElement(), r = H(e); (!o || o !== r && !o.contains(r)) && this.overlayOutsideClick.next(e); }); }
    _buildConfig() { let t = this._position = this.positionStrategy || this._createPositionStrategy(), e = new z({ direction: this._dir || "ltr", positionStrategy: t, scrollStrategy: this.scrollStrategy, hasBackdrop: this.hasBackdrop, disposeOnNavigation: this.disposeOnNavigation, usePopover: !!this.usePopover }); return (this.height || this.height === 0) && (e.height = this.height), (this.minWidth || this.minWidth === 0) && (e.minWidth = this.minWidth), (this.minHeight || this.minHeight === 0) && (e.minHeight = this.minHeight), this.backdropClass && (e.backdropClass = this.backdropClass), this.panelClass && (e.panelClass = this.panelClass), e; }
    _updatePositionStrategy(t) { let e = this.positions.map(o => ({ originX: o.originX, originY: o.originY, overlayX: o.overlayX, overlayY: o.overlayY, offsetX: o.offsetX || this.offsetX, offsetY: o.offsetY || this.offsetY, panelClass: o.panelClass || void 0 })); return t.setOrigin(this._getOrigin()).withPositions(e).withFlexibleDimensions(this.flexibleDimensions).withPush(this.push).withGrowAfterOpen(this.growAfterOpen).withViewportMargin(this.viewportMargin).withLockedPosition(this.lockPosition).withTransformOriginOn(this.transformOriginSelector).withPopoverLocation(this.usePopover === null ? "global" : this.usePopover); }
    _createPositionStrategy() { let t = Bt(this._injector, this._getOrigin()); return this._updatePositionStrategy(t), t; }
    _getOrigin() { return this.origin instanceof Pt ? this.origin.elementRef : this.origin; }
    _getOriginElement() { return this.origin instanceof Pt ? this.origin.elementRef.nativeElement : this.origin instanceof et ? this.origin.nativeElement : typeof Element < "u" && this.origin instanceof Element ? this.origin : null; }
    _getWidth() { return this.width ? this.width : this.matchWidth ? this._getOriginElement()?.getBoundingClientRect?.().width : void 0; }
    attachOverlay() { this._overlayRef || this._createOverlay(); let t = this._overlayRef; t.getConfig().hasBackdrop = this.hasBackdrop, t.updateSize({ width: this._getWidth() }), t.hasAttached() || t.attach(this._templatePortal), this.hasBackdrop ? this._backdropSubscription = t.backdropClick().subscribe(e => this.backdropClick.emit(e)) : this._backdropSubscription.unsubscribe(), this._positionSubscription.unsubscribe(), this.positionChange.observers.length > 0 && (this._positionSubscription = this._position.positionChanges.pipe(Ii(() => this.positionChange.observers.length > 0)).subscribe(e => { this._ngZone.run(() => this.positionChange.emit(e)), this.positionChange.observers.length === 0 && this._positionSubscription.unsubscribe(); })), this.open = !0; }
    detachOverlay() { this._overlayRef?.detach(), this._backdropSubscription.unsubscribe(), this._positionSubscription.unsubscribe(), this.open = !1; }
    _assignConfig(t) { this.origin = t.origin ?? this.origin, this.positions = t.positions ?? this.positions, this.positionStrategy = t.positionStrategy ?? this.positionStrategy, this.offsetX = t.offsetX ?? this.offsetX, this.offsetY = t.offsetY ?? this.offsetY, this.width = t.width ?? this.width, this.height = t.height ?? this.height, this.minWidth = t.minWidth ?? this.minWidth, this.minHeight = t.minHeight ?? this.minHeight, this.backdropClass = t.backdropClass ?? this.backdropClass, this.panelClass = t.panelClass ?? this.panelClass, this.viewportMargin = t.viewportMargin ?? this.viewportMargin, this.scrollStrategy = t.scrollStrategy ?? this.scrollStrategy, this.disableClose = t.disableClose ?? this.disableClose, this.transformOriginSelector = t.transformOriginSelector ?? this.transformOriginSelector, this.hasBackdrop = t.hasBackdrop ?? this.hasBackdrop, this.lockPosition = t.lockPosition ?? this.lockPosition, this.flexibleDimensions = t.flexibleDimensions ?? this.flexibleDimensions, this.growAfterOpen = t.growAfterOpen ?? this.growAfterOpen, this.push = t.push ?? this.push, this.disposeOnNavigation = t.disposeOnNavigation ?? this.disposeOnNavigation, this.usePopover = t.usePopover ?? this.usePopover, this.matchWidth = t.matchWidth ?? this.matchWidth; }
    static \u0275fac = function (e) { return new (e || n); };
    static \u0275dir = g.\u0275\u0275defineDirective({ type: n, selectors: [["", "cdk-connected-overlay", ""], ["", "connected-overlay", ""], ["", "cdkConnectedOverlay", ""]], inputs: { origin: [0, "cdkConnectedOverlayOrigin", "origin"], positions: [0, "cdkConnectedOverlayPositions", "positions"], positionStrategy: [0, "cdkConnectedOverlayPositionStrategy", "positionStrategy"], offsetX: [0, "cdkConnectedOverlayOffsetX", "offsetX"], offsetY: [0, "cdkConnectedOverlayOffsetY", "offsetY"], width: [0, "cdkConnectedOverlayWidth", "width"], height: [0, "cdkConnectedOverlayHeight", "height"], minWidth: [0, "cdkConnectedOverlayMinWidth", "minWidth"], minHeight: [0, "cdkConnectedOverlayMinHeight", "minHeight"], backdropClass: [0, "cdkConnectedOverlayBackdropClass", "backdropClass"], panelClass: [0, "cdkConnectedOverlayPanelClass", "panelClass"], viewportMargin: [0, "cdkConnectedOverlayViewportMargin", "viewportMargin"], scrollStrategy: [0, "cdkConnectedOverlayScrollStrategy", "scrollStrategy"], open: [0, "cdkConnectedOverlayOpen", "open"], disableClose: [0, "cdkConnectedOverlayDisableClose", "disableClose"], transformOriginSelector: [0, "cdkConnectedOverlayTransformOriginOn", "transformOriginSelector"], hasBackdrop: [2, "cdkConnectedOverlayHasBackdrop", "hasBackdrop", D], lockPosition: [2, "cdkConnectedOverlayLockPosition", "lockPosition", D], flexibleDimensions: [2, "cdkConnectedOverlayFlexibleDimensions", "flexibleDimensions", D], growAfterOpen: [2, "cdkConnectedOverlayGrowAfterOpen", "growAfterOpen", D], push: [2, "cdkConnectedOverlayPush", "push", D], disposeOnNavigation: [2, "cdkConnectedOverlayDisposeOnNavigation", "disposeOnNavigation", t => t === "url-change" || t === "pop-state" ? t : D(t)], usePopover: [0, "cdkConnectedOverlayUsePopover", "usePopover"], matchWidth: [2, "cdkConnectedOverlayMatchWidth", "matchWidth", D], _config: [0, "cdkConnectedOverlay", "_config"] }, outputs: { backdropClick: "backdropClick", positionChange: "positionChange", attach: "attach", detach: "detach", overlayKeydown: "overlayKeydown", overlayOutsideClick: "overlayOutsideClick" }, exportAs: ["cdkConnectedOverlay"], features: [g.\u0275\u0275NgOnChangesFeature] });
} return n; })(), $i = (() => { class n {
    static \u0275fac = function (e) { return new (e || n); };
    static \u0275mod = g.\u0275\u0275defineNgModule({ type: n });
    static \u0275inj = g.\u0275\u0275defineInjector({ providers: [Re], imports: [F, Yt, Ot, Ot] });
} return n; })();
import * as De from "@angular/core";
import { inject as qi, RendererFactory2 as Qi } from "@angular/core";
import "@angular/common";
import "rxjs";
import "rxjs/operators";
var To = (() => { class n extends ht {
    _renderer = qi(Qi).createRenderer(null, null);
    _fullScreenEventName;
    _cleanupFullScreenListener;
    ngOnDestroy() { super.ngOnDestroy(), this._cleanupFullScreenListener?.(); }
    _createContainer() { let t = this._getEventName(); super._createContainer(), this._adjustParentForFullscreenChange(), t && (this._cleanupFullScreenListener?.(), this._cleanupFullScreenListener = this._renderer.listen("document", t, () => { this._adjustParentForFullscreenChange(); })); }
    _adjustParentForFullscreenChange() { this._containerElement && (this.getFullscreenElement() || this._document.body).appendChild(this._containerElement); }
    _getEventName() { if (!this._fullScreenEventName) {
        let t = this._document;
        t.fullscreenEnabled ? this._fullScreenEventName = "fullscreenchange" : t.webkitFullscreenEnabled && (this._fullScreenEventName = "webkitfullscreenchange");
    } return this._fullScreenEventName; }
    getFullscreenElement() { let t = this._document; return t.fullscreenElement || t.webkitFullscreenElement || null; }
    static \u0275fac = function (e) { return new (e || n); };
    static \u0275prov = De.\u0275\u0275defineService({ token: n, factory: n.\u0275fac });
} return n; })();
export { it as BlockScrollStrategy, ke as CDK_CONNECTED_OVERLAY_DEFAULT_CONFIG, Ki as CdkConnectedOverlay, Pt as CdkOverlayOrigin, bt as CdkScrollable, nt as CloseScrollStrategy, rt as ConnectedOverlayPositionChange, kt as ConnectionPositionPair, at as FlexibleConnectedPositionStrategy, To as FullscreenOverlayContainer, lt as GlobalPositionStrategy, T as NoopScrollStrategy, Nt as OVERLAY_DEFAULT_CONFIG, Re as Overlay, z as OverlayConfig, ht as OverlayContainer, Se as OverlayKeyboardDispatcher, $i as OverlayModule, be as OverlayOutsideClickDispatcher, Ee as OverlayPositionBuilder, st as OverlayRef, ot as RepositionScrollStrategy, ji as STANDARD_DROPDOWN_ADJACENT_POSITIONS, Ui as STANDARD_DROPDOWN_BELOW_POSITIONS, L as ScrollDispatcher, ye as ScrollStrategyOptions, Dt as ScrollingVisibility, k as ViewportRuler, me as createBlockScrollStrategy, ve as createCloseScrollStrategy, Bt as createFlexibleConnectedPositionStrategy, Oe as createGlobalPositionStrategy, zi as createNoopScrollStrategy, Ft as createOverlayRef, Tt as createRepositionScrollStrategy, Yi as validateHorizontalPosition, Wi as validateVerticalPosition, yi as \u0275\u0275CdkFixedSizeVirtualScroll, vt as \u0275\u0275CdkScrollableModule, Ei as \u0275\u0275CdkVirtualForOf, Oi as \u0275\u0275CdkVirtualScrollViewport, Ri as \u0275\u0275CdkVirtualScrollableElement, ki as \u0275\u0275CdkVirtualScrollableWindow, Ke as \u0275\u0275Dir };
