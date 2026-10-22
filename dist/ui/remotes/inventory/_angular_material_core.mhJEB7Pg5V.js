import { a as d, b as s, c as p } from "@nf-internal/chunk-HGEVE5R3";
import { a as Z, b as G, c as V } from "@nf-internal/chunk-BP2IRMCJ";
import { a as k } from "@nf-internal/chunk-RIOYVCV7";
import { a as S, b as L, c as R, d as x, e as F, f as C, g as b } from "@nf-internal/chunk-QSLXVGKB";
import { a as Y } from "@nf-internal/chunk-GKOUHP5M";
import { a as N } from "@nf-internal/chunk-CLS55YPL";
import { a as $ } from "@nf-internal/chunk-VHGJF3GC";
import { a as j } from "@nf-internal/chunk-WJDZCIUH";
import { a as H, b as U } from "@nf-internal/chunk-NE3WOAAK";
import { a as W } from "@nf-internal/chunk-M4FUFBJO";
import { a as P } from "@nf-internal/chunk-TBOQSXHX";
import { a as T, b as _, c as v, d as I, e as O, f as A } from "@nf-internal/chunk-TDH6BADM";
import { a as E } from "@nf-internal/chunk-2SOO3RAN";
import { a as D, b as w, c as y } from "@nf-internal/chunk-L6LZ2NRF";
import { a as f, b as h } from "@nf-internal/chunk-2NFLSA4Y";
import * as a from "@angular/core";
import { Version as z, inject as g } from "@angular/core";
import "rxjs";
import "@angular/cdk/layout";
import "@angular/cdk/a11y";
import "@angular/cdk/keycodes";
import "@angular/cdk/private";
import "@angular/cdk/platform";
import "@angular/cdk/coercion";
import "@angular/cdk/bidi";
import "rxjs/operators";
var me = new z("22.2.3"), B = /^\d{4}-\d{2}-\d{2}(?:T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|(?:(?:\+|-)\d{2}:\d{2}))?)?$/, X = /^(\d?\d)[:.](\d?\d)(?:[:.](\d?\d))?\s*(AM|PM)?$/i;
function l(n, u) { let e = Array(n); for (let t = 0; t < n; t++)
    e[t] = u(t); return e; }
