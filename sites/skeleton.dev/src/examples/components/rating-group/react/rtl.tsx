'use client';

import { RatingGroup } from '@skeletonlabs/skeleton-react';
import { StarIcon } from 'lucide-react';

export default function Page() {
	return (
		<RatingGroup count={5} dir="rtl">
			<RatingGroup.Control>
				<RatingGroup.Context>
					{(ctx) =>
						ctx.api.items.map((index) => (
							<RatingGroup.Item key={index} index={index}>
								<RatingGroup.ItemContext>
									{(ctx) => (ctx.itemState.highlighted ? <StarIcon fill="currentColor" /> : <StarIcon />)}
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
