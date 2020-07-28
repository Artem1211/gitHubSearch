import styled from 'styled-components';

export const Wrapper = styled.div`
	position: relative;
	background-color: #ffffff;
	width: 100%;
	box-sizing: border-box;
`;

export const Title = styled.a`
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

export const TitleIcon = styled.span`
	min-width: 16px;
	margin-right: 3px;
`;

export const Content = styled.p`
	word-break: break-all;
	font-size: 14px;
	line-height: 1.5;
	color: #586069;
	width: 75%;
`;

export const BottomPanel = styled.div`
	font-size: 12px;
	display: flex;
	& > * {
		margin-right: 16px;
	}
`;

export const TopPanel = styled.div`
	align-items: flex-start;
	display: flex;
	justify-content: space-between;
`;

export const Link = styled.div`
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

export const LinkIcon = styled.div`
	display: flex;
	margin-right: 3px;
`;
