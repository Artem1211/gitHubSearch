import { gql } from 'apollo-boost';

export const EXCHANGE_RATES = gql`
	query Search($search: String!, $cursor: String) {
		search(query: $search, type: REPOSITORY, first: 5, after: $cursor) {
			repositoryCount
			pageInfo {
				endCursor
				startCursor
				hasNextPage
			}
			edges {
				node {
					... on Repository {
						nameWithOwner
						forkCount
						description
						id
						url
						stargazers {
							totalCount
						}
						primaryLanguage {
							name
							color
						}
					}
				}
			}
		}
	}
`;
