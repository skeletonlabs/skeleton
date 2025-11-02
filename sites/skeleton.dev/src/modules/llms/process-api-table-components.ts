import { getActiveFramework } from '../framework';
import { getComponentIdFromURL } from '../get-component-id-from-url';
import type { GetMarkdownFromDocContext } from './get-markdown-from-doc';
import { getCollection, type CollectionEntry } from 'astro:content';
import type { Root, Table, TableCell, TableRow, Heading } from 'mdast';
import { visit, SKIP } from 'unist-util-visit';

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

function createTablesForComponent(component: CollectionEntry<'components'>): (Heading | Table)[] {
	const tables: (Heading | Table)[] = [];

	for (const type of component.data.types) {
		// TooltipRootProps -> Root
		const sectionTitle = type.name.replace(kebabToPascal(component.id), '').replace('Props', '').trim() || 'Props';

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

export function processApiTableComponents(root: Root, context: GetMarkdownFromDocContext) {
	visit(root, 'mdxJsxFlowElement', (node, index, parent) => {
		if (node.name !== 'ApiTable' || !parent || typeof index !== 'number') {
			return;
		}
		const componentAttribute = node.attributes.find(
			(attribute) => attribute.type === 'mdxJsxAttribute' && attribute.name === 'component' && attribute.value,
		);
		const frameworkAttribute = node.attributes.find(
			(attribute) => attribute.type === 'mdxJsxAttribute' && attribute.name === 'framework' && attribute.value,
		);

		const componentId = componentAttribute ? componentAttribute.value : getComponentIdFromURL(context.url);
		const frameworkId = frameworkAttribute ? frameworkAttribute.value : getActiveFramework(context.params).id;
		const component = components.find((c) => c.id === `${frameworkId}/${componentId}`);
		if (!component) {
			throw new Error(`Component not found: ${frameworkId}/${componentId}`);
		}
		parent.children.splice(index, 1, ...createTablesForComponent(component));
		return [SKIP, index];
	});
}
