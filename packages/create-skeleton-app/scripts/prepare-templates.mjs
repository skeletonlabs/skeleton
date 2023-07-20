// copy the src, static, csa-meta.json directories and files from templates/* directory to the local template directory
import fs from 'fs';
import { join } from 'path';
import { dist } from '../src/utils.js';
import fg from 'fast-glob';
import { zip, COMPRESSION_LEVEL } from 'zip-a-folder';

async function copyTemplates() {
	const basePath = dist('../../../templates')
	const metaFiles = fg.sync(['**/csa-meta.json'], { cwd: basePath , deep:2 })
	metaFiles.forEach(async (metaFile) => {
		const csaMeta = JSON.parse(fs.readFileSync(join(basePath, metaFile), 'utf8'));
		if (!csaMeta.enabled ) return;
		if (csaMeta.type == "premium") {
			//zip up the template and put it in the dist directory
			const errHandler = (e) => { if (e) console.error(e.message) }
			await fs.rm(join(basePath, metaFile, '..', 'node_modules'), { recursive: true }, errHandler);
			await zip(join(basePath, metaFile, '..'), join(basePath, metaFile.split('/')[0] + '.zip'), COMPRESSION_LEVEL.high);
		} else {
			//copy the folders that are specified in the csa-meta.json
			csaMeta?.foldersToCopy?.forEach((folder) => {
				fs.cpSync(join(basePath, metaFile, '..', folder), join(`./templates/${metaFile.split('/')[0]}`, folder), { recursive: true });
			});
			//copy the csa-meta.json file
			fs.cpSync(join(basePath, metaFile), join(`./templates/${metaFile}`));
		}
	});
}

await copyTemplates();
