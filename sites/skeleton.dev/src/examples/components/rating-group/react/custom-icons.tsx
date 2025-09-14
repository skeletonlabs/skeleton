import { RatingGroup } from '@skeletonlabs/skeleton-react';
import { Bone, Skull } from 'lucide-react';

export default function CustomIcons() {
	return (
		<RatingGroup count={5}>
			<RatingGroup.Control>
				<RatingGroup.Context>
					{(ratingGroup) =>
						ratingGroup.items.map((index) => <RatingGroup.Item key={index} index={index} empty={<Bone />} full={<Skull />} />)
					}
				</RatingGroup.Context>
			</RatingGroup.Control>
			<RatingGroup.HiddenInput />
		</RatingGroup>
	);
}
