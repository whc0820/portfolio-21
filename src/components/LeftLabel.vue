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
  background: rgba(0, 255, 255, 0.8);
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  box-sizing: border-box;
  mix-blend-mode: difference;
  transition: 0.35s;
  cursor: pointer;
  & > span {
    line-height: 24px;
    font-size: 24px;
    color: rgba(0, 0, 0, 0.9);
  }
  &:hover {
    background: rgba(255, 0, 0, 0.8);
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