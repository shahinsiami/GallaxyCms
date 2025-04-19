<template>
  <div class="col-6 mt-2 viewstatistic closviewstatistc">
    <div class="d-none d-lg-block">
      <div class="position-relative statistic statisticborder">
        <div class="position-absolute statisticheader"></div>
        <div class="windows-content">
          <div class="container-fluid from-width py-2">
            <div class="w-100 p-0 m-0" v-if="chartusersexdate && chartusersexvalue && render">
              <div class="px-2" id="chart">
                <apexchart type="pie" :options="chartusersexdate" :series="chartusersexvalue" />
              </div>
              <div class="form-group col-12 text-center count">
                تعداد کل کاربران
                {{chartusersexvalue[0] + chartusersexvalue[1]}}
                نفر
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
</style>
<script>
export default {
  name: "categoryform",
  data() {
    return {
      render: true
    };
  },
  watch: {
    $route(to, from) {
      this.render = false;
      setInterval(
        function() {
          this.render = true;
        }.bind(this),
        1000
      );
    },
    last_lefticon: function() {
      this.render = false;
      setInterval(
        function() {
          this.render = true;
        }.bind(this),
        1000
      );
    },
    last_leftsideactive: function() {
      this.render = false;
      setInterval(
        function() {
          this.render = true;
        }.bind(this),
        1000
      );
    },
    last_righticon: function() {
      this.render = false;
      setInterval(
        function() {
          this.render = true;
        }.bind(this),
        1000
      );
    },
    last_rightsideactive: function() {
      this.render = false;
      setInterval(
        function() {
          this.render = true;
        }.bind(this),
        1000
      );
    }
  },
  computed: {
    last_lefticon: {
      get() {
        return this.$store.state.userStore.lefticon;
      }
    },
    last_leftsideactive: {
      get() {
        return this.$store.state.userStore.leftsideactive;
      }
    },
    last_righticon: {
      get() {
        return this.$store.state.userStore.righticon;
      }
    },
    last_rightsideactive: {
      get() {
        return this.$store.state.userStore.rightsideactive;
      }
    },
    chartusersexvalue: {
      get() {
        var count = [];

        return [50, 50];
      }
    },
    chartusersexdate: {
      get() {
        return {
          labels: ["زن", "مرد"],
          responsive: [
            {
              breakpoint: 480,
              options: {
                chart: {},
                legend: {
                  position: "bottom"
                }
              }
            }
          ]
        };
      }
    }
  },
  methods: {},
  mounted: function() {},

  created() {}
};
</script>
<!--imageUploadcategory-->
<!--imagePreviewcategory-->
