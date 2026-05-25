import type { useMenu } from '../modules/provider.js';
import { MenuRootContext } from '../modules/root-context.js';
import { MenuTriggerItemContext } from '../modules/trigger-item-context.js';
import { use, useEffect, type PropsWithChildren } from 'react';

export interface MenuRootProviderProps extends PropsWithChildren {
	value: ReturnType<typeof useMenu>;
}

export default function RootProvider(props: MenuRootProviderProps) {
	const parentMenu = use(MenuRootContext);

	const { children, value: menu } = props;

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
