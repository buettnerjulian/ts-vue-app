/* eslint-disable @typescript-eslint/no-var-requires */
const gen = require("@sap-cloud-sdk/generator");
const fs = require("fs");
const http = require("http");

// Create your options, adapt the input & output directory as well as the package name according to your setup.
const inputDir =
  "C:/Development/Vue/vue3-typescript/src/samples/sap-cloud-sdk/metadata";
const outputDir =
  "C:/Development/Vue/vue3-typescript/src/samples/sap-cloud-sdk";

// Create your project datastructure with all sourcefiles based on your options
const generatorConfig = {
  forceOverwrite: true,
  generateJs: false,
  useSwagger: false,
  writeReadme: false,
  clearOutputDir: false,
  generateNpmrc: false,
  generateTypedocJson: false,
  generatePackageJson: false,
  generateCSN: false,
  sdkAfterVersionScript: false,
  s4hanaCloud: false,
  serviceMapping:
    "C:/Development/Vue/vue3-typescript/src/samples/sap-cloud-sdk/metadata/service-mapping.json"
};

const feedURL =
  "http://user:pass@domain.de:8000/sap/opu/odata4/cat/api/default/cat/api_pcwc/0001/$metadata";

http
  .get(feedURL, function(res) {
    res.pipe(
      fs
        .createWriteStream(
          "./src/samples/sap-cloud-sdk/metadata/layout-metadata.xml"
        )
        .on("close", function() {
          gen
            .generate({
              ...generatorConfig,
              inputDir,
              outputDir
            })
            .then(function() {
              try {
                fs.unlinkSync(
                  "./src/samples/sap-cloud-sdk/metadata/layout-metadata.xml"
                );
                //file removed
              } catch (err) {
                console.error(err);
              }
            });
        })
    );
    console.log("Got response: " + res);
  })
  .on("error", function(e) {
    console.log("Got error: " + e.message);
  });
