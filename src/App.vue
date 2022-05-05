<template>
  <v-app>
    <SideBarComponent />
    <v-main>
      <router-view />
    </v-main>
    <FooterComponent />
  </v-app>
</template>

<script>
import SideBarComponent from "./components/SideaBar.vue";
import FooterComponent from "./components/Footer.vue";
export default {
  name: "App",
  components: {
    SideBarComponent,
    FooterComponent,
  },

  data: () => ({
    //
  }),
};
</script>