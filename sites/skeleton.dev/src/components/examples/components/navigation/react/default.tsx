import { Navigation } from '@skeletonlabs/skeleton-react';
import { BookIcon } from 'lucide-react';
import { HouseIcon } from 'lucide-react';
import { PopcornIcon } from 'lucide-react';
import { TvIcon } from 'lucide-react';

export default function Default() {
	const links = [
		{ label: 'Home', href: '#', icon: HouseIcon },
		{ label: 'Books', href: '#', icon: BookIcon },
		{ label: 'Movies', href: '#', icon: PopcornIcon },
		{ label: 'Television', href: '#', icon: TvIcon },
	];
	let anchorBar = 'btn hover:preset-tonal flex-col items-center gap-1';

	return (
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
	);
}
