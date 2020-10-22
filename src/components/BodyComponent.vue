<template>
    <div class="page">
        <div class="container">
            <filter-bar-component></filter-bar-component>
            <list-view-component/>
        </div>
    </div>
</template>

<script>
    import FilterBarComponent from "@/components/FilterBarComponent";
    import ListViewComponent from "@/components/ListViewComponent";
    export default {
        name: "BodyComponent",
        components: {ListViewComponent, FilterBarComponent}
    }
</script>

<style scoped>
    .page{
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-top: 100px;
    }

    .container{
        display: flex;
        flex-direction: row;
    }
</style>