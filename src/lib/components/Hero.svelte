<script lang="ts">
	import { onMount } from 'svelte';
	import { fade, fly } from 'svelte/transition';
	import annaPhoto from '$lib/assets/team/anna.webp';
	import sofiaPhoto from '$lib/assets/team/sofia.webp';
	import nastiaPhoto from '$lib/assets/team/nastia.webp';

	const slides = [
		{
			label: 'Фізична терапія у Львові',
			title: 'Повертаємо руху легкість',
			text: 'Індивідуальні заняття з фізичним терапевтом — для дорослих і дітей від 6 років.',
			image: annaPhoto,
			alt: 'Фізична терапевтка IN Balance',
			cta: 'Обрати консультацію',
			href: '#contacts',
			note: 'Починаємо з розмови та оцінки вашого запиту'
		},
		{
			label: 'Масаж у Львові',
			title: 'Час подбати про себе',
			text: 'Класичний, лікувальний і лімфодренажний масаж у спокійному темпі та уважних руках.',
			image: sofiaPhoto,
			alt: 'Фахівчиня з масажу IN Balance',
			cta: 'Переглянути прайс',
			href: '#pricing',
			note: 'Різні види масажу для дорослих і дітей'
		},
		{
			label: 'Перша зустріч',
			title: 'Знайомство без поспіху',
			text: 'Консультація фізичного терапевта обов’язкова. Пробне заняття на 1 годину вже входить у її вартість.',
			image: nastiaPhoto,
			alt: 'Фізична терапевтка IN Balance',
			cta: 'Записатися на консультацію',
			href: '#contacts',
			note: '850 грн · пробне заняття можна використати протягом 2 тижнів'
		}
	];
	let activeSlide = $state(0);
	let prefersReducedMotion = $state(false);
	const previous = () => (activeSlide = (activeSlide + slides.length - 1) % slides.length);
	const next = () => (activeSlide = (activeSlide + 1) % slides.length);

	onMount(() => {
		const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
		const syncMotionPreference = () => (prefersReducedMotion = reducedMotion.matches);
		syncMotionPreference();
		reducedMotion.addEventListener('change', syncMotionPreference);
		const timer = window.setInterval(() => {
			if (!document.hidden && !reducedMotion.matches) next();
		}, 10000);

		return () => {
			window.clearInterval(timer);
			reducedMotion.removeEventListener('change', syncMotionPreference);
		};
	});
</script>

<section
	id="hero"
	class="hero-shell relative overflow-hidden px-4 pt-28 pb-12 sm:px-6 lg:min-h-[760px] lg:px-8 lg:pt-36 lg:pb-20"
