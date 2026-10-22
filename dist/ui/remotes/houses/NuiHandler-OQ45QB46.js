import { ComponentPortal as u } from "@angular/cdk/portal";
import { Overlay as v } from "@angular/cdk/overlay";
import { inject as i, Injector as n, isDevMode as m } from "@angular/core";
import { inject as c, Injector as d } from "@angular/core";
import * as e from "@angular/core";
var r = class o {
    data = c(d).get("DATA");
    static \u0275fac = function (a) { return new (a || o); };
    static \u0275cmp = e.\u0275\u0275defineComponent({ type: o, selectors: [["ng-component"]], decls: 2, vars: 1, template: function (a, l) { a & 1 && (e.\u0275\u0275domElementStart(0, "h3"), e.\u0275\u0275text(1), e.\u0275\u0275domElementEnd()), a & 2 && (e.\u0275\u0275advance(), e.\u0275\u0275textInterpolate(l.data.metadata?.address ?? "house.metadata.address")); }, styles: ["[_nghost-%COMP%]{background:#000;background:linear-gradient(90deg,#000000d9,#0009);display:block;box-shadow:0 48px 144px #000000d2,0 12px 36px #00000086;padding:0 1rem;margin-left:auto;margin-right:auto}"] });
};
import * as p from "@angular/core";
var s = class o {
    overlay = i(v);
    injector = i(n);
    overlayRef;
    handleMessage(t) { switch (m() && console.log("Received message", t), t.type) {
        case "houses:entrance:hover":
            this.showPickupOverlay(t);
            break;
        case "houses:entrance:unhover":
            this.hidePickupOverlay();
            break;
    } }
    showPickupOverlay(t) { if (this.overlayRef?.hasAttached())
        return; let a = n.create({ parent: this.injector, providers: [{ provide: "DATA", useValue: t }] }); this.overlayRef = this.overlay.create({ width: "600px", panelClass: "overlay-panel-enter", positionStrategy: this.overlay.position().global().centerHorizontally().bottom("100px") }), this.overlayRef.attach(new u(r, null, a)); }
    hidePickupOverlay() { this.overlayRef?.dispose(), this.overlayRef = void 0; }
    static \u0275fac = function (a) { return new (a || o); };
    static \u0275prov = p.\u0275\u0275defineInjectable({ token: o, factory: o.\u0275fac, providedIn: "root" });
};
export { s as NuiHandler };
