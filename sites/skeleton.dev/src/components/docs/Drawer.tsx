import React, { useState } from 'react';
import { useFloating, autoUpdate, offset, useClick, useDismiss, useRole, useInteractions, FloatingFocusManager } from '@floating-ui/react';
import { Menu as IconMenu, X as IconClose } from 'lucide-react';

interface DrawerProps {
	children?: React.ReactNode;
}

export const Drawer: React.FC<DrawerProps> = ({ children }) => {
	const [isOpen, setIsOpen] = useState(false);

	const { refs, context } = useFloating({
		open: isOpen,
		onOpenChange: setIsOpen,
		middleware: [offset(0)],
		whileElementsMounted: autoUpdate
	});

	const click = useClick(context);
	const dismiss = useDismiss(context);
	const role = useRole(context);
	const { getReferenceProps, getFloatingProps } = useInteractions([click, dismiss, role]);

	return (
		<div>
			{/* Trigger */}
			<button className="block xl:hidden" {...getReferenceProps({ ref: refs.setReference })} onClick={() => setIsOpen(true)}>
				<IconMenu />
			</button>

			{isOpen && (
				<>
					<FloatingFocusManager context={context} modal={false}>
						<div
							ref={refs.setFloating}
							{...getFloatingProps()}
							className="fixed top-0 left-0 bottom-0 z-50 h-screen bg-surface-100-900 w-2xs p-4 space-y-8 overflow-y-auto shadow-xl"
						>
							{/* Header */}
							<div className="px-2 flex justify-between items-center">
								<h3 className="h3">Skeleton</h3>
								<button onClick={() => setIsOpen(false)} aria-label="Close Drawer">
									<IconClose className="size-5" />
								</button>
							</div>

							{/* Navigation */}
							{children && <div className="mt-auto">{children}</div>}
						</div>
					</FloatingFocusManager>
				</>
			)}
		</div>
	);
};
