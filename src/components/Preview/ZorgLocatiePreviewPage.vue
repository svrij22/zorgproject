<template>
    <div>
        <div class="centerbox">
            <div class="image-box">
                <img src="../../assets/preview.jpg"/>
            </div>
            <zorg-locatie-preview-carousel v-show="false"/>
        </div>
        <div class="main-info">
            <div class="divider"></div>
            <div class="container">
                <div class="locatie">
                    <h2>{{testdata.locatie.straat}}</h2>
                    <span style="color:gray;">{{testdata.locatie.postcode}} {{testdata.locatie.stad}}</span>
                    <span style="margin-top: 8px; font-size: 18px">
                        <v-icon scale="1.4" name="home" class="mr-2"/>Seniorenappartement
                        <v-icon scale="1.4" name="user-friends" class="mr-2 ml-2"/>3 Personen
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import ZorgLocatiePreviewCarousel from "@/components/Preview/ZorgLocatiePreviewCarousel";
    import testdata from '../test_data.json';

    export default {
        name: "ZorgLocatiePreviewPage",
        components: {ZorgLocatiePreviewCarousel},
        data() {
            return {
                testdata: testdata[0]
            }
        }
    }
</script>

<style lang="scss" scoped>
    .centerbox{
        /*display: flex;*/
        flex-direction: row;
        justify-content: center;
        width: 100%;
        background-color: #ffe9ea;
        padding: 20px ;
    }

    .image-box{
        overflow: hidden;
        display: flex;
        flex-direction: column;
        align-items: center;

        & img{
            width: 100%;
            max-width: 1300px;
        }

        @media only screen and (min-width: 800px) {
            & img{
                min-width: calc(600px + 30vw);
                height: 580px;
                object-fit: cover;
            }
        }
    }

    .main-info{
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .divider{
        height: 2px;
        background-color: #ac3844;
        margin: 20px;
        max-width: 1200px;
        width: 100%;
    }

    .locatie{
        text-align: left;
        display: flex;
        flex-direction: column;
    }

</style>