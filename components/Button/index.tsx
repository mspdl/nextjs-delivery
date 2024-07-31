type Props = {
  color: string;
  label: string;
  onClick: () => void;
  isFilled?: boolean;
};

export const Button = ({ color, label, onClick, isFilled }: Props) => {
  return (
    <div
      className="flex justify-center items-center border border-solid border-black p-6 text-black font-semibold text-base rounded"
      onClick={onClick}
      style={{
        color: isFilled ? "#fff" : color,
        borderColor: color,
        backgroundColor: isFilled ? color : "transparent",
      }}
    >
      {label}
    </div>
  );
};
