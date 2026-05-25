import type { HTMLAttributes } from '../../../internal/html-attributes.js';
import type { PropsWithElement } from '../../../internal/props-with-element.js';
import type { useToggleGroup } from '../modules/provider.js';
import { ToggleGroupRootContext } from '../modules/root-context.js';
import { mergeProps } from '@zag-js/react';

export interface ToggleGroupRootProviderProps extends PropsWithElement<'div'>, HTMLAttributes<'div', 'id' | 'dir'> {
	value: ReturnType<typeof useToggleGroup>;
}

export default function ToggleGroupRootProvider(props: ToggleGroupRootProviderProps) {
	const { element, children, value: toggleGroup, ...rest } = props;

	const attributes = mergeProps(toggleGroup.getRootProps(), rest);

	return (
		<ToggleGroupRootContext.Provider value={toggleGroup}>
			{element ? element(attributes) : <div {...attributes}>{children}</div>}
		</ToggleGroupRootContext.Provider>
	);
}
