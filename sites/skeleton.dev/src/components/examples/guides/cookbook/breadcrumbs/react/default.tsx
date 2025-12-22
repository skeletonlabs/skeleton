export default function Default() {
	return (
		<ol className="flex items-center gap-4">
			<li>
				<a className="opacity-60 hover:underline" href="#">
					Blog
				</a>
			</li>
			<li className="opacity-50" aria-hidden>
				&rsaquo;
			</li>
			<li>
				<a className="opacity-60 hover:underline" href="#">
					Category
				</a>
			</li>
			<li className="opacity-50" aria-hidden>
				&rsaquo;
			</li>
			<li>Article</li>
		</ol>
	);
}
