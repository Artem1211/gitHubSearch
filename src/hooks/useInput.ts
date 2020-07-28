import { useState } from 'react';

type OnChangeHandlerType = (
	event:
		| React.FormEvent<HTMLInputElement>
		| React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
) => void;

interface UseInputValueType {
	value: string;
	setValue: (value: string) => void;
	reset: () => void;
	bind: {
		value: string;
		onChange: OnChangeHandlerType;
	};
}

export const useInput = (
	initialValue: string | number | null | undefined = ''
): UseInputValueType => {
	const [value, setValue] = useState<string>(initialValue ? String(initialValue) : '');

	return {
		value,
		setValue,
		reset: () => setValue(''),
		bind: {
			value,
			onChange: event => {
				setValue(event.currentTarget.value);
			},
		},
	};
};
