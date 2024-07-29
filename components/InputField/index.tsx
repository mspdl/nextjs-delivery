type Props = {
  color: string;
  placeholder: string;
  value: string;
  onChange: (newValue: string) => void;
  isPassword?: boolean;
};

export const InputField = ({
  color,
  placeholder,
  value,
  onChange,
  isPassword,
}: Props) => {
  return (
    <div className="w-full h-16 bg-[#f9f9fb] border-[2px] border-solid border-[#f9f9fb] rounded px-4">
      <input
        type={isPassword ? "password" : "text"}
        className=""
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};
