"use client";

import { useState } from "react";
import { Card } from "./Card";
import { Screen } from "./Screen";
// data saved from "https://ll.thespacedevs.com/2.2.0/launch/upcoming.json?mode=detailed?ordering=net"
import data from "@/app/data.json";

export default function Home() {
  const [showImage, setShowImage] = useState(true);

  return (
    <>
      <label>
        <input
          type="checkbox"
          checked={showImage}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setShowImage(e.target.checked)
          }
        />{" "}
        Show images
      </label>
      <Screen layout="full">
        <div
          className="grid grid--cols-2 gap--small"
          id="card-container"
          style={{ marginTop: -8 }}
        >
          {[...data.results].splice(0, 4).map((item: any) => (
            <Card key={item.id} info={item} showImage={showImage} />
          ))}
        </div>
      </Screen>

      <Screen layout="quadrant">
        <div className="grid" style={{ marginTop: -8 }}>
          {[...data.results].splice(0, 1).map((item: any) => (
            <Card key={item.id} info={item} showImage={showImage} borderless />
          ))}
        </div>
      </Screen>

      <Screen layout="half_vertical">
        <div className="grid grid--cols-1">
          {[...data.results].splice(0, 2).map((item: any) => (
            <Card key={item.id} info={item} showImage={showImage} />
          ))}
        </div>
      </Screen>

      <Screen layout="half_horizontal">
        <div className="grid grid--cols-2">
          {[...data.results].splice(0, 2).map((item: any) => (
            <Card key={item.id} info={item} showImage={showImage} truncate />
          ))}
        </div>
      </Screen>
    </>
  );
}
