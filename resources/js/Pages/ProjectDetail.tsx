import Button from "@/Components/Button";
import Divider from "@/Components/Divider";
import Hero from "@/Components/Hero";
import Table from "@/Components/Table";
import GenericLayout from "@/Layouts/GenericLayout";
import { router } from "@inertiajs/react";
import { IconEye } from "@tabler/icons-react";
import { format, subDays } from "date-fns";
import { useState } from "react";

type ProjectDetailProps = {
  sectorSlug: string;
  projectSlug: string;
};

type Project = {
  sector: {
    name: string;
    slug: string;
  };
  name: string;
  startDate: Date;
  endDate: Date;
  unit: string;
  description: string;
  gallery: string[];
  partners: {
    name: string;
    email: string;
    telephone: string;
    submissionDate: Date;
    slug: string;
  }[];
};

export default function ProjectDetail({
  sectorSlug,
  projectSlug,
}: ProjectDetailProps) {
  const [project, setProject] = useState<Project>({
    name: "Sosial",
    sector: {
      name: "Sosial",
      slug: "sosial",
    },
    startDate: subDays(new Date(), 7),
    endDate: new Date(),
    unit: "UPTD Pusat Pelayanan Sosial Griya Wanita Mandiri, Kab Cirebon",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias aut dignissimos, ab sunt sit laborum nobis reprehenderit, repudiandae, architecto labore doloribus est. Modi eaque, provident voluptas cupiditate suscipit corporis nihil.",
    gallery: ["1.png", "1.png", "1.png", "1.png"],
    partners: [
      {
        name: "GITS Indonesia",
        email: "info@gits.id",
        telephone: "022 677 ####",
        submissionDate: subDays(new Date(), 2),
        slug: "gits-indonesia",
      },
      {
        name: "Eudeka!",
        email: "info@eudeka@gits.id",
        telephone: "022 667 ####",
        submissionDate: new Date(),
        slug: "eudeka",
      },
    ],
  });

  return (
    <GenericLayout
      title={`Proyek ${project.name}`}
      hero={{
        className: "h-[30vw]",
        display: (
          <Hero.BreadcumbDisplay
            path={[
              { name: "Beranda", href: route("home") },
              { name: "Program", href: route("sectors") },
              {
                name: project.sector.name,
                href: route("sector-detail", { slug: project.sector.slug }),
              },
              "Proyek",
            ]}
            title={project.name}
          >
            <div className="flex gap-2 text-sm leading-6.25 text-white">
              <p>Mulai: {format(project.startDate, "MMM d, y")}</p>
              <p>·</p>
              <p>Akhir: {format(project.endDate, "MMM d, y")}</p>
            </div>
            <p className="text-sm leading-6.25 text-white">{project.unit}</p>
          </Hero.BreadcumbDisplay>
        ),
      }}
    >
      <section className="px-25 py-15 w-full">
        <div className="flex flex-col container items-center gap-10">
          <div className="w-full flex flex-col gap-5">
            <div className="flex flex-col">
              <Divider />
              <h2 className="font-bold text-4.5xl leading-12 text-base-black-pearl">
                Deskripsi Proyek
              </h2>
            </div>
            <p className="text-xl leading-7.5 text-base-sonic-silver">
              {project.description}
            </p>
          </div>
          <div className="w-full flex flex-col gap-5">
            <h2 className="font-semibold text-2xl leading-7 text-brand-gray-900">
              Galeri
            </h2>
            <div className="grid grid-cols-4 gap-4">
              {project.gallery.map((image, index) => (
                <img
                  key={index}
                  src={`/images/sectors/projects/${image}`}
                  alt=""
                  className="w-full h-45.75 object-cover"
                />
              ))}
            </div>
          </div>
          <div className="w-full flex flex-col gap-5">
            <h2 className="font-bold text-3.5xl leading-9.75 text-base-black-pearl mb-5">
              Mitra yang berpartisipasi
            </h2>
            <Table
              className="w-full border border-brand-gray-200"
              columns={[
                {
                  name: (
                    <div className="flex items-center h-15.5 px-6 py-3 bg-brand-gray-100">
                      <p className="text-brand-gray-600 font-bold text-xs leading-4.5 uppercase">
                        Nama Mitra
                      </p>
                    </div>
                  ),
                  data: project.partners.map((partner) => (
                    <div className="flex items-center h-18 px-6 py-4">
                      <p className="text-sm leading-5 text-brand-gray-600">
                        {partner.name}
                      </p>
                    </div>
                  )),
                },
                {
                  name: (
                    <div className="flex items-center h-15.5 px-6 py-3 bg-brand-gray-100">
                      <p className="text-brand-gray-600 font-bold text-xs leading-4.5 uppercase">
                        Email
                      </p>
                    </div>
                  ),
                  data: project.partners.map((partner) => (
                    <div className="flex items-center h-18 px-6 py-4">
                      <a
                        className="font-semibold text-sm leading-5 text-brand-primary-blue-700 underline underline-offset-[3px] cursor-pointer"
                        href={`mailto:${partner.email}`}
                      >
                        {partner.email}
                      </a>
                    </div>
                  )),
                },
                {
                  name: (
                    <div className="flex items-center h-15.5 px-6 py-3 bg-brand-gray-100">
                      <p className="text-brand-gray-600 font-bold text-xs leading-4.5 uppercase">
                        No. Telepon
                      </p>
                    </div>
                  ),
                  data: project.partners.map((partner) => (
                    <div className="flex items-center h-18 px-6 py-4">
                      <p className="text-sm leading-5 text-brand-gray-600">
                        {partner.telephone}
                      </p>
                    </div>
                  )),
                },
                {
                  name: (
                    <div className="flex items-center h-15.5 px-6 py-3 bg-brand-gray-100">
                      <p className="text-brand-gray-600 font-bold text-xs leading-4.5 uppercase">
                        Tanggal Pengajuan
                      </p>
                    </div>
                  ),
                  data: project.partners.map((partner) => (
                    <div className="flex items-center h-18 px-6 py-4">
                      <p className="text-sm leading-5 text-brand-gray-600">
                        {format(partner.submissionDate, "d MMMM y")}
                      </p>
                    </div>
                  )),
                },
                {
                  name: (
                    <div className="flex items-center h-15.5 px-6 py-3 bg-brand-gray-100">
                      <p className="text-brand-gray-600 font-bold text-xs leading-4.5 uppercase">
                        Aksi
                      </p>
                    </div>
                  ),
                  data: project.partners.map((partner) => (
                    <div className="flex items-center h-18 px-6 py-4">
                      <Button
                        size="md"
                        hierarchy="primary"
                        iconLeading={IconEye}
                        text="Lihat detail"
                        className="whitespace-nowrap"
                        onClick={() =>
                          router.visit(
                            route("partner-detail", {
                              slug: partner.slug,
                            })
                          )
                        }
                      />
                    </div>
                  )),
                },
              ]}
            />
          </div>
        </div>
      </section>
    </GenericLayout>
  );
}
