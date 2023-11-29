import * as React from "react";
import { icons } from "lucide-react";
interface IconProps {
  name: string;
  color: string;
  size: number;
}

type IconType = {
    [index: string]: any;
}


const Icon: React.FC<IconProps> = ({ name, color, size }) => {
    const LucideIcon = (icons as IconType)[name];
    console.log(LucideIcon)

    return <LucideIcon color={color} size={size} />;
};

export default Icon;