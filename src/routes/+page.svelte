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
	<title>IN Balance | Реабілітаційний центр</title>
	<meta
		name="description"
		content="Професійна реабілітація, масаж та відновлювальні процедури. Допоможемо повернути легкість рухів та якість життя."
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
