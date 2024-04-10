"use client";
import React from "react";
import Content from "../atoms/Content";

export default function Hero() {
  return (
    <div className="bg-transparent relative flex flex-col h-full w-full">
      <video
        autoPlay
        muted
        loop
        className="rotate-180 absolute top-[-340px] left-0 z[-1] w-full h-full object-cover"
      >
        <source src="/cards-video.webm" type="video/webm" />
      </video>
      <Content />
    </div>
  );
}
