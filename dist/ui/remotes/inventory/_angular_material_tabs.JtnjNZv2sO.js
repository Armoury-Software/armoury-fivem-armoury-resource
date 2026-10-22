import { e as O, f as v } from "@nf-internal/chunk-TDH6BADM";
import { a as w } from "@nf-internal/chunk-2SOO3RAN";
import { c as g } from "@nf-internal/chunk-L6LZ2NRF";
import "@nf-internal/chunk-2NFLSA4Y";
import * as e from "@angular/core";
import { InjectionToken as p, inject as s, TemplateRef as N, ViewContainerRef as lt, booleanAttribute as d, ElementRef as u, ChangeDetectorRef as A, NgZone as I, Injector as W, Renderer2 as V, EventEmitter as c, afterNextRender as R, numberAttribute as T, QueryList as dt, computed as ct, signal as M, HostAttributeToken as bt } from "@angular/core";
import { CdkPortal as mt, TemplatePortal as ht, CdkPortalOutlet as G } from "@angular/cdk/portal";
import { Subject as C, of as _t, merge as B, EMPTY as pt, Observable as ut, timer as ft, Subscription as _, BehaviorSubject as gt } from "rxjs";
import { _CdkPrivateStyleLoader as $ } from "@angular/cdk/private";
import { FocusKeyManager as vt, _IdGenerator as F, CdkMonitorFocus as yt, FocusMonitor as kt } from "@angular/cdk/a11y";
import { Directionality as q, BidiModule as Tt } from "@angular/cdk/bidi";
import { hasModifierKey as Ct, SPACE as P, ENTER as Z } from "@angular/cdk/keycodes";
import { SharedResizeObserver as xt } from "@angular/cdk/observers/private";
import { Platform as K } from "@angular/cdk/platform";
import { ViewportRuler as It, CdkScrollable as St } from "@angular/cdk/scrolling";
import { debounceTime as wt, takeUntil as h, startWith as y, switchMap as Dt, skip as Nt, filter as Rt } from "rxjs/operators";
import { CdkObserveContent as Y } from "@angular/cdk/observers";
import "@angular/cdk/layout";
import "@angular/cdk/coercion";
var f = ["*"];
function Mt(o, l) { o & 1 && e.\u0275\u0275projection(0); }
var X = ["tabListContainer"], U = ["tabList"], J = ["tabListInner"], tt = ["nextPaginator"], et = ["previousPaginator"], Bt = ["content"];
function Pt(o, l) { }
var Lt = ["tabBodyWrapper"], Et = ["tabHeader"];
function At(o, l) { }
function Ft(o, l) { if (o & 1 && e.\u0275\u0275template(0, At, 0, 0, "ng-template", 12), o & 2) {
    let t = e.\u0275\u0275nextContext().$implicit;
    e.\u0275\u0275property("cdkPortalOutlet", t.templateLabel);
} }
function Ht(o, l) { if (o & 1 && e.\u0275\u0275text(0), o & 2) {
    let t = e.\u0275\u0275nextContext().$implicit;
    e.\u0275\u0275textInterpolate(t.textLabel);
} }
function Ot(o, l) { if (o & 1) {
    let t = e.\u0275\u0275getCurrentView();
    e.\u0275\u0275elementStart(0, "div", 7, 2), e.\u0275\u0275listener("click", function () { let a = e.\u0275\u0275restoreView(t), i = a.$implicit, r = a.$index, b = e.\u0275\u0275nextContext(), m = e.\u0275\u0275reference(1); return e.\u0275\u0275resetView(b._handleClick(i, m, r)); })("cdkFocusChange", function (a) { let i = e.\u0275\u0275restoreView(t).$index, r = e.\u0275\u0275nextContext(); return e.\u0275\u0275resetView(r._tabFocusChanged(a, i)); }), e.\u0275\u0275element(2, "span", 8)(3, "div", 9), e.\u0275\u0275elementStart(4, "span", 10)(5, "span", 11), e.\u0275\u0275conditionalCreate(6, Ft, 1, 1, null, 12)(7, Ht, 1, 1), e.\u0275\u0275elementEnd()()();
} if (o & 2) {
    let t = l.$implicit, n = l.$index, a = e.\u0275\u0275reference(1), i = e.\u0275\u0275nextContext();
    e.\u0275\u0275classMap(t.labelClass), e.\u0275\u0275classProp("mdc-tab--active", i.selectedIndex === n), e.\u0275\u0275property("id", i._getTabLabelId(t, n))("disabled", t.disabled)("fitInkBarToContent", i.fitInkBarToContent), e.\u0275\u0275attribute("tabIndex", i._getTabIndex(n))("aria-posinset", n + 1)("aria-setsize", i._tabs.length)("aria-controls", i._getTabContentId(n))("aria-selected", i.selectedIndex === n)("aria-label", t.ariaLabel || null)("aria-labelledby", !t.ariaLabel && t.ariaLabelledby ? t.ariaLabelledby : null), e.\u0275\u0275advance(3), e.\u0275\u0275property("matRippleTrigger", a)("matRippleDisabled", t.disabled || i.disableRipple), e.\u0275\u0275advance(3), e.\u0275\u0275conditional(t.templateLabel ? 6 : 7);
} }
function zt(o, l) { o & 1 && e.\u0275\u0275projection(0); }
function Qt(o, l) { if (o & 1) {
    let t = e.\u0275\u0275getCurrentView();
    e.\u0275\u0275elementStart(0, "mat-tab-body", 13), e.\u0275\u0275listener("_onCentered", function () { e.\u0275\u0275restoreView(t); let a = e.\u0275\u0275nextContext(); return e.\u0275\u0275resetView(a._removeTabBodyWrapperHeight()); })("_onCentering", function (a) { e.\u0275\u0275restoreView(t); let i = e.\u0275\u0275nextContext(); return e.\u0275\u0275resetView(i._setTabBodyWrapperHeight(a)); })("_beforeCentering", function (a) { e.\u0275\u0275restoreView(t); let i = e.\u0275\u0275nextContext(); return e.\u0275\u0275resetView(i._bodyCentered(a)); }), e.\u0275\u0275elementEnd();
} if (o & 2) {
    let t = l.$implicit, n = l.$index, a = e.\u0275\u0275nextContext();
    e.\u0275\u0275classMap(t.bodyClass), e.\u0275\u0275property("id", a._getTabContentId(n))("content", t.content)("position", t.position)("animationDuration", a._bodyAnimationDuration)("preserveContent", a.preserveContent), e.\u0275\u0275attribute("tabindex", a.contentTabIndex != null && a.selectedIndex === n ? a.contentTabIndex : null)("aria-labelledby", a._getTabLabelId(t, n))("aria-hidden", a.selectedIndex !== n);
} }
var jt = new p("MatTabContent"), Wt = (() => { class o {
    template = s(N);
    static \u0275fac = function (n) { return new (n || o); };
    static \u0275dir = e.\u0275\u0275defineDirective({ type: o, selectors: [["", "matTabContent", ""]], features: [e.\u0275\u0275ProvidersFeature([{ provide: jt, useExisting: o }])] });
} return o; })(), Vt = new p("MatTabLabel"), nt = new p("MAT_TAB"), Gt = (() => { class o extends mt {
    _closestTab = s(nt, { optional: !0 });
    static \u0275fac = (() => { let t; return function (a) { return (t || (t = e.\u0275\u0275getInheritedFactory(o)))(a || o); }; })();
    static \u0275dir = e.\u0275\u0275defineDirective({ type: o, selectors: [["", "mat-tab-label", ""], ["", "matTabLabel", ""]], features: [e.\u0275\u0275ProvidersFeature([{ provide: Vt, useExisting: o }]), e.\u0275\u0275InheritDefinitionFeature] });
} return o; })(), at = new p("MAT_TAB_GROUP"), $t = (() => { class o {
    _viewContainerRef = s(lt);
    _closestTabGroup = s(at, { optional: !0 });
    disabled = !1;
    get templateLabel() { return this._templateLabel; }
    set templateLabel(t) { this._setTemplateLabelInput(t); }
    _templateLabel;
    _explicitContent = void 0;
    _implicitContent;
    textLabel = "";
    ariaLabel;
    ariaLabelledby;
    labelClass;
    bodyClass;
    id = null;
    _contentPortal = null;
    get content() { return this._contentPortal; }
    _stateChanges = new C;
    position = null;
    origin = null;
    isActive = !1;
    constructor() { s($).load(w); }
    ngOnChanges(t) { (Object.hasOwn(t, "textLabel") || Object.hasOwn(t, "disabled")) && this._stateChanges.next(); }
    ngOnDestroy() { this._stateChanges.complete(); }
    ngOnInit() { this._contentPortal = new ht(this._explicitContent || this._implicitContent, this._viewContainerRef); }
    _setTemplateLabelInput(t) { t && t._closestTab === this && (this._templateLabel = t); }
    static \u0275fac = function (n) { return new (n || o); };
    static \u0275cmp = e.\u0275\u0275defineComponent({ type: o, selectors: [["mat-tab"]], contentQueries: function (n, a, i) { if (n & 1 && e.\u0275\u0275contentQuery(i, Gt, 5)(i, Wt, 7, N), n & 2) {
            let r;
            e.\u0275\u0275queryRefresh(r = e.\u0275\u0275loadQuery()) && (a.templateLabel = r.first), e.\u0275\u0275queryRefresh(r = e.\u0275\u0275loadQuery()) && (a._explicitContent = r.first);
        } }, viewQuery: function (n, a) { if (n & 1 && e.\u0275\u0275viewQuery(N, 7), n & 2) {
            let i;
            e.\u0275\u0275queryRefresh(i = e.\u0275\u0275loadQuery()) && (a._implicitContent = i.first);
        } }, hostAttrs: ["hidden", ""], hostVars: 1, hostBindings: function (n, a) { n & 2 && e.\u0275\u0275attribute("id", null); }, inputs: { disabled: [2, "disabled", "disabled", d], textLabel: [0, "label", "textLabel"], ariaLabel: [0, "aria-label", "ariaLabel"], ariaLabelledby: [0, "aria-labelledby", "ariaLabelledby"], labelClass: "labelClass", bodyClass: "bodyClass", id: "id" }, exportAs: ["matTab"], features: [e.\u0275\u0275ProvidersFeature([{ provide: nt, useExisting: o }]), e.\u0275\u0275NgOnChangesFeature], ngContentSelectors: f, decls: 1, vars: 0, template: function (n, a) { n & 1 && (e.\u0275\u0275projectionDef(), e.\u0275\u0275domTemplate(0, Mt, 1, 0, "ng-template")); }, encapsulation: 2, changeDetection: 1 });
} return o; })(), D = "mdc-tab-indicator--active", z = "mdc-tab-indicator--no-transition", x = class {
    _items;
    _currentItem;
    constructor(l) { this._items = l; }
    hide() { this._items.forEach(l => l.deactivateInkBar()), this._currentItem = void 0; }
    alignToElement(l) { let t = this._items.find(a => a.elementRef.nativeElement === l), n = this._currentItem; if (t !== n && (n?.deactivateInkBar(), t)) {
        let a = n?.elementRef.nativeElement.getBoundingClientRect?.();
        t.activateInkBar(a), this._currentItem = t;
    } }
}, it = (() => { class o {
    _elementRef = s(u);
    _inkBarElement = null;
    _inkBarContentElement = null;
    _fitToContent = !1;
    get fitInkBarToContent() { return this._fitToContent; }
    set fitInkBarToContent(t) { this._fitToContent !== t && (this._fitToContent = t, this._inkBarElement && this._appendInkBarElement()); }
    activateInkBar(t) { let n = this._elementRef.nativeElement; if (!t || !n.getBoundingClientRect || !this._inkBarContentElement) {
        n.classList.add(D);
        return;
    } let a = n.getBoundingClientRect(), i = t.width / a.width, r = t.left - a.left; n.classList.add(z), this._inkBarContentElement.style.setProperty("transform", `translateX(${r}px) scaleX(${i})`), n.getBoundingClientRect(), n.classList.remove(z), n.classList.add(D), this._inkBarContentElement.style.setProperty("transform", ""); }
    deactivateInkBar() { this._elementRef.nativeElement.classList.remove(D); }
    ngOnInit() { this._createInkBarElement(); }
    ngOnDestroy() { this._inkBarElement?.remove(), this._inkBarElement = this._inkBarContentElement = null; }
    _createInkBarElement() { let t = this._elementRef.nativeElement.ownerDocument || document, n = this._inkBarElement = t.createElement("span"), a = this._inkBarContentElement = t.createElement("span"); n.className = "mdc-tab-indicator", a.className = "mdc-tab-indicator__content mdc-tab-indicator__content--underline", n.appendChild(this._inkBarContentElement), this._appendInkBarElement(); }
    _appendInkBarElement() { this._inkBarElement; let t = this._fitToContent ? this._elementRef.nativeElement.querySelector(".mdc-tab__content") : this._elementRef.nativeElement; t.appendChild(this._inkBarElement); }
    static \u0275fac = function (n) { return new (n || o); };
    static \u0275dir = e.\u0275\u0275defineDirective({ type: o, inputs: { fitInkBarToContent: [2, "fitInkBarToContent", "fitInkBarToContent", d] } });
} return o; })(), we = new p("MatInkBarPositioner", { providedIn: "root", factory: () => l => ({ left: l ? (l.offsetLeft || 0) + "px" : "0", width: l ? (l.offsetWidth || 0) + "px" : "0" }) }), ot = (() => { class o extends it {
    elementRef = s(u);
    disabled = !1;
    focus() { this.elementRef.nativeElement.focus(); }
    getOffsetLeft() { return this.elementRef.nativeElement.offsetLeft; }
    getOffsetWidth() { return this.elementRef.nativeElement.offsetWidth; }
    static \u0275fac = (() => { let t; return function (a) { return (t || (t = e.\u0275\u0275getInheritedFactory(o)))(a || o); }; })();
    static \u0275dir = e.\u0275\u0275defineDirective({ type: o, selectors: [["", "matTabLabelWrapper", ""]], hostVars: 3, hostBindings: function (n, a) { n & 2 && (e.\u0275\u0275attribute("aria-disabled", !!a.disabled), e.\u0275\u0275classProp("mat-mdc-tab-disabled", a.disabled)); }, inputs: { disabled: [2, "disabled", "disabled", d] }, features: [e.\u0275\u0275InheritDefinitionFeature] });
} return o; })(), Q = { passive: !0 }, qt = 650, Zt = 100;
function k(o) { let l = o + ""; return /^[0-9]+(?:\.[0-9]+)?$/.test(l) ? `${o}ms` : /^[0-9]+(?:\.[0-9]+)?(?:ms|s)$/.test(l) ? l : ""; }
var rt = (() => { class o {
    _elementRef = s(u);
    _changeDetectorRef = s(A);
    _viewportRuler = s(It);
    _dir = s(q, { optional: !0 });
    _ngZone = s(I);
    _platform = s(K);
    _sharedResizeObserver = s(xt);
    _injector = s(W);
    _renderer = s(V);
    _animationsDisabled = g();
    _eventCleanups;
    _scrollDistance = 0;
    _selectedIndexChanged = !1;
    _destroyed = new C;
    _showPaginationControls = !1;
    _disableScrollAfter = !0;
    _disableScrollBefore = !0;
    _tabLabelCount;
    _scrollDistanceChanged = !1;
    _keyManager;
    _currentTextContent;
    _stopScrolling = new C;
    disablePagination = !1;
    get selectedIndex() { return this._selectedIndex; }
    set selectedIndex(t) { let n = isNaN(t) ? 0 : t; this._selectedIndex != n && (this._selectedIndexChanged = !0, this._selectedIndex = n, this._keyManager && this._keyManager.updateActiveItem(n)); }
    _selectedIndex = 0;
    selectFocusedIndex = new c;
    indexFocused = new c;
    constructor() { this._eventCleanups = this._ngZone.runOutsideAngular(() => [this._renderer.listen(this._elementRef.nativeElement, "mouseleave", () => this._stopInterval())]); }
    ngAfterViewInit() { this._eventCleanups.push(this._renderer.listen(this._previousPaginator.nativeElement, "touchstart", () => this._handlePaginatorPress("before"), Q), this._renderer.listen(this._nextPaginator.nativeElement, "touchstart", () => this._handlePaginatorPress("after"), Q)); }
    ngAfterContentInit() { let t = this._dir ? this._dir.change : _t("ltr"), n = this._sharedResizeObserver.observe(this._elementRef.nativeElement).pipe(wt(32), h(this._destroyed)), a = this._viewportRuler.change(150).pipe(h(this._destroyed)), i = () => { this.updatePagination(), this._alignInkBarToSelectedTab(); }; this._keyManager = new vt(this._items).withHorizontalOrientation(this._getLayoutDirection()).withHomeAndEnd().withWrap().skipPredicate(() => !1), this._keyManager.updateActiveItem(Math.max(this._selectedIndex, 0)), R(i, { injector: this._injector }), B(t, a, n, this._items.changes, this._itemsResized()).pipe(h(this._destroyed)).subscribe(() => { this._ngZone.run(() => { Promise.resolve().then(() => { this._scrollDistance = Math.max(0, Math.min(this._getMaxScrollDistance(), this._scrollDistance)), i(); }); }), this._keyManager?.withHorizontalOrientation(this._getLayoutDirection()); }), this._keyManager.change.subscribe(r => { this.indexFocused.emit(r), this._setTabFocus(r); }); }
    _itemsResized() { return typeof ResizeObserver != "function" ? pt : this._items.changes.pipe(y(this._items), Dt(t => new ut(n => this._ngZone.runOutsideAngular(() => { let a = new ResizeObserver(i => n.next(i)); return t.forEach(i => a.observe(i.elementRef.nativeElement)), () => { a.disconnect(); }; }))), Nt(1), Rt(t => t.some(n => n.contentRect.width > 0 && n.contentRect.height > 0))); }
    ngAfterContentChecked() { this._tabLabelCount != this._items.length && (this.updatePagination(), this._tabLabelCount = this._items.length, this._changeDetectorRef.markForCheck()), this._selectedIndexChanged && (this._scrollToLabel(this._selectedIndex), this._checkScrollingControls(), this._alignInkBarToSelectedTab(), this._selectedIndexChanged = !1, this._changeDetectorRef.markForCheck()), this._scrollDistanceChanged && (this._updateTabScrollPosition(), this._scrollDistanceChanged = !1, this._changeDetectorRef.markForCheck()); }
    ngOnDestroy() { this._eventCleanups.forEach(t => t()), this._keyManager?.destroy(), this._destroyed.next(), this._destroyed.complete(), this._stopScrolling.complete(); }
    _handleKeydown(t) { if (!Ct(t))
        switch (t.keyCode) {
            case Z:
            case P:
                if (this.focusIndex !== this.selectedIndex) {
                    let n = this._items.get(this.focusIndex);
                    n && !n.disabled && (this.selectFocusedIndex.emit(this.focusIndex), this._itemSelected(t));
                }
                break;
            default: this._keyManager?.onKeydown(t);
        } }
    _onContentChanges() { let t = this._elementRef.nativeElement.textContent; t !== this._currentTextContent && (this._currentTextContent = t || "", this._ngZone.run(() => { this.updatePagination(), this._alignInkBarToSelectedTab(), this._changeDetectorRef.markForCheck(); })); }
    updatePagination() { this._checkPaginationEnabled(), this._checkScrollingControls(), this._updateTabScrollPosition(); }
    get focusIndex() { return this._keyManager ? this._keyManager.activeItemIndex : 0; }
    set focusIndex(t) { !this._isValidIndex(t) || this.focusIndex === t || !this._keyManager || this._keyManager.setActiveItem(t); }
    _isValidIndex(t) { return this._items ? !!this._items.toArray()[t] : !0; }
    _setTabFocus(t) { if (this._showPaginationControls && this._scrollToLabel(t), this._items && this._items.length) {
        this._items.toArray()[t].focus();
        let n = this._tabListContainer.nativeElement;
        this._getLayoutDirection() == "ltr" ? n.scrollLeft = 0 : n.scrollLeft = n.scrollWidth - n.offsetWidth;
    } }
    _getLayoutDirection() { return this._dir && this._dir.value === "rtl" ? "rtl" : "ltr"; }
    _updateTabScrollPosition() { if (this.disablePagination)
        return; let t = this.scrollDistance, n = this._getLayoutDirection() === "ltr" ? -t : t; this._tabList.nativeElement.style.transform = `translateX(${Math.round(n)}px)`, (this._platform.TRIDENT || this._platform.EDGE) && (this._tabListContainer.nativeElement.scrollLeft = 0); }
    get scrollDistance() { return this._scrollDistance; }
    set scrollDistance(t) { this._scrollTo(t); }
    _scrollHeader(t) { let n = this._tabListContainer.nativeElement.offsetWidth, a = (t == "before" ? -1 : 1) * n / 3; return this._scrollTo(this._scrollDistance + a); }
    _handlePaginatorClick(t) { this._stopInterval(), this._scrollHeader(t); }
    _scrollToLabel(t) { if (this.disablePagination)
        return; let n = this._items ? this._items.toArray()[t] : null; if (!n)
        return; let a = this._tabListContainer.nativeElement.offsetWidth, { offsetLeft: i, offsetWidth: r } = n.elementRef.nativeElement, b, m; this._getLayoutDirection() == "ltr" ? (b = i, m = b + r) : (m = this._tabListInner.nativeElement.offsetWidth - i, b = m - r); let S = this.scrollDistance, H = this.scrollDistance + a; b < S ? this.scrollDistance -= S - b : m > H && (this.scrollDistance += Math.min(m - H, b - S)); }
    _checkPaginationEnabled() { if (this.disablePagination)
        this._showPaginationControls = !1;
    else {
        let t = this._tabListInner.nativeElement.scrollWidth, n = this._elementRef.nativeElement.offsetWidth, a = t - n >= 5;
        a || (this.scrollDistance = 0), a !== this._showPaginationControls && (this._showPaginationControls = a, this._changeDetectorRef.markForCheck());
    } }
    _checkScrollingControls() { this.disablePagination ? this._disableScrollAfter = this._disableScrollBefore = !0 : (this._disableScrollBefore = this.scrollDistance == 0, this._disableScrollAfter = this.scrollDistance == this._getMaxScrollDistance(), this._changeDetectorRef.markForCheck()); }
    _getMaxScrollDistance() { let t = this._tabListInner.nativeElement.scrollWidth, n = this._tabListContainer.nativeElement.offsetWidth; return t - n || 0; }
    _alignInkBarToSelectedTab() { let t = this._items && this._items.length ? this._items.toArray()[this.selectedIndex] : null, n = t ? t.elementRef.nativeElement : null; n ? this._inkBar.alignToElement(n) : this._inkBar.hide(); }
    _stopInterval() { this._stopScrolling.next(); }
    _handlePaginatorPress(t, n) { n && n.button != null && n.button !== 0 || (this._stopInterval(), ft(qt, Zt).pipe(h(B(this._stopScrolling, this._destroyed))).subscribe(() => { let { maxScrollDistance: a, distance: i } = this._scrollHeader(t); (i === 0 || i >= a) && this._stopInterval(); })); }
    _scrollTo(t) { if (this.disablePagination)
        return { maxScrollDistance: 0, distance: 0 }; let n = this._getMaxScrollDistance(); return this._scrollDistance = Math.max(0, Math.min(n, t)), this._scrollDistanceChanged = !0, this._checkScrollingControls(), { maxScrollDistance: n, distance: this._scrollDistance }; }
    static \u0275fac = function (n) { return new (n || o); };
    static \u0275dir = e.\u0275\u0275defineDirective({ type: o, inputs: { disablePagination: [2, "disablePagination", "disablePagination", d], selectedIndex: [2, "selectedIndex", "selectedIndex", T] }, outputs: { selectFocusedIndex: "selectFocusedIndex", indexFocused: "indexFocused" } });
} return o; })(), Kt = (() => {
    class o extends rt {
        _items;
        _tabListContainer;
        _tabList;
        _tabListInner;
        _nextPaginator;
        _previousPaginator;
        _inkBar;
        ariaLabel;
        ariaLabelledby;
        disableRipple = !1;
        ngAfterContentInit() { this._inkBar = new x(this._items), super.ngAfterContentInit(); }
        _itemSelected(t) { t.preventDefault(); }
        static \u0275fac = (() => { let t; return function (a) { return (t || (t = e.\u0275\u0275getInheritedFactory(o)))(a || o); }; })();
        static \u0275cmp = e.\u0275\u0275defineComponent({ type: o, selectors: [["mat-tab-header"]], contentQueries: function (n, a, i) { if (n & 1 && e.\u0275\u0275contentQuery(i, ot, 4), n & 2) {
                let r;
                e.\u0275\u0275queryRefresh(r = e.\u0275\u0275loadQuery()) && (a._items = r);
            } }, viewQuery: function (n, a) { if (n & 1 && e.\u0275\u0275viewQuery(X, 7)(U, 7)(J, 7)(tt, 5)(et, 5), n & 2) {
                let i;
                e.\u0275\u0275queryRefresh(i = e.\u0275\u0275loadQuery()) && (a._tabListContainer = i.first), e.\u0275\u0275queryRefresh(i = e.\u0275\u0275loadQuery()) && (a._tabList = i.first), e.\u0275\u0275queryRefresh(i = e.\u0275\u0275loadQuery()) && (a._tabListInner = i.first), e.\u0275\u0275queryRefresh(i = e.\u0275\u0275loadQuery()) && (a._nextPaginator = i.first), e.\u0275\u0275queryRefresh(i = e.\u0275\u0275loadQuery()) && (a._previousPaginator = i.first);
            } }, hostAttrs: [1, "mat-mdc-tab-header"], hostVars: 4, hostBindings: function (n, a) { n & 2 && e.\u0275\u0275classProp("mat-mdc-tab-header-pagination-controls-enabled", a._showPaginationControls)("mat-mdc-tab-header-rtl", a._getLayoutDirection() == "rtl"); }, inputs: { ariaLabel: [0, "aria-label", "ariaLabel"], ariaLabelledby: [0, "aria-labelledby", "ariaLabelledby"], disableRipple: [2, "disableRipple", "disableRipple", d] }, features: [e.\u0275\u0275InheritDefinitionFeature], ngContentSelectors: f, decls: 13, vars: 10, consts: [["previousPaginator", ""], ["tabListContainer", ""], ["tabList", ""], ["tabListInner", ""], ["nextPaginator", ""], ["mat-ripple", "", 1, "mat-mdc-tab-header-pagination", "mat-mdc-tab-header-pagination-before", 3, "click", "mousedown", "touchend", "matRippleDisabled"], [1, "mat-mdc-tab-header-pagination-chevron"], [1, "mat-mdc-tab-label-container", 3, "keydown"], ["role", "tablist", 1, "mat-mdc-tab-list", 3, "cdkObserveContent"], [1, "mat-mdc-tab-labels"], ["mat-ripple", "", 1, "mat-mdc-tab-header-pagination", "mat-mdc-tab-header-pagination-after", 3, "mousedown", "click", "touchend", "matRippleDisabled"]], template: function (n, a) { n & 1 && (e.\u0275\u0275projectionDef(), e.\u0275\u0275elementStart(0, "div", 5, 0), e.\u0275\u0275listener("click", function () { return a._handlePaginatorClick("before"); })("mousedown", function (r) { return a._handlePaginatorPress("before", r); })("touchend", function () { return a._stopInterval(); }), e.\u0275\u0275element(2, "div", 6), e.\u0275\u0275elementEnd(), e.\u0275\u0275elementStart(3, "div", 7, 1), e.\u0275\u0275listener("keydown", function (r) { return a._handleKeydown(r); }), e.\u0275\u0275elementStart(5, "div", 8, 2), e.\u0275\u0275listener("cdkObserveContent", function () { return a._onContentChanges(); }), e.\u0275\u0275elementStart(7, "div", 9, 3), e.\u0275\u0275projection(9), e.\u0275\u0275elementEnd()()(), e.\u0275\u0275elementStart(10, "div", 10, 4), e.\u0275\u0275listener("mousedown", function (r) { return a._handlePaginatorPress("after", r); })("click", function () { return a._handlePaginatorClick("after"); })("touchend", function () { return a._stopInterval(); }), e.\u0275\u0275element(12, "div", 6), e.\u0275\u0275elementEnd()), n & 2 && (e.\u0275\u0275classProp("mat-mdc-tab-header-pagination-disabled", a._disableScrollBefore), e.\u0275\u0275property("matRippleDisabled", a._disableScrollBefore || a.disableRipple), e.\u0275\u0275advance(3), e.\u0275\u0275classProp("_mat-animation-noopable", a._animationsDisabled), e.\u0275\u0275advance(2), e.\u0275\u0275attribute("aria-label", a.ariaLabel || null)("aria-labelledby", a.ariaLabelledby || null), e.\u0275\u0275advance(5), e.\u0275\u0275classProp("mat-mdc-tab-header-pagination-disabled", a._disableScrollAfter), e.\u0275\u0275property("matRippleDisabled", a._disableScrollAfter || a.disableRipple)); }, dependencies: [v, Y], styles: [`.mat-mdc-tab-header {
  display: flex;
  overflow: hidden;
  position: relative;
  flex-shrink: 0;
}

.mdc-tab-indicator .mdc-tab-indicator__content {
  transition-duration: var(--%NS%mat-tab-header-animation-duration, 250ms);
}

.mat-mdc-tab-header-pagination {
  -webkit-user-select: none;
  user-select: none;
  position: relative;
  display: none;
  justify-content: center;
  align-items: center;
  min-width: 32px;
  cursor: pointer;
  z-index: 2;
  -webkit-tap-highlight-color: transparent;
  touch-action: none;
  box-sizing: content-box;
  outline: 0;
}
.mat-mdc-tab-header-pagination::-moz-focus-inner {
  border: 0;
}
.mat-mdc-tab-header-pagination .mat-ripple-element {
  opacity: 0.12;
  background-color: var(--%NS%mat-tab-inactive-ripple-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab-header-pagination-controls-enabled .mat-mdc-tab-header-pagination {
  display: flex;
}

.mat-mdc-tab-header-pagination-before,
.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-after {
  padding-left: 4px;
}
.mat-mdc-tab-header-pagination-before .mat-mdc-tab-header-pagination-chevron,
.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-after .mat-mdc-tab-header-pagination-chevron {
  transform: rotate(-135deg);
}

.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-before,
.mat-mdc-tab-header-pagination-after {
  padding-right: 4px;
}
.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-before .mat-mdc-tab-header-pagination-chevron,
.mat-mdc-tab-header-pagination-after .mat-mdc-tab-header-pagination-chevron {
  transform: rotate(45deg);
}

.mat-mdc-tab-header-pagination-chevron {
  border-style: solid;
  border-width: 2px 2px 0 0;
  height: 8px;
  width: 8px;
  border-color: var(--%NS%mat-tab-pagination-icon-color, var(--%NS%mat-sys-on-surface));
}

.mat-mdc-tab-header-pagination-disabled {
  box-shadow: none;
  cursor: default;
  pointer-events: none;
}
.mat-mdc-tab-header-pagination-disabled .mat-mdc-tab-header-pagination-chevron {
  opacity: 0.4;
}

.mat-mdc-tab-list {
  flex-grow: 1;
  position: relative;
  transition: transform 500ms cubic-bezier(0.35, 0, 0.25, 1);
}
._mat-animation-noopable .mat-mdc-tab-list {
  transition: none;
}

.mat-mdc-tab-label-container {
  display: flex;
  flex-grow: 1;
  overflow: hidden;
  z-index: 1;
  border-bottom-style: solid;
  border-bottom-width: var(--%NS%mat-tab-divider-height, 1px);
  border-bottom-color: var(--%NS%mat-tab-divider-color, var(--%NS%mat-sys-surface-variant));
}
.mat-mdc-tab-group-inverted-header .mat-mdc-tab-label-container {
  border-bottom: none;
  border-top-style: solid;
  border-top-width: var(--%NS%mat-tab-divider-height, 1px);
  border-top-color: var(--%NS%mat-tab-divider-color, var(--%NS%mat-sys-surface-variant));
}

.mat-mdc-tab-labels {
  display: flex;
  flex: 1 0 auto;
}
[mat-align-tabs=center] > .mat-mdc-tab-header .mat-mdc-tab-labels {
  justify-content: center;
}
[mat-align-tabs=end] > .mat-mdc-tab-header .mat-mdc-tab-labels {
  justify-content: flex-end;
}
.cdk-drop-list .mat-mdc-tab-labels, .mat-mdc-tab-labels.cdk-drop-list {
  min-height: var(--%NS%mat-tab-container-height, 48px);
}

.mat-mdc-tab::before {
  margin: 5px;
}
@media (forced-colors: active) {
  .mat-mdc-tab[aria-disabled=true] {
    color: GrayText;
  }
}
`], encapsulation: 2, changeDetection: 1 });
    }
    return o;
})(), st = new p("MAT_TABS_CONFIG"), j = (() => { class o extends G {
    _host = s(L);
    _ngZone = s(I);
    _centeringSub = _.EMPTY;
    _leavingSub = _.EMPTY;
    ngOnInit() { super.ngOnInit(), this._centeringSub = this._host._beforeCentering.pipe(y(this._host._isCenterPosition())).subscribe(t => { this._host._content && t && !this.hasAttached() && this._ngZone.run(() => { Promise.resolve().then(), this.attach(this._host._content); }); }), this._leavingSub = this._host._afterLeavingCenter.subscribe(() => { this._host.preserveContent || this._ngZone.run(() => this.detach()); }); }
    ngOnDestroy() { super.ngOnDestroy(), this._centeringSub.unsubscribe(), this._leavingSub.unsubscribe(); }
    static \u0275fac = (() => { let t; return function (a) { return (t || (t = e.\u0275\u0275getInheritedFactory(o)))(a || o); }; })();
    static \u0275dir = e.\u0275\u0275defineDirective({ type: o, selectors: [["", "matTabBodyHost", ""]], features: [e.\u0275\u0275InheritDefinitionFeature] });
} return o; })(), L = (() => {
    class o {
        _elementRef = s(u);
        _dir = s(q, { optional: !0 });
        _ngZone = s(I);
        _injector = s(W);
        _renderer = s(V);
        _diAnimationsDisabled = g();
        _eventCleanups;
        _initialized = !1;
        _fallbackTimer;
        _positionIndex;
        _dirChangeSubscription = _.EMPTY;
        _position;
        _previousPosition;
        _onCentering = new c;
        _beforeCentering = new c;
        _afterLeavingCenter = new c;
        _onCentered = new c(!0);
        _portalHost;
        _contentElement;
        _content;
        animationDuration = "500ms";
        preserveContent = !1;
        set position(t) { this._positionIndex = t, this._computePositionAnimationState(); }
        constructor() { if (this._dir) {
            let t = s(A);
            this._dirChangeSubscription = this._dir.change.subscribe(n => { this._computePositionAnimationState(n), t.markForCheck(); });
        } }
        ngOnInit() { this._bindTransitionEvents(), this._position === "center" && (this._setActiveClass(!0), R(() => this._onCentering.emit(this._elementRef.nativeElement.clientHeight), { injector: this._injector })), this._initialized = !0; }
        ngOnDestroy() { clearTimeout(this._fallbackTimer), this._eventCleanups?.forEach(t => t()), this._dirChangeSubscription.unsubscribe(); }
        _bindTransitionEvents() { this._ngZone.runOutsideAngular(() => { let t = this._elementRef.nativeElement, n = a => { a.target === this._contentElement?.nativeElement && (this._elementRef.nativeElement.classList.remove("mat-tab-body-animating"), a.type === "transitionend" && this._transitionDone()); }; this._eventCleanups = [this._renderer.listen(t, "transitionstart", a => { a.target === this._contentElement?.nativeElement && (this._elementRef.nativeElement.classList.add("mat-tab-body-animating"), this._transitionStarted()); }), this._renderer.listen(t, "transitionend", n), this._renderer.listen(t, "transitioncancel", n)]; }); }
        _transitionStarted() { clearTimeout(this._fallbackTimer); let t = this._position === "center"; this._beforeCentering.emit(t), t && this._onCentering.emit(this._elementRef.nativeElement.clientHeight); }
        _transitionDone() { this._position === "center" ? this._onCentered.emit() : this._previousPosition === "center" && this._afterLeavingCenter.emit(); }
        _setActiveClass(t) { this._elementRef.nativeElement.classList.toggle("mat-mdc-tab-body-active", t); }
        _getLayoutDirection() { return this._dir && this._dir.value === "rtl" ? "rtl" : "ltr"; }
        _isCenterPosition() { return this._positionIndex === 0; }
        _computePositionAnimationState(t = this._getLayoutDirection()) { this._previousPosition = this._position, this._positionIndex < 0 ? this._position = t == "ltr" ? "left" : "right" : this._positionIndex > 0 ? this._position = t == "ltr" ? "right" : "left" : this._position = "center", this._animationsDisabled() ? this._simulateTransitionEvents() : this._initialized && (this._position === "center" || this._previousPosition === "center") && (clearTimeout(this._fallbackTimer), this._fallbackTimer = this._ngZone.runOutsideAngular(() => setTimeout(() => this._simulateTransitionEvents(), 100))); }
        _simulateTransitionEvents() { this._transitionStarted(), R(() => this._transitionDone(), { injector: this._injector }); }
        _animationsDisabled() { return this._diAnimationsDisabled || this.animationDuration === "0ms" || this.animationDuration === "0s"; }
        static \u0275fac = function (n) { return new (n || o); };
        static \u0275cmp = e.\u0275\u0275defineComponent({ type: o, selectors: [["mat-tab-body"]], viewQuery: function (n, a) { if (n & 1 && e.\u0275\u0275viewQuery(j, 5)(Bt, 5), n & 2) {
                let i;
                e.\u0275\u0275queryRefresh(i = e.\u0275\u0275loadQuery()) && (a._portalHost = i.first), e.\u0275\u0275queryRefresh(i = e.\u0275\u0275loadQuery()) && (a._contentElement = i.first);
            } }, hostAttrs: [1, "mat-mdc-tab-body"], hostVars: 1, hostBindings: function (n, a) { n & 2 && e.\u0275\u0275attribute("inert", a._position === "center" ? null : ""); }, inputs: { _content: [0, "content", "_content"], animationDuration: "animationDuration", preserveContent: "preserveContent", position: "position" }, outputs: { _onCentering: "_onCentering", _beforeCentering: "_beforeCentering", _onCentered: "_onCentered" }, decls: 3, vars: 6, consts: [["content", ""], ["cdkScrollable", "", 1, "mat-mdc-tab-body-content"], ["matTabBodyHost", ""]], template: function (n, a) { n & 1 && (e.\u0275\u0275elementStart(0, "div", 1, 0), e.\u0275\u0275template(2, Pt, 0, 0, "ng-template", 2), e.\u0275\u0275elementEnd()), n & 2 && e.\u0275\u0275classProp("mat-tab-body-content-left", a._position === "left")("mat-tab-body-content-right", a._position === "right")("mat-tab-body-content-can-animate", a._position === "center" || a._previousPosition === "center"); }, dependencies: [j, St], styles: [`.mat-mdc-tab-body {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  display: block;
  overflow: hidden;
  outline: 0;
  flex-basis: 100%;
}
.mat-mdc-tab-body.mat-mdc-tab-body-active {
  position: relative;
  overflow-x: hidden;
  overflow-y: auto;
  z-index: 1;
  flex-grow: 1;
}
.mat-mdc-tab-group.mat-mdc-tab-group-dynamic-height .mat-mdc-tab-body.mat-mdc-tab-body-active {
  overflow-y: hidden;
}

.mat-mdc-tab-body-content {
  height: 100%;
  overflow: auto;
  transform: none;
  visibility: hidden;
}
.mat-tab-body-animating > .mat-mdc-tab-body-content, .mat-mdc-tab-body-active > .mat-mdc-tab-body-content {
  visibility: visible;
}
.mat-tab-body-animating > .mat-mdc-tab-body-content {
  min-height: 1px;
}
.mat-mdc-tab-group-dynamic-height .mat-mdc-tab-body-content {
  overflow: hidden;
}

.mat-tab-body-content-can-animate {
  transition: transform var(--%NS%mat-tab-body-animation-duration) 1ms cubic-bezier(0.35, 0, 0.25, 1);
}
.mat-mdc-tab-body-wrapper._mat-animation-noopable .mat-tab-body-content-can-animate {
  transition: none;
}

.mat-tab-body-content-left {
  transform: translate3d(-100%, 0, 0);
}

.mat-tab-body-content-right {
  transform: translate3d(100%, 0, 0);
}
`], encapsulation: 2, changeDetection: 1 });
    }
    return o;
})(), De = (() => {
    class o {
        _elementRef = s(u);
        _changeDetectorRef = s(A);
        _ngZone = s(I);
        _tabsSubscription = _.EMPTY;
        _tabLabelSubscription = _.EMPTY;
        _tabBodySubscription = _.EMPTY;
        _diAnimationsDisabled = g();
        _bodyAnimationDuration;
        _headerAnimationDuration;
        _allTabs;
        _tabBodies;
        _tabBodyWrapper;
        _tabHeader;
        _tabs = new dt;
        _indexToSelect = 0;
        _lastFocusedTabIndex = null;
        _tabBodyWrapperHeight = 0;
        color;
        get fitInkBarToContent() { return this._fitInkBarToContent; }
        set fitInkBarToContent(t) { this._fitInkBarToContent = t, this._changeDetectorRef.markForCheck(); }
        _fitInkBarToContent = !1;
        stretchTabs = !0;
        alignTabs = null;
        dynamicHeight = !1;
        get selectedIndex() { return this._selectedIndex; }
        set selectedIndex(t) { this._indexToSelect = isNaN(t) ? null : t; }
        _selectedIndex = null;
        headerPosition = "above";
        get animationDuration() { return this._animationDuration; }
        set animationDuration(t) { this._animationDuration = t, t && typeof t == "object" ? (this._bodyAnimationDuration = k(t.body), this._headerAnimationDuration = k(t.header)) : this._headerAnimationDuration = this._bodyAnimationDuration = k(t); }
        _animationDuration;
        get contentTabIndex() { return this._contentTabIndex; }
        set contentTabIndex(t) { this._contentTabIndex = isNaN(t) ? null : t; }
        _contentTabIndex = null;
        disablePagination = !1;
        disableRipple = !1;
        preserveContent = !1;
        get backgroundColor() { return this._backgroundColor; }
        set backgroundColor(t) { let n = this._elementRef.nativeElement.classList; n.remove("mat-tabs-with-background", `mat-background-${this.backgroundColor}`), t && n.add("mat-tabs-with-background", `mat-background-${t}`), this._backgroundColor = t; }
        _backgroundColor;
        ariaLabel;
        ariaLabelledby;
        selectedIndexChange = new c;
        focusChange = new c;
        animationDone = new c;
        selectedTabChange = new c(!0);
        _groupId;
        _isServer = !s(K).isBrowser;
        constructor() { let t = s(st, { optional: !0 }); this._groupId = s(F).getId("mat-tab-group-"), this.animationDuration = t && t.animationDuration ? t.animationDuration : "500ms", this.disablePagination = t && t.disablePagination != null ? t.disablePagination : !1, this.dynamicHeight = t && t.dynamicHeight != null ? t.dynamicHeight : !1, t?.contentTabIndex != null && (this.contentTabIndex = t.contentTabIndex), this.preserveContent = !!t?.preserveContent, this.fitInkBarToContent = t && t.fitInkBarToContent != null ? t.fitInkBarToContent : !1, this.stretchTabs = t && t.stretchTabs != null ? t.stretchTabs : !0, this.alignTabs = t && t.alignTabs != null ? t.alignTabs : null; }
        ngAfterContentChecked() { let t = this._indexToSelect = this._clampTabIndex(this._indexToSelect); if (this._selectedIndex != t) {
            let n = this._selectedIndex == null;
            if (!n) {
                this.selectedTabChange.emit(this._createChangeEvent(t));
                let a = this._tabBodyWrapper.nativeElement;
                a.style.minHeight = a.clientHeight + "px";
            }
            Promise.resolve().then(() => { this._tabs.forEach((a, i) => a.isActive = i === t), n || (this.selectedIndexChange.emit(t), this._tabBodyWrapper.nativeElement.style.minHeight = ""); });
        } this._tabs.forEach((n, a) => { n.position = a - t, this._selectedIndex != null && n.position == 0 && !n.origin && (n.origin = t - this._selectedIndex); }), this._selectedIndex !== t && (this._selectedIndex = t, this._lastFocusedTabIndex = null, this._changeDetectorRef.markForCheck()); }
        ngAfterContentInit() { this._subscribeToAllTabChanges(), this._subscribeToTabLabels(), this._tabsSubscription = this._tabs.changes.subscribe(() => { let t = this._clampTabIndex(this._indexToSelect); if (t === this._selectedIndex) {
            let n = this._tabs.toArray(), a;
            for (let i = 0; i < n.length; i++)
                if (n[i].isActive) {
                    this._indexToSelect = this._selectedIndex = i, this._lastFocusedTabIndex = null, a = n[i];
                    break;
                }
            !a && n[t] && Promise.resolve().then(() => { n[t].isActive = !0, this.selectedTabChange.emit(this._createChangeEvent(t)); });
        } this._changeDetectorRef.markForCheck(); }); }
        ngAfterViewInit() { this._tabBodySubscription = this._tabBodies.changes.subscribe(() => this._bodyCentered(!0)); }
        _subscribeToAllTabChanges() { this._allTabs.changes.pipe(y(this._allTabs)).subscribe(t => { this._tabs.reset(t.filter(n => n._closestTabGroup === this || !n._closestTabGroup)), this._tabs.notifyOnChanges(); }); }
        ngOnDestroy() { this._tabs.destroy(), this._tabsSubscription.unsubscribe(), this._tabLabelSubscription.unsubscribe(), this._tabBodySubscription.unsubscribe(); }
        realignInkBar() { this._tabHeader && this._tabHeader._alignInkBarToSelectedTab(); }
        updatePagination() { this._tabHeader && this._tabHeader.updatePagination(); }
        focusTab(t) { let n = this._tabHeader; n && (n.focusIndex = t); }
        _focusChanged(t) { this._lastFocusedTabIndex = t, this.focusChange.emit(this._createChangeEvent(t)); }
        _createChangeEvent(t) { let n = new E; return n.index = t, this._tabs && this._tabs.length && (n.tab = this._tabs.toArray()[t]), n; }
        _subscribeToTabLabels() { this._tabLabelSubscription && this._tabLabelSubscription.unsubscribe(), this._tabLabelSubscription = B(...this._tabs.map(t => t._stateChanges)).subscribe(() => this._changeDetectorRef.markForCheck()); }
        _clampTabIndex(t) { return Math.min(this._tabs.length - 1, Math.max(t || 0, 0)); }
        _getTabLabelId(t, n) { return t.id || `${this._groupId}-label-${n}`; }
        _getTabContentId(t) { return `${this._groupId}-content-${t}`; }
        _setTabBodyWrapperHeight(t) { if (!this.dynamicHeight || !this._tabBodyWrapperHeight) {
            this._tabBodyWrapperHeight = t;
            return;
        } let n = this._tabBodyWrapper.nativeElement; n.style.height = this._tabBodyWrapperHeight + "px", this._tabBodyWrapper.nativeElement.offsetHeight && (n.style.height = t + "px"); }
        _removeTabBodyWrapperHeight() { let t = this._tabBodyWrapper.nativeElement; this._tabBodyWrapperHeight = t.clientHeight, t.style.height = "", this._ngZone.run(() => this.animationDone.emit()); }
        _handleClick(t, n, a) { n.focusIndex = a, t.disabled || (this.selectedIndex = a); }
        _getTabIndex(t) { let n = this._lastFocusedTabIndex ?? this.selectedIndex; return t === n ? 0 : -1; }
        _tabFocusChanged(t, n) { t && t !== "mouse" && t !== "touch" && (this._tabHeader.focusIndex = n); }
        _bodyCentered(t) { t && this._tabBodies?.forEach((n, a) => n._setActiveClass(a === this._selectedIndex)); }
        _bodyAnimationsDisabled() { return this._diAnimationsDisabled || this._bodyAnimationDuration === "0" || this._bodyAnimationDuration === "0ms"; }
        static \u0275fac = function (n) { return new (n || o); };
        static \u0275cmp = e.\u0275\u0275defineComponent({ type: o, selectors: [["mat-tab-group"]], contentQueries: function (n, a, i) { if (n & 1 && e.\u0275\u0275contentQuery(i, $t, 5), n & 2) {
                let r;
                e.\u0275\u0275queryRefresh(r = e.\u0275\u0275loadQuery()) && (a._allTabs = r);
            } }, viewQuery: function (n, a) { if (n & 1 && e.\u0275\u0275viewQuery(Lt, 5)(Et, 5)(L, 5), n & 2) {
                let i;
                e.\u0275\u0275queryRefresh(i = e.\u0275\u0275loadQuery()) && (a._tabBodyWrapper = i.first), e.\u0275\u0275queryRefresh(i = e.\u0275\u0275loadQuery()) && (a._tabHeader = i.first), e.\u0275\u0275queryRefresh(i = e.\u0275\u0275loadQuery()) && (a._tabBodies = i);
            } }, hostAttrs: [1, "mat-mdc-tab-group"], hostVars: 13, hostBindings: function (n, a) { n & 2 && (e.\u0275\u0275attribute("mat-align-tabs", a.alignTabs), e.\u0275\u0275classMap("mat-" + (a.color || "primary")), e.\u0275\u0275styleProp("--%NS%mat-tab-body-animation-duration", a._bodyAnimationDuration)("--%NS%mat-tab-header-animation-duration", a._headerAnimationDuration), e.\u0275\u0275classProp("mat-mdc-tab-group-dynamic-height", a.dynamicHeight)("mat-mdc-tab-group-inverted-header", a.headerPosition === "below")("mat-mdc-tab-group-stretch-tabs", a.stretchTabs)); }, inputs: { color: "color", fitInkBarToContent: [2, "fitInkBarToContent", "fitInkBarToContent", d], stretchTabs: [2, "mat-stretch-tabs", "stretchTabs", d], alignTabs: [0, "mat-align-tabs", "alignTabs"], dynamicHeight: [2, "dynamicHeight", "dynamicHeight", d], selectedIndex: [2, "selectedIndex", "selectedIndex", T], headerPosition: "headerPosition", animationDuration: "animationDuration", contentTabIndex: [2, "contentTabIndex", "contentTabIndex", T], disablePagination: [2, "disablePagination", "disablePagination", d], disableRipple: [2, "disableRipple", "disableRipple", d], preserveContent: [2, "preserveContent", "preserveContent", d], backgroundColor: "backgroundColor", ariaLabel: [0, "aria-label", "ariaLabel"], ariaLabelledby: [0, "aria-labelledby", "ariaLabelledby"] }, outputs: { selectedIndexChange: "selectedIndexChange", focusChange: "focusChange", animationDone: "animationDone", selectedTabChange: "selectedTabChange" }, exportAs: ["matTabGroup"], features: [e.\u0275\u0275ProvidersFeature([{ provide: at, useExisting: o }])], ngContentSelectors: f, decls: 9, vars: 8, consts: [["tabHeader", ""], ["tabBodyWrapper", ""], ["tabNode", ""], [3, "indexFocused", "selectFocusedIndex", "selectedIndex", "disableRipple", "disablePagination", "aria-label", "aria-labelledby"], ["role", "tab", "matTabLabelWrapper", "", "cdkMonitorElementFocus", "", 1, "mdc-tab", "mat-mdc-tab", "mat-focus-indicator", 3, "id", "mdc-tab--active", "class", "disabled", "fitInkBarToContent"], [1, "mat-mdc-tab-body-wrapper"], ["role", "tabpanel", 3, "id", "class", "content", "position", "animationDuration", "preserveContent"], ["role", "tab", "matTabLabelWrapper", "", "cdkMonitorElementFocus", "", 1, "mdc-tab", "mat-mdc-tab", "mat-focus-indicator", 3, "click", "cdkFocusChange", "id", "disabled", "fitInkBarToContent"], [1, "mdc-tab__ripple"], ["mat-ripple", "", 1, "mat-mdc-tab-ripple", 3, "matRippleTrigger", "matRippleDisabled"], [1, "mdc-tab__content"], [1, "mdc-tab__text-label"], [3, "cdkPortalOutlet"], ["role", "tabpanel", 3, "_onCentered", "_onCentering", "_beforeCentering", "id", "content", "position", "animationDuration", "preserveContent"]], template: function (n, a) { n & 1 && (e.\u0275\u0275projectionDef(), e.\u0275\u0275elementStart(0, "mat-tab-header", 3, 0), e.\u0275\u0275listener("indexFocused", function (r) { return a._focusChanged(r); })("selectFocusedIndex", function (r) { return a.selectedIndex = r; }), e.\u0275\u0275repeaterCreate(2, Ot, 8, 17, "div", 4, e.\u0275\u0275repeaterTrackByIdentity), e.\u0275\u0275elementEnd(), e.\u0275\u0275conditionalCreate(4, zt, 1, 0), e.\u0275\u0275elementStart(5, "div", 5, 1), e.\u0275\u0275repeaterCreate(7, Qt, 1, 10, "mat-tab-body", 6, e.\u0275\u0275repeaterTrackByIdentity), e.\u0275\u0275elementEnd()), n & 2 && (e.\u0275\u0275property("selectedIndex", a.selectedIndex || 0)("disableRipple", a.disableRipple)("disablePagination", a.disablePagination), e.\u0275\u0275ariaProperty("aria-label", a.ariaLabel)("aria-labelledby", a.ariaLabelledby), e.\u0275\u0275advance(2), e.\u0275\u0275repeater(a._tabs), e.\u0275\u0275advance(2), e.\u0275\u0275conditional(a._isServer ? 4 : -1), e.\u0275\u0275advance(), e.\u0275\u0275classProp("_mat-animation-noopable", a._bodyAnimationsDisabled()), e.\u0275\u0275advance(2), e.\u0275\u0275repeater(a._tabs)); }, dependencies: [Kt, ot, yt, v, G, L], styles: [`.mdc-tab {
  min-width: 90px;
  padding: 0 24px;
  display: flex;
  flex: 1 0 auto;
  justify-content: center;
  box-sizing: border-box;
  border: none;
  outline: none;
  text-align: center;
  white-space: nowrap;
  cursor: pointer;
  z-index: 1;
  touch-action: manipulation;
}

.mdc-tab__content {
  display: flex;
  align-items: center;
  justify-content: center;
  height: inherit;
  pointer-events: none;
}

.mdc-tab__text-label {
  transition: 150ms color linear;
  display: inline-block;
  line-height: 1;
  z-index: 2;
}

.mdc-tab--active .mdc-tab__text-label {
  transition-delay: 100ms;
}

._mat-animation-noopable .mdc-tab__text-label {
  transition: none;
}

.mdc-tab-indicator {
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  justify-content: center;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
}

.mdc-tab-indicator__content {
  transition: var(--%NS%mat-tab-header-animation-duration, 250ms) transform cubic-bezier(0.4, 0, 0.2, 1);
  transform-origin: left;
  opacity: 0;
}

.mdc-tab-indicator__content--underline {
  align-self: flex-end;
  box-sizing: border-box;
  width: 100%;
  border-top-style: solid;
}

.mdc-tab-indicator--active .mdc-tab-indicator__content {
  opacity: 1;
}

._mat-animation-noopable .mdc-tab-indicator__content, .mdc-tab-indicator--no-transition .mdc-tab-indicator__content {
  transition: none;
}

.mat-mdc-tab-ripple.mat-mdc-tab-ripple {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  pointer-events: none;
}

.mat-mdc-tab {
  -webkit-tap-highlight-color: transparent;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-decoration: none;
  background: none;
  height: var(--%NS%mat-tab-container-height, 48px);
  font-family: var(--%NS%mat-tab-label-text-font, var(--%NS%mat-sys-title-small-font));
  font-size: var(--%NS%mat-tab-label-text-size, var(--%NS%mat-sys-title-small-size));
  letter-spacing: var(--%NS%mat-tab-label-text-tracking, var(--%NS%mat-sys-title-small-tracking));
  line-height: var(--%NS%mat-tab-label-text-line-height, var(--%NS%mat-sys-title-small-line-height));
  font-weight: var(--%NS%mat-tab-label-text-weight, var(--%NS%mat-sys-title-small-weight));
}
.mat-mdc-tab.mdc-tab {
  flex-grow: 0;
}
.mat-mdc-tab .mdc-tab-indicator__content--underline {
  border-color: var(--%NS%mat-tab-active-indicator-color, var(--%NS%mat-sys-primary));
  border-top-width: var(--%NS%mat-tab-active-indicator-height, 2px);
  border-radius: var(--%NS%mat-tab-active-indicator-shape, 0);
}
.mat-mdc-tab:hover .mdc-tab__text-label {
  color: var(--%NS%mat-tab-inactive-hover-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab:focus .mdc-tab__text-label {
  color: var(--%NS%mat-tab-inactive-focus-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab.mdc-tab--active .mdc-tab__text-label {
  color: var(--%NS%mat-tab-active-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab.mdc-tab--active .mdc-tab__ripple::before,
.mat-mdc-tab.mdc-tab--active .mat-ripple-element {
  background-color: var(--%NS%mat-tab-active-ripple-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab.mdc-tab--%NS%active:hover .mdc-tab__text-label {
  color: var(--%NS%mat-tab-active-hover-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab.mdc-tab--%NS%active:hover .mdc-tab-indicator__content--underline {
  border-color: var(--%NS%mat-tab-active-hover-indicator-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-tab.mdc-tab--%NS%active:focus .mdc-tab__text-label {
  color: var(--%NS%mat-tab-active-focus-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab.mdc-tab--%NS%active:focus .mdc-tab-indicator__content--underline {
  border-color: var(--%NS%mat-tab-active-focus-indicator-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-tab.mat-mdc-tab-disabled {
  opacity: 0.4;
  pointer-events: none;
}
.mat-mdc-tab.mat-mdc-tab-disabled .mdc-tab__content {
  pointer-events: none;
}
.mat-mdc-tab.mat-mdc-tab-disabled .mdc-tab__ripple::before,
.mat-mdc-tab.mat-mdc-tab-disabled .mat-ripple-element {
  background-color: var(--%NS%mat-tab-disabled-ripple-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-tab .mdc-tab__ripple::before {
  content: "";
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0;
  pointer-events: none;
  background-color: var(--%NS%mat-tab-inactive-ripple-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab .mdc-tab__text-label {
  color: var(--%NS%mat-tab-inactive-label-text-color, var(--%NS%mat-sys-on-surface));
  display: inline-flex;
  align-items: center;
}
.mat-mdc-tab .mdc-tab__content {
  position: relative;
  pointer-events: auto;
}
.mat-mdc-tab:hover .mdc-tab__ripple::before {
  opacity: 0.04;
}
.mat-mdc-tab.cdk-program-focused .mdc-tab__ripple::before, .mat-mdc-tab.cdk-keyboard-focused .mdc-tab__ripple::before {
  opacity: 0.12;
}
.mat-mdc-tab .mat-ripple-element {
  opacity: 0.12;
  background-color: var(--%NS%mat-tab-inactive-ripple-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab-group.mat-mdc-tab-group-stretch-tabs > .mat-mdc-tab-header .mat-mdc-tab {
  flex-grow: 1;
}

.mat-mdc-tab-group {
  display: flex;
  flex-direction: column;
  max-width: 100%;
}
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination {
  background-color: var(--%NS%mat-tab-background-color);
}
.mat-mdc-tab-group.mat-tabs-with-background.mat-primary > .mat-mdc-tab-header .mat-mdc-tab .mdc-tab__text-label {
  color: var(--%NS%mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background.mat-primary > .mat-mdc-tab-header .mdc-tab-indicator__content--underline {
  border-color: var(--%NS%mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background:not(.mat-primary) > .mat-mdc-tab-header .mat-mdc-tab:not(.mdc-tab--active) .mdc-tab__text-label {
  color: var(--%NS%mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background:not(.mat-primary) > .mat-mdc-tab-header .mat-mdc-tab:not(.mdc-tab--active) .mdc-tab-indicator__content--underline {
  border-color: var(--%NS%mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mat-mdc-tab-header-pagination-chevron,
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mat-focus-indicator::before, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-mdc-tab-header-pagination-chevron,
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-focus-indicator::before {
  border-color: var(--%NS%mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mat-ripple-element, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mdc-tab__ripple::before, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-ripple-element, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mdc-tab__ripple::before {
  background-color: var(--%NS%mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mat-mdc-tab-header-pagination-chevron, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-mdc-tab-header-pagination-chevron {
  color: var(--%NS%mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-mdc-tab-group-inverted-header {
  flex-direction: column-reverse;
}
.mat-mdc-tab-group.mat-mdc-tab-group-inverted-header .mdc-tab-indicator__content--underline {
  align-self: flex-start;
}

.mat-mdc-tab-body-wrapper {
  position: relative;
  overflow: hidden;
  display: flex;
  transition: height 500ms cubic-bezier(0.35, 0, 0.25, 1);
}
.mat-mdc-tab-body-wrapper._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
`], encapsulation: 2, changeDetection: 1 });
    }
    return o;
})(), E = class {
    index;
    tab;
}, Yt = (() => {
    class o extends rt {
        _focusedItem = M(null);
        get fitInkBarToContent() { return this._fitInkBarToContent.value; }
        set fitInkBarToContent(t) { this._fitInkBarToContent.next(t), this._changeDetectorRef.markForCheck(); }
        _fitInkBarToContent = new gt(!1);
        stretchTabs = !0;
        animationDuration = "";
        _items;
        get backgroundColor() { return this._backgroundColor; }
        set backgroundColor(t) { let n = this._elementRef.nativeElement.classList; n.remove("mat-tabs-with-background", `mat-background-${this.backgroundColor}`), t && n.add("mat-tabs-with-background", `mat-background-${t}`), this._backgroundColor = t; }
        _backgroundColor;
        get disableRipple() { return this._disableRipple(); }
        set disableRipple(t) { this._disableRipple.set(t); }
        _disableRipple = M(!1);
        color = "primary";
        tabPanel;
        _tabListContainer;
        _tabList;
        _tabListInner;
        _nextPaginator;
        _previousPaginator;
        _inkBar;
        constructor() { let t = s(st, { optional: !0 }); super(), this.disablePagination = t && t.disablePagination != null ? t.disablePagination : !1, this.fitInkBarToContent = t && t.fitInkBarToContent != null ? t.fitInkBarToContent : !1, this.stretchTabs = t && t.stretchTabs != null ? t.stretchTabs : !0; }
        _itemSelected() { }
        ngAfterContentInit() { this._inkBar = new x(this._items), this._items.changes.pipe(y(null), h(this._destroyed)).subscribe(() => this.updateActiveLink()), super.ngAfterContentInit(), this._keyManager.change.pipe(y(null), h(this._destroyed)).subscribe(() => this._focusedItem.set(this._keyManager?.activeItem || null)); }
        ngAfterViewInit() { this.tabPanel, super.ngAfterViewInit(); }
        updateActiveLink() { if (!this._items)
            return; let t = this._items.toArray(); for (let n = 0; n < t.length; n++)
            if (t[n].active) {
                this.selectedIndex = n, this.tabPanel && (this.tabPanel._activeTabId = t[n].id), this._focusedItem.set(t[n]), this._changeDetectorRef.markForCheck();
                return;
            } this.selectedIndex = -1; }
        _getRole() { return this.tabPanel ? "tablist" : this._elementRef.nativeElement.getAttribute("role"); }
        _hasFocus(t) { return this._keyManager?.activeItem === t; }
        static \u0275fac = function (n) { return new (n || o); };
        static \u0275cmp = e.\u0275\u0275defineComponent({ type: o, selectors: [["", "mat-tab-nav-bar", ""]], contentQueries: function (n, a, i) { if (n & 1 && e.\u0275\u0275contentQuery(i, Xt, 5), n & 2) {
                let r;
                e.\u0275\u0275queryRefresh(r = e.\u0275\u0275loadQuery()) && (a._items = r);
            } }, viewQuery: function (n, a) { if (n & 1 && e.\u0275\u0275viewQuery(X, 7)(U, 7)(J, 7)(tt, 5)(et, 5), n & 2) {
                let i;
                e.\u0275\u0275queryRefresh(i = e.\u0275\u0275loadQuery()) && (a._tabListContainer = i.first), e.\u0275\u0275queryRefresh(i = e.\u0275\u0275loadQuery()) && (a._tabList = i.first), e.\u0275\u0275queryRefresh(i = e.\u0275\u0275loadQuery()) && (a._tabListInner = i.first), e.\u0275\u0275queryRefresh(i = e.\u0275\u0275loadQuery()) && (a._nextPaginator = i.first), e.\u0275\u0275queryRefresh(i = e.\u0275\u0275loadQuery()) && (a._previousPaginator = i.first);
            } }, hostAttrs: [1, "mat-mdc-tab-nav-bar", "mat-mdc-tab-header"], hostVars: 17, hostBindings: function (n, a) { n & 2 && (e.\u0275\u0275attribute("role", a._getRole()), e.\u0275\u0275styleProp("--%NS%mat-tab-header-animation-duration", a.animationDuration), e.\u0275\u0275classProp("mat-mdc-tab-header-pagination-controls-enabled", a._showPaginationControls)("mat-mdc-tab-header-rtl", a._getLayoutDirection() == "rtl")("mat-mdc-tab-nav-bar-stretch-tabs", a.stretchTabs)("mat-primary", a.color !== "warn" && a.color !== "accent")("mat-accent", a.color === "accent")("mat-warn", a.color === "warn")("_mat-animation-noopable", a._animationsDisabled)); }, inputs: { fitInkBarToContent: [2, "fitInkBarToContent", "fitInkBarToContent", d], stretchTabs: [2, "mat-stretch-tabs", "stretchTabs", d], animationDuration: [2, "animationDuration", "animationDuration", k], backgroundColor: "backgroundColor", disableRipple: [2, "disableRipple", "disableRipple", d], color: "color", tabPanel: "tabPanel" }, exportAs: ["matTabNavBar", "matTabNav"], features: [e.\u0275\u0275InheritDefinitionFeature], ngContentSelectors: f, decls: 13, vars: 6, consts: [["previousPaginator", ""], ["tabListContainer", ""], ["tabList", ""], ["tabListInner", ""], ["nextPaginator", ""], ["mat-ripple", "", 1, "mat-mdc-tab-header-pagination", "mat-mdc-tab-header-pagination-before", 3, "click", "mousedown", "touchend", "matRippleDisabled"], [1, "mat-mdc-tab-header-pagination-chevron"], [1, "mat-mdc-tab-link-container", 3, "keydown"], [1, "mat-mdc-tab-list", 3, "cdkObserveContent"], [1, "mat-mdc-tab-links"], ["mat-ripple", "", 1, "mat-mdc-tab-header-pagination", "mat-mdc-tab-header-pagination-after", 3, "mousedown", "click", "touchend", "matRippleDisabled"]], template: function (n, a) { n & 1 && (e.\u0275\u0275projectionDef(), e.\u0275\u0275elementStart(0, "div", 5, 0), e.\u0275\u0275listener("click", function () { return a._handlePaginatorClick("before"); })("mousedown", function (r) { return a._handlePaginatorPress("before", r); })("touchend", function () { return a._stopInterval(); }), e.\u0275\u0275element(2, "div", 6), e.\u0275\u0275elementEnd(), e.\u0275\u0275elementStart(3, "div", 7, 1), e.\u0275\u0275listener("keydown", function (r) { return a._handleKeydown(r); }), e.\u0275\u0275elementStart(5, "div", 8, 2), e.\u0275\u0275listener("cdkObserveContent", function () { return a._onContentChanges(); }), e.\u0275\u0275elementStart(7, "div", 9, 3), e.\u0275\u0275projection(9), e.\u0275\u0275elementEnd()()(), e.\u0275\u0275elementStart(10, "div", 10, 4), e.\u0275\u0275listener("mousedown", function (r) { return a._handlePaginatorPress("after", r); })("click", function () { return a._handlePaginatorClick("after"); })("touchend", function () { return a._stopInterval(); }), e.\u0275\u0275element(12, "div", 6), e.\u0275\u0275elementEnd()), n & 2 && (e.\u0275\u0275classProp("mat-mdc-tab-header-pagination-disabled", a._disableScrollBefore), e.\u0275\u0275property("matRippleDisabled", a._disableScrollBefore || a.disableRipple), e.\u0275\u0275advance(10), e.\u0275\u0275classProp("mat-mdc-tab-header-pagination-disabled", a._disableScrollAfter), e.\u0275\u0275property("matRippleDisabled", a._disableScrollAfter || a.disableRipple)); }, dependencies: [v, Y], styles: [`.mdc-tab {
  min-width: 90px;
  padding: 0 24px;
  display: flex;
  flex: 1 0 auto;
  justify-content: center;
  box-sizing: border-box;
  border: none;
  outline: none;
  text-align: center;
  white-space: nowrap;
  cursor: pointer;
  z-index: 1;
  touch-action: manipulation;
}

.mdc-tab__content {
  display: flex;
  align-items: center;
  justify-content: center;
  height: inherit;
  pointer-events: none;
}

.mdc-tab__text-label {
  transition: 150ms color linear;
  display: inline-block;
  line-height: 1;
  z-index: 2;
}

.mdc-tab--active .mdc-tab__text-label {
  transition-delay: 100ms;
}

._mat-animation-noopable .mdc-tab__text-label {
  transition: none;
}

.mdc-tab-indicator {
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  justify-content: center;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
}

.mdc-tab-indicator__content {
  transition: var(--%NS%mat-tab-header-animation-duration, 250ms) transform cubic-bezier(0.4, 0, 0.2, 1);
  transform-origin: left;
  opacity: 0;
}

.mdc-tab-indicator__content--underline {
  align-self: flex-end;
  box-sizing: border-box;
  width: 100%;
  border-top-style: solid;
}

.mdc-tab-indicator--active .mdc-tab-indicator__content {
  opacity: 1;
}

._mat-animation-noopable .mdc-tab-indicator__content, .mdc-tab-indicator--no-transition .mdc-tab-indicator__content {
  transition: none;
}

.mat-mdc-tab-ripple.mat-mdc-tab-ripple {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  pointer-events: none;
}

.mat-mdc-tab-header {
  display: flex;
  overflow: hidden;
  position: relative;
  flex-shrink: 0;
}

.mdc-tab-indicator .mdc-tab-indicator__content {
  transition-duration: var(--%NS%mat-tab-header-animation-duration, 250ms);
}

.mat-mdc-tab-header-pagination {
  -webkit-user-select: none;
  user-select: none;
  position: relative;
  display: none;
  justify-content: center;
  align-items: center;
  min-width: 32px;
  cursor: pointer;
  z-index: 2;
  -webkit-tap-highlight-color: transparent;
  touch-action: none;
  box-sizing: content-box;
  outline: 0;
}
.mat-mdc-tab-header-pagination::-moz-focus-inner {
  border: 0;
}
.mat-mdc-tab-header-pagination .mat-ripple-element {
  opacity: 0.12;
  background-color: var(--%NS%mat-tab-inactive-ripple-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab-header-pagination-controls-enabled .mat-mdc-tab-header-pagination {
  display: flex;
}

.mat-mdc-tab-header-pagination-before,
.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-after {
  padding-left: 4px;
}
.mat-mdc-tab-header-pagination-before .mat-mdc-tab-header-pagination-chevron,
.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-after .mat-mdc-tab-header-pagination-chevron {
  transform: rotate(-135deg);
}

.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-before,
.mat-mdc-tab-header-pagination-after {
  padding-right: 4px;
}
.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-before .mat-mdc-tab-header-pagination-chevron,
.mat-mdc-tab-header-pagination-after .mat-mdc-tab-header-pagination-chevron {
  transform: rotate(45deg);
}

.mat-mdc-tab-header-pagination-chevron {
  border-style: solid;
  border-width: 2px 2px 0 0;
  height: 8px;
  width: 8px;
  border-color: var(--%NS%mat-tab-pagination-icon-color, var(--%NS%mat-sys-on-surface));
}

.mat-mdc-tab-header-pagination-disabled {
  box-shadow: none;
  cursor: default;
  pointer-events: none;
}
.mat-mdc-tab-header-pagination-disabled .mat-mdc-tab-header-pagination-chevron {
  opacity: 0.4;
}

.mat-mdc-tab-list {
  flex-grow: 1;
  position: relative;
  transition: transform 500ms cubic-bezier(0.35, 0, 0.25, 1);
}
._mat-animation-noopable .mat-mdc-tab-list {
  transition: none;
}

.mat-mdc-tab-links {
  display: flex;
  flex: 1 0 auto;
}
[mat-align-tabs=center] > .mat-mdc-tab-link-container .mat-mdc-tab-links {
  justify-content: center;
}
[mat-align-tabs=end] > .mat-mdc-tab-link-container .mat-mdc-tab-links {
  justify-content: flex-end;
}
.cdk-drop-list .mat-mdc-tab-links, .mat-mdc-tab-links.cdk-drop-list {
  min-height: var(--%NS%mat-tab-container-height, 48px);
}

.mat-mdc-tab-link-container {
  display: flex;
  flex-grow: 1;
  overflow: hidden;
  z-index: 1;
  border-bottom-style: solid;
  border-bottom-width: var(--%NS%mat-tab-divider-height, 1px);
  border-bottom-color: var(--%NS%mat-tab-divider-color, var(--%NS%mat-sys-surface-variant));
}

.mat-mdc-tab-nav-bar.mat-tabs-with-background > .mat-mdc-tab-link-container, .mat-mdc-tab-nav-bar.mat-tabs-with-background > .mat-mdc-tab-header-pagination {
  background-color: var(--%NS%mat-tab-background-color);
}
.mat-mdc-tab-nav-bar.mat-tabs-with-background.mat-primary > .mat-mdc-tab-link-container .mat-mdc-tab-link .mdc-tab__text-label {
  color: var(--%NS%mat-tab-foreground-color);
}
.mat-mdc-tab-nav-bar.mat-tabs-with-background.mat-primary > .mat-mdc-tab-link-container .mdc-tab-indicator__content--underline {
  border-color: var(--%NS%mat-tab-foreground-color);
}
.mat-mdc-tab-nav-bar.mat-tabs-with-background:not(.mat-primary) > .mat-mdc-tab-link-container .mat-mdc-tab-link:not(.mdc-tab--active) .mdc-tab__text-label {
  color: var(--%NS%mat-tab-foreground-color);
}
.mat-mdc-tab-nav-bar.mat-tabs-with-background:not(.mat-primary) > .mat-mdc-tab-link-container .mat-mdc-tab-link:not(.mdc-tab--active) .mdc-tab-indicator__content--underline {
  border-color: var(--%NS%mat-tab-foreground-color);
}
.mat-mdc-tab-nav-bar.mat-tabs-with-background > .mat-mdc-tab-link-container .mat-mdc-tab-header-pagination-chevron,
.mat-mdc-tab-nav-bar.mat-tabs-with-background > .mat-mdc-tab-link-container .mat-focus-indicator::before, .mat-mdc-tab-nav-bar.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-mdc-tab-header-pagination-chevron,
.mat-mdc-tab-nav-bar.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-focus-indicator::before {
  border-color: var(--%NS%mat-tab-foreground-color);
}
.mat-mdc-tab-nav-bar.mat-tabs-with-background > .mat-mdc-tab-link-container .mat-ripple-element, .mat-mdc-tab-nav-bar.mat-tabs-with-background > .mat-mdc-tab-link-container .mdc-tab__ripple::before, .mat-mdc-tab-nav-bar.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-ripple-element, .mat-mdc-tab-nav-bar.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mdc-tab__ripple::before {
  background-color: var(--%NS%mat-tab-foreground-color);
}
.mat-mdc-tab-nav-bar.mat-tabs-with-background > .mat-mdc-tab-link-container .mat-mdc-tab-header-pagination-chevron, .mat-mdc-tab-nav-bar.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-mdc-tab-header-pagination-chevron {
  color: var(--%NS%mat-tab-foreground-color);
}
`], encapsulation: 2, changeDetection: 1 });
    }
    return o;
})(), Xt = (() => {
    class o extends it {
        _tabNavBar = s(Yt);
        elementRef = s(u);
        _focusMonitor = s(kt);
        _destroyed = new C;
        _isActive = !1;
        _tabIndex = ct(() => this._tabNavBar._focusedItem() === this ? this.tabIndex : -1);
        get active() { return this._isActive; }
        set active(t) { t !== this._isActive && (this._isActive = t, this._tabNavBar.updateActiveLink()); }
        disabled = !1;
        get disableRipple() { return this._disableRipple(); }
        set disableRipple(t) { this._disableRipple.set(t); }
        _disableRipple = M(!1);
        tabIndex = 0;
        rippleConfig;
        get rippleDisabled() { return this.disabled || this.disableRipple || this._tabNavBar.disableRipple || !!this.rippleConfig.disabled; }
        id = s(F).getId("mat-tab-link-");
        constructor() { super(), s($).load(w); let t = s(O, { optional: !0 }), n = s(new bt("tabindex"), { optional: !0 }); this.rippleConfig = t || {}, this.tabIndex = n == null ? 0 : parseInt(n) || 0, g() && (this.rippleConfig.animation = { enterDuration: 0, exitDuration: 0 }), this._tabNavBar._fitInkBarToContent.pipe(h(this._destroyed)).subscribe(a => { this.fitInkBarToContent = a; }); }
        focus() { this.elementRef.nativeElement.focus(); }
        ngAfterViewInit() { this._focusMonitor.monitor(this.elementRef); }
        ngOnDestroy() { this._destroyed.next(), this._destroyed.complete(), super.ngOnDestroy(), this._focusMonitor.stopMonitoring(this.elementRef); }
        _handleFocus() { this._tabNavBar.focusIndex = this._tabNavBar._items.toArray().indexOf(this); }
        _handleKeydown(t) { (t.keyCode === P || t.keyCode === Z) && (this.disabled ? t.preventDefault() : this._tabNavBar.tabPanel && (t.keyCode === P && t.preventDefault(), this.elementRef.nativeElement.click())); }
        _getAriaControls() { return this._tabNavBar.tabPanel ? this._tabNavBar.tabPanel?.id : this.elementRef.nativeElement.getAttribute("aria-controls"); }
        _getAriaSelected() { return this._tabNavBar.tabPanel ? this.active ? "true" : "false" : this.elementRef.nativeElement.getAttribute("aria-selected"); }
        _getAriaCurrent() { return this.active && !this._tabNavBar.tabPanel ? "page" : null; }
        _getRole() { return this._tabNavBar.tabPanel ? "tab" : this.elementRef.nativeElement.getAttribute("role"); }
        static \u0275fac = function (n) { return new (n || o); };
        static \u0275cmp = e.\u0275\u0275defineComponent({ type: o, selectors: [["", "mat-tab-link", ""], ["", "matTabLink", ""]], hostAttrs: [1, "mdc-tab", "mat-mdc-tab-link", "mat-focus-indicator"], hostVars: 11, hostBindings: function (n, a) { n & 1 && e.\u0275\u0275listener("focus", function () { return a._handleFocus(); })("keydown", function (r) { return a._handleKeydown(r); }), n & 2 && (e.\u0275\u0275attribute("aria-controls", a._getAriaControls())("aria-current", a._getAriaCurrent())("aria-disabled", a.disabled)("aria-selected", a._getAriaSelected())("id", a.id)("tabIndex", a._tabIndex())("role", a._getRole()), e.\u0275\u0275classProp("mat-mdc-tab-disabled", a.disabled)("mdc-tab--active", a.active)); }, inputs: { active: [2, "active", "active", d], disabled: [2, "disabled", "disabled", d], disableRipple: [2, "disableRipple", "disableRipple", d], tabIndex: [2, "tabIndex", "tabIndex", t => t == null ? 0 : T(t)], id: "id" }, exportAs: ["matTabLink"], features: [e.\u0275\u0275InheritDefinitionFeature], ngContentSelectors: f, decls: 5, vars: 2, consts: [[1, "mdc-tab__ripple"], ["mat-ripple", "", 1, "mat-mdc-tab-ripple", 3, "matRippleTrigger", "matRippleDisabled"], [1, "mdc-tab__content"], [1, "mdc-tab__text-label"]], template: function (n, a) { n & 1 && (e.\u0275\u0275projectionDef(), e.\u0275\u0275element(0, "span", 0)(1, "div", 1), e.\u0275\u0275elementStart(2, "span", 2)(3, "span", 3), e.\u0275\u0275projection(4), e.\u0275\u0275elementEnd()()), n & 2 && (e.\u0275\u0275advance(), e.\u0275\u0275property("matRippleTrigger", a.elementRef.nativeElement)("matRippleDisabled", a.rippleDisabled)); }, dependencies: [v], styles: [`.mat-mdc-tab-link {
  -webkit-tap-highlight-color: transparent;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-decoration: none;
  background: none;
  height: var(--%NS%mat-tab-container-height, 48px);
  font-family: var(--%NS%mat-tab-label-text-font, var(--%NS%mat-sys-title-small-font));
  font-size: var(--%NS%mat-tab-label-text-size, var(--%NS%mat-sys-title-small-size));
  letter-spacing: var(--%NS%mat-tab-label-text-tracking, var(--%NS%mat-sys-title-small-tracking));
  line-height: var(--%NS%mat-tab-label-text-line-height, var(--%NS%mat-sys-title-small-line-height));
  font-weight: var(--%NS%mat-tab-label-text-weight, var(--%NS%mat-sys-title-small-weight));
}
.mat-mdc-tab-link.mdc-tab {
  flex-grow: 0;
}
.mat-mdc-tab-link .mdc-tab-indicator__content--underline {
  border-color: var(--%NS%mat-tab-active-indicator-color, var(--%NS%mat-sys-primary));
  border-top-width: var(--%NS%mat-tab-active-indicator-height, 2px);
  border-radius: var(--%NS%mat-tab-active-indicator-shape, 0);
}
.mat-mdc-tab-link:hover .mdc-tab__text-label {
  color: var(--%NS%mat-tab-inactive-hover-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab-link:focus .mdc-tab__text-label {
  color: var(--%NS%mat-tab-inactive-focus-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab-link.mdc-tab--active .mdc-tab__text-label {
  color: var(--%NS%mat-tab-active-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab-link.mdc-tab--active .mdc-tab__ripple::before,
.mat-mdc-tab-link.mdc-tab--active .mat-ripple-element {
  background-color: var(--%NS%mat-tab-active-ripple-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab-link.mdc-tab--%NS%active:hover .mdc-tab__text-label {
  color: var(--%NS%mat-tab-active-hover-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab-link.mdc-tab--%NS%active:hover .mdc-tab-indicator__content--underline {
  border-color: var(--%NS%mat-tab-active-hover-indicator-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-tab-link.mdc-tab--%NS%active:focus .mdc-tab__text-label {
  color: var(--%NS%mat-tab-active-focus-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab-link.mdc-tab--%NS%active:focus .mdc-tab-indicator__content--underline {
  border-color: var(--%NS%mat-tab-active-focus-indicator-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-tab-link.mat-mdc-tab-disabled {
  opacity: 0.4;
  pointer-events: none;
}
.mat-mdc-tab-link.mat-mdc-tab-disabled .mdc-tab__content {
  pointer-events: none;
}
.mat-mdc-tab-link.mat-mdc-tab-disabled .mdc-tab__ripple::before,
.mat-mdc-tab-link.mat-mdc-tab-disabled .mat-ripple-element {
  background-color: var(--%NS%mat-tab-disabled-ripple-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-tab-link .mdc-tab__ripple::before {
  content: "";
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0;
  pointer-events: none;
  background-color: var(--%NS%mat-tab-inactive-ripple-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab-link .mdc-tab__text-label {
  color: var(--%NS%mat-tab-inactive-label-text-color, var(--%NS%mat-sys-on-surface));
  display: inline-flex;
  align-items: center;
}
.mat-mdc-tab-link .mdc-tab__content {
  position: relative;
  pointer-events: auto;
}
.mat-mdc-tab-link:hover .mdc-tab__ripple::before {
  opacity: 0.04;
}
.mat-mdc-tab-link.cdk-program-focused .mdc-tab__ripple::before, .mat-mdc-tab-link.cdk-keyboard-focused .mdc-tab__ripple::before {
  opacity: 0.12;
}
.mat-mdc-tab-link .mat-ripple-element {
  opacity: 0.12;
  background-color: var(--%NS%mat-tab-inactive-ripple-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab-header.mat-mdc-tab-nav-bar-stretch-tabs .mat-mdc-tab-link {
  flex-grow: 1;
}
.mat-mdc-tab-link::before {
  margin: 5px;
}

@media (max-width: 599px) {
  .mat-mdc-tab-link {
    min-width: 72px;
  }
}
`], encapsulation: 2 });
    }
    return o;
})(), Ne = (() => { class o {
    id = s(F).getId("mat-tab-nav-panel-");
    _activeTabId;
    static \u0275fac = function (n) { return new (n || o); };
    static \u0275cmp = e.\u0275\u0275defineComponent({ type: o, selectors: [["mat-tab-nav-panel"]], hostAttrs: ["role", "tabpanel", 1, "mat-mdc-tab-nav-panel"], hostVars: 2, hostBindings: function (n, a) { n & 2 && e.\u0275\u0275attribute("aria-labelledby", a._activeTabId)("id", a.id); }, inputs: { id: "id" }, exportAs: ["matTabNavPanel"], ngContentSelectors: f, decls: 1, vars: 0, template: function (n, a) { n & 1 && (e.\u0275\u0275projectionDef(), e.\u0275\u0275projection(0)); }, encapsulation: 2 });
} return o; })(), Re = (() => { class o {
    static \u0275fac = function (n) { return new (n || o); };
    static \u0275mod = e.\u0275\u0275defineNgModule({ type: o });
    static \u0275inj = e.\u0275\u0275defineInjector({ imports: [Tt] });
} return o; })();
export { nt as MAT_TAB, st as MAT_TABS_CONFIG, jt as MAT_TAB_CONTENT, at as MAT_TAB_GROUP, Vt as MAT_TAB_LABEL, x as MatInkBar, rt as MatPaginatedTabHeader, $t as MatTab, L as MatTabBody, j as MatTabBodyPortal, E as MatTabChangeEvent, Wt as MatTabContent, De as MatTabGroup, Kt as MatTabHeader, Gt as MatTabLabel, ot as MatTabLabelWrapper, Xt as MatTabLink, Yt as MatTabNav, Ne as MatTabNavPanel, Re as MatTabsModule, we as _MAT_INK_BAR_POSITIONER };
