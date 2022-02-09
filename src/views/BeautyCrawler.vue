<template>
  <div class="page-container" @scroll="onPageScroll">
    <div class="section full-page dark" id="section-1">
      <div class="project-title">{{ `Beauty Crawler` }}</div>
      <b-img-lazy
        :src="require('@/static/beauty-crawler/beauty_crawler_cover.png')"
        center
      />
      <div class="vertical-bottom-left-text">November, 2018</div>
    </div>
    <div class="section dark" id="section-3">
      <div class="section-title">
        <span>01.</span>
        <span>Overview</span>
      </div>
      <div
        class="image-slider"
        :style="{
          width: `${imageSliderWidth}px`,
          height: `${imageSliderHeight}px`,
        }"
      >
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
        Beauty Crawler is a tool that crawls the images from the Taiwanese forum
        PTT Beauty community and relayout it with the web UI. We found out that
        there are many garbage posts. To filter it, user can set up specific
        keywords through the Line Bot, and the tool will only crawls images from
        the relative posts.
      </div>
    </div>
    <div class="section dark" id="section-4">
      <div class="section-title">
        <span>02.</span>
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
    <div class="section dark" id="section-5">
      <div class="section-title">
        <span>03.</span> <span>Techs &amp; Tools</span>
      </div>
      <div class="page-content-container">
        <span v-for="(tech, i) in this.techs" :key="tech + i">
          &#8208; {{ tech }}
        </span>
      </div>
    </div>
    <div class="section full-page dark" id="section-6">
      <div class="section-title">
        <span>04.</span>
        <span>Next Project</span>
      </div>
      <div class="vertical-bottom-left-text">Daily - Idiom</div>
      <CircularText
        id="circular-text"
        title="daily-idiom-daily-idiom-daily-idiom-"
        @mouseenter.native="onEnterNextProject()"
        @mouseleave.native="onLeaveNextProject()"
        @click.native="onClickNextProject()"
      />
      <div class="center-text">Click</div>
    </div>
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
const CircularText = () =>
  import(/* webpackPrefetch: true */ "@/components/CircularText.vue");

export default {
  components: {
    BCarousel,
    BImgLazy,
    ProgressBar,
    CircularText,
    MobileFrame,
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
    EventBus.$emit("cursor-deactive");
  },
  methods: {
    onPageScroll(event) {
      let scrollTop = event.srcElement.scrollTop;
      this.percentage =
        (scrollTop / (event.srcElement.scrollHeight - this.$screen.height)) *
        100;

      if (
        this.percentage >= 95 &&
        !this.scrolledToBottomPage &&
        !this.isEnteringNextProject
      ) {
        this.scrolledToBottomPage = true;
        EventBus.$emit("cursor-deactive");
      }
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
      this.$router.push("daily-idiom");
    },
    onClickScrollToTopIcon() {
      if (this.percentage >= 95) {
        const pageScroller = document.querySelector(".page-container");
        pageScroller.scrollTo({ top: 0, behavior: "smooth" });
      }
    },
  },
  computed: {
    imageSliderWidth() {
      return this.$screen.width * 0.7;
    },
    imageSliderHeight() {
      return ((this.$screen.width * 0.7) / 16) * 9;
    },
    scrollToTopIconCursor() {
      return this.percentage >= 95 ? "pointer" : "default";
    },
    scrollToTopIconOpacity() {
      return this.percentage >= 95 ? 1 : 0;
    },
  },
};
</script>

<style scoped>
.page-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  overflow-y: scroll;
}

.page-container::-webkit-scrollbar {
  display: none;
}

.section {
  width: 100%;
  position: relative;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

#section-2 {
  flex-direction: column;
  justify-content: space-around;
}

.project-title {
  padding: 0 64px;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 128px;
  font-weight: 100;
  text-transform: capitalize;
  word-spacing: 0.2em;
  white-space: pre-line;
  pointer-events: none;
  color: #ffffff;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  mix-blend-mode: difference;
}

.center-title {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 192px;
  color: #f00;
  text-transform: uppercase;
  text-align: center;
  mix-blend-mode: difference;
  line-height: 192px;
}

.image-slider {
  margin: 0 0 32px 0;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-self: center;
  overflow: scroll hidden;
  border-radius: 2px;
}

.image-slider::-webkit-scrollbar {
  display: none;
}

.image-wrapper {
  width: 100%;
  height: 100%;
  min-width: 100%;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: top left;
}

.project-description {
  margin: 0 0 32px 0;
  padding: 0 128px;
}

.project-description::first-letter {
  margin: 0.1em 0.1em 0 0;
  float: left;
  font-size: 3.6em;
  line-height: 0.6em;
}

.section-title {
  padding: 72px 32px 32px 32px;
  position: sticky;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: row;
  z-index: 1;
}
.section-title span {
  display: flex;
  align-items: flex-end;
  font-style: italic;
  text-transform: uppercase;
  letter-spacing: 0.2em;
}
.section-title span:nth-child(1) {
  margin: 0 16px 0 32px;
  line-height: 16px;
  font-size: 16px;
  color: rgba(0, 255, 255, 0.9);
}
.section-title span:nth-child(2) {
  line-height: 32px;
  font-size: 32px;
  font-weight: 500;
}

.page-content-container {
  margin: 0;
  padding: 0 96px;
  width: 100%;
  display: inline-flex;
  flex-direction: column;
}

.page-content-container span {
  margin: 8px 0;
}

.mobile-frame-wrapper {
  margin: 8px 128px;
  width: calc(100% - 256px);
  height: auto;
  box-sizing: border-box;
  display: inline-flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: flex-start;
}

.mobile-frame-wrapper::-webkit-scrollbar {
  display: none;
}

.mobile-frame-slider {
  margin: 0 0 32px 0;
  width: 270px;
  height: 570px;
  position: relative;
  align-self: center;
  border-left: 2.5px solid #1f1f1f;
  border-right: 2.5px solid #1f1f1f;
  border-top: 4px solid #1f1f1f;
  border-bottom: 4px solid #1f1f1f;
  border-radius: 10px;
  box-sizing: border-box;
  overflow: hidden;
}

.camera {
  width: 8px;
  height: 8px;
  position: absolute;
  top: 12px;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: #1f1f1f;
  z-index: 1;
}

.circle {
  width: 4px;
  height: 4px;
  border: 0.1px solid rgba(255, 255, 255, 0.4);
  border-radius: 50%;
  z-index: 1;
}

#circular-text {
  margin: 48px 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.center-text {
  margin: 48px 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 32px;
  text-transform: uppercase;
  transition: 0.1s ease-in-out;
  pointer-events: none;
}

.scroll-to-top-icon {
  position: fixed;
  bottom: 32px;
  right: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgba(255, 255, 255, 0.9);
  mix-blend-mode: difference;
  transition: 0.35s ease-in-out;
  cursor: pointer;
  z-index: 2;
}

@media only screen and (max-width: 992px) {
  .project-title {
    font-size: 96px;
  }
  .project-description {
    padding: 32px 72px;
  }
}

@media only screen and (max-width: 768px) {
  .project-title {
    font-size: 72px;
  }
}

@media only screen and (max-width: 576px) {
  .section-title span:nth-child(1) {
    margin: 0 16px 0 0;
  }
  .section-title span:nth-child(2) {
    font-size: 24px;
    line-height: 24px;
  }
  .project-title {
    font-size: 64px;
  }
  .project-description {
    padding: 32px 32px;
  }
  .page-content-container {
    padding: 0 48px;
  }
}
</style>