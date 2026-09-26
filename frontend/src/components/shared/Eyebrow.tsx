interface EyebrowProps {
  eyebrowText: string;
  align?: "left" | "center" | "right";
}

function Eyebrow({ eyebrowText, align = "left" }: EyebrowProps) {
  return <span className={`eyebrow eyebrow--${align}`}>{eyebrowText}</span>;
}

export default Eyebrow;
