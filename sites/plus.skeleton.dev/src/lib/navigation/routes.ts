import type { LucideProps } from '@lucide/svelte';
import type { Component } from 'svelte';
import BellIcon from '@lucide/svelte/icons/bell';
import BlocksIcon from '@lucide/svelte/icons/blocks';
import LayersIcon from '@lucide/svelte/icons/layers';
import CreditCardIcon from '@lucide/svelte/icons/credit-card';
// import FileTextIcon from '@lucide/svelte/icons/file-text';
import GraduationCapIcon from '@lucide/svelte/icons/graduation-cap';
import Grid3x3Icon from '@lucide/svelte/icons/grid-3x3';
import LayoutTemplateIcon from '@lucide/svelte/icons/layout-template';
import PaletteIcon from '@lucide/svelte/icons/palette';
import PaintbrushIcon from '@lucide/svelte/icons/paintbrush';
import ScaleIcon from '@lucide/svelte/icons/scale';
// import ShieldIcon from '@lucide/svelte/icons/shield';
import SqareRoundCornerIcon from '@lucide/svelte/icons/square-round-corner';
import CodeIcon from '@lucide/svelte/icons/code';
import UserIcon from '@lucide/svelte/icons/user';
import UsersIcon from '@lucide/svelte/icons/users';
import { resolve } from '$app/paths';

export interface Route {
	href: string;
	label: string;
	icon?: Component<LucideProps>;
	enabled?: boolean;
}

/** Common Routes */
export const routes = {
	account: [
		{ href: resolve('/account'), label: 'Profile', icon: UserIcon, enabled: true },
		{ href: resolve('/account/team'), label: 'Team', icon: UsersIcon, enabled: true },
		{ href: resolve('/account/billing'), label: 'Billing', icon: CreditCardIcon, enabled: true },
		{ href: resolve('/account/notifications'), label: 'Notifications', icon: BellIcon, enabled: true },
		{ href: resolve('/account/api'), label: 'API & CLI', icon: CodeIcon, enabled: true },
	],
	content: [
		{ label: 'Themes', href: resolve('/content/themes'), icon: PaletteIcon, enabled: false },
		{ label: 'Blocks', href: resolve('/content/blocks'), icon: BlocksIcon, enabled: true },
		{ label: 'Templates', href: resolve('/content/templates'), icon: LayoutTemplateIcon, enabled: true },
		{ label: 'Tutorials', href: resolve('/content/tutorials'), icon: GraduationCapIcon, enabled: true },
		// { label: 'UI Kit', href: resolve('/content/ui-kit'), icon: LayersIcon, enabled: true },
		{ label: 'UI Kit', href: resolve('/content/community/etesie'), icon: LayersIcon, enabled: true } /* temporary */,
		{ label: 'Community', href: resolve('/content/community'), icon: UsersIcon, enabled: true },
	],
	design: [
		{ label: 'Theme Studio', href: resolve('/content/design/themes'), icon: PaintbrushIcon, enabled: true },
		{ label: 'Preset Studio', href: resolve('/content/design/presets'), icon: SqareRoundCornerIcon, enabled: true },
		{ label: 'Mesh Studio', href: resolve('/content/design/mesh'), icon: Grid3x3Icon, enabled: false },
	],
	legal: [
		// NOTE: Keep this during initial launch, all launch content is FOSS
		{ label: 'License', href: 'https://github.com/skeletonlabs/skeleton?tab=MIT-1-ov-file', icon: ScaleIcon, enabled: true },
		// { label: 'Privacy', href: resolve('/legal/privacy'), icon: ShieldIcon, enabled: true },
		// { label: 'Terms', href: resolve('/legal/terms'), icon: FileTextIcon, enabled: true },
		// { label: 'License', href: resolve('/legal/license'), icon: ScaleIcon, enabled: true },
	],
	links: [
		{ label: 'Skeleton', href: 'https://www.skeleton.dev', enabled: true },
		{ label: 'GitHub', href: 'https://github.com/skeletonlabs/skeleton', enabled: true },
		{ label: 'Discord', href: 'https://discord.gg/EXqV7W8MtY', enabled: true },
		{ label: 'Bluesky', href: 'https://bsky.app/profile/skeleton.dev', enabled: true },
		{ label: 'Ko-Fi', href: 'https://ko-fi.com/skeletonlabs', enabled: true },
	],
	overview: [
		{ label: 'About', href: resolve('/overview/about'), enabled: true },
		{ label: 'Pricing', href: resolve('/overview/pricing'), enabled: false },
	],
} as const satisfies Record<string, readonly Route[]>;
