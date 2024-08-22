import { TablerIcon } from "@tabler/icons-react";
import { twMerge } from "tailwind-merge";

export type InputProps = {
  size?: "md";
  icon?: TablerIcon;
  classNames?: {
    wrapper?: string;
    input?: string;
  };
  placeholder?: string;
};

export default function Input({
  size = "md",
  icon: Icon,
  classNames,
  placeholder,
}: InputProps) {
  return (
    <div
      className={twMerge(
        "flex items-center border border-brand-gray-300 rounded-lg",
        size === "md" && "gap-2 p-3.5",
        classNames?.wrapper
      )}
    >
      {Icon && (
        <div className={"w-5 h-5 text-brand-gray-500"}>
          <Icon size={20} />
        </div>
      )}
      <input
        type="text"
        className={twMerge(
          "grow placeholder-brand-gray-500 font-medium text-brand-gray-900 border-none p-0 focus:outline-none focus:ring-0",
          size === "md" && "text-sm leading-5",
          classNames?.input
        )}
        placeholder={placeholder}
      />
    </div>
  );
}
