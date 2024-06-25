interface ICandidateIndicatorProps {
  alt: string;
  className?: string;
  imgSrc: string;
  size?: string;
}

export const CandidateIndicator = ({
  alt,
  className,
  imgSrc,
  size = "24px",
}: ICandidateIndicatorProps) => {
  return (
    <img
      style={{ borderRadius: "50%", backgroundColor: "var(--card-bg)" }}
      width={size}
      height={size}
      src={imgSrc}
      alt={alt}
      className={`candidate-indicator ${className || ""}`}
    />
  );
};
