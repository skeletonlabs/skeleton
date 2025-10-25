import { Navigation } from '@skeletonlabs/skeleton-react';
import { BookIcon } from 'lucide-react';
import { HouseIcon } from 'lucide-react';
import { PopcornIcon } from 'lucide-react';
import { TvIcon } from 'lucide-react';
import { ArrowLeftRightIcon } from 'lucide-react';
import { useState } from 'react';

export default function Default() {
	const links = [
		{ label: 'Home', href: '#', icon: HouseIcon },
		{ label: 'Books', href: '#', icon: BookIcon },
		{ label: 'Movies', href: '#', icon: PopcornIcon },
		{ label: 'Television', href: '#', icon: TvIcon },
	];

	const buttonClasses = 'btn hover:preset-tonal';
	let anchorRail = `${buttonClasses} aspect-square w-full max-w-[84px] flex flex-col items-center gap-0.5`;
	let anchorSidebar = `${buttonClasses} justify-start px-2 w-full`;

	let [layoutRail, setLayoutRail] = useState(true);

	function toggleLayout() {
		setLayoutRail(!layoutRail);
	}

	return (
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
	);
}
