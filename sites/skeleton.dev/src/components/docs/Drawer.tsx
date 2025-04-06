import React, { useState } from 'react';
import {
	useTransitionStyles,
	useFloating,
	autoUpdate,
	offset,
	useClick,
	useDismiss,
	useRole,
	useInteractions,
	FloatingFocusManager
} from '@floating-ui/react';
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
	const { styles: transitionStyles, isMounted } = useTransitionStyles(context, {
		initial: { transform: 'translateX(-100%)' },
		open: { transform: 'translateX(0)' },
		close: { transform: 'translateX(-100%)' },
		duration: 200
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

			{isMounted && (
				<>
					<FloatingFocusManager context={context} modal={false}>
						<div
							ref={refs.setFloating}
							{...getFloatingProps()}
							style={{
								...transitionStyles
							}}
							className="fixed top-0 left-0 bottom-0 z-50 h-screen bg-surface-100-900 w-2xs p-4 space-y-8 overflow-y-auto shadow-xl"
						>
							{/* Header */}
							<div className="flex justify-between items-center">
								<h3 className="h3">Skeleton</h3>
								<button onClick={() => setIsOpen(false)} aria-label="Close Drawer">
									<IconClose className="size-5" />
								</button>
							</div>

							{/* Version */}
							<div className="space-y-4">
								<div className="text-sm font-bold capitalize">Version</div>
								<div className="grid grid-cols-3 gap-2">
									<button className="btn preset-filled hover:preset-tonal text-center">v3</button>
									<a
										href="https://v2.skeleton.dev/"
										target="_blank"
										rel="noreferrer"
										className="btn preset-outlined-surface-200-800 hover:preset-tonal text-center"
									>
										v2
									</a>
									<a
										href="https://v1.skeleton.dev/"
										target="_blank"
										rel="noreferrer"
										className="btn preset-outlined-surface-200-800 hover:preset-tonal text-center"
									>
										v1
									</a>
								</div>
							</div>

							{/* Navigation links */}
							<nav>
								<ul className="flex flex-col gap-1">
									{navigation.map((link) => (
										<li key={link.label}>
											<a
												href={link.href}
												target={link.target}
												className="anchor block px-2 py-1 rounded-base"
												onClick={() => setIsOpen(false)}
											>
												{link.label}
											</a>
										</li>
									))}
								</ul>
							</nav>

							{/* Navigation */}
							{children && <div className="mt-auto">{children}</div>}
						</div>
					</FloatingFocusManager>
				</>
			)}
		</div>
	);
};
