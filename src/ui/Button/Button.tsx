import React from 'react';
import * as Styled from './Button.styled';

type Props = Omit<React.HTMLProps<HTMLButtonElement>, 'as' | 'type'> & {
	renderIcon?: (isDisabled?: boolean) => React.ReactNode;
};

export const Button = React.forwardRef<HTMLButtonElement, React.PropsWithChildren<Props>>(
	({ children, className, renderIcon, ...restProps }, ref) => {
		return (
			<Styled.Wrapper {...restProps} ref={ref} className={className}>
				{renderIcon && <Styled.Icon>{renderIcon(restProps.disabled)}</Styled.Icon>}
				{children}
			</Styled.Wrapper>
		);
	}
);
