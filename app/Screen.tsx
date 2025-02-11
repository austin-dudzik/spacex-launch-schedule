import spacex from "@/public/spacex.svg";
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

          <span className="title">SpaceX Launch Schedule</span>
          <span className="instance">
            {layout === "full" || layout === "half_horizontal"
              ? "Updated:"
              : ""}{" "}
            5 min ago
          </span>
        </div>
      </div>
    </div>
  );
};
