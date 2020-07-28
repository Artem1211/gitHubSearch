import React from 'react';

import * as Styled from './ListItem.styled';

type Props = {
	className?: string;
};

export const ListItem: React.FC<Props> = ({ children, className }) => {
	return <Styled.Wrapper className={className}>{children}</Styled.Wrapper>;
};
