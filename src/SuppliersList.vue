<template>
    <div id="List">
    <h1>Liste des fournisseurs</h1>
    <Supplier v-for="(value,key) in suppliers">{{value}}:{{key}}</Supplier>

    </div>
</template>
<script>

export default {
    name: 'SuppliersList',

    components: {
        Supplier:{

    data: function () {
        return {
            suppliers: [
                {
                    id: 1,
                    name: "Fournisseur 1 ?",
                    status: true,
                    checkedAt: new Date()
                },
                {
                    id: 2,
                    name: "Fournisseur 2",
                    status: false,
                    checkedAt: new Date()
                }
            ],

            // name: 'mon fournisseur',
            // status:
            //     true, //est ce qu'il y a du stock
            // hour:
            //     new Date() //date de la dernière mise à jour du stock
        }
    }
    }
}
}
</script>