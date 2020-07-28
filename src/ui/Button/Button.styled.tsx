import styled, { css } from 'styled-components';

type Props = { disabled?: boolean };
export const resetButtonStyles = css`
	padding: 0;
	border: none;
	outline: none;
	font: inherit;
	text-decoration: none;
	color: inherit;
	background-color: transparent;
`;

export const Icon = styled.span`
	display: flex;
	margin-right: 2px;
`;

export const Wrapper = styled.button<Props>`
	${resetButtonStyles};
	position: relative;
	display: inline-flex;
	align-items: center;
	font-weight: 500;
	padding: 3px 12px;
	font-size: 12px;
	line-height: 20px;
	cursor: ${props => (props.disabled ? 'auto' : 'pointer')};
	color: ${props => (props.disabled ? '#959da5' : '#24292e')};
	pointer-events: ${props => (props.disabled ? 'none' : 'auto')};
	border-radius: 6px;
	background-color: #fafbfc;
	border: 1px solid rgba(27, 31, 35, 0.15);
	box-shadow: 0 1px 0 rgba(27, 31, 35, 0.04), inset 0 1px 0 hsla(0, 0%, 100%, 0.25);
	transition: background-color 0.2s ease-in-out;
	&:hover {
		background-color: #f3f4f6;
	}
`;
