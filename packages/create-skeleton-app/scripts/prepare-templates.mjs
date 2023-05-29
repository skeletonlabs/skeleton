// copy the src, static, csa-meta.json directories and files from templates/* directory to the local template directory
import fs from 'fs';

function copyTemplates(){
    console.log(process.cwd());
    //get all folders in ../../templates directory
    fs.readdirSync('../../templates').forEach(file => {
        console.log(file);
        fs.cpSync(`../../templates/${file}/src/`, `./templates/${file}/src/`, {recursive: true});
        fs.rmSync(`./templates/${file}/src/app.d.ts`);
        fs.rmdirSync(`./templates/${file}/src/lib/`, {recursive: true});

        fs.cpSync(`../../templates/${file}/static/`, `./templates/${file}/static/`, {recursive: true});
        fs.cpSync(`../../templates/${file}/csa-meta.json`, `./templates/${file}/csa-meta.json`);
    });
}

copyTemplates();