<template>
  <div class="section dark" id="footer">
    <div class="section-max-width">
      <div class="footer-content">
        <div class="footer-col">
          <span>Jason Chen</span>
          <span>Front-End Developer</span>
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
    </div>
  </div>
</template>

<script>
export default {
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
  padding: 48px 32px 32px 32px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

}
.footer-col {
  width: 100%;
  display: flex;
  flex-direction: column;
  white-space: nowrap;
  & span:nth-child(1) {
    font-size: 24px;
    font-weight: 500;
  }
  &:last-child {
    justify-content: flex-end;
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

@media only screen and (max-width: 768px) {
  .footer-content {
    flex-direction: column;
  }
  .footer-col {
    &:first-child {
      margin: 0 0 16px 0;
    }
  }
}

@media only screen and (max-width: 576px) {
  .footer-content {
    padding: 32px;
  }
}
</style>