<template>
  <div class="section dark" id="footer">
    <div class="section-max-width">
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
      </div>
      <a id="github-icon" target="_blank" href="https://github.com/whc0820"
        ><b-icon icon="github"></b-icon
      ></a>
    </div>
  </div>
</template>

<script>
import { BIcon } from "bootstrap-vue";

export default {
  components: {
    BIcon,
  },
};
</script>

<style lang="scss" scoped>
@use "@/assets/scss/main.scss";

#footer {
  display: inline-flex;
  flex-direction: row;
  justify-content: center;
  background: #1f1f1f;
}
.footer-content {
  padding: 48px 64px 32px 64px;
  width: 100%;
  display: flex;
  flex-direction: row;
}
.footer-col {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  white-space: nowrap;
  & span:nth-child(1) {
    font-size: 24px;
    font-weight: 500;
  }
}

a {
  font-weight: 500;
  text-decoration: underline;
  color: rgba(255, 255, 255, 0.9);
  cursor: pointer;
  &:hover {
    color: rgba($color: #0ff, $alpha: 0.9);
  }
}

#github-icon {
  position: absolute;
  bottom: 32px;
  right: 80px;
  line-height: 24px;
  font-size: 24px;
}

@media only screen and (max-width: 768px) {
  .footer-content {
    flex-direction: column;
  }
  .footer-col {
    &:first-child {
      margin: 0 0 8px 0;
    }
  }
}

@media only screen and (max-width: 576px) {
  .footer-content {
    padding: 32px;
  }
}
</style>