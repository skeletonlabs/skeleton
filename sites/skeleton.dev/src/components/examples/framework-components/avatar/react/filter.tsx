import { Avatar } from '@skeletonlabs/skeleton-react';

export default function Filter() {
	return (
		<>
			<Avatar>
				<Avatar.Image src="https://i.pravatar.cc/150?img=48" className="filter-[url(#apollo)]" alt="filtered" />
				<Avatar.Fallback>SK</Avatar.Fallback>
			</Avatar>
			<svg className="absolute -left-full w-0 h-0">
				<filter id="apollo" filterUnits="objectBoundingBox" primitiveUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
					<feColorMatrix
						values="0.8 0.6 -0.4 0.1 0,
            0 1.2 0.05 0 0,
            0 -1 3 0.02 0,
            0 0 0 50 0"
						result="final"
						in="SourceGraphic"
					/>
				</filter>
			</svg>
		</>
	);
}
