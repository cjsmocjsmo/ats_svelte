<script>
    import MainImg from '$lib/images/main_img.webp';

</script>

<div class="portDiv">
    
    <img class='land' src={MainImg} alt="test3" />
</div>

<style>
    .portDiv {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-evenly;
        align-items: center;
        
    }

    .land {
        width: 800px;
        height: auto;
        border-radius: 8px;
        
    }

    @media screen and (max-width: 8500px) {
        .land {
            width: 650px;
            height: auto;
            border-radius: 8px;
            
        }
    }

    @media screen and (max-width: 650px) {
        .land {
            width: 475px;
            height: auto;
            border-radius: 8px;
            
        }
    } 

    @media screen and (max-width: 500px) {
        .land {
            width: 350px;
            height: auto;
            border-radius: 8px;
            
        }
    }
</style>
