<script lang="ts">
	import '../app.css';
	import Footer from '../components/footer.svelte';
	import Navbar from '../components/navbar.svelte';

	let { children } = $props();
</script>

<main class="relative flex min-h-screen flex-col">
	<div class="flex-1">
		<Navbar />
		{@render children()}
		<Footer />
	</div>
</main>
