<template>
  <div id="app">
    <RightNavBar v-if="this.$screen.width >= 768" />
    <span v-else class="material-icons nav-menu-icon" @click="onClickNavIcon()">
      {{ this.isMobileNavActive ? "close" : "menu" }}
    </span>
    <CustomCursor v-if="this.$screen.width >= 768" />
    <vue-page-transition name="overlay-right">
      <router-view />
    </vue-page-transition>
    <div class="mobile-nav" v-if="this.$screen.width < 768">
      <span content-text="Home" @click="onClickLink('home')">Home</span>
      <span content-text="About" @click="onClickLink('about')">About</span>
      <span content-text="Education" @click="onClickLink('education')"
        >Education</span
      >
      <span content-text="Experience" @click="onClickLink('experience')"
        >Experience</span
      >
      <span content-text="Core Skills" @click="onClickLink('core-skills')"
        >Core Skills</span
      >
      <span content-text="Projects" @click="onClickLink('projects')"
        >Projects</span
      >
    </div>
  </div>
</template>

<script>
import { gsap } from "gsap";

import CustomCursor from "./components/CustomCursor.vue";
const RightNavBar = () =>
  import(/* webpackPrefetch: true */ "@/components/RightNavBar.vue");

export default {
  data() {
    return {
      isMobileNavActive: false,
    };
  },
  components: {
    RightNavBar,
    CustomCursor,
  },
  methods: {
    onClickNavIcon() {
      this.isMobileNavActive = !this.isMobileNavActive;
      const mobileNav = document.querySelector(".mobile-nav");
      if (this.isMobileNavActive) {
        gsap.to(mobileNav, { x: 0, duration: 0.35 });
      } else {
        gsap.to(mobileNav, { x: this.$screen.width, duration: 0.35 });
      }
    },
    onClickLink(name) {
      if (name) {
        const mobileNav = document.querySelector(".mobile-nav");
        this.isMobileNavActive = false;
        gsap.to(mobileNav, {
          x: this.$screen.width,
          duration: 0.35,
          onComplete: () => {
            if (this.$router.currentRoute.path != `/home`) {
              this.$router.push({ path: `/home`, hash: `#${name}` });
            } else {
              if (this.$route.hash != `#${name}`) {
                this.$router.replace({ path: "/home", hash: `#${name}` });
              }
              gsap.to(".page-container", { scrollTo: `#${name}` });
            }
          },
        });
      }
    },
    onClickHome() {
      const mobileNav = document.querySelector(".mobile-nav");
      this.isMobileNavActive = false;
      gsap.to(mobileNav, {
        x: this.$screen.width,
        duration: 0.35,
        onComplete: () => {
          if (this.$router.currentRoute.path != "/home") {
            this.$router.push({ path: "/home", hash: "#home" });
          } else {
            if (this.$route.hash != "#home") {
              this.$router.replace({ path: "/home", hash: "#home" });
            }
            gsap.to(".page-container", { scrollTo: "#home" });
          }
        },
      });
    },
    onClickProjects() {
      const mobileNav = document.querySelector(".mobile-nav");
      this.isMobileNavActive = false;
      gsap.to(mobileNav, {
        x: this.$screen.width,
        duration: 0.35,
        onComplete: () => {
          if (this.$router.currentRoute.path != "/home") {
            this.$router.push({ path: "/home", hash: "#projects" });
          } else {
            if (this.$route.hash != "#projects") {
              this.$router.replace({ path: "/home", hash: "#projects" });
            }
            gsap.to(".page-container", { scrollTo: "#projects" });
          }
        },
      });
    },
  },
};
</script>

<style>
* {
  user-select: none;
  box-sizing: border-box;
  /* cursor: none; */
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
  background: #ffffff;
  color: #000000;
}

.dark {
  background: #000000;
  color: #ffffff;
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

.page-container {
  margin: 0;
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;
}

.nav-menu-icon {
  margin: 9px;
  position: fixed;
  top: 32px;
  right: 32px;
  z-index: 2;
  cursor: pointer;
  color: #fff;
  mix-blend-mode: difference;
  transition: 0.35s;
}
.nav-menu-icon:hover {
  color: #0ff;
}

.mobile-nav {
  padding: 64px 16px;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: #000000;
  transform: translateX(100%);
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
}

.mobile-nav span {
  margin: 16px 0;
  position: relative;
  color: #ffffff;
  font-size: 64px;
  font-style: italic;
  line-height: 64px;
  cursor: pointer;
}
.mobile-nav span::before {
  content: attr(content-text);
  width: 0%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  color: #0ff;
  transition: 0.35s;
  text-overflow: clip;
  white-space: nowrap;
  overflow: hidden;
}
.mobile-nav span:hover::before {
  width: 100%;
}
</style>