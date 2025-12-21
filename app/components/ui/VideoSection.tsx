import React from "react";

interface VideoSectionProps {
  src: string;
  title?: string;
  className?: string;
}

export default function VideoSection({ src, title, className = "" }: VideoSectionProps) {
  return (
    <div
      className={`relative mb-6 h-[280px] w-full overflow-hidden rounded-lg shadow-lg md:h-[350px] lg:h-[380px] lg:w-[700px] ${className}`}
      data-playable-hook="screen-block"
      data-playable-component=""
    >
      <canvas
        className="absolute left-0 top-0 h-full w-full"
        data-playable-hook="background-canvas"
      ></canvas>
      <video
        preload="none"
        playsInline
        controls
        className="h-full w-full rounded-lg object-cover"
        src={src}
        title={title}
      ></video>
    </div>
  );
}
