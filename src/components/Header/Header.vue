<template>
  <header class="wrapperHeader">
    <div class="contentHeader">
      <Nav/>
      <Search :products="products" />
    </div>
  </header>
</template>

<script>

import Nav from './Nav'
import Search from './Search'
export default {
  name: 'Header',
  components: { Nav, Search },
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
  min-width: 100%;
  height: 96px;
  border-bottom: 1px solid #E1E1E1;
  display: flex;
  flex-direction: row;
  align-items: center;
  align-content: center;
  box-sizing: border-box;
}

.contentHeader {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin:0 auto;
  height: 100%;
  min-width: calc(100% - 36.7%);
}
@media (max-width: 1604px ) {
  .contentHeader{
    max-width: 1016px;
    margin: 0 calc((100vw - 1016px)/2);
  }
}
</style>
