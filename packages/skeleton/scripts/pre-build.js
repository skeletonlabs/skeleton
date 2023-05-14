#!/usr/bin/env node

import { rmSync } from 'fs';

try {
	// We'll delete the .temp directory to force the regeneration of all of the TW Classes
	rmSync('.temp', { recursive: true });
} catch {
	// Directory doesn't exist, don't worry about it
}
