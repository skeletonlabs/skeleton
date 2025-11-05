import { Collapsible } from '@skeletonlabs/skeleton-react';
import { ArrowUpDownIcon } from 'lucide-react';

export default function Default() {
	return (
		<Collapsible className="card preset-filled-surface-100-900 p-4 w-56 mx-auto">
			<div className="w-full flex justify-between items-center">
				<p className="font-bold">Design System</p>
				<Collapsible.Trigger className="btn-icon hover:preset-tonal">
					<ArrowUpDownIcon className="size-4" />
				</Collapsible.Trigger>
			</div>
			<Collapsible.Content className="flex flex-col gap-2">
				<nav className="contents">
					<a className="anchor" href="/docs/design/themes">
						Themes
					</a>
					<a className="anchor" href="/docs/design/colors">
						Colors
					</a>
					<a className="anchor" href="/docs/design/presets">
						Presets
					</a>
					<a className="anchor" href="/docs/design/typography">
						Typography
					</a>
					<a className="anchor" href="/docs/design/spacing">
						Spacing
					</a>
					<a className="anchor" href="/docs/design/iconography">
						Iconography
					</a>
				</nav>
			</Collapsible.Content>
		</Collapsible>
	);
}
