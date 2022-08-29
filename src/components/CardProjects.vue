<template>
  <div class="d-flex">
    <v-col class="card-container pa-0">
      <v-card class="card d-flex" v-for="project in projects" :key="project.id">
        <v-col class="flex-column">
          <div class="card-img">
            <img
              src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
              alt=""
            />
          </div>

          <v-card-title>
            {{ project.title }}
          </v-card-title>
          <v-card-text>
            <v-row class="mx-0">
              <v-chip
                v-for="item in project.technologies"
                :key="item"
                color="success"
                >{{ item }}</v-chip
              >
              <div class="text-left">
                {{ project.description }}
              </div>
            </v-row>
          </v-card-text>

          <v-card-actions class="flex-column">
            <div>
              <v-btn color="primary" class="mt-auto">Repositorio</v-btn>
            </div>
          </v-card-actions>
        </v-col>
      </v-card>
    </v-col>
  </div>
</template>

<script>
export default {
  computed: {
    projects() {
      return this.$store.state.projects;
    },
  },
};
</script>

<style>
.card-container {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
}
.card {
  margin: 10px;
  background-color: #fafafa;
  border-radius: 10px;
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  width: 400px;
}
.card-img img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}
.tag {
  background: #cccccc;
  border-radius: 50px;
  font-size: 12px;
  margin: 0;
  color: #fff;
  padding: 2px 10px;
  text-transform: uppercase;
}
.tag-purple {
  background-color: #5e76bf;
}
.card-body {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;
  min-height: 200px;
}
.card-body p {
  font-size: 13px;
  margin: 0 0 40px;
}
</style> 