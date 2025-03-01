---
"@skeletonlabs/skeleton-cli": patch
---

Bugfix (migrate/skeleton-3): Switch from `property in object` to `Object.hasOwn` so inherited properties aren't included.
