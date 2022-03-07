<template>
  <div class="page-container" @scroll="onPageScroll">
    <div class="section dark" id="section-home">
      <div class="section-max-width">
        <div class="home-title">
          <span>March, 2019</span>
          <span>LED Visualizer</span>
          <span>Personal Project</span>
          <span>A tool to customize the LED strip.</span>
        </div>
        <div class="techs">
          <span v-for="(tech, i) in this.techs" :key="tech + i">
            {{ tech }}
          </span>
        </div>
      </div>
    </div>
    <div class="section dark" id="section-overview">
      <div class="section-max-width">
        <div class="section-header">
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
          based on the Arduino D1 which subscribes to the MQTT events to receive
          frontend's request and toggle the LED strip. One of the features is
          the music mode, we installed a voice detector on the D1 board that the
          LEDs can interact with the melody, which makes the music visualize.
        </div>
      </div>
    </div>
    <div class="section dark" id="section-rwd">
      <div class="section-max-width">
        <div class="section-header">
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
    <ProjectNavSection
      previousProjectName="Scheme Clerk System"
      previousProjectPath="scheme-clerk-system"
      nextProjectName="Beauty Crawler"
      nextProjectPath="beauty-crawler"
    />
    <Footer />
    <LeftLabel url="https://led-visualizer.herokuapp.com/" />
    <ProgressBar :percentage="this.percentage" />
    <ScrollToTopIcon
      :percentage="this.percentage"
      @click.native="onClickScrollToTopIcon()"
    />
  </div>
</template>

<script>
import eventBus from "../eventBus";

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
const ScrollToTopIcon = () =>
  import(/* webpackPrefetch: true */ "@/components/ScrollToTopIcon.vue");
const LeftLabel = () =>
  import(/* webpackPrefetch: true */ "@/components/LeftLabel.vue");

export default {
  components: {
    BCarousel,
    ProgressBar,
    MobileFrame,
    ProjectNavSection,
    Footer,
    ScrollToTopIcon,
    LeftLabel,
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
  mounted() {
    eventBus.$emit("page-scroll", 0);
  },
  methods: {
    onPageScroll(event) {
      let scrollTop = event.srcElement.scrollTop;
      this.percentage =
        (scrollTop / (event.srcElement.scrollHeight - this.$screen.height)) *
        100;
      eventBus.$emit("page-scroll", this.percentage);
    },
    onClickScrollToTopIcon() {
      if (this.percentage >= 99) {
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