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
            I was a college student, I participated in "WEB Desgin" course and
            I've learned a lot about HTML &amp; CSS, since then I fell in love
            with making user interface and
            <span class="highlight-text">super cooool animations</span>
            !
          </p>
          <p>
            Recently, I'm learning some framework in order to boost the
            performance and efficiency of the development task, and I'm also
            focus on the security mechanisms, better resource management,
            utilization for smaller project size and faster loading speed. Here
            are some techniques I'm woking on these days: Vue, Bootstrap,
            Greensock, SCSS.
          </p>
          <p>
            Outside of my professional and coding lives, I love watching
            <span class="highlight-text">anime</span> and I'm also a
            <span class="highlight-text">electric guitar player</span> loves
            playing rock and covering anime music! I'm often too enthusiastic
            about doing something, that I've accidentally ruptured my tendors
            while playing it once.
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
            <p>{{ project.name }}</p>
            <p>{{ project.type }}<span> &#9474; </span>{{ project.time }}</p>
            <p>{{ project.desc }}</p>
            <span @click="onClickProject(project.path)"
              >learn more &#8594;</span
            >
          </div>
          <div v-if="i != projectsLength - 1" class="divider" />
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
          <span>Get in touch</span>
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
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { TextPlugin } from "gsap/TextPlugin";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
gsap.registerPlugin(ScrollTrigger);
// gsap.registerPlugin(TextPlugin);
gsap.registerPlugin(ScrollToPlugin);

import { BImgLazy } from "bootstrap-vue";

const ProgressBar = () =>
  import(/* webpackPrefetch: true */ "@/components/ProgressBar.vue");
const Footer = () =>
  import(/* webpackPrefetch: true */ "@/components/Footer.vue");

