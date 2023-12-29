<script>
	import Five from '$lib/components/star_five.svelte';
	import Three from '$lib/components/star_three.svelte';
</script>

<svelte:head>
	<title>Comments</title>
	<meta name="description" content="About this app" />
</svelte:head>

<div class="text-column">
	<h1>Comments</h1>
	<div>
		<div class="comDivOuter">
			<div class="comDiv">
				<Five />
				<p>herman@monster.com</p>
				<p class="comment">This is random text</p>
			</div>
		</div>
		<div class="comDivOuter">
			<div class="comDiv">
				<Three />
				<p>casper@monster.com</p>
				<p class="comment">This is random text</p>
			</div>
		</div>
	</div>
</div>

<style>
	.comDivOuter {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		padding: 12px;
	}

	.comDiv {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 450px;
		padding: 12px;
		border: 2px solid blue;
		border-radius: 5px;
	}

	.comment {
		font-size: 1.5rem;
	}

	@media (max-width: 768px) {
		.comDiv {
			width: 450px;
		}
	}

	@media (max-width: 600px) {
		.comDiv {
			width: 350px;
		}
	}

	@media (max-width: 480px) {
		.comDiv {
			width: 280px;
		}
	}
</style>
