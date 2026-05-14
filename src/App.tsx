import { AmbientBackdrop } from "./AmbientBackdrop";
import { AboutSection } from "./components/AboutSection";
import { CertificationsSection } from "./components/CertificationsSection";
import { ContactSection } from "./components/ContactSection";
import { EducationSection } from "./components/EducationSection";
import { ExperienceSection } from "./components/ExperienceSection";
import { HeroSection } from "./components/HeroSection";
import { PortfolioSection } from "./components/PortfolioSection";
import { ScrollProgressBar } from "./components/ScrollProgressBar";
import { SiteFooter } from "./components/SiteFooter";
import { SiteHeader } from "./components/SiteHeader";
import { StackSection } from "./components/StackSection";
import { profile } from "./data";
import { useCursorGlow } from "./hooks/useCursorGlow";
import { useScrollSpy } from "./hooks/useScrollSpy";
import { useThemePalette } from "./hooks/useThemePalette";

export default function App() {
  const { themeMode, setThemeMode, palette } = useThemePalette();
  const { readingProgress, activeSection, sectionActive } = useScrollSpy();
  const cursorOn = useCursorGlow();
  const profileFirstName = profile.name.split(" ")[0] ?? profile.name;

  return (
    <>
      <AmbientBackdrop />
      <ScrollProgressBar progress={readingProgress} />
      {cursorOn ? <div className="cursor-glow" aria-hidden /> : null}

      <div className="page">
        <a className="skip-link" href="#top">
          Pular para o conteúdo
        </a>
        <SiteHeader
          profileFirstName={profileFirstName}
          themeMode={themeMode}
          setThemeMode={setThemeMode}
          palette={palette}
          activeSection={activeSection}
        />

        <main id="top">
          <HeroSection />
          <AboutSection sectionActive={sectionActive} />
          <ExperienceSection sectionActive={sectionActive} />
          <EducationSection sectionActive={sectionActive} />
          <CertificationsSection sectionActive={sectionActive} />
          <PortfolioSection sectionActive={sectionActive} />
          <StackSection sectionActive={sectionActive} />
          <ContactSection />
        </main>

        <SiteFooter />
      </div>
    </>
  );
}
