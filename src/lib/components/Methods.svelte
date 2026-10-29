<script lang="ts">
	import ServiceIcon, { type ServiceIconName } from './ServiceIcon.svelte';

	const methods = [
		{
			title: 'Рухова терапія',
			icon: 'movement' as ServiceIconName,
			description: 'Індивідуально підібрані вправи та рухові завдання в межах фізичної терапії.'
		},
		{
			title: 'PNF',
			icon: 'coordination' as ServiceIconName,
			description:
				'Пропріоцептивна нейром’язова фасилітація — підхід до тренування рухів і координації.'
		},
		{
			title: 'Постізометрична релаксація',
			icon: 'relaxation' as ServiceIconName,
			description: 'Мануальна техніка, яку фізичні терапевти застосовують у роботі з м’язами.'
		},
		{
			title: 'Мануальні техніки для суглобів',
			icon: 'joints' as ServiceIconName,
			description: 'Робота з суглобами верхніх і нижніх кінцівок відповідно до плану терапії.'
		},
		{
			title: 'Терапія за методом Шрот',
			icon: 'spine' as ServiceIconName,
			description: 'Спеціалізований підхід до фізичної терапії при сколіозі та порушеннях постави.'
		},
		{
			title: 'Кінезіотейпування',
			icon: 'tape' as ServiceIconName,
			description: 'Накладання еластичних тейпів як частина індивідуального плану фізичної терапії.'
		},
		{
			title: 'Інструментальна мобілізація м’яких тканин',
			icon: 'tissue' as ServiceIconName,
			description: 'Техніка IASTM із застосуванням спеціального інструмента.'
		},
		{
			title: 'Суха голка',
			icon: 'needle' as ServiceIconName,
			description: 'Метод фізичної терапії, який виконує фахівець із відповідною підготовкою.'
		},
		{
			title: 'Procedos 3D',
			icon: 'grid' as ServiceIconName,
			description: 'Функціональні рухові вправи з використанням платформи Procedos.'
		},
		{
			title: 'Функціональні петлі TRX',
			icon: 'trx' as ServiceIconName,
			description: 'Вправи з підвісною системою TRX у межах програми занять.'
		},
		{
			title: 'Профілактор Євмінова',
			icon: 'board' as ServiceIconName,
			description: 'Вправи з використанням профілактора за рекомендацією фізичного терапевта.'
		},
		{
			title: 'Класичний і лікувальний масаж',
			icon: 'massage' as ServiceIconName,
			description: 'Масажні процедури для дорослих і дітей від 6 років за прайсом центру.'
		},
		{
			title: 'Вакуумні банки',
			icon: 'cups' as ServiceIconName,
			description: 'Додаткова процедура, яку можна обговорити з фахівцем під час консультації.'
		}
	];
</script>

<section id="methods" class="bg-light py-20 lg:py-28">
	<div class="mx-auto max-w-7xl px-4 lg:px-8">
		<div class="mb-14 grid gap-6 md:grid-cols-[.9fr_1.1fr] md:items-end">
			<div>
				<p class="mb-3 text-xs font-bold tracking-[0.22em] text-primary-dark uppercase">
					Рух у вашому темпі
				</p>
				<h2
					class="font-heading text-4xl leading-tight font-semibold tracking-[-0.04em] text-dark md:text-5xl lg:text-6xl"
				>
					Наші <span class="text-primary">методики</span>
				</h2>
			</div>
			<p class="max-w-2xl text-base leading-7 text-gray">
				У центрі фізичної терапії IN Balance у Львові команда використовує різні методики та
				інструменти. Фізичний терапевт підбирає їх після консультації, з урахуванням запиту та
				індивідуального плану занять.
			</p>
		</div>

		<div class="grid gap-4 md:grid-cols-2">
			{#each methods.slice(0, 4) as method, i (method.title)}
				<article class="method-card relative overflow-hidden rounded-[1.5rem] bg-white p-7 sm:p-8">
					<span class="method-number absolute top-5 right-6 text-5xl font-light">0{i + 1}</span>
					<div
						class="method-icon mb-8 grid h-12 w-12 place-items-center rounded-2xl bg-primary/10 text-primary-dark"
					>
						<ServiceIcon name={method.icon} size={23} />
					</div>
					<h3 class="mb-3 text-xl font-semibold tracking-tight text-dark">{method.title}</h3>
					<p class="max-w-sm text-sm leading-7 text-gray">{method.description}</p>
				</article>
			{/each}
		</div>

		<div class="methods-more mt-5 rounded-[1.5rem] p-6 sm:p-8">
			<div class="mb-5 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
				<h3 class="text-lg font-semibold text-dark">Інші інструменти й техніки</h3>
				<p class="text-sm text-gray">Добір залежить від консультації та плану занять</p>
			</div>
			<div class="flex flex-wrap gap-2.5">
				{#each methods.slice(4) as method (method.title)}
					<span
						class="method-chip rounded-full border border-primary/15 bg-white px-4 py-2.5 text-sm font-medium text-gray-dark"
						title={method.description}>{method.title}</span
					>
				{/each}
			</div>
		</div>
	</div>
</section>

<style>
	.method-card {
		border: 1px solid rgb(142 68 173 / 10%);
		box-shadow: 0 10px 34px rgb(55 35 64 / 5%);
		transition:
			transform 0.25s,
			box-shadow 0.25s;
	}
	.method-card:hover {
		transform: translateY(-3px);
		box-shadow: 0 18px 40px rgb(55 35 64 / 10%);
	}
	.method-number {
		color: rgb(142 68 173 / 11%);
	}
	.methods-more {
		background: #f3edf6;
	}
	.method-chip {
		transition:
			color 0.2s,
			border-color 0.2s,
			background 0.2s;
	}
	.method-chip:hover {
		color: #71388a;
		border-color: #c39bd3;
		background: #faf7fc;
	}
</style>
