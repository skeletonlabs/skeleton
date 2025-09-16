import { TagsInputRootContext } from '../modules/root-context';
import type { useTagsInput } from '../modules/use-tags-input';
import { type ReactNode, use } from 'react';

export interface TagsInputRootContextProps {
	children: (tagsInput: ReturnType<typeof useTagsInput>) => ReactNode;
}

export default function RootContext(props: TagsInputRootContextProps) {
	const tagsInput = use(TagsInputRootContext);

	const { children } = props;

	return children(tagsInput);
}
