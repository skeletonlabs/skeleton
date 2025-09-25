import { AtpAgent } from '@atproto/api';

const blueSkyAgent = new AtpAgent({
	service: 'https://api.bsky.app',
});

export { blueSkyAgent };
