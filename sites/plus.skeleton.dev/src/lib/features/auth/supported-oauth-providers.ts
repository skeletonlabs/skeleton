import DiscordIcon from 'virtual:icons/simple-icons/discord';
import GithubIcon from 'virtual:icons/simple-icons/github';

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
