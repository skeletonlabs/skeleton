'use client';

import { Switch } from '@skeletonlabs/skeleton-react';
import { Moon as IconMoon, Sun as IconSun } from 'lucide-react';
import './globals.css';
import { useState } from 'react';

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	const [lightswitch, setLightswitch] = useState(false);

	return (
		<html className={`${lightswitch && 'dark'}`} lang="en" data-theme="cerberus">
			<body>
				<div className="grid h-screen grid-cols-[320px_minmax(0,_1fr)]" data-testid="app">
					{/* Nav */}
					<div className="bg-surface-100-900 space-y-8 overflow-y-auto p-8">
						<a className="type-scale-3 bg-blue-500 p-2 font-mono font-bold text-white" href="/">
							skeleton-react
						</a>
						<hr className="hr" />
						<Switch
							name="mode"
							controlActive="bg-surface-200"
							checked={lightswitch}
							onCheckedChange={setLightswitch}
							inactiveChild={<IconMoon size="14" />}
							activeChild={<IconSun size="14" />}
						>
							<p>Toggle Mode</p>
						</Switch>
						<hr className="hr" />
						{/* Components */}
						<div className="space-y-8">
							<span className="font-bold">Components</span>
							<nav className="type-scale-2 flex flex-col gap-2">
								<a className="anchor" href="/components/accordions">
									Accordions
								</a>
								<a className="anchor" href="/components/avatars">
									Avatars
								</a>
								<a className="anchor" href="/components/app-bars">
									App Bars
								</a>
								<a className="anchor" href="/components/file-upload">
									File Upload
								</a>
								<a className="anchor" href="/components/navigation">
									Navigation
								</a>
								<a className="anchor" href="/components/ratings">
									Ratings
								</a>
								<a className="anchor" href="/components/pagination">
									Pagination
								</a>
								<a className="anchor" href="/components/progress">
									Progress
								</a>
								<a className="anchor" href="/components/progress-rings">
									Progress Rings
								</a>
								<a className="anchor" href="/components/segment-control">
									Segment Control
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
