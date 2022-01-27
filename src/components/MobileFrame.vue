<template>
  <div
    class="mobile-frame-container"
    :style="{
      width: `${this.imageWidth}px`,
      height: `${this.imageHeight}px`,
      'min-width': `${this.imageWidth}px`,
      'background-image': `url('${require('@/static/' + this.imageName)}')`,
      'box-shadow': boxShadow
    }"
  >
    <div class="camera">
      <div class="circle"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["imageName", "imageWidth", "imageHeight", "dark"],
  computed: {
    boxShadow() {
      return this.dark ? '-4px 4px 4px #1f1f1f' : '-4px 4px 4px #888888';
    }
  }
};
</script>

<style>
.mobile-frame-container {
  margin: 32px;
  position: relative;
  border-left: 2.5px solid #000000;
  border-right: 2.5px solid #000000;
  border-top: 4px solid #000000;
  border-bottom: 4px solid #000000;
  border-radius: 10px;
  background-size: cover;
  background-position: top;
  background-repeat: no-repeat;
  box-sizing: border-box;
  box-shadow: -4px 4px 4px #888888;
  transform: rotateZ(-15deg);
  transition: .35s ease-in-out;
  overflow: hidden;
}

.camera {
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
  background-color: #000000;
}

.circle {
  width: 4px;
  height: 4px;
  border: 0.1px solid rgba(255, 255, 255, 0.4);
  border-radius: 50%;
}
</style>