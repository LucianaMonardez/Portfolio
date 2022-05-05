<template>
  <div class="home">
    <TittleComponent />
    <div class="contentClass">
      <div>
        <h2 class="subtitles">Sobre mi</h2>
      </div>
      <AboutComponent />
      <h2 class="subtitles">Mis Habilidades</h2>
      <SkillsComponent />
      <h2 class="subtitles">Proyectos</h2>
      <CardProjectsComponent />
    </div>
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
  margin-right: 5em;
  margin-left: 5em;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.subtitles {
  margin: 2em;
}
</style>
