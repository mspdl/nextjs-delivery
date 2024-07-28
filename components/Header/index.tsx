export const Header = () => {
  return (
    <div className="flex h-12">
      <div className="w-12 flex justify-center items-center">left</div>
      <div className="flex-1 flex flex-col justify-center items-center">
        mid
      </div>
      <div className="w-12 flex justify-center items-center">right</div>
    </div>
  );
};
