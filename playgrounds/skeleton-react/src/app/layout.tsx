'use client';

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
								<a className="anchor" href="/components/app-bar">
									App Bar
								</a>
								<a className="anchor" href="/components/file-upload">
									File Upload
								</a>
								<a className="anchor" href="/components/navigation">
									Navigation
								</a>
								<a className="anchor" href="/components/rating">
									Rating
								</a>
								<a className="anchor" href="/components/pagination">
									Pagination
								</a>
								<a className="anchor" href="/components/progress">
									Progress
								</a>
								<a className="anchor" href="/components/progress-ring">
									Progress Rings
								</a>
								<a className="anchor" href="/components/segment">
									Segment
								</a>
								<a className="anchor" href="/components/slider">
									Slider
								</a>
								<a className="anchor" href="/components/switch">
									Switch
								</a>
								<a className="anchor" href="/components/tabs">
									Tabs
								</a>
								<a className="anchor" href="/components/tags-input">
									Tags Input
								</a>
								<a className="anchor" href="/components/toast">
									Toast
								</a>
							</nav>
						</div>
						{/* Composed (Experimental) */}
						<div className="space-y-8">
							<span className="block font-bold">Composed (Experimental)</span>
							<nav className="text-sm flex flex-col gap-2">
								<a className="anchor" href="/composed/accordion">
									Accordion
								</a>
								<a className="anchor" href="/composed/avatar">
									Avatar
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
