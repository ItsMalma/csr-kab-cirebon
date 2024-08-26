import { IconSearch, TablerIcon } from "@tabler/icons-react";
import { HTMLInputTypeAttribute } from "react";
import { twMerge } from "tailwind-merge";

export type InputProps = {
  type?: HTMLInputTypeAttribute;
  name?: string;
  size?: "md";
  icon?: TablerIcon;
  classNames?: {
    wrapper?: string;
    input?: string;
  };
  placeholder?: string;
};

function Input({
  type = "text",
  name,
  size = "md",
  icon: Icon = type === "search" ? IconSearch : undefined,
  classNames,
  placeholder,
}: InputProps) {
  return (
    <div
      className={twMerge(
        "flex items-center border border-brand-gray-300 rounded-lg",
        size === "md" && "gap-2 px-4 py-2",
        classNames?.wrapper
      )}
    >
      {Icon && (
        <div className={"w-5 h-5 text-brand-gray-500"}>
          <Icon size={20} />
        </div>
      )}
      <input
        name={name}
        type={type}
        className={twMerge(
          "grow placeholder-brand-gray-400 font-medium text-brand-gray-900 border-none p-0 focus:outline-none focus:ring-0",
          size === "md" && "text-sm leading-5",
          classNames?.input
        )}
        placeholder={placeholder}
      />
    </div>
  );
}

type InputWithLabelProps = {
  input: InputProps;
  label: {
    text: string;
    required?: boolean;
  };
};

Input.WithLabel = function ({ input, label }: InputWithLabelProps) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex gap-1 font-semibold text-sm leading-4">
        <label htmlFor={input.name} className="text-brand-gray-800">
          {label.text}
        </label>
        <p className="text-brand-primary-red-900">*</p>
      </div>
      <Input {...input} />
    </div>
  );
};

export default Input;
