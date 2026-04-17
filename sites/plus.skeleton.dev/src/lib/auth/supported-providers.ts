import type { Provider } from '@supabase/supabase-js';
import GithubIcon from 'virtual:icons/logos/github-icon';
import DiscordIcon from 'virtual:icons/logos/discord-icon';

export const SUPPORTED_PROVIDERS = [
	{
		name: 'github',
		icon: GithubIcon,
	},
	{
		name: 'discord',
		icon: DiscordIcon,
	},
] as const satisfies ReadonlyArray<{
	name: Provider;
	icon: typeof GithubIcon;
}>;
