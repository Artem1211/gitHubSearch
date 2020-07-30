import React from 'react';

import { Language } from '../../types';

import * as Styled from './LanguageBlock.styled';

type Props = {
	className?: string;
	color?: string | null;
} & Omit<Language, 'color'>;

export const LanguageBlock: React.FC<Props> = ({ className, color, name }) => {
	return (
		<Styled.Wrapper className={className}>
			{color && <Styled.Circle color={color} />}
			{name}
		</Styled.Wrapper>
	);
};
