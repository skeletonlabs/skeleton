import sdk from '@stackblitz/sdk';

const appCss = `
@import "tailwindcss";
@import "@skeletonlabs/skeleton";
@import "@skeletonlabs/skeleton-react";
@import "@skeletonlabs/skeleton/themes/cerberus";
`.trim();

const mainTsx = `
import './app.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './app.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
`.trim();

const indexHtml = `
<!doctype html>
<html lang="en" data-theme="cerberus">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
`.trim();

const packageJson = JSON.stringify(
	{
		name: 'skeleton-react',
		scripts: {
			dev: 'vite',
		},
		dependencies: {
			react: '^19',
			'react-dom': '^19',
		},
		devDependencies: {
			'@faker-js/faker': '^10',
			'@skeletonlabs/skeleton': '^4',
			'@skeletonlabs/skeleton-react': '^4',
			'@tailwindcss/vite': '^4',
			'@types/node': '^24',
			'@types/react': '^19',
			'@types/react-dom': '^19',
			'@vitejs/plugin-react': '^5',
			'lucide-react': '^0',
			tailwindcss: '^4',
			typescript: '^5',
			vite: '^7',
		},
		type: 'module',
	},
	null,
	2,
);

const tsconfigJson = JSON.stringify(
	{
		compilerOptions: {
			target: 'ES2022',
			useDefineForClassFields: true,
			lib: ['ES2022', 'DOM', 'DOM.Iterable'],
			module: 'ESNext',
			types: ['vite/client'],
			skipLibCheck: true,
			moduleResolution: 'bundler',
			allowImportingTsExtensions: true,
			verbatimModuleSyntax: true,
			moduleDetection: 'force',
			noEmit: true,
			jsx: 'react-jsx',
		},
		include: ['src'],
	},
	null,
	2,
);

const viteConfigTs = `
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [tailwindcss(), react()],
})
`.trim();

export function openReactStackblitzProject(files: Record<string, string>) {
	const srcFiles = Object.fromEntries(Object.entries(files).map(([key, value]) => [`src/${key}`, value]));

	sdk.openProject(
		{
			title: 'Skeleton React',
			template: 'node',
			files: {
				'src/app.css': appCss,
				'src/main.tsx': mainTsx,
				...srcFiles,
				'index.html': indexHtml,
				'package.json': packageJson,
				'tsconfig.json': tsconfigJson,
				'vite.config.ts': viteConfigTs,
			},
		},
		{
			openFile: 'src/app.tsx',
			showSidebar: false,
		},
	);
}
