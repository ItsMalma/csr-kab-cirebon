import { twMerge } from "tailwind-merge";

export type BadgeProps = {
  text: string;
  size?: "sm" | "lg";
  color?: "gray" | "success" | "warning" | "error";
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
        "w-fit flex items-center rounded-2xl font-medium",
        size === "sm" && "px-2 py-0.5 text-xs leading-4.5",
        size === "lg" && "px-3 py-1 text-sm leading-5",
        color === "gray" && "bg-brand-gray-100 text-brand-gray-700",
        color === "success" && "bg-success-50 text-success-700",
        color === "warning" && "bg-warning-50 text-warning-700",
        color === "error" && "bg-error-50 text-error-700",
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
