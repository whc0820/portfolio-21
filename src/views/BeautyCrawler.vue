<template>
  <div class="page-container" @scroll="onPageScroll">
    <div class="section dark" id="section-home">
      <div class="section-max-width">
        <div class="home-title">
          <span>November, 2018</span>
          <span>Beauty Crawler</span>
          <span>Personal Project</span>
          <span
            >A tool that crawls the images from the forum, PTT Beauty
            community.</span
          >
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
              v-for="j in 7"
              :key="`slider-1-${j}`"
              :img-src="
                require(`@/static/beauty-crawler/beauty_crawler_image${j}.png`)
              "
            >
            </b-carousel-slide>
          </b-carousel>
        </div>
        <div class="project-description">
          Beauty Crawler is a tool that crawls the images from the
          <a class="link" href="https://www.ptt.cc/bbs/Beauty/" target="_blank"
            >Taiwanese forum PTT Beauty community</a
          >
          and relayout it with the web UI. We found out that there are many
          garbage posts. To filter it, user can set up specific keywords through
          the Line Bot, and the tool will only crawls images from the relative
          posts.
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
            :imageName="`beauty-crawler/mobile/beauty_crawler_mobile_image${i}.png`"
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
              require(`@/static/beauty-crawler/mobile/beauty_crawler_mobile_image${i}.png`)
            "
          />
        </b-carousel>
      </div>
    </div>
    <ProjectNavSection
      previousProjectName="LED Visualizer"
      previousProjectPath="led-visualizer"
      nextProjectName="Daily Idiom"
      nextProjectPath="daily-idiom"
    />
    <Footer />
    <LeftLabel url="https://capoo-bot.herokuapp.com/kpop/" />
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
        "CSS3",
        "Express.js",
        "Firebase",
        "Heroku",
        "HTML5",
        "JavaScript",
        "JQuery",
        "Line Bot",
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