<template>
  <div id="app" >
    <nav-bar-component  v-if="notIsLoginPage"/>
    <side-bar-component></side-bar-component>

    <router-view />
  </div>
</template>

<script>
import NavBarComponent from "./components/NavBarComponent";
import SideBarComponent from "./components/SideBarComponent.vue";

export default {
  computed: {
    notIsLoginPage() {
      return this.$route.name !== "login" && this.$route.name !=="register";
    },
  },
  components: {
    NavBarComponent,
    SideBarComponent,
  },
};
</script>

<style>
</style>
