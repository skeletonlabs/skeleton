import CodeBlock from './code-block';

export default function Page() {
	return (
		<div className="p-10 space-y-4">
			<CodeBlock code="npx sv create my-skeleton-app" lang="bash" />
			<CodeBlock code='<div class="bg-green-500"' lang="html" />
			<CodeBlock code=".foobar { background: green; }" lang="css" />
			<CodeBlock code="const foot = 'bar';" lang="js" />
		</div>
	);
}
