import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import { IconX } from "@tabler/icons-react";
import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import Badge, { BadgeProps } from "./Badge";

export type NotificationItem = {
  status: "revisi" | "diterima" | "ditolak";
  title: string;
  description?: string;
};

function notificationStatusToBadgeColor(
  status: NotificationItem["status"]
): BadgeProps["color"] {
  switch (status) {
    case "revisi":
      return "warning";
    case "diterima":
      return "success";
    case "ditolak":
      return "error";
  }
}

function notificationStatusToBadgeText(
  status: NotificationItem["status"]
): string {
  switch (status) {
    case "revisi":
      return "Laporan perlu direvisi!";
    case "diterima":
      return "Laporan telah diterima!";
    case "ditolak":
      return "Laporan ditolak!";
  }
}

export type NotificationProps = {
  items: NotificationItem[];
  classNames?: {
    button?: string;
    panel?: string;
  };
  children?: ReactNode;
};

export default function Notification({
  items,
  classNames,
  children,
}: NotificationProps) {
  return (
    <Popover>
      <PopoverButton
        className={twMerge(
          "outline-none flex items-center justify-center",
          classNames?.button
        )}
      >
        {children}
      </PopoverButton>
      <PopoverPanel
        transition
        anchor={{
          to: "bottom end",
          gap: 36,
        }}
        className={twMerge(
          "w-[35vw] !max-h-[70vh] bg-base-white rounded-xl p-5 flex flex-col gap-4 z-50 overflow-hidden",
          classNames?.panel
        )}
      >
        {({ close }) => (
          <>
            <div className="w-full flex items-center justify-between">
              <h1 className="font-semibold text-xl leading-5 text-brand-gray-800">
                Notifikasi
              </h1>
              <button onClick={() => close()}>
                <IconX className="text-brand-gray-500" size={20} />
              </button>
            </div>
            <div className="grow w-full flex flex-col gap-4 overflow-auto">
              {items.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="w-full flex flex-col gap-1 p-3 border border-brand-gray-200 rounded-xl"
                  >
                    <Badge
                      size="sm"
                      color={notificationStatusToBadgeColor(item.status)}
                      text={notificationStatusToBadgeText(item.status)}
                      className="flex items-center justify-between"
                    />
                    <h2 className="font-semibold text-sm leading-5 text-brand-gray-900">
                      {item.title}
                    </h2>
                    {item.description && (
                      <p className="text-sm leading-5 text-brand-gray-600">
                        {item.description}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </>
        )}
      </PopoverPanel>
    </Popover>
  );
}
