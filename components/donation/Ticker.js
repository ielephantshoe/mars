/** @jsxImportSource theme-ui */
import { Flex, Box, Image, Paragraph, Text, Button } from "theme-ui"
import bezier from "bezier-easing"
import { keyframes } from "@emotion/react"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"

const getCounterFrames = value => {
  let keyframeString = ``
  const easing = bezier(0.39, 0.58, 0.57, 1)
  for (let i = 0; i <= value; i++) {
    keyframeString += `
      ${(i / value) * 100}% {
        content: '${Math.ceil(easing(i / value) * value).toString()}';
      }
    `
  }

  return keyframeString
}

const counter = value => keyframes`${getCounterFrames(value)}`
const bar = value => keyframes`
  0% {
    top: 100%;
  }

  100% {
    top: ${100 - value}%;
  }
`

export default function Ticker({ value }) {
  const router = useRouter()
  const [displayValue, setDisplayValue] = useState(0)

  useEffect(() => {
    if (value && value > 0) {
      const easing = bezier(0.39, 0.58, 0.57, 1)
      const animationLength = 3000
      for (let i = 0; i <= value; i++) {
        setTimeout(() => {
          setDisplayValue(i)
        }, easing(i / value) * 3000)
      }
    }
  }, [value])
  return (
    <Flex
      sx={{
        width: "100%",
        height: "100%",
        overflow: "visible",
        position: "relative",
        p: "5em",
      }}>
      <Image
        alt="ticker bg"
        src={`${router.basePath}/img/donation_ticker_bg.png`}
        sx={{
          position: "absolute",
          height: "150%",
          maxWidth: "unset !important",
          right: 0,
          top: "25%",
          transform: "translate(0, -25%)",
        }}
      />
      <Box
        sx={{
          m: "auto",
          position: "relative",
        }}>
        <Image
          alt="ticker image"
          src={`${router.basePath}/img/donation_ticker_image.png`}
          sx={{
            zIndex: 10,
          }}
        />
        <Box
          sx={{
            position: "absolute",
            right: "-50%",
            bottom: "-50%",
            width: "50%",
            height: "50%",
            backgroundColor: "rgba(7, 105, 180, 0.3)",
          }}></Box>
        <Box
          sx={{
            position: "absolute",
            right: "-15%",
            top: "-15%",
            width: "15%",
            height: "15%",
            backgroundColor: "rgba(7, 105, 180, 0.77)",
          }}>
          <Box
            sx={{
              position: "absolute",
              right: "-50%",
              top: "-50%",
              width: "50%",
              height: "50%",
              backgroundColor: "rgba(7, 105, 180, 0.44)",
            }}></Box>
        </Box>
        <Box
          sx={{
            position: "absolute",
            bottom: "-20%",
            left: "-25%",
            width: "20%",
            height: "20%",
            backgroundColor: "rgba(0, 199, 253, 0.7)",
          }}>
          <Flex
            sx={{
              position: "relative",
              height: "100%",
              width: "100%",
            }}>
            <Box sx={{ m: "auto" }}>
              <Text>$0</Text>
            </Box>
          </Flex>
        </Box>
        <Box
          sx={{
            position: "absolute",
            top: "-40%",
            left: "-45%",
            width: "40%",
            height: "40%",
            backgroundColor: "rgba(0, 199, 253, 0.7)",
          }}>
          <Flex
            sx={{
              position: "relative",
              height: "100%",
              width: "100%",
            }}>
            <Box
              sx={{
                position: "absolute",
                width: "30%",
                height: "30%",
                top: "-30%",
                left: "-30%",
                backgroundColor: "rgba(7, 105, 180, 1)",
              }}></Box>
            <Box sx={{ m: "auto" }}>
              <Text sx={{ fontSize: "1.5em" }}>$10k</Text>
            </Box>
          </Flex>
        </Box>
        <Box
          sx={{
            height: "100%",
            width: "5%",
            position: "absolute",
            left: "-5%",
            backgroundColor: "primary",
            top: 0,
          }}>
          {/* Ticker bar */}
          <Box
            sx={{
              position: "absolute",
              bottom: 0,
              top: "100%",
              width: "100%",
              backgroundColor: "secondary",
              animationName: `${bar(value)}`,
              animationFillMode: "forwards !important",
              animationDuration: "3s",
              animationTimingFunction:
                "cubic-bezier(0.39, 0.58, 0.57, 1) !important",
            }}>
            <Box sx={{ position: "relative", height: "100%", width: "100%" }}>
              <Box
                sx={{
                  position: "absolute",
                  top: ["-10px", "-10px", "-10px", "-15px"],
                  left: ["-20px", "-20px", "-20px", "-30px"],
                  width: ["20px", "20px", "20px", "30px"],
                  height: ["20px", "20px", "20px", "30px"],
                  backgroundImage: `url(${router.basePath}/img/ticker_arrow.png)`,
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "contain",
                }}>
                <Box
                  sx={{ position: "relative", width: "100%", height: "100%" }}>
                  <Box
                    sx={{
                      position: "absolute",
                      width: "5em",
                      left: "-6em",
                      top: "50%",
                      transform: "translate(0 , -50%)",
                    }}>
                    <div
                      sx={{
                        textAlign: "right",
                        animationFillMode: "forwards !important",
                        fontWeight: "700",
                        fontSize: ["1.3", "1.3", "1.3", "2.5em"],
                      }}>
                      {displayValue}%
                    </div>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Flex>
  )
}
