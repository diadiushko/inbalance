<script lang="ts">
	import { business } from '$lib/business';
	import socialImage from '$lib/assets/logo-on-light.png';
	import Header from '$lib/components/Header.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import Methods from '$lib/components/Methods.svelte';
	import Team from '$lib/components/Team.svelte';
	import Pricing from '$lib/components/Pricing.svelte';
	import Contacts from '$lib/components/Contacts.svelte';
	import Footer from '$lib/components/Footer.svelte';

	const title = 'Фізична терапія та масаж у Львові | IN Balance';
	const description =
		'IN Balance — фізична терапія та масаж у Львові для дорослих і дітей від 6 років. Консультація фізичного терапевта з пробним заняттям у подарунок.';
	const imageUrl = new URL(socialImage, business.website).href;
	const structuredData = {
		'@context': 'https://schema.org',
		'@type': 'LocalBusiness',
		'@id': `${business.website}#business`,
		name: 'IN Balance',
		url: business.website,
		image: imageUrl,
		telephone: business.phoneDisplay,
		email: business.email,
		address: {
			'@type': 'PostalAddress',
			...business.postalAddress
		},
		openingHoursSpecification: business.openingHours.map(({ dayOfWeek, opens, closes }) => ({
			'@type': 'OpeningHoursSpecification',
			dayOfWeek,
			opens,
			closes
		})),
		sameAs: Object.values(business.social)
	};
	const structuredDataScript =
		'<script type="application/ld+json">' +
		JSON.stringify(structuredData).replaceAll('<', '\\u003c') +
		'</' +
		'script>';
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<link rel="canonical" href={business.website} />
	<meta property="og:type" content="website" />
	<meta property="og:locale" content="uk_UA" />
	<meta property="og:site_name" content="IN Balance" />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:url" content={business.website} />
	<meta property="og:image" content={imageUrl} />
	<meta property="og:image:alt" content="Логотип центру фізичної терапії IN Balance" />
	<meta name="twitter:card" content="summary" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={imageUrl} />
	<!-- Structured data is assembled from site-owned constants and escaped JSON. -->
	<!-- eslint-disable-next-line svelte/no-at-html-tags -->
	{@html structuredDataScript}
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
