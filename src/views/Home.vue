<template>
  <div class="home">
    <div class="data-wrapper">
      <div class="title">{{ config.os_name }}</div>
      <div class="top-header">
        <div style="margin: 10px">
          <span style="display: inline-block; width: 2rem; margin-right: 1.1rem"
            >group:
          </span>
          <a-select
            style="width: 200px; line-height: 2rem"
            default-value="请选择group"
            size="large"
            @change="changeTable"
          >
            <a-select-option
              :value="item"
              :key="index"
              style="padding: 1rem"
              v-for="(item, index) of tableList"
            >
              {{ item }}
            </a-select-option>
          </a-select>
        </div>
        <div>
          <span
            style="display: inline-block; width: 2rem; margin-right: 1.1rem"
          >
            table:
          </span>
          <a-select
            style="width: 200px"
            default-value="请选择table"
            size="large"
            @change="changeItem"
          >
            <a-select-option
              :value="item.uid"
              :key="index"
              v-for="(item, index) of itemList"
            >
              {{ item.name }}
            </a-select-option>
          </a-select>
        </div>
        <a-button class="submit" size="large" type="primary" @click="submit">
          点击
        </a-button>
      </div>
      <div class="sales-bar">
        <div class="sales-bar-inner">
          <vue-echarts :options="options" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Home",
  data() {
    return {
      options: null,
      config: { os_name: "" },
      tableList: [],
      itemList: [],
      itemUid: "",
    };
  },
  methods: {
    changeTable(value) {
      this.itemList = this.config.table_group[value];
    },
    changeItem(value) {
      this.itemUid = value;
    },
    submit() {
      axios.get("/api/select/" + this.itemUid).then((res) => {
        this.options = res.data;
      });
    },
  },
  created() {
    axios.get("/api/table-config").then((res) => {
      this.config = res.data;
      const group = this.config.table_group;
      for (let item in group) {
        this.tableList.push(item);
      }
      axios
        .get("/api/select/" + this.config.table_group[this.tableList[0]][0].uid)
        .then((res) => {
          this.options = res.data;
        });
    });
  },
};
</script>
<style lang="scss" scoped>
.home {
  position: relative;
  height: 100%;
  width: 100%;
  .title {
    margin-top: 3rem;
    color: #fff;
    font-size: 2rem;
    font-weight: 4rem;
    text-align: center;
  }
  .top-header {
    position: relative;
    top: 1rem;
    color: #fff;
    left: -1rem;
    z-index: 10;
    width: 100%;
    height: 300px;
    padding: 50px 24px 24px;
    box-sizing: border-box;
    text-align: center;
    transform: scale(1.1);
    .sub-title {
      font-size: 36px;
      margin-top: 20px;
    }
    .date {
      font-size: 24px;
      font-weight: 300;
      color: rgba(255, 255, 255, 0.5);
      margin-top: 40px;
    }
    .submit {
      position: absolute;
      right: 1.5rem;
      top: 43%;
    }
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
    top: 14rem;
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
