<template>
  <div class="search">
    <div class="search__input">
      <input @input="filteredProducts($event, data.textInput), filterProducts "
             type="text" autocomplete="off" v-model="data.textInput"
             placeholder="Поиск по названию картины">
    </div>
    <SuperButton :title="'Найти'" :is-disable="false" :inCart="false" class=""/>
  </div>
</template>

<script>
import SuperButton from '../SuperComponents/SuperButton'
import { inject, reactive } from 'vue'

export default {
  name: 'Search',
  components: { SuperButton },
  props: {
    products: {
      type: Array
    }
  },
  setup (props) {
    const data = reactive({
      textInput: '',
      filtProducts: [],
      visibility: true
    })
    const filterProducts = () => {
      console.log('dasdas')
      data.filtProducts = props.products.filter(product => {
        return product.title.toLowerCase().startsWith(data.textInput.toLowerCase())
      })
    }
    const filteredProducts = inject('filteredProducts')
    return {
      filteredProducts,
      filterProducts,
      data
    }
  }
}

</script>

<style scoped>
.search {
  display: flex;
  flex-direction: row;
  margin: 24px 0 0 0;
  min-width: 34.229%;
  height: 48px;
}

.search__input {
  min-width: 70%;
  border: #E1E1E1 solid 1px;
}

.search__input > input {
  font-family: Merriweather;
  line-height: 21px;
  color: #343030;
  width: 100%;
  height: 20px;
  padding: 12px 0 0 15px;
  border: none;
  outline: none;
  background: #F6F3F3;
  font-size: 14px;
}

@media (max-width: 1018px) {
  .search {
    margin-top: 0;
    padding-right: 15%;
  }

  .search__input > input {
    padding: 12px 5px 0 10px;
  }
}

@media (max-width: 990px) {
  .search__input{
    max-width: 180px;
  }
}
@media (max-width: 946px) {
  .search{
    padding-top: 20px;
  }
}
@media (max-width: 700px) {
  .search{
    padding-top: 0;
  }
}
@media (max-width: 590px) {
  .search{
    display: none;
  }
}
</style>
