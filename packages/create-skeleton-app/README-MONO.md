# create-skeleton-app

This is a special multi-repo version of the site created by CSA.

Differences from a normal CSA site:
- Vite alias to the @skeletonlabs/skeleton project
- Removed @skeletonlabs/skeleton from package.json
- Added Vercel deploy command to package.json

At this point it only supports deploying to Vercel.

## Reminder
Since you have just created this site with `pnpm site <foo>`, make sure to `git init`, `git add .`, `gh repo create` and run `pnpm dev` at least once so that the alias gets setup in .svelte-kit

## Deploying a site to Vercel
Repos that are not part of the main Skeleton repo will not work independently of the monorepo due to the adjustments to the @skeletonlabs/skeleton package noted above.  Therefore to deploy a site, it is necessary to take advantage of the `vercel build` and `vercel deploy` of a local production build (or you can have fun setting up a GH deploy pipeline)

```bash
# ensure you have the vercel cli tool
pnpm i -g vercel
```

Two scripts have been added to package.json