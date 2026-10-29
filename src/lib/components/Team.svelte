<script lang="ts">
	import { onMount } from 'svelte';
	import { fade, fly } from 'svelte/transition';
	import annaPhoto from '$lib/assets/team/anna.webp';
	import sofiaPhoto from '$lib/assets/team/sofia.webp';
	import nastiaPhoto from '$lib/assets/team/nastia.webp';
	import innaPhoto from '$lib/assets/team/inna.webp';
	import adminAnnaPhoto from '$lib/assets/team/admin-anna.webp';

	const team = [
		{
			name: 'Анна',
			role: 'Адміністраторка',
			image: adminAnnaPhoto,
			intro:
				'Анна — перша тепла усмішка IN Balance. Вона уважно вислухає, допоможе розібратися з послугами та підбере зручний час для візиту. Щоб ви ще до першої зустрічі відчули: тут вам раді й про вас подбають.',
			education: [],
			training: [],
			methods: []
		},
		{
			name: 'Анна Самойленко',
			role: 'Фізична терапевтка',
			image: annaPhoto,
			intro: 'Працює з порушеннями постави, болем у спині та відновленням після травм стопи.',
			education: [
				'Первомайський фаховий медичний коледж, спеціальність «Сестринська справа».',
				'Львівський приватний медичний університет, спеціальність «Терапія та реабілітація».'
			],
			training: [
				'Фізична терапія при сколіозі та порушеннях постави.',
				'Фізична терапія при болях у спині.',
				'Методика класичного та лікувального масажу.',
				'Фізична терапія при травмах стопи та гомілковостопного суглоба.',
				'Супровід пацієнтів з остеоартритом: від діагнозу до лікування.'
			],
			methods: [
				'Кінезіотейпування',
				'Інструментальна мобілізація м’яких тканин (IASTM)',
				'Постізометрична релаксація (ПІР)',
				'Робота з профілактором Євмінова',
				'Мануальні техніки',
				'Функціональні петлі TRX'
			]
		},
		{
			name: 'Софія Бакум',
			role: 'Фізична терапевтка, ерготерапевтка, масажистка',
			image: sofiaPhoto,
			intro: 'Поєднує фізичну терапію, ерготерапію та лікувальний масаж.',
			education: [
				'2011–2015 — Медичний коледж імені Данила Галицького, спеціальність «Сестринська справа».',
				'2015–2018 — Львівський державний університет фізичної культури, бакалаврат з фізичної терапії та ерготерапії.',
				'2018–2019 — магістратура з фізичної терапії та ерготерапії у Львівському державному університеті фізичної культури імені Івана Боберського.',
				'2014 — 150-годинні курси оздоровчого та лікувального масажу при кафедрі здоров’я людини ЛДУФК.',
				'Клінічна практика з фізичної терапії в неврології, педіатрії та при множинних порушеннях діяльності систем організму.'
			],
			training: [
				'Мануальна мобілізація та PNF-техніки в ортопедичній реабілітації плечового суглоба, Український католицький університет (2017).',
				'Класичний масаж з основами анатомії та фізіології, школа «Профмед» (2017).',
				'Correct Communication (2019).',
				'Інструментально-мануальна сполучнотканинна реконструкція (IASTM, 2023).',
				'Фізична терапія при порушеннях постави та стопи (2023).',
				'Консультантка з військової психології (2023–2024).',
				'Членкиня Української асоціації фізичної терапії з 2022 року.'
			],
			methods: [
				'Фізична терапія та ерготерапія',
				'Лікувальний і оздоровчий масаж',
				'Мануальна мобілізація та PNF-техніки',
				'Інструментальна мобілізація м’яких тканин (IASTM)',
				'Фізична терапія при порушеннях постави та стопи'
			],
			work: [
				'2018–2022 — фізична терапевтка у реабілітаційному центрі «Симетрія».',
				'2022 — фізична терапевтка в реабілітаційному центрі у Сарбінові, Польща.',
				'2023 — січень 2026 — масажистка у реабілітаційному центрі «Твоє здоров’я».'
			]
		},
		{
			name: 'Настя',
			role: 'Фізична терапевтка',
			image: nastiaPhoto,
			intro: 'Працює з болем у спині, поставою та відновленням руху після операцій.',
			education: [
				'Молодший спеціаліст з фізичного виховання, Самбірський фаховий педагогічний коледж імені Івана Филипчака.',
				'Бакалавр фізичної терапії та ерготерапії, Львівський державний університет фізичної культури імені Івана Боберського.',
				'Навчається в магістратурі за спеціальністю «Терапія та реабілітація».'
			],
			training: [
				'Фізична терапія при сколіозі та порушеннях постави.',
				'Оцінка та фізична терапія при болях у спині.',
				'Класичний, локальний і лікувальний масаж; основи анатомії та фізіології людини.',
				'Реабілітація після ендопротезування кульшового суглоба.',
				'Синдром замороженого плеча: сучасні підходи до терапії.',
				'Мануальна терапія суглобів верхніх і нижніх кінцівок.'
			],
			methods: [
				'Рухова терапія',
				'PNF (пропріоцептивна нейром’язова фасилітація)',
				'Постізометрична релаксація (ПІР)',
				'Procedos 3D',
				'Мануальна терапія суглобів',
				'Масаж і тейпування',
				'Інструментальна мобілізація м’яких тканин (IASTM)',
				'Терапія за методом Шрот'
			]
		},
		{
			name: 'Інна Тишкова',
			role: 'Фізична терапевтка, ерготерапевтка',
			image: innaPhoto,
			intro: 'Застосовує фізичну терапію при сколіозі, болю в спині та суглобових обмеженнях.',
			education: [
				'2023 — бакалаврат за спеціальністю «Фізична терапія та ерготерапія», Львівський державний університет фізичної культури імені Івана Боберського.',
				'2025 — магістратура за спеціальністю «Терапія та реабілітація», Львівський державний університет фізичної культури імені Івана Боберського.'
			],
			training: [
				'Фізична терапія та мануальна терапія суглобів.',
				'Адгезивний капсуліт.',
				'Тейпування у фізичній терапії та Stick Mobility Level 1.',
				'Оцінка та фізична терапія при болях у спині.',
				'Procedos Platform 9 Training.',
				'Сколіоз: клініка та підходи фізичної терапії.',
				'Метод сухої голки у фізичній терапії.',
				'Фізична терапія при сколіозі та порушеннях постави.'
			],
			methods: [
				'Рухова терапія та PNF',
				'Постізометрична релаксація (ПІР)',
				'Procedos 3D',
				'Мануальна терапія суглобів',
				'Суха голка',
				'Кінезіотейпування',
				'Інструментальна мобілізація м’яких тканин (IASTM)',
				'Функціональні петлі TRX',
				'Робота з профілактором Євмінова',
				'Вакуумні банки',
				'Терапія за методом Шрот'
			]
		}
	];
	let activeMember = $state(0);
	let member = $derived(team[activeMember]);
	let prefersReducedMotion = $state(false);
	let isCarouselPaused = $state(false);
	let isPointerInside = false;
	let hasCarouselFocus = false;
	let pointerStartX = 0;
	let advanceTimer: number | undefined;
	let resumeTimer: number | undefined;

	const clearAdvanceTimer = () => {
		if (advanceTimer !== undefined) window.clearTimeout(advanceTimer);
	};
	const scheduleAutoAdvance = () => {
		clearAdvanceTimer();
		if (isCarouselPaused || document.hidden || prefersReducedMotion) return;
		advanceTimer = window.setTimeout(() => {
			activeMember = (activeMember + 1) % team.length;
			scheduleAutoAdvance();
		}, 10000);
	};
	const setActiveMember = (index: number) => {
		activeMember = (index + team.length) % team.length;
		scheduleAutoAdvance();
	};
	const previousMember = () => setActiveMember(activeMember - 1);
	const nextMember = () => setActiveMember(activeMember + 1);
	const pauseAutoAdvance = () => {
		isCarouselPaused = true;
		clearAdvanceTimer();
		if (resumeTimer !== undefined) window.clearTimeout(resumeTimer);
	};
	const resumeAutoAdvanceAfterDelay = () => {
		if (resumeTimer !== undefined) window.clearTimeout(resumeTimer);
		resumeTimer = window.setTimeout(() => {
			if (isPointerInside || hasCarouselFocus || document.hidden || prefersReducedMotion) return;
			isCarouselPaused = false;
			scheduleAutoAdvance();
		}, 1000);
	};
	const pointerEntered = () => {
		isPointerInside = true;
		pauseAutoAdvance();
	};
	const pointerLeft = () => {
		isPointerInside = false;
		if (!hasCarouselFocus) resumeAutoAdvanceAfterDelay();
	};
	const focusEntered = () => {
		hasCarouselFocus = true;
		pauseAutoAdvance();
	};
	const focusLeft = (event: FocusEvent) => {
		const carousel = event.currentTarget as HTMLElement;
		if (carousel.contains(event.relatedTarget as Node | null)) return;
		hasCarouselFocus = false;
		if (!isPointerInside) resumeAutoAdvanceAfterDelay();
	};
	const trackPointer = (event: PointerEvent) => (pointerStartX = event.clientX);
	const handlePointerUp = (event: PointerEvent) => {
		const delta = event.clientX - pointerStartX;
		if (Math.abs(delta) <= 48) return;
		if (delta > 0) previousMember();
		else nextMember();
	};

	onMount(() => {
		const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
		const syncMotionPreference = () => {
			prefersReducedMotion = reducedMotion.matches;
			if (prefersReducedMotion) pauseAutoAdvance();
			else if (!isPointerInside && !hasCarouselFocus && !document.hidden) {
				isCarouselPaused = false;
				scheduleAutoAdvance();
			}
		};
		const syncVisibility = () => {
			if (document.hidden) pauseAutoAdvance();
			else if (!isPointerInside && !hasCarouselFocus) resumeAutoAdvanceAfterDelay();
		};
		syncMotionPreference();
		reducedMotion.addEventListener('change', syncMotionPreference);
		document.addEventListener('visibilitychange', syncVisibility);
		scheduleAutoAdvance();
		return () => {
			reducedMotion.removeEventListener('change', syncMotionPreference);
			document.removeEventListener('visibilitychange', syncVisibility);
			clearAdvanceTimer();
			if (resumeTimer !== undefined) window.clearTimeout(resumeTimer);
		};
	});
