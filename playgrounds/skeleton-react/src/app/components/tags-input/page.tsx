'use client';

import { TagsInput } from '@skeletonlabs/skeleton-react';

export default function Page() {
	return (
		<TagsInput>
			<TagsInput.Label>Label</TagsInput.Label>
			<TagsInput.Control>
				<TagsInput.Context>
					{(tagsInput) =>
						tagsInput.value.map((value, index) => (
							<TagsInput.Item key={index} value={value} index={index}>
								<TagsInput.ItemPreview>{value}</TagsInput.ItemPreview>
								<TagsInput.ItemInput />
								<TagsInput.ItemDeleteTrigger>X</TagsInput.ItemDeleteTrigger>
							</TagsInput.Item>
						))
					}
				</TagsInput.Context>
				<TagsInput.Input />
			</TagsInput.Control>
			<TagsInput.ClearTrigger>Clear All</TagsInput.ClearTrigger>
		</TagsInput>
	);
}
