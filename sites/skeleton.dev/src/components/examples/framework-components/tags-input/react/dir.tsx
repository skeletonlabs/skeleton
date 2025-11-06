import { TagsInput } from '@skeletonlabs/skeleton-react';

export default function Default() {
	return (
		<TagsInput defaultValue={['Vanilla', 'Chocolate', 'Strawberry']} dir="rtl">
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
				<TagsInput.Input placeholder="Add a flavor..." />
			</TagsInput.Control>
			<TagsInput.HiddenInput />
		</TagsInput>
	);
}
