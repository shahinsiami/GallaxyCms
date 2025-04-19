<template>
  <div class="col-12 p-1 my-2">
    <div class="d-flex flex-row align-items-start h-100 w-100">
      <div class="vpc_datePicker_lable">
       </div>
          <date-picker
           v-bind:value="value"
            format="YYYY-MM-DD HH:mm:ss"
            class="w-100"
            v-on:input="$emit('input', $event)"
            type="datetime"
            color="#9E9E9E"
            :placeholder="inputTitle"
          ></date-picker>
    </div>
  </div>
</template>
<style lang="scss">
.vpd-icon-btn{
  display: none;
}
.vpd-input-group input {
    z-index: 100;
  width: 100%;
  height: 40px;
  border: none;
  border-radius: 10px;
  text-indent: 1%;
  font-weight: lighter;
  box-shadow: inset 2px 2px 10px 0 rgba(0, 0, 0, 0.1),
    inset -2px -2px 10px 0 rgba(255, 255, 255, 1),
    -2px -2px 2px 0 rgba(0, 0, 0, 0.1), 2px 2px 2px 0 rgba(255, 255, 255, 1);
  @include font(faSans);
}
</style>
<script>
import VuePersianDatetimePicker from "vue-persian-datetime-picker";
export default {
  components: { datePicker: VuePersianDatetimePicker },
  name: "singleInput",
  props: ["allRow", "inputTitle", "value"],
  computed: {},
  methods: {},
};
</script>
