import React from "react";
import Service from "../components/Service";
import FadeInSection from "../components/FadeInSection";
import BackToTop from '../components/BackToTop.jsx';

export default function ServicePage() {
  return (
    <div className="app">
      <FadeInSection>
        <Service />
      </FadeInSection>

       <BackToTop />
    </div>
  );
}

