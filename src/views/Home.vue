<template>
  <div class="page-container dark" @scroll="onPageScroll">
    <div class="section full-page dark" id="home">
      <div class="home-title">
        <span>PF21</span>
      </div>
      <div class="home-desc">
        <span>scroll down to check for more details &#8595;</span>
      </div>
      <div class="vertical-bottom-left">
        <span>Jason Chen</span>
      </div>
    </div>
    <div class="section dark" id="about">
      <div class="section-header">
        <div class="section-logo"></div>
        <span>About</span>
      </div>
      <div class="about-content">
        <span>Greetings, great to see you here!!</span>
        <span>My name is Jason Chen, born in 1997, from Hsinchu, Taiwan.</span>
        <span>I majored in the Computer Science and Engineering.</span>
        <span>I like making WEB, mobile APP, frontend stuffs...</span>
        <span>I am looking for a job to ehance my frontend techniques:</span>
        <span class="about-small-text"
          >&#8208; security things like router guards, tokens, etc.</span
        >
        <span class="about-small-text"
          >&#8208; utilization for smaller chunk, faster loading speed, less
          resource usage</span
        >
        <span class="about-small-text"
          >&#8208; experiene of project participation and development</span
        >
        <span class="about-small-text"
          >&#8208; super coooool animation effects!!</span
        >
      </div>
    </div>
    <div class="section dark" id="education">
      <div class="section-header">
        <div class="section-logo"></div>
        <span>Education</span>
      </div>
      <div class="vertical-line"></div>
      <div
        v-for="(education, i) in this.educations"
        :key="education + i"
        :class="i % 2 == 0 ? 'exp-row-reverse' : 'exp-row'"
      >
        <div :class="i % 2 == 0 ? 'exp-row-left-reverse' : 'exp-row-left'">
          {{ education.startTime }} &mdash; {{ education.endTime }}
        </div>
        <div :class="i % 2 == 0 ? 'exp-row-right-reverse' : 'exp-row-right'">
          <div class="exp-title">{{ education.name }}</div>
          <div class="exp-location">{{ education.location }}</div>
          <div class="exp-desc">
            <span v-for="(desc, j) in education.desc" :key="desc + j">
              &#8208; {{ desc }}
            </span>
          </div>
        </div>
        <div class="exp-row-circle"></div>
      </div>
    </div>
    <div class="section dark" id="experience">
      <div class="section-header">
        <div class="section-logo"></div>
        <span>Experience</span>
      </div>
      <div class="vertical-line" />
      <div
        v-for="(experience, i) in this.experiences"
        :key="experience + i"
        :class="i % 2 != 0 ? 'exp-row-reverse' : 'exp-row'"
      >
        <div :class="i % 2 != 0 ? 'exp-row-left-reverse' : 'exp-row-left'">
          {{ experience.startTime }} &mdash; {{ experience.endTime }}
        </div>
        <div :class="i % 2 != 0 ? 'exp-row-right-reverse' : 'exp-row-right'">
          <div class="exp-title">{{ experience.name }}</div>
          <div class="exp-location">{{ experience.location }}</div>
          <div class="exp-desc">
            <span v-for="(desc, j) in experience.desc" :key="desc + j">
              &#8208; {{ desc }}
            </span>
          </div>
        </div>
        <div class="exp-row-circle"></div>
      </div>
    </div>
    <div class="section dark" id="core-skills">
      <div class="section-header">
        <div class="section-logo"></div>
        <span>Core Skills</span>
      </div>
      <div v-for="(skill, i) in this.skills" :key="skill + i" class="table-row">
        <div class="table-left">{{ skill.name }}</div>
        <div class="table-right">
          <span v-for="(s, j) in skill.desc" :key="s + j">
            &#8208; {{ s }}
          </span>
        </div>
        <div v-if="i != skillsLength - 1" class="divider" />
      </div>
    </div>
    <div class="section dark" id="projects">
      <div class="section-header">
        <div class="section-logo"></div>
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
    <div class="section dark" id="footer">
      <div class="table-row">
        <div class="table-left">
          <div class="footer-cols">
            <div class="footer-col">
              <span class="footer-col-title">Links</span>
              <span class="footer-col-item" @click="onClickLink('about')"
                >About</span
              >
              <span class="footer-col-item" @click="onClickLink('education')"
                >Education</span
              >
              <span class="footer-col-item" @click="onClickLink('experience')"
                >Experience</span
              >
              <span class="footer-col-item" @click="onClickLink('core-skills')"
                >Core Skills</span
              >
              <span class="footer-col-item" @click="onClickLink('projects')"
                >Projects</span
              >
            </div>
          </div>
        </div>
        <div class="table-right">
          <div class="footer-logo">
            <span>PF21</span>
          </div>
          <span>jasonwhc0820@gmail.com</span>
        </div>
      </div>
    </div>
    <ProgressRing :percentage="this.percentage" />
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

