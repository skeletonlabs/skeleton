import path from 'node:path';
import { transpileCssToJs } from './compile-css-to-js.js';
import { mkdir, writeFile } from 'fs/promises';

const INTELLISENSE_FILE_NAME = 'generated-classes.cjs';
const GENERATED_DIR_PATH = path.resolve('src', 'plugin', 'generated');

async function exec() {
  // Makes directory that stores our generated CSS-in-JS
  await mkdir(GENERATED_DIR_PATH).catch(() => {
    // directory already exists
  });

  const componentPath = path.resolve('src', 'plugin', 'components', 'index.css');
  const componentClasses = await transpileCssToJs(componentPath);

  const basePath = path.resolve('src', 'plugin', 'base', 'index.css');
  const baseStyles = await transpileCssToJs(basePath);

  // Creates the generated CSS-in-JS file
  await writeFile(
    path.join(GENERATED_DIR_PATH, INTELLISENSE_FILE_NAME),
    `module.exports = { components: ${JSON.stringify(componentClasses)}, base: ${JSON.stringify(baseStyles)} };`
  ).catch((e) => console.error(e));
}

exec();
