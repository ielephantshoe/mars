/** @jsxImportSource theme-ui */
import { useState, useEffect } from "react"
import { Flex, Box, Heading, Image, Paragraph } from "theme-ui"
import { BLOCKS } from "@contentful/rich-text-types"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
const options = {
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: node => {
      const { file, description } = node.data.target.fields
      return <Image alt={description} src={file.url} />
    },
    [BLOCKS.PARAGRAPH]: (node, children) => {
      return <Paragraph>{children}</Paragraph>
    },
  },
}
export default function PageCopy({ header, body, position, width }) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])
  return (
    <Flex
      sx={{
        position: "fixed",
        width: "100%",
        height: "100%",
        zIndex: 1,
        top: 0,
        left: 0,
        opacity: mounted ? 1 : 0,
        transition: "opacity 2s ease",
      }}>
      <Box
        sx={{
          my: "auto",
          marginLeft:
            position === "left" ? ["1em", "2em", "4em", "4em"] : "auto",
          marginRight:
            position === "right" ? ["1em", "2em", "4em", "4em"] : "auto",
          paddingLeft:
            position === "left" ? ["1em", "2em", "4em", "4em"] : "auto",
          paddingRight:
            position === "right" ? ["1em", "2em", "4em", "4em"] : "auto",
          height: "60%",
          width: width || ["30%", "30%", "30%", "30%"],
        }}>
        <Heading>{header}</Heading>
        <Box>{documentToReactComponents(body, options)}</Box>
      </Box>
    </Flex>
  )
}
