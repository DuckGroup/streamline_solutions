import { Button } from "./button";

export const Header = () => {
  return (
    <header className="flex flex-row py-4 px-4 md:px-12 justify-between items-center border-b-2 border-stone-200">
      <h1 className="font-bold text-xl">
        Streamline <span className="text-hanuman">Solutions</span>
      </h1>
      <Button>Boka nu</Button>
    </header>
  );
};
