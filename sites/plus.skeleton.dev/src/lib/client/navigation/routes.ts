import type { LucideProps } from '@lucide/svelte';
import type { Component } from 'svelte';
import BellIcon from '@lucide/svelte/icons/bell';
import BlocksIcon from '@lucide/svelte/icons/blocks';
import ComponentIcon from '@lucide/svelte/icons/component';
import CreditCardIcon from '@lucide/svelte/icons/credit-card';
import FileTextIcon from '@lucide/svelte/icons/file-text';
import GraduationCapIcon from '@lucide/svelte/icons/graduation-cap';
import Grid3x3Icon from '@lucide/svelte/icons/grid-3x3';
import LayoutTemplateIcon from '@lucide/svelte/icons/layout-template';
import PaletteIcon from '@lucide/svelte/icons/palette';
import ScaleIcon from '@lucide/svelte/icons/scale';
import ShieldIcon from '@lucide/svelte/icons/shield';
import SquareIcon from '@lucide/svelte/icons/square';
import CodeIcon from '@lucide/svelte/icons/code';
import UserIcon from '@lucide/svelte/icons/user';
import UsersIcon from '@lucide/svelte/icons/users';

export interface Route {
	href: string;
	label: string;
	icon?: Component<LucideProps>;
	enabled?: boolean;
}

/** Common Routes - sorted alphabetically */
export const routes = {
	account: [
		{ href: '/account', label: 'Profile', icon: UserIcon, enabled: true },
		{ href: '/account/team', label: 'Team', icon: UsersIcon, enabled: true },
		{ href: '/account/billing', label: 'Billing', icon: CreditCardIcon, enabled: true },
		{ href: '/account/notifications', label: 'Notifications', icon: BellIcon, enabled: true },
		{ href: '/account/api', label: 'API & CLI', icon: CodeIcon, enabled: true },
	],
	content: [
		{ label: 'Blocks', href: '/content/blocks', icon: BlocksIcon, enabled: true },
		{ label: 'Templates', href: '/content/templates', icon: LayoutTemplateIcon, enabled: true },
		{ label: 'UI Kit', href: '/content/ui-kit', icon: ComponentIcon, enabled: true },
		{ label: 'Tutorials', href: '/content/tutorials', icon: GraduationCapIcon, enabled: true },
		{ label: 'Community', href: '/content/community', icon: UsersIcon, enabled: true },
	],
	design: [
		{ label: 'Theme Studio', href: '/content/design/themes', icon: PaletteIcon, enabled: true },
		{ label: 'Preset Studio', href: '/content/design/presets', icon: SquareIcon, enabled: true },
		{ label: 'Mesh Studio', href: '/content/design/mesh', icon: Grid3x3Icon, enabled: true },
	],
	legal: [
		{ label: 'Privacy', href: '/legal/privacy', icon: ShieldIcon, enabled: true },
		{ label: 'Terms', href: '/legal/terms', icon: FileTextIcon, enabled: true },
		{ label: 'License', href: '/legal/license', icon: ScaleIcon, enabled: true },
	],
	links: [
		{ label: 'Skeleton', href: 'https://www.skeleton.dev', enabled: true },
		{ label: 'GitHub', href: 'https://github.com/skeletonlabs/skeleton', enabled: true },
		{ label: 'Discord', href: 'https://discord.gg/EXqV7W8MtY', enabled: true },
		{ label: 'Bluesky', href: 'https://bsky.app/profile/skeleton.dev', enabled: true },
		{ label: 'Ko-Fi', href: 'https://ko-fi.com/skeletonlabs', enabled: true },
	],
	overview: [
		{ label: 'About', href: '/overview/about', enabled: true },
		{ label: 'Pricing', href: '/overview/pricing', enabled: true },
	],
} as const satisfies Record<string, readonly Route[]>;
