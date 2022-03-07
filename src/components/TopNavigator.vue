<template>
  <div>
    <div class="top-nav" v-if="this.$screen.width > 768" :style="translateY">
      <div class="name" @click="onClickLink('home')">{{ name }}</div>
      <div class="nav-item" @click="onClickLink('about')">
        <span>01.</span>
        <span>About</span>
      </div>
      <div class="nav-item" @click="onClickLink('projects')">
        <span>02.</span>
        <span>Projects</span>
      </div>
      <div class="nav-item" @click="onClickLink('experience')">
        <span>03.</span>
        <span>Experience</span>
      </div>
      <div class="nav-item" @click="onClickLink('contact')">
        <span>04.</span>
        <span>Contact</span>
      </div>
      <a class="nav-item" href="./resume.pdf" target="_blank">resume</a>
    </div>
    <div class="top-nav" v-else :style="translateY">
      <div class="name" @click="onClickLink('home')">{{ name }}</div>
      <span class="material-icons nav-menu-icon" @click="onClickNavMenu()">
        {{ this.isNavActive ? "close" : "menu" }}
      </span>
    </div>
    <MobileNavigator :active="this.isNavActive" />
  </div>
</template>

<script>
import eventBus from "../eventBus";

const MobileNavigator = () =>
  import(/* webpackPrefetch: true */ "@/views/MobileNavigator.vue");

export default {
  data() {
    return {
      isNavVisible: true,
      isNavActive: false,
      lastPercentage: 0,
    };
  },
  mounted() {
    eventBus.$on("route-change", (hash) => {
      this.isNavActive = false;
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
    });
    eventBus.$on("page-scroll", (percentage) => {
      if (this.lastPercentage < percentage) {
        this.isNavVisible = false;
      } else {
        this.isNavVisible = true;
      }
      this.lastPercentage = percentage;
    });
  },
  beforeDestroy() {
    eventBus.$off("route-change");
  },
  components: {
    MobileNavigator,
  },
  methods: {
    onClickLink(link) {
      eventBus.$emit("route-change", link);
    },
    onClickNavMenu() {
      this.isNavActive = !this.isNavActive;
    },
  },
  computed: {
    name() {
      return this.$screen.width > 1000 ? "Jason Chen" : "JC";
    },
    translateY() {
      return this.isNavVisible
        ? { transform: "translateY(0%)" }
        : { transform: "translateY(-100%)" };
    },
  },
};
</script>

<style lang="scss" scoped>
.top-nav {
  padding: 32px 32px 0px 32px;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  mix-blend-mode: difference;
  backdrop-filter: blur(10px);
  z-index: 2;
  transition: transform 0.35s;
}

.name {
  margin-right: auto;
  color: rgba(255, 255, 255, 0.9);
  line-height: 24px;
  font-size: 24px;
  letter-spacing: 0.2em;
  mix-blend-mode: difference;
  z-index: 2;
  cursor: pointer;
  &:hover {
    color: rgba($color: #0ff, $alpha: 0.9);
  }
}

.nav-item {
  margin: 0 0 0 16px;
  cursor: pointer;
  & > span:first-child {
    font-size: 12px;
    color: rgba($color: #0ff, $alpha: 0.9);
  }
  & > span:nth-child(2) {
    padding: 0 8px;
    position: relative;
    font-size: 16px;
    color: rgba($color: #fff, $alpha: 0.9);
    text-transform: capitalize;
    &::before {
      content: "";
      width: 0;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      border-bottom: 1px solid rgba($color: #0ff, $alpha: 0.9);
      transition: 0.35s ease-in-out;
    }
  }
  &:hover {
    & > span:nth-child(2) {
      &::before {
        width: 100%;
      }
    }
  }
  &:last-child {
    padding: 8px 16px;
    border: 1px solid rgba($color: #0ff, $alpha: 0.9);
    border-radius: 4px;
    font-size: 16px;
    color: rgba($color: #0ff, $alpha: 0.9);
    text-transform: capitalize;
    text-decoration: none;
    &:hover {
      background: rgba($color: #0ff, $alpha: 0.1);
    }
  }
}

.nav-menu-icon {
  cursor: pointer;
  color: rgba(255, 255, 255, 0.9);
  mix-blend-mode: difference;
  &:hover {
    color: rgba(0, 255, 255, 0.9);
  }
}
</style>