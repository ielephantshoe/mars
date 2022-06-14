import { css, Global } from "@emotion/react"
import Head from "next/head"
import { useRouter } from "next/router"
import { ThemeProvider } from "theme-ui"
import theme from "../lib/theme"
import "../styles/globals.css"
export default function App({ Component, pageProps }) {
  const router = useRouter()

  return (
    <ThemeProvider theme={theme}>
      <Global
        styles={css`
          @font-face {
            font-family: "IntelOneBold";
            src: local("IntelOneBold"),
              url(${router.basePath}/fonts/intelone-display-bold.otf)
                format("opentype");
            font-weight: bold;
          }
          @font-face {
            font-family: "IntelOneRegular";
            src: local("IntelOneRegular"),
              url(${router.basePath}/fonts/IntelOneDisplay-Regular.ttf)
                format("truetype");
            font-weight: normal;
          }
        `}
      />
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
        />
      </Head>

      <Component {...pageProps} />
    </ThemeProvider>
  )
}
