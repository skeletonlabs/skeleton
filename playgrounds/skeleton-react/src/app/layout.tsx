import './globals.css';
import LightSwitch from './light-switch';

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
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
								<a className="anchor" href="/components/accordion">
									Accordion
								</a>
								<a className="anchor" href="/components/avatar">
									Avatar
								</a>
								<a className="anchor" href="/components/progress-linear">
									Progress Linear
								</a>
								<a className="anchor" href="/components/file-upload">
									File Upload
								</a>
								<a className="anchor" href="/components/rating-group">
									Rating Group
								</a>
								<a className="anchor" href="/components/segmented-control">
									Segmented Control
								</a>
								<a className="anchor" href="/components/switch">
									Switch
								</a>
								<a className="anchor" href="/components/tabs">
									Tabs
								</a>
								<a className="anchor" href="/components/toast">
									Toast
								</a>
							</nav>
						</div>
					</div>
					<main className="overflow-y-auto p-8">{children}</main>
				</div>
			</body>
		</html>
	);
}
