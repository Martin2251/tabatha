import React from "react"
import Tabs from "../src/components/Tabs"
import Tab from "../src/components/Tabs/Tab"

function App() {
  return (
    <Tabs>
      <Tab title="Lemon">Lemon is yellow</Tab>
      <Tab title="Strawberry">Strawberry is red</Tab>
      <Tab title="Pear">Pear is green</Tab>
    </Tabs>
  )
}