import * as React from 'react';
import { JSX } from 'react/jsx-runtime';

const claude = (props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width={100} height={100} {...props}>
    <path
      fill="#d19b75"
      d="M40 6H8a2 2 0 0 0-2 2v32a2 2 0 0 0 2 2h32a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2"
    />
    <path
      fill="#252525"
      d="M22.197 14.234h-4.404L10.037 33.67c0-.096 4.452 0 4.452 0l1.484-4.069h8.234l1.58 4.069h4.261zm-4.835 11.825 2.729-6.894 2.633 6.894zm8.601-11.825L33.59 33.67h4.356l-7.803-19.436c.001 0-4.18-.048-4.18 0"
    />
  </svg>
);
export default claude;
