<script lang="ts">
	import { Avatar } from '@skeletonlabs/skeleton-svelte';
	import Search from 'lucide-svelte/icons/search';
	import Menu from 'lucide-svelte/icons/menu';
	import NavSidebar from './nav-sidebar.svelte';

	let toggleSidebar = $state(false);
	function handleSidebarClose() {
		toggleSidebar = false;
	}
</script>

<nav class="w-full">
	<div class="mx-auto flex max-w-7xl items-center justify-between p-4">
		<a href="/">
			<h2 class="text-xl font-bold sm:text-2xl md:text-3xl lg:text-4xl">Image Gallery</h2>
		</a>
		<div
			class="mx-auto hidden max-w-3xl flex-1 items-center overflow-hidden rounded-lg px-3 py-2 outline lg:flex"
		>
			<Search />
			<input
				type="text"
				name="search_bar"
				id="search_bar"
				class="input focus:ring-0"
				placeholder="Search photos and illusturations"
			/>
		</div>

		<div>
			<Menu onclick={() => (toggleSidebar = !toggleSidebar)} class="cursor-pointer lg:hidden" />

			<div>
				{#if toggleSidebar}
					<NavSidebar {handleSidebarClose} />
				{/if}

				<div class="hidden lg:block">
					<Avatar src="https://i.pravatar.cc/150?img=48" name="skeleton" />
				</div>
			</div>
		</div>
	</div>
</nav>
