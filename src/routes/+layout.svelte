<script>
	import '../app.css';
	import { Head } from '$lib/components/elements';
	import { Header, Footer } from '$lib/components/parts';
</script>

<Head />

<Header />
<main id="main">
	<slot></slot>
</main>
<Footer />
