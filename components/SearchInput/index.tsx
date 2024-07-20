const SearchInput = () => {
  return (
    <div className="bg-white flex p-2 rounded-md">
      <div className="w-12 h-12 bg-[#f9f9fb] rounded-md"></div>
      <input type="text" className="h-12 ml-3 border-0 outline-0 flex-1 font-normal text-base" placeholder="What do you need?"/>
    </div>
  );
};

export default SearchInput;
