<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-dark">
            <div class="container">
                <a class="navbar-brand" href="#">Zorg Woning Zoeken</a>
                <div class="collapse navbar-collapse" id="navbarText">
                    <ul class="navbar-nav mr-auto">
                        <a class="nav-link"><router-link to="/">Home</router-link></a>
                        <a class="nav-link"><router-link to="/listing">Lijst</router-link></a>
                        <a class="nav-link"><router-link to="/login">Login</router-link></a>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
    export default {
        name: "HeaderComponent"
    }
</script>

<style scoped>
    a {
        text-decoration: none;
        color: #e3e3e3;
    }

    .navbar{
        background-color: #6c0d1a;
    }
    .navbar-nav{
        display: flex;
        flex-direction: row;
    }
</style>