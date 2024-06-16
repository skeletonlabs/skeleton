import React from 'react';
import { Avatar } from '@skeletonlabs/skeleton-react';

export const Page: React.FC<any> = () => {
  const imgSrc =
    'https://images.unsplash.com/photo-1620122303020-87ec826cf70d?q=80&w=256&h=256&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

  return <Avatar src={imgSrc} alt="skeleton" />;
};
