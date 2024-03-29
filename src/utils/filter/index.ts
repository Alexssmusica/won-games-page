/* eslint-disable @typescript-eslint/no-explicit-any */
import { ParsedUrlQueryInput } from 'querystring';
import { ItemProps } from 'components/ExploreSidebar';

type ParseArgs = {
	queryString: ParsedUrlQueryInput;
	filterItems: Pick<ItemProps, 'type' | 'name'>[];
};

export const parseQueryStringToWhere = ({ filterItems, queryString }: ParseArgs) => {
	const obj: any = {};

	Object.keys(queryString)
		.filter((item) => item !== 'sort')
		.forEach((key) => {
			const item = filterItems?.find((item) => item.name === key);
			const isCheckbox = item?.type === 'checkbox';

			obj[key] = !isCheckbox ? queryString[key] : { name_contains: queryString[key] };
		});

	return obj;
};

export const parseQueryStringToFilter = ({ filterItems, queryString }: ParseArgs) => {
	const obj: any = {};

	Object.keys(queryString).forEach((key) => {
		const item = filterItems?.find((item) => item.name === key);
		const isCheckbox = item?.type === 'checkbox';
		const isArray = Array.isArray(queryString[key]);

		obj[key] = !isArray && isCheckbox ? [queryString[key]] : queryString[key];
	});

	return obj;
};
