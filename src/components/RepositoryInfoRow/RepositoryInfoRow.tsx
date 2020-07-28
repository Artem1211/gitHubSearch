import React from 'react';

import { IconStar, IconFork, IconLib } from '../../icons';
import { Button, LanguageBlock } from '../../ui';
import { Repository } from '../../types';

import * as Styled from './RepositoryInfoRow.styled';

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
					<Styled.TitleIcon>
						<IconLib />
					</Styled.TitleIcon>
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
					<Styled.LinkIcon>
						<IconStar />
					</Styled.LinkIcon>
					{stargazers.totalCount}
				</Styled.Link>
				<Styled.Link>
					<Styled.LinkIcon>
						<IconFork />
					</Styled.LinkIcon>
					{forkCount}
				</Styled.Link>
			</Styled.BottomPanel>
		</Styled.Wrapper>
	);
};
