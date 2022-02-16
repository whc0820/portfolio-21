<template>
  <b-carousel :interval="2000" class="mobile-frame-slider">
    <div class="camera">
      <div class="circle"></div>
    </div>

    <b-carousel-slide
      v-for="(path, i) in this.paths"
      :key="`${path}-${i}`"
      :img-src="
        require(`@/static/daily-idiom/daily_idiom_image${i + 1}_light.jpg`)
      "
    />
  </b-carousel>
</template>

<script>
const BCarousel = () =>
  import("bootstrap-vue").then((module) => module.BCarousel);

export default {
  props: ["paths"],
  components: {
    BCarousel,
  },
  mounted() {
    console.log(this.paths);
  },
  computed: {
    getPaths() {
      return this.paths;
    },
  },
};
</script>

<style lang="scss" scoped>
.mobile-frame-slider {
  margin: 0 0 32px 0;
  width: 223px;
  height: 408px;
  position: relative;
  align-self: center;
  border-left: 2.5px solid #1f1f1f;
  border-right: 2.5px solid #1f1f1f;
  border-top: 4px solid #1f1f1f;
  border-bottom: 4px solid #1f1f1f;
  border-radius: 10px;
  box-sizing: border-box;
  overflow: hidden;
  & .camera {
    width: 8px;
    height: 8px;
    position: absolute;
    top: 12px;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background-color: #1f1f1f;
    z-index: 1;
    & .circle {
      width: 4px;
      height: 4px;
      border: 0.1px solid rgba(255, 255, 255, 0.4);
      border-radius: 50%;
      z-index: 1;
    }
  }
}
</style>
