import styled from 'styled-components';

export const Input = styled.input`
	box-sizing: border-box;
	border: 1px solid #e1e4e8;
	outline: none;
	min-height: 28px;
	width: 220px;
	padding: 0 12px;
	border-radius: 6px;

	::placeholder {
		color: #e1e4e8;
		opacity: 1;
	}

	:focus {
		background-color: #ffffff;
		box-shadow: 0 0 0 1px #0366d6;
	}
`;
