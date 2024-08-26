import { Link } from "@inertiajs/react";
import { twJoin } from "tailwind-merge";
import Button from "./Button";
import Header from "./Header";

type NavItem = {
  [text: string]: string | string[];
};

const navItems: NavItem = {
  Beranda: "home",
  Tentang: "about",
  Kegiatan: ["activity", "activity-detail"],
  Statistik: "statistics",
  Sektor: ["sectors", "sector-detail", "project-detail"],
  Laporan: ["reports", "report-detail"],
  Mitra: ["partners", "partner-detail"],
};

export default function GenericHeader() {
  return (
    <Header>
      <div className="container flex items-center justify-between">
        <img src="/images/logo.svg" alt="logo" className="w-36" />
        <nav className="hidden lg:flex">
          {Object.entries(navItems).map(([key, value]) => (
            <div
              key={typeof value === "string" ? value : value[0]}
              className="flex px-4 pt-2"
            >
              <Link
                href={route(typeof value === "string" ? value : value[0])}
                className={twJoin(
                  "text-base",
                  (
                    typeof value === "string"
                      ? route().current(value)
                      : !!value.find((v) => route().current(v))
                  )
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
    </Header>
  );
}
