
<template>

    <div id="app">
        <img alt="Vue logo" src="./assets/logo.png">
<div>
        <button><router-link to="/SuppliersList">Liste fournisseurs</router-link></button>
        <button><router-link to="/SuppliersMap">Carte</router-link></button>
    <button><router-link to="/Supplier">Supplier Status</router-link></button>
</div>
        <router-view></router-view>
    </div>
</template>
<script>







    export default {
        name: 'app',
        components: {

        },
        // methods: {
        //     onSuppliersListClick() {
        //         alert("Vous avez cliqué sur la liste")
        //     },
        //     onMapClick() {
        //         alert("Vous avez cliqué sur la carte")
        //     }
        // }

    }

</script>
<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
