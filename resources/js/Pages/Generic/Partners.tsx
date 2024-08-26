import Card, { CardProps } from "@/Components/Card";
import Hero from "@/Components/Hero";
import Input from "@/Components/Input";
import Select from "@/Components/Select";
import GenericLayout from "@/Layouts/GenericLayout";
import { useState } from "react";

type Partner = Pick<CardProps, "image"> & {
  slug: string;
  name: string;
};

export default function Partners() {
  const [partners, setPartners] = useState<Partner[]>([
    {
      image: "1.png",
      name: "PT. Mitra Sejati",
      slug: "pt-mitra-sejati",
    },
    {
      image: "2.png",
      name: "PT. Mitra Sejati",
      slug: "pt-mitra-sejati",
    },
    {
      image: "3.png",
      name: "PT. Mitra Sejati",
      slug: "pt-mitra-sejati",
    },
    {
      image: "4.png",
      name: "PT. Mitra Sejati",
      slug: "pt-mitra-sejati",
    },
    {
      image: "5.png",
      name: "PT. Mitra Sejati",
      slug: "pt-mitra-sejati",
    },
    {
      image: "6.png",
      name: "PT. Mitra Sejati",
      slug: "pt-mitra-sejati",
    },
    {
      image: "7.png",
      name: "PT. Mitra Sejati",
      slug: "pt-mitra-sejati",
    },
    {
      image: "8.png",
      name: "PT. Mitra Sejati",
      slug: "pt-mitra-sejati",
    },
  ]);

  return (
    <GenericLayout
      title="Partners"
      hero={{
        className: "h-[30vw]",
        display: (
          <Hero.BreadcumbDisplay
            path={[{ name: "Beranda", href: route("home") }, "Mitra"]}
            title="Mitra"
            description="Mitra CSR Kabupaten Cirebon"
          />
        ),
      }}
    >
      <section className="px-25 py-15 w-full flex justify-center">
        <div className="flex flex-col gap-10 container items-center">
          <div className="flex flex-col gap-8 w-full">
            <div className="flex gap-6 w-full">
              <Select
                options={[
                  { text: "Laporan Terbanyak", value: "laporan-terbanyak" },
                ]}
                onChange={(_) => {}}
                classNames={{
                  button: "w-60",
                }}
              />
              <Input
                type="search"
                size="md"
                classNames={{ wrapper: "grow p-3.5" }}
                placeholder="Cari mitra..."
              />
            </div>
          </div>
          <div className="w-full grid grid-cols-4 gap-x-8 gap-y-16">
            {partners.map((partner) => (
              <Card
                key={partner.slug}
                {...partner}
                href={route("partner-detail", { slug: partner.slug })}
                image={`/images/partners/${partner.image}`}
                classNames={{
                  image: "w-62 h-auto",
                }}
              >
                <p className="font-semibold text-xl+ leading-6.75 text-base-chinese-black line-clamp-3">
                  {partner.name}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </GenericLayout>
  );
}
