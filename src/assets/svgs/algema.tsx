import * as React from "react"
import { SVGProps } from "react"

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    viewBox="0 0 50 50"
    {...props}
  >
    <path d="M25.5 8c-.3.5-2.1 1-3.9 1-4.4 0-8.1 1.9-10.2 5.4-1.6 2.8-1.6 3 .2 4.4 1.2.9 1.3 1.3.4 1-3.1-.9-4.7 3.2-4.2 11 .4 6.5.7 7.5 3.4 9.7 7.5 6.3 17.9-1.1 14.7-10.3-.6-1.8-2-3.7-3.1-4.3-1-.6-1.7-1.6-1.5-2.2.5-1.7-3.8-4.8-5.7-4.1-2.7 1-1.9-3.2 1-5.5 3.4-2.7 4.5-2.7 3.5.1-.6 1.8-.2 3.1 1.8 5.6 6.3 8 7.8 9.2 11.6 9.2 5.1 0 9.5-4.4 9.5-9.5 0-4.7-4.4-9.5-8.8-9.5-1.7 0-3.2-.4-3.4-.9-.5-1.4-4.6-2.3-5.3-1.1zm8 2.9c6.3 1.6 10.3 7.7 7.7 11.8-.4.6-.7-.6-.7-2.9 0-3-.6-4.5-2.4-5.9-3.6-2.9-6.9-2.4-10.7 1.8-2.8 3-3.6 3.4-4.9 2.3-2-1.7-1.9-3.2.6-6.5 1.6-1.9 2.8-2.5 4.3-2.2 1.2.3 3.9 1 6.1 1.6zM20 10.4c0 1.1-1.9 1.5-2.5.6-.3-.5.1-1 .9-1 .9 0 1.6.2 1.6.4zm-4 2c0 .3-.4.8-1 1.1-.5.3-1 .1-1-.4 0-.6.5-1.1 1-1.1.6 0 1 .2 1 .4zm21.5 3.1c1.4 1.3 2.5 3.1 2.5 4 0 2.1-4.4 6.5-6.5 6.5-2.1 0-6.5-4.4-6.5-6.5 0-2.1 4.4-6.5 6.5-6.5.9 0 2.7 1.1 4 2.5zM13 16c0 .5-.5 1-1.1 1-.5 0-.7-.5-.4-1 .3-.6.8-1 1.1-1 .2 0 .4.4.4 1zm18.5 10.6c1.5.4 3.9.1 5.3-.5 2.5-1.1 2.6-1 .8.4-1.1.8-3.1 1.5-4.4 1.5-2.5 0-8.2-5-8.2-7.2 0-.7.9.2 2 1.9 1.1 1.8 3.1 3.5 4.5 3.9zm-12.4-3.5c.6 1.2 2.2 3.1 3.6 4.3 3.1 2.7 3.6 8.6.8 11.6-1 1.1-2.3 2-2.8 2-.6 0 0-1.1 1.2-2.4 3.1-3.3 2.6-8.2-1.2-11-2.7-2-3-2-7.2-.5-3.5 1.3-4.5 1.4-4.5.4 0-.8-.2-2-.5-2.7-.7-1.7 2.8-3.6 6.7-3.7 1.8-.1 3.1.6 3.9 2zm1.7 5.5c3.2 2.2 3 7.8-.3 10-2.1 1.4-3 1.4-5.5.4-4.9-2-5.3-8.6-.8-10.8 3.2-1.5 4-1.4 6.6.4zm-9.1 9.7c.9.9 3 2.1 4.7 2.6l3.1.9-2.8.1C12.5 42 9 38 9.2 33.3l.1-3.8.4 3.5c.3 1.9 1.2 4.3 2 5.3z" />
  </svg>
)

export default SvgComponent