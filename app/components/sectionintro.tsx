export const SectionIntro = ({
    title,
    subtitle,
    children,

}: {
    title: string,
    subtitle: string,
    children: React.ReactNode
}) => {
  return (
<div className="flex flex-col gap-4 w-max-140 md:w-140 justify-start">
          <h4 className="text-hanuman font-semibold uppercase">{subtitle}</h4>
          <h3 className="font-medium text-5xl md:text-6xl pb-4">
            {title}
          </h3>
          <p>
            {children}
          </p>   
        </div>
  );
};  