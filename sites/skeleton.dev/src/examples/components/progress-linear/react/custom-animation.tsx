import { ProgressLinear } from '@skeletonlabs/skeleton-react';

export default function CustomAnimation() {
	return (
		<>
			<ProgressLinear value={undefined}>
				<ProgressLinear.Track>
					<ProgressLinear.Range className="my-custom-animation" />
				</ProgressLinear.Track>
			</ProgressLinear>
			{/* Inlining styles like this only works in React 19+. For React 18 and below, add these styles to your global CSS file. */}
			<style>{`
                .my-custom-animation {
                    animation: my-custom-animation 2s ease-in-out infinite;
                }
                @keyframes my-custom-animation {
                    0% {
                        translate: -100%;
                    }
                    25% {
                        scale: 1;
                    }
                    50% {
                        scale: 0.5 1;
                        translate: 0%;
                    }
                    75% {
                        scale: 1;
                    }
                    100% {
                        translate: 100%;
                    }
                }
            `}</style>
		</>
	);
}
