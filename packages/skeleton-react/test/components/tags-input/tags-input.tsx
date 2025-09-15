import { TagsInput } from '@/index';

export default function TagsInputTest() {
	return (
		<TagsInput data-testid="root">
			<TagsInput.Label data-testid="label" />
			<TagsInput.Control data-testid="control">
				<TagsInput.Context>
					{(tagsInput) =>
						tagsInput.value.map((value, index) => (
							<TagsInput.Item key={value} index={index} value={value} data-testid="item">
								<TagsInput.ItemPreview data-testid="item-preview" />
								<TagsInput.ItemDeleteTrigger data-testid="item-delete-trigger" />
								<TagsInput.ItemInput data-testid="item-input" />
							</TagsInput.Item>
						))
					}
				</TagsInput.Context>
			</TagsInput.Control>
			<TagsInput.Input data-testid="input" />
			<TagsInput.ClearTrigger data-testid="clear-trigger" />
			<TagsInput.HiddenInput data-testid="hidden-input" />
		</TagsInput>
	);
}
