import { useState } from "react";

type Props = {
  mainColor: string;
  onSearch: (searchValue: string) => void;
};

const SearchInput = ({ mainColor, onSearch }: Props) => {
  const [focused, setFocused] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const handleKeyUp = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.code === "Enter") {
      onSearch(searchValue);
    }
  };

  return (
    <div
      className="bg-white flex p-2 rounded-md border-[1px] border-solid"
      style={{ borderColor: focused ? mainColor : "#fff" }}
    >
      <div
        className="w-12 h-12 bg-[#f9f9fb] rounded-md"
        onClick={() => onSearch(searchValue)}
      ></div>
      <input
        type="text"
        className="h-12 ml-3 border-0 outline-0 flex-1 font-normal text-base"
        placeholder="What do you need?"
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        onKeyUp={handleKeyUp}
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
    </div>
  );
};

export default SearchInput;
