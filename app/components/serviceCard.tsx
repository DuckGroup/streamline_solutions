import { LayoutTemplate } from "lucide-react";
import { LucideProps } from "lucide-react";

export const ServiceCard = ({
  children,
  title,
  icon: Icon = LayoutTemplate, 
}: {
  children: React.ReactNode;
  title: string;
  icon?: React.ComponentType<LucideProps>;
}) => {
  return (
    <div className="flex flex-col gap-4 bg-hanuman/2 border-2 border-stone-200 hover:border-hanuman hover:text-hanuman transition rounded-xl p-8 min-w-64 max-w-96">
      <div className="flex flex-row items-center gap-4">
        <Icon color="#ff6b35" />
        <h3 className="text-2xl font-semibold">{title}</h3>
      </div>

      <p>{children}</p>
    </div>
  );
};