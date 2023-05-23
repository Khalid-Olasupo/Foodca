import {defineConfig} from "sanity"
import {deskTool} from "sanity/desk"
import {visionTool} from "@sanity/vision"
import {schemaTypes} from "./schemas"

export default defineConfig({
  name: "default",
  title: "FoodCa",

  projectId: "iiuj9ixg",
  dataset: "production",

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
