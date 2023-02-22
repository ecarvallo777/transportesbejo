import React from "react"
import "style.css"
import "tailwindcss/lib/css/preflight.css"
import AnimationRevealPage from "helpers/AnimationRevealPage"
import Hero from "components/hero/FullWidthWithImage"
import Features from "components/features/ThreeColSimple.js";
import TabGrid from "components/cards/TabCardGrid.js";

function App() {
  return (
    <AnimationRevealPage >
      <Hero />
      <Features />
      <TabGrid />
    </AnimationRevealPage>
  )
}

export default App