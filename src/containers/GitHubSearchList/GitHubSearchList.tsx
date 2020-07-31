import React, { useCallback } from 'react';
import { useQuery } from '@apollo/react-hooks';

import { GET_REPOSITORY_LIST } from '../../graphql';
import { useInput, useDebounce } from '../../hooks';
import { Data, QueryVars } from '../../types';
import { GitHubSearchList as GitHubSearchListComponent } from '../../components/GitHubSearchList';

type Props = {
	className?: string;
};

export const GitHubSearchList: React.FC<Props> = ({ className }) => {
	const {
		value,
		bind: { onChange },
	} = useInput('repository');

	const debouncedValue = useDebounce(value, 500);

	const { loading, error, data, fetchMore } = useQuery<Data, QueryVars>(GET_REPOSITORY_LIST, {
		variables: { search: debouncedValue },
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
			searchValue={value}
			onSearchChange={onChange}
			loading={loading}
			error={error}
			data={data}
			onMoreClick={handleMoreClick}
		/>
	);
};
