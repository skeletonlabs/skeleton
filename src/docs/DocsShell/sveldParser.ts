import type { DocsShellComponentRef, ComponentDocs, PropDocs, Tags } from './types';

export function SveldOutputParser(componentRefs: DocsShellComponentRef | DocsShellComponentRef[] | undefined) {
	let comps: any[] = [];
	if (Array.isArray(componentRefs)) {
		comps = componentRefs;
	} else {
		comps = [componentRefs];
	}

	let parsedDocs: ComponentDocs[] = [];
	for (let comp of comps) {
		let compDocs: ComponentDocs = { name: comp.name, description: comp.docData.componentComment?.substring(1), props: [], accessibilityProps: [] };

		for (let prop of comp.docData.props) {
			let propDocs: PropDocs = { name: prop.name, defaultValue: prop.value, type: prop.type };
			// tags are embedded in the description field from sveld, split them out here and adjust the type of prop based on @a11y tag
			if (prop.description != undefined) {
				let splitDescriptions = prop.description.split('\n@');
				propDocs.description = splitDescriptions.shift();
				propDocs.tags = {};
				for (let tag of splitDescriptions) {
					let indexOfSpace = tag.indexOf(' ');
					propDocs.tags['@' + tag.substring(0, indexOfSpace)] = tag.substring(indexOfSpace + 1);
				}
				if (propDocs.tags['@a11y'] != undefined) {
					compDocs.accessibilityProps?.push(propDocs);
				} else {
					compDocs.props?.push(propDocs);
				}
			}
		}
		parsedDocs.push(compDocs);
	}
	return parsedDocs;
}
