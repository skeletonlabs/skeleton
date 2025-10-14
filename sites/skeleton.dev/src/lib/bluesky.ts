import { AtpAgent } from '@atproto/api';

export const bluesky = new AtpAgent({
	service: 'https://api.bsky.app',
});
