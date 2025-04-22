<script lang="ts">
	let { handleSidebarClose } = $props();
	import X from 'lucide-svelte/icons/x';
</script>

<div class="bg-surface-700 fixed inset-0 z-40 w-56">
	<button onclick={handleSidebarClose} class="btn p-3 hover:text-red-500" type="button">
		<X />
	</button>
	<ul class="flex flex-col p-5">
		<header class="">
			<a href="/">
				<h2 class="text-xl font-bold sm:text-2xl">Image Gallery</h2>
			</a>
		</header>
		<ul class="grid gap-y-5 py-10">
			<li>
				<a href="/">Home</a>
			</li>
			<li>
				<a href="/">About</a>
			</li>
			<li>
				<a href="/">Privacy</a>
			</li>
			<li>
				<a href="/">Contact</a>
			</li>
		</ul>
		<footer>
			<button type="button" class="btn preset-outlined-secondary-500 w-full"> Logout </button>
		</footer>
	</ul>
</div>
