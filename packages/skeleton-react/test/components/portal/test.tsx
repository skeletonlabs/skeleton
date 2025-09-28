import { Portal, type PortalRootProps } from '@/index';

export default function Test(props: Omit<PortalRootProps, 'children'>) {
	return (
		<div data-testid="parent">
			<Portal {...props}>
				<div data-testid="child" />
			</Portal>
		</div>
	);
}
