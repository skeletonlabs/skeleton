import type { Component } from './types';

import type { TableSource } from '$lib/components/Table/types';

// Mapper: Props
export function sveldMapperProps(component: Component): TableSource {
	const { props } = component.sveld;
	const propsHeadings = ['Name', 'Type', 'Value', 'Description'];
	// Filter props with undefined types (exclude getContext)
	const propsFiltered = props.filter((p: any) => p.type !== undefined);
	// Return table headings/source
	function cleanValue(value: string | undefined): string {
		if (value === undefined || value === '' || value === "''") return '-';
		return value;
	}
	return {
		head: propsHeadings,
		body: propsFiltered.map((p: any) => {
			return [`<code class="code">${p.name}<?code>`, `<em>${p.type}</em>`, cleanValue(p.value), p.description ? p?.description : '-'];
		})
	};
}

// Mapper: Slots
export function sveldMapperSlots(component: Component): TableSource {
	const { slots } = component.sveld;
	const slotsHeadings = ['Name', 'Default', 'Fallback', 'Description'];
	return {
		head: slotsHeadings,
		body: slots.map((s: any) => {
			// prettier-ignore
			return [
				`<code class="code">${s.name.replaceAll('__', '')}</code>`,
				s.default ? '&check;' : '-',
				s.fallback ? '&check;' : '-',
				// s.slot_props ? s.slot_props : '-', // NOTE: we don't currently use this
				s.description ? s.description : '-'
			];
		})
	};
}

// Mapper: Events
export function sveldMapperEvents(component: Component): TableSource {
	const { events } = component.sveld;
	const eventsHeadings = ['Name', 'Type', 'Element', 'Response', 'Description'];
	return {
		head: eventsHeadings,
		body: events.map((e: any) => {
			// prettier-ignore
			return [
				`<code class="code">on:${e.name}</code>`,
				`<em>${e.type}</em>`,
				e.element ? escapeHtml(`<${e.element}>`) : '-',
				e.detail ? e.detail : '-',
				e.description ? e.description : '-'
			];
		})
	};
}

// ---

// prettier-ignore
/**
 * @param unsafe The unsafe raw HTML string
 * @returns a nice, safely escaped string
 * @see https://stackoverflow.com/questions/6234773/can-i-escape-html-special-chars-in-javascript
 */
function escapeHtml(unsafe: string) {
	return unsafe
		.replace(/&/g, "&amp;")
		.replace(/</g, "&lt;")
		.replace(/>/g, "&gt;")
		.replace(/"/g, "&quot;")
		.replace(/'/g, "&#039;");
}
