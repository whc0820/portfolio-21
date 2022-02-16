<template>
  <div class="page-container" @scroll="onPageScroll">
    <div class="section full-page light" id="section-1">
      <div class="section-max-width">
        <b-img-lazy
          :src="
            require('@/static/visitor-predictor/visitor_predictor_cover.png')
          "
          :fluid="this.$screen.width > 768 ? true : false"
        />
        <div class="project-title">
          <span>Visitor</span>
          <span>Predictor</span>
        </div>
      </div>
    </div>
    <div class="section light" id="section-2">
      <div class="section-max-width">
        <div class="section-header">
          <span>01.</span>
          <span>Overview</span>
        </div>
        <div class="image-slider">
          <b-carousel :interval="2000" :no-hover-pause="true">
            <b-carousel-slide
              v-for="j in 5"
              :key="`slider-1-${j}`"
              :img-src="
                require(`@/static/visitor-predictor/visitor_predictor_image${j}.png`)
              "
            >
            </b-carousel-slide>
          </b-carousel>
        </div>
        <div class="project-description">
          Visitor Predictor is a tool that help building time series model. The
          trainning data is from Kaggle - Visitors to Taiwan By Purpose, with
          this tool you can customize Weighted Majority Alogrithm properties
          each time and the component will shows the line chart dynamically.
          This tool caculates the RMSE and stores the record each run time, in
          order to help user find out the highest precision and build the most
          suitable predicting model.
        </div>
      </div>
    </div>
    <div class="section light" id="section-3">
      <div class="section-max-width">
        <div class="section-header">
          <span>02.</span>
          <span>Responsive Design</span>
        </div>
        <div v-if="this.$screen.width > 960" class="mobile-frame-wrapper">
          <MobileFrame
            v-for="i in 4"
            :key="`mobile-frame-${i}`"
            :imageWidth="180"
            :imageHeight="380"
            :imageName="`visitor-predictor/mobile/visitor_predictor_mobile_image${i}.png`"
            :dark="false"
          />
        </div>
        <b-carousel v-else :interval="2000" class="mobile-frame-slider">
          <div class="camera">
            <div class="circle"></div>
          </div>
          <b-carousel-slide
            v-for="i in 4"
            :key="`mobile-frame-${i}`"
            :img-src="
              require(`@/static/visitor-predictor/mobile/visitor_predictor_mobile_image${i}.png`)
            "
          />
        </b-carousel>
      </div>
    </div>
    <div class="section light" id="section-4">
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
    <div class="section light" id="section-5">
      <div class="section-max-width">
        <div class="section-header">
          <span>04.</span>
          <span>Next Project</span>
        </div>
        <div class="page-content-container">
          <span class="next-project-title" @click="onClickNextProject()"
            >&#8594; LED Visualizer
          </span>
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
import EventBus from "../eventBus";

const BCarousel = () =>
  import("bootstrap-vue").then((module) => module.BCarousel);
const BImgLazy = () =>
  import("bootstrap-vue").then((module) => module.BImgLazy);

const ProgressBar = () =>
  import(/* webpackPrefetch: true */ "@/components/ProgressBar.vue");
const MobileFrame = () =>
  import(/* webpackPrefetch: true */ "@/components/MobileFrame.vue");
const Footer = () =>
  import(/* webpackPrefetch: true */ "@/components/Footer.vue");

export default {
  components: {
    BCarousel,
    BImgLazy,
    ProgressBar,
    MobileFrame,
    Footer
  },
  data() {
    return {
      percentage: 0,
      scrolledToBottomPage: false,
      isEnteringNextProject: false,
      techs: ["CSS3", "Google Charts", "HTML5", "JavaScript", "Vue", "Vuetify"],
    };
  },
  methods: {
    onPageScroll(event) {
      let scrollTop = event.srcElement.scrollTop;
      this.percentage =
        (scrollTop / (event.srcElement.scrollHeight - this.$screen.height)) *
        100;
    },
    onEnterNextProject() {
      this.isEnteringNextProject = true;
      EventBus.$emit("cursor-active", "right", "next");
    },
    onLeaveNextProject() {
      this.isEnteringNextProject = false;
      EventBus.$emit("cursor-deactive");
    },
    onClickNextProject() {
      this.$router.push("led-visualizer");
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
</style>