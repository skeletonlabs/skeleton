import React from 'react';
import { Switch } from '@skeletonlabs/skeleton-react';

export const Page: React.FC<any> = () => {
  const [example, setExample] = React.useState(false);

  return <Switch id="example" name="example" checked={example} onCheckedChange={setExample} />;
};
