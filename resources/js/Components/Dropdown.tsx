import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { IconChevronDown } from "@tabler/icons-react";
import { useMemo, useState } from "react";
import { twMerge } from "tailwind-merge";

export type DropdownItem =
  | {
      text: string;
      value: string;
    }
  | string;

export type DropdownProps = {
  items: DropdownItem[];
  classNames?: {
    input?: string;
    dropdown?: string;
  };
};

export default function Dropdown({ items, classNames }: DropdownProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selectedItem = useMemo(
    () => items[selectedIndex],
    [items, selectedIndex]
  );

  return (
    <Menu>
      <MenuButton
        className={twMerge(
          "flex items-center gap-2 px-3.5 py-3 rounded-lg border border-brand-gray-300 bg-base-white",
          classNames?.input
        )}
      >
        <div className="flex grow overflow-hidden overflow-ellipsis">
          <p className="font-medium text-sm leading-5 text-brand-gray-900">
            {typeof selectedItem === "string"
              ? selectedItem
              : selectedItem.text}
          </p>
        </div>
        <div className="w-5 h-5">
          <IconChevronDown className="text-brand-gray-500" size={20} />
        </div>
      </MenuButton>
      <MenuItems
        transition
        modal={false}
        anchor={{
          to: "bottom start",
          gap: 8,
        }}
        className={twMerge(
          "min-w-52 flex flex-col rounded-lg border border-brand-gray-300 bg-base-white top-1 divide-y divide-brand-gray-300",
          classNames?.dropdown
        )}
      >
        {items.map((item, index) => (
          <MenuItem
            key={typeof item === "string" ? item : item.value}
            as="button"
            type="button"
            className="px-3.5 py-3 flex font-medium text-sm leading-5 data-[focus]:bg-brand-gray-100 text-brand-gray-900"
            onClick={() => setSelectedIndex(index)}
          >
            {typeof item === "string" ? item : item.text}
          </MenuItem>
        ))}
      </MenuItems>
    </Menu>
  );
}
