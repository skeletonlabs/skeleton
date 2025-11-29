import type { HTMLAttributes } from '../../../internal/html-attributes.js';
import type { PropsWithElement } from '../../../internal/props-with-element.js';
import { useProgress } from '../modules/provider.js';
import { RootContext } from '../modules/root-context.js';
import { splitProps } from '@zag-js/progress';
import type { Props } from '@zag-js/progress';
import { mergeProps } from '@zag-js/react';

export interface ProgressRootProps
	extends Omit<Props, 'id'>,
		PropsWithElement<'div'>,
		HTMLAttributes<'div', 'id' | 'dir' | 'defaultValue'> {}

export default function Root(props: ProgressRootProps) {
	const [progressProps, componentProps] = splitProps(props);
	const { element, children, ...rest } = componentProps;

	const progress = useProgress(progressProps);

	const attributes = mergeProps(
		progress.getRootProps(),
		rest,
	);

	return (
		<RootContext.Provider value={progress}>{element ? element(attributes) : <div {...attributes}>{children}</div>}</RootContext.Provider>
	);
}
