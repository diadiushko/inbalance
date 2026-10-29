<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import Methods from '$lib/components/Methods.svelte';
	import Team from '$lib/components/Team.svelte';
	import Pricing from '$lib/components/Pricing.svelte';
	import Contacts from '$lib/components/Contacts.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<svelte:head>
	<title>Фізична терапія та масаж у Львові | IN Balance</title>
	<meta
		name="description"
		content="IN Balance — фізична терапія та масаж у Львові для дорослих і дітей від 6 років. Консультація фізичного терапевта з пробним заняттям у подарунок."
	/>
</svelte:head>

<Header />

<main>
	<Hero />
	<Methods />
	<Team />
	<Pricing />
	<Contacts />
</main>

<Footer />
