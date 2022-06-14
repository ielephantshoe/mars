import { Flex, Box, Heading, Image, Paragraph, Button } from "theme-ui"
import { BLOCKS } from "@contentful/rich-text-types"
import { keyframes } from "@emotion/react"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { useRouter } from "next/router"
import { Link as ScrollLink } from "react-scroll"
 

const options = {
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: node => {
      const { file, description } = node.data.target.fields
      return <Image alt={description} src={file.url} />
    },
    [BLOCKS.PARAGRAPH]: (node, children) => {
      return <Paragraph>{children}</Paragraph>
    },
    [BLOCKS.HEADING_6]: (node, children) => {
      return <Heading variant="subheading">{children}</Heading>
    },
  },
}

const scrollArrowBounce = keyframes`
  0% {
    bottom: 10%;
  }

  100% {
    bottom: 8%;
  }
`

export default function Section({
  header,
  body,
  image,
  copyPosition = "left",
  learnMoreLink,
  tag,
  nextSection,
  children,
}) {
  const router = useRouter()
  return (
    <Flex
      id={tag}
      sx={{
        width: "90vw",
        height: "100vh",
        mx: "auto",
        position: "relative",
      }}>
      <Flex
        sx={{
          width: "100%",
          height: "100%",
          m: "auto",
          flexDirection: copyPosition === "left" ? "row" : "row-reverse",
        }}>
        <Flex
          sx={{
            height: "100%",
            width: "100%",
          }}>
          <Box
            sx={{
              m: "auto",
              height: "auto",
              width: "100%",
              px: ["2em", "2em", "2em", "8em"],
            }}>
            <Heading>{header}</Heading>
            <Box>{documentToReactComponents(body, options)}</Box>
            {learnMoreLink && (
              <Button
                sx={{
                  display: "inline-flex",
                  mx: "0.5em",
                  cursor: "pointer",
                }}
                onClick={handleLearnMoreClick}>
                Learn More{" "}
                <Image
                  alt={"button icon"}
                  src={`${router.basePath}/img/icon/arrow-right.svg`}
                  sx={{ my: "auto" }}
                />
              </Button>
            )}
          </Box>
        </Flex>
        <Flex
          sx={{
            height: "100%",
            width: "100%",
            //padding: "6em",
          }}>
          {image && (
            <Box
              sx={{
                width: "80%",
                height: "80%",
                m: "auto",
                backgroundImage: `url(${image.file.url})`,
                backgroundPosition: copyPosition === "left" ? "right" : "left",
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain",
              }}></Box>
          )}
          {children}
        </Flex>
      </Flex>
      {nextSection && (
        <ScrollLink
          to={nextSection}
          spy={true}
          smooth={true}
          containerId="make-a-difference-main">
          <Box
            sx={{
              position: "absolute",
              left: "50%",
              bottom: "4em",
              cursor: "pointer",
              transition: "opacity 0.2s ease",
              animationName: `${scrollArrowBounce}`,
              animationIterationCount: "infinite",
              animationTimingFunction: "ease-in-out",
              animationDuration: "1s",
              animationDirection: "alternate",
            }}>
            <Image
              alt="Scroll down arrow"
              src={`${router.basePath}/img/scroll-indicator.png`}
            />
          </Box>
        </ScrollLink>
      )}
    </Flex>
  )
}
