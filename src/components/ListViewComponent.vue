<template>
    <div class="list-group">
        <locatie-list-item-component :locatie="locatie" v-for="locatie in locaties" :key="locatie.naam"/>
    </div>
</template>

<script>
    import LocatieListItemComponent from "@/components/LocatieListItemComponent";
    import locaties from "./test_data.json"

    export default {
        name: "ListViewComponent",
        components: {LocatieListItemComponent},
        data: function(){
            return {
                locaties: locaties
            }
        }
    }
</script>

<style scoped>
    .list-group{
        margin-left: 10px;
        width: 100%;
    }
</style>