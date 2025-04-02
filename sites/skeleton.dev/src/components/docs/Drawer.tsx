import React, { useState } from 'react';
// Floating UI React
import { useFloating, autoUpdate, offset, useClick, useDismiss, useRole, useInteractions, FloatingFocusManager } from '@floating-ui/react';
// Icons
import { Menu as IconMenu, X as IconClose } from 'lucide-react';

type NavigationLink = {
	href: string;
	label: string;
	target?: string;
};

interface DrawerProps {
	navigation: NavigationLink[];
	children?: React.ReactNode;
}

export const Drawer: React.FC<DrawerProps> = ({ navigation, children }) => {
	const [isOpen, setIsOpen] = useState(false);

	const { refs, context } = useFloating({
		open: isOpen,
		onOpenChange: setIsOpen,
		middleware: [offset(0)],
		placement: 'left-start',
		strategy: 'fixed',
		whileElementsMounted: autoUpdate
	});

	const click = useClick(context);
	const dismiss = useDismiss(context);
	const role = useRole(context);
	const { getReferenceProps, getFloatingProps } = useInteractions([click, dismiss, role]);

	return (
		<div>
			{/* Trigger (Hamburger icon) */}
			<button className="btn hover:preset-tonal gap-1" {...getReferenceProps({ ref: refs.setReference })} onClick={() => setIsOpen(true)}>
				<IconMenu className="size-4" />
			</button>

			{isOpen && (
				<>
					<div className="fixed inset-0 bg-surface-50-950" onClick={() => setIsOpen(false)} />

					<FloatingFocusManager context={context} modal={false}>
						<div
							ref={refs.setFloating}
							style={{ position: 'fixed', top: 0, left: 0 }}
							{...getFloatingProps()}
							className="z-50 h-screen overflow-y-auto bg-surface-50-950 p-4 
                         w-full sm:w-80 md:w-96"
						>
							{/* Header row */}
							<div className="flex items-center justify-between">
								<h1 className="text-xl font-bold">Skeleton</h1>
								<button onClick={() => setIsOpen(false)} aria-label="Close Drawer">
									<IconClose className="size-5" />
								</button>
							</div>

							{/* Navigation links */}
							<div className="mt-4">
								<h2 className="h2">Navigation</h2>
								<a className="mt-2 flex flex-col gap-2">
									{navigation.map((link) => (
										<a
											key={link.label}
											href={link.href}
											target={link.target}
											className="btn hover:preset-tonal justify-between"
											onClick={() => setIsOpen(false)}
										>
											{link.label}
										</a>
									))}
								</a>
							</div>
							{children && <div className="mt-auto">{children}</div>}
						</div>
					</FloatingFocusManager>
				</>
			)}
		</div>
	);
};
