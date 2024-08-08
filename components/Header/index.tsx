import Link from "next/link";
import BackArrowIcon from "./backArrowIcon.svg";

type Props = {
  backHref: string;
  color: string;
  title?: string;
  subtitle?: string;
  invert?: boolean;
};

export const Header = ({ backHref, color, title, subtitle, invert }: Props) => {
  return (
    <div className="flex h-12">
      <Link
        href={backHref}
        className="w-12 h-12 flex justify-center items-center rounded-md"
        style={{ backgroundColor: invert ? "rgba(0, 0, 0, 0.1)" : "" }}
      >
        <BackArrowIcon color={invert ? "#fff" : color} />
      </Link>
      <div className="flex-1 flex flex-col justify-center items-center">
        {title && (
          <div
            className="font-semibold text-2xl"
            style={{ color: invert ? "#fff" : "#1b1b1b" }}
          >
            {title}
          </div>
        )}
        {subtitle && (
          <div className="font-normal text-xs text-[#6a7d8b]">{subtitle}</div>
        )}
      </div>
      <div className="w-12 flex justify-center items-center"></div>
    </div>
  );
};
