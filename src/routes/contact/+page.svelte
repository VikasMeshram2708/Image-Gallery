<!-- src/routes/contact/+page.svelte -->
<script lang="ts">
	// Svelte 5 state management
	let name = $state('');
	let email = $state('');
	let message = $state('');
	let submitted = $state(false);
	let loading = $state(false);
	let errors = $state<Record<string, string>>({});

	// Form validation
	function validate() {
		errors = {};
		if (!name.trim()) errors.name = 'Name is required';
		if (!email.trim()) {
			errors.email = 'Email is required';
		} else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
			errors.email = 'Please enter a valid email';
		}
		if (!message.trim()) errors.message = 'Message is required';
		return Object.keys(errors).length === 0;
	}

	// Form submission
	async function handleSubmit(e: SubmitEvent) {
		e.preventDefault();
		if (!validate()) return;

		loading = true;
		// Simulate API call
		await new Promise((resolve) => setTimeout(resolve, 1000));
		loading = false;
		submitted = true;
	}
</script>

<div class="container mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
	<header class="mb-12 text-center">
		<h1 class="text-surface-900 text-4xl font-bold tracking-tight sm:text-5xl dark:text-white">
			Contact Us
		</h1>
		<p class="text-surface-600 dark:text-surface-300 mx-auto mt-4 max-w-3xl text-lg">
			Have questions or feedback? We'd love to hear from you.
		</p>
	</header>

	<div class="grid grid-cols-1 gap-12 lg:grid-cols-2">
		<div class="space-y-8">
			<div class="prose prose-slate dark:prose-invert max-w-none">
				<p class="text-surface-600 dark:text-surface-300 text-lg">
					Fill out the form or use the contact information below to reach our team. We typically
					respond within 24 hours.
				</p>
			</div>

			<div class="space-y-6">
				<h2 class="text-surface-900 text-2xl font-semibold dark:text-white">Contact Information</h2>

				<div class="space-y-4">
					<div class="flex items-start">
						<div
							class="bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 flex-shrink-0 rounded-lg p-2"
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
									d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
								/>
							</svg>
						</div>
						<div class="ml-4">
							<h3 class="text-surface-900 text-lg font-medium dark:text-white">Email</h3>
							<p class="text-surface-600 dark:text-surface-400">contact@imagegallery.com</p>
						</div>
					</div>

					<div class="flex items-start">
						<div
							class="bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 flex-shrink-0 rounded-lg p-2"
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
									d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
								/>
							</svg>
						</div>
						<div class="ml-4">
							<h3 class="text-surface-900 text-lg font-medium dark:text-white">Phone</h3>
							<p class="text-surface-600 dark:text-surface-400">+1 (555) 123-4567</p>
						</div>
					</div>

					<div class="flex items-start">
						<div
							class="bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 flex-shrink-0 rounded-lg p-2"
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
									d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
								/>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
								/>
							</svg>
						</div>
						<div class="ml-4">
							<h3 class="text-surface-900 text-lg font-medium dark:text-white">Address</h3>
							<p class="text-surface-600 dark:text-surface-400">
								123 Gallery Way, Suite 500<br />
								Photo City, PC 12345
							</p>
						</div>
					</div>
				</div>
			</div>

			<div class="border-surface-200 dark:border-surface-700 border-t pt-4">
				<h3 class="text-surface-900 mb-3 text-lg font-medium dark:text-white">Business Hours</h3>
				<ul class="text-surface-600 dark:text-surface-400 space-y-2">
					<li class="flex justify-between">
						<span>Monday - Friday</span>
						<span class="font-medium">9:00 AM - 6:00 PM</span>
					</li>
					<li class="flex justify-between">
						<span>Saturday</span>
						<span class="font-medium">10:00 AM - 4:00 PM</span>
					</li>
					<li class="flex justify-between">
						<span>Sunday</span>
						<span class="font-medium">Closed</span>
					</li>
				</ul>
			</div>
		</div>

		<div class="bg-surface-50 dark:bg-surface-800/30 rounded-xl p-6 sm:p-8">
			{#if submitted}
				<div class="py-8 text-center">
					<div
						class="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/30"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-8 w-8 text-green-600 dark:text-green-400"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M5 13l4 4L19 7"
							/>
						</svg>
					</div>
					<h2 class="text-surface-900 mb-2 text-2xl font-bold dark:text-white">Message Sent!</h2>
					<p class="text-surface-600 dark:text-surface-400 mx-auto mb-6 max-w-md">
						Thank you for contacting us. We've received your message and will respond within 24
						hours.
					</p>
					<button
						on:click|preventDefault={() => (submitted = false)}
						class="text-primary-600 dark:text-primary-400 hover:text-primary-800 dark:hover:text-primary-300 text-sm font-medium transition-colors"
					>
						Send another message
					</button>
				</div>
			{:else}
				<form on:submit|preventDefault={handleSubmit} class="space-y-5">
					<div>
						<label
							for="name"
							class="text-surface-700 dark:text-surface-300 mb-2 block text-sm font-medium"
						>
							Name <span class="text-red-500">*</span>
						</label>
						<input
							type="text"
							id="name"
							bind:value={name}
							class="border-surface-300 dark:border-surface-600 dark:bg-surface-800 focus:ring-primary-500 w-full rounded-lg border bg-white px-4 py-3 transition-all focus:border-transparent focus:ring-2"
							required
						/>
						{#if errors.name}
							<p class="mt-2 text-sm text-red-600 dark:text-red-400">{errors.name}</p>
						{/if}
					</div>

					<div>
						<label
							for="email"
							class="text-surface-700 dark:text-surface-300 mb-2 block text-sm font-medium"
						>
							Email <span class="text-red-500">*</span>
						</label>
						<input
							type="email"
							id="email"
							bind:value={email}
							class="border-surface-300 dark:border-surface-600 dark:bg-surface-800 focus:ring-primary-500 w-full rounded-lg border bg-white px-4 py-3 transition-all focus:border-transparent focus:ring-2"
							required
						/>
						{#if errors.email}
							<p class="mt-2 text-sm text-red-600 dark:text-red-400">{errors.email}</p>
						{/if}
					</div>

					<div>
						<label
							for="message"
							class="text-surface-700 dark:text-surface-300 mb-2 block text-sm font-medium"
						>
							Message <span class="text-red-500">*</span>
						</label>
						<textarea
							id="message"
							bind:value={message}
							rows="5"
							class="border-surface-300 dark:border-surface-600 dark:bg-surface-800 focus:ring-primary-500 w-full rounded-lg border bg-white px-4 py-3 transition-all focus:border-transparent focus:ring-2"
							required
						></textarea>
						{#if errors.message}
							<p class="mt-2 text-sm text-red-600 dark:text-red-400">{errors.message}</p>
						{/if}
					</div>

					<div>
						<button
							type="submit"
							disabled={loading}
							class="bg-primary-600 hover:bg-primary-700 focus:ring-primary-500 flex w-full items-center justify-center rounded-lg border border-transparent px-6 py-3 text-base font-medium text-white shadow-sm transition-colors focus:ring-2 focus:ring-offset-2 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
						>
							{#if loading}
								<svg
									class="mr-3 -ml-1 h-5 w-5 animate-spin text-white"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
								>
									<circle
										class="opacity-25"
										cx="12"
										cy="12"
										r="10"
										stroke="currentColor"
										stroke-width="4"
									></circle>
									<path
										class="opacity-75"
										fill="currentColor"
										d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
									></path>
								</svg>
								Sending...
							{:else}
								Send Message
							{/if}
						</button>
					</div>

					<p class="text-surface-500 dark:text-surface-400 text-center text-xs">
						By submitting this form, you agree to our{' '}
						<a href="/privacy" class="text-primary-600 dark:text-primary-400 hover:underline"
							>Privacy Policy</a
						>.
					</p>
				</form>
			{/if}
		</div>
	</div>
</div>
