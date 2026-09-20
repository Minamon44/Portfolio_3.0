import { PageShell } from "@/components/layout/PageShell";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { EducationSection } from "@/components/sections/EducationSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <PageShell>
      <SectionContainer id="hero" full>
        <HeroSection />
      </SectionContainer>
      <SectionContainer id="projects">
        <ProjectsSection />
      </SectionContainer>
      <SectionContainer id="skills">
        <SkillsSection />
      </SectionContainer>
      <SectionContainer id="experience">
        <ExperienceSection />
      </SectionContainer>
      <SectionContainer id="education">
        <EducationSection />
      </SectionContainer>
      <SectionContainer id="contact">
        <ContactSection />
      </SectionContainer>
    </PageShell>
  );
}
