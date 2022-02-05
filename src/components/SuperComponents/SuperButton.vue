<template>
  <div class="button" v-if="!isLoading" v-bind:class="{cardBtn: isCard, searchBtn: title === 'Найти' }">
    <button v-on:click="$emit('onDeleteCard')" v-if="isCard">В корзине</button>
    <button v-on:click="$emit('onAddCard')" v-else>{{ title }}</button>
  </div>
  <div v-else class="button">
    Loading
  </div>
</template>

<script>
export default {
  name: 'SuperButton',
  props: {
    title: {
      type: String,
      required: true
    },
    isDisable: {
      type: Boolean,
      required: true
    },
    isCard: {
      type: Boolean,
      required: true
    },
    isLoading: {
      type: Boolean,
      required: true
    }
  }
}
</script>

<style scoped>
.button {
  background: #403432;
  height: 48px;
  width: 118px;
}
.searchBtn{
  min-width: 122px;
}
.cardBtn {
  width: 122px;
  background: #5B3A32;
}

.button:hover {
  background: #776763;
}

.button > button {
  color: #FFFFFF;
  font-size: 14px;
  line-height: 21px;
  font-family: MerriweatherBold;
  width: 100%;
  height: 100%;
  padding: 0;
  border: none;
  background: rgba(0, 0, 0, 0);
  cursor: pointer;
  white-space: nowrap;
}

.button > button::before {

}

@media (max-width: 590px) {
  .searchBtn{
    display: none;
  }
}
</style>
