<template>
  <footer class="wrapperFooter">
    <div id="contentFooter">
      <Nav/>
    </div>
  </footer>
</template>

<script>
import Nav from '../Header/Nav'
export default {
  name: 'Footer',
  components: { Nav }
}
</script>

<style scoped>
.wrapperFooter{
  min-width: 100%;
  background: #ECEAEA;
  box-sizing: border-box;
  flex-grow: 0;
  height: 96px;
}
#contentFooter {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 18.35vw;
  height: 100%;
  max-width: calc(100% - 36.7%);
}
#contentFooter > nav{
  color: #555555 ;
}
@media (max-width: 1604px ) {
 #contentFooter{
   max-width: 1016px;
 }
}
@media (max-width: 1018px) {
  #contentFooter{
    margin-bottom: 15vh;
  }
}
</style>
