<template>
  <div>
    <ProductCardDeck />
  </div>
</template>

<script>
import ProductCardDeck from '@/components/product/ProductCardDeck'
import { mapActions } from 'vuex'

export default {
  name: 'Products',
  components: {
    ProductCardDeck
  },
  methods: {
    ...mapActions(['initProducts'])
  },
  created() {
    this.initProducts(require('../serverIP'))
  }
}
</script>
