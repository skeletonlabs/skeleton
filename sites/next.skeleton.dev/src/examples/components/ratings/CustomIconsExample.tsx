import React from 'react';
import { Rating } from '@skeletonlabs/skeleton-react';
import { Bone, Skull } from 'lucide-react';

export const Page: React.FC<any> = () => {
	return <Rating value={3} max={6} width="w-44" iconEmpty={<Bone size={24} />} iconFull={<Skull size={24} />} />;
};
