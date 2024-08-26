import { ReactNode } from "react";

export type HeaderProps = {
  children: ReactNode;
};

export default function Header({ children }: HeaderProps) {
  return (
    <header className="px-4 py-4 flex justify-center items-center bg-base-white sticky top-0 z-50 border-b border-b-brand-gray-200">
      {children}
    </header>
  );
}
