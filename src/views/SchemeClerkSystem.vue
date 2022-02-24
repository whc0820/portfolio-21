<template>
  <div class="page-container" @scroll="onPageScroll">
    <div class="section light" id="section-home">
      <div class="section-max-width">
        <div class="home-title">
          <span>December, 2019</span>
          <span>Scheme Clerk System</span>
          <span>Human and Computer Interaction Course Project</span>
          <span
            >A tool for shop manager and clerk to manage their working
            schedule.</span
          >
        </div>
      </div>
    </div>

    <div class="section light" id="section-overview">
      <div class="section-max-width">
        <div class="section-header">
          <span>01.</span>
          <span>Overview</span>
        </div>
        <div class="image-slider">
          <b-carousel :interval="2000" :no-hover-pause="true">
            <b-carousel-slide
              v-for="j in 14"
              :key="`slider-1-${j}`"
              :img-src="
                require(`@/static/scheme-clerk-system/scheme_clerk_system_image${j}_light.png`)
              "
            >
            </b-carousel-slide>
          </b-carousel>
        </div>
        <div class="project-description">
          Scheme Clerk System is a project that designed for shop manager and
          clerk to manage their working schedule. The clerk can set up the
          prefer working time each day, and the manager can check out each
          clerks' preference and make the schedule simply by drag and drop
          user's chip or switching between the working blocks.
        </div>
      </div>
    </div>

    <div class="section light" id="section-rwd">
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
            :imageName="`scheme-clerk-system/mobile/scheme_clerk_system_mobile_image${i}.png`"
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
              require(`@/static/scheme-clerk-system/mobile/scheme_clerk_system_mobile_image${i}.png`)
            "
          />
        </b-carousel>
      </div>
    </div>

    <div class="section dark" id="section-dark-mode">
      <div class="section-max-width dark">
        <div class="section-header">
          <span>03.</span>
          <span>Dark Mode</span>
        </div>
        <div class="image-slider">
          <b-carousel :interval="2000" :no-hover-pause="true">
            <b-carousel-slide
              v-for="j in 14"
              :key="`slider-2-${j}`"
              :img-src="
                require(`@/static/scheme-clerk-system/scheme_clerk_system_image${j}_dark.png`)
              "
              background="rgba(0, 255, 255, 0.15)"
            />
          </b-carousel>
        </div>
      </div>
    </div>

    <div class="section dark" id="section-techs">
      <div class="section-max-width">
        <div class="section-header">
          <span>04.</span>
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
      previousProjectName="Visitor Predictor"
      previousProjectPath="visitor-predictor"
      nextProjectName="Led Visualizer"
      nextProjectPath="led-visualizer"
    />
    <Footer />
    <ProgressBar :percentage="this.percentage" />
    <ScrollToTopIcon
      :percentage="this.percentage"
      @click.native="onClickScrollToTopIcon()"
    />
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
const ScrollToTopIcon = () =>
  import(/* webpackPrefetch: true */ "@/components/ScrollToTopIcon.vue");

export default {
  components: {
    BCarousel,
    ProgressBar,
    MobileFrame,
    ProjectNavSection,
    Footer,
    ScrollToTopIcon,
  },
  data() {
    return {
      percentage: 0,
      isEnteringNextProject: false,
      techs: ["CSS3", "HTML5", "JavaScript", "Vue", "Vuetify"],
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