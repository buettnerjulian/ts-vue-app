import { o } from "odata";

export async function read(): Promise<any> {
  const oHandler = o("/sap/opu/odata4/cat/api/default/cat/api_pcwc/0001/", {
    credentials: "include"
  });
  const data = await oHandler.get("WorkcenterSet").query({ $top: 3 });
  debugger;
  return data;
}