var M = (() => { class n extends s {
    _matDateLocale = g(d, { optional: !0 });
    constructor() { super(); let e = g(d, { optional: !0 }); e !== void 0 && (this._matDateLocale = e), super.setLocale(this._matDateLocale); }
    getYear(e) { return e.getFullYear(); }
    getMonth(e) { return e.getMonth(); }
    getDate(e) { return e.getDate(); }
    getDayOfWeek(e) { return e.getDay(); }
    getMonthNames(e) { let t = new Intl.DateTimeFormat(this.locale, { month: e, timeZone: "utc" }); return l(12, r => this._format(t, new Date(2017, r, 1))); }
    getDateNames() { let e = new Intl.DateTimeFormat(this.locale, { day: "numeric", timeZone: "utc" }); return l(31, t => this._format(e, new Date(2017, 0, t + 1))); }
    getDayOfWeekNames(e) { let t = new Intl.DateTimeFormat(this.locale, { weekday: e, timeZone: "utc" }); return l(7, r => this._format(t, new Date(2017, 0, r + 1))); }
    getYearName(e) { let t = new Intl.DateTimeFormat(this.locale, { year: "numeric", timeZone: "utc" }); return this._format(t, e); }
    getFirstDayOfWeek() { if (typeof Intl < "u" && Intl.Locale) {
        let e = new Intl.Locale(this.locale), t = (e.getWeekInfo?.() || e.weekInfo)?.firstDay ?? 0;
        return t === 7 ? 0 : t;
    } return 0; }
    getNumDaysInMonth(e) { return this.getDate(this._createDateWithOverflow(this.getYear(e), this.getMonth(e) + 1, 0)); }
    clone(e) { return new Date(e.getTime()); }
    createDate(e, t, r) { let o = this._createDateWithOverflow(e, t, r); return o.getMonth() != t, o; }
    today() { return new Date; }
    parse(e, t) { return typeof e == "number" ? new Date(e) : e ? new Date(Date.parse(e)) : null; }
    format(e, t) { if (!this.isValid(e))
        throw Error("NativeDateAdapter: Cannot format invalid date."); let r = new Intl.DateTimeFormat(this.locale, h(f({}, t), { timeZone: "utc" })); return this._format(r, e); }
    addCalendarYears(e, t) { return this.addCalendarMonths(e, t * 12); }
    addCalendarMonths(e, t) { let r = this._createDateWithOverflow(this.getYear(e), this.getMonth(e) + t, this.getDate(e)); return this.getMonth(r) != ((this.getMonth(e) + t) % 12 + 12) % 12 && (r = this._createDateWithOverflow(this.getYear(r), this.getMonth(r), 0)), r; }
    addCalendarDays(e, t) { return this._createDateWithOverflow(this.getYear(e), this.getMonth(e), this.getDate(e) + t); }
    toIso8601(e) { return [e.getUTCFullYear(), this._2digit(e.getUTCMonth() + 1), this._2digit(e.getUTCDate())].join("-"); }
    deserialize(e) { if (typeof e == "string") {
        if (!e)
            return null;
        if (B.test(e)) {
            let t = new Date(e);
            if (this.isValid(t))
                return t;
        }
    } return super.deserialize(e); }
    isDateInstance(e) { return e instanceof Date; }
    isValid(e) { return !isNaN(e.getTime()); }
    invalid() { return new Date(NaN); }
    setTime(e, t, r, o) { let i = this.clone(e); return i.setHours(t, r, o, 0), i; }
    getHours(e) { return e.getHours(); }
    getMinutes(e) { return e.getMinutes(); }
    getSeconds(e) { return e.getSeconds(); }
    parseTime(e, t) { if (typeof e != "string")
        return e instanceof Date ? new Date(e.getTime()) : null; let r = e.trim(); if (r.length === 0)
        return null; let o = this._parseTimeString(r); if (o === null) {
        let i = r.replace(/[^0-9:(AM|PM)]/gi, "").trim();
        i.length > 0 && (o = this._parseTimeString(i));
    } return o || this.invalid(); }
    addSeconds(e, t) { return new Date(e.getTime() + t * 1e3); }
    _createDateWithOverflow(e, t, r) { let o = new Date; return o.setFullYear(e, t, r), o.setHours(0, 0, 0, 0), o; }
    _2digit(e) { return ("00" + e).slice(-2); }
    _format(e, t) { let r = new Date; return r.setUTCFullYear(t.getFullYear(), t.getMonth(), t.getDate()), r.setUTCHours(t.getHours(), t.getMinutes(), t.getSeconds(), t.getMilliseconds()), e.format(r); }
    _parseTimeString(e) { let t = e.toUpperCase().match(X); if (t) {
        let r = parseInt(t[1]), o = parseInt(t[2]), i = t[3] == null ? void 0 : parseInt(t[3]), c = t[4];
        if (r === 12 ? r = c === "AM" ? 0 : r : c === "PM" && (r += 12), m(r, 0, 23) && m(o, 0, 59) && (i == null || m(i, 0, 59)))
            return this.setTime(this.today(), r, o, i || 0);
    } return null; }
    static \u0275fac = function (t) { return new (t || n); };
    static \u0275prov = a.\u0275\u0275defineService({ token: n, factory: n.\u0275fac, autoProvided: !1 });
} return n; })();
function m(n, u, e) { return !isNaN(n) && n >= u && n <= e; }
var q = { parse: { dateInput: null, timeInput: null }, display: { dateInput: { year: "numeric", month: "numeric", day: "numeric" }, timeInput: { hour: "numeric", minute: "numeric" }, monthYearLabel: { year: "numeric", month: "short" }, dateA11yLabel: { year: "numeric", month: "long", day: "numeric" }, monthYearA11yLabel: { year: "numeric", month: "long" }, timeOptionLabel: { hour: "numeric", minute: "numeric" } } }, ce = (() => { class n {
    static \u0275fac = function (t) { return new (t || n); };
    static \u0275mod = a.\u0275\u0275defineNgModule({ type: n });
    static \u0275inj = a.\u0275\u0275defineInjector({ providers: [{ provide: s, useClass: M }] });
} return n; })(), fe = (() => { class n {
    static \u0275fac = function (t) { return new (t || n); };
    static \u0275mod = a.\u0275\u0275defineNgModule({ type: n });
    static \u0275inj = a.\u0275\u0275defineInjector({ providers: [J()] });
} return n; })();
function J(n = q) { return [{ provide: s, useClass: M }, { provide: p, useValue: n }]; }
export { s as DateAdapter, U as ErrorStateMatcher, D as MATERIAL_ANIMATIONS, p as MAT_DATE_FORMATS, d as MAT_DATE_LOCALE, q as MAT_NATIVE_DATE_FORMATS, L as MAT_OPTGROUP, S as MAT_OPTION_PARENT_COMPONENT, O as MAT_RIPPLE_GLOBAL_OPTIONS, Z as MatLine, V as MatLineModule, fe as MatNativeDateModule, R as MatOptgroup, F as MatOption, k as MatOptionModule, x as MatOptionSelectionChange, N as MatPseudoCheckbox, Y as MatPseudoCheckboxModule, A as MatRipple, W as MatRippleLoader, P as MatRippleModule, M as NativeDateAdapter, ce as NativeDateModule, _ as RippleRef, I as RippleRenderer, T as RippleState, H as ShowOnDirtyErrorStateMatcher, me as VERSION, j as _ErrorStateTracker, $ as _MatInternalFormField, E as _StructuralStylesLoader, y as _animationsDisabled, C as _countGroupLabelsBeforeOption, w as _getAnimationsState, b as _getOptionScrollPosition, v as defaultRippleAnimationConfig, J as provideNativeDateAdapter, G as setLines };
