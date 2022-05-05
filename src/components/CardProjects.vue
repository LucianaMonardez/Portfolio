<template>
  <div d-flex class="card-container">
    <div class="card" v-for="project in projects" :key="project.id">
      <div class="card-img">
        <img src="https://cdn.vuetifyjs.com/images/cards/docks.jpg" alt="" />
      </div>
      <div class="card-body">
        <div class="tag-container" d-flex justify-space-between mb-6>
          <span
            v-for="item in project.technologies"
            :key="item"
            class="tag tag-purple"
            >{{ item }}</span
          >
        </div>
        <h4>{{ project.title }}</h4>
        <p>{{ project.description }}</p>
        <v-btn color="primary">Repositorio</v-btn>
      </div>
    </div>
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
  width: 1300px;
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