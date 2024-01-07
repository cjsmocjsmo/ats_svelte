<form method="POST" action="?/comsubmit">
    <div class="comDiv">
        <input class="ip1" type="text" name="name" id="name" placeholder="Name" />
        <input class="ip1" type="text" name="email" id="email" placeholder="Email" />
        <input class="ip2" type="text-area" name="comment" id="comment" placeholder="Comment" />
    </div>
    <button type="submit" class="submit">submit</button>
</form>



<style>
    .ip2 {
        width: 300px;
        height: 225px;
        border-style: solid;
        border-width: 2px;
        border-color: rgb(3, 3, 121);
        border-radius: 8px;
        margin: 0.5em;
        background-color: blue;
        color: aqua;
        transition: border-color 0.3s;
    }
    
    .ip1 {
        width: 300px;
        height: 50px;
        border-style: solid;
        border-width: 2px;
        border-color: rgb(3, 3, 121);
        border-radius: 8px;
        margin: 0.5em;
        background-color: blue;
        color: aqua;
        transition: border-color 0.3s;
    
    }
	.comDiv {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}
    .submit {
        width: 310px;
        height: 50px;
        border-style: solid;
        border-width: 2px;
        border-color: rgb(3, 3, 121);
        border-radius: 8px;
        margin: 0.5em;
        background-color: blue;
        color: aqua;
        transition: border-color 0.3s;
    }
    .submit:hover {
        border-color: red;
    }
</style>