import { classesDialog } from '@skeletonlabs/skeleton-common';
import { mergeProps } from '@zag-js/react';
import { use } from 'react';

import type { HTMLAttributes } from '@/internal/html-attributes';
import type { PropsWithElement } from '@/internal/props-with-element';

import { DialogRootContext } from '../modules/root-context';

export interface DialogTriggerProps extends PropsWithElement<'button'>, HTMLAttributes<'button'> {}

export default function Trigger(props: DialogTriggerProps) {
	const dialog = use(DialogRootContext);

	const { element, children, ...rest } = props;

	const attributes = mergeProps(dialog.getTriggerProps(), rest, {
		className: classesDialog.trigger,
	});

	return element ? element(attributes) : <button {...attributes}>{children}</button>;
}
