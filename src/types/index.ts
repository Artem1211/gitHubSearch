type Maybe<T> = T | null;

export type Language = {
	color: Maybe<string>;
	name: string;
};

type StargazerConnection = {
	totalCount: number;
};

export type Repository = {
	description: Maybe<string>;
	forkCount: number;
	id: string;
	nameWithOwner: string;
	primaryLanguage: Maybe<Language>;
	stargazers: StargazerConnection;
	url: string;
};

export type SearchResultItemEdge = {
	node: Repository;
};

export type Data = {
	search: {
		repositoryCount: number;
		pageInfo: {
			endCursor: Maybe<string>;
			startCursor: Maybe<string>;
			hasNextPage: boolean;
		};
		edges: SearchResultItemEdge[];
	};
};

export type QueryVars = {
	search?: string;
	cursor?: string;
};
