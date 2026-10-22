import "@nf-internal/chunk-2NFLSA4Y";
import * as n from "@angular/core";
import { inject as c, DOCUMENT as u, InjectionToken as p, NgZone as l, EventEmitter as f } from "@angular/core";
var d = class {
    _document;
    _textarea;
    constructor(s, t) { this._document = t; let e = this._textarea = this._document.createElement("textarea"), o = e.style; o.position = "fixed", o.top = o.opacity = "0", o.left = "-999em", e.setAttribute("aria-hidden", "true"), e.value = s, e.readOnly = !0, (this._document.fullscreenElement || this._document.body).appendChild(e); }
    copy() { let s = this._textarea, t = !1; try {
        if (s) {
            let e = this._document.activeElement;
            s.select(), s.setSelectionRange(0, s.value.length), t = this._document.execCommand("copy"), e && e.focus();
        }
    }
    catch { } return t; }
    destroy() { let s = this._textarea; s && (s.remove(), this._textarea = void 0); }
}, y = (() => { class i {
    _document = c(u);
    copy(t) { let e = this.beginCopy(t), o = e.copy(); return e.destroy(), o; }
    beginCopy(t) { return new d(t, this._document); }
    static \u0275fac = function (e) { return new (e || i); };
    static \u0275prov = n.\u0275\u0275defineService({ token: i, factory: i.\u0275fac });
} return i; })(), m = new p("CDK_COPY_TO_CLIPBOARD_CONFIG"), x = (() => { class i {
    _clipboard = c(y);
    _ngZone = c(l);
    text = "";
    attempts = 1;
    copied = new f;
    _pending = new Set;
    _destroyed = !1;
    _currentTimeout;
    constructor() { let t = c(m, { optional: !0 }); t && t.attempts != null && (this.attempts = t.attempts); }
    copy(t = this.attempts) { if (t = Math.min(t, 50), t > 1) {
        let e = t, o = this._clipboard.beginCopy(this.text);
        this._pending.add(o);
        let r = () => { let a = o.copy(); !a && --e && !this._destroyed ? this._currentTimeout = this._ngZone.runOutsideAngular(() => setTimeout(r, 1)) : (this._currentTimeout = null, this._pending.delete(o), o.destroy(), this.copied.emit(a)); };
        r();
    }
    else
        this.copied.emit(this._clipboard.copy(this.text)); }
    ngOnDestroy() { this._currentTimeout && clearTimeout(this._currentTimeout), this._pending.forEach(t => t.destroy()), this._pending.clear(), this._destroyed = !0; }
    static \u0275fac = function (e) { return new (e || i); };
    static \u0275dir = n.\u0275\u0275defineDirective({ type: i, selectors: [["", "cdkCopyToClipboard", ""]], hostBindings: function (e, o) { e & 1 && n.\u0275\u0275listener("click", function () { return o.copy(); }); }, inputs: { text: [0, "cdkCopyToClipboard", "text"], attempts: [0, "cdkCopyToClipboardAttempts", "attempts"] }, outputs: { copied: "cdkCopyToClipboardCopied" } });
} return i; })(), b = (() => { class i {
    static \u0275fac = function (e) { return new (e || i); };
    static \u0275mod = n.\u0275\u0275defineNgModule({ type: i });
    static \u0275inj = n.\u0275\u0275defineInjector({});
} return i; })();
export { m as CDK_COPY_TO_CLIPBOARD_CONFIG, x as CdkCopyToClipboard, y as Clipboard, b as ClipboardModule, d as PendingCopy };
