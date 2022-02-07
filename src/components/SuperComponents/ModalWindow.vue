<template>
  <div class="wrapperModal" v-if="isVisible">
    <div class="modalWindow" v-on:click.stop="$emit('onHideModal')">
      <div class="modalWindow__title">
        <h2>
          {{ product.title }}
        </h2>
      </div>
      <ImageSwitcher/>
      <div class="modalWindow__description">
        <span>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
        </span>
      </div>
      <div class="modalWindow__price">
        <div v-if="product.access">
        <h3 v-if="!product.discount">{{correctPrice(product.price)}} $</h3>
        <h3 v-else-if="product.discount">{{correctPrice(product.newPrice)}} $</h3>
        </div>
        <h3 v-else> Продана на аукционе </h3>
      </div>
    </div>
  </div>
</template>

<script>

import ImageSwitcher from './ImageSwitcher'
export default {
  name: 'ModalWindow',
  components: { ImageSwitcher },
  props: {
    isVisible: {
      type: Boolean,
      default: false
    },
    product: {
      type: Array,
      required: true
    }
  },
  setup (props) {
    const correctPrice = (price) => {
      return typeof price !== 'number' ? 'NaN' : price.toFixed(3).replace(/\d$/, '')
        .replace(/(\d)(?=(?:\d{3})+\.)/g, '$1 ')
        .split('').slice(0, -3).join('')
    }
    return {
      correctPrice
    }
  }
}
</script>

<style scoped>
.wrapperModal {
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  display: flex;
  height: 100%;
  max-width: 100%;
}

.modalWindow {
  margin: auto;
  background: rgba(255, 255, 255, 1);
  border-radius: 12px;
  min-width: 60vw;
  min-height: 60vh;
  opacity: 1;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.modalWindow__title h2 {
  font-family: MerriweatherBold;
  padding: 10px;
  margin: 0;
}

.imageSwitch {
  border: 1px solid black;
  width: 500px;
  height: 340px;
}

.modalWindow__description {
  padding-top: 20px;
  font-family: Merriweather;
  height: auto;
  width: 50vw;
}

.modalWindow__price {
}

@media (max-width: 1160px) {
  .wrapperModal {
    min-width: 75vw;
    min-height: 75vh;
  }
}
@media (max-width: 1220px) {
  .modalWindow__description{
    width: 600px;
    padding: 10px;
  }
}
@media (max-width: 700px) {
  .wrapperModal {
    min-width: 80vw;
    min-height: 80vh;
  }
  .modalWindow__description{
    width: 83vw;
  }
}

</style>
