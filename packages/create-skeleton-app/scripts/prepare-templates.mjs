// copy the src, static, csa-meta.json directories and files from templates/* directory to the local template directory
import fs from 'fs';
import { join } from 'path';

function copyTemplates() {
	fs.readdirSync('../../templates').forEach((template) => {
		const basePath = `../../templates/${template}`;
		if (!fs.existsSync(join(basePath, 'csa-meta.json'))) return;
		//read csa-meta.json
		const csaMeta = JSON.parse(fs.readFileSync(join(basePath, 'csa-meta.json'), 'utf8'));
		if (!csaMeta.enabled || csaMeta.type == "premium") return;
		//copy the folders that are specified in the csa-meta.json
		csaMeta?.foldersToCopy?.forEach((folder) => {
			fs.cpSync(join(basePath, folder), join(`./templates/${template}`, folder), { recursive: true });
		});
		//copy the csa-meta.json file
		fs.cpSync(join(basePath, 'csa-meta.json'), join(`./templates/${template}`, 'csa-meta.json'));
	});
}

copyTemplates();
