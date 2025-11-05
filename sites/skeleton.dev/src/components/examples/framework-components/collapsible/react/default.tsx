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
			<Collapsible.Content className="flex justify-start items-stretch">
				<nav className="space-y-2">
					<ul className="space-y-2">
						<li>
							<a className="anchor" href="/docs/design/themes">
								Themes
							</a>
						</li>
						<li>
							<a className="anchor" href="/docs/design/colors">
								Colors
							</a>
						</li>
						<li>
							<a className="anchor" href="/docs/design/presets">
								Presets
							</a>
						</li>
						<li>
							<a className="anchor" href="/docs/design/typography">
								Typography
							</a>
						</li>
						<li>
							<a className="anchor" href="/docs/design/spacing">
								Spacing
							</a>
						</li>
						<li>
							<a className="anchor" href="/docs/design/iconography">
								Iconography
							</a>
						</li>
					</ul>
				</nav>
			</Collapsible.Content>
		</Collapsible>
	);
}
