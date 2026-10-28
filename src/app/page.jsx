import HeroSection from "@/components/sections/HeroSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import AboutSection from "@/components/sections/AboutSection";
import GitHubActivitySection from "@/components/sections/GitHubActivitySection";
import ScrollReveal from "@/components/ScrollReveal";
import CTA from "@/components/CTA";
import { getContributionCalendar, getContributions } from "@/lib/github";

export default async function HomePage() {
  const [contributions, calendar] = await Promise.all([getContributions(), getContributionCalendar()]);

  return (
    <div className="mx-auto max-w-3xl px-4 min-h-screen py-16">
      <HeroSection />
      <ProjectsSection />
      <ExperienceSection />
      <GitHubActivitySection contributions={contributions} calendar={calendar} />
      <AboutSection />
      <ScrollReveal>
        <CTA />
      </ScrollReveal>
    </div>
  );
}
