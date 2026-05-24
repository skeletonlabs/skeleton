import type { HTMLAttributes } from '../../../internal/html-attributes.js';
import type { PropsWithElement } from '../../../internal/props-with-element.js';
import { useMenu } from '../modules/provider.js';
import { MenuRootContext } from '../modules/root-context.js';
import { MenuTriggerItemContext } from '../modules/trigger-item-context.js';
import { splitProps } from '@zag-js/menu';
import type { Props } from '@zag-js/menu';
import { use, useEffect } from 'react';

export interface MenuRootProps
	extends Omit<Props, 'id'>, PropsWithElement<'div'>, Omit<HTMLAttributes<'div', 'id' | 'dir'>, 'onSelect' | 'aria-label'> {}

export default function Root(props: MenuRootProps) {
	const parentMenu = use(MenuRootContext);

	const [menuProps, componentProps] = splitProps(props);
	const { children } = componentProps;

	const menu = useMenu(menuProps);

	useEffect(() => {
		if (!parentMenu) {
			return;
		}
		parentMenu.setChild(menu.service);
		menu.setParent(parentMenu.service);
		// oxlint-disable-next-line exhaustive-deps
	}, []);

	return (
		<MenuRootContext.Provider value={menu}>
			<MenuTriggerItemContext.Provider value={parentMenu?.getTriggerItemProps(menu)}>{children}</MenuTriggerItemContext.Provider>
		</MenuRootContext.Provider>
	);
}
