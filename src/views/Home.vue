<template>
  <div class="page-container dark" @scroll="onPageScroll">
    <div class="section dark" id="home">
      <div class="section-max-width">
        <div class="home-title">
          <span>Hi, my name is</span>
          <span>Jason Chen.</span>
          <span>I make WEB and APP stuffs.</span>
          <span
            >I'm a front-end developer looking to further improve my skills and
            techniques.</span
          >
        </div>
      </div>
    </div>
    <div class="section dark" id="about">
      <div class="section-max-width">
        <div class="section-header">
          <span>01.</span>
          <span>About</span>
        </div>
        <div class="about-content">
          <p>
            Hello! My name is Jason and I enjoy creating websites and mobile
            applications. My interest in front-end development started back when
            I was a college student, I participated in "WEB Design" course and
            I've learned a lot about HTML &amp; CSS, since then I fell in love
            with making user interface and
            <span class="animated-text">
              <span>super cooool animations!</span>
            </span>
          </p>
          <p>
            Recently, I'm learning some framework in order to boost the
            performance and efficiency of the development task, and I'm also
            focus on the security mechanisms, better resource management,
            utilization for smaller project size and faster loading speed.
          </p>
          <p>
            Outside of my professional and coding lives, I love watching
            <span class="highlighted-text"> anime </span>
            and I'm also a
            <span class="highlighted-text"> electric guitar player</span>
            loves playing rock and covering anime music! I'm often too
            enthusiastic about doing something, that I've accidentally ruptured
            my tendors while playing it once.
          </p>
        </div>
      </div>
    </div>
    <div class="section dark" id="projects">
      <div class="section-max-width">
        <div class="section-header">
          <span>02.</span>
          <span>Projects</span>
        </div>
        <div
          v-for="(project, i) in this.projects"
          :key="project + i"
          :class="i % 2 == 0 ? 'table-row' : 'table-row-reverse'"
        >
          <div :class="i % 2 == 0 ? 'table-left' : 'table-left-reverse'">
            <b-img-lazy
              :width="project.coverType == 'desktop' ? 440 : 200"
              :src="require(`@/static/${project.coverPath}`)"
              blank-color="rgba(0, 255, 255, 0.15)"
            />
          </div>
          <div :class="i % 2 == 0 ? 'table-right' : 'table-right-reverse'">
            <p>
              {{ project.name }}
              <a
                v-if="project.websiteUrl"
                :href="project.websiteUrl"
                target="_blank"
              >
                <span class="material-icons"> open_in_new </span>
              </a>
            </p>
            <p>{{ project.type }}<span> &#9474; </span>{{ project.time }}</p>
            <p>{{ project.desc }}</p>
            <span @click="onClickProject(project.path)"
              >learn more &#8594;</span
            >
          </div>
          <div class="divider" />
        </div>
      </div>
    </div>
    <div class="section dark" id="experience">
      <div class="section-max-width">
        <div class="section-header">
          <span>03.</span>
          <span>Experience</span>
        </div>
        <div class="vertical-line" />
        <div
          v-for="(experience, i) in this.experiences"
          :key="experience + i"
          :class="i % 2 != 0 ? 'exp-row-reverse' : 'exp-row'"
        >
          <div
            class="exp-content"
            :class="i % 2 != 0 ? 'exp-row-left-reverse' : 'exp-row-left'"
          >
            <span
              v-for="(desc, j) in experience.desc"
              :key="desc + j"
              class="exp-desc"
            >
              &#8208; {{ desc }}
            </span>
          </div>
          <div :class="i % 2 != 0 ? 'exp-row-right-reverse' : 'exp-row-right'">
            <div class="exp-title">{{ experience.organization }}</div>
            <div class="exp-location">
              {{ experience.location }}
              <span :style="{ color: '#fff' }">&#9474;</span>
              {{ experience.startTime }} &mdash;
              {{ experience.endTime }}
            </div>
            <div class="exp-name">
              {{ experience.name }}
            </div>
          </div>
          <div class="exp-row-circle"></div>
        </div>
      </div>
    </div>
    <div class="section dark" id="contact">
      <div class="section-max-width">
        <div class="section-header">
          <span>04.</span>
          <span>Contact</span>
        </div>
        <div class="contact-content">
          <p>
            I'm currently looking for fulltime and contract opportunities to
            enhance my skills. If you're interested, don't be hesitate to
            contact me. Please reach out to me at
            <a href="mailto:jasonwhc0820@gmail.com">jasonwhc0820@gmail.com</a>,
            let's talk!
          </p>
        </div>
      </div>
    </div>
    <Footer />
    <ProgressBar :percentage="this.percentage" />
    <ScrollToTopIcon
      :percentage="this.percentage"
      @click.native="onClickScrollToTopIcon()"
    />
  </div>
