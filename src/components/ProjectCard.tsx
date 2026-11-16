import { useRef, useState, type ReactNode } from "react";

type Props = {
  href: string;
  title: string;
  image: string;
  imageAlt: string;
  video: string;
  children: ReactNode;
};

// Touch screens have no hover, so the preview only runs where hover exists.
const canHover = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(hover: hover) and (pointer: fine)").matches;

export default function ProjectCard({
  href,
  title,
  image,
  imageAlt,
  video,
  children,
}: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const hovered = useRef(false);
  const [playing, setPlaying] = useState(false);

  const start = () => {
    const v = videoRef.current;
    if (!v || !canHover()) return;
    hovered.current = true;
    v.currentTime = 0;
    // muted inline video is allowed to autoplay; ignore an interrupted play()
    v.play().catch(() => {});
  };

  const stop = () => {
    hovered.current = false;
    videoRef.current?.pause();
    setPlaying(false);
  };

  // fade in only once frames are actually playing, so a first (still loading)
  // hover never flashes an empty overlay
  const onPlaying = () => {
    if (hovered.current) setPlaying(true);
  };

  return (
    <div
      className={`project-item${playing ? " is-playing" : ""}`}
      onMouseEnter={start}
      onMouseLeave={stop}
    >
      <a href={href}>
        <img src={image} alt={imageAlt} />
      </a>
      <div>
        <h3>
          <a href={href}>{title}</a>
        </h3>
        {children}
      </div>
      <a
        className="project-preview"
        href={href}
        aria-hidden="true"
        tabIndex={-1}
      >
        <video
          ref={videoRef}
          src={video}
          muted
          loop
          playsInline
          preload="none"
          onPlaying={onPlaying}
        />
      </a>
    </div>
  );
}
