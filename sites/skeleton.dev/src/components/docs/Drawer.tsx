import React, { useEffect, useState } from 'react';
import {
	useTransitionStyles,
	useFloating,
	autoUpdate,
	offset,
	useClick,
	useDismiss,
	useRole,
	useInteractions,
	FloatingFocusManager,
	FloatingOverlay
} from '@floating-ui/react';
import { Menu as IconMenu, X as IconClose } from 'lucide-react';

interface DrawerProps {
	children?: React.ReactNode;
}

export const Drawer: React.FC<DrawerProps> = ({ children }) => {
	const [isOpen, setIsOpen] = useState(false);

	const [viewportSize, setViewportSize] = useState({
		width: typeof window !== 'undefined' ? window.innerWidth : 0,
		height: typeof window !== 'undefined' ? window.innerHeight : 0
	});

	useEffect(() => {
		function updateSize() {
			setViewportSize({
				width: window.innerWidth,
				height: window.innerHeight
			});
		}
		// Floating UI React might affect CSS classes such as `h-screen` which causes an unintended gap below the viewport, this is a temporary fix.
		updateSize();
		window.addEventListener('resize', updateSize);

		return () => {
			window.removeEventListener('resize', updateSize);
		};
	}, []);

	const { refs, context } = useFloating({
		open: isOpen,
		onOpenChange: setIsOpen,
		middleware: [offset(0)],
		whileElementsMounted: autoUpdate
	});
	const { styles: transitionStyles, isMounted } = useTransitionStyles(context, {
		initial: { transform: 'translateX(-100%)' },
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
				<FloatingOverlay
					lockScroll
					className="fixed inset-0 bg-black/50 z-50"
					style={{
						width: `${viewportSize.width}px`,
						height: `${viewportSize.height}px`
					}}
				>
					<FloatingFocusManager context={context} modal={false}>
						<div
							ref={refs.setFloating}
							{...getFloatingProps()}
							style={{
								...transitionStyles,
								height: `${viewportSize.height}px`
							}}
							className="fixed top-0 left-0 bottom-0 bg-surface-100-900 w-2xs p-4 space-y-8 overflow-y-auto shadow-xl"
						>
							{/* Header */}
							<div className="px-2 flex justify-between items-center">
								<h3 className="h3">Skeleton</h3>
								<button onClick={() => setIsOpen(false)} aria-label="Close Drawer">
									<IconClose className="size-5" />
								</button>
							</div>

							{/* Navigation */}
							{children}
						</div>
					</FloatingFocusManager>
				</FloatingOverlay>
			)}
		</div>
	);
};
