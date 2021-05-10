import { OData } from "@odata/client";
// import * as InspPoint from "./test";

const MetaDataURL = "/sap/opu/odata/CAT/API_PCQM_SRV/$metadata";
// const prox: FetchProxy = null;
const client = OData.New({
  metadataUri: MetaDataURL
});

export async function read(): Promise<any> {
  // Query by filter
  // /CAT/API_PCQM_SRV/InspectionLotSet?$format=json&$filter=InsplotNumber eq '040000005719'
  const filter = client
    .newFilter()
    .field("InspLotNumber")
    .eqString("040000005719");

  const result = await client.newRequest({
    // ODataRequest object
    collection: "InspectionPointSet", // collection name
    params: client.newParam().filter(filter)
  });

  return result;
}
