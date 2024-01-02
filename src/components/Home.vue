<template>
  <img
    alt="Vue logo"
    src="@/assets/people-bench-logo.svg"
    style="width: 600px"
  />
  <Chart />
</template>
<script>
import Chart from "@/components/Chart.vue";
export default {
  name: "Home",
  components: {
    Chart,
  },
};
</script>
<style lang="css">
img {
  margin-top: 10px;
}
</style>
