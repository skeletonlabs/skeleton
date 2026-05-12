import { dev } from '$app/environment';
import DiscordIcon from 'virtual:icons/logos/discord-icon';
import DockerIcon from 'virtual:icons/logos/docker-icon';
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
	...(dev ? [{ id: 'local', name: 'Local', Icon: DockerIcon } as const] : []),
] as const;

export type SupportedOAuthProvider = (typeof supportedOAuthProviders)[number];
