import { Popover, Portal } from '@skeletonlabs/skeleton-react';
import { ArrowUpRightIcon, ChevronDownIcon, HeartIcon } from 'lucide-react';

export default function HeaderSponsors() {
	return (
		<nav className="h-full flex items-stretch">
			<Popover positioning={{ placement: 'top-end' }}>
				<Popover.Trigger className="hidden xl:flex btn hover:preset-tonal gap-1" title="Sponsor Us">
					<HeartIcon className="size-5" />
					<ChevronDownIcon className="size-4 opacity-60" />
				</Popover.Trigger>
				<Portal>
					<Popover.Positioner>
						<Popover.Content className="card max-w-72 bg-surface-50-950 border border-surface-200-800 p-4 space-y-4 z-50">
							<header className="space-y-2">
								<p className="font-bold">Sponsor Us</p>
								<p className="text-xs opacity-60">Sponsor Skeleton and help support the project. Available on the following services.</p>
							</header>
							<hr className="hr" />
							<div className="flex flex-col gap-1">
								<a
									className="btn hover:preset-tonal justify-between"
									href="https://github.com/sponsors/skeletonlabs"
									target="_blank"
									rel="noreferrer"
								>
									<span>Via GitHub</span>
									<ArrowUpRightIcon className="size-4 opacity-60" />
								</a>
								<a
									className="btn hover:preset-tonal justify-between"
									href="https://ko-fi.com/skeletonlabs"
									target="_blank"
									rel="noreferrer"
								>
									<span>Via Ko-Fi</span>
									<ArrowUpRightIcon className="size-4 opacity-60" />
								</a>
							</div>
						</Popover.Content>
					</Popover.Positioner>
				</Portal>
			</Popover>
		</nav>
	);
}
