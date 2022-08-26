<template>
<div>
<v-container fluid class=" pa-0 ma-0">
  <TittleComponent />
  </v-container>
  
  <v-container>
<v-col class="d-flex flex-column pa-0" align="center">
    <v-row class="flex-column justify-center">
        <h2>Sobre mi</h2>
      <AboutComponent />
      </v-row>
      <v-row class="flex-column justify-center">
      <h2 class="subtitles">Mis Habilidades</h2>
      <SkillsComponent />
      </v-row>
      <v-row class="justify-center">
      <h2 class="subtitles">Proyectos</h2>
      <CardProjectsComponent />
    </v-row>
    </v-col>
  </v-container>
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
