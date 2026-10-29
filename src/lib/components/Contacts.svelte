<script lang="ts">
	import { business } from '$lib/business';
	import BookingForm from './BookingForm.svelte';

	const contactInfo = [
		{
			icon: 'phone',
			title: 'Телефон',
			value: business.phoneDisplay,
			href: business.phoneHref
		},
		{
			icon: 'location',
			title: 'Адреса',
			value: business.address,
			href: business.mapsUrl
		},
		{
			icon: 'email',
			title: 'Email',
			value: business.email,
			href: `mailto:${business.email}`
		},
		{
			icon: 'hours',
			title: 'Графік роботи',
			value: business.openingHours.map(({ days, hours }) => `${days}: ${hours}`).join('\n')
		}
	];

	const getIcon = (icon: string) => {
		const icons: Record<string, string> = {
			phone:
				'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z',
			location:
				'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z',
			email: 'M4 6h16v12H4z M4 7l8 6 8-6',
			hours: 'M12 8v4l3 2m6-2a9 9 0 11-18 0 9 9 0 0118 0z'
		};
		return icons[icon] || icons.phone;
	};
</script>

<section id="contacts" class="contacts-section py-20 lg:py-28">
	<div class="mx-auto max-w-7xl px-4 lg:px-8">
		<div class="mb-14">
			<p class="mb-3 text-xs font-bold tracking-[0.22em] text-primary-dark uppercase">Ми поруч</p>
			<h2
				class="font-heading text-4xl leading-tight font-semibold tracking-[-0.04em] text-dark md:text-5xl lg:text-6xl"
			>
				<span class="text-primary">Контакти</span> та запис
			</h2>
			<p class="mt-4 max-w-2xl text-base leading-7 text-gray">
				Залиште ім'я та номер телефону. Адміністратор зателефонує, щоб узгодити час.
			</p>
		</div>

		<div class="grid gap-6 lg:grid-cols-[.9fr_1.1fr]">
			<div>
				<div class="contact-panel h-full rounded-[1.6rem] p-6 sm:p-8">
					<h3 class="mb-7 text-xl font-semibold tracking-tight text-dark">Завітайте до нас</h3>

					<div class="mb-8 space-y-5">
						{#each contactInfo as info (info.title)}
							<div class="flex items-start gap-4">
								<div
									class="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-white text-primary-dark shadow-sm"
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
											class="text-base font-medium whitespace-pre-line text-dark transition-colors hover:text-primary"
											rel="external"
										>
											{info.value}
										</a>
									{:else}
										<p class="text-base font-medium whitespace-pre-line text-dark">{info.value}</p>
									{/if}
								</div>
							</div>
						{/each}
					</div>

					<a
						href={business.mapsUrl}
						target="_blank"
						rel="external noopener noreferrer"
						class="map-link flex min-h-36 flex-col items-start justify-center rounded-2xl p-6 text-left text-primary-dark transition-colors"
					>
						<svg class="mb-4 h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
						<span class="text-lg font-semibold">Знайти IN Balance на карті</span>
						<span class="mt-2 text-gray">{business.address}</span>
					</a>
				</div>
			</div>

			<div>
				<div class="contact-form-card rounded-[1.6rem] p-6 sm:p-8">
					<p class="mb-3 text-xs font-bold tracking-[0.18em] text-primary-dark uppercase">
						Перший крок
					</p>
					<h3 class="mb-6 text-xl font-semibold tracking-tight text-dark">Запис на консультацію</h3>
					<BookingForm />
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	.contacts-section {
		background: #f7f3f8;
	}
	.contact-panel,
	.contact-form-card {
		border: 1px solid rgb(142 68 173 / 10%);
		background: rgb(255 255 255 / 76%);
		box-shadow: 0 12px 38px rgb(55 35 64 / 5%);
	}
	.map-link {
		background: #efe6f3;
	}
	.map-link:hover {
		background: #e8d9ee;
	}
</style>
