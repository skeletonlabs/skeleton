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

export default function Default() {
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
	let anchorSidebar = 'btn hover:preset-tonal justify-start px-2 w-full';

	return (
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
	);
}
