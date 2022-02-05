<template>
  <nav class="navigation">
    <h3 class="navigation__menu" >Menu</h3>
    <a class="navigation__item" href="#">Каталог</a>
    <a class="navigation__item" href="#">Доставка</a>
    <a class="navigation__item" href="#">Оплата</a>
    <a class="navigation__item" href="#">Контакты</a>
    <a class="navigation__item" href="#">О компании</a>
  </nav>
</template>

<script>
export default {
  name: 'Nav'
}
</script>

<style scoped>
.navigation__menu{
  display: none;
}
.navigation{
  display: flex;
  flex-direction: row;
  padding: 37px 0 42px 55px;
  min-width: 632px;
}
.navigation__item{
  font-family: Merriweather;
  text-decoration: none;
  color:#343030 ;
  padding: 0 0 0 7.7%;
  font-size: 14px;
  line-height: 21px;
  font-weight: normal;
  white-space: nowrap;
}
.navigation__item:nth-child(1){
  padding: 0 0 0 15.2%;
}
@media (max-width: 1604px ) {
  .navigation{
    padding: 37px 40px 42px 0;
  }
}
@media (max-width: 1018px) {
  .navigation__item{
    padding: 0 0 0 5%;
  }
  .navigation{
    min-width: 12%;
    padding-left: 13%;
  }
  .navigation__item:nth-child(1){
    padding: 0 0 0 0 ;
  }
  .navigation__item{
    display: none;
  }
  .navigation__menu{
    display: block;
    margin: 0;
  }

}

</style>
