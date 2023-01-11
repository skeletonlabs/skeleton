#!/usr/bin/env node
import { del } from 'edit-package-json';
import { readFileSync, rmSync, writeFileSync } from 'fs';

//We chop out the exports field of ../package.json rather than manipulate the one in ../package/package.json in case there
//are changes to the behaviour of 'vite build'.  post-build.js will patch it back in so that monorepos work again.
writeFileSync('package.json', del(readFileSync('package.json').toString(), 'exports'));

try {
	// We'll delete the .temp directory to force the regeneration of all of the TW Classes
	rmSync('.temp', { recursive: true });
} catch {
	// Directory doesn't exist, don't worry about it
}
