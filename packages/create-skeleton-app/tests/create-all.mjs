import {createSkeleton, SkeletonOptions} from '../src/creator.js';

let opts = new SkeletonOptions();
opts.skeletontemplate = 'bare';
opts.path = './tests/generated/';
opts.name = 'gen-bare';
await createSkeleton(opts);