import React from "react";
import ProfilePage from "../components/ProfilePage";
import FadeInSection from "../components/FadeInSection";

export default function Profile() {
  return (
    <div className="app">
      <FadeInSection>
        <ProfilePage />
      </FadeInSection>
    </div>
  );
}

