import { Button } from "./button";

export const Footer = () => {
  return (
    <footer className="bg-zinc-800 text-white text-center">
      <h2 className="text-4xl font-bold mb-4">
        Ready to build something great?
      </h2>

      <p className="text-gray-400 max-w-xl mx-auto mb-10">
        Let's have a quick chat about your project. No pressure, no sales pitch
        — just a conversation about how we can help.
      </p>

      <Button>Schedule a call</Button>

      <div className="mt-24 text-sm text-stone-300 bg-neutral-950 py-25">
        <p>© 2026 Streamline Solutions. Built with care in Stockholm.</p>
        <p>We're a small team making big things happen.</p>
      </div>
    </footer>
  );
};
