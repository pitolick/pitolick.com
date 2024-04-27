<script lang="ts">
	// @ts-nocheck
	import { PUBLIC_GTM_ID } from '$env/static/public';
</script>

{#if PUBLIC_GTM_ID}
	<!-- Google Tag Manager (noscript) -->
	<noscript
		><iframe
			src={`https://www.googletagmanager.com/ns.html?id=` + PUBLIC_GTM_ID}
			height="0"
			width="0"
			style="display: none; visibility: hidden"
			title="Google Tag Manager (noscript)"
		></iframe></noscript
	>
	<!-- End Google Tag Manager (noscript) -->
{/if}
