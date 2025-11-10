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

function createTablesForComponent(component: CollectionEntry<'components'>) {
	const nodes: (Heading | Table)[] = [];
	for (const type of component.data.types) {
		const heading =
			type.name
				.replace(kebabToPascal(component.id.split('/').at(-1) ?? ''), '')
				.replace('Props', '')
				.replace('Root', '')
				.trim() || 'Root';
		nodes.push({
			type: 'heading',
			depth: 3,
			children: [{ type: 'text', value: heading }],
		});
		nodes.push({
			type: 'table',
			align: [],
			children: [
				{
					type: 'tableRow',
					children: ['Prop', 'Description', 'Type', 'Default'].map(createCell),
				},
				...type.props.map(
					(prop) =>
						({
							type: 'tableRow',
							children: [
								createCell(prop.name ?? '-'),
								createCell(prop.JSDoc.description ?? '-'),
								createCell(prop.type),
								createCell(prop.JSDoc?.tags?.find((tag) => tag.name === 'default')?.value ?? '-'),
							],
						}) satisfies TableRow,
				),
			],
		});
	}
	return nodes;
}

export function processApiReferenceComponents(root: Root) {
	visit(root, 'mdxJsxFlowElement', (node, index, parent) => {
		if (node.name !== 'ApiReference' || !parent || typeof index !== 'number') {
			return;
		}
		const idAttribute = node.attributes.find((attribute) => attribute.type === 'mdxJsxAttribute' && attribute.name === 'id');
		if (!idAttribute) {
			return;
		}
		const component = components.find((comp) => comp.id === idAttribute.value);
		if (!component) {
			return;
		}
		parent.children.splice(index, 1, ...createTablesForComponent(component));
		return [SKIP, index];
	});
}
