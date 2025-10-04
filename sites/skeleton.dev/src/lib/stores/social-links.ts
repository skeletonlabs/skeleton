import { atom } from 'nanostores';

interface SocialLink {
	href: string;
	label: string;
	icon: string;
}

export const socialLinks = atom<SocialLink[]>([
	{
		href: 'https://github.com/skeletonlabs/skeleton',
		label: 'GitHub',
		icon: 'github',
	},
	{
		href: 'https://discord.gg/EXqV7W8MtY',
		label: 'Discord',
		icon: 'discord',
	},
	{
		href: 'https://bsky.app/profile/skeleton.dev',
		label: 'Bluesky',
		icon: 'bluesky',
	},
	{
		href: 'https://www.youtube.com/@skeletonlabs',
		label: 'YouTube',
		icon: 'youtube',
	},
]);
