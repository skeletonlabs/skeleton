import DownloadTrigger from '../anatomy/download-trigger.jsx';
import Frame from '../anatomy/frame.jsx';
import Overlay from '../anatomy/overlay.jsx';
import Pattern from '../anatomy/pattern.jsx';
import QrCodeRootContext from '../anatomy/root-context.jsx';
import RootProvider from '../anatomy/root-provider.jsx';
import Root from '../anatomy/root.jsx';

export const QrCode = Object.assign(Root, {
	Provider: RootProvider,
	Context: QrCodeRootContext,
	DownloadTrigger: DownloadTrigger,
	Frame: Frame,
	Pattern: Pattern,
	Overlay: Overlay,
});
