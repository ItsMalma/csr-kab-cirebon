import Button from "@/Components/Button";
import Card, { CardProps } from "@/Components/Card";
import Divider from "@/Components/Divider";
import Hero from "@/Components/Hero";
import Input from "@/Components/Input";
import Select from "@/Components/Select";
import GenericLayout from "@/Layouts/GenericLayout";
import { router } from "@inertiajs/react";
import { IconCalendar, IconHash, IconMapPin } from "@tabler/icons-react";
import { format } from "date-fns";
import { useState } from "react";

type Sector = Omit<CardProps, "children" | "date" | "href"> & {
  title: string;
  available: number;
  slug: string;
};

type Project = Omit<CardProps, "children" | "date" | "href"> & {
  title: string;
  address: string;
  sector: {
    name: string;
    slug: string;
  };
  endDate: Date;
  slug: string;
};

export default function Sectors() {
  const [sectors, setSectors] = useState<Sector[]>([
    {
      image: "/images/sectors/1.png",
      title: "Sosial",
      available: 10,
      slug: "sosial",
    },
    {
      image: "/images/sectors/1.png",
      title: "Lingkungan",
      available: 10,
      slug: "lingkungan",
    },
    {
      image: "/images/sectors/1.png",
      title: "Kesehatan",
      available: 10,
      slug: "kesehatan",
    },
    {
      image: "/images/sectors/1.png",
      title: "Pendidikan",
      available: 10,
      slug: "pendidikan",
    },
    {
      image: "/images/sectors/1.png",
      title: "Infrastruktur dan sanitasi lingkungan",
      available: 10,
      slug: "infrastruktur-dan-sanitasi-lingkungan",
    },
    {
      image: "/images/sectors/1.png",
      title: "Sarana dan Prasarana keagamaan",
      available: 10,
      slug: "sarana-dan-prasarana-keagamaan",
    },
    {
      image: "/images/sectors/1.png",
      title: "Lainnya",
      available: 10,
      slug: "lainnya",
    },
  ]);

  const [projects, setProjects] = useState<Project[]>([
    {
      image: "/images/sectors/projects/1.png",
      title: "Judul Proyek Terbaru.",
      address:
        "Jl. Sunan Kalijaga No.7, Sumber, Kec. Sumber, Kabupaten Cirebon, Jawa Barat 45611",
      sector: { name: "Sosial", slug: "sosial" },
      endDate: new Date(),
      slug: "judul-proyek-terbaru",
    },
    {
      image: "/images/sectors/projects/2.png",
      title: "Judul Proyek Terbaru.",
      address:
        "Jl. Sunan Kalijaga No.7, Sumber, Kec. Sumber, Kabupaten Cirebon, Jawa Barat 45611",
      sector: { name: "Sosial", slug: "sosial" },
      endDate: new Date(),
      slug: "judul-proyek-terbaru",
    },
    {
      image: "/images/sectors/projects/3.png",
      title: "Judul Proyek Terbaru.",
      address:
        "Jl. Sunan Kalijaga No.7, Sumber, Kec. Sumber, Kabupaten Cirebon, Jawa Barat 45611",
      sector: { name: "Sosial", slug: "sosial" },
      endDate: new Date(),
      slug: "judul-proyek-terbaru",
    },
    {
      image: "/images/sectors/projects/1.png",
      title: "Judul Proyek Terbaru.",
      address:
        "Jl. Sunan Kalijaga No.7, Sumber, Kec. Sumber, Kabupaten Cirebon, Jawa Barat 45611",
      sector: { name: "Sosial", slug: "sosial" },
      endDate: new Date(),
      slug: "judul-proyek-terbaru",
    },
    {
      image: "/images/sectors/projects/2.png",
      title: "Judul Proyek Terbaru.",
      address:
        "Jl. Sunan Kalijaga No.7, Sumber, Kec. Sumber, Kabupaten Cirebon, Jawa Barat 45611",
      sector: { name: "Sosial", slug: "sosial" },
      endDate: new Date(),
      slug: "judul-proyek-terbaru",
    },
    {
      image: "/images/sectors/projects/3.png",
      title: "Judul Proyek Terbaru.",
      address:
        "Jl. Sunan Kalijaga No.7, Sumber, Kec. Sumber, Kabupaten Cirebon, Jawa Barat 45611",
      sector: { name: "Sosial", slug: "sosial" },
      endDate: new Date(),
      slug: "judul-proyek-terbaru",
    },
    {
      image: "/images/sectors/projects/1.png",
      title: "Judul Proyek Terbaru.",
      address:
        "Jl. Sunan Kalijaga No.7, Sumber, Kec. Sumber, Kabupaten Cirebon, Jawa Barat 45611",
      sector: { name: "Sosial", slug: "sosial" },
      endDate: new Date(),
      slug: "judul-proyek-terbaru",
    },
    {
      image: "/images/sectors/projects/2.png",
      title: "Judul Proyek Terbaru.",
      address:
        "Jl. Sunan Kalijaga No.7, Sumber, Kec. Sumber, Kabupaten Cirebon, Jawa Barat 45611",
      sector: { name: "Sosial", slug: "sosial" },
      endDate: new Date(),
      slug: "judul-proyek-terbaru",
    },
  ]);

  return (
    <GenericLayout
      title="Sectors"
      hero={{
        className: "h-[30vw]",
        display: (
          <Hero.BreadcumbDisplay
            path={[{ name: "Beranda", href: route("home") }, "Sektor"]}
            title="Sektor"
            description="Program CSR yang sudah berjalan di kabupaten cirebon"
          />
        ),
      }}
    >
      <section className="px-25 pt-15 pb-24 w-full flex justify-center">
        <div className="flex flex-col gap-16 items-center container">
          <div className="flex flex-col gap-5">
            <div className="flex flex-col items-center">
              <Divider />
              <h2 className="font-bold text-4.5xl leading-12 text-base-black-pearl">
                Sektor CSR
              </h2>
            </div>
            <p className="text-xl leading-7.5 text-base-sonic-silver">
              Bidang program CSR Kabupaten Cirebon yang tersedia
            </p>
          </div>
          <div className="grid grid-cols-4 gap-x-8 gap-y-16">
            {sectors.map((sector) => (
              <Card key={sector.slug} {...sector}>
                <h3 className="grow font-semibold text-xl+ leading-6.75 text-base-chinese-black">
                  {sector.title}
                </h3>
                <div className="w-fit flex p-2 bg-gray-iron-100">
                  <p className="font-semibold text-sm leading-6.25 text-base-sonic-silver">
                    Tersedia: {sector.available}
                  </p>
                </div>
                <Button
                  size="lg"
                  hierarchy="primary"
                  text="Lihat detail"
                  className="w-full"
                  onClick={() => {
                    router.visit(route("sector-detail", { slug: sector.slug }));
                  }}
                />
              </Card>
            ))}
          </div>
        </div>
      </section>
      <section className="px-25 py-15 w-full flex justify-center">
        <div className="flex flex-col gap-5 items-center container">
          <div className="w-full flex flex-col pb-5">
            <Divider />
            <h2 className="font-bold text-4.5xl leading-12 text-base-black-pearl">
              Proyek Tersedia
            </h2>
          </div>
          <div className="flex flex-col gap-6">
            <div className="flex gap-6">
              <Select
                classNames={{ button: "w-60" }}
                options={sectors.map((sector) => ({
                  text: sector.title,
                  value: sector.slug,
                }))}
                onChange={() => {}}
              />
              <Input
                type="search"
                size="md"
                classNames={{ wrapper: "grow p-3.5" }}
                placeholder="Cari proyek..."
              />
            </div>
            <div className="grid grid-cols-4 gap-x-8 gap-y-16">
              {projects.map((project) => (
                <Card
                  key={project.slug}
                  {...project}
                  href={route("project-detail", {
                    sectorSlug: project.sector.slug,
                    projectSlug: project.slug,
                  })}
                >
                  <h3 className="grow font-semibold text-xl+ leading-6.75 text-base-chinese-black">
                    {project.title}
                  </h3>
                  <div className="w-full flex gap-2 p-2 bg-gray-iron-100 text-base-sonic-silver items-start">
                    <div className="w-5 h-5">
                      <IconMapPin size={20} />
                    </div>
                    <p className="-translate-y-0.5 font-semibold text-sm leading-6.25 line-clamp-3">
                      {project.address}
                    </p>
                  </div>
                  <div className="w-full flex gap-2 p-2 bg-gray-iron-100 text-base-sonic-silver items-start">
                    <div className="w-5 h-5">
                      <IconHash size={20} />
                    </div>
                    <p className="-translate-y-0.5 font-semibold text-sm leading-6.25 line-clamp-3">
                      Sektor {project.sector.name}
                    </p>
                  </div>
                  <div className="w-full flex gap-2 p-2 bg-gray-iron-100 text-base-sonic-silver items-start">
                    <div className="w-5 h-5">
                      <IconCalendar size={20} />
                    </div>
                    <p className="-translate-y-0.5 font-semibold text-sm leading-6.25 line-clamp-3 whitespace-pre-line">
                      Tanggal Berakhir:{"\n"}
                      {format(project.endDate, "MMM d, y")}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
          <div className="flex justify-center items-center pt-5">
            <Button
              size="lg"
              hierarchy="secondary gray"
              text="Muat lebih banyak"
              className="w-fit h-13 text-base"
            />
          </div>
        </div>
      </section>
    </GenericLayout>
  );
}
