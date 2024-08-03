import MailSent from "./mailSent.svg";

type Props = {
  iconName: "mailSent";
  color: string;
  width: number;
  height: number;
};

export const Icon = ({ iconName, color, width, height }: Props) => {
  return (
    <div style={{ width, height }}>
      {iconName === "mailSent" && <MailSent color={color} />}
    </div>
  );
};
