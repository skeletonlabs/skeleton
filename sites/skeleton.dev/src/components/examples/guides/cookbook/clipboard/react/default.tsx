export default function Default() {
	async function handleCopy() {
		const data = 'Hello World!';
		await navigator.clipboard.writeText(data);
		alert(`Copied "${data}" to clipboard!`);
	}

	return (
		<button className="btn preset-filled" onClick={handleCopy}>
			Copy to Clipboard
		</button>
	);
}
