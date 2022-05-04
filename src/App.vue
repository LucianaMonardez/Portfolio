<template>
  <v-app>
    <SideBarComponent />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import SideBarComponent from "./components/SideaBar.vue";
export default {
  name: "App",
  components: {
    SideBarComponent,
  },

  data: () => ({
    //
  }),
};
</script>