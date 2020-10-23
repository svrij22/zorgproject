<template>
    <div class="page">
        <header-component/>
        <router-view/>
    </div>
</template>

<script>
    import HeaderComponent from "@/components/HeaderComponent";

    export default {
        name: "BodyComponent",
        components: {HeaderComponent}
    }
</script>

<style scoped>
    .page{
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .container{
        display: flex;
        flex-direction: row;
    }
</style>