</template>

<script>
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
gsap.registerPlugin(ScrollToPlugin);

import { BImgLazy } from "bootstrap-vue";

import eventBus from "../eventBus";

const ProgressBar = () =>
  import(/* webpackPrefetch: true */ "@/components/ProgressBar.vue");
const Footer = () =>
  import(/* webpackPrefetch: true */ "@/components/Footer.vue");
const ScrollToTopIcon = () =>
  import(/* webpackPrefetch: true */ "@/components/ScrollToTopIcon.vue");

export default {
  components: {
    BImgLazy,
    ProgressBar,
    Footer,
    ScrollToTopIcon,
  },
  data() {
    return {
      percentage: 0,
      experiences: [
        {
          name: "Substitute Military Service",
          organization: "Aviation Police Bureau",
          startTime: "Sep. 2021",
          endTime: "Feb. 2022",
          location: "Taoyuan, Taiwan",
          desc: ["Duty service in the Administration Section"],
        },
        {
          name: "Research Assistant",
          organization: "Yuan Ze University",
          startTime: "Sep. 2019",
          endTime: "Aug. 2021",
          location: "Taoyuan, Taiwan",
          desc: [
            'Tutor of the "Basic Programming" and "Windows Form Programming" course',
            "Maitain and develop course used website for collecting learning data of students",
            "Research and analyze students' help-seeking behaviors and tendencies by machine learning",
          ],
        },
        {
          name: "Part-Time",
          organization: "Ardomus Networks Corporation",
          startTime: "Jul. 2019",
          endTime: "Aug. 2019",
          location: "Hsinchu, Taiwan",
          desc: [
            "WEB development in Angular to control smart home devices through API",
          ],
        },
        {
          name: "Intern",
          organization: "Ardomus Networks Corporation",
          startTime: "Jan. 2018",
          endTime: "Jan. 2019",
          location: "Hsinchu, Taiwan",
          desc: [
            "Mobile Application development in native Android to control smart home devices through API for the Secutech 2018 demonstration",
            "Cooperate with back-end to implement OAuth 2.0 server and website for account linking and control smart home devices with Google Assistant and Alex Skill Kits",
            "Write shell script for automated project building and remote deployment in Docker environment",
            "Inspect and test API requests and responses follow by the Swagger's rules",
          ],
        },
        {
          name: "Teaching Assistant",
          organization: "Trend Education",
          startTime: "Jan. 2018",
          endTime: "Jan. 2019",
          location: "Taipei, Taiwan",
          desc: [
            "After school tutor of the high school and middle school students in Mathematics",
          ],
        },
      ],
      projects: [
        {
          name: "Daily Idiom",
          desc: "A mobile APP that help user learn Chinese idioms daily.",
          coverType: "mobile",
          coverPath: "daily-idiom/daily_idiom_image1_dark.jpg",
          type: "Digital Learning Course Project",
          time: "Jul. 2021",
          path: "/daily-idiom",
        },
        {
          name: "Visitor Predictor",
          desc: "A tool that help building time series model to predict the visitors.",
          coverType: "desktop",
          coverPath: "visitor-predictor/visitor_predictor_image4.png",
          type: "Big Data Analysis Course Project",
          time: "Jan. 2020",
          path: "/visitor-predictor",
          websiteUrl: "https://whc0820.github.io/visitor-predictor/",
        },
        {
          name: "Scheme Clerk System",
          desc: "A tool for shop manager and clerk to manage their working schedule.",
          coverType: "desktop",
          coverPath: "scheme-clerk-system/scheme_clerk_system_image5_light.png",
          type: "Human and Computer Interaction Course Project",
          time: "Dec. 2019",
          path: "/scheme-clerk-system",
        },
        {
          name: "LED Visualizer",
          desc: "A tool to customize the LED strip.",
          coverType: "desktop",
          coverPath: "led-visualizer/led_visualizer_cover.jpg",
          type: "Personal Project",
          time: "Mar. 2019",
          path: "/led-visualizer",
          websiteUrl: "https://led-visualizer.herokuapp.com/",
        },
        {
          name: "Beauty Crawler",
          desc: "A tool that crawls the images from the forum, PTT Beauty community.",
          coverType: "desktop",
          coverPath: "beauty-crawler/beauty_crawler_image1.png",
          type: "Personal Project",
          time: "Nov. 2018",
          path: "/beauty-crawler",
          websiteUrl: "https://capoo-bot.herokuapp.com/kpop/",
        },
      ],
    };
  },
  mounted() {
    if (this.$route.hash) {
      const pageContainer = document.querySelector(".page-container");
      gsap.to(pageContainer, { scrollTo: `${this.$route.hash}` });
    }
  },
  watch: {
    $route(to) {
      gsap.to(".page-container", { scrollTo: to.hash });
    },
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
    onClickProject(path) {
      if (path) {
        this.$router.push(path);
      }
    },
    onClickLink(hash) {
      if (this.$route.hash != `#${hash}`) {
        this.$router.replace({ path: "home", hash: `#${hash}` });
      }
      gsap.to(".page-container", { scrollTo: `#${hash}` });
    },
  },
};
</script>

