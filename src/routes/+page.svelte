<script>
	import MainImg from '$lib/components/main_img.svelte';
	import TelNum from '$lib/components/tel_num.svelte';
	import EstForm from '$lib/components/est_input.svelte';
	import MainCom from '$lib/components/main_comment.svelte';
	import ComForm from '$lib/components/com_input.svelte';

	let visible = false;
	function toggle() {
		if (visible == false) {
			visible = true;
		} else {
			visible = false;
		}
	}

	let visible2 = false;
	function toggle2() {
		if (visible2 == false) {
			visible2 = true;
		} else {
			visible2 = false;
		}
	}
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="AlphaTree Service app" />
</svelte:head>

<section>
	<h1>Alpha Tree Service</h1>
	<MainImg />
	<TelNum />

	<button class="estBtn" on:click={toggle}>&rarr; Estimates are free schedual yours today</button>
	{#if visible}
		<EstForm />
	{/if}

	<MainCom />
	<button class="estBtn" on:click={toggle2}>&rarr; We would ❤️ for you to leave us a comment</button>
	{#if visible2}
		<ComForm />
	{/if}


	<!-- <div class="commentsDiv">
		<button class="catBtn">&rarr; Upload Image</button>
		<button class="catBtn">&rarr; Upload Video</button>
	</div> -->
</section>

<style>
	.estBtn {
		width: 75%;
		height: 100px;
		border-style: solid;
		border-width: 2px;
		border-color: rgb(3, 3, 121);
		border-radius: 8px;
		margin: 0.5em;
		background-color: blue;
		color: aqua;
		transition: border-color 0.3s;
	}

	.estBtn:hover {
		border-color: red;
	}

	/* .catBtn {
		width: 65%;
		height: 100px;
		border-style: solid;
		border-width: 2px;
		border-color: rgb(3, 3, 121);
		border-radius: 8px;
		margin: 0.5em;
		background-color: blue;
		color: aqua;
		transition: border-color 0.3s;
	}

	.catBtn:hover {
		border-color: red;
	} */

	/* .apptBtn {
		width: 55%;
		height: 100px;
		border-radius: 8px;
		margin: .5em;
	} */

	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

	h1 {
		width: 100%;
	}
</style>
