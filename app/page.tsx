import { Header } from "./components/header";
import { Footer } from "./components/footer";
import { Button } from "./components/button";
import { WhiteButton } from "./components/whiteButton";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Header />
      
      <section className="px-4 md:px-12 flex flex-col gap-8 py-20 border-b-2 border-stone-200">
        <div className="flex flex-col border-b-2 border-stone-200 w-fit w-max-160 md:w-160 gap-4 pb-16">
        <h2 className="text-6xl leading-tight font-bold text-gray-900 tracking-tight pb-4">
          We build <span className="text-hanuman">software</span> that actually
          works for your business
        </h2>
        <p>
          No fluff, no buzzwords. Just well-crafted websites, custom software,
          and digital solutions built by people who care about getting it right.
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
      <div></div>
      <Footer />
    </main>
  );
}
