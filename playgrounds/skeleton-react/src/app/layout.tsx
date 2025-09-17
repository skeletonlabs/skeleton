import './globals.css';
import LightSwitch from './light-switch';
import { globSync } from 'node:fs';
import { sep, relative, basename, dirname } from 'node:path';

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	function kebabToPascalCase(str: string) {
		return str
			.split('-')
			.map((part) => part.charAt(0).toUpperCase() + part.slice(1))
			.join('');
	}

	const components = globSync('./**/components/*/page.tsx').map((route) => {
		const name = kebabToPascalCase(basename(dirname(route)));
		const href = '/' + relative('src/app', dirname(route)).split(sep).join('/');
		return { href, name };
	});
	return (
		<html lang="en" data-theme="cerberus" suppressHydrationWarning>
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
