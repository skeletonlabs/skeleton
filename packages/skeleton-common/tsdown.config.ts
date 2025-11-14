import { defineConfig } from 'tsdown';
import Macros from 'unplugin-macros/rolldown';
import Raw from 'unplugin-raw/rolldown';

export default defineConfig({
	logLevel: 'error',
	copy: ['src/index.css'],
	plugins: [Raw(), Macros()],
});
