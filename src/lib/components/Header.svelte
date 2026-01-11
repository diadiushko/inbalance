<script lang="ts">
	import logo from '$lib/assets/logo.png';

	const navItems = [
		{ label: 'Методики', href: '#methods' },
		{ label: 'Команда', href: '#team' },
		{ label: 'Прайс', href: '#pricing' },
		{ label: 'Контакти', href: '#contacts' }
	];

	let isMenuOpen = $state(false);
	let isScrolled = $state(false);

	const handleScroll = () => {
		isScrolled = window.scrollY > 50;
	};

	const toggleMenu = () => {
		isMenuOpen = !isMenuOpen;
	};

	const closeMenu = () => {
		isMenuOpen = false;
	};
</script>

<svelte:window onscroll={handleScroll} />

<header
	class="fixed top-0 left-0 right-0 z-50 transition-all duration-300 {isScrolled
		? 'bg-white/95 shadow-md backdrop-blur-sm'
		: 'bg-transparent'}"
>
	<nav class="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 lg:px-8">
		<a href="#hero" class="flex-shrink-0" onclick={closeMenu}>
			<img src={logo} alt="IN Balance" class="h-12 w-auto lg:h-14" />
		</a>

		<ul class="hidden items-center gap-8 md:flex">
			{#each navItems as item}
				<li>
					<a
						href={item.href}
						class="font-medium text-gray-300 transition-colors duration-200 hover:text-primary"
					>
						{item.label}
					</a>
				</li>
			{/each}
		</ul>

		<a
			href="#contacts"
			class="hidden rounded-full bg-primary px-6 py-2.5 font-medium text-white transition-all duration-200 hover:bg-primary-dark hover:shadow-lg md:inline-block"
		>
			Записатись
		</a>

		<button
			type="button"
			class="flex h-10 w-10 items-center justify-center rounded-lg text-gray-dark md:hidden"
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
				{#each navItems as item}
					<li>
						<a
							href={item.href}
							class="block py-3 font-medium text-gray-dark transition-colors duration-200 hover:text-primary"
							onclick={closeMenu}
						>
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
