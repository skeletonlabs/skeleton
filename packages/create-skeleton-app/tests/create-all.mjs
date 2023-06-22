import { createSkeleton, SkeletonOptions } from '../src/creator.js';
import { spawnSync } from 'child_process';
import { rmdirSync } from 'fs';

rmdirSync('./tests/generated', { recursive: true, force: true });
const themes = [
    'skeleton',
    'modern',
    'hamlindigo',
    'rocket',
    'sahara',
    'gold-nouveau',
    'vintage',
    'seafoam',
    'crimson'];
const templates = ['bare', 'appshell-starter'];
for (const template of templates) {
    for (const theme of themes) {
        let opts = new SkeletonOptions();
        opts.skeletontemplate = template;
        opts.skeletontheme = theme;
        opts.playwright = true;
        opts.path = `./tests/generated/${template}-${theme}`;
        await createSkeleton(opts);
    }
}

const rawDeps = spawnSync('pnpm', ['--filter', 'new-skel-app', 'i'])