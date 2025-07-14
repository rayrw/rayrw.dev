import { toString } from 'mdast-util-to-string';
import getReadingTime from 'reading-time';
import type { RemarkPlugins } from 'astro';

export const remarkReadingTime: RemarkPlugins[number] = () => {
	return function (tree, { data }) {
		const textOnPage = toString(tree);
		const readingTime = getReadingTime(textOnPage);
		data.astro!.frontmatter!.minutesRead = readingTime.minutes;
	};
};
