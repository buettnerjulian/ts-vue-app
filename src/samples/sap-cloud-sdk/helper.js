import { WorkcenterSet } from "./com-sap-gateway-default-cat-api-pcwc-v-0001-service/WorkcenterSet";
import { batch } from "./com-sap-gateway-default-cat-api-pcwc-v-0001-service/BatchRequest";
import { Destination, Protocol } from "@sap-cloud-sdk/core";
import { ActiveObjectSet } from "./com-sap-gateway-default-cat-api-pcwc-v-0001-service";

const getAllWorkcenters = async function() {
  const retrieveRequests = [];
  // Create get by key request
  const request = WorkcenterSet.requestBuilder()
    .getAll()
    .top(15)
    .executeRaw()
    .then(results => {
      debugger;
      this.odata4 = results;
    })
    .catch(e => {
      debugger;
      console.log(e);
    });
  debugger;

  retrieveRequests.push(request);

  // const dest = {
  //   url: "http://localhost:8080"
  //   // proxyConfiguration: {
  //   //   host: "",
  //   //   port: 44300,
  //   //   protocol: Protocol.HTTPS
  //   // }
  // };
  // // Execute batch request combining multiple retrieve requests
  // debugger;
  // const batchResponses = await batch(...retrieveRequests).execute(dest);

  // // Error handling
  // // if (batchResponses.some(response => !response.isSuccess())) {
  // //   throw new Error("Some of the batch subrequests were not successful.");
  // // }

  // return batchResponses.reduce((wcs, response) => {
  //   debugger;
  //   console.log(wcs);
  //   console.log(response);
  // });
};
export default {
  getAllWorkcenters
};
