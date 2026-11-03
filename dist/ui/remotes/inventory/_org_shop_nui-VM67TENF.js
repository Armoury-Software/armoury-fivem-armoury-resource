import "@nf-internal/chunk-2NFLSA4Y";
import { HttpClient as a } from "@angular/common/http";
import { inject as p, isDevMode as u } from "@angular/core";
import { LRUCache as g } from "lru-cache";
import { firstValueFrom as m, map as c } from "rxjs";
import * as l from "@angular/core";
var r = class o {
    items = new g({ max: 256 });
    http = p(a);
    pendingRequests = new Map;
    getItemDefinition(e) { if (e !== null && this.items.has(e))
        return Promise.resolve(this.items.get(e)); let s = this.pendingRequests.get(e); if (s)
        return s; let i = m(u() ? this.http.get("/dev/items/items.json").pipe(c(t => t.find(n => typeof n == "object" && n !== null && "id" in n && n.id === e) ?? null)) : this.http.post("https://armoury-roleplay/getItemDefinition", { itemIdentifier: e })).then(t => (e !== null && t != null && this.items.set(e, t), t)).finally(() => { this.pendingRequests.delete(e); }); return this.pendingRequests.set(e, i), i; }
    static \u0275fac = function (s) { return new (s || o); };
    static \u0275prov = l.\u0275\u0275defineInjectable({ token: o, factory: o.\u0275fac, providedIn: "root" });
};
export { r as ItemRegistry };
