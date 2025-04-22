<!-- src/routes/about/+page.svelte -->
<script lang="ts">
</script>

<div class="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
	<header class="mb-12 text-center">
		<h1 class="text-surface-900 text-4xl font-bold tracking-tight sm:text-5xl dark:text-white">
			About Image Gallery
		</h1>
		<p class="text-surface-600 dark:text-surface-300 mx-auto mt-4 max-w-3xl text-lg">
			Celebrating visual storytelling through exceptional photography
		</p>
	</header>

	<section class="mb-16">
		<div class="mx-auto max-w-3xl">
			<h2
				class="text-surface-900 border-surface-200 dark:border-surface-700 mb-6 border-b pb-2 text-2xl font-bold dark:text-white"
			>
				Our Story
			</h2>
			<div class="prose prose-slate dark:prose-invert">
				<p class="text-lg leading-relaxed">
					Founded in 2020, Image Gallery was created with a simple mission: to showcase and
					celebrate exceptional photography from around the world.
				</p>
				<p class="text-lg leading-relaxed">
					What started as a small passion project has grown into a vibrant community of photography
					enthusiasts, collectors, and artists sharing their love for visual storytelling.
				</p>
			</div>
		</div>
	</section>

	<section class="mb-16">
		<div class="mx-auto max-w-3xl">
			<h2
				class="text-surface-900 border-surface-200 dark:border-surface-700 mb-8 border-b pb-2 text-2xl font-bold dark:text-white"
			>
				Our Team
			</h2>
			<div class="mt-8 grid grid-cols-1 gap-12 sm:grid-cols-2 sm:gap-8">
				<div class="flex flex-col items-center text-center">
					<img
						src="https://picsum.photos/seed/jane-smith/400/400"
						alt="Jane Smith"
						class="mb-4 h-40 w-40 rounded-full object-cover shadow-lg"
						loading="lazy"
					/>
					<h3 class="text-surface-900 text-xl font-semibold dark:text-white">Jane Smith</h3>
					<p class="text-surface-600 dark:text-surface-400">Founder & Curator</p>
					<p class="text-surface-500 dark:text-surface-500 mt-2 max-w-xs text-sm">
						Photographer with 15 years experience specializing in landscape and documentary work.
					</p>
				</div>
				<div class="flex flex-col items-center text-center">
					<img
						src="https://picsum.photos/seed/john-doe/400/400"
						alt="John Doe"
						class="mb-4 h-40 w-40 rounded-full object-cover shadow-lg"
						loading="lazy"
					/>
					<h3 class="text-surface-900 text-xl font-semibold dark:text-white">John Doe</h3>
					<p class="text-surface-600 dark:text-surface-400">Lead Developer</p>
					<p class="text-surface-500 dark:text-surface-500 mt-2 max-w-xs text-sm">
						Tech enthusiast building platforms to showcase visual artistry since 2012.
					</p>
				</div>
			</div>
		</div>
	</section>

	<section class="border-surface-200 dark:border-surface-700 border-t py-12">
		<div class="mx-auto max-w-7xl px-4 sm:px-6">
			<h2 class="text-surface-900 mb-8 text-center text-2xl font-bold dark:text-white">
				Our Values
			</h2>
			<div class="grid grid-cols-1 gap-8 md:grid-cols-3">
				<div class="bg-surface-50 dark:bg-surface-800/50 rounded-xl p-6 text-center">
					<div
						class="bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-6 w-6"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
							/>
						</svg>
					</div>
					<h3 class="text-surface-900 mb-2 text-lg font-semibold dark:text-white">Quality</h3>
					<p class="text-surface-600 dark:text-surface-400">
						We curate only the finest photography, ensuring every image meets our high standards of
						excellence.
					</p>
				</div>
				<div class="bg-surface-50 dark:bg-surface-800/50 rounded-xl p-6 text-center">
					<div
						class="bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-6 w-6"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
							/>
						</svg>
					</div>
					<h3 class="text-surface-900 mb-2 text-lg font-semibold dark:text-white">Diversity</h3>
					<p class="text-surface-600 dark:text-surface-400">
						We celebrate and promote photographers from all backgrounds, cultures, and perspectives.
					</p>
				</div>
				<div class="bg-surface-50 dark:bg-surface-800/50 rounded-xl p-6 text-center">
					<div
						class="bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-6 w-6"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
							/>
						</svg>
					</div>
					<h3 class="text-surface-900 mb-2 text-lg font-semibold dark:text-white">Integrity</h3>
					<p class="text-surface-600 dark:text-surface-400">
						We operate with transparency, fairness, and respect for our community members.
					</p>
				</div>
			</div>
		</div>
	</section>
</div>
