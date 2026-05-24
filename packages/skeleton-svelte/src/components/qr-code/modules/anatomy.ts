import DownloadTrigger from '../anatomy/download-trigger.svelte';
import Frame from '../anatomy/frame.svelte';
import Overlay from '../anatomy/overlay.svelte';
import Pattern from '../anatomy/pattern.svelte';
import RootContext from '../anatomy/root-context.svelte';
import RootProvider from '../anatomy/root-provider.svelte';
import Root from '../anatomy/root.svelte';

export const QrCode = Object.assign(Root, {
	Provider: RootProvider,
	Context: RootContext,
	DownloadTrigger: DownloadTrigger,
	Frame: Frame,
	Pattern: Pattern,
	Overlay: Overlay,
});
