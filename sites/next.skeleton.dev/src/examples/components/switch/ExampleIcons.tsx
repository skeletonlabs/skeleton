import React from 'react';
import { Switch } from '@skeletonlabs/skeleton-react';
import { Check as IconCheck, X as IconX } from 'lucide-react';

export const Page: React.FC<any> = () => {
  const [icons, setIcons] = React.useState(false);

  return (
    <Switch
      id="icons"
      name="icons"
      stateActive="bg-secondary-500"
      checked={icons}
      onCheckedChange={setIcons}
      inactiveChild={<IconX size="14" />}
      activeChild={<IconCheck size="14" />}
    />
  );
};
