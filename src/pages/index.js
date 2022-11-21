import * as React from "react"

const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 700,
}
const headingAccentStyles = {
  color: "#663399",
}

const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <h1 style={headingStyles}>
        Congratulations
        <span style={headingAccentStyles}>— you just made it. 🎉🎉🎉</span>
      </h1>
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
