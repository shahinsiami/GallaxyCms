<template>
  <section class="col-12 p-1 my-2">
    <div class="vpc_input_holder position-relative">
      <div class="vpc_drop_arrow d-flex flex-row justify-content-center">
        <img
          @click="openDropDown"
          class="vpc_drop_arrow_icon"
          :class="`vpc_drop_arrow_icon_${this.listSource}`"
          src="photo/module/Panel/forms/arrowDropDwon.svg"
        />
      </div>
      <div @click="closeDropDown" v-if="this.dropStatus" class="vpc_drop_down_backgroun"></div>
      <span @click="openDropDown" class="w-100">
        <input v-model="selectDropDown" :placeholder="listName" class="vpc_input" disabled />
      </span>
      <div v-if="this.dropStatus" class="vpc_drop_list">
        <div class="vpc_drop_search_holder">
          <span class="w-100">
            <input
              placeholder="جستجو"
              @keyup="changeText"
              v-model="inputDropSearch"
              class="vpc_drop_search_input"
            />
            <label>
              <img width="20" height="20" class="img-fluid" src="photo/module/search.svg" />
              جستجو
            </label>
          </span>
        </div>
        <li
          v-for="(item,index) in this.source"
          :key="index"
          @click="selectItem(item)"
          class="vpc_drop_list_item"
        >
          <span v-if="!childItem && !selectedItem">{{item}}</span>
          <span v-if="!childItem && selectedItem  && !selectedItemTwo">{{item[selectedItem]}}</span>
          <span
            v-if="!childItem && selectedItemTwo && !selectedItemThree"
          >{{item[selectedItem]}} {{item[selectedItemTwo]}}</span>
          <span
            v-if="!childItem && selectedItemThree"
          >{{item[selectedItem]}} {{item[selectedItemTwo]}} {{item[selectedItemThree]}}</span>
          <span v-if="childItem && !childItemTow && !selectedItem">{{item[childItem]}}</span>
          <span
            v-if="childItem && !childItemTow && selectedItem  && !selectedItemTwo"
          >{{item[childItem][selectedItem]}}</span>
          <span
            v-if="childItem && !childItemTow && selectedItemTwo && !selectedItemThree"
          >{{item[childItem][selectedItem]}} {{item[childItem][selectedItemTwo]}}</span>
          <span
            v-if="childItem && !childItemTow && selectedItemThree"
          >{{item[childItem][selectedItem]}} {{item[childItem][selectedItemTwo]}} {{item[childItem][selectedItemThree]}}</span>
          <span v-if="childItem && childItemTow && !selectedItem">{{item[childItem][childItemTow]}}</span>
          <span
            v-if="childItem && childItemTow && selectedItem  && !selectedItemTwo"
          >{{item[childItem][childItemTow][selectedItem]}}</span>
          <span
            v-if="childItem && childItemTow && selectedItemTwo && !selectedItemThree"
          >{{item[childItem][childItemTow][selectedItem]}} {{item[childItem][childItemTow][selectedItemTwo]}}</span>
          <span
            v-if="childItem && childItemTow && selectedItemThree"
          >{{item[childItem][childItemTow][selectedItem]}} {{item[childItem][childItemTow][selectedItemTwo]}} {{item[childItem][childItemTow][selectedItemThree]}}</span>
        </li>
      </div>
    </div>
  </section>
</template>
<!---->
<style lang="scss">

