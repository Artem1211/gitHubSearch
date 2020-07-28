import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';

import { GitHubSearchList } from '../../containers/GitHubSearchList';

import * as Styled from './App.styled';

const client = new ApolloClient({
	uri: 'https://api.github.com/graphql',
	headers: {
		Authorization: 'token 0be5bed4ed968827e1956692dcf900c5d1c1ae44',
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
