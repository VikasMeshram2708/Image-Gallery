<!-- src/routes/privacy/+page.svelte -->
<script lang="ts">
	import { Accordion } from '@skeletonlabs/skeleton-svelte';
	import FileText from 'lucide-svelte/icons/file-text';
	import ShieldCheck from 'lucide-svelte/icons/shield-check';
	import Share2 from 'lucide-svelte/icons/share-2';
	import Cookie from 'lucide-svelte/icons/cookie';
	import MailQuestion from 'lucide-svelte/icons/mail-question';

	// Svelte 5 state management
	let lastUpdated = $state('April 15, 2025');
	let value = $state(['collection']); // Open first section by default
</script>

<div class="container mx-auto max-w-4xl px-4 py-12 sm:px-6">
	<header class="mb-8">
		<h1 class="text-surface-900 mb-2 text-4xl font-bold tracking-tight dark:text-white">
			Privacy Policy
		</h1>
		<p class="text-surface-500 dark:text-surface-400 text-sm">Last updated: {lastUpdated}</p>
	</header>

	<div class="prose prose-slate dark:prose-invert max-w-none">
		<p class="text-surface-600 dark:text-surface-300 mb-8 text-lg leading-relaxed">
			At Image Gallery, we take your privacy seriously. This policy explains how we collect, use,
			and protect your personal information.
		</p>

		<div class="space-y-3">
			<Accordion {value} onValueChange={(e) => (value = e.value)}>
				<div
					class="bg-surface-50 dark:bg-surface-800/50 hover:bg-surface-100 dark:hover:bg-surface-800 rounded-lg p-4 transition-colors"
				>
					<Accordion.Item value="collection">
						{#snippet lead()}<FileText
								size={24}
								class="text-primary-500 dark:text-primary-400"
							/>{/snippet}
						{#snippet control()}<span class="text-surface-800 text-lg font-semibold dark:text-white"
								>Information We Collect</span
							>{/snippet}
						{#snippet panel()}
							<div class="text-surface-600 dark:text-surface-300 pt-2">
								<p>We collect information you provide directly, such as:</p>
								<ul class="mt-3 list-disc space-y-2 pl-5">
									<li>Contact information (name, email, etc.)</li>
									<li>Account credentials</li>
									<li>Communication preferences</li>
									<li>Image usage data</li>
								</ul>
								<p class="mt-4">
									We also collect technical data including IP address, device information, cookies,
									and browsing activity.
								</p>
							</div>
						{/snippet}
					</Accordion.Item>
				</div>

				<div
					class="bg-surface-50 dark:bg-surface-800/50 hover:bg-surface-100 dark:hover:bg-surface-800 rounded-lg p-4 transition-colors"
				>
					<Accordion.Item value="use">
						{#snippet lead()}<ShieldCheck
								size={24}
								class="text-primary-500 dark:text-primary-400"
							/>{/snippet}
						{#snippet control()}<span class="text-surface-800 text-lg font-semibold dark:text-white"
								>How We Use Information</span
							>{/snippet}
						{#snippet panel()}
							<div class="text-surface-600 dark:text-surface-300 pt-2">
								<p>We use the information we collect to:</p>
								<ul class="mt-3 list-disc space-y-2 pl-5">
									<li>Provide and maintain our services</li>
									<li>Process transactions</li>
									<li>Send administrative information</li>
									<li>Improve our website and customer experience</li>
									<li>Protect against fraudulent or illegal activity</li>
								</ul>
							</div>
						{/snippet}
					</Accordion.Item>
				</div>

				<div
					class="bg-surface-50 dark:bg-surface-800/50 hover:bg-surface-100 dark:hover:bg-surface-800 rounded-lg p-4 transition-colors"
				>
					<Accordion.Item value="sharing">
						{#snippet lead()}<Share2
								size={24}
								class="text-primary-500 dark:text-primary-400"
							/>{/snippet}
						{#snippet control()}<span class="text-surface-800 text-lg font-semibold dark:text-white"
								>Information Sharing</span
							>{/snippet}
						{#snippet panel()}
							<div class="text-surface-600 dark:text-surface-300 pt-2">
								<p>We do not sell your personal information. We may share information with:</p>
								<ul class="mt-3 list-disc space-y-2 pl-5">
									<li>Service providers that help us operate our business</li>
									<li>When required by law or to protect our rights</li>
									<li>With your consent</li>
								</ul>
							</div>
						{/snippet}
					</Accordion.Item>
				</div>

				<div
					class="bg-surface-50 dark:bg-surface-800/50 hover:bg-surface-100 dark:hover:bg-surface-800 rounded-lg p-4 transition-colors"
				>
					<Accordion.Item value="cookies">
						{#snippet lead()}<Cookie
								size={24}
								class="text-primary-500 dark:text-primary-400"
							/>{/snippet}
						{#snippet control()}<span class="text-surface-800 text-lg font-semibold dark:text-white"
								>Cookies Policy</span
							>{/snippet}
						{#snippet panel()}
							<div class="text-surface-600 dark:text-surface-300 pt-2">
								<p>
									We use cookies to enhance your browsing experience, analyze usage, and assist in
									our marketing efforts. You can control cookies through your browser settings.
								</p>
							</div>
						{/snippet}
					</Accordion.Item>
				</div>

				<div
					class="bg-surface-50 dark:bg-surface-800/50 hover:bg-surface-100 dark:hover:bg-surface-800 rounded-lg p-4 transition-colors"
				>
					<Accordion.Item value="contact">
						{#snippet lead()}<MailQuestion
								size={24}
								class="text-primary-500 dark:text-primary-400"
							/>{/snippet}
						{#snippet control()}<span class="text-surface-800 text-lg font-semibold dark:text-white"
								>Contact Us</span
							>{/snippet}
						{#snippet panel()}
							<div class="text-surface-600 dark:text-surface-300 pt-2">
								<p>If you have questions about this Privacy Policy, please contact us at:</p>
								<div class="mt-4 space-y-2">
									<p><strong class="font-medium">Email:</strong> privacy@imagegallery.com</p>
									<p>
										<strong class="font-medium">Address:</strong> 123 Gallery Way, Suite 500, Photo City,
										PC 12345
									</p>
								</div>
							</div>
						{/snippet}
					</Accordion.Item>
				</div>
			</Accordion>
		</div>

		<div class="border-surface-200 dark:border-surface-700 mt-8 border-t pt-6">
			<p class="text-surface-500 dark:text-surface-400 text-sm">
				By using our services, you acknowledge that you have read and understood this Privacy
				Policy.
			</p>
		</div>
	</div>
</div>
