<script lang="ts">
	export let tag: 'h2' | 'h3' | 'h4' | 'h5' | 'h6' = 'h2';

	let className = 'font-bold';
	switch (tag) {
		case 'h2':
			className += ' text-2xl text-center inline-block px-2 pb-2 border-b-4 border-primary';
			break;
		case 'h3':
			className +=
				' text-xl inline-flex gap-x-1 items-center before:content-[""] before:bg-primary before:w-3 before:h-3 before:rounded-sm';
			break;
		case 'h4':
			className += ' text-lg before:content-["【"] after:content-["】"]';
			break;
		case 'h5':
			className += ' text-base';
			break;
		case 'h6':
			className += ' text-sm';
			break;
	}
</script>

<svelte:element this={tag} class={className}><slot>見出し{tag}レベル</slot></svelte:element>
