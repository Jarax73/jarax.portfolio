export default function Logo({ size = 28, className }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <rect width="32" height="32" rx="8" fill="#141416" />
      <text
        x="15"
        y="23"
        fill="#fafafa"
        fontFamily="system-ui, -apple-system, sans-serif"
        fontWeight="700"
        fontSize="22"
        textAnchor="middle"
      >
        J
      </text>
      <circle cx="24" cy="8" r="2.5" fill="#6366f1" />
    </svg>
  );
}
