import Button from "@/Components/Button";
import Divider from "@/Components/Divider";
import FeaturedIcon from "@/Components/FeaturedIcon";
import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import Hero, { HeroProps } from "@/Components/Hero";
import { Head, Link } from "@inertiajs/react";
import { IconMail, IconMapPin, IconPhone } from "@tabler/icons-react";
import { Fragment, ReactNode } from "react";
import { twJoin } from "tailwind-merge";

const contacts = [
  {
    icon: IconMapPin,
    name: "Alamat",
    values: [
      "Jl. Sunan Kalijaga No.7, Sumber, Kec. Sumber, Kabupaten Cirebon, Jawa Barat 45611",
    ],
  },
  {
    icon: IconPhone,
    name: "Phone",
    values: ["(0231) 321197", "(0231) 3211792"],
  },
  {
    icon: IconMail,
    name: "Email",
    values: ["pemkab@cirebonkab.go.id"],
  },
];

function Contact() {
  return (
    <section className="px-8 py-10 w-full overflow-hidden flex justify-center">
      <div className="flex gap-16 container items-center">
        <div className="grow flex flex-col gap-5">
          <div className="flex flex-col gap-5">
            <div className="flex flex-col">
              <Divider />
              <h2 className="font-bold text-4.5xl leading-12 text-base-black-pearl">
                Hubungi Kami
              </h2>
            </div>
            <p className="text-xl leading-7.5 text-base-sonic-silver">
              Hubungi kami melalui formulir di samping, atau melalui kontak di
              bawah
            </p>
          </div>
          <div className="flex flex-col pt-5 gap-6">
            {contacts.map((contact) => (
              <div key={contact.name} className="flex gap-4">
                <FeaturedIcon icon={contact.icon} />
                <div className="flex flex-col gap-5 pt-2">
                  <h3 className="font-semibold text-xl leading-7.5 text-base-black-pearl">
                    {contact.name}
                  </h3>
                  <p className="font-semibold text-base leading-6 text-brand-primary-red-900">
                    {contact.values.map((value, index) => (
                      <Fragment key={value}>
                        {value}
                        {index + 1 < contact.values.length && (
                          <span className="text-base leading-6 text-base-sonic-silver">
                            {" "}
                            atau{" "}
                          </span>
                        )}
                      </Fragment>
                    ))}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3962.057104541483!2d108.477069!3d-6.762892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6f1e52ec39ac4b%3A0x11406d4a1fb551d1!2sJl.%20Sunan%20Kalijaga%20No.7%2C%20Sumber%2C%20Kec.%20Sumber%2C%20Kabupaten%20Cirebon%2C%20Jawa%20Barat%2045611!5e0!3m2!1sid!2sid!4v1724204361403!5m2!1sid!2sid"
          width="600"
          height="450"
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
}

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

function GenericHeader() {
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

export type GenericLayoutProps = {
  children: ReactNode;
  title: string;
  hero: HeroProps;
};

export default function GenericLayout({
  children,
  title,
  hero,
}: GenericLayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <Head title={title} />
      <GenericHeader />
      <Hero {...hero} />
      {children}
      <Contact />
      <Footer buttonText="Masuk sebagai mitra" />
    </div>
  );
}
