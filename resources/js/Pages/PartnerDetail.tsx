import Article from "@/Components/Article";
import Button from "@/Components/Button";
import Card, { CardArticleProps } from "@/Components/Card";
import Divider from "@/Components/Divider";
import Hero from "@/Components/Hero";
import GenericLayout from "@/Layouts/GenericLayout";
import { useState } from "react";

type PartnerDetailProps = {
  slug: string;
};

type Partner = {
  name: string;
  pt: string;
  email: string;
  telephone: string;
  address: string;
  logo: string;
  description: string;
};

type PartnerReport = Pick<
  CardArticleProps,
  "image" | "title" | "description" | "date"
> & {
  slug: string;
};

export default function PartnerDetail({ slug }: PartnerDetailProps) {
  const [partner, setPartner] = useState<Partner>({
    name: "L'Oreal Indonesia Plant",
    pt: "PT. Yasulor Indonesia",
    email: "info@yasulor.com",
    telephone: "0821 1234 5678",
    address: "Jl. Lorem Ipsum Dolor Sit Amet",
    logo: "1.png",
    description: `
Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique, itaque possimus quas dolorum, est et maiores doloribus mollitia magni consequatur error, deleniti sapiente! Eaque corrupti, et mollitia commodi labore ullam!

Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam blanditiis harum veritatis possimus ratione saepe voluptas iure, fugiat dicta fugit esse recusandae amet in sit ad! Labore illum reprehenderit omnis.

Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum nobis magnam quia esse neque ipsa quidem! Eaque, aliquid ullam voluptas laborum non eveniet nemo aspernatur quam, totam, repudiandae ducimus porro.

Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci nemo laborum aperiam vero. Nulla sapiente necessitatibus deserunt, ratione voluptatem reiciendis molestias commodi neque incidunt totam vitae magnam quasi unde ipsam.
`,
  });

  const [partnerReports, setPartnerReports] = useState<PartnerReport[]>([
    {
      image: "placeholder.png",
      title: "Judul Laporan Terbaru",
      description:
        "Praesent viverra sapien congue aliquet viverra maecenas sed bibendum. Elementum risus accu...",
      date: new Date(),
      slug: "judul-laporan-terbaru",
    },
    {
      image: "placeholder.png",
      title: "Judul Laporan Terbaru",
      description:
        "Praesent viverra sapien congue aliquet viverra maecenas sed bibendum. Elementum risus accu...",
      date: new Date(),
      slug: "judul-laporan-terbaru",
    },
    {
      image: "placeholder.png",
      title: "Judul Laporan Terbaru",
      description:
        "Praesent viverra sapien congue aliquet viverra maecenas sed bibendum. Elementum risus accu...",
      date: new Date(),
      slug: "judul-laporan-terbaru",
    },
  ]);

  return (
    <GenericLayout
      title={partner.name}
      hero={{
        className: "h-[37vw]",
        display: (
          <Hero.BreadcumbDisplay
            path={[
              { name: "Beranda", href: route("home") },
              { name: "Mitra", href: route("partners") },
              "Detail",
            ]}
            title={`${partner.name} - ${partner.pt}`}
            classNames={{
              title: "text-5xl leading-14.5",
            }}
          >
            <div className="flex gap-2 text-sm leading-6.25 text-white">
              <p>{partner.pt}</p>
              <p>·</p>
              <p>{partner.email}</p>
              <p>·</p>
              <p>{partner.telephone}</p>
            </div>
            <p className="text-sm leading-6.25 text-base-white">
              {partner.address}
            </p>
          </Hero.BreadcumbDisplay>
        ),
      }}
    >
      <section className="px-8 py-24 w-full flex justify-center">
        <div className="flex flex-col container max-w-180 w-180">
          <Divider />
          <div className="my-12 w-full h-80 flex justify-center items-center bg-brand-gray-50">
            <img
              src={`/images/partners/${partner.logo}`}
              alt={`logo ${partner.name}`}
              className="w-64 h-auto object-cover"
            />
          </div>
          <Article content={partner.description} />
        </div>
      </section>
      <div className="px-8 w-full flex justify-center">
        <hr className="container" />
      </div>
      <section className="px-25 pt-15 pb-24 w-full flex justify-center">
        <div className="flex flex-col gap-16 container items-center">
          <div className="flex flex-col w-full">
            <Divider />
            <h2 className="font-bold text-4.5xl leading-12 text-base-black-pearl">
              Laporan Dari Mitra
            </h2>
          </div>
          <div className="grid grid-cols-3 gap-x-8 gap-y-16">
            {partnerReports.map((report) => (
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
            text="Lihat semua laporan"
            className="w-fit h-13 text-base"
          />
        </div>
      </section>
    </GenericLayout>
  );
}
