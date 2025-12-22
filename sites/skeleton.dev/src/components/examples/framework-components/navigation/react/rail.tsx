import { Navigation } from '@skeletonlabs/skeleton-react';
import { BookIcon } from 'lucide-react';
import { HouseIcon } from 'lucide-react';
import { PopcornIcon } from 'lucide-react';
import { SkullIcon } from 'lucide-react';
import { SettingsIcon } from 'lucide-react';
import { TvIcon } from 'lucide-react';

export default function Default() {
	const links = [
		{ label: 'Home', href: '/#', icon: HouseIcon },
		{ label: 'Books', href: '/#', icon: BookIcon },
		{ label: 'Movies', href: '/#', icon: PopcornIcon },
		{ label: 'Television', href: '/#', icon: TvIcon },
	];

	return (
		<div className="w-full h-[728px] grid grid-cols-[auto_1fr] border border-surface-200-800">
			<Navigation layout="rail">
				<Navigation.Header>
					<Navigation.TriggerAnchor href="/" title="View Homepage" aria-label="View Homepage">
						<SkullIcon className="size-8" />
					</Navigation.TriggerAnchor>
				</Navigation.Header>
				<Navigation.Content>
					<Navigation.Menu>
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
				</Navigation.Content>
				<Navigation.Footer>
					<Navigation.TriggerAnchor href="#" title="Settings" aria-label="Settings">
						<SettingsIcon className="size-5" />
					</Navigation.TriggerAnchor>
				</Navigation.Footer>
			</Navigation>
			<div className="flex justify-center items-center">
				<p className="opacity-50">Contents</p>
			</div>
		</div>
	);
}
