import { server } from '@/mcp-server';

server.registerTool(
	'list_frameworks',
	{
		title: 'List Frameworks',
		description: 'Lists all frameworks available in Skeleton',
	},
	async () => {
		return {
			content: [],
		};
	},
);
