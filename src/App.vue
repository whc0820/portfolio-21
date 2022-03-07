<template>
  <div id="app">
    <vue-page-transition name="overlay-right">
      <router-view />
    </vue-page-transition>
    <TopNavigator />
  </div>
</template>

<script>
const TopNavigator = () =>
  import(/* webpackPrefetch: true */ "@/components/TopNavigator.vue");

export default {
  components: {
    TopNavigator,
  },
  methods: {
    onClickName() {
      if (this.$router.currentRoute.path != `/home`) {
        this.$router.push({
          path: `/home`,
        });
      } else {
        if (this.$route.hash != `#home`) {
          this.$router.replace({ path: `/home`, hash: "home" });
        } else {
          this.$router.replace({ path: `/home`, hash: "" });
        }
      }
    },
  },
};
</script>

<style lang="scss">
@use "@/assets/scss/main.scss";
@import url("https://fonts.googleapis.com/css2?family=Source+Code+Pro:ital,wght@1,500&display=swap");

* {
  user-select: none;
  box-sizing: border-box;
}

img {
  -webkit-user-drag: none;
}

html,
body {
  margin: 0;
  padding: 0;
  overflow: hidden;
}

#app {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  position: relative;
  font-family: sans-serif;
  font-weight: 100;
  overflow: hidden;
}
</style>