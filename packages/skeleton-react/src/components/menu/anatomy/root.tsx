import { useMenu } from '../modules/provider.js';
import { RootContext } from '../modules/root-context.js';
import type { HTMLAttributes } from '@/internal/html-attributes.js';
import type { PropsWithElement } from '@/internal/props-with-element.js';
import { splitProps } from '@zag-js/menu';
import type { Props } from '@zag-js/menu';

export interface MenuRootProps extends Omit<Props, 'id'>, PropsWithElement<'div'>, HTMLAttributes<'div', 'id' | 'dir'> {}

export default function Root(props: MenuRootProps) {
	const [menuProps, componentProps] = splitProps(props);
	const { children } = componentProps;

	const menu = useMenu(menuProps);

	return <RootContext.Provider value={menu}>{children}</RootContext.Provider>;
}
