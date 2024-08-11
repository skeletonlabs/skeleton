import { Rating } from '@skeletonlabs/skeleton-react';
import { Bone, Skull } from 'lucide-react';

export const Page = () => {
	return <Rating value={2} iconEmpty={<Bone size={24} />} iconFull={<Skull size={24} />}></Rating>;
};
