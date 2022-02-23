<template>
  <div class="page-container" @scroll="onPageScroll">
    <div class="section light" id="section-home">
      <div class="section-max-width">
        <div class="home-title">
          <span>July, 2020</span>
          <span>Daily Idiom</span>
          <span>Digital Learning Course Project</span>
          <span>A mobile APP that help user learn Chinese idioms daily.</span>
        </div>
      </div>
    </div>
    <div class="section light" id="section-overview">
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
    <div class="section dark" id="section-rwd">
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
    <div class="section dark" id="section-techs">
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
    <ProjectNavSection
      previousProjectName="Beauty Crawler"
      previousProjectPath="beauty-crawler"
      nextProjectName="Visitor Predictor"
      nextProjectPath="visitor-predictor"
    />
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
const ProjectNavSection = () =>
  import(/* webpackPrefetch: true */ "@/components/ProjectNavSection.vue");
const Footer = () =>
  import(/* webpackPrefetch: true */ "@/components/Footer.vue");

export default {
  components: {
    BCarousel,
    ProgressBar,
    MobileFrame,
    ProjectNavSection,
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

#section-overview {
  & .section-max-width {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
}

.project-title {
  position: relative;
  background: repeating-linear-gradient(
      -45deg,
      transparent 0px,
      transparent 8px,
      #000 8px,
      #000 10px
    ),
    linear-gradient(180deg, #0ff, #f00);
  background-clip: text;
  & span {
    color: transparent;
    text-transform: uppercase;
    font-size: 16vw;
    line-height: 16vw;
  }
}

@media only screen and (max-width: 576px) {
  .project-title {
    & span {
      font-size: 128px;
      line-height: 128px;
      writing-mode: vertical-lr;
    }
  }
}
</style>