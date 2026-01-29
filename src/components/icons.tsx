import type { SVGProps } from 'react';

export function Logo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="210"
      height="30"
      viewBox="0 0 210 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <text
        x="0"
        y="22"
        fontFamily="'Space Grotesk', sans-serif"
        fontSize="24"
        fontWeight="bold"
        className="fill-accent"
      >
        AI
      </text>
      <text
        x="35"
        y="22"
        fontFamily="'Space Grotesk', sans-serif"
        fontSize="24"
        fontWeight="bold"
        className="fill-foreground"
      >
        Tools Korner
      </text>
    </svg>
  );
}
