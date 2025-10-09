import { server } from '@/mcp-server';

server.registerTool(
	'list_components',
	{
		title: 'List Components',
		description: 'Lists all components available in Skeleton',
	},
	async () => {
		return {
			content: [],
		};
	},
);
