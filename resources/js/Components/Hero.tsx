import { Link } from "@inertiajs/react";
import { Fragment, ReactNode, useMemo } from "react";
import { twJoin, twMerge } from "tailwind-merge";

export type HeroProps = {
  display: ReactNode;
  className?: string;
  children?: ReactNode;
  displayGap?: "sm" | "md";
};

function Hero({ display, className, children, displayGap = "md" }: HeroProps) {
  return (
    <section className={twMerge("flex relative p-12", className)}>
      <span className="w-[40%] bg-brand-primary-red-950 absolute top-0 left-0 h-full"></span>
      <div className="flex relative z-10 w-full p-20 items-center overflow-hidden">
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

Hero.BreadcumbDisplay = function ({
  path,
  title,
  description,
}: {
  path: [...{ name: string; href: string }[], string];
  title: string;
  description: string;
}) {
  const pathLength = useMemo(() => path.length, [path]);

  return (
    <div className="flex flex-col gap-1.5">
      <div className="flex items-center">
        {path.map((segment, index) => (
          <Fragment key={typeof segment === "string" ? segment : segment.name}>
            {index > 0 && (
              <p className="text-lg leading-5.5 text-base-white mx-1">/</p>
            )}
            {typeof segment === "string" ? (
              <p key={segment} className="text-lg leading-5.5 text-base-white">
                {segment}
              </p>
            ) : (
              <Link
                key={segment.name}
                href={segment.href}
                className="text-lg leading-5.5 text-base-coral"
              >
                {segment.name}
              </Link>
            )}
          </Fragment>
        ))}
      </div>
      <div className="flex flex-col gap-3">
        <h1 className="font-bold text-7xl text-base-white leading-21.75">
          {title}
        </h1>
        <p className="text-sm leading-6.25 text-base-white">{description}</p>
      </div>
    </div>
  );
};

export default Hero;
