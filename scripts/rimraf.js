import { rimraf } from 'rimraf';

// quick clean of node_modules, dist, .svelte-kit and other artefact folders
function cleanRepo() {
	let curDir = process.cwd();
	console.log(curDir);
	rimraf.sync(['**/node_modules/', '**/dist/', '**/.svelte-kit/'], { glob: true });
}

cleanRepo();
