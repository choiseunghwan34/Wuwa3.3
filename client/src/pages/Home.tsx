import { useEffect, useRef } from "react";
import HeroSection from "@/components/HeroSection";
import OverviewSection from "@/components/OverviewSection";
import BlackHoleSection from "@/components/BlackHoleSection";
import AlephOneSection from "@/components/AlephOneSection";
import KeyCharactersSection from "@/components/KeyCharactersSection";
import StoryFlowSection from "@/components/StoryFlowSection";
import StoryDistinctionSection from "@/components/StoryDistinctionSection";
import Footer from "@/components/Footer";

export default function Home() {
  const overviewRef = useRef<HTMLDivElement>(null);

  const handleExplore = () => {
    overviewRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    // Add scroll animation observer
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -100px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in");
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    document.querySelectorAll(".scroll-animate").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      {/* Hero Section */}
      <HeroSection onExplore={handleExplore} />

      {/* Overview Section */}
      <div ref={overviewRef}>
        <OverviewSection />
      </div>

      {/* Black Hole Section */}
      <BlackHoleSection />

      {/* Aleph One Section */}
      <AlephOneSection />

      {/* Key Characters Section */}
      <KeyCharactersSection />

      {/* Story Flow Section */}
      <StoryFlowSection />

      {/* Story Distinction Section */}
      <StoryDistinctionSection />

      {/* Footer */}
      <Footer />
    </div>
  );
}
