<template>
  <div class="container">
    <h1>Dashboard</h1>
    <div class="buttons">
      <v-button :onClick="buttonClickYes" customColour="red">Yes</v-button>
      <v-button :onClick="buttonClickNo" customColour="yellow">No</v-button>
    </div>
  </div>
</template>
<script>
import CustomButton from "@/components/CustomButton.vue";

export default {
  name: "Dashboard",
  components: {
    "v-button": CustomButton,
  },
  methods: {
    buttonClickYes() {
      console.log("button clicked yes");
    },
    buttonClickNo() {
      console.log("button clicked no");
    },
  },
};
</script>
<style>
.buttons {
  display: flex;
  flex-direction: "row";
  gap: 10px;
  justify-content: center;
}

.v-card-style {
  display: flex;
  flex-direction: row;
  gap: 10px;
}
</style>
