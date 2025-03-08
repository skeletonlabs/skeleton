import React, { useState } from 'react';
import { Navigation } from '@skeletonlabs/skeleton-react';
import { Folder as IconFolder, Image as IconImage, Music as IconMusic, Video as IconVideo } from 'lucide-react';

export const Page: React.FC = () => {
	const [value, setValue] = useState('files');

	return (
		<div className="card border-surface-100-900 grid h-[640px] w-full grid-cols-[auto_1fr] border-[1px]">
			{/* Component */}
			<Navigation.Rail value={value} onValueChange={setValue}>
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
			</Navigation.Rail>
			{/* Content */}
			<div className="flex items-center justify-center">
				<pre className="pre">value: {value}</pre>
			</div>
		</div>
	);
};
