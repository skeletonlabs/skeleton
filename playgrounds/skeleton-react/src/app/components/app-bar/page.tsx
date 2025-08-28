import { Skull } from 'lucide-react';

import { AppBar } from '@skeletonlabs/skeleton-react';

export default function Page() {
	return (
		<>
			<h1 className="h1">AppBar</h1>
			<AppBar>
				<AppBar.Toolbar>
					<AppBar.ToolbarLead>
						<span>
							<Skull size={22} />
						</span>
						<span>Skeleton</span>
					</AppBar.ToolbarLead>
					<AppBar.ToolbarCenter>Skeleton</AppBar.ToolbarCenter>
					<AppBar.ToolbarTrail>
						<span>Skeleton</span>
						<span>
							<Skull size={22} />
						</span>
					</AppBar.ToolbarTrail>
				</AppBar.Toolbar>
			</AppBar>
			<h3 className="h3">Headline</h3>
			<AppBar>
				<AppBar.Toolbar>
					<AppBar.ToolbarLead>
						<span>
							<Skull size={22} />
						</span>
						<span>Skeleton</span>
					</AppBar.ToolbarLead>
					<AppBar.ToolbarTrail>
						<span>Skeleton</span>
						<span>
							<Skull size={22} />
						</span>
					</AppBar.ToolbarTrail>
				</AppBar.Toolbar>
				<AppBar.Headline base="text-center">
					<h1 className="h1">Headline</h1>
				</AppBar.Headline>
			</AppBar>
			<h3 className="h3">Sticky</h3>
			<div className="flex max-h-64 flex-col space-y-4 overflow-y-auto">
				<AppBar classes="sticky top-0">
					<AppBar.Toolbar>
						<AppBar.ToolbarLead>
							<span>
								<Skull size={22} />
							</span>
							<span>Skeleton</span>
						</AppBar.ToolbarLead>
						<AppBar.ToolbarCenter>Skeleton</AppBar.ToolbarCenter>
						<AppBar.ToolbarTrail>
							<span>Skeleton</span>
							<span>
								<Skull size={22} />
							</span>
						</AppBar.ToolbarTrail>
					</AppBar.Toolbar>
				</AppBar>
				<div>First line of the sticky AppBar</div>
				<div>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum minima suscipit ipsam ut reiciendis a quia maiores, facere
					adipisci accusamus animi nam porro cum dignissimos! Quibusdam asperiores aliquam reiciendis eligendi!
				</div>
				<div>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum minima suscipit ipsam ut reiciendis a quia maiores, facere
					adipisci accusamus animi nam porro cum dignissimos! Quibusdam asperiores aliquam reiciendis eligendi!
				</div>
				<div>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum minima suscipit ipsam ut reiciendis a quia maiores, facere
					adipisci accusamus animi nam porro cum dignissimos! Quibusdam asperiores aliquam reiciendis eligendi!
				</div>
				<div>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum minima suscipit ipsam ut reiciendis a quia maiores, facere
					adipisci accusamus animi nam porro cum dignissimos! Quibusdam asperiores aliquam reiciendis eligendi!
				</div>
				<div>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum minima suscipit ipsam ut reiciendis a quia maiores, facere
					adipisci accusamus animi nam porro cum dignissimos! Quibusdam asperiores aliquam reiciendis eligendi!
				</div>
				<div>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum minima suscipit ipsam ut reiciendis a quia maiores, facere
					adipisci accusamus animi nam porro cum dignissimos! Quibusdam asperiores aliquam reiciendis eligendi!
				</div>
				<div>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum minima suscipit ipsam ut reiciendis a quia maiores, facere
					adipisci accusamus animi nam porro cum dignissimos! Quibusdam asperiores aliquam reiciendis eligendi!
				</div>
				<div>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum minima suscipit ipsam ut reiciendis a quia maiores, facere
					adipisci accusamus animi nam porro cum dignissimos! Quibusdam asperiores aliquam reiciendis eligendi!
				</div>
				<div>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum minima suscipit ipsam ut reiciendis a quia maiores, facere
					adipisci accusamus animi nam porro cum dignissimos! Quibusdam asperiores aliquam reiciendis eligendi!
				</div>
				<div>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum minima suscipit ipsam ut reiciendis a quia maiores, facere
					adipisci accusamus animi nam porro cum dignissimos! Quibusdam asperiores aliquam reiciendis eligendi!
				</div>
				<div>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum minima suscipit ipsam ut reiciendis a quia maiores, facere
					adipisci accusamus animi nam porro cum dignissimos! Quibusdam asperiores aliquam reiciendis eligendi!
				</div>
				<div>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum minima suscipit ipsam ut reiciendis a quia maiores, facere
					adipisci accusamus animi nam porro cum dignissimos! Quibusdam asperiores aliquam reiciendis eligendi!
				</div>
				<div>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum minima suscipit ipsam ut reiciendis a quia maiores, facere
					adipisci accusamus animi nam porro cum dignissimos! Quibusdam asperiores aliquam reiciendis eligendi!
				</div>
				<div>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum minima suscipit ipsam ut reiciendis a quia maiores, facere
					adipisci accusamus animi nam porro cum dignissimos! Quibusdam asperiores aliquam reiciendis eligendi!
				</div>
				<div>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum minima suscipit ipsam ut reiciendis a quia maiores, facere
					adipisci accusamus animi nam porro cum dignissimos! Quibusdam asperiores aliquam reiciendis eligendi!
				</div>
				<div>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum minima suscipit ipsam ut reiciendis a quia maiores, facere
					adipisci accusamus animi nam porro cum dignissimos! Quibusdam asperiores aliquam reiciendis eligendi!
				</div>
			</div>
			<h3 className="h3">A11Y Keyboard</h3>
			<button type="button" className="btn preset-filled">
				Button before the AppBar
			</button>
			<AppBar>
				<AppBar.Toolbar>
					<AppBar.ToolbarLead>
						<button type="button" className="btn-icon preset-filled-primary-500" title="Menu" aria-label="Menu">
							<Skull size={22} />
						</button>
						<button type="button" className="btn preset-filled">
							Skeleton
						</button>
					</AppBar.ToolbarLead>
					<AppBar.ToolbarCenter>Skeleton</AppBar.ToolbarCenter>
					<AppBar.ToolbarTrail>
						<button type="button" className="btn preset-filled">
							Skeleton
						</button>
						<button type="button" className="btn-icon preset-filled-primary-500" title="Menu" aria-label="Menu">
							<Skull size={22} />
						</button>
					</AppBar.ToolbarTrail>
				</AppBar.Toolbar>
			</AppBar>
			<button type="button" className="btn preset-filled">
				Button after the AppBar
			</button>
			<h3 className="h3">RTL</h3>
			<div dir="rtl">
				<AppBar>
					<AppBar.Toolbar>
						<AppBar.ToolbarLead>
							<button type="button" className="btn-icon preset-filled-primary-500">
								<Skull size={22} />
							</button>
							<button type="button" className="btn preset-filled">
								lead
							</button>
						</AppBar.ToolbarLead>
						<AppBar.ToolbarCenter>Skeleton</AppBar.ToolbarCenter>
						<AppBar.ToolbarTrail>
							<button type="button" className="btn preset-filled">
								trail
							</button>
							<button type="button" className="btn-icon preset-filled-primary-500">
								<Skull size={22} />
							</button>
						</AppBar.ToolbarTrail>
					</AppBar.Toolbar>
					<AppBar.Headline>
						<h1 className="h1">مرحبا بك</h1>
					</AppBar.Headline>
				</AppBar>
			</div>
		</>
	);
}
