<script lang="ts">
	import { sampleImages } from '$lib/data';
	let isLoading = $state(true);
</script>

<div class="space-y-6">
	<h2 class="font-serif text-xl font-bold italic sm:text-2xl md:text-3xl">Latest Drops Gallery</h2>

	<ul class="columns-2 gap-4 space-y-4 md:columns-3 lg:columns-4">
		{#each sampleImages as item (item.id)}
			<article class="break-inside-avoid">
				<img
					src={item.url}
					alt="random"
					loading="lazy"
					class="w-full rounded-lg object-cover shadow {isLoading ? 'blur-xl grayscale' : ''}"
					onload={() => (isLoading = false)}
				/>
			</article>
		{/each}
	</ul>
</div>
