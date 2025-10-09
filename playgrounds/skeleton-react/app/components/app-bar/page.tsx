'use client';

import { AppBar } from '@skeletonlabs/skeleton-react';
import { CalendarIcon } from 'lucide-react';
import { CircleUserIcon } from 'lucide-react';
import { MenuIcon } from 'lucide-react';
import { SearchIcon } from 'lucide-react';

export default function Page() {
	return (
		<div className="space-y-10">
			<header>
				<h2 className="h2">App Bar</h2>
			</header>
			<section className="space-y-4">
				<AppBar>
					<AppBar.Toolbar className="grid-cols-[auto_1fr_auto]">
						<AppBar.Lead>
							<button type="button" className="btn-icon btn-icon-lg hover:preset-tonal">
								<MenuIcon />
							</button>
						</AppBar.Lead>
						<AppBar.Headline>
							<p className="text-2xl">Headline</p>
						</AppBar.Headline>
						<AppBar.Trail>
							<button type="button" className="btn-icon hover:preset-tonal">
								<SearchIcon className="size-6" />
							</button>
							<button type="button" className="btn-icon hover:preset-tonal">
								<CalendarIcon className="size-6" />
							</button>
							<button type="button" className="btn-icon hover:preset-tonal">
								<CircleUserIcon className="size-6" />
							</button>
						</AppBar.Trail>
					</AppBar.Toolbar>
				</AppBar>
			</section>
			<section className="space-y-4">
				<h3 className="h3">Centered</h3>
				<AppBar>
					<AppBar.Toolbar className="grid-cols-[1fr_2fr_1fr]">
						<AppBar.Lead>
							<button type="button" className="btn-icon btn-icon-lg hover:preset-tonal">
								<MenuIcon />
							</button>
						</AppBar.Lead>
						<AppBar.Headline className="flex justify-center">
							<p>Headline</p>
						</AppBar.Headline>
						<AppBar.Trail className="justify-end">
							<button type="button" className="btn-icon hover:preset-tonal">
								<SearchIcon className="size-6" />
							</button>
							<button type="button" className="btn-icon hover:preset-tonal">
								<CalendarIcon className="size-6" />
							</button>
							<button type="button" className="btn-icon hover:preset-tonal">
								<CircleUserIcon className="size-6" />
							</button>
						</AppBar.Trail>
					</AppBar.Toolbar>
				</AppBar>
			</section>
			<section className="space-y-4">
				<h3 className="h3">Extended</h3>
				<AppBar>
					<AppBar.Toolbar className="grid-cols-[auto_auto]">
						<AppBar.Lead>
							<button type="button" className="btn-icon btn-icon-lg hover:preset-tonal">
								<MenuIcon />
							</button>
						</AppBar.Lead>
						<AppBar.Trail>
							<button type="button" className="btn-icon hover:preset-tonal">
								<SearchIcon className="size-6" />
							</button>
							<button type="button" className="btn-icon hover:preset-tonal">
								<CalendarIcon className="size-6" />
							</button>
							<button type="button" className="btn-icon hover:preset-tonal">
								<CircleUserIcon className="size-6" />
							</button>
						</AppBar.Trail>
					</AppBar.Toolbar>
					<AppBar.Headline>
						<h2 className="h2">Headline</h2>
					</AppBar.Headline>
				</AppBar>
			</section>
		</div>
	);
}