<style lang="scss" scoped>
@use "@/assets/scss/main.scss";

@import url("https://fonts.googleapis.com/css2?family=Source+Code+Pro:ital,wght@1,500&display=swap");

.divider {
  width: 100%;
  height: 1px;
  min-height: 1px;
  position: absolute;
  bottom: 0;
  left: 0;
  background: #1f1f1f;
}

.section-header {
  & > span:first-child {
    margin: 0 16px 0 32px;
    font-size: 16px;
    line-height: 16px;
    color: rgba($color: #0ff, $alpha: 0.9);
  }
  & > span:nth-child(2) {
    font-size: 32px;
    line-height: 32px;
    text-transform: capitalize;
    color: rgba($color: #fff, $alpha: 0.9);
  }
}

.about-content {
  margin: 0 32px;
  width: calc(100% - 64px);
  display: inline-flex;
  flex-direction: column;
  & p {
    margin: 8px 0;
    font-size: 16px;
    text-align: justify;
    color: rgba(255, 255, 255, 0.7);
  }
}

.highlighted-text {
  color: rgba(0, 255, 255, 0.9);
  font-weight: 500;
  text-transform: uppercase;
}
.animated-text {
  background: linear-gradient(
    -45deg,
    rgba(63, 218, 216, 1),
    rgba(47, 201, 226, 1),
    rgba(28, 127, 238, 1),
    rgba(95, 21, 242, 1),
    rgba(186, 12, 248, 1),
    rgba(251, 7, 217, 1),
    rgba(255, 0, 0, 1),
    rgba(251, 7, 217, 1),
    rgba(186, 12, 248, 1),
    rgba(95, 21, 242, 1),
    rgba(28, 127, 238, 1),
    rgba(47, 201, 226, 1),
    rgba(63, 218, 216, 1),
    rgba(47, 201, 226, 1)
  );
  background-position-x: 0%;
  background-size: 400%;
  background-clip: text;
  animation: ani 8s infinite linear;
  animation-fill-mode: forwards;
  @keyframes ani {
    0% {
      background-position-x: 400%;
    }
    100% {
      background-position-x: 0%;
    }
  }
  & span {
    font-weight: 600;
    text-transform: uppercase;
    color: transparent;
  }
}

.exp-row,
.exp-row-reverse {
  margin: 0 32px 64px 32px;
  width: calc(100% - 64px);
  position: relative;
  display: flex;
  overflow: hidden;
}
.exp-row {
  flex-direction: row;
}
.exp-row-reverse {
  flex-direction: row-reverse;
}

.exp-row-left,
.exp-row-right,
.exp-row-left-reverse,
.exp-row-right-reverse {
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: center;
}
.exp-row-left,
.exp-row-right-reverse {
  margin: 0 64px 0 0;
  align-items: flex-end;
}
.exp-row-right,
.exp-row-left-reverse {
  margin: 0 0 0 64px;
  justify-content: center;
}

.exp-title {
  font-size: 32px;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.9);
}
.exp-row-right-reverse {
  & .exp-title,
  .exp-name,
  .exp-location {
    align-self: flex-end;
    align-items: flex-end;
    text-align: right;
  }
}
.exp-row-right .exp-title {
  text-align: left;
}

.exp-name {
  display: flex;
  flex-direction: column;
  font-size: 16px;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.7);
}

