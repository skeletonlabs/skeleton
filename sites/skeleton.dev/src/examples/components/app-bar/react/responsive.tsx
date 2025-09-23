import { AppBar } from '@skeletonlabs/skeleton-react';
import { CalendarIcon } from 'lucide-react';
import { CircleUserIcon } from 'lucide-react';
import { MenuIcon } from 'lucide-react';
import { SearchIcon } from 'lucide-react';

export default function Responsive() {
	return (
		<>
			{/* 1. Set dynamic spacing */}
			<AppBar className="space-y-0 md:space-y-4">
				{/* 2. Set dynamic layout columns */}
				<AppBar.Toolbar className="grid-cols-[auto_1fr_auto] md:grid-cols-[auto_auto]">
					<AppBar.Lead>
						<button type="button" className="btn-icon btn-icon-lg hover:preset-tonal">
							<MenuIcon />
						</button>
					</AppBar.Lead>

					{/* 3. Set Mobile display */}
					<AppBar.Headline className="md:hidden">
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

				{/* 4. Set Desktop display */}
				<AppBar.Headline className="hidden md:block">
					<p className="text-2xl">Headline</p>
				</AppBar.Headline>
			</AppBar>
		</>
	);
}
