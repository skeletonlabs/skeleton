import { Menu, Portal } from '@skeletonlabs/skeleton-react';
import { CheckIcon } from 'lucide-react';
import { useState } from 'react';

export default function OptionItems() {
	const [options, setOptions] = useState({ showLineNumbers: true, showMinimap: false, wordWrap: true });

	return (
		<Menu
			value={options}
			onValueChange={(details) => setOptions(details.value as typeof options)}
		>
			<Menu.Trigger className="btn preset-filled">Editor Settings</Menu.Trigger>
			<Portal>
				<Menu.Positioner>
					<Menu.Content className="card w-56 p-2 bg-surface-100-900 shadow-xl space-y-1">
						<Menu.OptionItem
							type="checkbox"
							name="showLineNumbers"
							value="showLineNumbers"
							className="menu-item flex items-center justify-between"
						>
							Show Line Numbers
							<CheckIcon className="size-4" />
						</Menu.OptionItem>
						<Menu.OptionItem
							type="checkbox"
							name="showMinimap"
							value="showMinimap"
							className="menu-item flex items-center justify-between"
						>
							Show Minimap
							<CheckIcon className="size-4" />
						</Menu.OptionItem>
						<Menu.OptionItem
							type="checkbox"
							name="wordWrap"
							value="wordWrap"
							className="menu-item flex items-center justify-between"
						>
							Word Wrap
							<CheckIcon className="size-4" />
						</Menu.OptionItem>
					</Menu.Content>
				</Menu.Positioner>
			</Portal>
		</Menu>
	);
}
