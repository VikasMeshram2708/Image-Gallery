// import type { PageServerLoad } from './$types';

export const load = ({ url }) => {
	const q = url.searchParams.get('category') || '';
	return { q };
};
