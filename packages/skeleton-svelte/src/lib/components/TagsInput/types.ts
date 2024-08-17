import * as tagsInput from '@zag-js/tags-input';

export interface TagsInputProps extends Omit<tagsInput.Context, 'id' | 'value'> {
    value?: tagsInput.Context['value'];
    base?: string;
    classes?: string;
}