import { c as k } from "@nf-internal/chunk-L6LZ2NRF";
import "@nf-internal/chunk-2NFLSA4Y";
import { FocusTrapFactory as j, FocusMonitor as z, InteractivityChecker as O } from "@angular/cdk/a11y";
import { Directionality as Q, BidiModule as W } from "@angular/cdk/bidi";
import { coerceBooleanProperty as l, coerceNumberProperty as x } from "@angular/cdk/coercion";
import { ESCAPE as G, hasModifierKey as Z } from "@angular/cdk/keycodes";
import { Platform as v } from "@angular/cdk/platform";
import { CdkScrollable as m, ViewportRuler as H, CdkScrollableModule as D } from "@angular/cdk/scrolling";
import * as t from "@angular/core";
import { InjectionToken as B, inject as a, ElementRef as b, NgZone as y, Renderer2 as L, DOCUMENT as q, signal as U, EventEmitter as f, Injector as T, ChangeDetectorRef as C, afterNextRender as A, QueryList as K } from "@angular/core";
import { Subject as c, merge as $ } from "rxjs";
import { filter as p, map as M, mapTo as N, takeUntil as d, take as I, startWith as E, debounceTime as J, delay as X } from "rxjs/operators";
import "@angular/cdk/layout";
var u = ["*"], Y = ["content"], R = [[["mat-drawer"], ["mat-sidenav"]], [["mat-drawer-content"], ["mat-sidenav-content"]], "*"], P = ["mat-drawer, mat-sidenav", "mat-drawer-content, mat-sidenav-content", "*"];
function ee(i, _) { if (i & 1) {
    let e = t.\u0275\u0275getCurrentView();
    t.\u0275\u0275elementStart(0, "div", 1), t.\u0275\u0275listener("click", function () { t.\u0275\u0275restoreView(e); let r = t.\u0275\u0275nextContext(); return t.\u0275\u0275resetView(r._onBackdropClicked()); }), t.\u0275\u0275elementEnd();
} if (i & 2) {
    let e = t.\u0275\u0275nextContext();
    t.\u0275\u0275classProp("mat-drawer-shown", e._isShowingBackdrop());
} }
function te(i, _) { i & 1 && (t.\u0275\u0275elementStart(0, "mat-drawer-content"), t.\u0275\u0275projection(1, 2), t.\u0275\u0275elementEnd()); }
function ne(i, _) { if (i & 1) {
    let e = t.\u0275\u0275getCurrentView();
    t.\u0275\u0275elementStart(0, "div", 1), t.\u0275\u0275listener("click", function () { t.\u0275\u0275restoreView(e); let r = t.\u0275\u0275nextContext(); return t.\u0275\u0275resetView(r._onBackdropClicked()); }), t.\u0275\u0275elementEnd();
} if (i & 2) {
    let e = t.\u0275\u0275nextContext();
    t.\u0275\u0275classProp("mat-drawer-shown", e._isShowingBackdrop());
} }
function re(i, _) { i & 1 && (t.\u0275\u0275elementStart(0, "mat-sidenav-content"), t.\u0275\u0275projection(1, 2), t.\u0275\u0275elementEnd()); }
var ie = `.mat-drawer-container {
  position: relative;
  z-index: 1;
  color: var(--%NS%mat-sidenav-content-text-color, var(--%NS%mat-sys-on-background));
  background-color: var(--%NS%mat-sidenav-content-background-color, var(--%NS%mat-sys-background));
  box-sizing: border-box;
  display: block;
  overflow: hidden;
}
.mat-drawer-container[fullscreen] {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
}
.mat-drawer-container[fullscreen].mat-drawer-container-has-open {
  overflow: hidden;
}
.mat-drawer-container.mat-drawer-container-explicit-backdrop .mat-drawer-side {
  z-index: 3;
}
.mat-drawer-container.ng-animate-disabled .mat-drawer-backdrop,
.mat-drawer-container.ng-animate-disabled .mat-drawer-content, .ng-animate-disabled .mat-drawer-container .mat-drawer-backdrop,
.ng-animate-disabled .mat-drawer-container .mat-drawer-content {
  transition: none;
}

.mat-drawer-backdrop {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  display: block;
  z-index: 3;
  visibility: hidden;
}
.mat-drawer-backdrop.mat-drawer-shown {
  visibility: visible;
  background-color: var(--%NS%mat-sidenav-scrim-color, color-mix(in srgb, var(--%NS%mat-sys-neutral-variant20) 40%, transparent));
}
.mat-drawer-transition .mat-drawer-backdrop {
  transition-duration: 400ms;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-property: background-color, visibility;
}
@media (forced-colors: active) {
  .mat-drawer-backdrop {
    opacity: 0.5;
  }
}

.mat-drawer-content {
  position: relative;
  z-index: 1;
  display: block;
  height: 100%;
  overflow: auto;
}
.mat-drawer-content.mat-drawer-content-hidden {
  opacity: 0;
}
.mat-drawer-transition .mat-drawer-content {
  transition-duration: 400ms;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-property: transform, margin-left, margin-right;
}

.mat-drawer {
  position: relative;
  z-index: 4;
  color: var(--%NS%mat-sidenav-container-text-color, var(--%NS%mat-sys-on-surface-variant));
  box-shadow: var(--%NS%mat-sidenav-container-elevation-shadow, none);
  background-color: var(--%NS%mat-sidenav-container-background-color, var(--%NS%mat-sys-surface));
  border-top-right-radius: var(--%NS%mat-sidenav-container-shape, var(--%NS%mat-sys-corner-large));
  border-bottom-right-radius: var(--%NS%mat-sidenav-container-shape, var(--%NS%mat-sys-corner-large));
  width: var(--%NS%mat-sidenav-container-width, 360px);
  display: block;
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: 3;
  outline: 0;
  box-sizing: border-box;
  overflow-y: auto;
  transform: translate3d(-100%, 0, 0);
}
@media (forced-colors: active) {
  .mat-drawer, [dir=rtl] .mat-drawer.mat-drawer-end {
    border-right: solid 1px currentColor;
  }
}
@media (forced-colors: active) {
  [dir=rtl] .mat-drawer, .mat-drawer.mat-drawer-end {
    border-left: solid 1px currentColor;
    border-right: none;
  }
}
.mat-drawer.mat-drawer-side {
  z-index: 2;
}
.mat-drawer.mat-drawer-end {
  right: 0;
  transform: translate3d(100%, 0, 0);
  border-top-left-radius: var(--%NS%mat-sidenav-container-shape, var(--%NS%mat-sys-corner-large));
  border-bottom-left-radius: var(--%NS%mat-sidenav-container-shape, var(--%NS%mat-sys-corner-large));
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
[dir=rtl] .mat-drawer {
  border-top-left-radius: var(--%NS%mat-sidenav-container-shape, var(--%NS%mat-sys-corner-large));
  border-bottom-left-radius: var(--%NS%mat-sidenav-container-shape, var(--%NS%mat-sys-corner-large));
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  transform: translate3d(100%, 0, 0);
}
[dir=rtl] .mat-drawer.mat-drawer-end {
  border-top-right-radius: var(--%NS%mat-sidenav-container-shape, var(--%NS%mat-sys-corner-large));
  border-bottom-right-radius: var(--%NS%mat-sidenav-container-shape, var(--%NS%mat-sys-corner-large));
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  left: 0;
  right: auto;
  transform: translate3d(-100%, 0, 0);
}
.mat-drawer-transition .mat-drawer {
  transition: transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
}
.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating) {
  visibility: hidden;
  box-shadow: none;
}
.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating) .mat-drawer-inner-container {
  display: none;
}
.mat-drawer.mat-drawer-opened.mat-drawer-opened {
  transform: none;
}

.mat-drawer-side {
  box-shadow: none;
  border-right-color: var(--%NS%mat-sidenav-container-divider-color, transparent);
  border-right-width: 1px;
  border-right-style: solid;
}
.mat-drawer-side.mat-drawer-end {
  border-left-color: var(--%NS%mat-sidenav-container-divider-color, transparent);
  border-left-width: 1px;
  border-left-style: solid;
  border-right: none;
}
[dir=rtl] .mat-drawer-side {
  border-left-color: var(--%NS%mat-sidenav-container-divider-color, transparent);
  border-left-width: 1px;
  border-left-style: solid;
  border-right: none;
}
[dir=rtl] .mat-drawer-side.mat-drawer-end {
  border-right-color: var(--%NS%mat-sidenav-container-divider-color, transparent);
  border-right-width: 1px;
  border-right-style: solid;
  border-left: none;
}

.mat-drawer-inner-container {
  width: 100%;
  height: 100%;
  overflow: auto;
}

.mat-sidenav-fixed {
  position: fixed;
}
`;
function De(i) { throw Error(`A drawer was already declared for 'position="${i}"'`); }
var ae = new B("MAT_DRAWER_DEFAULT_AUTOSIZE", { providedIn: "root", factory: () => !1 }), S = new B("MAT_DRAWER_CONTAINER"), h = (() => { class i extends m {
    _platform = a(v);
    _changeDetectorRef = a(C);
    _element = a(b);
    _ngZone = a(y);
    _isInert = !1;
    _container = a(g);
    ngAfterContentInit() { this._container._contentMarginChanges.subscribe(() => this._changeDetectorRef.markForCheck()); }
    _drawerToggled(e) { e.opened ? this._ngZone.runOutsideAngular(() => { e._animationEnd.pipe(X(50), I(1)).subscribe(() => this._updateInert()); }) : this._updateInert(); }
    _drawerModeChanged() { this._updateInert(); }
    _updateInert() { let e = this._container._isShowingBackdrop(); if (e !== this._isInert) {
        let n = this._element.nativeElement;
        this._isInert = e, e ? n.setAttribute("inert", "true") : n.removeAttribute("inert");
    } }
    _shouldBeHidden() { if (this._platform.isBrowser)
        return !1; let { start: e, end: n } = this._container; return e != null && e.mode !== "over" && e.opened || n != null && n.mode !== "over" && n.opened; }
    static \u0275fac = (() => { let e; return function (r) { return (e || (e = t.\u0275\u0275getInheritedFactory(i)))(r || i); }; })();
    static \u0275cmp = t.\u0275\u0275defineComponent({ type: i, selectors: [["mat-drawer-content"]], hostAttrs: [1, "mat-drawer-content"], hostVars: 6, hostBindings: function (n, r) { n & 2 && (t.\u0275\u0275styleProp("margin-left", r._container._contentMargins.left, "px")("margin-right", r._container._contentMargins.right, "px"), t.\u0275\u0275classProp("mat-drawer-content-hidden", r._shouldBeHidden())); }, features: [t.\u0275\u0275ProvidersFeature([{ provide: m, useExisting: i }]), t.\u0275\u0275InheritDefinitionFeature], ngContentSelectors: u, decls: 1, vars: 0, template: function (n, r) { n & 1 && (t.\u0275\u0275projectionDef(), t.\u0275\u0275projection(0)); }, encapsulation: 2 });
} return i; })(), w = (() => { class i {
    _elementRef = a(b);
    _focusTrapFactory = a(j);
    _focusMonitor = a(z);
    _platform = a(v);
    _ngZone = a(y);
    _renderer = a(L);
    _interactivityChecker = a(O);
    _doc = a(q);
    _isAnimating = !1;
    _container = a(S, { optional: !0 });
    _focusTrap = null;
    _elementFocusedBeforeDrawerWasOpened = null;
    _eventCleanups;
    _isAttached = !1;
    _anchor = null;
    get position() { return this._position; }
    set position(e) { e = e === "end" ? "end" : "start", e !== this._position && (this._isAttached && this._updatePositionInParent(e), this._position = e, this.onPositionChanged.emit()); }
    _position = "start";
    get mode() { return this._mode; }
    set mode(e) { this._mode = e, this._updateFocusTrapState(), this._modeChanged.next(), this._getContent()?._drawerModeChanged(); }
    _mode = "over";
    get disableClose() { return this._disableClose; }
    set disableClose(e) { this._disableClose = l(e); }
    _disableClose = !1;
    get autoFocus() { let e = this._autoFocus; return e ?? (this.mode === "side" ? "dialog" : "first-tabbable"); }
    set autoFocus(e) { (e === "true" || e === "false" || e == null) && (e = l(e)), this._autoFocus = e; }
    _autoFocus;
    get opened() { return this._opened(); }
    set opened(e) { this.toggle(l(e)); }
    _opened = U(!1);
    _openedVia = null;
    _animationStarted = new c;
    _animationEnd = new c;
    openedChange = new f(!0);
    _openedStream = this.openedChange.pipe(p(e => e), M(() => { }));
    openedStart = this._animationStarted.pipe(p(() => this.opened), N(void 0));
    _closedStream = this.openedChange.pipe(p(e => !e), M(() => { }));
    closedStart = this._animationStarted.pipe(p(() => !this.opened), N(void 0));
    _destroyed = new c;
    onPositionChanged = new f;
    _content;
    _modeChanged = new c;
    _injector = a(T);
    _changeDetectorRef = a(C);
    constructor() { this.openedChange.pipe(d(this._destroyed)).subscribe(e => { e ? (this._elementFocusedBeforeDrawerWasOpened = this._doc.activeElement, this._takeFocus()) : this._isFocusWithinDrawer() && this._restoreFocus(this._openedVia || "program"); }), this._eventCleanups = this._ngZone.runOutsideAngular(() => { let e = this._renderer, n = this._elementRef.nativeElement; return [e.listen(n, "keydown", r => { r.keyCode === G && !this.disableClose && !Z(r) && this._ngZone.run(() => { this.close(), r.stopPropagation(), r.preventDefault(); }); }), e.listen(n, "transitionend", this._handleTransitionEvent), e.listen(n, "transitioncancel", this._handleTransitionEvent)]; }), this._animationEnd.subscribe(() => { this.openedChange.emit(this.opened); }); }
    _focusByCssSelector(e, n) { let r = this._elementRef.nativeElement.querySelector(e); r && (this._interactivityChecker.isFocusable(r) || (r.tabIndex = -1, this._ngZone.runOutsideAngular(() => { let o = () => { s(), V(), r.removeAttribute("tabindex"); }, s = this._renderer.listen(r, "blur", o), V = this._renderer.listen(r, "mousedown", o); })), r.focus(n)); }
    _takeFocus() { if (!this._focusTrap)
        return; let e = this._elementRef.nativeElement; switch (this.autoFocus) {
        case !1:
        case "dialog": return;
        case !0:
        case "first-tabbable":
            A(() => { let n = this._isAnimating ? { preventScroll: !0 } : void 0; !this._focusTrap.focusInitialElement(n) && typeof e.focus == "function" && e.focus(n); }, { injector: this._injector });
            break;
        case "first-heading":
            this._focusByCssSelector('h1, h2, h3, h4, h5, h6, [role="heading"]');
            break;
        default:
            this._focusByCssSelector(this.autoFocus);
            break;
    } }
    _restoreFocus(e) { this.autoFocus !== "dialog" && (this._elementFocusedBeforeDrawerWasOpened ? this._focusMonitor.focusVia(this._elementFocusedBeforeDrawerWasOpened, e) : this._elementRef.nativeElement.blur(), this._elementFocusedBeforeDrawerWasOpened = null); }
    _isFocusWithinDrawer() { let e = this._doc.activeElement; return !!e && this._elementRef.nativeElement.contains(e); }
    ngAfterViewInit() { this._isAttached = !0, this._position === "end" && this._updatePositionInParent("end"), this._platform.isBrowser && (this._focusTrap = this._focusTrapFactory.create(this._elementRef.nativeElement), this._updateFocusTrapState()); }
    ngOnDestroy() { this._eventCleanups.forEach(e => e()), this._focusTrap?.destroy(), this._anchor?.remove(), this._anchor = null, this._animationStarted.complete(), this._animationEnd.complete(), this._modeChanged.complete(), this._destroyed.next(), this._destroyed.complete(); }
    open(e) { return this.toggle(!0, e); }
    close() { return this.toggle(!1); }
    _closeViaBackdropClick() { return this._setOpen(!1, !0, "mouse"); }
    toggle(e = !this.opened, n) { e && n && (this._openedVia = n); let r = this._setOpen(e, !e && this._isFocusWithinDrawer(), this._openedVia || "program"); return e || (this._openedVia = null), r; }
    _setOpen(e, n, r) { return e === this.opened ? Promise.resolve(e ? "open" : "close") : (this._opened.set(e), this._getContent()?._drawerToggled(this), this._container?._transitionsEnabled ? this._isAnimating ? (this._setIsAnimating(!1), this._simulateAnimation()) : (this._setIsAnimating(!0), setTimeout(() => this._animationStarted.next())) : this._simulateAnimation(), this._elementRef.nativeElement.classList.toggle("mat-drawer-opened", e), !e && n && this._restoreFocus(r), this._changeDetectorRef.markForCheck(), this._updateFocusTrapState(), new Promise(o => { this.openedChange.pipe(I(1)).subscribe(s => o(s ? "open" : "close")); })); }
    _getContent() { return this._container?._content || this._container?._userContent; }
    _setIsAnimating(e) { e !== this._isAnimating && (this._isAnimating = e, this._elementRef.nativeElement.classList.toggle("mat-drawer-animating", e)); }
    _simulateAnimation() { setTimeout(() => { this._animationStarted.next(), this._animationEnd.next(); }); }
    _getWidth() { return this._elementRef.nativeElement.offsetWidth || 0; }
    _updateFocusTrapState() { this._focusTrap && (this._focusTrap.enabled = this.opened && !!this._container?._isShowingBackdrop()); }
    _updatePositionInParent(e) { if (!this._platform.isBrowser)
        return; let n = this._elementRef.nativeElement, r = n.parentNode; e === "end" ? (this._anchor || (this._anchor = this._doc.createComment("mat-drawer-anchor"), r.insertBefore(this._anchor, n)), r.appendChild(n)) : this._anchor && this._anchor.parentNode.insertBefore(n, this._anchor); }
    _handleTransitionEvent = e => { let n = this._elementRef.nativeElement; e.target === n && this._ngZone.run(() => { e.type === "transitionend" && this._setIsAnimating(!1), this._animationEnd.next(e); }); };
    static \u0275fac = function (n) { return new (n || i); };
    static \u0275cmp = t.\u0275\u0275defineComponent({ type: i, selectors: [["mat-drawer"]], viewQuery: function (n, r) { if (n & 1 && t.\u0275\u0275viewQuery(Y, 5), n & 2) {
            let o;
            t.\u0275\u0275queryRefresh(o = t.\u0275\u0275loadQuery()) && (r._content = o.first);
        } }, hostAttrs: [1, "mat-drawer"], hostVars: 12, hostBindings: function (n, r) { n & 2 && (t.\u0275\u0275attribute("align", null)("tabIndex", r.mode !== "side" ? "-1" : null), t.\u0275\u0275styleProp("visibility", !r._container && !r.opened ? "hidden" : null), t.\u0275\u0275classProp("mat-drawer-end", r.position === "end")("mat-drawer-over", r.mode === "over")("mat-drawer-push", r.mode === "push")("mat-drawer-side", r.mode === "side")); }, inputs: { position: "position", mode: "mode", disableClose: "disableClose", autoFocus: "autoFocus", opened: "opened" }, outputs: { openedChange: "openedChange", _openedStream: "opened", openedStart: "openedStart", _closedStream: "closed", closedStart: "closedStart", onPositionChanged: "positionChanged" }, exportAs: ["matDrawer"], ngContentSelectors: u, decls: 3, vars: 0, consts: [["content", ""], ["cdkScrollable", "", 1, "mat-drawer-inner-container"]], template: function (n, r) { n & 1 && (t.\u0275\u0275projectionDef(), t.\u0275\u0275elementStart(0, "div", 1, 0), t.\u0275\u0275projection(2), t.\u0275\u0275elementEnd()); }, dependencies: [m], encapsulation: 2 });
} return i; })(), g = (() => {
    class i {
        _dir = a(Q, { optional: !0 });
        _element = a(b);
        _ngZone = a(y);
        _changeDetectorRef = a(C);
        _animationDisabled = k();
        _transitionsEnabled = !1;
        _allDrawers;
        _drawers = new K;
        _content;
        _userContent;
        get start() { return this._start; }
        get end() { return this._end; }
        get autosize() { return this._autosize; }
        set autosize(e) { this._autosize = l(e); }
        _autosize = a(ae);
        get hasBackdrop() { return this._drawerHasBackdrop(this._start) || this._drawerHasBackdrop(this._end); }
        set hasBackdrop(e) { this._backdropOverride = e == null ? null : l(e); }
        _backdropOverride = null;
        backdropClick = new f;
        _start = null;
        _end = null;
        _left = null;
        _right = null;
        _destroyed = new c;
        _doCheckSubject = new c;
        _contentMargins = { left: null, right: null };
        _contentMarginChanges = new c;
        get scrollable() { return this._userContent || this._content; }
        _injector = a(T);
        constructor() { let e = a(v), n = a(H); this._dir?.change.pipe(d(this._destroyed)).subscribe(() => { this._validateDrawers(), this.updateContentMargins(); }), n.change().pipe(d(this._destroyed)).subscribe(() => this.updateContentMargins()), !this._animationDisabled && e.isBrowser && this._ngZone.runOutsideAngular(() => { setTimeout(() => { this._element.nativeElement.classList.add("mat-drawer-transition"), this._transitionsEnabled = !0; }, 200); }); }
        ngAfterContentInit() { this._allDrawers.changes.pipe(E(this._allDrawers), d(this._destroyed)).subscribe(e => { this._drawers.reset(e.filter(n => !n._container || n._container === this)), this._drawers.notifyOnChanges(); }), this._drawers.changes.pipe(E(null)).subscribe(() => { this._validateDrawers(), this._drawers.forEach(e => { this._watchDrawerToggle(e), this._watchDrawerPosition(e), this._watchDrawerMode(e); }), (!this._drawers.length || this._isDrawerOpen(this._start) || this._isDrawerOpen(this._end)) && this.updateContentMargins(), this._changeDetectorRef.markForCheck(); }), this._ngZone.runOutsideAngular(() => { this._doCheckSubject.pipe(J(10), d(this._destroyed)).subscribe(() => this.updateContentMargins()); }); }
        ngOnDestroy() { this._contentMarginChanges.complete(), this._doCheckSubject.complete(), this._drawers.destroy(), this._destroyed.next(), this._destroyed.complete(); }
        open() { this._drawers.forEach(e => e.open()); }
        close() { this._drawers.forEach(e => e.close()); }
        updateContentMargins() { let e = 0, n = 0; if (this._left && this._left.opened) {
            if (this._left.mode == "side")
                e += this._left._getWidth();
            else if (this._left.mode == "push") {
                let r = this._left._getWidth();
                e += r, n -= r;
            }
        } if (this._right && this._right.opened) {
            if (this._right.mode == "side")
                n += this._right._getWidth();
            else if (this._right.mode == "push") {
                let r = this._right._getWidth();
                n += r, e -= r;
            }
        } e = e || null, n = n || null, (e !== this._contentMargins.left || n !== this._contentMargins.right) && (this._contentMargins = { left: e, right: n }, this._ngZone.run(() => this._contentMarginChanges.next(this._contentMargins))); }
        ngDoCheck() { this._autosize && this._isPushed() && this._ngZone.runOutsideAngular(() => this._doCheckSubject.next()); }
        _watchDrawerToggle(e) { e._animationStarted.pipe(d(this._drawers.changes)).subscribe(() => { this.updateContentMargins(), this._changeDetectorRef.markForCheck(); }), e.mode !== "side" && e.openedChange.pipe(d(this._drawers.changes)).subscribe(() => this._setContainerClass(e.opened)); }
        _watchDrawerPosition(e) { e.onPositionChanged.pipe(d(this._drawers.changes)).subscribe(() => { A({ read: () => this._validateDrawers() }, { injector: this._injector }); }); }
        _watchDrawerMode(e) { e._modeChanged.pipe(d($(this._drawers.changes, this._destroyed))).subscribe(() => { this.updateContentMargins(), this._changeDetectorRef.markForCheck(); }); }
        _setContainerClass(e) { let n = this._element.nativeElement.classList, r = "mat-drawer-container-has-open"; e ? n.add(r) : n.remove(r); }
        _validateDrawers() { this._start = this._end = null, this._drawers.forEach(e => { e.position == "end" ? (this._end != null, this._end = e) : (this._start != null, this._start = e); }), this._right = this._left = null, this._dir && this._dir.value === "rtl" ? (this._left = this._end, this._right = this._start) : (this._left = this._start, this._right = this._end); }
        _isPushed() { return this._isDrawerOpen(this._start) && this._start.mode != "over" || this._isDrawerOpen(this._end) && this._end.mode != "over"; }
        _onBackdropClicked() { this.backdropClick.emit(), this._closeModalDrawersViaBackdrop(); }
        _closeModalDrawersViaBackdrop() { [this._start, this._end].filter(e => e && !e.disableClose && this._drawerHasBackdrop(e)).forEach(e => e._closeViaBackdropClick()); }
        _isShowingBackdrop() { return this._isDrawerOpen(this._start) && this._drawerHasBackdrop(this._start) || this._isDrawerOpen(this._end) && this._drawerHasBackdrop(this._end); }
        _isDrawerOpen(e) { return e != null && e.opened; }
        _drawerHasBackdrop(e) { return this._backdropOverride == null ? !!e && e.mode !== "side" : this._backdropOverride; }
        static \u0275fac = function (n) { return new (n || i); };
        static \u0275cmp = t.\u0275\u0275defineComponent({ type: i, selectors: [["mat-drawer-container"]], contentQueries: function (n, r, o) { if (n & 1 && t.\u0275\u0275contentQuery(o, h, 5)(o, w, 5), n & 2) {
                let s;
                t.\u0275\u0275queryRefresh(s = t.\u0275\u0275loadQuery()) && (r._content = s.first), t.\u0275\u0275queryRefresh(s = t.\u0275\u0275loadQuery()) && (r._allDrawers = s);
            } }, viewQuery: function (n, r) { if (n & 1 && t.\u0275\u0275viewQuery(h, 5), n & 2) {
                let o;
                t.\u0275\u0275queryRefresh(o = t.\u0275\u0275loadQuery()) && (r._userContent = o.first);
            } }, hostAttrs: [1, "mat-drawer-container"], hostVars: 2, hostBindings: function (n, r) { n & 2 && t.\u0275\u0275classProp("mat-drawer-container-explicit-backdrop", r._backdropOverride); }, inputs: { autosize: "autosize", hasBackdrop: "hasBackdrop" }, outputs: { backdropClick: "backdropClick" }, exportAs: ["matDrawerContainer"], features: [t.\u0275\u0275ProvidersFeature([{ provide: S, useExisting: i }])], ngContentSelectors: P, decls: 4, vars: 2, consts: [[1, "mat-drawer-backdrop", 3, "mat-drawer-shown"], [1, "mat-drawer-backdrop", 3, "click"]], template: function (n, r) { n & 1 && (t.\u0275\u0275projectionDef(R), t.\u0275\u0275conditionalCreate(0, ee, 1, 2, "div", 0), t.\u0275\u0275projection(1), t.\u0275\u0275projection(2, 1), t.\u0275\u0275conditionalCreate(3, te, 2, 0, "mat-drawer-content")), n & 2 && (t.\u0275\u0275conditional(r.hasBackdrop ? 0 : -1), t.\u0275\u0275advance(3), t.\u0275\u0275conditional(r._content ? -1 : 3)); }, dependencies: [h], styles: [`.mat-drawer-container {
  position: relative;
  z-index: 1;
  color: var(--%NS%mat-sidenav-content-text-color, var(--%NS%mat-sys-on-background));
  background-color: var(--%NS%mat-sidenav-content-background-color, var(--%NS%mat-sys-background));
  box-sizing: border-box;
  display: block;
  overflow: hidden;
}
.mat-drawer-container[fullscreen] {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
}
.mat-drawer-container[fullscreen].mat-drawer-container-has-open {
  overflow: hidden;
}
.mat-drawer-container.mat-drawer-container-explicit-backdrop .mat-drawer-side {
  z-index: 3;
}
.mat-drawer-container.ng-animate-disabled .mat-drawer-backdrop,
.mat-drawer-container.ng-animate-disabled .mat-drawer-content, .ng-animate-disabled .mat-drawer-container .mat-drawer-backdrop,
.ng-animate-disabled .mat-drawer-container .mat-drawer-content {
  transition: none;
}

.mat-drawer-backdrop {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  display: block;
  z-index: 3;
  visibility: hidden;
}
.mat-drawer-backdrop.mat-drawer-shown {
  visibility: visible;
  background-color: var(--%NS%mat-sidenav-scrim-color, color-mix(in srgb, var(--%NS%mat-sys-neutral-variant20) 40%, transparent));
}
.mat-drawer-transition .mat-drawer-backdrop {
  transition-duration: 400ms;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-property: background-color, visibility;
}
@media (forced-colors: active) {
  .mat-drawer-backdrop {
    opacity: 0.5;
  }
}

.mat-drawer-content {
  position: relative;
  z-index: 1;
  display: block;
  height: 100%;
  overflow: auto;
}
.mat-drawer-content.mat-drawer-content-hidden {
  opacity: 0;
}
.mat-drawer-transition .mat-drawer-content {
  transition-duration: 400ms;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-property: transform, margin-left, margin-right;
}

.mat-drawer {
  position: relative;
  z-index: 4;
  color: var(--%NS%mat-sidenav-container-text-color, var(--%NS%mat-sys-on-surface-variant));
  box-shadow: var(--%NS%mat-sidenav-container-elevation-shadow, none);
  background-color: var(--%NS%mat-sidenav-container-background-color, var(--%NS%mat-sys-surface));
  border-top-right-radius: var(--%NS%mat-sidenav-container-shape, var(--%NS%mat-sys-corner-large));
  border-bottom-right-radius: var(--%NS%mat-sidenav-container-shape, var(--%NS%mat-sys-corner-large));
  width: var(--%NS%mat-sidenav-container-width, 360px);
  display: block;
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: 3;
  outline: 0;
  box-sizing: border-box;
  overflow-y: auto;
  transform: translate3d(-100%, 0, 0);
}
@media (forced-colors: active) {
  .mat-drawer, [dir=rtl] .mat-drawer.mat-drawer-end {
    border-right: solid 1px currentColor;
  }
}
@media (forced-colors: active) {
  [dir=rtl] .mat-drawer, .mat-drawer.mat-drawer-end {
    border-left: solid 1px currentColor;
    border-right: none;
  }
}
.mat-drawer.mat-drawer-side {
  z-index: 2;
}
.mat-drawer.mat-drawer-end {
  right: 0;
  transform: translate3d(100%, 0, 0);
  border-top-left-radius: var(--%NS%mat-sidenav-container-shape, var(--%NS%mat-sys-corner-large));
  border-bottom-left-radius: var(--%NS%mat-sidenav-container-shape, var(--%NS%mat-sys-corner-large));
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
[dir=rtl] .mat-drawer {
  border-top-left-radius: var(--%NS%mat-sidenav-container-shape, var(--%NS%mat-sys-corner-large));
  border-bottom-left-radius: var(--%NS%mat-sidenav-container-shape, var(--%NS%mat-sys-corner-large));
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  transform: translate3d(100%, 0, 0);
}
[dir=rtl] .mat-drawer.mat-drawer-end {
  border-top-right-radius: var(--%NS%mat-sidenav-container-shape, var(--%NS%mat-sys-corner-large));
  border-bottom-right-radius: var(--%NS%mat-sidenav-container-shape, var(--%NS%mat-sys-corner-large));
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  left: 0;
  right: auto;
  transform: translate3d(-100%, 0, 0);
}
.mat-drawer-transition .mat-drawer {
  transition: transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
}
.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating) {
  visibility: hidden;
  box-shadow: none;
}
.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating) .mat-drawer-inner-container {
  display: none;
}
.mat-drawer.mat-drawer-opened.mat-drawer-opened {
  transform: none;
}

.mat-drawer-side {
  box-shadow: none;
  border-right-color: var(--%NS%mat-sidenav-container-divider-color, transparent);
  border-right-width: 1px;
  border-right-style: solid;
}
.mat-drawer-side.mat-drawer-end {
  border-left-color: var(--%NS%mat-sidenav-container-divider-color, transparent);
  border-left-width: 1px;
  border-left-style: solid;
  border-right: none;
}
[dir=rtl] .mat-drawer-side {
  border-left-color: var(--%NS%mat-sidenav-container-divider-color, transparent);
  border-left-width: 1px;
  border-left-style: solid;
  border-right: none;
}
[dir=rtl] .mat-drawer-side.mat-drawer-end {
  border-right-color: var(--%NS%mat-sidenav-container-divider-color, transparent);
  border-right-width: 1px;
  border-right-style: solid;
  border-left: none;
}

.mat-drawer-inner-container {
  width: 100%;
  height: 100%;
  overflow: auto;
}

.mat-sidenav-fixed {
  position: fixed;
}
`], encapsulation: 2 });
    }
    return i;
})(), F = (() => { class i extends h {
    static \u0275fac = (() => { let e; return function (r) { return (e || (e = t.\u0275\u0275getInheritedFactory(i)))(r || i); }; })();
    static \u0275cmp = t.\u0275\u0275defineComponent({ type: i, selectors: [["mat-sidenav-content"]], hostAttrs: [1, "mat-drawer-content", "mat-sidenav-content"], features: [t.\u0275\u0275ProvidersFeature([{ provide: m, useExisting: i }, { provide: h, useExisting: i }]), t.\u0275\u0275InheritDefinitionFeature], ngContentSelectors: u, decls: 1, vars: 0, template: function (n, r) { n & 1 && (t.\u0275\u0275projectionDef(), t.\u0275\u0275projection(0)); }, encapsulation: 2 });
} return i; })(), oe = (() => { class i extends w {
    get fixedInViewport() { return this._fixedInViewport; }
    set fixedInViewport(e) { this._fixedInViewport = l(e); }
    _fixedInViewport = !1;
    get fixedTopGap() { return this._fixedTopGap; }
    set fixedTopGap(e) { this._fixedTopGap = x(e); }
    _fixedTopGap = 0;
    get fixedBottomGap() { return this._fixedBottomGap; }
    set fixedBottomGap(e) { this._fixedBottomGap = x(e); }
    _fixedBottomGap = 0;
    static \u0275fac = (() => { let e; return function (r) { return (e || (e = t.\u0275\u0275getInheritedFactory(i)))(r || i); }; })();
    static \u0275cmp = t.\u0275\u0275defineComponent({ type: i, selectors: [["mat-sidenav"]], hostAttrs: [1, "mat-drawer", "mat-sidenav"], hostVars: 16, hostBindings: function (n, r) { n & 2 && (t.\u0275\u0275attribute("tabIndex", r.mode !== "side" ? "-1" : null)("align", null), t.\u0275\u0275styleProp("top", r.fixedInViewport ? r.fixedTopGap : null, "px")("bottom", r.fixedInViewport ? r.fixedBottomGap : null, "px"), t.\u0275\u0275classProp("mat-drawer-end", r.position === "end")("mat-drawer-over", r.mode === "over")("mat-drawer-push", r.mode === "push")("mat-drawer-side", r.mode === "side")("mat-sidenav-fixed", r.fixedInViewport)); }, inputs: { fixedInViewport: "fixedInViewport", fixedTopGap: "fixedTopGap", fixedBottomGap: "fixedBottomGap" }, exportAs: ["matSidenav"], features: [t.\u0275\u0275ProvidersFeature([{ provide: w, useExisting: i }]), t.\u0275\u0275InheritDefinitionFeature], ngContentSelectors: u, decls: 3, vars: 0, consts: [["content", ""], ["cdkScrollable", "", 1, "mat-drawer-inner-container"]], template: function (n, r) { n & 1 && (t.\u0275\u0275projectionDef(), t.\u0275\u0275elementStart(0, "div", 1, 0), t.\u0275\u0275projection(2), t.\u0275\u0275elementEnd()); }, dependencies: [m], encapsulation: 2 });
} return i; })(), Me = (() => { class i extends g {
    _allDrawers = void 0;
    _content = void 0;
    static \u0275fac = (() => { let e; return function (r) { return (e || (e = t.\u0275\u0275getInheritedFactory(i)))(r || i); }; })();
    static \u0275cmp = t.\u0275\u0275defineComponent({ type: i, selectors: [["mat-sidenav-container"]], contentQueries: function (n, r, o) { if (n & 1 && t.\u0275\u0275contentQuery(o, F, 5)(o, oe, 5), n & 2) {
            let s;
            t.\u0275\u0275queryRefresh(s = t.\u0275\u0275loadQuery()) && (r._content = s.first), t.\u0275\u0275queryRefresh(s = t.\u0275\u0275loadQuery()) && (r._allDrawers = s);
        } }, hostAttrs: [1, "mat-drawer-container", "mat-sidenav-container"], hostVars: 2, hostBindings: function (n, r) { n & 2 && t.\u0275\u0275classProp("mat-drawer-container-explicit-backdrop", r._backdropOverride); }, exportAs: ["matSidenavContainer"], features: [t.\u0275\u0275ProvidersFeature([{ provide: S, useExisting: i }, { provide: g, useExisting: i }]), t.\u0275\u0275InheritDefinitionFeature], ngContentSelectors: P, decls: 4, vars: 2, consts: [[1, "mat-drawer-backdrop", 3, "mat-drawer-shown"], [1, "mat-drawer-backdrop", 3, "click"]], template: function (n, r) { n & 1 && (t.\u0275\u0275projectionDef(R), t.\u0275\u0275conditionalCreate(0, ne, 1, 2, "div", 0), t.\u0275\u0275projection(1), t.\u0275\u0275projection(2, 1), t.\u0275\u0275conditionalCreate(3, re, 2, 0, "mat-sidenav-content")), n & 2 && (t.\u0275\u0275conditional(r.hasBackdrop ? 0 : -1), t.\u0275\u0275advance(3), t.\u0275\u0275conditional(r._content ? -1 : 3)); }, dependencies: [F], styles: [ie], encapsulation: 2 });
} return i; })(), Ne = (() => { class i {
    static \u0275fac = function (n) { return new (n || i); };
    static \u0275mod = t.\u0275\u0275defineNgModule({ type: i });
    static \u0275inj = t.\u0275\u0275defineInjector({ imports: [D, W, D] });
} return i; })();
export { ae as MAT_DRAWER_DEFAULT_AUTOSIZE, w as MatDrawer, g as MatDrawerContainer, h as MatDrawerContent, oe as MatSidenav, Me as MatSidenavContainer, F as MatSidenavContent, Ne as MatSidenavModule, De as throwMatDuplicatedDrawerError };
