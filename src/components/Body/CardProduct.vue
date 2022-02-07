<template>
  <div class="cardProduct" v-bind:class="{disable: !access}" >
    <img v-on:click="showModal($event,id)" class="cardProduct__photo" :src="image">
    <div v-on:click="showModal($event,id)">
      <h2  class="cardProduct__title">«{{ title }}»</h2>
      <h2  class="cardProduct__title">{{ author }}</h2>
    </div>
    <div class="wrapperPurchase" v-if="access">
      <div v-if="discount" class="wrapperPurchase_discountOn">
        <h6 class="oldPrice">{{ correctPrice(price) + ' $' }}</h6>
        <h3 class="actualPrice__discountOn">{{ correctPrice(newPrice) + ' $' }} </h3>
      </div>
      <div v-else>
        <h3 class="actualPrice__discountOff">{{ correctPrice(price) + ' $' }}</h3>
      </div>
      <SuperButton v-on:onAddCard="addCard" v-on:onDeleteCard="deleteCard"
                   :isCard="isCard()" :isDisable="isDisable" :isLoading="isLoading"
                   :title="'Купить'"/>
    </div>
    <div class="wrapperPurchase" v-else>
      <h3  class="wrapperPurchase__state">Продана на аукционе</h3>
    </div>
  </div>
</template>

<script>
import SuperButton from '../SuperComponents/SuperButton'
import { inject } from 'vue'

export default {
  name: 'CardProduct',
  components: { SuperButton },
  data () {
    return {
      isLoading: false,
      isDisable: false
    }
  },
  props: {
    title: {
      type: String
    },
    author: {
      type: String
    },
    image: {
      type: String
    },
    discount: {
      type: Boolean
    },
    price: {
      type: Number
    },
    newPrice: {
      type: Number
    },
    access: {
      type: Boolean
    },
    id: {
      type: String,
      required: true
    }
  },
  methods: {
    test (bool) {
      return !bool
    },
    async addCard () {
      this.isLoading = true
      this.isDisable = true
      setTimeout(() => {
        const localStore = localStorage.getItem('productId') !== null ? JSON.parse(localStorage.getItem('productId')) : ''
        localStorage.setItem('productId', JSON.stringify([...localStore, this.id]))
        this.isLoading = false
        this.isDisable = false
      }, 2000)
    },
    async deleteCard () {
      this.isLoading = true
      this.isDisable = true
      setTimeout(() => {
        const newlocalStore = JSON.parse(localStorage.getItem('productId')).filter(elem => elem !== this.id)
        localStorage.setItem('productId', JSON.stringify(newlocalStore))
        this.isLoading = false
        this.isDisable = false
      }, 2000)
    },
    isCard () {
      const locatStore = localStorage.getItem('productId') !== null ? JSON.parse(localStorage.getItem('productId')) : []
      return locatStore.includes(this.id)
    }
  },
  setup () {
    const correctPrice = (price) => {
      return typeof price !== 'number' ? 'NaN' : price.toFixed(3).replace(/\d$/, '')
        .replace(/(\d)(?=(?:\d{3})+\.)/g, '$1 ')
        .split('').slice(0, -3).join('')
    }
    const showModal = inject('showModal')
    return {
      showModal,
      correctPrice
    }
  }
}
</script>

<style scoped>

.cardProduct {
  box-sizing: border-box;
  width: 23%;
  min-height: 328px;
  border: 1px solid #E1E1E1;
  margin-right: 2.633%;
}

.cardProduct:nth-last-child(1) {
  margin-right: 0;
}

.cardProduct__photo {
  width: 100%;
  height: 48%;
  cursor: pointer;
}

.cardProduct__title {
  font-family: Merriweather;
  color: #343030;
  font-size: 18px;
  line-height: 27px;
  font-weight: 400;
  margin: 0;
  padding: 15px 13% 0 8.65%;
  cursor: pointer;
  white-space: nowrap;
}

.cardProduct__title:nth-child(2) {
  padding: 0 13% 0 8.65%;
  margin: 0;
}

.wrapperPurchase {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 7.92% 8.2% 8.64% 8.64%;
}

.oldPrice {
  font-family: MerriweatherLight;
  font-size: 14px;
  line-height: 21px;
  color: #A0A0A0;
  margin: 0;
  font-weight: 300;
  text-decoration: line-through;
  padding-right: 15px;
}

.actualPrice__discountOn {
  font-family: MerriweatherBold;
  color: #343030;
  font-size: 16px;
  margin: 0;
  line-height: 24px;
  white-space: nowrap;
  padding-right: 20px;
}

.actualPrice__discountOff {
  font-family: MerriweatherBold;
  color: #343030;
  font-size: 16px;
  padding-top: 11px;
  line-height: 24px;
  margin: 0;
  white-space: nowrap;
  padding-right: 25px;
}

.wrapperPurchase__state {
  font-family: MerriweatherBold;
  color: #343030;
  font-size: 16px;
  line-height: 24px;
  margin-top: 12px;
}
.disable{
  opacity: 0.5;
}
@media (max-width: 1018px) {
  .cardProduct {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    box-sizing: border-box;
    width: 35%;
    height: 100%;
    border: 1px solid black;
    flex-basis: content-box;
    margin: 15px;
    min-height: 328px
  }

  .cardProduct:nth-child(-n+2) {
    margin-top: 0;
  }

  .cardProduct:nth-last-child(1) {
    margin: 15px;
  }

  .cardProduct__photo {
    border: 1px black solid;
    width: 100%;
    height: 30vh;
    cursor: pointer;
    margin-bottom: 7px;
  }
}

@media (max-width: 946px) {
  .cardProduct__photo {
    height: 19.5vh;
  }
}

@media (max-width: 700px) {
  .cardProduct {
    width: 80%;
    min-height: 420px;
  }

  .cardProduct__photo {
    height: 54vw;
  }
}
</style>
