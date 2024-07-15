import React from 'react';
import { Nav } from '@skeletonlabs/skeleton-react';
import { Folder as IconFolder, Image as IconImage, Music as IconMusic, Video as IconVideo } from 'lucide-react';

export const Page: React.FC = () => {
	// You may optionally bind a selected state value
	// Pass the ID value for the default selected item.
	const [selected, setSelected] = React.useState('0');

	return (
		<div className="card border-surface-100-900 grid h-[512px] w-[320px] grid-rows-[1fr_auto] border-[1px]">
			{/* Content */}
			<div className="flex items-center justify-center">
				<p className="opacity-20">(Content)</p>
			</div>
			{/* Component */}
			{/* prettier-ignore */}
			<Nav.Bar selected={selected} onChange={setSelected}>
				<Nav.Tile id="0" label="Files"><IconFolder /></Nav.Tile>
				<Nav.Tile id="1" label="Images"><IconImage /></Nav.Tile>
				<Nav.Tile id="2" label="Music"><IconMusic /></Nav.Tile>
				<Nav.Tile id="3" label="Videos"><IconVideo /></Nav.Tile>
			</Nav.Bar>
		</div>
	);
};
