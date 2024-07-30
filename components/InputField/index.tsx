import { useState } from "react";
import EyeOff from "./EyeOff.svg";
import EyeOn from "./EyeOn.svg";

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
  const [focused, isFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div
      className="w-full h-16 bg-[#f9f9fb] border-[2px] border-solid border-[#f9f9fb] rounded px-4 flex"
      style={{
        borderColor: focused ? color : "#f9f9fb",
        backgroundColor: focused ? "#fff" : "#f9f9fb",
      }}
    >
      <input
        type={isPassword ? (showPassword ? "text" : "password") : "text"}
        className="flex-1 border-0 outline-0 bg-transparent text-[#1b1b1b] font-normal text-base"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => isFocused(true)}
        onBlur={() => isFocused(false)}
      />
      {isPassword && (
        <div
          className="flex items-center"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword && <EyeOn color="#bbb" />}
          {!showPassword && <EyeOff color="#bbb" />}
        </div>
      )}
    </div>
  );
};
