import React from 'react';

import { GlobalStyle } from '../../ui';

import { LanguageBlock } from './LanguageBlock';

export default { title: 'ui/LanguageBlock' };

export const simple = () => (
	<>
		<GlobalStyle />
		<LanguageBlock name='JavaScript' />
	</>
);

export const withColorBlock = () => (
	<>
		<GlobalStyle />
		<LanguageBlock name='TypeScript' color='#298ed0' />
	</>
);