//vpc_multiselect_input
$dropHeith: 30px;
$dropListItemHeith: 30px;
$dropListHeith: 300px;
$mainColor2: #62757f;
$itemHover: #c1d5e0;
.vpc_input {
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
.vpc_drop_down_backgroun {
position: fixed;
background-color: transparent;
width: 99vw;
height: 100vh;
top: 0;
left: 0;
z-index: 98;
}
.vpc_drop_arrow {
position: absolute;
top: 0;
left: 0px;
height: 100%;
width: 30px;
display: flex;
align-items: center;
text-align: center;
padding: 3px;
z-index: 4;
}
.vpc_drop_arrow_icon {
cursor: pointer;
width: 20px;
height: 20px;
}
.vpc_drop_search {
position: absolute;
top: 0px;
left: 0px;
height: 100%;
width: 30px;
display: flex;
align-items: center;
text-align: center;
padding: 3px;
}
.vpc_drop_list {
top: 38px !important;
position: absolute;
background-color: #fff;
top: $dropHeith;
max-height: $dropListHeith;
overflow: scroll;
width: 100%;
direction: rtl;
text-align: right;
}
.vpc_drop_list_item {
@include font(faSans);
transform: translateX(500px);
padding: 5px;
width: 100%;
height: $dropListItemHeith;
-webkit-box-shadow: 0px 2px 13px -10px rgba(0, 0, 0, 0.75);
-moz-box-shadow: 0px 2px 13px -10px rgba(0, 0, 0, 0.75);
box-shadow: 0px 2px 13px -10px rgba(0, 0, 0, 0.75);
display: flex;
align-items: center;
font-weight: 300;
cursor: pointer;
&:hover {
color: $mainColor2;
-webkit-box-shadow: 0px 2px 30px -10px $itemHover;
-moz-box-shadow: 0px 2px 30px -10px $itemHover;
box-shadow: 0px 2px 30px -10px $itemHover;
}
}

.vpc_drop_search_holder {
span {
position: relative;
display: inline-block;
}
}

.vpc_drop_search_input {
direction: rtl;
text-align: right;
display: inline-block;
width: 100%;
padding: 8px 80px 10px 10px;
@include font(faSans);
font-size: 0.9em;
color: $mainColor2;
background: $mainColor6;
border: 0;
border-radius: 3px;
outline: 0;
text-indent: 80px;
transition: all 0.3s ease-in-out;
&::-webkit-input-placeholder {
color: #efefef;
text-indent: 0;
font-weight: 300;
@include font(faSans);
}
+ label {
@include font(faSans);
font-size: 0.8em;
width: 150px;
white-space: nowrap;
text-align: center;
color: $mainColor1;
position: absolute;
transform: translateX(0);
top: 0;
right: 0;
padding: 10px 15px;
transition: all 0.3s ease-in-out;
border-top-right-radius: 5px;
border-bottom-right-radius: 5px;
overflow: hidden;
background: $mainColor2;
&:before,
&:after {
  content: "";
  position: absolute;
  right: 0;
  left: 0;
  z-index: -1;
  transition: all 0.3s ease-in-out;
}
&:before {
  width: 0px;
  height: 0px;
  background: $mainColor3;
}
&:after {
  top: 0;
  bottom: 0;
  background: $mainColor9;
}
}
}
.vpc_drop_search_input:focus,
.vpc_drop_search_input:active {
padding: 10px 10px 10px 15px;
color: mainColor4;
text-indent: 0;
background: $mainColor1;
@include shadow(0, 0, 5, 0, rgba(118, 255, 3, 0.25));
&::-webkit-input-placeholder {
color: $mainColor4;
}
+ label {
display: none;
}
}
</style>
<script>
export default {
  name: "listSelector",
  props: [
    "allRow",
    "listName",
    "listSource",
    "getSource",
    "lastValue",
    "selectedItem",
    "getAllSource",
    "selectionList",
    "selectedItem",
    "selectedItemTwo",
    "selectedItemThree",
    "childItem",
    "childItemTow",
    "selectionId"
  ],
  data() {
    return {
      selectDropDown: "",
      inputDropSearch: "",
      dropStatus: false,
      dropArrow: new this.$root.$data.gsapVpc.timeline(),
      dropItem: new this.$root.$data.gsapVpc.timeline(),
      time: "",
      data: {
        searchName: "",
      },
    };
  },
  methods: {
    openDropDown() {
      if (!this.dropStatus) {
        this.dropArrow.to(`.vpc_drop_arrow_icon_${this.listSource}`, 0.5, {
          rotation: 180,
        });
        setTimeout(() => {
          document.querySelector(".vpc_drop_list").style.zIndex = 100;
          document.querySelectorAll(".vpc_drop_list_item").forEach((item) => {
            this.dropItem.to(item, 0.1, { x: 0 });
          });
        }, 100);
      } else {
        this.dropArrow.to(`.vpc_drop_arrow_icon_${this.listSource}`, 0.5, {
          rotation: 0,
        });
        document.querySelector(".vpc_drop_list").style.zIndex = 1;
      }
      this.dropStatus = !this.dropStatus;
    },
    closeDropDown() {
      this.dropArrow.to(`.vpc_drop_arrow_icon_${this.listSource}`, 0.5, {
        rotation: 0,
      });
      this.dropItem.seek();
      document.querySelector(".vpc_drop_list").style.zIndex = 1;
      this.dropStatus = false;
      this.inputDropSearch = "";
    },
    changeText() {
      clearTimeout(this.time);
      this.data.searchName = this.inputDropSearch;
      let searchInterrupt = setTimeout(() => {
        if (this.listSource !== null) {
          this.$store.dispatch(this.listSource, this.data);
        }
      }, 800);
      this.time = searchInterrupt;
      document.querySelectorAll(".vpc_drop_list_item").forEach((item) => {
        if (
          item.innerHTML.includes(this.inputDropSearch) &&
          this.inputDropSearch !== ""
        ) {
          item.style.fontWeight = "900";
        } else {
          item.style.fontWeight = "300";
        }
      });
    },
        selectItem(item) {
      if (!this.childItem && !this.selectedItem) { this.selectDropDown = item;
      } else if (!this.childItem && this.selectedItem && !this.selectedItemTwo) { this.selectDropDown = item[this.selectedItem];
      } else if (!this.childItem && this.selectedItemTwo && !this.selectedItemThree) { this.selectDropDown = item[this.selectedItem] + " " + item[this.selectedItemTwo];
      } else if (!this.childItem && this.selectedItemThree) { this.selectDropDown = item[this.selectedItem] + " " + item[this.selectedItemTwo] + " " + item[this.selectedItemThree];
      } else if (this.childItem && !this.childItemTow && !this.selectedItem) { this.selectDropDown = item[this.childItem];
      } else if ( this.childItem && !this.childItemTow && this.selectedItem && !this.selectedItemTwo ) { this.selectDropDown = item[this.childItem][this.selectedItem];
      } else if ( this.childItem && !this.childItemTow && this.selectedItemTwo && !this.selectedItemThree ) { this.selectDropDown = item[this.childItem][this.selectedItem] + " " + item[this.childItem][this.selectedItemTwo];
      } else if (this.childItem && !this.childItemTow && this.selectedItemThree) { this.selectDropDown = item[this.childItem][this.selectedItem] + " " + item[this.childItem][this.selectedItemTwo] + " " + item[this.childItem][this.selectedItemThree];
      } else if (this.childItem && this.childItemTow && !this.selectedItem) { this.selectDropDown = item[this.childItem][this.childItemTow];
      } else if ( this.childItem && this.childItemTow && this.selectedItem && !this.selectedItemTwo ) { this.selectDropDown = item[this.childItem][this.childItemTow][this.selectedItem];
      } else if ( this.childItem && this.childItemTow && this.selectedItemTwo && !this.selectedItemThree ) { this.selectDropDown = item[this.childItem][this.childItemTow][this.selectedItem] + " " + item[this.childItem][this.childItemTow][this.selectedItemTwo];
      } else if (this.childItem && this.childItemTow && this.selectedItemThree) { this.selectDropDown = item[this.childItem][this.childItemTow][this.selectedItem] + " " + item[this.childItem][this.childItemTow][this.selectedItemTwo] + " " + item[this.childItem][this.childItemTow][this.selectedItemThree]; }
      this.$emit("selectid", item);
      this.closeDropDown();
    },
  },
  watch: {
    lastSelect: function () {
      if (this.lastSelect) {
       if (!this.childItem && !this.selectedItem) { this.selectDropDown = this.lastSelect;
      } else if (!this.childItem && this.selectedItem && !this.selectedItemTwo) { this.selectDropDown = this.lastSelect[this.selectedItem];
      } else if (!this.childItem && this.selectedItemTwo && !this.selectedItemThree) { this.selectDropDown = this.lastSelect[this.selectedItem] + " " + this.lastSelect[this.selectedItemTwo];
      } else if (!this.childItem && this.selectedItemThree) { this.selectDropDown = this.lastSelect[this.selectedItem] + " " + this.lastSelect[this.selectedItemTwo] + " " + this.lastSelect[this.selectedItemThree];
      } else if (this.childItem && !this.childItemTow && !this.selectedItem) { this.selectDropDown = this.lastSelect[this.childItem];
      } else if ( this.childItem && !this.childItemTow && this.selectedItem && !this.selectedItemTwo ) { this.selectDropDown = this.lastSelect[this.childItem][this.selectedItem];
      } else if ( this.childItem && !this.childItemTow && this.selectedItemTwo && !this.selectedItemThree ) { this.selectDropDown = this.lastSelect[this.childItem][this.selectedItem] + " " + this.lastSelect[this.childItem][this.selectedItemTwo];
      } else if (this.childItem && !this.childItemTow && this.selectedItemThree) { this.selectDropDown = this.lastSelect[this.childItem][this.selectedItem] + " " + this.lastSelect[this.childItem][this.selectedItemTwo] + " " + this.lastSelect[this.childItem][this.selectedItemThree];
      } else if (this.childItem && this.childItemTow && !this.selectedItem) { this.selectDropDown = this.lastSelect[this.childItem][this.childItemTow];
      } else if ( this.childItem && this.childItemTow && this.selectedItem && !this.selectedItemTwo ) { this.selectDropDown = this.lastSelect[this.childItem][this.childItemTow][this.selectedItem];
      } else if ( this.childItem && this.childItemTow && this.selectedItemTwo && !this.selectedItemThree ) { this.selectDropDown = this.lastSelect[this.childItem][this.childItemTow][this.selectedItem] + " " + this.lastSelect[this.childItem][this.childItemTow][this.selectedItemTwo];
      } else if (this.childItem && this.childItemTow && this.selectedItemThree) { this.selectDropDown = this.lastSelect[this.childItem][this.childItemTow][this.selectedItem] + " " + this.lastSelect[this.childItem][this.childItemTow][this.selectedItemTwo] + " " + this.lastSelect[this.childItem][this.childItemTow][this.selectedItemThree]; }
      }
    },
    newSelectList: function () {
      if (this.selectionId !== "") {
        this.$store.dispatch(this.selectionList, this.selectionId);
      }
    },
  },
  computed: {
    source: {
      get() {
        return this.getSource;
      },
    },
    lastSelect: {
      get() {
        return this.getAllSource.find(
          (item) => item.id === parseInt(this.lastValue)
        );
      },
    },
    newSelectList: {
      get() {
        return this.selectionId;
      },
    },
  },
  ///////////////////////////////////////////////////////////////////////compute
  created() {
    if (this.listSource !== null) {
      this.$store.dispatch(this.listSource);
    }
  },
};
</script>
