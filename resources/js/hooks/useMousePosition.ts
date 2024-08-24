import { useCallback, useState } from "react";

export function useMouseCoords() {
  const [localCoords, setLocalCoords] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback((event: MouseEvent) => {
    if (!event.target) return;

    setLocalCoords({
      x: event.clientX - (event.target! as HTMLDivElement).offsetLeft,
      y: event.clientY - (event.target! as HTMLDivElement).offsetTop,
    });
  }, []);

  return [localCoords, handleMouseMove] as const;
}
