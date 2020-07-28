import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';

import { YOUR_GIT_HUB_TOKEN } from '../../constants';
import { GitHubSearchList } from '../../containers/GitHubSearchList';

import * as Styled from './App.styled';

const client = new ApolloClient({
	uri: 'https://api.github.com/graphql',
	headers: {
		Authorization: `token ${YOUR_GIT_HUB_TOKEN}`,
	},
});

export const App = () => {
	return (
		<ApolloProvider client={client}>
			<Styled.GlobalStyle />
			<Styled.Wrapper>
				<GitHubSearchList />
			</Styled.Wrapper>
		</ApolloProvider>
	);
};
