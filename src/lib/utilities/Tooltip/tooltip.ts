import { popup } from '$lib/utilities/Popup/popup';
// Types
import type { PopupSettings } from '../Popup/types';
import type { TooltipSettings } from './types';

function randomUUID(): string {
	const random = Math.random();
	return Number(random).toString(32);
}

// Default tooltip container classes
const defaultContentClasses = ['text-xs', 'text-center', 'card', 'variant-filled', 'p-2', 'whitespace-nowrap', 'shadow-xl'];

export function tooltip(node: HTMLElement, args: TooltipSettings) {
	const { content, arrow, ...remainingArgs } = args;

	if (!args.event || !content) return;

	// Generate unique ID for tooltip
	const id = randomUUID();

	const popupArgs: PopupSettings = {
		target: id,
		...remainingArgs
	}

	// If user content, create div on the fly
	if (args.content) {
		const elemPopup = document.createElement('span');
		elemPopup.innerHTML = args.content;
		elemPopup.setAttribute('data-popup', id);
		elemPopup.classList.add(...defaultContentClasses);
		document.body.appendChild(elemPopup); // Add arrow div to body
		
		if (arrow) {
			const elemArrow = document.createElement('div');
			elemArrow.classList.add('arrow', 'variant-filled');
			elemPopup.appendChild(elemArrow);
		}
	}

	popup(node, popupArgs);
}

	// TODO: Destroy at fade?