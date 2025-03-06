import { useState } from 'react';
import { Navigation } from '@skeletonlabs/skeleton-react';
import {
	Menu as IconMenu,
	Folder as IconFolder,
	Image as IconImage,
	Music as IconMusic,
	Video as IconVideo,
	Gamepad as IconGames,
	Settings as IconSettings
} from 'lucide-react';

export const Page: React.FC = () => {
	const [isExpanded, setIsExpanded] = useState(true);

	function toggleExpanded() {
		const newValue = !isExpanded;
		setIsExpanded(newValue);
	}

	return (
		<div className="card border-surface-100-900 grid h-[640px] w-full grid-cols-[auto_1fr] border-[1px]">
			{/* Component */}
			<Navigation.Rail
				expanded={isExpanded}
				header={
					<Navigation.Tile labelExpanded="Menu" title="Toggle Menu Width" onClick={toggleExpanded}>
						<IconMenu />
					</Navigation.Tile>
				}
				footer={
					<Navigation.Tile href="/settings" labelExpanded="Settings">
						<IconSettings />
					</Navigation.Tile>
				}
			>
				<Navigation.Tile labelExpanded="Browse Files" href="/files">
					<IconFolder />
				</Navigation.Tile>
				<Navigation.Tile labelExpanded="Browse Images" href="/images">
					<IconImage />
				</Navigation.Tile>
				<Navigation.Tile labelExpanded="Browse Music" href="/music">
					<IconMusic />
				</Navigation.Tile>
				<Navigation.Tile labelExpanded="Browse Videos" href="/videos">
					<IconVideo />
				</Navigation.Tile>
				<Navigation.Tile labelExpanded="Browse Games" href="/games">
					<IconGames />
				</Navigation.Tile>
			</Navigation.Rail>
			{/* Content */}
			<div className="flex items-center justify-center">
				<p className="opacity-20">(Content)</p>
			</div>
		</div>
	);
};
