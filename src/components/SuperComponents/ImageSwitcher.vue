<template>
  <div class="switcher">
    <div @mouseover="state.isHover = true"
         @mouseleave="state.isHover = false" v-bind:class="{hover: state.isHover}"
         class="switcher__leftBlock" @click="leftImage"></div>
    <div class="switcher__image">
      <!--      <img src="{{state.listImage[state.currentImage]}}">-->
      <span>{{state.listImage[state.currentImage]}}</span>
    </div>
    <div @mouseover="state.isHover = true"
         @mouseleave="state.isHover = false" v-bind:class="{hover: state.isHover}"
         class="switcher__rightBlock" @click="rightImage" ></div>
  </div>
</template>

<script>
import { reactive } from 'vue'

export default {
  name: 'ImageSwitcher',
  props: {
    image: Array
  },
  setup (props) {
    const state = reactive({
      isHover: false,
      currentImage: 0,
      listImage: [1, 2, 3, 4, 5, 6, 7]
    })
    const leftImage = () => {
      if (state.currentImage !== 0) {
        state.currentImage -= 1
      } else {
        state.currentImage = state.listImage.length - 1
      }
    }
    const rightImage = () => {
      if (state.currentImage !== state.listImage.length - 1) {
        state.currentImage += 1
      } else {
        state.currentImage = 0
      }
    }
    return {
      state,
      leftImage,
      rightImage
    }
  }
}
</script>

<style scoped>
.switcher {
  z-index: 100;
  display: flex;
  flex-direction: row;
  width: 600px;
  height: 342px;
}

.switcher__image {
  width: 76%;
  height: 99.5%;
  border: 1px solid black;
}

.switcher__leftBlock {
  width: 12%;
  height: 100%;
  border-radius: 15px 0 0 15px;
  background: rgba(0, 0, 0, 0.1);
}

.switcher__leftBlock:hover {
  background: rgba(0, 0, 0, 0.2);
}

.switcher__leftBlock:active {
  background: rgba(0, 0, 0, 0.3);
}

.switcher__rightBlock {
  width: 12%;
  height: 100%;
  border-radius: 0 15px 15px 0;
  background: rgba(0, 0, 0, 0.1);
}

.switcher__rightBlock:hover {
  background: rgba(0, 0, 0, 0.2);
}

.switcher__rightBlock:active {
  background: rgba(0, 0, 0, 0.3);
}
@media (max-width: 700px) {
  .switcher{
    width: 400px;
    height: 272px;
  }
}
@media (max-width: 440px) {
  .switcher{
    width: 300px;
    height: 204px;
  }
}
</style>
