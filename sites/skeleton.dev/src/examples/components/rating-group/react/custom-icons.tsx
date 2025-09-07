'use client';

import { RatingGroup } from '@skeletonlabs/skeleton-react';
import { Bone, Skull } from 'lucide-react';

export default function () {
	return (
		<RatingGroup count={5}>
			<RatingGroup.Control>
				{Array.from({ length: 5 }).map((_, index) => (
					<RatingGroup.Item key={index} index={index + 1} empty={<Bone />} full={<Skull />} />
				))}
			</RatingGroup.Control>
			<RatingGroup.HiddenInput />
		</RatingGroup>
	);
}
