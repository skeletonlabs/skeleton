'use client';

import { TagsInput } from '@skeletonlabs/skeleton-react';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/components/tags-input/')({
	component: Page,
});

function Page() {
	return (
		<TagsInput>
			<TagsInput.Label>Label</TagsInput.Label>
			<TagsInput.Control>
				<TagsInput.Context>
					{(tagsInput) =>
						tagsInput.value.map((value, index) => (
							<TagsInput.Item key={index} value={value} index={index}>
								<TagsInput.ItemPreview>
									<TagsInput.ItemText>{value}</TagsInput.ItemText>
									<TagsInput.ItemDeleteTrigger />
								</TagsInput.ItemPreview>
								<TagsInput.ItemInput />
							</TagsInput.Item>
						))
					}
				</TagsInput.Context>
				<TagsInput.Input />
			</TagsInput.Control>
			<TagsInput.ClearTrigger>Clear All</TagsInput.ClearTrigger>
			<TagsInput.HiddenInput />
		</TagsInput>
	)
}
