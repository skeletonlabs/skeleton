import Content from '../anatomy/content.jsx';
import Edge from '../anatomy/edge.jsx';
import MarqueeRootContext from '../anatomy/root-context.jsx';
import RootProvider from '../anatomy/root-provider.jsx';
import Root from '../anatomy/root.jsx';
import Viewport from '../anatomy/viewport.jsx';

export const Marquee = Object.assign(Root, {
	Provider: RootProvider,
	Context: MarqueeRootContext,
	Viewport: Viewport,
	Content: Content,
	Edge: Edge,
});
