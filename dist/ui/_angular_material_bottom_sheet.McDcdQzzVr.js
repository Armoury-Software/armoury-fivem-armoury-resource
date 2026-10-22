import { c as f } from "@nf-internal/chunk-L6LZ2NRF";
import { a as c, b as u } from "@nf-internal/chunk-2NFLSA4Y";
import * as i from "@angular/core";
import { EventEmitter as y, inject as l, InjectionToken as S, Injector as x } from "@angular/core";
import { CdkDialogContainer as k, Dialog as C, DialogModule as B } from "@angular/cdk/dialog";
import { createGlobalPositionStrategy as w, createBlockScrollStrategy as D } from "@angular/cdk/overlay";
import { BreakpointObserver as M, Breakpoints as r } from "@angular/cdk/layout";
import { CdkPortalOutlet as R, PortalModule as E } from "@angular/cdk/portal";
import { ESCAPE as T, hasModifierKey as A } from "@angular/cdk/keycodes";
import { Subject as N, merge as O } from "rxjs";
import { filter as h, take as p } from "rxjs/operators";
import { BidiModule as I } from "@angular/cdk/bidi";
function F(o, m) { }
var _ = "_mat-bottom-sheet-enter", g = "_mat-bottom-sheet-exit", L = (() => {
    class o extends k {
        _breakpointSubscription;
        _animationsDisabled = f();
        _animationState = "void";
        _animationStateChanged = new y;
        _destroyed = !1;
        constructor() { super(); let e = l(M); this._breakpointSubscription = e.observe([r.Medium, r.Large, r.XLarge]).subscribe(() => { let n = this._elementRef.nativeElement.classList; n.toggle("mat-bottom-sheet-container-medium", e.isMatched(r.Medium)), n.toggle("mat-bottom-sheet-container-large", e.isMatched(r.Large)), n.toggle("mat-bottom-sheet-container-xlarge", e.isMatched(r.XLarge)); }); }
        enter() { this._destroyed || (this._animationState = "visible", this._changeDetectorRef.markForCheck(), this._changeDetectorRef.detectChanges(), this._animationsDisabled && this._simulateAnimation(_)); }
        exit() { this._destroyed || (this._elementRef.nativeElement.setAttribute("mat-exit", ""), this._animationState = "hidden", this._changeDetectorRef.markForCheck(), this._animationsDisabled && this._simulateAnimation(g)); }
        ngOnDestroy() { super.ngOnDestroy(), this._breakpointSubscription.unsubscribe(), this._destroyed = !0; }
        _simulateAnimation(e) { this._ngZone.run(() => { this._handleAnimationEvent(!0, e, this._elementRef.nativeElement), setTimeout(() => this._handleAnimationEvent(!1, e, this._elementRef.nativeElement)); }); }
        _trapFocus() { super._trapFocus({ preventScroll: !0 }); }
        _handleAnimationEvent(e, n, t) { if (t === this._elementRef.nativeElement) {
            let a = n === _;
            (a || n === g) && this._animationStateChanged.emit({ toState: a ? "visible" : "hidden", phase: e ? "start" : "done" });
        } }
        static \u0275fac = function (n) { return new (n || o); };
        static \u0275cmp = i.\u0275\u0275defineComponent({ type: o, selectors: [["mat-bottom-sheet-container"]], hostAttrs: ["tabindex", "-1", 1, "mat-bottom-sheet-container"], hostVars: 9, hostBindings: function (n, t) { n & 1 && i.\u0275\u0275listener("animationstart", function (s) { return t._handleAnimationEvent(!0, s.animationName, s.target); })("animationend", function (s) { return t._handleAnimationEvent(!1, s.animationName, s.target); })("animationcancel", function (s) { return t._handleAnimationEvent(!1, s.animationName, s.target); }), n & 2 && (i.\u0275\u0275attribute("role", t._config.role)("aria-modal", t._config.ariaModal)("aria-label", t._config.ariaLabel), i.\u0275\u0275classProp("mat-bottom-sheet-container-animations-enabled", !t._animationsDisabled)("mat-bottom-sheet-container-enter", t._animationState === "visible")("mat-bottom-sheet-container-exit", t._animationState === "hidden")); }, features: [i.\u0275\u0275InheritDefinitionFeature], decls: 1, vars: 0, consts: [["cdkPortalOutlet", ""]], template: function (n, t) { n & 1 && i.\u0275\u0275template(0, F, 0, 0, "ng-template", 0); }, dependencies: [R], styles: [`@keyframes _mat-bottom-sheet-enter {
  from {
    transform: translateY(100%);
  }
  to {
    transform: none;
  }
}
@keyframes _mat-bottom-sheet-exit {
  from {
    transform: none;
  }
  to {
    transform: translateY(100%);
  }
}
.mat-bottom-sheet-container {
  box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12);
  padding: 8px 16px;
  min-width: 100vw;
  box-sizing: border-box;
  display: block;
  outline: 0;
  max-height: 80vh;
  overflow: auto;
  position: relative;
  background: var(--%NS%mat-bottom-sheet-container-background-color, var(--%NS%mat-sys-surface-container-low));
  color: var(--%NS%mat-bottom-sheet-container-text-color, var(--%NS%mat-sys-on-surface));
  font-family: var(--%NS%mat-bottom-sheet-container-text-font, var(--%NS%mat-sys-body-large-font));
  font-size: var(--%NS%mat-bottom-sheet-container-text-size, var(--%NS%mat-sys-body-large-size));
  line-height: var(--%NS%mat-bottom-sheet-container-text-line-height, var(--%NS%mat-sys-body-large-line-height));
  font-weight: var(--%NS%mat-bottom-sheet-container-text-weight, var(--%NS%mat-sys-body-large-weight));
  letter-spacing: var(--%NS%mat-bottom-sheet-container-text-tracking, var(--%NS%mat-sys-body-large-tracking));
}
@media (forced-colors: active) {
  .mat-bottom-sheet-container {
    outline: 1px solid;
  }
}

.mat-bottom-sheet-container-animations-enabled {
  transform: translateY(100%);
}
.mat-bottom-sheet-container-animations-enabled.mat-bottom-sheet-container-enter {
  animation: _mat-bottom-sheet-enter 195ms cubic-bezier(0, 0, 0.2, 1) forwards;
}
.mat-bottom-sheet-container-animations-enabled.mat-bottom-sheet-container-exit {
  animation: _mat-bottom-sheet-exit 375ms cubic-bezier(0.4, 0, 1, 1) backwards;
}

.mat-bottom-sheet-container-xlarge, .mat-bottom-sheet-container-large, .mat-bottom-sheet-container-medium {
  border-top-left-radius: var(--%NS%mat-bottom-sheet-container-shape, 28px);
  border-top-right-radius: var(--%NS%mat-bottom-sheet-container-shape, 28px);
}

.mat-bottom-sheet-container-medium {
  min-width: 384px;
  max-width: calc(100vw - 128px);
}

.mat-bottom-sheet-container-large {
  min-width: 512px;
  max-width: calc(100vw - 256px);
}

.mat-bottom-sheet-container-xlarge {
  min-width: 576px;
  max-width: calc(100vw - 384px);
}
`], encapsulation: 2, changeDetection: 1 });
    }
    return o;
})(), H = new S("MatBottomSheetData"), b = class {
    viewContainerRef;
    injector;
    panelClass;
    direction;
    data = null;
    hasBackdrop = !0;
    backdropClass;
    disableClose = !1;
    ariaLabel = null;
    ariaModal = !1;
    closeOnNavigation = !0;
    autoFocus = "first-tabbable";
    restoreFocus = !0;
    scrollStrategy;
    height = "";
    minHeight;
    maxHeight;
    bindings;
}, d = class {
    _ref;
    get instance() { return this._ref.componentInstance; }
    get componentRef() { return this._ref.componentRef; }
    containerInstance;
    disableClose;
    _afterOpened = new N;
    _result;
    _closeFallbackTimeout;
    constructor(m, e, n) { this._ref = m, this.containerInstance = n, this.disableClose = e.disableClose, n._animationStateChanged.pipe(h(t => t.phase === "done" && t.toState === "visible"), p(1)).subscribe(() => { this._afterOpened.next(), this._afterOpened.complete(); }), n._animationStateChanged.pipe(h(t => t.phase === "done" && t.toState === "hidden"), p(1)).subscribe(() => { clearTimeout(this._closeFallbackTimeout), this._ref.close(this._result); }), m.overlayRef.detachments().subscribe(() => { this._ref.close(this._result); }), O(this.backdropClick(), this.keydownEvents().pipe(h(t => t.keyCode === T))).subscribe(t => { !this.disableClose && (t.type !== "keydown" || !A(t)) && (t.preventDefault(), this.dismiss()); }); }
    dismiss(m) { this.containerInstance && (this.containerInstance._animationStateChanged.pipe(h(e => e.phase === "start"), p(1)).subscribe(() => { this._closeFallbackTimeout = setTimeout(() => this._ref.close(this._result), 500), this._ref.overlayRef.detachBackdrop(); }), this._result = m, this.containerInstance.exit(), this.containerInstance = null); }
    afterDismissed() { return this._ref.closed; }
    afterOpened() { return this._afterOpened; }
    backdropClick() { return this._ref.backdropClick; }
    keydownEvents() { return this._ref.keydownEvents; }
}, j = new S("mat-bottom-sheet-default-options"), z = (() => { class o {
    _injector = l(x);
    _parentBottomSheet = l(o, { optional: !0, skipSelf: !0 });
    _animationsDisabled = f();
    _defaultOptions = l(j, { optional: !0 });
    _bottomSheetRefAtThisLevel = null;
    _dialog = l(C);
    get _openedBottomSheetRef() { let e = this._parentBottomSheet; return e ? e._openedBottomSheetRef : this._bottomSheetRefAtThisLevel; }
    set _openedBottomSheetRef(e) { this._parentBottomSheet ? this._parentBottomSheet._openedBottomSheetRef = e : this._bottomSheetRefAtThisLevel = e; }
    open(e, n) { let t = c(c({}, this._defaultOptions || new b), n), a; return this._dialog.open(e, u(c({}, t), { disableClose: !0, closeOnOverlayDetachments: !1, maxWidth: "100%", container: L, scrollStrategy: t.scrollStrategy || D(this._injector), positionStrategy: w(this._injector).centerHorizontally().bottom("0"), disableAnimations: this._animationsDisabled, templateContext: () => ({ bottomSheetRef: a }), providers: (s, P, v) => (a = new d(s, t, v), [{ provide: d, useValue: a }, { provide: H, useValue: t.data }]) })), a.afterDismissed().subscribe(() => { this._openedBottomSheetRef === a && (this._openedBottomSheetRef = null); }), this._openedBottomSheetRef ? (this._openedBottomSheetRef.afterDismissed().subscribe(() => a.containerInstance?.enter()), this._openedBottomSheetRef.dismiss()) : a.containerInstance.enter(), this._openedBottomSheetRef = a, a; }
    dismiss(e) { this._openedBottomSheetRef && this._openedBottomSheetRef.dismiss(e); }
    ngOnDestroy() { this._bottomSheetRefAtThisLevel && this._bottomSheetRefAtThisLevel.dismiss(); }
    static \u0275fac = function (n) { return new (n || o); };
    static \u0275prov = i.\u0275\u0275defineService({ token: o, factory: o.\u0275fac });
} return o; })(), ot = (() => { class o {
    static \u0275fac = function (n) { return new (n || o); };
    static \u0275mod = i.\u0275\u0275defineNgModule({ type: o });
    static \u0275inj = i.\u0275\u0275defineInjector({ providers: [z], imports: [B, E, I] });
} return o; })();
export { H as MAT_BOTTOM_SHEET_DATA, j as MAT_BOTTOM_SHEET_DEFAULT_OPTIONS, z as MatBottomSheet, b as MatBottomSheetConfig, L as MatBottomSheetContainer, ot as MatBottomSheetModule, d as MatBottomSheetRef };
