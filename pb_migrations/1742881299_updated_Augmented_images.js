/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1815217836")

  // update collection data
  unmarshal({
    "name": "augmented"
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1815217836")

  // update collection data
  unmarshal({
    "name": "Augmented_images"
  }, collection)

  return app.save(collection)
})
