/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3897783817")

  // update collection data
  unmarshal({
    "name": "contact_messages"
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3897783817")

  // update collection data
  unmarshal({
    "name": "messages"
  }, collection)

  return app.save(collection)
})
