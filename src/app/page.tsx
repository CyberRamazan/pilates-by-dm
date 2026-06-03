import { About } from "@/components/About";
import { Benefits } from "@/components/Benefits";
import { BookingSteps } from "@/components/BookingSteps";
import { ConceptBadge } from "@/components/ConceptBadge";
import { FinalCta } from "@/components/FinalCta";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { LeadForm } from "@/components/LeadForm";
import { Services } from "@/components/Services";
import { StickyMobileCta } from "@/components/StickyMobileCta";
import { Testimonials } from "@/components/Testimonials";
import { Trainers } from "@/components/Trainers";
import { WhatsAppBlock } from "@/components/WhatsAppBlock";
import { PetalDecor } from "@/components/ui/PetalDecor";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <PetalDecor className="fixed opacity-40" />
      <div className="relative z-10">
        <ConceptBadge />
        <Header />
        <main>
          <Hero />
          <Benefits />
          <Services />
          <About />
          <Trainers />
          <BookingSteps />
          <LeadForm />
          <WhatsAppBlock />
          <Testimonials />
          <FinalCta />
        </main>
        <Footer />
        <StickyMobileCta />
        <div className="h-[4.5rem] md:hidden" aria-hidden />
      </div>
    </div>
  );
}
