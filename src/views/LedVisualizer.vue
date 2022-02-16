<template>
  <div class="page-container" @scroll="onPageScroll">
    <div class="section full-page dark" id="section-1">
      <div class="section-max-width">
        <b-img-lazy
          :src="require('@/static/led-visualizer/led_visualizer_cover.jpg')"
          :fluid="this.$screen.width > 768 ? true : false"
        />
        <div class="project-title">
          <span>LED</span>
          <span>Visualizer</span>
        </div>
      </div>
    </div>
    <div class="section dark" id="section-2">
      <div class="section-max-width">
        <div class="section-header">
          <span>01.</span>
          <span>Overview</span>
        </div>
        <div class="image-slider">
          <b-carousel :interval="2000" :no-hover-pause="true">
            <b-carousel-slide
              v-for="j in 6"
              :key="`slider-1-${j}`"
              :img-src="
                require(`@/static/led-visualizer/led_visualizer_image${j}.png`)
              "
            >
            </b-carousel-slide>
          </b-carousel>
        </div>
        <div class="project-description">
          LED Visualizer is a project that user can customize the LED strip's
          color or lighting mode through the web or mobile UI. The controller is
          based on the arduino D1 which subscribes to the MQTT events to receive
          frontend's request and toggle the LED strip. One of the features is
          the music mode, we installed a voice detector on the D1 board that the
          LEDs can interact with the melody, which makes the music visulaize.
        </div>
      </div>
    </div>
    <div class="section dark" id="section-3">
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
            :imageName="`led-visualizer/mobile/led_visualizer_mobile_image${i}.png`"
            :dark="true"
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
              require(`@/static/led-visualizer/mobile/led_visualizer_mobile_image${i}.png`)
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
            >&#8594; Beauty Crawler</span
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
import EventBus from "../eventBus";

const BCarousel = () =>
  import("bootstrap-vue").then((module) => module.BCarousel);
const BImgLazy = () =>
  import(/* webpackPrefetch: true */ "bootstrap-vue").then(
    (module) => module.BImgLazy
  );

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
      techs: [
        "Arduino",
        "CSS3",
        "Express.js",
        "Heroku",
        "HTML5",
        "JavaScript",
        "JQuery",
        "Node.js",
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
    onEnterNextProject() {
      this.isEnteringNextProject = true;
      EventBus.$emit("cursor-active", "right", "next");
    },
    onLeaveNextProject() {
      this.isEnteringNextProject = false;
      EventBus.$emit("cursor-deactive");
    },
    onClickNextProject() {
      this.$router.push("/beauty-crawler");
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