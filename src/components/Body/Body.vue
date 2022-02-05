<template>
  <div class="wrapperBody">
    <div class="contentBody">
      <ProductsSection :products="products"/>
    </div>
  </div>
</template>

<script>
import ProductsSection from './ProductsSection'

export default {
  name: 'Body',
  components: { ProductsSection },
  props: {
    products: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
.wrapperBody {
  max-width: 100vw;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}

.contentBody {
  display: flex;
  flex-direction: column;
  min-width: calc(100% - 36.7%);
  margin: 0 auto;
  min-height: calc(100vh - 194px);
}
@media (max-width: 1604px ) {
  .contentBody{
    max-width: 1016px;
    margin: 0 calc((100vw - 1016px)/2);
  }
}
@media (max-width: 1018px) {
  .contentBody{
    max-width:100%;
  }
}
@media (max-width: 1018px) {
  .wrapperBody{
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    flex-grow: 1;
    height: auto;
  }
}
</style>
