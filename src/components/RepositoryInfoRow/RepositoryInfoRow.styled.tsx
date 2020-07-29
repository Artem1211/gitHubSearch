import styled, { css } from 'styled-components';

const Wrapper = styled.div`
	position: relative;
	background-color: #ffffff;
	width: 100%;
	box-sizing: border-box;
`;

const Title = styled.a`
	margin-right: 5px;
	display: flex;
	align-items: flex-end;
	color: #0366d6;
	cursor: pointer;
	font-size: 20px;
	text-decoration: none;
	line-height: 1.25em;
	word-break: break-all;
	&:hover {
		text-decoration: underline;
	}
`;

const Content = styled.p`
	word-break: break-all;
	font-size: 14px;
	line-height: 1.5;
	color: #586069;
	width: 75%;
`;

const BottomPanel = styled.div`
	font-size: 12px;
	display: flex;
	& > * {
		margin-right: 16px;
	}
`;

const TopPanel = styled.div`
	align-items: flex-start;
	display: flex;
	justify-content: space-between;
`;

const Link = styled.div`
	display: flex;
	align-items: center;
	cursor: pointer;
	&:hover {
		color: #0366d6;
		& path {
			fill: #0366d6;
		}
	}
`;

export const linkIconStyles = css`
	margin-right: 3px;
`;

export const titleIconStyles = css`
	min-width: 16px;
	margin-right: 3px;
`;

export const Styled = {
	Wrapper,
	Title,
	Content,
	BottomPanel,
	TopPanel,
	Link,
};
