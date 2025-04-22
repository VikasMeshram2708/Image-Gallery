<script lang="ts">
	import { sampleCategories } from '$lib/data';
	import { ArrowLeft, ArrowRight } from 'lucide-svelte';
	import { goto } from '$app/navigation';
	let scrollRef: HTMLUListElement;
	const scrollAmount = 300;

	function scrollLeft() {
		scrollRef.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
	}

	function scrollRight() {
		scrollRef.scrollBy({ left: scrollAmount, behavior: 'smooth' });
	}

	function handleParams(paramsInput: string) {
		const query = paramsInput.trim().toLowerCase();
		console.log('query', query);
		return goto(`?category=${query}`);
	}
</script>

<div class="w-full">
	<div class="flex items-center gap-2">
		<button onclick={scrollLeft} class="hover:bg-muted-100 rounded-full p-2 transition">
			<ArrowLeft />
		</button>

		<ul bind:this={scrollRef} class="no-scrollbar flex gap-x-4 overflow-x-auto scroll-smooth p-4">
			{#each sampleCategories as cate (cate)}
				<li
					class="shrink-0 cursor-pointer rounded-lg px-6 py-3 text-sm font-medium whitespace-nowrap shadow outline transition-all"
				>
					<button type="button" onclick={() => handleParams(cate)}>
						{cate}
					</button>
				</li>
			{/each}
		</ul>

		<button onclick={scrollRight} class="hover:bg-muted-100 rounded-full p-2 transition">
			<ArrowRight />
		</button>
	</div>
</div>

<style>
	/* Optional: hide scrollbar */
	.no-scrollbar::-webkit-scrollbar {
		display: none;
	}
	.no-scrollbar {
		-ms-overflow-style: none;
		scrollbar-width: none;
	}
</style>
