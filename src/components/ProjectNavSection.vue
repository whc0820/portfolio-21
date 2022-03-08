<template>
  <div class="section dark" id="section-project-nav">
    <div class="section-max-width">
      <div class="nav-project" @click="onClickPreviousProject()">
        <span>&#8592; Previous</span>
        <span>{{ this.previousProjectName }}</span>
      </div>
      <div class="nav-project" @click="onClickNextProject()">
        <span>Next &#8594;</span>
        <span>{{ this.nextProjectName }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    "previousProjectName",
    "previousProjectPath",
    "nextProjectName",
    "nextProjectPath",
  ],
  methods: {
    onClickPreviousProject() {
      this.$router.push(this.previousProjectPath);
    },
    onClickNextProject() {
      this.$router.push(this.nextProjectPath);
    },
  },
};
</script>

<style lang="scss" scoped>
#section-project-nav {
  background: rgba($color: #000000, $alpha: 0.9);
  & .section-max-width {
    padding: 48px 32px;
    display: flex;
    flex-direction: row;
    & .nav-project {
      width: 100%;
      display: flex;
      flex-direction: column;
      cursor: pointer;
      & span:last-child {
        font-size: 48px;
        font-weight: 500;
      }
      &:hover span:last-child {
        color: #0ff;
      }
    }
  }
}

@media only screen and (max-width: 768px) {
  #section-project-nav {
    & .section-max-width {
      & .nav-project {
        & span:last-child {
          font-size: 32px;
        }
        &:last-child {
          margin: 0;
        }
      }
    }
  }
}

@media only screen and (max-width: 576px) {
  #section-project-nav {
    & .section-max-width {
      padding: 32px;
      flex-direction: column;
      & .nav-project {
        flex-direction: row-reverse;
        justify-content: space-between;
        & > span {
          &:last-child {
            line-height: 24px;
            font-size: 24px;
          }
        }
        &:first-child {
          & > span:first-child {
            text-align: end;
          }
          & > span:last-child {
            text-align: start;
          }
        }
        &:last-child {
          margin: 32px 0 0 0;
          flex-direction: row;
          & > span:first-child {
            text-align: start;
          }
          & > span:last-child {
            text-align: end;
          }
        }
      }
    }
  }
}
</style>