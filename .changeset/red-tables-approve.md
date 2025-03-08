---
'@skeletonlabs/skeleton-cli': patch
---

Bugfix (migrate/skeleton-3): Partially reverts the previous change to `hasRange` and checks for empty strings instead as it's more consistent in the cases where we're preserving quotes.
