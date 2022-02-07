<template>
  <div class="lds-dual-ring"></div>
</template>

<script>
export default {
  name: 'Preloader'
}
</script>

<style scoped>
.lds-dual-ring {
  display: inline-block;
  width: 40px;
  height: 40px;
}
.lds-dual-ring:after {
  content: " ";
  display: block;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 6px solid #5B3A32;
  border-color: #5B3A32 transparent #5B3A32 transparent;
  animation: lds-dual-ring 1.2s linear infinite;
}
@keyframes lds-dual-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

</style>
