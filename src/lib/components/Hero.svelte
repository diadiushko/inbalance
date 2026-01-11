<script lang="ts">
	import logo from '$lib/assets/logo.png';
</script>

<section
	id="hero"
	class="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-gray to-dark pt-20"
>
	<div
		class="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--color-primary)_0%,_transparent_70%)] opacity-10"
	></div>

	<div class="relative z-10 mx-auto max-w-7xl px-4 py-20 text-center lg:px-8">
		<div class="mb-8 flex justify-center">
			<img
				src={logo}
				alt="IN Balance Rehabilitation Center"
				class="h-32 w-auto drop-shadow-2xl md:h-40 lg:h-48"
			/>
		</div>

		<h1
			class="font-heading mb-6 text-6xl font-medium tracking-wide text-white md:text-7xl lg:text-8xl"
		>
			Відновлення <span class="text-primary-light">балансу</span> вашого тіла
		</h1>

		<p class="mx-auto mb-10 max-w-2xl text-lg text-gray-light md:text-xl">
			Професійна реабілітація, масаж та відновлювальні процедури. Допоможемо повернути легкість
			рухів та якість життя.
		</p>

		<div class="flex flex-col items-center justify-center gap-4 sm:flex-row">
			<a
				href="#contacts"
				class="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-lg font-medium text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-primary-dark hover:shadow-xl"
			>
				<svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
					/>
				</svg>
				Записатись на консультацію
			</a>

			<a
				href="#methods"
				class="inline-flex items-center gap-2 rounded-full border-2 border-white/30 px-8 py-4 text-lg font-medium text-white transition-all duration-300 hover:border-white/50 hover:bg-white/10"
			>
				Дізнатись більше
				<svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M19 14l-7 7m0 0l-7-7m7 7V3"
					/>
				</svg>
			</a>
		</div>
	</div>

	<div class="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
		<svg class="h-8 w-8 text-white/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M19 14l-7 7m0 0l-7-7m7 7V3"
			/>
		</svg>
	</div>
</section>
