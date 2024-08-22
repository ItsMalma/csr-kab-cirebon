import { Link } from "@inertiajs/react";
import { twJoin } from "tailwind-merge";
import Button from "./Button";

const navItems = {
  Beranda: "home",
  Tentang: "about",
  Kegiatan: "activity",
};

export default function Header() {
  return (
    <header className="px-4 py-4 flex justify-center items-center bg-base-white sticky top-0 z-50 border-b border-b-brand-gray-200">
      <div className="container flex items-center justify-between">
        <img src="/images/logo.svg" alt="logo" className="w-36" />
        <nav className="hidden lg:flex">
          {Object.entries(navItems).map(([key, value]) => (
            <div key={value} className="flex px-4 pt-2">
              <Link
                href={route(value)}
                className={twJoin(
                  "text-base",
                  route().current(value)
                    ? "font-bold text-brand-primary-red-900 underline underline-offset-8"
                    : "font-medium text-brand-gray-700"
                )}
              >
                {key}
              </Link>
            </div>
          ))}
        </nav>
        <Button className="hidden lg:flex" text="Pengajuan" />
      </div>
    </header>
  );
}
