import { createAttachmentKey } from 'svelte/attachments';
import { computePosition, autoUpdate, flip, offset, type Placement } from '@floating-ui/dom';

interface PopoverOptions {
	interaction?: 'click' | 'hover';
	placement?: Placement;
}

export class Popover {
	private options: PopoverOptions = {
		interaction: 'click',
		placement: 'bottom-start'
	};
	private open = $state(false);
	private referenceElement: HTMLElement | undefined = $state();
	private floatingElement: HTMLElement | undefined = $state();

	constructor(options?: PopoverOptions) {
		if (options) this.options = { ...this.options, ...options };
		$effect(() => {
			if (!this.referenceElement || !this.floatingElement) return;
			return autoUpdate(this.referenceElement, this.floatingElement, this.#updatePosition);
		});
	}

	reference() {
		const attrs = {
			[createAttachmentKey()]: (node: HTMLElement) => {
				this.referenceElement = node;
			},
			onclick: () => {},
			onmouseover: () => {},
			onmouseout: () => {}
		};
		// If click interaction
		if (this.options.interaction === 'click') {
			attrs['onclick'] = () => {
				this.open = !this.open;
			};
		}
		// If hover interaction
		if (this.options.interaction === 'hover') {
			attrs['onclick'] = () => {
				this.open = !this.open;
			};
			attrs['onmouseover'] = () => {
				this.open = true;
			};
			attrs['onmouseout'] = () => {
				this.open = false;
			};
		}
		return attrs;
	}

	floating() {
		return {
			[createAttachmentKey()]: (node: HTMLElement) => {
				this.floatingElement = node;
			}
		};
	}

	isOpen() {
		return this.open;
	}

	#updatePosition = async () => {
		if (!this.referenceElement || !this.floatingElement) {
			return;
		}
		const position = await computePosition(this.referenceElement, this.floatingElement, {
			placement: this.options.placement,
			middleware: [flip(), offset(8)]
		});
		const { x, y } = position;
		Object.assign(this.floatingElement.style, {
			left: `${x}px`,
			top: `${y}px`
		});
	};
}
