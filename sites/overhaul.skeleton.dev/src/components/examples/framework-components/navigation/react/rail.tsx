import { Navigation } from '@skeletonlabs/skeleton-react';
import { BookIcon } from 'lucide-react';
import { HouseIcon } from 'lucide-react';
import { PopcornIcon } from 'lucide-react';
import { SkullIcon } from 'lucide-react';
import { SettingsIcon } from 'lucide-react';
import { TvIcon } from 'lucide-react';

export default function Default() {
	const links = [
		{ label: 'Home', href: '#', icon: HouseIcon },
		{ label: 'Books', href: '#', icon: BookIcon },
		{ label: 'Movies', href: '#', icon: PopcornIcon },
		{ label: 'Television', href: '#', icon: TvIcon },
	];
	let anchorRail = 'btn hover:preset-tonal aspect-square w-full max-w-[84px] flex flex-col items-center gap-0.5';

	return (
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
	);
}
