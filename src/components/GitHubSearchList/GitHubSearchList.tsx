import React, { useCallback } from 'react';
import { ApolloError } from 'apollo-boost';

import { PageLayout, Input, Spin, ListItem, Button, Box } from '../../ui';
import { Data, SearchResultItemEdge } from '../../types';
import { RepositoryInfoRow } from '../RepositoryInfoRow';

import { Styled, headerIconStyles, butoonRowStyles } from './GitHubSearchList.styled';

type Props = {
	className?: string;
	searchValue: string;
	onSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
	loading: boolean;
	error?: ApolloError;
	data?: Data;
	onMoreClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

export const GitHubSearchList: React.FC<Props> = ({
	className,
	searchValue,
	onSearchChange,
	loading,
	data,
	error,
	onMoreClick,
}) => {
	const renderHeader = useCallback(
		() => (
			<Styled.Header>
				<Input type='text' value={searchValue} onChange={onSearchChange} placeholder='Search...' />
				{loading && <Spin css={headerIconStyles} />}
			</Styled.Header>
		),
		[loading, onSearchChange, searchValue]
	);

	const repositoryRender = useCallback((el: SearchResultItemEdge) => {
		const {
			node: { description, stargazers, forkCount, id, nameWithOwner, primaryLanguage, url },
		} = el;
		return (
			<ListItem key={id}>
				<RepositoryInfoRow
					forkCount={forkCount}
					description={description}
					nameWithOwner={nameWithOwner}
					stargazers={stargazers}
					primaryLanguage={primaryLanguage}
					url={url}
				/>
			</ListItem>
		);
	}, []);

	const renderMain = useCallback(() => {
		if (error) {
			return <ListItem>Error :(</ListItem>;
		}

		if (!data) {
			return;
		}

		const searchResults = data.search;

		if (!searchResults.edges.length) {
			return <ListItem>Результатов не найдено</ListItem>;
		}

		return (
			<>
				{searchResults.edges.map(repositoryRender)}
				{searchResults.pageInfo.hasNextPage && (
					<ListItem css={butoonRowStyles}>
						<Button onClick={onMoreClick}>More List</Button>
					</ListItem>
				)}
			</>
		);
	}, [data, error, onMoreClick, repositoryRender]);

	return (
		<>
			<PageLayout className={className}>
				<Box renderHeader={renderHeader}>{renderMain()}</Box>
			</PageLayout>
		</>
	);
};
