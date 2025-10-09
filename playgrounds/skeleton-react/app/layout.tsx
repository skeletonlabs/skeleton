import './app.css';
import LightSwitch from './light-switch';
import { globSync } from 'node:fs';
import { sep, relative, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	function capitalize(str: string) {
		return str.charAt(0).toUpperCase() + str.slice(1);
	}

	const components = globSync('./components/*/page.tsx', {
		cwd: dirname(fileURLToPath(import.meta.url)),
	})
		.toSorted((a, b) => a.localeCompare(b))
		.map((route) => {
			const href = '/' + relative('src/app', dirname(route)).split(sep).join('/');
			const name = href.split('/').pop()!.split('-').map(capitalize).join(' ');
			return { href, name };
		});
	return (
		<html lang="en" data-theme="cerberus" suppressHydrationWarning>
			<head>
				<link rel="icon" href="favicon.png" />
			</head>
			<body>
				<div className="grid h-screen grid-cols-[320px_minmax(0,_1fr)]">
					<div className="bg-surface-100-900 p-8 flex flex-col gap-8">
						<header className="flex justify-between items-center">
							<a className="inline-block text-sm bg-blue-500 p-2 font-mono font-bold text-white" href="/">
								skeleton-react
							</a>
							<LightSwitch />
						</header>
						<hr className="hr" />
						<div className="flex flex-col gap-4">
							<div className="font-bold">Components</div>
							<nav className="text-sm flex flex-col gap-1">
								{components.map((component) => (
									<a key={component.href} className="anchor" href={component.href}>
										{component.name}
									</a>
								))}
							</nav>
						</div>
					</div>
					<main className="overflow-y-auto p-8">{children}</main>
				</div>
			</body>
		</html>
	);
}
