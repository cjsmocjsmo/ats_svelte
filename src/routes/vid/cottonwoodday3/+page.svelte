<svelte:head>
	<title>Video Gallery</title>
	<meta name="description" content="About this app" />
</svelte:head>

<div>
    <h1>Video</h1>
	<video controls>
		<source src="https://youtu.be/fPIAdpPeRdg" type="video/mp4" />
		<track kind="captions" />
	</video>
</div>

<style>
	video {
		width: 80%;
		height: auto;
	}
</style>
