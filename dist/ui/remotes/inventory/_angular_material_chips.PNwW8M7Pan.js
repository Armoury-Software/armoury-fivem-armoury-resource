import { a as Y } from "@nf-internal/chunk-WJDZCIUH";
import { b as C } from "@nf-internal/chunk-NE3WOAAK";
import { a as Q, j as K, n as W } from "@nf-internal/chunk-OWKVPWKA";
import { a as Z } from "@nf-internal/chunk-M4FUFBJO";
import { a as U } from "@nf-internal/chunk-TBOQSXHX";
import { a as z, c as V, e as j, f as G, g as q } from "@nf-internal/chunk-PMOCNCWX";
import { e as H } from "@nf-internal/chunk-TDH6BADM";
import { a as w } from "@nf-internal/chunk-2SOO3RAN";
import { c as O } from "@nf-internal/chunk-L6LZ2NRF";
import "@nf-internal/chunk-2NFLSA4Y";
import { ENTER as p, SPACE as A, BACKSPACE as $, DELETE as li, TAB as ii, hasModifierKey as x, UP_ARROW as X, DOWN_ARROW as hi } from "@angular/cdk/keycodes";
import * as t from "@angular/core";
import { InjectionToken as m, inject as r, ElementRef as v, booleanAttribute as d, numberAttribute as ti, ChangeDetectorRef as ei, HOST_TAG_NAME as pi, NgZone as mi, DOCUMENT as ni, EventEmitter as h, Injector as ui, Renderer2 as vi, afterNextRender as _i, QueryList as gi, forwardRef as fi } from "@angular/core";
import { takeUntil as l, startWith as f, switchMap as yi } from "rxjs/operators";
import { FocusMonitor as bi, _IdGenerator as R, FocusKeyManager as Si } from "@angular/cdk/a11y";
import { _CdkPrivateStyleLoader as ai, _VisuallyHiddenLoader as wi } from "@angular/cdk/private";
import { Subject as y, merge as T } from "rxjs";
import { Directionality as Ci, BidiModule as Ni } from "@angular/cdk/bidi";
import "@angular/cdk/platform";
import "@angular/cdk/coercion";
import "@angular/cdk/layout";
import "@angular/common";
import "@angular/cdk/observers/private";
var ci = ["*", [["mat-chip-avatar"], ["", "matChipAvatar", ""]], [["mat-chip-trailing-icon"], ["", "matChipRemove", ""], ["", "matChipTrailingIcon", ""]]], oi = ["*", "mat-chip-avatar, [matChipAvatar]", "mat-chip-trailing-icon,[matChipRemove],[matChipTrailingIcon]"];
function xi(a, s) { a & 1 && (t.\u0275\u0275elementStart(0, "span", 3), t.\u0275\u0275projection(1, 1), t.\u0275\u0275elementEnd()); }
function Ii(a, s) { a & 1 && (t.\u0275\u0275elementStart(0, "span", 7), t.\u0275\u0275projection(1, 2), t.\u0275\u0275elementEnd()); }
function ki(a, s) { a & 1 && (t.\u0275\u0275elementStart(0, "span", 3), t.\u0275\u0275projection(1, 1), t.\u0275\u0275elementStart(2, "span", 8), t.\u0275\u0275namespaceSVG(), t.\u0275\u0275elementStart(3, "svg", 9), t.\u0275\u0275element(4, "path", 10), t.\u0275\u0275elementEnd()()()); }
function Ei(a, s) { a & 1 && (t.\u0275\u0275elementStart(0, "span", 7), t.\u0275\u0275projection(1, 2), t.\u0275\u0275elementEnd()); }
var ri = `.mdc-evolution-chip,
.mdc-evolution-chip__cell,
.mdc-evolution-chip__action {
  display: inline-flex;
  align-items: center;
}

.mdc-evolution-chip {
  position: relative;
  max-width: 100%;
}

.mat-mdc-chip-touch-target {
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  height: 48px;
  transform: translateY(-50%);
  display: var(--%NS%mat-chip-touch-target-display, block);
  pointer-events: auto;
}

.mdc-evolution-chip__cell,
.mdc-evolution-chip__action {
  height: 100%;
}

.mdc-evolution-chip__cell--primary {
  flex-basis: 100%;
  overflow-x: hidden;
}

.mdc-evolution-chip__cell--trailing {
  flex: 1 0 auto;
}

.mdc-evolution-chip__action {
  align-items: center;
  background: none;
  border: none;
  box-sizing: content-box;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  outline: none;
  padding: 0;
  text-decoration: none;
  color: inherit;
}

.mdc-evolution-chip__action--presentational {
  cursor: auto;
}

.mdc-evolution-chip--disabled,
.mdc-evolution-chip__action:disabled {
  pointer-events: none;
}
@media (forced-colors: active) {
  .mdc-evolution-chip--disabled,
  .mdc-evolution-chip__action:disabled {
    forced-color-adjust: none;
  }
}

.mdc-evolution-chip__action--primary {
  font: inherit;
  letter-spacing: inherit;
  white-space: inherit;
  overflow-x: hidden;
}
.mat-mdc-standard-chip .mdc-evolution-chip__action--%NS%primary::before {
  border-width: var(--%NS%mat-chip-outline-width, 1px);
  border-radius: var(--%NS%mat-chip-container-shape-radius, 8px);
  box-sizing: border-box;
  content: "";
  height: 100%;
  left: 0;
  position: absolute;
  pointer-events: none;
  top: 0;
  width: 100%;
  z-index: 1;
  border-style: solid;
}
.mat-mdc-standard-chip .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 12px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__action--%NS%primary::before {
  border-color: var(--%NS%mat-chip-outline-color, var(--%NS%mat-sys-outline));
}
.mdc-evolution-chip__action--%NS%primary:not(.mdc-evolution-chip__action--presentational):not(.mdc-ripple-upgraded):focus::before {
  border-color: var(--%NS%mat-chip-focus-outline-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__action--%NS%primary::before {
  border-color: var(--%NS%mat-chip-disabled-outline-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected .mdc-evolution-chip__action--%NS%primary::before {
  border-width: var(--%NS%mat-chip-flat-selected-outline-width, 0);
}
.mat-mdc-basic-chip .mdc-evolution-chip__action--primary {
  font: inherit;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}

.mdc-evolution-chip__action--secondary {
  position: relative;
  overflow: visible;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__action--secondary {
  color: var(--%NS%mat-chip-with-trailing-icon-trailing-icon-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__action--secondary {
  color: var(--%NS%mat-chip-with-trailing-icon-disabled-trailing-icon-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary, .mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary, .mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary, .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary, [dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}

.mdc-evolution-chip__text-label {
  -webkit-user-select: none;
  user-select: none;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.mat-mdc-standard-chip .mdc-evolution-chip__text-label {
  font-family: var(--%NS%mat-chip-label-text-font, var(--%NS%mat-sys-label-large-font));
  line-height: var(--%NS%mat-chip-label-text-line-height, var(--%NS%mat-sys-label-large-line-height));
  font-size: var(--%NS%mat-chip-label-text-size, var(--%NS%mat-sys-label-large-size));
  font-weight: var(--%NS%mat-chip-label-text-weight, var(--%NS%mat-sys-label-large-weight));
  letter-spacing: var(--%NS%mat-chip-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__text-label {
  color: var(--%NS%mat-chip-label-text-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--%NS%selected:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__text-label {
  color: var(--%NS%mat-chip-selected-label-text-color, var(--%NS%mat-sys-on-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__text-label, .mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled .mdc-evolution-chip__text-label {
  color: var(--%NS%mat-chip-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}

.mdc-evolution-chip__graphic {
  align-items: center;
  display: inline-flex;
  justify-content: center;
  overflow: hidden;
  pointer-events: none;
  position: relative;
  flex: 1 0 auto;
}
.mat-mdc-standard-chip .mdc-evolution-chip__graphic {
  width: var(--%NS%mat-chip-with-avatar-avatar-size, 24px);
  height: var(--%NS%mat-chip-with-avatar-avatar-size, 24px);
  font-size: var(--%NS%mat-chip-with-avatar-avatar-size, 24px);
}
.mdc-evolution-chip--selecting .mdc-evolution-chip__graphic {
  transition: width 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mdc-evolution-chip--%NS%selectable:not(.mdc-evolution-chip--selected):not(.mdc-evolution-chip--with-primary-icon) .mdc-evolution-chip__graphic {
  width: 0;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic {
  padding-left: 6px;
  padding-right: 6px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic {
  padding-left: 4px;
  padding-right: 8px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic {
  padding-left: 8px;
  padding-right: 4px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic {
  padding-left: 6px;
  padding-right: 6px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic {
  padding-left: 4px;
  padding-right: 8px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic {
  padding-left: 8px;
  padding-right: 4px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__graphic {
  padding-left: 0;
}

.mdc-evolution-chip__checkmark {
  position: absolute;
  opacity: 0;
  top: 50%;
  left: 50%;
  height: 20px;
  width: 20px;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__checkmark {
  color: var(--%NS%mat-chip-with-icon-selected-icon-color, var(--%NS%mat-sys-on-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__checkmark {
  color: var(--%NS%mat-chip-with-icon-disabled-icon-color, var(--%NS%mat-sys-on-surface));
}
.mdc-evolution-chip--selecting .mdc-evolution-chip__checkmark {
  transition: transform 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1);
  transform: translate(-75%, -50%);
}
.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark {
  transform: translate(-50%, -50%);
  opacity: 1;
}

.mdc-evolution-chip__checkmark-svg {
  display: block;
}

.mdc-evolution-chip__checkmark-path {
  stroke-width: 2px;
  stroke-dasharray: 29.7833385;
  stroke-dashoffset: 29.7833385;
  stroke: currentColor;
}
.mdc-evolution-chip--selecting .mdc-evolution-chip__checkmark-path {
  transition: stroke-dashoffset 150ms 45ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark-path {
  stroke-dashoffset: 0;
}
@media (forced-colors: active) {
  .mdc-evolution-chip__checkmark-path {
    stroke: CanvasText !important;
  }
}

.mat-mdc-standard-chip .mdc-evolution-chip__icon--trailing {
  height: 18px;
  width: 18px;
  font-size: 18px;
}
.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing.mat-mdc-chip-remove {
  opacity: calc(var(--%NS%mat-chip-trailing-action-opacity, 1) * var(--%NS%mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38));
}
.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing.mat-mdc-chip-remove:focus {
  opacity: calc(var(--%NS%mat-chip-trailing-action-focus-opacity, 1) * var(--%NS%mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38));
}

.mat-mdc-standard-chip {
  border-radius: var(--%NS%mat-chip-container-shape-radius, 8px);
  height: var(--%NS%mat-chip-container-height, 32px);
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) {
  background-color: var(--%NS%mat-chip-elevated-container-color, transparent);
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled {
  background-color: var(--%NS%mat-chip-elevated-disabled-container-color);
}
.mat-mdc-standard-chip.mdc-evolution-chip--%NS%selected:not(.mdc-evolution-chip--disabled) {
  background-color: var(--%NS%mat-chip-elevated-selected-container-color, var(--%NS%mat-sys-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled {
  background-color: var(--%NS%mat-chip-flat-disabled-selected-container-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
@media (forced-colors: active) {
  .mat-mdc-standard-chip {
    outline: solid 1px;
  }
}

.mat-mdc-standard-chip .mdc-evolution-chip__icon--primary {
  border-radius: var(--%NS%mat-chip-with-avatar-avatar-shape-radius, 24px);
  width: var(--%NS%mat-chip-with-icon-icon-size, 18px);
  height: var(--%NS%mat-chip-with-icon-icon-size, 18px);
  font-size: var(--%NS%mat-chip-with-icon-icon-size, 18px);
}
.mdc-evolution-chip--selected .mdc-evolution-chip__icon--primary {
  opacity: 0;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__icon--primary {
  color: var(--%NS%mat-chip-with-icon-icon-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--primary {
  color: var(--%NS%mat-chip-with-icon-disabled-icon-color, var(--%NS%mat-sys-on-surface));
}

.mat-mdc-chip-highlighted {
  --%NS%mat-chip-with-icon-icon-color: var(--%NS%mat-chip-with-icon-selected-icon-color, var(--%NS%mat-sys-on-secondary-container));
  --%NS%mat-chip-elevated-container-color: var(--%NS%mat-chip-elevated-selected-container-color, var(--%NS%mat-sys-secondary-container));
  --%NS%mat-chip-label-text-color: var(--%NS%mat-chip-selected-label-text-color, var(--%NS%mat-sys-on-secondary-container));
  --%NS%mat-chip-outline-width: var(--%NS%mat-chip-flat-selected-outline-width, 0);
}

.mat-mdc-chip-focus-overlay {
  background: var(--%NS%mat-chip-focus-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-chip-selected .mat-mdc-chip-focus-overlay, .mat-mdc-chip-highlighted .mat-mdc-chip-focus-overlay {
  background: var(--%NS%mat-chip-selected-focus-state-layer-color, var(--%NS%mat-sys-on-secondary-container));
}
.mat-mdc-chip:hover .mat-mdc-chip-focus-overlay {
  background: var(--%NS%mat-chip-hover-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
  opacity: var(--%NS%mat-chip-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-chip-focus-overlay .mat-mdc-chip-selected:hover, .mat-mdc-chip-highlighted:hover .mat-mdc-chip-focus-overlay {
  background: var(--%NS%mat-chip-selected-hover-state-layer-color, var(--%NS%mat-sys-on-secondary-container));
  opacity: var(--%NS%mat-chip-selected-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-chip.cdk-focused .mat-mdc-chip-focus-overlay {
  background: var(--%NS%mat-chip-focus-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
  opacity: var(--%NS%mat-chip-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-chip-selected.cdk-focused .mat-mdc-chip-focus-overlay, .mat-mdc-chip-highlighted.cdk-focused .mat-mdc-chip-focus-overlay {
  background: var(--%NS%mat-chip-selected-focus-state-layer-color, var(--%NS%mat-sys-on-secondary-container));
  opacity: var(--%NS%mat-chip-selected-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}

.mdc-evolution-chip--%NS%disabled:not(.mdc-evolution-chip--selected) .mat-mdc-chip-avatar {
  opacity: var(--%NS%mat-chip-with-avatar-disabled-avatar-opacity, 0.38);
}

.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing {
  opacity: var(--%NS%mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38);
}

.mdc-evolution-chip--disabled.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark {
  opacity: var(--%NS%mat-chip-with-icon-disabled-icon-opacity, 0.38);
}

.mat-mdc-standard-chip.mdc-evolution-chip--disabled {
  opacity: var(--%NS%mat-chip-disabled-container-opacity, 1);
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected .mdc-evolution-chip__icon--trailing, .mat-mdc-standard-chip.mat-mdc-chip-highlighted .mdc-evolution-chip__icon--trailing {
  color: var(--%NS%mat-chip-selected-trailing-icon-color, var(--%NS%mat-sys-on-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing, .mat-mdc-standard-chip.mat-mdc-chip-highlighted.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing {
  color: var(--%NS%mat-chip-selected-disabled-trailing-icon-color, var(--%NS%mat-sys-on-surface));
}

.mat-mdc-chip-edit, .mat-mdc-chip-remove {
  opacity: var(--%NS%mat-chip-trailing-action-opacity, 1);
}
.mat-mdc-chip-edit:focus, .mat-mdc-chip-remove:focus {
  opacity: var(--%NS%mat-chip-trailing-action-focus-opacity, 1);
}
.mat-mdc-chip-edit::after, .mat-mdc-chip-remove::after {
  background-color: var(--%NS%mat-chip-trailing-action-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-chip-edit:hover::after, .mat-mdc-chip-remove:hover::after {
  opacity: calc(var(--%NS%mat-chip-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity)) + var(--%NS%mat-chip-trailing-action-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity)));
}
.mat-mdc-chip-edit:focus::after, .mat-mdc-chip-remove:focus::after {
  opacity: calc(var(--%NS%mat-chip-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity)) + var(--%NS%mat-chip-trailing-action-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity)));
}

.mat-mdc-chip-selected .mat-mdc-chip-remove::after,
.mat-mdc-chip-highlighted .mat-mdc-chip-remove::after {
  background-color: var(--%NS%mat-chip-selected-trailing-action-state-layer-color, var(--%NS%mat-sys-on-secondary-container));
}

.mat-mdc-chip.cdk-focused .mat-mdc-chip-edit:focus::after, .mat-mdc-chip.cdk-focused .mat-mdc-chip-remove:focus::after {
  opacity: calc(var(--%NS%mat-chip-selected-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity)) + var(--%NS%mat-chip-trailing-action-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity)));
}
.mat-mdc-chip.cdk-focused .mat-mdc-chip-edit:hover::after, .mat-mdc-chip.cdk-focused .mat-mdc-chip-remove:hover::after {
  opacity: calc(var(--%NS%mat-chip-selected-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity)) + var(--%NS%mat-chip-trailing-action-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity)));
}

.mat-mdc-standard-chip {
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-standard-chip .mat-mdc-chip-graphic,
.mat-mdc-standard-chip .mat-mdc-chip-trailing-icon {
  box-sizing: content-box;
}
.mat-mdc-standard-chip._mat-animation-noopable,
.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__graphic,
.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__checkmark,
.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__checkmark-path {
  transition-duration: 1ms;
  animation-duration: 1ms;
}

.mat-mdc-chip-focus-overlay {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  opacity: 0;
  border-radius: inherit;
  transition: opacity 150ms linear;
}
._mat-animation-noopable .mat-mdc-chip-focus-overlay {
  transition: none;
}
.mat-mdc-basic-chip .mat-mdc-chip-focus-overlay {
  display: none;
}

.mat-mdc-chip .mat-ripple.mat-mdc-chip-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}

.mat-mdc-chip-avatar {
  text-align: center;
  line-height: 1;
  color: var(--%NS%mat-chip-with-icon-icon-color, currentColor);
}

.mat-mdc-chip {
  position: relative;
  z-index: 0;
}

.mat-mdc-chip-action-label {
  text-align: left;
  z-index: 1;
}
[dir=rtl] .mat-mdc-chip-action-label {
  text-align: right;
}
.mat-mdc-chip.mdc-evolution-chip--with-trailing-action .mat-mdc-chip-action-label {
  position: relative;
}
.mat-mdc-chip-action-label .mat-mdc-chip-primary-focus-indicator {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  pointer-events: none;
}
.mat-mdc-chip-action-label .mat-focus-indicator::before {
  margin: calc(calc(var(--%NS%mat-focus-indicator-border-width, 3px) + 2px) * -1);
}

.mat-mdc-chip-edit::before, .mat-mdc-chip-remove::before {
  margin: calc(var(--%NS%mat-focus-indicator-border-width, 3px) * -1);
  left: 8px;
  right: 8px;
}
.mat-mdc-chip-edit::after, .mat-mdc-chip-remove::after {
  content: "";
  display: block;
  opacity: 0;
  position: absolute;
  top: -3px;
  bottom: -3px;
  left: 5px;
  right: 5px;
  border-radius: 50%;
  box-sizing: border-box;
  padding: 12px;
  margin: -12px;
  background-clip: content-box;
}
.mat-mdc-chip-edit .mat-icon, .mat-mdc-chip-remove .mat-icon {
  width: 18px;
  height: 18px;
  font-size: 18px;
  box-sizing: content-box;
}

.mat-chip-edit-input {
  cursor: text;
  display: inline-block;
  color: inherit;
  outline: 0;
}

@media (forced-colors: active) {
  .mat-mdc-chip-selected:not(.mat-mdc-chip-multiple) {
    outline-width: 3px;
  }
}

.mat-mdc-chip-action:focus-visible .mat-focus-indicator::before {
  content: "";
}

.mdc-evolution-chip__icon, .mat-mdc-chip-edit .mat-icon, .mat-mdc-chip-remove .mat-icon {
  min-height: fit-content;
}

img.mdc-evolution-chip__icon {
  min-height: 0;
}
`, Di = [[["", "matChipEdit", ""]], [["mat-chip-avatar"], ["", "matChipAvatar", ""]], [["", "matChipEditInput", ""]], "*", [["mat-chip-trailing-icon"], ["", "matChipRemove", ""], ["", "matChipTrailingIcon", ""]]], Mi = ["[matChipEdit]", "mat-chip-avatar, [matChipAvatar]", "[matChipEditInput]", "*", "mat-chip-trailing-icon,[matChipRemove],[matChipTrailingIcon]"];
function Fi(a, s) { a & 1 && t.\u0275\u0275element(0, "span", 0); }
function Ai(a, s) { a & 1 && (t.\u0275\u0275elementStart(0, "span", 1), t.\u0275\u0275projection(1), t.\u0275\u0275elementEnd()); }
function Ri(a, s) { a & 1 && (t.\u0275\u0275elementStart(0, "span", 3), t.\u0275\u0275projection(1, 1), t.\u0275\u0275elementEnd()); }
function Ti(a, s) { a & 1 && t.\u0275\u0275projection(0, 2); }
function Bi(a, s) { a & 1 && t.\u0275\u0275element(0, "span", 8); }
function Pi(a, s) { if (a & 1 && t.\u0275\u0275conditionalCreate(0, Ti, 1, 0)(1, Bi, 1, 0, "span", 8), a & 2) {
    let i = t.\u0275\u0275nextContext();
    t.\u0275\u0275conditional(i.contentEditInput ? 0 : 1);
} }
function Li(a, s) { a & 1 && t.\u0275\u0275projection(0, 3); }
function Oi(a, s) { a & 1 && (t.\u0275\u0275elementStart(0, "span", 7), t.\u0275\u0275projection(1, 4), t.\u0275\u0275elementEnd()); }
var B = ["*"], di = `.mat-mdc-chip-set {
  display: flex;
}
.mat-mdc-chip-set:focus {
  outline: none;
}
.mat-mdc-chip-set .mdc-evolution-chip-set__chips {
  min-width: 100%;
  margin-left: -8px;
  margin-right: 0;
}
.mat-mdc-chip-set .mdc-evolution-chip {
  margin: 8px 0 8px 8px;
}
[dir=rtl] .mat-mdc-chip-set .mdc-evolution-chip-set__chips {
  margin-left: 0;
  margin-right: -8px;
}
[dir=rtl] .mat-mdc-chip-set .mdc-evolution-chip {
  margin-left: 0;
  margin-right: 8px;
}

.mdc-evolution-chip-set__chips {
  display: flex;
  flex-flow: wrap;
  min-width: 0;
}

.mat-mdc-chip-set-stacked {
  flex-direction: column;
  align-items: flex-start;
}
.mat-mdc-chip-set-stacked .mat-mdc-chip {
  width: 100%;
}
.mat-mdc-chip-set-stacked .mdc-evolution-chip__graphic {
  flex-grow: 0;
}
.mat-mdc-chip-set-stacked .mdc-evolution-chip__action--primary {
  flex-basis: 100%;
  justify-content: start;
}

input.mat-mdc-chip-input {
  flex: 1 0 150px;
  margin-left: 8px;
}
[dir=rtl] input.mat-mdc-chip-input {
  margin-left: 0;
  margin-right: 8px;
}
.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input::placeholder {
  opacity: 1;
}
.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input::-moz-placeholder {
  opacity: 1;
}
.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input::-webkit-input-placeholder {
  opacity: 1;
}
.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input:-ms-input-placeholder {
  opacity: 1;
}
.mat-mdc-chip-set + input.mat-mdc-chip-input {
  margin-left: 0;
  margin-right: 0;
}
`, b = new m("mat-chips-default-options", { providedIn: "root", factory: () => ({ separatorKeyCodes: [p] }) }), I = new m("MatChipAvatar"), k = new m("MatChipTrailingIcon"), E = new m("MatChipEdit"), D = new m("MatChipRemove"), S = new m("MatChip"), P = (() => { class a {
    _elementRef = r(v);
    _parentChip = r(S);
    _isPrimary = !0;
    _isLeading = !1;
    get disabled() { return this._disabled || this._parentChip?.disabled || !1; }
    set disabled(i) { this._disabled = i; }
    _disabled = !1;
    tabIndex = -1;
    _allowFocusWhenDisabled = !1;
    _getDisabledAttribute() { return this.disabled && !this._allowFocusWhenDisabled ? "" : null; }
    constructor() { r(ai).load(w), this._elementRef.nativeElement.nodeName === "BUTTON" && this._elementRef.nativeElement.setAttribute("type", "button"); }
    focus() { this._elementRef.nativeElement.focus(); }
    static \u0275fac = function (n) { return new (n || a); };
    static \u0275dir = t.\u0275\u0275defineDirective({ type: a, selectors: [["", "matChipContent", ""]], hostAttrs: [1, "mat-mdc-chip-action", "mdc-evolution-chip__action", "mdc-evolution-chip__action--presentational"], hostVars: 8, hostBindings: function (n, e) { n & 2 && (t.\u0275\u0275attribute("disabled", e._getDisabledAttribute())("aria-disabled", e.disabled), t.\u0275\u0275classProp("mdc-evolution-chip__action--primary", e._isPrimary)("mdc-evolution-chip__action--secondary", !e._isPrimary)("mdc-evolution-chip__action--trailing", !e._isPrimary && !e._isLeading)); }, inputs: { disabled: [2, "disabled", "disabled", d], tabIndex: [2, "tabIndex", "tabIndex", i => i == null ? -1 : ti(i)], _allowFocusWhenDisabled: "_allowFocusWhenDisabled" } });
} return a; })(), _ = (() => { class a extends P {
    _getTabindex() { return this.disabled && !this._allowFocusWhenDisabled ? null : this.tabIndex.toString(); }
    _handleClick(i) { !this.disabled && this._isPrimary && (i.preventDefault(), this._parentChip._handlePrimaryActionInteraction()); }
    _handleKeydown(i) { (i.keyCode === p || i.keyCode === A) && !this.disabled && this._isPrimary && !this._parentChip._isEditing && (i.preventDefault(), this._parentChip._handlePrimaryActionInteraction()); }
    static \u0275fac = (() => { let i; return function (e) { return (i || (i = t.\u0275\u0275getInheritedFactory(a)))(e || a); }; })();
    static \u0275dir = t.\u0275\u0275defineDirective({ type: a, selectors: [["", "matChipAction", ""]], hostVars: 3, hostBindings: function (n, e) { n & 1 && t.\u0275\u0275listener("click", function (o) { return e._handleClick(o); })("keydown", function (o) { return e._handleKeydown(o); }), n & 2 && (t.\u0275\u0275attribute("tabindex", e._getTabindex()), t.\u0275\u0275classProp("mdc-evolution-chip__action--presentational", !1)); }, features: [t.\u0275\u0275InheritDefinitionFeature] });
} return a; })(), bt = (() => { class a {
    static \u0275fac = function (n) { return new (n || a); };
    static \u0275dir = t.\u0275\u0275defineDirective({ type: a, selectors: [["mat-chip-avatar"], ["", "matChipAvatar", ""]], hostAttrs: ["role", "img", 1, "mat-mdc-chip-avatar", "mdc-evolution-chip__icon", "mdc-evolution-chip__icon--primary"], features: [t.\u0275\u0275ProvidersFeature([{ provide: I, useExisting: a }])] });
} return a; })(), St = (() => { class a extends P {
    _isPrimary = !1;
    static \u0275fac = (() => { let i; return function (e) { return (i || (i = t.\u0275\u0275getInheritedFactory(a)))(e || a); }; })();
    static \u0275dir = t.\u0275\u0275defineDirective({ type: a, selectors: [["mat-chip-trailing-icon"], ["", "matChipTrailingIcon", ""]], hostAttrs: ["aria-hidden", "true", 1, "mat-mdc-chip-trailing-icon", "mdc-evolution-chip__icon", "mdc-evolution-chip__icon--trailing"], features: [t.\u0275\u0275ProvidersFeature([{ provide: k, useExisting: a }]), t.\u0275\u0275InheritDefinitionFeature] });
} return a; })(), wt = (() => { class a extends _ {
    _isPrimary = !1;
    _isLeading = !0;
    _handleClick(i) { this.disabled || (i.stopPropagation(), i.preventDefault(), this._parentChip._edit(i)); }
    _handleKeydown(i) { (i.keyCode === p || i.keyCode === A) && !this.disabled && (i.stopPropagation(), i.preventDefault(), this._parentChip._edit(i)); }
    static \u0275fac = (() => { let i; return function (e) { return (i || (i = t.\u0275\u0275getInheritedFactory(a)))(e || a); }; })();
    static \u0275dir = t.\u0275\u0275defineDirective({ type: a, selectors: [["", "matChipEdit", ""]], hostAttrs: ["role", "button", 1, "mat-mdc-chip-edit", "mat-mdc-chip-avatar", "mat-focus-indicator", "mdc-evolution-chip__icon", "mdc-evolution-chip__icon--primary"], hostVars: 1, hostBindings: function (n, e) { n & 2 && t.\u0275\u0275attribute("aria-hidden", null); }, features: [t.\u0275\u0275ProvidersFeature([{ provide: E, useExisting: a }]), t.\u0275\u0275InheritDefinitionFeature] });
} return a; })(), Ct = (() => { class a extends _ {
    _isPrimary = !1;
    _handleClick(i) { this.disabled || (i.stopPropagation(), i.preventDefault(), this._parentChip.remove()); }
    _handleKeydown(i) { (i.keyCode === p || i.keyCode === A) && !this.disabled && (i.stopPropagation(), i.preventDefault(), this._parentChip.remove()); }
    static \u0275fac = (() => { let i; return function (e) { return (i || (i = t.\u0275\u0275getInheritedFactory(a)))(e || a); }; })();
    static \u0275dir = t.\u0275\u0275defineDirective({ type: a, selectors: [["", "matChipRemove", ""]], hostAttrs: ["role", "button", 1, "mat-mdc-chip-remove", "mat-mdc-chip-trailing-icon", "mat-focus-indicator", "mdc-evolution-chip__icon", "mdc-evolution-chip__icon--trailing"], hostVars: 1, hostBindings: function (n, e) { n & 2 && t.\u0275\u0275attribute("aria-hidden", null); }, features: [t.\u0275\u0275ProvidersFeature([{ provide: D, useExisting: a }]), t.\u0275\u0275InheritDefinitionFeature] });
} return a; })(), u = (() => {
    class a {
        _changeDetectorRef = r(ei);
        _elementRef = r(v);
        _tagName = r(pi);
        _ngZone = r(mi);
        _focusMonitor = r(bi);
        _globalRippleOptions = r(H, { optional: !0 });
        _document = r(ni);
        _onFocus = new y;
        _onBlur = new y;
        _isBasicChip = !1;
        role = null;
        _hasFocusInternal = !1;
        _pendingFocus = !1;
        _actionChanges;
        _animationsDisabled = O();
        _allLeadingIcons;
        _allTrailingIcons;
        _allEditIcons;
        _allRemoveIcons;
        _hasFocus() { return this._hasFocusInternal; }
        id = r(R).getId("mat-mdc-chip-");
        ariaLabel = null;
        ariaDescription = null;
        _chipListDisabled = !1;
        _hadFocusOnRemove = !1;
        _textElement;
        get value() { return this._value !== void 0 ? this._value : this._textElement.textContent.trim(); }
        set value(i) { this._value = i; }
        _value;
        color;
        removable = !0;
        highlighted = !1;
        disableRipple = !1;
        get disabled() { return this._disabled || this._chipListDisabled; }
        set disabled(i) { this._disabled = i; }
        _disabled = !1;
        removed = new h;
        destroyed = new h;
        basicChipAttrName = "mat-basic-chip";
        leadingIcon;
        editIcon;
        trailingIcon;
        removeIcon;
        primaryAction;
        _rippleLoader = r(Z);
        _injector = r(ui);
        constructor() { let i = r(ai); i.load(w), i.load(wi), this._monitorFocus(), this._rippleLoader?.configureRipple(this._elementRef.nativeElement, { className: "mat-mdc-chip-ripple", disabled: this._isRippleDisabled() }); }
        ngOnInit() { this._isBasicChip = this._elementRef.nativeElement.hasAttribute(this.basicChipAttrName) || this._tagName.toLowerCase() === this.basicChipAttrName; }
        ngAfterViewInit() { this._textElement = this._elementRef.nativeElement.querySelector(".mat-mdc-chip-action-label"), this._pendingFocus && (this._pendingFocus = !1, this.focus()); }
        ngAfterContentInit() { this._actionChanges = T(this._allLeadingIcons.changes, this._allTrailingIcons.changes, this._allEditIcons.changes, this._allRemoveIcons.changes).subscribe(() => this._changeDetectorRef.markForCheck()); }
        ngDoCheck() { this._rippleLoader.setDisabled(this._elementRef.nativeElement, this._isRippleDisabled()); }
        ngOnDestroy() { this.destroyed.emit({ chip: this }), this.destroyed.complete(), this._focusMonitor.stopMonitoring(this._elementRef), this._rippleLoader?.destroyRipple(this._elementRef.nativeElement), this._actionChanges?.unsubscribe(); }
        remove() { this.removable && (this._hadFocusOnRemove = this._hasFocus(), this.removed.emit({ chip: this })); }
        _isRippleDisabled() { return this.disabled || this.disableRipple || this._animationsDisabled || this._isBasicChip || !this._hasInteractiveActions() || !!this._globalRippleOptions?.disabled; }
        _hasTrailingIcon() { return !!(this.trailingIcon || this.removeIcon); }
        _handleKeydown(i) { (i.keyCode === $ && !i.repeat || i.keyCode === li) && (i.preventDefault(), this.remove()); }
        focus() { this.disabled || (this.primaryAction ? this.primaryAction.focus() : this._pendingFocus = !0); }
        _getSourceAction(i) { return this._getActions().find(n => { let e = n._elementRef.nativeElement; return e === i || e.contains(i); }); }
        _getActions() { let i = []; return this.editIcon && i.push(this.editIcon), this.primaryAction && i.push(this.primaryAction), this.removeIcon && i.push(this.removeIcon), i; }
        _handlePrimaryActionInteraction() { }
        _hasInteractiveActions() { return this._getActions().length > 0; }
        _edit(i) { }
        _monitorFocus() { this._focusMonitor.monitor(this._elementRef, !0).subscribe(i => { let n = i !== null; n !== this._hasFocusInternal && (this._hasFocusInternal = n, n ? this._onFocus.next({ chip: this }) : (this._changeDetectorRef.markForCheck(), setTimeout(() => this._ngZone.run(() => this._onBlur.next({ chip: this }))))); }); }
        static \u0275fac = function (n) { return new (n || a); };
        static \u0275cmp = t.\u0275\u0275defineComponent({ type: a, selectors: [["mat-basic-chip"], ["", "mat-basic-chip", ""], ["mat-chip"], ["", "mat-chip", ""]], contentQueries: function (n, e, c) { if (n & 1 && t.\u0275\u0275contentQuery(c, I, 5)(c, E, 5)(c, k, 5)(c, D, 5)(c, I, 5)(c, k, 5)(c, E, 5)(c, D, 5), n & 2) {
                let o;
                t.\u0275\u0275queryRefresh(o = t.\u0275\u0275loadQuery()) && (e.leadingIcon = o.first), t.\u0275\u0275queryRefresh(o = t.\u0275\u0275loadQuery()) && (e.editIcon = o.first), t.\u0275\u0275queryRefresh(o = t.\u0275\u0275loadQuery()) && (e.trailingIcon = o.first), t.\u0275\u0275queryRefresh(o = t.\u0275\u0275loadQuery()) && (e.removeIcon = o.first), t.\u0275\u0275queryRefresh(o = t.\u0275\u0275loadQuery()) && (e._allLeadingIcons = o), t.\u0275\u0275queryRefresh(o = t.\u0275\u0275loadQuery()) && (e._allTrailingIcons = o), t.\u0275\u0275queryRefresh(o = t.\u0275\u0275loadQuery()) && (e._allEditIcons = o), t.\u0275\u0275queryRefresh(o = t.\u0275\u0275loadQuery()) && (e._allRemoveIcons = o);
            } }, viewQuery: function (n, e) { if (n & 1 && t.\u0275\u0275viewQuery(_, 5), n & 2) {
                let c;
                t.\u0275\u0275queryRefresh(c = t.\u0275\u0275loadQuery()) && (e.primaryAction = c.first);
            } }, hostAttrs: [1, "mat-mdc-chip"], hostVars: 31, hostBindings: function (n, e) { n & 1 && t.\u0275\u0275listener("keydown", function (o) { return e._handleKeydown(o); }), n & 2 && (t.\u0275\u0275domProperty("id", e.id), t.\u0275\u0275attribute("role", e.role)("aria-label", e.ariaLabel), t.\u0275\u0275classMap("mat-" + (e.color || "primary")), t.\u0275\u0275classProp("mdc-evolution-chip", !e._isBasicChip)("mdc-evolution-chip--disabled", e.disabled)("mdc-evolution-chip--with-trailing-action", e._hasTrailingIcon())("mdc-evolution-chip--with-primary-graphic", e.leadingIcon)("mdc-evolution-chip--with-primary-icon", e.leadingIcon)("mdc-evolution-chip--with-avatar", e.leadingIcon)("mat-mdc-chip-with-avatar", e.leadingIcon)("mat-mdc-chip-highlighted", e.highlighted)("mat-mdc-chip-disabled", e.disabled)("mat-mdc-basic-chip", e._isBasicChip)("mat-mdc-standard-chip", !e._isBasicChip)("mat-mdc-chip-with-trailing-icon", e._hasTrailingIcon())("_mat-animation-noopable", e._animationsDisabled)); }, inputs: { role: "role", id: "id", ariaLabel: [0, "aria-label", "ariaLabel"], ariaDescription: [0, "aria-description", "ariaDescription"], value: "value", color: "color", removable: [2, "removable", "removable", d], highlighted: [2, "highlighted", "highlighted", d], disableRipple: [2, "disableRipple", "disableRipple", d], disabled: [2, "disabled", "disabled", d] }, outputs: { removed: "removed", destroyed: "destroyed" }, exportAs: ["matChip"], features: [t.\u0275\u0275ProvidersFeature([{ provide: S, useExisting: a }])], ngContentSelectors: oi, decls: 9, vars: 2, consts: [[1, "mat-mdc-chip-focus-overlay"], [1, "mdc-evolution-chip__cell", "mdc-evolution-chip__cell--primary"], ["matChipContent", ""], [1, "mdc-evolution-chip__graphic", "mat-mdc-chip-graphic"], [1, "mdc-evolution-chip__text-label", "mat-mdc-chip-action-label"], [1, "mat-mdc-chip-primary-focus-indicator", "mat-focus-indicator"], [1, "mat-mdc-chip-touch-target"], [1, "mdc-evolution-chip__cell", "mdc-evolution-chip__cell--trailing"]], template: function (n, e) { n & 1 && (t.\u0275\u0275projectionDef(ci), t.\u0275\u0275element(0, "span", 0), t.\u0275\u0275elementStart(1, "span", 1)(2, "span", 2), t.\u0275\u0275conditionalCreate(3, xi, 2, 0, "span", 3), t.\u0275\u0275elementStart(4, "span", 4), t.\u0275\u0275projection(5), t.\u0275\u0275element(6, "span", 5), t.\u0275\u0275elementEnd(), t.\u0275\u0275element(7, "span", 6), t.\u0275\u0275elementEnd()(), t.\u0275\u0275conditionalCreate(8, Ii, 2, 0, "span", 7)), n & 2 && (t.\u0275\u0275advance(3), t.\u0275\u0275conditional(e.leadingIcon ? 3 : -1), t.\u0275\u0275advance(5), t.\u0275\u0275conditional(e._hasTrailingIcon() ? 8 : -1)); }, dependencies: [P], styles: [`.mdc-evolution-chip,
.mdc-evolution-chip__cell,
.mdc-evolution-chip__action {
  display: inline-flex;
  align-items: center;
}

.mdc-evolution-chip {
  position: relative;
  max-width: 100%;
}

.mat-mdc-chip-touch-target {
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  height: 48px;
  transform: translateY(-50%);
  display: var(--%NS%mat-chip-touch-target-display, block);
  pointer-events: auto;
}

.mdc-evolution-chip__cell,
.mdc-evolution-chip__action {
  height: 100%;
}

.mdc-evolution-chip__cell--primary {
  flex-basis: 100%;
  overflow-x: hidden;
}

.mdc-evolution-chip__cell--trailing {
  flex: 1 0 auto;
}

.mdc-evolution-chip__action {
  align-items: center;
  background: none;
  border: none;
  box-sizing: content-box;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  outline: none;
  padding: 0;
  text-decoration: none;
  color: inherit;
}

.mdc-evolution-chip__action--presentational {
  cursor: auto;
}

.mdc-evolution-chip--disabled,
.mdc-evolution-chip__action:disabled {
  pointer-events: none;
}
@media (forced-colors: active) {
  .mdc-evolution-chip--disabled,
  .mdc-evolution-chip__action:disabled {
    forced-color-adjust: none;
  }
}

.mdc-evolution-chip__action--primary {
  font: inherit;
  letter-spacing: inherit;
  white-space: inherit;
  overflow-x: hidden;
}
.mat-mdc-standard-chip .mdc-evolution-chip__action--%NS%primary::before {
  border-width: var(--%NS%mat-chip-outline-width, 1px);
  border-radius: var(--%NS%mat-chip-container-shape-radius, 8px);
  box-sizing: border-box;
  content: "";
  height: 100%;
  left: 0;
  position: absolute;
  pointer-events: none;
  top: 0;
  width: 100%;
  z-index: 1;
  border-style: solid;
}
.mat-mdc-standard-chip .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 12px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__action--%NS%primary::before {
  border-color: var(--%NS%mat-chip-outline-color, var(--%NS%mat-sys-outline));
}
.mdc-evolution-chip__action--%NS%primary:not(.mdc-evolution-chip__action--presentational):not(.mdc-ripple-upgraded):focus::before {
  border-color: var(--%NS%mat-chip-focus-outline-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__action--%NS%primary::before {
  border-color: var(--%NS%mat-chip-disabled-outline-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected .mdc-evolution-chip__action--%NS%primary::before {
  border-width: var(--%NS%mat-chip-flat-selected-outline-width, 0);
}
.mat-mdc-basic-chip .mdc-evolution-chip__action--primary {
  font: inherit;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}

.mdc-evolution-chip__action--secondary {
  position: relative;
  overflow: visible;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__action--secondary {
  color: var(--%NS%mat-chip-with-trailing-icon-trailing-icon-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__action--secondary {
  color: var(--%NS%mat-chip-with-trailing-icon-disabled-trailing-icon-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary, .mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary, .mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary, .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary, [dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}

.mdc-evolution-chip__text-label {
  -webkit-user-select: none;
  user-select: none;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.mat-mdc-standard-chip .mdc-evolution-chip__text-label {
  font-family: var(--%NS%mat-chip-label-text-font, var(--%NS%mat-sys-label-large-font));
  line-height: var(--%NS%mat-chip-label-text-line-height, var(--%NS%mat-sys-label-large-line-height));
  font-size: var(--%NS%mat-chip-label-text-size, var(--%NS%mat-sys-label-large-size));
  font-weight: var(--%NS%mat-chip-label-text-weight, var(--%NS%mat-sys-label-large-weight));
  letter-spacing: var(--%NS%mat-chip-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__text-label {
  color: var(--%NS%mat-chip-label-text-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--%NS%selected:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__text-label {
  color: var(--%NS%mat-chip-selected-label-text-color, var(--%NS%mat-sys-on-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__text-label, .mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled .mdc-evolution-chip__text-label {
  color: var(--%NS%mat-chip-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}

.mdc-evolution-chip__graphic {
  align-items: center;
  display: inline-flex;
  justify-content: center;
  overflow: hidden;
  pointer-events: none;
  position: relative;
  flex: 1 0 auto;
}
.mat-mdc-standard-chip .mdc-evolution-chip__graphic {
  width: var(--%NS%mat-chip-with-avatar-avatar-size, 24px);
  height: var(--%NS%mat-chip-with-avatar-avatar-size, 24px);
  font-size: var(--%NS%mat-chip-with-avatar-avatar-size, 24px);
}
.mdc-evolution-chip--selecting .mdc-evolution-chip__graphic {
  transition: width 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mdc-evolution-chip--%NS%selectable:not(.mdc-evolution-chip--selected):not(.mdc-evolution-chip--with-primary-icon) .mdc-evolution-chip__graphic {
  width: 0;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic {
  padding-left: 6px;
  padding-right: 6px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic {
  padding-left: 4px;
  padding-right: 8px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic {
  padding-left: 8px;
  padding-right: 4px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic {
  padding-left: 6px;
  padding-right: 6px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic {
  padding-left: 4px;
  padding-right: 8px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic {
  padding-left: 8px;
  padding-right: 4px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__graphic {
  padding-left: 0;
}

.mdc-evolution-chip__checkmark {
  position: absolute;
  opacity: 0;
  top: 50%;
  left: 50%;
  height: 20px;
  width: 20px;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__checkmark {
  color: var(--%NS%mat-chip-with-icon-selected-icon-color, var(--%NS%mat-sys-on-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__checkmark {
  color: var(--%NS%mat-chip-with-icon-disabled-icon-color, var(--%NS%mat-sys-on-surface));
}
.mdc-evolution-chip--selecting .mdc-evolution-chip__checkmark {
  transition: transform 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1);
  transform: translate(-75%, -50%);
}
.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark {
  transform: translate(-50%, -50%);
  opacity: 1;
}

.mdc-evolution-chip__checkmark-svg {
  display: block;
}

.mdc-evolution-chip__checkmark-path {
  stroke-width: 2px;
  stroke-dasharray: 29.7833385;
  stroke-dashoffset: 29.7833385;
  stroke: currentColor;
}
.mdc-evolution-chip--selecting .mdc-evolution-chip__checkmark-path {
  transition: stroke-dashoffset 150ms 45ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark-path {
  stroke-dashoffset: 0;
}
@media (forced-colors: active) {
  .mdc-evolution-chip__checkmark-path {
    stroke: CanvasText !important;
  }
}

.mat-mdc-standard-chip .mdc-evolution-chip__icon--trailing {
  height: 18px;
  width: 18px;
  font-size: 18px;
}
.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing.mat-mdc-chip-remove {
  opacity: calc(var(--%NS%mat-chip-trailing-action-opacity, 1) * var(--%NS%mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38));
}
.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing.mat-mdc-chip-remove:focus {
  opacity: calc(var(--%NS%mat-chip-trailing-action-focus-opacity, 1) * var(--%NS%mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38));
}

.mat-mdc-standard-chip {
  border-radius: var(--%NS%mat-chip-container-shape-radius, 8px);
  height: var(--%NS%mat-chip-container-height, 32px);
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) {
  background-color: var(--%NS%mat-chip-elevated-container-color, transparent);
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled {
  background-color: var(--%NS%mat-chip-elevated-disabled-container-color);
}
.mat-mdc-standard-chip.mdc-evolution-chip--%NS%selected:not(.mdc-evolution-chip--disabled) {
  background-color: var(--%NS%mat-chip-elevated-selected-container-color, var(--%NS%mat-sys-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled {
  background-color: var(--%NS%mat-chip-flat-disabled-selected-container-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
@media (forced-colors: active) {
  .mat-mdc-standard-chip {
    outline: solid 1px;
  }
}

.mat-mdc-standard-chip .mdc-evolution-chip__icon--primary {
  border-radius: var(--%NS%mat-chip-with-avatar-avatar-shape-radius, 24px);
  width: var(--%NS%mat-chip-with-icon-icon-size, 18px);
  height: var(--%NS%mat-chip-with-icon-icon-size, 18px);
  font-size: var(--%NS%mat-chip-with-icon-icon-size, 18px);
}
.mdc-evolution-chip--selected .mdc-evolution-chip__icon--primary {
  opacity: 0;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__icon--primary {
  color: var(--%NS%mat-chip-with-icon-icon-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--primary {
  color: var(--%NS%mat-chip-with-icon-disabled-icon-color, var(--%NS%mat-sys-on-surface));
}

.mat-mdc-chip-highlighted {
  --%NS%mat-chip-with-icon-icon-color: var(--%NS%mat-chip-with-icon-selected-icon-color, var(--%NS%mat-sys-on-secondary-container));
  --%NS%mat-chip-elevated-container-color: var(--%NS%mat-chip-elevated-selected-container-color, var(--%NS%mat-sys-secondary-container));
  --%NS%mat-chip-label-text-color: var(--%NS%mat-chip-selected-label-text-color, var(--%NS%mat-sys-on-secondary-container));
  --%NS%mat-chip-outline-width: var(--%NS%mat-chip-flat-selected-outline-width, 0);
}

.mat-mdc-chip-focus-overlay {
  background: var(--%NS%mat-chip-focus-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-chip-selected .mat-mdc-chip-focus-overlay, .mat-mdc-chip-highlighted .mat-mdc-chip-focus-overlay {
  background: var(--%NS%mat-chip-selected-focus-state-layer-color, var(--%NS%mat-sys-on-secondary-container));
}
.mat-mdc-chip:hover .mat-mdc-chip-focus-overlay {
  background: var(--%NS%mat-chip-hover-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
  opacity: var(--%NS%mat-chip-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-chip-focus-overlay .mat-mdc-chip-selected:hover, .mat-mdc-chip-highlighted:hover .mat-mdc-chip-focus-overlay {
  background: var(--%NS%mat-chip-selected-hover-state-layer-color, var(--%NS%mat-sys-on-secondary-container));
  opacity: var(--%NS%mat-chip-selected-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-chip.cdk-focused .mat-mdc-chip-focus-overlay {
  background: var(--%NS%mat-chip-focus-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
  opacity: var(--%NS%mat-chip-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-chip-selected.cdk-focused .mat-mdc-chip-focus-overlay, .mat-mdc-chip-highlighted.cdk-focused .mat-mdc-chip-focus-overlay {
  background: var(--%NS%mat-chip-selected-focus-state-layer-color, var(--%NS%mat-sys-on-secondary-container));
  opacity: var(--%NS%mat-chip-selected-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}

.mdc-evolution-chip--%NS%disabled:not(.mdc-evolution-chip--selected) .mat-mdc-chip-avatar {
  opacity: var(--%NS%mat-chip-with-avatar-disabled-avatar-opacity, 0.38);
}

.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing {
  opacity: var(--%NS%mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38);
}

.mdc-evolution-chip--disabled.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark {
  opacity: var(--%NS%mat-chip-with-icon-disabled-icon-opacity, 0.38);
}

.mat-mdc-standard-chip.mdc-evolution-chip--disabled {
  opacity: var(--%NS%mat-chip-disabled-container-opacity, 1);
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected .mdc-evolution-chip__icon--trailing, .mat-mdc-standard-chip.mat-mdc-chip-highlighted .mdc-evolution-chip__icon--trailing {
  color: var(--%NS%mat-chip-selected-trailing-icon-color, var(--%NS%mat-sys-on-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing, .mat-mdc-standard-chip.mat-mdc-chip-highlighted.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing {
  color: var(--%NS%mat-chip-selected-disabled-trailing-icon-color, var(--%NS%mat-sys-on-surface));
}

.mat-mdc-chip-edit, .mat-mdc-chip-remove {
  opacity: var(--%NS%mat-chip-trailing-action-opacity, 1);
}
.mat-mdc-chip-edit:focus, .mat-mdc-chip-remove:focus {
  opacity: var(--%NS%mat-chip-trailing-action-focus-opacity, 1);
}
.mat-mdc-chip-edit::after, .mat-mdc-chip-remove::after {
  background-color: var(--%NS%mat-chip-trailing-action-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-chip-edit:hover::after, .mat-mdc-chip-remove:hover::after {
  opacity: calc(var(--%NS%mat-chip-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity)) + var(--%NS%mat-chip-trailing-action-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity)));
}
.mat-mdc-chip-edit:focus::after, .mat-mdc-chip-remove:focus::after {
  opacity: calc(var(--%NS%mat-chip-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity)) + var(--%NS%mat-chip-trailing-action-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity)));
}

.mat-mdc-chip-selected .mat-mdc-chip-remove::after,
.mat-mdc-chip-highlighted .mat-mdc-chip-remove::after {
  background-color: var(--%NS%mat-chip-selected-trailing-action-state-layer-color, var(--%NS%mat-sys-on-secondary-container));
}

.mat-mdc-chip.cdk-focused .mat-mdc-chip-edit:focus::after, .mat-mdc-chip.cdk-focused .mat-mdc-chip-remove:focus::after {
  opacity: calc(var(--%NS%mat-chip-selected-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity)) + var(--%NS%mat-chip-trailing-action-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity)));
}
.mat-mdc-chip.cdk-focused .mat-mdc-chip-edit:hover::after, .mat-mdc-chip.cdk-focused .mat-mdc-chip-remove:hover::after {
  opacity: calc(var(--%NS%mat-chip-selected-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity)) + var(--%NS%mat-chip-trailing-action-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity)));
}

.mat-mdc-standard-chip {
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-standard-chip .mat-mdc-chip-graphic,
.mat-mdc-standard-chip .mat-mdc-chip-trailing-icon {
  box-sizing: content-box;
}
.mat-mdc-standard-chip._mat-animation-noopable,
.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__graphic,
.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__checkmark,
.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__checkmark-path {
  transition-duration: 1ms;
  animation-duration: 1ms;
}

.mat-mdc-chip-focus-overlay {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  opacity: 0;
  border-radius: inherit;
  transition: opacity 150ms linear;
}
._mat-animation-noopable .mat-mdc-chip-focus-overlay {
  transition: none;
}
.mat-mdc-basic-chip .mat-mdc-chip-focus-overlay {
  display: none;
}

.mat-mdc-chip .mat-ripple.mat-mdc-chip-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}

.mat-mdc-chip-avatar {
  text-align: center;
  line-height: 1;
  color: var(--%NS%mat-chip-with-icon-icon-color, currentColor);
}

.mat-mdc-chip {
  position: relative;
  z-index: 0;
}

.mat-mdc-chip-action-label {
  text-align: left;
  z-index: 1;
}
[dir=rtl] .mat-mdc-chip-action-label {
  text-align: right;
}
.mat-mdc-chip.mdc-evolution-chip--with-trailing-action .mat-mdc-chip-action-label {
  position: relative;
}
.mat-mdc-chip-action-label .mat-mdc-chip-primary-focus-indicator {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  pointer-events: none;
}
.mat-mdc-chip-action-label .mat-focus-indicator::before {
  margin: calc(calc(var(--%NS%mat-focus-indicator-border-width, 3px) + 2px) * -1);
}

.mat-mdc-chip-edit::before, .mat-mdc-chip-remove::before {
  margin: calc(var(--%NS%mat-focus-indicator-border-width, 3px) * -1);
  left: 8px;
  right: 8px;
}
.mat-mdc-chip-edit::after, .mat-mdc-chip-remove::after {
  content: "";
  display: block;
  opacity: 0;
  position: absolute;
  top: -3px;
  bottom: -3px;
  left: 5px;
  right: 5px;
  border-radius: 50%;
  box-sizing: border-box;
  padding: 12px;
  margin: -12px;
  background-clip: content-box;
}
.mat-mdc-chip-edit .mat-icon, .mat-mdc-chip-remove .mat-icon {
  width: 18px;
  height: 18px;
  font-size: 18px;
  box-sizing: content-box;
}

.mat-chip-edit-input {
  cursor: text;
  display: inline-block;
  color: inherit;
  outline: 0;
}

@media (forced-colors: active) {
  .mat-mdc-chip-selected:not(.mat-mdc-chip-multiple) {
    outline-width: 3px;
  }
}

.mat-mdc-chip-action:focus-visible .mat-focus-indicator::before {
  content: "";
}

.mdc-evolution-chip__icon, .mat-mdc-chip-edit .mat-icon, .mat-mdc-chip-remove .mat-icon {
  min-height: fit-content;
}

img.mdc-evolution-chip__icon {
  min-height: 0;
}
`], encapsulation: 2 });
    }
    return a;
})(), J = class {
    source;
    selected;
    isUserInput;
    constructor(s, i, n = !1) { this.source = s, this.selected = i, this.isUserInput = n; }
}, Hi = (() => { class a extends u {
    _defaultOptions = r(b, { optional: !0 });
    chipListSelectable = !0;
    _chipListMultiple = !1;
    _chipListHideSingleSelectionIndicator = this._defaultOptions?.hideSingleSelectionIndicator ?? !1;
    get selectable() { return this._selectable && this.chipListSelectable; }
    set selectable(i) { this._selectable = i, this._changeDetectorRef.markForCheck(); }
    _selectable = !0;
    get selected() { return this._selected; }
    set selected(i) { this._setSelectedState(i, !1, !0); }
    _selected = !1;
    get ariaSelected() { return this.selectable ? this.selected.toString() : null; }
    basicChipAttrName = "mat-basic-chip-option";
    selectionChange = new h;
    ngOnInit() { super.ngOnInit(), this.role = "presentation"; }
    select() { this._setSelectedState(!0, !1, !0); }
    deselect() { this._setSelectedState(!1, !1, !0); }
    selectViaInteraction() { this._setSelectedState(!0, !0, !0); }
    toggleSelected(i = !1) { return this._setSelectedState(!this.selected, i, !0), this.selected; }
    _handlePrimaryActionInteraction() { this.disabled || (this.focus(), this.selectable && this.toggleSelected(!0)); }
    _hasLeadingGraphic() { return this.leadingIcon ? !0 : !this._chipListHideSingleSelectionIndicator || this._chipListMultiple; }
    _setSelectedState(i, n, e) { i !== this.selected && (this._selected = i, e && this.selectionChange.emit({ source: this, isUserInput: n, selected: this.selected }), this._changeDetectorRef.markForCheck()); }
    static \u0275fac = (() => { let i; return function (e) { return (i || (i = t.\u0275\u0275getInheritedFactory(a)))(e || a); }; })();
    static \u0275cmp = t.\u0275\u0275defineComponent({ type: a, selectors: [["mat-basic-chip-option"], ["", "mat-basic-chip-option", ""], ["mat-chip-option"], ["", "mat-chip-option", ""]], hostAttrs: [1, "mat-mdc-chip", "mat-mdc-chip-option"], hostVars: 37, hostBindings: function (n, e) { n & 2 && (t.\u0275\u0275domProperty("id", e.id), t.\u0275\u0275attribute("tabindex", null)("aria-label", null)("aria-description", null)("role", e.role), t.\u0275\u0275classProp("mdc-evolution-chip", !e._isBasicChip)("mdc-evolution-chip--filter", !e._isBasicChip)("mdc-evolution-chip--selectable", !e._isBasicChip)("mat-mdc-chip-selected", e.selected)("mat-mdc-chip-multiple", e._chipListMultiple)("mat-mdc-chip-disabled", e.disabled)("mat-mdc-chip-with-avatar", e.leadingIcon)("mdc-evolution-chip--disabled", e.disabled)("mdc-evolution-chip--selected", e.selected)("mdc-evolution-chip--selecting", !e._animationsDisabled)("mdc-evolution-chip--with-trailing-action", e._hasTrailingIcon())("mdc-evolution-chip--with-primary-icon", e.leadingIcon)("mdc-evolution-chip--with-primary-graphic", e._hasLeadingGraphic())("mdc-evolution-chip--with-avatar", e.leadingIcon)("mat-mdc-chip-highlighted", e.highlighted)("mat-mdc-chip-with-trailing-icon", e._hasTrailingIcon())); }, inputs: { selectable: [2, "selectable", "selectable", d], selected: [2, "selected", "selected", d] }, outputs: { selectionChange: "selectionChange" }, features: [t.\u0275\u0275ProvidersFeature([{ provide: u, useExisting: a }, { provide: S, useExisting: a }]), t.\u0275\u0275InheritDefinitionFeature], ngContentSelectors: oi, decls: 9, vars: 6, consts: [[1, "mat-mdc-chip-focus-overlay"], ["role", "presentation", 1, "mdc-evolution-chip__cell", "mdc-evolution-chip__cell--primary"], ["matChipAction", "", "role", "option", 3, "_allowFocusWhenDisabled"], [1, "mdc-evolution-chip__graphic", "mat-mdc-chip-graphic"], [1, "mdc-evolution-chip__text-label", "mat-mdc-chip-action-label"], [1, "mat-mdc-chip-primary-focus-indicator", "mat-focus-indicator"], [1, "mat-mdc-chip-touch-target"], ["role", "presentation", 1, "mdc-evolution-chip__cell", "mdc-evolution-chip__cell--trailing"], [1, "mdc-evolution-chip__checkmark"], ["viewBox", "-2 -3 30 30", "focusable", "false", "aria-hidden", "true", 1, "mdc-evolution-chip__checkmark-svg"], ["fill", "none", "stroke", "currentColor", "d", "M1.73,12.91 8.1,19.28 22.79,4.59", 1, "mdc-evolution-chip__checkmark-path"]], template: function (n, e) { n & 1 && (t.\u0275\u0275projectionDef(ci), t.\u0275\u0275element(0, "span", 0), t.\u0275\u0275elementStart(1, "span", 1)(2, "button", 2), t.\u0275\u0275conditionalCreate(3, ki, 5, 0, "span", 3), t.\u0275\u0275elementStart(4, "span", 4), t.\u0275\u0275projection(5), t.\u0275\u0275element(6, "span", 5)(7, "span", 6), t.\u0275\u0275elementEnd()()(), t.\u0275\u0275conditionalCreate(8, Ei, 2, 0, "span", 7)), n & 2 && (t.\u0275\u0275advance(2), t.\u0275\u0275property("_allowFocusWhenDisabled", !0), t.\u0275\u0275attribute("aria-description", e.ariaDescription)("aria-label", e.ariaLabel)("aria-selected", e.ariaSelected), t.\u0275\u0275advance(), t.\u0275\u0275conditional(e._hasLeadingGraphic() ? 3 : -1), t.\u0275\u0275advance(5), t.\u0275\u0275conditional(e._hasTrailingIcon() ? 8 : -1)); }, dependencies: [_], styles: [ri], encapsulation: 2 });
} return a; })(), N = (() => { class a {
    _elementRef = r(v);
    _document = r(ni);
    initialize(i) { this.getNativeElement().focus(), this.setValue(i); }
    getNativeElement() { return this._elementRef.nativeElement; }
    setValue(i) { this.getNativeElement().textContent = i, this._moveCursorToEndOfInput(); }
    getValue() { return this.getNativeElement().textContent || ""; }
    _moveCursorToEndOfInput() { let i = this._document.createRange(); i.selectNodeContents(this.getNativeElement()), i.collapse(!1); let n = window.getSelection(); n.removeAllRanges(), n.addRange(i); }
    static \u0275fac = function (n) { return new (n || a); };
    static \u0275dir = t.\u0275\u0275defineDirective({ type: a, selectors: [["span", "matChipEditInput", ""]], hostAttrs: ["role", "textbox", "tabindex", "-1", "contenteditable", "true", 1, "mat-chip-edit-input"] });
} return a; })(), zi = (() => { class a extends u {
    basicChipAttrName = "mat-basic-chip-row";
    _renderer = r(vi);
    _cleanupMousedown;
    _editStartPending = !1;
    editable = !1;
    edited = new h;
    defaultEditInput;
    contentEditInput;
    _alreadyFocused = !1;
    _isEditing = !1;
    constructor() { super(), this.role = "row", this._onBlur.pipe(l(this.destroyed)).subscribe(() => { this._isEditing && !this._editStartPending && this._onEditFinish(), this._alreadyFocused = !1; }); }
    ngAfterViewInit() { super.ngAfterViewInit(), this._cleanupMousedown = this._ngZone.runOutsideAngular(() => this._renderer.listen(this._elementRef.nativeElement, "mousedown", () => { this._alreadyFocused = this._hasFocus(); })); }
    ngOnDestroy() { super.ngOnDestroy(), this._cleanupMousedown?.(); }
    _hasLeadingActionIcon() { return !this._isEditing && !!this.editIcon; }
    _hasTrailingIcon() { return !this._isEditing && super._hasTrailingIcon(); }
    _handleFocus() { !this._isEditing && !this.disabled && this.focus(); }
    _handleKeydown(i) { i.keyCode === p && !this.disabled ? this._isEditing ? (i.preventDefault(), this._onEditFinish()) : this.editable && this._startEditing(i) : this._isEditing ? i.stopPropagation() : super._handleKeydown(i); }
    _handleClick(i) { !this.disabled && this.editable && !this._isEditing && this._alreadyFocused && (i.preventDefault(), i.stopPropagation(), this._startEditing(i)); }
    _handleDoubleclick(i) { !this.disabled && this.editable && this._startEditing(i); }
    _edit() { this._changeDetectorRef.markForCheck(), this._startEditing(); }
    _startEditing(i) { if (!this.primaryAction || this.removeIcon && i && this._getSourceAction(i.target) === this.removeIcon)
        return; let n = this.value; this._isEditing = this._editStartPending = !0, _i(() => { this._getEditInput().initialize(n), setTimeout(() => this._ngZone.run(() => this._editStartPending = !1)); }, { injector: this._injector }); }
    _onEditFinish() { this._isEditing = this._editStartPending = !1, this.edited.emit({ chip: this, value: this._getEditInput().getValue() }), (this._document.activeElement === this._getEditInput().getNativeElement() || this._document.activeElement === this._document.body) && this.primaryAction.focus(); }
    _isRippleDisabled() { return super._isRippleDisabled() || this._isEditing; }
    _getEditInput() { return this.contentEditInput || this.defaultEditInput; }
    static \u0275fac = function (n) { return new (n || a); };
    static \u0275cmp = t.\u0275\u0275defineComponent({ type: a, selectors: [["mat-chip-row"], ["", "mat-chip-row", ""], ["mat-basic-chip-row"], ["", "mat-basic-chip-row", ""]], contentQueries: function (n, e, c) { if (n & 1 && t.\u0275\u0275contentQuery(c, N, 5), n & 2) {
            let o;
            t.\u0275\u0275queryRefresh(o = t.\u0275\u0275loadQuery()) && (e.contentEditInput = o.first);
        } }, viewQuery: function (n, e) { if (n & 1 && t.\u0275\u0275viewQuery(N, 5), n & 2) {
            let c;
            t.\u0275\u0275queryRefresh(c = t.\u0275\u0275loadQuery()) && (e.defaultEditInput = c.first);
        } }, hostAttrs: [1, "mat-mdc-chip", "mat-mdc-chip-row", "mdc-evolution-chip"], hostVars: 29, hostBindings: function (n, e) { n & 1 && t.\u0275\u0275listener("focus", function () { return e._handleFocus(); })("click", function (o) { return e._hasInteractiveActions() ? e._handleClick(o) : null; })("dblclick", function (o) { return e._handleDoubleclick(o); }), n & 2 && (t.\u0275\u0275domProperty("id", e.id), t.\u0275\u0275attribute("tabindex", e.disabled ? null : -1)("aria-label", null)("aria-description", null)("role", e.role), t.\u0275\u0275classProp("mat-mdc-chip-with-avatar", e.leadingIcon)("mat-mdc-chip-disabled", e.disabled)("mat-mdc-chip-editing", e._isEditing)("mat-mdc-chip-editable", e.editable)("mdc-evolution-chip--disabled", e.disabled)("mdc-evolution-chip--with-leading-action", e._hasLeadingActionIcon())("mdc-evolution-chip--with-trailing-action", e._hasTrailingIcon())("mdc-evolution-chip--with-primary-graphic", e.leadingIcon)("mdc-evolution-chip--with-primary-icon", e.leadingIcon)("mdc-evolution-chip--with-avatar", e.leadingIcon)("mat-mdc-chip-highlighted", e.highlighted)("mat-mdc-chip-with-trailing-icon", e._hasTrailingIcon())); }, inputs: { editable: "editable" }, outputs: { edited: "edited" }, features: [t.\u0275\u0275ProvidersFeature([{ provide: u, useExisting: a }, { provide: S, useExisting: a }]), t.\u0275\u0275InheritDefinitionFeature], ngContentSelectors: Mi, decls: 10, vars: 8, consts: [[1, "mat-mdc-chip-focus-overlay"], ["role", "gridcell", 1, "mdc-evolution-chip__cell", "mdc-evolution-chip__cell--leading"], ["role", "gridcell", "matChipAction", "", 1, "mdc-evolution-chip__cell", "mdc-evolution-chip__cell--primary", 3, "disabled"], [1, "mdc-evolution-chip__graphic", "mat-mdc-chip-graphic"], [1, "mdc-evolution-chip__text-label", "mat-mdc-chip-action-label"], ["aria-hidden", "true", 1, "mat-mdc-chip-primary-focus-indicator", "mat-focus-indicator"], [1, "mat-mdc-chip-touch-target"], ["role", "gridcell", 1, "mdc-evolution-chip__cell", "mdc-evolution-chip__cell--trailing"], ["matChipEditInput", ""]], template: function (n, e) { n & 1 && (t.\u0275\u0275projectionDef(Di), t.\u0275\u0275conditionalCreate(0, Fi, 1, 0, "span", 0), t.\u0275\u0275conditionalCreate(1, Ai, 2, 0, "span", 1), t.\u0275\u0275elementStart(2, "span", 2), t.\u0275\u0275conditionalCreate(3, Ri, 2, 0, "span", 3), t.\u0275\u0275elementStart(4, "span", 4), t.\u0275\u0275conditionalCreate(5, Pi, 2, 1)(6, Li, 1, 0), t.\u0275\u0275element(7, "span", 5), t.\u0275\u0275elementEnd(), t.\u0275\u0275element(8, "span", 6), t.\u0275\u0275elementEnd(), t.\u0275\u0275conditionalCreate(9, Oi, 2, 0, "span", 7)), n & 2 && (t.\u0275\u0275conditional(e._isEditing ? -1 : 0), t.\u0275\u0275advance(), t.\u0275\u0275conditional(e._hasLeadingActionIcon() ? 1 : -1), t.\u0275\u0275advance(), t.\u0275\u0275property("disabled", e.disabled), t.\u0275\u0275attribute("aria-description", e.ariaDescription)("aria-label", e.ariaLabel), t.\u0275\u0275advance(), t.\u0275\u0275conditional(e.leadingIcon ? 3 : -1), t.\u0275\u0275advance(2), t.\u0275\u0275conditional(e._isEditing ? 5 : 6), t.\u0275\u0275advance(4), t.\u0275\u0275conditional(e._hasTrailingIcon() ? 9 : -1)); }, dependencies: [_, N], styles: [ri], encapsulation: 2 });
} return a; })(), si = (() => {
    class a {
        _elementRef = r(v);
        _changeDetectorRef = r(ei);
        _dir = r(Ci, { optional: !0 });
        _lastDestroyedFocusedChipIndex = null;
        _keyManager;
        _destroyed = new y;
        _defaultRole = "presentation";
        get chipFocusChanges() { return this._getChipStream(i => i._onFocus); }
        get chipDestroyedChanges() { return this._getChipStream(i => i.destroyed); }
        get chipRemovedChanges() { return this._getChipStream(i => i.removed); }
        get disabled() { return this._disabled; }
        set disabled(i) { this._disabled = i, this._syncChipsState(); }
        _disabled = !1;
        get empty() { return !this._chips || this._chips.length === 0; }
        get role() { return this._explicitRole ? this._explicitRole : this.empty ? null : this._defaultRole; }
        tabIndex = 0;
        set role(i) { this._explicitRole = i; }
        _explicitRole = null;
        get focused() { return this._hasFocusedChip(); }
        _chips;
        _chipActions = new gi;
        ngAfterViewInit() { this._setUpFocusManagement(), this._trackChipSetChanges(), this._trackDestroyedFocusedChip(); }
        ngOnDestroy() { this._keyManager?.destroy(), this._chipActions.destroy(), this._destroyed.next(), this._destroyed.complete(); }
        _hasFocusedChip() { return this._chips && this._chips.some(i => i._hasFocus()); }
        _syncChipsState() { this._chips?.forEach(i => { i._chipListDisabled = this._disabled, i._changeDetectorRef.markForCheck(); }); }
        focus() { }
        _handleKeydown(i) { this._originatesFromChip(i) && this._keyManager.onKeydown(i); }
        _isValidIndex(i) { return i >= 0 && i < this._chips.length; }
        _allowFocusEscape() { let i = this._elementRef.nativeElement.tabIndex; i !== -1 && (this._elementRef.nativeElement.tabIndex = -1, setTimeout(() => this._elementRef.nativeElement.tabIndex = i)); }
        _getChipStream(i) { return this._chips.changes.pipe(f(null), yi(() => T(...this._chips.map(i)))); }
        _originatesFromChip(i) { let n = i.target; for (; n && n !== this._elementRef.nativeElement;) {
            if (n.classList.contains("mat-mdc-chip"))
                return !0;
            n = n.parentElement;
        } return !1; }
        _setUpFocusManagement() { this._chips.changes.pipe(f(this._chips)).subscribe(i => { let n = []; i.forEach(e => e._getActions().forEach(c => n.push(c))), this._chipActions.reset(n), this._chipActions.notifyOnChanges(); }), this._keyManager = new Si(this._chipActions).withVerticalOrientation().withHorizontalOrientation(this._dir ? this._dir.value : "ltr").withHomeAndEnd().skipPredicate(i => this._skipPredicate(i)), this.chipFocusChanges.pipe(l(this._destroyed)).subscribe(({ chip: i }) => { let n = i._getSourceAction(document.activeElement); n && this._keyManager.updateActiveItem(n); }), this._dir?.change.pipe(l(this._destroyed)).subscribe(i => this._keyManager.withHorizontalOrientation(i)); }
        _skipPredicate(i) { return i.disabled; }
        _trackChipSetChanges() { this._chips.changes.pipe(f(null), l(this._destroyed)).subscribe(() => { this.disabled && Promise.resolve().then(() => this._syncChipsState()), this._redirectDestroyedChipFocus(); }); }
        _trackDestroyedFocusedChip() { this.chipDestroyedChanges.pipe(l(this._destroyed)).subscribe(i => { let e = this._chips.toArray().indexOf(i.chip), c = i.chip._hasFocus(), o = i.chip._hadFocusOnRemove && this._keyManager.activeItem && i.chip._getActions().includes(this._keyManager.activeItem), g = c || o; this._isValidIndex(e) && g && (this._lastDestroyedFocusedChipIndex = e); }); }
        _redirectDestroyedChipFocus() { if (this._lastDestroyedFocusedChipIndex != null) {
            if (this._chips.length) {
                let i = Math.min(this._lastDestroyedFocusedChipIndex, this._chips.length - 1), n = this._chips.toArray()[i];
                n.disabled ? this._chips.length === 1 ? this.focus() : this._keyManager.setPreviousItemActive() : n.focus();
            }
            else
                this.focus();
            this._lastDestroyedFocusedChipIndex = null;
        } }
        static \u0275fac = function (n) { return new (n || a); };
        static \u0275cmp = t.\u0275\u0275defineComponent({ type: a, selectors: [["mat-chip-set"]], contentQueries: function (n, e, c) { if (n & 1 && t.\u0275\u0275contentQuery(c, u, 5), n & 2) {
                let o;
                t.\u0275\u0275queryRefresh(o = t.\u0275\u0275loadQuery()) && (e._chips = o);
            } }, hostAttrs: [1, "mat-mdc-chip-set", "mdc-evolution-chip-set"], hostVars: 1, hostBindings: function (n, e) { n & 1 && t.\u0275\u0275listener("keydown", function (o) { return e._handleKeydown(o); }), n & 2 && t.\u0275\u0275attribute("role", e.role); }, inputs: { disabled: [2, "disabled", "disabled", d], role: "role", tabIndex: [2, "tabIndex", "tabIndex", i => i == null ? 0 : ti(i)] }, ngContentSelectors: B, decls: 2, vars: 0, consts: [["role", "presentation", 1, "mdc-evolution-chip-set__chips"]], template: function (n, e) { n & 1 && (t.\u0275\u0275projectionDef(), t.\u0275\u0275domElementStart(0, "div", 0), t.\u0275\u0275projection(1), t.\u0275\u0275domElementEnd()); }, styles: [`.mat-mdc-chip-set {
  display: flex;
}
.mat-mdc-chip-set:focus {
  outline: none;
}
.mat-mdc-chip-set .mdc-evolution-chip-set__chips {
  min-width: 100%;
  margin-left: -8px;
  margin-right: 0;
}
.mat-mdc-chip-set .mdc-evolution-chip {
  margin: 8px 0 8px 8px;
}
[dir=rtl] .mat-mdc-chip-set .mdc-evolution-chip-set__chips {
  margin-left: 0;
  margin-right: -8px;
}
[dir=rtl] .mat-mdc-chip-set .mdc-evolution-chip {
  margin-left: 0;
  margin-right: 8px;
}

.mdc-evolution-chip-set__chips {
  display: flex;
  flex-flow: wrap;
  min-width: 0;
}

.mat-mdc-chip-set-stacked {
  flex-direction: column;
  align-items: flex-start;
}
.mat-mdc-chip-set-stacked .mat-mdc-chip {
  width: 100%;
}
.mat-mdc-chip-set-stacked .mdc-evolution-chip__graphic {
  flex-grow: 0;
}
.mat-mdc-chip-set-stacked .mdc-evolution-chip__action--primary {
  flex-basis: 100%;
  justify-content: start;
}

input.mat-mdc-chip-input {
  flex: 1 0 150px;
  margin-left: 8px;
}
[dir=rtl] input.mat-mdc-chip-input {
  margin-left: 0;
  margin-right: 8px;
}
.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input::placeholder {
  opacity: 1;
}
.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input::-moz-placeholder {
  opacity: 1;
}
.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input::-webkit-input-placeholder {
  opacity: 1;
}
.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input:-ms-input-placeholder {
  opacity: 1;
}
.mat-mdc-chip-set + input.mat-mdc-chip-input {
  margin-left: 0;
  margin-right: 0;
}
`], encapsulation: 2 });
    }
    return a;
})(), M = class {
    source;
    value;
    constructor(s, i) { this.source = s, this.value = i; }
}, Vi = { provide: z, useExisting: fi(() => ji), multi: !0 }, ji = (() => { class a extends si {
    _onTouched = () => { };
    _onChange = () => { };
    _defaultRole = "listbox";
    _defaultOptions = r(b, { optional: !0 });
    get multiple() { return this._multiple; }
    set multiple(i) { this._multiple = i, this._syncListboxProperties(); }
    _multiple = !1;
    get selected() { let i = this._chips.toArray().filter(n => n.selected); return this.multiple ? i : i[0]; }
    ariaOrientation = "horizontal";
    get selectable() { return this._selectable; }
    set selectable(i) { this._selectable = i, this._syncListboxProperties(); }
    _selectable = !0;
    compareWith = (i, n) => i === n;
    required = !1;
    get hideSingleSelectionIndicator() { return this._hideSingleSelectionIndicator; }
    set hideSingleSelectionIndicator(i) { this._hideSingleSelectionIndicator = i, this._syncListboxProperties(); }
    _hideSingleSelectionIndicator = this._defaultOptions?.hideSingleSelectionIndicator ?? !1;
    get chipSelectionChanges() { return this._getChipStream(i => i.selectionChange); }
    get chipBlurChanges() { return this._getChipStream(i => i._onBlur); }
    get value() { return this._value; }
    set value(i) { this._chips && this._chips.length && this._setSelectionByValue(i, !1), this._value = i; }
    _value;
    change = new h;
    _chips = void 0;
    ngAfterContentInit() { this._chips.changes.pipe(f(null), l(this._destroyed)).subscribe(() => { this.value !== void 0 && Promise.resolve().then(() => { this._setSelectionByValue(this.value, !1); }), this._syncListboxProperties(); }), this.chipBlurChanges.pipe(l(this._destroyed)).subscribe(() => this._blur()), this.chipSelectionChanges.pipe(l(this._destroyed)).subscribe(i => { this.multiple || this._chips.forEach(n => { n !== i.source && n._setSelectedState(!1, !1, !1); }), i.isUserInput && this._propagateChanges(); }); }
    focus() { if (this.disabled)
        return; let i = this._getFirstSelectedChip(); i && !i.disabled ? i.focus() : this._chips.length > 0 ? this._keyManager.setFirstItemActive() : this._elementRef.nativeElement.focus(); }
    writeValue(i) { i != null ? this.value = i : this.value = void 0; }
    registerOnChange(i) { this._onChange = i; }
    registerOnTouched(i) { this._onTouched = i; }
    setDisabledState(i) { this.disabled = i; }
    _setSelectionByValue(i, n = !0) { this._clearSelection(), Array.isArray(i) ? i.forEach(e => this._selectValue(e, n)) : this._selectValue(i, n); }
    _blur() { this.disabled || setTimeout(() => { this.focused || this._markAsTouched(); }); }
    _keydown(i) { i.keyCode === ii && super._allowFocusEscape(); }
    _markAsTouched() { this._onTouched(), this._changeDetectorRef.markForCheck(); }
    _propagateChanges() { let i = null; Array.isArray(this.selected) ? i = this.selected.map(n => n.value) : i = this.selected ? this.selected.value : void 0, this._value = i, this.change.emit(new M(this, i)), this._onChange(i), this._changeDetectorRef.markForCheck(); }
    _clearSelection(i) { this._chips.forEach(n => { n !== i && n.deselect(); }); }
    _selectValue(i, n) { let e = this._chips.find(c => c.value != null && this.compareWith(c.value, i)); return e && (n ? e.selectViaInteraction() : e.select()), e; }
    _syncListboxProperties() { this._chips && Promise.resolve().then(() => { this._chips.forEach(i => { i._chipListMultiple = this.multiple, i.chipListSelectable = this._selectable, i._chipListHideSingleSelectionIndicator = this.hideSingleSelectionIndicator, i._changeDetectorRef.markForCheck(); }); }); }
    _getFirstSelectedChip() { return Array.isArray(this.selected) ? this.selected.length ? this.selected[0] : void 0 : this.selected; }
    _skipPredicate(i) { return !1; }
    static \u0275fac = (() => { let i; return function (e) { return (i || (i = t.\u0275\u0275getInheritedFactory(a)))(e || a); }; })();
    static \u0275cmp = t.\u0275\u0275defineComponent({ type: a, selectors: [["mat-chip-listbox"]], contentQueries: function (n, e, c) { if (n & 1 && t.\u0275\u0275contentQuery(c, Hi, 5), n & 2) {
            let o;
            t.\u0275\u0275queryRefresh(o = t.\u0275\u0275loadQuery()) && (e._chips = o);
        } }, hostAttrs: [1, "mdc-evolution-chip-set", "mat-mdc-chip-listbox"], hostVars: 10, hostBindings: function (n, e) { n & 1 && t.\u0275\u0275listener("focus", function () { return e.focus(); })("blur", function () { return e._blur(); })("keydown", function (o) { return e._keydown(o); }), n & 2 && (t.\u0275\u0275domProperty("tabIndex", e.disabled || e.empty ? -1 : e.tabIndex), t.\u0275\u0275attribute("role", e.role)("aria-required", e.role ? e.required : null)("aria-disabled", e.disabled.toString())("aria-multiselectable", e.multiple)("aria-orientation", e.ariaOrientation), t.\u0275\u0275classProp("mat-mdc-chip-list-disabled", e.disabled)("mat-mdc-chip-list-required", e.required)); }, inputs: { multiple: [2, "multiple", "multiple", d], ariaOrientation: [0, "aria-orientation", "ariaOrientation"], selectable: [2, "selectable", "selectable", d], compareWith: "compareWith", required: [2, "required", "required", d], hideSingleSelectionIndicator: [2, "hideSingleSelectionIndicator", "hideSingleSelectionIndicator", d], value: "value" }, outputs: { change: "change" }, features: [t.\u0275\u0275ProvidersFeature([Vi]), t.\u0275\u0275InheritDefinitionFeature], ngContentSelectors: B, decls: 2, vars: 0, consts: [["role", "presentation", 1, "mdc-evolution-chip-set__chips"]], template: function (n, e) { n & 1 && (t.\u0275\u0275projectionDef(), t.\u0275\u0275domElementStart(0, "div", 0), t.\u0275\u0275projection(1), t.\u0275\u0275domElementEnd()); }, styles: [di], encapsulation: 2 });
} return a; })(), F = class {
    source;
    value;
    constructor(s, i) { this.source = s, this.value = i; }
}, Nt = (() => { class a extends si {
    ngControl = r(j, { optional: !0, self: !0 });
    controlType = "mat-chip-grid";
    _chipInput;
    _defaultRole = "grid";
    _errorStateTracker;
    _uid = r(R).getId("mat-chip-grid-");
    _ariaDescribedbyIds = [];
    _onTouched = () => { };
    _onChange = () => { };
    get disabled() { return this.ngControl ? !!this.ngControl.disabled : this._disabled; }
    set disabled(i) { this._disabled = i, this._syncChipsState(), this.stateChanges.next(); }
    get id() { return this._chipInput ? this._chipInput.id : this._uid; }
    get empty() { return (!this._chipInput || this._chipInput.empty) && (!this._chips || this._chips.length === 0); }
    get placeholder() { return this._chipInput ? this._chipInput.placeholder : this._placeholder; }
    set placeholder(i) { this._placeholder = i, this.stateChanges.next(); }
    _placeholder = "";
    get focused() { return this._chipInput?.focused || this._hasFocusedChip(); }
    get required() { return this._required ?? this.ngControl?.control?.hasValidator(V.required) ?? !1; }
    set required(i) { this._required = i, this.stateChanges.next(); }
    _required;
    get shouldLabelFloat() { return !this.empty || this.focused; }
    get value() { return this._value; }
    set value(i) { this._value = i; }
    _value = [];
    get errorStateMatcher() { return this._errorStateTracker.matcher; }
    set errorStateMatcher(i) { this._errorStateTracker.matcher = i; }
    get chipBlurChanges() { return this._getChipStream(i => i._onBlur); }
    change = new h;
    valueChange = new h;
    _chips = void 0;
    stateChanges = new y;
    get errorState() { return this._errorStateTracker.errorState; }
    set errorState(i) { this._errorStateTracker.errorState = i; }
    constructor() { super(); let i = r(G, { optional: !0 }), n = r(q, { optional: !0 }), e = r(C), c = r(Q, { optional: !0, self: !0 }); this.ngControl && (this.ngControl.valueAccessor = this), this._errorStateTracker = new Y(e, c || this.ngControl, n, i, this.stateChanges); }
    ngAfterContentInit() { this.chipBlurChanges.pipe(l(this._destroyed)).subscribe(() => { this._blur(), this.stateChanges.next(); }), T(this.chipFocusChanges, this._chips.changes).pipe(l(this._destroyed)).subscribe(() => this.stateChanges.next()); }
    ngDoCheck() { this.ngControl && this.updateErrorState(); }
    ngOnDestroy() { super.ngOnDestroy(), this.stateChanges.complete(); }
    registerInput(i) { this._chipInput = i, this._chipInput.setDescribedByIds(this._ariaDescribedbyIds), this._elementRef.nativeElement.removeAttribute("aria-describedby"); }
    onContainerClick(i) { !this.disabled && !this._originatesFromChip(i) && this.focus(); }
    focus() { if (!(this.disabled || this._chipInput?.focused)) {
        if (!this._chips.length || this._chips.first.disabled) {
            if (!this._chipInput)
                return;
            Promise.resolve().then(() => this._chipInput.focus());
        }
        else {
            let i = this._keyManager.activeItem;
            i ? i.focus() : this._keyManager.setFirstItemActive();
        }
        this.stateChanges.next();
    } }
    get describedByIds() { if (this._chipInput)
        return this._chipInput.describedByIds || []; let i = this._elementRef.nativeElement.getAttribute("aria-describedby"); return i ? i.split(" ") : []; }
    setDescribedByIds(i) { this._ariaDescribedbyIds = i, this._chipInput ? this._chipInput.setDescribedByIds(i) : i.length ? this._elementRef.nativeElement.setAttribute("aria-describedby", i.join(" ")) : this._elementRef.nativeElement.removeAttribute("aria-describedby"); }
    writeValue(i) { this._value = i; }
    registerOnChange(i) { this._onChange = i; }
    registerOnTouched(i) { this._onTouched = i; }
    setDisabledState(i) { this.disabled = i, this.stateChanges.next(); }
    updateErrorState() { this._errorStateTracker.updateErrorState(); }
    _blur() { this.disabled || setTimeout(() => { this.focused || (this._propagateChanges(), this._markAsTouched()); }); }
    _allowFocusEscape() { this._chipInput?.focused || super._allowFocusEscape(); }
    _handleKeydown(i) { let n = i.keyCode, e = this._keyManager.activeItem; if (n === ii)
        this._chipInput?.focused && x(i, "shiftKey") && this._chips.length && !this._chips.last.disabled ? (i.preventDefault(), e ? this._keyManager.setActiveItem(e) : this._focusLastChip()) : super._allowFocusEscape();
    else if (!this._chipInput?.focused)
        if ((n === X || n === hi) && e) {
            let c = this._chipActions.filter(L => L._isPrimary === e._isPrimary && !this._skipPredicate(L)), o = c.indexOf(e), g = i.keyCode === X ? -1 : 1;
            i.preventDefault(), o > -1 && this._isValidIndex(o + g) && this._keyManager.setActiveItem(c[o + g]);
        }
        else
            super._handleKeydown(i); this.stateChanges.next(); }
    _redirectDestroyedChipFocus() { this._lastDestroyedFocusedChipIndex !== null && (super._redirectDestroyedChipFocus(), (!this._chips.length || this._chips.length === 1 && this._chips.first.disabled) && this._keyManager.updateActiveItem(-1)); }
    _focusLastChip() { this._chips.length && this._chips.last.focus(); }
    _propagateChanges() { let i = this._chips.length ? this._chips.toArray().map(n => n.value) : []; this._value = i, this.change.emit(new F(this, i)), this.valueChange.emit(i), this._onChange(i), this._changeDetectorRef.markForCheck(); }
    _markAsTouched() { this._onTouched(), this._changeDetectorRef.markForCheck(), this.stateChanges.next(); }
    static \u0275fac = function (n) { return new (n || a); };
    static \u0275cmp = t.\u0275\u0275defineComponent({ type: a, selectors: [["mat-chip-grid"]], contentQueries: function (n, e, c) { if (n & 1 && t.\u0275\u0275contentQuery(c, zi, 5), n & 2) {
            let o;
            t.\u0275\u0275queryRefresh(o = t.\u0275\u0275loadQuery()) && (e._chips = o);
        } }, hostAttrs: [1, "mat-mdc-chip-set", "mat-mdc-chip-grid", "mdc-evolution-chip-set"], hostVars: 10, hostBindings: function (n, e) { n & 1 && t.\u0275\u0275listener("focus", function () { return e.focus(); })("blur", function () { return e._blur(); }), n & 2 && (t.\u0275\u0275attribute("role", e.role)("tabindex", e.disabled || e._chips && e._chips.length === 0 ? -1 : e.tabIndex)("aria-disabled", e.disabled.toString())("aria-invalid", e.errorState), t.\u0275\u0275classProp("mat-mdc-chip-list-disabled", e.disabled)("mat-mdc-chip-list-invalid", e.errorState)("mat-mdc-chip-list-required", e.required)); }, inputs: { disabled: [2, "disabled", "disabled", d], placeholder: "placeholder", required: [2, "required", "required", d], value: "value", errorStateMatcher: "errorStateMatcher" }, outputs: { change: "change", valueChange: "valueChange" }, features: [t.\u0275\u0275ProvidersFeature([{ provide: K, useExisting: a }]), t.\u0275\u0275InheritDefinitionFeature], ngContentSelectors: B, decls: 2, vars: 0, consts: [["role", "presentation", 1, "mdc-evolution-chip-set__chips"]], template: function (n, e) { n & 1 && (t.\u0275\u0275projectionDef(), t.\u0275\u0275domElementStart(0, "div", 0), t.\u0275\u0275projection(1), t.\u0275\u0275domElementEnd()); }, styles: [di], encapsulation: 2 });
} return a; })(), xt = (() => { class a {
    _elementRef = r(v);
    focused = !1;
    get chipGrid() { return this._chipGrid; }
    set chipGrid(i) { i && (this._chipGrid = i, this._chipGrid.registerInput(this)); }
    _chipGrid;
    addOnBlur = !1;
    separatorKeyCodes;
    chipEnd = new h;
    placeholder = "";
    id = r(R).getId("mat-mdc-chip-list-input-");
    get disabled() { return this._disabled || this._chipGrid && this._chipGrid.disabled; }
    set disabled(i) { this._disabled = i; }
    _disabled = !1;
    readonly = !1;
    disabledInteractive;
    get empty() { return !this.inputElement.value; }
    inputElement;
    constructor() { let i = r(b), n = r(W, { optional: !0 }); this.inputElement = this._elementRef.nativeElement, this.separatorKeyCodes = i.separatorKeyCodes, this.disabledInteractive = i.inputDisabledInteractive ?? !1, n && this.inputElement.classList.add("mat-mdc-form-field-input-control"); }
    ngOnChanges() { this._chipGrid.stateChanges.next(); }
    ngOnDestroy() { this.chipEnd.complete(); }
    _keydown(i) { this.empty && i.keyCode === $ ? (i.repeat || this._chipGrid._focusLastChip(), i.preventDefault()) : this._emitChipEnd(i); }
    _blur() { this.addOnBlur && this._emitChipEnd(), this.focused = !1, this._chipGrid.focused || this._chipGrid._blur(), this._chipGrid.stateChanges.next(); }
    _focus() { this.focused = !0, this._chipGrid.stateChanges.next(); }
    _emitChipEnd(i) { (!i || this._isSeparatorKey(i) && !i.repeat) && (this.chipEnd.emit({ input: this.inputElement, value: this.inputElement.value, chipInput: this }), i?.preventDefault()); }
    _onInput() { this._chipGrid.stateChanges.next(); }
    focus() { this.inputElement.focus(); }
    clear() { this.inputElement.value = ""; }
    get describedByIds() { return this._elementRef.nativeElement.getAttribute("aria-describedby")?.split(" ") || []; }
    setDescribedByIds(i) { let n = this._elementRef.nativeElement; i.length ? n.setAttribute("aria-describedby", i.join(" ")) : n.removeAttribute("aria-describedby"); }
    _isSeparatorKey(i) { if (!this.separatorKeyCodes)
        return !1; for (let n of this.separatorKeyCodes) {
        let e, c;
        typeof n == "number" ? (e = n, c = null) : (e = n.keyCode, c = n.modifiers);
        let o = c?.length ? x(i, ...c) : !x(i);
        if (e === i.keyCode && o)
            return !0;
    } return !1; }
    _getReadonlyAttribute() { return this.readonly || this.disabled && this.disabledInteractive ? "true" : null; }
    static \u0275fac = function (n) { return new (n || a); };
    static \u0275dir = t.\u0275\u0275defineDirective({ type: a, selectors: [["input", "matChipInputFor", ""]], hostAttrs: [1, "mat-mdc-chip-input", "mat-mdc-input-element", "mdc-text-field__input", "mat-input-element"], hostVars: 8, hostBindings: function (n, e) { n & 1 && t.\u0275\u0275listener("keydown", function (o) { return e._keydown(o); })("blur", function () { return e._blur(); })("focus", function () { return e._focus(); })("input", function () { return e._onInput(); }), n & 2 && (t.\u0275\u0275domProperty("id", e.id), t.\u0275\u0275attribute("disabled", e.disabled && !e.disabledInteractive ? "" : null)("placeholder", e.placeholder || null)("aria-invalid", e._chipGrid && e._chipGrid.ngControl ? e._chipGrid.ngControl.invalid : null)("aria-required", e._chipGrid && e._chipGrid.required || null)("aria-disabled", e.disabled && e.disabledInteractive ? "true" : null)("readonly", e._getReadonlyAttribute())("required", e._chipGrid && e._chipGrid.required || null)); }, inputs: { chipGrid: [0, "matChipInputFor", "chipGrid"], addOnBlur: [2, "matChipInputAddOnBlur", "addOnBlur", d], separatorKeyCodes: [0, "matChipInputSeparatorKeyCodes", "separatorKeyCodes"], placeholder: "placeholder", id: "id", disabled: [2, "disabled", "disabled", d], readonly: [2, "readonly", "readonly", d], disabledInteractive: [2, "matChipInputDisabledInteractive", "disabledInteractive", d] }, outputs: { chipEnd: "matChipInputTokenEnd" }, exportAs: ["matChipInput", "matChipInputFor"], features: [t.\u0275\u0275NgOnChangesFeature] });
} return a; })();
var It = (() => { class a {
    static \u0275fac = function (n) { return new (n || a); };
    static \u0275mod = t.\u0275\u0275defineNgModule({ type: a });
    static \u0275inj = t.\u0275\u0275defineInjector({ providers: [C, { provide: b, useValue: { separatorKeyCodes: [p] } }], imports: [U, Ni] });
} return a; })();
export { S as MAT_CHIP, b as MAT_CHIPS_DEFAULT_OPTIONS, I as MAT_CHIP_AVATAR, E as MAT_CHIP_EDIT, Vi as MAT_CHIP_LISTBOX_CONTROL_VALUE_ACCESSOR, D as MAT_CHIP_REMOVE, k as MAT_CHIP_TRAILING_ICON, u as MatChip, bt as MatChipAvatar, wt as MatChipEdit, N as MatChipEditInput, Nt as MatChipGrid, F as MatChipGridChange, xt as MatChipInput, ji as MatChipListbox, M as MatChipListboxChange, Hi as MatChipOption, Ct as MatChipRemove, zi as MatChipRow, J as MatChipSelectionChange, si as MatChipSet, St as MatChipTrailingIcon, It as MatChipsModule };
