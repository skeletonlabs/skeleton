#!/usr/bin/env node
import isCI from 'is-ci';
import { readFileSync, writeFileSync } from 'fs';
import { execSync } from 'child_process';

export function makeWorkspacePackageLinks(pkg) {
	['dependencies', 'devDependencies', 'peerDependencies'].forEach((depType) => {
		if (pkg?.deployConfig[depType] != undefined) {
			for (const [dep, version] of Object.entries(pkg.deployConfig[depType])) {
				pkg[depType][dep] = 'workspace:^';
			}
		}
	});
}

export function makeVersionedPackageLinks(pkg) {
	let clean = true;
	['dependencies', 'devDependencies', 'peerDependencies'].forEach((depType) => {
		if (pkg?.deployConfig[depType] != undefined) {
			for (const [dep, version] of Object.entries(pkg.deployConfig[depType])) {
				if (pkg[depType][dep] !== version) {
					pkg[depType][dep] = version;
					clean = false;
				}
			}
		}
	});
	return { pkg: pkg, clean: clean };
}

export function swapdeps() {
	let pkg = JSON.parse(readFileSync('./package.json', 'utf8'));
	let clean = true;

	switch (process.argv.slice(2)[0]) {
		case 'workspace':
			console.log('Setting dependencies to workspace:^');
			makeWorkspacePackageLinks(pkg);
			break;
		case 'versioned':
			console.log('Setting dependencies to versioned');
			makeVersionedPackageLinks(pkg);
			break;
		case '-h':
		case 'h':
		case '--help':
		case 'help':
			console.log(
				'swapdeps [workspace|versioned] or no args for auto-change to versioned if in a CI environment or workspace links if not',
			);
			break;
		default:
			if (isCI) {
				({ pkg, clean } = makeVersionedPackageLinks(pkg));
			} else {
				console.log('No CI detected, setting dependencies to workspace:^');
				makeWorkspacePackageLinks(pkg);
			}
	}
	writeFileSync('./package.json', JSON.stringify(pkg, null, 2), 'utf8');
	if (clean === false) {
		execSync('pnpm install --no-frozen-lockfile');
	}
}

swapdeps();
