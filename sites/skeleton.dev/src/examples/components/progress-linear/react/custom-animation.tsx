import { ProgressLinear } from '@skeletonlabs/skeleton-react';

export default function CustomAnimation() {
	return (
		<>
			<ProgressLinear value={null}>
				<ProgressLinear.Track>
					<ProgressLinear.Range className="animate-[custom-animation_2s_ease-in-out_infinite]" />
				</ProgressLinear.Track>
			</ProgressLinear>
			<style>{`
                @keyframes custom-animation {
                    from {
                        scale: 0.5 1;
                        transform: translateX(-200%);
                    }
                    25% {
                        transform: translateX(50%);
                    }
                    50% {
                        transform: translateX(-50%);
                    }
                    75% {
                        transform: translateX(150%);
                    }
                    to {
                        scale: 0.5 1;
                        transform: translateX(200%);
                    }
                }
            `}</style>
		</>
	);
}
