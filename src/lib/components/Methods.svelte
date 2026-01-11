<script lang="ts">
	const methods = [
		{
			title: 'Лікувальний масаж',
			description:
				'Класичний та спеціалізований масаж для зняття напруги, покращення кровообігу та відновлення м\'язів.',
			icon: 'massage'
		},
		{
			title: 'Мануальна терапія',
			description:
				'Робота з хребтом та суглобами для усунення болю, відновлення рухливості та корекції постави.',
			icon: 'spine'
		},
		{
			title: 'Кінезіотерапія',
			description:
				'Лікування рухом — індивідуальні вправи для відновлення після травм та операцій.',
			icon: 'exercise'
		},
		{
			title: 'Постуральна корекція',
			description: 'Діагностика та виправлення порушень постави, робота з м\'язовим дисбалансом.',
			icon: 'posture'
		},
		{
			title: 'Реабілітація після травм',
			description:
				'Комплексне відновлення після спортивних травм, переломів та хірургічних втручань.',
			icon: 'rehab'
		},
		{
			title: 'Тейпування',
			description:
				'Кінезіотейпування для підтримки м\'язів, зменшення болю та прискорення відновлення.',
			icon: 'tape'
		}
	];

	const getIcon = (icon: string) => {
		const icons: Record<string, string> = {
			massage:
				'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z',
			spine: 'M12 4v16m0-16c-1.5 0-3 1-3 2s1.5 2 3 2 3-1 3-2-1.5-2-3-2zm0 8c-1.5 0-3 1-3 2s1.5 2 3 2 3-1 3-2-1.5-2-3-2z',
			exercise:
				'M3 12h2m14 0h2M5.636 5.636l1.414 1.414m9.9 9.9l1.414 1.414M5.636 18.364l1.414-1.414m9.9-9.9l1.414-1.414M12 8a4 4 0 100 8 4 4 0 000-8z',
			posture: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z',
			rehab: 'M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15',
			tape: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
		};
		return icons[icon] || icons.massage;
	};
</script>

<section id="methods" class="bg-light py-20 lg:py-28">
	<div class="mx-auto max-w-7xl px-4 lg:px-8">
		<div class="mb-16 text-center">
			<h2 class="font-heading mb-4 text-5xl font-medium text-dark md:text-6xl lg:text-7xl">
				Наші <span class="text-primary">методики</span>
			</h2>
			<p class="mx-auto max-w-2xl text-lg text-gray">
				Використовуємо перевірені часом та сучасні методи реабілітації для досягнення найкращих
				результатів
			</p>
		</div>

		<div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
			{#each methods as method}
				<article
					class="group rounded-2xl bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
				>
					<div
						class="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white"
					>
						<svg class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="1.5"
								d={getIcon(method.icon)}
							/>
						</svg>
					</div>

					<h3 class="mb-3 text-xl font-semibold text-dark">{method.title}</h3>

					<p class="leading-relaxed text-gray">{method.description}</p>
				</article>
			{/each}
		</div>
	</div>
</section>
