<script lang="ts">
	export let href: string;
	export let targetLink: '' | '_self' | '_blank' | '_parent' | '_top' = '';
	export let rel: string = '';
	export let text: string;

	// targetLink="_blank"のときrel="noopener noreferrer"をデフォルトで設定
	$: rel += targetLink === '_blank' ? ' noopener noreferrer' : '';
</script>

<a {href} target={targetLink} {rel} class="group inline-flex items-center align-middle"
	><span
		class="text-bold relative inline-flex items-center rounded bg-primary py-2 pl-4 pr-6 align-middle text-lg text-white shadow-[0_4px_0_0_#008990] transition duration-300 ease-in-out group-hover:translate-y-1 group-hover:shadow-[0_0_0_0_#008990]"
		>{text}<span
			class="absolute bottom-0 right-3 top-0 m-auto block h-2 w-2 rotate-45 border-r-2 border-t-2 border-white"
		></span></span
	></a
>
