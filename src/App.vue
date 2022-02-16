<template>
  <div id="app">
    <div class="name">Jason Chen</div>
    <span class="material-icons nav-menu-icon" @click="onClickNavIcon()">
      {{ this.isNavActive ? "close" : "menu" }}
    </span>
    <vue-page-transition name="overlay-right">
      <router-view />
    </vue-page-transition>
    <Navigator />
  </div>
</template>

<script>
import { gsap } from "gsap";

import Navigator from "./views/Navigator.vue";

import eventBus from "./eventBus";

export default {
  data() {
    return {
      isNavActive: false,
    };
  },
  components: {
    Navigator,
  },
  mounted() {
    eventBus.$on("route-change", (hash) => {
      this.isNavActive = false;
      const nav = document.querySelector(".nav");
      gsap.to(nav, {
        x: this.$screen.width,
        duration: 0.35,
        onComplete: () => {
          if (this.$router.currentRoute.path != `/home`) {
            this.$router.push({
              path: `/home`,
              hash: hash,
            });
          } else {
            if (this.$route.hash != `#${hash}`) {
              this.$router.replace({ path: `/home`, hash: hash });
            }
          }
        },
      });
    });
  },
  beforeDestroy() {
    eventBus.$off("route-change");
  },
  methods: {
    onClickNavIcon() {
      this.isNavActive = !this.isNavActive;
      const mobileNav = document.querySelector(".nav");
      if (this.isNavActive) {
        gsap.to(mobileNav, { x: 0, duration: 0.35 });
      } else {
        gsap.to(mobileNav, { x: this.$screen.width, duration: 0.35 });
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

.full-page {
  min-height: 100%;
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

.name {
  position: fixed;
  top: 32px;
  left: 32px;
  color: #fff;
  font-size: 24px;
  font-family: "Source Code Pro", monospace;
  letter-spacing: 0.2em;
  mix-blend-mode: difference;
  z-index: 3;
}

.page-container {
  margin: 0;
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;
}

.nav-menu-icon {
  position: fixed;
  top: 32px;
  right: 32px;
  z-index: 3;
  cursor: pointer;
  color: rgba(255, 255, 255, 0.9);
  mix-blend-mode: difference;
  transition: 0.35s;
  &:hover {
    color: rgba(0, 255, 255, 0.9);
  }
}
</style>