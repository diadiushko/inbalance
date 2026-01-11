<script lang="ts">
	const team = [
		{
			name: 'Ім\'я Прізвище',
			role: 'Засновниця, реабілітолог',
			description: 'Досвід роботи 10+ років. Спеціалізація: відновлення після травм, мануальна терапія.',
			image: null
		},
		{
			name: 'Ім\'я Прізвище',
			role: 'Масажист',
			description: 'Сертифікований спеціаліст з лікувального та спортивного масажу.',
			image: null
		},
		{
			name: 'Ім\'я Прізвище',
			role: 'Кінезіотерапевт',
			description: 'Спеціаліст з лікувальної фізкультури та постуральної корекції.',
			image: null
		}
	];
</script>

<section id="team" class="bg-white py-20 lg:py-28">
	<div class="mx-auto max-w-7xl px-4 lg:px-8">
		<div class="mb-16 text-center">
			<h2 class="font-heading mb-4 text-5xl font-medium text-dark md:text-6xl lg:text-7xl">
				Наша <span class="text-primary">команда</span>
			</h2>
			<p class="mx-auto max-w-2xl text-lg text-gray">
				Професіонали, які допоможуть вам повернути здоров'я та легкість рухів
			</p>
		</div>

		<div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
			{#each team as member}
				<article class="group text-center">
					<div
						class="relative mx-auto mb-6 h-64 w-64 overflow-hidden rounded-2xl bg-gradient-to-br from-primary/20 to-primary-light/20"
					>
						{#if member.image}
							<img
								src={member.image}
								alt={member.name}
								class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
							/>
						{:else}
							<div class="flex h-full w-full items-center justify-center">
								<svg class="h-24 w-24 text-primary/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="1"
										d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
									/>
								</svg>
							</div>
						{/if}
						<div
							class="absolute inset-0 bg-gradient-to-t from-dark/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
						></div>
					</div>

					<h3 class="mb-1 text-xl font-semibold text-dark">{member.name}</h3>

					<p class="mb-3 font-medium text-primary">{member.role}</p>

					<p class="mx-auto max-w-xs text-sm leading-relaxed text-gray">{member.description}</p>
				</article>
			{/each}
		</div>
	</div>
</section>
