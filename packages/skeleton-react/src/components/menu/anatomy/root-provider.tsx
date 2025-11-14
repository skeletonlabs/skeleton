import type { useMenu } from '../modules/provider.js';
import { RootContext } from '../modules/root-context.js';
import { TriggerItemContext } from '../modules/trigger-item-context.js';
import { use, useEffect, type PropsWithChildren } from 'react';

export interface MenuRootProviderProps extends PropsWithChildren {
	value: ReturnType<typeof useMenu>;
}

export default function RootProvider(props: MenuRootProviderProps) {
	const parentMenu = use(RootContext);

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
		<RootContext.Provider value={menu}>
			<TriggerItemContext.Provider value={parentMenu?.getTriggerItemProps(menu)}>{children}</TriggerItemContext.Provider>
		</RootContext.Provider>
	);
}
