import { sampleImages } from '$lib/data';
import type { ServerLoad } from '@sveltejs/kit';

export const load: ServerLoad = ({ url }) => {
	const q = url.searchParams.get('category')?.trim().toLowerCase() || '';

	const filteredData = sampleImages.filter((item) =>
		item.category.trim().toLowerCase().includes(q)
	);
	// console.log('filteredData', filteredData);

	return { samples: filteredData.length > 1 ? filteredData : sampleImages };
};
