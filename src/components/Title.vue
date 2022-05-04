<template>
  <v-layout class="container-div" max-width="1920">
    <v-img class="img-bg" dark>
      <v-layout fill-height align-center>
        <v-container>
          <v-row align="center" justify="center" class="white--text">
            <v-col cols="12">
              <div
                :class="{
                  'display-2 font-weight-bold ': $vuetify.breakpoint.smAndUp,
                  'title font-weight-bold': $vuetify.breakpoint.smAndDown,
                }"
              >
                <h2>Hola!</h2>
                <h3>Mi nombre es Luciana</h3>
                <p>Im a developer</p>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </v-layout>
    </v-img>
  </v-layout>
</template>

<script>
export default {};
</script>

<style>
.container-div {
}
.img-bg {
  background-image: url("https://wallpaperaccess.com/full/404506.jpg");
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
}
</style>