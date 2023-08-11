import { readFileSync, access, existsSync } from 'fs';
import { fileURLToPath, URL } from 'url';
import { exec } from 'child_process';

async function cloneRepository(repoUrl, targetFolder) {
    let projectName = repoUrl.substring(repoUrl.lastIndexOf('/') + 1);
    if (!repoUrl.includes('://')) repoUrl = `https://github.com/${repoUrl}.git`;
    if (existsSync(targetFolder) && !existsSync(`${targetFolder}/${projectName}`)) {
        targetFolder = `${targetFolder}/${projectName}`;
    } else {
        return new Promise((resolve, reject) => { reject(`Folder ${targetFolder}/${projectName} already exists`) });
    }
    try {
        const command = `git clone ${repoUrl} ${targetFolder}`;
        await new Promise((resolve, reject) => {
            exec(command, (error) => {
                if (error) {
                    reject(error);
                } else {
                    resolve();
                }
            });
        });
    } catch (error) {
        console.error(`Error occurred during cloning of ${repoUrl}:`, error);
    }
}

async function cloneRepositories() {
    const repos = JSON.parse(readFileSync(fileURLToPath(new URL(`../repos.json`, import.meta.url).href), 'utf8'));
    try {
        const clonePromises = Object.entries(repos).map(([repoUrl, targetFolder]) => cloneRepository(repoUrl, targetFolder));
        const results = await Promise.allSettled(clonePromises);
        const successfulClones = results.filter((result) => result.status === 'fulfilled');
        const failedClones = results.filter((result) => result.status === 'rejected');
        if (successfulClones.length) console.log(`Cloned ${successfulClones.length} repositories successfully`);
        if (failedClones.length) console.log(`${failedClones.length} repositories already cloned`);
    } catch (error) {
        console.error('Error occurred during cloning:', error);
    }
}

await cloneRepositories();