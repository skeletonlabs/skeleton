import React from 'react';
import { AppBar } from '@skeletonlabs/skeleton-react';
import { ArrowLeft, Paperclip, Calendar, CircleUser, Menu } from 'lucide-react';

export const Page: React.FC<any> = () => {
  return (
    <AppBar>
      <AppBar.Toolbar>
        <AppBar.ToolbarLead>
          <ArrowLeft size={24} />
        </AppBar.ToolbarLead>
        <AppBar.ToolbarCenter classes="hidden sm:block">
          <span>Title</span>
        </AppBar.ToolbarCenter>
        <AppBar.ToolbarTrail>
          <div className="hidden space-x-4 sm:flex">
            <Paperclip size={20} />
            <Calendar size={20} />
            <CircleUser size={20} />
          </div>
          <div className="block sm:hidden">
            <Menu size={20} />
          </div>
        </AppBar.ToolbarTrail>
      </AppBar.Toolbar>
      <AppBar.Headline classes="sm:hidden">
        <h2 className="h2">Title</h2>
      </AppBar.Headline>
    </AppBar>
  );
};
