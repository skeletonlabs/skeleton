import Bluesky from '@/assets/logos/bluesky.svg';
import Discord from '@/assets/logos/discord.svg';
import Github from '@/assets/logos/github.svg';
import Youtube from '@/assets/logos/youtube.svg';

export const socialLinks = [
	{
		href: 'https://github.com/skeletonlabs/skeleton',
		label: 'GitHub',
		icon: Github,
	},
	{
		href: 'https://discord.gg/EXqV7W8MtY',
		label: 'Discord',
		icon: Discord,
	},
	{
		href: 'https://bsky.app/profile/skeleton.dev',
		label: 'Bluesky',
		icon: Bluesky,
	},
	{
		href: 'https://www.youtube.com/@skeletonlabs',
		label: 'YouTube',
		icon: Youtube,
	},
] as const;
