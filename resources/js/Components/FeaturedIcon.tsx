import { TablerIcon } from "@tabler/icons-react";
import { twMerge } from "tailwind-merge";

export type FeaturedIconProps = {
  icon: TablerIcon;
  className?: string;
  size?: "lg";
  color?: "primary";
  theme?: "light circle outline";
};

export default function FeaturedIcon({
  icon: Icon,
  className,
  size = "lg",
  color = "primary",
  theme = "light circle outline",
}: FeaturedIconProps) {
  return (
    <div
      className={twMerge(
        "rounded-full flex items-center justify-center",
        size === "lg" && "w-12 h-12",
        color === "primary" &&
          "bg-brand-primary-red-100 text-brand-primary-red-900",
        theme === "light circle outline" &&
          "border-8 border-brand-primary-red-50",
        className
      )}
    >
      <Icon size={20} />
    </div>
  );
}
