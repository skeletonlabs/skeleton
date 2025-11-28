import { defineConfig } from 'tsdown';
import Macros from 'unplugin-macros/rolldown';
import Raw from 'unplugin-raw/rolldown';

export default defineConfig({
	logLevel: 'error',
	dts: true,
	entry: 'src/classes.ts',
	copy: ['src/index.css'],
	plugins: [Raw(), Macros()],
});
