<script>
</script>

<svelte:head>
	<title>Image Gallery</title>
	<meta name="description" content="About this app" />
</svelte:head>
<div>
	<div class="portImg">
		<img
			class="port"
			src="https://atsdo.xyz/images/portrait/20200630_100322.webp"
			alt="Image"
			aria-hidden="true"
		/>
	</div>
</div>

<style>
	.portImg {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin-top: 5.5em;
	}

	.port {
		border-radius: 8px;
		width: 1000px;
		height: auto;
	}

	@media (max-width: 1000px) {
		.port {
			width: 600px;
		}
	}

	@media (max-width: 800px) {
		.port {
			width: 500px;
		}
	}

	@media (max-width: 600px) {
		.port {
			width: 400px;
		}
	}

	@media (max-width: 400px) {
		.port {
			width: 300px;
		}
	}
</style>
