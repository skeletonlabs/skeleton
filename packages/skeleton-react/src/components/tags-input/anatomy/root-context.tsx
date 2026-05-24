import type { useTagsInput } from '../modules/provider.js';
import { TagsInputRootContext as RootContext_ } from '../modules/root-context.js';
import { type ReactNode, use } from 'react';

export interface TagsInputRootContextProps {
	children: (tagsInput: ReturnType<typeof useTagsInput>) => ReactNode;
}

export default function TagsInputRootContext(props: TagsInputRootContextProps) {
	const tagsInput = use(RootContext_);

	const { children } = props;

	return children(tagsInput);
}
