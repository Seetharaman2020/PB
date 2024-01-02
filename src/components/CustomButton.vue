<template>
  <Button @click="onClick" class="button-styles" :style="cssprops">
    <slot> Button </slot>
  </Button>
</template>
<script>
export default {
  name: "Custom Button",
  props: {
    onClick: {
      type: Function,
      required: true,
    },
    customColour: {
      type: String,
      required: false,
      default: "white",
    },
  },
  computed: {
    cssprops() {
      return {
        "--button-color": this.customColour,
      };
    },
  },
};
</script>
<style lang="css" scoped>
.button-styles {
  background-color: var(--button-color);
}
</style>
