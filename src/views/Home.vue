<template>
  <div class="page-container dark" @scroll="onPageScroll">
    <div class="section dark" id="home">
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
    <div class="section dark" id="about">
      <div class="section-header">
        <span>01.</span>
        <span>About</span>
      </div>
      <div class="about-content">
        <p>
          Hello! My name is Jason and I enjoy creating websites and mobile
          applications. My interest in front-end development started back when I
          was a college student, I participated in "WEB Desgin" course and I've
          learned a lot about HTML &amp; CSS, since then I fell in love with
          making user interface and
          <span class="highlight-text">super cooool animations</span>
          !
        </p>
        <p>
          Recently, I'm learning some framework in order to boost the
          performance and efficiency of the development task, and I'm also focus
          on the security mechanisms, better resource management, utilization
          for smaller project size and faster loading speed.
        </p>
        <p>
          Outside of my professional and coding lives, I love watching anime and
          I'm also a electric guitarist loves playing rocks and covering anime
          music! I'm often too enthusiastic about doing something, that I've
          accidentally ruptured my tendors while playing the electric guitar
          once.
        </p>
      </div>
    </div>
    <div class="section dark" id="projects">
      <div class="section-header">
        <span>02.</span>
        <span>Projects</span>
      </div>
      <div
        v-for="(project, i) in this.projects"
        :key="project + i"
        @mouseenter="onEnterProject(project.path)"
        @mouseleave="onLeaveProject(project.path)"
        @click="onClickProject(project.path)"
        class="table-row project-row"
        :class="project.path ? 'pointer' : ''"
      >
        <div class="table-left">
          <span>{{ project.name }}</span>
          <span v-if="project.path" class="material-icons"> launch </span>
        </div>
        <div class="table-right">
          <span>{{ project.desc }}</span>
        </div>
        <div v-if="i != projectsLength - 1" class="divider"></div>
      </div>
    </div>
    <div class="section dark" id="experience">
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
    <div class="section dark" id="contact">
      <div class="section-header">
        <span>04.</span>
        <span>Let's work together</span>
      </div>
      <div class="contact-content">
        <p>
          I'm currently looking for fulltime and contract opportunities.<br />
          If you're interested, don't be hesitate to contact me. <br />
          Please reach out to me at
          <a href="mailto:jasonwhc0820@gmail.com">jasonwhc0820@gmail.com</a>,
          let's talk!
        </p>
      </div>
    </div>
    <div class="section dark" id="footer">
      <div class="footer-content">
        <div class="footer-col">
          <span>Jason Chen</span>
          <span>Front-End Development</span>
        </div>
        <div class="footer-col">
          <span>Contact</span>
          <span
            ><a href="mailto:jasonwhc0820@gmail.com"
              >jasonwhc0820@gmail.com</a
            ></span
          >
        </div>
        <div class="footer-col">
          <span>
            <a target="_blank" href="https://github.com/whc0820"
              ><b-icon icon="github"></b-icon
            ></a>
          </span>
        </div>
      </div>
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
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(TextPlugin);
gsap.registerPlugin(ScrollToPlugin);

import { BIcon } from "bootstrap-vue";

import EventBus from "../eventBus";

const ProgressBar = () =>
  import(/* webpackPrefetch: true */ "@/components/ProgressBar.vue");

