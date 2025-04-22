<script lang="ts">
	import { sampleImages } from '$lib/data';
	import Categories from '../components/home/categories.svelte';
	import GalleryImages from '../components/home/gallery-images.svelte';
	let { data } = $props();

	let isQueried = $state(false);

	type iData = {
		id: string;
		url: string;
		category: string;
	};

	let filteredData: iData[] = $state([]);

	let query = $state<string>('');

	function filterDown() {
		// console.log('toquery', query);
		let filteredCategoryImages =
			sampleImages.filter((item) =>
				item.category.trim().toLowerCase().includes(query.trim().toLowerCase())
			) || [];
		// console.log('filteredCategoryImages', filteredCategoryImages);
		filteredData = [...filteredCategoryImages];
	}
	$effect(() => {
		if (data?.q.length > 0) {
			isQueried = true;
			filterDown();
		}

		query = data?.q;
	});
</script>

<div class="min-h-screen w-full">
	<div class="mx-auto max-w-7xl space-y-6 px-6 py-10">
		<Categories />

		{#if isQueried}
			{#if filteredData.length > 1}
				<GalleryImages sampleImages={filteredData} />
			{:else}
				<p>Data not found for "{query}"</p>
			{/if}
		{:else}
			<GalleryImages {sampleImages} />
		{/if}
	</div>
</div>
