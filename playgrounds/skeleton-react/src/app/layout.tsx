import LightSwitch from './light-switch';
import './globals.css';

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" data-theme="cerberus" suppressHydrationWarning={true}>
			<body>
				<div className="grid h-screen grid-cols-[320px_minmax(0,_1fr)]" data-testid="app">
					{/* Nav */}
					<div className="bg-surface-100-900 space-y-8 overflow-y-auto p-8">
						<header>
							<a className="text-sm bg-blue-500 p-2 font-mono font-bold text-white" href="/">
								skeleton-react
							</a>
						</header>
						<hr className="hr" />
						<LightSwitch></LightSwitch>
						<hr className="hr" />
						{/* Components */}
						<div className="space-y-8">
							<div className="font-bold">Components</div>
							<nav className="text-sm flex flex-col gap-2">
								<a className="anchor" href="/components/accordion">
									Accordion
								</a>
								<a className="anchor" href="/components/avatar">
									Avatar
								</a>
								<a className="anchor" href="/components/rating-group">
									Rating Group
								</a>
								<a className="anchor" href="/components/tabs">
									Tabs
								</a>
							</nav>
						</div>
					</div>
					{/* Page */}
					<main className="overflow-y-auto p-8">{children}</main>
				</div>
			</body>
		</html>
	);
}
