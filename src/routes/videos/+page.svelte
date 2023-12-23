<svelte:head>
	<title>Video Gallery</title>
	<meta name="description" content="About this app" />
</svelte:head>

<div class="text-column">
	<h1>Video Gallery</h1>

	<div class="portDiv">
		<div class="imgDiv">
			<img class="port" src="http://192.168.0.74:9191/portrait/test1.jpg" alt="test1" />
			<p>Video One</p>
		</div>
		<div class="imgDiv">
			<img class="port" src="http://192.168.0.74:9191/portrait/test2.jpg" alt="test2" />
			<p>Video Two</p>
		</div>
		
		
	</div>
	<div class="landDiv">
		<img class='land' src="http://192.168.0.74:9191/landscape/test3.jpg" alt="test3" />
	</div>
</div>

<style>
	.imgDiv{
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.portDiv {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: space-evenly;
		align-items: center;
		margin-bottom: 2.5em;
	}
	.port {
		width: 300px;
		height: auto;
		border-radius: 8px;
		margin: 1em;
	}
	.landDiv {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
	}
	.land {
		width: 400px;
		height: auto;
		border-radius: 8px;
	}
</style>
