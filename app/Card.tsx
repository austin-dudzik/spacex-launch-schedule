import dayjs from "dayjs";

export const Card = ({
  info,
  borderless = false,
  truncate = false,
  showImage = true,
}: {
  info: any;
  borderless?: boolean;
  truncate?: boolean;
  showImage?: boolean;
}) => {
  const countdown = () => {
    const now: any = new Date();
    const future: any = new Date(info.net);
    const diff = future - now;

    if (diff <= 0) {
      return "T - 00 : 00 : 00 : 00";
    }

    const seconds = Math.floor(diff / 1000) % 60;
    const minutes = Math.floor(diff / (1000 * 60)) % 60;
    const hours = Math.floor(diff / (1000 * 60 * 60)) % 24;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));

    return `T - ${days.toString().padStart(2, "0")} : ${hours
      .toString()
      .padStart(2, "0")} : ${minutes.toString().padStart(2, "0")} : ${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <>
      <div className={`card ${!borderless ? "border" : ""}`}>
        <div className="flex">
          {showImage && (
            <img
              className="image-dither"
              src={info.rocket.configuration.image_url}
              alt=""
            />
          )}
          <div className="main">
            <p
              className="launchName"
              style={{ WebkitLineClamp: truncate ? 1 : 2 }}
            >
              {info.name}
            </p>
            <p className="manufacturer">
              {info.rocket.configuration.manufacturer.name}
            </p>
            <div className="label label--outline label--small">
              {info.status.name}
            </div>
            <div className="content">
              <div className="flex">
                <i className="ti ti-clock icon"></i>
                <div>
                  <p className="smallTitle">{countdown()}</p>
                  <p className="smallSubtitle">
                    {dayjs(info.net).format("MM/DD/YYYY HH:MM:ss")}
                  </p>
                </div>
              </div>
            </div>
            <div className="content">
              <div className="flex">
                <i className="ti ti-map-pin icon"></i>
                <div>
                  <p className="smallTitle">{info.pad.location.name}</p>
                  <p className="smallSubtitle">
                    {info.launch_service_provider.country_code ?? "N/A"} ·{" "}
                    {info.pad.name}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
