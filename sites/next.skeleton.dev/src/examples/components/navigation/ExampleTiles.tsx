import React from 'react';
import { Nav } from '@skeletonlabs/skeleton-react';
import { Box as IconBox } from 'lucide-react';

export const Page: React.FC<any> = () => {
	return (
		<div className="card preset-filled-surface-100-900 p-5 grid grid-cols-3 gap-5">
			{/* By default tiles are <button> elements */}
			<Nav.Tile id="0" label="Button">
				<IconBox />
			</Nav.Tile>
			{/* Add selected to button tiles to enable the active state */}
			<Nav.Tile id="0" label="Button" selected>
				<IconBox />
			</Nav.Tile>
			{/* When adding an href, they are converted to anchors */}
			<Nav.Tile id="0" label="Anchor" href="#">
				<IconBox />
			</Nav.Tile>
		</div>
	);
};
