import postcss from 'postcss';
import postcssJs from 'postcss-js';
import { readFileSync } from 'node:fs';
import postcssImport from 'postcss-import';

// Transpiles all of our library's CSS to JS
export async function transpileCssToJs(cssEntryPath: string) {
  const css = readFileSync(cssEntryPath, 'utf8');

  const result = await postcss([postcssImport()]).process(css, { from: cssEntryPath });
  if (result.root.type === 'document') throw Error('This should never happen');

  const cssInJs = postcssJs.objectify(result.root);

  return cssInJs;
}
