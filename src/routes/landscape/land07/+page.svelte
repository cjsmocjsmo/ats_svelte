<script>
</script>

<svelte:head>
	<title>Image Gallery</title>
	<meta name="description" content="About this app" />
</svelte:head>
<div>
	<div class="landImg">
		<img
			class="land"
			src="http://192.168.0.74:9191/landscape/20220731_112348.webp"
			alt="Image"
			aria-hidden="true"
		/>
	</div>
</div>

<style>
	.landImg {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin-top: 10em;
	}

	.land {
		border-radius: 8px;
		width: 1000px;
		height: auto;
	}

	@media (max-width: 800px) {
		.land {
			width: 600px;
		}
	}

	@media (max-width: 600px) {
		.land {
			width: 400px;
		}
	}

	@media (max-width: 400px) {
		.land {
			width: 300px;
		}
	}
</style>
