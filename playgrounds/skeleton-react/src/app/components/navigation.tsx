import { Skull as IconLogo, Menu as IconMenu, Box as IconBox, Settings as IconSettings } from 'lucide-react';
import { useState } from 'react';

import { Navigation } from '$lib/components/Navigation/Navigation.js';

export function Component() {
	const [value, setValue] = useState('0');

	return (
		<div className="space-y-10">
			<header>
				<h1 className="h1">Navigation</h1>
			</header>
			<section className="space-y-4">
				<h2 className="h2">Bar</h2>
				<pre className="pre">value: {value}</pre>
				<Navigation.Bar value={value} onChange={setValue}>
					<Navigation.Tile id="0" label="Tile 1">
						<IconBox />
					</Navigation.Tile>
					<Navigation.Tile id="1" label="Tile 2">
						<IconBox />
					</Navigation.Tile>
					<Navigation.Tile id="2" label="Tile 3">
						<IconBox />
					</Navigation.Tile>
					<Navigation.Tile id="3" label="Tile 4">
						<IconBox />
					</Navigation.Tile>
				</Navigation.Bar>
			</section>
			<section className="space-y-4">
				<h2 className="h2">Rail</h2>
				<div className="flex h-[960px] justify-center gap-10">
					<Navigation.Rail
						header={
							<Navigation.Tile href="/" title="Menu">
								<IconMenu />
							</Navigation.Tile>
						}
						footer={
							<Navigation.Tile href="/settings" title="settings">
								<IconSettings />
							</Navigation.Tile>
						}
					>
						<Navigation.Tile id="0" label="Tile 1" href="#" selected>
							<IconBox />
						</Navigation.Tile>
						<Navigation.Tile id="1" label="Tile 2" href="#">
							<IconBox />
						</Navigation.Tile>
						<Navigation.Tile id="2" label="Tile 3" href="#">
							<IconBox />
						</Navigation.Tile>
						<Navigation.Tile id="3" label="Tile 4" href="#">
							<IconBox />
						</Navigation.Tile>
						<Navigation.Tile id="4" label="Tile 5" href="#">
							<IconBox />
						</Navigation.Tile>
					</Navigation.Rail>
					{/* expanded */}
					<Navigation.Rail
						expanded
						header={
							<a href="/" className="flex aspect-square w-full flex-col items-center justify-center gap-2">
								<IconLogo size={48} />
								<span className="type-scale-5 font-bold">Skeleton</span>
							</a>
						}
						footer={
							<Navigation.Tile labelExpanded="Settings" href="/settings">
								<IconSettings />
							</Navigation.Tile>
						}
					>
						<Navigation.Tile id="0" labelExpanded="Expanded Tile 1" href="#">
							<IconBox />
						</Navigation.Tile>
						<Navigation.Tile id="1" labelExpanded="Expanded Tile 2" href="#">
							<IconBox />
						</Navigation.Tile>
						<Navigation.Tile id="2" labelExpanded="Expanded Tile 3" href="#">
							<IconBox />
						</Navigation.Tile>
						<Navigation.Tile id="3" labelExpanded="Expanded Tile 4" href="#">
							<IconBox />
						</Navigation.Tile>
						<Navigation.Tile id="4" labelExpanded="Expanded Tile 5" href="#">
							<IconBox />
						</Navigation.Tile>
					</Navigation.Rail>
				</div>
			</section>
		</div>
	);
}
