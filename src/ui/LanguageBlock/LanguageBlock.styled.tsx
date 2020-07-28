import styled from 'styled-components';

export const Wrapper = styled.div`
	display: flex;
	align-items: center;
`;

export const Circle = styled.div<{ color: string }>`
	margin-right: 3px;
	border-radius: 50%;
	display: inline-block;
	min-width: 12px;
	height: 12px;
	background-color: ${props => props.color};
`;
