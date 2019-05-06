<template>
    <div id="Map">
        <h1>Carte des fournisseurs</h1>
<!--        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d4626451.614330591!2d137.2703762860102!3d35.92679367435036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sfr!2sfr!4v1556623613697!5m2!1sfr!2sfr" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>-->
        <gmap-map


                :center="{lat:15, lng:75}"
                :zoom="2"
                style="width: 100%; height: 800px"

        >
            <gmap-marker
                :key="supplier.id"
                v-for="supplier in suppliers"
                :position="supplier.position"
                :clickable="true"
                :draggable="true"
                @click="center=supplier.position"></gmap-marker>
        </gmap-map>
    </div>
</template>
<script>
export default {
name: 'SuppliersMap',
    components: {

    },
    data: function () {
        return {
            suppliers:
                [
            {
                id: 1,
                position:{lat:10,lng:10}
            },

            {
                id: 2,
                position:{lat:11,lng:9.6}
            }

            ],

    }
}


}
</script>