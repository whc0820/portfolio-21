<template>
  <div id="app">
    <div class="name">Jason Chen</div>
    <span class="material-icons nav-menu-icon" @click="onClickNavIcon()">
      {{ this.isNavActive ? "close" : "menu" }}
    </span>
    <CustomCursor v-if="this.$screen.width >= 768" />
    <vue-page-transition name="overlay-right">
      <router-view />
    </vue-page-transition>
    <Navigator />
  </div>
</template>

<script>
import { gsap } from "gsap";

import CustomCursor from "./components/CustomCursor.vue";
import Navigator from "./views/Navigator.vue";

import eventBus from "./eventBus";

export default {
  data() {
    return {
      isNavActive: false,
    };
  },
  components: {
    CustomCursor,
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

<style>
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

.light {
  background: #f8f8f8;
  color: rgba(0, 0, 0, 0.9);
}

.dark {
  background: #000000;
  color: rgba(255, 255, 255, 0.9);
}

.full-page {
  min-height: 100%;
}

.vertical-bottom-left-text {
  position: absolute;
  bottom: 32px;
  left: 32px;
  font-size: 2vh;
  font-weight: 500;
  font-style: italic;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  writing-mode: vertical-rl;
  mix-blend-mode: difference;
  color: rgba(255, 255, 255, 0.9);
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
}
.nav-menu-icon:hover {
  color: rgba(0, 255, 255, 0.9);
}
</style>