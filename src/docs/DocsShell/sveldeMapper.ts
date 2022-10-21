import type { Sveld } from './types';

// Mapper: Props
export function sveldMapperProps(sveld: Sveld): any {
	const { props } = sveld.source;
	// Filter props with undefined types (exclude getContext)
	const propsFiltered = props.filter((p: any) => p.type !== undefined);
	// Return table headings/source
	return {
		headings: ['Name', 'Type', 'Value', 'Description'],
		source: propsFiltered.map((p: any) => {
			// prettier-ignore
			return [
				`<code>${p.name}<?code>`,
				`<em>${p.type}</em>`,
				!["''", undefined].includes(p.value) ? p.value : '-',
				p.description ? p.description : '-'
			];
		})
	};
}

// Mapper: Slots
export function sveldMapperSlots(sveld: Sveld): any {
	const { slots } = sveld.source;
	return {
		headings: ['Name', 'Default', 'Fallback', 'Props'],
		source: slots.map((s: any) => {
			// prettier-ignore
			return [
				`<code>${s.name.replaceAll('__','')}</code>`,
				s.default ? '&check;' : '-',
				s.fallback ? s.fallback : '-',
				s.slot_props ? s.slot_props : '-'
			];
		})
	};
}

// Mapper: Slots
export function sveldeMapperEvents(sveld: Sveld): any {
	const { events } = sveld.source;
	return {
		headings: ['Name', 'Type', 'Element'],
		source: events.map((e: any) => {
			// prettier-ignore
			return [
				`<code>${e.name}</code>`,
				`<em>${e.type}</em>`,
				e.element
				
			];
		})
	};
}
