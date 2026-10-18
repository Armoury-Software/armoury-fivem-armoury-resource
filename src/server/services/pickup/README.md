# Pickups

Inject `PickupService` and create pickups on the server:

```ts
const id = pickups.create([247.83, -343.2, 44.46], 'PICKUP_CUSTOM_SCRIPT', {
  modelHash: 'prop_ld_health_pack',
  rotating: true,
  destroyOnCollect: false,
  rearmRadius: 2,
});

// Removes the definition, its zone, and every streamed client instance.
pickups.remove(id);
```

`create(position, pickupHash, options)` returns a pickup ID. Options default to
`rotating: false`, `destroyOnCollect: true`, `rearmRadius: 2`, and `value: 0`.
`modelHash` is required for persistent visuals; provide it for custom-script
pickups as well. Hashes accept either a name or a number. `value` is passed to
the native (for example, an ammunition amount).

Every pickup owns a sphere zone with radius 50. ZoneService allocates its ID
from unused negative IDs. Do not overwrite those generated zones manually.
Nearby zone snapshots contain geometry only; pickup definitions are sent to
individual players after verifying that they are inside the sphere. A client
retains only streamed pickups. Native objects and model references are released
on exit, deletion, and resource stop. Static pickups do not need a rotation loop;
the shared frame callback stops entirely when no pickups are streamed.

Collection is detected by `HasPickupBeenCollected`, never by distance alone.
The client emits `armoury:unsafe:pickup:collect` with the pickup ID once, removes
the collected native handle, and waits until the player leaves `rearmRadius`
before creating another native pickup. The 50-unit streaming zone is unrelated
to rearming. `rearmRadius` is an explicit exit threshold, **not a native API for
changing GTA's collection radius**: choose a value at least as large as the
selected pickup type's collectable area.

For persistent visuals, a local `CreateObject` model remains visible while the
native pickup's own object is hidden. The separate object never emits collection
events. Rotation uses the native pickup flag for ordinary pickups and updates
the separate object's heading for persistent visuals.
