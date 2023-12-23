

<form action="">
    <div class="comDiv">
        <input type="text" name="name" id="name" placeholder="Name" />
        <input type="text" name="address" id="address" placeholder="Address" />
        <input type="text" name="phone" id="phone" placeholder="Phone" />
        <input type="text" name="email" id="email" placeholder="Email" />
    </div>
</form>

<button>submit</button>

<style>
    input {
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
</style>