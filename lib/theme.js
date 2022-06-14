const theme = {
  breakpoints: ["30em", "52em", "64em"],
  fonts: {
    body: '"IntelOneRegular", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    heading: "inherit",
    monospace: '"IntelOneRegular",Menlo, monospace',
  },
  colors: {
    text: "#FFFFFF",
    primary: "#0068B5",
    secondary: "#00C7FD",
    success: "#03D65C",
    background: "white",
    muted: "#F2F2F2",
    danger: "#FF6C00",
  },
  text: {
    heading: {
      fontWeight: 400,
      fontSize: ["1.2em", "1.2em", "1.2em", "4vh"],
      my: ["1em", "0.5em", "0.5em", "0.25em"],
    },
    subheading: {
      fontWeight: 700,
      fontSize: ["0.6em", "0.6em", "0.6em", "3vh"],
      color: "secondary",
      lineHeight: ["1.3em", "1.3em", "1.3em", "1.5em"],
      my: ["1em", "0.5em", "0.5em", "0.25em"],
    },
    paragraph: {
      fontWeight: 400,
      fontSize: ["0.5em", "0.5em", "0.6em", "2.2vh"],
      lineHeight: ["1.3em", "1.3em", "1.3em", "1.5em"],
      py: ["0.5em", "0.5em", "1em", "1em"],
    },
    legal: {
      fontWeight: 400,
      fontSize: [
        "0.3em !important",
        "0.3em !important",
        "0.3em !important",
        "1.5vh !important",
      ],
      lineHeight: [
        "1.4em !important",
        "1.4em !important",
        "1.4em !important",
        "1.3em !important",
      ],
      py: ["0.5em", "0.5em", "1em", "1em"],
    },
  },
  links: {
    color: "secondary",
  },
  buttons: {
    primary: {
      borderRadius: "0px",
      fontSize: ["0.5em", "0.5em", "0.6em", "2vh"],
      px: "0.8em",
      py: "0.5em",
    },
  },
}

export default theme
