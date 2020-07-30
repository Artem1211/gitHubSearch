import React from 'react';

import { GlobalStyle } from '../../ui';

import { ListItem } from './ListItem';

export default { title: 'ui/ListItem' };

export const single = () => (
	<>
		<GlobalStyle />
		<ListItem>single item</ListItem>
	</>
);

const items = ['item 1', 'item 2', 'item 3'];

export const list = () => (
	<>
		<GlobalStyle />
		{items.map(el => (
			<ListItem>{el}</ListItem>
		))}
	</>
);
