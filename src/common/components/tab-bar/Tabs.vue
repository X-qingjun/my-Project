<template>
  <nav class="tabs border-top">
    <slot/>
  </nav>
</template>

<script>
export default {
  name: "tab-bar",
  props: {
    value: Number
  },
  mounted() {
    this.$children[this.value].isActive = true;
    let i = 0;
    this.$children.map(tab => {
      tab.id = i++;
    });
  },
  methods: {
    handleTabAction(id) {
      this.$children.map(com => {
        com.isActive = false;
      });
      this.$emit("input", id);
    }
  }
};
</script>

<style scoped>
.tabs {
  width: 100%;
  height: 0.49rem;
  position: absolute;
  left: 0;
  bottom: 0;
  display: flex;
  background: #fafafa;
  padding-top: 0.05rem;
  box-sizing: border-box;
}
</style>
