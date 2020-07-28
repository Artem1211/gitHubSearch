import React from 'react';

import * as Styled from './Input.styled';

type Props = Omit<React.HTMLProps<HTMLInputElement>, 'as'>;

export const Input = React.forwardRef<HTMLInputElement, React.PropsWithChildren<Props>>(
	({ children, className, ...restProps }, ref) => {
		return <Styled.Input {...restProps} ref={ref} className={className} />;
	}
);
