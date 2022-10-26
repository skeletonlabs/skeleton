import type { Component } from './types';

interface MapperOutput {
	headings: string[]
	source: string[]
}

// Mapper: Props
export function sveldMapperProps(component: Component): MapperOutput {
	const { props } = component.sveld;
	const propsHeadings = ['Name', 'Type', 'Value', 'Description']
	// Filter props with undefined types (exclude getContext)
	const propsFiltered = props.filter((p: any) => p.type !== undefined);
	// Return table headings/source
	return {
		headings: propsHeadings,
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
export function sveldMapperSlots(component: Component): MapperOutput {
	const { slots } = component.sveld;
	const slotsHeadings = ['Name', 'Default', 'Fallback', 'Description']
	return {
		headings: slotsHeadings,
		source: slots.map((s: any) => {
			// prettier-ignore
			return [
				`<code>${s.name.replaceAll('__','')}</code>`,
				s.default ? '&check;' : '-',
				s.fallback ? '&check;' : '-',
				// s.slot_props ? s.slot_props : '-', // NOTE: we don't currently use this
				s.description ? s.description : '-'
			];
		})
	};
}

// Mapper: Events
export function sveldeMapperEvents(component: Component): MapperOutput {
	const { events } = component.sveld;
	const eventsHeadings = ['Name', 'Type', 'Element', 'Response', 'Description']
	return {
		headings: eventsHeadings,
		source: events.map((e: any) => {
			// prettier-ignore
			return [
				`<code>on:${e.name}</code>`,
				`<em>${e.type}</em>`,
				e.element ? escapeHtml(`<${e.element}>`) : '-',
				e.detail ? e.detail : '-',
				e.description ? e.description : '-'
			];
		})
	};
}

// ---

// https://stackoverflow.com/questions/6234773/can-i-escape-html-special-chars-in-javascript
// prettier-ignore
function escapeHtml(unsafe: string) {
    return unsafe
         .replace(/&/g, "&amp;")
         .replace(/</g, "&lt;")
         .replace(/>/g, "&gt;")
         .replace(/"/g, "&quot;")
         .replace(/'/g, "&#039;");
}

// ---

/*
FROM CHRIS:
Let's aim for something more like this. Rather than trying to format every
description element in every single Sveld item, we handle it per instance.
The idea being that prop desc tags may differ from slot desc tags. It also
allows us to pass unique settings per instance rather than just assuming
they'll all be the same.

Likewise we might follow the lead above and have unique versions of the desc parser
per each type of data as well so they can be purpose-built for only the description
data they are handling. Though the universal method above may suffice.
*/
// function propDescTagParser(d) {}

// ----

// export function parseDescriptionAndTagsFromJSDocs(jsDocs: string) {
// 	let description: string = '';
// 	let tags: { [key: string]: string } = {};
// 	let capturingDescription = true;
// 	let currentTag = '';
// 	let currentCapture = '';
// 	let currentChar = '';

// 	for (let x = 0; x < jsDocs.length; x++) {
// 		currentChar = jsDocs[x];
// 		switch (currentChar) {
// 			case '@':
// 				//tag at front wipes out description
// 				if (capturingDescription && x < 1) {
// 					capturingDescription = false;
// 				}
// 				// normal capture of leading description till a tag
// 				if (capturingDescription && currentCapture.length > 1) {
// 					description = currentCapture;
// 					currentCapture = '';
// 					capturingDescription = false;
// 				}
// 				//two tags in a row, stash the first before capturing name of second below.
// 				if (currentTag.length > 1) {
// 					tags[currentTag] = currentCapture;
// 					currentTag = '';
// 					currentCapture = '';
// 				}
// 				//at start of tag, seek till space char for tag name
// 				while (x != jsDocs.length && currentChar != ' ') {
// 					currentTag += currentChar;
// 					x++;
// 					currentChar = jsDocs[x];
// 				}
// 				break;
// 			default:
// 				// capturing value of description or tag
// 				currentCapture += currentChar;
// 				break;
// 		}
// 	}
// 	//if a tag finishes the jsDoc string
// 	if (currentTag.length) {
// 		tags[currentTag] = currentCapture;
// 	}
// 	return [description, tags];
// }
