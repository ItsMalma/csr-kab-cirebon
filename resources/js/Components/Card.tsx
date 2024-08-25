import { router } from "@inertiajs/react";
import { format } from "date-fns";
import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

export type CardProps = {
  image: string;
  children: ReactNode;
  date?: string;
  href?: string;
  className?: string;
};

function Card({ image, children, date, href, className }: CardProps) {
  return (
    <div
      className={twMerge(
        "flex flex-col items-stretch",
        href && "cursor-pointer",
        className
      )}
      onClick={() => {
        if (href) router.visit(href);
      }}
    >
      <div className="w-full relative flex justify-center">
        <img
          src={image}
          alt="thumbnail"
          className="w-full h-70 object-cover object-center"
        />
        {date && (
          <div className="absolute left-5 top-5 h-7.5 flex items-center justify-center px-3.5 bg-brand-primary-red-900">
            <p className="font-semibold text-xxs leading-7.5 tracking-[1px] text-base-white">
              {format(date, "d LLL, y")}
            </p>
            <svg
              width="14"
              height="7"
              viewBox="0 0 14 7"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute left-0 top-7.25"
            >
              <mask id="path-1-inside-1_7592_13793" fill="white">
                <path d="M0 0H14V7H0V0Z" />
              </mask>
              <path
                d="M14 0H28V-7H14V0ZM0 7H14V-7H0V7ZM0 0V7H28V0H0Z"
                fill="url(#paint0_linear_7592_13793)"
                mask="url(#path-1-inside-1_7592_13793)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_7592_13793"
                  x1="14"
                  y1="0"
                  x2="26.522"
                  y2="6.26099"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#EC7444" />
                  <stop stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        )}
      </div>
      <div className="grow flex flex-col gap-3.5 px-6 pt-8 pb-10 border border-base-platinum">
        {children}
      </div>
    </div>
  );
}

export type CardArticleProps = Omit<CardProps, "children" | "date"> & {
  title: string;
  description: string;
  date: Date;
  author?: {
    avatar: string;
    name: string;
  };
};

Card.Article = function ({
  image,
  title,
  description,
  date,
  author,
  href,
  className,
}: CardArticleProps) {
  return (
    <Card
      image={image}
      date={date.toISOString()}
      href={href}
      className={className}
    >
      {author && (
        <div className="flex gap-3 items-center">
          <img
            src={author.avatar}
            alt={`avatar ${author.name}`}
            className="w-8 h-8 rounded-full border-2 border-brand-primary-red-900"
          />
          <p className="font-semibold text-sm leading-5 text-base-sonic-silver">
            {author.name}
          </p>
        </div>
      )}
      <h3 className="font-semibold text-xl+ leading-6.75 text-base-chinese-black">
        {title}
      </h3>
      <p className="text-sm+ leading-6.75 text-base-sonic-silver line-clamp-3">
        {description}
      </p>
    </Card>
  );
};

export default Card;
