import { twMerge } from "tailwind-merge";

export type DividerProps = {
  wrapperClassName?: string;
  className?: string;
};

export default function Divider({ wrapperClassName, className }: DividerProps) {
  return (
    <div className={twMerge("flex flex-col py-3.75", wrapperClassName)}>
      <hr
        className={twMerge(
          "w-11 h-1 bg-brand-primary-red-400 border-0",
          className
        )}
      />
    </div>
  );
}
