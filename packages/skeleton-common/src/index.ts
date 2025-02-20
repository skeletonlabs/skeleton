// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import catppuccin from '../../skeleton/src/themes/catppuccin.css?raw';
import cerberus from '../../skeleton/src/themes/cerberus.css?raw';
import concord from '../../skeleton/src/themes/concord.css?raw';
import crimson from '../../skeleton/src/themes/crimson.css?raw';
import fennec from '../../skeleton/src/themes/fennec.css?raw';
import hamlindigo from '../../skeleton/src/themes/hamlindigo.css?raw';
import legacy from '../../skeleton/src/themes/legacy.css?raw';
import mint from '../../skeleton/src/themes/mint.css?raw';
import modern from '../../skeleton/src/themes/modern.css?raw';
import mona from '../../skeleton/src/themes/mona.css?raw';
import nosh from '../../skeleton/src/themes/nosh.css?raw';
import nouveau from '../../skeleton/src/themes/nouveau.css?raw';
import pine from '../../skeleton/src/themes/pine.css?raw';
import reign from '../../skeleton/src/themes/reign.css?raw';
import rocket from '../../skeleton/src/themes/rocket.css?raw';
import rose from '../../skeleton/src/themes/rose.css?raw';
import sahara from '../../skeleton/src/themes/sahara.css?raw';
import seafoam from '../../skeleton/src/themes/seafoam.css?raw';
import terminus from '../../skeleton/src/themes/terminus.css?raw';
import vintage from '../../skeleton/src/themes/vintage.css?raw';
import vox from '../../skeleton/src/themes/vox.css?raw';
import wintry from '../../skeleton/src/themes/wintry.css?raw';

export const themes = [
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
] as const;
