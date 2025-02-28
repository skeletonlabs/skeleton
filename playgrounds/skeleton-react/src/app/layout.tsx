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

	function onModeChange(newValue: boolean) {
		setLightswitch(newValue);
		document.documentElement.classList.toggle('dark');
	}

	return (
		<html lang="en" className="dark" data-theme="cerberus">
			<body>
				<div className="grid h-screen grid-cols-[320px_minmax(0,_1fr)]" data-testid="app">
					{/* Nav */}
					<div className="bg-surface-100-900 space-y-8 overflow-y-auto p-8">
						<a className="text-sm bg-blue-500 p-2 font-mono font-bold text-white" href="/">
							skeleton-react
						</a>
						<hr className="hr" />
						<Switch
							name="mode"
							controlActive="bg-surface-200"
							checked={lightswitch}
							onCheckedChange={(e) => onModeChange(e.checked)}
							inactiveChild={<IconMoon size="14" />}
							activeChild={<IconSun size="14" />}
						>
							<p>Toggle Mode</p>
						</Switch>
						<hr className="hr" />
						{/* Components */}
						<div className="space-y-8">
							<span className="font-bold">Components</span>
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
								<a className="anchor" href="/components/progress-rings">
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
