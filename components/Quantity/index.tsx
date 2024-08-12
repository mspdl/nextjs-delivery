import { useFormatter } from "@/libs/useFormatter";
import { useEffect, useState } from "react";

type Props = {
  color: string;
  count: number;
  onUpdateCount: (newCount: number) => void;
  min?: number;
  max?: number;
  small?: boolean;
};

export const Quantity = ({
  color,
  count,
  onUpdateCount,
  min,
  max,
  small,
}: Props) => {
  const formatter = useFormatter();

  const [canRemove, setCanRemove] = useState(false);
  const [canAdd, setCanAdd] = useState(false);

  useEffect(() => {
    setCanRemove(!min || (min && count > min) ? true : false);
    setCanAdd(!max || (max && count < max) ? true : false);
  }, [count, min, max]);

  const handleRemove = () => {
    if (canRemove) onUpdateCount(count - 1);
  };

  const handleAdd = () => {
    if (canAdd) onUpdateCount(count + 1);
  };

  return (
    <div className="container flex items-center border border-[#f2f4f5] rounded-md overflow-hidden">
      <button
        className="button font-medium text-2xl w-12 h-12 flex items-center justify-center text-white bg-black"
        onClick={handleRemove}
        style={{
          color: canRemove ? "#fff" : "#96a3ab",
          backgroundColor: canRemove ? color : "#f2f4f5",
          cursor: canRemove ? "pointer" : "not-allowed",
          width: small ? 42 : 48,
          height: small ? 42 : 48,
        }}
      >
        -
      </button>
      <div
        className="qt font-bold text-lg text-black px-3"
        style={{ fontSize: small ? "16px" : "18px" }}
      >
        {formatter.formatQuantity(count, 2)}
      </div>
      <button
        className="button font-medium text-2xl w-12 h-12 flex items-center justify-center text-white bg-black"
        onClick={handleAdd}
        style={{
          color: canAdd ? "#fff" : "#96a3ab",
          backgroundColor: canAdd ? color : "#f2f4f5",
          cursor: canAdd ? "pointer" : "not-allowed",
          width: small ? 42 : 48,
          height: small ? 42 : 48,
        }}
      >
        +
      </button>
    </div>
  );
};
