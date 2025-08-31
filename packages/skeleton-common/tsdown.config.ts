import { defineConfig } from 'tsdown';
import Raw from 'unplugin-raw/rolldown';
import Macros from 'unplugin-macros/rolldown';

export default defineConfig({
	copy: ['src/index.css'],
	plugins: [Raw(), Macros()]
});