>
	<div
		class="hero-glow pointer-events-none absolute -top-48 left-[-10rem] h-[34rem] w-[34rem] rounded-full"
	></div>
	<div class="mx-auto max-w-7xl">
		<div
			class="hero-stage relative grid min-h-[1120px] overflow-hidden rounded-[2rem] lg:h-[720px] lg:min-h-0 lg:grid-cols-[1fr_0.92fr]"
		>
			<div
				class="hero-copy relative z-10 flex h-[740px] flex-col justify-center px-7 py-12 sm:px-12 lg:h-full lg:px-16 lg:py-16"
			>
				<div class="mb-8 flex items-center gap-3">
					<span class="h-px w-10 bg-primary"></span>
					<p class="eyebrow">IN BALANCE · ЛЬВІВ</p>
				</div>
				<div class="slide-copy-slot" aria-live="polite">
					{#key activeSlide}
						<div
							class="slide-copy"
							in:fly={{ y: prefersReducedMotion ? 0 : 8, duration: prefersReducedMotion ? 0 : 700 }}
							out:fade={{ duration: prefersReducedMotion ? 0 : 250 }}
						>
							<p class="mb-4 text-xs font-bold tracking-[0.22em] text-primary-dark uppercase">
								{slides[activeSlide].label}
							</p>
							<h1
								class="max-w-xl text-4xl leading-[1.08] font-semibold tracking-[-0.045em] text-dark sm:text-5xl lg:text-[4.25rem]"
							>
								{slides[activeSlide].title}
							</h1>
							<p class="mt-6 max-w-lg text-base leading-8 text-gray sm:text-lg">
								{slides[activeSlide].text}
							</p>
							<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -->
							<a href={slides[activeSlide].href} class="primary-button mt-8 w-fit"
								>{slides[activeSlide].cta}<span aria-hidden="true">↗</span></a
							>
							<p class="mt-5 max-w-md text-sm leading-6 text-gray-light">
								{slides[activeSlide].note}
							</p>
						</div>
					{/key}
				</div>
				<div class="carousel-controls relative mt-12 flex items-center justify-center">
					<button
						type="button"
						aria-label="Попередній слайд"
						onclick={previous}
						class="carousel-arrow">←</button
					>
					<div class="flex gap-2" aria-label="Оберіть слайд">
						{#each slides as slide, i (slide.label)}
							<button
								type="button"
								aria-label={`Слайд ${i + 1}: ${slide.label}`}
								aria-current={activeSlide === i ? 'true' : undefined}
								onclick={() => (activeSlide = i)}
								class="carousel-dot {activeSlide === i ? 'is-active' : ''}"
							></button>
						{/each}
					</div>
					<button type="button" aria-label="Наступний слайд" onclick={next} class="carousel-arrow"
						>→</button
					>
					<span class="absolute right-0 text-xs font-semibold tracking-widest text-gray-light"
						>0{activeSlide + 1} <span class="text-primary/60">/ 0{slides.length}</span></span
					>
				</div>
			</div>
			<div class="hero-image-wrap relative h-[380px] min-h-[380px] lg:h-full lg:min-h-0">
				<div class="hero-image-accent absolute inset-y-0 left-0 z-10 w-16 sm:w-24"></div>
				{#key activeSlide}
					<img
						src={slides[activeSlide].image}
						alt={slides[activeSlide].alt}
						class="hero-image absolute inset-0 h-full w-full object-cover"
						in:fade={{ duration: prefersReducedMotion ? 0 : 900 }}
						out:fade={{ duration: prefersReducedMotion ? 0 : 250 }}
						fetchpriority="high"
					/>
				{/key}
				<div class="hero-image-shade absolute inset-0"></div>
				<div
					class="hero-caption absolute right-5 bottom-5 left-5 z-10 flex items-end justify-between rounded-2xl p-5 text-white sm:right-8 sm:bottom-8 sm:left-8 sm:p-6"
				>
					<div>
						<p class="text-xs font-semibold tracking-[0.18em] text-white/70 uppercase">
							IN BALANCE
						</p>
						<p class="mt-2 text-lg font-medium">Турбота, що починається з уваги</p>
					</div>
					<span class="caption-mark" aria-hidden="true">IN</span>
				</div>
				<div
					class="hero-index absolute top-6 right-6 z-10 rounded-full px-4 py-2 text-xs font-semibold tracking-[0.18em] text-white"
				>
					LVIV · 49°50′
				</div>
			</div>
		</div>
		<div
			class="hero-footnote mt-6 flex flex-col gap-2 px-2 text-xs tracking-wide text-gray-light sm:flex-row sm:items-center sm:justify-between"
		>
			<p>Фізична терапія · Масаж · Реабілітація</p>
			<a href="#methods" class="font-semibold text-primary-dark hover:text-primary"
				>Знайомтесь з підходом <span aria-hidden="true">↓</span></a
			>
		</div>
	</div>
</section>

<style>
	.hero-shell {
		background: #f5f1f7;
	}
	.hero-glow {
		background: radial-gradient(circle, rgb(197 160 213 / 36%), transparent 68%);
	}
	.hero-stage {
		background: #fff;
		box-shadow: 0 28px 80px rgb(62 34 72 / 12%);
	}
	.hero-copy {
		background: linear-gradient(145deg, #fff 10%, #fbf8fc 100%);
	}
	.slide-copy-slot {
		position: relative;
		min-height: 430px;
	}
	.slide-copy {
		position: absolute;
		inset: 0;
	}
	.hero-image-wrap {
		background: #d8c6df;
	}
	.hero-image-accent {
		background: linear-gradient(145deg, rgb(165 105 189 / 65%), transparent 70%);
		clip-path: polygon(0 0, 100% 0, 0 100%);
	}
	.hero-image-shade {
		background:
			linear-gradient(0deg, rgb(28 16 34 / 58%), transparent 52%),
			linear-gradient(90deg, rgb(72 36 82 / 18%), transparent 48%);
	}
	.hero-caption {
		background: rgb(39 27 45 / 38%);
		backdrop-filter: blur(16px);
		border: 1px solid rgb(255 255 255 / 22%);
	}
	.hero-index {
		background: rgb(39 27 45 / 32%);
		backdrop-filter: blur(12px);
		border: 1px solid rgb(255 255 255 / 22%);
	}
	.caption-mark {
		font-family: Georgia, serif;
		font-size: 2.2rem;
		line-height: 1;
		color: #e1c4eb;
	}
	.eyebrow {
		font-size: 0.7rem;
		font-weight: 700;
		letter-spacing: 0.24em;
		color: #6e5b73;
	}
	.primary-button {
		display: inline-flex;
		align-items: center;
		gap: 1.5rem;
		border-radius: 999px;
		background: #8e44ad;
		padding: 0.95rem 1.35rem 0.95rem 1.6rem;
		color: white;
		font-size: 0.9rem;
		font-weight: 600;
		box-shadow: 0 10px 24px rgb(142 68 173 / 22%);
		transition:
			transform 0.2s,
			background 0.2s;
	}
	.primary-button:hover {
		transform: translateY(-2px);
		background: #71388a;
	}
	.carousel-dot {
		width: 8px;
		height: 8px;
		border-radius: 999px;
		background: #d8cedd;
		transition:
			width 0.2s,
			background 0.2s;
	}
	.carousel-dot.is-active {
		width: 28px;
		background: #8e44ad;
	}
	.carousel-controls {
		gap: 1rem;
	}
	.carousel-arrow {
		display: grid;
		width: 36px;
		height: 36px;
		place-items: center;
		border: 1px solid #e8dfea;
		border-radius: 50%;
		color: #5b4662;
		transition:
			background 0.2s,
			color 0.2s;
	}
	.carousel-arrow:hover {
		background: #8e44ad;
		color: white;
	}
	@media (prefers-reduced-motion: reduce) {
		*,
		*::before,
		*::after {
			scroll-behavior: auto !important;
			transition-duration: 0.01ms !important;
		}
	}
	@media (max-width: 639px) {
		.slide-copy-slot {
			min-height: 490px;
		}
	}
</style>
