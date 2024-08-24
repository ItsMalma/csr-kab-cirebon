import { ColorNames, tailwindColors } from "@/tailwind-config";
import { Fragment, ReactNode, useMemo } from "react";
import { Tooltip } from "react-tooltip";
import { twMerge } from "tailwind-merge";

export type BarChartData = {
  label: string;
  value: number;
  color: ColorNames;
};

export type BarChartProps = {
  data: BarChartData[];
  className?: string;
  formatValue?: (value: number) => ReactNode;
};

export default function BarChart({
  data,
  className,
  formatValue,
}: BarChartProps) {
  const greatest = useMemo(
    () => data.reduce((acc, item) => Math.max(acc, item.value), 0),
    [data]
  );

  return (
    <div
      className={twMerge(
        "flex flex-col gap-2 py-4 border-l-2 border-b-2 border-brand-gray-300",
        className
      )}
    >
      {data.map((item, index) => {
        const id = `bar-chart-${index}`;
        const content = `${item.label} ${
          formatValue ? formatValue(item.value) : item.value
        }`;

        return (
          <Fragment key={item.label}>
            <div
              id={id}
              className="flex justify-end items-center gap-1 px-4 py-2 min-h-12.5 max-h-12.5"
              style={{
                backgroundColor: tailwindColors.get(item.color),
                width: `${(item.value / greatest) * 100}%`,
              }}
            >
              <p className="text-base leading-6 text-base-white whitespace-nowrap overflow-hidden overflow-ellipsis">
                {content}
              </p>
            </div>
            <Tooltip
              anchorSelect={`#${id}`}
              place="top"
              className="flex px-3 py-2 rounded-lg bg-brand-gray-900"
              classNameArrow="bg-brand-gray-900 w-2 h-2 rotate-45"
              disableStyleInjection
              offset={-20}
            >
              <p className="text-xs leading-4.5 text-white">{content}</p>
            </Tooltip>
          </Fragment>
        );
      })}
    </div>
  );
}
