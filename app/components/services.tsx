import { SectionIntro } from "./sectionintro";
import { ServiceCard } from "./serviceCard";
import {
  CloudCheck,
  FileCog,
  LayoutTemplate,
  MonitorCloud,
  Router,
  TabletSmartphone,
} from "lucide-react";

export const Services = () => {
  return (
    <section className="px-4 md:px-24 flex flex-col gap-8 py-32 items-center bg-stone-50">
      <div className="max-w-350">
        <SectionIntro
          title="Software solutions that solve real problems"
          subtitle="WHAT WE DO"
        >
          We&apos;re a small team that punches above its weight. Here&apos;s
          what we&apos;re really good at.
        </SectionIntro>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-fit pt-16">
          <ServiceCard title="Web Development" icon={LayoutTemplate}>
            Custom-built platforms designed around your business logic. We
            handle everything from user interfaces to complex backend systems.
          </ServiceCard>
          <ServiceCard title="Custom Software" icon={Router}>
            Internal tools and systems that actually work the way your team
            does. Built to integrate with your existing infrastructure.
          </ServiceCard>
          {/* <ServiceCard title="Mobile Apps" icon={TabletSmartphone}>
            Native iOS and Android apps that feel right at home on every device.
            Smooth, intuitive, delightful.
          </ServiceCard> */}
          <ServiceCard title="Tech Consulting" icon={MonitorCloud}>
            Architecture reviews, technology selection, and execution planning.
            We help you make decisions that compound over time.
          </ServiceCard>
          {/* <ServiceCard title="API Integration" icon={FileCog}>
            Connect your tools, automate your workflows. We make different
            systems talk to each other seamlessly.
          </ServiceCard> */}
          <ServiceCard title="Cloud Infrastructure" icon={CloudCheck}>
            Scalable, secure cloud solutions. We handle the tech so you can
            focus on growth. We handle the tech so you can focus on growth.
          </ServiceCard>
        </div>
      </div>
    </section>
  );
};
