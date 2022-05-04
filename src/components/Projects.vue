<template>
  <v-layout class="container-project" wrap>
    <v-card max-width="400" class="item">
      <div v-for="project in projects" :key="project.id">
        <v-img
          class="white--text align-end"
          height="200px"
          src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
        >
          <v-card-title>{{ project.title }}</v-card-title>
        </v-img>

        <v-card-subtitle class="pb-0">
          {{ project.tools }}
        </v-card-subtitle>

        <v-card-text class="text--primary">
          <div>{{ project.description }}</div>
        </v-card-text>

        <v-card-actions>
          <v-btn color="orange" text> Repository </v-btn>
        </v-card-actions>
      </div>
    </v-card>
  </v-layout>
</template>

<script>
export default {
  data: () => ({
    show: false,
  }),
  computed: {
    projects() {
      return this.$store.state.projects;
    },
  },
};
</script>

<style>
.container-project {
  background-color: aqua !important;
  width: 1300px !important;
}
.item {
  display: flex;
}
</style>