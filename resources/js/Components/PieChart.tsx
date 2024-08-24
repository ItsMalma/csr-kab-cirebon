import { ColorNames, tailwindColors } from "@/tailwind-config";
import { getPercentage } from "@/utils/data";
import { IconCaretUpFilled } from "@tabler/icons-react";
import { useMemo } from "react";
import {
  Pie as RechartsPie,
  PieChart as RechartsPieChart,
  Tooltip,
  TooltipProps,
} from "recharts";

export type PieChartData = {
  label: string;
  value: number;
  color: ColorNames;
};

export type PieChartProps = {
  width?: number;
  height?: number;
  className?: string;
  data: PieChartData[];
};

function TooltipContent({ payload, coordinate }: TooltipProps<number, string>) {
  const firstPayload = useMemo(() => {
    if (!payload) return null;
    return payload.length > 0 ? payload[0] : null;
  }, [payload]);

  if (!firstPayload) return <></>;

  return (
    <div className="flex flex-col items-center">
      <IconCaretUpFilled className="text-brand-gray-900 -mb-2.5" />
      <div className="flex px-3 py-2 rounded-lg bg-brand-gray-900">
        <p className="text-xs leading-4.5 text-white">{firstPayload.value}</p>
      </div>
    </div>
  );
}

export default function PieChart({
  width = 250,
  height = 250,
  data,
}: PieChartProps) {
  const newData = useMemo(() => {
    return data.map((item) => ({
      data: item.value,
      name: item.label,
      fill: tailwindColors.get(item.color),
    }));
  }, [data]);

  const total = useMemo(
    () => data.reduce((acc, item) => acc + item.value, 0),
    [data]
  );

  return (
    <div className="flex gap-5 items-center">
      <RechartsPieChart width={width} height={height}>
        <RechartsPie
          data={newData}
          dataKey="data"
          nameKey="name"
          legendType="circle"
          outerRadius="100%"
        />
        <Tooltip offset={0} content={TooltipContent} />
      </RechartsPieChart>
      <div className="flex flex-col gap-2">
        {newData.map((item) => (
          <div key={item.name} className="flex items-center gap-2">
            <span
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: item.fill }}
            ></span>
            <p className="text-sm leading-6 text-brand-gray-700">
              {item.name} : {getPercentage(item.data, total)}%
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
