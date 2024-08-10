type Props = {
  color: string;
  count: number;
  onUpdateCount: (newCount: number) => void;
  min?: number;
  max?: number;
};

export const Quantity = ({ color, count, onUpdateCount, min, max }: Props) => {
  const handleRemove = () => {
    onUpdateCount(count - 1);
  };
  
  const handleAdd = () => {
    onUpdateCount(count + 1);
  };

  return (
    <div className="container flex items-center border border-[#f2f4f5] rounded-md overflow-hidden">
      <div
        className="button font-medium text-2xl w-12 h-12 flex items-center justify-center text-white bg-black"
        onClick={handleRemove}
      >
        -
      </div>
      <div className="qt font-bold text-lg text-black px-3">{count}</div>
      <div
        className="button font-medium text-2xl w-12 h-12 flex items-center justify-center text-white bg-black"
        onClick={handleAdd}
      >
        +
      </div>
    </div>
  );
};
