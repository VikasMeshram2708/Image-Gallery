<script lang="ts">
	import { afterNavigate, beforeNavigate } from '$app/navigation';
	import { writable } from 'svelte/store';
	import '../app.css';
	import Footer from '../components/footer.svelte';
	import Navbar from '../components/navbar.svelte';

	let { children } = $props();
	let isNavigating = writable(false);

	beforeNavigate(() => {
		isNavigating.set(true);
	});

	afterNavigate(() => {
		isNavigating.set(false);
	});
</script>

<main class="relative flex min-h-screen flex-col">
	<div class="flex-1">
		<Navbar />
		{#if $isNavigating}
			<div class="flex min-h-screen flex-col items-center justify-center">
				<p class="text-center text-5xl font-bold">Loading...</p>
			</div>
		{:else}
			{@render children()}
		{/if}
		<Footer />
	</div>
</main>
