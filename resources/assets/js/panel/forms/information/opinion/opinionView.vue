<template>
  <div class="content">
    <div class="row p-2">
      <div class="col-6 d-flex flex-row justify-content-center align-items-center">
      </div>
      <div class="col-6">
        <windowHeader :windowTitle="this.window.title" :windowTitleLine="this.window.titleLine"></windowHeader>
      </div>
    </div>
    <div v-if="!this.refreshPage" class="vpc_loader">
      <div class="vpc_loader_img">
        <img width="300" height="300" src="photo/module/Panel/forms/loader.gif" />
      </div>
    </div>
    <div v-if="this.refreshPage" class="container-fluid">
      <div class="row" style="direction:rtl">
                        <singleInputDisabled type="text" inputTitle="نام " v-model="data.name"></singleInputDisabled>
                        <singleInputDisabled
                          type="text"
                          inputTitle="نام خانوادگی"
                          v-model="data.family"
                        ></singleInputDisabled>
                        <singleInputDisabled type="text" inputTitle="عنوان" v-model="data.title"></singleInputDisabled>
                        <textareaInputDisabled
                          type="text"
                          inputTitle="دیدگاه"
                          v-model="data.openion"
                        ></textareaInputDisabled>
                      </div>
                    </div>
                    <!---->
                  </div>
</template>
<script>
export default {
  name: "OpinionView",
  data() {
    return {
      refreshPage: true,
      window: {
        headerid: "OpinionView",
        title: "دیدگاه ثبت شده",
        titleLine: "ارتباطات/انتقادات/انتقاد و پیشنهاد/ دیدگاه ثبت شده ",
      },
      data: {
        id: "",
        name: "",
        family: "",
        openion: "",
        title: ""
      }
    };
  },
  //model
  //compute
  //watch
  watch: {
    lastId: function() {
      this.data.id = this.lastId;
    },
    lastName: function() {
      this.data.name = this.lastName;
    },
    lastFamily: function() {
      this.data.family = this.lastFamily;
    },
    lastOpinion: function() {
      this.data.openion = this.lastOpinion;
    },
    lastTitle: function() {
      this.data.title = this.lastTitle;
    }
  },
  //watch
  computed: {
    lastId: {
      get() {
        if (this.$store.state.informationOpinion.selectOpinion.id) {
          return this.$store.state.informationOpinion.selectOpinion.id;
        } else {
          return "";
        }
      }
    },
    lastName: {
      get() {
        return this.$store.state.informationOpinion.selectOpinion.name;
      }
    },
    lastFamily: {
      get() {
        return this.$store.state.informationOpinion.selectOpinion.family;
      }
    },
    lastOpinion: {
      get() {
        return this.$store.state.informationOpinion.selectOpinion.openion;
      }
    },
    lastTitle: {
      get() {
        return this.$store.state.informationOpinion.selectOpinion.title;
      }
    }
  },
  //compute
  //method
  methods: {
    refresh() {
      (this.refreshPage = false),
        setTimeout(() => {
          this.refreshPage = true;
        }, 800);
    }
  }
  //method
};
</script>
