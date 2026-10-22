import { a as P, b as N } from "@nf-internal/chunk-MPT25TJV";
import { a as S } from "@nf-internal/chunk-GKOUHP5M";
import "@nf-internal/chunk-CLS55YPL";
import { a as y } from "@nf-internal/chunk-TBOQSXHX";
import { a as w } from "@nf-internal/chunk-PMOCNCWX";
import { d as v, e as x } from "@nf-internal/chunk-TDH6BADM";
import { a as k } from "@nf-internal/chunk-2SOO3RAN";
import { c as f } from "@nf-internal/chunk-L6LZ2NRF";
import "@nf-internal/chunk-2NFLSA4Y";
import * as t from "@angular/core";
import { InjectionToken as d, inject as o, ElementRef as h, signal as b, NgZone as I, Injector as j, ChangeDetectorRef as A, EventEmitter as O, forwardRef as Q, Renderer2 as V } from "@angular/core";
import { coerceBooleanProperty as l, coerceNumberProperty as H } from "@angular/cdk/coercion";
import { Platform as G, _getFocusedElementPierceShadowDom as C } from "@angular/cdk/platform";
import { _CdkPrivateStyleLoader as U } from "@angular/cdk/private";
import { Subscription as q, merge as W, Subject as K } from "rxjs";
import { CdkObserveContent as z, ObserversModule as X } from "@angular/cdk/observers";
import { FocusKeyManager as Z } from "@angular/cdk/a11y";
import { SelectionModel as L } from "@angular/cdk/collections";
import { DOWN_ARROW as Y, UP_ARROW as J, ENTER as $, SPACE as tt, A as it, hasModifierKey as et } from "@angular/cdk/keycodes";
import { takeUntil as M } from "rxjs/operators";
import { NgTemplateOutlet as nt } from "@angular/common";
import { BidiModule as St } from "@angular/cdk/bidi";
import "@angular/cdk/layout";
var _ = ["*"], u = `.mdc-list {
  margin: 0;
  padding: 8px 0;
  list-style-type: none;
}
.mdc-list:focus {
  outline: none;
}

.mdc-list-item {
  display: flex;
  position: relative;
  justify-content: flex-start;
  overflow: hidden;
  padding: 0;
  align-items: stretch;
  cursor: pointer;
  padding-left: 16px;
  padding-right: 16px;
  background-color: var(--%NS%mat-list-list-item-container-color, transparent);
  border-radius: var(--%NS%mat-list-list-item-container-shape, var(--%NS%mat-sys-corner-none));
}
.mdc-list-item.mdc-list-item--selected {
  background-color: var(--%NS%mat-list-list-item-selected-container-color);
}
.mdc-list-item:focus {
  outline: 0;
}
.mdc-list-item.mdc-list-item--disabled {
  cursor: auto;
}
.mdc-list-item.mdc-list-item--with-one-line {
  height: var(--%NS%mat-list-list-item-one-line-container-height, 48px);
}
.mdc-list-item.mdc-list-item--with-one-line .mdc-list-item__start {
  align-self: center;
  margin-top: 0;
}
.mdc-list-item.mdc-list-item--with-one-line .mdc-list-item__end {
  align-self: center;
  margin-top: 0;
}
.mdc-list-item.mdc-list-item--with-two-lines {
  height: var(--%NS%mat-list-list-item-two-line-container-height, 64px);
}
.mdc-list-item.mdc-list-item--with-two-lines .mdc-list-item__start {
  align-self: flex-start;
  margin-top: 16px;
}
.mdc-list-item.mdc-list-item--with-two-lines .mdc-list-item__end {
  align-self: center;
  margin-top: 0;
}
.mdc-list-item.mdc-list-item--with-three-lines {
  height: var(--%NS%mat-list-list-item-three-line-container-height, 88px);
}
.mdc-list-item.mdc-list-item--with-three-lines .mdc-list-item__start {
  align-self: flex-start;
  margin-top: 16px;
}
.mdc-list-item.mdc-list-item--with-three-lines .mdc-list-item__end {
  align-self: flex-start;
  margin-top: 16px;
}
.mdc-list-item.mdc-list-item--%NS%selected::before, .mdc-list-item.mdc-list-item--%NS%selected:focus::before, .mdc-list-item:not(.mdc-list-item--selected):focus::before {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  content: "";
  pointer-events: none;
}

a.mdc-list-item {
  color: inherit;
  text-decoration: none;
}

.mdc-list-item__start {
  fill: currentColor;
  flex-shrink: 0;
  pointer-events: none;
}
.mdc-list-item--with-leading-icon .mdc-list-item__start {
  color: var(--%NS%mat-list-list-item-leading-icon-color, var(--%NS%mat-sys-on-surface-variant));
  width: var(--%NS%mat-list-list-item-leading-icon-size, 24px);
  height: var(--%NS%mat-list-list-item-leading-icon-size, 24px);
  margin-left: 16px;
  margin-right: 32px;
}
[dir=rtl] .mdc-list-item--with-leading-icon .mdc-list-item__start {
  margin-left: 32px;
  margin-right: 16px;
}
.mdc-list-item--%NS%with-leading-icon:hover .mdc-list-item__start {
  color: var(--%NS%mat-list-list-item-hover-leading-icon-color);
}
.mdc-list-item--with-leading-avatar .mdc-list-item__start {
  width: var(--%NS%mat-list-list-item-leading-avatar-size, 40px);
  height: var(--%NS%mat-list-list-item-leading-avatar-size, 40px);
  margin-left: 16px;
  margin-right: 16px;
  border-radius: 50%;
}
.mdc-list-item--with-leading-avatar .mdc-list-item__start, [dir=rtl] .mdc-list-item--with-leading-avatar .mdc-list-item__start {
  margin-left: 16px;
  margin-right: 16px;
  border-radius: 50%;
}

.mdc-list-item__end {
  flex-shrink: 0;
  pointer-events: none;
}
.mdc-list-item--with-trailing-meta .mdc-list-item__end {
  font-family: var(--%NS%mat-list-list-item-trailing-supporting-text-font, var(--%NS%mat-sys-label-small-font));
  line-height: var(--%NS%mat-list-list-item-trailing-supporting-text-line-height, var(--%NS%mat-sys-label-small-line-height));
  font-size: var(--%NS%mat-list-list-item-trailing-supporting-text-size, var(--%NS%mat-sys-label-small-size));
  font-weight: var(--%NS%mat-list-list-item-trailing-supporting-text-weight, var(--%NS%mat-sys-label-small-weight));
  letter-spacing: var(--%NS%mat-list-list-item-trailing-supporting-text-tracking, var(--%NS%mat-sys-label-small-tracking));
}
.mdc-list-item--with-trailing-icon .mdc-list-item__end {
  color: var(--%NS%mat-list-list-item-trailing-icon-color, var(--%NS%mat-sys-on-surface-variant));
  width: var(--%NS%mat-list-list-item-trailing-icon-size, 24px);
  height: var(--%NS%mat-list-list-item-trailing-icon-size, 24px);
}
.mdc-list-item--%NS%with-trailing-icon:hover .mdc-list-item__end {
  color: var(--%NS%mat-list-list-item-hover-trailing-icon-color);
}
.mdc-list-item.mdc-list-item--with-trailing-meta .mdc-list-item__end {
  color: var(--%NS%mat-list-list-item-trailing-supporting-text-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-list-item--selected.mdc-list-item--with-trailing-icon .mdc-list-item__end {
  color: var(--%NS%mat-list-list-item-selected-trailing-icon-color, var(--%NS%mat-sys-primary));
}

.mdc-list-item__content {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  align-self: center;
  flex: 1;
  pointer-events: none;
}
.mdc-list-item--with-two-lines .mdc-list-item__content, .mdc-list-item--with-three-lines .mdc-list-item__content {
  align-self: stretch;
}

.mdc-list-item__primary-text {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  color: var(--%NS%mat-list-list-item-label-text-color, var(--%NS%mat-sys-on-surface));
  font-family: var(--%NS%mat-list-list-item-label-text-font, var(--%NS%mat-sys-body-large-font));
  line-height: var(--%NS%mat-list-list-item-label-text-line-height, var(--%NS%mat-sys-body-large-line-height));
  font-size: var(--%NS%mat-list-list-item-label-text-size, var(--%NS%mat-sys-body-large-size));
  font-weight: var(--%NS%mat-list-list-item-label-text-weight, var(--%NS%mat-sys-body-large-weight));
  letter-spacing: var(--%NS%mat-list-list-item-label-text-tracking, var(--%NS%mat-sys-body-large-tracking));
}
.mdc-list-item:hover .mdc-list-item__primary-text {
  color: var(--%NS%mat-list-list-item-hover-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mdc-list-item:focus .mdc-list-item__primary-text {
  color: var(--%NS%mat-list-list-item-focus-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mdc-list-item--with-two-lines .mdc-list-item__primary-text, .mdc-list-item--with-three-lines .mdc-list-item__primary-text {
  display: block;
  margin-top: 0;
  line-height: normal;
  margin-bottom: -20px;
}
.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before, .mdc-list-item--with-three-lines .mdc-list-item__primary-text::before {
  display: inline-block;
  width: 0;
  height: 28px;
  content: "";
  vertical-align: 0;
}
.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after, .mdc-list-item--with-three-lines .mdc-list-item__primary-text::after {
  display: inline-block;
  width: 0;
  height: 20px;
  content: "";
  vertical-align: -20px;
}

.mdc-list-item__secondary-text {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  display: block;
  margin-top: 0;
  color: var(--%NS%mat-list-list-item-supporting-text-color, var(--%NS%mat-sys-on-surface-variant));
  font-family: var(--%NS%mat-list-list-item-supporting-text-font, var(--%NS%mat-sys-body-medium-font));
  line-height: var(--%NS%mat-list-list-item-supporting-text-line-height, var(--%NS%mat-sys-body-medium-line-height));
  font-size: var(--%NS%mat-list-list-item-supporting-text-size, var(--%NS%mat-sys-body-medium-size));
  font-weight: var(--%NS%mat-list-list-item-supporting-text-weight, var(--%NS%mat-sys-body-medium-weight));
  letter-spacing: var(--%NS%mat-list-list-item-supporting-text-tracking, var(--%NS%mat-sys-body-medium-tracking));
}
.mdc-list-item__secondary-text::before {
  display: inline-block;
  width: 0;
  height: 20px;
  content: "";
  vertical-align: 0;
}
.mdc-list-item--with-three-lines .mdc-list-item__secondary-text {
  white-space: normal;
  line-height: 20px;
}
.mdc-list-item--with-overline .mdc-list-item__secondary-text {
  white-space: nowrap;
  line-height: auto;
}

.mdc-list-item--with-leading-radio.mdc-list-item,
.mdc-list-item--with-leading-checkbox.mdc-list-item,
.mdc-list-item--with-leading-icon.mdc-list-item,
.mdc-list-item--with-leading-avatar.mdc-list-item {
  padding-left: 0;
  padding-right: 16px;
}
[dir=rtl] .mdc-list-item--with-leading-radio.mdc-list-item,
[dir=rtl] .mdc-list-item--with-leading-checkbox.mdc-list-item,
[dir=rtl] .mdc-list-item--with-leading-icon.mdc-list-item,
[dir=rtl] .mdc-list-item--with-leading-avatar.mdc-list-item {
  padding-left: 16px;
  padding-right: 0;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text {
  display: block;
  margin-top: 0;
  line-height: normal;
  margin-bottom: -20px;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before {
  display: inline-block;
  width: 0;
  height: 32px;
  content: "";
  vertical-align: 0;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after {
  display: inline-block;
  width: 0;
  height: 20px;
  content: "";
  vertical-align: -20px;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end {
  display: block;
  margin-top: 0;
  line-height: normal;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before {
  display: inline-block;
  width: 0;
  height: 32px;
  content: "";
  vertical-align: 0;
}

.mdc-list-item--with-trailing-icon.mdc-list-item, [dir=rtl] .mdc-list-item--with-trailing-icon.mdc-list-item {
  padding-left: 0;
  padding-right: 0;
}
.mdc-list-item--with-trailing-icon .mdc-list-item__end {
  margin-left: 16px;
  margin-right: 16px;
}

.mdc-list-item--with-trailing-meta.mdc-list-item {
  padding-left: 16px;
  padding-right: 0;
}
[dir=rtl] .mdc-list-item--with-trailing-meta.mdc-list-item {
  padding-left: 0;
  padding-right: 16px;
}
.mdc-list-item--with-trailing-meta .mdc-list-item__end {
  -webkit-user-select: none;
  user-select: none;
  margin-left: 28px;
  margin-right: 16px;
}
[dir=rtl] .mdc-list-item--with-trailing-meta .mdc-list-item__end {
  margin-left: 16px;
  margin-right: 28px;
}
.mdc-list-item--with-trailing-meta.mdc-list-item--with-three-lines .mdc-list-item__end, .mdc-list-item--with-trailing-meta.mdc-list-item--with-two-lines .mdc-list-item__end {
  display: block;
  line-height: normal;
  align-self: flex-start;
  margin-top: 0;
}
.mdc-list-item--with-trailing-meta.mdc-list-item--with-three-lines .mdc-list-item__end::before, .mdc-list-item--with-trailing-meta.mdc-list-item--with-two-lines .mdc-list-item__end::before {
  display: inline-block;
  width: 0;
  height: 28px;
  content: "";
  vertical-align: 0;
}

.mdc-list-item--with-leading-radio .mdc-list-item__start,
.mdc-list-item--with-leading-checkbox .mdc-list-item__start {
  margin-left: 8px;
  margin-right: 24px;
}
[dir=rtl] .mdc-list-item--with-leading-radio .mdc-list-item__start,
[dir=rtl] .mdc-list-item--with-leading-checkbox .mdc-list-item__start {
  margin-left: 24px;
  margin-right: 8px;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__start,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__start {
  align-self: flex-start;
  margin-top: 8px;
}

.mdc-list-item--with-trailing-radio.mdc-list-item,
.mdc-list-item--with-trailing-checkbox.mdc-list-item {
  padding-left: 16px;
  padding-right: 0;
}
[dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item,
[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item {
  padding-left: 0;
  padding-right: 16px;
}
.mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-icon, .mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-avatar,
.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-icon,
.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-avatar {
  padding-left: 0;
}
[dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-icon, [dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-avatar,
[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-icon,
[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-avatar {
  padding-right: 0;
}
.mdc-list-item--with-trailing-radio .mdc-list-item__end,
.mdc-list-item--with-trailing-checkbox .mdc-list-item__end {
  margin-left: 24px;
  margin-right: 8px;
}
[dir=rtl] .mdc-list-item--with-trailing-radio .mdc-list-item__end,
[dir=rtl] .mdc-list-item--with-trailing-checkbox .mdc-list-item__end {
  margin-left: 8px;
  margin-right: 24px;
}
.mdc-list-item--with-trailing-radio.mdc-list-item--with-three-lines .mdc-list-item__end,
.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-three-lines .mdc-list-item__end {
  align-self: flex-start;
  margin-top: 8px;
}

.mdc-list-group__subheader {
  margin: 0.75rem 16px;
}

.mdc-list-item--disabled .mdc-list-item__start,
.mdc-list-item--disabled .mdc-list-item__content,
.mdc-list-item--disabled .mdc-list-item__end {
  opacity: 1;
}
.mdc-list-item--disabled .mdc-list-item__primary-text,
.mdc-list-item--disabled .mdc-list-item__secondary-text {
  opacity: var(--%NS%mat-list-list-item-disabled-label-text-opacity, 0.3);
}
.mdc-list-item--disabled.mdc-list-item--with-leading-icon .mdc-list-item__start {
  color: var(--%NS%mat-list-list-item-disabled-leading-icon-color, var(--%NS%mat-sys-on-surface));
  opacity: var(--%NS%mat-list-list-item-disabled-leading-icon-opacity, 0.38);
}
.mdc-list-item--disabled.mdc-list-item--with-trailing-icon .mdc-list-item__end {
  color: var(--%NS%mat-list-list-item-disabled-trailing-icon-color, var(--%NS%mat-sys-on-surface));
  opacity: var(--%NS%mat-list-list-item-disabled-trailing-icon-opacity, 0.38);
}

.mat-mdc-list-item.mat-mdc-list-item-both-leading-and-trailing, [dir=rtl] .mat-mdc-list-item.mat-mdc-list-item-both-leading-and-trailing {
  padding-left: 0;
  padding-right: 0;
}

.mdc-list-item.mdc-list-item--disabled .mdc-list-item__primary-text {
  color: var(--%NS%mat-list-list-item-disabled-label-text-color, var(--%NS%mat-sys-on-surface));
}

.mdc-list-item:hover::before {
  background-color: var(--%NS%mat-list-list-item-hover-state-layer-color, var(--%NS%mat-sys-on-surface));
  opacity: var(--%NS%mat-list-list-item-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}

.mdc-list-item.mdc-list-item--%NS%disabled::before {
  background-color: var(--%NS%mat-list-list-item-disabled-state-layer-color, var(--%NS%mat-sys-on-surface));
  opacity: var(--%NS%mat-list-list-item-disabled-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}

.mdc-list-item:focus::before {
  background-color: var(--%NS%mat-list-list-item-focus-state-layer-color, var(--%NS%mat-sys-on-surface));
  opacity: var(--%NS%mat-list-list-item-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}

.mdc-list-item--disabled .mdc-radio,
.mdc-list-item--disabled .mdc-checkbox {
  opacity: var(--%NS%mat-list-list-item-disabled-label-text-opacity, 0.3);
}

.mdc-list-item--with-leading-avatar .mat-mdc-list-item-avatar {
  border-radius: var(--%NS%mat-list-list-item-leading-avatar-shape, var(--%NS%mat-sys-corner-full));
  background-color: var(--%NS%mat-list-list-item-leading-avatar-color, var(--%NS%mat-sys-primary-container));
}

.mat-mdc-list-item-icon {
  font-size: var(--%NS%mat-list-list-item-leading-icon-size, 24px);
}

@media (forced-colors: active) {
  a.mdc-list-item--%NS%activated::after {
    content: "";
    position: absolute;
    top: 50%;
    right: 16px;
    transform: translateY(-50%);
    width: 10px;
    height: 0;
    border-bottom: solid 10px;
    border-radius: 10px;
  }
  a.mdc-list-item--activated [dir=rtl]::after {
    right: auto;
    left: 16px;
  }
}

.mat-mdc-list-base {
  display: block;
}
.mat-mdc-list-base .mdc-list-item__start,
.mat-mdc-list-base .mdc-list-item__end,
.mat-mdc-list-base .mdc-list-item__content {
  pointer-events: auto;
}

.mat-mdc-list-item,
.mat-mdc-list-option {
  width: 100%;
  box-sizing: border-box;
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-list-item:not(.mat-mdc-list-item-interactive),
.mat-mdc-list-option:not(.mat-mdc-list-item-interactive) {
  cursor: default;
}
.mat-mdc-list-item .mat-divider-inset,
.mat-mdc-list-option .mat-divider-inset {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
}
.mat-mdc-list-item .mat-mdc-list-item-avatar ~ .mat-divider-inset,
.mat-mdc-list-option .mat-mdc-list-item-avatar ~ .mat-divider-inset {
  margin-left: 72px;
}
[dir=rtl] .mat-mdc-list-item .mat-mdc-list-item-avatar ~ .mat-divider-inset,
[dir=rtl] .mat-mdc-list-option .mat-mdc-list-item-avatar ~ .mat-divider-inset {
  margin-right: 72px;
}

.mat-mdc-list-item-interactive::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  content: "";
  opacity: 0;
  pointer-events: none;
  border-radius: inherit;
}

.mat-mdc-list-item > .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}
.mat-mdc-list-item:focus-visible > .mat-focus-indicator::before {
  content: "";
}

.mat-mdc-list-item.mdc-list-item--with-three-lines .mat-mdc-list-item-line.mdc-list-item__secondary-text {
  white-space: nowrap;
  line-height: normal;
}
.mat-mdc-list-item.mdc-list-item--with-three-lines .mat-mdc-list-item-unscoped-content.mdc-list-item__secondary-text {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}

mat-action-list button {
  background: none;
  color: inherit;
  border: none;
  font: inherit;
  outline: inherit;
  -webkit-tap-highlight-color: transparent;
  text-align: start;
}
mat-action-list button::-moz-focus-inner {
  border: 0;
}

.mdc-list-item--with-leading-icon .mdc-list-item__start {
  margin-inline-start: var(--%NS%mat-list-list-item-leading-icon-start-space, 16px);
  margin-inline-end: var(--%NS%mat-list-list-item-leading-icon-end-space, 16px);
}

.mat-mdc-nav-list .mat-mdc-list-item {
  border-radius: var(--%NS%mat-list-active-indicator-shape, var(--%NS%mat-sys-corner-full));
  --%NS%mat-focus-indicator-border-radius: var(--%NS%mat-list-active-indicator-shape, var(--%NS%mat-sys-corner-full));
}
.mat-mdc-nav-list .mat-mdc-list-item.mdc-list-item--activated {
  background-color: var(--%NS%mat-list-active-indicator-color, var(--%NS%mat-sys-secondary-container));
}
`, T = ["unscopedContent"], at = ["text"], ct = [[["", "matListItemAvatar", ""], ["", "matListItemIcon", ""]], [["", "matListItemTitle", ""]], [["", "matListItemLine", ""]], "*", [["", "matListItemMeta", ""]], [["mat-divider"]]], st = ["[matListItemAvatar],[matListItemIcon]", "[matListItemTitle]", "[matListItemLine]", "*", "[matListItemMeta]", "mat-divider"], ot = [[["", "matListItemTitle", ""]], [["", "matListItemLine", ""]], "*", [["mat-divider"]], [["", "matListItemAvatar", ""], ["", "matListItemIcon", ""]]], mt = ["[matListItemTitle]", "[matListItemLine]", "*", "mat-divider", "[matListItemAvatar],[matListItemIcon]"];
function lt(e, m) { e & 1 && t.\u0275\u0275projection(0, 4); }
function rt(e, m) { if (e & 1 && (t.\u0275\u0275elementStart(0, "div", 11), t.\u0275\u0275element(1, "input", 12), t.\u0275\u0275elementStart(2, "div", 13), t.\u0275\u0275namespaceSVG(), t.\u0275\u0275elementStart(3, "svg", 14), t.\u0275\u0275element(4, "path", 15), t.\u0275\u0275elementEnd(), t.\u0275\u0275namespaceHTML(), t.\u0275\u0275element(5, "div", 16), t.\u0275\u0275elementEnd()()), e & 2) {
    let i = t.\u0275\u0275nextContext();
    t.\u0275\u0275classProp("mdc-checkbox--disabled", i.disabled), t.\u0275\u0275advance(), t.\u0275\u0275property("checked", i.selected)("disabled", i.disabled);
} }
function dt(e, m) { if (e & 1 && (t.\u0275\u0275elementStart(0, "div", 17), t.\u0275\u0275element(1, "input", 18), t.\u0275\u0275elementStart(2, "div", 19), t.\u0275\u0275element(3, "div", 20)(4, "div", 21), t.\u0275\u0275elementEnd()()), e & 2) {
    let i = t.\u0275\u0275nextContext();
    t.\u0275\u0275classProp("mdc-radio--disabled", i.disabled), t.\u0275\u0275advance(), t.\u0275\u0275property("checked", i.selected)("disabled", i.disabled);
} }
function ht(e, m) { }
function _t(e, m) { if (e & 1 && (t.\u0275\u0275elementStart(0, "span", 4), t.\u0275\u0275template(1, ht, 0, 0, "ng-template", 6), t.\u0275\u0275elementEnd()), e & 2) {
    t.\u0275\u0275nextContext();
    let i = t.\u0275\u0275reference(3);
    t.\u0275\u0275advance(), t.\u0275\u0275property("ngTemplateOutlet", i);
} }
function pt(e, m) { }
function gt(e, m) { if (e & 1 && (t.\u0275\u0275elementStart(0, "span", 5), t.\u0275\u0275template(1, pt, 0, 0, "ng-template", 6), t.\u0275\u0275elementEnd()), e & 2) {
    t.\u0275\u0275nextContext();
    let i = t.\u0275\u0275reference(5);
    t.\u0275\u0275advance(), t.\u0275\u0275property("ngTemplateOutlet", i);
} }
function bt(e, m) { }
function ut(e, m) { if (e & 1 && t.\u0275\u0275template(0, bt, 0, 0, "ng-template", 6), e & 2) {
    t.\u0275\u0275nextContext();
    let i = t.\u0275\u0275reference(1);
    t.\u0275\u0275property("ngTemplateOutlet", i);
} }
function ft(e, m) { }
function vt(e, m) { if (e & 1 && (t.\u0275\u0275elementStart(0, "span", 9), t.\u0275\u0275template(1, ft, 0, 0, "ng-template", 6), t.\u0275\u0275elementEnd()), e & 2) {
    t.\u0275\u0275nextContext();
    let i = t.\u0275\u0275reference(3);
    t.\u0275\u0275advance(), t.\u0275\u0275property("ngTemplateOutlet", i);
} }
function xt(e, m) { }
function kt(e, m) { if (e & 1 && (t.\u0275\u0275elementStart(0, "span", 9), t.\u0275\u0275template(1, xt, 0, 0, "ng-template", 6), t.\u0275\u0275elementEnd()), e & 2) {
    t.\u0275\u0275nextContext();
    let i = t.\u0275\u0275reference(5);
    t.\u0275\u0275advance(), t.\u0275\u0275property("ngTemplateOutlet", i);
} }
function wt(e, m) { }
function yt(e, m) { if (e & 1 && t.\u0275\u0275template(0, wt, 0, 0, "ng-template", 6), e & 2) {
    t.\u0275\u0275nextContext();
    let i = t.\u0275\u0275reference(1);
    t.\u0275\u0275property("ngTemplateOutlet", i);
} }
var D = new d("ListOption"), E = (() => { class e {
    _elementRef = o(h);
    static \u0275fac = function (n) { return new (n || e); };
    static \u0275dir = t.\u0275\u0275defineDirective({ type: e, selectors: [["", "matListItemTitle", ""]], hostAttrs: [1, "mat-mdc-list-item-title", "mdc-list-item__primary-text"] });
} return e; })(), F = (() => { class e {
    _elementRef = o(h);
    static \u0275fac = function (n) { return new (n || e); };
    static \u0275dir = t.\u0275\u0275defineDirective({ type: e, selectors: [["", "matListItemLine", ""]], hostAttrs: [1, "mat-mdc-list-item-line", "mdc-list-item__secondary-text"] });
} return e; })(), Nt = (() => { class e {
    static \u0275fac = function (n) { return new (n || e); };
    static \u0275dir = t.\u0275\u0275defineDirective({ type: e, selectors: [["", "matListItemMeta", ""]], hostAttrs: [1, "mat-mdc-list-item-meta", "mdc-list-item__end"] });
} return e; })(), R = (() => { class e {
    _listOption = o(D, { optional: !0 });
    _isAlignedAtStart() { return !this._listOption || this._listOption?._getTogglePosition() === "after"; }
    static \u0275fac = function (n) { return new (n || e); };
    static \u0275dir = t.\u0275\u0275defineDirective({ type: e, hostVars: 4, hostBindings: function (n, a) { n & 2 && t.\u0275\u0275classProp("mdc-list-item__start", a._isAlignedAtStart())("mdc-list-item__end", !a._isAlignedAtStart()); } });
} return e; })(), Ct = (() => { class e extends R {
    static \u0275fac = (() => { let i; return function (a) { return (i || (i = t.\u0275\u0275getInheritedFactory(e)))(a || e); }; })();
    static \u0275dir = t.\u0275\u0275defineDirective({ type: e, selectors: [["", "matListItemAvatar", ""]], hostAttrs: [1, "mat-mdc-list-item-avatar"], features: [t.\u0275\u0275InheritDefinitionFeature] });
} return e; })(), Lt = (() => { class e extends R {
    static \u0275fac = (() => { let i; return function (a) { return (i || (i = t.\u0275\u0275getInheritedFactory(e)))(a || e); }; })();
    static \u0275dir = t.\u0275\u0275defineDirective({ type: e, selectors: [["", "matListItemIcon", ""]], hostAttrs: [1, "mat-mdc-list-item-icon"], features: [t.\u0275\u0275InheritDefinitionFeature] });
} return e; })(), Mt = new d("MAT_LIST_CONFIG"), r = (() => { class e {
    _isNonInteractive = !0;
    get disableRipple() { return this._disableRipple; }
    set disableRipple(i) { this._disableRipple = l(i); }
    _disableRipple = !1;
    get disabled() { return this._disabled(); }
    set disabled(i) { this._disabled.set(l(i)); }
    _disabled = b(!1);
    _defaultOptions = o(Mt, { optional: !0 });
    static \u0275fac = function (n) { return new (n || e); };
    static \u0275dir = t.\u0275\u0275defineDirective({ type: e, hostVars: 1, hostBindings: function (n, a) { n & 2 && t.\u0275\u0275attribute("aria-disabled", a.disabled); }, inputs: { disableRipple: "disableRipple", disabled: "disabled" } });
} return e; })(), p = (() => { class e {
    _elementRef = o(h);
    _ngZone = o(I);
    _listBase = o(r, { optional: !0 });
    _platform = o(G);
    _hostElement;
    _isButtonElement;
    _noopAnimations = f();
    _avatars;
    _icons;
    set lines(i) { this._explicitLines = H(i, null), this._updateItemLines(!1); }
    _explicitLines = null;
    get disableRipple() { return this.disabled || this._disableRipple || this._noopAnimations || !!this._listBase?.disableRipple; }
    set disableRipple(i) { this._disableRipple = l(i); }
    _disableRipple = !1;
    get disabled() { return this._disabled() || !!this._listBase?.disabled; }
    set disabled(i) { this._disabled.set(l(i)); }
    _disabled = b(!1);
    _subscriptions = new q;
    _rippleRenderer = null;
    _hasUnscopedTextContent = !1;
    rippleConfig;
    get rippleDisabled() { return this.disableRipple || !!this.rippleConfig.disabled; }
    constructor() { o(U).load(k); let i = o(x, { optional: !0 }); this.rippleConfig = i || {}, this._hostElement = this._elementRef.nativeElement, this._isButtonElement = this._hostElement.nodeName.toLowerCase() === "button", this._listBase && !this._listBase._isNonInteractive && this._initInteractiveListItem(), this._isButtonElement && !this._hostElement.hasAttribute("type") && this._hostElement.setAttribute("type", "button"); }
    ngAfterViewInit() { this._monitorProjectedLinesAndTitle(), this._updateItemLines(!0); }
    ngOnDestroy() { this._subscriptions.unsubscribe(), this._rippleRenderer !== null && this._rippleRenderer._removeTriggerEvents(); }
    _hasIconOrAvatar() { return !!(this._avatars.length || this._icons.length); }
    _initInteractiveListItem() { this._hostElement.classList.add("mat-mdc-list-item-interactive"), this._rippleRenderer = new v(this, this._ngZone, this._hostElement, this._platform, o(j)), this._rippleRenderer.setupTriggerEvents(this._hostElement); }
    _monitorProjectedLinesAndTitle() { this._ngZone.runOutsideAngular(() => { this._subscriptions.add(W(this._lines.changes, this._titles.changes).subscribe(() => this._updateItemLines(!1))); }); }
    _updateItemLines(i) { if (!this._lines || !this._titles || !this._unscopedContent)
        return; i && this._checkDomForUnscopedTextContent(); let n = this._explicitLines ?? this._inferLinesFromContent(), a = this._unscopedContent.nativeElement; if (this._hostElement.classList.toggle("mat-mdc-list-item-single-line", n <= 1), this._hostElement.classList.toggle("mdc-list-item--with-one-line", n <= 1), this._hostElement.classList.toggle("mdc-list-item--with-two-lines", n === 2), this._hostElement.classList.toggle("mdc-list-item--with-three-lines", n === 3), this._hasUnscopedTextContent) {
        let c = this._titles.length === 0 && n === 1;
        a.classList.toggle("mdc-list-item__primary-text", c), a.classList.toggle("mdc-list-item__secondary-text", !c);
    }
    else
        a.classList.remove("mdc-list-item__primary-text"), a.classList.remove("mdc-list-item__secondary-text"); }
    _inferLinesFromContent() { let i = this._titles.length + this._lines.length; return this._hasUnscopedTextContent && (i += 1), i; }
    _checkDomForUnscopedTextContent() { this._hasUnscopedTextContent = Array.from(this._unscopedContent.nativeElement.childNodes).filter(i => i.nodeType !== i.COMMENT_NODE).some(i => !!(i.textContent && i.textContent.trim())); }
    static \u0275fac = function (n) { return new (n || e); };
    static \u0275dir = t.\u0275\u0275defineDirective({ type: e, contentQueries: function (n, a, c) { if (n & 1 && t.\u0275\u0275contentQuery(c, Ct, 4)(c, Lt, 4), n & 2) {
            let s;
            t.\u0275\u0275queryRefresh(s = t.\u0275\u0275loadQuery()) && (a._avatars = s), t.\u0275\u0275queryRefresh(s = t.\u0275\u0275loadQuery()) && (a._icons = s);
        } }, hostVars: 4, hostBindings: function (n, a) { n & 2 && (t.\u0275\u0275attribute("aria-disabled", a.disabled)("disabled", a._isButtonElement && a.disabled || null), t.\u0275\u0275classProp("mdc-list-item--disabled", a.disabled)); }, inputs: { lines: "lines", disableRipple: "disableRipple", disabled: "disabled" } });
} return e; })();
var si = (() => {
    class e extends r {
        _isNonInteractive = !1;
        static \u0275fac = (() => { let i; return function (a) { return (i || (i = t.\u0275\u0275getInheritedFactory(e)))(a || e); }; })();
        static \u0275cmp = t.\u0275\u0275defineComponent({ type: e, selectors: [["mat-action-list"]], hostAttrs: ["role", "group", 1, "mat-mdc-action-list", "mat-mdc-list-base", "mdc-list"], exportAs: ["matActionList"], features: [t.\u0275\u0275ProvidersFeature([{ provide: r, useExisting: e }]), t.\u0275\u0275InheritDefinitionFeature], ngContentSelectors: _, decls: 1, vars: 0, template: function (n, a) { n & 1 && (t.\u0275\u0275projectionDef(), t.\u0275\u0275projection(0)); }, styles: [`.mdc-list {
  margin: 0;
  padding: 8px 0;
  list-style-type: none;
}
.mdc-list:focus {
  outline: none;
}

.mdc-list-item {
  display: flex;
  position: relative;
  justify-content: flex-start;
  overflow: hidden;
  padding: 0;
  align-items: stretch;
  cursor: pointer;
  padding-left: 16px;
  padding-right: 16px;
  background-color: var(--%NS%mat-list-list-item-container-color, transparent);
  border-radius: var(--%NS%mat-list-list-item-container-shape, var(--%NS%mat-sys-corner-none));
}
.mdc-list-item.mdc-list-item--selected {
  background-color: var(--%NS%mat-list-list-item-selected-container-color);
}
.mdc-list-item:focus {
  outline: 0;
}
.mdc-list-item.mdc-list-item--disabled {
  cursor: auto;
}
.mdc-list-item.mdc-list-item--with-one-line {
  height: var(--%NS%mat-list-list-item-one-line-container-height, 48px);
}
.mdc-list-item.mdc-list-item--with-one-line .mdc-list-item__start {
  align-self: center;
  margin-top: 0;
}
.mdc-list-item.mdc-list-item--with-one-line .mdc-list-item__end {
  align-self: center;
  margin-top: 0;
}
.mdc-list-item.mdc-list-item--with-two-lines {
  height: var(--%NS%mat-list-list-item-two-line-container-height, 64px);
}
.mdc-list-item.mdc-list-item--with-two-lines .mdc-list-item__start {
  align-self: flex-start;
  margin-top: 16px;
}
.mdc-list-item.mdc-list-item--with-two-lines .mdc-list-item__end {
  align-self: center;
  margin-top: 0;
}
.mdc-list-item.mdc-list-item--with-three-lines {
  height: var(--%NS%mat-list-list-item-three-line-container-height, 88px);
}
.mdc-list-item.mdc-list-item--with-three-lines .mdc-list-item__start {
  align-self: flex-start;
  margin-top: 16px;
}
.mdc-list-item.mdc-list-item--with-three-lines .mdc-list-item__end {
  align-self: flex-start;
  margin-top: 16px;
}
.mdc-list-item.mdc-list-item--%NS%selected::before, .mdc-list-item.mdc-list-item--%NS%selected:focus::before, .mdc-list-item:not(.mdc-list-item--selected):focus::before {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  content: "";
  pointer-events: none;
}

a.mdc-list-item {
  color: inherit;
  text-decoration: none;
}

.mdc-list-item__start {
  fill: currentColor;
  flex-shrink: 0;
  pointer-events: none;
}
.mdc-list-item--with-leading-icon .mdc-list-item__start {
  color: var(--%NS%mat-list-list-item-leading-icon-color, var(--%NS%mat-sys-on-surface-variant));
  width: var(--%NS%mat-list-list-item-leading-icon-size, 24px);
  height: var(--%NS%mat-list-list-item-leading-icon-size, 24px);
  margin-left: 16px;
  margin-right: 32px;
}
[dir=rtl] .mdc-list-item--with-leading-icon .mdc-list-item__start {
  margin-left: 32px;
  margin-right: 16px;
}
.mdc-list-item--%NS%with-leading-icon:hover .mdc-list-item__start {
  color: var(--%NS%mat-list-list-item-hover-leading-icon-color);
}
.mdc-list-item--with-leading-avatar .mdc-list-item__start {
  width: var(--%NS%mat-list-list-item-leading-avatar-size, 40px);
  height: var(--%NS%mat-list-list-item-leading-avatar-size, 40px);
  margin-left: 16px;
  margin-right: 16px;
  border-radius: 50%;
}
.mdc-list-item--with-leading-avatar .mdc-list-item__start, [dir=rtl] .mdc-list-item--with-leading-avatar .mdc-list-item__start {
  margin-left: 16px;
  margin-right: 16px;
  border-radius: 50%;
}

.mdc-list-item__end {
  flex-shrink: 0;
  pointer-events: none;
}
.mdc-list-item--with-trailing-meta .mdc-list-item__end {
  font-family: var(--%NS%mat-list-list-item-trailing-supporting-text-font, var(--%NS%mat-sys-label-small-font));
  line-height: var(--%NS%mat-list-list-item-trailing-supporting-text-line-height, var(--%NS%mat-sys-label-small-line-height));
  font-size: var(--%NS%mat-list-list-item-trailing-supporting-text-size, var(--%NS%mat-sys-label-small-size));
  font-weight: var(--%NS%mat-list-list-item-trailing-supporting-text-weight, var(--%NS%mat-sys-label-small-weight));
  letter-spacing: var(--%NS%mat-list-list-item-trailing-supporting-text-tracking, var(--%NS%mat-sys-label-small-tracking));
}
.mdc-list-item--with-trailing-icon .mdc-list-item__end {
  color: var(--%NS%mat-list-list-item-trailing-icon-color, var(--%NS%mat-sys-on-surface-variant));
  width: var(--%NS%mat-list-list-item-trailing-icon-size, 24px);
  height: var(--%NS%mat-list-list-item-trailing-icon-size, 24px);
}
.mdc-list-item--%NS%with-trailing-icon:hover .mdc-list-item__end {
  color: var(--%NS%mat-list-list-item-hover-trailing-icon-color);
}
.mdc-list-item.mdc-list-item--with-trailing-meta .mdc-list-item__end {
  color: var(--%NS%mat-list-list-item-trailing-supporting-text-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-list-item--selected.mdc-list-item--with-trailing-icon .mdc-list-item__end {
  color: var(--%NS%mat-list-list-item-selected-trailing-icon-color, var(--%NS%mat-sys-primary));
}

.mdc-list-item__content {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  align-self: center;
  flex: 1;
  pointer-events: none;
}
.mdc-list-item--with-two-lines .mdc-list-item__content, .mdc-list-item--with-three-lines .mdc-list-item__content {
  align-self: stretch;
}

.mdc-list-item__primary-text {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  color: var(--%NS%mat-list-list-item-label-text-color, var(--%NS%mat-sys-on-surface));
  font-family: var(--%NS%mat-list-list-item-label-text-font, var(--%NS%mat-sys-body-large-font));
  line-height: var(--%NS%mat-list-list-item-label-text-line-height, var(--%NS%mat-sys-body-large-line-height));
  font-size: var(--%NS%mat-list-list-item-label-text-size, var(--%NS%mat-sys-body-large-size));
  font-weight: var(--%NS%mat-list-list-item-label-text-weight, var(--%NS%mat-sys-body-large-weight));
  letter-spacing: var(--%NS%mat-list-list-item-label-text-tracking, var(--%NS%mat-sys-body-large-tracking));
}
.mdc-list-item:hover .mdc-list-item__primary-text {
  color: var(--%NS%mat-list-list-item-hover-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mdc-list-item:focus .mdc-list-item__primary-text {
  color: var(--%NS%mat-list-list-item-focus-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mdc-list-item--with-two-lines .mdc-list-item__primary-text, .mdc-list-item--with-three-lines .mdc-list-item__primary-text {
  display: block;
  margin-top: 0;
  line-height: normal;
  margin-bottom: -20px;
}
.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before, .mdc-list-item--with-three-lines .mdc-list-item__primary-text::before {
  display: inline-block;
  width: 0;
  height: 28px;
  content: "";
  vertical-align: 0;
}
.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after, .mdc-list-item--with-three-lines .mdc-list-item__primary-text::after {
  display: inline-block;
  width: 0;
  height: 20px;
  content: "";
  vertical-align: -20px;
}

.mdc-list-item__secondary-text {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  display: block;
  margin-top: 0;
  color: var(--%NS%mat-list-list-item-supporting-text-color, var(--%NS%mat-sys-on-surface-variant));
  font-family: var(--%NS%mat-list-list-item-supporting-text-font, var(--%NS%mat-sys-body-medium-font));
  line-height: var(--%NS%mat-list-list-item-supporting-text-line-height, var(--%NS%mat-sys-body-medium-line-height));
  font-size: var(--%NS%mat-list-list-item-supporting-text-size, var(--%NS%mat-sys-body-medium-size));
  font-weight: var(--%NS%mat-list-list-item-supporting-text-weight, var(--%NS%mat-sys-body-medium-weight));
  letter-spacing: var(--%NS%mat-list-list-item-supporting-text-tracking, var(--%NS%mat-sys-body-medium-tracking));
}
.mdc-list-item__secondary-text::before {
  display: inline-block;
  width: 0;
  height: 20px;
  content: "";
  vertical-align: 0;
}
.mdc-list-item--with-three-lines .mdc-list-item__secondary-text {
  white-space: normal;
  line-height: 20px;
}
.mdc-list-item--with-overline .mdc-list-item__secondary-text {
  white-space: nowrap;
  line-height: auto;
}

.mdc-list-item--with-leading-radio.mdc-list-item,
.mdc-list-item--with-leading-checkbox.mdc-list-item,
.mdc-list-item--with-leading-icon.mdc-list-item,
.mdc-list-item--with-leading-avatar.mdc-list-item {
  padding-left: 0;
  padding-right: 16px;
}
[dir=rtl] .mdc-list-item--with-leading-radio.mdc-list-item,
[dir=rtl] .mdc-list-item--with-leading-checkbox.mdc-list-item,
[dir=rtl] .mdc-list-item--with-leading-icon.mdc-list-item,
[dir=rtl] .mdc-list-item--with-leading-avatar.mdc-list-item {
  padding-left: 16px;
  padding-right: 0;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text {
  display: block;
  margin-top: 0;
  line-height: normal;
  margin-bottom: -20px;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before {
  display: inline-block;
  width: 0;
  height: 32px;
  content: "";
  vertical-align: 0;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after {
  display: inline-block;
  width: 0;
  height: 20px;
  content: "";
  vertical-align: -20px;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end {
  display: block;
  margin-top: 0;
  line-height: normal;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before {
  display: inline-block;
  width: 0;
  height: 32px;
  content: "";
  vertical-align: 0;
}

.mdc-list-item--with-trailing-icon.mdc-list-item, [dir=rtl] .mdc-list-item--with-trailing-icon.mdc-list-item {
  padding-left: 0;
  padding-right: 0;
}
.mdc-list-item--with-trailing-icon .mdc-list-item__end {
  margin-left: 16px;
  margin-right: 16px;
}

.mdc-list-item--with-trailing-meta.mdc-list-item {
  padding-left: 16px;
  padding-right: 0;
}
[dir=rtl] .mdc-list-item--with-trailing-meta.mdc-list-item {
  padding-left: 0;
  padding-right: 16px;
}
.mdc-list-item--with-trailing-meta .mdc-list-item__end {
  -webkit-user-select: none;
  user-select: none;
  margin-left: 28px;
  margin-right: 16px;
}
[dir=rtl] .mdc-list-item--with-trailing-meta .mdc-list-item__end {
  margin-left: 16px;
  margin-right: 28px;
}
.mdc-list-item--with-trailing-meta.mdc-list-item--with-three-lines .mdc-list-item__end, .mdc-list-item--with-trailing-meta.mdc-list-item--with-two-lines .mdc-list-item__end {
  display: block;
  line-height: normal;
  align-self: flex-start;
  margin-top: 0;
}
.mdc-list-item--with-trailing-meta.mdc-list-item--with-three-lines .mdc-list-item__end::before, .mdc-list-item--with-trailing-meta.mdc-list-item--with-two-lines .mdc-list-item__end::before {
  display: inline-block;
  width: 0;
  height: 28px;
  content: "";
  vertical-align: 0;
}

.mdc-list-item--with-leading-radio .mdc-list-item__start,
.mdc-list-item--with-leading-checkbox .mdc-list-item__start {
  margin-left: 8px;
  margin-right: 24px;
}
[dir=rtl] .mdc-list-item--with-leading-radio .mdc-list-item__start,
[dir=rtl] .mdc-list-item--with-leading-checkbox .mdc-list-item__start {
  margin-left: 24px;
  margin-right: 8px;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__start,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__start {
  align-self: flex-start;
  margin-top: 8px;
}

.mdc-list-item--with-trailing-radio.mdc-list-item,
.mdc-list-item--with-trailing-checkbox.mdc-list-item {
  padding-left: 16px;
  padding-right: 0;
}
[dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item,
[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item {
  padding-left: 0;
  padding-right: 16px;
}
.mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-icon, .mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-avatar,
.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-icon,
.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-avatar {
  padding-left: 0;
}
[dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-icon, [dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-avatar,
[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-icon,
[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-avatar {
  padding-right: 0;
}
.mdc-list-item--with-trailing-radio .mdc-list-item__end,
.mdc-list-item--with-trailing-checkbox .mdc-list-item__end {
  margin-left: 24px;
  margin-right: 8px;
}
[dir=rtl] .mdc-list-item--with-trailing-radio .mdc-list-item__end,
[dir=rtl] .mdc-list-item--with-trailing-checkbox .mdc-list-item__end {
  margin-left: 8px;
  margin-right: 24px;
}
.mdc-list-item--with-trailing-radio.mdc-list-item--with-three-lines .mdc-list-item__end,
.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-three-lines .mdc-list-item__end {
  align-self: flex-start;
  margin-top: 8px;
}

.mdc-list-group__subheader {
  margin: 0.75rem 16px;
}

.mdc-list-item--disabled .mdc-list-item__start,
.mdc-list-item--disabled .mdc-list-item__content,
.mdc-list-item--disabled .mdc-list-item__end {
  opacity: 1;
}
.mdc-list-item--disabled .mdc-list-item__primary-text,
.mdc-list-item--disabled .mdc-list-item__secondary-text {
  opacity: var(--%NS%mat-list-list-item-disabled-label-text-opacity, 0.3);
}
.mdc-list-item--disabled.mdc-list-item--with-leading-icon .mdc-list-item__start {
  color: var(--%NS%mat-list-list-item-disabled-leading-icon-color, var(--%NS%mat-sys-on-surface));
  opacity: var(--%NS%mat-list-list-item-disabled-leading-icon-opacity, 0.38);
}
.mdc-list-item--disabled.mdc-list-item--with-trailing-icon .mdc-list-item__end {
  color: var(--%NS%mat-list-list-item-disabled-trailing-icon-color, var(--%NS%mat-sys-on-surface));
  opacity: var(--%NS%mat-list-list-item-disabled-trailing-icon-opacity, 0.38);
}

.mat-mdc-list-item.mat-mdc-list-item-both-leading-and-trailing, [dir=rtl] .mat-mdc-list-item.mat-mdc-list-item-both-leading-and-trailing {
  padding-left: 0;
  padding-right: 0;
}

.mdc-list-item.mdc-list-item--disabled .mdc-list-item__primary-text {
  color: var(--%NS%mat-list-list-item-disabled-label-text-color, var(--%NS%mat-sys-on-surface));
}

.mdc-list-item:hover::before {
  background-color: var(--%NS%mat-list-list-item-hover-state-layer-color, var(--%NS%mat-sys-on-surface));
  opacity: var(--%NS%mat-list-list-item-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}

.mdc-list-item.mdc-list-item--%NS%disabled::before {
  background-color: var(--%NS%mat-list-list-item-disabled-state-layer-color, var(--%NS%mat-sys-on-surface));
  opacity: var(--%NS%mat-list-list-item-disabled-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}

.mdc-list-item:focus::before {
  background-color: var(--%NS%mat-list-list-item-focus-state-layer-color, var(--%NS%mat-sys-on-surface));
  opacity: var(--%NS%mat-list-list-item-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}

.mdc-list-item--disabled .mdc-radio,
.mdc-list-item--disabled .mdc-checkbox {
  opacity: var(--%NS%mat-list-list-item-disabled-label-text-opacity, 0.3);
}

.mdc-list-item--with-leading-avatar .mat-mdc-list-item-avatar {
  border-radius: var(--%NS%mat-list-list-item-leading-avatar-shape, var(--%NS%mat-sys-corner-full));
  background-color: var(--%NS%mat-list-list-item-leading-avatar-color, var(--%NS%mat-sys-primary-container));
}

.mat-mdc-list-item-icon {
  font-size: var(--%NS%mat-list-list-item-leading-icon-size, 24px);
}

@media (forced-colors: active) {
  a.mdc-list-item--%NS%activated::after {
    content: "";
    position: absolute;
    top: 50%;
    right: 16px;
    transform: translateY(-50%);
    width: 10px;
    height: 0;
    border-bottom: solid 10px;
    border-radius: 10px;
  }
  a.mdc-list-item--activated [dir=rtl]::after {
    right: auto;
    left: 16px;
  }
}

.mat-mdc-list-base {
  display: block;
}
.mat-mdc-list-base .mdc-list-item__start,
.mat-mdc-list-base .mdc-list-item__end,
.mat-mdc-list-base .mdc-list-item__content {
  pointer-events: auto;
}

.mat-mdc-list-item,
.mat-mdc-list-option {
  width: 100%;
  box-sizing: border-box;
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-list-item:not(.mat-mdc-list-item-interactive),
.mat-mdc-list-option:not(.mat-mdc-list-item-interactive) {
  cursor: default;
}
.mat-mdc-list-item .mat-divider-inset,
.mat-mdc-list-option .mat-divider-inset {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
}
.mat-mdc-list-item .mat-mdc-list-item-avatar ~ .mat-divider-inset,
.mat-mdc-list-option .mat-mdc-list-item-avatar ~ .mat-divider-inset {
  margin-left: 72px;
}
[dir=rtl] .mat-mdc-list-item .mat-mdc-list-item-avatar ~ .mat-divider-inset,
[dir=rtl] .mat-mdc-list-option .mat-mdc-list-item-avatar ~ .mat-divider-inset {
  margin-right: 72px;
}

.mat-mdc-list-item-interactive::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  content: "";
  opacity: 0;
  pointer-events: none;
  border-radius: inherit;
}

.mat-mdc-list-item > .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}
.mat-mdc-list-item:focus-visible > .mat-focus-indicator::before {
  content: "";
}

.mat-mdc-list-item.mdc-list-item--with-three-lines .mat-mdc-list-item-line.mdc-list-item__secondary-text {
  white-space: nowrap;
  line-height: normal;
}
.mat-mdc-list-item.mdc-list-item--with-three-lines .mat-mdc-list-item-unscoped-content.mdc-list-item__secondary-text {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}

mat-action-list button {
  background: none;
  color: inherit;
  border: none;
  font: inherit;
  outline: inherit;
  -webkit-tap-highlight-color: transparent;
  text-align: start;
}
mat-action-list button::-moz-focus-inner {
  border: 0;
}

.mdc-list-item--with-leading-icon .mdc-list-item__start {
  margin-inline-start: var(--%NS%mat-list-list-item-leading-icon-start-space, 16px);
  margin-inline-end: var(--%NS%mat-list-list-item-leading-icon-end-space, 16px);
}

.mat-mdc-nav-list .mat-mdc-list-item {
  border-radius: var(--%NS%mat-list-active-indicator-shape, var(--%NS%mat-sys-corner-full));
  --%NS%mat-focus-indicator-border-radius: var(--%NS%mat-list-active-indicator-shape, var(--%NS%mat-sys-corner-full));
}
.mat-mdc-nav-list .mat-mdc-list-item.mdc-list-item--activated {
  background-color: var(--%NS%mat-list-active-indicator-color, var(--%NS%mat-sys-secondary-container));
}
`], encapsulation: 2 });
    }
    return e;
})(), oi = new d("MatList"), mi = (() => { class e extends r {
    static \u0275fac = (() => { let i; return function (a) { return (i || (i = t.\u0275\u0275getInheritedFactory(e)))(a || e); }; })();
    static \u0275cmp = t.\u0275\u0275defineComponent({ type: e, selectors: [["mat-list"]], hostAttrs: [1, "mat-mdc-list", "mat-mdc-list-base", "mdc-list"], exportAs: ["matList"], features: [t.\u0275\u0275ProvidersFeature([{ provide: r, useExisting: e }]), t.\u0275\u0275InheritDefinitionFeature], ngContentSelectors: _, decls: 1, vars: 0, template: function (n, a) { n & 1 && (t.\u0275\u0275projectionDef(), t.\u0275\u0275projection(0)); }, styles: [u], encapsulation: 2 });
} return e; })(), li = (() => { class e extends p {
    _lines;
    _titles;
    _meta;
    _unscopedContent;
    _itemText;
    get activated() { return this._activated; }
    set activated(i) { this._activated = l(i); }
    _activated = !1;
    _getAriaCurrent() { return this._hostElement.nodeName === "A" && this._activated ? "page" : null; }
    _hasBothLeadingAndTrailing() { return this._meta.length !== 0 && (this._avatars.length !== 0 || this._icons.length !== 0); }
    static \u0275fac = (() => { let i; return function (a) { return (i || (i = t.\u0275\u0275getInheritedFactory(e)))(a || e); }; })();
    static \u0275cmp = t.\u0275\u0275defineComponent({ type: e, selectors: [["mat-list-item"], ["a", "mat-list-item", ""], ["button", "mat-list-item", ""]], contentQueries: function (n, a, c) { if (n & 1 && t.\u0275\u0275contentQuery(c, F, 5)(c, E, 5)(c, Nt, 5), n & 2) {
            let s;
            t.\u0275\u0275queryRefresh(s = t.\u0275\u0275loadQuery()) && (a._lines = s), t.\u0275\u0275queryRefresh(s = t.\u0275\u0275loadQuery()) && (a._titles = s), t.\u0275\u0275queryRefresh(s = t.\u0275\u0275loadQuery()) && (a._meta = s);
        } }, viewQuery: function (n, a) { if (n & 1 && t.\u0275\u0275viewQuery(T, 5)(at, 5), n & 2) {
            let c;
            t.\u0275\u0275queryRefresh(c = t.\u0275\u0275loadQuery()) && (a._unscopedContent = c.first), t.\u0275\u0275queryRefresh(c = t.\u0275\u0275loadQuery()) && (a._itemText = c.first);
        } }, hostAttrs: [1, "mat-mdc-list-item", "mdc-list-item"], hostVars: 13, hostBindings: function (n, a) { n & 2 && (t.\u0275\u0275attribute("aria-current", a._getAriaCurrent()), t.\u0275\u0275classProp("mdc-list-item--activated", a.activated)("mdc-list-item--with-leading-avatar", a._avatars.length !== 0)("mdc-list-item--with-leading-icon", a._icons.length !== 0)("mdc-list-item--with-trailing-meta", a._meta.length !== 0)("mat-mdc-list-item-both-leading-and-trailing", a._hasBothLeadingAndTrailing())("_mat-animation-noopable", a._noopAnimations)); }, inputs: { activated: "activated" }, exportAs: ["matListItem"], features: [t.\u0275\u0275InheritDefinitionFeature], ngContentSelectors: st, decls: 10, vars: 0, consts: [["unscopedContent", ""], [1, "mdc-list-item__content"], [1, "mat-mdc-list-item-unscoped-content", 3, "cdkObserveContent"], [1, "mat-focus-indicator"]], template: function (n, a) { n & 1 && (t.\u0275\u0275projectionDef(ct), t.\u0275\u0275projection(0), t.\u0275\u0275elementStart(1, "span", 1), t.\u0275\u0275projection(2, 1), t.\u0275\u0275projection(3, 2), t.\u0275\u0275elementStart(4, "span", 2, 0), t.\u0275\u0275listener("cdkObserveContent", function () { return a._updateItemLines(!0); }), t.\u0275\u0275projection(6, 3), t.\u0275\u0275elementEnd()(), t.\u0275\u0275projection(7, 4), t.\u0275\u0275projection(8, 5), t.\u0275\u0275element(9, "div", 3)); }, dependencies: [z], encapsulation: 2 });
} return e; })(), B = new d("SelectionList"), It = (() => {
    class e extends p {
        _selectionList = o(B);
        _changeDetectorRef = o(A);
        _lines;
        _titles;
        _unscopedContent;
        selectedChange = new O;
        togglePosition = "after";
        get color() { return this._color || this._selectionList.color; }
        set color(i) { this._color = i; }
        _color;
        get value() { return this._value; }
        set value(i) { this.selected && i !== this.value && this._inputsInitialized && (this.selected = !1), this._value = i; }
        _value;
        get selected() { return this._selectionList.selectedOptions.isSelected(this); }
        set selected(i) { let n = l(i); n !== this._selected && (this._setSelected(n), (n || this._selectionList.multiple) && this._selectionList._reportValueChange()); }
        _selected = !1;
        _inputsInitialized = !1;
        ngOnInit() { let i = this._selectionList; i._value && i._value.some(a => i.compareWith(this._value, a)) && this._setSelected(!0); let n = this._selected; Promise.resolve().then(() => { (this._selected || n) && (this.selected = !0, this._changeDetectorRef.markForCheck()); }), this._inputsInitialized = !0; }
        ngOnDestroy() { super.ngOnDestroy(), this.selected && Promise.resolve().then(() => { this.selected = !1; }); }
        toggle() { this.selected = !this.selected; }
        focus() { this._hostElement.focus(); }
        getLabel() { return (this._titles?.get(0)?._elementRef.nativeElement || this._unscopedContent?.nativeElement)?.textContent || ""; }
        _hasCheckboxAt(i) { return this._selectionList.multiple && this._getTogglePosition() === i; }
        _hasRadioAt(i) { return !this._selectionList.multiple && this._getTogglePosition() === i && !this._selectionList.hideSingleSelectionIndicator; }
        _hasIconsOrAvatarsAt(i) { return this._hasProjected("icons", i) || this._hasProjected("avatars", i); }
        _hasProjected(i, n) { return this._getTogglePosition() !== n && (i === "avatars" ? this._avatars.length !== 0 : this._icons.length !== 0); }
        _handleBlur() { this._selectionList._onTouched(); }
        _getTogglePosition() { return this.togglePosition || "after"; }
        _setSelected(i) { return i === this._selected ? !1 : (this._selected = i, i ? this._selectionList.selectedOptions.select(this) : this._selectionList.selectedOptions.deselect(this), this.selectedChange.emit(i), this._changeDetectorRef.markForCheck(), !0); }
        _markForCheck() { this._changeDetectorRef.markForCheck(); }
        _toggleOnInteraction() { this.disabled || (this._selectionList.multiple ? (this.selected = !this.selected, this._selectionList._emitChangeEvent([this])) : this.selected || (this.selected = !0, this._selectionList._emitChangeEvent([this]))); }
        _setTabindex(i) { this._hostElement.setAttribute("tabindex", i + ""); }
        _hasBothLeadingAndTrailing() { let i = this._hasProjected("avatars", "before") || this._hasProjected("icons", "before") || this._hasCheckboxAt("before") || this._hasRadioAt("before"), n = this._hasProjected("icons", "after") || this._hasProjected("avatars", "after") || this._hasCheckboxAt("after") || this._hasRadioAt("after"); return i && n; }
        static \u0275fac = (() => { let i; return function (a) { return (i || (i = t.\u0275\u0275getInheritedFactory(e)))(a || e); }; })();
        static \u0275cmp = t.\u0275\u0275defineComponent({ type: e, selectors: [["mat-list-option"]], contentQueries: function (n, a, c) { if (n & 1 && t.\u0275\u0275contentQuery(c, F, 5)(c, E, 5), n & 2) {
                let s;
                t.\u0275\u0275queryRefresh(s = t.\u0275\u0275loadQuery()) && (a._lines = s), t.\u0275\u0275queryRefresh(s = t.\u0275\u0275loadQuery()) && (a._titles = s);
            } }, viewQuery: function (n, a) { if (n & 1 && t.\u0275\u0275viewQuery(T, 5), n & 2) {
                let c;
                t.\u0275\u0275queryRefresh(c = t.\u0275\u0275loadQuery()) && (a._unscopedContent = c.first);
            } }, hostAttrs: ["role", "option", 1, "mat-mdc-list-item", "mat-mdc-list-option", "mdc-list-item"], hostVars: 27, hostBindings: function (n, a) { n & 1 && t.\u0275\u0275listener("blur", function () { return a._handleBlur(); })("click", function () { return a._toggleOnInteraction(); }), n & 2 && (t.\u0275\u0275attribute("aria-selected", a.selected), t.\u0275\u0275classProp("mdc-list-item--selected", a.selected && !a._selectionList.multiple && a._selectionList.hideSingleSelectionIndicator)("mdc-list-item--with-leading-avatar", a._hasProjected("avatars", "before"))("mdc-list-item--with-leading-icon", a._hasProjected("icons", "before"))("mdc-list-item--with-trailing-icon", a._hasProjected("icons", "after"))("mat-mdc-list-option-with-trailing-avatar", a._hasProjected("avatars", "after"))("mdc-list-item--with-leading-checkbox", a._hasCheckboxAt("before"))("mdc-list-item--with-trailing-checkbox", a._hasCheckboxAt("after"))("mdc-list-item--with-leading-radio", a._hasRadioAt("before"))("mdc-list-item--with-trailing-radio", a._hasRadioAt("after"))("mat-mdc-list-item-both-leading-and-trailing", a._hasBothLeadingAndTrailing())("mat-accent", a.color !== "primary" && a.color !== "warn")("mat-warn", a.color === "warn")("_mat-animation-noopable", a._noopAnimations)); }, inputs: { togglePosition: "togglePosition", color: "color", value: "value", selected: "selected" }, outputs: { selectedChange: "selectedChange" }, exportAs: ["matListOption"], features: [t.\u0275\u0275ProvidersFeature([{ provide: p, useExisting: e }, { provide: D, useExisting: e }]), t.\u0275\u0275InheritDefinitionFeature], ngContentSelectors: mt, decls: 20, vars: 4, consts: [["icons", ""], ["checkbox", ""], ["radio", ""], ["unscopedContent", ""], [1, "mdc-list-item__start", "mat-mdc-list-option-checkbox-before"], [1, "mdc-list-item__start", "mat-mdc-list-option-radio-before"], [3, "ngTemplateOutlet"], [1, "mdc-list-item__content"], [1, "mat-mdc-list-item-unscoped-content", 3, "cdkObserveContent"], [1, "mdc-list-item__end"], [1, "mat-focus-indicator"], [1, "mdc-checkbox"], ["type", "checkbox", 1, "mdc-checkbox__native-control", 3, "checked", "disabled"], [1, "mdc-checkbox__background"], ["viewBox", "0 0 24 24", "aria-hidden", "true", 1, "mdc-checkbox__checkmark"], ["fill", "none", "d", "M1.73,12.91 8.1,19.28 22.79,4.59", 1, "mdc-checkbox__checkmark-path"], [1, "mdc-checkbox__mixedmark"], [1, "mdc-radio"], ["type", "radio", 1, "mdc-radio__native-control", 3, "checked", "disabled"], [1, "mdc-radio__background"], [1, "mdc-radio__outer-circle"], [1, "mdc-radio__inner-circle"]], template: function (n, a) { n & 1 && (t.\u0275\u0275projectionDef(ot), t.\u0275\u0275template(0, lt, 1, 0, "ng-template", null, 0, t.\u0275\u0275templateRefExtractor)(2, rt, 6, 4, "ng-template", null, 1, t.\u0275\u0275templateRefExtractor)(4, dt, 5, 4, "ng-template", null, 2, t.\u0275\u0275templateRefExtractor), t.\u0275\u0275conditionalCreate(6, _t, 2, 1, "span", 4)(7, gt, 2, 1, "span", 5), t.\u0275\u0275conditionalCreate(8, ut, 1, 1, null, 6), t.\u0275\u0275elementStart(9, "span", 7), t.\u0275\u0275projection(10), t.\u0275\u0275projection(11, 1), t.\u0275\u0275elementStart(12, "span", 8, 3), t.\u0275\u0275listener("cdkObserveContent", function () { return a._updateItemLines(!0); }), t.\u0275\u0275projection(14, 2), t.\u0275\u0275elementEnd()(), t.\u0275\u0275conditionalCreate(15, vt, 2, 1, "span", 9)(16, kt, 2, 1, "span", 9), t.\u0275\u0275conditionalCreate(17, yt, 1, 1, null, 6), t.\u0275\u0275projection(18, 3), t.\u0275\u0275element(19, "div", 10)), n & 2 && (t.\u0275\u0275advance(6), t.\u0275\u0275conditional(a._hasCheckboxAt("before") ? 6 : a._hasRadioAt("before") ? 7 : -1), t.\u0275\u0275advance(2), t.\u0275\u0275conditional(a._hasIconsOrAvatarsAt("before") ? 8 : -1), t.\u0275\u0275advance(7), t.\u0275\u0275conditional(a._hasCheckboxAt("after") ? 15 : a._hasRadioAt("after") ? 16 : -1), t.\u0275\u0275advance(2), t.\u0275\u0275conditional(a._hasIconsOrAvatarsAt("after") ? 17 : -1)); }, dependencies: [nt, z], styles: [`.mat-mdc-list-option-with-trailing-avatar.mdc-list-item, [dir=rtl] .mat-mdc-list-option-with-trailing-avatar.mdc-list-item {
  padding-left: 0;
  padding-right: 0;
}
.mat-mdc-list-option-with-trailing-avatar .mdc-list-item__end {
  margin-left: 16px;
  margin-right: 16px;
  width: 40px;
  height: 40px;
}
.mat-mdc-list-option-with-trailing-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text {
  display: block;
  margin-top: 0;
  line-height: normal;
  margin-bottom: -20px;
}
.mat-mdc-list-option-with-trailing-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before {
  display: inline-block;
  width: 0;
  height: 32px;
  content: "";
  vertical-align: 0;
}
.mat-mdc-list-option-with-trailing-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after {
  display: inline-block;
  width: 0;
  height: 20px;
  content: "";
  vertical-align: -20px;
}
.mat-mdc-list-option-with-trailing-avatar .mdc-list-item__end {
  border-radius: 50%;
}

.mat-mdc-list-option .mdc-checkbox {
  display: inline-block;
  position: relative;
  flex: 0 0 18px;
  box-sizing: content-box;
  width: 18px;
  height: 18px;
  line-height: 0;
  white-space: nowrap;
  cursor: pointer;
  vertical-align: bottom;
  padding: calc((var(--%NS%mat-checkbox-state-layer-size, 40px) - 18px) / 2);
  margin: calc((var(--%NS%mat-checkbox-state-layer-size, 40px) - var(--%NS%mat-checkbox-state-layer-size, 40px)) / 2);
}
.mat-mdc-list-option .mdc-checkbox .mdc-checkbox__native-control {
  position: absolute;
  margin: 0;
  padding: 0;
  opacity: 0;
  cursor: inherit;
  z-index: 1;
  width: var(--%NS%mat-checkbox-state-layer-size, 40px);
  height: var(--%NS%mat-checkbox-state-layer-size, 40px);
  top: calc((var(--%NS%mat-checkbox-state-layer-size, 40px) - var(--%NS%mat-checkbox-state-layer-size, 40px)) / 2);
  right: calc((var(--%NS%mat-checkbox-state-layer-size, 40px) - var(--%NS%mat-checkbox-state-layer-size, 40px)) / 2);
  left: calc((var(--%NS%mat-checkbox-state-layer-size, 40px) - var(--%NS%mat-checkbox-state-layer-size, 40px)) / 2);
}
.mat-mdc-list-option .mdc-checkbox--disabled {
  cursor: default;
  pointer-events: none;
}
.mat-mdc-list-option .mdc-checkbox__background {
  display: inline-flex;
  position: absolute;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 18px;
  height: 18px;
  border: 2px solid currentColor;
  border-radius: 2px;
  background-color: transparent;
  pointer-events: none;
  will-change: background-color, border-color;
  transition: background-color 90ms cubic-bezier(0.4, 0, 0.6, 1), border-color 90ms cubic-bezier(0.4, 0, 0.6, 1);
  -webkit-print-color-adjust: exact;
  color-adjust: exact;
  border-color: var(--%NS%mat-checkbox-unselected-icon-color, var(--%NS%mat-sys-on-surface-variant));
  top: calc((var(--%NS%mat-checkbox-state-layer-size, 40px) - 18px) / 2);
  left: calc((var(--%NS%mat-checkbox-state-layer-size, 40px) - 18px) / 2);
}
.mat-mdc-list-option .mdc-checkbox__native-control:enabled:checked ~ .mdc-checkbox__background,
.mat-mdc-list-option .mdc-checkbox__native-control:enabled:indeterminate ~ .mdc-checkbox__background {
  border-color: var(--%NS%mat-checkbox-selected-icon-color, var(--%NS%mat-sys-primary));
  background-color: var(--%NS%mat-checkbox-selected-icon-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-list-option .mdc-checkbox--disabled .mdc-checkbox__background {
  border-color: var(--%NS%mat-checkbox-disabled-unselected-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mat-mdc-list-option .mdc-checkbox--disabled .mdc-checkbox__background {
    border-color: GrayText;
  }
}
.mat-mdc-list-option .mdc-checkbox__native-control:disabled:checked ~ .mdc-checkbox__background,
.mat-mdc-list-option .mdc-checkbox__native-control:disabled:indeterminate ~ .mdc-checkbox__background {
  background-color: var(--%NS%mat-checkbox-disabled-selected-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  border-color: transparent;
}
@media (forced-colors: active) {
  .mat-mdc-list-option .mdc-checkbox__native-control:disabled:checked ~ .mdc-checkbox__background,
  .mat-mdc-list-option .mdc-checkbox__native-control:disabled:indeterminate ~ .mdc-checkbox__background {
    border-color: GrayText;
  }
}
.mat-mdc-list-option .mdc-checkbox:hover > .mdc-checkbox__native-control:not(:checked) ~ .mdc-checkbox__background,
.mat-mdc-list-option .mdc-checkbox:hover > .mdc-checkbox__native-control:not(:indeterminate) ~ .mdc-checkbox__background {
  border-color: var(--%NS%mat-checkbox-unselected-hover-icon-color, var(--%NS%mat-sys-on-surface));
  background-color: transparent;
}
.mat-mdc-list-option .mdc-checkbox:hover > .mdc-checkbox__native-control:checked ~ .mdc-checkbox__background,
.mat-mdc-list-option .mdc-checkbox:hover > .mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background {
  border-color: var(--%NS%mat-checkbox-selected-hover-icon-color, var(--%NS%mat-sys-primary));
  background-color: var(--%NS%mat-checkbox-selected-hover-icon-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-list-option .mdc-checkbox__native-control:focus:focus:not(:checked) ~ .mdc-checkbox__background,
.mat-mdc-list-option .mdc-checkbox__native-control:focus:focus:not(:indeterminate) ~ .mdc-checkbox__background {
  border-color: var(--%NS%mat-checkbox-unselected-focus-icon-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-list-option .mdc-checkbox__native-control:focus:focus:checked ~ .mdc-checkbox__background,
.mat-mdc-list-option .mdc-checkbox__native-control:focus:focus:indeterminate ~ .mdc-checkbox__background {
  border-color: var(--%NS%mat-checkbox-selected-focus-icon-color, var(--%NS%mat-sys-primary));
  background-color: var(--%NS%mat-checkbox-selected-focus-icon-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-list-option .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox:hover > .mdc-checkbox__native-control ~ .mdc-checkbox__background,
.mat-mdc-list-option .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control:focus ~ .mdc-checkbox__background,
.mat-mdc-list-option .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__background {
  border-color: var(--%NS%mat-checkbox-disabled-unselected-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mat-mdc-list-option .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox:hover > .mdc-checkbox__native-control ~ .mdc-checkbox__background,
  .mat-mdc-list-option .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control:focus ~ .mdc-checkbox__background,
  .mat-mdc-list-option .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__background {
    border-color: GrayText;
  }
}
.mat-mdc-list-option .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__native-control:checked ~ .mdc-checkbox__background,
.mat-mdc-list-option .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background {
  background-color: var(--%NS%mat-checkbox-disabled-selected-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  border-color: transparent;
}
.mat-mdc-list-option .mdc-checkbox__checkmark {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  opacity: 0;
  transition: opacity 180ms cubic-bezier(0.4, 0, 0.6, 1);
  color: var(--%NS%mat-checkbox-selected-checkmark-color, var(--%NS%mat-sys-on-primary));
}
@media (forced-colors: active) {
  .mat-mdc-list-option .mdc-checkbox__checkmark {
    color: CanvasText;
  }
}
.mat-mdc-list-option .mdc-checkbox--disabled .mdc-checkbox__checkmark, .mat-mdc-list-option .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__checkmark {
  color: var(--%NS%mat-checkbox-disabled-selected-checkmark-color, var(--%NS%mat-sys-surface));
}
@media (forced-colors: active) {
  .mat-mdc-list-option .mdc-checkbox--disabled .mdc-checkbox__checkmark, .mat-mdc-list-option .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__checkmark {
    color: GrayText;
  }
}
.mat-mdc-list-option .mdc-checkbox__checkmark-path {
  transition: stroke-dashoffset 180ms cubic-bezier(0.4, 0, 0.6, 1);
  stroke: currentColor;
  stroke-width: 3.12px;
  stroke-dashoffset: 29.7833385;
  stroke-dasharray: 29.7833385;
}
.mat-mdc-list-option .mdc-checkbox__mixedmark {
  width: 100%;
  height: 0;
  transform: scaleX(0) rotate(0deg);
  border-width: 1px;
  border-style: solid;
  opacity: 0;
  transition: opacity 90ms cubic-bezier(0.4, 0, 0.6, 1), transform 90ms cubic-bezier(0.4, 0, 0.6, 1);
  border-color: var(--%NS%mat-checkbox-selected-checkmark-color, var(--%NS%mat-sys-on-primary));
}
@media (forced-colors: active) {
  .mat-mdc-list-option .mdc-checkbox__mixedmark {
    margin: 0 1px;
  }
}
.mat-mdc-list-option .mdc-checkbox--disabled .mdc-checkbox__mixedmark, .mat-mdc-list-option .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__mixedmark {
  border-color: var(--%NS%mat-checkbox-disabled-selected-checkmark-color, var(--%NS%mat-sys-surface));
}
@media (forced-colors: active) {
  .mat-mdc-list-option .mdc-checkbox--disabled .mdc-checkbox__mixedmark, .mat-mdc-list-option .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__mixedmark {
    border-color: GrayText;
  }
}
.mat-mdc-list-option .mdc-checkbox--anim-unchecked-checked .mdc-checkbox__background,
.mat-mdc-list-option .mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__background,
.mat-mdc-list-option .mdc-checkbox--anim-checked-unchecked .mdc-checkbox__background,
.mat-mdc-list-option .mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__background {
  animation-duration: 180ms;
  animation-timing-function: linear;
}
.mat-mdc-list-option .mdc-checkbox--anim-unchecked-checked .mdc-checkbox__checkmark-path {
  animation: mdc-checkbox-unchecked-checked-checkmark-path 180ms linear;
  transition: none;
}
.mat-mdc-list-option .mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-unchecked-indeterminate-mixedmark 90ms linear;
  transition: none;
}
.mat-mdc-list-option .mdc-checkbox--anim-checked-unchecked .mdc-checkbox__checkmark-path {
  animation: mdc-checkbox-checked-unchecked-checkmark-path 90ms linear;
  transition: none;
}
.mat-mdc-list-option .mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__checkmark {
  animation: mdc-checkbox-checked-indeterminate-checkmark 90ms linear;
  transition: none;
}
.mat-mdc-list-option .mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-checked-indeterminate-mixedmark 90ms linear;
  transition: none;
}
.mat-mdc-list-option .mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__checkmark {
  animation: mdc-checkbox-indeterminate-checked-checkmark 500ms linear;
  transition: none;
}
.mat-mdc-list-option .mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-indeterminate-checked-mixedmark 500ms linear;
  transition: none;
}
.mat-mdc-list-option .mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-indeterminate-unchecked-mixedmark 300ms linear;
  transition: none;
}
.mat-mdc-list-option .mdc-checkbox__native-control:checked ~ .mdc-checkbox__background,
.mat-mdc-list-option .mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background {
  transition: border-color 90ms cubic-bezier(0, 0, 0.2, 1), background-color 90ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-mdc-list-option .mdc-checkbox__native-control:checked ~ .mdc-checkbox__background > .mdc-checkbox__checkmark > .mdc-checkbox__checkmark-path,
.mat-mdc-list-option .mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background > .mdc-checkbox__checkmark > .mdc-checkbox__checkmark-path {
  stroke-dashoffset: 0;
}
.mat-mdc-list-option .mdc-checkbox__native-control:checked ~ .mdc-checkbox__background > .mdc-checkbox__checkmark {
  transition: opacity 180ms cubic-bezier(0, 0, 0.2, 1), transform 180ms cubic-bezier(0, 0, 0.2, 1);
  opacity: 1;
}
.mat-mdc-list-option .mdc-checkbox__native-control:checked ~ .mdc-checkbox__background > .mdc-checkbox__mixedmark {
  transform: scaleX(1) rotate(-45deg);
}
.mat-mdc-list-option .mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background > .mdc-checkbox__checkmark {
  transform: rotate(45deg);
  opacity: 0;
  transition: opacity 90ms cubic-bezier(0.4, 0, 0.6, 1), transform 90ms cubic-bezier(0.4, 0, 0.6, 1);
}
.mat-mdc-list-option .mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background > .mdc-checkbox__mixedmark {
  transform: scaleX(1) rotate(0deg);
  opacity: 1;
}
@keyframes mdc-checkbox-unchecked-checked-checkmark-path {
  0%, 50% {
    stroke-dashoffset: 29.7833385;
  }
  50% {
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  100% {
    stroke-dashoffset: 0;
  }
}
@keyframes mdc-checkbox-unchecked-indeterminate-mixedmark {
  0%, 68.2% {
    transform: scaleX(0);
  }
  68.2% {
    animation-timing-function: cubic-bezier(0, 0, 0, 1);
  }
  100% {
    transform: scaleX(1);
  }
}
@keyframes mdc-checkbox-checked-unchecked-checkmark-path {
  from {
    animation-timing-function: cubic-bezier(0.4, 0, 1, 1);
    opacity: 1;
    stroke-dashoffset: 0;
  }
  to {
    opacity: 0;
    stroke-dashoffset: -29.7833385;
  }
}
@keyframes mdc-checkbox-checked-indeterminate-checkmark {
  from {
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    transform: rotate(0deg);
    opacity: 1;
  }
  to {
    transform: rotate(45deg);
    opacity: 0;
  }
}
@keyframes mdc-checkbox-indeterminate-checked-checkmark {
  from {
    animation-timing-function: cubic-bezier(0.14, 0, 0, 1);
    transform: rotate(45deg);
    opacity: 0;
  }
  to {
    transform: rotate(360deg);
    opacity: 1;
  }
}
@keyframes mdc-checkbox-checked-indeterminate-mixedmark {
  from {
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    transform: rotate(-45deg);
    opacity: 0;
  }
  to {
    transform: rotate(0deg);
    opacity: 1;
  }
}
@keyframes mdc-checkbox-indeterminate-checked-mixedmark {
  from {
    animation-timing-function: cubic-bezier(0.14, 0, 0, 1);
    transform: rotate(0deg);
    opacity: 1;
  }
  to {
    transform: rotate(315deg);
    opacity: 0;
  }
}
@keyframes mdc-checkbox-indeterminate-unchecked-mixedmark {
  0% {
    animation-timing-function: linear;
    transform: scaleX(1);
    opacity: 1;
  }
  32.8%, 100% {
    transform: scaleX(0);
    opacity: 0;
  }
}
.mat-mdc-list-option .mdc-radio {
  display: inline-block;
  position: relative;
  flex: 0 0 auto;
  box-sizing: content-box;
  width: 20px;
  height: 20px;
  will-change: opacity, transform, border-color, color;
  padding: calc((var(--%NS%mat-radio-state-layer-size, 40px) - 20px) / 2);
}
.mat-mdc-list-option .mdc-radio__background {
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  width: 20px;
  height: 20px;
}
.mat-mdc-list-option .mdc-radio__background::before {
  position: absolute;
  transform: scale(0, 0);
  border-radius: 50%;
  opacity: 0;
  pointer-events: none;
  content: "";
  transition: opacity 90ms cubic-bezier(0.4, 0, 0.6, 1), transform 90ms cubic-bezier(0.4, 0, 0.6, 1);
  width: var(--%NS%mat-radio-state-layer-size, 40px);
  height: var(--%NS%mat-radio-state-layer-size, 40px);
  top: calc(-1 * (var(--%NS%mat-radio-state-layer-size, 40px) - 20px) / 2);
  left: calc(-1 * (var(--%NS%mat-radio-state-layer-size, 40px) - 20px) / 2);
}
.mat-mdc-list-option .mdc-radio__outer-circle {
  position: absolute;
  top: 0;
  left: 0;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  border-width: 2px;
  border-style: solid;
  border-radius: 50%;
  transition: border-color 90ms cubic-bezier(0.4, 0, 0.6, 1);
}
.mat-mdc-list-option .mdc-radio__inner-circle {
  position: absolute;
  top: 0;
  left: 0;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  transform: scale(0);
  border-radius: 50%;
  transition: transform 90ms cubic-bezier(0.4, 0, 0.6, 1), background-color 90ms cubic-bezier(0.4, 0, 0.6, 1);
}
@media (forced-colors: active) {
  .mat-mdc-list-option .mdc-radio__inner-circle {
    background-color: CanvasText !important;
  }
}
.mat-mdc-list-option .mdc-radio__native-control {
  position: absolute;
  margin: 0;
  padding: 0;
  opacity: 0;
  top: 0;
  right: 0;
  left: 0;
  cursor: inherit;
  z-index: 1;
  width: var(--%NS%mat-radio-state-layer-size, 40px);
  height: var(--%NS%mat-radio-state-layer-size, 40px);
}
.mat-mdc-list-option .mdc-radio__native-control:checked + .mdc-radio__background, .mat-mdc-list-option .mdc-radio__native-control:disabled + .mdc-radio__background {
  transition: opacity 90ms cubic-bezier(0, 0, 0.2, 1), transform 90ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-mdc-list-option .mdc-radio__native-control:checked + .mdc-radio__background > .mdc-radio__outer-circle, .mat-mdc-list-option .mdc-radio__native-control:disabled + .mdc-radio__background > .mdc-radio__outer-circle {
  transition: border-color 90ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-mdc-list-option .mdc-radio__native-control:checked + .mdc-radio__background > .mdc-radio__inner-circle, .mat-mdc-list-option .mdc-radio__native-control:disabled + .mdc-radio__background > .mdc-radio__inner-circle {
  transition: transform 90ms cubic-bezier(0, 0, 0.2, 1), background-color 90ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-mdc-list-option .mdc-radio__native-control:disabled:not(:checked) + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--%NS%mat-radio-disabled-unselected-icon-color, var(--%NS%mat-sys-on-surface));
  opacity: var(--%NS%mat-radio-disabled-unselected-icon-opacity, 0.38);
}
.mat-mdc-list-option .mdc-radio__native-control:disabled + .mdc-radio__background {
  cursor: default;
}
.mat-mdc-list-option .mdc-radio__native-control:disabled + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--%NS%mat-radio-disabled-selected-icon-color, var(--%NS%mat-sys-on-surface));
  opacity: var(--%NS%mat-radio-disabled-selected-icon-opacity, 0.38);
}
.mat-mdc-list-option .mdc-radio__native-control:disabled + .mdc-radio__background > .mdc-radio__inner-circle {
  background-color: var(--%NS%mat-radio-disabled-selected-icon-color, var(--%NS%mat-sys-on-surface, currentColor));
  opacity: var(--%NS%mat-radio-disabled-selected-icon-opacity, 0.38);
}
.mat-mdc-list-option .mdc-radio__native-control:enabled:not(:checked) + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--%NS%mat-radio-unselected-icon-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-list-option .mdc-radio__native-control:enabled:checked + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--%NS%mat-radio-selected-icon-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-list-option .mdc-radio__native-control:enabled:checked + .mdc-radio__background > .mdc-radio__inner-circle {
  background-color: var(--%NS%mat-radio-selected-icon-color, var(--%NS%mat-sys-primary, currentColor));
}
.mat-mdc-list-option .mdc-radio__native-control:checked + .mdc-radio__background > .mdc-radio__inner-circle {
  transform: scale(0.5);
  transition: transform 90ms cubic-bezier(0, 0, 0.2, 1), background-color 90ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-mdc-list-option._mat-animation-noopable .mdc-radio__background::before,
.mat-mdc-list-option._mat-animation-noopable .mdc-radio__outer-circle,
.mat-mdc-list-option._mat-animation-noopable .mdc-radio__inner-circle {
  transition: none !important;
}
.mat-mdc-list-option._mat-animation-noopable > .mdc-list-item__start > .mdc-checkbox > .mat-mdc-checkbox-touch-target,
.mat-mdc-list-option._mat-animation-noopable > .mdc-list-item__start > .mdc-checkbox > .mdc-checkbox__native-control,
.mat-mdc-list-option._mat-animation-noopable > .mdc-list-item__start > .mdc-checkbox > .mdc-checkbox__ripple,
.mat-mdc-list-option._mat-animation-noopable > .mdc-list-item__start > .mdc-checkbox > .mat-mdc-checkbox-ripple::before,
.mat-mdc-list-option._mat-animation-noopable > .mdc-list-item__start > .mdc-checkbox > .mdc-checkbox__background,
.mat-mdc-list-option._mat-animation-noopable > .mdc-list-item__start > .mdc-checkbox > .mdc-checkbox__background > .mdc-checkbox__checkmark,
.mat-mdc-list-option._mat-animation-noopable > .mdc-list-item__start > .mdc-checkbox > .mdc-checkbox__background > .mdc-checkbox__checkmark > .mdc-checkbox__checkmark-path,
.mat-mdc-list-option._mat-animation-noopable > .mdc-list-item__start > .mdc-checkbox > .mdc-checkbox__background > .mdc-checkbox__mixedmark, .mat-mdc-list-option._mat-animation-noopable > .mdc-list-item__end > .mdc-checkbox > .mat-mdc-checkbox-touch-target,
.mat-mdc-list-option._mat-animation-noopable > .mdc-list-item__end > .mdc-checkbox > .mdc-checkbox__native-control,
.mat-mdc-list-option._mat-animation-noopable > .mdc-list-item__end > .mdc-checkbox > .mdc-checkbox__ripple,
.mat-mdc-list-option._mat-animation-noopable > .mdc-list-item__end > .mdc-checkbox > .mat-mdc-checkbox-ripple::before,
.mat-mdc-list-option._mat-animation-noopable > .mdc-list-item__end > .mdc-checkbox > .mdc-checkbox__background,
.mat-mdc-list-option._mat-animation-noopable > .mdc-list-item__end > .mdc-checkbox > .mdc-checkbox__background > .mdc-checkbox__checkmark,
.mat-mdc-list-option._mat-animation-noopable > .mdc-list-item__end > .mdc-checkbox > .mdc-checkbox__background > .mdc-checkbox__checkmark > .mdc-checkbox__checkmark-path,
.mat-mdc-list-option._mat-animation-noopable > .mdc-list-item__end > .mdc-checkbox > .mdc-checkbox__background > .mdc-checkbox__mixedmark {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-list-option .mdc-checkbox__native-control, .mat-mdc-list-option .mdc-radio__native-control {
  display: none;
}

@media (forced-colors: active) {
  .mat-mdc-list-option.mdc-list-item--%NS%selected::after {
    content: "";
    position: absolute;
    top: 50%;
    right: 16px;
    transform: translateY(-50%);
    width: 10px;
    height: 0;
    border-bottom: solid 10px;
    border-radius: 10px;
  }
  .mat-mdc-list-option.mdc-list-item--selected [dir=rtl]::after {
    right: auto;
    left: 16px;
  }
}
`], encapsulation: 2 });
    }
    return e;
})(), ri = (() => { class e {
    static \u0275fac = function (n) { return new (n || e); };
    static \u0275dir = t.\u0275\u0275defineDirective({ type: e, selectors: [["", "mat-subheader", ""], ["", "matSubheader", ""]], hostAttrs: [1, "mat-mdc-subheader", "mdc-list-group__subheader"] });
} return e; })(), di = new d("MatNavList"), hi = (() => { class e extends r {
    _isNonInteractive = !1;
    static \u0275fac = (() => { let i; return function (a) { return (i || (i = t.\u0275\u0275getInheritedFactory(e)))(a || e); }; })();
    static \u0275cmp = t.\u0275\u0275defineComponent({ type: e, selectors: [["mat-nav-list"]], hostAttrs: ["role", "navigation", 1, "mat-mdc-nav-list", "mat-mdc-list-base", "mdc-list"], exportAs: ["matNavList"], features: [t.\u0275\u0275ProvidersFeature([{ provide: r, useExisting: e }]), t.\u0275\u0275InheritDefinitionFeature], ngContentSelectors: _, decls: 1, vars: 0, template: function (n, a) { n & 1 && (t.\u0275\u0275projectionDef(), t.\u0275\u0275projection(0)); }, styles: [u], encapsulation: 2 });
} return e; })(), At = { provide: w, useExisting: Q(() => Ot), multi: !0 }, g = class {
    source;
    options;
    constructor(m, i) { this.source = m, this.options = i; }
}, Ot = (() => { class e extends r {
    _element = o(h);
    _ngZone = o(I);
    _renderer = o(V);
    _initialized = !1;
    _keyManager;
    _listenerCleanups;
    _destroyed = new K;
    _isDestroyed = !1;
    _onChange = i => { };
    _items;
    selectionChange = new O;
    color = "accent";
    compareWith = (i, n) => i === n;
    get multiple() { return this._multiple; }
    set multiple(i) { let n = l(i); n !== this._multiple && (this._multiple = n, this.selectedOptions = new L(this._multiple, this.selectedOptions.selected)); }
    _multiple = !0;
    get hideSingleSelectionIndicator() { return this._hideSingleSelectionIndicator; }
    set hideSingleSelectionIndicator(i) { this._hideSingleSelectionIndicator = l(i); }
    _hideSingleSelectionIndicator = this._defaultOptions?.hideSingleSelectionIndicator ?? !1;
    selectedOptions = new L(this._multiple);
    _value = null;
    _onTouched = () => { };
    _changeDetectorRef = o(A);
    constructor() { super(), this._isNonInteractive = !1; }
    ngAfterViewInit() { this._initialized = !0, this._setupRovingTabindex(), this._ngZone.runOutsideAngular(() => { this._listenerCleanups = [this._renderer.listen(this._element.nativeElement, "focusin", this._handleFocusin), this._renderer.listen(this._element.nativeElement, "focusout", this._handleFocusout)]; }), this._value && this._setOptionsFromValues(this._value), this._watchForSelectionChange(); }
    ngOnChanges(i) { let n = i.disabled, a = i.disableRipple, c = i.hideSingleSelectionIndicator; (a && !a.firstChange || n && !n.firstChange || c && !c.firstChange) && this._markOptionsForCheck(); }
    ngOnDestroy() { this._keyManager?.destroy(), this._listenerCleanups?.forEach(i => i()), this._destroyed.next(), this._destroyed.complete(), this._isDestroyed = !0; }
    focus(i) { this._element.nativeElement.focus(i); }
    selectAll() { return this._setAllOptionsSelected(!0); }
    deselectAll() { return this._setAllOptionsSelected(!1); }
    _reportValueChange() { if (this.options && !this._isDestroyed) {
        let i = this._getSelectedOptionValues();
        this._onChange(i), this._value = i;
    } }
    _emitChangeEvent(i) { this.selectionChange.emit(new g(this, i)); }
    writeValue(i) { this._value = i, this.options && this._setOptionsFromValues(i || []); }
    setDisabledState(i) { this.disabled = i, this._changeDetectorRef.markForCheck(), this._markOptionsForCheck(); }
    get disabled() { return this._selectionListDisabled(); }
    set disabled(i) { this._selectionListDisabled.set(l(i)), this._selectionListDisabled() && this._keyManager?.setActiveItem(-1); }
    _selectionListDisabled = b(!1);
    registerOnChange(i) { this._onChange = i; }
    registerOnTouched(i) { this._onTouched = i; }
    _watchForSelectionChange() { this.selectedOptions.changed.pipe(M(this._destroyed)).subscribe(i => { for (let n of i.added)
        n.selected = !0; for (let n of i.removed)
        n.selected = !1; this._containsFocus() || this._resetActiveOption(); }); }
    _setOptionsFromValues(i) { this.options.forEach(n => n._setSelected(!1)), i.forEach(n => { let a = this.options.find(c => c.selected ? !1 : this.compareWith(c.value, n)); a && a._setSelected(!0); }); }
    _getSelectedOptionValues() { return this.options.filter(i => i.selected).map(i => i.value); }
    _markOptionsForCheck() { this.options && this.options.forEach(i => i._markForCheck()); }
    _setAllOptionsSelected(i, n) { let a = []; return this.options.forEach(c => { (!n || !c.disabled) && c._setSelected(i) && a.push(c); }), a.length && this._reportValueChange(), a; }
    get options() { return this._items; }
    _handleKeydown(i) { let n = this._keyManager.activeItem; if (n && (i.keyCode === Y || i.keyCode === J)) {
        let a = C();
        if (!this._items.toArray().some(s => s._elementRef.nativeElement === a)) {
            i.preventDefault(), n.focus();
            return;
        }
    } if ((i.keyCode === $ || i.keyCode === tt) && !this._keyManager.isTyping() && n && !n.disabled)
        i.preventDefault(), n._toggleOnInteraction();
    else if (i.keyCode === it && this.multiple && !this._keyManager.isTyping() && et(i, "ctrlKey", "metaKey")) {
        let a = this.options.some(c => !c.disabled && !c.selected);
        i.preventDefault(), this._emitChangeEvent(this._setAllOptionsSelected(a, !0));
    }
    else
        this._keyManager.onKeydown(i); }
    _handleFocusout = () => { setTimeout(() => { this._containsFocus() || this._resetActiveOption(); }); };
    _handleFocusin = i => { let n = this._items.toArray().findIndex(a => a._elementRef.nativeElement.contains(i.target)); n > -1 ? this._setActiveOption(n) : this._resetActiveOption(); };
    _setupRovingTabindex() { this._keyManager = new Z(this._items).withHomeAndEnd().withTypeAhead().withWrap().skipPredicate(() => !1), this._resetActiveOption(), this._keyManager.change.subscribe(i => this._setActiveOption(i)), this._items.changes.pipe(M(this._destroyed)).subscribe(() => { let i = this._keyManager.activeItem; (!i || this._items.toArray().indexOf(i) === -1) && this._resetActiveOption(); }); }
    _setActiveOption(i) { this._items.forEach((n, a) => { let c = -1; !this.disabled && a === i && (c = 0), n._setTabindex(c); }), this._keyManager.updateActiveItem(i); }
    _resetActiveOption() { if (this.disabled) {
        let n = this._items.find(c => c.selected) || this._items.first, a = n ? this._items.toArray().indexOf(n) : -1;
        this._setActiveOption(a);
        return;
    } let i = this._items.find(n => n.selected && !n.disabled) || this._items.first; this._setActiveOption(i ? this._items.toArray().indexOf(i) : -1); }
    _containsFocus() { let i = C(); return i && this._element.nativeElement.contains(i); }
    static \u0275fac = function (n) { return new (n || e); };
    static \u0275cmp = t.\u0275\u0275defineComponent({ type: e, selectors: [["mat-selection-list"]], contentQueries: function (n, a, c) { if (n & 1 && t.\u0275\u0275contentQuery(c, It, 5), n & 2) {
            let s;
            t.\u0275\u0275queryRefresh(s = t.\u0275\u0275loadQuery()) && (a._items = s);
        } }, hostAttrs: ["role", "listbox", 1, "mat-mdc-selection-list", "mat-mdc-list-base", "mdc-list"], hostVars: 1, hostBindings: function (n, a) { n & 1 && t.\u0275\u0275listener("keydown", function (s) { return a._handleKeydown(s); }), n & 2 && t.\u0275\u0275attribute("aria-multiselectable", a.multiple); }, inputs: { color: "color", compareWith: "compareWith", multiple: "multiple", hideSingleSelectionIndicator: "hideSingleSelectionIndicator", disabled: "disabled" }, outputs: { selectionChange: "selectionChange" }, exportAs: ["matSelectionList"], features: [t.\u0275\u0275ProvidersFeature([At, { provide: r, useExisting: e }, { provide: B, useExisting: e }]), t.\u0275\u0275InheritDefinitionFeature, t.\u0275\u0275NgOnChangesFeature], ngContentSelectors: _, decls: 1, vars: 0, template: function (n, a) { n & 1 && (t.\u0275\u0275projectionDef(), t.\u0275\u0275projection(0)); }, styles: [u], encapsulation: 2 });
} return e; })(), _i = (() => { class e {
    static \u0275fac = function (n) { return new (n || e); };
    static \u0275mod = t.\u0275\u0275defineNgModule({ type: e });
    static \u0275inj = t.\u0275\u0275defineInjector({ imports: [X, y, S, St, N] });
} return e; })();
export { oi as MAT_LIST, Mt as MAT_LIST_CONFIG, di as MAT_NAV_LIST, At as MAT_SELECTION_LIST_VALUE_ACCESSOR, si as MatActionList, P as MatDivider, mi as MatList, li as MatListItem, Ct as MatListItemAvatar, Lt as MatListItemIcon, F as MatListItemLine, Nt as MatListItemMeta, E as MatListItemTitle, _i as MatListModule, It as MatListOption, ri as MatListSubheaderCssMatStyler, hi as MatNavList, Ot as MatSelectionList, g as MatSelectionListChange, B as SELECTION_LIST, R as _MatListItemGraphicBase };
