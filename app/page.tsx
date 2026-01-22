import { Header } from "./components/header";
import { Footer } from "./components/footer";
import { Button } from "./components/button";
import { WhiteButton } from "./components/whiteButton";
import { ServiceCard } from "./components/serviceCard";
import { CloudCheck, FileCog, LayoutTemplate, MonitorCloud, Router, TabletSmartphone } from "lucide-react";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Header />

      <section className="px-4 md:px-12 flex flex-col gap-8 py-20 border-b-2 border-stone-200 bg-hanuman/2">
        <div className="flex flex-col border-b-2 border-stone-200 w-fit w-max-160 md:w-160 gap-4 pb-16">
          <h2 className="text-6xl leading-tight font-bold text-gray-900 tracking-tight pb-4">
            We build <span className="text-hanuman">software</span> that
            actually works for your business
          </h2>
          <p>
            No fluff, no buzzwords. Just well-crafted websites, custom software,
            and digital solutions built by people who care about getting it
            right.
          </p>
          <div className="flex flex-row gap-4">
            <Button>Start</Button>
            <WhiteButton>See what we do</WhiteButton>
          </div>
        </div>
        <ul className="grid grid-cols-2 gap-16 pb-32 w-fit">
          <li className="flex flex-col gap-2">
            <h3 className="text-4xl font-bold text-hanuman">Fast</h3>
            <p>2-week sprints</p>
          </li>
          <li className="flex flex-col gap-2">
            <h3 className="text-4xl font-bold text-hanuman">Reliable</h3>
            <p>On-time delivery</p>
          </li>
          <li className="flex flex-col gap-2">
            <h3 className="text-4xl font-bold text-hanuman">Personal</h3>
            <p>Direct access</p>
          </li>
          <li className="flex flex-col gap-2">
            <h3 className="text-4xl font-bold text-hanuman">Personal</h3>
            <p>Direct access</p>
          </li>
        </ul>
      </section>
      <section className="px-4 md:px-12 flex flex-col gap-8 py-20 border-b-2 border-stone-200">
        <div className="flex flex-col gap-4 w-max-140 md:w-140">
          <h4 className="text-hanuman font-semibold">WHAT WE DO</h4>
          <h3 className="font-bold text-5xl pb-4">
            Software solutions that solve real problems
          </h3>
          <p>
            We&apos;re a small team that punches above its weight. Here&apos;s
            what we&apos;re really good at.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-fit">
          <ServiceCard title="Web Development" icon={LayoutTemplate}>
            Visual identities that stick. We create brands that feel distinct,
            memorable, and unmistakably yours.
          </ServiceCard>
          <ServiceCard title="Custom Software" icon={Router}>
            Tailored solutions for unique business needs. We build exactly what
            you need, nothing more.
          </ServiceCard>
          <ServiceCard title="Mobile Apps" icon={TabletSmartphone}>
            Native iOS and Android apps that feel right at home on every device.
            Smooth, intuitive, delightful.
          </ServiceCard>
          <ServiceCard title="Tech Consulting" icon={MonitorCloud}>
            Strategic advice without the corporate nonsense. Honest
            recommendations from people who build.
          </ServiceCard>
          <ServiceCard title="API Integration" icon={FileCog}>
            Connect your tools, automate your workflows. We make different
            systems talk to each other seamlessly.
          </ServiceCard>
          <ServiceCard title="Cloud Infrastructure" icon={CloudCheck}>
            Scalable, secure cloud solutions. We handle the tech so you can
            focus on growth.
          </ServiceCard>
        </div>
      </section>
      <Footer />
    </main>
  );
}
