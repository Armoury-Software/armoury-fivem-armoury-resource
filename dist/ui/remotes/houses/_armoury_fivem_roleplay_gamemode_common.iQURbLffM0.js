var v = Object.defineProperty, q = Object.defineProperties;
var w = Object.getOwnPropertyDescriptors;
var p = Object.getOwnPropertySymbols;
var N = Object.prototype.hasOwnProperty, S = Object.prototype.propertyIsEnumerable;
var m = (o, t, r) => t in o ? v(o, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : o[t] = r, h = (o, t) => { for (var r in t ||= {})
    N.call(t, r) && m(o, r, t[r]); if (p)
    for (var r of p(t))
        S.call(t, r) && m(o, r, t[r]); return o; }, d = (o, t) => q(o, w(t));
var c = class {
    constructor(t, r, e, i) { this.id = t, this.lastKnownName = r, this.platformId = e, this.email = i; }
};
var f = class {
    constructor(t, r, e, i, a, s, n, l, x) { this.id = t, this.accountId = r, this.hoursPlayed = e, this.language = i, this.firstName = a, this.lastName = s, this.lastLogoutPosition = n, this.lastLogoutRotation = l, this.lastActivity = x; }
};
var u = class {
    constructor(t, r, e, i = { x: 0, y: 0, z: 0 }) { this.id = t, this.owner = r, this.position = e, this.rotation = i; }
};
var g = class {
    static toStub(t) { return { id: t.id, maxSlots: t.maxSlots, maxWeight: t.maxWeight, type: t.type, slots: t.slots }; }
};
var P = class {
    constructor(t, r, e, i, a, s, n = 0, l = 0, x = 1, L) { this.id = t, this.owner = r, this.entrance = e, this.exit = i, this.originalValue = a, this.address = s, this.sellingPrice = n, this.rentPrice = l, this.requiredLevel = x, this.metadata = d(h({}, L ?? {}), { isOwned: r != null, tenants: 0, maxTenants: 10, acceptsTenants: !0, address: s }); }
    static toStub(t) { return { id: t.id, sellingPrice: t.sellingPrice, rentPrice: t.rentPrice, requiredLevel: t.requiredLevel, metadata: t.metadata }; }
};
var y = class {
    constructor(t) { t && Object.assign(this, t); }
};
export { c as Account, y as Business, f as Character, P as House, u as Persistable, g as Stash };
