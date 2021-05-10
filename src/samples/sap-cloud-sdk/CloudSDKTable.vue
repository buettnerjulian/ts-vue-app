<template>
  <div class="detail-page">
    <main class="detail-page-content">
      <ui5-table>
        <ui5-table-column>
          <ui5-label class="table-column-header-content"
            >Workcenter CAT</ui5-label
          >
        </ui5-table-column>

        <ui5-table-column>
          <ui5-label class="table-column-header-content"
            >Workcenter Type</ui5-label
          >
        </ui5-table-column>

        <ui5-table-column>
          <ui5-label class="table-column-header-content">Text</ui5-label>
        </ui5-table-column>

        <ui5-table-row :key="item.Id" v-for="item of odata4">
          <ui5-table-cell>
            <ui5-label class="table-cell-content">
              <b>{{ item.workcenterCat }}</b>
            </ui5-label>
          </ui5-table-cell>
          <ui5-table-cell>
            <span class="table-cell-content">{{ item.workcenterType }}</span>
          </ui5-table-cell>
          <ui5-table-cell>
            <span class="table-cell-content">{{ item.text }}</span>
          </ui5-table-cell>
        </ui5-table-row>
      </ui5-table>
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
import helper from "./helper";
import {} from "@sap-cloud-sdk/util/dist/logger/cloud-sdk-logger";
import "@ui5/webcomponents/dist/Table";
import "@ui5/webcomponents/dist/TableCell";
import "@ui5/webcomponents/dist/TableColumn";
import "@ui5/webcomponents/dist/TableRow";
import { WorkcenterSet } from "./com-sap-gateway-default-cat-api-pcwc-v-0001-service/WorkcenterSet";
// import { Destination, Protocol } from "node_modules/@sap-cloud-sdk/core/dist";

export default defineComponent({
  data() {
    return {
      odata4: new Array<WorkcenterSet>()
      // odata4: ""
    };
  },
  mounted() {
    this.readData();
  },
  methods: {
    readData() {
      // const dest: Destination = {
      //   url: "http://localhost:8080",
      //   proxyConfiguration: {
      //     host: "domain.de",
      //     port: 44300,
      //     protocol: Protocol.HTTPS
      //   }
      // };

      // const httpResponse: HttpResponse = new WorkcenterSetRequestBuilder()
      //   .getAll()
      //   .executeRaw();
      WorkcenterSet.requestBuilder()
        .getAll()
        .top(15)
        .executeRaw({
          url: "http://localhost:8080"
        })
        .then(results => {
          debugger;
          // this.odata4 = results;
        })
        .catch(e => {
          debugger;
          console.log(e);
        });
      debugger;
      // const status = httpResponse.status;
      // const responseHeaders = httpResponse.headers;
      // const responseBody = httpResponse.data;
      // const request = httpResponse.request;
      // const xy = "";
      // const config = WorkcenterSet.requestBuilder().getAll().requestConfig;

      // const req = WorkcenterSet.requestBuilder()
      //   .getAll()
      //   .top(15).execute;

      // WorkcenterSet.requestBuilder().
      //   .getAll()
      //   .top(15)
      //   .execute(dest)
      //   .then(results => {
      //     debugger;
      //     this.odata4 = results;
      //   })
      //   .catch(e => {
      //     debugger;
      //     console.log(e);
      //   });
      // debugger;
      // helper.getAllWorkcenters();
    }
  }
});
</script>
<style scoped></style>