export default {
  components: {
    ProgressBar,
    BIcon,
  },
  data() {
    return {
      percentage: 0,
      scrolledToBottomPage: false,
      isEnteringNextProject: false,
      sectionObserver: null,
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
        { name: "Portfolio 21", desc: "This website." },
        {
          name: "Daily Idiom",
          desc: "A mobile APP that help user learn Chinese idioms daily.",
          path: "/daily-idiom",
        },
        {
          name: "Scheme Clerk System",
          desc: "A project that designed for shop manager and clerk to manage their working schedule.",
          path: "/scheme-clerk-system",
        },
        {
          name: "Visitor Predictor",
          desc: "A tool that help building time series model to predict the visitors by purpose.",
          path: "/visitor-predictor",
        },
        {
          name: "LED Visualizer",
          desc: "A project that user can customize the LED strip's color or lighting mode through the web or mobile UI.",
          path: "/led-visualizer",
        },
        {
          name: "Beauty Crawler",
          desc: "A tool that crawls the images from the Taiwanese forum PTT Beauty community and relayout it with the web UI.",
          path: "/beauty-crawler",
        },
      ],
    };
  },
  mounted() {
    // this.observeSections();

    if (this.$route.hash) {
      const pageContainer = document.querySelector(".page-container");
      gsap.to(pageContainer, { scrollTo: `${this.$route.hash}` });
    }

    EventBus.$emit("cursor-deactive");

    ScrollTrigger.batch(".vertical-line", {
      scroller: ".page-container",
      start: "top bottom",
      onEnter: (batch) =>
        gsap.from(batch, {
          height: 0,
          duration: 3,
        }),
    });

    // ScrollTrigger.batch(".exp-desc", {
    //   scroller: ".page-container",
    //   start: "top bottom",
    //   onEnter: (batch) =>
    //     gsap.from(batch, {
    //       x: 100,
    //       opacity: 0,
    //       color: "#0ff",
    //       duration: 0.5,
    //     }),
    // });

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

    // ScrollTrigger.batch(".table-right span", {
    //   scroller: ".page-container",
    //   start: "top bottom",
    //   onEnter: (batch) =>
    //     gsap.from(batch, {
    //       x: 100,
    //       opacity: 0,
    //       color: "#0ff",
    //     }),
    // });
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
      if (
        this.percentage == 100 &&
        !this.scrolledToBottomPage &&
        !this.isEnteringNextProject
      ) {
        this.scrolledToBottomPage = true;
        EventBus.$emit("cursor-deactive");
      }
    },
    observeSections() {
      // try {
      //   this.sectionObserver.disconnect();
      // } catch (error) {
      //   console.log(error);
      // }

      const options = {
        rootMargin: "-32px 0px",
        threshold: 0,
      };
      this.sectionObserver = new IntersectionObserver(
        this.sectionObserverHandler,
        options
      );

      // Observe each section
      const sections = document.querySelectorAll(".section");
      sections.forEach((section) => {
        this.sectionObserver.observe(section);
      });
    },
    sectionObserverHandler(entries) {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;
          if (this.$route.hash != `#${sectionId}`) {
            this.$router.replace({
              path: this.$route.path,
              hash: `#${sectionId}`,
            });
          }
        }
      }
    },
    onClickScrollToTopIcon() {
      if (this.percentage >= 95) {
        const pageScroller = document.querySelector(".page-container");
        pageScroller.scrollTo({ top: 0, behavior: "smooth" });
      }
    },
    onEnterProject(path) {
      if (path) {
        EventBus.$emit("cursor-active", "right", "Go");
      }
    },
    onLeaveProject(path) {
      if (path) {
        EventBus.$emit("cursor-deactive");
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
    skillsLength() {
      return this.skills.length;
    },
    projectsLength() {
      return this.projects.length;
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Source+Code+Pro:ital,wght@1,500&display=swap");

*::-webkit-scrollbar {
  display: none;
}

.page-container {
  display: inline-flex;
  flex-direction: column;
  overflow-y: scroll;
}

.section {
  width: 100%;
  position: relative;
}
.section:nth-child(1) {
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  align-items: center;
}

.home-title {
  padding: 160px 0 32px 0;
  width: calc(100% - 256px);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.home-title span:nth-child(1) {
  line-height: 64px;
  font-size: 16px;
  font-style: italic;
  color: #0ff;
  word-spacing: 0.5em;
}
.home-title span:nth-child(2) {
  line-height: 64px;
  font-size: 64px;
  font-family: "Source Code Pro", monospace;
  color: rgba(255, 255, 255, 0.9);
}
.home-title span:nth-child(3) {
  font-size: 64px;
  font-weight: 500;
  font-style: italic;
  color: rgba(255, 255, 255, 0.7);
}
.home-title span:nth-child(4) {
  margin: 16px 0 0 0;
  font-size: 16px;
  font-style: italic;
  color: rgba(255, 255, 255, 0.7);
}

.home-desc {
  display: flex;
  justify-content: center;
}
.home-desc span {
  font-size: 2vh;
  letter-spacing: 0.2em;
  text-align: center;
}

.divider {
  width: calc(100% + 64px);
  height: 1px;
  min-height: 1px;
  position: absolute;
  bottom: 0;
  left: -32px;
  background: #1f1f1f;
}

.about-content {
  margin: 0 128px 0 128px;
  width: calc(100% - 256px);
  display: inline-flex;
  flex-direction: column;
}

.about-content p {
  margin: 8px 0;
  font-size: 16px;
  color: rgba(255, 255, 255, 0.7);
}

.highlight-text {
  font-weight: 500;
  color: rgba(0, 255, 255, 0.9);
}

.section:nth-child(2),
.section:nth-child(3),
.section:nth-child(4),
.section:nth-child(5) {
  display: inline-flex;
  flex-direction: column;
  justify-content: flex-start;
}

.exp-row,
.exp-row-reverse {
  margin: 0 128px 64px 128px;
  width: calc(100% - 256px);
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
.exp-row-right-reverse .exp-title,
.exp-row-right-reverse .exp-name,
.exp-row-right-reverse .exp-location {
  align-self: flex-end;
  align-items: flex-end;
  text-align: right;
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
.exp-row-left .exp-desc,
.exp-row-right-reverse .exp-desc {
  text-align: right;
}
.exp-row-right .exp-desc,
.exp-row-left-reverse .exp-desc {
  text-align: left;
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
}
.exp-row-circle::before {
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

.section-header {
  padding: 72px 32px 32px 32px;
  position: sticky;
  top: 0;
  display: inline-flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-end;
  mix-blend-mode: difference;
  pointer-events: none;
  z-index: 1;
}

.section-header span {
  font-weight: 500;
  font-style: italic;
  letter-spacing: 0.2em;
}

.section-header span:nth-child(1) {
  margin: 0 16px 0 32px;
  font-size: 16px;
  line-height: 16px;
  color: rgba(0, 255, 255, 0.9);
}

.section-header span:nth-child(2) {
  font-size: 32px;
  line-height: 32px;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.9);
}

.table-row {
  margin: 0 128px;
  padding: 32px 0;
  width: calc(100% - 256px);
  display: inline-flex;
  flex-direction: row;
  position: relative;
}

.table-left {
  width: 50%;
  display: inline-flex;
  align-items: center;
}
.table-left span:nth-child(1) {
  margin-right: 16px;
}
.table-left span:nth-child(2) {
  font-size: 16px;
}

.table-right {
  padding: 0 0 0 64px;
  width: 50%;
  max-height: 124px;
  display: inline-flex;
  flex-direction: column;
  justify-content: flex-start;
  flex-wrap: wrap;
}

.pointer {
  cursor: pointer;
}

.project-row:hover .table-left {
  color: #0ff;
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
.scroll-to-top-icon:hover {
  color: rgba(0, 255, 255, 0.9);
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
  margin: 0 0 0 128px;
  padding: 0 0 64px 0;
  width: 50%;
  display: inline-flex;
  flex-direction: column;
  justify-content: flex-start;
}
.contact-content p {
  font-size: 16px;
  color: rgba(255, 255, 255, 0.7);
}
.contact-content a {
  font-weight: 500;
  text-decoration: underline;
  color: rgba(0, 255, 255, 0.9);
  cursor: pointer;
}

#footer {
  padding: 48px 128px 32px 128px;
  height: auto;
  display: inline-flex;
  flex-direction: row;
  background: #1f1f1f;
}
.footer-content {
  width: 100%;
  display: flex;
  flex-direction: row;
}
.footer-col {
  width: 33.33%;
  display: flex;
  flex-direction: column;
}
.footer-col span {
  margin: 4px 0;
}
.footer-col span:nth-child(1) {
  font-size: 24px;
  font-weight: 500;
}
.footer-col span a {
  font-weight: 500;
  text-decoration: underline;
  color: rgba(255, 255, 255, 0.9);
  transition: 0.35s;
  cursor: pointer;
}
.footer-col span a:hover {
  color: rgba(0, 255, 255, 0.9);
}

@media only screen and (max-width: 768px) {
  .home-title {
    width: calc(100% - 128px);
  }

  .exp-title {
    font-size: 24px;
  }

  .about-content {
    margin: 0 64px;
    width: calc(100% - 128px);
  }

  .contact-content {
    margin: 0 64px;
    width: calc(100% - 128px);
  }

  #footer {
    padding: 16px 64px;
  }
  .footer-content {
    flex-direction: column;
  }
  .footer-col {
    margin: 8px 0;
  }

  .exp-row,
  .exp-row-reverse {
    margin: 0 64px 64px 64px;
    width: calc(100% - 128px);
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

  .table-row {
    margin: 0 64px;
    padding: 32px 0;
    width: calc(100% - 128px);
  }
  .table-right {
    padding: 0 0 0 32px;
  }
}

@media only screen and (max-width: 576px) {
  .home-title {
    margin: 0 32px;
    width: calc(100% - 64px);
  }

  .section-header {
    padding: 72px 0 32px 0;
  }

  .section-header span:nth-child(2) {
    font-size: 24px;
    line-height: 24px;
  }

  .home-desc {
    margin: 0 64px;
  }

  .about-content {
    margin: 0 32px;
    width: calc(100% - 64px);
    font-size: 20px;
  }

  .table-row {
    margin: 0 32px;
    width: calc(100% - 64px);
  }

  .exp-row,
  .exp-row-reverse {
    margin: 0 0 0 16px;
    padding: 32px 16px;
    width: 100%;
    flex-direction: column-reverse;
    border-bottom: 1px solid #171717;
  }

  .exp-content {
    padding: 16px;
  }

  .exp-row-left,
  .exp-row-right-reverse,
  .exp-row-right,
  .exp-row-left-reverse {
    margin: 8px 0;
    width: calc(100% - 32px);
    align-items: flex-start;
  }

  .exp-row-right-reverse .exp-title,
  .exp-row-right-reverse .exp-name,
  .exp-row-right-reverse .exp-location {
    align-self: flex-start;
    align-items: flex-start;
    text-align: left;
  }

  .exp-row-left .exp-desc {
    text-align: left;
  }

  .exp-row-left,
  .exp-row-left-reverse {
    font-size: 16px;
    font-style: italic;
  }

  .vertical-line,
  .exp-row-circle {
    display: none;
  }

  .table-right {
    padding: 0;
    max-height: none;
  }

  .table-left span:nth-child(1) {
    margin-right: 8px;
    max-width: 112px;
  }

  .contact-content {
    margin: 0 32px;
    width: calc(100% - 64px);
  }

  #footer {
    padding: 32px;
  }

  .footer-col {
    width: 100%;
  }
}
</style>
