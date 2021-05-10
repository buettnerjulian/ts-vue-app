<template>
  <div class="detail-page">
    <main class="detail-page-content">
      <!-- <ui5-table>
        <ui5-table-column>
          <ui5-label class="table-column-header-content"
            >Inspection Lot</ui5-label
          >
        </ui5-table-column>

        <ui5-table-column>
          <ui5-label class="table-column-header-content">Operation</ui5-label>
        </ui5-table-column>

        <ui5-table-column>
          <ui5-label class="table-column-header-content"
            >User Field Char 1</ui5-label
          >
        </ui5-table-column>

        <ui5-table-column>
          <ui5-label class="table-column-header-content"
            >User Field Char 2</ui5-label
          >
        </ui5-table-column>

        <ui5-table-row :key="item.Id" v-for="item of odata4">
          <ui5-table-cell>
            <ui5-label class="table-cell-content">
              <b>{{ item.InspLotNumber }}</b>
            </ui5-label>
          </ui5-table-cell>
          <ui5-table-cell>
            <span class="table-cell-content">{{
              item.InspOperationNumber
            }}</span>
          </ui5-table-cell>
          <ui5-table-cell>
            <span class="table-cell-content">{{ item.UserFieldChar18 }}</span>
          </ui5-table-cell>
          <ui5-table-cell>
            <span class="table-cell-content">{{ item.UserFieldChar10 }}</span>
          </ui5-table-cell>
        </ui5-table-row>
      </ui5-table> -->
      <el-table :data="odata4" style="width: 100%">
        <el-table-column prop="InspLotNumber" label="Date" width="180">
        </el-table-column>
        <el-table-column prop="InspOperationNumber" label="Name" width="180">
        </el-table-column>
        <el-table-column prop="UserFieldChar18" label="Address">
        </el-table-column
      ></el-table>
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { read } from "./Odata2Test";
import "@ui5/webcomponents/dist/Table";
import "@ui5/webcomponents/dist/TableCell";
import "@ui5/webcomponents/dist/TableColumn";
import "@ui5/webcomponents/dist/TableRow";
// import ElementPlus from "element-plus";
// import "element-plus/lib/theme-chalk/index.css";
// import "element-plus/lib/el-table";
// import "element-plus/lib/el-table-column";

export default defineComponent({
  data() {
    return {
      odata4: []
    };
  },
  mounted() {
    this.readData();
  },
  methods: {
    readData() {
      read().then(result => {
        result.d.results.forEach(function(v: { __metadata?: [] }) {
          delete v.__metadata;
        });
        this.odata4 = result.d.results;
      });
    }
  }
});
</script>
<style scoped></style>
