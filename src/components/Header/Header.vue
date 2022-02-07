<template>
  <header class="wrapperHeader">
    <div class="contentHeader">
      <Nav position="header"/>
      <Search :products="products"/>
    </div>
  </header>
</template>

<script>

import Search from './Search'
import Nav from './Nav'

export default {
  name: 'Header',
  components: {
    Nav,
    Search
  },
  props: {
    products: {
      type: Array
    }
  }
}
</script>

<style scoped>
@font-face {
  font-family: "Merriweather";
  src: url("../../font/Merriweather-Regular.ttf") ;
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: "MerriweatherBold";
  src: url("../../font/Merriweather-Bold.ttf") ;
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: "MerriweatherLight";
  src: url("../../font/Merriweather-Light.ttf");
  font-weight: normal;
  font-style: normal;
}

.wrapperHeader {
  height: 96px;
  border-bottom: 1px solid #E1E1E1;
  flex-direction: row;
  min-width: 100%;
  box-sizing: border-box;
}

.contentHeader {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 18vw;
  height: 100%;
  max-width: calc(100% - 36.7%);
}

.searchBtn {
  padding-bottom: 8px;
  padding-right: 15%;
  font-family: Merriweather;
  display: none;
}

@media (max-width: 1604px) {
  .contentHeader {
    max-width: 1016px;
    padding: 0 calc((100vw - 1016px) / 2);
  }
}

@media (max-width: 1018px) {
  .contentHeader {
    margin: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .wrapperHeader {
    justify-content: center;
  }
}

@media (max-width: 946px) {
  .contentHeader {
    max-width: 700px;
    padding: 0 calc((100vw - 700px) / 2);
    align-items: stretch;
  }
}

@media (max-width: 700px) {
  .contentHeader {
    margin: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 100%;
  }
}

@media (max-width: 590px) {
  .searchBtn{
    display: block;
  }
}
</style>
