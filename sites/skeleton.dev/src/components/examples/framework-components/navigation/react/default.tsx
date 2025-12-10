import { Navigation } from '@skeletonlabs/skeleton-react';
import { BookIcon } from 'lucide-react';
import { HouseIcon } from 'lucide-react';
import { PopcornIcon } from 'lucide-react';
import { TvIcon } from 'lucide-react';

export default function Default() {
	const links = [
		{ label: 'Home', href: '/#', icon: HouseIcon },
		{ label: 'Books', href: '/#', icon: BookIcon },
		{ label: 'Movies', href: '/#', icon: PopcornIcon },
		{ label: 'Television', href: '/#', icon: TvIcon },
	];

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
							<Navigation.TriggerAnchor key={link.label} href={link.href}>
								<Icon className="size-5" />
								<Navigation.TriggerText>{link.label}</Navigation.TriggerText>
							</Navigation.TriggerAnchor>
						);
					})}
				</Navigation.Menu>
			</Navigation>
		</div>
	);
}
