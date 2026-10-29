<script lang="ts">
	import logoHeader from '$lib/assets/logo-header.png';

	const navItems = [
		{ label: 'Методики', href: '#methods' },
		{ label: 'Команда', href: '#team' },
		{ label: 'Прайс', href: '#pricing' },
		{ label: 'Контакти', href: '#contacts' }
	];

	let isMenuOpen = $state(false);

	const toggleMenu = () => {
		isMenuOpen = !isMenuOpen;
	};

	const closeMenu = () => {
		isMenuOpen = false;
	};
</script>

<header
	class="fixed top-0 right-0 left-0 z-50 border-b border-primary/10 bg-white/90 shadow-[0_4px_24px_rgba(50,30,60,0.05)] backdrop-blur-xl transition-all duration-300"
>
	<nav class="mx-auto flex max-w-7xl items-center justify-between px-4 py-2.5 lg:px-8">
		<a href="#hero" class="flex-shrink-0" onclick={closeMenu}>
			<img src={logoHeader} alt="IN Balance" class="h-auto w-40 object-contain lg:w-44" />
		</a>

		<ul class="hidden items-center gap-8 md:flex">
			{#each navItems as item (item.href)}
				<li>
					<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -->
					<a href={item.href} class="desktop-link">
						{item.label}
					</a>
				</li>
			{/each}
		</ul>

		<a
			href="#contacts"
			class="hidden rounded-full bg-primary-dark px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-primary md:inline-block"
		>
			Записатись
		</a>

		<button
			type="button"
			class="flex h-10 w-10 items-center justify-center rounded-lg text-gray-dark transition-colors duration-200 hover:bg-light md:hidden"
			onclick={toggleMenu}
			aria-label="Меню"
		>
			{#if isMenuOpen}
				<svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M6 18L18 6M6 6l12 12"
					/>
				</svg>
			{:else}
				<svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M4 6h16M4 12h16M4 18h16"
					/>
				</svg>
			{/if}
		</button>
	</nav>

	{#if isMenuOpen}
		<div class="border-t border-gray-light/20 bg-white/95 backdrop-blur-sm md:hidden">
			<ul class="flex flex-col px-4 py-4">
				{#each navItems as item (item.href)}
					<li>
						<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -->
						<a href={item.href} class="mobile-link" onclick={closeMenu}>
							{item.label}
						</a>
					</li>
				{/each}
				<li class="mt-4">
					<a
						href="#contacts"
						class="block rounded-full bg-primary py-3 text-center font-medium text-white transition-all duration-200 hover:bg-primary-dark"
						onclick={closeMenu}
					>
						Записатись
					</a>
				</li>
			</ul>
		</div>
	{/if}
</header>

<style>
	.desktop-link {
		display: block;
		border-radius: 999px;
		padding: 0.5rem 1rem;
		color: var(--color-gray-dark);
		font-size: 0.875rem;
		font-weight: 500;
		transition:
			background 0.2s,
			color 0.2s;
	}
	.desktop-link:hover {
		background: var(--color-light);
		color: var(--color-primary-dark);
	}
	.mobile-link {
		display: block;
		padding-block: 0.75rem;
		color: var(--color-gray-dark);
		font-weight: 500;
		transition: color 0.2s;
	}
	.mobile-link:hover {
		color: var(--color-primary);
	}
</style>
