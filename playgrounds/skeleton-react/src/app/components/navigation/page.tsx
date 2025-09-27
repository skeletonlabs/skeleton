'use client';

import { Navigation } from '@skeletonlabs/skeleton-react';
import { BikeIcon } from 'lucide-react';
import { BookIcon } from 'lucide-react';
import { HouseIcon } from 'lucide-react';
import { MountainIcon } from 'lucide-react';
import { PopcornIcon } from 'lucide-react';
import { SailboatIcon } from 'lucide-react';
import { SettingsIcon } from 'lucide-react';
import { SkullIcon } from 'lucide-react';
import { TvIcon } from 'lucide-react';
import { WavesIcon } from 'lucide-react';
import { ArrowLeftRightIcon } from 'lucide-react';
import { useState } from 'react';

export default function Page() {
	const links = [
		{ label: 'Home', href: '#', icon: HouseIcon },
		{ label: 'Books', href: '#', icon: BookIcon },
		{ label: 'Movies', href: '#', icon: PopcornIcon },
		{ label: 'Television', href: '#', icon: TvIcon },
	];
	const linksSidebar = {
		entertainment: [
			{ label: 'Books', href: '#', icon: BookIcon },
			{ label: 'Movies', href: '#', icon: PopcornIcon },
			{ label: 'Television', href: '#', icon: TvIcon },
		],
		recreation: [
			{ label: 'Biking', href: '#', icon: BikeIcon },
			{ label: 'Sailing', href: '#', icon: SailboatIcon },
			{ label: 'Hiking', href: '#', icon: MountainIcon },
			{ label: 'Swimming', href: '#', icon: WavesIcon },
		],
	};

	const buttonClasses = 'btn hover:preset-tonal';
	let anchorBar = `${buttonClasses} flex-col items-center gap-1`;
	let anchorRail = `${buttonClasses} aspect-square w-full max-w-[84px] flex flex-col items-center gap-0.5`;
	let anchorSidebar = `${buttonClasses} justify-start px-2 w-full`;

	let [layoutRail, setLayoutRail] = useState(true);

	function toggleLayout() {
		setLayoutRail(!layoutRail);
	}

	return (
		<div className="space-y-10">
			<header>
				<h2 className="h2">Navigation</h2>
			</header>
			<section className="space-y-4">
				<h3 className="h3">Bar</h3>
				<div className="w-[375px] h-[667px] grid grid-rows-[1fr_auto] border border-surface-200-800">
					<div className="flex justify-center items-center">
						<p>Contents</p>
					</div>
					<Navigation layout="bar">
						<Navigation.Menu className="grid grid-cols-4 gap-2">
							{links.map((link) => {
								const Icon = link.icon;
								return (
									<a key={link.label} href={link.href} className={anchorBar}>
										<Icon className="size-5" />
										<span className="text-xs">{link.label}</span>
									</a>
								);
							})}
						</Navigation.Menu>
					</Navigation>
				</div>
			</section>

			<section className="space-y-4">
				<h3 className="h3">Rail</h3>
				<div className="w-full h-[728px] grid grid-cols-[auto_1fr] border border-surface-200-800">
					<Navigation layout="rail">
						<Navigation.Header>
							<a href="/" className={anchorRail} title="View Homepage" aria-label="View Homepage">
								<SkullIcon className="size-8" />
							</a>
						</Navigation.Header>
						<Navigation.Content>
							<Navigation.Menu>
								{links.map((link) => {
									const Icon = link.icon;
									return (
										<a key={link.label} href={link.href} className={anchorRail}>
											<Icon className="size-5" />
											<span className="text-xs">{link.label}</span>
										</a>
									);
								})}
							</Navigation.Menu>
						</Navigation.Content>
						<Navigation.Footer>
							<a href="/settings" className={anchorRail} title="Settings" aria-label="Settings">
								<SettingsIcon className="size-5" />
							</a>
						</Navigation.Footer>
					</Navigation>
					<div className="flex justify-center items-center">
						<p className="opacity-50">Contents</p>
					</div>
				</div>
			</section>

			<section className="space-y-4">
				<h3 className="h3">Sidebar</h3>
				<div className="w-full h-[728px] grid grid-cols-[auto_1fr] items-stretch border border-surface-200-800">
					<Navigation layout="sidebar" className="grid grid-rows-[auto_1fr_auto] gap-4">
						<Navigation.Header>
							<a href="https://www.skeleton.dev" className="btn-icon btn-icon-lg preset-filled-primary-500">
								<SkullIcon className="size-6" />
							</a>
						</Navigation.Header>
						<Navigation.Content>
							<Navigation.Group>
								<Navigation.Menu>
									<a href="/" className={anchorSidebar}>
										<HouseIcon className="size-4" />
										<span>Home</span>
									</a>
								</Navigation.Menu>
							</Navigation.Group>
							{Object.entries(linksSidebar).map(([category, links]) => (
								<Navigation.Group key={category}>
									<Navigation.Label className="capitalize pl-2">{category}</Navigation.Label>
									<Navigation.Menu>
										{links.map((link) => {
											const Icon = link.icon;
											return (
												<a key={link.label} className={anchorSidebar} title={link.label} aria-label={link.label}>
													<Icon className="size-4" />
													<span>{link.label}</span>
												</a>
											);
										})}
									</Navigation.Menu>
								</Navigation.Group>
							))}
						</Navigation.Content>
						<Navigation.Footer>
							<a href="/" className={anchorSidebar} title="Settings" aria-label="Settings">
								<SettingsIcon className="size-4" />
								<span>Settings</span>
							</a>
						</Navigation.Footer>
					</Navigation>
					<div className="flex justify-center items-center">
						<p className="opacity-50">Contents</p>
					</div>
				</div>
			</section>

			<section className="space-y-4">
				<h3 className="h3">Toggle Layout</h3>
				<pre className="pre">Layout: {JSON.stringify(layoutRail ? 'Rail' : 'Sidebar', null, 2)}</pre>
				<div className="w-full h-[728px] grid grid-cols-[auto_1fr] items-stretch border border-surface-200-800">
					<Navigation layout={layoutRail ? 'rail' : 'sidebar'} className={layoutRail ? '' : 'grid grid-rows-[1fr_auto] gap-4'}>
						<Navigation.Content>
							<Navigation.Menu>
								{links.map((link) => {
									const Icon = link.icon;
									return (
										<a key={link.label} className={layoutRail ? anchorRail : anchorSidebar}>
											<Icon className={layoutRail ? 'size-5' : 'size-4'} />
											<span className={layoutRail ? 'text-[10px]' : ''}>{link.label}</span>
										</a>
									);
								})}
							</Navigation.Menu>
						</Navigation.Content>
						<Navigation.Footer>
							<button type="button" className={layoutRail ? anchorRail : anchorSidebar} onClick={toggleLayout}>
								<ArrowLeftRightIcon className={layoutRail ? 'size-5' : 'size-4'} />
								{!layoutRail ? <span>Resize</span> : ''}
							</button>
						</Navigation.Footer>
					</Navigation>
					<div className="flex justify-center items-center">
						<p className="opacity-50">Contents</p>
					</div>
				</div>
			</section>
		</div>
	);
}
