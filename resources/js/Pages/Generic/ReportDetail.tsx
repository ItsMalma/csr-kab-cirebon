import Article from "@/Components/Article";
import Badge from "@/Components/Badge";
import Button from "@/Components/Button";
import Card, { CardArticleProps } from "@/Components/Card";
import Divider from "@/Components/Divider";
import Hero from "@/Components/Hero";
import GenericLayout from "@/Layouts/GenericLayout";
import { formatMoney } from "@/utils/format";
import { format } from "date-fns";
import { useState } from "react";

type ReportDetailProps = {
  slug: string;
};

type Report = {
  title: string;
  partner: {
    name: string;
    logo: string;
  };
  date: Date;
  sector: string;
  program: string;
  gallery: string[];
  realization: number;
  project: {
    name: string;
    district: string;
  };
  description: string;
};

type OtherReport = Pick<
  CardArticleProps,
  "image" | "title" | "description" | "date"
> & {
  slug: string;
};

export default function ReportDetail({ slug }: ReportDetailProps) {
  const [report, setReport] = useState<Report>({
    title: "Laporan pengadaan perkakas masak untuk desa",
    partner: {
      name: "PT Mitra Berbakti Sekali",
      logo: "1.png",
    },
    date: new Date(),
    sector: "Sosial",
    program: "Rehabilitasi Sosial",
    gallery: [
      "placeholder.png",
      "placeholder.png",
      "placeholder.png",
      "placeholder.png",
    ],
    realization: 10_000_000,
    project: {
      name: "Pengadaan sarana keterampilan Olahan Pangan",
      district: "Karangwareng",
    },
    description: `Eu venenatis sit elit venenatis. Pretium neque nunc urna auctor lacus. Eu nulla urna in maecenas urna mi auctor et velit. Diam montes tristique donec vitae maecenas at vulputate. Scelerisque ultricies ullamcorper elementum bibendum at enim ac. Vel sed nibh mi donec non metus ipsum. Vel semper et nulla interdum pellentesque at aliquam ipsum condimentum. Porta dolor sed ultrices donec mattis.

Sapien venenatis volutpat purus nisi. Scelerisque mauris aenean pharetra erat nibh velit elit. Arcu vitae et id volutpat in mauris enim malesuada. Bibendum magna sapien velit integer porttitor. Vel rhoncus arcu sed ultricies. Nisi placerat nisl eu vitae. Morbi lobortis ullamcorper auctor aliquam quam purus nec. Nulla nullam viverra malesuada ante neque felis in lacus. Eu risus pellentesque aliquam amet et hac. Enim ipsum morbi morbi pellentesque orci erat eget. Sed orci blandit sagittis nisl mauris nisl. Ut placerat faucibus risus dis vitae sem. Commodo quisque dignissim convallis diam urna aliquam. Ut nec erat vel varius turpis senectus purus.

Enim ut pellentesque sit enim. Mollis lacus justo justo at feugiat et. Enim pulvinar neque lorem tellus nunc eros id. Mattis nulla in nibh in vel auctor ac nulla diam. Arcu dolor cras nulla fermentum sed hendrerit est lorem eu. In porttitor mauris sit mauris lacinia dolor. Est faucibus turpis quisque amet. Molestie senectus pharetra turpis amet condimentum. Aenean ut nam enim amet amet sit curabitur scelerisque. Pellentesque mi phasellus mi tellus ullamcorper. Consequat nisl phasellus orci fermentum neque aliquam. Condimentum mauris vel porta fringilla in arcu mi proin mauris. Molestie tellus nullam etiam suscipit consectetur. Tempor eget duis tortor dolor montes natoque vestibulum quis. Lorem gravida non amet sed nunc urna massa.

Id blandit laoreet mauris nibh nunc aenean. Elementum ultricies vulputate et id vitae tristique egestas. Elementum etiam diam leo tempus ut sit mi. Proin eget eu interdum risus. Lectus aliquam nisi viverra molestie mollis. Id morbi nulla dignissim mi purus adipiscing quis. Nec eget at nulla viverra convallis urna at. A mollis pellentesque nibh pretium ornare risus arcu nisl dolor. Malesuada sed iaculis in odio pellentesque placerat eu. Gravida eu tellus sed amet condimentum eget arcu fringilla. Diam in euismod orci sit. Pellentesque nulla euismod quam eget elementum viverra. Proin dignissim maecenas ultrices justo pellentesque accumsan nisl. Porta justo maecenas neque viverra magna.

Urna justo arcu leo nulla velit condimentum. Ultricies neque pretium quisque sit vitae felis volutpat urna aliquet. Iaculis lacus diam sed platea morbi auctor sed cras. Habitasse lacus massa imperdiet sed nec habitant amet convallis. Commodo tristique sed faucibus netus. Volutpat lobortis at varius ac neque maecenas pellentesque.`,
  });

  const [otherReport, setOtherReport] = useState<OtherReport[]>([
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
      title={report.title}
      hero={{
        className: "h-[37vw]",
        display: (
          <Hero.BreadcumbDisplay
            path={[
              { name: "Beranda", href: route("home") },
              { name: "Laporan", href: route("reports") },
              "Rincian",
            ]}
            title={report.title}
          >
            <div className="flex gap-2 text-sm leading-6.25 text-white">
              <p>{report.partner.name}</p>
              <p>·</p>
              <p>Akhir: {format(report.date, "MMM d, y")}</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Badge text={report.sector} />
              <Badge text={report.program} />
            </div>
          </Hero.BreadcumbDisplay>
        ),
      }}
    >
      <section className="px-25 py-15 w-full flex justify-center">
        <div className="flex flex-col container gap-6">
          <Divider />
          <div className="w-full mb-12 h-80 bg-brand-gray-50 flex items-center justify-center overflow-hidden">
            <img
              src={`/images/partners/${report.partner.logo}`}
              alt={`logo ${report.partner.name}`}
            />
          </div>
          <div className="w-full flex flex-col gap-5">
            <h2 className="font-semibold text-2xl leading-7 text-brand-gray-900">
              Galeri
            </h2>
            <div className="w-full grid grid-cols-4 gap-4">
              {report.gallery.map((image, index) => (
                <img
                  key={index}
                  src={`/images/reports/${image}`}
                  className="w-full h-45.75 object-cover"
                />
              ))}
            </div>
            <div className="w-full flex gap-5">
              <div className="basis-1/3 flex flex-col gap-2 px-5 py-4 border-l-4 border-brand-primary-red-900 bg-brand-primary-red-50 rounded-lg">
                <h2 className="text-sm leading-5 text-brand-gray-900">
                  Realisasi
                </h2>
                <p className="font-semibold text-base leading-6 text-brand-gray-900">
                  {formatMoney(report.realization)}
                </p>
              </div>
              <div className="basis-1/3 flex flex-col gap-2 px-5 py-4 border-l-4 border-brand-primary-red-900 bg-brand-primary-red-50 rounded-lg">
                <h2 className="text-sm leading-5 text-brand-gray-900">
                  Nama Proyek
                </h2>
                <p className="font-semibold text-base leading-6 text-brand-gray-900">
                  {report.project.name}
                </p>
              </div>
              <div className="basis-1/3 flex flex-col gap-2 px-5 py-4 border-l-4 border-brand-primary-red-900 bg-brand-primary-red-50 rounded-lg">
                <h2 className="text-sm leading-5 text-brand-gray-900">
                  Kecamatan
                </h2>
                <p className="font-semibold text-base leading-6 text-brand-gray-900">
                  {report.project.district}
                </p>
              </div>
            </div>
            <div className="w-full flex flex-col gap-2">
              <h2 className="mb-1 font-semibold text-2xl leading-7 text-brand-gray-900">
                Rincian Laporan
              </h2>
              <Article
                content={report.description}
                classNames={{ p: "text-lg leading-7 text-brand-gray-900" }}
              />
            </div>
          </div>
        </div>
      </section>
      <section className="px-25 pt-15 pb-24 w-full flex justify-center">
        <div className="flex flex-col gap-16 container items-center">
          <div className="flex flex-col w-full">
            <Divider />
            <h2 className="font-bold text-4.5xl leading-12 text-base-black-pearl">
              Laporan Lainnya
            </h2>
          </div>
          <div className="grid grid-cols-4 gap-x-8 gap-y-16">
            {otherReport.map((report) => (
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
