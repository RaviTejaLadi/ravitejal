import { SVGProps } from 'react';
import { JSX } from 'react/jsx-runtime';

const Email = (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g strokeWidth={0} />
    <g strokeLinecap="round" strokeLinejoin="round" />
    <path
      d="M2 11.956c0-3.485 0-5.228.678-6.559a6.22 6.22 0 0 1 2.72-2.719C6.727 2 8.47 2 11.955 2h8.088c3.485 0 5.228 0 6.559.678a6.22 6.22 0 0 1 2.719 2.72C30 6.727 30 8.47 30 11.955v8.088c0 3.485 0 5.228-.678 6.559a6.22 6.22 0 0 1-2.72 2.719C25.273 30 23.53 30 20.045 30h-8.088c-3.485 0-5.228 0-6.559-.678a6.22 6.22 0 0 1-2.719-2.72C2 25.273 2 23.53 2 20.045z"
      fill="#fff"
    />
    <path
      d="m22.052 8.523-5.988 4.672L9.94 8.523v.001l.008.007v6.542l6.047 4.774 6.057-4.59z"
      fill="#EA4335"
    />
    <path
      d="m23.623 7.386-1.572 1.137v6.735l4.947-3.799V9.171s-.6-3.268-3.375-1.785"
      fill="#FBBC05"
    />
    <path d="M22.05 15.258v8.734h3.793s1.079-.11 1.157-1.34V11.458z" fill="#34A853" />
    <path
      d="M9.948 24v-8.927l-.008-.006zM9.94 8.524l-1.564-1.13C5.602 5.91 5 9.177 5 9.177v2.288l4.94 3.602z"
      fill="#C5221F"
    />
    <path d="M9.94 8.524v6.543l.008.006V8.531z" fill="#C5221F" />
    <path d="M5 11.467v11.192A1.35 1.35 0 0 0 6.157 24h3.792l-.009-8.933z" fill="#4285F4" />
  </svg>
);
export default Email;
