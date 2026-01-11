<script lang="ts">
	type FormStatus = 'idle' | 'loading' | 'success' | 'error';

	const services = [
		{ value: 'consultation', label: 'Консультація' },
		{ value: 'massage', label: 'Масаж' },
		{ value: 'rehabilitation', label: 'Реабілітація' },
		{ value: 'other', label: 'Інше' }
	];

	let name = $state('');
	let phone = $state('');
	let service = $state('consultation');
	let message = $state('');
	let status = $state<FormStatus>('idle');
	let errorMessage = $state('');

	const handleSubmit = async (e: Event) => {
		e.preventDefault();

		if (!name.trim() || !phone.trim()) {
			errorMessage = 'Будь ласка, заповніть обов\'язкові поля';
			status = 'error';
			return;
		}

		status = 'loading';
		errorMessage = '';

		try {
			const response = await fetch('/api/booking', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					name: name.trim(),
					phone: phone.trim(),
					service,
					message: message.trim()
				})
			});

			if (!response.ok) {
				throw new Error('Помилка відправки');
			}

			status = 'success';
			name = '';
			phone = '';
			service = 'consultation';
			message = '';
		} catch {
			status = 'error';
			errorMessage = 'Не вдалося відправити заявку. Спробуйте ще раз або зателефонуйте нам.';
		}
	};
</script>

<form onsubmit={handleSubmit} class="space-y-6">
	{#if status === 'success'}
		<div class="rounded-xl bg-green-50 p-6 text-center">
			<svg
				class="mx-auto mb-4 h-12 w-12 text-green-500"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
				/>
			</svg>
			<h3 class="mb-2 text-lg font-semibold text-green-800">Дякуємо за заявку!</h3>
			<p class="text-green-700">Ми зв'яжемося з вами найближчим часом.</p>
		</div>
	{:else}
		<div>
			<label for="name" class="mb-2 block text-sm font-medium text-dark">
				Ваше ім'я <span class="text-primary">*</span>
			</label>
			<input
				type="text"
				id="name"
				bind:value={name}
				placeholder="Введіть ваше ім'я"
				class="w-full rounded-xl border border-gray-light/30 px-4 py-3 transition-all duration-200 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none"
				required
			/>
		</div>

		<div>
			<label for="phone" class="mb-2 block text-sm font-medium text-dark">
				Номер телефону <span class="text-primary">*</span>
			</label>
			<input
				type="tel"
				id="phone"
				bind:value={phone}
				placeholder="+380 XX XXX XX XX"
				class="w-full rounded-xl border border-gray-light/30 px-4 py-3 transition-all duration-200 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none"
				required
			/>
		</div>

		<div>
			<label for="service" class="mb-2 block text-sm font-medium text-dark">Послуга</label>
			<select
				id="service"
				bind:value={service}
				class="w-full rounded-xl border border-gray-light/30 px-4 py-3 transition-all duration-200 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none"
			>
				{#each services as s}
					<option value={s.value}>{s.label}</option>
				{/each}
			</select>
		</div>

		<div>
			<label for="message" class="mb-2 block text-sm font-medium text-dark">
				Коментар (необов'язково)
			</label>
			<textarea
				id="message"
				bind:value={message}
				rows={3}
				placeholder="Опишіть вашу проблему або побажання"
				class="w-full resize-none rounded-xl border border-gray-light/30 px-4 py-3 transition-all duration-200 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none"
			></textarea>
		</div>

		{#if status === 'error' && errorMessage}
			<div class="rounded-xl bg-red-50 p-4 text-sm text-red-700">
				{errorMessage}
			</div>
		{/if}

		<button
			type="submit"
			disabled={status === 'loading'}
			class="w-full rounded-xl bg-primary py-4 font-medium text-white transition-all duration-200 hover:bg-primary-dark disabled:cursor-not-allowed disabled:opacity-50"
		>
			{#if status === 'loading'}
				<span class="inline-flex items-center gap-2">
					<svg class="h-5 w-5 animate-spin" fill="none" viewBox="0 0 24 24">
						<circle
							class="opacity-25"
							cx="12"
							cy="12"
							r="10"
							stroke="currentColor"
							stroke-width="4"
						></circle>
						<path
							class="opacity-75"
							fill="currentColor"
							d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
						></path>
					</svg>
					Відправляємо...
				</span>
			{:else}
				Записатись
			{/if}
		</button>
	{/if}
</form>
