<template>
  <div class="right-nav-bar">
    <div class="nav-item" @click="onClickLink('home')">Home</div>
    <div class="nav-item" @click="onClickLink('projects')">Projects</div>
    <div class="nav-item" @click="onClickLink('experience')">Experience</div>
  </div>
</template>

<script>
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
gsap.registerPlugin(ScrollToPlugin);

export default {
  methods: {
    onClickLink(link) {
      if (this.$router.currentRoute.path != "/home") {
        this.$router.push({ path: "/home", hash: `#${link}` });
      } else {
        if (this.$route.hash != `#${link}`) {
          this.$router.replace({ path: "/home", hash: `#${link}` });
        }
        gsap.to(".page-container", { scrollTo: `#${link}` });
      }
    },
  },
};
</script>

<style>
.right-nav-bar {
  padding: 16px;
  height: 100vh;
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  z-index: 1;
  mix-blend-mode: difference;
  pointer-events: none;
}

.nav-item {
  margin: 32px 16px;
  padding: 16px;
  max-width: 2vh;
  position: relative;
  color: #ffffff;
  font-size: 2vh;
  font-weight: 500;
  font-style: italic;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  line-height: 2vh;
  writing-mode: vertical-rl;
  pointer-events: all;
  cursor: pointer;
}

.nav-item::before {
  content: "";
  width: 100%;
  height: 0%;
  position: absolute;
  top: 0;
  left: 0;
  border-left: 1px solid #ffffff;
  transition: 0.5s ease-in-out;
}

.nav-item:hover::before {
  height: 100%;
}
</style>