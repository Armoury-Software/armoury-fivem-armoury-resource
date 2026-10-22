import { A as j, B, C as G, D as z, E as K, F as U, G as Y, a as C, b as _, c as f, d as y, e as O, f as g, g as v, h, i as E, j as F, k, l as D, m as N, n as b, o as P, p as V, q as R, r as l, s as A, t as w, u as x, v as L, w as T, x as I, y as M, z as W } from "@nf-internal/chunk-3WOHWLZB";
import "@nf-internal/chunk-RECHUXGF";
import "@nf-internal/chunk-ALR2ABW3";
import { d as i, f as a, g as c, i as s, m as u, n as d, o as S, p as m, q as p } from "@nf-internal/chunk-PM6XRI7M";
import "@nf-internal/chunk-FVDLKYOC";
import "@nf-internal/chunk-PGIYYMTQ";
import "@nf-internal/chunk-P7VGBIY2";
import "@nf-internal/chunk-SVIUGILY";
import "@nf-internal/chunk-LAIZNMCN";
import "@nf-internal/chunk-DQ6Z6NC4";
import "@nf-internal/chunk-DG2NPXAW";
import { a as o } from "@nf-internal/chunk-EPOSXZTE";
import "@nf-internal/chunk-VZX42TFW";
import "@nf-internal/chunk-JE6VEUSL";
import "@nf-internal/chunk-XID2BBVI";
import "@nf-internal/chunk-MQ6KVUBG";
import "@nf-internal/chunk-SMAQMSIK";
import "@nf-internal/chunk-AWGKBVI5";
import "@nf-internal/chunk-2NFLSA4Y";
import * as n from "@angular/core";
import { inject as H, RendererFactory2 as J } from "@angular/core";
import "@angular/common";
import "rxjs";
import "rxjs/operators";
var te = (() => { class t extends l {
    _renderer = H(J).createRenderer(null, null);
    _fullScreenEventName;
    _cleanupFullScreenListener;
    ngOnDestroy() { super.ngOnDestroy(), this._cleanupFullScreenListener?.(); }
    _createContainer() { let e = this._getEventName(); super._createContainer(), this._adjustParentForFullscreenChange(), e && (this._cleanupFullScreenListener?.(), this._cleanupFullScreenListener = this._renderer.listen("document", e, () => { this._adjustParentForFullscreenChange(); })); }
    _adjustParentForFullscreenChange() { this._containerElement && (this.getFullscreenElement() || this._document.body).appendChild(this._containerElement); }
    _getEventName() { if (!this._fullScreenEventName) {
        let e = this._document;
        e.fullscreenEnabled ? this._fullScreenEventName = "fullscreenchange" : e.webkitFullscreenEnabled && (this._fullScreenEventName = "webkitfullscreenchange");
    } return this._fullScreenEventName; }
    getFullscreenElement() { let e = this._document; return e.fullscreenElement || e.webkitFullscreenElement || null; }
    static \u0275fac = function (r) { return new (r || t); };
    static \u0275prov = n.\u0275\u0275defineService({ token: t, factory: t.\u0275fac });
} return t; })();
export { _ as BlockScrollStrategy, K as CDK_CONNECTED_OVERLAY_DEFAULT_CONFIG, U as CdkConnectedOverlay, z as CdkOverlayOrigin, c as CdkScrollable, y as CloseScrollStrategy, N as ConnectedOverlayPositionChange, k as ConnectionPositionPair, x as FlexibleConnectedPositionStrategy, te as FullscreenOverlayContainer, M as GlobalPositionStrategy, g as NoopScrollStrategy, j as OVERLAY_DEFAULT_CONFIG, G as Overlay, F as OverlayConfig, l as OverlayContainer, V as OverlayKeyboardDispatcher, Y as OverlayModule, R as OverlayOutsideClickDispatcher, W as OverlayPositionBuilder, A as OverlayRef, h as RepositionScrollStrategy, T as STANDARD_DROPDOWN_ADJACENT_POSITIONS, L as STANDARD_DROPDOWN_BELOW_POSITIONS, a as ScrollDispatcher, E as ScrollStrategyOptions, D as ScrollingVisibility, s as ViewportRuler, C as createBlockScrollStrategy, f as createCloseScrollStrategy, w as createFlexibleConnectedPositionStrategy, I as createGlobalPositionStrategy, O as createNoopScrollStrategy, B as createOverlayRef, v as createRepositionScrollStrategy, P as validateHorizontalPosition, b as validateVerticalPosition, i as \u0275\u0275CdkFixedSizeVirtualScroll, p as \u0275\u0275CdkScrollableModule, d as \u0275\u0275CdkVirtualForOf, u as \u0275\u0275CdkVirtualScrollViewport, S as \u0275\u0275CdkVirtualScrollableElement, m as \u0275\u0275CdkVirtualScrollableWindow, o as \u0275\u0275Dir };
