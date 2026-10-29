<script lang="ts">
	import ServiceIcon, { type ServiceIconName } from './ServiceIcon.svelte';

	type PriceItem = { name: string; duration?: string; price: string };
	const services: { category: string; icon: ServiceIconName; items: PriceItem[] }[] = [
		{
			category: 'Консультація',
			icon: 'consultation',
			items: [
				{
					name: 'Обов’язкова консультація фізичного терапевта',
					duration: 'Пробне заняття 60 хв у подарунок',
					price: '850'
				}
			]
		},
		{
			category: 'Курси фізичної терапії — дорослі',
			icon: 'adult',
			items: [
				{ name: '10 занять', price: '9 600' },
				{ name: '5 занять', price: '5 000' },
				{ name: '3 заняття', price: '3 300' }
			]
		},
		{
			category: 'Курси фізичної терапії — діти до 14 років',
			icon: 'child',
			items: [
				{ name: '10 занять', price: '9 350' },
				{ name: '5 занять', price: '4 800' },
				{ name: '3 заняття', price: '3 150' }
			]
		},
		{
			category: 'Інші заняття та процедури',
			icon: 'procedure',
			items: [
				{ name: 'Курс при сколіозі', duration: '30 занять', price: '23 000' },
				{ name: 'Кінезіотейпування', duration: '1 ділянка', price: '450' },
				{ name: 'Кінезіотейпування', duration: '2 ділянки', price: '800' },
				{ name: 'Банки', duration: '10–15 хв', price: '250' },
				{ name: 'Суха голка', price: '500' }
			]
		},
		{
			category: 'Масаж',
			icon: 'massage',
			items: [
				{ name: 'Масаж усього тіла', duration: '60 хв', price: '1 000' },
				{ name: 'Лімфодренажний масаж', duration: '60 хв', price: '1 000' },
				{ name: 'Антицелюлітний масаж', duration: '60 хв', price: '1 100' },
				{ name: 'Спина, комірцева зона, голова', duration: '30 хв', price: '700' },
				{ name: 'Спина, комірцева зона, голова', duration: '60 хв', price: '1 250' },
				{ name: 'Ноги або руки', duration: '30 хв', price: '700' },
				{ name: 'Дитячий масаж (6–12 років)', duration: '30 хв', price: '640' }
			]
		}
	];
</script>

<section id="pricing" class="price-section py-20 lg:py-28">
	<div class="mx-auto max-w-7xl px-4 lg:px-8">
		<div class="mx-auto mb-14 max-w-3xl text-center">
			<p class="mb-3 text-xs font-bold tracking-[0.22em] text-primary-dark uppercase">
				Вартість послуг · IN Balance · Львів
			</p>
			<h2
				class="font-heading text-4xl leading-tight font-semibold tracking-[-0.04em] text-dark md:text-5xl lg:text-6xl"
			>
				Ціни на фізичну терапію та масаж
			</h2>
			<p class="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray">
				Консультація, індивідуальні курси відновлення, масаж і додаткові процедури — з прозорою
				вартістю до початку занять.
			</p>
		</div>

		<div class="price-grid grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-6">
			{#each services as category, i (category.category)}
				<div
					class="price-card rounded-[1.5rem] p-6 sm:p-8 lg:col-span-3"
					class:price-card-last={i === services.length - 1}
				>
					<div class="mb-6 flex items-center justify-between gap-4 border-b border-primary/10 pb-5">
						<div class="flex items-center gap-4">
							<span
								class="price-icon grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary-dark"
								><ServiceIcon name={category.icon} size={22} /></span
							>
							<h3 class="text-lg leading-6 font-semibold text-dark">{category.category}</h3>
						</div>
						<span class="price-index">0{i + 1}</span>
					</div>

					<ul class="space-y-4.5">
						{#each category.items as item (item.name + item.price)}
							<li
								class="flex items-start justify-between gap-4 border-b border-primary/5 pb-4 last:border-0 last:pb-0"
							>
								<div class="flex-1">
									<p class="font-medium text-dark">{item.name}</p>
									{#if item.duration}<p class="mt-1 text-xs leading-5 text-gray">
											{item.duration}
										</p>{/if}
								</div>
								<p class="price-amount shrink-0 text-right font-semibold text-primary-dark">
									{item.price}<span class="ml-1 text-xs font-medium text-gray">грн</span>
								</p>
							</li>
						{/each}
					</ul>
				</div>
			{/each}
		</div>
		<p class="mt-6 text-center text-sm text-gray">
			Курси масажу: 5 сеансів — знижка 4%, 10 сеансів — знижка 8%.
		</p>

		<div
			class="price-note mt-10 flex flex-col gap-5 rounded-[1.5rem] p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8"
		>
			<p class="max-w-2xl text-sm leading-7 text-gray">
				Пробне заняття доступне всім клієнтам від 6 років. Ним можна скористатися протягом 2 тижнів
				після консультації.
			</p>
			<a
				href="#contacts"
				class="inline-flex shrink-0 items-center gap-4 rounded-full bg-primary-dark px-6 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-primary"
			>
				Записатись на консультацію <span aria-hidden="true">↗</span>
			</a>
		</div>
	</div>
</section>

<style>
	.price-card {
		border: 1px solid #ece7ef;
		border-top: 3px solid #a569bd;
		background: #fff;
		box-shadow: 0 12px 34px rgb(45 34 50 / 4%);
	}
	.price-section {
		background: #fbfafc;
	}
	.price-amount {
		min-width: 6.5rem;
		font-variant-numeric: tabular-nums;
	}
	@media (min-width: 768px) {
		.price-card-last {
			grid-column: 1 / -1;
			width: 72%;
			justify-self: center;
		}
	}
	@media (min-width: 1024px) {
		.price-card-last {
			grid-column: 2 / span 4;
			width: 100%;
		}
	}
	.price-index {
		color: #9a8ca0;
		font-size: 0.7rem;
		font-weight: 700;
		letter-spacing: 0.14em;
	}
	.price-icon {
		transition:
			transform 0.2s ease,
			background 0.2s ease;
	}
	.price-card:hover .price-icon {
		transform: translateY(-2px);
		background: #ecdef0;
	}
	.price-note {
		border: 1px solid #ece7ef;
		background: #f6f1f8;
	}
</style>
