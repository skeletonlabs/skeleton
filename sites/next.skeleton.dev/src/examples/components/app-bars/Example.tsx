import React from 'react'
import { ArrowLeft, Paperclip, Calendar, CircleUser } from 'lucide-react'
import { AppBar, ToolBar } from '@skeletonlabs/skeleton-react';

export const Page: React.FC<any> = () => {
    return (
        <AppBar>
            <AppBar.Toolbar>
                <ToolBar.Lead>
                    <ArrowLeft size={24} />
                </ToolBar.Lead>
                <ToolBar.Trail>
                    <Paperclip size={24} />
                    <Calendar size={24} />
                    <CircleUser size={24} />
                </ToolBar.Trail>
            </AppBar.Toolbar>
            <AppBar.Headline>
                <h2 className="h2">Headline</h2>
            </AppBar.Headline>
        </AppBar>
    );
}
