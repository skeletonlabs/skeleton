import { Popover, Portal } from '@skeletonlabs/skeleton-react';
import packageJson from '@skeletonlabs/skeleton/package.json';
import { ChevronDownIcon, ArrowUpRightIcon } from 'lucide-react';

export default function HeaderVersion() {
	return (
		<Popover positioning={{ placement: 'top-start' }}>
			<Popover.Trigger className="btn btn-sm hover:preset-tonal data-[state=open]:preset-tonal text-sm gap-1" title="Choose Version">
				<span>v{packageJson.version}</span>
				<ChevronDownIcon className="size-4 opacity-60" />
			</Popover.Trigger>
			<Portal>
				<Popover.Positioner>
					<Popover.Content className="card bg-surface-50-950 border border-surface-200-800 flex flex-col gap-1 p-4 z-50">
						{['v3', 'v2', 'v1'].map((version) => (
							<a
								key={version}
								className="btn hover:preset-tonal justify-between"
								href={`https://${version}.skeleton.dev/`}
								target="_blank"
								rel="noreferrer"
							>
								<span>{version} Docs</span>
								<ArrowUpRightIcon className="size-4 opacity-60" />
							</a>
						))}
					</Popover.Content>
				</Popover.Positioner>
			</Portal>
		</Popover>
	);
}
