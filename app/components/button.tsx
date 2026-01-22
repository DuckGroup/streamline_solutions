export const Button = ({
  children
}: {
  children: React.ReactNode;
}) => {
  return (
    <button
      className={`py-2 px-6 rounded-xl bg-hanuman text-white font-medium`}
    >
      {children}
    </button>
  );
};
