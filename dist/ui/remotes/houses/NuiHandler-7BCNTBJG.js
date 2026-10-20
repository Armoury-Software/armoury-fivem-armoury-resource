import { ComponentPortal as n } from "@angular/cdk/portal";
import { Overlay as p } from "@angular/cdk/overlay";
import { inject as l, isDevMode as c } from "@angular/core";
import * as e from "@angular/core";
var r = class o {
    static \u0275fac = function (a) { return new (a || o); };
    static \u0275cmp = e.\u0275\u0275defineComponent({ type: o, selectors: [["app-houses-pickup-overlay"]], decls: 2, vars: 0, template: function (a, u) { a & 1 && (e.\u0275\u0275domElementStart(0, "h3"), e.\u0275\u0275text(1, "Covenant Avenue 14"), e.\u0275\u0275domElementEnd()); }, styles: ["[_nghost-%COMP%]{background:#000;background:linear-gradient(90deg,#000000d9,#0009);display:block;box-shadow:0 48px 144px #000000d2,0 12px 36px #00000086;padding:0 1rem;margin-left:auto;margin-right:auto}"] });
};
import * as s from "@angular/core";
var i = class o {
    overlay = l(p);
    overlayRef;
    handleMessage(t) { switch (c() && console.log("Received message", t), t.type) {
        case "houses:entrance:hover":
            this.showPickupOverlay();
            break;
        case "houses:entrance:unhover":
            this.hidePickupOverlay();
            break;
    } }
    showPickupOverlay() { this.overlayRef?.hasAttached() || (this.overlayRef = this.overlay.create({ width: "600px", panelClass: "overlay-panel-enter", positionStrategy: this.overlay.position().global().centerHorizontally().bottom("100px") }), this.overlayRef.attach(new n(r))); }
    hidePickupOverlay() { this.overlayRef?.dispose(), this.overlayRef = void 0; }
    static \u0275fac = function (a) { return new (a || o); };
    static \u0275prov = s.\u0275\u0275defineInjectable({ token: o, factory: o.\u0275fac, providedIn: "root" });
};
export { i as NuiHandler };
