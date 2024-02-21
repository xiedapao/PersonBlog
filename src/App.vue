<script setup  lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import UserPinia from './components/UserPinia.vue'
import Nav from './components/Nav.vue'
import ColorSetting from './components/ColorSetting.vue'

</script>

<template>
  <div class="container">
    <Nav />
    <ColorSetting style="position: fixed;left: 0;top: 450px;"/>
    <div class="layout">
      <RouterView/>
    </div>
  </div>
   
</template>

<style lang="less" scoped>
.container {
  height: 100%;
  width: 100%;
  .nav {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
    height: 100%;
    width: 300px;
    overflow: auto;
    transition: .8s;
  }
  .layout {
    width: calc(100% - 300px);
    height: 100%;
    position: absolute;
    top: 0;
    left: 300px;
  }
}
</style>
