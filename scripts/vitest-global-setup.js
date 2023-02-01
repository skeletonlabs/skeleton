// https://stackoverflow.com/questions/73831370/vitest-crypto-randomuuid-is-not-a-function

import { randomUUID } from 'node:crypto';
window.crypto.randomUUID = randomUUID;