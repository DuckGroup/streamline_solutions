import { Header } from "./components/header";
import { Footer } from "./components/footer";
import { Button } from "./components/button";
import { WhiteButton } from "./components/whiteButton";
import { ServiceCard } from "./components/serviceCard";
import {
  CloudCheck,
  FileCog,
  LayoutTemplate,
  MonitorCloud,
  Router,
  TabletSmartphone,
} from "lucide-react";
import { Approach } from "./components/approach";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Header />

      <section className="px-4 md:px-12 flex flex-col xl:flex-row justify-center gap-20 pt-32 pb-48 border-b border-stone-200">
        <div>
          <div className="flex flex-col w-fit w-max-160 md:w-160 gap-4 pb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight font-bold text-gray-900 tracking-tight pb-4">
              We build <span className="text-hanuman">software</span> that
              actually works for your business
            </h2>
            <p className="text-md">
              No fluff, no buzzwords. Just well-crafted websites, custom
              software, and digital solutions built by people who care about
              getting it right.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-fit">
              <Button size="md">Start</Button>
              <WhiteButton size="md">See what we do</WhiteButton>
            </div>
          </div>
        </div>
          <ul className="grid grid-cols-2 gap-x-32 gap-y-16 xl:gap-16 pb-32 w-fit border-t xl:border-t-0 xl:border-l border-stone-200 pt-20 xl:pt-0 pl-0 xl:pl-20">
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
            <h3 className="text-4xl font-bold text-hanuman">24/7</h3>
            <p>support available</p>
          </li>
        </ul>
        {/* <div className="flex flex-col gap-4 justify-end">
          <div className="bg-hanuman w-32 h-32 rounded-4xl shadow flex justify-center items-center">
            <h5 className="font-bold text-white text-center text-lg">10+ project</h5>
          </div>
          <div className="bg-hanuman/2 border-hanuman border-2 w-32 h-32 rounded-4xl shadow flex justify-center items-center">
            <h5 className="font-bold text-lg">99% client</h5>
          </div>
          <div className="bg-white w-32 h-32 rounded-4xl shadow flex justify-center items-center">
            <h5 className="text-hanuman font-bold text-center text-lg">24/7 support</h5>
          </div>
        </div> */}
      </section>
      <section className="px-4 md:px-24 flex flex-col gap-8 py-20 border-b-2 border-stone-200">
        <div className="flex flex-col gap-4 w-max-140 md:w-140">
          <h4 className="text-hanuman font-semibold">WHAT WE DO</h4>
          <h3 className="font-bold text-5xl pb-4 text-center">
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
        <Approach></Approach>
      </section>
      <Footer />
    </main>
  );
}
