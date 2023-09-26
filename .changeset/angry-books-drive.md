---
"create-skeleton-app": patch
---

CSA: Fix relative pathing and network handling:

- On windows when creating a custom theme, there was a writing issues due to how windows handled relative pathing
- If CSA was unable to download content from github, it could leave the install in an incomplete state. Fetching is now left to the end of the install process.
