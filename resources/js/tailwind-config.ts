import resolveConfig from "tailwindcss/resolveConfig";
import rootTailwindConfig from "../../tailwind.config";

const tailwindConfig = resolveConfig(rootTailwindConfig);

type ColorName<
  Colors extends Record<string | number, any>,
  Color = keyof Colors
> = Color extends string | number
  ? `${Color}${Colors[Color] extends Record<string | number, any>
      ? `-${ColorName<Colors[Color]>}`
      : ""}`
  : never;

export type ColorNames = ColorName<typeof tailwindConfig.theme.colors>;

const tailwindColors: Map<ColorNames, string> = new Map();

function setupColors(prefix: string, source: Record<string, any>) {
  Object.entries(source).forEach(([name, value]) => {
    if (typeof value !== "string") {
      setupColors(`${prefix}${name}-`, value);
      return;
    }
    tailwindColors.set((prefix + name) as ColorNames, value);
  });
}
setupColors("", tailwindConfig.theme.colors);

export { tailwindColors };

export default tailwindConfig;
