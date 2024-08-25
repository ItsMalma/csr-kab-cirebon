import { Link } from "@inertiajs/react";
import { IconLink } from "@tabler/icons-react";
import Markdown from "react-markdown";
import { twMerge } from "tailwind-merge";

export type ArticleProps = {
  content: string;
  className?: string;
  classNames?: {
    p: string;
  };
};

export default function Article({
  content,
  className,
  classNames,
}: ArticleProps) {
  return (
    <article className={twMerge("w-full flex flex-col gap-4.5", className)}>
      <Markdown
        children={content}
        allowedElements={["p", "img"]}
        components={{
          p(props) {
            return (
              <p
                className={twMerge(
                  "text-lg leading-7 text-brand-gray-600",
                  classNames?.p
                )}
              >
                {props.children}
              </p>
            );
          },
          img(props) {
            return (
              <div className="flex flex-col gap-4 my-7.5">
                <img
                  src={props.src}
                  alt={props.alt}
                  className="w-full h-120 object-cover"
                />
                {props.src && (
                  <div className="w-full flex gap-1.5 items-center">
                    <IconLink size={16} className="text-brand-gray-400" />
                    <p className="text-sm text-brand-gray-600">
                      sumber gambar:{" "}
                      <Link
                        href={props.src!}
                        className="underline underline-offset-4"
                      >
                        {props.src}
                      </Link>
                    </p>
                  </div>
                )}
              </div>
            );
          },
        }}
      />
    </article>
  );
}
