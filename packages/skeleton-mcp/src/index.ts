import { server } from '@/mcp-server';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';

async function main() {
	const transport = new StdioServerTransport();
	await server.connect(transport);
	console.error('Skeleton MCP Server running on stdio');
}

main().catch((error) => {
	console.error('Fatal error in main():', error);
	process.exit(1);
});
