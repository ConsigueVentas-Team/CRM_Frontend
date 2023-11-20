interface IconProps {
  className?: string;
}

export function GoogleDriveIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      height="1em"
      viewBox="0 0 512 512"
    >
      <path d="M339 314.9L175.4 32h161.2l163.6 282.9H339zm-137.5 23.6L120.9 480h310.5L512 338.5H201.5zM154.1 67.4L0 338.5 80.6 480 237 208.8 154.1 67.4z" />
    </svg>
  );
}

export function DropboxIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      height="1em"
      viewBox="0 0 528 512"
    >
      <path d="M264.4 116.3l-132 84.3 132 84.3-132 84.3L0 284.1l132.3-84.3L0 116.3 132.3 32l132.1 84.3zM131.6 395.7l132-84.3 132 84.3-132 84.3-132-84.3zm132.8-111.6l132-84.3-132-83.6L395.7 32 528 116.3l-132.3 84.3L528 284.8l-132.3 84.3-131.3-85z" />
    </svg>
  );
}

export function LogoIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      width="212"
      height="182"
      viewBox="0 0 212 182"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M87.8359 123L59.8359 151H211.336L87.8359 123Z" fill="#ADD603" />
      <path
        d="M180.336 30.5V123H87.8359L211.336 151V0L180.336 30.5Z"
        fill="#CCFC04"
      />
      <path
        d="M144.341 67.4973L168.841 42.9973C131.835 3.00019 67.8353 6.49984 30.3406 39.9973C80.5717 24.5784 104.728 31.8036 137.953 61.6041C140.148 63.3776 142.281 65.3395 144.341 67.4973Z"
        fill="#C2F003"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M48.6889 72.4422C21.1772 103.011 18.0861 128.984 29.3359 182C0.331055 160.002 -19.1645 91.4989 30.3406 39.9973C80.5717 24.5784 104.728 31.8036 137.953 61.6041C111.282 40.0569 75.5252 46.3299 53.8406 66.9513C52.0196 68.683 50.2978 70.516 48.6889 72.4422Z"
        fill="#CCFC04"
      />
      <path
        d="M29.3359 182L53.8406 157.997C27.064 125.298 31.2098 93.3688 48.6889 72.4422C21.1772 103.011 18.0861 128.984 29.3359 182Z"
        fill="#ADD603"
      />
    </svg>
  );
}

export function LogoCircleIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      width="374"
      height="374"
      viewBox="0 0 374 374"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="187" cy="187" r="187" fill="#283C4C" />
      <path d="M168.836 219L140.836 247H292.336L168.836 219Z" fill="#ADD603" />
      <path
        d="M261.336 126.5V219H168.836L292.336 247V96L261.336 126.5Z"
        fill="#CCFC04"
      />
      <path
        d="M225.341 163.497L249.841 138.997C212.835 99.0002 148.835 102.5 111.341 135.997C161.572 120.578 185.728 127.804 218.953 157.604C221.148 159.378 223.281 161.339 225.341 163.497Z"
        fill="#C2F003"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M129.689 168.442C102.177 199.011 99.0861 224.984 110.336 278C81.3311 256.002 61.8355 187.499 111.341 135.997C161.572 120.578 185.728 127.804 218.953 157.604C192.282 136.057 156.525 142.33 134.841 162.951C133.02 164.683 131.298 166.516 129.689 168.442Z"
        fill="#CCFC04"
      />
      <path
        d="M110.336 278L134.841 253.997C108.064 221.298 112.21 189.369 129.689 168.442C102.177 199.011 99.0861 224.984 110.336 278Z"
        fill="#ADD603"
      />
    </svg>
  );
}