export default {
  components: {
    ProgressBar,
    Footer,
    BImgLazy,
  },
  data() {
    return {
      percentage: 0,
      educations: [
        {
          name: "Master Degree",
          startTime: "September 2019",
          endTime: "August 2021",
          location: "Yuan Ze University, Taoyuan",
          desc: [
            "Master of Science in the Computer Science and Engineering.",
            "Did reasearch in the Learning Technology laboratory.",
            'Thesis: "Identification Mechanisms of Help-Seeking Behavior Patterns and Help-Seeking Tendencies: Data-driven Clustering Approach".',
          ],
        },
        {
          name: "Bachelor Degree",
          startTime: "September 2015",
          endTime: "June 2019",
          location: "Yuan Ze University, Taoyuan",
          desc: [
            "Bachelor of Science in the Computer Science and Engineering.",
          ],
        },
        {
          name: "High School",
          startTime: "September 2012",
          endTime: "June 2015",
          location: "Cheng De High School, Hsinchu",
          desc: ["Mathematical gifted class."],
        },
      ],
      experiences: [
        {
          name: "Substitute Military Service",
          organization: "Aviation Police Bureau",
          startTime: "Sep. 2021",
          endTime: "Feb. 2022",
          location: "Taoyuan, Taiwan",
          desc: ["Duty service in the Administration Section."],
        },
        {
          name: "Teaching Assistant",
          organization: "Yuan Ze University",
          startTime: "Sep. 2019",
          endTime: "Aug. 2021",
          location: "Taoyuan, Taiwan",
          desc: [
            "Maitain and develope course used website for collecting learning data of students which written in ASP.NET and SSMS.",
            'Tutor of the "Basic Programming" and "Windows Form Programming" course.',
          ],
        },
        {
          name: "Part-Time",
          organization: "Ardomus Networks Corporation",
          startTime: "Jul. 2019",
          endTime: "Aug. 2019",
          location: "Hsinchu, Taiwan",
          desc: ["WEB development in Angular."],
        },
        {
          name: "Intern",
          organization: "Ardomus Networks Corporation",
          startTime: "Jan. 2018",
          endTime: "Jan. 2019",
          location: "Hsinchu, Taiwan",
          desc: [
            "Mobile APP development in native Android.",
            "WEB development in Angular.",
            "Shell script for faster project building and deployment.",
          ],
        },
        {
          name: "Teaching Assistant",
          organization: "Trend Education",
          startTime: "Jan. 2018",
          endTime: "Jan. 2019",
          location: "Taipei, Taiwan",
          desc: [
            "After school tutor of the high school and middle school students in Mathematics.",
          ],
        },
      ],
      skills: [
        {
          name: "Programming Languages",
          desc: [
            "C#",
            "C++",
            "Java",
            "JavaScript",
            "Python",
            "R",
            "TypeScript",
          ],
        },
        {
          name: "Frontend",
          desc: [
            "Android Studio",
            "Bootstrap",
            "CSS3",
            "Greensock",
            "Google Charts",
            "HTML5",
            "JQuery",
            "React Native",
            "Vue",
            "Vuetify",
          ],
        },
        {
          name: "Backend",
          desc: ["Docker", "Express.js", "Node.js", "NPM"],
        },
        {
          name: "Cloud",
          desc: ["AWS EC2", "Heroku"],
        },
        {
          name: "Data Analysis",
          desc: [
            "Matplotlib",
            "NumPy",
            "Pandas",
            "Plotly",
            "SciKit Learn",
            "SPSS",
          ],
        },
        {
          name: "Database",
          desc: ["Firebase", "MySQL", "SSMS"],
        },
        {
          name: "Internet Of Things",
          desc: ["Arduino"],
        },
      ],
      projects: [
        // {
        //   name: "Portfolio 21",
        //   desc: "This website.",
        //   coverPath: "scheme-clerk-system/scheme_clerk_system_cover.png",
        // },
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
        },
        {
          name: "Beauty Crawler",
          desc: "A tool that crawls the images from the forum, PTT Beauty community.",
          coverType: "desktop",
          coverPath: "beauty-crawler/beauty_crawler_image1.png",
          type: "Personal Project",
          time: "Nov. 2018",
          path: "/beauty-crawler",
        },
      ],
    };
  },
  mounted() {
    if (this.$route.hash) {
      const pageContainer = document.querySelector(".page-container");
      gsap.to(pageContainer, { scrollTo: `${this.$route.hash}` });
    }
    ScrollTrigger.batch(".vertical-line", {
      scroller: ".page-container",
      start: "top bottom",
      onEnter: (batch) =>
        gsap.from(batch, {
          height: 0,
          duration: 3,
        }),
    });

    if (this.$screen.width > 576) {
      ScrollTrigger.batch(".exp-row-circle", {
        scroller: ".page-container",
        start: "top bottom",
        onEnter: (batch) =>
          gsap.from(batch, {
            scale: 0.1,
            duration: 1,
          }),
      });
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
    },
    onClickScrollToTopIcon() {
      if (this.percentage >= 95) {
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
  computed: {
    scrollToTopIconCursor() {
      return this.percentage >= 100 ? "pointer" : "default";
    },
    scrollToTopIconOpacity() {
      return this.percentage >= 100 ? 1 : 0;
    },
    projectsLength() {
      return this.projects.length;
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

.about-content {
  margin: 0 64px;
  width: calc(100% - 128px);
  display: inline-flex;
  flex-direction: column;
  & p {
    margin: 8px 0;
    font-size: 16px;
    color: rgba(255, 255, 255, 0.7);
  }
}

.highlight-text {
  font-weight: 500;
  text-transform: uppercase;
  color: rgba(0, 255, 255, 0.9);
}

.exp-row,
.exp-row-reverse {
  margin: 0 64px 64px 64px;
  width: calc(100% - 128px);
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
  margin: 0 64px;
  padding: 32px 0;
  width: calc(100% - 128px);
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
    font-size: 32px;
    font-weight: 500;
    color: rgba($color: #fff, $alpha: 0.9);
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
  margin: 0 64px 64px 64px;
  width: calc(100% - 128px);
  display: inline-flex;
  flex-direction: column;
  justify-content: flex-start;
  & p {
    font-size: 16px;
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
    margin: 0 64px 64px 64px;
    width: calc(100% - 128px);
  }

  .exp-row,
  .exp-row-reverse {
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
  .about-content p {
    text-align: justify;
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
    & > p {
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
}
</style>
