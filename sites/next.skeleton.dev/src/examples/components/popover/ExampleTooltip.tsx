// Based On: https://floating-ui.com/docs/tooltip

import {
	autoUpdate,
	flip,
	offset,
	shift,
	useDismiss,
	useFloating,
	useFocus,
	useHover,
	useInteractions,
	useRole,
} from "@floating-ui/react";
import type React from "react";
import { useState } from "react";

export const Page: React.FC = () => {
	const [isOpen, setIsOpen] = useState(false);

	const { refs, floatingStyles, context } = useFloating({
		open: isOpen,
		onOpenChange: setIsOpen,
		middleware: [offset(10), flip(), shift()],
		placement: "top",
		whileElementsMounted: autoUpdate,
	});

	const hover = useHover(context, { move: false });
	const focus = useFocus(context);
	const dismiss = useDismiss(context);
	const role = useRole(context, { role: "tooltip" });

	const { getReferenceProps, getFloatingProps } = useInteractions([
		hover,
		focus,
		dismiss,
		role,
	]);

	return (
		<>
			{/* Trigger */}
			<button
				ref={refs.setReference}
				{...getReferenceProps()}
				className="underline"
			>
				Hover Me
			</button>
			{/* Tooltip */}
			{isOpen && (
				<div
					ref={refs.setFloating}
					style={floatingStyles}
					className="floating card preset-filled p-4"
					{...getFloatingProps()}
				>
					This is a tooltip.
				</div>
			)}
		</>
	);
};
