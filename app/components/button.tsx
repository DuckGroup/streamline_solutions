export const Button = ({
  children,
  size,
}: {
  children: React.ReactNode;
  size?: "sm" | "md";
}) => {

  let sizeString = "py-2 px-6";

  switch (size) {
    case "sm":
      sizeString = "py-2 px-6";
      break;
    case "md":
      sizeString = "py-3 px-15 text-md";
      break;
    default:
      break;
  }

  return (
    <button
      className={`${sizeString} rounded-xl bg-hanuman text-white font-medium cursor-pointer shadow-xl hover:-translate-y-1 transition hover:bg-hanuman/90`}
    >
      {children}
    </button>
  );
};
