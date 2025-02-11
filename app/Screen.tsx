import spacex from "@/public/spacex.svg";
import dayjs from "dayjs";
import Image from "next/image";

export const Screen = ({
  layout,
  children,
}: {
  layout: string;
  children: any;
}) => {
  return (
    <div className="screen">
      <div className={`view view--${layout}`}>
        <div className="layout layout--top">{children}</div>
        <div className="title_bar">
          <Image src={spacex} className="image" alt="" />

          <span className="title">
            {layout === "full" || layout === "half_horizontal"
              ? "SpaceX Launch Schedule"
              : "Launch Schedule"}
          </span>
          <span className="instance">
            {layout === "full" || layout === "half_horizontal"
              ? "Updated:"
              : ""}{" "}
            {dayjs().format("MM/DD/YYYY hh:mma")}
          </span>
        </div>
      </div>
    </div>
  );
};
