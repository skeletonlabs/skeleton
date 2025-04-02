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
		whileElementsMounted: autoUpdate
	});

	const click = useClick(context);
	const dismiss = useDismiss(context);
	const role = useRole(context);
	const { getReferenceProps, getFloatingProps } = useInteractions([click, dismiss, role]);

	return (
		<div>
			{/* Trigger */}
			<button className="btn hover:preset-tonal gap-1" {...getReferenceProps({ ref: refs.setReference })} onClick={() => setIsOpen(true)}>
				<IconMenu className="size-4" />
			</button>

			{isOpen && (
				<>
					<FloatingFocusManager context={context} modal={false}>
						<div
							ref={refs.setFloating}
							{...getFloatingProps()}
							className="fixed top-0 left-0 bottom-0 z-50 h-screen overflow-y-auto bg-surface-50-950 p-4 w-72"
						>
							{/* Header row */}
							<div className="flex items-center justify-between">
								<h3 className="h3">Skeleton</h3>
								<button onClick={() => setIsOpen(false)} aria-label="Close Drawer">
									<IconClose className="size-5" />
								</button>
							</div>

							{/* Version Section */}
							<div className="mt-4 w-full">
								<span className="text-sm font-bold capitalize ml-2">Version</span>
								<div className="mt-2 flex w-full justify-between gap-2">
									<a className="btn flex-1 text-center cursor-not-allowed opacity-50 pointer-events-none">v3</a>
									<a href="https://v2.skeleton.dev/" target="_blank" rel="noreferrer" className="btn hover:preset-tonal flex-1 text-center">
										v2
									</a>
									<a href="https://v1.skeleton.dev/" target="_blank" rel="noreferrer" className="btn hover:preset-tonal flex-1 text-center">
										v1
									</a>
								</div>
							</div>

							{/* Navigation links */}
							<div className="mt-4 mb-10">
								<span className="text-sm font-bold capitalize ml-2">Navigation</span>
								<nav className="mt-2">
									<ul className="flex flex-col gap-1">
										{navigation.map((link) => (
											<li key={link.label}>
												<a href={link.href} target={link.target} className="px-2 py-1 rounded-base anchor" onClick={() => setIsOpen(false)}>
													{link.label}
												</a>
											</li>
										))}
									</ul>
								</nav>
							</div>

							{/* Child content */}
							{children && <div className="mt-auto">{children}</div>}
						</div>
					</FloatingFocusManager>
				</>
			)}
		</div>
	);
};
