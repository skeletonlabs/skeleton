import React from 'react';
import { AppBar } from '@skeletonlabs/skeleton-react';
import { ArrowLeft, Paperclip, Calendar, CircleUser } from 'lucide-react';

export const Page: React.FC = () => {
	return (
		<AppBar>
			<AppBar.Toolbar>
				<AppBar.ToolbarLead>
					<ArrowLeft size={24} />
				</AppBar.ToolbarLead>
				<AppBar.ToolbarCenter>Title</AppBar.ToolbarCenter>
				<AppBar.ToolbarTrail>
					<Paperclip size={20} />
					<Calendar size={20} />
					<CircleUser size={20} />
				</AppBar.ToolbarTrail>
			</AppBar.Toolbar>
		</AppBar>
	);
};