.exp-location {
  margin: 0 0 8px 0;
  font-size: 14px;
  color: rgba(0, 255, 255, 0.9);
}

.exp-desc {
  margin: 8px 0;
  color: rgba(255, 255, 255, 0.8);
}
.exp-row-left,
.exp-row-right-reverse {
  & .exp-desc {
    text-align: right;
  }
}
.exp-row-right,
.exp-row-left-reverse {
  & .exp-desc {
    text-align: left;
  }
}

.exp-content {
  padding: 16px 32px;
  background: rgba(0, 255, 255, 0.15);
  border-radius: 16px;
  color: rgba(255, 255, 255, 0.7);
}

.exp-row-circle {
  width: 16px;
  height: 16px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #000;
  border: 2px solid #fff;
  border-radius: 50%;
  box-sizing: border-box;
  &::before {
    content: "";
    position: absolute;
    top: -1px;
    left: -1px;
    width: calc(100% + 2px);
    height: calc(100% + 2px);
    border: 1px solid #0ff;
    border-radius: 50%;
    box-sizing: border-box;
  }
}

.table-row,
.table-row-reverse {
  margin: 0 32px;
  padding: 32px 0;
  width: calc(100% - 64px);
  display: inline-flex;
  position: relative;
}
.table-row {
  flex-direction: row;
}
.table-row-reverse {
  flex-direction: row-reverse;
}

.table-left,
.table-left-reverse {
  width: 50%;
  display: flex;
  flex-direction: row;
  overflow: hidden;
}
.table-left {
  padding: 0 64px 0 0;
  justify-content: flex-end;
}
.table-left-reverse {
  padding: 0 0 0 64px;
  justify-content: flex-start;
}

