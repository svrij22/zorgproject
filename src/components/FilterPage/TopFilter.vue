<template>
    <div class="topfilter">
        <label>In de buurt van:</label>
        <input class="form-control" placeholder="Provincie, Stad, Adres, Postcode">
    </div>
</template>

<script>
    export default {
        name: "TopFilter"
    }
</script>

<style scoped>
    .topfilter{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin: 10px 0;
    }
</style>