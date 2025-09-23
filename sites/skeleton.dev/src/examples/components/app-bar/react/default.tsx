import { AppBar } from '@skeletonlabs/skeleton-react';
import { CalendarIcon } from 'lucide-react';
import { CircleUserIcon } from 'lucide-react';
import { MenuIcon } from 'lucide-react';
import { SearchIcon } from 'lucide-react';

export default function Page() {
	return (
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
	);
}
