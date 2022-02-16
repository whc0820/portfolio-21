<template>
  <div class="page-container" @scroll="onPageScroll">
    <div class="section light full-page" id="section-1">
      <div class="project-title">
        <span>Daily</span>
        <span>Idiom</span>
      </div>
    </div>
    <div class="section light" id="section-2">
      <div class="section-max-width">
        <div class="section-header">
          <span>01.</span>
          <span>Overview</span>
        </div>
        <div v-if="this.$screen.width > 960" class="mobile-frame-wrapper">
          <MobileFrame
            v-for="i in 4"
            :key="`mobile-frame-${i}`"
            :imageWidth="180"
            :imageHeight="380"
            :imageName="`daily-idiom/daily_idiom_image${i}_light.jpg`"
            :dark="false"
          />
        </div>
        <b-carousel v-else :interval="2000" class="mobile-frame-slider">
          <div class="camera">
            <div class="circle"></div>
          </div>
          <b-carousel-slide
            v-for="i in 7"
            :key="`mobile-frame-${i}`"
            :img-src="
              require(`@/static/daily-idiom/daily_idiom_image${i}_light.jpg`)
            "
          />
        </b-carousel>
        <div class="project-description">
          Daily Idiom is a mobile APP that help user learn Chinese idioms. The
          idioms were crawled from the online idioms dictionoary, Ministry of
          Education. The APP will randomize idioms each day for user to learn,
          user can check for each idioms' meaning, usage, allusion, etc. There
          is also a simple test to find out user's learning proficiency.
        </div>
      </div>
    </div>
    <div class="section dark" id="section-3">
      <div class="section-max-width">
        <div class="section-header">
          <span>02.</span>
          <span>Dark Mode</span>
        </div>
        <div v-if="this.$screen.width > 960" class="mobile-frame-wrapper">
          <MobileFrame
            v-for="i in 4"
            :key="`mobile-frame-${i}`"
            :imageWidth="180"
            :imageHeight="380"
            :imageName="`daily-idiom/daily_idiom_image${i}_dark.jpg`"
            :dark="true"
          />
        </div>
        <b-carousel v-else :interval="2000" class="mobile-frame-slider">
          <div class="camera">
            <div class="circle"></div>
          </div>
          <b-carousel-slide
            v-for="i in 7"
            :key="`mobile-frame-${i}`"
            :img-src="
              require(`@/static/daily-idiom/daily_idiom_image${i}_dark.jpg`)
            "
          />
        </b-carousel>
      </div>
    </div>
    <div class="section dark" id="section-4">
      <div class="section-max-width">
        <div class="section-header">
          <span>03.</span>
          <span>Techs &amp; Tools</span>
        </div>
        <div class="page-content-container">
          <span v-for="(tech, i) in this.techs" :key="tech + i">
            &#8208; {{ tech }}
          </span>
        </div>
      </div>
    </div>
    <div class="section dark" id="section-5">
      <div class="section-max-width">
        <div class="section-header">
          <span>04.</span>
          <span>Next Project</span>
        </div>
        <div class="page-content-container">
          <span class="next-project-title" @click="onClickNextProject()"
            >&#8594; Scheme Clerk System</span
          >
        </div>
      </div>
    </div>
    <Footer />
    <ProgressBar :percentage="this.percentage" />
    <div
      class="scroll-to-top-icon"
      :style="{
        opacity: scrollToTopIconOpacity,
        cursor: scrollToTopIconCursor,
      }"
      @click="onClickScrollToTopIcon()"
    >
      <span class="material-icons"> vertical_align_top </span>
    </div>
  </div>
</template>

<script>
const BCarousel = () =>
  import("bootstrap-vue").then((module) => module.BCarousel);

const ProgressBar = () =>
  import(/* webpackPrefetch: true */ "@/components/ProgressBar.vue");
const MobileFrame = () =>
  import(/* webpackPrefetch: true */ "@/components/MobileFrame.vue");
const Footer = () =>
  import(/* webpackPrefetch: true */ "@/components/Footer.vue");

export default {
  components: {
    BCarousel,
    ProgressBar,
    MobileFrame,
    Footer,
  },
  data() {
    return {
      percentage: 0,
      scrolledToBottomPage: false,
      isEnteringNextProject: false,
      techs: [
        "Beautiful Soup",
        "Crawler",
        "CSS3",
        "JavaScript",
        "React Native",
        "Realm",
      ],
    };
  },
  methods: {
    onPageScroll(event) {
      let scrollTop = event.srcElement.scrollTop;
      this.percentage =
        (scrollTop / (event.srcElement.scrollHeight - this.$screen.height)) *
        100;
    },
    onClickNextProject() {
      this.$router.push("scheme-clerk-system");
    },
    onClickScrollToTopIcon() {
      if (this.percentage >= 95) {
        const pageScroller = document.querySelector(".page-container");
        pageScroller.scrollTo({ top: 0, behavior: "smooth" });
      }
    },
  },
  computed: {
    scrollToTopIconCursor() {
      return this.percentage >= 95 ? "pointer" : "default";
    },
    scrollToTopIconOpacity() {
      return this.percentage >= 95 ? 1 : 0;
    },
  },
};
</script>

<style lang="scss" scoped>
@use "@/assets/scss/main.scss";

#section-2,
#section-3 {
  & .section-max-width {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
}

.project-title {
  padding: 128px 0 0 0;
  top: 0;
  left: 0;
  transform: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  pointer-events: none;
  background: repeating-linear-gradient(
      -45deg,
      transparent 0px,
      transparent 8px,
      #000 8px,
      #000 10px
    ),
    linear-gradient(180deg, #0ff, #f00);
  background-clip: text;
  background-attachment: fixed;
  & span {
    color: transparent;
    line-height: 232px;
    font-size: 232px;
    font-weight: 800;
    text-transform: uppercase;
    word-spacing: 0.2em;
  }
}

@media only screen and (max-width: 768px) {
  .project-title {
    & span {
      font-size: 192px;
      line-height: 192px;
    }
  }
}

@media only screen and (max-width: 576px) {
  .project-title {
    flex-direction: row-reverse;
    align-items: center;
    word-break: break-all;
    & span {
      font-size: 192px;
      line-height: 192px;
      writing-mode: vertical-rl;
    }
  }
}
</style>