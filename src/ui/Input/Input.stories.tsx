import React, { useState, useCallback } from 'react';

import { GlobalStyle } from '../../ui';

import { Input } from './Input';

export default { title: 'ui/Input' };

export const simple = () => (
	<>
		<GlobalStyle />
		<Input />
	</>
);

const StatedInput = () => {
	const [value, setValue] = useState('default');

	const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.value);
	}, []);

	const handleClick = useCallback(() => {
		setValue('');
	}, []);

	return (
		<>
			<Input value={value} onChange={handleChange} />
			<button onClick={handleClick}>reset</button>
		</>
	);
};

export const withState = () => (
	<>
		<GlobalStyle />
		<StatedInput />
	</>
);
