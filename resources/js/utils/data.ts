export function getPercentage(
  value: number,
  total: number,
  maxDecimals = 2
): number {
  return parseFloat(((value / total) * 100).toFixed(maxDecimals));
}