.table-right,
.table-right-reverse {
  width: 50%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  & > p:first-child {
    margin: 0;
    display: flex;
    flex-direction: row;
    font-size: 32px;
    font-weight: 500;
    color: rgba($color: #fff, $alpha: 0.9);
    & > a {
      margin: 0 0 0 8px;
      display: flex;
      align-items: center;
      text-decoration: none;
      & > span {
        margin: 0;
        padding: 0;
        font-size: 32px;
        color: rgba($color: #fff, $alpha: 0.9);
        cursor: pointer;
        &:hover {
          color: rgba($color: #0ff, $alpha: 0.9);
        }
      }
    }
  }
  & > p:nth-child(2) {
    margin: 0;
    font-size: 14px;
    color: rgba($color: #0ff, $alpha: 0.9);
    & > span {
      margin: 0 4px;
      color: rgba($color: #fff, $alpha: 0.9);
    }
  }
  & > p:nth-child(3) {
    margin: 8px 0;
    color: rgba($color: #fff, $alpha: 0.7);
  }
  & > span {
    position: absolute;
    bottom: 0px;
    right: 0px;
    font-size: 16px;
    cursor: pointer;
    &:hover {
      color: rgba($color: #0ff, $alpha: 0.9);
    }
  }
}
.table-right {
  padding: 0 32px 0 64px;
}
.table-right-reverse {
  padding: 0 64px 0 32px;
}

.vertical-line {
  width: 1.5px;
  position: absolute;
  top: 64px;
  bottom: 32px;
  left: 50%;
  transform: translate(-50%, 0);
  background: #1f1f1f;
}

#contact {
  display: flex;
  justify-content: center;
}
.contact-content {
  margin: 0 32px 64px 32px;
  width: calc(100% - 64px);
  display: inline-flex;
  flex-direction: column;
  justify-content: flex-start;
  & p {
    font-size: 16px;
    text-align: justify;
    color: rgba(255, 255, 255, 0.7);
  }
  & a {
    font-weight: 500;
    text-decoration: underline;
    color: rgba(0, 255, 255, 0.9);
    cursor: pointer;
  }
}

@media only screen and (max-width: 768px) {
  .exp-title {
    font-size: 24px;
  }

  .about-content {
    margin: 0 32px;
    width: calc(100% - 64px);
  }

  .contact-content {
    margin: 0 32px 64px 32px;
    width: calc(100% - 64px);
  }

  .exp-row-left,
  .exp-row-right-reverse {
    margin: 0 32px 0 0;
    align-items: flex-end;
  }
  .exp-row-right,
  .exp-row-left-reverse {
    margin: 0 0 0 32px;
    justify-content: center;
  }

  .table-row,
  .table-row-reverse {
    margin: 0 32px;
    padding: 32px 0;
    width: calc(100% - 64px);
  }
  .table-right,
  .table-left-reverse {
    padding: 0 0 0 32px;
  }
  .table-left,
  .table-right-reverse {
    padding: 0 32px 0 0;
  }
  .table-right,
  .table-right-reverse {
    & > span {
      bottom: 0px;
      right: 0px;
    }
  }
}

@media only screen and (max-width: 576px) {
  .section-header {
    & > span:first-child {
      font-size: 12px;
      line-height: 12px;
    }
    & > span:nth-child(2) {
      font-size: 24px;
      line-height: 24px;
    }
  }

  .table-row,
  .table-row-reverse {
    flex-direction: column-reverse;
  }
  .table-left,
  .table-right,
  .table-left-reverse,
  .table-right-reverse {
    padding: 0;
    width: 100%;
    justify-content: center;
  }
  .table-right,
  .table-right-reverse {
    padding: 0 0 16px 0;
    justify-content: space-between;
    & > p:nth-child(2) {
      text-align: justify;
    }
    & > p:nth-child(3) {
      margin: 8px 0 16px 0;
      text-align: justify;
    }
  }
  .table-left,
  .table-left-reverse {
    padding: 16px 0 0 0;
  }

  .exp-row,
  .exp-row-reverse {
    margin: 0 32px 32px 32px;
    flex-direction: column-reverse;
    border-bottom: 1px solid #171717;
  }

  .exp-content {
    padding: 8px 16px;
  }

  .exp-row-right,
  .exp-row-right-reverse {
    margin: 8px 0;
    width: 100%;
    align-items: flex-start;
  }
  .exp-row-right-reverse {
    & .exp-title,
    .exp-name,
    .exp-location {
      align-self: flex-start;
      align-items: flex-start;
      text-align: left;
    }
  }

  .exp-row-left,
  .exp-row-left-reverse {
    margin: 0 0 16px 0;
    width: 100%;
    align-items: flex-start;
    font-size: 16px;
    font-style: italic;
  }
  .exp-row-left .exp-desc {
    text-align: left;
  }

  .vertical-line,
  .exp-row-circle {
    display: none;
  }

  .contact-content {
    margin: 0 32px 64px 32px;
    width: calc(100% - 64px);
  }
}
</style>
