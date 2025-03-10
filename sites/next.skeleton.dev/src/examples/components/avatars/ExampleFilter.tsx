import React from 'react';
import { Avatar } from '@skeletonlabs/skeleton-react';

export const Page: React.FC = () => {
	return (
		<>
			{/* Image */}
			<Avatar src="https://i.pravatar.cc/150?img=48" name="filtered" imageClasses="[filter:url(#Apollo)]" />

			{/* SVG Filter */}
			{/* Ideally you have as single instance of this in your application. */}
			<svg id="svg-filter-apollo" className="absolute -left-full w-0 h-0">
				<filter id="Apollo" filterUnits="objectBoundingBox" primitiveUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
					<feColorMatrix
						values="0.8 0.6 -0.4 0.1 0,
					0 1.2 0.05 0 0,
					0 -1 3 0.02 0,
					0 0 0 50 0"
						result="final"
						in="SourceGraphic"
					></feColorMatrix>
				</filter>
			</svg>
		</>
	);
};
