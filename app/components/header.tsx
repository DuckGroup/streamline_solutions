import { Button } from "./button";

export const Header = () => {
  return (
    <header className="flex flex-row py-8 px-12 justify-between items-center border-b-2 border-stone-900/5">
      <h1 className="font-semibold text-2xl">
        Streamline <span className="text-main-orange">Solutions</span>
      </h1>
      <Button>Boka nu</Button>
    </header>
  );
};
