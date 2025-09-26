'use client';

import { Navigation } from '@skeletonlabs/skeleton-react';
import { BikeIcon } from 'lucide-react';
import { BookIcon } from 'lucide-react';
import { HouseIcon } from 'lucide-react';
import { MenuIcon } from 'lucide-react';
import { MountainIcon } from 'lucide-react';
// import { MoviesIcon } from 'lucide-react';
import { BlocksIcon } from 'lucide-react';
import { SailboatIcon } from 'lucide-react';
import { SettingsIcon } from 'lucide-react';
import { SkullIcon } from 'lucide-react';
import { TvIcon } from 'lucide-react';
import { WavesIcon } from 'lucide-react';
import { useState } from 'react';

export default function Page() {
	const buttonClasses = 'btn hover:preset-tonal';
	const links = [
		{ label: 'Home', href: '#', icon: HouseIcon },
		{ label: 'Books', href: '#', icon: BookIcon },
		{ label: 'Movies', href: '#', icon: BlocksIcon }, // MoviesIcon
		{ label: 'Television', href: '#', icon: TvIcon },
	];
	const linksSidebar = {
		entertainment: [
			{ label: 'Books', href: '#', icon: BookIcon },
			{ label: 'Movies', href: '#', icon: BlocksIcon }, // MoviesIcon
			{ label: 'Television', href: '#', icon: TvIcon },
		],
		recreation: [
			{ label: 'Biking', href: '#', icon: BikeIcon },
			{ label: 'Sailing', href: '#', icon: SailboatIcon },
			{ label: 'Hiking', href: '#', icon: MountainIcon },
			{ label: 'Swimming', href: '#', icon: WavesIcon },
		],
	};

	let [compact, setCompact] = useState(false);

	function toggleCompactMode() {
		setCompact(!compact);
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
						<Navigation.Menu>
							{links.map((link) => {
								const Icon = link.icon;
								return (
									<a key={link.label} href={link.href} className={`${buttonClasses} flex-[25%] flex flex-col items-center gap-1`}>
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
							<a
								href="/"
								className={`${buttonClasses} aspect-square w-full flex flex-col items-center gap-1`}
								title="View Homepage"
								aria-label="View Homepage"
							>
								<SkullIcon className="size-8" />
							</a>
						</Navigation.Header>
						<Navigation.Menu className="flex-1">
							{links.map((link) => {
								const Icon = link.icon;
								return (
									<a key={link.label} href={link.href} className={`${buttonClasses} aspect-square w-full flex flex-col items-center gap-1`}>
										<Icon className="size-5" />
										<span className="text-xs">{link.label}</span>
									</a>
								);
							})}
						</Navigation.Menu>
						<Navigation.Footer>
							<a
								href="/settings"
								className={`${buttonClasses} aspect-square w-full flex flex-col items-center gap-1`}
								title="Settings"
								aria-label="Settings"
							>
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
				<pre className="pre">compact: {JSON.stringify(compact, null, 2)}</pre>
				<div className="w-full h-[728px] grid grid-cols-[auto_1fr] items-stretch border border-surface-200-800">
					<Navigation layout="sidebar" compact={compact} className="grid grid-rows-[auto_1fr_auto] gap-4">
						<Navigation.Header>
							<button
								type="button"
								className="btn-icon hover:preset-tonal"
								onClick={toggleCompactMode}
								title="Toggle Menu"
								aria-label="Toggle Menu"
							>
								<MenuIcon className="size-4" />
							</button>
						</Navigation.Header>
						<Navigation.Content>
							<Navigation.Group>
								{!compact ? <Navigation.Label className="pl-2">Entertainment</Navigation.Label> : ''}
								<Navigation.Menu>
									{linksSidebar.entertainment.map((link) => {
										const Icon = link.icon;
										return (
											<a
												key={link.label}
												href={link.href}
												className={`${compact ? 'btn-icon' : 'btn justify-start px-2'} hover:preset-tonal`}
											>
												<Icon className="size-4" />
												{!compact ? <span>{link.label}</span> : ''}
											</a>
										);
									})}
								</Navigation.Menu>
							</Navigation.Group>
							<Navigation.Group>
								{!compact ? <Navigation.Label className="pl-2">Recreation</Navigation.Label> : ''}
								<Navigation.Menu>
									{linksSidebar.recreation.map((link) => {
										const Icon = link.icon;
										return (
											<a
												key={link.label}
												href={link.href}
												className={`${compact ? 'btn-icon' : 'btn justify-start px-2'} hover:preset-tonal`}
											>
												<Icon className="size-4" />
												{!compact ? <span>{link.label}</span> : ''}
											</a>
										);
									})}
								</Navigation.Menu>
							</Navigation.Group>
						</Navigation.Content>
						<Navigation.Footer>
							<a
								href="/"
								className={`${compact ? 'btn-icon' : 'btn justify-start px-2 w-full'} hover:preset-tonal`}
								title="Settings"
								aria-label="Settings"
							>
								<SettingsIcon className="size-4" />
								{!compact ? <span>Settings</span> : ''}
							</a>
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
