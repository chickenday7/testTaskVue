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
    min-width: 50vw;
    min-height: 50vh;
    opacity: 1;
    z-index: 2;
  }
</style>
