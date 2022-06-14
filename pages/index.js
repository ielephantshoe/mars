/** @jsxImportSource theme-ui */
import Section from "@/components/donation/Section"
import Ticker from "@/components/donation/Ticker"
import { fetchGlobalEntry } from "@/lib/contentful"
import { useTrackedValue } from "@/lib/track"
import Head from "next/head"
import { useRouter } from "next/router"
import { Flex } from "theme-ui"
function Index({ navItems, sections }) {
  const router = useRouter()
  const [value] = useTrackedValue()

  return (
    <Flex
      sx={{
        flexDirection: "column",
        minHeight: "100vh",
        alignItems: "center",
        justifyContent: "center",
        backgroundImage: `url(${router.basePath}/img/bg/dark.png)`,
        backgroundPosition: "top",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundColor: "#022D62",
        overflowY: "auto",
        overflowX: "hidden",
      }}>
      <Head>
        <title>Re:Invent</title>
        <meta name="description" content="Intel AWS City on the Cloud" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, viewport-fit=cover"
        />
      </Head>

      <main
        id="make-a-difference-main"
        sx={{
          marginTop: "10vh",
          overflowY: "scroll",
          height: "90vh",
          width: "100vw",
        }}>
        {sections.map((section, i) => (
          <Section
            key={section.tag}
            tag={section.tag}
            header={section.header}
            body={section.body}
            image={section.image}
            copyPosition={i % 2 === 0 ? "left" : "right"}
            hasScrollArrow={true}
            nextSection={
              i + 1 < sections.length ? sections[i + 1].tag : undefined
            }>
            {i === 0 && (
              <Ticker
                value={
                  Math.ceil(value?.percent * 100) < 1
                    ? 1
                    : Math.ceil(value?.percent * 100)
                }
              />
            )}
          </Section>
        ))}
      </main>
    </Flex>
  )
}

export async function getStaticProps({ req }) {
  const data = await fetchGlobalEntry("appData")

  const sections = data.donationPageSections

  return {
    props: {
      sections,
    },
  }
}

export default Index
