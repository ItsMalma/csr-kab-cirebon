import Button from "@/Components/Button";
import Card, { CardArticleProps } from "@/Components/Card";
import Hero from "@/Components/Hero";
import Input from "@/Components/Input";
import Select from "@/Components/Select";
import GenericLayout from "@/Layouts/GenericLayout";
import { IconSearch } from "@tabler/icons-react";
import { useState } from "react";

type Report = Pick<
  CardArticleProps,
  "image" | "title" | "description" | "date" | "author"
> & {
  slug: string;
};

export default function Reports() {
  const [reports, setReports] = useState<Report[]>([
    {
      image: "placeholder.png",
      title: "Judul Laporan Terbaru",
      description:
        "Praesent viverra sapien congue aliquet viverra maecenas sed bibendum. Elementum risus accu...",
      date: new Date(),
      author: {
        name: "John Doe",
        avatar: "1.webp",
      },
      slug: "judul-laporan-terbaru",
    },
    {
      image: "placeholder.png",
      title: "Judul Laporan Terbaru",
      description:
        "Praesent viverra sapien congue aliquet viverra maecenas sed bibendum. Elementum risus accu...",
      date: new Date(),
      author: {
        name: "John Doe",
        avatar: "1.webp",
      },
      slug: "judul-laporan-terbaru",
    },
    {
      image: "placeholder.png",
      title: "Judul Laporan Terbaru",
      description:
        "Praesent viverra sapien congue aliquet viverra maecenas sed bibendum. Elementum risus accu...",
      date: new Date(),
      author: {
        name: "John Doe",
        avatar: "1.webp",
      },
      slug: "judul-laporan-terbaru",
    },
    {
      image: "placeholder.png",
      title: "Judul Laporan Terbaru",
      description:
        "Praesent viverra sapien congue aliquet viverra maecenas sed bibendum. Elementum risus accu...",
      date: new Date(),
      author: {
        name: "John Doe",
        avatar: "1.webp",
      },
      slug: "judul-laporan-terbaru",
    },
    {
      image: "placeholder.png",
      title: "Judul Laporan Terbaru",
      description:
        "Praesent viverra sapien congue aliquet viverra maecenas sed bibendum. Elementum risus accu...",
      date: new Date(),
      author: {
        name: "John Doe",
        avatar: "1.webp",
      },
      slug: "judul-laporan-terbaru",
    },
    {
      image: "placeholder.png",
      title: "Judul Laporan Terbaru",
      description:
        "Praesent viverra sapien congue aliquet viverra maecenas sed bibendum. Elementum risus accu...",
      date: new Date(),
      author: {
        name: "John Doe",
        avatar: "1.webp",
      },
      slug: "judul-laporan-terbaru",
    },
    {
      image: "placeholder.png",
      title: "Judul Laporan Terbaru",
      description:
        "Praesent viverra sapien congue aliquet viverra maecenas sed bibendum. Elementum risus accu...",
      date: new Date(),
      author: {
        name: "John Doe",
        avatar: "1.webp",
      },
      slug: "judul-laporan-terbaru",
    },
    {
      image: "placeholder.png",
      title: "Judul Laporan Terbaru",
      description:
        "Praesent viverra sapien congue aliquet viverra maecenas sed bibendum. Elementum risus accu...",
      date: new Date(),
      author: {
        name: "John Doe",
        avatar: "1.webp",
      },
      slug: "judul-laporan-terbaru",
    },
  ]);

  return (
    <GenericLayout
      title="Report"
      hero={{
        className: "h-[30vw]",
        display: (
          <Hero.BreadcumbDisplay
            path={[{ name: "Beranda", href: route("home") }, "Laporan"]}
            title="Laporan"
            description="Laporan terkini dari CSR Kabupaten Cirebon"
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
                  { text: "Terbaru", value: "terbaru" },
                  { text: "Populer", value: "populer" },
                ]}
                onChange={(_) => {}}
                classNames={{
                  button: "w-60",
                }}
              />
              <Select<string, string | number>
                options={[{ text: "Semua Mitra", value: 1 }]}
                onChange={(_) => {}}
                classNames={{
                  button: "w-60",
                }}
              />
              <Input
                size="md"
                classNames={{ wrapper: "grow" }}
                icon={IconSearch}
                placeholder="Cari laporan..."
              />
            </div>
          </div>
          <div className="grid grid-cols-4 gap-x-8 gap-y-16">
            {reports.map((report) => (
              <Card.Article
                key={report.slug}
                {...report}
                href={route("report-detail", { slug: report.slug })}
                image={`/images/reports/${report.image}`}
              />
            ))}
          </div>
          <Button
            size="lg"
            hierarchy="secondary gray"
            text="Muat lebih banyak"
            className="w-fit h-13 text-base"
          />
        </div>
      </section>
    </GenericLayout>
  );
}
