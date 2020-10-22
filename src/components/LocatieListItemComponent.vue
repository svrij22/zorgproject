<template>
    <div>
        <div class="card">
            <img class="card-img-left" :src="getImgUrl(locatie.img)">
            <div class="card-body">
                <h5 class="card-title">{{locatie.naam}}</h5>
                <p class="text-justify"><v-icon name="map-marker-alt" class="mr-2"/>
                    {{locatie.locatie.straat}}, {{locatie.locatie.postcode}}, {{locatie.locatie.stad}}</p>
                <!--<a href="#" class="btn btn-primary btn-sm" >Meer informatie</a>-->
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['locatie'],
        name: "LocatieListItemComponent",
        methods: {
            getImgUrl(url) {
                return require('../assets/'+url)
            }
        }
    }
</script>

<style lang="scss" scoped>
    .card-item{
        display: flex;
        flex-direction: row;
        min-width: 0;
        word-wrap: break-word;
        background-color: #fff;
        background-clip: border-box;
        border: 1px solid rgba(0, 0, 0, 0.125);
        border-radius: 0.25rem;
    }

    .card{
        width: 100%;
        flex-direction: row;
        text-align: left;
        margin-bottom: 10px;
        height: 170px;

        & .card-text{
            max-height: 60px;
            overflow: hidden;

            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
        }

        & .card-body{
            padding: 0.8rem;
            overflow: hidden;
        }

        & .card-img-left{
            width: 230px;
            object-fit:cover;
        }
    }
</style>