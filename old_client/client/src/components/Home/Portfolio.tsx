import React from "react";
import { Header } from "../Header/Header";
import { HeroSection } from "./HeroSection";

export const Portfolio: React.FC = () => (
  <main className="flex flex-col py-1.5">
    <Header />
    <HeroSection />
  </main>
);
