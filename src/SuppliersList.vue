<template>
    <div id="List">
    <h1>Liste des fournisseurs</h1>
    <Supplier
         class="test  border border-primary rounded-pill py-3 mb-4 mx-5 border-left-0 border-right-0"
                  :key="supplier.id"
                  v-for="supplier in suppliers"
                  :name="supplier.name"
                  :status="supplier.status"
                  :checkedAt="supplier.checkedAt"
        ></Supplier>
    </div>
</template>
<script>
import Supplier from "./Supplier";
import { format } from 'timeago.js';

export default {
    name: 'SuppliersList',

    components: {
        Supplier
    },
    data: function () {
        return {
            suppliers: [
                {
                    id: 1,
                    name: "Fournisseur 1 ?",
                    status: true,
                    checkedAt:  format(Date(1544666010224))
                },
                {
                    id: 2,
                    name: "Fournisseur 2",
                    status: true,
                    checkedAt:  format(Date(1544666010224))
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

</script>