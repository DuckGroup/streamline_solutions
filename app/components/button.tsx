type Props = {
  button_name: string;
};

export const Button = ({ children }: {
     children: React.ReactNode 
    }) => {
  return <button className="py-4 px-6 rounded-xl bg-main-orange text-white font-semibold">{ children }</button>;
};
