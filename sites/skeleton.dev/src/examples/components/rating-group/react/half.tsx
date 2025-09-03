'use client';

import { RatingGroup } from '@skeletonlabs/skeleton-react';
import { StarIcon, StarHalfIcon } from 'lucide-react';

export default function Page() {
	return (
		<RatingGroup count={5} allowHalf={true}>
			<RatingGroup.Control>
				<RatingGroup.Context>
					{(ctx) =>
						ctx.api.items.map((index) => (
							<RatingGroup.Item key={index} index={index}>
								<RatingGroup.ItemContext>
									{(ctx) => {
										if (ctx.itemState.half) {
											return <StarHalfIcon fill="currentColor" />;
										}
										if (ctx.itemState.highlighted) {
											return <StarIcon fill="currentColor" />;
										}
										return <StarIcon />;
									}}
								</RatingGroup.ItemContext>
							</RatingGroup.Item>
						))
					}
				</RatingGroup.Context>
			</RatingGroup.Control>
			<RatingGroup.HiddenInput />
		</RatingGroup>
	);
}
