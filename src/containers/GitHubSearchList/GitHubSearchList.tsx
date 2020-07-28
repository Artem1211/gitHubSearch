import React, { useCallback } from 'react';
import { useQuery } from '@apollo/react-hooks';

import { EXCHANGE_RATES } from '../../graphql';
import { useInput, useDebounce } from '../../hooks';
import { Data, QueryVars } from '../../types';
import { GitHubSearchList as GitHubSearchListComponent } from '../../components/GitHubSearchList';

type Props = {
	className?: string;
};

export const GitHubSearchList: React.FC<Props> = ({ className }) => {
	const { value, setValue } = useInput('repository');

	const [valueInner, onChangeInner] = useDebounce(value, setValue);

	const { loading, error, data, fetchMore } = useQuery<Data, QueryVars>(EXCHANGE_RATES, {
		variables: { search: value },
		fetchPolicy: 'cache-and-network',
	});

	const handleMoreClick = useCallback(() => {
		fetchMore({
			variables: {
				cursor: data?.search.pageInfo.endCursor,
			},
			updateQuery: (prev: Data, { fetchMoreResult }) => {
				if (!fetchMoreResult) return prev;
				return {
					...prev,
					search: {
						...fetchMoreResult.search,
						edges: [...prev.search.edges, ...fetchMoreResult.search.edges],
					},
				};
			},
		});
	}, [data, fetchMore]);

	return (
		<GitHubSearchListComponent
			className={className}
			valueInner={valueInner}
			onChangeInner={onChangeInner}
			loading={loading}
			error={error}
			data={data}
			onMoreClick={handleMoreClick}
		/>
	);
};
