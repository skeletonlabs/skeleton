import * as tagsInput from '@zag-js/tags-input';

export interface TagsInputProps extends Omit<tagsInput.Context, 'id' | 'value'> {
	value?: tagsInput.Context['value'];
	padding?: string;
	gap?: string;
	base?: string;
	classes?: string;
	inputBase?: string;
	inputClasses?: string;
	chipListBase?: string;
	chipListClasses?: string;
	chipBase?: string;
	chipBackground?: string;
	chipClasses?: string;
	editInputBase?: string;
	editInputClasses?: string;
}
