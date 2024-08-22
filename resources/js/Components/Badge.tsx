import { twMerge } from "tailwind-merge";

export type BadgeProps = {
  text: string;
  size?: "lg";
  color?: "gray";
  outline?: boolean;
  name?: string;
  className?: string;
};

export default function Badge({
  text,
  size = "lg",
  color = "gray",
  outline = false,
  name,
  className,
}: BadgeProps) {
  return (
    <span
      className={twMerge(
        "flex items-center rounded-2xl font-medium",
        size === "lg" && "px-3 py-1 text-sm leading-5",
        color === "gray" && "bg-brand-gray-100 text-brand-gray-700",
        outline && "bg-transparent border-[1.5] border-brand-gray-600",
        name && "cursor-pointer",
        className
      )}
      onClick={() => {}}
    >
      {text}
    </span>
  );
}
