export const WhiteButton = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <button
      className={`py-2 px-6 rounded-xl bg-white border-2 border-stone-200 font-medium`}
    >
      {children}
    </button>
  );
};
