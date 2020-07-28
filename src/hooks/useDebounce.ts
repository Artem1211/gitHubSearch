import { useEffect, useCallback, useState, useRef } from 'react';

export const useDebounce = <VT = string>(
	searchText: VT,
	changeSearchText: (searchText: VT) => void
): [VT, (e: { currentTarget: { value: VT } }) => void, () => void] => {
	const [value, setValue] = useState<VT>(searchText);

	const timer = useRef<number | null>(null);

	useEffect(() => {
		window.clearTimeout(timer.current as number);
		setValue(searchText);
	}, [searchText, timer]);

	const handleCancel = useCallback(() => {
		window.clearTimeout(timer.current as number);
		setValue(searchText);
	}, [searchText]);

	const handleChange = useCallback(
		(e: { currentTarget: { value: VT } }) => {
			const {
				currentTarget: { value: nextValue },
			} = e;

			window.clearTimeout(timer.current as number);

			setValue(nextValue);

			timer.current = window.setTimeout(() => {
				changeSearchText(nextValue);
			}, 500);
		},
		[changeSearchText]
	);

	return [value, handleChange, handleCancel];
};

export default useDebounce;
