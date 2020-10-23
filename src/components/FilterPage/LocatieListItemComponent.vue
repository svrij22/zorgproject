<template>
    <div class="card shadow-sm" @click="openLocatie">
        <img class="card-img-left" :src="getImgUrl(locatie.img)">
        <div class="card-body">
            <h5 class="card-title">{{locatie.naam}}</h5>
            <span class="text-justify"><v-icon name="map-marker-alt" class="mr-2"/>
                {{locatie.locatie.straat}}, {{locatie.locatie.postcode}}, {{locatie.locatie.stad}}
            </span>
            <span class="">
                <v-icon name="home" class="mr-2"/>
                Seniorenappartement
            </span>
            <span class="">
                <v-icon name="user-friends" class="mr-2"/>
                3 Personen
            </span>
            <span class="">
                <v-icon name="wheelchair" class="mr-2"/>
                Toegankelijk voor rolstoelen
            </span>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['locatie'],
        name: "LocatieListItemComponent",
        methods: {
            getImgUrl(url) {
                return require('../../assets/'+url)
            },
            openLocatie(){
                this.$router.push('/locatie')
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
        margin-bottom: 20px;
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
            display: flex;
            flex-direction: column;
        }

        & .card-img-left{
            width: 230px;
            object-fit:cover;
        }

        & :hover{
            transition: background-color 0.2s ease;
            background-color: #f1f1f1;
            cursor: pointer;
        }
    }
</style>