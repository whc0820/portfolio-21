<template>
  <div class="page-container">
    <span>Oops</span>
  </div>
</template>

<script>
export default {
  name: "NotFound",
  data() {
    return {
      uniforms: {
        uPointCellWidth: 0.02,
        uSpeed: 3,
      },
    };
  },
};
</script>

<style>
.page-container {
  display: flex;
  justify-content: center;
  align-items: center;
  background: 
    repeating-linear-gradient(
      0deg,
      transparent 0px,
      transparent 4px,
      #000 4px,
      #000 6px
    );
  background-clip: text;
}
span {
  font-size: 320px;
  font-style: italic;
  color: #fff;
  text-align: center;
  text-transform: uppercase;
  -webkit-text-fill-color: transparent;
}
</style>