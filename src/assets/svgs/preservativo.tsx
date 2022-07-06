import * as React from "react"
import { SVGProps } from "react"

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    viewBox="0 0 64 64"
    {...props}
  >
    <path d="M22.5 1c-.8 1.3 2.2 5 4.2 5s1.6-1.4-1.1-3.9C24 .6 23 .2 22.5 1zM46.9 3.1c-1.5 1.7-4.5 3.5-6.6 4.1-6.4 1.8-10.7 7.1-13.2 16.5-2.8 10.7-4.2 23.2-3.5 31 .6 5.4.4 6.3-1 6.3-2.1 0-2.1 1.6 0 2.4 2 .8 35.8.8 37.8 0 2.3-.9 2-2.2-.6-2.6-1.8-.2-2.4-1.1-2.6-3.5-.2-1.7-.9-3.6-1.5-4.1-1.6-1.4-16.6-2-16.7-.7 0 .5 3.3 1.4 7.5 1.9 7.4.9 7.5 1 7.5 3.8v2.9l-13.2-.3-13.3-.3-.6-6c-.8-8.4.8-22.5 3.7-31.6 2.8-8.9 6-12.3 12.4-13.4 3.1-.5 4.4-1.4 5.5-3.6 1.7-3.2 2.7-3.6 4.4-1.5.9 1 .9 2 0 4-1.1 2.4-.9 2.9 1.5 5.5 3.6 3.7 4.4 9.4 2.2 15.8-.9 2.6-1.9 7.2-2.3 10.1l-.6 5.4-3.6-.6c-2-.3-5.1-.8-6.8-1.2-2.6-.5-3.3-.3-3.3.8 0 1 1.8 1.9 5.7 2.7 9.3 1.8 10.1 1.6 10.8-2.6.3-2.1 1.5-7.4 2.6-11.8 2.5-10.3 2.4-13.1-.6-18.3-1.7-3-2.3-5.2-1.9-7.1.5-2.1 0-3.5-1.5-5-2.9-2.9-4.8-2.6-8.2 1zM12 14.3c0 .8 1.7 1.9 3.9 2.5 4.8 1.5 5.1 1.5 5.1-.1 0-.8-1.7-1.9-3.9-2.5-4.8-1.5-5.1-1.5-5.1.1z" />
    <path d="M37.5 15.5c-2.3 2.2-3.4 5.5-1.9 5.5.9 0 8.4-6.4 8.4-7.3 0-1.6-4.3-.5-6.5 1.8zM31.7 29.2c-.7 2.7-.3 3.2 1.8 2.5 1.9-.8 2-4.7.1-4.7-.7 0-1.6 1-1.9 2.2zM14.3 29c-2.8 1.1-3 3-.4 3 3 0 5.1-1.1 5.1-2.6 0-1.6-1.5-1.7-4.7-.4z" />
  </svg>
)

export default SvgComponent