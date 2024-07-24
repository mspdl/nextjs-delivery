export const ProductItem = () => {
  return (
    <div className="bg-white shadow rounded-lg overflow-hidden">
      <div className="bg-[#FFF9F2] h-24"></div>
      <div className="p-3">
        <div className="text-center mt-[-90px]">
          <img className="w-full h-auto" src="/tmp/burguer.png" alt="" />
        </div>
        <div className="text-xs font-medium text-[#1b1b1b]">Tradicional</div>
        <div className="text-xl font-bold text-[#1b1b1b]">Texas Burguer</div>
        <div className="text-sm font-semibold text-[#fb9400]">R$ 25,50</div>
      </div>
    </div>
  );
};
