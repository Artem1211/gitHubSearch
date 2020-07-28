import React from 'react';
import { RepositoryInfoRow } from './RepositoryInfoRow';

export default { title: 'RepositoryInfoRow' };

const nameWithOwner = 'ssgeekxh / hello-algorithm';
const forkCount = 235;
const stargazers = { totalCount: 1667 };
const description =
	'🇨🇳🇨🇳🇨🇳 本项目包括：1、我写的三十万字图解算法题典 2、100 张编程类超清晰思维导图 3、100 篇大厂面经汇总 4、各语言编程电子书 100 本 5、小浩算法网站源代码 （ 🚀🚀 国人项目上榜不容易，右上角助力一波！干就对了，奥利给 ！🚀🚀）';
const primaryLanguage = { name: 'JavaScript', color: '#000000' };
const url = '#';
export const simple = () => (
	<RepositoryInfoRow
		nameWithOwner={nameWithOwner}
		forkCount={forkCount}
		stargazers={stargazers}
		description={description}
		primaryLanguage={primaryLanguage}
		url={url}
	/>
);
