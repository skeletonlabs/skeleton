import React from 'react';
import { Navigation } from '@skeletonlabs/skeleton-react';
import { Folder as IconFolder, Image as IconImage, Music as IconMusic, Video as IconVideo } from 'lucide-react';

export const Page: React.FC = () => {
	return (
		<div className="card border-surface-100-900 grid h-[512px] w-[320px] grid-rows-[1fr_auto] border-[1px]">
			{/* Content */}
			<div className="flex items-center justify-center">
				<p className="opacity-20">(Content)</p>
			</div>
			{/* Component */}
			<Navigation.Bar>
				<Navigation.Tile label="Files" href="#/files">
					<IconFolder />
				</Navigation.Tile>
				<Navigation.Tile label="Images" href="#/images">
					<IconImage />
				</Navigation.Tile>
				<Navigation.Tile label="Music" href="#/music">
					<IconMusic />
				</Navigation.Tile>
				<Navigation.Tile label="Videos" href="#/videos">
					<IconVideo />
				</Navigation.Tile>
			</Navigation.Bar>
		</div>
	);
};
