var g = Object.defineProperty, R = Object.defineProperties;
var D = Object.getOwnPropertyDescriptors;
var f = Object.getOwnPropertySymbols;
var P = Object.prototype.hasOwnProperty, C = Object.prototype.propertyIsEnumerable;
var p = (o, t, e) => t in o ? g(o, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : o[t] = e, b = (o, t) => { for (var e in t ||= {})
    P.call(t, e) && p(o, e, t[e]); if (f)
    for (var e of f(t))
        C.call(t, e) && p(o, e, t[e]); return o; }, x = (o, t) => R(o, D(t));
import * as r from "@angular/core";
import { ElementRef as E, NgModuleRef as v, Injector as N, EnvironmentInjector as j, createComponent as y, inject as a, TemplateRef as M, ViewContainerRef as w, DOCUMENT as A, EventEmitter as F } from "@angular/core";
var s = class {
    _attachedHost = null;
    attach(t) { return this._attachedHost = t, t.attach(this); }
    detach() { let t = this._attachedHost; t != null && (this._attachedHost = null, t.detach()); }
    get isAttached() { return this._attachedHost != null; }
    setAttachedHost(t) { this._attachedHost = t; }
}, l = class extends s {
    component;
    viewContainerRef;
    injector;
    projectableNodes;
    bindings;
    directives;
    constructor(t, e, n, i, h, _) { super(), this.component = t, this.viewContainerRef = e, this.injector = n, this.projectableNodes = i, this.bindings = h || null, this.directives = _ || null; }
}, d = class extends s {
    templateRef;
    viewContainerRef;
    context;
    injector;
    constructor(t, e, n, i) { super(), this.templateRef = t, this.viewContainerRef = e, this.context = n, this.injector = i; }
    get origin() { return this.templateRef.elementRef; }
    attach(t, e = this.context) { return this.context = e, super.attach(t); }
    detach() { return this.context = void 0, super.detach(); }
}, u = class extends s {
    element;
    constructor(t) { super(), this.element = t instanceof E ? t.nativeElement : t; }
}, c = class {
    _attachedPortal = null;
    _disposeFn = null;
    _isDisposed = !1;
    hasAttached() { return !!this._attachedPortal; }
    attach(t) { if (t instanceof l)
        return this._attachedPortal = t, this.attachComponentPortal(t); if (t instanceof d)
        return this._attachedPortal = t, this.attachTemplatePortal(t); if (this.attachDomPortal && t instanceof u)
        return this._attachedPortal = t, this.attachDomPortal(t); }
    attachDomPortal = null;
    detach() { this._attachedPortal && (this._attachedPortal.setAttachedHost(null), this._attachedPortal = null), this._invokeDisposeFn(); }
    dispose() { this.hasAttached() && this.detach(), this._invokeDisposeFn(), this._isDisposed = !0; }
    setDisposeFn(t) { this._disposeFn = t; }
    _invokeDisposeFn() { this._disposeFn && (this._disposeFn(), this._disposeFn = null); }
}, m = class extends c {
    outletElement;
    _appRef;
    _defaultInjector;
    constructor(t, e, n) { super(), this.outletElement = t, this._appRef = e, this._defaultInjector = n; }
    attachComponentPortal(t) { let e; if (t.viewContainerRef) {
        let n = t.injector || t.viewContainerRef.injector, i = n.get(v, null, { optional: !0 }) || void 0;
        e = t.viewContainerRef.createComponent(t.component, { index: t.viewContainerRef.length, injector: n, ngModuleRef: i, projectableNodes: t.projectableNodes || void 0, bindings: t.bindings || void 0, directives: t.directives || void 0 }), this.setDisposeFn(() => e.destroy());
    }
    else {
        let n = this._appRef, i = t.injector || this._defaultInjector || N.NULL, h = i.get(j, n.injector);
        e = y(t.component, { elementInjector: i, environmentInjector: h, projectableNodes: t.projectableNodes || void 0, bindings: t.bindings || void 0, directives: t.directives || void 0 }), n.attachView(e.hostView), this.setDisposeFn(() => { n.viewCount > 0 && n.detachView(e.hostView), e.destroy(); });
    } return this.outletElement.appendChild(this._getComponentRootNode(e)), this._attachedPortal = t, e; }
    attachTemplatePortal(t) { let e = t.viewContainerRef, n = e.createEmbeddedView(t.templateRef, t.context, { injector: t.injector }); return n.rootNodes.forEach(i => this.outletElement.appendChild(i)), n.detectChanges(), this.setDisposeFn(() => { let i = e.indexOf(n); i !== -1 && e.remove(i); }), this._attachedPortal = t, n; }
    attachDomPortal = t => { let e = t.element; e.parentNode; let n = this.outletElement.ownerDocument.createComment("dom-portal"); e.parentNode.insertBefore(n, e), this.outletElement.appendChild(e), this._attachedPortal = t, super.setDisposeFn(() => { n.parentNode && n.parentNode.replaceChild(e, n); }); };
    dispose() { super.dispose(), this.outletElement.remove(); }
    _getComponentRootNode(t) { return t.hostView.rootNodes[0]; }
}, U = (() => { class o extends d {
    constructor() { let e = a(M), n = a(w); super(e, n); }
    static \u0275fac = function (n) { return new (n || o); };
    static \u0275dir = r.\u0275\u0275defineDirective({ type: o, selectors: [["", "cdkPortal", ""]], exportAs: ["cdkPortal"], features: [r.\u0275\u0275InheritDefinitionFeature] });
} return o; })(), z = (() => { class o extends c {
    _moduleRef = a(v, { optional: !0 });
    _document = a(A);
    _viewContainerRef = a(w);
    _isInitialized = !1;
    _attachedRef = null;
    get portal() { return this._attachedPortal; }
    set portal(e) { this.hasAttached() && !e && !this._isInitialized || (this.hasAttached() && super.detach(), e && super.attach(e), this._attachedPortal = e || null); }
    attached = new F;
    get attachedRef() { return this._attachedRef; }
    ngOnInit() { this._isInitialized = !0; }
    ngOnDestroy() { super.dispose(), this._attachedRef = this._attachedPortal = null; }
    attachComponentPortal(e) { e.setAttachedHost(this); let n = e.viewContainerRef != null ? e.viewContainerRef : this._viewContainerRef, i = n.createComponent(e.component, { index: n.length, injector: e.injector || n.injector, projectableNodes: e.projectableNodes || void 0, ngModuleRef: this._moduleRef || void 0, bindings: e.bindings || void 0, directives: e.directives || void 0 }); return n !== this._viewContainerRef && this._getRootNode().appendChild(i.hostView.rootNodes[0]), super.setDisposeFn(() => i.destroy()), this._attachedPortal = e, this._attachedRef = i, this.attached.emit(i), i; }
    attachTemplatePortal(e) { e.setAttachedHost(this); let n = this._viewContainerRef.createEmbeddedView(e.templateRef, e.context, { injector: e.injector }); return super.setDisposeFn(() => this._viewContainerRef.clear()), this._attachedPortal = e, this._attachedRef = n, this.attached.emit(n), n; }
    attachDomPortal = e => { let n = e.element; n.parentNode; let i = this._document.createComment("dom-portal"); e.setAttachedHost(this), n.parentNode.insertBefore(i, n), this._getRootNode().appendChild(n), this._attachedPortal = e, super.setDisposeFn(() => { i.parentNode && i.parentNode.replaceChild(n, i); }); };
    _getRootNode() { let e = this._viewContainerRef.element.nativeElement; return e.nodeType === e.ELEMENT_NODE ? e : e.parentNode; }
    static \u0275fac = (() => { let e; return function (i) { return (e || (e = r.\u0275\u0275getInheritedFactory(o)))(i || o); }; })();
    static \u0275dir = r.\u0275\u0275defineDirective({ type: o, selectors: [["", "cdkPortalOutlet", ""]], inputs: { portal: [0, "cdkPortalOutlet", "portal"] }, outputs: { attached: "attached" }, exportAs: ["cdkPortalOutlet"], features: [r.\u0275\u0275InheritDefinitionFeature] });
} return o; })(), B = (() => { class o {
    static \u0275fac = function (n) { return new (n || o); };
    static \u0275mod = r.\u0275\u0275defineNgModule({ type: o });
    static \u0275inj = r.\u0275\u0275defineInjector({});
} return o; })();
export { b as a, x as b, s as c, l as d, d as e, u as f, c as g, m as h, U as i, z as j, B as k };
