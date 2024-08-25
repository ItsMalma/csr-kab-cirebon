import { isReactKey, isReactNode } from "@/utils/check";
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import { IconCheck, IconChevronDown, TablerIcon } from "@tabler/icons-react";
import { Key, ReactNode, useMemo, useState } from "react";
import { twJoin, twMerge } from "tailwind-merge";

export type SelectOption<TText extends ReactNode, TValue extends Key> = {
  text: TText;
  value: TValue;
};

export function isSelectOption(
  value: unknown
): value is SelectOption<ReactNode, Key> {
  return (
    typeof value === "object" &&
    value !== null &&
    "text" in value &&
    "value" in value &&
    isReactNode(value.text) &&
    isReactKey(value.value)
  );
}

export type SelectProps<TText extends ReactNode, TValue extends Key> = {
  options: SelectOption<TText, TValue>[];
  onChange: (option: TValue) => void;
  classNames?: {
    button?: string;
    options?: string;
  };
  icon?: TablerIcon;
};

export default function Select<TText extends ReactNode, TValue extends Key>({
  options,
  onChange,
  classNames,
  icon: Icon = IconChevronDown,
}: SelectProps<TText, TValue>) {
  const [value, setValue] = useState<TValue>(options[0].value);

  const selectedOption = useMemo<SelectOption<TText, TValue>>(() => {
    return options.find((option) => {
      return option.value === value;
    })!;
  }, [value]);

  return (
    <Listbox
      value={value}
      onChange={(newValue) => {
        setValue(newValue);
        onChange(newValue);
      }}
    >
      <ListboxButton
        className={twMerge(
          "flex items-center gap-2 px-3.5 py-3 rounded-lg border border-brand-gray-300 bg-base-white",
          classNames?.button
        )}
      >
        <div className="flex grow overflow-hidden overflow-ellipsis">
          <p
            className={twJoin(
              "font-medium text-sm leading-5",
              value === null ? "text-brand-gray-500" : "text-brand-gray-900"
            )}
          >
            {selectedOption.text}
          </p>
        </div>
        <div className="w-5 h-5">
          <Icon className="text-brand-gray-500" size={20} />
        </div>
      </ListboxButton>
      <ListboxOptions
        transition
        modal={false}
        anchor={{
          to: "bottom start",
          gap: 8,
        }}
        className={twMerge(
          "min-w-52 flex flex-col rounded-lg border border-brand-gray-300 bg-base-white top-1 divide-y divide-brand-gray-300 overflow-scroll",
          classNames?.options
        )}
        unmount={false}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        {options.map((option) => (
          <ListboxOption
            key={option.value}
            value={option.value}
            as="button"
            type="button"
            className="gap-2 px-3.5 py-3 flex items-center font-medium text-sm leading-5 data-[focus]:bg-brand-gray-100 text-brand-gray-900"
          >
            <div className="w-4 h-4">
              {value === option.value && <IconCheck size={16} />}
            </div>
            <p>{option.text}</p>
          </ListboxOption>
        ))}
      </ListboxOptions>
    </Listbox>
  );
}
