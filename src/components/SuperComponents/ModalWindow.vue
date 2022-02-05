<template>
  <div class="modalWindow" v-if="isVisible" >
    <div  class="modalWindow__content" v-on:click.stop="$emit('onHideModal')">
      {{products[0].title}}
    </div>
  </div>
</template>

<script>
export default {
  name: 'ModalWindow',
  props: {
    isVisible: {
      type: Boolean,
      default: false
    },
    products: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
  .modalWindow{
    top:0;
    bottom: 0;
    right: 0;
    left: 0;
    background: rgba(0,0,0, 0.5);
    position: fixed;
    display: flex;
    height: 100%;
    max-width: 100%;
  }
  .modalWindow__content{
    margin: auto;
    background: rgba(255,255,255, 1);
    border-radius: 12px;
    min-width: 60vw;
    min-height: 60vh;
    opacity: 1;
    z-index: 2;
  }
  @media (max-width: 1160px) {
    .modalWindow__content{
      min-width: 75vw;
      min-height: 75vh;
    }
  }
  @media (max-width: 700px) {
    .modalWindow__content{
      min-width: 80vw;
      min-height: 80vh;
    }
  }

</style>
