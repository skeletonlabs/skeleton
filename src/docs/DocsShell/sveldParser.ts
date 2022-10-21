import type { DocsShellComponentRef } from "./types";

export function SveldOutputParser(components: DocsShellComponentRef | DocsShellComponentRef[] | undefined) {
	console.log("type", typeof components)
	
	if (typeof components == 'object') {
		let foo = [components]
	}
}