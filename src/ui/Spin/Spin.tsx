import React from 'react';

type Props = {
	className?: string;
};

export const Spin: React.FC<Props> = ({ className }) => {
	return (
		<svg
			className={className}
			xmlns='http://www.w3.org/2000/svg'
			width='28px'
			height='28px'
			viewBox='0 0 100 100'
			preserveAspectRatio='xMidYMid'
		>
			<circle
				cx='50'
				cy='50'
				r='33'
				strokeWidth='8'
				stroke='#4188f3'
				strokeDasharray='51.83627878423159 51.83627878423159'
				fill='none'
				strokeLinecap='round'
				transform='rotate(3.1313 50 50)'
			>
				<animateTransform
					attributeName='transform'
					type='rotate'
					repeatCount='indefinite'
					dur='0.7407407407407407s'
					keyTimes='0;1'
					values='0 50 50;360 50 50'
				/>
			</circle>
		</svg>
	);
};
