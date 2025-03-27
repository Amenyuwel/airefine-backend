/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1866213532")

  // update collection data
  unmarshal({
    "name": "uploaded_images"
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1866213532")

  // update collection data
  unmarshal({
    "name": "initial"
  }, collection)

  return app.save(collection)
})
