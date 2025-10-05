import Bluesky from '@/images/brand/bluesky.svg';
import Discord from '@/images/brand/discord.svg';
import Github from '@/images/brand/github.svg';
import Youtube from '@/images/brand/youtube.svg';

export const socialLinks = [
	{
		href: 'https://github.com/skeletonlabs/skeleton',
		label: 'GitHub',
		Icon: Github,
	},
	{
		href: 'https://discord.gg/EXqV7W8MtY',
		label: 'Discord',
		Icon: Discord,
	},
	{
		href: 'https://bsky.app/profile/skeleton.dev',
		label: 'Bluesky',
		Icon: Bluesky,
	},
	{
		href: 'https://www.youtube.com/@skeletonlabs',
		label: 'YouTube',
		Icon: Youtube,
	},
] as const;
