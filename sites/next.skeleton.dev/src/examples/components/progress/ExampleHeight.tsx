import { Progress } from '@skeletonlabs/skeleton-react';

export const Page = () => {
  return (
    <div className="flex w-full flex-col gap-8">
      <Progress value={50} max={100} />
      <Progress value={50} max={100} height="h-4" />
      <Progress value={50} max={100} height="h-8" />
    </div>
  );
};
