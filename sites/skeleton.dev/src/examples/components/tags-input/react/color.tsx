import { TagsInput } from '@skeletonlabs/skeleton-react';

export default function Default() {
	return (
		<TagsInput defaultValue={['Vanilla', 'Chocolate', 'Strawberry']}>
			<TagsInput.Label>Label</TagsInput.Label>
			<TagsInput.Control>
				<TagsInput.Context>
					{(tagsInput) =>
						tagsInput.value.map((value, index) => (
							<TagsInput.Item key={index} value={value} index={index}>
								<TagsInput.ItemPreview className="preset-filled-secondary-500">
									<TagsInput.ItemText>{value}</TagsInput.ItemText>
									<TagsInput.ItemDeleteTrigger />
								</TagsInput.ItemPreview>
								<TagsInput.ItemInput />
							</TagsInput.Item>
						))
					}
				</TagsInput.Context>
				<TagsInput.Input placeholder="Add a flavor..." />
			</TagsInput.Control>
			<TagsInput.ClearTrigger>Clear All</TagsInput.ClearTrigger>
			<TagsInput.HiddenInput />
		</TagsInput>
	);
}
