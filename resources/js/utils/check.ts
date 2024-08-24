import { isValidElement, Key, ReactNode } from "react";

function isIterable(value: unknown): value is Iterable<unknown> {
  if (typeof value !== "object" || !value) return false;
  if (
    !(Symbol.iterator in value) ||
    typeof value[Symbol.iterator] !== "function"
  )
    return false;

  return true;
}

export function isReactNode(v: unknown): v is ReactNode {
  return (
    isValidElement(v) ||
    typeof v === "string" ||
    typeof v === "number" ||
    isIterable(v) ||
    typeof v === "boolean" ||
    v === null ||
    v === undefined
  );
}

export function isReactKey(v: unknown): v is Key {
  return (
    typeof v === "string" || typeof v === "number" || typeof v === "bigint"
  );
}
