export function formatDate(date: Date, locale = 'en') {
	const handledLocale = locale === 'en' ? 'en-gb' : locale;
	return date.toLocaleDateString(handledLocale, {
		year: 'numeric',
		month: 'short',
		day: 'numeric',
	});
}
