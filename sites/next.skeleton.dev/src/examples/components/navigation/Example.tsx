import React from 'react';
import { Nav } from '@skeletonlabs/skeleton-react';
import {
	Menu as IconMenu,
	Folder as IconFolder,
	Image as IconImage,
	Music as IconMusic,
	Video as IconVideo,
	Settings as IconSettings,
} from 'lucide-react';

export const Page: React.FC<any> = () => {
	return (
		<div className="card border-[1px] border-surface-100-900 w-full h-[640px] grid grid-cols-[auto_1fr]">
			{/* Component */}
			{/* prettier-ignore */}
			<Nav.Rail
				header={<Nav.Tile href="/" title="Menu"><IconMenu /></Nav.Tile>}
				footer={<Nav.Tile href="/settings" title="settings"><IconSettings /></Nav.Tile>}
			>
				<Nav.Tile id="0" label="Files" href="#"><IconFolder /></Nav.Tile>
				<Nav.Tile id="1" label="Images" href="#"><IconImage /></Nav.Tile>
				<Nav.Tile id="2" label="Music" href="#"><IconMusic /></Nav.Tile>
				<Nav.Tile id="3" label="Videos" href="#"><IconVideo /></Nav.Tile>
			</Nav.Rail>
			{/* Content */}
			<div className="flex justify-center items-center">
				<p className="opacity-20">(Content)</p>
			</div>
		</div>
	);
};
