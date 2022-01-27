<template>
  <div
    class="three-d-image"
    :style="{
      width: `${this.width}px`,
      height: `${(this.width / 16) * 9}px`,
      'min-width': `${this.width}px`,
      'min-height': `${(this.width / 16) * 9}px`,
    }"
  >
    <b-img-lazy
      :width="this.width"
      :height="(this.width / 16) * 9"
      :src="require(`@/static/${this.src}`)"
      :blank-color="this.dark ? '#1f1f1f' : '#fefefe'"
    />
    <div
      class="three-d-image-left"
      :style="this.dark ? 'background: #1f1f1f' : 'background: #e0e0e0'"
    ></div>
    <div
      class="three-d-image-bottom"
      :style="this.dark ? 'background: #272727' : 'background: #e8e8e8'"
    ></div>
  </div>
</template>

<script>
const BImgLazy = () =>
  import(/* webpackPrefetch: true */ "bootstrap-vue").then(
    (module) => module.BImgLazy
  );

export default {
  props: ["width", "src", "dark"],
  components: { BImgLazy },
};
</script>

<style>
.three-d-image {
  margin: 16px;
  position: relative;
  background-position: left top;
  background-size: cover;
  background-repeat: no-repeat;
  transition: 0.5s;
}

.three-d-image-left {
  width: 5px;
  height: 100%;
  position: absolute;
  top: 0;
  left: -5px;
  transform: skewY(-45deg) translateY(2.5px);
}

.three-d-image-bottom {
  width: 100%;
  height: 5px;
  position: absolute;
  bottom: -5px;
  left: 0;
  transform: skewX(-45deg) translateX(-2.5px);
}
</style>