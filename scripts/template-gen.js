import { SkeletonOptions, createSkeleton } from 'create-skeleton-app'

let opts = new SkeletonOptions()
opts.name = 'bare';
opts.packagemanager = 'pnpm';
opts.templatepath = 'packages/create-skeleton-app/templates';
opts.quiet = true;
opts.monorepo = true;
createSkeleton(opts);