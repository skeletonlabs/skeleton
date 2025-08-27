// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import catppuccin from '@skeletonlabs/skeleton/themes/catppuccin';
import cerberus from '@skeletonlabs/skeleton/themes/cerberus';
import concord from '@skeletonlabs/skeleton/themes/concord';
import crimson from '@skeletonlabs/skeleton/themes/crimson';
import fennec from '@skeletonlabs/skeleton/themes/fennec';
import hamlindigo from '@skeletonlabs/skeleton/themes/hamlindigo';
import legacy from '@skeletonlabs/skeleton/themes/legacy';
import mint from '@skeletonlabs/skeleton/themes/mint';
import modern from '@skeletonlabs/skeleton/themes/modern';
import mona from '@skeletonlabs/skeleton/themes/mona';
import nosh from '@skeletonlabs/skeleton/themes/nosh';
import nouveau from '@skeletonlabs/skeleton/themes/nouveau';
import pine from '@skeletonlabs/skeleton/themes/pine';
import reign from '@skeletonlabs/skeleton/themes/reign';
import rocket from '@skeletonlabs/skeleton/themes/rocket';
import rose from '@skeletonlabs/skeleton/themes/rose';
import sahara from '@skeletonlabs/skeleton/themes/sahara';
import seafoam from '@skeletonlabs/skeleton/themes/seafoam';
import terminus from '@skeletonlabs/skeleton/themes/terminus';
import vintage from '@skeletonlabs/skeleton/themes/vintage';
import vox from '@skeletonlabs/skeleton/themes/vox';
import wintry from '@skeletonlabs/skeleton/themes/wintry';

export interface Theme {
	name: string;
	css: string;
	emoji: string;
}

export const themes: Theme[] = [
	{
		name: 'catppuccin',
		css: catppuccin,
		emoji: '🐈'
	},
	{
		name: 'cerberus',
		css: cerberus,
		emoji: '🐺'
	},
	{
		name: 'concord',
		css: concord,
		emoji: '🤖'
	},
	{
		name: 'crimson',
		css: crimson,
		emoji: '🔴'
	},
	{
		name: 'fennec',
		css: fennec,
		emoji: '🦊'
	},
	{
		name: 'hamlindigo',
		css: hamlindigo,
		emoji: '👔'
	},
	{
		name: 'legacy',
		css: legacy,
		emoji: '💀'
	},
	{
		name: 'mint',
		css: mint,
		emoji: '🍃'
	},
	{
		name: 'modern',
		css: modern,
		emoji: '🌸'
	},
	{
		name: 'mona',
		css: mona,
		emoji: '🐙'
	},
	{
		name: 'nosh',
		css: nosh,
		emoji: '🥙'
	},
	{
		name: 'nouveau',
		css: nouveau,
		emoji: '👑'
	},
	{
		name: 'pine',
		css: pine,
		emoji: '🌲'
	},
	{
		name: 'reign',
		css: reign,
		emoji: '📒'
	},
	{
		name: 'rocket',
		css: rocket,
		emoji: '🚀'
	},
	{
		name: 'rose',
		css: rose,
		emoji: '🌷'
	},
	{
		name: 'sahara',
		css: sahara,
		emoji: '🏜️'
	},
	{
		name: 'seafoam',
		css: seafoam,
		emoji: '🧜‍♀️'
	},
	{
		name: 'terminus',
		css: terminus,
		emoji: '🌑'
	},
	{
		name: 'vintage',
		css: vintage,
		emoji: '📺'
	},
	{
		name: 'vox',
		css: vox,
		emoji: '👾'
	},
	{
		name: 'wintry',
		css: wintry,
		emoji: '🌨️'
	}
];
