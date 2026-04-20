import DiscordIcon from 'virtual:icons/logos/discord-icon';
import GithubIcon from 'virtual:icons/logos/github-icon';

export const supportedOAuthProviders = [
	{
		id: 'github',
		name: 'GitHub',
		Icon: GithubIcon,
	},
	{
		id: 'discord',
		name: 'Discord',
		Icon: DiscordIcon,
	},
] as const;

export type SupportedOAuthProvider = (typeof supportedOAuthProviders)[number];
