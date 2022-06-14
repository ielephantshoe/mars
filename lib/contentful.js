import { fieldsParser } from "contentful-parsers"
const client = require("contentful").createClient({
  space: `${process.env.CONTENTFUL_SPACE_ID}`,
  accessToken: `${process.env.CONTENTFUL_TOKEN}`,
})

export const fetchGlobalEntry = async (type, preview = false) => {
  const entries = await client.getEntries({ content_type: type, include: 10 })
  if (entries.items) {
    return fieldsParser(entries.items[0])
  }
}

export const fetchEntries = async type => {
  const entries = await client.getEntries({ content_type: type })
  if (entries.items) return entries.items.map(item => item.fields)
}
