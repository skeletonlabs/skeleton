import * as tagsInput from '@zag-js/tags-input';

export interface TagsInputProps extends Omit<tagsInput.Context, 'id' | 'value'> {
	value?: tagsInput.Context['value'];
	base?: string;
	classes?: string;
	inputBase?: string;
	inputClasses?: string;
	chipContainerBase?: string;
	chipContainerClasses?: string;
	chipBase?: string;
	chipClasses?: string;
	editInputBase?: string;
	editInputClasses?: string;
}
