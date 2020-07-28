import React, { useCallback } from 'react';
import { ApolloError } from 'apollo-boost';

import { PageLayout, Input, Spin, ListItem, Button } from '../../ui';
import { Data, SearchResultItemEdge } from '../../types';
import { RepositoryInfoRow } from '../RepositoryInfoRow';

import * as Styled from './GitHubSearchList.styled';

type Props = {
	className?: string;
	valueInner: string;
	onChangeInner: (event: React.ChangeEvent<HTMLInputElement>) => void;
	loading: boolean;
	error?: ApolloError;
	data?: Data;
	onMoreClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

export const GitHubSearchList: React.FC<Props> = ({
	className,
	valueInner,
	onChangeInner,
	loading,
	data,
	error,
	onMoreClick,
}) => {
	const renderHeader = useCallback(
		() => (
			<Styled.Header>
				<Input type='text' value={valueInner} onChange={onChangeInner} placeholder='Search...' />
				{loading && (
					<Styled.HeaderIcon>
						<Spin />
					</Styled.HeaderIcon>
				)}
			</Styled.Header>
		),
		[loading, onChangeInner, valueInner]
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
					<ListItem>
						<Styled.UpdateButton>
							<Button onClick={onMoreClick}>More List</Button>
						</Styled.UpdateButton>
					</ListItem>
				)}
			</>
		);
	}, [data, error, onMoreClick, repositoryRender]);

	return (
		<>
			<PageLayout renderHeader={renderHeader} className={className}>
				{renderMain()}
			</PageLayout>
		</>
	);
};
