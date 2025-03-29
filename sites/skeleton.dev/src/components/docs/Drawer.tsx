import React, { useState } from 'react';
// Floating UI React
import {
	useFloating,
	autoUpdate,
	offset,
	flip,
	shift,
	useClick,
	useDismiss,
	useRole,
	useInteractions,
	FloatingFocusManager
} from '@floating-ui/react';
// Icons
import { Menu as IconMenu, X as IconClose } from 'lucide-react';

type NavigationLink = {
	label: string;
	href: string;
};

interface DrawerProps {
	navigation: NavigationLink[];
	children?: React.ReactNode;
}

export const Drawer: React.FC<DrawerProps> = ({ navigation }) => {
	const [isOpen, setIsOpen] = useState(false);

	// Set up Floating UI
	const { refs, floatingStyles, context } = useFloating({
		open: isOpen,
		onOpenChange: setIsOpen,
		middleware: [
			offset(0), // no gap by default, or set offset(8) if you want spacing
			flip(),
			shift()
		],
		// Anchor the “drawer popover” to the left of the trigger:
		placement: 'left-start',
		whileElementsMounted: autoUpdate
	});

	// Setup interactions
	const click = useClick(context);
	const dismiss = useDismiss(context);
	const role = useRole(context);
	const { getReferenceProps, getFloatingProps } = useInteractions([click, dismiss, role]);

	return (
		<div>
			{/* Trigger (Hamburger icon) */}
			<button className="btn hover:preset-tonal gap-1" ref={refs.setReference} {...getReferenceProps()}>
				<IconMenu className="size-4" />
			</button>

			{/* If open, render the floating drawer + backdrop */}
			{isOpen && (
				<>
					{/* Dark backdrop behind the floating drawer. 
              Clicking it will close the drawer. */}
					<div className="fixed inset-0 bg-black/50 z-40" onClick={() => setIsOpen(false)} />

					<FloatingFocusManager context={context} modal={false}>
						<div
							ref={refs.setFloating}
							style={floatingStyles}
							{...getFloatingProps()}
							className="z-50 w-64 h-full bg-surface-50-950 border-r border-surface-200-800
                         flex flex-col gap-4 p-4"
						>
							{/* Close icon */}
							<button className="self-end" onClick={() => setIsOpen(false)} aria-label="Close Drawer">
								<IconClose className="size-5" />
							</button>

							{/* Navigation links */}
							<nav className="flex flex-col gap-2">
								{navigation.map((item) => (
									<a key={item.label} className="btn hover:preset-tonal justify-between" href={item.href} onClick={() => setIsOpen(false)}>
										{item.label}
									</a>
								))}
							</nav>

							<p>afwafw</p>

							{/* Optional children content */}
							{/* <div className="flex-1 flex flex-col">{children}</div> */}
						</div>
					</FloatingFocusManager>
				</>
			)}
		</div>
	);
};
