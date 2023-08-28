// copy the src, static, csa-meta.json directories and files from templates/* directory to the local template directory
import fs from 'fs';
import { join } from 'path';
import { dist } from '../src/utils.js';
import fg from 'fast-glob';
import archiver from 'archiver';

async function copyTemplates() {
	const basePath = dist('../../../templates');
	const metaFiles = fg.sync(['**/csa-meta.json'], { cwd: basePath, deep: 2 });
	metaFiles.forEach(async (metaFile) => {
		const csaMeta = JSON.parse(fs.readFileSync(join(basePath, metaFile), 'utf8'));
		if (!csaMeta.enabled) return;
		if (csaMeta.type == 'premium') {
			//zip up the template and put it in the dist directory
			zipFolder(join(basePath, metaFile, '..'), join(basePath, metaFile.split('/')[0] + '.zip'));
		} else {
			//copy the folders that are specified in the csa-meta.json
			csaMeta?.foldersToCopy?.forEach((folder) => {
				fs.cpSync(join(basePath, metaFile, '..', folder), join('templates', metaFile.split('/')[0], folder), {
					recursive: true,
				});
			});
			//copy the csa-meta.json file
			fs.cpSync(join(basePath, metaFile), join('templates', metaFile));
			// remove the fonts folder and font css from app.postcss that was required for testing
			fs.rmSync(join('templates', metaFile.split('/')[0], 'static', 'fonts'), { recursive: true });
			let appPostcss = fs.readFileSync(join('templates', metaFile.split('/')[0], 'src', 'app.postcss'), 'utf8');
			appPostcss = appPostcss.replace(/\/\*[\s\S]*?\*\/[\s\S]*$/g, '');
			fs.writeFileSync(join('templates', metaFile.split('/')[0], 'src', 'app.postcss'), appPostcss);
		}
	});
}

function zipFolder(sourceFolder, outputFile) {
	const output = fs.createWriteStream(outputFile);
	output.on('close', function () {
		console.log('done writing: ' + archive.pointer() + ' total bytes');
	});
	const archive = archiver('zip');
	archive.on('error', function (err) {
		throw err;
	});
	archive.glob('**/*', { cwd: sourceFolder, ignore: ['**/node_modules/**', '**/.git/**'] });
	archive.pipe(output);
	archive.finalize();
}

copyTemplates();
