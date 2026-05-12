import { dev } from '$app/environment';
import DiscordIcon from 'virtual:icons/simple-icons/discord';
import DockerIcon from 'virtual:icons/simple-icons/docker';
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
	...(dev
		? [
				{
					id: 'local',
					name: 'Local',
					Icon: DockerIcon,
				} as const,
			]
		: []),
] as const;

export type SupportedOAuthProvider = (typeof supportedOAuthProviders)[number];
