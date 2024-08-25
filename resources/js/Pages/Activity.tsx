import Button from "@/Components/Button";
import Card, { CardArticleProps } from "@/Components/Card";
import Hero from "@/Components/Hero";
import Input from "@/Components/Input";
import Select from "@/Components/Select";
import GenericLayout from "@/Layouts/GenericLayout";
import { IconSearch } from "@tabler/icons-react";
import { useState } from "react";

type Activity = Pick<
  CardArticleProps,
  "image" | "title" | "description" | "date"
> & {
  slug: string;
};

export default function Activity() {
  const [latestActivity, setLatestActivity] = useState<Activity[]>([
    {
      image: "/images/activities/daftar-1.png",
      title: "Judul Kegiatan Terbaru",
      description:
        "Praesent viverra sapien congue aliquet viverra maecenas sed bibendum. Elementum risus accu...",
      date: new Date(),
      slug: "judul-kegiatan-terbaru",
    },
    {
      image: "/images/activities/daftar-2.png",
      title: "Judul Kegiatan Terbaru",
      description:
        "Praesent viverra sapien congue aliquet viverra maecenas sed bibendum. Elementum risus accu...",
      date: new Date(),
      slug: "judul-kegiatan-terbaru",
    },
    {
      image: "/images/activities/daftar-3.png",
      title: "Judul Kegiatan Terbaru",
      description:
        "Praesent viverra sapien congue aliquet viverra maecenas sed bibendum. Elementum risus accu...",
      date: new Date(),
      slug: "judul-kegiatan-terbaru",
    },
    {
      image: "/images/activities/daftar-4.png",
      title: "Judul Kegiatan Terbaru",
      description:
        "Praesent viverra sapien congue aliquet viverra maecenas sed bibendum. Elementum risus accu...",
      date: new Date(),
      slug: "judul-kegiatan-terbaru",
    },
    {
      image: "/images/activities/daftar-1.png",
      title: "Judul Kegiatan Terbaru",
      description:
        "Praesent viverra sapien congue aliquet viverra maecenas sed bibendum. Elementum risus accu...",
      date: new Date(),
      slug: "judul-kegiatan-terbaru",
    },
    {
      image: "/images/activities/daftar-2.png",
      title: "Judul Kegiatan Terbaru",
      description:
        "Praesent viverra sapien congue aliquet viverra maecenas sed bibendum. Elementum risus accu...",
      date: new Date(),
      slug: "judul-kegiatan-terbaru",
    },
    {
      image: "/images/activities/daftar-3.png",
      title: "Judul Kegiatan Terbaru",
      description:
        "Praesent viverra sapien congue aliquet viverra maecenas sed bibendum. Elementum risus accu...",
      date: new Date(),
      slug: "judul-kegiatan-terbaru",
    },
    {
      image: "/images/activities/daftar-4.png",
      title: "Judul Kegiatan Terbaru",
      description:
        "Praesent viverra sapien congue aliquet viverra maecenas sed bibendum. Elementum risus accu...",
      date: new Date(),
      slug: "judul-kegiatan-terbaru",
    },
  ]);

  return (
    <GenericLayout
      title="Activity"
      hero={{
        className: "h-[30vw]",
        display: (
          <Hero.BreadcumbDisplay
            path={[{ name: "Beranda", href: route("home") }, "Kegiatan"]}
            title="Kegiatan"
            description="Kegiatan terkini dari CSR Kabupaten Cirebon"
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
              <Input
                size="md"
                classNames={{ wrapper: "grow" }}
                icon={IconSearch}
                placeholder="Cari kegiatan..."
              />
            </div>
          </div>
          <div className="grid grid-cols-4 gap-x-8 gap-y-16">
            {latestActivity.map((activity) => (
              <Card.Article
                key={activity.slug}
                {...activity}
                href={route("activity-detail", { slug: activity.slug })}
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
