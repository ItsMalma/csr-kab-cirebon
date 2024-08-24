import { TablerIcon } from "@tabler/icons-react";
import { twJoin, twMerge } from "tailwind-merge";

export type ButtonProps = {
  text: string;
  className?: string;
  size?: "md" | "lg";
  hierarchy?: "primary" | "secondary gray";
  iconLeading?: TablerIcon;
};

export default function Button({
  text,
  className,
  size = "md",
  hierarchy = "primary",
  iconLeading: IconLeading,
}: ButtonProps) {
  return (
    <button
      className={twMerge(
        "flex items-center justify-center rounded-lg font-semibold active:scale-95",
        size === "md" && "px-4 py-2.5 gap-2 text-sm leading-5",
        size === "lg" && "px-4.5 py-2.5 gap-2 text-lg leading-6",
        hierarchy === "primary" && "bg-brand-primary-red-900 text-base-white",
        hierarchy === "secondary gray" &&
          "bg-transparent border border-brand-gray-300 text-brand-gray-700",
        className
      )}
    >
      {IconLeading && (
        <IconLeading className={twJoin(size === "md" && "size-5")} />
      )}
      {text}
    </button>
  );
}
