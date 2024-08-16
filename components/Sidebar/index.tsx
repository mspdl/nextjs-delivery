export const Sidebar = () => {
  return (
    <div className="container fixed top-0 bottom-0 right-0 w-[100vw] bg-white z-[999]">
      <div className="area flex flex-col w-[100vw] h-full">
        <div className="header flex justify-between">
          <div className="loginArea border-b-2 border-black"></div>
          <div className="closeBtn">x</div>
        </div>
        <div className="line border-b-2 border-[#e2e2e2] mt-[-2px]"></div>
        <div className="menu">menu</div>
      </div>
    </div>
  );
};
