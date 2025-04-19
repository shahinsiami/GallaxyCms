
<template>
  <section>
    <shopping :source="this.cart"></shopping>
    </section>
</template>
<!---->
<style>
</style>
<!---->
<script>
export default {
  name: "register",
  components: {
    shopping: require("../../../Component/inabrohg/fa/shopping").default,
  },

  data() {
    return {};
  },
  computed: {
    cart: {
      get() {
        return this.$store.state.tempClient.tempProduct;
      },
    },
  },
  created() {
    const pid = [];
    this.$store.state.tempClient.shoppingLocalStore.forEach(item => {
      pid.push(item.pid)
    });
    this.$store.dispatch('tempProduct',[JSON.stringify(pid)])
  }
};
</script>
 

 
