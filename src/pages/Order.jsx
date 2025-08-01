import React from "react"
import OrderPage from "../components/OrderPage"
import FadeInSection from "../components/FadeInSection"

export default function Order() {
  return (
    <div className="app">
      <FadeInSection>
        <OrderPage />
      </FadeInSection>
    </div>
  )
}


