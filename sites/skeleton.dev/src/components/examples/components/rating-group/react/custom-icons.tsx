import { RatingGroup } from '@skeletonlabs/skeleton-react';
import { BoneIcon, SkullIcon } from 'lucide-react';

export default function CustomIcons() {
	return (
		<RatingGroup count={3}>
			<RatingGroup.Control>
				<RatingGroup.Context>
					{(ratingGroup) =>
						ratingGroup.items.map((index) => <RatingGroup.Item key={index} index={index} empty={<BoneIcon />} full={<SkullIcon />} />)
					}
				</RatingGroup.Context>
			</RatingGroup.Control>
			<RatingGroup.HiddenInput />
		</RatingGroup>
	);
}
