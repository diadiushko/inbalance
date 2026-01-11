<script lang="ts">
	import BookingForm from './BookingForm.svelte';

	const contactInfo = [
		{
			icon: 'phone',
			title: 'Телефон',
			value: '+380 XX XXX XX XX',
			href: 'tel:+380XXXXXXXXX'
		},
		{
			icon: 'location',
			title: 'Адреса',
			value: 'м. Київ, вул. Назва, 1',
			href: 'https://maps.google.com'
		},
		{
			icon: 'clock',
			title: 'Графік роботи',
			value: 'Пн-Пт: 9:00 - 20:00\nСб: 10:00 - 18:00',
			href: null
		}
	];

	const getIcon = (icon: string) => {
		const icons: Record<string, string> = {
			phone: 'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z',
			location:
				'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z',
			clock: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'
		};
		return icons[icon] || icons.phone;
	};
</script>

<section id="contacts" class="bg-white py-20 lg:py-28">
	<div class="mx-auto max-w-7xl px-4 lg:px-8">
		<div class="mb-16 text-center">
			<h2 class="font-heading mb-4 text-5xl font-medium text-dark md:text-6xl lg:text-7xl">
				<span class="text-primary">Контакти</span> та запис
			</h2>
			<p class="mx-auto max-w-2xl text-lg text-gray">
				Залиште заявку і ми зв'яжемося з вами для уточнення деталей та запису на прийом
			</p>
		</div>

		<div class="grid gap-12 lg:grid-cols-2">
			<div>
				<h3 class="mb-8 text-2xl font-semibold text-dark">Як з нами зв'язатись</h3>

				<div class="mb-10 space-y-6">
					{#each contactInfo as info}
						<div class="flex items-start gap-4">
							<div
								class="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary"
							>
								<svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d={getIcon(info.icon)}
									/>
								</svg>
							</div>
							<div>
								<p class="mb-1 text-sm font-medium text-gray">{info.title}</p>
								{#if info.href}
									<a
										href={info.href}
										class="whitespace-pre-line text-lg font-medium text-dark transition-colors hover:text-primary"
									>
										{info.value}
									</a>
								{:else}
									<p class="whitespace-pre-line text-lg font-medium text-dark">{info.value}</p>
								{/if}
							</div>
						</div>
					{/each}
				</div>

				<div
					class="aspect-video overflow-hidden rounded-2xl bg-gray-light/20"
				>
					<div class="flex h-full items-center justify-center text-gray">
						<p class="text-center">
							<svg
								class="mx-auto mb-2 h-12 w-12 opacity-50"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="1.5"
									d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
								/>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="1.5"
									d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
								/>
							</svg>
							Тут буде карта
						</p>
					</div>
				</div>
			</div>

			<div>
				<div class="rounded-2xl bg-light p-8">
					<h3 class="mb-6 text-2xl font-semibold text-dark">Записатись на прийом</h3>
					<BookingForm />
				</div>
			</div>
		</div>
	</div>
</section>
