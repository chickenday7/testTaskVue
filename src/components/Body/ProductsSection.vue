<template>
  <section class="areaProducts" >
    <h1 class="areaProducts__title">Картины эпохи Возрождения</h1>
    <div class="areaProducts__setOfCards" >
      <CardProduct :title="product.title" :author="product.author"
                   :image="product.image" :price="product.price"
                   :discount="product.discount" :newPrice="product.newPrice"
                   :access="product.access" :id="product.id"
                   v-bind:key="product.id" v-for="product in products"  />
    </div>
  </section>
</template>

<script>
import CardProduct from './CardProduct'

export default {
  name: 'ProductsSection',
  components: { CardProduct },
  props: {
    products: {
      type: Array
    }
  }
}
</script>

<style scoped>
.areaProducts{
  min-width: 100%;
  min-height: calc(100vh - 313px)
}
.areaProducts__setOfCards {
  width: 100%;
  min-height: calc(100vh - 313px);
  display: flex;
  align-content: flex-start;
  flex-wrap: wrap;
}

.areaProducts__setOfCards > cardProduct:nth-last-child(1) {
  margin-right: 0;
}

.areaProducts__title {
  font-family: MerriweatherBold;
  margin: 47px 0 41px 0;
}
@media (max-width: 1604px ) {
  .setOfCards{
    max-width: 1024px;
  }
  .areaProducts{
    max-width: 1024px;
  }
}
@media (max-width: 1018px) {
  .areaProducts__setOfCards{
    box-sizing: border-box;
    flex-wrap: wrap;
    align-content: flex-start;
    justify-content: center;
    min-height: calc(100vh - 313px);
    max-width: 100%;
  }
  .areaProducts__title{
    margin: 47px 0 41px 13%;
  }

}
@media (max-width: 700px) {
  .areaProducts__setOfCards{
    justify-content: center;
  }
}
</style>
