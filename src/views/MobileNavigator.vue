<template>
  <div class="page-container dark" id="nav" :style="translateX">
    <div class="section">
      <div class="section-max-width">
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
        <div class="nav-row" @click="onClickLink('resume')">
          <span>Resume</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import eventBus from "../eventBus";

export default {
  props: ["active"],
  methods: {
    onClickLink(link) {
      if (link == "resume") {
        window.open("./resume.pdf", "_blank").focus();
      } else {
        eventBus.$emit("route-change", link);
      }
    },
  },
  computed: {
    translateX() {
      return this.active
        ? { transform: "translateX(0%)" }
        : { transform: "translateX(100%)" };
    },
  },
};
</script>

<style lang="scss" scoped>
#nav {
  position: fixed;
  top: 0;
  left: 0;
  transition: transform 0.35s;
  z-index: 1;
}

.nav-row {
  padding: 16px 0 16px 32px;
  width: 100%;
  cursor: pointer;
  &:nth-child(1) {
    margin: 160px 0 0 0;
  }
  & > span:nth-child(1) {
    margin: 0 24px 0 0;
    font-size: 24px;
    font-style: italic;
    color: rgba(0, 255, 255, 0.9);
  }
  & > span:nth-child(2) {
    position: relative;
    font-size: 32px;
    font-style: italic;
    font-weight: 500;
    text-transform: capitalize;
    letter-spacing: 0.2em;
    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 0%;
      height: 100%;
      border-bottom: 1px solid rgba(0, 255, 255, 0.9);
      transition: 0.35s linear;
    }
  }
  &:hover span:nth-child(2)::before {
    width: 100%;
  }
  &:last-child {
    padding: 16px 32px;
    display: flex;
    & > span {
      margin: 0;
      padding: 8px 0;
      width: 100%;
      font-size: 32px;
      text-align: center;
      border: 1px solid rgba(0, 255, 255, 0.9);
      border-radius: 4px;
      &:hover {
        background: rgba(0, 255, 255, 0.1);
      }
    }
  }
}
</style>