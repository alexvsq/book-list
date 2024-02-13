import * as React from "react"
const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={35}
    height={35}
    fill="none"
    {...props}
  >
    <path
      fill="#1D9BF0"
      d="M32.266 11.484H2.734a1.64 1.64 0 0 1 0-3.28h29.532a1.64 1.64 0 0 1 0 3.28Zm-5.47 7.657H8.204a1.64 1.64 0 1 1 0-3.282h18.594a1.64 1.64 0 1 1 0 3.282Zm-6.562 7.656h-5.468a1.64 1.64 0 0 1 0-3.281h5.468a1.64 1.64 0 0 1 0 3.28Z"
    />
  </svg>
)
export default SvgComponent
