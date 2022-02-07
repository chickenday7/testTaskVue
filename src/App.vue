<template>
  <div id="app">
    <ModalWindow :product="state.currentProduct[0]" v-on:click="hideModal"
                 :isVisible="state.isVisible"/>
    <Header/>
    <Body v-if="state.newArrayProducts.length !== 0" :products="state.newArrayProducts"/>
    <div class="productNotFound" v-else-if="state.newArrayProducts.length === 0">
      <h3>Картина не найдена</h3>
      <v-img></v-img>
    </div>
    <Footer/>
  </div>
</template>

<script>

import Header from './components/Header/Header'
import Body from './components/Body/Body'
import Footer from './components/Footer/Footer'
import ModalWindow from './components/SuperComponents/ModalWindow'
import { onMounted, provide, reactive } from 'vue'

export default {
  name: 'App',
  components: {
    ModalWindow,
    Body,
    Footer,
    Header
  },
  setup () {
    const state = reactive({
      isVisible: false,
      _products: [
        {
          id: '1',
          title: 'Рождение Венеры',
          author: 'Сандро Боттичелли',
          discount: true,
          access: true,
          image: 'https://i.ibb.co/JBvK6Lh/image1.png',
          price: 2e6,
          newPrice: 1e6
        },
        {
          id: '2',
          title: 'Тайная вечеря',
          author: 'Леонардо да Винчи',
          discount: false,
          access: true,
          image: 'https://i.ibb.co/zx7zyk8/image2.png',
          price: 3e6,
          newPrice: 0
        },
        {
          id: '3',
          title: 'Сотворение Адама',
          author: 'Микеланджело',
          discount: true,
          access: true,
          image: 'https://i.ibb.co/vh42Vw8/image3.png',
          price: 6e6,
          newPrice: 5e6
        },
        {
          id: '4',
          title: 'Урок анатомии',
          author: 'Рембрандт',
          discount: true,
          access: false,
          image: 'https://i.ibb.co/B2W4Zgd/image4.png',
          price: 3e6,
          newPrice: 0
        }
      ],
      currentProduct: [],
      searchText: '',
      newArrayProducts: []
    })
    const filteredProducts = (e, text) => {
      if (text) {
        state.newArrayProducts = state._products.filter(product => {
          return product.title.toLowerCase().startsWith(text.toLowerCase())
        })
      } else {
        state.newArrayProducts = [...state._products]
      }
    }
    const showModal = (e, id) => {
      state.currentProduct = [...state._products].filter(prod => prod.id === id)
      state.isVisible = true
    }
    const hideModal = () => {
      state.currentProduct = []
      state.isVisible = false
    }
    onMounted(() => {
      state.newArrayProducts = [...state._products]
    })
    provide('filteredProducts', filteredProducts)
    provide('showModal', showModal)
    return {
      filteredProducts,
      showModal,
      hideModal,
      state
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

html {
  height: 100%
}

body {
  height: 100%;
  margin: 0;
  background: #F6F3F3;
}

::-webkit-input-placeholder {
  color: #9F9F9F;
}

::-moz-placeholder { /* Firefox 19+ */
  color: #9F9F9F;
}

:-ms-input-placeholder {
  color: #9F9F9F;
}

:-moz-placeholder { /* Firefox 18- */
  color: #9F9F9F;
}
.productNotFound{
  min-height: 76vh;
  margin: auto;
}
@media (max-width: 1018px) {
  #app{
    min-height: 100%;
  }
}
</style>
