import { useAppContext } from "@/contexts/AppContext";
import { useFormatter } from "@/libs/useFormatter";
import { Product } from "@/types/Product";
import Link from "next/link";

type Props = {
  data: Product;
};

export const ProductItem = ({ data }: Props) => {
  const { tenant } = useAppContext();
  const formatter = useFormatter();

  return (
    <Link href={`/${tenant?.slug}/product/${data.id}`}>
      <div className="bg-white shadow rounded-lg overflow-hidden">
        <div
          className="h-24"
          style={{ backgroundColor: tenant?.secondColor }}
        ></div>
        <div className="p-3">
          <div className="text-center mt-[-90px]">
            <img className="w-full h-auto" src={data.image} alt="" />
          </div>
          <div className="text-xs font-medium text-[#1b1b1b]">
            {data.categoryName}
          </div>
          <div className={`text-xl font-bold text-[#1b1b1b]`}>{data.name}</div>
          <div
            className="text-sm font-semibold"
            style={{ color: tenant?.mainColor }}
          >
            {formatter.formatPrice(data.price)}
          </div>
        </div>
      </div>
    </Link>
  );
};
