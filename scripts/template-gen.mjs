import { SkeletonOptions, createSkeleton } from '../packages/create-skeleton-app/src/creator.js'

let opts = new SkeletonOptions()

opts.templatepath = 'packages/create-skeleton-app/templates';
opts.quiet = true;
opts.monorepo = true;

opts.name = 'barebones';
opts.skeletontemplate = 'bare';
opts.path = 'templates/bare';
await createSkeleton(opts);

opts.name = 'appshell-starter'
opts.skeletontemplate = 'welcome';
opts.path = 'templates/appshell-starter';
await createSkeleton(opts);