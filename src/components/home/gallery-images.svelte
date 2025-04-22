<script lang="ts">
	let { samples: sampleImages } = $props();
	// import { afterNavigate, beforeNavigate } from '$app/navigation';

	let isLoading = $state(true);
	let selectedImage = $state<string | null>(null);
	let isModalOpen = $state(false);
	let modalRef = $state<HTMLDivElement | null>(null);
	function openModal(imageUrl: string) {
		selectedImage = imageUrl;
		isModalOpen = true;
		document.body.style.overflow = 'hidden';
		$effect(() => {
			modalRef?.focus();
		});
	}
	function closeModal() {
		isModalOpen = false;
		document.body.style.overflow = 'auto';
	}
	// Handle keyboard events
	$effect(() => {
		if (!isModalOpen) return;
		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.key === 'Escape') closeModal();
			if (e.key === 'Tab' && modalRef) {
				const focusable = modalRef.querySelectorAll(
					'button, [href], [tabindex]:not([tabindex="-1"])'
				);
				if (focusable.length === 0) return;
				const first = focusable[0] as HTMLElement;
				const last = focusable[focusable.length - 1] as HTMLElement;
				if (e.shiftKey && document.activeElement === first) {
					last.focus();
					e.preventDefault();
				} else if (!e.shiftKey && document.activeElement === last) {
					first.focus();
					e.preventDefault();
				}
			}
		};
		window.addEventListener('keydown', handleKeyDown);
		return () => window.removeEventListener('keydown', handleKeyDown);
	});

	// let isMounting = $state(true);
	// beforeNavigate(() => {
	// 	isMounting = true;
	// });

	// afterNavigate(() => {
	// 	isMounting = false;
	// });
</script>

<!-- Gallery -->
<div class="space-y-6">
	<ul aria-labelledby="gallery-heading" class="columns-2 gap-4 space-y-4 md:columns-3 lg:columns-4">
		{#each sampleImages as item (item.id)}
			<li class="break-inside-avoid">
				<button
					type="button"
					class="w-full rounded-lg focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none"
					onclick={() => openModal(item.url)}
					onkeydown={(e) => e.key === 'Enter' && openModal(item.url)}
					aria-label="View image in full size"
				>
					<img
						src={item.url}
						alt="Gallery"
						loading="lazy"
						class="w-full rounded-lg object-cover shadow transition hover:scale-[1.02] {isLoading
							? 'blur-xl grayscale'
							: ''}"
						onload={() => (isLoading = false)}
					/>
				</button>
			</li>
		{/each}
	</ul>
</div>
<!-- Modal Dialog -->
{#if isModalOpen && selectedImage}
	<div
		bind:this={modalRef}
		role="dialog"
		aria-modal="true"
		aria-labelledby="modal-title"
		tabindex="-1"
		class="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
		onclick={closeModal}
		onkeydown={(e) => e.key === 'Enter' && closeModal()}
	>
		<div
			class="relative max-h-[90vh] max-w-[90vw]"
			onclick={(e) => e.stopPropagation()}
			onkeydown={(e) => e.stopPropagation()}
			role="presentation"
		>
			<h2 id="modal-title" class="sr-only">Enlarged Image View</h2>
			<button
				type="button"
				class="absolute -top-12 -right-12 rounded-full bg-white/10 p-2 text-white transition hover:bg-white/20 focus:ring-2 focus:ring-white focus:outline-none"
				onclick={closeModal}
				aria-label="Close dialog"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-8 w-8"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M6 18L18 6M6 6l12 12"
					/>
				</svg>
			</button>
			<img src={selectedImage} alt="Enlarged view" class="max-h-[90vh] max-w-full object-contain" />
		</div>
	</div>
{/if}
