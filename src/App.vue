<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <button @click="increment">Vuex Counter</button>
  <p>Vuex Counter (Maincomponent): {{ count }}</p>
  <ui5-tabcontainer>
    <ui5-tab text="OData V2 Sample">
      <data-table></data-table>
    </ui5-tab>
    <!-- <ui5-tab text="OData V4 Sample"> </ui5-tab> -->
    <ui5-tab text="SAP Cloud SDK Sample">
      <cloud-table></cloud-table>
    </ui5-tab>
    <ui5-tab text="Vuex Counter (Subcomponent)">
      <vuex-data></vuex-data>
    </ui5-tab>
  </ui5-tabcontainer>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import DataTable from "./samples/odata-v2-sample/Odata2Table.vue";
import CloudTable from "./samples/sap-cloud-sdk/CloudSDKTable.vue";
import "@ui5/webcomponents/dist/Tab.js";
import "@ui5/webcomponents/dist/TabContainer.js";
import { store } from "./store";
import VuexData from "./samples/vuex-sample/vuexData.vue";

export default defineComponent({
  name: "App",
  components: {
    DataTable,
    CloudTable,
    VuexData
  },
  computed: {
    count() {
      return store.state.count;
    }
  },
  methods: {
    increment() {
      store.commit("increment");
      console.log(store.state.count);
    }
  }
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
