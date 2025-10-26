import { TagsInput } from '@/index.js';

export default function Test() {
	return (
		<TagsInput data-testid="root">
			<TagsInput.Label data-testid="label" />
			<TagsInput.Control data-testid="control">
				<TagsInput.Item index={1} value="test" data-testid="item">
					<TagsInput.ItemPreview data-testid="item-preview">
						<TagsInput.ItemText data-testid="item-text" />
						<TagsInput.ItemDeleteTrigger data-testid="item-delete-trigger" />
					</TagsInput.ItemPreview>
					<TagsInput.ItemInput data-testid="item-input" />
				</TagsInput.Item>
			</TagsInput.Control>
			<TagsInput.Input data-testid="input" />
			<TagsInput.ClearTrigger data-testid="clear-trigger" />
			<TagsInput.HiddenInput data-testid="hidden-input" />
		</TagsInput>
	);
}
