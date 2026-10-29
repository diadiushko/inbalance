export const business = {
	phoneDisplay: '+380 96 938 76 88',
	phoneHref: 'tel:+380969387688',
	email: 'in.balance.lviv@gmail.com',
	address: 'м. Львів, вул. Коцюбинського, 27',
	openingHours: [
		{ days: 'Пн–Пт', hours: '9:00–20:00' },
		{ days: 'Сб', hours: '10:00–18:00' }
	],
	mapsUrl:
		'https://www.google.com/maps/search/?api=1&query=' +
		encodeURIComponent('м. Львів, вул. Коцюбинського, 27'),
	social: {
		instagram: 'https://www.instagram.com/in_balance_rehab/',
		facebook: 'https://www.facebook.com/share/19PnHEHZ83/',
		tiktok: 'https://www.tiktok.com/@in.balance.lviv'
	}
} as const;
