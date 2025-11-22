/// <reference types="vite/client" />
import appCss from '../app.css?url';
import LightSwitch from '../components/light-switch';
import { createRootRoute, Outlet, Scripts, HeadContent } from '@tanstack/react-router';

export const Route = createRootRoute({
	head: () => ({
		meta: [
			{ charSet: 'utf-8' },
			{
				name: 'viewport',
				content: 'width=device-width, initial-scale=1',
			},
			{ title: 'Skeleton React Playground' },
		],
		links: [
			{
				rel: 'stylesheet',
				href: appCss,
			},
		],
	}),
	component: RootLayout,
});

function RootLayout() {
	const components = Object.keys(import.meta.glob('/src/routes/components/*/index.tsx')).map((path) => {
		const href = path.replace('/src/routes', '').replace('/index.tsx', '');
		const name = href
			.split('/')
			.pop()!
			.split('-')
			.map((str) => str.charAt(0).toUpperCase() + str.slice(1))
			.join(' ');
		return { href, name };
	});

	return (
		<html lang="en" data-theme="cerberus">
			<head>
				<HeadContent />
			</head>
			<body>
				<div className="grid h-screen grid-cols-[320px_minmax(0,1fr)]">
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
					<main className="overflow-y-auto p-8">
						<Outlet />
					</main>
				</div>
				<Scripts />
			</body>
		</html>
	);
}
