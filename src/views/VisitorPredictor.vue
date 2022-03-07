<template>
  <div class="page-container" @scroll="onPageScroll">
    <div class="section light" id="section-home">
      <div class="section-max-width">
        <div class="home-title">
          <span>January, 2020</span>
          <span>Visitor Predictor</span>
          <span>Big Data Analysis Course Project</span>
          <span
            >A tool that help building time series model to predict the
            vistors.</span
          >
        </div>
        <div class="techs">
          <span v-for="(tech, i) in this.techs" :key="tech + i">
            {{ tech }}
          </span>
        </div>
      </div>
    </div>
    <div class="section light" id="section-overview">
      <div class="section-max-width">
        <div class="section-header">
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
          this tool you can customize Weighted Majority Algorithm properties
          each time and the component will shows the line chart dynamically.
          This tool caculates the RMSE and stores the record each run time, in
          order to help user find out the highest precision and build the most
          suitable predicting model.
        </div>
      </div>
    </div>
    <div class="section light" id="section-rwd">
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
    <ProjectNavSection
      previousProjectName="Daily Idiom"
      previousProjectPath="daily-idiom"
      nextProjectName="Scheme Clerk System"
      nextProjectPath="scheme-clerk-system"
    />
    <Footer />
    <LeftLabel url="https://whc0820.github.io/visitor-predictor/" />
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
      techs: ["CSS3", "Google Charts", "HTML5", "JavaScript", "Vue", "Vuetify"],
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
};
</script>

<style lang="scss" scoped>
@use "@/assets/scss/main.scss";
</style>