import { Header } from "./components/header";
import { Footer } from "./components/footer";
import { Button } from "./components/button";
import { WhiteButton } from "./components/whiteButton";
import { Approach } from "./components/approach";
import { Services } from "./components/services";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Header />

      <section className="px-4 md:px-12 flex flex-col justify-center items-center gap-20 min-h-screen">
        <div>
          <div className="flex flex-col w-fit w-max-160 md:w-160 gap-4 pb-16 pt-8 items-center">
            <h2 className="text-5xl md:text-7xl leading-tight font-medium text-gray-900 tracking-tight pb-4 text-center">
              We build <span className="text-hanuman">software</span> that earns trust
            </h2>
            <p className="text-md text-center">
              No fluff, no buzzwords. Just well-crafted websites, custom
              software, and digital solutions built by people who care about
              getting it right.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-fit pt-8">
              <Button size="md">Start</Button>
              <WhiteButton size="md">See what we do</WhiteButton>
            </div>
          </div>
        </div>
          <ul className="flex gap-8 pb-32 w-fit border-t border-stone-200 pt-20">
          <li className="flex flex-col gap-2 items-center">
            <h3 className="text-4xl text-hanuman">5+</h3>
            <p className="text-center">Projects delivered</p>
          </li>
          <li className="flex flex-col gap-2 items-center">
            <h3 className="text-4xl text-hanuman">98%</h3>
            <p className="text-center">Client Retention</p>
          </li>
          <li className="flex flex-col gap-2 items-center">
            <h3 className="text-4xl text-hanuman">24h</h3>
            <p className="text-center">Response Time</p>
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
      <Services/>
      <Approach/>
      <Footer />
    </main>
  );
}
