import { twMerge } from "tailwind-merge";

export type AvatarProps = {
  /**
   * CAUTION: do not need to put `/images/avatars` prefix
   */
  src?: string;
  alt?: string;
  size?: "lg";
  name?: string;
  className?: string;
};

export default function Avatar({
  src = "placeholder.svg",
  alt = "avatar",
  size,
  name,
  className,
}: AvatarProps) {
  return (
    <img
      src={`/images/avatars/${src}`}
      alt={alt}
      className={twMerge(
        "rounded-full",
        size === "lg" && "w-12 h-12",
        className
      )}
      onError={(e) => {
        if (name) {
          e.currentTarget.src = `https://ui-avatars.com/api/?name=${name}&background=F2F4F7&color=667085`;
          return;
        }
        e.currentTarget.src = "/images/avatars/placeholder.svg";
      }}
    />
  );
}
