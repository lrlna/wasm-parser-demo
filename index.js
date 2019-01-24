import("mongodb-schema-parser")
  .then((module) => {
    console.log(module)
    const schemaParser = new module.SchemaParser

    // fetch('./fanclub.json')
    //   .then(response => response.text())
    //   .then(data => {
    //     var now = performance.now()
    //     var json = data.split("\n")
    //     for (var i = 0; i < json.length; i++) {
    //       if (json[i] !== '') {
    //         schemaParser.write(json[i])
    //       }
    //     }
    //     var state = schemaParser.toJson()
    //     console.log("time took", performance.now() - now)
    //     console.log(state)
    //   })
  })
  .catch(e => console.log("error loading module", e))
;

