<template>
  <footer class="wrapperFooter">
    <div class="contentFooter">
      <Nav position="footer"/>
      <div class="contacts">
        <div class="contacts__phone">
          +7 (812) 555-55-55
        </div>
        <div class="contacts__address">
          г. Санкт-Петербург, ул. Ефимова, 3
        </div>
      </div>
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
.wrapperFooter {
  flex-direction: row;
  min-width: 100%;
  background: #ECEAEA;
  box-sizing: border-box;
  flex-grow: 0;
  height: 96px;
}

.contentFooter {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 4px 17.35vw 0 18vw;
  height: 100%;
  max-width: calc(100% - 36.7%);
}

.contacts {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  white-space: nowrap;
  color: #555555;
  font-family: Merriweather;
  font-size: 14px;
  line-height: 21px;
  width: 34.5%;
  padding-bottom: 10px;
}

.contacts__phone {
  width: 50%;
  position: relative;
}
.contacts__phone::before{
  top: 4px;
  left: -22px;
  position: absolute;
  content: url("https://svgshare.com/i/e23.svg");
}

.contacts__address {
  position: relative;
  padding-top: 2px;
  padding-left: 18%;
}
.contacts__address::before{
  top: 5px;
  left: 56px;
  position: absolute;
  content: url("https://svgshare.com/i/e3m.svg");
}

#contentFooter > nav {
  color: #555555;
}

@media (max-width: 1604px ) {
  .contentFooter {
    max-width: 1016px;
    padding: 0 calc((100vw - 1016px) / 2);
  }

  .contacts {
    font-size: 13px;
    white-space: normal;
  }

  .contacts__phone {
    white-space: nowrap;
  }
}

@media (max-width: 1018px) {
  .contentFooter {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
  }

  .contacts {
    min-width: 10%;
    white-space: nowrap;
    flex-direction: column;
    padding-right: 13%;
  }

  .contacts__address {
    padding: 5px 0 0 0;
  }
}

@media (max-width: 946px) {
  .contentFooter {
    max-width: 700px;
    padding: 0 calc((100vw - 700px) / 2);
    align-items: stretch;
  }

  .contacts {
    justify-content: center;
  }
}

@media (max-width: 700px) {
  .contentFooter {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    max-width: 100%;
  }
}
@media (max-width: 590px) {
  .contacts{
    font-size: 12px;
  }
}
@media (max-width: 359px) {
  .contacts{
    font-size: 10px;
  }
  .contacts__address{
    white-space: normal;
  }
}
</style>
