import React from 'react';
import { AppBar, ToolBar } from '@skeletonlabs/skeleton-react';
import { ArrowLeft, Paperclip, Calendar, CircleUser, Menu } from 'lucide-react';

export const Page: React.FC<any> = () => {
	return (
		<AppBar>
			<AppBar.Toolbar>
				<ToolBar.Lead>
					<ArrowLeft size={24} />
				</ToolBar.Lead>
				<ToolBar.Center classes="hidden sm:block">
					<span>Title</span>
				</ToolBar.Center>
				<ToolBar.Trail>
					<div className="hidden sm:flex space-x-4">
						<Paperclip size={20} />
						<Calendar size={20} />
						<CircleUser size={20} />
					</div>
					<div className="block sm:hidden">
						<Menu size={20} />
					</div>
				</ToolBar.Trail>
			</AppBar.Toolbar>
			<AppBar.Headline classes="sm:hidden">
				<h2 className="h2">Title</h2>
			</AppBar.Headline>
		</AppBar>
	);
};
