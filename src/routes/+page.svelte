<script lang="ts">
	import Categories from '../components/home/categories.svelte';
	import GalleryImages from '../components/home/gallery-images.svelte';
	let { data } = $props();

	type MyImage = {
		id: string;
		url: string;
		category: string;
	};
	let samples: MyImage[] = data?.samples;
</script>

<div class="min-h-screen w-full">
	<div class="mx-auto max-w-7xl space-y-6 px-6 py-10">
		<Categories />
		<h2 id="gallery-heading" class="font-serif text-xl font-bold italic sm:text-2xl md:text-3xl">
			Latest Drops Gallery
		</h2>

		<!-- <pre>{JSON.stringify(filteredSamples, null, 2)}</pre> -->
		<GalleryImages {samples} />
	</div>
</div>
