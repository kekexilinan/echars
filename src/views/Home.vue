<template>
  <div class="home">
    <div class="nav" style="width: 2.2rem">
      <a-button
        type="primary"
        style="margin-bottom: 16px; float: right; margin-right: 0.3rem"
        @click="toggleCollapsed"
      >
        <a-icon :type="collapsed ? 'menu-unfold' : 'menu-fold'" />
      </a-button>
      <a-menu mode="vertical" theme="dark" v-if="collapsed">
        <a-menu-item v-for="(list, index) in lists" :key="index">
          <!-- <a-icon type="pie-chart" /> -->
          <span @click="change(index)">{{ list.name }}</span>
        </a-menu-item>
      </a-menu>
    </div>
    <div class="data-wrapper">
      <top-header />
      <div class="sales-bar">
        <div class="sales-bar-inner">
          <vue-echarts :options="options" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import TopHeader from "../components/TopHeader/index";
// import SalesBar from "../components/SalesBar/index";
// import SalesLine from "../components/SalesLine/index";

// import SalesPie from "../components/SalesPie/index";
// import SalesMap from "../components/SalesMap/index";
// import SalesSun from "../components/SalesSun/index";
// import SalesRadar from "../components/SalesRadar/index";
import list from "../unit/config.json";
// import request from "../request";
export default {
  name: "Home",
  components: {
    TopHeader,
    // SalesBar,
    // SalesLine,
    // SalesPie,
    // SalesMap,
    // SalesSun,
    // SalesRadar,
  },
  data() {
    return {
      collapsed: false,
      showNum: 1,
      lists: list,
      options: list[0].options,
    };
  },
  methods: {
    change: function (index) {
      this.options = this.lists[index].options;
    },
    toggleCollapsed() {
      this.collapsed = !this.collapsed;
    },
  },
  mounted() {
    this.options = list[0].options;
  },
};
</script>
<style lang="scss" scoped>
.home {
  position: relative;
  height: 100%;
  .nav {
    position: fixed;
    top: 0;
    right: 0;
    z-index: 2;
  }
  .data-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 1336px;
    z-index: 1;
    background-image: url("//datav.oss-cn-hangzhou.aliyuncs.com/uploads/images/44b2ad11c37339db11f8ca5d59c5b31c.jpg");
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }
  .sales-bar {
    position: absolute;
    top: 300px;
    left: 0;
    z-index: 10;
    width: 100%;
    height: 650px;
    padding: 25px 25px 0;
    box-sizing: border-box;

    .sales-bar-inner {
      width: 100%;
      height: 100%;
      background: rgba(255, 255, 255, 0.05);
    }
  }
}
</style>
