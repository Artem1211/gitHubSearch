import React from 'react';

import * as Styled from './PageLayout.styled';

type Props = {
	className?: string;
};

export const PageLayout: React.FC<Props> = ({ className, children }) => {
	return (
		<Styled.Wrapper className={className}>
			{children}
		</Styled.Wrapper>
	);
};
