import { a as W } from "@nf-internal/chunk-QLER3HO2";
import { i as $, l as q, r as K } from "@nf-internal/chunk-PM6XRI7M";
import "@nf-internal/chunk-FVDLKYOC";
import { a as U } from "@nf-internal/chunk-DQ6Z6NC4";
import "@nf-internal/chunk-EPOSXZTE";
import { c as V } from "@nf-internal/chunk-VZX42TFW";
import "@nf-internal/chunk-MQ6KVUBG";
import { b as j, c as Q } from "@nf-internal/chunk-SMAQMSIK";
import { a as ie, b as O } from "@nf-internal/chunk-AWGKBVI5";
import "@nf-internal/chunk-2NFLSA4Y";
import * as s from "@angular/core";
import { InjectionToken as L, inject as l, ElementRef as p, TemplateRef as b, booleanAttribute as C, IterableDiffers as J, ViewContainerRef as T, afterNextRender as E, ChangeDetectorRef as oe, Injector as se, DOCUMENT as ne, EventEmitter as re, HostAttributeToken as ae } from "@angular/core";
import { Subject as k, BehaviorSubject as le, isObservable as ce, of as X, combineLatest as M, animationFrameScheduler as de, asapScheduler as he } from "rxjs";
import { takeUntil as g, auditTime as fe } from "rxjs/operators";
import "@angular/common";
var ue = [[["caption"]], [["colgroup"], ["col"]], "*"], _e = ["caption", "colgroup, col", "*"];
function me(o, a) { o & 1 && s.\u0275\u0275projection(0, 2); }
function we(o, a) { o & 1 && (s.\u0275\u0275elementStart(0, "thead", 0), s.\u0275\u0275elementContainer(1, 1), s.\u0275\u0275elementEnd(), s.\u0275\u0275elementStart(2, "tbody", 0), s.\u0275\u0275elementContainer(3, 2)(4, 3), s.\u0275\u0275elementEnd(), s.\u0275\u0275elementStart(5, "tfoot", 0), s.\u0275\u0275elementContainer(6, 4), s.\u0275\u0275elementEnd()); }
function ye(o, a) { o & 1 && s.\u0275\u0275elementContainer(0, 1)(1, 2)(2, 3)(3, 4); }
function Re(o, a) { if (o & 1 && (s.\u0275\u0275elementStart(0, "th", 3), s.\u0275\u0275text(1), s.\u0275\u0275elementEnd()), o & 2) {
    let e = s.\u0275\u0275nextContext();
    s.\u0275\u0275styleProp("text-align", e.justify), s.\u0275\u0275advance(), s.\u0275\u0275textInterpolate1(" ", e.headerText, " ");
} }
function pe(o, a) { if (o & 1 && (s.\u0275\u0275elementStart(0, "td", 4), s.\u0275\u0275text(1), s.\u0275\u0275elementEnd()), o & 2) {
    let e = a.$implicit, t = s.\u0275\u0275nextContext();
    s.\u0275\u0275styleProp("text-align", t.justify), s.\u0275\u0275advance(), s.\u0275\u0275textInterpolate1(" ", t.dataAccessor(e, t.name), " ");
} }
var R = new L("CDK_TABLE"), Ce = new L("text-column-options"), F = (() => { class o {
    template = l(b);
    static \u0275fac = function (t) { return new (t || o); };
    static \u0275dir = s.\u0275\u0275defineDirective({ type: o, selectors: [["", "cdkCellDef", ""]] });
} return o; })(), I = (() => { class o {
    template = l(b);
    static \u0275fac = function (t) { return new (t || o); };
    static \u0275dir = s.\u0275\u0275defineDirective({ type: o, selectors: [["", "cdkHeaderCellDef", ""]] });
} return o; })(), ge = (() => { class o {
    template = l(b);
    static \u0275fac = function (t) { return new (t || o); };
    static \u0275dir = s.\u0275\u0275defineDirective({ type: o, selectors: [["", "cdkFooterCellDef", ""]] });
} return o; })(), D = (() => { class o {
    _table = l(R, { optional: !0 });
    _hasStickyChanged = !1;
    get name() { return this._name; }
    set name(e) { this._setNameInput(e); }
    _name;
    get sticky() { return this._sticky; }
    set sticky(e) { e !== this._sticky && (this._sticky = e, this._hasStickyChanged = !0); }
    _sticky = !1;
    get stickyEnd() { return this._stickyEnd; }
    set stickyEnd(e) { e !== this._stickyEnd && (this._stickyEnd = e, this._hasStickyChanged = !0); }
    _stickyEnd = !1;
    cell;
    headerCell;
    footerCell;
    cssClassFriendlyName;
    _columnCssClassName;
    hasStickyChanged() { let e = this._hasStickyChanged; return this.resetStickyChanged(), e; }
    resetStickyChanged() { this._hasStickyChanged = !1; }
    _updateColumnCssClassName() { this._columnCssClassName = [`cdk-column-${this.cssClassFriendlyName}`]; }
    _setNameInput(e) { e && (this._name = e, this.cssClassFriendlyName = e.replace(/[^a-z0-9_-]/gi, "-"), this._updateColumnCssClassName()); }
    static \u0275fac = function (t) { return new (t || o); };
    static \u0275dir = s.\u0275\u0275defineDirective({ type: o, selectors: [["", "cdkColumnDef", ""]], contentQueries: function (t, i, n) { if (t & 1 && s.\u0275\u0275contentQuery(n, F, 5)(n, I, 5)(n, ge, 5), t & 2) {
            let r;
            s.\u0275\u0275queryRefresh(r = s.\u0275\u0275loadQuery()) && (i.cell = r.first), s.\u0275\u0275queryRefresh(r = s.\u0275\u0275loadQuery()) && (i.headerCell = r.first), s.\u0275\u0275queryRefresh(r = s.\u0275\u0275loadQuery()) && (i.footerCell = r.first);
        } }, inputs: { name: [0, "cdkColumnDef", "name"], sticky: [2, "sticky", "sticky", C], stickyEnd: [2, "stickyEnd", "stickyEnd", C] } });
} return o; })(), S = class {
    constructor(a, e) { e.nativeElement.classList.add(...a._columnCssClassName); }
}, De = (() => { class o extends S {
    constructor() { super(l(D), l(p)); }
    static \u0275fac = function (t) { return new (t || o); };
    static \u0275dir = s.\u0275\u0275defineDirective({ type: o, selectors: [["cdk-header-cell"], ["th", "cdk-header-cell", ""]], hostAttrs: ["role", "columnheader", 1, "cdk-header-cell"], features: [s.\u0275\u0275InheritDefinitionFeature] });
} return o; })(), Ge = (() => { class o extends S {
    constructor() { let e = l(D), t = l(p); super(e, t); let i = e._table?._getCellRole(); i && t.nativeElement.setAttribute("role", i); }
    static \u0275fac = function (t) { return new (t || o); };
    static \u0275dir = s.\u0275\u0275defineDirective({ type: o, selectors: [["cdk-footer-cell"], ["td", "cdk-footer-cell", ""]], hostAttrs: [1, "cdk-footer-cell"], features: [s.\u0275\u0275InheritDefinitionFeature] });
} return o; })(), ke = (() => { class o extends S {
    constructor() { let e = l(D), t = l(p); super(e, t); let i = e._table?._getCellRole(); i && t.nativeElement.setAttribute("role", i); }
    static \u0275fac = function (t) { return new (t || o); };
    static \u0275dir = s.\u0275\u0275defineDirective({ type: o, selectors: [["cdk-cell"], ["td", "cdk-cell", ""]], hostAttrs: [1, "cdk-cell"], features: [s.\u0275\u0275InheritDefinitionFeature] });
} return o; })(), Je = "<ng-container cdkCellOutlet></ng-container>", H = (() => { class o {
    template = l(b);
    _differs = l(J);
    columns;
    _columnsDiffer;
    ngOnChanges(e) { if (!this._columnsDiffer) {
        let t = e.columns && e.columns.currentValue || [];
        this._columnsDiffer = this._differs.find(t).create(), this._columnsDiffer.diff(t);
    } }
    getColumnsDiff() { return this._columnsDiffer.diff(this.columns); }
    extractCellTemplate(e) { return this instanceof ee ? e.headerCell.template : this instanceof te ? e.footerCell.template : e.cell.template; }
    static \u0275fac = function (t) { return new (t || o); };
    static \u0275dir = s.\u0275\u0275defineDirective({ type: o, features: [s.\u0275\u0275NgOnChangesFeature] });
} return o; })(), ee = (() => { class o extends H {
    _table = l(R, { optional: !0 });
    _hasStickyChanged = !1;
    get sticky() { return this._sticky; }
    set sticky(e) { e !== this._sticky && (this._sticky = e, this._hasStickyChanged = !0); }
    _sticky = !1;
    ngOnChanges(e) { super.ngOnChanges(e); }
    hasStickyChanged() { let e = this._hasStickyChanged; return this.resetStickyChanged(), e; }
    resetStickyChanged() { this._hasStickyChanged = !1; }
    static \u0275fac = (() => { let e; return function (i) { return (e || (e = s.\u0275\u0275getInheritedFactory(o)))(i || o); }; })();
    static \u0275dir = s.\u0275\u0275defineDirective({ type: o, selectors: [["", "cdkHeaderRowDef", ""]], inputs: { columns: [0, "cdkHeaderRowDef", "columns"], sticky: [2, "cdkHeaderRowDefSticky", "sticky", C] }, features: [s.\u0275\u0275InheritDefinitionFeature, s.\u0275\u0275NgOnChangesFeature] });
} return o; })(), te = (() => { class o extends H {
    _table = l(R, { optional: !0 });
    _hasStickyChanged = !1;
    get sticky() { return this._sticky; }
    set sticky(e) { e !== this._sticky && (this._sticky = e, this._hasStickyChanged = !0); }
    _sticky = !1;
    ngOnChanges(e) { super.ngOnChanges(e); }
    hasStickyChanged() { let e = this._hasStickyChanged; return this.resetStickyChanged(), e; }
    resetStickyChanged() { this._hasStickyChanged = !1; }
    static \u0275fac = (() => { let e; return function (i) { return (e || (e = s.\u0275\u0275getInheritedFactory(o)))(i || o); }; })();
    static \u0275dir = s.\u0275\u0275defineDirective({ type: o, selectors: [["", "cdkFooterRowDef", ""]], inputs: { columns: [0, "cdkFooterRowDef", "columns"], sticky: [2, "cdkFooterRowDefSticky", "sticky", C] }, features: [s.\u0275\u0275InheritDefinitionFeature, s.\u0275\u0275NgOnChangesFeature] });
} return o; })(), Se = (() => { class o extends H {
    _table = l(R, { optional: !0 });
    when;
    static \u0275fac = (() => { let e; return function (i) { return (e || (e = s.\u0275\u0275getInheritedFactory(o)))(i || o); }; })();
    static \u0275dir = s.\u0275\u0275defineDirective({ type: o, selectors: [["", "cdkRowDef", ""]], inputs: { columns: [0, "cdkRowDefColumns", "columns"], when: [0, "cdkRowDefWhen", "when"] }, features: [s.\u0275\u0275InheritDefinitionFeature] });
} return o; })(), v = (() => { class o {
    _viewContainer = l(T);
    cells;
    context;
    static mostRecentCellOutlet = null;
    constructor() { o.mostRecentCellOutlet = this; }
    ngOnDestroy() { o.mostRecentCellOutlet === this && (o.mostRecentCellOutlet = null); }
    static \u0275fac = function (t) { return new (t || o); };
    static \u0275dir = s.\u0275\u0275defineDirective({ type: o, selectors: [["", "cdkCellOutlet", ""]] });
} return o; })(), et = (() => { class o {
    static \u0275fac = function (t) { return new (t || o); };
    static \u0275cmp = s.\u0275\u0275defineComponent({ type: o, selectors: [["cdk-header-row"], ["tr", "cdk-header-row", ""]], hostAttrs: ["role", "row", 1, "cdk-header-row"], decls: 1, vars: 0, consts: [["cdkCellOutlet", ""]], template: function (t, i) { t & 1 && s.\u0275\u0275elementContainer(0, 0); }, dependencies: [v], encapsulation: 2, changeDetection: 1 });
} return o; })(), tt = (() => { class o {
    static \u0275fac = function (t) { return new (t || o); };
    static \u0275cmp = s.\u0275\u0275defineComponent({ type: o, selectors: [["cdk-footer-row"], ["tr", "cdk-footer-row", ""]], hostAttrs: ["role", "row", 1, "cdk-footer-row"], decls: 1, vars: 0, consts: [["cdkCellOutlet", ""]], template: function (t, i) { t & 1 && s.\u0275\u0275elementContainer(0, 0); }, dependencies: [v], encapsulation: 2, changeDetection: 1 });
} return o; })(), it = (() => { class o {
    static \u0275fac = function (t) { return new (t || o); };
    static \u0275cmp = s.\u0275\u0275defineComponent({ type: o, selectors: [["cdk-row"], ["tr", "cdk-row", ""]], hostAttrs: ["role", "row", 1, "cdk-row"], decls: 1, vars: 0, consts: [["cdkCellOutlet", ""]], template: function (t, i) { t & 1 && s.\u0275\u0275elementContainer(0, 0); }, dependencies: [v], encapsulation: 2, changeDetection: 1 });
} return o; })(), ve = (() => { class o {
    templateRef = l(b);
    _contentClassNames = ["cdk-no-data-row", "cdk-row"];
    _cellClassNames = ["cdk-cell", "cdk-no-data-cell"];
    _cellSelector = "td, cdk-cell, [cdk-cell], .cdk-cell";
    static \u0275fac = function (t) { return new (t || o); };
    static \u0275dir = s.\u0275\u0275defineDirective({ type: o, selectors: [["ng-template", "cdkNoDataRow", ""]] });
} return o; })(), Y = ["top", "bottom", "left", "right"], A = class {
    _isNativeHtmlTable;
    _stickCellCss;
    _isBrowser;
    _needsPositionStickyOnElement;
    direction;
    _positionListener;
    _tableInjector;
    _elemSizeCache = new WeakMap;
    _resizeObserver = globalThis?.ResizeObserver ? new globalThis.ResizeObserver(a => this._updateCachedSizes(a)) : null;
    _updatedStickyColumnsParamsToReplay = [];
    _stickyColumnsReplayTimeout = null;
    _cachedCellWidths = [];
    _borderCellCss;
    _destroyed = !1;
    constructor(a, e, t = !0, i = !0, n, r, c) { this._isNativeHtmlTable = a, this._stickCellCss = e, this._isBrowser = t, this._needsPositionStickyOnElement = i, this.direction = n, this._positionListener = r, this._tableInjector = c, this._borderCellCss = { top: `${e}-border-elem-top`, bottom: `${e}-border-elem-bottom`, left: `${e}-border-elem-left`, right: `${e}-border-elem-right` }; }
    clearStickyPositioning(a, e) { (e.includes("left") || e.includes("right")) && this._removeFromStickyColumnReplayQueue(a); let t = []; for (let i of a)
        i.nodeType === i.ELEMENT_NODE && t.push(i, ...Array.from(i.children)); E({ write: () => { for (let i of t)
            this._removeStickyStyle(i, e); } }, { injector: this._tableInjector }); }
    updateStickyColumns(a, e, t, i = !0, n = !0) { if (!a.length || !this._isBrowser || !(e.some(y => y) || t.some(y => y))) {
        this._positionListener?.stickyColumnsUpdated({ sizes: [] }), this._positionListener?.stickyEndColumnsUpdated({ sizes: [] });
        return;
    } let r = a[0], c = r.children.length, d = this.direction === "rtl", h = d ? "right" : "left", f = d ? "left" : "right", w = e.lastIndexOf(!0), u = t.indexOf(!0), _, B, z; n && this._updateStickyColumnReplayQueue({ rows: [...a], stickyStartStates: [...e], stickyEndStates: [...t] }), E({ earlyRead: () => { _ = this._getCellWidths(r, i), B = this._getStickyStartColumnPositions(_, e), z = this._getStickyEndColumnPositions(_, t); }, write: () => { for (let y of a)
            for (let m = 0; m < c; m++) {
                let P = y.children[m];
                e[m] && this._addStickyStyle(P, h, B[m], m === w), t[m] && this._addStickyStyle(P, f, z[m], m === u);
            } this._positionListener && _.some(y => !!y) && (this._positionListener.stickyColumnsUpdated({ sizes: w === -1 ? [] : _.slice(0, w + 1).map((y, m) => e[m] ? y : null) }), this._positionListener.stickyEndColumnsUpdated({ sizes: u === -1 ? [] : _.slice(u).map((y, m) => t[m + u] ? y : null).reverse() })); } }, { injector: this._tableInjector }); }
    stickRows(a, e, t) { if (!this._isBrowser)
        return; let i = t === "bottom" ? a.slice().reverse() : a, n = t === "bottom" ? e.slice().reverse() : e, r = [], c = [], d = []; E({ earlyRead: () => { for (let h = 0, f = 0; h < i.length; h++) {
            if (!n[h])
                continue;
            r[h] = f;
            let w = i[h];
            d[h] = this._isNativeHtmlTable ? Array.from(w.children) : [w];
            let u = this._retrieveElementSize(w).height;
            f += u, c[h] = u;
        } }, write: () => { let h = n.lastIndexOf(!0); for (let f = 0; f < i.length; f++) {
            if (!n[f])
                continue;
            let w = r[f], u = f === h;
            for (let _ of d[f])
                this._addStickyStyle(_, t, w, u);
        } t === "top" ? this._positionListener?.stickyHeaderRowsUpdated({ sizes: c, offsets: r, elements: d }) : this._positionListener?.stickyFooterRowsUpdated({ sizes: c, offsets: r, elements: d }); } }, { injector: this._tableInjector }); }
    updateStickyFooterContainer(a, e) { this._isNativeHtmlTable && E({ write: () => { let t = a.querySelector("tfoot"); t && (e.some(i => !i) ? this._removeStickyStyle(t, ["bottom"]) : this._addStickyStyle(t, "bottom", 0, !1)); } }, { injector: this._tableInjector }); }
    destroy() { this._stickyColumnsReplayTimeout && clearTimeout(this._stickyColumnsReplayTimeout), this._resizeObserver?.disconnect(), this._destroyed = !0; }
    _removeStickyStyle(a, e) { if (!a.classList.contains(this._stickCellCss))
        return; for (let i of e)
        a.style[i] = "", a.classList.remove(this._borderCellCss[i]); Y.some(i => e.indexOf(i) === -1 && a.style[i]) ? a.style.zIndex = this._getCalculatedZIndex(a) : (a.style.zIndex = "", this._needsPositionStickyOnElement && (a.style.position = ""), a.classList.remove(this._stickCellCss)); }
    _addStickyStyle(a, e, t, i) { a.classList.add(this._stickCellCss), i && a.classList.add(this._borderCellCss[e]), a.style[e] = `${t}px`, a.style.zIndex = this._getCalculatedZIndex(a), this._needsPositionStickyOnElement && (a.style.cssText += "position: -webkit-sticky; position: sticky; "); }
    _getCalculatedZIndex(a) { let e = { top: 100, bottom: 10, left: 1, right: 1 }, t = 0; for (let i of Y)
        a.style[i] && (t += e[i]); return t ? `${t}` : ""; }
    _getCellWidths(a, e = !0) { if (!e && this._cachedCellWidths.length)
        return this._cachedCellWidths; let t = [], i = a.children; for (let n = 0; n < i.length; n++) {
        let r = i[n];
        t.push(this._retrieveElementSize(r).width);
    } return this._cachedCellWidths = t, t; }
    _getStickyStartColumnPositions(a, e) { let t = [], i = 0; for (let n = 0; n < a.length; n++)
        e[n] && (t[n] = i, i += a[n]); return t; }
    _getStickyEndColumnPositions(a, e) { let t = [], i = 0; for (let n = a.length; n > 0; n--)
        e[n] && (t[n] = i, i += a[n]); return t; }
    _retrieveElementSize(a) { let e = this._elemSizeCache.get(a); if (e)
        return e; let t = a.getBoundingClientRect(), i = { width: t.width, height: t.height }; return this._resizeObserver && (this._elemSizeCache.set(a, i), this._resizeObserver.observe(a, { box: "border-box" })), i; }
    _updateStickyColumnReplayQueue(a) { this._removeFromStickyColumnReplayQueue(a.rows), this._stickyColumnsReplayTimeout || this._updatedStickyColumnsParamsToReplay.push(a); }
    _removeFromStickyColumnReplayQueue(a) { let e = new Set(a); for (let t of this._updatedStickyColumnsParamsToReplay)
        t.rows = t.rows.filter(i => !e.has(i)); this._updatedStickyColumnsParamsToReplay = this._updatedStickyColumnsParamsToReplay.filter(t => !!t.rows.length); }
    _updateCachedSizes(a) { let e = !1; for (let t of a) {
        let i = t.borderBoxSize?.length ? { width: t.borderBoxSize[0].inlineSize, height: t.borderBoxSize[0].blockSize } : { width: t.contentRect.width, height: t.contentRect.height };
        i.width !== this._elemSizeCache.get(t.target)?.width && be(t.target) && (e = !0), this._elemSizeCache.set(t.target, i);
    } e && this._updatedStickyColumnsParamsToReplay.length && (this._stickyColumnsReplayTimeout && clearTimeout(this._stickyColumnsReplayTimeout), this._stickyColumnsReplayTimeout = setTimeout(() => { if (!this._destroyed) {
        for (let t of this._updatedStickyColumnsParamsToReplay)
            this.updateStickyColumns(t.rows, t.stickyStartStates, t.stickyEndStates, !0, !1);
        this._updatedStickyColumnsParamsToReplay = [], this._stickyColumnsReplayTimeout = null;
    } }, 0)); }
};
function be(o) { return ["cdk-cell", "cdk-header-cell", "cdk-footer-cell"].some(a => o.classList.contains(a)); }
function Z(o) { return Error(`Could not find column with id "${o}".`); }
var N = new L("STICKY_POSITIONING_LISTENER"), ot = (() => { class o {
    static \u0275fac = function (t) { return new (t || o); };
    static \u0275dir = s.\u0275\u0275defineDirective({ type: o, selectors: [["cdk-table", "recycleRows", ""], ["table", "cdk-table", "", "recycleRows", ""]] });
} return o; })(), Te = (() => { class o {
    viewContainer = l(T);
    elementRef = l(p);
    constructor() { let e = l(R); e._rowOutlet = this, e._outletAssigned(); }
    static \u0275fac = function (t) { return new (t || o); };
    static \u0275dir = s.\u0275\u0275defineDirective({ type: o, selectors: [["", "rowOutlet", ""]] });
} return o; })(), Oe = (() => { class o {
    viewContainer = l(T);
    elementRef = l(p);
    constructor() { let e = l(R); e._headerRowOutlet = this, e._outletAssigned(); }
    static \u0275fac = function (t) { return new (t || o); };
    static \u0275dir = s.\u0275\u0275defineDirective({ type: o, selectors: [["", "headerRowOutlet", ""]] });
} return o; })(), Ee = (() => { class o {
    viewContainer = l(T);
    elementRef = l(p);
    constructor() { let e = l(R); e._footerRowOutlet = this, e._outletAssigned(); }
    static \u0275fac = function (t) { return new (t || o); };
    static \u0275dir = s.\u0275\u0275defineDirective({ type: o, selectors: [["", "footerRowOutlet", ""]] });
} return o; })(), xe = (() => { class o {
    viewContainer = l(T);
    elementRef = l(p);
    constructor() { let e = l(R); e._noDataRowOutlet = this, e._outletAssigned(); }
    static \u0275fac = function (t) { return new (t || o); };
    static \u0275dir = s.\u0275\u0275defineDirective({ type: o, selectors: [["", "noDataRowOutlet", ""]] });
} return o; })(), Me = (() => {
    class o {
        _differs = l(J);
        _changeDetectorRef = l(oe);
        _elementRef = l(p);
        _dir = l(V, { optional: !0 });
        _platform = l(U);
        _viewRepeater;
        _viewportRuler = l($);
        _injector = l(se);
        _virtualScrollViewport = l(q, { optional: !0, host: !0 });
        _positionListener = l(N, { optional: !0 }) || l(N, { optional: !0, skipSelf: !0 });
        _document = l(ne);
        _data;
        _renderedRange;
        _onDestroy = new k;
        _renderRows;
        _renderChangeSubscription = null;
        _columnDefsByName = new Map;
        _rowDefs;
        _headerRowDefs;
        _footerRowDefs;
        _dataDiffer;
        _defaultRowDef = null;
        _customColumnDefs = new Set;
        _customRowDefs = new Set;
        _customHeaderRowDefs = new Set;
        _customFooterRowDefs = new Set;
        _customNoDataRow = null;
        _headerRowDefChanged = !0;
        _footerRowDefChanged = !0;
        _stickyColumnStylesNeedReset = !0;
        _forceRecalculateCellWidths = !0;
        _cachedRenderRowsMap = new Map;
        _rowDefsByView = new WeakMap;
        _isNativeHtmlTable;
        _stickyStyler;
        stickyCssClass = "cdk-table-sticky";
        needsPositionStickyOnElement = !0;
        _isServer;
        _isShowingNoDataRow = !1;
        _hasAllOutlets = !1;
        _hasInitialized = !1;
        _headerRowStickyUpdates = new k;
        _footerRowStickyUpdates = new k;
        _disableVirtualScrolling = !1;
        _getCellRole() { if (this._cellRoleInternal === void 0) {
            let e = this._elementRef.nativeElement.getAttribute("role");
            return e === "grid" || e === "treegrid" ? "gridcell" : "cell";
        } return this._cellRoleInternal; }
        _cellRoleInternal = void 0;
        get trackBy() { return this._trackByFn; }
        set trackBy(e) { this._trackByFn = e; }
        _trackByFn;
        get dataSource() { return this._dataSource; }
        set dataSource(e) { this._dataSource !== e && (this._switchDataSource(e), this._changeDetectorRef.markForCheck()); }
        _dataSource;
        _dataSourceChanges = new k;
        _dataStream = new k;
        get multiTemplateDataRows() { return this._multiTemplateDataRows; }
        set multiTemplateDataRows(e) { this._multiTemplateDataRows = e, this._rowOutlet && this._rowOutlet.viewContainer.length && (this._forceRenderDataRows(), this.updateStickyColumnStyles()); }
        _multiTemplateDataRows = !1;
        get fixedLayout() { return this._virtualScrollEnabled() ? !0 : this._fixedLayout; }
        set fixedLayout(e) { this._fixedLayout = e, this._forceRecalculateCellWidths = !0, this._stickyColumnStylesNeedReset = !0; }
        _fixedLayout = !1;
        recycleRows = !1;
        contentChanged = new re;
        viewChange = new le({ start: 0, end: Number.MAX_VALUE });
        _rowOutlet;
        _headerRowOutlet;
        _footerRowOutlet;
        _noDataRowOutlet;
        _contentColumnDefs;
        _contentRowDefs;
        _contentHeaderRowDefs;
        _contentFooterRowDefs;
        _noDataRow;
        get renderedRows() { return this._renderRows; }
        constructor() { l(new ae("role"), { optional: !0 }) || this._elementRef.nativeElement.setAttribute("role", "table"), this._isServer = !this._platform.isBrowser, this._isNativeHtmlTable = this._elementRef.nativeElement.nodeName === "TABLE", this._dataDiffer = this._differs.find([]).create((t, i) => this.trackBy ? this.trackBy(i.dataIndex, i.data) : i); }
        ngOnInit() { this._setupStickyStyler(), this._viewportRuler.change().pipe(g(this._onDestroy)).subscribe(() => { this._forceRecalculateCellWidths = !0; }); }
        ngAfterContentInit() { this._viewRepeater = this.recycleRows || this._virtualScrollEnabled() ? new Q : new W, this._virtualScrollEnabled() && this._setupVirtualScrolling(this._virtualScrollViewport), this._hasInitialized = !0; }
        ngAfterContentChecked() { this._canRender() && this._render(); }
        ngOnDestroy() { this._stickyStyler?.destroy(), [this._rowOutlet?.viewContainer, this._headerRowOutlet?.viewContainer, this._footerRowOutlet?.viewContainer, this._cachedRenderRowsMap, this._customColumnDefs, this._customRowDefs, this._customHeaderRowDefs, this._customFooterRowDefs, this._columnDefsByName].forEach(e => { e?.clear(); }), this._headerRowDefs = [], this._footerRowDefs = [], this._defaultRowDef = null, this._headerRowStickyUpdates.complete(), this._footerRowStickyUpdates.complete(), this._onDestroy.next(), this._onDestroy.complete(), O(this.dataSource) && this.dataSource.disconnect(this); }
        renderRows() { this._renderRows = this._getAllRenderRows(); let e = this._dataDiffer.diff(this._renderRows); if (!e) {
            this._updateNoDataRow(), this.contentChanged.next();
            return;
        } let t = this._rowOutlet.viewContainer; this._viewRepeater.applyChanges(e, t, (i, n, r) => this._getEmbeddedViewArgs(i.item, r), i => i.item.data, i => { if (i.operation === j.INSERTED && i.context) {
            this._renderCellTemplateForItem(i.record.item.rowDef, i.context);
            let n = t.get(i.record.currentIndex);
            this._rowDefsByView.set(n, i.record.item.rowDef);
        } }), e.forEachIdentityChange(i => { let n = i.currentIndex, r = t.get(n); if (this._rowDefsByView.get(r) !== i.item.rowDef) {
            t.remove(n);
            let c = this._renderRow(this._rowOutlet, i.item.rowDef, n, { $implicit: i.item.data });
            this._rowDefsByView.set(c, i.item.rowDef);
        }
        else
            r.context.$implicit = i.item.data; }), this._updateRowIndexContext(), this._updateNoDataRow(), this.contentChanged.next(), this.updateStickyColumnStyles(); }
        addColumnDef(e) { this._customColumnDefs.add(e); }
        removeColumnDef(e) { this._customColumnDefs.delete(e); }
        addRowDef(e) { this._customRowDefs.add(e); }
        removeRowDef(e) { this._customRowDefs.delete(e); }
        addHeaderRowDef(e) { this._customHeaderRowDefs.add(e), this._headerRowDefChanged = !0; }
        removeHeaderRowDef(e) { this._customHeaderRowDefs.delete(e), this._headerRowDefChanged = !0; }
        addFooterRowDef(e) { this._customFooterRowDefs.add(e), this._footerRowDefChanged = !0; }
        removeFooterRowDef(e) { this._customFooterRowDefs.delete(e), this._footerRowDefChanged = !0; }
        setNoDataRow(e) { this._customNoDataRow = e; }
        updateStickyHeaderRowStyles() { let e = this._getRenderedRows(this._headerRowOutlet); if (this._isNativeHtmlTable) {
            let i = G(this._headerRowOutlet, "thead");
            i && (i.style.display = e.length ? "" : "none");
        } let t = this._headerRowDefs.map(i => i.sticky); this._stickyStyler.clearStickyPositioning(e, ["top"]), this._stickyStyler.stickRows(e, t, "top"), this._headerRowDefs.forEach(i => i.resetStickyChanged()); }
        updateStickyFooterRowStyles() { let e = this._getRenderedRows(this._footerRowOutlet); if (this._isNativeHtmlTable) {
            let i = G(this._footerRowOutlet, "tfoot");
            i && (i.style.display = e.length ? "" : "none");
        } let t = this._footerRowDefs.map(i => i.sticky); this._stickyStyler.clearStickyPositioning(e, ["bottom"]), this._stickyStyler.stickRows(e, t, "bottom"), this._stickyStyler.updateStickyFooterContainer(this._elementRef.nativeElement, t), this._footerRowDefs.forEach(i => i.resetStickyChanged()); }
        updateStickyColumnStyles() { let e = this._getRenderedRows(this._headerRowOutlet), t = this._getRenderedRows(this._rowOutlet), i = this._getRenderedRows(this._footerRowOutlet); (this._isNativeHtmlTable && !this.fixedLayout || this._stickyColumnStylesNeedReset) && (this._stickyStyler.clearStickyPositioning([...e, ...t, ...i], ["left", "right"]), this._stickyColumnStylesNeedReset = !1), e.forEach((n, r) => { this._addStickyColumnStyles([n], this._headerRowDefs[r]); }), this._rowDefs.forEach(n => { let r = []; for (let c = 0; c < t.length; c++)
            this._renderRows[c].rowDef === n && r.push(t[c]); this._addStickyColumnStyles(r, n); }), i.forEach((n, r) => { this._addStickyColumnStyles([n], this._footerRowDefs[r]); }), Array.from(this._columnDefsByName.values()).forEach(n => n.resetStickyChanged()); }
        stickyColumnsUpdated(e) { this._positionListener?.stickyColumnsUpdated(e); }
        stickyEndColumnsUpdated(e) { this._positionListener?.stickyEndColumnsUpdated(e); }
        stickyHeaderRowsUpdated(e) { this._headerRowStickyUpdates.next(e), this._positionListener?.stickyHeaderRowsUpdated(e); }
        stickyFooterRowsUpdated(e) { this._footerRowStickyUpdates.next(e), this._positionListener?.stickyFooterRowsUpdated(e); }
        _outletAssigned() { !this._hasAllOutlets && this._rowOutlet && this._headerRowOutlet && this._footerRowOutlet && this._noDataRowOutlet && (this._hasAllOutlets = !0, this._canRender() && this._render()); }
        _canRender() { return this._hasAllOutlets && this._hasInitialized; }
        _render() { this._cacheRowDefs(), this._cacheColumnDefs(), !this._headerRowDefs.length && !this._footerRowDefs.length && this._rowDefs.length; let t = this._renderUpdatedColumns() || this._headerRowDefChanged || this._footerRowDefChanged; this._stickyColumnStylesNeedReset = this._stickyColumnStylesNeedReset || t, this._forceRecalculateCellWidths = t, this._headerRowDefChanged && (this._forceRenderHeaderRows(), this._headerRowDefChanged = !1), this._footerRowDefChanged && (this._forceRenderFooterRows(), this._footerRowDefChanged = !1), this.dataSource && this._rowDefs.length > 0 && !this._renderChangeSubscription ? this._observeRenderChanges() : this._stickyColumnStylesNeedReset && this.updateStickyColumnStyles(), this._checkStickyStates(); }
        _getAllRenderRows() { if (!Array.isArray(this._data) || !this._renderedRange)
            return []; let e = [], t = Math.min(this._data.length, this._renderedRange.end), i = this._cachedRenderRowsMap; this._cachedRenderRowsMap = new Map; for (let n = this._renderedRange.start; n < t; n++) {
            let r = this._data[n], c = this._getRenderRowsForData(r, n, i.get(r));
            this._cachedRenderRowsMap.has(r) || this._cachedRenderRowsMap.set(r, new WeakMap);
            for (let d = 0; d < c.length; d++) {
                let h = c[d], f = this._cachedRenderRowsMap.get(h.data);
                f.has(h.rowDef) ? f.get(h.rowDef).push(h) : f.set(h.rowDef, [h]), e.push(h);
            }
        } return e; }
        _getRenderRowsForData(e, t, i) { return this._getRowDefs(e, t).map(r => { let c = i && i.has(r) ? i.get(r) : []; if (c.length) {
            let d = c.shift();
            return d.dataIndex = t, d;
        }
        else
            return { data: e, rowDef: r, dataIndex: t }; }); }
        _cacheColumnDefs() { this._columnDefsByName.clear(), x(this._getOwnDefs(this._contentColumnDefs), this._customColumnDefs).forEach(t => { this._columnDefsByName.has(t.name), this._columnDefsByName.set(t.name, t); }); }
        _cacheRowDefs() { this._headerRowDefs = x(this._getOwnDefs(this._contentHeaderRowDefs), this._customHeaderRowDefs), this._footerRowDefs = x(this._getOwnDefs(this._contentFooterRowDefs), this._customFooterRowDefs), this._rowDefs = x(this._getOwnDefs(this._contentRowDefs), this._customRowDefs); let e = this._rowDefs.filter(t => !t.when); this._defaultRowDef = e[0]; }
        _renderUpdatedColumns() { let e = (r, c) => { let d = !!c.getColumnsDiff(); return r || d; }, t = this._rowDefs.reduce(e, !1); t && this._forceRenderDataRows(); let i = this._headerRowDefs.reduce(e, !1); i && this._forceRenderHeaderRows(); let n = this._footerRowDefs.reduce(e, !1); return n && this._forceRenderFooterRows(), t || i || n; }
        _switchDataSource(e) { this._data = [], O(this.dataSource) && this.dataSource.disconnect(this), this._renderChangeSubscription && (this._renderChangeSubscription.unsubscribe(), this._renderChangeSubscription = null), e || (this._dataDiffer && this._dataDiffer.diff([]), this._rowOutlet && this._rowOutlet.viewContainer.clear()), this._dataSource = e; }
        _observeRenderChanges() { if (!this.dataSource)
            return; let e; O(this.dataSource) ? e = this.dataSource.connect(this) : ce(this.dataSource) ? e = this.dataSource : Array.isArray(this.dataSource) && (e = X(this.dataSource)), this._renderChangeSubscription = M([e, this.viewChange]).pipe(g(this._onDestroy)).subscribe(([t, i]) => { this._data = t || [], this._renderedRange = i, this._dataStream.next(t), this.renderRows(); }); }
        _forceRenderHeaderRows() { this._headerRowOutlet.viewContainer.length > 0 && this._headerRowOutlet.viewContainer.clear(), this._headerRowDefs.forEach((e, t) => this._renderRow(this._headerRowOutlet, e, t)), this.updateStickyHeaderRowStyles(); }
        _forceRenderFooterRows() { this._footerRowOutlet.viewContainer.length > 0 && this._footerRowOutlet.viewContainer.clear(), this._footerRowDefs.forEach((e, t) => this._renderRow(this._footerRowOutlet, e, t)), this.updateStickyFooterRowStyles(); }
        _addStickyColumnStyles(e, t) { let i = Array.from(t?.columns || []).map(c => { let d = this._columnDefsByName.get(c); if (!d)
            throw Z(c); return d; }), n = i.map(c => c.sticky), r = i.map(c => c.stickyEnd); this._stickyStyler.updateStickyColumns(e, n, r, !this.fixedLayout || this._forceRecalculateCellWidths); }
        _getRenderedRows(e) { let t = []; for (let i = 0; i < e.viewContainer.length; i++) {
            let n = e.viewContainer.get(i);
            t.push(n.rootNodes[0]);
        } return t; }
        _getRowDefs(e, t) { if (this._rowDefs.length === 1)
            return [this._rowDefs[0]]; let i = []; if (this.multiTemplateDataRows)
            i = this._rowDefs.filter(n => !n.when || n.when(t, e));
        else {
            let n = this._rowDefs.find(r => r.when && r.when(t, e)) || this._defaultRowDef;
            n && i.push(n);
        } return i.length, i; }
        _getEmbeddedViewArgs(e, t) { let i = e.rowDef, n = { $implicit: e.data }; return { templateRef: i.template, context: n, index: t }; }
        _renderRow(e, t, i, n = {}) { let r = e.viewContainer.createEmbeddedView(t.template, n, i); return this._renderCellTemplateForItem(t, n), r; }
        _renderCellTemplateForItem(e, t) { for (let i of this._getCellTemplates(e))
            v.mostRecentCellOutlet && v.mostRecentCellOutlet._viewContainer.createEmbeddedView(i, t); this._changeDetectorRef.markForCheck(); }
        _updateRowIndexContext() { let e = this._rowOutlet.viewContainer; for (let t = 0, i = e.length; t < i; t++) {
            let r = e.get(t).context;
            r.count = i, r.first = t === 0, r.last = t === i - 1, r.even = t % 2 === 0, r.odd = !r.even, this.multiTemplateDataRows ? (r.dataIndex = this._renderRows[t].dataIndex, r.renderIndex = t) : r.index = this._renderRows[t].dataIndex;
        } }
        _getCellTemplates(e) { return !e || !e.columns ? [] : Array.from(e.columns, t => { let i = this._columnDefsByName.get(t); if (!i)
            throw Z(t); return e.extractCellTemplate(i); }); }
        _forceRenderDataRows() { this._dataDiffer.diff([]), this._rowOutlet.viewContainer.clear(), this.renderRows(); }
        _checkStickyStates() { let e = (t, i) => t || i.hasStickyChanged(); this._headerRowDefs.reduce(e, !1) && this.updateStickyHeaderRowStyles(), this._footerRowDefs.reduce(e, !1) && this.updateStickyFooterRowStyles(), Array.from(this._columnDefsByName.values()).reduce(e, !1) && (this._stickyColumnStylesNeedReset = !0, this.updateStickyColumnStyles()); }
        _setupStickyStyler() { let e = this._dir ? this._dir.value : "ltr", t = this._injector; this._stickyStyler = new A(this._isNativeHtmlTable, this.stickyCssClass, this._platform.isBrowser, this.needsPositionStickyOnElement, e, this, t), (this._dir ? this._dir.change : X()).pipe(g(this._onDestroy)).subscribe(i => { this._stickyStyler.direction = i, this.updateStickyColumnStyles(); }); }
        _setupVirtualScrolling(e) { let t = typeof requestAnimationFrame < "u" ? de : he; this.viewChange.next({ start: 0, end: 0 }), e.renderedRangeStream.pipe(fe(0, t), g(this._onDestroy)).subscribe(this.viewChange), e.attach({ dataStream: this._dataStream, measureRangeSize: (i, n) => this._measureRangeSize(i, n) }), M([e.renderedContentOffset, this._headerRowStickyUpdates]).pipe(g(this._onDestroy)).subscribe(([i, n]) => { if (!(!n.sizes || !n.offsets || !n.elements))
            for (let r = 0; r < n.elements.length; r++) {
                let c = n.elements[r];
                if (c) {
                    let d = n.offsets[r], h = i !== 0 ? Math.max(i - d, d) : -d;
                    for (let f of c)
                        f.style.top = `${-h}px`;
                }
            } }), M([e.renderedContentOffset, this._footerRowStickyUpdates]).pipe(g(this._onDestroy)).subscribe(([i, n]) => { if (!(!n.sizes || !n.offsets || !n.elements))
            for (let r = 0; r < n.elements.length; r++) {
                let c = n.elements[r];
                if (c)
                    for (let d of c)
                        d.style.bottom = `${i + n.offsets[r]}px`;
            } }); }
        _getOwnDefs(e) { return e.filter(t => !t._table || t._table === this); }
        _updateNoDataRow() { let e = this._customNoDataRow || this._noDataRow; if (!e)
            return; let t = this._rowOutlet.viewContainer.length === 0; if (t === this._isShowingNoDataRow)
            return; let i = this._noDataRowOutlet.viewContainer; if (t) {
            let n = i.createEmbeddedView(e.templateRef), r = n.rootNodes[0];
            if (n.rootNodes.length === 1 && r?.nodeType === this._document.ELEMENT_NODE) {
                r.setAttribute("role", "row"), r.classList.add(...e._contentClassNames);
                let c = r.querySelectorAll(e._cellSelector);
                for (let d = 0; d < c.length; d++)
                    c[d].classList.add(...e._cellClassNames);
            }
        }
        else
            i.clear(); this._isShowingNoDataRow = t, this._changeDetectorRef.markForCheck(); }
        _measureRangeSize(e, t) { if (e.start >= e.end || t !== "vertical")
            return 0; let i = this.viewChange.value, n = this._rowOutlet.viewContainer; e.start < i.start || e.end > i.end; let r = e.start - i.start, c = e.end - e.start, d, h; for (let u = 0; u < c; u++) {
            let _ = n.get(u + r);
            if (_ && _.rootNodes.length) {
                d = h = _.rootNodes[0];
                break;
            }
        } for (let u = c - 1; u > -1; u--) {
            let _ = n.get(u + r);
            if (_ && _.rootNodes.length) {
                h = _.rootNodes[_.rootNodes.length - 1];
                break;
            }
        } let f = d?.getBoundingClientRect?.(), w = h?.getBoundingClientRect?.(); return f && w ? w.bottom - f.top : 0; }
        _virtualScrollEnabled() { return !this._disableVirtualScrolling && this._virtualScrollViewport != null; }
        static \u0275fac = function (t) { return new (t || o); };
        static \u0275cmp = s.\u0275\u0275defineComponent({ type: o, selectors: [["cdk-table"], ["table", "cdk-table", ""]], contentQueries: function (t, i, n) { if (t & 1 && s.\u0275\u0275contentQuery(n, ve, 5)(n, D, 5)(n, Se, 5)(n, ee, 5)(n, te, 5), t & 2) {
                let r;
                s.\u0275\u0275queryRefresh(r = s.\u0275\u0275loadQuery()) && (i._noDataRow = r.first), s.\u0275\u0275queryRefresh(r = s.\u0275\u0275loadQuery()) && (i._contentColumnDefs = r), s.\u0275\u0275queryRefresh(r = s.\u0275\u0275loadQuery()) && (i._contentRowDefs = r), s.\u0275\u0275queryRefresh(r = s.\u0275\u0275loadQuery()) && (i._contentHeaderRowDefs = r), s.\u0275\u0275queryRefresh(r = s.\u0275\u0275loadQuery()) && (i._contentFooterRowDefs = r);
            } }, hostAttrs: [1, "cdk-table"], hostVars: 2, hostBindings: function (t, i) { t & 2 && s.\u0275\u0275classProp("cdk-table-fixed-layout", i.fixedLayout); }, inputs: { trackBy: "trackBy", dataSource: "dataSource", multiTemplateDataRows: [2, "multiTemplateDataRows", "multiTemplateDataRows", C], fixedLayout: [2, "fixedLayout", "fixedLayout", C], recycleRows: [2, "recycleRows", "recycleRows", C] }, outputs: { contentChanged: "contentChanged" }, exportAs: ["cdkTable"], features: [s.\u0275\u0275ProvidersFeature([{ provide: R, useExisting: o }, { provide: N, useValue: null }])], ngContentSelectors: _e, decls: 5, vars: 2, consts: [["role", "rowgroup"], ["headerRowOutlet", ""], ["rowOutlet", ""], ["noDataRowOutlet", ""], ["footerRowOutlet", ""]], template: function (t, i) { t & 1 && (s.\u0275\u0275projectionDef(ue), s.\u0275\u0275projection(0), s.\u0275\u0275projection(1, 1), s.\u0275\u0275conditionalCreate(2, me, 1, 0), s.\u0275\u0275conditionalCreate(3, we, 7, 0)(4, ye, 4, 0)), t & 2 && (s.\u0275\u0275advance(2), s.\u0275\u0275conditional(i._isServer ? 2 : -1), s.\u0275\u0275advance(), s.\u0275\u0275conditional(i._isNativeHtmlTable ? 3 : 4)); }, dependencies: [Oe, Te, xe, Ee], styles: [`.cdk-table-fixed-layout {
  table-layout: fixed;
}
`], encapsulation: 2, changeDetection: 1 });
    }
    return o;
})();
function x(o, a) { return o.concat(Array.from(a)); }
function G(o, a) { let e = a.toUpperCase(), t = o.viewContainer.element.nativeElement; for (; t;) {
    let i = t.nodeType === 1 ? t.nodeName : null;
    if (i === e)
        return t;
    if (i === "TABLE")
        break;
    t = t.parentNode;
} return null; }
var st = (() => { class o {
    _table = l(Me, { optional: !0 });
    _options = l(Ce, { optional: !0 });
    get name() { return this._name; }
    set name(e) { this._name = e, this._syncColumnDefName(); }
    _name;
    headerText;
    dataAccessor;
    justify = "start";
    columnDef;
    cell;
    headerCell;
    constructor() { this._options = this._options || {}; }
    ngOnInit() { this._syncColumnDefName(), this.headerText === void 0 && (this.headerText = this._createDefaultHeaderText()), this.dataAccessor || (this.dataAccessor = this._options.defaultDataAccessor || ((e, t) => e[t])), this._table && (this.columnDef.cell = this.cell, this.columnDef.headerCell = this.headerCell, this._table.addColumnDef(this.columnDef)); }
    ngOnDestroy() { this._table && this._table.removeColumnDef(this.columnDef); }
    _createDefaultHeaderText() { let e = this.name; return this._options && this._options.defaultHeaderTextTransform ? this._options.defaultHeaderTextTransform(e) : e[0].toUpperCase() + e.slice(1); }
    _syncColumnDefName() { this.columnDef && (this.columnDef.name = this.name); }
    static \u0275fac = function (t) { return new (t || o); };
    static \u0275cmp = s.\u0275\u0275defineComponent({ type: o, selectors: [["cdk-text-column"]], viewQuery: function (t, i) { if (t & 1 && s.\u0275\u0275viewQuery(D, 7)(F, 7)(I, 7), t & 2) {
            let n;
            s.\u0275\u0275queryRefresh(n = s.\u0275\u0275loadQuery()) && (i.columnDef = n.first), s.\u0275\u0275queryRefresh(n = s.\u0275\u0275loadQuery()) && (i.cell = n.first), s.\u0275\u0275queryRefresh(n = s.\u0275\u0275loadQuery()) && (i.headerCell = n.first);
        } }, inputs: { name: "name", headerText: "headerText", dataAccessor: "dataAccessor", justify: "justify" }, decls: 3, vars: 0, consts: [["cdkColumnDef", ""], ["cdk-header-cell", "", 3, "text-align", 4, "cdkHeaderCellDef"], ["cdk-cell", "", 3, "text-align", 4, "cdkCellDef"], ["cdk-header-cell", ""], ["cdk-cell", ""]], template: function (t, i) { t & 1 && (s.\u0275\u0275elementContainerStart(0, 0), s.\u0275\u0275template(1, Re, 2, 3, "th", 1)(2, pe, 2, 3, "td", 2), s.\u0275\u0275elementContainerEnd()); }, dependencies: [D, I, De, F, ke], encapsulation: 2, changeDetection: 1 });
} return o; })();
var nt = (() => { class o {
    static \u0275fac = function (t) { return new (t || o); };
    static \u0275mod = s.\u0275\u0275defineNgModule({ type: o });
    static \u0275inj = s.\u0275\u0275defineInjector({ imports: [K] });
} return o; })();
export { S as BaseCdkCell, H as BaseRowDef, Je as CDK_ROW_TEMPLATE, R as CDK_TABLE, ke as CdkCell, F as CdkCellDef, v as CdkCellOutlet, D as CdkColumnDef, Ge as CdkFooterCell, ge as CdkFooterCellDef, tt as CdkFooterRow, te as CdkFooterRowDef, De as CdkHeaderCell, I as CdkHeaderCellDef, et as CdkHeaderRow, ee as CdkHeaderRowDef, ve as CdkNoDataRow, ot as CdkRecycleRows, it as CdkRow, Se as CdkRowDef, Me as CdkTable, nt as CdkTableModule, st as CdkTextColumn, Te as DataRowOutlet, ie as DataSource, Ee as FooterRowOutlet, Oe as HeaderRowOutlet, xe as NoDataRowOutlet, N as STICKY_POSITIONING_LISTENER, Ce as TEXT_COLUMN_OPTIONS };
