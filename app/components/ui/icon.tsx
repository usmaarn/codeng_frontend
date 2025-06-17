import { Icon as Iconify, type IconProps, type IconifyIcon } from "@iconify/react";

function Icon(props: IconProps) {
  return <Iconify {...props} />;
}

export { Icon, type IconProps, type IconifyIcon };
