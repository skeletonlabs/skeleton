import { TagsInput } from '@/index';

export default function TagsInputTest() {
	return (
		<TagsInput data-testid="root">
			<TagsInput.Item index={0} value="test" data-testid="item">
				<TagsInput.ItemPreview data-testid="item-preview" />
				<TagsInput.ItemDeleteTrigger data-testid="item-delete-trigger" />
				<TagsInput.ItemInput data-testid="item-input" />
			</TagsInput.Item>
			<TagsInput.Input data-testid="input" />
		</TagsInput>
	);
}
