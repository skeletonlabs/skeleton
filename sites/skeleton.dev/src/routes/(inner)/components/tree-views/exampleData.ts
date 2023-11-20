import type { TreeViewNode } from '@skeletonlabs/skeleton';
import ExampleComponent from './exampleComponent.svelte';

export const nodes: TreeViewNode[] = [
	{
		id: 'programming',
		content: 'programming',
		value: 'programming',
		children: [
			{
				id: 'language',
				content: 'language',
				value: 'language',
				children: [
					{
						id: 'javascript',
						content: 'javascript',
						value: 'javascript'
					},
					{
						id: 'c#',
						content: 'c#',
						value: 'c#'
					},
					{
						id: 'rust',
						content: 'rust',
						value: 'rust'
					}
				]
			},
			{
				content: 'database',
				value: 'database',
				id: 'database',
				children: [
					{
						id: 'mongodb',
						content: 'mongodb',
						value: 'mongodb'
					},
					{
						id: 'mssql',
						content: 'mssql',
						value: 'mssql'
					},
					{
						id: 'casandra',
						content: 'casandra',
						value: 'casandra'
					}
				]
			},
			{
				content: 'framework',
				value: 'framework',
				id: 'framework',
				children: [
					{
						id: 'svelte',
						content: 'svelte',
						value: 'svelte'
					},
					{
						id: 'angular',
						content: 'angular',
						value: 'angular'
					},
					{
						id: 'react',
						content: 'react',
						value: 'react'
					}
				]
			}
		]
	},
	{
		content: 'books',
		value: 'books',
		id: 'books',
		children: [
			{
				id: 'clean code',
				content: 'clean code',
				value: 'clean code',
				children: [
					{
						id: 'clean code - section 1',
						content: 'clean code - section 1',
						value: 'clean code - section 1'
					},
					{
						id: 'clean code - section 2',
						content: 'clean code - section 2',
						value: 'clean code - section 2'
					},
					{
						id: 'clean code - section 3',
						content: 'clean code - section 3',
						value: 'clean code - section 3'
					}
				]
			},
			{
				id: 'structure',
				content: 'structure',
				value: 'structure',
				children: [
					{
						id: 'structure - section 1',
						content: 'structure - section 1',
						value: 'structure - section 1'
					},
					{
						id: 'structure - section 2',
						content: 'structure - section 2',
						value: 'structure - section 2'
					},
					{
						id: 'structure - section 3',
						content: 'structure - section 3',
						value: 'structure - section 3'
					}
				]
			},
			{
				id: 'clean coder',
				content: 'clean coder',
				value: 'clean coder',
				children: [
					{
						id: 'clean coder - section 1',
						content: 'clean coder - section 1',
						value: 'clean coder - section 1'
					},
					{
						id: 'clean coder - section 2',
						content: 'clean coder - section 2',
						value: 'clean coder - section 2'
					},
					{
						id: 'clean coder - section 3',
						content: 'clean coder - section 3',
						value: 'clean coder - section 3'
					}
				]
			}
		]
	},
	{
		id: 'series',
		content: 'series',
		value: 'series',
		children: [
			{
				id: 'Mr. Robot',
				content: 'Mr. Robot',
				value: 'Mr. Robot',
				children: [
					{
						id: 'Mr. Robot - season 1',
						content: 'Mr. Robot - season 1',
						value: 'Mr. Robot - season 1'
					},
					{
						id: 'Mr. Robot - season 2',
						content: 'Mr. Robot - season 2',
						value: 'Mr. Robot - season 2'
					},
					{
						id: 'Mr. Robot - season 3',
						content: 'Mr. Robot - season 3',
						value: 'Mr. Robot - season 3'
					}
				]
			},
			{
				id: 'silicon valley',
				content: 'silicon valley',
				value: 'silicon valley',
				children: [
					{
						id: 'silicon valley - season 1',
						content: 'silicon valley - season 1',
						value: 'silicon valley - season 1'
					},
					{
						id: 'silicon valley - season 2',
						content: 'silicon valley - season 2',
						value: 'silicon valley - season 2'
					},
					{
						id: 'silicon valley - season 3',
						content: 'silicon valley - season 3',
						value: 'silicon valley - season 3'
					}
				]
			},
			{
				id: 'code monkeys',
				content: 'code monkeys',
				value: 'code monkeys',
				children: [
					{
						id: 'code monkeys - season 1',
						content: 'code monkeys - season 1',
						value: 'code monkeys - season 1'
					},
					{
						id: 'code monkeys - season 2',
						content: 'code monkeys - season 2',
						value: 'code monkeys - season 2'
					},
					{
						id: 'code monkeys - season 3',
						content: 'code monkeys - season 3',
						value: 'code monkeys - season 3'
					}
				]
			}
		]
	}
];

export const leadExampleNodes: TreeViewNode[] = [
	{
		id: 'person1',
		content: 'Susan',
		lead: ExampleComponent,
		leadProps: {
			avatarId: 31
		}
	},
	{
		id: 'person2',
		content: 'Michael',
		lead: ExampleComponent,
		leadProps: {
			avatarId: 14
		}
	},
	{
		id: 'person3',
		content: 'Melissa',
		lead: ExampleComponent,
		leadProps: {
			avatarId: 9
		}
	}
];
