import Image from "next/image";
import { Header } from "./components/header";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Header />
      <div>
      <h2 className="text-6xl leading-tight font-bold text-gray-900 mb-6 tracking-tight">
        We build <span className="text-main-orange">software</span> that
        actually works for you business
      </h2>
      </div>
    </main>
  );
}
