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
        <div class="footer-col">
          <span>
            <a target="_blank" href="https://github.com/whc0820"
              ><b-icon icon="github"></b-icon
            ></a>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { BIcon } from "bootstrap-vue";

export default {
    components: {
        BIcon,
    }
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
    padding: 32px 64px 27px 64px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
.footer-col {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    white-space: nowrap;
    &:first-child {
        margin: 0 12vw 0 0;
    }
    &:last-child {
        margin: 0 16px 0 12vw;
        justify-content: flex-end;
    }
    & span:nth-child(1) {
        font-size: 24px;
        font-weight: 500;
    }
    & span a {
        font-weight: 500;
        text-decoration: underline;
        color: rgba(255, 255, 255, 0.9);
        transition: 0.35s;
        cursor: pointer;
        &:hover {
            color: rgba(0, 255, 255, 0.9);
        }
    }
}

@media only screen and (max-width: 768px) {
    .footer-content {
        margin: 0;
        padding: 16px 32px 28px 32px;
        flex-direction: column;
    }
    .footer-col {
        margin: 0;
        &:first-child,
        &:nth-child(2) {
            margin: 0 0 8px 0;
        }
        &:last-child {
            margin: 0;
        }
    }
}
</style>