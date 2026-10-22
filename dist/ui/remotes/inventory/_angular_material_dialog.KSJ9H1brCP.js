import { c as u } from "@nf-internal/chunk-L6LZ2NRF";
import { a as d, b as v } from "@nf-internal/chunk-2NFLSA4Y";
import { createBlockScrollStrategy as M, createGlobalPositionStrategy as P, OverlayModule as B } from "@angular/cdk/overlay";
import * as a from "@angular/core";
import { EventEmitter as z, InjectionToken as _, inject as s, Injector as w, ElementRef as O } from "@angular/core";
import { CdkDialogContainer as j, Dialog as V, DialogConfig as G, DialogRef as H, DialogModule as q } from "@angular/cdk/dialog";
import { coerceNumberProperty as D } from "@angular/cdk/coercion";
import { CdkPortalOutlet as W, PortalModule as U } from "@angular/cdk/portal";
import { ReplaySubject as C, merge as Y, Subject as A, defer as $ } from "rxjs";
import { filter as c, take as p, startWith as K } from "rxjs/operators";
import { ESCAPE as Q, hasModifierKey as X } from "@angular/cdk/keycodes";
import { _IdGenerator as I } from "@angular/cdk/a11y";
import * as k from "@angular/cdk/scrolling";
import "@angular/cdk/scrolling";
import { BidiModule as Z } from "@angular/cdk/bidi";
import "@angular/cdk/layout";
function J(t, o) { }
var g = class {
    viewContainerRef;
    injector;
    id;
    role = "dialog";
    panelClass = "";
    hasBackdrop = !0;
    backdropClass = "";
    disableClose = !1;
    closePredicate;
    width = "";
    height = "";
    minWidth;
    minHeight;
    maxWidth;
    maxHeight;
    position;
    data = null;
    direction;
    ariaDescribedBy = null;
    ariaLabelledBy = null;
    ariaLabel = null;
    ariaModal = !1;
    autoFocus = "first-tabbable";
    restoreFocus = !0;
    delayFocusTrap = !0;
    scrollStrategy;
    closeOnNavigation = !0;
    enterAnimationDuration;
    exitAnimationDuration;
    bindings;
}, f = "mdc-dialog--open", S = "mdc-dialog--opening", x = "mdc-dialog--closing", tt = 150, et = 75, it = (() => {
    class t extends j {
        _animationStateChanged = new z;
        _animationsEnabled = !u();
        _actionSectionCount = 0;
        _hostElement = this._elementRef.nativeElement;
        _enterAnimationDuration = this._animationsEnabled ? N(this._config.enterAnimationDuration) ?? tt : 0;
        _exitAnimationDuration = this._animationsEnabled ? N(this._config.exitAnimationDuration) ?? et : 0;
        _animationTimer = null;
        _contentAttached() { super._contentAttached(), this._startOpenAnimation(); }
        _startOpenAnimation() { this._animationStateChanged.emit({ state: "opening", totalTime: this._enterAnimationDuration }), this._animationsEnabled ? (this._hostElement.style.setProperty(T, `${this._enterAnimationDuration}ms`), this._requestAnimationFrame(() => this._hostElement.classList.add(S, f)), this._waitForAnimationToComplete(this._enterAnimationDuration, this._finishDialogOpen)) : (this._hostElement.classList.add(f), Promise.resolve().then(() => this._finishDialogOpen())); }
        _startExitAnimation() { this._animationStateChanged.emit({ state: "closing", totalTime: this._exitAnimationDuration }), this._hostElement.classList.remove(f), this._animationsEnabled ? (this._hostElement.style.setProperty(T, `${this._exitAnimationDuration}ms`), this._requestAnimationFrame(() => this._hostElement.classList.add(x)), this._waitForAnimationToComplete(this._exitAnimationDuration, this._finishDialogClose)) : Promise.resolve().then(() => this._finishDialogClose()); }
        _updateActionSectionCount(e) { this._actionSectionCount += e, this._changeDetectorRef.markForCheck(); }
        _finishDialogOpen = () => { this._clearAnimationClasses(), this._openAnimationDone(this._enterAnimationDuration); };
        _finishDialogClose = () => { this._clearAnimationClasses(), this._animationStateChanged.emit({ state: "closed", totalTime: this._exitAnimationDuration }); };
        _clearAnimationClasses() { this._hostElement.classList.remove(S, x); }
        _waitForAnimationToComplete(e, i) { this._animationTimer !== null && clearTimeout(this._animationTimer), this._animationTimer = setTimeout(i, e); }
        _requestAnimationFrame(e) { this._ngZone.runOutsideAngular(() => { typeof requestAnimationFrame == "function" ? requestAnimationFrame(e) : e(); }); }
        _captureInitialFocus() { this._config.delayFocusTrap || this._trapFocus(); }
        _openAnimationDone(e) { this._config.delayFocusTrap && this._trapFocus(), this._animationStateChanged.next({ state: "opened", totalTime: e }); }
        ngOnDestroy() { super.ngOnDestroy(), this._animationTimer !== null && clearTimeout(this._animationTimer); }
        attachComponentPortal(e) { let i = super.attachComponentPortal(e); return i.location.nativeElement.classList.add("mat-mdc-dialog-component-host"), i; }
        static \u0275fac = (() => { let e; return function (n) { return (e || (e = a.\u0275\u0275getInheritedFactory(t)))(n || t); }; })();
        static \u0275cmp = a.\u0275\u0275defineComponent({ type: t, selectors: [["mat-dialog-container"]], hostAttrs: ["tabindex", "-1", 1, "mat-mdc-dialog-container", "mdc-dialog"], hostVars: 10, hostBindings: function (i, n) { i & 2 && (a.\u0275\u0275domProperty("id", n._config.id), a.\u0275\u0275attribute("aria-modal", n._config.ariaModal)("role", n._config.role)("aria-labelledby", n._config.ariaLabel ? null : n._ariaLabelledByQueue[0])("aria-label", n._config.ariaLabel)("aria-describedby", n._config.ariaDescribedBy || null), a.\u0275\u0275classProp("_mat-animation-noopable", !n._animationsEnabled)("mat-mdc-dialog-container-with-actions", n._actionSectionCount > 0)); }, features: [a.\u0275\u0275InheritDefinitionFeature], decls: 3, vars: 0, consts: [[1, "mat-mdc-dialog-inner-container", "mdc-dialog__container"], [1, "mat-mdc-dialog-surface", "mdc-dialog__surface"], ["cdkPortalOutlet", ""]], template: function (i, n) { i & 1 && (a.\u0275\u0275elementStart(0, "div", 0)(1, "div", 1), a.\u0275\u0275template(2, J, 0, 0, "ng-template", 2), a.\u0275\u0275elementEnd()()); }, dependencies: [W], styles: [`.mat-mdc-dialog-container {
  width: 100%;
  height: 100%;
  display: block;
  box-sizing: border-box;
  max-height: inherit;
  min-height: inherit;
  min-width: inherit;
  max-width: inherit;
  outline: 0;
}

.cdk-overlay-pane.mat-mdc-dialog-panel {
  max-width: var(--%NS%mat-dialog-container-max-width, 560px);
  min-width: var(--%NS%mat-dialog-container-min-width, 280px);
}
@media (max-width: 599px) {
  .cdk-overlay-pane.mat-mdc-dialog-panel {
    max-width: var(--%NS%mat-dialog-container-small-max-width, calc(100vw - 32px));
  }
}

.mat-mdc-dialog-inner-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  box-sizing: border-box;
  height: 100%;
  opacity: 0;
  transition: opacity linear var(--%NS%mat-dialog-transition-duration, 0ms);
  max-height: inherit;
  min-height: inherit;
  min-width: inherit;
  max-width: inherit;
}
.mdc-dialog--closing .mat-mdc-dialog-inner-container {
  transition: opacity 75ms linear;
  transform: none;
}
.mdc-dialog--open .mat-mdc-dialog-inner-container {
  opacity: 1;
}
._mat-animation-noopable .mat-mdc-dialog-inner-container {
  transition: none;
}

.mat-mdc-dialog-surface {
  display: flex;
  flex-direction: column;
  flex-grow: 0;
  flex-shrink: 0;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  position: relative;
  overflow-y: auto;
  outline: 0;
  transform: scale(0.8);
  transition: transform var(--%NS%mat-dialog-transition-duration, 0ms) cubic-bezier(0, 0, 0.2, 1);
  max-height: inherit;
  min-height: inherit;
  min-width: inherit;
  max-width: inherit;
  box-shadow: var(--%NS%mat-dialog-container-elevation-shadow, none);
  border-radius: var(--%NS%mat-dialog-container-shape, var(--%NS%mat-sys-corner-extra-large, 4px));
  background-color: var(--%NS%mat-dialog-container-color, var(--%NS%mat-sys-surface, white));
}
[dir=rtl] .mat-mdc-dialog-surface {
  text-align: right;
}
.mdc-dialog--open .mat-mdc-dialog-surface, .mdc-dialog--closing .mat-mdc-dialog-surface {
  transform: none;
}
._mat-animation-noopable .mat-mdc-dialog-surface {
  transition: none;
}
.mat-mdc-dialog-surface::before {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border: 2px solid transparent;
  border-radius: inherit;
  content: "";
  pointer-events: none;
}

.mat-mdc-dialog-title {
  display: block;
  position: relative;
  flex-shrink: 0;
  box-sizing: border-box;
  margin: 0 0 1px;
  padding: var(--%NS%mat-dialog-headline-padding, 6px 24px 13px);
}
.mat-mdc-dialog-title::before {
  display: inline-block;
  width: 0;
  height: 40px;
  content: "";
  vertical-align: 0;
}
[dir=rtl] .mat-mdc-dialog-title {
  text-align: right;
}
.mat-mdc-dialog-container .mat-mdc-dialog-title {
  color: var(--%NS%mat-dialog-subhead-color, var(--%NS%mat-sys-on-surface, rgba(0, 0, 0, 0.87)));
  font-family: var(--%NS%mat-dialog-subhead-font, var(--%NS%mat-sys-headline-small-font, inherit));
  line-height: var(--%NS%mat-dialog-subhead-line-height, var(--%NS%mat-sys-headline-small-line-height, 1.5rem));
  font-size: var(--%NS%mat-dialog-subhead-size, var(--%NS%mat-sys-headline-small-size, 1rem));
  font-weight: var(--%NS%mat-dialog-subhead-weight, var(--%NS%mat-sys-headline-small-weight, 400));
  letter-spacing: var(--%NS%mat-dialog-subhead-tracking, var(--%NS%mat-sys-headline-small-tracking, 0.03125em));
}

.mat-mdc-dialog-content {
  display: block;
  flex-grow: 1;
  box-sizing: border-box;
  margin: 0;
  overflow: auto;
  max-height: 65vh;
}
.mat-mdc-dialog-content > :first-child {
  margin-top: 0;
}
.mat-mdc-dialog-content > :last-child {
  margin-bottom: 0;
}
.mat-mdc-dialog-container .mat-mdc-dialog-content {
  color: var(--%NS%mat-dialog-supporting-text-color, var(--%NS%mat-sys-on-surface-variant, rgba(0, 0, 0, 0.6)));
  font-family: var(--%NS%mat-dialog-supporting-text-font, var(--%NS%mat-sys-body-medium-font, inherit));
  line-height: var(--%NS%mat-dialog-supporting-text-line-height, var(--%NS%mat-sys-body-medium-line-height, 1.5rem));
  font-size: var(--%NS%mat-dialog-supporting-text-size, var(--%NS%mat-sys-body-medium-size, 1rem));
  font-weight: var(--%NS%mat-dialog-supporting-text-weight, var(--%NS%mat-sys-body-medium-weight, 400));
  letter-spacing: var(--%NS%mat-dialog-supporting-text-tracking, var(--%NS%mat-sys-body-medium-tracking, 0.03125em));
}
.mat-mdc-dialog-container .mat-mdc-dialog-content {
  padding: var(--%NS%mat-dialog-content-padding, 20px 24px);
}
.mat-mdc-dialog-container-with-actions .mat-mdc-dialog-content {
  padding: var(--%NS%mat-dialog-with-actions-content-padding, 20px 24px 0);
}
.mat-mdc-dialog-container .mat-mdc-dialog-title + .mat-mdc-dialog-content {
  padding-top: 0;
}

.mat-mdc-dialog-actions {
  display: flex;
  position: relative;
  flex-shrink: 0;
  flex-wrap: wrap;
  align-items: center;
  box-sizing: border-box;
  min-height: 52px;
  margin: 0;
  border-top: 1px solid transparent;
  padding: var(--%NS%mat-dialog-actions-padding, 16px 24px);
  justify-content: var(--%NS%mat-dialog-actions-alignment, flex-end);
}
@media (forced-colors: active) {
  .mat-mdc-dialog-actions {
    border-top-color: CanvasText;
  }
}
.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-start, .mat-mdc-dialog-actions[align=start] {
  justify-content: start;
}
.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-center, .mat-mdc-dialog-actions[align=center] {
  justify-content: center;
}
.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-end, .mat-mdc-dialog-actions[align=end] {
  justify-content: flex-end;
}
.mat-mdc-dialog-actions .mat-button-base + .mat-button-base,
.mat-mdc-dialog-actions .mat-mdc-button-base + .mat-mdc-button-base {
  margin-left: 8px;
}
[dir=rtl] .mat-mdc-dialog-actions .mat-button-base + .mat-button-base,
[dir=rtl] .mat-mdc-dialog-actions .mat-mdc-button-base + .mat-mdc-button-base {
  margin-left: 0;
  margin-right: 8px;
}

.mat-mdc-dialog-component-host {
  display: contents;
}
`], encapsulation: 2, changeDetection: 1 });
    }
    return t;
})(), T = "--mat-dialog-transition-duration";
function N(t) { return t == null ? null : typeof t == "number" ? t : t.endsWith("ms") ? D(t.substring(0, t.length - 2)) : t.endsWith("s") ? D(t.substring(0, t.length - 1)) * 1e3 : t === "0" ? 0 : null; }
var m = (function (t) { return t[t.OPEN = 0] = "OPEN", t[t.CLOSING = 1] = "CLOSING", t[t.CLOSED = 2] = "CLOSED", t; })(m || {}), l = class {
    _ref;
    _config;
    _containerInstance;
    componentInstance;
    componentRef = null;
    disableClose;
    id;
    _afterOpened = new C(1);
    _beforeClosed = new C(1);
    _result;
    _closeFallbackTimeout;
    _state = m.OPEN;
    _closeInteractionType;
    constructor(o, e, i) { this._ref = o, this._config = e, this._containerInstance = i, this.disableClose = e.disableClose, this.id = o.id, o.addPanelClass("mat-mdc-dialog-panel"), i._animationStateChanged.pipe(c(n => n.state === "opened"), p(1)).subscribe(() => { this._afterOpened.next(), this._afterOpened.complete(); }), i._animationStateChanged.pipe(c(n => n.state === "closed"), p(1)).subscribe(() => { clearTimeout(this._closeFallbackTimeout), this._finishDialogClose(); }), o.overlayRef.detachments().subscribe(() => { this._beforeClosed.next(this._result), this._beforeClosed.complete(), this._finishDialogClose(); }), Y(this.backdropClick(), this.keydownEvents().pipe(c(n => n.keyCode === Q && !this.disableClose && !X(n)))).subscribe(n => { this.disableClose || (n.preventDefault(), R(this, n.type === "keydown" ? "keyboard" : "mouse")); }); }
    close(o) { let e = this._config.closePredicate; e && !e(o, this._config, this.componentInstance) || (this._result = o, this._containerInstance._animationStateChanged.pipe(c(i => i.state === "closing"), p(1)).subscribe(i => { this._beforeClosed.next(o), this._beforeClosed.complete(), this._ref.overlayRef.detachBackdrop(), this._closeFallbackTimeout = setTimeout(() => this._finishDialogClose(), i.totalTime + 100); }), this._state = m.CLOSING, this._containerInstance._startExitAnimation()); }
    afterOpened() { return this._afterOpened; }
    afterClosed() { return this._ref.closed; }
    beforeClosed() { return this._beforeClosed; }
    backdropClick() { return this._ref.backdropClick; }
    keydownEvents() { return this._ref.keydownEvents; }
    updatePosition(o) { let e = this._ref.config.positionStrategy; return o && (o.left || o.right) ? o.left ? e.left(o.left) : e.right(o.right) : e.centerHorizontally(), o && (o.top || o.bottom) ? o.top ? e.top(o.top) : e.bottom(o.bottom) : e.centerVertically(), this._ref.updatePosition(), this; }
    updateSize(o = "", e = "") { return this._ref.updateSize(o, e), this; }
    addPanelClass(o) { return this._ref.addPanelClass(o), this; }
    removePanelClass(o) { return this._ref.removePanelClass(o), this; }
    getState() { return this._state; }
    _finishDialogClose() { this._state = m.CLOSED, this._ref.close(this._result, { focusOrigin: this._closeInteractionType }), this.componentInstance = null; }
};
function R(t, o, e) { return t._closeInteractionType = o, t.close(e); }
var nt = new _("MatMdcDialogData"), at = new _("mat-mdc-dialog-default-options"), ot = new _("mat-mdc-dialog-scroll-strategy", { providedIn: "root", factory: () => { let t = s(w); return () => M(t); } }), b = (() => { class t {
    _defaultOptions = s(at, { optional: !0 });
    _scrollStrategy = s(ot);
    _parentDialog = s(t, { optional: !0, skipSelf: !0 });
    _idGenerator = s(I);
    _injector = s(w);
    _dialog = s(V);
    _animationsDisabled = u();
    _openDialogsAtThisLevel = [];
    _afterAllClosedAtThisLevel = new A;
    _afterOpenedAtThisLevel = new A;
    dialogConfigClass = g;
    _dialogRefConstructor;
    _dialogContainerType;
    _dialogDataToken;
    get openDialogs() { return this._parentDialog ? this._parentDialog.openDialogs : this._openDialogsAtThisLevel; }
    get afterOpened() { return this._parentDialog ? this._parentDialog.afterOpened : this._afterOpenedAtThisLevel; }
    _getAfterAllClosed() { let e = this._parentDialog; return e ? e._getAfterAllClosed() : this._afterAllClosedAtThisLevel; }
    afterAllClosed = $(() => this.openDialogs.length ? this._getAfterAllClosed() : this._getAfterAllClosed().pipe(K(void 0)));
    constructor() { this._dialogRefConstructor = l, this._dialogContainerType = it, this._dialogDataToken = nt; }
    open(e, i) { let n; i = d(d({}, this._defaultOptions || new g), i), i.id = i.id || this._idGenerator.getId("mat-mdc-dialog-"), i.scrollStrategy = i.scrollStrategy || this._scrollStrategy(); let h = this._dialog.open(e, v(d({}, i), { positionStrategy: P(this._injector).centerHorizontally().centerVertically(), disableClose: !0, closePredicate: void 0, closeOnDestroy: !1, closeOnOverlayDetachments: !1, disableAnimations: this._animationsDisabled || i.enterAnimationDuration?.toLocaleString() === "0" || i.exitAnimationDuration?.toString() === "0", container: { type: this._dialogContainerType, providers: () => [{ provide: this.dialogConfigClass, useValue: i }, { provide: G, useValue: i }] }, templateContext: () => ({ dialogRef: n }), providers: (r, F, y) => (n = new this._dialogRefConstructor(r, i, y), n.updatePosition(i?.position), [{ provide: this._dialogContainerType, useValue: y }, { provide: this._dialogDataToken, useValue: F.data }, { provide: this._dialogRefConstructor, useValue: n }, { provide: H, useValue: null }]) })); return n.componentRef = h.componentRef, n.componentInstance = h.componentInstance, this.openDialogs.push(n), this.afterOpened.next(n), n.afterClosed().subscribe(() => { let r = this.openDialogs.indexOf(n); r > -1 && (this.openDialogs.splice(r, 1), this.openDialogs.length || this._getAfterAllClosed().next()); }), n; }
    closeAll() { this._closeDialogs(this.openDialogs); }
    getDialogById(e) { return this.openDialogs.find(i => i.id === e); }
    ngOnDestroy() { this._closeDialogs(this._openDialogsAtThisLevel), this._afterAllClosedAtThisLevel.complete(), this._afterOpenedAtThisLevel.complete(); }
    _closeDialogs(e) { let i = e.length; for (; i--;)
        e[i].close(); }
    static \u0275fac = function (i) { return new (i || t); };
    static \u0275prov = a.\u0275\u0275defineService({ token: t, factory: t.\u0275fac });
} return t; })(), Nt = (() => { class t {
    dialogRef = s(l, { optional: !0 });
    _elementRef = s(O);
    _dialog = s(b);
    ariaLabel;
    type = "button";
    dialogResult;
    _matDialogClose;
    ngOnInit() { this.dialogRef || (this.dialogRef = L(this._elementRef, this._dialog.openDialogs)); }
    ngOnChanges(e) { let i = e._matDialogClose; i && (this.dialogResult = i.currentValue); }
    _onButtonClick(e) { this._elementRef.nativeElement.getAttribute("aria-disabled") !== "true" && R(this.dialogRef, e.screenX === 0 && e.screenY === 0 ? "keyboard" : "mouse", this.dialogResult); }
    static \u0275fac = function (i) { return new (i || t); };
    static \u0275dir = a.\u0275\u0275defineDirective({ type: t, selectors: [["", "mat-dialog-close", ""], ["", "matDialogClose", ""]], hostVars: 2, hostBindings: function (i, n) { i & 1 && a.\u0275\u0275listener("click", function (r) { return n._onButtonClick(r); }), i & 2 && a.\u0275\u0275attribute("aria-label", n.ariaLabel || null)("type", n.type); }, inputs: { ariaLabel: [0, "aria-label", "ariaLabel"], type: "type", dialogResult: [0, "mat-dialog-close", "dialogResult"], _matDialogClose: [0, "matDialogClose", "_matDialogClose"] }, exportAs: ["matDialogClose"], features: [a.\u0275\u0275NgOnChangesFeature] });
} return t; })(), E = (() => { class t {
    _dialogRef = s(l, { optional: !0 });
    _elementRef = s(O);
    _dialog = s(b);
    ngOnInit() { this._dialogRef || (this._dialogRef = L(this._elementRef, this._dialog.openDialogs)), this._dialogRef && Promise.resolve().then(() => { this._onAdd(); }); }
    ngOnDestroy() { this._dialogRef?._containerInstance && Promise.resolve().then(() => { this._onRemove(); }); }
    static \u0275fac = function (i) { return new (i || t); };
    static \u0275dir = a.\u0275\u0275defineDirective({ type: t });
} return t; })(), wt = (() => { class t extends E {
    id = s(I).getId("mat-mdc-dialog-title-");
    _onAdd() { this._dialogRef._containerInstance?._addAriaLabelledBy?.(this.id); }
    _onRemove() { this._dialogRef?._containerInstance?._removeAriaLabelledBy?.(this.id); }
    static \u0275fac = (() => { let e; return function (n) { return (e || (e = a.\u0275\u0275getInheritedFactory(t)))(n || t); }; })();
    static \u0275dir = a.\u0275\u0275defineDirective({ type: t, selectors: [["", "mat-dialog-title", ""], ["", "matDialogTitle", ""]], hostAttrs: [1, "mat-mdc-dialog-title", "mdc-dialog__title"], hostVars: 1, hostBindings: function (i, n) { i & 2 && a.\u0275\u0275domProperty("id", n.id); }, inputs: { id: "id" }, exportAs: ["matDialogTitle"], features: [a.\u0275\u0275InheritDefinitionFeature] });
} return t; })(), Ot = (() => { class t {
    static \u0275fac = function (i) { return new (i || t); };
    static \u0275dir = a.\u0275\u0275defineDirective({ type: t, selectors: [["", "mat-dialog-content", ""], ["mat-dialog-content"], ["", "matDialogContent", ""]], hostAttrs: [1, "mat-mdc-dialog-content", "mdc-dialog__content"], features: [a.\u0275\u0275HostDirectivesFeature([k.CdkScrollable])] });
} return t; })(), It = (() => { class t extends E {
    align;
    _onAdd() { this._dialogRef._containerInstance?._updateActionSectionCount?.(1); }
    _onRemove() { this._dialogRef._containerInstance?._updateActionSectionCount?.(-1); }
    static \u0275fac = (() => { let e; return function (n) { return (e || (e = a.\u0275\u0275getInheritedFactory(t)))(n || t); }; })();
    static \u0275dir = a.\u0275\u0275defineDirective({ type: t, selectors: [["", "mat-dialog-actions", ""], ["mat-dialog-actions"], ["", "matDialogActions", ""]], hostAttrs: [1, "mat-mdc-dialog-actions", "mdc-dialog__actions"], hostVars: 6, hostBindings: function (i, n) { i & 2 && a.\u0275\u0275classProp("mat-mdc-dialog-actions-align-start", n.align === "start")("mat-mdc-dialog-actions-align-center", n.align === "center")("mat-mdc-dialog-actions-align-end", n.align === "end"); }, inputs: { align: "align" }, features: [a.\u0275\u0275InheritDefinitionFeature] });
} return t; })();
function L(t, o) { let e = t.nativeElement.parentElement; for (; e && !e.classList.contains("mat-mdc-dialog-container");)
    e = e.parentElement; return e ? o.find(i => i.id === e.id) : null; }
var kt = (() => { class t {
    static \u0275fac = function (i) { return new (i || t); };
    static \u0275mod = a.\u0275\u0275defineNgModule({ type: t });
    static \u0275inj = a.\u0275\u0275defineInjector({ providers: [b], imports: [q, B, U, Z] });
} return t; })();
export { nt as MAT_DIALOG_DATA, at as MAT_DIALOG_DEFAULT_OPTIONS, ot as MAT_DIALOG_SCROLL_STRATEGY, b as MatDialog, It as MatDialogActions, Nt as MatDialogClose, g as MatDialogConfig, it as MatDialogContainer, Ot as MatDialogContent, kt as MatDialogModule, l as MatDialogRef, m as MatDialogState, wt as MatDialogTitle, R as _closeDialogVia };
