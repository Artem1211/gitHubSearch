import React from 'react';

import { IconStar, IconFork, IconLib } from '../../icons';
import { Button, LanguageBlock } from '../../ui';
import { Repository } from '../../types';

import { titleIconStyles, linkIconStyles, Styled } from './RepositoryInfoRow.styled';

type Props = {
	className?: string;
} & Omit<Repository, 'id'>;

export const RepositoryInfoRow: React.FC<Props> = ({
	className,
	nameWithOwner,
	description,
	primaryLanguage,
	stargazers,
	forkCount,
	url,
}) => {
	return (
		<Styled.Wrapper className={className}>
			<Styled.TopPanel>
				<Styled.Title href={url}>
					<IconLib css={titleIconStyles} />
					{nameWithOwner}
				</Styled.Title>
				<Button
					renderIcon={disabled => <IconStar color={disabled ? '#959da5' : undefined} />}
					disabled
				>
					Star
				</Button>
			</Styled.TopPanel>

			<Styled.Content>{description}</Styled.Content>
			<Styled.BottomPanel>
				{primaryLanguage && (
					<LanguageBlock name={primaryLanguage.name} color={primaryLanguage.color} />
				)}
				<Styled.Link>
					<IconStar css={linkIconStyles} />
					{stargazers.totalCount}
				</Styled.Link>
				<Styled.Link>
					<IconFork css={linkIconStyles} />
					{forkCount}
				</Styled.Link>
			</Styled.BottomPanel>
		</Styled.Wrapper>
	);
};
