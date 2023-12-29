<script>
    import Five from '$lib/components/star_five.svelte';
</script>

<div class="mainComment">
    <Five />
	<h3>herman@monster.com</h3>
    <p>This is the main comment the is for the bvest commnet curt 
        has so far. This is the main comment the is for the bvest commnet curt
        has so far. This is the main comment the is for the bvest commnet curt	
        has so far. This is the main comment the is for the bvest commnet curt
    </p>
    <a class="moreComs" href="/comout">see more comments</a>
</div>

<style>
	.moreComs {
		color: rgb(3, 3, 121);
		text-decoration: italic;
	}
	.mainComment {
		border-style: solid;
		border-width: 2px;
		border-color: rgb(3, 3, 121);
		border-radius: 8px;
		margin: 0.5em;
		padding: 1em;
		width: 70%;
		text-align: center;
	}
</style>