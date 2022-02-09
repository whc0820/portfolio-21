<template>
  <div class="nav dark">
    <div class="nav-row" @click="onClickLink('home')">
      <span>00.</span>
      <span>Home</span>
    </div>
    <div class="nav-row" @click="onClickLink('about')">
      <span>01.</span>
      <span>About</span>
    </div>
    <div class="nav-row" @click="onClickLink('projects')">
      <span>02.</span>
      <span>Projects</span>
    </div>
    <div class="nav-row" @click="onClickLink('experience')">
      <span>03.</span>
      <span>Experience</span>
    </div>
    <div class="nav-row" @click="onClickLink('contact')">
      <span>04.</span>
      <span>Contact</span>
    </div>
  </div>
</template>

<script>
import eventBus from "../eventBus";

export default {
  methods: {
    onClickLink(link) {
      eventBus.$emit("route-change", link);
    },
  },
};
</script>

<style scoped>
.nav {
  padding: 128px 64px;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  transform: translateX(100%);
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: nowrap;
}

.nav-row {
  width: 100%;
  cursor: pointer;
}
.nav-row span:nth-child(1) {
  margin: 0 24px 0 0;
  font-size: 24px;
  font-style: italic;
  color: rgba(0, 255, 255, 0.9);
}
.nav-row span:nth-child(2) {
  position: relative;
  font-size: 64px;
  font-style: italic;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.2em;
}
.nav-row span:nth-child(2)::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 0%;
  height: 100%;
  border-bottom: 1px solid rgba(0, 255, 255, 0.9);
  transition: 0.35s linear;
}

.nav-row:hover span:nth-child(2)::before {
  width: 100%;
}

@media only screen and (max-width: 768px) {
  .nav {
    padding: 128px 32px;
  }
  .nav-row {
    padding: 16px 0;
  }
  .nav-row span:nth-child(2) {
    font-size: 48px;
  }
}

@media only screen and (max-width: 576px) {
  .nav {
    padding: 128px 32px;
  }
  .nav-row span:nth-child(1) {
    margin: 0 12px 0 0;
  }
  .nav-row span:nth-child(2) {
    font-size: 32px;
  }
}
</style>