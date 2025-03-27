import * as React from 'react';
import { JSX } from 'react/jsx-runtime';

const SchadCn = (props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className="h-10 w-10" {...props}>
    <path fill="none" d="M0 0h256v256H0z" />
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={16}
      d="m208 128-80 80m64-168L40 192"
    />
  </svg>
);
export default SchadCn;
