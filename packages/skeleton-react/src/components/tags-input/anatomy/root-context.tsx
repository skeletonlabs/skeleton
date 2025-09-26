import type { useTagsInput } from '../modules/provider';
import { RootContext as RootContext_ } from '../modules/root-context';
import { type ReactNode, use } from 'react';

export interface TagsInputRootContextProps {
	children: (tagsInput: ReturnType<typeof useTagsInput>) => ReactNode;
}

export default function RootContext(props: TagsInputRootContextProps) {
	const tagsInput = use(RootContext_);

	const { children } = props;

	return children(tagsInput);
}
