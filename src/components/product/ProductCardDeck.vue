<template>
<div class="row row-cols-1 row-cols-md-3">
    <ProductCard v-for="(product, index) in products" :key="index" :product="product" />
</div>  
</template>

<script>
import ProductCard from './ProductCard' 
import { mapGetters } from 'vuex'

export default {
    name: 'ProductCardDeck',
    components: {
        ProductCard
    },
    computed: {
        ...mapGetters(['products'])
    }
}
</script>

<style>

</style>