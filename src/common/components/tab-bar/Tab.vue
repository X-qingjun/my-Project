<template>
  <li class="tab" :class="{active: isActive}" @click="tabAction">
    <span>{{title}}</span>
  </li>
</template>

<script>
export default {
  name: "tab-item",
  props: {
    title: String
  },
  data() {
    return {
      isActive: false,
      id: null
    };
  },
  methods: {
    tabAction() {
      this.$parent.handleTabAction(this.id);
      this.isActive = true;
    }
  }
};
</script>

<style>
.tab {
  text-align: center;
  flex: 1;
  list-style: none;
}
.tab.active {
  color: red;
}
.tab.active span {
  color: red;
}
.tab span {
  display: block;
  font-size: 12px;
  color: #5a5a5a;
}
</style>
