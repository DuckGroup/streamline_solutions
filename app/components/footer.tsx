import { Button } from "./button";

export const Footer = () => {
  return (
    <footer className="bg-zinc-800 text-white text-center w-full">
      <div className="py-12">

      <h2 className="text-4xl font-bold w-full pb-4">
        Ready to build something great?
      </h2>

      <p className="max-w-xl mx-auto pb-8">
        Let&apos;s have a quick chat about your project. No pressure, no sales
        pitch — just a conversation about how we can help.
      </p>

      <Button>Schedule a call</Button>
      </div>

      <div className="text-sm bg-stone-950 py-24">
        <p>© 2026 Streamline Solutions. Built with care in Stockholm.</p>
        <p>We&apos;re a small team making big things happen.</p>
      </div>
    </footer>
  );
};
