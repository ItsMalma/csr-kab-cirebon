import { ReactNode } from "react";
import { twJoin, twMerge } from "tailwind-merge";

export type HeroProps = {
  display: ReactNode;
  className?: string;
  children?: ReactNode;
  displayGap?: "sm" | "md";
};

export default function Hero({
  display,
  className,
  children,
  displayGap = "md",
}: HeroProps) {
  return (
    <section className={twMerge("flex relative p-12", className)}>
      <span className="w-[40%] bg-brand-primary-red-950 absolute top-0 left-0 h-full"></span>
      <div className="flex relative z-10 w-full p-20 items-center">
        <div
          className={twJoin(
            "flex flex-col w-[42%] z-10",
            displayGap === "sm" && "gap-1.5",
            displayGap === "md" && "gap-2.5"
          )}
        >
          {display}
        </div>
        <img
          className="w-full object-cover absolute brightness-40 top-0 left-0"
          src="/images/hero.png"
          alt="hero"
        />
      </div>
      {children}
    </section>
  );
}
