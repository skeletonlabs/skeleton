#!/usr/bin/env node
import { readFileSync, writeFileSync } from 'fs'

//Put the exports field back into package.json so that monorepos can work again
let packageJson = readFileSync('package.json').toString()
packageJson = packageJson.slice(0, packageJson.lastIndexOf('}')-1) //strip closing }
packageJson +=
`,
	"exports": {
		".": "./src/lib/index.ts",
		"./themes/*": "./src/lib/themes/*",
		"./styles/*": "./src/lib/styles/*",
		"./tailwind/*": "./src/lib/tailwind/*"
	}
}`

writeFileSync('package.json', packageJson);

