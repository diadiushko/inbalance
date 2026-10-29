<script lang="ts">
	export type ServiceIconName =
		| 'movement'
		| 'coordination'
		| 'relaxation'
		| 'joints'
		| 'spine'
		| 'tape'
		| 'tissue'
		| 'needle'
		| 'grid'
		| 'trx'
		| 'board'
		| 'massage'
		| 'cups'
		| 'consultation'
		| 'adult'
		| 'child'
		| 'procedure';

	let { name, size = 24 }: { name: ServiceIconName; size?: number } = $props();
</script>

<svg
	width={size}
	height={size}
	viewBox="0 0 24 24"
	fill="none"
	stroke="currentColor"
	stroke-width="1.7"
	stroke-linecap="round"
	stroke-linejoin="round"
	aria-hidden="true"
>
	{#if name === 'movement'}
		<circle cx="14.5" cy="4.5" r="2" /><path
			d="m13 8-3 4 3 2 2 6m-5-8-4 1-2 4m9-7 4 2 2 4m-9 2-2 5m7-5 3 5"
		/>
	{:else if name === 'coordination'}
		<circle cx="12" cy="5" r="2" /><path
			d="M12 7v6m0-3-5 3m5-3 5 3m-5 0-4 7m4-7 4 7M5 5h2m10 0h2"
		/>
	{:else if name === 'relaxation'}
		<path d="M4 13c2-2 4-2 6 0l2 2 2-2c2-2 4-2 6 0M5 17c2-1 4-1 6 1m8-1c-2-1-4-1-6 1" /><path
			d="M12 4c2 2 2 4 0 6-2-2-2-4 0-6Z"
		/>
	{:else if name === 'joints'}
		<path
			d="M5 5c1.5-1 3.2-.7 4.4.5L12 8l2.6-2.5C15.8 4.3 17.5 4 19 5M5 19c1.5 1 3.2.7 4.4-.5L12 16l2.6 2.5c1.2 1.2 2.9 1.5 4.4.5"
		/><circle cx="12" cy="12" r="2.5" />
	{:else if name === 'spine'}
		<path d="M12 3c-3 2-3 4 0 6s3 4 0 6-3 4 0 6" /><circle cx="12" cy="4" r="1" /><circle
			cx="12"
			cy="9"
			r="1"
		/><circle cx="12" cy="14" r="1" /><circle cx="12" cy="19" r="1" />
	{:else if name === 'tape'}
		<rect x="4" y="6" width="16" height="12" rx="3" /><path d="m8 6 8 12M12 6l8 9M4 9l6 9" />
	{:else if name === 'tissue'}
		<path d="m5 18 10-10m-2-3 6 6m-9 3 3 3m-8-1 2 2" /><circle cx="16" cy="7" r="3" />
	{:else if name === 'needle'}
		<path d="m7 17 10-10m-9 1 8 8m-4-12 6 6M6 18l-2 2m12-14 2-2" />
	{:else if name === 'grid'}
		<path d="M4 4h16v16H4zM12 4v16M4 12h16" /><circle cx="8" cy="8" r=".7" /><circle
			cx="16"
			cy="16"
			r=".7"
		/>
	{:else if name === 'trx'}
		<path d="M4 4h16M8 4v5l-3 4m11-9v5l3 4M5 13l-1 2 4 3 3-4m8-1 1 2-4 3-3-4m-4 4 3 2 3-2" />
	{:else if name === 'board'}
		<path d="m7 20 5-16 5 16M9 14h6M8 17h8M5 20h14" />
	{:else if name === 'massage'}
		<path
			d="M4 13c1.5-2 3-3 5-3 2 0 3 2 5 2s4-2 6-1l-1 3c-2 2-5 4-8 4H7l-3-2m4-9 2-3 2 2 2-3 2 3"
		/>
	{:else if name === 'cups'}
		<path
			d="M5 6h6v2c0 1-.5 2-1 3l-1 2v5H7v-5l-1-2c-.5-1-1-2-1-3V6Zm8 0h6v2c0 1-.5 2-1 3l-1 2v5h-2v-5l-1-2c-.5-1-1-2-1-3V6Z"
		/>
	{:else if name === 'consultation'}
		<path d="M4 5h16v11h-9l-5 4V5Z" /><path d="M8 9h8m-8 4h5" />
	{:else if name === 'adult'}
		<circle cx="12" cy="5" r="2.5" /><path
			d="M8 21v-4l1-5-3 2m10 7v-4l-1-5 3 2m-9-5h6l2 6H7l2-6Z"
		/>
	{:else if name === 'child'}
		<circle cx="12" cy="6" r="2" /><path
			d="m9 11-3 3m9-3 3 3m-6-3v5m0 0-3 5m3-5 3 5m-8-8 2 2h6l2-2"
		/>
	{:else if name === 'procedure'}
		<circle cx="12" cy="12" r="8" /><path d="M12 8v8m-4-4h8" />
	{/if}
</svg>
