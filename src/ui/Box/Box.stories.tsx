import React from 'react';

import { GlobalStyle } from '../../ui';

import { Box } from './Box';

export default { title: 'ui/Box' };

const boxContent = 'Box Content';

export const simple = () => {
	return (
		<>
			<GlobalStyle />
			<Box>{boxContent}</Box>
		</>
	);
};

const renderHeader = () => <div>Header</div>;

export const withHeader = () => {
	return (
		<>
			<GlobalStyle />
			<Box renderHeader={renderHeader}>{boxContent}</Box>
		</>
	);
};
