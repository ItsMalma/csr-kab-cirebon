import { ReactNode } from "react";

export type IndicatorProps = {
  children: ReactNode;
  content?: string | number;
  classNames?: {
    wrapper?: string;
    indicator?: string;
  };
};

export default function Indicator({
  children,
  content,
  classNames,
}: IndicatorProps) {
  return (
    <div className="relative flex justify-center items-center">
      <div className="z-30 absolute top-0 right-0 translate-x-1/4 -translate-y-1/4 flex items-center justify-center w-4 h-4 rounded-full bg-brand-primary-red-900">
        <p className="font-semibold text-xxs leading-4 text-base-white">
          {content}
        </p>
      </div>
      {children}
    </div>
  );
}
