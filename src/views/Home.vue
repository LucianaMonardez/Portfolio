<template>
<div class="d-flex">
<v-col class=" pa-0">
  <v-row class="ma-0">
    <TittleComponent />
    </v-row>
    <v-row align="center" class="contentClass pa-0 ma-0" style="width: 80%">
        <h2 class="black">Sobre mi</h2>
      <AboutComponent />
      <h2 class="subtitles">Mis Habilidades</h2>
      <SkillsComponent />
      <h2 class="subtitles">Proyectos</h2>
      <CardProjectsComponent />
    </v-row>
  </v-col>
  </div>
</template>

<script>
// @ is an alias to /src
import AboutComponent from "../components/About.vue";
import TittleComponent from "../components/Title.vue";
import SkillsComponent from "../components/Skills.vue";
import CardProjectsComponent from "../components/CardProjects.vue";
export default {
  name: "Home",
  components: {
    AboutComponent,
    TittleComponent,
    SkillsComponent,
    CardProjectsComponent,
  },
};
</script>

<style>
.home {
  display: flex;
  flex-direction: column;
}
.contentClass {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.subtitles {
  margin: 2em;
}
body.black {
  color: orange !important;
}
</style>
