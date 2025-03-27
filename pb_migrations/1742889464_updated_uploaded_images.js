/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1866213532")

  // remove field
  collection.fields.removeById("file945615472")

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1866213532")

  // add field
  collection.fields.addAt(2, new Field({
    "hidden": false,
    "id": "file945615472",
    "maxSelect": 99,
    "maxSize": 0,
    "mimeTypes": [],
    "name": "augmented",
    "presentable": false,
    "protected": false,
    "required": false,
    "system": false,
    "thumbs": [],
    "type": "file"
  }))

  return app.save(collection)
})