</script>

<section id="team" class="team-section bg-white py-20 lg:py-28">
	<div class="mx-auto max-w-7xl px-4 lg:px-8">
		<div class="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
			<div>
				<p class="mb-3 text-xs font-bold tracking-[0.22em] text-primary-dark uppercase">
					Люди IN BALANCE
				</p>
				<h2
					class="font-heading text-4xl leading-tight font-semibold tracking-[-0.04em] text-dark md:text-5xl lg:text-6xl"
				>
					Наша <span class="text-primary">команда</span>
				</h2>
			</div>
			<p class="max-w-lg text-base leading-7 text-gray">
				Познайомтеся з командою IN Balance у Львові: фахівчинями з фізичної терапії та масажу й
				нашою адміністраторкою.
			</p>
		</div>

		<div
			class="team-carousel"
			role="region"
			aria-roledescription="carousel"
			aria-label="Команда IN Balance"
			onmouseenter={pointerEntered}
			onmouseleave={pointerLeft}
			onfocusin={focusEntered}
			onfocusout={focusLeft}
		>
			<article
				class="team-card grid grid-rows-[380px_720px] overflow-hidden rounded-[1.8rem] bg-white md:h-[640px] md:grid-cols-[.82fr_1.18fr] md:grid-rows-1"
			>
				<div
					class="team-portrait relative h-[380px] touch-pan-y md:h-full"
					onpointerdown={trackPointer}
					onpointerup={handlePointerUp}
				>
					{#key activeMember}
						<img
							src={member.image}
							alt={`${member.name} — ${member.role} у центрі IN Balance`}
							class="absolute inset-0 h-full w-full object-cover object-center"
							in:fade={{ duration: prefersReducedMotion ? 0 : 850 }}
							out:fade={{ duration: prefersReducedMotion ? 0 : 250 }}
							loading="lazy"
						/>
					{/key}
					<div class="portrait-overlay absolute inset-0"></div>
					<div
						class="absolute right-5 bottom-5 left-5 flex items-end justify-between rounded-2xl border border-white/25 bg-dark/35 p-4 text-white backdrop-blur-md"
					>
						<div>
							<p class="text-[10px] font-semibold tracking-[0.2em] text-white/70 uppercase">
								Команда IN Balance
							</p>
							<p class="mt-1 text-sm font-medium">Львів · турбота в русі</p>
						</div>
						<span class="text-3xl font-light text-primary-light">0{activeMember + 1}</span>
					</div>
				</div>

				<div class="team-info flex h-[720px] flex-col overflow-y-auto p-6 sm:p-8 md:h-full lg:p-10">
					{#key activeMember}
						<div
							class="team-profile-content flex min-h-full flex-col"
							in:fly={{ y: prefersReducedMotion ? 0 : 6, duration: prefersReducedMotion ? 0 : 750 }}
						>
							<div class="mb-6 flex items-center justify-between gap-3">
								<p class="text-xs font-bold tracking-[0.2em] text-primary-dark uppercase">
									Знайомтесь
								</p>
								<p class="text-xs font-semibold tracking-widest text-gray-light">
									0{activeMember + 1} <span class="text-primary/60">/ 0{team.length}</span>
								</p>
							</div>
							<h3 class="text-3xl font-semibold tracking-[-0.04em] text-dark sm:text-4xl">
								{member.name}
							</h3>
							<p
								class="mt-3 inline-flex w-fit rounded-full bg-primary/10 px-3 py-1.5 text-xs font-semibold text-primary-dark"
							>
								{member.role}
							</p>
							<p class="mt-5 text-sm leading-7 text-gray sm:text-base">{member.intro}</p>

							<div class="mt-6 space-y-2">
								{#if member.education.length > 0}
									<details class="rounded-xl bg-light p-4">
										<summary class="cursor-pointer font-semibold text-dark">Освіта</summary>
										<ul
											class="mt-3 list-inside list-disc space-y-2 text-sm leading-relaxed text-gray"
										>
											{#each member.education as item (item)}<li>{item}</li>{/each}
										</ul>
									</details>
								{/if}
								{#if member.training.length > 0}
									<details class="rounded-xl bg-light p-4">
										<summary class="cursor-pointer font-semibold text-dark"
											>Курси та професійний розвиток</summary
										>
										<ul
											class="mt-3 list-inside list-disc space-y-2 text-sm leading-relaxed text-gray"
										>
											{#each member.training as item (item)}<li>{item}</li>{/each}
										</ul>
									</details>
								{/if}
								{#if member.methods.length > 0}
									<details class="rounded-xl bg-light p-4">
										<summary class="cursor-pointer font-semibold text-dark"
											>Методики та техніки</summary
										>
										<ul
											class="mt-3 list-inside list-disc space-y-2 text-sm leading-relaxed text-gray"
										>
											{#each member.methods as item (item)}<li>{item}</li>{/each}
										</ul>
									</details>
								{/if}
								{#if 'work' in member}
									<details class="rounded-xl bg-light p-4">
										<summary class="cursor-pointer font-semibold text-dark">Досвід роботи</summary>
										<ul
											class="mt-3 list-inside list-disc space-y-2 text-sm leading-relaxed text-gray"
										>
											{#each member.work as item (item)}<li>{item}</li>{/each}
										</ul>
									</details>
								{/if}
							</div>

							<div class="mt-auto pt-7">
								<div class="flex items-center justify-between gap-4">
									<div class="flex gap-2" aria-label="Обрати співробітницю">
										{#each team as person, i (person.name)}
											<button
												type="button"
												class="team-dot {activeMember === i ? 'is-active' : ''}"
												aria-label={`Профіль: ${person.name}`}
												aria-current={activeMember === i ? 'true' : undefined}
												onclick={() => setActiveMember(i)}
											></button>
										{/each}
									</div>
									<div class="flex gap-2">
										<button
											type="button"
											class="team-arrow"
											aria-label="Попередня співробітниця"
											onclick={previousMember}>←</button
										>
										<button
											type="button"
											class="team-arrow"
											aria-label="Наступна співробітниця"
											onclick={nextMember}>→</button
										>
									</div>
								</div>
							</div>
						</div>
					{/key}
				</div>
			</article>
		</div>
	</div>
</section>

<style>
	.team-section {
		background: linear-gradient(180deg, #fff 0%, #fcf9fd 100%);
	}
	.team-carousel {
		max-width: 68rem;
		margin-inline: auto;
	}
	.team-card {
		border: 1px solid rgb(142 68 173 / 12%);
		box-shadow: 0 24px 70px rgb(55 35 64 / 9%);
	}
	.team-portrait {
		overflow: hidden;
		background: #e6d8ea;
	}
	.team-portrait img {
		transform: scale(1);
		transform-origin: center center;
		transition: transform 4s cubic-bezier(0.2, 0.7, 0.25, 1);
		will-change: transform;
	}
	.team-card:hover .team-portrait img {
		transform: scale(1.035);
	}
	.portrait-overlay {
		background: linear-gradient(0deg, rgb(28 16 34 / 35%), transparent 48%);
	}
	.team-info {
		scrollbar-color: #d8cedd transparent;
		scrollbar-width: thin;
	}
	.team-dot {
		width: 8px;
		height: 8px;
		border-radius: 999px;
		background: #d8cedd;
		transition:
			width 0.2s,
			background 0.2s;
	}
	.team-dot.is-active {
		width: 28px;
		background: #8e44ad;
	}
	.team-arrow {
		display: grid;
		width: 38px;
		height: 38px;
		place-items: center;
		border: 1px solid #e8dfea;
		border-radius: 50%;
		color: #5b4662;
		transition:
			background 0.2s,
			color 0.2s;
	}
	.team-arrow:hover {
		background: #8e44ad;
		color: white;
	}
	:global(details summary) {
		list-style: none;
	}
	:global(details summary::-webkit-details-marker) {
		display: none;
	}
	:global(details summary::after) {
		content: '+';
		float: right;
		color: #8e44ad;
		font-size: 1.1rem;
		line-height: 1;
	}
	:global(details[open] summary::after) {
		content: '−';
	}
	@media (prefers-reduced-motion: reduce) {
		.team-portrait img {
			transition: none;
		}
		.team-card:hover .team-portrait img {
			transform: none;
		}
	}
</style>
