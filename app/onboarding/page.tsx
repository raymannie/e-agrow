import React from "react";
import { Suspense } from "react";
import OnboardingPage from "./OnboardingPage";

export default function Page() {
  return (
    <Suspense
      fallback={
        <div className="h-dvh w-full flex items-center justify-center">
          <p>Loading onboarding...</p>
        </div>
      }
    >
      <OnboardingPage />
    </Suspense>
  );
}
