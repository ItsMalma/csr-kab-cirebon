import { TablerIcon } from "@tabler/icons-react";
import { twJoin, twMerge } from "tailwind-merge";

export type IconButtonProps = {
  icon: TablerIcon;
  className?: string;
  size?: "md" | "lg";
  hierarchy?: "primary" | "secondary gray";
};

export default function IconButton({
  icon: Icon,
  className,
  size = "md",
  hierarchy = "primary",
}: IconButtonProps) {
  return (
    <button
      className={twMerge(
        "flex items-center justify-center rounded-lg active:scale-95",
        size === "md" && "p-3 gap-2",
        size === "lg" && "p-4 gap-2",
        hierarchy === "primary" && "bg-brand-primary-red-900 text-base-white",
        hierarchy === "secondary gray" &&
          "bg-transparent border border-brand-gray-300 text-brand-gray-400",
        className
      )}
    >
      <Icon className={twJoin(hierarchy === "secondary gray" && "size-5")} />
    </button>
  );
}
