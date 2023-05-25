#!/usr/bin/env node
import isCI from 'is-ci';
import { readFileSync, writeFileSync } from 'fs';
import { execSync } from 'child_process';

// no it can't be run on preinstall
// no it can't be a nice little npm package
// yes it's running install twice
// yes it's a hack
// but it works (on Vercel at least)

export function makeWorkspacePackageLinks(pkg) {
	if (pkg?.deployConfig?.dependencies != undefined) {
		for (const [dep, version] of Object.entries(pkg.deployConfig.dependencies)) {
			pkg.dependencies[dep] = 'workspace:^';
		}
	}
	if (pkg?.deployConfig?.devDependencies != undefined) {
		for (const [devDep, version] of Object.entries(pkg.deployConfig.devDependencies)) {
			pkg.devDependencies[devDep] = 'workspace:^';
		}
	}
	if (pkg?.deployConfig?.peerDependencies != undefined) {
		for (const [peerDep, version] of Object.entries(pkg.deployConfig.dependencies)) {
			pkg.peerDependencies[peerDep] = 'workspace:^';
		}
	}
}

export function makeVersionedPackageLinks(pkg) {
	let clean = true;
	if (pkg?.deployConfig?.dependencies != undefined) {
		for (const [dep, version] of Object.entries(pkg.deployConfig.dependencies)) {
			if (pkg.dependencies[dep] !== version) {
				pkg.dependencies[dep] = version;
				clean = false;
			}
		}
	}
	if (pkg?.deployConfig?.devDependencies != undefined) {
		for (const [devDep, version] of Object.entries(pkg?.deployConfig?.devDependencies)) {
			if (pkg?.devDependencies[devDep] !== version) {
				pkg.devDependencies[devDep] = version;
				clean = false;
			}
		}
	}
	if (pkg?.deployConfig?.peerDependencies != undefined) {
		for (const [peerDep, version] of Object.entries(pkg?.deployConfig?.devDependencies)) {
			if (pkg?.peerDependencies[peerDep] !== version) {
				pkg.peerDependencies[peerDep] = version;
				clean = false;
			}
		}
	}
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
