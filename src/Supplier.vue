<template>

    <div id="Supplier">
        <h1>{{name}}</h1>
        <h3 :class="{'text-success' : status , 'text-danger' : !status}">A du stock ?{{status ?'OK':'KO'}}</h3>
        <h5>Date du dernier relevé des stocks:{{checkedAt}} </h5>
    </div>

</template>
<script>
export default{
    props: {
        id:
        Number,
        name: String,
        status:
        Boolean, //est ce qu'il y a du stock
        checkedAt:
        String //date de la dernière mise à jour du stock


    }
}
</script>