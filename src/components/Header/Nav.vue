<template>
  <nav class="navigation">
    <div class="menu">
      <h3 @click="state.isCollapsed = !state.isCollapsed" class="menu__title">Меню</h3>
      <div v-bind:class="{activeHeader:props.position === 'header' && state.isCollapsed,
                          activeFooter:props.position === 'footer' && state.isCollapsed}"
           class="menu__list">
        <a class="menu__item" href="#">Каталог</a>
        <a class="menu__item" href="#">Доставка</a>
        <a class="menu__item" href="#">Оплата</a>
        <a class="menu__item" href="#">Контакты</a>
        <a class="menu__item" href="#">О компании</a>
      </div>
    </div>
    <a class="navigation__item" href="#">Каталог</a>
    <a class="navigation__item" href="#">Доставка</a>
    <a class="navigation__item" href="#">Оплата</a>
    <a class="navigation__item" href="#">Контакты</a>
    <a class="navigation__item" href="#">О компании</a>
  </nav>
</template>

<script>
import { reactive } from 'vue'

export default {
  name: 'Nav',
  props: {
    position: String
  },
  setup (props) {
    const state = reactive({
      isCollapsed: false
    })
    return {
      state,
      props
    }
  }
}

</script>

<style scoped>

.menu {
  display: none;
}

.menu__title {
  margin: 0;
}

.menu__list {
  display: none;
  padding: 10px;
  transition: all ease 1s;
  background: rgba(255, 255, 255, 0.9);
  position: absolute;
  flex-direction: column;
  top: 40px;
  right: -30px;
  border-radius: 15px;
}

.activeHeader {
  display: flex;
}

.navigation {
  display: flex;
  flex-direction: row;
  padding: 37px 0 42px 55px;
  min-width: 632px;
}

.navigation__item {
  font-family: Merriweather;
  text-decoration: none;
  color: #343030;
  padding: 0 0 0 7.7%;
  font-size: 14px;
  line-height: 21px;
  font-weight: normal;
  white-space: nowrap;
}

.navigation__item:nth-child(1) {
  padding: 0 0 0 15.2%;
}

@media (max-width: 1604px ) {
  .navigation {
    padding: 37px 40px 42px 0;
  }
}

@media (max-width: 1018px) {
  .navigation__item {
    padding: 0 0 0 5%;
  }

  .navigation {
    min-width: 12%;
    padding-left: 13%;
  }

  .navigation__item:nth-child(1) {
    padding: 0 0 0 0;
  }

  .navigation__item {
    display: none;
  }

  .menu {
    font-family: Merriweather;
    display: block;
    margin: 0;
    position: relative;
  }

  .menu__item {
    padding-top: 5px;
    font-family: Merriweather;
    text-decoration: none;
    color: #343030;
    font-size: 14px;
    line-height: 21px;
    font-weight: normal;
    white-space: nowrap;
  }

  .activeFooter {
    display: flex;
    top: -160px;
  }

  .menu__list {

  }
}

</style>
