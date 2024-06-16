import { defineConfig, type Options } from 'tsup';

const base: Options = {
  sourcemap: true,
  dts: true,
  clean: true,
  // treeshake: false,
  // noExternal: [],
  // skipNodeModulesBundle: true,
  ignoreWatch: ['src/plugin/generated']
};

export default defineConfig([
  {
    // plugin
    ...base,
    entry: ['src/plugin/index.ts'],
    outDir: 'dist/plugin',
    format: ['cjs'],
    tsconfig: 'src/plugin/tsconfig.json'
  },
  {
    // themes
    ...base,
    entry: ['src/plugin/themes/index.ts'],
    outDir: 'dist/themes',
    format: ['esm'],
    tsconfig: 'src/plugin/tsconfig.json'
  },
  {
    // core
    ...base,
    entry: ['src/core/index.ts'],
    outDir: 'dist/core',
    format: ['esm'],
    tsconfig: 'src/core/tsconfig.json'
  }
]);
