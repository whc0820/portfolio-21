<template>
  <a v-if="this.url" :href="this.url" target="_blank">
    <span class="material-icons"> open_in_new </span>
  </a>
</template>

<script>
export default {
  props: ["url"],
};
</script>

<style lang="scss" scoped>
a {
  padding: 6px 4px;
  position: fixed;
  top: 50%;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  background: rgba($color: #f00, $alpha: 1);
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  box-sizing: border-box;
  cursor: pointer;
  & > span {
    line-height: 24px;
    font-size: 24px;
    color: rgba($color: #fff, $alpha: 0.9);
  }

  &::before {
    content: "";
    width: 10px;
    height: 10px;
    position: absolute;
    bottom: -10px;
    left: 0;
    background: transparent;
    box-shadow: -2px -2px 0px rgba($color: #f00, $alpha: 1);
    border-top-left-radius: 50%;
  }
  &::after {
    content: "";
    width: 10px;
    height: 10px;
    position: absolute;
    top: -10px;
    left: 0;
    background: transparent;
    box-shadow: -2px 2px 0px rgba($color: #f00, $alpha: 1);
    border-bottom-left-radius: 50%;
  }

  &:hover {
    background: rgba($color: #0ff, $alpha: 1);
    &::before {
      box-shadow: -2px -2px 0px rgba($color: #0ff, $alpha: 1);
    }
    &::after {
      box-shadow: -2px 2px 0px rgba($color: #0ff, $alpha: 1);
    }
  }
}

@media only screen and (max-width: 768px) {
  a {
    padding: 4px;
    & > span {
      font-size: 20px;
    }
  }
}
</style>