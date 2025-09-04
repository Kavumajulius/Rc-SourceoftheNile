import type { SVGProps } from "react";

export function LogoIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M3 6.082c3.427-2.32 7.142-2.32 10.57 0 3.427 2.32 7.142 2.32 10.57 0" />
      <path d="M3 12.082c3.427-2.32 7.142-2.32 10.57 0 3.427 2.32 7.142 2.32 10.57 0" />
      <path d="M3 18.082c3.427-2.32 7.142-2.32 10.57 0 3.427 2.32 7.142 2.32 10.57 0" />
    </svg>
  );
}
