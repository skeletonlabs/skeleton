import { type ReactNode, use } from 'react';

import { TagsInputRootContext } from '../modules/root-context';
import type { useTagsInput } from '../modules/use-tags-input';

export interface TagsInputRootContextProps {
	children: (tagsinput_: ReturnType<typeof useTagsInput>) => ReactNode;
}

export default function RootContext(props: TagsInputRootContextProps) {
	const tagsInput = use(TagsInputRootContext);

	const { children } = props;

	return children(tagsInput);
}
