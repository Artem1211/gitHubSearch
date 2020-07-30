import React from 'react';

import { GlobalStyle } from '../../ui';
import { IconLib } from '../../icons';

import { Button } from './Button';

export default { title: 'ui/Button' };

export const simple = () => (
	<>
		<GlobalStyle />
		<Button>Button</Button>
	</>
);

const renderIcon = () => <IconLib />;

export const withIcon = () => (
	<>
		<GlobalStyle />
		<Button renderIcon={renderIcon}>Button</Button>
	</>
);
