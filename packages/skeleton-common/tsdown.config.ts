import { defineConfig } from 'tsdown';
import Raw from 'unplugin-raw/rolldown';
import Macros from 'unplugin-macros/rolldown';

export default defineConfig({
	logLevel: 'silent',
	unbundle: true,
	copy: ['src/index.css'],
	plugins: [Raw(), Macros()]
});
