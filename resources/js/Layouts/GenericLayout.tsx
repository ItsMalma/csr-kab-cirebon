import Divider from "@/Components/Divider";
import FeaturedIcon from "@/Components/FeaturedIcon";
import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import Hero, { HeroProps } from "@/Components/Hero";
import { Head } from "@inertiajs/react";
import { IconMail, IconMapPin, IconPhone } from "@tabler/icons-react";
import { Fragment, ReactNode } from "react";

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
                            atau
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

export type GenericLayout = {
  children: ReactNode;
  title: string;
  hero: HeroProps;
};

export default function GenericLayout({
  children,
  title,
  hero,
}: GenericLayout) {
  return (
    <div className="flex flex-col min-h-screen">
      <Head title={title} />
      <Header />
      <Hero {...hero} />
      {children}
      <Contact />
      <Footer />
    </div>
  );
}
