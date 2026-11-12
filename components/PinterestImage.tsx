"use client";

interface PinterestImageProps {
  src: string;
}

export function PinterestImage({ src }: PinterestImageProps) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt=""
      loading="lazy"
      decoding="async"
      style={{
        width: "100%",
        borderRadius: "14px",
        marginBottom: "16px",
        display: "block",
        background: "var(--soft)",
      }}
      onError={(e) => {
        e.currentTarget.style.display = "none";
      }}
    />
  );
}
