<template>
  <div class="row">
    <viewstatistic></viewstatistic>
  </div>
</template>
<style scoped>
</style>
<script>
export default {
  name: "allstatistic",
  components: {
    viewstatistic: require("./graph/viewstatistic").default
  },
  mounted: function() {
    $(".closestatistic").on("click", function() {
      $(".closviewstatistc").fadeOut(500);
      $(".closuserstatistc").fadeOut(500);
    });
    $(".viewstatistic").on("click", function() {
      $(".viewstatistic").fadeIn(500);
    });
  }
};
</script>
