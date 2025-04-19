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
                        <singleInputDisabled type="text" inputTitle="سن" v-model="data.age"></singleInputDisabled>
                        <singleInputDisabled
                          type="text"
                          inputTitle="شماره تماس"
                          v-model="data.phonenumber"
                        ></singleInputDisabled>
                        <textareaInputDisabled type="text" inputTitle="آدرس" v-model="data.address"></textareaInputDisabled>
                        <textareaInputDisabled
                          type="text"
                          inputTitle="درباره من"
                          v-model="data.about"
                        ></textareaInputDisabled>
                        <singleInputDisabled
                          type="text"
                          inputTitle="موقعیت شغلی"
                          v-model="data.job_position"
                        ></singleInputDisabled>
                        <singleInputDisabled
                          type="text"
                          inputTitle="تحصیلات"
                          v-model="data.education"
                        ></singleInputDisabled>
                        <textareaInputDisabled
                          type="text"
                          inputTitle="رزومه شغلی"
                          v-model="data.job_experience"
                        ></textareaInputDisabled>
                        <textareaInputDisabled
                          type="text"
                          inputTitle="مقالات"
                          v-model="data.articles"
                        ></textareaInputDisabled>
                      </div>
                    </div>
                    <!---->
                  </div>       
</template>
<script>
export default {
  name: "employmentView",
  data() {
    return {
      refreshPage: true,
      window: {
        headerid: "employmentView",
        title: "رزومه ثبت شده",
        titleLine: "ارتباطات/استخدام/فرم ارسالی/ رزومه ثبت شده ",
      },
      data: {
        id: "",
        name: "",
        family: "",
        phonenumber: "",
        address: "",
        about: "",
        age: "",
        job_position: "",
        education: "",
        job_experience: "",
        articles: ""
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
    lastPhonenumber: function() {
      this.data.phonenumber = this.lastPhonenumber;
    },
    lastAddress: function() {
      this.data.address = this.lastAddress;
    },
    lastAbout: function() {
      this.data.about = this.lastAbout;
    },
    lastAge: function() {
      this.data.age = this.lastAge;
    },
    last_job_position: function() {
      this.data.job_position = this.last_job_position;
    },
    lastEducation: function() {
      this.data.education = this.lastEducation;
    },
    last_job_experience: function() {
      this.data.job_experience = this.last_job_experience;
    },
    lastArticles: function() {
      this.data.articles = this.lastArticles;
    }
  },
  //watch
  computed: {
    lastId: {
      get() {
        if (this.$store.state.informationEmployment.selectEmployment.id) {
          return this.$store.state.informationEmployment.selectEmployment.id;
        } else {
          return "";
        }
      }
    },
    lastName: {
      get() {
        return this.$store.state.informationEmployment.selectEmployment.name;
      }
    },
    lastFamily: {
      get() {
        return this.$store.state.informationEmployment.selectEmployment.family;
      }
    },
    lastPhonenumber: {
      get() {
        return this.$store.state.informationEmployment.selectEmployment
          .phonenumber;
      }
    },
    lastAddress: {
      get() {
        return this.$store.state.informationEmployment.selectEmployment.address;
      }
    },
    lastAbout: {
      get() {
        return this.$store.state.informationEmployment.selectEmployment.about;
      }
    },
    lastAge: {
      get() {
        return this.$store.state.informationEmployment.selectEmployment.age;
      }
    },
    last_job_position: {
      get() {
        return this.$store.state.informationEmployment.selectEmployment
          .job_position;
      }
    },
    lastEducation: {
      get() {
        return this.$store.state.informationEmployment.selectEmployment
          .education;
      }
    },
    last_job_experience: {
      get() {
        return this.$store.state.informationEmployment.selectEmployment
          .job_experience;
      }
    },
    lastArticles: {
      get() {
        return this.$store.state.informationEmployment.selectEmployment
          .articles;
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
