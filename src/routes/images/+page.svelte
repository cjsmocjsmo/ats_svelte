
<svelte:head>
	<title>Image Gallery</title>
	<meta name="description" content="About this app" />
</svelte:head>

<div class="text-column">
	<h1>Image Gallery</h1>

	<div class="landDiv">
		<a href="/landscape/land01">
			<img
				class="land"
				src="http://192.168.0.74:9191/landscape/20201202_121518_thumb.webp"
				alt="test1"
			/>
		</a>
		<a href="/landscape/land02">
			<img
				class="land"
				src="http://192.168.0.74:9191/landscape/20211023_111607_thumb.webp"
				alt="test1"
			/>
		</a>
		<a href="/landscape/land03">
			<img
				class="land"
				src="http://192.168.0.74:9191/landscape/20220727_110613_thumb.webp"
				alt="test1"
			/>
		</a>
		<a href="/landscape/land04">
			<img
				class="land"
				src="http://192.168.0.74:9191/landscape/20220731_112107_thumb.webp"
				alt="test1"
			/>
		</a>
		<a href="/landscape/land05">
			<img
				class="land"
				src="http://192.168.0.74:9191/landscape/20220731_112129_thumb.webp"
				alt="test1"
			/>
		</a>
		<a href="/landscape/land06">
			<img
				class="land"
				src="http://192.168.0.74:9191/landscape/20220731_112346_thumb.webp"
				alt="test1"
			/>
		</a>
		<a href="/landscape/land07">
			<img
				class="land"
				src="http://192.168.0.74:9191/landscape/20220731_112348_thumb.webp"
				alt="test1"
			/>
		</a>
	</div>

	<div class="portDiv">
		<a href="/portrait/port01">
			<img
				class="port"
				src="http://192.168.0.74:9191/portrait/20190612_092955_thumb.webp"
				alt="test1"
			/>
		</a>
		<a href="/portrait/port02">
			<img
				class="port"
				src="http://192.168.0.74:9191/portrait/20190612_093224_thumb.webp"
				alt="test1"
			/>
		</a>
		<a href="/portrait/port03">
			<img
				class="port"
				src="http://192.168.0.74:9191/portrait/20190722_101948_thumb.webp"
				alt="test1"
			/>
		</a>
		<a href="/portrait/port04">
			<img
				class="port"
				src="http://192.168.0.74:9191/portrait/20190722_102001_thumb.webp"
				alt="test1"
			/>
		</a>
		<a href="/portrait/port05">
			<img
				class="port"
				src="http://192.168.0.74:9191/portrait/20190722_102058_thumb.webp"
				alt="test1"
			/>
		</a>
		<a href="/portrait/port06">
			<img
				class="port"
				src="http://192.168.0.74:9191/portrait/20200630_100214_thumb.webp"
				alt="test1"
			/>
		</a>
		<a href="/portrait/port07">
			<img
				class="port"
				src="http://192.168.0.74:9191/portrait/20200630_100322_thumb.webp"
				alt="test1"
			/>
		</a>
		<a href="/portrait/port08">
			<img
				class="port"
				src="http://192.168.0.74:9191/portrait/20200630_100327_thumb.webp"
				alt="test1"
			/>
		</a>
		<a href="/portrait/port09">
			<img
				class="port"
				src="http://192.168.0.74:9191/portrait/20200630_100331_thumb.webp"
				alt="test1"
			/>
		</a>
		<a href="/portrait/port10">
			<img
				class="port"
				src="http://192.168.0.74:9191/portrait/20200819_145521_thumb.webp"
				alt="test1"
			/>
		</a>
	</div>
</div>

<style>
	.portDiv {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: space-evenly;
		align-items: center;
		margin-bottom: 2.5em;
	}
	.port {
		width: 280px;
		height: auto;
		border-radius: 8px;
		margin: 1em;
	}
	.landDiv {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: space-evenly;
		align-items: center;
	}
	.land {
		width: 280px;
		height: auto;
		border-radius: 8px;
		margin: 1em;
	}
</style>
