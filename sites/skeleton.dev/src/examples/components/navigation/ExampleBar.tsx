import React from 'react';
import { Navigation } from '@skeletonlabs/skeleton-react';
import { Folder as IconFolder, Image as IconImage, Music as IconMusic, Video as IconVideo } from 'lucide-react';

export const Page: React.FC = () => {
	const [value, setValue] = React.useState('0');

	return (
		<div className="card border-surface-100-900 grid h-[512px] w-[320px] grid-rows-[1fr_auto] border-[1px]">
			{/* Content */}
			<div className="flex items-center justify-center">
				<pre className="pre">value: {value}</pre>
			</div>
			{/* Component */}
			<Navigation.Bar value={value} onValueChange={setValue}>
				<Navigation.Tile id="files" label="Files">
					<IconFolder />
				</Navigation.Tile>
				<Navigation.Tile id="images" label="Images">
					<IconImage />
				</Navigation.Tile>
				<Navigation.Tile id="music" label="Music">
					<IconMusic />
				</Navigation.Tile>
				<Navigation.Tile id="videos" label="Videos">
					<IconVideo />
				</Navigation.Tile>
			</Navigation.Bar>
		</div>
	);
};
