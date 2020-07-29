import React from 'react';

import * as Styled from './Box.styled';

type Props = {
	className?: string;
	renderHeader?: () => React.ReactNode;
};

export const Box: React.FC<Props> = ({ className, children, renderHeader }) => {
	return (
		<Styled.Wrapper className={className}>
			{renderHeader && <Styled.Header>{renderHeader()}</Styled.Header>}
			{children}
		</Styled.Wrapper>
	);
};
