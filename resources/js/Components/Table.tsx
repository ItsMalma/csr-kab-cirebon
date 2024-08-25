import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

export type TableColumn = {
  name: ReactNode;
  data: ReactNode[];
  classNames?: {
    head?: string;
    body?: string;
  };
};

export type TableProps = {
  columns: TableColumn[];
  className?: string;
  headless?: boolean;
};

export default function Table({
  columns,
  className,
  headless = false,
}: TableProps) {
  return (
    <table className={twMerge(className)}>
      {!headless && (
        <thead>
          <tr>
            {columns.map((column, index) => (
              <th
                key={index}
                className={twMerge(
                  "p-0 border-brand-gray-200 border-b",
                  column.classNames?.head
                )}
              >
                {column.name}
              </th>
            ))}
          </tr>
        </thead>
      )}
      <tbody>
        {columns[0].data.map((_, i) => (
          <tr key={i}>
            {columns.map((column, j) => (
              <td
                key={j}
                className={twMerge(
                  "p-0 border-brand-gray-200 border-b",
                  column.classNames?.body
                )}
              >
                {column.data[i]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
