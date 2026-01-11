<script lang="ts">
	const services = [
		{
			category: 'Консультації',
			items: [
				{ name: 'Первинна консультація', duration: '60 хв', price: 'XXX' },
				{ name: 'Повторна консультація', duration: '30 хв', price: 'XXX' }
			]
		},
		{
			category: 'Масаж',
			items: [
				{ name: 'Загальний масаж', duration: '60 хв', price: 'XXX' },
				{ name: 'Масаж спини', duration: '30 хв', price: 'XXX' },
				{ name: 'Масаж шийно-комірцевої зони', duration: '20 хв', price: 'XXX' },
				{ name: 'Спортивний масаж', duration: '60 хв', price: 'XXX' }
			]
		},
		{
			category: 'Реабілітація',
			items: [
				{ name: 'Сеанс кінезіотерапії', duration: '60 хв', price: 'XXX' },
				{ name: 'Мануальна терапія', duration: '45 хв', price: 'XXX' },
				{ name: 'Кінезіотейпування', duration: '20 хв', price: 'XXX' },
				{ name: 'Комплексна реабілітація', duration: '90 хв', price: 'XXX' }
			]
		}
	];
</script>

<section id="pricing" class="bg-light py-20 lg:py-28">
	<div class="mx-auto max-w-7xl px-4 lg:px-8">
		<div class="mb-16 text-center">
			<h2 class="font-heading mb-4 text-5xl font-medium text-dark md:text-6xl lg:text-7xl">
				<span class="text-primary">Вартість</span> послуг
			</h2>
			<p class="mx-auto max-w-2xl text-lg text-gray">
				Прозорі ціни без прихованих платежів. Можлива оплата готівкою або карткою.
			</p>
		</div>

		<div class="grid gap-8 lg:grid-cols-3">
			{#each services as category}
				<div class="rounded-2xl bg-white p-8 shadow-sm">
					<h3
						class="mb-6 border-b border-gray-light/30 pb-4 text-xl font-semibold text-dark"
					>
						{category.category}
					</h3>

					<ul class="space-y-4">
						{#each category.items as item}
							<li class="flex items-start justify-between gap-4">
								<div class="flex-1">
									<p class="font-medium text-dark">{item.name}</p>
									<p class="text-sm text-gray">{item.duration}</p>
								</div>
								<p class="font-semibold text-primary">{item.price} грн</p>
							</li>
						{/each}
					</ul>
				</div>
			{/each}
		</div>

		<div class="mt-12 text-center">
			<p class="mb-6 text-gray">
				Потрібна індивідуальна програма? Зв'яжіться з нами для консультації
			</p>
			<a
				href="#contacts"
				class="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 font-medium text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-primary-dark hover:shadow-xl"
			>
				Записатись на консультацію
			</a>
		</div>
	</div>
</section>
