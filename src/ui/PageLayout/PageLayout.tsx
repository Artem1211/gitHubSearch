import React from 'react';

import * as Styled from './PageLayout.styled';

type Props = {
	className?: string;
	renderHeader?: () => React.ReactNode;
};

export const PageLayout: React.FC<Props> = ({ className, children, renderHeader }) => {
	return (
		<Styled.Wrapper className={className}>
			{renderHeader && <Styled.Header>{renderHeader()}</Styled.Header>}
			{children}
		</Styled.Wrapper>
	);
};
