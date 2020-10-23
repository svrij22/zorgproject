<template>
    <div class="homepage">
        <div class="carousel"></div>
        <div class="container">
            <h2>Zoekt u een zorg locatie? Wij hebben ze allemaal</h2>
        </div>
    </div>
</template>

<script>
    export default {
        name: "HomePageComponent"
    }
</script>

<style scoped>

    .homepage{
        display: flex;
        flex-direction: column;
        position: relative;
        align-items: center;
    }
    .carousel{
        background-image: url("../assets/testback.jpg");
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        height: 600px;
        filter: blur(8px);
        z-index: -10;
        width: 100%;
    }

    .container{
        z-index: 10;
        position: absolute;
        top: 10px;
        text-align: left;
    }
</style>