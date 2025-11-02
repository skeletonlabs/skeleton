import { getCollection, type CollectionEntry } from 'astro:content';
import type { Root, Table, TableCell, TableRow, Heading } from 'mdast';
import { visit, SKIP } from 'unist-util-visit';

// Load components at build time
const components = await getCollection('components');

function kebabToPascal(str: string) {
	return str
		.split('-')
		.map((part) => part.charAt(0).toUpperCase() + part.slice(1))
		.join('');
}

function createCell(value: string): TableCell {
	return {
		type: 'tableCell',
		children: [{ type: 'text', value }],
	};
}

function createTablesForComponent(component: CollectionEntry<'components'>, componentId: string): (Heading | Table)[] {
	const tables: (Heading | Table)[] = [];

	for (const type of component.data.types) {
		//Ex: TooltipRootProps -> Root
		const sectionTitle = type.name.replace(kebabToPascal(componentId), '').replace('Props', '').trim() || 'Props';

		tables.push({
			type: 'heading',
			depth: 3,
			children: [{ type: 'text', value: sectionTitle }],
		} satisfies Heading);

		const headerRow = {
			type: 'tableRow',
			children: ['Prop', 'Default', 'Type'].map((val) => ({
				type: 'tableCell',
				children: [{ type: 'text', value: val }],
			})),
		} satisfies TableRow;

		const bodyRows: TableRow[] = type.props.map((prop) => {
			const defaultValue = prop.JSDoc?.tags?.find((t) => t.name === 'default')?.value ?? '-';

			const typeWithDescription = prop.JSDoc?.description ? `${prop.type} ${prop.JSDoc.description}` : prop.type;

			return {
				type: 'tableRow',
				children: [createCell(prop.name ?? '-'), createCell(defaultValue), createCell(typeWithDescription)],
			};
		});

		const table: Table = {
			type: 'table',
			align: [],
			children: [headerRow, ...bodyRows],
		};

		tables.push(table);
	}

	return tables;
}

export function processApiTableComponents(root: Root, frameworks: CollectionEntry<'frameworks'>[], doc: CollectionEntry<'docs'>) {
	const frameworkId = frameworks[0].id;

	// Extract component name: framework-components/accordion -> accordion
	const pathParts = doc.id.split('/');
	const componentId = pathParts[pathParts.length - 1];

	visit(root, 'mdxJsxFlowElement', (node, index, parent) => {
		if (node.name !== 'ApiTable' || !parent || typeof index !== 'number') {
			return;
		}

		// Extract Component
		const componentAttr = node.attributes.find((attr: any) => attr.type === 'mdxJsxAttribute' && attr.name === 'component');
		const targetComponentId =
			componentAttr && typeof componentAttr.value === 'string' ? componentAttr.value.replace(/['"]/g, '') : componentId;
		const component = components.find((c) => c.id === `${frameworkId}/${targetComponentId}`);
		if (!component) {
			console.warn(`Component not found: ${frameworkId}/${targetComponentId}`);
			return;
		}
		// Tables Generation
		const tables = createTablesForComponent(component, targetComponentId);
		parent.children.splice(index, 1, ...tables);
		return [SKIP, index];
	});
}
