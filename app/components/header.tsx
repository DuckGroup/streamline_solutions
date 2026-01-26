import { Button } from "./button";

export const Header = () => {
  return (
    <header className="flex py-4 px-4 md:px-12 justify-between items-center border-b border-stone-100 bg-white/90 sticky backdrop-blur top-0 z-10 w-full">
      <h1 className="font-medium text-xl">
        Streamline <span className="text-hanuman">Solutions</span>
      </h1>
      <Button size="sm">Boka nu</Button>
    </header>
  );
};
