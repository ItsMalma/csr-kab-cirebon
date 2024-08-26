import Button from "@/Components/Button";
import Divider from "@/Components/Divider";
import Hero from "@/Components/Hero";
import Table from "@/Components/Table";
import GenericLayout from "@/Layouts/GenericLayout";
import { router } from "@inertiajs/react";
import { IconChevronRight, IconEye } from "@tabler/icons-react";
import { useRef, useState } from "react";
import { twJoin } from "tailwind-merge";

type SectorDetailProps = {
  slug: string;
};

type Sector = {
  name: string;
  programs: {
    name: string;
    projects: {
      name: string;
      unit: string;
      slug: string;
    }[];
  }[];
};

export default function SectorDetail({ slug }: SectorDetailProps) {
  const [sector, setSector] = useState<Sector>({
    name: "Sosial",
    programs: [
      {
        name: "Rehabilitasi sosial",
        projects: [
          {
            name: "Pengadaan sarana keterampilan Olahan Pangan",
            unit: "UPTD Pusat Pelayanan Sosial Griya Wanita Mandiri, Kab Cirebon",
            slug: "pengadaan-sarana-keterampilan-olahan-pangan",
          },
          {
            name: "Pengadaan sarana keterampilan Olahan Pangan",
            unit: "UPTD Pusat Pelayanan Sosial Griya Wanita Mandiri, Kab Cirebon",
            slug: "pengadaan-sarana-keterampilan-olahan-pangan",
          },
          {
            name: "Pengadaan sarana keterampilan Olahan Pangan",
            unit: "UPTD Pusat Pelayanan Sosial Griya Wanita Mandiri, Kab Cirebon",
            slug: "pengadaan-sarana-keterampilan-olahan-pangan",
          },
          {
            name: "Pengadaan sarana keterampilan Olahan Pangan",
            unit: "UPTD Pusat Pelayanan Sosial Griya Wanita Mandiri, Kab Cirebon",
            slug: "pengadaan-sarana-keterampilan-olahan-pangan",
          },
          {
            name: "Pengadaan sarana keterampilan Olahan Pangan",
            unit: "UPTD Pusat Pelayanan Sosial Griya Wanita Mandiri, Kab Cirebon",
            slug: "pengadaan-sarana-keterampilan-olahan-pangan",
          },
          {
            name: "Pengadaan sarana keterampilan Olahan Pangan",
            unit: "UPTD Pusat Pelayanan Sosial Griya Wanita Mandiri, Kab Cirebon",
            slug: "pengadaan-sarana-keterampilan-olahan-pangan",
          },
          {
            name: "Pengadaan sarana keterampilan Olahan Pangan",
            unit: "UPTD Pusat Pelayanan Sosial Griya Wanita Mandiri, Kab Cirebon",
            slug: "pengadaan-sarana-keterampilan-olahan-pangan",
          },
          {
            name: "Pengadaan sarana keterampilan Olahan Pangan",
            unit: "UPTD Pusat Pelayanan Sosial Griya Wanita Mandiri, Kab Cirebon",
            slug: "pengadaan-sarana-keterampilan-olahan-pangan",
          },
          {
            name: "Pengadaan sarana keterampilan Olahan Pangan",
            unit: "UPTD Pusat Pelayanan Sosial Griya Wanita Mandiri, Kab Cirebon",
            slug: "pengadaan-sarana-keterampilan-olahan-pangan",
          },
        ],
      },
      {
        name: "Jaminan sosial",
        projects: [
          {
            name: "Pengadaan sarana keterampilan Olahan Pangan",
            unit: "UPTD Pusat Pelayanan Sosial Griya Wanita Mandiri, Kab Cirebon",
            slug: "pengadaan-sarana-keterampilan-olahan-pangan",
          },
          {
            name: "Pengadaan sarana keterampilan Olahan Pangan",
            unit: "UPTD Pusat Pelayanan Sosial Griya Wanita Mandiri, Kab Cirebon",
            slug: "pengadaan-sarana-keterampilan-olahan-pangan",
          },
          {
            name: "Pengadaan sarana keterampilan Olahan Pangan",
            unit: "UPTD Pusat Pelayanan Sosial Griya Wanita Mandiri, Kab Cirebon",
            slug: "pengadaan-sarana-keterampilan-olahan-pangan",
          },
          {
            name: "Pengadaan sarana keterampilan Olahan Pangan",
            unit: "UPTD Pusat Pelayanan Sosial Griya Wanita Mandiri, Kab Cirebon",
            slug: "pengadaan-sarana-keterampilan-olahan-pangan",
          },
          {
            name: "Pengadaan sarana keterampilan Olahan Pangan",
            unit: "UPTD Pusat Pelayanan Sosial Griya Wanita Mandiri, Kab Cirebon",
            slug: "pengadaan-sarana-keterampilan-olahan-pangan",
          },
          {
            name: "Pengadaan sarana keterampilan Olahan Pangan",
            unit: "UPTD Pusat Pelayanan Sosial Griya Wanita Mandiri, Kab Cirebon",
            slug: "pengadaan-sarana-keterampilan-olahan-pangan",
          },
          {
            name: "Pengadaan sarana keterampilan Olahan Pangan",
            unit: "UPTD Pusat Pelayanan Sosial Griya Wanita Mandiri, Kab Cirebon",
            slug: "pengadaan-sarana-keterampilan-olahan-pangan",
          },
          {
            name: "Pengadaan sarana keterampilan Olahan Pangan",
            unit: "UPTD Pusat Pelayanan Sosial Griya Wanita Mandiri, Kab Cirebon",
            slug: "pengadaan-sarana-keterampilan-olahan-pangan",
          },
          {
            name: "Pengadaan sarana keterampilan Olahan Pangan",
            unit: "UPTD Pusat Pelayanan Sosial Griya Wanita Mandiri, Kab Cirebon",
            slug: "pengadaan-sarana-keterampilan-olahan-pangan",
          },
          {
            name: "Pengadaan sarana keterampilan Olahan Pangan",
            unit: "UPTD Pusat Pelayanan Sosial Griya Wanita Mandiri, Kab Cirebon",
            slug: "pengadaan-sarana-keterampilan-olahan-pangan",
          },
          {
            name: "Pengadaan sarana keterampilan Olahan Pangan",
            unit: "UPTD Pusat Pelayanan Sosial Griya Wanita Mandiri, Kab Cirebon",
            slug: "pengadaan-sarana-keterampilan-olahan-pangan",
          },
          {
            name: "Pengadaan sarana keterampilan Olahan Pangan",
            unit: "UPTD Pusat Pelayanan Sosial Griya Wanita Mandiri, Kab Cirebon",
            slug: "pengadaan-sarana-keterampilan-olahan-pangan",
          },
          {
            name: "Pengadaan sarana keterampilan Olahan Pangan",
            unit: "UPTD Pusat Pelayanan Sosial Griya Wanita Mandiri, Kab Cirebon",
            slug: "pengadaan-sarana-keterampilan-olahan-pangan",
          },
        ],
      },
      {
        name: "Pemberdayaan sosial",
        projects: [
          {
            name: "Pengadaan sarana keterampilan Olahan Pangan",
            unit: "UPTD Pusat Pelayanan Sosial Griya Wanita Mandiri, Kab Cirebon",
            slug: "pengadaan-sarana-keterampilan-olahan-pangan",
          },
        ],
      },
      {
        name: "Perlindungan sosial terhadap PMKS",
        projects: [],
      },
      {
        name: "Lainnya",
        projects: [
          {
            name: "Pengadaan sarana keterampilan Olahan Pangan",
            unit: "UPTD Pusat Pelayanan Sosial Griya Wanita Mandiri, Kab Cirebon",
            slug: "pengadaan-sarana-keterampilan-olahan-pangan",
          },
          {
            name: "Pengadaan sarana keterampilan Olahan Pangan",
            unit: "UPTD Pusat Pelayanan Sosial Griya Wanita Mandiri, Kab Cirebon",
            slug: "pengadaan-sarana-keterampilan-olahan-pangan",
          },
          {
            name: "Pengadaan sarana keterampilan Olahan Pangan",
            unit: "UPTD Pusat Pelayanan Sosial Griya Wanita Mandiri, Kab Cirebon",
            slug: "pengadaan-sarana-keterampilan-olahan-pangan",
          },
          {
            name: "Pengadaan sarana keterampilan Olahan Pangan",
            unit: "UPTD Pusat Pelayanan Sosial Griya Wanita Mandiri, Kab Cirebon",
            slug: "pengadaan-sarana-keterampilan-olahan-pangan",
          },
          {
            name: "Pengadaan sarana keterampilan Olahan Pangan",
            unit: "UPTD Pusat Pelayanan Sosial Griya Wanita Mandiri, Kab Cirebon",
            slug: "pengadaan-sarana-keterampilan-olahan-pangan",
          },
          {
            name: "Pengadaan sarana keterampilan Olahan Pangan",
            unit: "UPTD Pusat Pelayanan Sosial Griya Wanita Mandiri, Kab Cirebon",
            slug: "pengadaan-sarana-keterampilan-olahan-pangan",
          },
          {
            name: "Pengadaan sarana keterampilan Olahan Pangan",
            unit: "UPTD Pusat Pelayanan Sosial Griya Wanita Mandiri, Kab Cirebon",
            slug: "pengadaan-sarana-keterampilan-olahan-pangan",
          },
          {
            name: "Pengadaan sarana keterampilan Olahan Pangan",
            unit: "UPTD Pusat Pelayanan Sosial Griya Wanita Mandiri, Kab Cirebon",
            slug: "pengadaan-sarana-keterampilan-olahan-pangan",
          },
          {
            name: "Pengadaan sarana keterampilan Olahan Pangan",
            unit: "UPTD Pusat Pelayanan Sosial Griya Wanita Mandiri, Kab Cirebon",
            slug: "pengadaan-sarana-keterampilan-olahan-pangan",
          },
          {
            name: "Pengadaan sarana keterampilan Olahan Pangan",
            unit: "UPTD Pusat Pelayanan Sosial Griya Wanita Mandiri, Kab Cirebon",
            slug: "pengadaan-sarana-keterampilan-olahan-pangan",
          },
          {
            name: "Pengadaan sarana keterampilan Olahan Pangan",
            unit: "UPTD Pusat Pelayanan Sosial Griya Wanita Mandiri, Kab Cirebon",
            slug: "pengadaan-sarana-keterampilan-olahan-pangan",
          },
          {
            name: "Pengadaan sarana keterampilan Olahan Pangan",
            unit: "UPTD Pusat Pelayanan Sosial Griya Wanita Mandiri, Kab Cirebon",
            slug: "pengadaan-sarana-keterampilan-olahan-pangan",
          },
          {
            name: "Pengadaan sarana keterampilan Olahan Pangan",
            unit: "UPTD Pusat Pelayanan Sosial Griya Wanita Mandiri, Kab Cirebon",
            slug: "pengadaan-sarana-keterampilan-olahan-pangan",
          },
          {
            name: "Pengadaan sarana keterampilan Olahan Pangan",
            unit: "UPTD Pusat Pelayanan Sosial Griya Wanita Mandiri, Kab Cirebon",
            slug: "pengadaan-sarana-keterampilan-olahan-pangan",
          },
          {
            name: "Pengadaan sarana keterampilan Olahan Pangan",
            unit: "UPTD Pusat Pelayanan Sosial Griya Wanita Mandiri, Kab Cirebon",
            slug: "pengadaan-sarana-keterampilan-olahan-pangan",
          },
          {
            name: "Pengadaan sarana keterampilan Olahan Pangan",
            unit: "UPTD Pusat Pelayanan Sosial Griya Wanita Mandiri, Kab Cirebon",
            slug: "pengadaan-sarana-keterampilan-olahan-pangan",
          },
          {
            name: "Pengadaan sarana keterampilan Olahan Pangan",
            unit: "UPTD Pusat Pelayanan Sosial Griya Wanita Mandiri, Kab Cirebon",
            slug: "pengadaan-sarana-keterampilan-olahan-pangan",
          },
          {
            name: "Pengadaan sarana keterampilan Olahan Pangan",
            unit: "UPTD Pusat Pelayanan Sosial Griya Wanita Mandiri, Kab Cirebon",
            slug: "pengadaan-sarana-keterampilan-olahan-pangan",
          },
          {
            name: "Pengadaan sarana keterampilan Olahan Pangan",
            unit: "UPTD Pusat Pelayanan Sosial Griya Wanita Mandiri, Kab Cirebon",
            slug: "pengadaan-sarana-keterampilan-olahan-pangan",
          },
          {
            name: "Pengadaan sarana keterampilan Olahan Pangan",
            unit: "UPTD Pusat Pelayanan Sosial Griya Wanita Mandiri, Kab Cirebon",
            slug: "pengadaan-sarana-keterampilan-olahan-pangan",
          },
          {
            name: "Pengadaan sarana keterampilan Olahan Pangan",
            unit: "UPTD Pusat Pelayanan Sosial Griya Wanita Mandiri, Kab Cirebon",
            slug: "pengadaan-sarana-keterampilan-olahan-pangan",
          },
          {
            name: "Pengadaan sarana keterampilan Olahan Pangan",
            unit: "UPTD Pusat Pelayanan Sosial Griya Wanita Mandiri, Kab Cirebon",
            slug: "pengadaan-sarana-keterampilan-olahan-pangan",
          },
          {
            name: "Pengadaan sarana keterampilan Olahan Pangan",
            unit: "UPTD Pusat Pelayanan Sosial Griya Wanita Mandiri, Kab Cirebon",
            slug: "pengadaan-sarana-keterampilan-olahan-pangan",
          },
        ],
      },
    ],
  });

  const [sectorIndex, setSectorIndex] = useState(0);

  const refPrograms = useRef<HTMLDivElement>(null);

  return (
    <GenericLayout
      title={`Sektor ${sector.name}`}
      hero={{
        className: "h-[30vw]",
        display: (
          <Hero.BreadcumbDisplay
            path={[
              { name: "Beranda", href: route("home") },
              { name: "Sektor", href: route("sectors") },
              sector.name,
            ]}
            title={sector.name}
            description="Program CSR yang sudah berjalan di kabupaten cirebon"
          />
        ),
      }}
    >
      <section className="px-25 pt-16 pb-15 w-full">
        <div className="flex flex-col container pb-5">
          <Divider />
          <div className="flex gap-6">
            <p className="basis-1/2 text-base leading-6 text-base-sonic-silver">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
              aut dignissimos, ab sunt sit laborum nobis reprehenderit,
              repudiandae, architecto labore doloribus est. Modi eaque,
              provident voluptas cupiditate suscipit corporis nihil.
            </p>
            <p className="basis-1/2 text-base leading-6 text-base-sonic-silver">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
              aut dignissimos, ab sunt sit laborum nobis reprehenderit,
              repudiandae, architecto labore doloribus est. Modi eaque,
              provident voluptas cupiditate suscipit corporis nihil. Lorem ipsum
              dolor sit, amet consectetur adipisicing elit. Nulla delectus rem
              doloremque, deleniti nesciunt iusto voluptatibus, laborum
              voluptatum quod alias officia vero! Ea natus accusantium eius
              dolorum. Sit, debitis saepe.
            </p>
          </div>
        </div>
      </section>
      <section className="px-25 py-15 w-full">
        <div className="flex flex-col gap-16 items-center container">
          <div className="w-full flex flex-col gap-5">
            <div className="flex flex-col">
              <Divider />
              <h2 className="font-bold text-4.5xl leading-12 text-base-black-pearl">
                Program CSR
              </h2>
            </div>
            <p className="text-xl leading-7.5 text-base-sonic-silver">
              Bidang program CSR Kabupaten Cirebon yang tersedia
            </p>
          </div>
          <div ref={refPrograms} className="w-full flex gap-16 relative">
            <div className="grow h-full flex flex-col sticky top-19.5 bottom-0 left-0">
              {sector.programs.map((program, index) => (
                <div
                  key={program.name}
                  className={twJoin(
                    "flex flex-col gap-2 p-4 pl-6 border-l-4 cursor-pointer",
                    sectorIndex === index
                      ? "bg-brand-primary-red-50 border-brand-primary-red-400"
                      : "border-brand-gray-200"
                  )}
                  onClick={() => {
                    setSectorIndex(index);
                    if (refPrograms.current) {
                      window.scrollTo({
                        top: refPrograms.current.offsetTop - 80,
                      });
                    }
                  }}
                >
                  <div className="w-full flex items-center gap-2">
                    <h3
                      className={twJoin(
                        "grow text-xl leading-7.5 text-base-chinese-black",
                        sectorIndex === index && "font-bold"
                      )}
                    >
                      {program.name}
                    </h3>
                    <div className="w-6 h-6">
                      <IconChevronRight size={24} />
                    </div>
                  </div>
                  <p className="font-semibold text-base leading-6 text-base-sonic-silver">
                    {program.projects.length} proyek
                  </p>
                </div>
              ))}
            </div>
            <Table
              className="self-start min-w-200 max-w-200"
              headless
              columns={[
                {
                  name: "Nama Proyek",
                  data: sector.programs[sectorIndex].projects.map((project) => (
                    <div className="flex px-6 py-4">
                      <p className="text-sm leading-5 text-brand-gray-600">
                        {project.name}
                      </p>
                    </div>
                  )),
                },
                {
                  name: "Unit Pelaksana",
                  data: sector.programs[sectorIndex].projects.map((project) => (
                    <div className="flex px-6 py-4">
                      <p className="text-sm leading-5 text-brand-gray-600">
                        {project.unit}
                      </p>
                    </div>
                  )),
                },
                {
                  name: "Lihat Detail",
                  data: sector.programs[sectorIndex].projects.map((project) => (
                    <div className="flex px-6 py-4">
                      <Button
                        size="md"
                        hierarchy="primary"
                        iconLeading={IconEye}
                        text="Lihat detail"
                        className="whitespace-nowrap"
                        onClick={() =>
                          router.visit(
                            route("project-detail", {
                              sectorSlug: slug,
                              projectSlug: project.slug,
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