import EventBus from "../eventBus";

const ProgressRing = () =>
  import(/* webpackPrefetch: true */ "@/components/ProgressRing.vue");

export default {
  components: {
    ProgressRing,
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
          startTime: "September 2021",
          endTime: "February 2022",
          location: "Aviation Police Bureau, Taoyuan",
          desc: [
            "Duty service in the Administration Section.",
          ],
        },
        {
          name: "Teaching Assistant",
          startTime: "September 2019",
          endTime: "August 2021",
          location: "Yuan Ze University, Taoyuan",
          desc: [
            "Maitain and develope course used website for collecting learning data of students which written in ASP.NET and SSMS.",
            'Tutor of the "Basic Programming" and "Windows Form Programming" course.',
          ],
        },
        {
          name: "Part-Time",
          startTime: "July 2019",
          endTime: "August 2019",
          location: "Ardomus Networks Corporation, Hsinchu",
          desc: ["WEB development in Angular."],
        },
        {
          name: "Intern",
          startTime: "January 2018",
          endTime: "January 2019",
          location: "Ardomus Networks Corporation, Hsinchu",
          desc: [
            "Mobile APP development in native Android.",
            "WEB development in Angular.",
            "Shell script for faster project building and deployment.",
          ],
        },
        {
          name: "Teaching Assistant",
          startTime: "January 2018",
          endTime: "January 2019",
          location: "Trend Education, Taipei",
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
    this.observeSections();

    if (this.$route.hash) {
      const pageContainer = document.querySelector(".page-container");
      gsap.to(pageContainer, { scrollTo: `${this.$route.hash}` });
    }

    EventBus.$emit("cursor-active", "down", "scroll");

    ScrollTrigger.batch(".about-content span", {
      scroller: ".page-container",
      start: "top bottom",
      onEnter: (batch) =>
        gsap.from(batch, {
          x: 100,
          opacity: 0,
          color: "#0ff",
          duration: 0.5,
        }),
    });

    ScrollTrigger.batch(".vertical-line", {
      scroller: ".page-container",
      start: "top bottom",
      onEnter: (batch) =>
        gsap.from(batch, {
          height: 0,
          duration: 3,
        }),
    });

    ScrollTrigger.batch(".exp-title", {
      scroller: ".page-container",
      start: "top bottom",
      onEnter: (batch) =>
        gsap.from(batch, {
          x: 100,
          opacity: 0,
          color: "#0ff",
          duration: 0.5,
        }),
    });

    ScrollTrigger.batch(".exp-location", {
      scroller: ".page-container",
      start: "top bottom",
      onEnter: (batch) =>
        gsap.from(batch, {
          x: 100,
          opacity: 0,
          color: "#0ff",
          duration: 0.5,
          delay: 0.1,
        }),
    });

    ScrollTrigger.batch(".exp-desc", {
      scroller: ".page-container",
      start: "top bottom",
      onEnter: (batch) =>
        gsap.from(batch, {
          x: 100,
          opacity: 0,
          duration: 0.5,
          delay: 0.2,
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

    ScrollTrigger.batch(".table-right span", {
      scroller: ".page-container",
      start: "top bottom",
      onEnter: (batch) =>
        gsap.from(batch, {
          x: 100,
          opacity: 0,
          color: "#0ff",
        }),
    });

    ScrollTrigger.batch(".section-logo", {
      scroller: ".page-container",
      start: "top bottom",
      onEnter: (batch) => {
        gsap.from(batch, {
          scale: 0,
          duration: 0.35,
        });
      },
    });
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
        if (this.scrolledToBottomPage) {
          EventBus.$emit("cursor-deactive");
        } else {
          EventBus.$emit("cursor-active", "down", "Scroll");
        }
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
  margin: 32px;
  width: 360px;
  height: 360px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: repeating-linear-gradient(
    -45deg,
    transparent 0px,
    transparent 10px,
    #0ff 10px,
    #0ff 12px
  );
  background-attachment: fixed;
  cursor: default;
}
.home-title span {
  font-size: 120px;
  line-height: 120px;
  font-weight: 500;
  text-align: center;
  text-transform: uppercase;
  color: #fff;
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

.vertical-bottom-left {
  position: absolute;
  left: 48px;
  bottom: 48px;
}

.vertical-bottom-left span {
  font-size: 16px;
  font-style: italic;
  font-weight: 500;
  letter-spacing: 0.2em;
  writing-mode: vertical-lr;
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
  margin: 0 128px;
  width: calc(100% - 256px);
  display: inline-flex;
  flex-direction: column;
  font-size: 24px;
  font-style: italic;
}
.about-small-text {
  margin: 8px 0 0 48px;
  font-size: 20px;
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
  font-style: italic;
}
.exp-row-right-reverse .exp-title,
.exp-row-right-reverse .exp-desc,
.exp-row-right-reverse .exp-location {
  align-self: flex-end;
  align-items: flex-end;
  text-align: right;
}
.exp-row-right .exp-title {
  text-align: left;
}

.exp-desc {
  display: flex;
  flex-direction: column;
  font-size: 16px;
  font-style: italic;
}

.exp-location {
  margin: 0 0 16px 0;
  font-size: 14px;
  font-style: italic;
}

.exp-row-circle {
  width: 16px;
  height: 16px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #000;
  border: 2px solid #00ffff;
  border-radius: 50%;
}

.section-header {
  padding: 32px;
  position: sticky;
  top: 0;
  display: inline-flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  mix-blend-mode: difference;
  pointer-events: none;
  z-index: 1;
}

.section-header span {
  font-size: 32px;
  font-weight: 500;
  font-style: italic;
  letter-spacing: 0.2em;
  text-transform: uppercase;
}

.section-logo {
  margin-right: 16px;
  width: 24px;
  height: 24px;
  background: repeating-linear-gradient(
    -45deg,
    transparent 0px,
    transparent 5px,
    #0ff 5px,
    #0ff 6px
  );
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
  width: 50px;
  height: 50px;
  position: fixed;
  bottom: 32px;
  right: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  mix-blend-mode: difference;
  transition: 0.35s ease-in-out;
  cursor: pointer;
  z-index: 2;
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

#footer {
  padding: 64px 0 0 0;
  margin: 16px 0 0 0;
  height: auto;
  display: inline-flex;
  flex-direction: row;
  background: #1f1f1f;
}
#footer .table-left {
  max-height: none;
}
#footer .table-right {
  max-height: none;
  align-items: flex-end;
}
#footer .table-right span {
  text-align: right;
}

.footer-logo {
  margin: 0 0 16px 0;
  width: 176px;
  height: 176px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: repeating-linear-gradient(
    -45deg,
    transparent 0px,
    transparent 10px,
    #0ff 10px,
    #0ff 12px
  );
}
.footer-logo span {
  font-size: 48px;
  line-height: 48px;
  text-align: center;
  color: #fff;
}

.footer-cols {
  display: inline-flex;
  flex-direction: row;
  justify-content: flex-end;
}
.footer-col {
  display: inline-flex;
  flex-direction: column;
  justify-content: flex-start;
}
.footer-col-title {
  margin: 0 0 16px 0;
  font-size: 16px;
  line-height: 16px;
  font-weight: 500;
  text-transform: uppercase;
}
.footer-col-item {
  margin: 8px 0;
  position: relative;
  font-size: 16px;
  text-transform: uppercase;
  transition: 0.35s;
  cursor: pointer;
}
.footer-col-item::before {
  content: "";
  width: 0;
  height: 1px;
  position: absolute;
  bottom: -1px;
  left: -8px;
  transition: 0.35s ease-in-out;
  border-bottom: 1px solid #0ff;
}
.footer-col-item:hover::before {
  width: calc(100% + 16px);
}

@media only screen and (max-width: 768px) {
  .home-title {
    width: 256px;
    height: 256px;
  }
  .home-title span {
    font-size: 12vh;
  }

  .exp-title {
    font-size: 24px;
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

  .table-row {
    margin: 0 32px;
    padding: 32px 0;
    width: calc(100% - 64px);
  }
  .table-right {
    padding: 0 0 0 32px;
  }

  .vertical-bottom-left {
    left: 32px;
    bottom: 32px;
  }
}

@media only screen and (max-width: 576px) {
  .section-header span {
    font-size: 24px;
  }

  .home-desc {
    margin: 0 64px;
  }

  .about-content {
    margin: 0 32px;
    width: calc(100% - 64px);
    font-size: 20px;
  }
  .about-small-text {
    margin: 8px 0 0 32px;
    font-size: 16px;
  }

  .exp-row,
  .exp-row-reverse {
    margin: 0 0 0 16px;
    padding: 32px 16px;
    flex-direction: column;
    border-bottom: 1px solid #171717;
  }

  .exp-row-left,
  .exp-row-right-reverse,
  .exp-row-right,
  .exp-row-left-reverse {
    margin: 0;
    width: 100%;
    align-items: flex-start;
  }

  .exp-row-right-reverse .exp-title,
  .exp-row-right-reverse .exp-desc,
  .exp-row-right-reverse .exp-location {
    align-self: flex-start;
    align-items: flex-start;
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

  .footer-logo {
    width: 128px;
    height: 128px;
  }
  .footer-logo span {
    font-size: 32px;
  }
}
</style>
