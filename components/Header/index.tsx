import Link from "next/link";
import BackArrowIcon from "./backArrowIcon.svg";

type Props = {
  backHref: string;
  color: string;
  title?: string;
  subtitle?: string;
};

export const Header = ({ backHref, color, title, subtitle }: Props) => {
  return (
    <div className="flex h-12">
      <div className="w-12 flex justify-center items-center">
        <Link href={backHref}>
          <BackArrowIcon color={color} />
        </Link>
      </div>
      <div className="flex-1 flex flex-col justify-center items-center">
        {title && (
          <div className="font-semibold text-2xl text-[#1b1b1b]">{title}</div>
        )}
        {subtitle && (
          <div className="font-normal text-xs text-[#6a7d8b]">{subtitle}</div>
        )}
      </div>
      <div className="w-12 flex justify-center items-center"></div>
    </div>
  );
};
