<template>
  <v-card elevation="2" outlined max-width="1300" style="margin-right: 3em">
    <div class="item d-flex">
      <div v-for="skill in skills" :key="skill.id" class="skill">
        <v-img :src="skill.img" class="img" contain></v-img>
        <p class="text">{{ skill.title }}</p>
      </div>
    </div>
  </v-card>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    skills() {
      return this.$store.state.skill;
    },
  },
};
</script>

<style>
.item {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.skill {
  justify-content: center;
  align-items: center;
}
.img {
  margin-top: 3em;
  margin-right: 3em;
  margin-left: 3em;
  width: 100px;
  height: 100px;
}
.text {
  text-align: center;
  line-height: 100px;
}
</style>